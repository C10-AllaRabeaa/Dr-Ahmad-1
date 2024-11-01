import React from 'react';
import Slider from "react-slick";
import Navbar2 from '../Navbar2';
import Image1 from '../Image/1.jpg';
import Image2 from '../Image/2.jpg';
import Image3 from '../Image/3.jpg';
import Image4 from '../Image/4.jpg';
import Image5 from '../Image/5.jpg';
import Image6 from '../Image/ahmade elyan.jpg';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "./style.css"; // تأكد من وجود ملف CSS

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <div className="slick-prev" style={{ color: 'black', fontSize: '30px' }}><FaArrowAltCircleLeft /></div>,
        nextArrow: <div className="slick-next" style={{ color: 'black', fontSize: '30px' }}><FaArrowAltCircleRight /></div>
    };

    return (
        <div className="container1">
            <Navbar2 />
            
            {/* قسم الصورة مع النص في ديف واحد */}
            <div dir="rtl" className="profile-container">
                <div className="image-text-container">
                    <img className='image6' src={Image6} alt="Doctor" />
                    <div className="text-container">
                        <h1>استشاري جراحة وتجميل الأنف</h1>
                        
                        {/* معلومات الاتصال */}
                        <div className="contact-info">
                            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} /> 
                            <a href="tel:+962796505005" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span>00962796505005</span>
                            </a>
                        </div>

                        {/* معلومات الموقع */}
                        <div className="location-info">
                            <a href="https://www.google.com/maps/place/31.9454,35.9284" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                                <span>عمّان، الأردن</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* سلايدر الصور */}
            <div className="image-slider" style={{
                width: '90%',
                margin: '20px auto',
                textAlign: 'center',
                backgroundColor: '#f0f0f0',
                padding: '20px',
                borderRadius: '10px',
                border: '2px solid black'
            }}>
                <Slider {...settings}>
                    <div className='image1'>
                        <img src={Image1} alt="Slide 1" />
                    </div>
                    <div className='image1'>
                        <img src={Image2} alt="Slide 2" />
                    </div>
                    <div className='image1'>
                        <img src={Image3} alt="Slide 3" />
                    </div>
                    <div className='image1'>
                        <img src={Image4} alt="Slide 4" />
                    </div>
                    <div className='image1'>
                        <img src={Image5} alt="Slide 5" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Home;
