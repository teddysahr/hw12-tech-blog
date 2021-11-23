// const router = require("express").Router();
// const Comment = require("../../models/Comment");

// router.get("/", async (req, res) => {
//   try {
//     const commentData = await Comment.findAll();
//     console.log(commentData);

//     const comments = commentData.map((comment) => comment.get({ plain: true }));

//     console.log(comments);

//     res.render("all", { comments });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const commentData = await Comment.findByPk(req.params.id);
//     console.log(commentData);
//     const comment = commentData.get({ plain: true });
//     res.render("comment", comment);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const commentData = await Comment.create({
//       comment_content: req.body.comment_content,
//     });
//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// module.exports = router;
