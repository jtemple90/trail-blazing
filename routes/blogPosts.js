const router = require("express").Router();
const ctrl = require("../controllers");

// Origin /blogPosts

router.get("/", ctrl.blogPosts.index);
router.get("/:id", ctrl.blogPosts.show);
router.post("/", ctrl.blogPosts.create);
router.put("/:id", ctrl.blogPosts.update);
router.delete("/:id", ctrl.blogPosts.destroy);

module.exports = router;
