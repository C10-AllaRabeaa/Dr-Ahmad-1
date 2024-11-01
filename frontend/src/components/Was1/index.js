import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPrint } from '@fortawesome/free-solid-svg-icons';
import "./style.css"

const Was1 = ()=> {
    const navigate = useNavigate();

    const handlePrint = () => {
        window.print();
    };
    return(
        <div dir="rtl" className="about-container">
        <ol className="about-list">
        <li>Tavanic tab 500 mg  1*1 - ( حبة واحدة يومياً بعد الأكل ).</li>
        <li>Arieus tab 5 mg 1*1 - ( حبة قبل النوم ).</li>
        <li>Panadol Sinus 1 gm  tab 1*3 - ( حبة واحدة ثلاث مرات يومياً ).</li>
        <li>Reparil tab 2*3.</li>
        <li>Banucin cream 1*3 - ( دهون ثلاث مرات يومياً مكان القلطب ).</li>
        </ol>
        <div dir="ltr">
                <button className="btn-back" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} /> 
                </button>

                <button className="btn-print" onClick={handlePrint}>
                    <FontAwesomeIcon icon={faPrint} /> Print
                </button>
            </div>
        </div>
    )
}

export default Was1;

