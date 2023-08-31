/* eslint-disable react/prop-types */
export default function Cv(
  {
    name,
    email, 
    phone,
    school, 
    major, 
    startDate, 
    endDate,
    company, 
    job, 
    tasks, 
    workStart, 
    workEnd
  }

) {
  return (
    <div>
        <header className="cv-header">
            <h1>{name}</h1>
            <div className="cv-header-bottom">
                <h3>{email}</h3>
                <h3>{phone}</h3>
            </div>
        </header>
        <section>
            <h2>Education</h2>
            <h4>{school}</h4>
            <p>{major}</p>
            <p className="dates">{startDate} - {endDate}</p>
        </section>
        <section>
            <h2>Work History</h2>
            <h4>{company}</h4>
            <p>{job}</p>
            <p className="dates">{workStart} - {workEnd}</p>
            <p className="taskBox">{tasks}</p>
        </section>
    </div>
  )
}