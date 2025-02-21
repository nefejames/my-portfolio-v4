import React from 'react';

const SocialMediaLogos = () => {
    const platforms = [
      { name: 'Google', image: '/images/google.png' },
      { name: 'Empty' }, // No image
      { name: 'Apple', image: '/images/apple.png' },
      { name: 'Empty' }, // No image
      { name: 'Spotify', image: '/images/spotify.png' },
      { name: 'Empty' }, // No image
      { name: 'Slack', image: '/images/slack.png' },
      { name: 'Figma', image: '/images/figma.png' },
      { name: 'Empty' }, // No image
      { name: 'Airbnb', image: '/images/airbnb.png' },
      { name: 'Google', image: '/images/google.png' }, // Duplicate Google icon
      { name: 'Empty' }, // No image
    ];
  
    return (
      <div className="p-8 bg-black">
        <h2 className="text-white text-2xl mb-4 uppercase tracking-widest">
          My Services
        </h2>
        <p className="text-gray-400 text-sm mb-6">Tested and trusted by multiple brands</p>
        
        {/* Custom Grid Layout for Logos */}
        <div className="grid grid-cols-4 grid-rows-3 gap-2">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-16 h-16 rounded-lg ${
                platform.image ? 'bg-black' : 'bg-gray-800'
              }`}
            >
              {platform.image ? (
                <img src={platform.image} alt={platform.name} className="w-10 h-10" />
              ) : (
                <div className="w-10 h-10"></div> // Empty placeholder
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default SocialMediaLogos;