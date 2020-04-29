import React from 'react'

function Frontcard(Props) {
    return (
        <>
        <div>{Props.typecarte}</div>
        <br/><br/><br/><br/>
        <div className="card-number">{Props.number}</div>
       <div className="card-name">name:  {Props.name}</div>
       <div className="card-expiration">validité : {Props.month}
       </div>
                 
     </> 
        
    )
}

export default Frontcard
