<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/martjn/postit">
    <img src="client/public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">postit</h3>

  <p align="center">
    This is a basic social platform with a clean design, authentication, and personalized content. The client uses a separately built and hosted api to manage the logic behind the scenes safely and fast.
    <br />
    <a href="https://github.com/martjn/postit"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/martjn/postit">View Demo</a>
    ·
    <a href="https://github.com/martjn/postit/issues">Report Bug</a>
    ·
    <a href="https://github.com/martjn/postit/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

### Built With

- [![JavaScript][JavaScript]][JavaScript-url]
- [![NodeJS][NodeJS]][NodeJS-url]
- [![React][React.js]][React-url]
- [![Sequelize][Sequelize]][Sequelize-url]
- [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
- [![MySQL][MySQL]][MySQL-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/martjn/postit.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a local instance of your database
4. Create .env file inside the server directory with the following
   ```js
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   DB_DATABASE=your_database_name
   DB_HOST=localhost // default
   DB_DIALECT=your_database_dialect // ex. mysql  whichever SQL language you use.
   DB_PORT=your_port // custom port that differs from your client/frontend port
   ```
5. Inside your server directory, start the server
  ```sh
  npm start
  ```

Try blasting the server with information using postman for example

Api docs available at: https://full-stack-api-pmvb.onrender.com/api-docs/

For ex. To get all posts, use ``http://localhost:your_port/posts`` endpoint

!important: if you want to use endpoints that CRUD your data in any way (without a client), you need a valid generated webtoken. Create one by registering user via ``auth/auth`` endpoint, and then logging in using ``auth/login`` endpoint


(Optional)

If you wish to also use the postit client, do the following:

1. Move to your client directory via console
2. Start the client
  ```sh
  npm start
  ```
  It should take a few minutes to compile. And that's it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Martin Toming - [@marttintom](https://twitter.com/marttintom) - mingdev77@gmail.com

Project Link: [https://github.com/martjn/postit](https://github.com/martjn/postit)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/martjn/postit.svg?style=for-the-badge
[contributors-url]: https://github.com/martjn/postit/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/martjn/postit.svg?style=for-the-badge
[forks-url]: https://github.com/martjn/postit/network/members
[stars-shield]: https://img.shields.io/github/stars/martjn/postit.svg?style=for-the-badge
[stars-url]: https://github.com/martjn/postit/stargazers
[issues-shield]: https://img.shields.io/github/issues/martjn/postit.svg?style=for-the-badge
[issues-url]: https://github.com/martjn/postit/issues
[license-shield]: https://img.shields.io/github/license/martjn/postit.svg?style=for-the-badge
[license-url]: https://github.com/martjn/postit/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/martin-toming-a39001273
[product-screenshot]: client/public/postit.jpg
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com

[TailwindCSS]: https://img.shields.io/badge/tailwindcss-0F172A?style=for-the-badge&logo=tailwindcss
[TailwindCSS-url]: https://tailwindcss.com/

[NodeJS]: https://img.shields.io/badge/node.js-002200?style=for-the-badge&logo=node.js
[NodeJS-url]: https://nodejs.org/en

[MySQL]: https://shields.io/badge/MySQL-lightgrey?logo=mysql&style=for-the-badge&logoColor=white&labelColor=blue
[MySQL-url]: https://www.mysql.com/

[Sequelize]: https://img.shields.io/badge/-Sequelize-52B0E7?style=for-the-badge&logo=sequelize&labelColor=52B0E7&logoColor=FFF
[Sequelize-url]: https://sequelize.org/

[JavaScript]: https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=for-the-badge
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
