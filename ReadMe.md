# ✨ Aura Spark

**Your Intelligent AI Companion for the Web.**

![Aura Spark Banner](https://via.placeholder.com/1200x300?text=Aura+Spark+AI+Extension)
*(Optional: Replace this link with a banner image if you have one)*

Aura Spark is a powerful, lightweight Chrome/Edge extension that transforms how you interact with text on the internet. It acts as a **Smart Head-Up Display (HUD)**, giving you instant definitions, pronunciations, synonyms, and code explanations without ever leaving your current tab.

Built with **JavaScript** and powered by the **Groq API (Llama 3)**.

---

## 📸 See It in Action

| **Smart Dictionary** | **Code Explanation** |
|:---:|:---:|
| ![Dictionary View](https://via.placeholder.com/400x200?text=Upload+Your+Dictionary+Screenshot) | ![Code View](https://via.placeholder.com/400x200?text=Upload+Your+Code+Screenshot) |
| *Instant definitions with phonetics* | *AI explaining complex logic* |

---

## 🚀 Key Features

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

## 🔮 Roadmap (Future Plans)

We are constantly improving Aura Spark. Here is what's coming next:

* [ ] **Context Awareness:** Understanding the whole sentence, not just the word.
* [ ] **Translation Mode:** Instant translation to 30+ languages.
* [ ] **Summarizer:** Select a paragraph and get a TL;DR summary.
* [ ] **PDF Support:** Making Aura work inside PDF viewers.

---

## ❓ Troubleshooting

**"Error: Network Error"**

* Check your internet connection.
* Ensure your API Key in `src/secrets.js` is correct and has no extra spaces.
* Verify you have credits/quota on your Groq account.

**"Extension Error" (Red Icon)**

* Go to `edge://extensions`.
* Click the **Errors** button on the card to see details.
* Usually, reloading the extension (Circular Arrow Icon) fixes this.

---

## 🏗️ Tech Stack

* **Frontend**: Vanilla JavaScript (No heavy frameworks).
* **Backend**: Groq API (Model: `llama-3.3-70b-versatile`).
* **Speech**: Web Speech API (`SpeechSynthesis`).
* **Styling**: Custom CSS (Glassmorphism & Clean UI).

---

## 👨‍💻 Developer

**Hrushikesh Bunni**

* [GitHub](https://www.google.com/search?q=https://github.com/hrushikesh8)

---

*License: MIT*

```

```