const express = require("express");
const router = express.Router();
const {
  registration,
  profileUpdate,
  login,
  profileDetails, RecoverVerifyEmail, recoverOTPVerify, RecoverResetPassword
} = require("../controllers/userController");
const {
  createTask,
  deleteTask,
  updateTask,
  taskSelectByStatus,
  taskStatusCount,
} = require("../controllers/tasksController");
const authMiddleware = require("../middleware/authVerifyMiddleware");
router.post("/registration", registration);
router.post("/login", login);
router.post("/profileUpdate", authMiddleware, profileUpdate);
router.get("/RecoverVerifyEmail/:email", RecoverVerifyEmail)
router.get("/RecoverVerifyOTP/:email/:otp", recoverOTPVerify)
router.post("/RecoverResetPassword", RecoverResetPassword)




//task routes
router.post("/createTask", authMiddleware, createTask);
router.delete("/deleteTask/:id", authMiddleware, deleteTask);
router.get("/updateTask/:id/:status", authMiddleware, updateTask);
router.get("/listTaskbyStatus/:status", authMiddleware, taskSelectByStatus);
router.get("/taskStatusCount", authMiddleware, taskStatusCount);
router.get("/profileDetails", authMiddleware, profileDetails);

module.exports = router;
