import React,{Fragment,useState,useEffect} from 'react';
import axios from 'axios';

const Test =() => {
  const [counter,setCounter] = useState(0);
  // const [posts,setPosts] = useState([]);
  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState('');
  const [people,setPeople] = useState([]);

  // const getPosts = async()  =>{
  //   const response = await fetch(`http://127.0.0.1:8000/hostezon/v1/academics/syllabus`);
  //   console.log(response);
  //   const posts = await response.json();
    
  //   console.log(posts.academics);
    
  //   setPosts(posts.academics);
  // };

  // useEffect(()=>{
  //   getPosts();
  // },[])

  


  const handleSubmit = (e) =>{
    e.preventDefault();

    const person = {fullName,email}
    console.log(person);
    setPeople((people) =>{
      return [...people,person]
    });
    setFullName('');
    setEmail('');
    console.log(people);
    console.log(fullName,email);
  }


  return (
    <Fragment>
    <hr/>
    <h4>This is the Test file</h4>
    <h1>{counter}</h1>
    <button classNameName = "btn btn-primary" onClick={()=>{setCounter(counter+1)}}>Increase</button>
    {/* <div>
        {
          posts.map((single) =>{
            return <li key={single._id}>
              <div>
                <h3>{single.branch}</h3>
                <h4>{single.year}</h4>
                <h4>{single.semester}</h4>
                <hr />
              </div>
            </li>
          })
        }
      
    </div> */}
    <hr/>



    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="fullName" id="fullName" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
        <div className="form-group">
        <label>Email</label>
        <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>

    <hr/>
    </Fragment>
  );
}

export default Test;
