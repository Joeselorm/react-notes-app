import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'

const Notes = ({ notes, setNotes }) => {
    const [toggledisplay, setToggledisplay] = useState(false)

    const deleteNote = (id) => {
        setNotes(notes.filter((n) => n.id !== id))
    }    

    return (
        <Container>
            {/* <h1>Notes</h1> */}
            <div className="row mt-4">
                {notes.map(note => (
                    <div key={note.id} className="col-sm-4">
                        <Card style={{ width: '20rem', marginTop: '1rem'}} onMouseEnter={() => setToggledisplay(true)} onMouseLeave={() => setToggledisplay(false)}>                
                        <Card.Body>
                            <button className="btn" onClick={() => deleteNote(note.id)} style={{float: 'right', cursor: 'pointer', display: `${toggledisplay ? "block" : "none"}`}} >
                                <i className="fas fa-trash "></i>
                            </button>
                            <Card.Title>{note.title}</Card.Title>
                            <Card.Text>
                            {note.description}
                            </Card.Text>                   
                        </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Notes
