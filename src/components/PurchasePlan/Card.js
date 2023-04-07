import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
    const navigate = useNavigate();

    const saveToStorage = () => {
        const duration_of_plan = item.is_custom ? item.custom_plan_duration : item.plan_duration;
        sessionStorage.setItem('duration_of_plan', JSON.stringify(duration_of_plan));
        sessionStorage.setItem('minAmount', JSON.stringify(item.minimum_installment_amount));
        sessionStorage.setItem('first_installment_discount', JSON.stringify(item.discount_on_first_installment));
        sessionStorage.setItem('last_installment_discount', JSON.stringify(item.discount_on_last_installement));
        sessionStorage.setItem('chosen_plan_id', item.plan_id);
        console.log("Chosen plan id on the card page is :" + sessionStorage.getItem('chosen_plan_id'));
        console.log("Minimum scheme amount" + sessionStorage.getItem('minAmount'));
        console.log("Plan duration" + sessionStorage.getItem('duration_of_plan'));
        console.log(sessionStorage.getItem('first_installment_discount'));
    
        navigate("/savings-slider")
    };

    return (
        <div className="card" onClick={saveToStorage}>
          <div>Plan</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Plan Duration : { item.is_custom ? item.custom_plan_duration : item.plan_duration}</p>
            <p>Min Installment amount is ₹{item.minimum_installment_amount} </p>
            <p>First Month discount: {item.discount_on_first_installment}% </p>
            <p>Last Month bonus: {item.discount_on_last_installement}% </p>
        </div>
    );
};

export default Card