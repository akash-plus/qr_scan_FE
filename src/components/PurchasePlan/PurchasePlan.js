import React, { useState, useEffect, useNa } from 'react';
import "./PurchasePlan.css";
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import ChooseAPlan from './ChooseAPlan';

const PurchasePlan = () => {
  const [data, setData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
          try {
              const response = await fetch('https://sapi.getplus.in/api/v1/schemes/SmithLLC/');
              const result = await response.json();
              // const arrayData = Object.values(result);
              // console.log(arrayData[0]);
              // console.log(arrayData[1]);
              // console.log(response);
              // Store the fetched data in the state variable
              setData(result);
              console.log(result);
              
              // console.log("type of arrayData " + typeof arrayData);
              // console.log("type of result " + typeof result[0]);
              // console.log(data[1]);
      
              // Store the fetched data in session storage
              // console.log("before being saved in session storage");
              sessionStorage.setItem('fetchedData', JSON.stringify(data));
              // console.log("received data" + sessionStorage.getItem('fetchedData'));
              
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      }
      const storedArray = JSON.parse(sessionStorage.getItem('data'));
      if (storedArray) {
        setData(storedArray);
      }
      fetchData();
    }, []);

  // useEffect(() => {
  //   if (data.length > 0) {
  //     sessionStorage.setItem('data', JSON.stringify(data));
  //   }
  // }, [data]);

  return (
    <div >
      <header className="header-wrapper">
        <div>
          <h1>
            <span 
              class="brand_names" 
              // style="color: #FFDF00;
              // font-size: 36px;
              // font-weight: bold;"
              >+
            </span>Plus | <span class="brand_names2" 
            // style="
            // color: #10E000;
            // font-size: 29px;
            // font-weight: 300;"
          >Your Logo </span>
          </h1>
        </div>
        <div>
          {/* <span className='brand_names'>PLUS | JEWELSHOP </span> */}
        </div>
        <div>
          <span className="scheme-name">Choose a plan</span>
          {/* <Link className="visit-link" to="https://google.com" target='_blank'>
            Visit xyz website
          </Link> */}
          <a className='visit-link' href='#'  rel='noreferrer' 
          // style=
          // "font-family: var(--font-primary);
          //   font-weight: 500;
          //   font-size: 15px;
          //   letter-spacing: 1px;
          //   display: inline-block;
          //   padding: 14px 40px;
          //   border-radius: 50px;
          //   transition: 0.3s;
          //   color: #fff;
          //   background: rgb(11 142 0 / 90%);
          //   text-decoration: none;"
        >Help & Support</a>
        </div>
      </header>
      <CardGrid data={data} />
      {/* <ChooseAPlan data={data}/> */}
    </div>
  );
};

const CardGrid = ({ data }) => {
    return (
        <div className="card-grid">
            {data && data.map(item => (
                <Card
                  item={item} 
                  key={item.plan_id} 
                  plan_id={item.plan_id}
                  is_Custom={item.is_Custom}
                  plan_duration={item.plan_duration} 
                  custom_plan_duration = {item.custom_plan_duration} 
                  min_amount={item.minimum_installment_amount}
                  discount_on_first_installment={item.discount_on_first_installment}
                  discount_on_last_installement={item.discount_on_last_installement}
                />
            ))}
        </div>
    ); 
};

// const Card = ({ item }) => {
//     const saveToStorage = () => {
//         sessionStorage.setItem('selectedItem', JSON.stringify(item.plan_duration, item.custom_plan_duration, item.minimum_installment_amount));
//         console.log(sessionStorage.getItem('selectedItem'));
//         console.log(item.is_custom);
//         useNavigate("/RegisterPage")
//     };

//     return (
//         <div className="card" onClick={saveToStorage}>
//           <div>Plan1</div>
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//             <p>Plan Duration : { item.is_custom ? item.custom_plan_duration : item.plan_duration}</p>
//             {/* <p>Plan Duration : {item.custom_plan_duration}</p> */}
//             <p>Min Installment amount is ₹{item.minimum_installment_amount} </p>
//             <p>First Installment discount: {item.discount_on_first_installment}% </p>
//         </div>
//     );
// };

export default PurchasePlan;

