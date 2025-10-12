require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-3.5-turbo';

if (!OPENAI_KEY) {
  console.warn('Warning: OPENAI_API_KEY is not set. Please set it in your environment.');
}

app.post('/api/chat', async (req, res) => {
  const { system, personality, messages } = req.body;

  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages field must be an array' });
  }

  // Build OpenAI messages: include optional system and personality
  const chatMessages = [];
  if (system) chatMessages.push({ role: 'system', content: system });
  if (personality) chatMessages.push({ role: 'system', content: `Personality: ${personality}` });
  for (const m of messages) {
    // Expecting { role: 'user'|'ai'|'system', content: '...' }
    chatMessages.push({ role: m.role, content: m.content });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: OPENAI_MODEL,
        messages: chatMessages,
        // adjust temperature, max_tokens, etc. as needed
        temperature: 0.2,
        max_tokens: 800
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data?.choices?.[0]?.message?.content ?? '';
    res.json({ reply });
  } catch (err) {
    console.error('OpenAI request failed:', err?.response?.data || err.message);
    res.status(500).json({ reply: 'Error connecting to AI.' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Chat backend listening on http://localhost:${port}`);
});
