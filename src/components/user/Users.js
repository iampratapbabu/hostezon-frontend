import React,{Fragment,Component,useState,useEffect} from 'react';
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
       const res = await axios.get(`https://hostezon-backend.herokuapp.com/hostezon/v1/users`);
           
           this.setState({
               loading:false,
               users:res.data.users
           });
           console.log(this.state.users);
       }


    render(){
        // console.log(process.env.REACT_APP_URL);
        
        

        if (this.state.loading) return <Spinner />;
        return (
            <Fragment>
            <div className="container">
            <h2>All Users</h2>
            <hr/>
                <div style={usersStyle}>
                
                {this.state.users.map(user =>(
                    <UserItem key={user._id} user={user} />
                    
                   
                ))}
                </div>
                </div>
            </Fragment>
        )
    }
    
}

    //This is used to make the output in grid style vey important
    const usersStyle={
        display:'grid',
        gridTemplateColumns:'repeat(3 ,1fr)',
        gridGap:'0.5rem'
    }  
    //repeat me value 1 ke jagah 2 krenge then ek row me 2 grid 
    //jitna value change utna hi grid change

export default Users;

