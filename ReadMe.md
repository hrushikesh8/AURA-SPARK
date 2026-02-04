# ✨ Aura Spark

**Your Intelligent AI Companion for the Web.**

Aura Spark is a powerful, lightweight Chrome/Edge extension that transforms how you interact with text on the internet. It acts as a **Smart Head-Up Display (HUD)**, giving you instant definitions, pronunciations, synonyms, and code explanations without ever leaving your current tab.

Built with **JavaScript** and powered by the **Groq API (Llama 3)**.

---

## 🚀 Features

### 📖 Smart Dictionary
Select any word to instantly see its **definition**, **syllable breakdown**, and **phonetics**.
> *Example:* Select "Tectonic" → See `Tec·ton·ic [tɛkˈtɒnɪk]`

### 🔊 Native Pronunciation
Don't just read it, hear it. Aura uses the browser's native Text-to-Speech engine for **zero-latency pronunciation**.

### 📚 Contextual Synonyms
Need a better word? Click the **[📚 Synonyms]** button to dynamically fetch relevant alternatives using AI.

### 💻 Code Explanation Mode
Stuck on a weird function? Select a code snippet (like `cv.close()`) and click **[ </> Code ]**. Aura detects it's programming logic and explains exactly how it works in plain English.

---

## 🛠️ Installation (Developer Mode)

Since this project uses a private API key, you need to set it up locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/hrushikesh8/AURA-SPARK.git](https://github.com/hrushikesh8/AURA-SPARK.git)
cd AURA-SPARK

```

### 2. Get Your API Key

This extension uses the **Groq Cloud API** (Llama 3 models) for its intelligence.

1. Go to [Groq Console](https://console.groq.com/).
2. Create a free account and generate an API Key (`gsk_...`).

### 3. Configure Security (Crucial Step!)

To keep your key safe, Aura expects a secret file that is **ignored** by Git.

1. Navigate to the `src` folder (where `background.js` is located).
2. Create a new file named: **`secrets.js`**
3. Paste the following code into it:

```javascript
// src/secrets.js
self.GROQ_API_KEY = "gsk_YOUR_ACTUAL_API_KEY_HERE";

```

*(Make sure to replace the text in quotes with your real key).*

### 4. Load into Browser

1. Open **Microsoft Edge** or **Chrome**.
2. Navigate to `edge://extensions` or `chrome://extensions`.
3. Enable **"Developer Mode"** (toggle in the corner).
4. Click **"Load Unpacked"**.
5. Select the **AURA-SPARK** folder.

---

## 🎮 How to Use

1. **Select any text** on a webpage (e.g., Wikipedia, StackOverflow).
2. The **Aura Card** will appear instantly with the definition.
3. Click the **Speaker Icon 🔊** to hear it.
4. Click **[📚 Synonyms]** or **[ </> Code ]** to expand more options.

---

## 🏗️ Tech Stack

* **Frontend**: Vanilla JavaScript (No heavy frameworks).
* **Backend**: Groq API (Model: `llama-3.3-70b-versatile`).
* **Speech**: Web Speech API (`SpeechSynthesis`).
* **Styling**: Custom CSS (Glassmorphism & Clean UI).

---

## 🛡️ Privacy & Security

* **Local Execution**: Your API key stays on your machine (`secrets.js`) and is never uploaded to GitHub.
* **No Tracking**: This extension does not track your browsing history. It only processes the text you explicitly select.

---

## 👨‍💻 Developer

**Hrushikesh Bunni**

* [GitHub](https://www.google.com/search?q=https://github.com/hrushikesh8)

---

*License: MIT*

```