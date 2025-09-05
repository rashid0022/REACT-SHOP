import React, { useEffect, useState } from "react";

function isValidNationalId(id) {
  return /^\d{20}$/.test(id);
}

function isValidPhone(phone) {
  return /^\+255\d{9}$/.test(phone);
}

const AdminPanel = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const res = await api.get("loans/");
      setApplications(res.data.filter((app) => app.status === "pending"));
    } catch (err) {
      console.error(err);
    }
  };

  const handleApprove = async (id) => {
    try {
      await api.patch(`loans/${id}/`, { status: "approved" });
      fetchApplications();
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async (id) => {
    try {
      await api.patch(`loans/${id}/`, { status: "rejected" });
      fetchApplications();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="admin-box">
      <h2>Admin Panel</h2>
      {applications.length === 0 && <p>No pending applications</p>}
      {applications.map((app) => (
        <div key={app.id} className="contract-section">
          <h3>{app.loan_type} Loan</h3>
          <p>
            <strong>Name:</strong> {app.user.username}
          </p>
          <p>
            <strong>Requested Amount:</strong> ${app.requested_amount}
          </p>
          <div className="admin-actions">
            <button
              className="approve-btn"
              onClick={() => handleApprove(app.id)}
            >
              Approve
            </button>
            <button
              className="reject-btn"
              onClick={() => handleReject(app.id)}
            >
              Reject
            </button>
          </div>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Name</th>
                <th>National ID</th>
                <th>Phone Number</th>
                <th>Loan Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.name}</td>
                  <td>
                    {app.nationalId}{" "}
                    {isValidNationalId(app.nationalId) ? (
                      <span style={{ color: "green" }}>✅</span>
                    ) : (
                      <span style={{ color: "red" }}>❌</span>
                    )}
                  </td>
                  <td>
                    {app.phone}{" "}
                    {isValidPhone(app.phone) ? (
                      <span style={{ color: "green" }}>✅</span>
                    ) : (
                      <span style={{ color: "red" }}>❌</span>
                    )}
                  </td>
                  <td>{app.loanType}</td>
                  <td>{app.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
