const Repayment = ({ state, setState, showNotification }) => {
    const [paymentAmounts, setPaymentAmounts] = useState({});
    
    const loans = state.applications.filter(app => 
      app.status === "approved" && app.name === state.currentUser
    );

    const handleAmountChange = (loanId, amount) => {
        setPaymentAmounts(prev => ({
            ...prev,
            [loanId]: amount
        }));
    };

    const handlePayment = (loanId) => {
        const amount = paymentAmounts[loanId];
        
        if (!amount || amount <= 0) {
            showNotification("Please enter a valid amount", "error");
            return;
        }
        
        const paymentAmount = parseFloat(amount);
        const loan = loans.find(loan => loan.id === loanId);
        
        // Check if payment exceeds remaining balance
        if (paymentAmount > loan.remainingBalance) {
            showNotification(`Payment cannot exceed remaining balance of $${loan.remainingBalance}`, "error");
            return;
        }
        
        const updatedApplications = state.applications.map(loan => {
            if (loan.id === loanId) {
                const newBalance = loan.remainingBalance - paymentAmount;
                const newPayment = {
                    amount: paymentAmount,
                    date: new Date().toLocaleDateString(),
                    loanType: loan.loanType
                };
                
                return {
                    ...loan,
                    remainingBalance: newBalance,
                    amountPaid: loan.amountPaid + paymentAmount,
                    payments: [...(loan.payments || []), newPayment]
                };
            }
            return loan;
        });
        
        setState({ ...state, applications: updatedApplications });
        setPaymentAmounts(prev => ({ ...prev, [loanId]: "" }));
        showNotification(`Payment of $${paymentAmount} processed successfully!`, "success");
    };

    return (
        <div className="repayment-box">
            <h2>Loan Repayment</h2>
            {loans.length === 0 ? (
                <p>No approved loans to pay</p>
            ) : (
                loans.map(loan => (
                    <div key={loan.id} className="repayment-details">
                        <h3>{loan.loanType} Loan</h3>
                        <p><strong>Approved Amount:</strong> ${loan.approvedAmount}</p>
                        <p><strong>Remaining Balance:</strong> ${loan.remainingBalance}</p>
                        <p><strong>Monthly Payment:</strong> ${loan.monthlyPayment}</p>
                        
                        <input
                            type="number"
                            placeholder="Payment amount"
                            value={paymentAmounts[loan.id] || ""}
                            onChange={e => handleAmountChange(loan.id, e.target.value)}
                            min="1"
                            max={loan.remainingBalance}
                        />
                        
                        <button onClick={() => handlePayment(loan.id)}>
                            Pay
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};


export default Repayment;import React, { useState } from "react";