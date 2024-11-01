import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar2 = () => {
    return (
        <nav className="Navbar2">
            <Link to="/About" className="textNav">ارشادات ما بعد العملية</Link>

            <Link to="/Wasfa" className="textNav">الوصفات الطبية </Link>

            <Link to="/Mohem" className="textNav">تعليمات مهمة للمرضى </Link>

            <Link to="/Irshadat2" className="textNav">ارشادات بدأً من الاسبوع الثاني </Link>
        </nav>
    );
};

export default Navbar2;