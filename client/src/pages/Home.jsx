import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeartIcon from "../Components/Icons/HeartIcon";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  const onLike = (postId) => {
    axios
      .post(
        "http://localhost:3001/likes",
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
                return { ...post, Likes: [...post.Likes, 0] };
              }
              else{
                const likesArray = post.Likes
                likesArray.pop()
                return { ...post, Likes:  likesArray};
              }
            } else {
              return post;
            }
          })
        );
      });
  };

  return (
    <div className="flex flex-col items-center">
      {listOfPosts.map((value, key) => {
        return (
          <div
            key={key}
            className="p-4 w-1/2 shadow-lg my-5 hover:shadow-2xl hover:border-opacity-100 hover:border-2 rounded-lg"
          >
            <div
              className="my-2 p-2 font-bold bg-gray-800 text-blue-gray-200 rounded cursor-pointer"
              onClick={() => {
                navigate(`/post/${value.id}`);
              }}
            >
              {value.title}
            </div>
            <div
              className="border-2 border-violet-600 rounded p-2"
              onClick={() => {
                navigate(`/post/${value.id}`);
              }}
            >
              {value.postText}
            </div>
            <div className="text-sm">{`@${value.username}`}</div>
            <div>
              <button
                onClick={() => {
                  onLike(value.id);
                }}
                className="p-2 bg-blue-gray-500 rounded-lg"
              >
                <HeartIcon/>
              </button>
              <label className="ml-2 p-2 text-md font-bold bg-blue-gray-100 rounded-lg">{value.Likes.length}</label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
