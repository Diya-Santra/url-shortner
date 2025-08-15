import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  if (!req.cookies.sessionId) {
    return res.redirect("/login");
  }
  return res.render("home", {
    url: null
  });
});
router.get("/login", (req, res) => {
  return res.render("login");
});
router.get("/register", (req, res) => {
  return res.render("register");
});
router.get("/:id", (req, res) => {
  if (!req.cookies.sessionId) {
    return res.redirect("/login");
  }

  if (!req.params.id) {
    return res.redirect("/");
  }

  if (req.params.id) {
    return res.redirect(`http://${req.get('host')}/url/${req.params.id}`);
  }

})





export default router;
