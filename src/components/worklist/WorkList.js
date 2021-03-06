import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import './WorkList.scss';

const Worklist = [
    { id: 1, image: require('../../assets/work/project.png'), title: 'Provenance Project', shorttitle: 'Website Designing & Development' },
    { id: 2, image: require('../../assets/work/project1.png'), title: 'Proofreading World', shorttitle: 'Advertisements' },
    { id: 3, image: require('../../assets/work/project2.png'), title: 'Snap Car Wash', shorttitle: 'Business Card' },
    { id: 4, image: require('../../assets/work/project3.png'), title: 'The Mut Spa', shorttitle: 'Logo Design' }
]

const WorkList = () => {
    return (
        <>
            <section className='work_section'>
                <Container>
                    <Row className='work_titles align-items-center'>
                        <Col md={6} sm={12} className='first_column'>
                            <h1>wo<br />rk</h1>
                        </Col>
                        <Col md={6} sm={12} className='second_column'>
                            <h2>Projects that are close to our hearts.</h2>
                        </Col>
                    </Row>
                    <Row xs={1} md={2} lg={2} className='projects_ first_row'>
                        {Worklist.map(work => (
                            <Col className='_column' key={work.id}>
                                <img src={work.image} alt='project' />
                                <h3>{work.title}</h3>
                                <h4><Link to='/'>{work.shorttitle}</Link></h4>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default WorkList;