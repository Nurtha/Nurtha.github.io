# Alea Chat UI + Backend (OpenAI)

This Alea directory contains a simple React ChatUI component and a minimal Node/Express backend that proxies messages to OpenAI's Chat Completions API.

Why: GitHub Copilot doesn't provide a public direct API for embedding in your own web app. Using OpenAI's API is the recommended way to add Copilot-like functionality.

## Files added
- backend/index.js — Express API with POST /api/chat
- backend/package.json — backend dependencies and scripts
- backend/.env.example — environment variables example
- frontend/src/components/ChatUI.jsx — React component that posts to /api/chat

## Setup (local)
1. Backend
   - cd Alea/backend
   - copy `.env.example` -> `.env` and set OPENAI_API_KEY
   - npm install
   - npm run start
   - Backend runs on http://localhost:3000 by default

2. Frontend
   - Ensure your React app serves the ChatUI component
   - In development, if frontend runs on a different origin, you may need to configure proxy in package.json or allow CORS in the backend (already enabled)
   - In production, deploy backend and frontend to the same domain or configure CORS appropriately

## Environment variables
- OPENAI_API_KEY — required, your OpenAI API key (store only on server or in host secrets)
- OPENAI_MODEL — optional (defaults to gpt-3.5-turbo)
- PORT — optional, backend port (default 3000)

## Security
Keep your OPENAI_API_KEY server-side only. Do not embed it in client code or push it to public repos.

## Next steps
1. Add rate limiting, auth, or request size limits if you expect public usage.
2. Tune the model parameters (temperature, max_tokens) to match desired assistant behavior.
3. Optionally, add streaming responses for a better UX.
