import React,{Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
        <div className="ml-25">
            <img src={spinner} alt="Loading" style={{width:'60px',margin:'auto',display:'block'}} />
            <h1>Loading....</h1>
        </div>
        
        </Fragment>
    )
}

export default Spinner
