const router = require("express").Router();
const Post = require("../../models/Post");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    console.log(postData);

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render("dashboard", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    console.log(postData);
    const post = postData.get({ plain: true });
    res.render("post", post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const postData = await Post.create({
      post_title: req.body.post_title,
      post_content: req.body.post_content,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
