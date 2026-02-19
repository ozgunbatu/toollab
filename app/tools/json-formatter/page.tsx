'use client';

import { useState } from 'react';

export default function JSONFormatterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e) {
      setError('Invalid JSON: ' + (e as Error).message);
      setOutput('');
    }
  };

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError('');
    } catch (e) {
      setError('Invalid JSON: ' + (e as Error).message);
      setOutput('');
    }
  };

  const validateJSON = () => {
    try {
      JSON.parse(input);
      setError('');
      alert('✓ Valid JSON!');
    } catch (e) {
      setError('Invalid JSON: ' + (e as Error).message);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="section-heading mb-4">JSON Formatter</h1>
          <p className="text-lg text-gray-600">
            Format, validate, and minify JSON data. Paste your JSON and click format.
          </p>
        </div>

        <div className="card mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Input JSON</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='{"name":"John","age":30}'
                className="tool-textarea"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Output</label>
              <textarea
                value={output}
                readOnly
                placeholder="Formatted JSON will appear here..."
                className="tool-textarea bg-gray-50"
              />
            </div>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 font-mono text-sm">{error}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-6">
            <button onClick={formatJSON} className="btn-primary">
              Format (Prettify)
            </button>
            <button onClick={minifyJSON} className="btn-secondary">
              Minify
            </button>
            <button onClick={validateJSON} className="btn-secondary">
              Validate
            </button>
            <button onClick={() => { setInput(''); setOutput(''); setError(''); }} className="btn-secondary">
              Clear
            </button>
            <button onClick={() => navigator.clipboard.writeText(output)} className="btn-secondary">
              Copy Output
            </button>
          </div>
        </div>

        {/* How to Use */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Paste your JSON data in the input field</li>
            <li>Click "Format" to beautify or "Minify" to compress</li>
            <li>Use "Validate" to check if your JSON is valid</li>
            <li>Copy the formatted output with one click</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Beautiful formatting with proper indentation</li>
            <li>Instant JSON validation with error messages</li>
            <li>Minify JSON to save space</li>
            <li>100% client-side - your data never leaves your browser</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
