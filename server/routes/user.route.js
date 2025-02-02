import express from "express"
import { login, register,logout,getUserProfile, updateProfile } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"
import upload from "../utils/multer.js";
const router=express.Router()
router.route("/signup").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout);
router.route("/profile").get(isAuthenticated, getUserProfile);
router.route("/profile/update").put(isAuthenticated, upload.single("profilePhoto"), updateProfile);
export default router;
