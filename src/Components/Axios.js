import React, { Component } from 'react';
import ButtonInfo from './ButtonInfo';
import axios from 'axios';
import Map from './Map';


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
            

    // MapUsers = (OurUsers) => {
    //     return OurUsers.map((item,index) => {
    //        console.log(item.name.first)
    //     })
    // }
   Switch = () => {
       this.setState({isHidden: this.state.isHidden === true ? false : true})
       console.log(this.state.isHidden)
   }

    
    render() {  
        if (this.state.isHidden) {
return (  
            <ul>
                <ButtonInfo method={this.GetUsers} text={'Get-Users'}/>
               <Map data={this.state.data} method={this.Switch}/>
            </ul>
        );
        }
        
    }
}
                


 
export default Axios;