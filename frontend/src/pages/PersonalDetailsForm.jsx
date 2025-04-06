import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const PersonalDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    service: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_lidd5ro';
    const templateID = 'template_7rxvixp';
    const userID = 'JrsAzLLQ5XsR-bk7W';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert('Email sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', service: '' });
      })
      .catch((error) => console.log('Error sending email:', error));
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-200 pt-16'>
      <form onSubmit={handleSubmit} className='bg-blue-600 text-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Personal Details</h2>
        <label className='block mb-2'>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className='w-full p-2 mb-4 text-black rounded'/>
        
        <label className='block mb-2'>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className='w-full p-2 mb-4 text-black rounded'/>
        
        <label className='block mb-2'>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className='w-full p-2 mb-4 text-black rounded'/>
        
        <label className='block mb-2'>Phone Number:</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required className='w-full p-2 mb-4 text-black rounded'/>
        
        <label className='block mb-2'>Select Service:</label>
        <select name="service" value={formData.service} onChange={handleInputChange} required className='w-full p-2 mb-4 text-black rounded'>
          <option value="">-- Select a Service --</option>
          <option value="HapScale Product">HapScale Product</option>
          <option value="HapScale Tool">HapScale Services</option>

        </select>
        
        <button type="submit" className='w-full py-2 bg-white text-blue-600 font-bold rounded hover:bg-gray-200'>Submit</button>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
