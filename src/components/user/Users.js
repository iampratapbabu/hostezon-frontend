import React,{Fragment,Component} from 'react';
import axios from 'axios';

import Spinner from '../../animation/Spinner';


import UserItem from './UserItem';

class Users extends Component{

    state={
        users:[],
        loading:false
    }

    async componentDidMount(){
        this.setState({
            loading:true
        })
       const res = await axios.get('https://trishulatechnologies.com/hostezon/v1/users');
           
           this.setState({
               loading:false,
               users:res.data.users
           });
           console.log(this.state.users);
       }


    render(){
        if (this.state.loading) return <Spinner />;
        return (
            <Fragment>
                <div style={usersStyle}>
                
                {this.state.users.map(user =>(
                    <UserItem key={user._id} user={user} />
                    
                   
                ))}
                </div>
            </Fragment>
        )
    }
    
}

    //This is used to make the output in grid style vey important
    const usersStyle={
        display:'grid',
        gridTemplateColumns:'repeat(2 ,1fr)',
        gridGap:'1rem'
    }  
    //repeat me value 1 ke jagah 2 krenge then ek row me 2 grid 
    //jitna value change utna hi grid change

export default Users;

