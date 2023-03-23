import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import seemore from '../../../images/others/seemore.png';
import seemore2 from '../../../images/others/seemore-2.png';
import './Seemore.css';
import Footer from '../Shared/Footer/Footer';

const Seemore = () => {
    return (
        <div className='seemore'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className='seemore-img'>
                            <img src={seemore} alt="" />
                            
                            <h3 className='mt-5 text-start'>Tra<span className='text-white theme-color'>vel Text Services</span></h3>
                             <p className='text-start'>Travel texts are simply descriptions of destinations that appear in travel-related media such as magazines, websites, or brochures. They provide information about a particular destination, including its features and highlights. In contrast, destination texts are written by tourist organizations for their own website or publication. These texts typically include more detailed information about a destination than what’s found in travel texts.</p>
                             <p className='text-start'>There are many things that make a good travel text. But, most importantly, the author must remember to entertain the reader, not recruit them. After all, no one wants to read a dry list of facts about a destination. Instead, they want to be entertained and informed about what is available at their chosen destination.</p>
                            
                        </div>

                        <div className='my-5 seemore-img-2'>
                             <img src={seemore2} alt="" />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='seemore-text'>
                            <h2>Best <span className='text-white theme-color'>Traveling Text Types</span></h2>
                            <p>Travel texts are simply descriptions of destinations that appear in travel-related media such as magazines, websites, or brochures. They provide information about a particular destination, including its features and highlights. In contrast, destination texts are written by tourist organizations for their own website or publication. These texts typically include more detailed information about a destination than what’s found in travel texts.</p>
                            <p>Travel operators and airlines are the first to think of travel texts. They need to ensure that their customers are well-informed about their upcoming trips, so they can make the best choices possible. Hotel chains, agencies, or portals rely on authentic descriptions of destinations. They want to be able to offer their customers as much information as possible about a destination before they book a trip. That’s why destination texts are often long and include thorough information about accommodation, excursions and entertainment tips.</p>
                            
                            <h3>Travel <span className='text-white theme-color'>Texts and Descriptions of Destinations</span></h3>
                            <p>There are many things that make a good travel text. But, most importantly, the author must remember to entertain the reader, not recruit them. After all, no one wants to read a dry list of facts about a destination. Instead, they want to be entertained and informed about what is available at their chosen destination.</p>
                            <p>At clickworker, we know this better than anyone. That’s why we offer information about destinations and travel tips in an engaging way that will have you itching to pack your bags and go! Our tone is casual and our style light-hearted, so you can feel like you’re chatting with a friend who just happens to know everything about the best places to go on vacation.</p>
                            <p>Once you know what type of traveler your target audience is, it’ll be easier to choose the right photos and design. What is the vacation they’re looking to have? If you’re targeting people who want to relax on their vacation, go for light blues and greens. On the other hand, if your target customer is adventurous, then use bright colors and daring fonts. Whatever route you decide to take, make sure the photos complement each other so that there’s a unified feeling across the entire brochure. And don’t forget – color scheme should always match the feel of your destination!</p>
                            <h3>Use <span className='text-white theme-color'>Cases for Travel Texts</span></h3>
                            <p>Travel operators and airlines rely on destination descriptions for their business. They need to be able to offer a wide range of accommodations, so they need detailed, authentic descriptions of destinations.Leading hotel chains across Europe and the world need detailed, authentic descriptions of destinations becausethey offer a wide range of accommodations. This is where destination texts come in handy – they provide all thenecessary information for hotels to make a decision about where to stay.</p>
                            <p>Publishers of travel magazines have a demand for texts about countries and regions. Customers want interesting information that will help them plan their trips. You can order the texts with proofreading for an additional charge and get texts that your visitors and search engines like.Destination texts are information specific to the location, such as restaurant recommendations or historical facts. They’re helpful for people who are already familiar with a destination and want more details about what’s available there.</p>
                            <p>Travel texts are general information about destinations, with a focus on helpful tips and advice. They can help first-time travelers figure out what they need to know before they go anywhere.</p>

                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Seemore;