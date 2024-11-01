import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./style.css";
import Aerius from '../Image/Aerius.jpg';
import Apisal from '../Image/Apisal-Jet.jpeg';
import Baneocin from '../Image/baneocin.webp';
import Claritin from '../Image/Claritin.jpg';
import Kelo from '../Image/Kelo-Cote.png';
import Magnacef from '../Image/MAGNACEF.jpg';
import Panadol from '../Image/PANADOL-SINUS.webp';
import Paper from '../Image/paper-tape.jpg';
import Reparil from '../Image/Reparil.webp';
import Rhinomax from '../Image/RHINOMAX.jpg';
import Suprax from '../Image/suprax-d.webp';
import Tavanic from '../Image/Tavanic.jpeg';
import Navbar3 from '../Navbar3';

const Was = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    // دالة لفتح الـ Modal عند الضغط على الصورة
    const openModal = (image) => {
        setSelectedImage(image);
    };

    // دالة لإغلاق الـ Modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="container1">
            <Navbar3 />
            <div dir="ltr" className="medical">
                <div className="image-container1">
                    <img src={Aerius} alt="Aerius" className="image" onClick={() => openModal(Aerius)} />
                    <img src={Apisal} alt="Apisal" className="image" onClick={() => openModal(Apisal)} />
                    <img src={Baneocin} alt="Baneocin" className="image" onClick={() => openModal(Baneocin)} />
                </div>
                <div className="image-container1">
                    <img src={Claritin} alt="Claritine" className="image" onClick={() => openModal(Claritin)} />
                    <img src={Kelo} alt="Kelo" className="image" onClick={() => openModal(Kelo)} />
                    <img src={Magnacef} alt="Magnacef" className="image" onClick={() => openModal(Magnacef)} />
                </div>
                <div className="image-container1">
                    <img src={Panadol} alt="Panadol" className="image" onClick={() => openModal(Panadol)} />
                    <img src={Paper} alt="Paper" className="image" onClick={() => openModal(Paper)} />
                    <img src={Reparil} alt="Reparil" className="image" onClick={() => openModal(Reparil)} />
                </div>
                <div className="image-container1">
                    <img src={Rhinomax} alt="Rhinomax" className="image" onClick={() => openModal(Rhinomax)} />
                    <img src={Suprax} alt="Suprax" className="image" onClick={() => openModal(Suprax)} />
                    <img src={Tavanic} alt="Tavanic" className="image" onClick={() => openModal(Tavanic)} />
                </div>

                <button className="btn-back" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                {/* Modal */}
                {selectedImage && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <FontAwesomeIcon icon={faTimes} className="modal-close" onClick={closeModal} />
                            <img src={selectedImage} alt="Expanded view" className="modal-image" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Was;
