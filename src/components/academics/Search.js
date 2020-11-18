import React,{Component,Fragment} from 'react'

class Search extends Component {

    state={
        text:''
    }

    onchange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
        
    }

    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.text);
    }

    render(){
        return (
            <Fragment>
                {/* <form className="form">
                <label for="cars">Choose your Branch</label>
                <select className="ml-2" id="cars" name="cars">
                <option value="volvo">Computer Science</option>
                <option value="saab">Information Technology</option>
                <option value="fiat">Electronics & Communication</option>
                <option value="audi">Electrical & Electronics</option>
                <option value="fiat">Civil Engineering</option>
                <option value="audi">Mechanical Engineering</option>
                </select>
                
                <label for="cars">Select Your year</label>
                <select className="ml-2" id="cars" name="cars">
                <option value="volvo">Select Year</option>
                <option value="volvo">First Year</option>
                <option value="saab">Second Year</option>
                <option value="fiat">Third Year </option>
                <option value="audi">Final Year </option>
                
                </select>

                <input className="btn btn-dark btn-sm ml-2" type="submit"/>
                </form>
             */}
             <div>
                 <form className="form" onSubmit={this.onSubmit}>
                     <input type="text"
                        name="text" 
                        className="form-control" 
                        placeholder="Enter your branch"
                        value={this.state.text}
                        onChange={this.onchange}
                      />
                     <input type = "submit" value="search" className="btn btn-dark mt-3"/>
                 </form>
             </div>
            </Fragment>
        )
    }
    
}

export default Search;