import React,{Component,Fragment} from 'react'

class Search extends Component {

    state={
        branch:'',
        year:'',
        semester:'',
        value:'computer-science'
    }

    handleChange =(e) =>{
        this.setState({
            value:e.target.value
        });
    }


    onchange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
            
        });
        
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.searchItem(this.state);
        this.setState({
            branch:'',
            year:'',
            semester:'',
            value:'null',
        });
    }

    render(){
        return (
            <Fragment>
                <form className="form" onSubmit={this.onSubmit}>
                <label for="item">Choose your Branch</label>
                <select className="ml-2" id="cars" name="cars" onChange={this.handleChange}>
                <option value="null">select</option>
                <option value="computer-science">Computer Science</option>
                <option value="civil-engineering">Civil Engineering</option>
                <option value="mechanical-engineering">Mechanical Engineering</option>
                <option value="electrical-engineering">Electrical & Electronics</option>
                <option value="electronics-engineering">Electronics & Communication</option>
                <option value="information-technology">Information Technology</option>
                </select>
            
                <input className="btn btn-dark btn-sm ml-2" type="submit"/>
                </form>
            
             <div>
                 <form className="form" onSubmit={this.onSubmit}>
                     <input type="text"
                        name="branch" 
                        className="form-control" 
                        placeholder="Enter your branch"
                        value={this.state.text}
                        onChange={this.onchange}
                      />
                      <input type="text"
                        name="year" 
                        className="form-control" 
                        placeholder="Enter your Year"
                        value={this.state.year}
                        onChange={this.onchange}
                      />
                      <input type="text"
                        name="semester" 
                        className="form-control" 
                        placeholder="Enter your semester"
                        value={this.state.semester}
                        onChange={this.onchange}
                      />
                     <input type = "submit" value="search" className="btn btn-dark mt-3 mb-3"/>
                 </form>
             </div>
             <hr/>
            </Fragment>
        )
    }
    
}

export default Search;