// eslint-disable-next-line react/prop-types
export default function Education({school, major, startDate, endDate, onSchool, onMajor, onSchoolStart, onschoolEnd}) {
   
   return (
    <form action='example.com/path' method='post' autoComplete='on' >
    <h1>Education</h1>
    <ul>
      <li>
        <label htmlFor='school'> School</label>
        <input type='text' id='school' name='school' value={school} onChange={onSchool} required />
      </li>
      <li>
        <label htmlFor='major'> Email Address</label>
        <input type='text' id='major' name='major' value={major} onChange={onMajor} required />  
      </li>
      <li>
        <label htmlFor='startDate'> Phone Number</label>
        <input type='date' id='startDate' name='startDate' value={startDate} onChange={onSchoolStart} required />
      </li>
      <li>
        <label htmlFor='endDate'> Phone Number</label>
        <input type='date' id='endDate' name='endDate' value={endDate} onChange={onschoolEnd} required />
      </li>
    </ul>
    <button>Submit</button>
    </form>
   )
}