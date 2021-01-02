import React,{Fragment,Component} from "react";
import axios from 'axios';
import Search from './Search';

import AcademiciItem from './AcademicItem';
import Spinner from '../../animation/Spinner';

class Academics extends Component {
    state={
        academics:[],
        loading:false
    }

//     //To load all the components
//    async componentDidMount(){
//      this.setState({
//          loading:true
//      })
//     const res = await axios.get('https://trishulatechnologies.com/hostezon/v1/academics/syllabus');
        
//         this.setState({
//             loading:false,
//             academics:res.data.academics
//         });
//     }
   
searchItem = async ({branch,year,semester,branchName,branchYear,branchSemester}) =>{
    this.setState({loading:true})
    
    const res = await axios.get(`${process.env.REACT_APP_URL}/hostezon/v1/academics/${branchName}/${branchYear}/${branchSemester}`);
    
   
    this.setState({
                    loading:false,
                    academics:res.data.branch
                });
            
}


    render(){
        if (this.state.loading) return <Spinner />;
        return (
            <Fragment>
            <Search searchItem={this.searchItem} />
              
                <div style={academicStyle}>
                
                {this.state.academics.map(branch =>(
                    <AcademiciItem key={branch._id} branch={branch} />
                    
                   
                ))}
                </div>
            </Fragment>
            
        )
    }
    }

    //This is used to make the output in grid style vey important
    const academicStyle={
        display:'grid',
        gridTemplateColumns:'repeat(1 ,1fr)',
        gridGap:'1rem'
    }  
    //repeat me value 1 ke jagah 2 krenge then ek row me 2 grid 
    //jitna value change utna hi grid change
   

export default Academics;