import React from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPrint } from '@fortawesome/free-solid-svg-icons';
import "./style.css"

const Was0 = () => {
    const navigate = useNavigate();

    const handlePrint = () => {
        window.print();
    };

    return (
        <div dir="rtl" className="about-container">
            <div className="about-list">
                <h1 className="h123">Prescription</h1>
                <div>
                    <span className="label-text"> Patient name :</span>
                    <input type="text" className="input-box" placeholder="Enter patient name" />
                </div>
                <ol>
                    <li>Magnacef 400 mg 1*1 - حبة مرة يوميا</li>
                    <li>Reparil 2*2 - حبتين مرتين يوميا</li>
                    <li>Rhinomax</li>
                    <li>Kelo cote gel - مكان القطبة</li>
                    <li>Paper tape</li>
                    <li>Apisal Jet</li>
                </ol>
            </div>

            <div dir="ltr">
                <button className="btn-back" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="btn-print" onClick={handlePrint}>
                    <FontAwesomeIcon icon={faPrint} /> Print
                </button>
            </div>
        </div>
    );
}

export default Was0;
