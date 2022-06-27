import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {service_data} from '../../APIs/ServicesApi';
import './services.scss';

const Services = () => {
    return (
        <>
            <section className='services_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col className='first_column'>
                            <small>Our Services</small>
                            <h1>The expertise of the web agency Dezinestar</h1>
                            <p>The Dezinestar web agency relies on 3 areas of expertise that complement each other to carry out design and development projects.</p>
                        </Col>
                        <Col className='second_column p-0 ps-5'>
                            {service_data.map(service => (
                                <div className='each_service bg-light-color' key={service.id}>
                                    <img src={service.image} alt={service.image} />
                                    <div className='content'>
                                        <h4>{service.title}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;