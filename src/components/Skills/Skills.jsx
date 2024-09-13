import React from 'react'
import './Skills.css';
import Frontend from './Frontend';
 import Backend from './Backend';
function Skills() {
  return (
   <section className='skills section'>
<h2 className='section__title'>Skills</h2>
<span className='section__subtitle'>
    MY Teck Knowledge 
</span>

<div className='skills__container  container  grid'>
<Frontend></Frontend>
<Backend></Backend>



</div>











   </section>
  )
}

export default Skills