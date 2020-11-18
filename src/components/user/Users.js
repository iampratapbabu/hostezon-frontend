import React,{Fragment,Component} from 'react'

class Users extends Component{

    state={
        users:[],
        loading:false
    }


    render(){
        return (
            <div>
                <h1>This is the users file for all the users</h1>
            </div>
        )
    }
    
}

export default Users

