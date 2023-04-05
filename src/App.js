import './App.css';
import Passbook from './components/Passbook/Passbook';
import BenefitsCalculator from './components/SchemePage/BenefitsCalculator';
import SchemePage from './components/SchemePage/SchemePage';

function App() {
  return (
    <div className='App'>
      <SchemePage />
      
      <h1>Benefits Calculator</h1>
      <BenefitsCalculator />
      <Passbook />
    </div>
  )
}

export default App;