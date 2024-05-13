const express = require("express");
const {requireSignIn, isAdmin} = require("../middlewares/auth-middleware");
const { createLeaveRequest, getAllLeaveRequests, getStudentLeaveRequests, updateLeaveRequestStatus } = require("../controllers/leave-controller");


const router = express.Router();

// CREATE LEAVE REQUEST
router.route("/leave-request").post(requireSignIn,  createLeaveRequest);

// GET ALL REQUEST
router.route("/get-leave-request").get(requireSignIn,isAdmin, getAllLeaveRequests);

router.route("/myrequest").get(requireSignIn,  getStudentLeaveRequests)


// UPDATE REQUEST
router.route("/update-leave-request/:id").put(updateLeaveRequestStatus)

module.exports = router;