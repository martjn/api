import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AuthContext } from "../helpers/AuthContext";
import CommentIcon from "@mui/icons-material/Comment";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const { authState } = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth");
    } else {
      axios
        .get("https://full-stack-api-pmvb.onrender.com/posts", {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          setListOfPosts(response.data.listOfPosts);
          setLikedPosts(
            response.data.likedPosts.map((value) => {
              return value.PostId;
            })
          );
          // Fetch comments only if listOfPosts is available
          if (response.data.listOfPosts.length !== 0) {
            const promises = response.data.listOfPosts.map((post) => {
              return axios
                .get(
                  `https://full-stack-api-pmvb.onrender.com/comments/${post.id}`
                )
                .then((response) => {
                  setCommentData((prevCommentData) => [
                    ...prevCommentData,
                    {
                      postId: post.id,
                      commentAmount: response.data.length,
                    },
                  ]);
                });
            });
          }
        });
    }
  }, []);

  const onLike = (postId) => {
    axios
      .post(
        "https://full-stack-api-pmvb.onrender.com/likes",
        { PostId: postId },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        setListOfPosts(
          listOfPosts.map((post) => {
            if (post.id === postId) {
              if (response.data.liked) {
                // we only care about the length of the array here
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                const likesArray = post.Likes;
                likesArray.pop();
                return { ...post, Likes: likesArray };
              }
            } else {
              return post;
            }
          })
        );
        if (likedPosts.includes(postId)) {
          //remove
          setLikedPosts(
            likedPosts.filter((id) => {
              return id !== postId;
            })
          );
        } else {
          //add to liked posts array
          setLikedPosts([...likedPosts, postId]);
        }
      });
  };

  return (
    <div className="flex flex-col items-center">
      {listOfPosts.map((value, key) => {
        return (
          <div
            key={key}
            className="p-4 w-1/2 border-b border-gray-300 rounded-lg bg-gray-900"
          >
            <div className="text-sm text-gray-400">{`@${value.username} · ${value.createdAt}`}</div>
            <div className="text-lg my-2 font-bold text-white rounded">
              {value.title}
            </div>
            <div className="text-gray-400 mb-2 text-sm whitespace-pre-line">
              {value.postText}
            </div>
            <div class="flex flex-row">
              <div class="flex flex-row text-white hover:text-orange-900 transition-all mr-3 bg-blue-gray-900 rounded-lg p-1">
                {likedPosts.includes(value.id) ? (
                  <FavoriteIcon
                    className="cursor-pointer"
                    onClick={() => {
                      onLike(value.id);
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="cursor-pointer"
                    onClick={() => {
                      onLike(value.id);
                    }}
                  />
                )}

                <label className="ml-1 text-md font-bold rounded-lg">
                  {value.Likes.length}
                </label>
              </div>

              <div class="flex flex-row text-white hover:text-orange-900 transition-all bg-blue-gray-900 rounded-lg p-1">
                <CommentIcon
                  className="cursor-pointer"
                  onClick={() => {
                    navigate(`/post/${value.id}`);
                  }}
                />
                <label className="ml-1 text-md font-bold rounded-lg">
                  {
                    commentData.find((comment) => comment.postId === value.id)
                      ?.commentAmount
                  }
                </label>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
