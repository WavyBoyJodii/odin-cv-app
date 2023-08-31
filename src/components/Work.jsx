import { useState } from "react";

export default function Work() {
  const [company, setCompany] = useState('');
  const [job, setJob] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [workStart, setWorkStart] = useState('');
  const [workEnd, setWorkEnd] = useState('');

  return (
    <form action='example.com/path' method='post' autoComplete='on' >
    <h1>Work Experience</h1>
    <ul>
      <li>
        <label htmlFor='company'> Company Name</label>
        <input type='text' id='company' name='company' value={company} onChange={(event) => setCompany(event.target.value)} required />
      </li>
      <li>
        <label htmlFor='job'> Job Title</label>
        <input type='text' id='job' name='job_title' value={job} onChange={(event) => setJob(event.target.value)} required />  
      </li>
      <li>
        <label htmlFor="responsiilities">Responsibilities</label>
        <textarea id='responsibilities' name='responsibilities' value={responsibilities} onChange={(event) => setResponsibilities(event.target.value)}></textarea>
      </li>
      <li>
        <label htmlFor='workStart'>Job Start</label>
        <input type='date' id='workStart' name='workStart' value={workStart} onChange={(event) => setWorkStart(event.target.value)} required />
      </li>
      <li>
        <label htmlFor='workEnd'> Job End</label>
        <input type='date' id='workEnd' name='workEnd' value={workEnd} onChange={(event) => setWorkEnd(event.target.value)} required />
      </li>
    </ul>
    <button>Submit</button>
    </form>

  )
}