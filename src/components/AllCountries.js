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

    return (
        <Container>
            <Row>
                <Col md={6}>
                    {
                        allCountry.map(view =>(<ShowCountry view={view}></ShowCountry>))
                    }
                </Col>
                <Col md={6}>
                {
                        allDataShow.map(view =>(<AllDataShow view={view}></AllDataShow>))
                    }
                </Col>
            </Row>
            
        </Container>
    );
};

export default AllCountries;