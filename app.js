//pdfkit
//a command-line application that 
//dynamically generates a PDF profile from a GitHub username node app
//looking for 
// Profile image
    //owner.avatar_url
// user name
    //owner.login
// Links to the following:
  // User location via Google Maps
  // User GitHub profile
  // User blog
// User bio
// Number of public repositories
// Number of followers
    //owner.followers_url
// Number of GitHub stars
// Number of users following
    //owner.following_url

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer.prompt([
    {message: "Enter your GitHub username:", name: "username", type: "input"},
    {message: "what is ur fav color", name: "color", type: "input"},
])
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl)
    .then(function(res) {
      console.log(res)
      // const repoNames = res.data.map(function(repo) {
      //   return repo.name;
      // });

     // const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

       // console.log(`Saved ${repoNames.length} repos`);
       // console.log(res.data.owner.following_url)
      });
    });
  });
