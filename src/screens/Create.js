import React, { useState } from 'react'
import { Container, Form, Alert } from 'react-bootstrap'
import uniqid from 'uniqid'

const Create = ({ setNotes }) => {
    const [form, setForm] = useState({title: '', description: ''})
    const [id, setId] = useState(uniqid())
    const [requiredfields, setRequiredfields] = useState(false)

    const handleFormUpdate = (event) => {
        const {name, value} = event.target
        setForm({...form, [name] : value, id})
        setRequiredfields(false)  
    }

    const addNote = (event) => {
        if (form.title !== '' || form.description !== '') {
            setNotes(notes => [...notes, form])
            setId(uniqid())
            setForm({title: '', description: ''})
        } else {
            setRequiredfields(true)            
        }
    }

    return (
        <Container>
            <div className="mt-3 mb-3">
                {requiredfields ? <Alert variant="danger" >Required fields empty</Alert> : ""}
            </div>
            <Form className="mt-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" value={form.title} placeholder="This is a note title" name="title" onChange={handleFormUpdate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" value={form.description} rows={3} name="description" onChange={handleFormUpdate} />
            </Form.Group>
            <button type="button" className="btn btn-primary" onClick={addNote} >Add</button>
            </Form>
        </Container>
    )
}

export default Create
