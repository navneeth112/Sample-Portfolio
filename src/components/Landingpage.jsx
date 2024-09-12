import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styled components
const LandingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
  text-align: center;
`;

const Heading = styled(motion.h1)`
  font-size: 3rem;
  color: #00bcd4;
  margin-bottom: 20px;
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StyledImage = styled.img`
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  height: auto;
  max-height: 300px; /* Adjust as needed */
`;

const landingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } }
};

const LandingPage = () => {
  return (
    <LandingSection>
      <Heading initial="hidden" animate="visible" variants={landingVariants}>
       Hello I am Navneeth 
      </Heading>
      <ImageContainer initial="hidden" animate="visible" variants={imageVariants}>
        <StyledImage
          src="src/assets/images/390857982_1234323733904720_7816042515698074308_n.jpg"
          alt="My Portfolio"
        />
      </ImageContainer>
    </LandingSection>
  );
};

export default LandingPage;
