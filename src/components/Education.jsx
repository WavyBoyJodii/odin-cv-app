import '../styles/forms.css'

// eslint-disable-next-line react/prop-types
export default function Education({school, major, startDate, endDate, onSchool, onMajor, onSchoolStart, onSchoolEnd}) {
   
   return (
    <form action='example.com/path' method='post' autoComplete='on' >
    <h1>Education</h1>
    <ul>
      <li>
        <label htmlFor='school'> School</label>
        <input type='text' id='school' name='school' value={school} onChange={onSchool} required />
      </li>
      <li>
        <label htmlFor='major'> Major</label>
        <input type='text' id='major' name='major' value={major} onChange={onMajor} required />  
      </li>
      <li>
        <label htmlFor='startDate'> Start Date</label>
        <input type='date' id='startDate' name='startDate' value={startDate} onChange={onSchoolStart} required />
      </li>
      <li>
        <label htmlFor='endDate'> End Date</label>
        <input type='date' id='endDate' name='endDate' value={endDate} onChange={onSchoolEnd} required />
      </li>
    </ul>
    </form>
   )
}