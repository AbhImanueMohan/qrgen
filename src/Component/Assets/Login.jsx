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

    // Generate QR code as data URL
    const qrCodeDataUrl = `data:image/png;base64,${btoa(
      `image: ${watch('image')},username: ${watch('username')}, email: ${watch(
        'email'
      )}, company: ${watch('company')}, department: ${watch('department')}`
    )}`;

    // Set the data URL in state
    setQrCodeDataURL(qrCodeDataUrl);
  };

  const handleInputChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  const downloadQRCode = () => {
    // Create a virtual anchor element
    const anchor = document.createElement('a');

    // Set the href attribute to the QR code data URL
    anchor.href = qrCodeDataURL;

    // Set the download attribute to specify the filename
    anchor.download = 'qrcode.png';

    // Append the anchor to the document
    document.body.appendChild(anchor);

    // Trigger a click event on the anchor to start the download
    anchor.click();

    // Remove the anchor from the document
    document.body.removeChild(anchor);
  };

  return (
    <div>
      <div className="header">
        <h3>Register Here....</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="container">
    
        <div className="inputs">
        <input
          type="text"
          id="username"
          name="username"
          {...register('username', { required: 'Username is required' })}
          onChange={handleInputChange}
          placeholder='Username'
        />
        {errors.username && <p>{errors.username.message}</p>}
        </div>
        
        <div className="inputs">
        <input
          type="email"
          id="email"
          name="email"
          {...register('email', { required: 'Email is required' })}
          onChange={handleInputChange}
          placeholder='Email'
        />
        {errors.email && <p>{errors.email.message}</p>}

</div>

<div className="inputs">
        <input
          type="text"
          id="company"
          name="company"
          {...register('company', { required: 'Company is required' })}
          onChange={handleInputChange}
          placeholder='Company'
        />
        {errors.company && <p>{errors.company.message}</p>}
        

</div>

<div className="inputs">

        <input
          type="department"
          id="department"
          name="department"
          {...register('department', { required: 'Department is required' })}
          onChange={handleInputChange}
          placeholder='Department'
        />
        {errors.department && <p>{errors.department.message}</p>}

</div><br />

        <br />
        <div className="submit-container">
        <button className='submit' type="submit">Submit</button>
        </div>
      </form>

      {qrCodeDataURL && (
        <div className="input">
          <QRCode className="inpute" value={qrCodeDataURL} />
          <div className="submit-container">
          <button className='submit' onClick={downloadQRCode}>Download QR Code</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;




// // LoginQRForm.js
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import QRCode from 'react-qr-code';
// import "./Login.css"

// const Login = () => {
//   const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     // Handle form submission logic here
//     console.log(data);
//   };

//   const handleInputChange = (e) => {
//     setValue(e.target.name, e.target.value);
//   };

//   return (
//     <div>
//       <div className="header">
//         <h3>Register Here....</h3>
//       </div>
      
//       <form onSubmit={handleSubmit(onSubmit)} className='container'>
// <div className="inputs">
//         <input
//           type="file"
//           id="image"
//           name="image"
//           {...register('image', { required: 'Image is required' })}
//           onChange={handleInputChange}
//         />
//         {errors.image && <p>{errors.image.message}</p>}
//         </div>

//         <div className="inputs">
//         <input
//           type="text"
//           id="username"
//           name="username"
//           {...register('username', { required: 'Username is required' })}
//           onChange={handleInputChange}
//           placeholder='Username'
//         />
//         {errors.username && <p>{errors.username.message}</p>}
//         </div>
        
//         <div className="inputs">
//         <input
//           type="email"
//           id="email"
//           name="email"
//           {...register('email', { required: 'Email is required' })}
//           onChange={handleInputChange}
//           placeholder='Email'
//         />
//         {errors.email && <p>{errors.email.message}</p>}

// </div>

// <div className="inputs">
//         <input
//           type="text"
//           id="company"
//           name="company"
//           {...register('company', { required: 'Company is required' })}
//           onChange={handleInputChange}
//           placeholder='Company'
//         />
//         {errors.company && <p>{errors.company.message}</p>}
        

// </div>

// <div className="inputs">

//         <input
//           type="department"
//           id="department"
//           name="department"
//           {...register('department', { required: 'Department is required' })}
//           onChange={handleInputChange}
//           placeholder='Department'
//         />
//         {errors.department && <p>{errors.department.message}</p>}

// </div><br />

//       </form>

//       <div className='input'>
//         <QRCode  className='inpute' value={`image: ${watch('image')},username: ${watch('username')}, email: ${watch('email')}, company: ${watch('company')}, department: ${watch('department')}`} />
//       </div>
//     </div>
//   );
// };

// export default Login;