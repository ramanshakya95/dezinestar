import React from 'react';
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import bannerimg from '../../assets/svg/Banner-Img.png';
import downarrow from '../../assets/svg/down-arrow.svg';
import './Banner.scss';

const BANNER_CONTENT = {
    "/": <section className='home_banner_section'>
            <Container className='p-0'>
                <Row className='banner align-items-center m-0 flex-wrap'>
                    <Col md={6} sm={12} className='banner_content p-0'>
                        <h1>Designing Your Digital Success</h1>
                        <h5>The key to great web design is capturing the spirit of the client and the essence of the brand!</h5>
                    </Col>
                    <Col md={6} sm={12} className='banner_img ps-xxl-5 ps-lg-4 ps-md-3 ps-sm-2 ps-0 p-0 text-right'>
                        <img src={bannerimg} alt='banner-img' />
                    </Col>
                </Row>
            </Container>
        </section>,
    "/home": <section className='home_banner_section'>
            <Container className='p-0'>
                <Row className='banner align-items-center m-0 flex-wrap'>
                    <Col md={6} sm={12} className='banner_content p-0'>
                        <h1>Designing Your Digital Success</h1>
                        <h5>The key to great web design is capturing the spirit of the client and the essence of the brand!</h5>
                    </Col>
                    <Col md={6} sm={12} className='banner_img ps-xxl-5 ps-lg-4 ps-md-3 ps-sm-2 ps-0 p-0 text-right'>
                        <img src={bannerimg} alt='banner-img' />
                    </Col>
                </Row>
            </Container>
        </section>,
    "/about": <section className='about_banner_section'>
            <Container className='p-0'>
                <Row className='banner align-items-center m-0'>
                    <Col md='auto' className='large-title p-0'>
                        <h1>STU<br />DIO</h1>
                    </Col>
                    <Col className='banner_content'>
                        <h2>A boutique team of designers, developers & strategists.</h2>
                        <p>We have an innovative way of working, removing unnecessary costs, offering lower prices than other similar agencies. If you are looking to find a digital agency then we’d love to hear from you.</p>
                    </Col>
                </Row>
            </Container>
        </section>,
    "/services": <section className='services_banner_section'>
            <Container className='p-0'>
                <Row className='banner align-items-center m-0'>
                    <Col className='text-center large-title p-0'>
                        <h1>Digital Marketing Services</h1>
                        <p>Our forward-thinking approach to web technologies and digital marketing services combined with our strong relationship management means you’re in good hands.</p>
                        <img id="click_bottom" src={downarrow} alt='down arrow' />
                    </Col>
                </Row>
            </Container>
        </section>,
    "/our-work": <section className='about_banner_section work_banner_section'>
            <Container className='p-0'>
                <Row className='banner align-items-center m-0'>
                    <Col md='auto' className='large-title p-0'>
                        <h1>WO<br />RK</h1>
                    </Col>
                    <Col className='banner_content'>
                        <h2>We are experts in bringing brands to life digitally.</h2>
                        <p>Dezinestar is a progressive and insightful design agency, technically and creatively skilled to translate your brand into its best digital self. Our design and development approach creates impactful, engaging brands and immersive digital experiences that bring you a return on creativity.</p>
                    </Col>
                </Row>
            </Container>
        </section>,
};

const Banner = () => {
    const { pathname } = useLocation();
    return (
        <>
            {BANNER_CONTENT[pathname]}
        </>
    );
};

export default Banner;