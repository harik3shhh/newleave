import React, { useState } from 'react';
import axios from 'axios';
import {toast} from "react-toastify"
import { useAuth } from '../context/auth';

const LeaveRequestForm = () => {
  const [auth] = useAuth();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config={
        headers: {
          Authorization: `${auth.token}`
        }
      };

      console.log(config);

      await axios.post('http://localhost:8000/api/student/leave-request',  { startDate, endDate, reason }, config);
      toast.success('Leave request submitted successfully');
      setStartDate("")
      setEndDate("")
      setReason("")
      // Add logic to redirect or show success message
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit leave request');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Leave Request Form
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" className="form-control" id="startDate" name="startDate" required
                  value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="endDate">End Date:</label>
                <input type="date" className="form-control" id="endDate" name="endDate" required
                  value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="reason">Reason:</label>
                <textarea className="form-control" id="reason" name="reason" rows="3" required
                  value={reason} onChange={(e) => setReason(e.target.value)}></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequestForm;
