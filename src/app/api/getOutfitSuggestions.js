// pages/api/getOutfitSuggestions.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_CLIENT_ID,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { days } = req.body;
  
  const prompt = `
    Escribe sugerencias de outfit para el tipo de clima de estos siguientes dias: ${JSON.stringify(days)}.
    recibiras una lista de los tipos de clima, y la temperatura alta y baja entre otra informacion.
    haz que tus recomendaciones sean generales y no sobre pase las 150 palabras en 5 parrafos.
    Tus respuestas siempre las debes de hacer en espanol.
    No hagas puntuaciones concretas.
  `;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 150,
    });

    const suggestions = response.data.choices[0].text.trim();
    console.log('OpenAI suggestions:', suggestions); // Log para verificar la respuesta
    res.status(200).json({ suggestions });
  } catch (error) {
    console.error('Error generating suggestions:', error);
    res.status(500).json({ error: 'Error generating suggestions' });
  }
}
