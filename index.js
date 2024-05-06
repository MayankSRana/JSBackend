require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

const githubData = {
  login: "MayankSRana",
  id: 114671295,
  node_id: "U_kgDOBtW-vw",
  avatar_url: "https://avatars.githubusercontent.com/u/114671295?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/MayankSRana",
  html_url: "https://github.com/MayankSRana",
  followers_url: "https://api.github.com/users/MayankSRana/followers",
  following_url:
    "https://api.github.com/users/MayankSRana/following{/other_user}",
  gists_url: "https://api.github.com/users/MayankSRana/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/MayankSRana/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/MayankSRana/subscriptions",
  organizations_url: "https://api.github.com/users/MayankSRana/orgs",
  repos_url: "https://api.github.com/users/MayankSRana/repos",
  events_url: "https://api.github.com/users/MayankSRana/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/MayankSRana/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 6,
  public_gists: 0,
  followers: 0,
  following: 2,
  created_at: "2022-09-29T13:13:31Z",
  updated_at: "2024-05-05T19:20:20Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("this is my login");
});

app.get("/signup", (req, res) => {
  res.send("this is my signup page");
});

app.get("/youtube", (req, res) => {
  res.send("<h1> This is you tube page </h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
