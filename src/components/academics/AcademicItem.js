import React,{Fragment} from "react";
import PropTypes from 'prop-types';

const AcademicItem = ({branch}) =>{

    const name = branch.branch;

    return (
        <Fragment>
        <div class="shadow p-3 mb-5 bg-white rounded">
            <div>
                <h1>{name.toUpperCase()}</h1>
                <hr/>
                <h3>Year - {branch.year}</h3>
                <h3>Semester - {branch.semester}</h3>
                <a className = "btn btn-info mb-2 mr-2" href={branch.syllabus}>click here for Syllabus</a>
                <a className = "btn btn-dark" href={branch.papers}>click here for Previous year papers</a>
            </div>
        </div>    
        </Fragment>
    )
}

AcademicItem.propTypes = {
    branch:PropTypes.object.isRequired
}

export default AcademicItem;