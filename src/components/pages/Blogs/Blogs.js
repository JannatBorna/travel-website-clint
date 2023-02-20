import React from 'react';
import blogBanner from '../../../images/blogs/blog.jpg';
import blog1 from '../../../images/blogs/blog-1.jpg';
import blog2 from '../../../images/blogs/blog-2.jpg';
import blog3 from '../../../images/blogs/blog-3.jpg';
import blog4 from '../../../images/blogs/blog-4.jpg';
import blog5 from '../../../images/blogs/blog-5.jpg';
import blog6 from '../../../images/blogs/blog-6.jpg';
import blog7 from '../../../images/blogs/blog-7.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faComments, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='nav-banner'>
                <img src={blogBanner} alt="" />     
                <div className='nav-banner-text'>
                    <h3>BLOG RIGHT SIDEBAR</h3>
                    <p>Home / <span>Blogs</span></p>
                </div>
            </div>

        <div className='blogs'>
            <Container>
                <Row>
                    <Col lg={8} md={8} sm={12}>
                            <div className='mb-5 text-start'>
                                <img src={blog1} alt="" />
                                <h3 className='my-4 text-dark fs-4'>STANDARD BLOG POST WITH IMAGE</h3>
                                <small className='text-danger'>MAY 28, 2014  BY ADMIN </small>
                                <p className='my-3'>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Be who you are and say […]</p>

                                <div className='blog-icon'>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>

                            <div className='mb-5 text-start'>
                                <img src={blog2} alt="" />
                                <h3 className='my-4 text-dark fs-4'>AMAZING FULLWIDTH POST</h3>
                                <small className='text-danger'>MAY 28, 2014  BY ADMIN </small>
                                <p className='my-3'>Lorem ipsum dosectetur adipisicing 
                                elit, sed do.Lorem ipsum dolor sit amet, 
                                consectetur Nulla fringilla purus at leo 
                                dignissim congue. Mauris elementum 
                                accumsan leo vel tempor. Sit amet cursus 
                                nisl aliquam. Aliquam et elit eu nunc 
                                rhoncus viverra quis at felis. Be who you 
                                are and say […]</p>

                                <div className='blog-icon'>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>

                            <div className='mb-5 text-start'>
                                <img src={blog3} alt="" />
                                <h3 className='my-4 text-dark fs-4'>PREMIUM RESPONSIVE WORDPRESS THEME</h3>
                                <small className='text-danger'>MAY 28, 2014  BY ADMIN </small>
                                <p className='my-3'>Lorem ipsum dosectetur adipisicing 
                                elit, sed do.Lorem ipsum dolor sit amet, 
                                consectetur Nulla fringilla purus at leo 
                                dignissim congue. Mauris elementum 
                                accumsan leo vel tempor. Sit amet cursus 
                                nisl aliquam. Aliquam et elit eu nunc 
                                rhoncus viverra quis at felis. Be who you 
                                are and say […]</p>

                                <div className='blog-icon'>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>

                            <div className='mb-5 text-start'>
                                <img src={blog4} alt="" />
                                <h3 className='my-4 text-dark fs-4'>SSIDEBAR POST WITH SLIDESHOW</h3>
                                <small className='text-danger'>MAY 28, 2014  BY ADMIN </small>
                                <p className='my-3'>Lorem ipsum dosectetur adipisicing 
                                elit, sed do.Lorem ipsum dolor sit amet, 
                                consectetur Nulla fringilla purus at leo 
                                dignissim congue. Mauris elementum 
                                accumsan leo vel tempor. Sit amet cursus 
                                nisl aliquam. Aliquam et elit eu nunc 
                                rhoncus viverra quis at felis. Be who you 
                                are and say […]</p>

                                <div className='blog-icon'>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>


                            <div className='mb-5 text-start'>
                                <img src={blog5} alt="" />
                                <h3 className='my-4 text-dark fs-4'>DUIS VESTIBULUM QUIS QUAM</h3>
                                <small className='text-danger'>MAY 28, 2014  BY ADMIN </small>
                                <p className='my-3'>Lorem ipsum dosectetur adipisicing 
                                elit, sed do.Lorem ipsum dolor sit amet, 
                                consectetur Nulla fringilla purus at leo 
                                dignissim congue. Mauris elementum 
                                accumsan leo vel tempor. Sit amet cursus 
                                nisl aliquam. Aliquam et elit eu nunc 
                                rhoncus viverra quis at felis. Be who you 
                                are and say […]</p>

                                <div className='blog-icon'>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>   

                            <div className='mb-4 text-start'>
                                <img src={blog6} alt="" />
                                <h3 className='my-4 text-dark fs-4'>DUIS VESTIBULUM QUIS QUAM</h3>
                                <small className='text-danger'>MAY 28, 2014  BY ADMIN </small>
                                <p className='my-3'>Lorem ipsum dosectetur adipisicing 
                                elit, sed do.Lorem ipsum dolor sit amet, 
                                consectetur Nulla fringilla purus at leo 
                                dignissim congue. Mauris elementum 
                                accumsan leo vel tempor. Sit amet cursus 
                                nisl aliquam. Aliquam et elit eu nunc 
                                rhoncus viverra quis at felis. Be who you 
                                are and say […]</p>

                                <div className='blog-icon'>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>    

                            <div className='mb-4 text-start'>
                                <img src={blog7} alt="" />
                                <h3 className='my-4 text-dark fs-4'>DUIS VESTIBULUM QUIS QUAM</h3>
                                <small>MAY 28, 2014  BY ADMIN </small>
                                <p className='my-3'>Lorem ipsum dosectetur adipisicing 
                                elit, sed do.Lorem ipsum dolor sit amet, 
                                consectetur Nulla fringilla purus at leo 
                                dignissim congue. Mauris elementum 
                                accumsan leo vel tempor. Sit amet cursus 
                                nisl aliquam. Aliquam et elit eu nunc 
                                rhoncus viverra quis at felis. Be who you 
                                are and say […]</p>

                                <div className='blog-icon'>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>     
                    </Col>
                    
                    <Col lg={4} md={4} sm={12}>
                        <div className='blog-list'>
                            <h5>RECENT POSTS</h5>
                                <span>Standard Blog Post With Image</span>
                                <span className='my-2'>Amazing Fullwidth Post</span>
                                <span>Link Post</span>
                                <span className='my-2'>Quote Post</span>
                                <span>Sidebar Post With Slideshow</span>
                        </div>

                        <div className='my-5 blog-list'>
                            <h5>CATEGORIES</h5>
                                <span>Business</span>
                                <span className='my-2'>Business</span>
                                <span>Ecommerce</span>
                                <span className='my-2'>Photography</span>
                                <span>Wordpress</span>
                        </div>
                        
                        <div className='my-5 blog-list'>
                            <h5>ARCHIVESS</h5>
                                <span>12 March 2022</span>
                                <span className='my-2'>24 April 2022</span>
                                <span>30 June 2022</span>
                                <span className='my-2'>05 August 2023</span>
                                <span>20 January 2023</span>
                        </div>
                    </Col>
                </Row>
            </Container> 
            </div>
        </div>
    );
};

export default Blogs;