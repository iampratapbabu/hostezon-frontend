import React,{Fragment} from "react";
import PropTypes from 'prop-types';

const UserItem = ({user}) =>{
    return (
        <Fragment>
        <div class="shadow p-3 mb-5 bg-white rounded">
            <div>
                <h4>{user.name}</h4>
                <hr/>
                <div className="span-admin">{user.role}</div> 
                <p>Email:{user.email}</p>
                
            </div>
        </div>    
        </Fragment>
    )
}

UserItem.propTypes = {
    branch:PropTypes.object.isRequired
}

export default UserItem;