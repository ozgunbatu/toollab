export type ToolCategory = 'text' | 'encoding' | 'generators' | 'converters' | 'web' | 'crypto' | 'data';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
}

export const tools: Tool[] = [
  // Text Tools
  { id: 'json-formatter', name: 'JSON Formatter', description: 'Format, validate and beautify JSON data', category: 'text', icon: '{}' },
  { id: 'text-case-converter', name: 'Text Case Converter', description: 'Convert text between different cases', category: 'text', icon: 'Aa' },
  { id: 'word-counter', name: 'Word Counter', description: 'Count words, characters, sentences and paragraphs', category: 'text', icon: '📊' },
  { id: 'lorem-ipsum', name: 'Lorem Ipsum Generator', description: 'Generate placeholder text', category: 'text', icon: '📝' },
  { id: 'diff-checker', name: 'Text Diff Checker', description: 'Compare two texts and see differences', category: 'text', icon: '🔍' },
  { id: 'markdown-preview', name: 'Markdown Preview', description: 'Live markdown editor and previewer', category: 'text', icon: '📄' },
  { id: 'regex-tester', name: 'Regex Tester', description: 'Test and debug regular expressions', category: 'text', icon: '.*' },
  { id: 'html-encoder', name: 'HTML Entity Encoder', description: 'Encode/decode HTML entities', category: 'text', icon: '<>' },
  
  // Encoding/Decoding
  { id: 'base64', name: 'Base64 Encoder/Decoder', description: 'Encode and decode Base64 strings', category: 'encoding', icon: '🔐' },
  { id: 'url-encoder', name: 'URL Encoder/Decoder', description: 'Encode and decode URL components', category: 'encoding', icon: '🔗' },
  { id: 'jwt-decoder', name: 'JWT Decoder', description: 'Decode and inspect JWT tokens', category: 'encoding', icon: '🎫' },
  { id: 'unicode-converter', name: 'Unicode Converter', description: 'Convert between Unicode and text', category: 'encoding', icon: '🌐' },
  
  // Generators
  { id: 'password-generator', name: 'Password Generator', description: 'Generate secure random passwords', category: 'generators', icon: '🔑' },
  { id: 'uuid-generator', name: 'UUID Generator', description: 'Generate UUIDs (v4)', category: 'generators', icon: '🆔' },
  { id: 'qr-code-generator', name: 'QR Code Generator', description: 'Generate QR codes from text', category: 'generators', icon: '📱' },
  { id: 'hash-generator', name: 'Hash Generator', description: 'Generate MD5, SHA-1, SHA-256 hashes', category: 'generators', icon: '#️⃣' },
  { id: 'color-picker', name: 'Color Picker', description: 'Pick and convert colors (HEX, RGB, HSL)', category: 'generators', icon: '🎨' },
  { id: 'gradient-generator', name: 'CSS Gradient Generator', description: 'Create CSS gradients visually', category: 'generators', icon: '🌈' },
  { id: 'fake-data-generator', name: 'Fake Data Generator', description: 'Generate test data for development', category: 'generators', icon: '🎲' },
  
  // Converters
  { id: 'timestamp-converter', name: 'Unix Timestamp Converter', description: 'Convert Unix timestamps to dates', category: 'converters', icon: '⏰' },
  { id: 'number-base-converter', name: 'Number Base Converter', description: 'Convert between number bases', category: 'converters', icon: '🔢' },
  { id: 'image-converter', name: 'Image Format Converter', description: 'Convert between image formats', category: 'converters', icon: '🖼️' },
  { id: 'unit-converter', name: 'Unit Converter', description: 'Convert units (length, weight, temp)', category: 'converters', icon: '📏' },
  { id: 'css-to-tailwind', name: 'CSS to Tailwind Converter', description: 'Convert CSS to Tailwind classes', category: 'converters', icon: '💨' },
  
  // Web Tools
  { id: 'meta-tags-generator', name: 'Meta Tags Generator', description: 'Generate SEO meta tags', category: 'web', icon: '🏷️' },
  { id: 'open-graph-generator', name: 'Open Graph Generator', description: 'Generate Open Graph meta tags', category: 'web', icon: '📢' },
  { id: 'json-to-csv', name: 'JSON to CSV Converter', description: 'Convert JSON to CSV format', category: 'web', icon: '📊' },
  { id: 'csv-to-json', name: 'CSV to JSON Converter', description: 'Convert CSV to JSON format', category: 'web', icon: '🔄' },
  { id: 'sql-formatter', name: 'SQL Formatter', description: 'Format and beautify SQL queries', category: 'web', icon: '🗃️' },
  { id: 'html-minifier', name: 'HTML Minifier', description: 'Minify HTML code', category: 'web', icon: '📦' },
  { id: 'css-minifier', name: 'CSS Minifier', description: 'Minify CSS code', category: 'web', icon: '🎨' },
  { id: 'js-minifier', name: 'JavaScript Minifier', description: 'Minify JavaScript code', category: 'web', icon: '⚡' },
  
  // Crypto & Security
  { id: 'bcrypt-generator', name: 'Bcrypt Hash Generator', description: 'Generate Bcrypt password hashes', category: 'crypto', icon: '🔒' },
  { id: 'random-string', name: 'Random String Generator', description: 'Generate random strings', category: 'crypto', icon: '🎯' },
  
  // Data Tools
  { id: 'json-validator', name: 'JSON Validator', description: 'Validate JSON structure', category: 'data', icon: '✓' },
  { id: 'xml-formatter', name: 'XML Formatter', description: 'Format and validate XML', category: 'data', icon: '📋' },
  { id: 'cron-expression', name: 'Cron Expression Generator', description: 'Generate cron expressions', category: 'data', icon: '⏱️' },
];

export const categories: { id: ToolCategory; name: string; emoji: string }[] = [
  { id: 'text', name: 'Text Tools', emoji: '📝' },
  { id: 'encoding', name: 'Encoding & Decoding', emoji: '🔐' },
  { id: 'generators', name: 'Generators', emoji: '🎲' },
  { id: 'converters', name: 'Converters', emoji: '🔄' },
  { id: 'web', name: 'Web Development', emoji: '🌐' },
  { id: 'crypto', name: 'Crypto & Security', emoji: '🔒' },
  { id: 'data', name: 'Data Tools', emoji: '📊' },
];

export function getToolsByCategory(category: ToolCategory) {
  return tools.filter(tool => tool.category === category);
}

export function getToolById(id: string) {
  return tools.find(tool => tool.id === id);
}
