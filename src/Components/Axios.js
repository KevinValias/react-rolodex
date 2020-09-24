import React, { Component } from 'react';
import ButtonInfo from './ButtonInfo';
import axios from 'axios';
import Item from './Item';


class  Axios extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            isHidden: true
         }
    }

    GetUsers = () => {
        return  axios.get('https://randomuser.me/api?results=25')
        .then(res => {
            this.setState({
           data: res.data.results
           

           })
           
       })
       
   }
   

    
    render() {  
        if (this.state.isHidden) {
            return (  
            <ul>
                {this.state.data.map((item,index) => {
                    return <Item item={item} key={index}/>
                })}
                <ButtonInfo method={this.GetUsers} text={'Get-Users'}/>
            </ul>
            );
        } 
    }
}
                


 
export default Axios;