import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App'

const Login = () => {
  const {Id_pass} = useContext(ContextApi)
  console.log(Id_pass)
  const Navigate = useNavigate()
  const [showError, setShowError] = useState(false)
  const [inputValue, setInputValue] = useState({
      email: '',
      password: ''
  })
  console.log(inputValue)
  const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.email === Id_pass.email && inputValue.password === Id_pass.password) {
          localStorage.setItem('auth', JSON.stringify(true))
          setShowError(false)
          Navigate('/')
          window.location.reload();
      }
      setShowError(true)
  }
  
  const changeEvent = (e) => {
      const { name, value } = e.target;
      setInputValue({ ...inputValue, [name]: value })
  }
  return (
    <div className='form-container' >
      <div className='logo'>
        <div>
          <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.00031C0 1.79117 1.79086 0.000305176 4 0.000305176H8.83769C17.2047 0.000305176 23.9875 6.71597 23.9875 15.0001C23.9875 23.2844 17.2047 30 8.83769 30H4C1.79086 30 0 28.2091 0 26V4.00031Z" fill="white" />
          </svg>
          <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.159912 29.9998C8.52234 29.9943 15.2997 23.2808 15.2997 14.9999C15.2997 6.71899 8.52234 0.0053875 0.159912 0C6.08508 2.45153 10.2487 8.24425 10.2487 14.9999C10.2487 21.7554 6.08508 27.5481 0.159912 29.9998Z" fill="white" fill-opacity="0.16" />
          </svg>
        </div>
        <h1>Demo</h1>
      </div>
      <form onSubmit={handleSubmit} >
        <div className='form-top'>
          <h2>Login</h2>
        </div>
        <div className='form-middle' >
          <div>
            <label>Email</label>
            <input onChange={changeEvent} name='email' type='email' />
          </div>
          <div>
            <label>Password</label>
            <input onChange={changeEvent} name='password' type='password' />
            <p hidden={!showError} >!Invalid email and password</p>
            <Link to='/forgot' >Forgot password</Link>
          </div>
          
        </div>
        <button>Login</button>
      </form>
    </div>

  )
}

export default Login