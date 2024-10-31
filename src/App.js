import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';


// Import your images
import defaultImage from './images/Diwali6.jpeg';
import anotherImage from './images/Diwali8.jpeg';
import thirdImage from './images/third-image.gif'; 
import DiwaliImage4 from './images/diwali1.jpg';
import DiwaliImage5 from './images/Diwali5.gif';
import DiwaliImage6 from './images/Diwali4.jpeg';
import DiwaliImage7 from './images/Diwali7.jpeg';
import DiwaliImage8 from './images/Diwali2.gif';// Add more images as needed

const backgroundImages = [
  { src: defaultImage, label: "Default Background" },
  { src: DiwaliImage8, label: "Another Background" },
  { src: thirdImage, label: "Third Background" },
  { src: DiwaliImage4, label: "Fourth Background" },
  { src: DiwaliImage5, label: "Fifth Background" },
  { src: DiwaliImage6, label: "Sixth Background" },
  { src: DiwaliImage7, label: "Seventh Background" },
  { src: anotherImage, label: "Eighth Background" },
];

const defaultMessages = [
  "May this festival of lights bring you joy, peace, and prosperity!",
  "Wishing you a joyous Diwali filled with happiness and wealth!",
  "May the light of Diwali fill your home with joy and warmth!",
  "Wishing you and your family a blessed Diwali!",
  "May this Diwali bring new happiness, new goals, and new achievements!",
  "May the divine light of Diwali bring peace, prosperity, and happiness to your life. Shine on and have a joyous Diwali!",
  "Wish you are blessed with peace, prosperity, happiness, good health, and grand success. Happy Diwali!",
  "May Maa Lakshmi and Lord Ganesh bless your life and illuminate your home with prosperity, happiness, wealth, and endless joy. Happy Diwali!",
  "May the warmth and brightness of the Diwali lights surround you and your family with positive energy, love, and endless joy!",
  "Wishing you a Diwali filled with beautiful beginnings, new hopes, and lots of happy moments. May your life be as colourful and bright as the rangoli!",
];

const getRandomMessage = (name) => {
  const randomIndex = Math.floor(Math.random() * defaultMessages.length);
  return `${defaultMessages[randomIndex]}`;
};

const getTextColor = (index) => {
  const colors = ['cyan', 'yellow', 'cyan', 'magenta', 'lightgreen'];
  return colors[index % colors.length];
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Diwali Wishes!</h1>
      <p>Change the URL to /wishes/YourName to see your personalized wishes!</p>
    </div>
  );
};



const Wishes = () => {
  const { name } = useParams();
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [customMessage, setCustomMessage] = useState(getRandomMessage(name));
  const [textColorIndex, setTextColorIndex] = useState(0); // State for text color index
  const colors1 = ['white', 'yellow', 'cyan', 'magenta', 'lightgreen']; // List of colors
  const changeBackgroundForward = () => {
    setCurrentBackgroundIndex((currentBackgroundIndex + 1) % backgroundImages.length);
    setCustomMessage(getRandomMessage(name)); // Update message when background changes
  };

  const changeBackgroundBackward = () => {
    setCurrentBackgroundIndex((currentBackgroundIndex - 1 + backgroundImages.length) % backgroundImages.length);
    setCustomMessage(getRandomMessage(name)); // Update message when background changes
  };
 const changeTextColor = () => {
    setTextColorIndex((textColorIndex + 1) % colors1.length); // Cycle through colors
  };
  const showDefaultMessage = () => {
    const randomIndex = Math.floor(Math.random() * defaultMessages.length);
    setCustomMessage(`${defaultMessages[randomIndex]}`);
  };

  const currentBackground = backgroundImages[currentBackgroundIndex].src;
  const textColor = getTextColor(currentBackgroundIndex);
  const currentTextColor = colors1[textColorIndex]; // Get current text color
  return (
    <div style={styles.container}>
      <div style={{
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }} />
      <div style={styles.overlay}>
        <h1 style={{ ...styles.text, color: textColor }}>Happy Diwali, {name}!</h1>
        <p style={{ ...styles.text, color: textColor }}>{customMessage}</p>
        
        {/* Button to change background */}
        <button 
          onClick={changeBackgroundBackward} 
          style={{ ...styles.button, position: 'absolute', top: '26px', left: '72%', transform: 'translateX(-35%)' }}
        >
          Change Background
        </button>
        
        {/* Button to show default message */}
        <button 
          onClick={showDefaultMessage} 
          style={{ ...styles.button, position: 'absolute', top: '25px', left: '21%', transform: 'translateX(-5%)' }}
        >
          Show Default Message
        </button>
 {/* Button to change text color
 <button 
          onClick={changeTextColor} 
          style={{ ...styles.button, position: 'absolute', top: '70px', left: '50%', transform: 'translateX(-50%)' }}
        >
          Change Text Color
        </button> */}
        {/* Created by Adi text in the bottom-right corner */}
        <div style={{ 
          position: 'absolute', 
          bottom: '20px', 
          right: '15px', 
          color: 'white' 
        }}>
          Created by @nkit-2024
        </div>
      </div>
    </div>
  );
};

// Text color function and styles remain the same




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishes/:name" element={<Wishes />} />
      </Routes>
    </Router>
  );
};


const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    color: 'white',
  },
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '85%',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  text: {
    margin: '10px 0',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    margin: '-11px',
  },

};


export default App;
