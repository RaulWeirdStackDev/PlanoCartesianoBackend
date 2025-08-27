import { model } from '../config/gemini.js';
import { cortarAlFinalDeOracion } from '../utils/cortarTexto.js';

export const resolverProblema = async (req, res) => {
  const { message } = req.body;
  try {
    const result = await model.generateContent(message);
    const textoCompleto = result.response.text();
    const textoCortado = cortarAlFinalDeOracion(textoCompleto, 3000); 
    res.json({ reply: textoCortado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
