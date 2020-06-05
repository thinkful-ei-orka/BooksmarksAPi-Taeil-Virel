const { v4: uuid } = require('uuid');
const bookmarksRouter = require('express').Router();

const bookmarks = [
    {
        id: "1",
        title: "Yahoo",
        url: "https://www.yahoo.com",
        desc: "lorem ipsum",
        rating: 5
    }
]

bookmarksRouter
    .route('/bookmarks')
    .get((req,res)=>{
        res.json(bookmarks);
    })
    .post((req,res)=>{

    })

module.exports = bookmarksRouter;