// LoginQRForm.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import QRCode from 'react-qr-code';
import './Login.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [qrCodeDataURL, setQrCodeDataURL] = useState('');

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  
    // Store user data in an object
    const userData = {
      username: watch('username'),
      email: watch('email'),
      company: watch('company'),
      department: watch('department'),
    };
  
    // Convert user data to a JSON string and encode it to base64
    const qrCodeDataUrl = (JSON.stringify(userData));
  
    // Set the data URL in state
    setQrCodeDataURL(qrCodeDataUrl);
  };
  

  const handleInputChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  const downloadQRCode = () => {
    // Create or reuse a virtual anchor element
    let anchor = document.getElementById('downloadAnchor');
    
    if (!anchor) {
      anchor = document.createElement('a');
      anchor.id = 'downloadAnchor';
      document.body.appendChild(anchor);
    }
  
    // Set the href attribute to the QR code data URL
    anchor.href = qrCodeDataURL;
  
    // Set the download attribute to specify the filename
    anchor.download = 'qrcode.jpeg';
  
    // Trigger a click event on the anchor to start the download
    anchor.click();
  };
  

  return (
    <div>
      <div className="header">
        <h3>Register Here....</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="container">
        {/* Image input (uncomment if needed) */}
        {/* <div className="inputs">
          <input
            type="file"
            id="image"
            name="image"
            {...register('image', { required: 'Image is required' })}
            onChange={handleInputChange}
          />
          {errors.image && <p>{errors.image.message}</p>}
        </div> */}

        {/* Username input */}
        <div className="inputs">
          <input
            type="text"
            id="username"
            name="username"
            {...register('username', { required: 'Username is required' })}
            onChange={handleInputChange}
            placeholder="Username"
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        {/* Email input */}
        <div className="inputs">
          <input
            type="email"
            id="email"
            name="email"
            {...register('email', { required: 'Email is required' })}
            onChange={handleInputChange}
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Company input */}
        <div className="inputs">
          <input
            type="text"
            id="company"
            name="company"
            {...register('company', { required: 'Company is required' })}
            onChange={handleInputChange}
            placeholder="Company"
          />
          {errors.company && <p>{errors.company.message}</p>}
        </div>

        {/* Department input */}
        <div className="inputs">
          <input
            type="text"
            id="department"
            name="department"
            {...register('department', { required: 'Department is required' })}
            onChange={handleInputChange}
            placeholder="Department"
          />
          {errors.department && <p>{errors.department.message}</p>}
        </div>

        <br />

        <div className="submit-container">
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>

      {qrCodeDataURL && (
        <div className="input">
          <QRCode className="inpute" value={qrCodeDataURL} /><br />
          <div className="submit-container">
            <button className="submit" onClick={downloadQRCode}>
              Download QR Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
