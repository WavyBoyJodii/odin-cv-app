import { useState } from "react";

export default function Education() {
   const [school, setSchool] = useState('');
   const [major, setMajor] = useState('');
   const [startDate, setStartDate] = useState('');
   const [endDate, setEndDate] = useState('');

   return (
    <form action='example.com/path' method='post' autoComplete='on' >
    <h1>Education</h1>
    <ul>
      <li>
        <label htmlFor='school'> School</label>
        <input type='text' id='school' name='school' value={school} onChange={(event) => setSchool(event.target.value)} required />
      </li>
      <li>
        <label htmlFor='major'> Email Address</label>
        <input type='text' id='major' name='major' value={major} onChange={(event) => setMajor(event.target.value)} required />  
      </li>
      <li>
        <label htmlFor='startDate'> Phone Number</label>
        <input type='date' id='startDate' name='startDate' value={startDate} onChange={(event) => setStartDate(event.target.value)} required />
      </li>
      <li>
        <label htmlFor='endDate'> Phone Number</label>
        <input type='date' id='endDate' name='endDate' value={endDate} onChange={(event) => setEndDate(event.target.value)} required />
      </li>
    </ul>
    <button>Submit</button>
    </form>
   )
}