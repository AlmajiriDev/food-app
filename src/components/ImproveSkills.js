import React from 'react'


function ImproveSkills() {
    const list = [
        "Learn new recipes",
        "Create and Write your own recipes",
        "Experiment with foods",
        "Know nutrition facts",
        "Get cooking tips",
        "Get certifications"
    ]
  return (
<div className='section improve-skills'>
        <div className='col skill-image'>
            <img src='/img/gallery/img_10.jpg' alt='/'></img>
        
        </div>
        <div className='col typography'>
            <h1 className='title'>Improve Your Culinary Skills</h1>
            {
                list.map((item, index)=>(
                    <p className='skill-item' key={index}>{item}</p>
                ))
            }
            <button className='btn'>SIGN UP NOW</button>
        </div>


</div>
  )
}



export default ImproveSkills