import React,{Fragment} from "react";
import PropTypes from 'prop-types';

const UserItem = ({user}) =>{
    const {role,email,name,gender} =user;
    return (
        <Fragment>
        <div class="shadow p-3 mb-5 bg-white rounded">
            <div>
                <h4>{name}</h4>
                <hr/>
                {/*<h5>{gender.charAt(0).toUpperCase()+gender.slice(1)}</h5>*/}
                <h5>Role{' - '} <span className={'badge '+(role === 'developer'?'badge-success':'badge-primary')}>{role}</span></h5> 
                <h5><i className="fas fa-envelope">{' '}{email}</i></h5>
                
            </div>
        </div>    
        </Fragment>
    )
}

UserItem.propTypes = {
    branch:PropTypes.object.isRequired
}

export default UserItem;