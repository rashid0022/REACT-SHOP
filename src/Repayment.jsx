import React, { useEffect, useState } from "react";
const Repayment = () => {
    const [loans, setLoans] = useState([]);
    const [amount, setAmount] = useState("");

    const fetchLoans = async () => {
        try {
            const res = await api.get("loans/");
            setLoans(res.data.filter(l => l.status === "approved"));
        } catch (err) {
            console.error(err);
        }
    };

    const handlePayment = async (loanId) => {
        try {
            await api.post("payments/", {
                loan: loanId,
                amount: parseFloat(amount)
            });
            setAmount("");
            fetchLoans();
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchLoans();
    }, []);

    return (
        <div className="repayment-box">
            <h2>Loan Repayment</h2>
            {loans.length === 0 && <p>No approved loans to pay</p>}
            {loans.map(loan => (
                <div key={loan.id} className="repayment-details">
                    <h3>{loan.loan_type} Loan</h3>
                    <p><strong>Remaining Balance:</strong> ${loan.remaining_balance}</p>
                    <input
                        type="number"
                        placeholder="Payment amount"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                    <button onClick={() => handlePayment(loan.id)}>Pay</button>
                </div>
            ))}
        </div>
    );
};

export default Repayment;
