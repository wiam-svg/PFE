import React, { useState, useEffect } from 'react';
import { Camera, MapPin, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

// StepCard component for each step
const StepCard = ({ icon, title, number, description, isActive, color, onClick }) => (
  <div 
    className={`transform transition-all duration-500 ${isActive ? 'scale-105' : 'scale-100 opacity-80'}`}
    onClick={onClick}
  >
    <div className={`rounded-xl p-6 cursor-pointer ${isActive ? color : 'bg-black bg-opacity-30'} shadow-xl hover:shadow-2xl transition-all`}>
      <div className="flex items-center gap-5">
        <div className="bg-white bg-opacity-20 p-4 rounded-full text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{number}. {title}</h3>
          <p className="text-white text-opacity-90 mt-2">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

// Main component
const HowItWorksCard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Sample image array - replace with your actual images
  const images = [
   '/storage/img_desing/images (2).jpeg',
   '/storage/img_desing/10331273.webp',
   '/storage/img_desing/images (1).jpeg'
  ];

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const newStep = (prev + 1) % 3;
        setActiveImage(newStep); // Sync image with step
        return newStep;
      });
    }, 4000);
    
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 300);

    return () => clearInterval(interval);
  }, []);

  // Handle image navigation
  const navigateImage = (direction) => {
    if (direction === 'next') {
      setActiveImage((prev) => {
        const newImage = (prev + 1) % images.length;
        setActiveStep(newImage); // Sync step with image
        return newImage;
      });
    } else {
      setActiveImage((prev) => {
        const newImage = prev === 0 ? images.length - 1 : prev - 1;
        setActiveStep(newImage); // Sync step with image
        return newImage;
      });
    }
  };

  // Define the steps
  const steps = [
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Signalez un problème",
      description: "Prenez une photo, ajoutez une description, et localisez le souci sur la carte.",
      color: "bg-gradient-to-r from-red-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Suivi en temps réel",
      description: "Les citoyens et les autorités peuvent suivre, voter, et commenter les signalements.",
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Résolution & retour",
      description: "Recevez des mises à jour et évaluez l'intervention après résolution.",
      color: "bg-gradient-to-r from-red-500 to-purple-500"
    }
  ];
  
  // Switch to a step and its corresponding image
  const handleStepClick = (index) => {
    setActiveStep(index);
    setActiveImage(index);
  };

  return (
    <AppLayout>
    <div className={`max-w-6xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {/* Main card with gradient background */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-pink-500 to-orange-500 opacity-90"></div>
        
        {/* Simplified background pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white" 
              style={{
                top: `${(i * 20) % 100}%`,
                left: `${(i * 15) % 100}%`,
                width: `${80 + (i * 10)}px`,
                height: `${80 + (i * 10)}px`,
                opacity: 0.2 + (i * 0.05)
              }}
            />
          ))}
        </div>
        
        {/* Content container */}
        <div className="relative p-8 md:p-12 z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-white mb-4">
              🛠️ Comment ça marche ?
            </h2>
            <div className="h-1 w-32 mx-auto bg-white rounded-full opacity-70"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image carousel area */}
            <div className="transform transition-all duration-700 hover:scale-105">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white border-opacity-25">
                {/* Image carousel */}
                <div className="relative h-96">
                  {images.map((img, index) => (
                    <img 
                      key={index}
                      src={img}
                      alt={`Étape ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImage === index ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                  
                  {/* Image navigation buttons */}
                  <button 
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button 
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
                
                {/* Step indicators */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-center space-x-2 mb-4">
                    {steps.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => handleStepClick(index)}
                        className={`w-3 h-3 rounded-full transition-all ${activeStep === index ? 'bg-white scale-125' : 'bg-white opacity-50'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <StepCard 
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  number={index + 1}
                  description={step.description}
                  isActive={activeStep === index}
                  color={step.color}
                  onClick={() => handleStepClick(index)}
                />
              ))}
            </div>
          </div>

          {/* Goal section */}
          <div className="mt-12">
            <div className="bg-white bg-opacity-15 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 shadow-xl">
              <div className="flex items-center">
                <div className="text-5xl mr-4">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Notre Objectif</h3>
                  <p className="text-white text-lg">
                    <strong>Favoriser la participation citoyenne</strong> et améliorer notre cadre de vie ensemble pour une communauté plus engagée et un environnement urbain plus agréable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AppLayout>
  );
};

export default HowItWorksCard;