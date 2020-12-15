import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ShowCountry = (props) => {
    const { name, capital } = props.view
    const [Capital, setAddCapital] = useState(capital)
    const [country, setAddCountry] = useState(name)
    
    const addCapital = () =>{
        const formData = new FormData()
        formData.append("country",country)
        formData.append("capital",Capital)
        console.log(country);
    console.log(Capital);
        fetch('http://localhost:5000/add',{
            method: 'POST',
            body:formData
        })
        .then(res => res.json())
        .then(result => console.log(result))

    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {capital}
    </Card.Text>
                <Button variant="primary" onClick={addCapital}>Click For Add</Button>
            </Card.Body>
        </Card>
    );
};

export default ShowCountry;