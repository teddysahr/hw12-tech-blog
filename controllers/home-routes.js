const router = require("express").Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    console.log(postData);

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render("home", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
