import React from 'react';
import './index.css';
export default function New2() {
  return (
    <>
    {<h1 className='head'>This is done using HOC</h1>}
    {<ul type='circle' >
       <h3> <li className='ul'>HOC means "Higher Order Component"</li>
        <li className='ul'>IF WE PASS ANY Component AS ARGUMENT TO ANOTHER Component THE IT IS KNOWN AS HOC</li>
        <li className='ul'>IN REACT IT IS USED FOR "RE-USE OF Component'S LOGIC"</li>
        <li className='ul'>IT IS USED TO ENHANCE A COMPONENT PROPERTIES WITH XTRA FUNCTIONALITIES</li></h3>
    </ul>}<br className='bbr'></br>
    </>
  )
}
