import React from 'react'

function Footer() {
  return (
    <>
    <div className="container-fluid contact">
      <div className="row">
        <div>
          <h2 className="text-center">Reach out to us</h2>
        </div>
        <div className="col-lg-6 info text-center">
          <address>
            <strong>Pizzamania</strong><br/>
            1355 Market Street, Suite 900<br/>
            Bukom, CA 94103<br/>
            <abbr title="Phone"></abbr><span className="glyphicon glyphicon-earphone"> 0205859949</span> 
          </address>
          
          <address>
            <strong><span className="glyphicon glyphicon-envelope"> <a href="mailto:#">first.last@example.com</a></span></strong><br/>
           
          </address>
        </div>
        </div>
        </div>
    
    </>
  )
}

export default Footer