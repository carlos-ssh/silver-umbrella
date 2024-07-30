import { useState } from 'react';

export const useBackgroundImage = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(null);

  const fetchBackgroundImage = async (query, clientId) => {
    if (query) {
      try {
        const encodedQuery = encodeURIComponent(query);
        const response = await fetch(`https://pixabay.com/api/?key=${clientId}&q=${encodedQuery}&image_type=photo`);
        const data = await response.json();
        
        console.log(data[0])
        if (data.hits && data.hits.length > 0) {
          const imageUrl = data.hits[3].webformatURL;
          setBackgroundImageUrl(imageUrl);
        } else {
          console.error("No images found");
        }
      } catch (error) {
        console.error("Failed to fetch image data:", error);
      }
    }
  };

  return { backgroundImageUrl, fetchBackgroundImage };
};
