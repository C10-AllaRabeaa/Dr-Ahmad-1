import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Nav3 = () => {
    return (
        <nav className="Navbar2">
        <Link to="/Was0" className="textNav"> وصفة عامة</Link>

        <Link to="/Was1" className="textNav"> الوصفة العادية </Link>

        <Link to="/Was2" className="textNav"> وصفة المرضعة  </Link>

        <Link to="/Was3" className="textNav">وصفة اقل من عمر 18 سنة</Link>

        
    </nav>
    );
};

export default Nav3;