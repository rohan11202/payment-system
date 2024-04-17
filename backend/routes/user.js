const express = require("express");
const { signIn } = require("../controllers/signIn");
const { signUp } = require("../controllers/signUp");
const { authMiddleware } = require("../controllers/middleware");
const { updateUser } = require("../controllers/updateUser");
const { getUsers } = require("../controllers/getUsers");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

router.get("/bulk",getUsers);

router.put("/",authMiddleware,updateUser);

module.exports = router;
