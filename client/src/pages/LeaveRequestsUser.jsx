import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/auth';

const LeaveRequestsUser = () => {
  const [requests, setRequests] = useState([]);
  const [auth] = useAuth();

  const getData = async () => {
    try {
      if (!auth.token) {
        return; // Exit the function if token is not present
      }
  
      const config = {
        headers: {
          Authorization: `${auth.token}`
        }
      };
  
      console.log(config);
  
      const { data } = await axios.get("http://localhost:8000/api/student/myrequest", config);
      setRequests(data);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getData();
  }, [auth?.token]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '80vw' }}>
        <div className="card-header">
          <h1 className="card-title">My Leave Requests</h1>
        </div>
        <div className="card-body">
          {requests.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                <th>Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map(request => (
                  <tr key={request._id}>
                     <td>{auth.user.name}</td>
                    <td>{new Date(request.startDate).toLocaleDateString()}</td>
                    <td>{new Date(request.endDate).toLocaleDateString()}</td>
                    <td>{request.reason}</td>
                    <td style={{ color: request.status === 'pending' || request.status === 'rejected' ? 'red' : 'green' }}>
                      {request.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No leave requests found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaveRequestsUser;
