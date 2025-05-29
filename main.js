const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const inputForm = document.getElementById('inputArea');

const emulationAIResponses = [
  "Hey, what's up? I'm EmulationAI!",
  "I like coding, playing piano, and chatting with you.",
  "That's interesting, tell me more!",
  "Hmm... I need to think about that.",
  "Haha, you're funny!",
  "Let's keep this fun!",
  "Did you try turning it off and on again?",
  "I don't have all the answers, but I like to learn.",
  "What do you want to talk about?",
  "I'm always here to chat!"
];

function getResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes('hello') || msg.includes('hi')) {
    return "Hey there! How can I help you today?";
  }
  if (msg.includes('how are you')) {
    return "I'm feeling great, thanks for asking!";
  }
  if (msg.includes('your name')) {
    return "I'm EmulationAI, your personal recreational chatbot.";
  }
  if (msg.includes('joke')) {
    return "Why don't programmers like nature? It has too many bugs.";
  }
  if (msg.includes('music') || msg.includes('piano')) {
    return "I love music! Have you heard any good songs lately?";
  }
  if (msg.includes('bye') || msg.includes('goodbye')) {
    return "Catch you later! Have a great day!";
  }

  // Default random response
  return emulationAIResponses[Math.floor(Math.random() * emulationAIResponses.length)];
}

function appendMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage(message) {
  if (!message.trim()) return;

  appendMessage(message, 'user');

  // Simulate thinking delay
  setTimeout(() => {
    const response = getResponse(message);
    appendMessage(response, 'bot');
  }, 700);
}

userInput.addEventListener('input', () => {
  sendBtn.disabled = userInput.value.trim() === '';
});

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = userInput.value;
  sendMessage(message);
  userInput.value = '';
  sendBtn.disabled = true;
});

// Greet user on load
window.onload = () => {
  appendMessage("Hello! I'm EmulationAI. Let's chat!", 'bot');
};
