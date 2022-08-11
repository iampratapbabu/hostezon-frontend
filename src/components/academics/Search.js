import React,{Component,Fragment} from 'react'

class Search extends Component {

    state={
       
        year:'',
        semester:'',
        branchName:null,
        branchSemester:null
    }

    handleChangeName =(e) =>{
        this.setState({
            branchName:e.target.value
        });
    }


    handleChangeSemester =(e) =>{
        this.setState({
            
            branchSemester:e.target.value
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
        semester:'',
        branchName:null,
        branchYear:null,
        branchSemester:null
           
        });
    }

    render(){
        return (
            <Fragment>
                <form onSubmit={this.onSubmit}>
                
                {/* <label for="item">Choose your Branch</label> */}
                <select className="ml-2" id="branches" name="branches" onChange={this.handleChangeName}>
                <option value="null">Select Your Branch</option>
                <option value="computer-science">Computer Science</option>
                <option value="civil-engineering">Civil Engineering</option>
                <option value="mechanical-engineering">Mechanical Engineering</option>
                <option value="electrical-engineering">Electrical & Electronics</option>
                <option value="electronics-engineering">Electronics & Communication</option>
                <option value="information-technology">Information Technology</option>
                </select>

                {/* <label for="item">Choose your Semester</label> */}
                <select className="ml-2" id="year" name="year" onChange={this.handleChangeSemester}>
                <option value="null">Select Your Semester</option>
                <option value="1">First Semester</option>
                <option value="2">Second Semester</option>
                <option value="3">Third Semester</option>
                <option value="4">Fourth Semester</option>
                <option value="5">Fifth Semester</option>
                <option value="6">Sixth Semester</option>
                <option value="7">Seventh Semester</option>
                <option value="8">Last Semester</option>
                               
                </select>
                <p>
                <input type = "submit" value="search" className="btn btn-dark mt-3 mb-3"/>
                </p>

                </form>
                
            
                
            {
                /*
                purana wala form type krne wala
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
             
                */
            }
            <hr/>
            </Fragment>
        )
    }
    
}

export default Search;