'use client';

import { useState } from 'react';

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (charset === '') {
      alert('Please select at least one character type');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const getPasswordStrength = () => {
    if (password.length === 0) return { text: '', color: '' };
    if (password.length < 8) return { text: 'Weak', color: 'text-red-600' };
    if (password.length < 12) return { text: 'Medium', color: 'text-yellow-600' };
    if (password.length < 16) return { text: 'Strong', color: 'text-green-600' };
    return { text: 'Very Strong', color: 'text-green-700' };
  };

  const strength = getPasswordStrength();

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading mb-4">Password Generator</h1>
        <p className="text-lg text-gray-600 mb-8">
          Generate secure random passwords with custom options.
        </p>

        <div className="card mb-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password Length: {length}
            </label>
            <input
              type="range"
              min="4"
              max="64"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="space-y-3 mb-6">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="w-5 h-5 text-primary-600 rounded"
              />
              <span>Include Uppercase (A-Z)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="w-5 h-5 text-primary-600 rounded"
              />
              <span>Include Lowercase (a-z)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="w-5 h-5 text-primary-600 rounded"
              />
              <span>Include Numbers (0-9)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="w-5 h-5 text-primary-600 rounded"
              />
              <span>Include Symbols (!@#$%...)</span>
            </label>
          </div>

          {password && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Generated Password</label>
              <div className="relative">
                <input
                  type="text"
                  value={password}
                  readOnly
                  className="tool-input pr-24 font-mono text-lg"
                />
                {strength.text && (
                  <span className={`absolute right-4 top-1/2 -translate-y-1/2 font-semibold ${strength.color}`}>
                    {strength.text}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button onClick={generatePassword} className="btn-primary">
              Generate Password
            </button>
            {password && (
              <button onClick={() => navigator.clipboard.writeText(password)} className="btn-secondary">
                Copy Password
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
