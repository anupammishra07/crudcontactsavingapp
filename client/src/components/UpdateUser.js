import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import "../App.css"
export default function UpdateUser() {
  
  const [name , setName]=useState('')
  const [email , setEmail]=useState('')
  const [company , setCompany]=useState('')
  const [title , setTitle]=useState('')
  const [phoneno, setPhone]=useState('')
  
  const { id } = useParams();
  useEffect(()=>{
    console.log(id)
    getuserbyid()


  },[])

  async function getuserbyid(){
    await fetch(`http://localhost:8000/api/v1/users/${id}` , {
      method: 'GET'
    }).then((response)=>{response.json().then((res)=>{console.log(res);
    setName(res.user.name);
    setEmail(res.user.email);
    setCompany(res.user.company)
    setTitle(res.user.title)
    setPhone(res.user.phoneno)
  })
    
    })
    
  }


  async function updateUser(){
    let item={name , email , phoneno,  company,title };
    await fetch(`http://localhost:8000/api/v1/updateuser/${id}` , {
      method:'PUT' ,headers:{'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
  },body: JSON.stringify(item)
    }).then((response)=>{response.json()})
    
    
  }


  

  return (
    <div className='createform'>
       <Form onSubmit={updateUser}>
        
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"  value={name}
                onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" value={company}
                onChange={(e) => setCompany(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Phone No</Form.Label>
          <Form.Control type="text"  value={phoneno}
                onChange={(e) => setPhone(e.target.value)}/>
        </Form.Group>
        <Button  variant="primary" size="lg" block="block" type="submit" onClick={ updateUser}>
          Update User
        </Button>
      </Form>
    </div>
  )
}
