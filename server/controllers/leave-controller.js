// leaveRequest.controller.js
const LeaveRequest = require('../models/leave-model');
const User = require('../models/user-model');

exports.createLeaveRequest = async (req, res) => {
  const { startDate, endDate, reason } = req.body;
  
  const userId = req.user._id; // Assuming user is authenticated and user ID is in req.user

  try {
    const user = await User.findById({_id: userId})
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    const newLeaveRequest = new LeaveRequest({ userId, name: user.name, startDate, endDate, reason });
    await newLeaveRequest.save();
    res.status(201).json(newLeaveRequest);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


// UPDATE LEAVE REQUEST

exports.updateLeaveRequestStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const leaveRequest = await LeaveRequest.findByIdAndUpdate(id, { status }, { new: true });
    if (!leaveRequest) {
      return res.status(404).json({ message: 'Leave request not found' });
    }
    res.json(leaveRequest);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};



// Get all leave requests
exports.getAllLeaveRequests = async (req, res) => {
  try {
    const leaveRequests = await LeaveRequest.find();
    res.json(leaveRequests);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};



exports.getStudentLeaveRequests = async (req, res) => {
  const userId = req.user._id; // Assuming user is authenticated and user ID is in req.user._id

  try {
      const leaveRequests = await LeaveRequest.find({ userId });
      res.json(leaveRequests);
     
  } catch (err) {
      res.status(500).json({ message: 'Server error' });
  }
};

