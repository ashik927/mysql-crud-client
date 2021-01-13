import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllDataShow = (props) => {
    const {id ,country , capital}= props.view;

    const handleDelete = () =>{
        const alertDelete = window.confirm("do you want to delete")
        const formData = new FormData();
        formData.append('id', id);
        alertDelete &&
        fetch(`http://localhost:5000/datadelete`,{
            method: 'DELETE',
            body: formData
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            props.handleShow()

        })
    }
    return (
        <Card style={{ width: '18rem' }} id="none">
        <Card.Body>
            <Card.Title>{country}</Card.Title>
            <Card.Text>
                {capital}
</Card.Text>
           <Link to={"/update/"+id}><Button variant="primary" >Edit</Button></Link> 
            <Button variant="danger" onClick={handleDelete}>delete</Button>

        </Card.Body>
    </Card>
    );
};

export default AllDataShow;