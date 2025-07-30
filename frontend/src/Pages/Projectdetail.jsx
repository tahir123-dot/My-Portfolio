import React, { useEffect, useState } from "react";
import "./Projectdetail.css";
import CloseIcon from "../assets/close.png";
import profile from "../assets/profile.jpg";
import prodcutPic from "../assets/red.png";

const Projectdetail = ({ onClose, product }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 400);
  };

  return (
    <div className={`bottom-sheet ${isVisible ? "show" : ""}`}>
      <div className="modal-content">
        <img
          className="close_icon"
          src={CloseIcon}
          alt="close"
          onClick={handleClose}
        />
      </div>
      <div className="product-info-box">
        <p className="Product-Name">{product.name}</p>
        <div className="user-icon">
          <img src={profile} alt="user" className="user-img" />
          <p className="TR">Tahir Rashid</p>
        </div>
      </div>
      <div className="prodcut-box-pic">
        {product.mediaType === "image" ? (
          <img src={product.mediaUrl} alt={product.name} />
        ) : (
          <video autoPlay muted>
            <source src={`${product.mediaUrl}?q_auto,f_auto`} />
          </video>
        )}
      </div>
      <div className="product-Description">
        <p className="Project-Overview">Project Overview</p>
        <p className="Project-Overview-desc">{product.description}</p>

        {product.link && (
          <p className="githuburl">
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>
        )}
      </div>
      <div className="three-lines">
        <span className="twolines"></span>
        <span className="cricleee-user">
          <img src={profile} />
        </span>
        <span className="twolines"></span>
      </div>
    </div>
  );
};

export default Projectdetail;
