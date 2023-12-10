require('dotenv').config()
const express = require('express')// (import express from "express") both are same
const app = express()
const githubData = {
  "login": "Chanda-Yadav",
  "id": 88459605,
  "node_id": "MDQ6VXNlcjg4NDU5NjA1",
  "avatar_url": "https://avatars.githubusercontent.com/u/88459605?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Chanda-Yadav",
  "html_url": "https://github.com/Chanda-Yadav",
  "followers_url": "https://api.github.com/users/Chanda-Yadav/followers",
  "following_url": "https://api.github.com/users/Chanda-Yadav/following{/other_user}",
  "gists_url": "https://api.github.com/users/Chanda-Yadav/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Chanda-Yadav/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Chanda-Yadav/subscriptions",
  "organizations_url": "https://api.github.com/users/Chanda-Yadav/orgs",
  "repos_url": "https://api.github.com/users/Chanda-Yadav/repos",
  "events_url": "https://api.github.com/users/Chanda-Yadav/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Chanda-Yadav/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Chanda Yadav",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Hello there!\r\nI'm Chanda Yadav, a pre-final year student, and a coding enthusiast exploring my potential in all interested areas.",
  "twitter_username": null,
  "public_repos": 17,
  "public_gists": 0,
  "followers": 23,
  "following": 22,
  "created_at": "2021-08-04T20:17:11Z",
  "updated_at": "2023-12-10T04:24:31Z"
  }
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
      res.send('Chanda Yadav')
    })

app.get('/login',(req,res)=>{
  res.send('<h1> Please login at chai aur code</h1>')
}) 

app.get('/youtube',(req,res)=>{
  res.send('<h2>Chai aur Code</h2>');
})


app.get('/github',(req,res)=>{
  res.json(githubData);
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})