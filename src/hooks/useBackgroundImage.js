import { useState } from 'react'

export const useBackgroundImage = () => {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState(null);

    const fetchBackgroundImage = async (query, clientId) => {
        if (query) {
            try {
                const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&lang=es&client_id=${clientId}`);
                const data = await response.json();
                if (data.results.length > 0) {
                    const imageUrl = data.results[0].urls.regular;
                    setBackgroundImageUrl(imageUrl);
                }
            } catch (error) {
                console.error("Failed to fetch image data:", error);
            }
        }
    };

    return { backgroundImageUrl, fetchBackgroundImage };
};
