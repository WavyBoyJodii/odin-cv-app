import { useState } from 'react'
import Education from './components/Education';
import GeneralInfo from './components/GeneralInfo';
import Work from './components/Work';
import Cv from './components/Cv';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onName = (event) => {
    setName(event.target.value)
  }
  const onEmail = (event) => {
    setEmail(event.target.value)
  }
  const onPhone = (event) => {
    setPhone(event.target.value)
  }
  
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onSchool = (event) => {
    setSchool(event.target.value)
  }
  const onMajor = event => {
    setMajor(event.target.value)
  }
  const onSchoolStart = event => {
    setStartDate(event.target.value)
  }
  const onSchoolEnd = event => {
    setEndDate(event.target.value)
  }

  const [company, setCompany] = useState('');
  const [job, setJob] = useState('');
  const [tasks, setTasks] = useState('');
  const [workStart, setWorkStart] = useState('');
  const [workEnd, setWorkEnd] = useState('');

  const onCompany = (event) => {
    setCompany(event.target.value)
  }
  const onJob = (event) => {
    setJob(event.target.value)
  }
  const onTasks = (event) => {
    setTasks(event.target.value)
  }
  const onWorkStart = (event) => {
    setWorkStart(event.target.value)
  }
  const onWorkEnd = (event) => {
    setWorkEnd(event.target.value)
  }
  

  return (
    <>
      <GeneralInfo
        name={name}
        email={email}
        phone={phone}
        onName={onName}
        onEmail={onEmail}
        onPhone={onPhone}
      />
      <Education 
        school={school} 
        major={major} 
        startDate={startDate} 
        endDate={endDate} 
        onSchool={onSchool} 
        onMajor={onMajor} 
        onSchoolStart={onSchoolStart} 
        onSchoolEnd={onSchoolEnd} 
      />
      <Work 
        company={company}
        job={job}
        tasks={tasks}
        workStart={workStart}
        workEnd={workEnd}
        onCompany={onCompany}
        onJob={onJob}
        onTasks={onTasks}
        onWorkStart={onWorkStart}
        onWorkEnd={onWorkEnd}
      />
      <Cv 
        name={name}
        email={email} 
        phone={phone}
        school={school} 
        major={major} 
        startDate={startDate}
        endDate={endDate}
        company={company}
        job={job} 
        tasks={tasks} 
        workStart={workStart}
        workEnd={workEnd}
      />
    </>
  )
}

export default App
