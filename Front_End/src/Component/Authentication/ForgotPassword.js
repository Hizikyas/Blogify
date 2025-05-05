import React, { useState } from 'react';
import { Mail, KeyRound, Lock } from 'lucide-react';
import Stepper, { Step } from "../../UI/Stepper";
import pattern from "../../Asset/SVG/pattern.svg";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory() ;
  console.log(history)

  // Validation functions
  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isOtpValid = (otp) => {
    return otp.length === 6 && /^\d+$/.test(otp);
  };

  const isPasswordValid = () => {
    return newPassword.length >= 8 && newPassword === confirmPassword;
  };

  // Handle form submissions
  const handleEmailSubmit = () => {
    if (isEmailValid(email)) {
      // Here you would typically send the OTP to the email
      console.log('Sending OTP to:', email);
    }
  };

  const handleOtpSubmit = () => {
    if (isOtpValid(otp)) {
      // Here you would typically verify the OTP
      console.log('Verifying OTP:', otp);
    }
  };

  const handlePasswordReset = () => {
    if (isPasswordValid()) {
      // Here you would typically reset the password
      console.log('Resetting password');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-back-gradiant shadow-custom-light relative overflow-hidden"
      style={{ backgroundImage: `url(${pattern})` }}
    >

    <span className=" absolute top-[1rem] right-[1rem] z-10" >
          <button onClick = {() => history.goBack()} class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group" type="button" >
              <div class="bg-blue-900 rounded-xl h-12 w-1/4   flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"  >
                  <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="25px"
          width="25px"
        >
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#FFFFFF"
          ></path>
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#FFFFFF"
          ></path>
                  </svg>
              </div>
              <p class="translate-x-2">Go Back</p>
          </button>
    </span>

      <Stepper
        initialStep={1}
        nextButtonProps={(step) => ({
          disabled: 
            (step === 1 && !isEmailValid(email)) ||
            (step === 2 && !isOtpValid(otp)) ||
            (step === 3 && !isPasswordValid()),
          className: `duration-350 flex items-center justify-center rounded-full py-1.5 px-3.5 font-medium tracking-tight text-white transition transform hover:scale-[1.02] ${
            (step === 1 && !isEmailValid(email)) ||
            (step === 2 && !isOtpValid(otp)) ||
            (step === 3 && !isPasswordValid())
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600'
          }`
        })}
      >
        <Step>
          <div className="text-center mb-8">
            <Mail className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Forgot Password</h2>
            <p className="text-gray-300">Enter your email address to receive an OTP.</p>
          </div>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
            />
            {/* {email && !isEmailValid(email) && (
              <p className="text-red-400 text-sm">Please enter a valid email address</p>
            )} */}
            <button
              onClick={handleEmailSubmit}
              disabled={!isEmailValid(email)}
              className={`w-full py-3 rounded-lg font-semibold transition duration-200 transform hover:scale-[1.02] ${
                isEmailValid(email)
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                  : 'bg-gray-500 cursor-not-allowed text-gray-300'
              }`}
            >
              Send OTP
            </button>
          </div>
        </Step>

        <Step>
          <div className="text-center mb-8">
            <KeyRound className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Verify OTP</h2>
            <p className="text-gray-300">Enter OTP which has been sent to your email</p>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value.slice(0, 6))}
              className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
            />
            {/* {otp && !isOtpValid(otp) && (
              <p className="text-red-400 text-sm">Please enter a valid 6-digit OTP</p>
            )} */}
            <button
              onClick={handleOtpSubmit}
              disabled={!isOtpValid(otp)}
              className={`w-full py-3 rounded-lg font-semibold transition duration-200 transform hover:scale-[1.02] ${
                isOtpValid(otp)
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                  : 'bg-gray-500 cursor-not-allowed text-gray-300'
              }`}
            >
              Verify OTP
            </button>
          </div>
        </Step>

        <Step>
          <div className="text-center mb-8">
            <Lock className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Reset Password</h2>
            <p className="text-gray-300">Enter your new password and confirm it.</p>
          </div>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
            />
            {/* {(newPassword || confirmPassword) && !isPasswordValid() && (
              <p className="text-red-400 text-sm">
                {newPassword.length < 8
                  ? 'Password must be at least 8 characters long'
                  : newPassword !== confirmPassword
                  ? 'Passwords do not match'
                  : ''}
              </p>
            )} */}
            <button
              onClick={handlePasswordReset}
              disabled={!isPasswordValid()}
              className={`w-full py-3 rounded-lg font-semibold transition duration-200 transform hover:scale-[1.02] ${
                isPasswordValid()
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                  : 'bg-gray-500 cursor-not-allowed text-gray-300'
              }`}
            >
              Reset Password
            </button>
          </div>
        </Step>
      </Stepper>
    </div>
  );
}

export default App;