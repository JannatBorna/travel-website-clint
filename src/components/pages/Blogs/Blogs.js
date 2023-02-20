import React from 'react';
import blogBanner from '../../../images/blogs/blog.jpg';
import blog1 from '../../../images/blogs/blog-1.jpg';
import blog2 from '../../../images/blogs/blog-2.jpg';
import blog3 from '../../../images/blogs/blog-3.jpg';
import blog4 from '../../../images/blogs/blog-4.jpg';
import blog5 from '../../../images/blogs/blog-5.jpg';
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
                        <div>
                            <div className='text-start'>
                                <img src={blog1} alt="" />
                                <h3>STANDARD BLOG POST WITH IMAGE</h3>
                                <small>MAY 28, 2014  BY ADMIN </small>
                                <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Be who you are and say […]</p>

                                <div>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>

                            <div className='text-start'>
                                <img src={blog2} alt="" />
                                <h3>STANDARD BLOG POST WITH IMAGE</h3>
                                <small>MAY 28, 2014  BY ADMIN </small>
                                <p>Lorem ipsum dosectetur adipisicing 
                                elit, sed do.Lorem ipsum dolor sit amet, 
                                consectetur Nulla fringilla purus at leo 
                                dignissim congue. Mauris elementum 
                                accumsan leo vel tempor. Sit amet cursus 
                                nisl aliquam. Aliquam et elit eu nunc 
                                rhoncus viverra quis at felis. Be who you 
                                are and say […]</p>

                                <div>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>

                            <div className='text-start'>
                                <img src={blog3} alt="" />
                                <h3>STANDARD BLOG POST WITH IMAGE</h3>
                                <small>MAY 28, 2014  BY ADMIN </small>
                                <p>Lorem ipsum dosectetur adipisicing 
                                elit, sed do.Lorem ipsum dolor sit amet, 
                                consectetur Nulla fringilla purus at leo 
                                dignissim congue. Mauris elementum 
                                accumsan leo vel tempor. Sit amet cursus 
                                nisl aliquam. Aliquam et elit eu nunc 
                                rhoncus viverra quis at felis. Be who you 
                                are and say […]</p>

                                <div>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>

                            <div className='text-start'>
                                <img src={blog4} alt="" />
                                <h3>STANDARD BLOG POST WITH IMAGE</h3>
                                <small>MAY 28, 2014  BY ADMIN </small>
                                <p>Lorem ipsum dosectetur adipisicing 
                                elit, sed do.Lorem ipsum dolor sit amet, 
                                consectetur Nulla fringilla purus at leo 
                                dignissim congue. Mauris elementum 
                                accumsan leo vel tempor. Sit amet cursus 
                                nisl aliquam. Aliquam et elit eu nunc 
                                rhoncus viverra quis at felis. Be who you 
                                are and say […]</p>

                                <div>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>


                            <div className='text-start'>
                                <img src={blog5} alt="" />
                                <h3>STANDARD BLOG POST WITH IMAGE</h3>
                                <small>MAY 28, 2014  BY ADMIN </small>
                                <p>Lorem ipsum dosectetur adipisicing 
                                elit, sed do.Lorem ipsum dolor sit amet, 
                                consectetur Nulla fringilla purus at leo 
                                dignissim congue. Mauris elementum 
                                accumsan leo vel tempor. Sit amet cursus 
                                nisl aliquam. Aliquam et elit eu nunc 
                                rhoncus viverra quis at felis. Be who you 
                                are and say […]</p>

                                <div>
                                    <FontAwesomeIcon icon={faComments} />
                                    <FontAwesomeIcon icon={faShareFromSquare} className='mx-5'/>
                                </div>
                            </div>    
                        </div>
                    </Col>
                    
                    <Col lg={4} md={4} sm={12}>
                        <div className='cursor-pointer text-start about-3'>
                            <h5>RECENT POSTS</h5>
                            <ul>
                                <li>Standard Blog Post With Image</li>
                                <li>Amazing Fullwidth Post</li>
                                <li>Link Post</li>
                                <li>Quote Post</li>
                                <li>Sidebar Post With Slideshow</li>
                            </ul>
                        </div>

                        <div className='cursor-pointer text-start about-3'>
                            <h5>CATEGORIES</h5>
                            <ul>
                                <li>Business</li>
                                <li>Business</li>
                                <li>Ecommerce</li>
                                <li>Photography</li>
                                <li>Wordpress</li>
                            </ul>
                        </div>
                        
                        <div className='cursor-pointer text-start about-3'>
                            <h5>ARCHIVESS</h5>
                            <ul>
                                <li>12 March 2022</li>
                                <li>24 April 2022</li>
                                <li>30 June 2022</li>
                                <li>05 August 2023</li>
                                <li>20 January 2023</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container> 
            </div>
        </div>
    );
};

export default Blogs;