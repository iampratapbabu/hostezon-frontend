import React,{Fragment} from "react";
import PropTypes from 'prop-types';

const UserItem = ({user}) =>{
    return (
        <Fragment>
        <div class="shadow p-3 mb-5 bg-white rounded">
            <div>
                <h1>{user.name}</h1>
                <hr/>
                <div className="span-admin">{user.role}</div> 
                <h3>Email: {user.email}</h3>
                
            </div>
        </div>    
        </Fragment>
    )
}

UserItem.propTypes = {
    branch:PropTypes.object.isRequired
}

export default UserItem;