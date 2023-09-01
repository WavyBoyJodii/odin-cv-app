/* eslint-disable react/prop-types */
import '../styles/forms.css'

export default function GeneralInfo({name, email, phone, onName, onEmail, onPhone}) {
    
    return (
      <form action='example.com/path' method='post' autoComplete='on' >
      <h1>General Info</h1>
      <ul>
        <li>
          <label htmlFor='name'> Full Name</label>
          <input type='text' id='name' name='name' value={name} onChange={onName} required />
        </li>
        <li>
          <label htmlFor='email'> Email Address</label>
          <input type='email' id='email' name='email' value={email} onChange={onEmail} required />  
        </li>
        <li>
          <label htmlFor='phone'> Phone Number</label>
          <input type='tel' id='phone' name='phone' value={phone} onChange={onPhone} required />
        </li>
      </ul>
      </form>
    )
  }