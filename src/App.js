import { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1); // Default step value to 1
  const [count, setCount] = useState(0);

  function incrimForStep() {
    setStep(step + 1);
  }

  function decrimForStep() {
    setStep(step > 1 ? step - 1 : 1); // Ensure step doesn't go below 1
  }

  function incrimForCount() {
    setCount(count + step);
  }

  function decrimForCount() {
    setCount(count - step);
  }

  // Base date
  const baseDate = new Date('2024-09-14');

  // Calculate the new date based on the count
  const newDate = new Date(baseDate.getTime() + count * 24 * 60 * 60 * 1000);

  const day = newDate.getDate();
  const month = newDate.toLocaleString('default', { month: 'long' });
  const year = newDate.getFullYear();

  // Determine the description
  const isFuture = count >= 0;
  const descriptor = isFuture ? 'after' : 'before';
  const absoluteCount = Math.abs(count);

  return (
    <div className='container'>
      <Stepings title='Step' values={step} incrim={incrimForStep} decrim={decrimForStep} />
      <Stepings title='Count' values={count} incrim={incrimForCount} decrim={decrimForCount} />

      <h2 className='desc'>
        It was <span className='spans'>{day}</span> <span className='spans'>{month}</span> <span className='spans'>{year}</span> exactly <span className='spans'>{absoluteCount}</span> days {descriptor}.
      </h2>
    </div>
  );
}

export default App;

function Stepings({ title, values, incrim, decrim }) {
  return (
    <div className="step">
      <button className='btn' onClick={decrim}> - </button>
      <h1>{title} : <span>{values}</span></h1>
      <button className='btn' onClick={incrim}> + </button>
    </div>
  );
}
