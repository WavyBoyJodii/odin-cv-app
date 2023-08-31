import { useState } from "react";

export default function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    return (
      <form action='example.com/path' method='post' autoComplete='on' >
      <h1>General Info</h1>
      <ul>
        <li>
          <label htmlFor='name'> Full Name</label>
          <input type='text' id='name' name='name' value={name} onChange={(event) => setName(event.target.value)} required />
        </li>
        <li>
          <label htmlFor='email'> Email Address</label>
          <input type='email' id='email' name='email' value={email} onChange={(event) => setEmail(event.target.value)} required />  
        </li>
        <li>
          <label htmlFor='phone'> Phone Number</label>
          <input type='tel' id='phone' name='phone' value={phone} onChange={(event) => setPhone(event.target.value)} required />
        </li>
      </ul>
      <button>Submit</button>
      </form>
    )
  }