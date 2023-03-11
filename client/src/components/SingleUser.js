import  { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";
import "../App.css"
export default function SingleUser() {
  
  const [users, setUsers] = useState([]);
  const [pageno , setPageno]= useState("0"); //current page
  const [noofpages, setNoOfpages]=useState(0); //total page


  const pages = new Array(noofpages).fill(null).map((v,i)=>i); 
  useEffect(function () {
		
		getusers();
    
	}, [pageno]);
// dispay all users 
  async function getusers() {
    try {
       await fetch(`http://localhost:8000/api/v1/alluser/?page=${pageno}`).then((response)=>response.json().then(({user, totalpages})=>{setUsers(user);  console.log(user); setNoOfpages(totalpages) ; console.log(totalpages)}))
      
    } catch (error) {
      console.log("error", error);
    }
  }
//  delete user
  async function deleteUser(id) {
    await fetch(`http://localhost:8000/api/v1/deleteuser/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        
      })
    })
    getusers();
  }
    
  const gotoprev=()=>{
    setPageno(Math.max(0 , pageno-1))
  }


  const gotonext =()=>{
    setPageno(Math.min(noofpages -1 , pageno+1))
  }

  async function updateUser(id) {
    await fetch(`http://localhost:8000/api/v1/users/${id}`, {
      method: 'GET'
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        
      })
    })
    getusers();
  }
 


  return (
    <div className="App">
      <h6> Page {parseInt(pageno) + 1} of {noofpages} </h6>
     

     
      {users.map((user)=>{
        return(
          <div key={user}>
            <h3>Name:  {user.name}</h3>
            <Card.Title>Email:{user.email}</Card.Title>
            <Card.Title>Company:{user.company}</Card.Title>
            <Card.Title>Title:{user.title}</Card.Title>
             <Card.Title>Phone No:{user.phoneno}</Card.Title>
             <Button type="submit" onClick={()=>deleteUser(user._id)}>Delete</Button>  <Link
                    to={`updateuser/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    <Button>update</Button>
                  </Link>      
            <hr></hr> 
          </div>
        )
      })}
      <button onClick={gotoprev}>prev</button>
       {pages.map((pageindex)=>{return(
        <><button key={pageindex} onClick={()=>{setPageno(pageindex)}}>{pageindex + 1}</button></>
      )    
      })}
       <button onClick={gotonext}>next</button>
   </div>

   
    
  )
}
