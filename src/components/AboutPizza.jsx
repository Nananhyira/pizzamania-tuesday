import React from 'react'

function AboutPizza(props) {
  return (
    <>
    <div className="container about">
        <div className="row">
            <h2 className="text-center">About {props.title}</h2>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <img src="images/piz4.jpg" alt="about pizza" className="img-responsive"/>
            </div>
            <div className="col-lg-6">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   Ipsam adipisci necessitatibus velit asperiores commodi dolorem 
                   totam nam nemo voluptate molestias sequi quos consequuntur ducimus, 
                   magni eveniet culpa hic explicabo cum.
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   Ipsam adipisci necessitatibus velit asperiores commodi dolorem 
                   totam nam nemo voluptate molestias sequi quos consequuntur ducimus, 
                   magni eveniet culpa hic explicabo cum.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam adipisci necessitatibus velit asperiores commodi dolorem 
                    totam nam nemo voluptate molestias sequi quos consequuntur ducimus, 
                    magni eveniet culpa hic explicabo cum.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam adipisci necessitatibus velit asperiores commodi dolorem 
                    totam nam nemo voluptate molestias sequi quos consequuntur ducimus, 
                    magni eveniet culpa hic explicabo cum.
                 </p>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam adipisci necessitatibus velit asperiores commodi dolorem 
                    totam nam nemo voluptate molestias sequi quos consequuntur ducimus, 
                    magni eveniet culpa hic explicabo cum.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam adipisci necessitatibus velit asperiores commodi.
                 </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutPizza