import React from 'react'
import Form from 'react-bootstrap/Form';

const Address = () => {
  return (
    <div>
        <h1 style={{fontSize:'30px',
    fontFamily: 'Andalus, sans-serif',
    fonWeight: 'bold',
    lineHeight: '1.5',
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#F7F7F7',
    padding: '20px',
    width: '50%',
    margin: '20px auto',
    display: 'table',
    }}
        >
            Tunis, Tunisia.
        </h1>
        <Form style={{width:'500px', marginLeft:'500px', marginBottom:'40px'}}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    </div>
  )
}

export default Address