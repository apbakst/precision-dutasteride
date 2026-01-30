const fs = require('fs');

const API_KEY = 'AIzaSyADBamGOqFXoVsAXIf4ujQCo9ibWUAmtGU';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent';

const prompts = [
  { name: 'v31-hero', prompt: 'Confident man in his 30s with full thick dark hair, dramatic black background, cinematic lighting, high contrast, powerful and self-assured, editorial fashion photography' },
  { name: 'v31-lifestyle', prompt: 'Handsome man with great hair at upscale bar, confident posture, warm lighting, shallow depth of field, lifestyle photography' },
  { name: 'v31-mirror', prompt: 'Man looking confidently in bathroom mirror touching his thick full hair, morning light, modern bathroom, lifestyle photography' },
  { name: 'v31-abstract', prompt: 'Abstract dark background with glowing emerald green particles flowing upward, representing growth and vitality, minimalist futuristic' },
  { name: 'v31-science', prompt: 'Hair follicles being targeted by glowing green light particles, dark background, scientific visualization, medical illustration futuristic' },
];

async function generateImage(name, prompt) {
  console.log('Generating ' + name + '...');

  const response = await fetch(API_URL + '?key=' + API_KEY, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['image', 'text'] }
    })
  });

  if (!response.ok) {
    const text = await response.text();
    console.error('Failed ' + name + ': ' + response.status + ' ' + text);
    return;
  }

  const data = await response.json();
  const imagePart = data.candidates && data.candidates[0] && data.candidates[0].content &&
    data.candidates[0].content.parts && data.candidates[0].content.parts.find(function(p) { return p.inlineData; });

  if (imagePart) {
    const buffer = Buffer.from(imagePart.inlineData.data, 'base64');
    fs.writeFileSync('public/images/generated/' + name + '.png', buffer);
    console.log('Done: ' + name);
  } else {
    console.log('No image for ' + name);
  }
}

async function main() {
  for (const item of prompts) {
    await generateImage(item.name, item.prompt);
    await new Promise(function(r) { setTimeout(r, 2000); });
  }
  console.log('All done!');
}

main();
