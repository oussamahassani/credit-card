import React, { Component } from 'react'
import Anime, {anime} from 'react-anime';
import './credit.css'
import Titre from './titre'
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
      const  abcd = /^[a-zA-Z \s]{1,22}$/ ;
      const  a =  n.target.value ;
      abcd.test(a) ? this.setState({ name : a  })  : alert ("utliser que des letre") 
     }
    numberChange(e) {

        const  numb = /[0-9]$/ 
        const  a =  e.target.value ;
        numb.test(a) ?  this.setState({ number : a.replace(/(\d{4})/g, '$1  - ').replace(/(-\s+$)/,'') })  :alert ("utliser que des chifre")   
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
                  break;
                default:
                    this.state.typecarte ="inconuues"
           this.cardfrontt.current.style.backgroundImage=" url('https://www.psdgraphics.com/file/world-map-background.jpg')";
              }
               let chaine = this.state.number;
               console.log(chaine.length);
             

               
               
                   }
                 
     monthChange(e) {
      const  numb = /^[0-9]{1,4}$/ 
      let   a =  e.target.value ;
      if (numb.test(a))
      {
     let  day = a.slice(0, 2)
     let  anner = a.slice(2, 4)
     console.log(anner)
      if (day < 20 )
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
             this.setState({
                ccv: e.target.value
                    });
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
        return (
            <>
           <Titre />

              <form>
              <div className="container">
              <div className="credit-card">
              <div className="credit-card-inner">
              <div className="credit-card-front" ref={this.cardfrontt}>
               <div>{this.state.typecarte}</div>
               <br/><br/><br/><br/>
               <div className="card-number">{this.state.number}</div>
        <div className="card-name"> {this.state.name}</div>
       

              <div className="card-expiration">{this.state.month}
              </div>

          
            </div>
            <div className="credit-card-back">
              <div className="card-stripe" />
              <div className="card-sig-container">
            
              
              </div>
              <span className="credits">cvv</span>
               <p className="credits">{this.state.ccv}</p>
            </div>
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
           
           className="text-input"   maxLength="35"  />
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
