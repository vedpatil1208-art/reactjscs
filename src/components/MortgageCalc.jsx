import { useState } from 'react';
import { Calculator, DollarSign, Percent, Clock, PiggyBank, TrendingUp } from 'lucide-react';
import './MortgageCalc.css';

export default function MortgageCalc({ propertyPrice = 0 }) {
  const [values, setValues] = useState({
    homePrice: propertyPrice || 5000000,
    downPayment: 20,
    interestRate: 8.5,
    loanTerm: 20,
  });
  const [showSchedule, setShowSchedule] = useState(false);

  const update = (field, val) => setValues((prev) => ({ ...prev, [field]: parseFloat(val) || 0 }));

  const loanAmount = values.homePrice * (1 - values.downPayment / 100);
  const monthlyRate = values.interestRate / 100 / 12;
  const totalPayments = values.loanTerm * 12;

  let monthlyPayment = 0;
  if (monthlyRate > 0 && totalPayments > 0) {
    monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
  }

  const totalPaid = monthlyPayment * totalPayments;
  const totalInterest = totalPaid - loanAmount;
  const principalPercent = loanAmount > 0 ? (loanAmount / totalPaid * 100) : 0;
  const interestPercent = totalInterest > 0 ? (totalInterest / totalPaid * 100) : 0;

  // Generate amortization schedule
  const schedule = [];
  let balance = loanAmount;
  for (let i = 1; i <= Math.min(totalPayments, 360); i++) {
    const interestPay = balance * monthlyRate;
    const principalPay = monthlyPayment - interestPay;
    balance -= principalPay;
    if (i <= 12 || i % 12 === 0 || i === totalPayments) {
      schedule.push({
        month: i,
        payment: monthlyPayment,
        principal: principalPay,
        interest: interestPay,
        balance: Math.max(balance, 0),
      });
    }
  }

  const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN');

  return (
    <div className="mortgage-calc" id="mortgage-calculator">
      <div className="calc-inputs glass-card">
        <h3 className="calc-section-title">
          <Calculator size={20} />
          Loan Details
        </h3>
        <div className="calc-fields">
          <div className="calc-field">
            <label className="filter-label"><DollarSign size={14} /> Home Price</label>
            <input type="number" className="input-field" value={values.homePrice}
              onChange={(e) => update('homePrice', e.target.value)} id="calc-price" />
          </div>
          <div className="calc-field">
            <label className="filter-label"><Percent size={14} /> Down Payment (%)</label>
            <input type="number" className="input-field" value={values.downPayment} min="0" max="100" step="1"
              onChange={(e) => update('downPayment', e.target.value)} id="calc-down" />
          </div>
          <div className="calc-field">
            <label className="filter-label"><TrendingUp size={14} /> Interest Rate (%)</label>
            <input type="number" className="input-field" value={values.interestRate} min="0" max="30" step="0.1"
              onChange={(e) => update('interestRate', e.target.value)} id="calc-rate" />
          </div>
          <div className="calc-field">
            <label className="filter-label"><Clock size={14} /> Loan Term (years)</label>
            <select className="select-field" value={values.loanTerm}
              onChange={(e) => update('loanTerm', e.target.value)} id="calc-term">
              <option value={10}>10 years</option>
              <option value={15}>15 years</option>
              <option value={20}>20 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>
        </div>
      </div>

      <div className="calc-results glass-card">
        <h3 className="calc-section-title">
          <PiggyBank size={20} />
          Payment Breakdown
        </h3>
        <div className="monthly-payment">
          <span className="mp-label">Monthly Payment</span>
          <span className="mp-value">{fmt(monthlyPayment)}</span>
        </div>

        <div className="payment-bar">
          <div className="bar-principal" style={{ width: `${principalPercent}%` }} />
          <div className="bar-interest" style={{ width: `${interestPercent}%` }} />
        </div>
        <div className="bar-legend">
          <span className="legend-item"><span className="dot principal-dot" /> Principal</span>
          <span className="legend-item"><span className="dot interest-dot" /> Interest</span>
        </div>

        <div className="summary-grid">
          <div className="summary-item">
            <span className="si-label">Loan Amount</span>
            <span className="si-value">{fmt(loanAmount)}</span>
          </div>
          <div className="summary-item">
            <span className="si-label">Down Payment</span>
            <span className="si-value">{fmt(values.homePrice * values.downPayment / 100)}</span>
          </div>
          <div className="summary-item">
            <span className="si-label">Total Interest</span>
            <span className="si-value accent">{fmt(totalInterest)}</span>
          </div>
          <div className="summary-item">
            <span className="si-label">Total Paid</span>
            <span className="si-value">{fmt(totalPaid)}</span>
          </div>
        </div>

        <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => setShowSchedule(!showSchedule)} id="toggle-schedule">
          {showSchedule ? 'Hide' : 'Show'} Amortization Schedule
        </button>
      </div>

      {showSchedule && (
        <div className="amort-table glass-card animate-fade-in-up" id="amortization-schedule">
          <h3 className="calc-section-title">Amortization Schedule</h3>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Payment</th>
                  <th>Principal</th>
                  <th>Interest</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.month}>
                    <td>{row.month}</td>
                    <td>{fmt(row.payment)}</td>
                    <td>{fmt(row.principal)}</td>
                    <td>{fmt(row.interest)}</td>
                    <td>{fmt(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
