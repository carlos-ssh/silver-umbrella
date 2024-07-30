import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const Title = styled.div`
  font-size: 22px;
`

export const WeatherOutfitComponent = ({ days, city }) => {
  const [suggestions, setSuggestions] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (days && Object.keys(days).length > 0) {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch('/api/getOutfitSuggestions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ days }),
          });
          const data = await response.json();
          if (response.ok) {
            setSuggestions(data.suggestions);
          } else {
            setError(data.error || 'Failed to fetch suggestions');
          }
        } catch (error) {
          console.error('Error fetching suggestions:', error);
          setError('Error fetching suggestions');
        } finally {
          setLoading(false);
        }
      }
    };
    fetchSuggestions();
  }, [days]);

  return (
    <div>
      <Title>Sugerencias de Outfit para {city}</Title>
      {loading && <p>Cargando sugerencias...</p>}
      {error && <p>Error: {error}</p>}
      {suggestions && (
        <div>
          <h2>Recomendaciones de Outfits:</h2>
          <p>{suggestions}</p>
        </div>
      )}
    </div>
  );
};
