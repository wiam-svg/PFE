import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function BladiShopFooter() {
  return (
    <footer className="container border-top py-4">
      <div className="row align-items-center">
        {/* Logo à gauche et plus grand */}
        <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
          <img 
            src='/storage/img_desing/signalement_images/logo.jpg'
            alt="BladiShop Logo" 
            style={{ width: "160px", height: "160px", objectFit: "contain" }}
          />
        </div>
        
        {/* Réseaux sociaux au milieu sur la même ligne */}
        <div className="col-md-8 text-center">
          <h3 className="fw-bold mb-3">Nos réseaux sociaux :</h3>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <div className="d-flex align-items-center me-3">
              <Facebook size={24} color="black" />
              <span className="ms-2">BladiShopFacebook</span>
            </div>
            <div className="d-flex align-items-center me-3">
              <Instagram size={24} color="black" />
              <span className="ms-2">BladishopOfficielle</span>
            </div>
            <div className="d-flex align-items-center">
              <Youtube size={24} color="black" />
              <span className="ms-2">BladishopOfficielle</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}