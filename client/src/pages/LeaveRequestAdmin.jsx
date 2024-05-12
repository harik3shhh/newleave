import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/auth";

const LeaveRequestsAdmin = () => {
  const [requests, setRequests] = useState([]);
  const [auth] = useAuth();

  useEffect(() => {
    const fetchRequests = async () => {
      const config = {
        headers: {
          Authorization: `${auth.token}`
        }
      };

      console.log(config);

      try {
        const res = await axios.get(
          "http://localhost:8000/api/student/get-leave-request?status=pending",
          config
        );
        setRequests(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRequests();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(
        `http://localhost:8000/api/student/update-leave-request/${id}`,
        { status: "approved" }
      );
      setRequests(requests.filter((request) => request._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleReject = async (id) => {
    try {
      await axios.put(
        `http://localhost:8000/api/student/update-leave-request/${id}`,
        { status: "rejected" }
      );
      setRequests(requests.filter((request) => request._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div className="container mt-5">
      <div className="row">
        {requests.length > 0 ? (
          requests.map((request) => (
            <div key={request._id} className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">User ID: {request.userId}</h5>
                  <p className="card-text">Start Date: {request.startDate}</p>
                  <p className="card-text">End Date: {request.endDate}</p>
                  <p className="card-text">Reason: {request.reason}</p>
                  <button
                    className="btn btn-success mr-2"
                    onClick={() => handleApprove(request._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleReject(request._id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col">No leave requests</p>
        )}
      </div>
    </div>
  );
};

export default LeaveRequestsAdmin;
