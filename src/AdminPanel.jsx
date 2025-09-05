import React, { useEffect, useState } from "react";
const AdminPanel = ({ state, setState, showNotification }) => {
  const [applications, setApplications] = useState([]);

  // Replace API calls with state operations
  const fetchApplications = () => {
    setApplications(state.applications.filter(app => app.status === "pending"));
  };

  const handleApprove = async (id) => {
    try {
      const updatedApplications = state.applications.map(app => 
        app.id === id ? { ...app, status: "approved" } : app
      );
      setState({ ...state, applications: updatedApplications });
      fetchApplications();
      showNotification("Application approved!", "success");
    } catch (err) {
      console.error(err);
      showNotification("Error approving application", "error");
    }
  };

  const handleReject = async (id) => {
    try {
      const updatedApplications = state.applications.map(app => 
        app.id === id ? { ...app, status: "rejected" } : app
      );
      setState({ ...state, applications: updatedApplications });
      fetchApplications();
      showNotification("Application rejected!", "success");
    } catch (err) {
      console.error(err);
      showNotification("Error rejecting application", "error");
    }
  };

    useEffect(() => {
        fetchApplications();
    }, []);

    return (
        <div className="admin-box">
            <h2>Admin Panel</h2>
            {applications.length === 0 && <p>No pending applications</p>}
            {applications.map(app => (
                <div key={app.id} className="contract-section">
                    <h3>{app.loan_type} Loan</h3>
                    <p><strong>Name:</strong> {app.user.username}</p>
                    <p><strong>Requested Amount:</strong> ${app.requested_amount}</p>
                    <div className="admin-actions">
                        <button className="approve-btn" onClick={() => handleApprove(app.id)}>Approve</button>
                        <button className="reject-btn" onClick={() => handleReject(app.id)}>Reject</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminPanel;
