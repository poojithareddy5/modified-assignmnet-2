import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PasswordReset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = () => {
    if (email) {
      setMessage('');
      setShow(true)
    } else {
      setMessage('email required*');
    }

  };

  const handleOtpVerify = () => {
    navigate('/login')
  }

  return (
    <div className='form-container forgot_con' >
      <div hidden={show} >
        <div className='login-header' >
          <h2>Email</h2>
          <input autoFocus type="email" required placeholder='Email' value={email} onChange={handleEmailChange} />
        </div>
        <p>{message}</p>
        <button type="button" onClick={handleSendOtp}>
          Send OTP
        </button>
      </div>
      <div hidden={!show} >
        <div className='login-header' >
          <h2>OTP</h2>
          <span className='otp' >OTP Sent to email ✅</span>
        </div>
        <button type='button' onClick={handleOtpVerify} >Done</button>
      </div>
    </div>
  )
}

export default PasswordReset