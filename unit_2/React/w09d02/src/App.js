import logo from './logo.svg';
import './App.css';
import Entry from './components/Entry';
import Output from './components/Output';

function App() {
  return (
    <div className="App">
      <Entry/>
      <Output/>
      {
 function validCard(cardNumber) {
  let nums = cardNumber.toString().split("").reverse();
  let sum = 0;
  console.log(nums);
  for (let i = 1; i < nums.length; i += 2) {
    nums[i] *= 2;
    console.log(nums);
    if (nums[i] > 9) {
      nums[i] -= 9;
    }
  }
sum = nums.reduce((a, b) => a + b, 0);
  return sum % 10 === 0;
}
}
    </div>
  );
}

export default App;
