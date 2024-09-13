import React from 'react'

function Service() {
  return (
    <section className='services section' id='services'>
<h2 className='section__title'> Services</h2>
<span className='section__subtitle'> What I offer</span>
  <div className='services__container container grid'>
    <div className='services__content'>
       <div>
      <i className='uil uil services__icon'></i>
      <h3 className='services__title'></h3>
        </div> 
<span className="services__button">
    View More <i className="uil uil-arrow-right services__button-icon"></i>
</span>
<div className="services__model">
    <div className="services__modal-content">
      <i className='uil uil-times services__model-close'></i>  
      <h3 className='services__modal-title'></h3>
<p className="services__modal-description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex ipsam minima voluptate accusantium quos.
</p>
<ul className="services__modal-services grid">
    <li className='services__modal-service'>
        <i className="uil uil-check-circle services__model-icon"></i>
        <p className="services__model-info">
            Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
    </li>
</ul>
    </div>
</div>


    </div>
  </div>
    </section>
  )
}

export default Service