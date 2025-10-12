import { useState } from 'react';

export default function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Customize AI personality and behavior here
  const aiSettings = {
    name: 'Your AI Name', // Change AI name
    logo: '/your-logo.png', // Change logo path
    personality: 'friendly and professional', // Describe how it should act
    systemPrompt: 'You are a helpful AI that responds clearly, concisely, and politely.' // Default behavior instruction
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);

    try {
      // Calls the backend at /api/chat (ensure your frontend and backend origins are configured correctly)
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: aiSettings.systemPrompt,
          personality: aiSettings.personality,
          messages: newMessages
        })
      });
      const data = await res.json();
      setMessages([...newMessages, { role: 'ai', content: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { role: 'ai', content: 'Error connecting to AI.' }]);
    }

    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-white">
      {/* Header */}
      <header className="p-4 flex items-center gap-3 bg-[#2a2a2a] border-b border-gray-700">
        <img src={aiSettings.logo} alt="AI Logo" className="w-8 h-8 rounded" />
        <h1 className="text-lg font-semibold">{aiSettings.name}</h1>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] p-3 rounded-2xl ${
              msg.role === 'user' ? 'bg-blue-600 self-end ml-auto' : 'bg-gray-700'
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 flex gap-2 border-t border-gray-700 bg-[#2a2a2a]">
        <input
          className="flex-1 bg-[#3a3a3a] text-white rounded-lg p-2 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}