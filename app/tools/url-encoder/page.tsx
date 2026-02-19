'use client';
import { useState } from 'react';

export default function URLEncoderPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const handleConvert = () => {
    try {
      if (mode === 'encode') {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
    } catch (e) {
      alert('Error: ' + (e as Error).message);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading mb-4">URL Encoder/Decoder</h1>
        <p className="text-lg text-gray-600 mb-8">
          Encode or decode URL components safely.
        </p>

        <div className="card">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setMode('encode')}
              className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                mode === 'encode' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Encode
            </button>
            <button
              onClick={() => setMode('decode')}
              className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                mode === 'decode' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Decode
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {mode === 'encode' ? 'Text to Encode' : 'URL to Decode'}
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={mode === 'encode' ? 'Enter text...' : 'Enter encoded URL...'}
              className="tool-textarea"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Output</label>
            <textarea
              value={output}
              readOnly
              placeholder="Result will appear here..."
              className="tool-textarea bg-gray-50"
            />
          </div>

          <div className="flex gap-3">
            <button onClick={handleConvert} className="btn-primary">
              {mode === 'encode' ? 'Encode' : 'Decode'}
            </button>
            <button onClick={() => { setInput(''); setOutput(''); }} className="btn-secondary">
              Clear
            </button>
            <button onClick={() => navigator.clipboard.writeText(output)} className="btn-secondary">
              Copy Output
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
