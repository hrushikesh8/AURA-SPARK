import { GROQ_API_KEY } from '../secrets';

console.log("Background service started...");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "ASK_AI") {
    console.log("Received request:", request.text);

    fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: "You are a helpful assistant. Summarize the selected text concisely." },
          { role: "user", content: request.text }
        ]
      })
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("AI Response:", data);
      const answer = data.choices?.[0]?.message?.content || "No response from AI.";
      sendResponse({ success: true, data: answer });
    })
    .catch((error) => {
      console.error("Groq Error:", error);
      sendResponse({ success: false, error: error.message });
    });

    return true; // Keeps the channel open for the async response
  }
});