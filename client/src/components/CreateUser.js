import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
export default function CreateUser() {
  const [name , setName]=useState('')
  const [email , setEmail]=useState('')
  const [company , setCompany]=useState('')
  const [title , setTitle]=useState('')
  const [phoneno, setPhone]=useState('')

  const saveuser= async()=>{
    try {
      let item={name , email , phoneno,  company,title }
      await fetch("http://localhost:8000/api/v1/create",{
      method:"POST",
      headers:{'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },  body: JSON.stringify(item)
      }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
      })
    })
    window.alert("user registered");
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div  className="mb-3">

<Form onSubmit={saveuser}>
        
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
        <Button    className="m-t-3px" variant="success" size="lg" block="block" type="submit" onSubmit={saveuser}>
          Create 
        </Button>
      </Form>
    
    </div>
  )
}
