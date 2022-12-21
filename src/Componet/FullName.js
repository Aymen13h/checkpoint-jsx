import React from 'react'
import { ListGroup } from 'react-bootstrap'

const FullName = () => {
    return (
        <div>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{ width: '500px', marginLeft: '5%' }}>
                Juan Luis Londoño Arias (born 28 January 1994), known professionally as Maluma, is a Colombian singer, songwriter, and actor.
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default FullName