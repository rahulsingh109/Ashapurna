import React from 'react'

const Slider = () => {
  return (
    <div className='container'>
    <div className="d-flex flex-column">
        <div className="row">
       <div className="col-md-6 " style={{paddingLeft:"20px",paddingTop:"20px"}}>asd</div>
       <div className="col-md-6 d-flex flex-column " style={{paddingRight:"20px",paddingTop:"20px"}}>
        <div className="col-md-12 d-flex align-items-end">
            <div className="col-md-3">
                <img src="Assets/image/Logo.jpg" className='img-fluid' alt="" />
            </div>
            <div className="col-md-6 mx-3"><img src="Assets/image/Rambla.png" className='img-fluid' alt="" /></div>
        </div>
        <div className="col-md-12 my-4">
            <h4>Central Road is transformed into a 
captivating oasis of greenery and 
elegant sitting spaces, creating a 
serene and inviting atmosphere for 
residents to unwind and connect with </h4>
        </div>
       </div>
        </div>
    </div>
    </div>
  )
}

export default Slider
