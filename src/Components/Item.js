import React, { Component } from 'react'
import ButtonInfo from './ButtonInfo';

class Item extends Component {
    
    state = {  
        isHidden: true
    }
    
    Switch = () => { 
           this.setState({isHidden: this.state.isHidden === true ? false : true})
           console.log(this.state.isHidden)
       }

    render() { 

        if (this.state.isHidden) {
            return (
                <li> 
                    <img src={`${this.props.item.picture.medium}`} alt='profile-pic'></img> 
                    {`${this.props.item.name.first} ${this.props.item.name.last}`}  
                    <ButtonInfo text={'mas informacion'} method={this.Switch} className={"reveal-button"}/>
                </li>
            );
        } else {
            return (
                <li> 
                    <img src={`${this.props.item.picture.medium}`} alt='profile-pic'></img> 
                    {`${this.props.item.name.first} ${this.props.item.name.last} ${this.props.item.location.street.name}`}  
                    <p>Street: {this.props.item.location.street.name}</p>
                    <p>City: {this.props.item.location.city}</p>
                    <p>State: {this.props.item.location.state}</p>
                    <p>Country: {this.props.item.location.country}</p>
                    <ButtonInfo text={'mas informacion'} method={this.Switch} className={"reveal-button"}/>
                </li>
            );
        }
    }
}
 
export default Item;

