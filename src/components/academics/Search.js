import React,{Component,Fragment} from 'react'

class Search extends Component {

    state={
       
        year:'',
        semester:'',
        value:'null'
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
            
            year:'',
            semester:'',
            value:'null',
        });
    }

    render(){
        return (
            <Fragment>
                
                <label for="item">Choose your Branch</label>
                <select className="ml-2" id="branches" name="branchs" onChange={this.handleChange}>
                <option value="null">Select</option>
                <option value="computer-science">Computer Science</option>
                <option value="civil-engineering">Civil Engineering</option>
                <option value="mechanical-engineering">Mechanical Engineering</option>
                <option value="electrical-engineering">Electrical & Electronics</option>
                <option value="electronics-engineering">Electronics & Communication</option>
                <option value="information-technology">Information Technology</option>
                </select>
                
            
                
            
             <div>
                 <form className="form" onSubmit={this.onSubmit}>
                     
                      <input type="text"
                        name="year" 
                        className="form-control" 
                        placeholder="Enter your Year like 1 or 2"
                        value={this.state.year}
                        onChange={this.onchange}
                      />
                      <input type="text"
                        name="semester" 
                        className="form-control" 
                        placeholder="Enter your semester like 1 or 2"
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