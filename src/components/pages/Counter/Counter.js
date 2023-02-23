import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUtensils, faSmile, faList, faStamp } from "@fortawesome/free-solid-svg-icons";
import './Counter.css';



const Counter = ({className, ...rest}) => {

 let valueDisplays = document.querySelectorAll(".num");
 let interval = 5000;
 valueDisplays.forEach((valueDisplay) => {
     let startValue = 0;
     let endValue = parseInt(valueDisplay.getAttribute("date-val"));
        //  console.log(endValue);
     let duration = Math.floor(interval / endValue);
     let countern = setInterval(function(){
       startValue += 1;
       valueDisplay.textContent = startValue;
       if(startValue === endValue){
              clearInterval(countern)
       }
     }, duration);
 });
   
    return (
        <div className='counter-gap'>
            <Container>
                <div className='wrapper'>
                    <div className='counter'>
                        <FontAwesomeIcon icon={faUtensils} className='count-icon'/>
                        <span className='num' date-val='400'>000</span>
                        <span className='text'>Meals Delivered</span>
                    </div>

                    <div className='counter'>
                        <FontAwesomeIcon icon={faSmile} className='count-icon'/>
                        <span className='num' date-val='540'>000</span>
                        <span className='text'>Happy Customer</span>
                    </div>

                    <div className='counter'>
                        <FontAwesomeIcon icon={faList} className='count-icon'/>
                        <span className='num' date-val='220'>000</span>
                        <span className='text'>Menu Items</span>
                    </div>

                    <div className='counter'>
                        <FontAwesomeIcon icon={faStamp} className='count-icon'/>
                        <span className='num' date-val='760'>000</span>
                        <span className='text'>Travel Movement</span>
                    </div>
                </div>
            </Container>

        
        </div>
    );
};

export default Counter;