import { useState, useRef, useEffect } from 'react';
import { Shield, Phone, CheckCircle, ArrowRight, RefreshCw, Lock } from 'lucide-react';
import './OtpSystem.css';

export default function OtpSystem({ onVerified }) {
  const [step, setStep] = useState('phone'); // phone | otp | verified
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(0);
  const [error, setError] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const otpRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const id = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(id);
    }
  }, [timer]);

  const sendOtp = (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    setError('');
    const code = String(Math.floor(100000 + Math.random() * 900000));
    setGeneratedOtp(code);
    setStep('otp');
    setTimer(30);
    // Show OTP in a toast-like notification for demo purposes
    setTimeout(() => {
      alert(`Demo OTP: ${code}\n(In production, this would be sent via SMS)`);
    }, 500);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted.length === 6) {
      const newOtp = pasted.split('');
      setOtp(newOtp);
      otpRefs.current[5]?.focus();
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    const entered = otp.join('');
    if (entered.length < 6) {
      setError('Please enter the complete 6-digit OTP');
      return;
    }
    if (entered !== generatedOtp) {
      setError('Invalid OTP. Please try again.');
      setOtp(['', '', '', '', '', '']);
      otpRefs.current[0]?.focus();
      return;
    }
    setStep('verified');
    onVerified?.();
  };

  const resendOtp = () => {
    const code = String(Math.floor(100000 + Math.random() * 900000));
    setGeneratedOtp(code);
    setOtp(['', '', '', '', '', '']);
    setTimer(30);
    setError('');
    alert(`New Demo OTP: ${code}`);
    otpRefs.current[0]?.focus();
  };

  if (step === 'verified') {
    return (
      <div className="otp-container glass-card" id="otp-verified">
        <div className="otp-success">
          <div className="otp-success-icon">
            <CheckCircle size={40} />
          </div>
          <h3>Verified Successfully!</h3>
          <p>Your phone number has been verified. You can now contact the agent directly.</p>
          <div className="verified-phone">
            <Phone size={14} />
            <span>+91 {phone}</span>
            <CheckCircle size={14} className="verified-check" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="otp-container glass-card" id="otp-system">
      <div className="otp-header">
        <div className="otp-shield">
          <Shield size={24} />
        </div>
        <h3 className="otp-title">
          {step === 'phone' ? 'Verify Your Number' : 'Enter OTP'}
        </h3>
        <p className="otp-subtitle">
          {step === 'phone'
            ? 'Verify your phone to contact the property agent'
            : `We sent a 6-digit code to +91 ${phone}`}
        </p>
      </div>

      {step === 'phone' ? (
        <form className="otp-phone-form" onSubmit={sendOtp}>
          <div className="phone-input-group">
            <span className="phone-prefix">+91</span>
            <input
              type="tel"
              className="phone-input"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value.replace(/\D/g, '').slice(0, 10));
                setError('');
              }}
              maxLength={10}
              id="phone-input"
            />
          </div>
          {error && <p className="otp-error">{error}</p>}
          <button type="submit" className="btn btn-primary otp-submit" id="send-otp">
            Send OTP
            <ArrowRight size={16} />
          </button>
          <p className="otp-disclaimer">
            <Lock size={12} />
            Your number is encrypted and never shared
          </p>
        </form>
      ) : (
        <form className="otp-code-form" onSubmit={verifyOtp}>
          <div className="otp-inputs" onPaste={handlePaste}>
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (otpRefs.current[i] = el)}
                type="text"
                inputMode="numeric"
                className={`otp-digit ${digit ? 'filled' : ''} ${error ? 'error' : ''}`}
                value={digit}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                maxLength={1}
                autoFocus={i === 0}
                id={`otp-digit-${i}`}
              />
            ))}
          </div>
          {error && <p className="otp-error">{error}</p>}
          <button type="submit" className="btn btn-primary otp-submit" id="verify-otp">
            Verify OTP
            <CheckCircle size={16} />
          </button>
          <div className="otp-resend">
            {timer > 0 ? (
              <span className="resend-timer">Resend in {timer}s</span>
            ) : (
              <button type="button" className="resend-btn" onClick={resendOtp} id="resend-otp">
                <RefreshCw size={14} />
                Resend OTP
              </button>
            )}
          </div>
          <button type="button" className="change-number-btn" onClick={() => { setStep('phone'); setOtp(['','','','','','']); setError(''); }}>
            Change phone number
          </button>
        </form>
      )}
    </div>
  );
}
