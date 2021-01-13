import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ShowCountry from './ShowCountry';
import AllDataShow from './AllDataShow';

const AllCountries = () => {
    const [allCountry , setAllCountry] = useState([])
    const [allDataShow , setAllDataShow] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setAllCountry(data))
    },[])
    useEffect(() =>{
        fetch('http://localhost:5000/readdata')
        .then(res => res.json())
        .then(data => setAllDataShow(data.data))
    },[])

    const handleShow=() => {
        fetch('http://localhost:5000/readdata')
        .then(res => res.json())
        .then(data => setAllDataShow(data.data))
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h1>{allCountry.length}</h1>
                    {
                        allCountry.map(view =>(<ShowCountry handleShow={handleShow} view={view}></ShowCountry>))
                    }
                </Col>
                <Col md={6}>
                <h1>{allDataShow.length}</h1>

                {
                        allDataShow.map(view =>(<AllDataShow handleShow={handleShow} view={view}></AllDataShow>))
                    }
                </Col>
            </Row>
            
        </Container>
    );
};

export default AllCountries;