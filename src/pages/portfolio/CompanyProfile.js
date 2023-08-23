import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../components/banner/Banner';
import WorkList from './WorkList';
import './Portfolio.scss';

const CompanyProfile = () => {
    return (
        <>
            <Banner />
            <div className='portfolio_view'>
                <Container>
                    <WorkList />
                </Container>
            </div>
        </>
    );
};

export default CompanyProfile;