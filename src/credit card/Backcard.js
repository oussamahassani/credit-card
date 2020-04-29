import React from 'react'

function TestProps(Props) {
    return (
        <div className="credit-card-back">
        <div className="card-stripe" />
        <div className="card-sig-container">
       
        
        </div>
        <span className="credits">cvv</span>
         <p className="credits"></p>
         {Props.cvs}
      </div>
    )
}

export default TestProps
