import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';

console.log("🚀 Aura Spark Content Script LOADED!"); // Check 1: Does script run?

const Main = () => {
  const [showButton, setShowButton] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    const handleMouseUp = (event: MouseEvent) => {
      console.log("🖱️ Mouse Up detected!"); // Check 2: Does click work?
      const selection = window.getSelection();
      const text = selection?.toString().trim();

      if (text && text.length > 0) {
        console.log("📝 Text Selected:", text); // Check 3: Is text captured?
        
        const rect = selection!.getRangeAt(0).getBoundingClientRect();
        setPosition({
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY - 40
        });
        setSelectedText(text);
        setShowButton(true);
      } else {
        // Only hide if we aren't clicking inside our own panel
        if (!(event.target as HTMLElement).closest('#aura-spark-root')) {
            setShowButton(false);
            setShowPanel(false);
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleAskAI = () => {
    console.log("✨ Ask AI Clicked!"); // Check 4: Button clicked?
    setIsLoading(true);
    setShowPanel(true);
    setShowButton(false);
    setResult('');

    try {
      chrome.runtime.sendMessage({ type: "ASK_AI", text: selectedText }, (response) => {
        console.log("📨 Response from Background:", response); // Check 5: Response received?
        setIsLoading(false);
        if (chrome.runtime.lastError) {
          setResult("Error: " + chrome.runtime.lastError.message);
        } else if (response && response.success) {
          setResult(response.data);
        } else {
          setResult("Error: " + (response?.error || "Unknown error"));
        }
      });
    } catch (error) {
        console.error("❌ Send Message Error:", error);
        setIsLoading(false);
        setResult("Connection failed. Please reload the page.");
    }
  };

  if (!showButton && !showPanel) return null;

  return (
    <div 
      id="aura-spark-root"
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        zIndex: 2147483647, // Max Z-Index to force it on top
        fontFamily: 'Segoe UI, sans-serif'
      }}
    >
      {showButton && (
        <button
          onClick={handleAskAI}
          style={{
            backgroundColor: '#6366f1',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          ✨ Ask Aura
        </button>
      )}

      {showPanel && (
        <div style={{
          backgroundColor: 'white',
          color: '#1f2937',
          padding: '16px',
          borderRadius: '12px',
          width: '300px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          marginTop: '10px',
          border: '1px solid #e5e7eb',
          fontSize: '14px'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#4f46e5', display: 'flex', justifyContent: 'space-between' }}>
            <span>Aura Spark</span>
            <span style={{cursor:'pointer'}} onClick={() => setShowPanel(false)}>✖</span>
          </div>
          
          {isLoading ? (
            <div style={{ color: '#6b7280', fontStyle: 'italic' }}>Thinking... 🌀</div>
          ) : (
            <div style={{ lineHeight: '1.6' }}>
              {result}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const rootElement = document.createElement('div');
rootElement.id = 'aura-spark-extension';
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<Main />);