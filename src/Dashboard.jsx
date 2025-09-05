import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [loans, setLoans] = useState([]);

    const fetchLoans = async () => {
        try {
            const res = await api.get("loans/");
            setLoans(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchLoans();
    }, []);

    return (
        <div className="dashboard-box">
            <h2>My Loans</h2>
            {loans.length === 0 && <p>No loans found</p>}
            {loans.map(loan => (
                <div key={loan.id} className="dashboard-card">
                    <h3>{loan.loan_type} Loan</h3>
                    <p><strong>Approved Amount:</strong> ${loan.approved_amount}</p>
                    <p><strong>Status:</strong> {loan.status}</p>
                    {loan.status === "approved" && <Link to="/repayment"><button>Make Payment</button></Link>}
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
