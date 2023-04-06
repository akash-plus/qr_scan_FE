import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KYCPage.css';

function KYCPage() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    user: {
      username: '',
      email: ''
    },
    nominee_name: "",
    nominee_phone_number: '',
    nominee_address: '',
    date_of_birth_nominee: "",
    nominee_city: "",
    pan_number: '',
    aadhar_number: '',
    phone_number: '',
    address: '',
    date_of_birth: "2020-12-1",
    email: '',
    signed_up_by: '',
    account_belongs_to: 1,
  });

  const [selectedDate, setSelectedDate] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    if (name.startsWith('user.')) {
      const userKey = name.split('.')[1];
      setFormValues((prevValues) => ({
        ...prevValues,
        user: { ...prevValues.user, [userKey]: value },
      }));
    } else {
      setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const handleDateChange = (event) => {
    const { value } = event.target;
    setSelectedDate(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://sapi.getplus.in/api/v1/profile/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });

    if (response.status === 201) {
      navigate('/savings-scheme');
    } else {
      console.error('Error submitting form', response.body);
    }
  };

  return (
    <div>
      <header className="header">Header</header>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="user.username"
            value={formValues.user.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="user.email"
            value={formValues.user.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Nominee Name:
          <input
            type="text"
            name="nominee_name"
            value={formValues.nominee_name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Nominee Phone Number:
          <input
            type="tel"
            name="nominee_phone_number"
            value={formValues.nominee_phone_number}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Nominee Address:
          <input
            type="text"
            name="nominee_address"
            value={formValues.nominee_address}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date of birth Nominee:
          <input
            type="date"
            name="nominee_dob"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </label>
        <label>
          Nominee City:
          <input
            type="text"
            name="nominee_city"
            value={formValues.nominee_city}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          PAN Number:
          <input
            type="text"
            name="pan_number"
            value={formValues.pan_number}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Aadhar Number:
          <input
            type="text"
            name="aadhar_number"
            value={formValues.aadhar_number}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone_number"
            value={formValues.phone_number}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formValues.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date of birth:
          <input
            type="date"
            name="dob"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Signed Up By:
          <input
            type="text"
            name="signed_up_by"
            value={formValues.signed_up_by}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Account belongs to:
          <input
            type="text"
            name="account_belongs_to"
            value={formValues.account_belongs_to}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Continue Now</button>
      </form>
    </div>
  );
}

export default KYCPage
