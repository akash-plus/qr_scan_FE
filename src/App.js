import { Route, Routes } from 'react-router-dom';
import './App.css';
import BenefitsCalculator from './components/SliderPage/BenefitsCalculator';
import SchemePage from './components/SliderPage/SliderPage';
import KYCPage from './components/KYCPage/KYCPage';
import BrandSchemes from './components/PurchasePlan/PurchasePlan';
import PurchasePlans from './components/PurchasePlan/PurchasePlan';
import PurchasePlan from './components/PurchasePlan/PurchasePlan';
import RegisterPage from './components/RegisterPage/RegisterPage';
import SliderPage from './components/SliderPage/SliderPage';
import PaymentPage from './components/PaymentPage/PaymentPage';
import Passbook from './components/Passbook/PassbookPage';
import PassbookLogin from './components/Passbook/PassbookLogin';

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Passbook />}/> */}
      <Route path='/' element={<PurchasePlan />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/complete-kyc' element={<KYCPage />}/>
      <Route path='/schemes/SmithLLC' element={<PurchasePlan />}/>
      <Route path='/savings-slider' element={<SliderPage />}/>
      <Route path='/make-payment' element={<PaymentPage />}/>
      <Route path='/user-passbook' element={<Passbook />}/>
      <Route path='/passbook-login' element={<PassbookLogin />}/>
    </Routes>

  )
}

export default App;