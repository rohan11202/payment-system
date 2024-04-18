const express = require("express");
const { signIn } = require("../controllers/user/signIn");
const { signUp } = require("../controllers/user/signUp");
const { authMiddleware } = require("../controllers/middleware");
const { updateUser } = require("../controllers/user/updateUser");
const { getUsers } = require("../controllers/user/getUsers");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

router.get("/bulk",getUsers);

router.put("/",authMiddleware,updateUser);

module.exports = router;
