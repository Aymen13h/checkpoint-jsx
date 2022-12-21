import React from 'react'
import { Card } from 'react-bootstrap'

const ProfilePhote = () => {
    return (
        <div className='profile'>
            <Card style={{ width: '20rem', marginLeft: '10%' }}>
                <Card.Img variant="top" src="https://fr.web.img4.acsta.net/pictures/20/10/20/09/37/1471230.jpg" />
                <Card.Body>
                    <Card.Title>Juan Luis Londoño Arias
                        <br />
                        (maluma)
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProfilePhote
