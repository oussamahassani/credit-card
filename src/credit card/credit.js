import React, { Component } from 'react'
import Anime, {anime} from 'react-anime';
import './credit.css'
 import Titre from './NewTitre'
import TestProps from './Backcard';
import Frontcard from './Frontcard';
export class credit extends Component {

    constructor () {
        super()
        this.cardfrontt = React.createRef();
        this.state = {
            name: '',
            number: '***************',
            month: 'xx',
            day: 'xx',
            ccv: '***',
            typecarte :''

          }}
        
     nameChange(n) {
      const  abcd = /^[a-zA-Z \s]{1,20}$/g ;
      const  a =  n.target.value ;
      abcd.test(a) ? this.setState({ name : a.toUpperCase()  })  : alert ("utliser que des letres") 
     }
    numberChange(e) {

       

        this.setState({ number : "***************"});
         const a =  e.target.value ;
        if (a.length>1)
        {
          const  numb = /(\d){1,15}$/g 
        numb.test(a) ?  this.setState({ number : a.replace(/(\d{4})/g, '$1  - ').replace(/(-\s+$)/,'') })  : alert ("utliser que des chifre")   
        switch (this.state.number[0] ) {
                case "4":                       
            this.state.typecarte = "Visa"
        this.cardfrontt.current.style.backgroundImage=" url('https://images.ctfassets.net/xecblntwky6m/1os8CwYyu5RhJQkN8ravjR/b7f323d880e1cfab9089602f8e7bc713/tenx_card_full.png')";
                  break;
                case "5":
             this.state.typecarte="mastercard"
             this.cardfrontt.current.style.backgroundImage=" url('https://pics.ebaystatic.com/aw/pics/mastercard/blue_card.png')";
                  break;
                 case "1":
            this.state.typecarte ="American express"
                 break;
                 case "3":
             this.state.typecarte ="discover"
             this.cardfrontt.current.style.backgroundImage=" url('https://www.psdgraphics.com/file/world-map-background.jpg')";
                  break;
                default:
                    this.state.typecarte ="inconuues"
          
              }
            }
            const  numb = /(\d){1,15}$/g
               console.log(a.length);
               numb.test(this.state.number) ? console.log("testvrais") : this.state.number= " "
                   }
                 
     monthChange(e) {
      const  numb = /^[0-9]{1,4}$/ 
      let   a =  e.target.value ;
      if (numb.test(a))
      {
     let  day = a.slice(0, 2)
     let  anner = a.slice(2, 4)
     console.log(anner)
      if (day >31 | anner < 19 )
      {
      
      
      console.log("anner infeireur")
      this.setState({ month : "xx"})
      }
      else 
      {

       this.setState({ month : a.replace(/(\d{2})/g, '$1 \\').replace(/(\\+$)/,'')}) 
     }  }
     else 
     console.log("nn")
     
     
                 }
    ccvChange(e) {
      const  numb = /^[0-9]{1,4}$/ 
let   a =  e.target.value ;
if (numb.test(a)) 
    {    
       this.setState({
       ccv: a
        });
      }
        else
             {
        alert("merci de saisir un nombre ")
        this.setState({
          ccv: " " })
             }
  }
     flipCard () {
         anime({
         targets: ".credit-card-inner",
         rotateY: "180deg",
        duration: "300",
         easing: "linear"
            });
         };
     unFlipCard() {
            anime({
            targets: ".credit-card-inner",
             rotateY: "360deg",
             duration: "300",
             easing: "linear"
                    });
                  };

     
    render() {
      const {number, name , month , ccv , typecarte} = this.state;
        return (
            <>
                      <Titre/>
              
              <form>
              <div className="container">
              <div className="credit-card">
              <div className="credit-card-inner">    
               <>  
               <div className="credit-card-front" ref={this.cardfrontt}>
                <Frontcard typecarte={typecarte} number= {number}  name= {name}  month={month}/>
                </div>
                </>
            <TestProps cvs={ccv}/>
          </div>
        </div>
                <div className="margin" style={{ display: "flex" }}>
                 <div  style={{  display: "flex"  , flexDirection: "column"}}>
          <label className="input-label">Votre Numero</label>
          <input placeholder="Enter your credit card number" id="number-input" name="number-input"  className="text-input" maxLength="16" onChange={e => this. numberChange(e)} />
              </div>
              <div  style={{  display: "flex"  , flexDirection: "column"}}>
          <label className="input-label">Votre Nom</label>
          <input  type="text"  placeholder="Enter Votre nom"  onChange={e => this. nameChange(e)} 
           
           className="text-input"   maxLength="20"  />
           </div>
           </div>

          <div className="date-and-csv" style={{ display: "flex" }}>
            <div  style={{ display: "flex", flexDirection: "column", width: "50%" }}  >
              <label className="input-label">
                Expiration Date
              </label>
              <input type="month"  placeholder="Enter expiration date"  className="text-input" onChange={e => this. monthChange(e)}  maxLength="4"

                style={{ height: "23px", fontSize: "16px", fontWeight: "100" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
              <label className="input-label">CVC Security Code</label>
              <input options={{ numeral: "true" }}  placeholder="Enter CVC" maxLength="3"
                
                className="text-input"  onChange={e => this.ccvChange(e)}  onFocus={this.flipCard}   onBlur={this.unFlipCard}
              />
            </div>
          </div>
    
      </div>
                  
            </form>  
            </>
        )
    }
}

export default credit
