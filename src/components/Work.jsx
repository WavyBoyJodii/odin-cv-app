/* eslint-disable react/prop-types */
export default function Work({company, job, tasks, workStart, workEnd, onCompany, onJob, onTasks, onWorkStart, onWorkEnd}) {
  

  return (
    <form action='example.com/path' method='post' autoComplete='on' >
    <h1>Work Experience</h1>
    <ul>
      <li>
        <label htmlFor='company'> Company Name</label>
        <input type='text' id='company' name='company' value={company} onChange={onCompany} required />
      </li>
      <li>
        <label htmlFor='job'> Job Title</label>
        <input type='text' id='job' name='job_title' value={job} onChange={onJob} required />  
      </li>
      <li>
        <label htmlFor="tasks">Tasks</label>
        <textarea id='tasks' name='tasks' value={tasks} onChange={onTasks}></textarea>
      </li>
      <li>
        <label htmlFor='workStart'>Job Start</label>
        <input type='date' id='workStart' name='workStart' value={workStart} onChange={onWorkStart} required />
      </li>
      <li>
        <label htmlFor='workEnd'> Job End</label>
        <input type='date' id='workEnd' name='workEnd' value={workEnd} onChange={onWorkEnd} required />
      </li>
    </ul>
    <button>Submit</button>
    </form>

  )
}