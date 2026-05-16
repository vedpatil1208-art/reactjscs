import { Calculator, Info, TrendingUp, Shield, Clock } from 'lucide-react';
import MortgageCalc from '../components/MortgageCalc';
import './CalculatorPage.css';

export default function CalculatorPage() {
  const tips = [
    { icon: <TrendingUp size={20} />, title: 'Fixed vs. Variable', desc: 'Fixed rates offer stability; variable rates may start lower but can fluctuate with market conditions.' },
    { icon: <Shield size={20} />, title: 'Down Payment', desc: 'A larger down payment (20%+) can help you avoid private mortgage insurance (PMI) and reduce monthly payments.' },
    { icon: <Clock size={20} />, title: 'Loan Terms', desc: '15-year terms have higher monthly payments but save significantly on total interest vs. 30-year terms.' },
    { icon: <Info size={20} />, title: 'Credit Score', desc: 'A higher credit score (740+) typically qualifies you for better interest rates and loan terms.' },
  ];

  return (
    <div className="calculator-page container" id="calculator-page">
      <div className="calc-page-header animate-fade-in-up">
        <h1 className="section-title">
          <Calculator size={28} style={{ display: 'inline', verticalAlign: 'middle' }} /> Mortgage Calculator
        </h1>
        <p className="section-subtitle">
          Estimate your monthly mortgage payments and explore amortization schedules
        </p>
      </div>

      <div className="calc-page-layout">
        <div className="calc-main animate-fade-in-up">
          <MortgageCalc />
        </div>

        <div className="calc-sidebar">
          <div className="tips-card glass-card animate-fade-in-up">
            <h3 className="tips-title">
              <Info size={18} />
              Mortgage Tips
            </h3>
            <div className="tips-list">
              {tips.map((tip) => (
                <div key={tip.title} className="tip-item">
                  <div className="tip-icon">{tip.icon}</div>
                  <div>
                    <h4 className="tip-heading">{tip.title}</h4>
                    <p className="tip-desc">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
