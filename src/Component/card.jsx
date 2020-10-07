import React , {Component} from 'react';
import './css/card.css'
import Logo from './images/card_Logo.png'

export default class Card extends Component {
    render(){
        return(
            <div className="cardbox">
                <div className="cardicon">
                    
                </div>
                <div className="cardLogo">
                    <img className="card_logo" src={Logo}></img>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}