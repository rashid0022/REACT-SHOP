import { useState } from "react";

export default function ApplyLoan({ state, setState, showNotification }) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    // Validate Tanzania National ID
    const tnIdPattern = /^\d{20}$/;
    if (!tnIdPattern.test(data.nationalId)) {
      return showNotification("Invalid National ID. Must be exactly 20 digits.", "error");
    }

    // Validate Tanzania phone number (+255XXXXXXXXX)
    const phonePattern = /^\+255\d{9}$/;
    if (!phonePattern.test(data.phone)) {
      return showNotification("Invalid Tanzanian phone number. Must be in format +255XXXXXXXXX (10 digits after +255).", "error");
    }

    // Validate profile photo/passport
    const fileInput = e.target.profilePhoto.files[0];
    if (!fileInput) {
      return showNotification("Please upload a passport/photo.", "error");
    }

    const loanTypes = {
      home: { rate: 0.052, max: 500000, term: 36 },
      car: { rate: 0.045, max: 100000, term: 24 },
      education: { rate: 0.038, max: 200000, term: 48 },
      business: { rate: 0.065, max: 1000000, term: 60 },
    };

    const loanType = loanTypes[data.loanType];
    if (!loanType) return showNotification("Invalid loan type", "error");

    const requested = Number(data.requested);
    const approved = Math.min(requested, loanType.max);
    const interestTotal = approved * loanType.rate * (loanType.term / 12);
    const totalPayable = approved + interestTotal;
    const monthlyPayment = Math.round(totalPayable / loanType.term);

    const application = {
      id: Date.now().toString(),
      ...data,
      income: Number(data.income),
      requestedAmount: requested,
      approvedAmount: approved,
      interestRate: loanType.rate * 100 + "%",
      term: loanType.term,
      monthlyPayment,
      totalPayable,
      amountPaid: 0,
      remainingBalance: totalPayable,
      status: "pending",
      payments: [],
      profilePhoto: fileInput.name, // storing filename for now
    };

    setState(prev => ({
      ...prev,
      applications: [...prev.applications, application],
      users: { ...prev.users, [data.name]: data.password }
    }));

    showNotification("Application submitted successfully!", "success");
    e.target.reset();
    setPreview(null);
  };

  return (
    <div className="applicant-form">
      <h2>Loan Application Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" required />
        <input name="address" placeholder="Postal Address" required />
        <input
          type="text"
          name="nationalId"
          id="nationalId"
          placeholder="National ID (20 digits)"
          required
          maxLength="20"
          pattern="\d{20}"
          title="National ID must be exactly 20 digits"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number (+255XXXXXXXXX)"
          required
          pattern="\+255\d{9}"
          maxLength="13"
          title="Phone number must be in format +255XXXXXXXXX (10 digits after +255)"
        />
        
        <label>Upload Passport / Profile Photo:</label>
        <input type="file" name="profilePhoto" accept="image/*" onChange={handleFileChange} required />
        {preview && <img src={preview} alt="Preview" style={{ width: "100px", marginTop: "10px" }} />}
        
        <select name="loanType" required>
          <option value="">Select Loan Type</option>
          <option value="home">Home Loan</option>
          <option value="car">Car Loan</option>
          <option value="education">Education Loan</option>
          <option value="business">Business Loan</option>
        </select>
        <input type="number" name="requested" placeholder="Requested Loan Amount" required />
        <input type="number" name="income" placeholder="Monthly Income" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
