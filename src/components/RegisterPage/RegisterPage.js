import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./RegisterPage.css";

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState('');
  // const [showPopup, setShowPopup] = useState(false);

  const minSchemeAmount = sessionStorage.getItem('minAmount');
  const perMonthInstallment = sessionStorage.getItem('per_month_installment');
  const durationOfPlan = sessionStorage.getItem('duration_of_plan');
  const firstInstallmentDiscount = sessionStorage.getItem('first_installment_discount');
  const lastInstallmentDiscount = sessionStorage.getItem('last_installment_discount');

  const [isProcessing, setIsProcessing] = useState(false);
  const [authLink, setAuthLink] = useState(null);

  const plan_id = sessionStorage.getItem('chosen_plan_id');
  const auth_amount = sessionStorage.getItem('auth_amount');
  console.log("Entered the register page: ");
  console.log("Chosen plan id on the Register page is :" + sessionStorage.getItem('chosen_plan_id'));

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
    // date_of_birth: "",
    // email: '',
    signed_up_by: '',
    account_belongs_to: 1,
  });

  const [selectedDate, setSelectedDate] = useState('');

  // let yourDate = selectedDate
  // setSelectedDate(yourDate.toISOString().split('T')[0]);

  const handleDateChange = (event) => {
    const { value } = event.target;
    setSelectedDate(value);
    console.log(selectedDate);
  };

  // console.log("Minimum scheme amount" + sessionStorage.getItem('minAmount'));
  //       console.log("Plan duration" + sessionStorage.getItem('duration_of_plan'));
  //       console.log(sessionStorage.getItem('first_installment_discount'));

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    sessionStorage.setItem('customer_name', formValues.user.username);
    sessionStorage.setItem('customer_email', formValues.user.email);
    sessionStorage.setItem('customer_phone', formValues.phone_number);
    setIsProcessing(true);
  
    try {
      const response = await fetch('https://sapi.getplus.in/api/v1/profile/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
  
      if (response.status === 201) {
        console.log("User created");
        console.log(response.body);
  
        const planId = sessionStorage.getItem("chosen_plan_id");
        const customerEmail = formValues.user.email;
        const customerPhone = formValues.phone_number;
        const authAmountString = sessionStorage.getItem("auth_amount");
        const authAmount = parseFloat(authAmountString);
  
        const data = {
          "plan_id": planId,
          "customer_email": customerEmail,
          "customer_phone": customerPhone,
          "auth_amount": authAmount
        };
  
        const paymentResponse = await fetch('https://sapi.getplus.in/api/v1/payment/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const paymentData = await paymentResponse.json();
  
        if (paymentData.message && paymentData.message.status === 'OK') {
          setAuthLink(paymentData.message.authLink);
        } else {
          console.error('Error submitting payment form', paymentData.message);
        }
      } else {
        console.error('Error submitting form', response.body);
      }
    } catch (error) {
      console.error('Error submitting form', error);
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (authLink) {
      window.location.href = authLink;
    }
  }, [authLink]);

  console.log("planId " + sessionStorage.getItem("chosen_plan_id"));
    console.log("customerEmail " + sessionStorage.getItem("customer_email"));
    console.log("customerPhone " + sessionStorage.getItem("customer_phone"));
    console.log("authAmount " + sessionStorage.getItem("auth_amount"));

  return (
    <div>
      <header className="header-wrapper">
        <div>
          <h1>
            <span 
              class="brand_names" 
              >+
            </span>Plus | <span class="brand_names2" 
           
          >Your Logo </span>
          </h1>
        </div>
        <div>
        </div>
        <div>
          <span className="scheme-name">Register</span>
         
          <a className='visit-link' href='#'  rel='noreferrer' 
          
        >Help & Support</a>
        </div>
      </header>
      <div className="padding"></div>
      <div className="form-container">
       
        <form onSubmit={handleSubmit}>
        <p>Scheme Chosen : {durationOfPlan} scheme</p>
        <p>Scheme Tenure : {durationOfPlan}</p>
        <p>Installment: {perMonthInstallment}</p>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="user.username"
              value={formValues.user.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="user.email"
              value={formValues.user.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone_number"
              value={formValues.phone_number}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="dob">DOB:</label>
            <input
              type="date"
              name="dob"
              value={selectedDate}
              onChange={handleDateChange}
              required
            />
          </div> */}
          <button type="submit" className="continue-button">
          {isProcessing ? 'Loading...' : 'Continue'}
          </button>
        </form>
      </div>
      {/* {showPopup && (
        <div className="popup">
          <p className="popup-text">Want to complete KYC now?</p>
          <div className="popup-buttons">
            <button className="complete-button" onClick={handleCompleteNow}>
              Complete Now
            </button>
            <button className="later-button" onClick={handleLater}>
              Later
            </button>
          </div>
        </div>
      )} */}

    </div>
  );
}

export default RegisterPage;