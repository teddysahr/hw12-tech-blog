const router = require("express").Router();
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    console.log(userData);

    const users = userData.map((user) => user.get({ plain: true }));

    console.log(users);

    res.render("signup", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id);
//     console.log(postData);
//     const post = postData.get({ plain: true });
//     res.render("post", post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!userData) {
      res.status(400).json("user not found");
    }
    const checkedPassword = userData.validatePassword(req.body.password);

    if (!checkedPassword) {
      res.status(400).json("login failed");
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
