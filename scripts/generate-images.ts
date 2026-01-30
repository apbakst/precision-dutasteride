import * as fs from 'fs';
import * as path from 'path';

const API_KEY = process.env.GEMINI_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent';

interface ImagePrompt {
  name: string;
  prompt: string;
}

const imagePrompts: ImagePrompt[] = [
  {
    name: 'hero-product',
    prompt: 'Professional product photography of a sleek, minimalist hair serum bottle on a clean white surface with soft shadows. The bottle is frosted glass with a silver dropper cap. Premium medical aesthetic. Studio lighting. No text or labels.',
  },
  {
    name: 'hero-lifestyle',
    prompt: 'Portrait of a confident man in his 30s with healthy, full hair, looking at camera with a slight smile. Natural lighting, neutral background. Professional headshot style. Warm and approachable.',
  },
  {
    name: 'science-lab',
    prompt: 'Modern pharmaceutical laboratory with scientists in white coats examining samples. Clean, bright environment with scientific equipment. Professional medical research setting. No faces in focus.',
  },
  {
    name: 'application-scalp',
    prompt: 'Close-up of hands applying a clear serum to scalp with a dropper. Clean, clinical aesthetic. Soft lighting. Medical treatment application. No face visible.',
  },
  {
    name: 'before-after-1',
    prompt: 'Top-down view of a healthy scalp with thick dark hair. Medical documentation style photography. Clinical lighting. Hair follicles clearly visible.',
  },
  {
    name: 'trust-doctor',
    prompt: 'Professional portrait of a doctor in a white coat with a stethoscope, warm and trustworthy expression. Modern medical office background. Soft, professional lighting.',
  },
  {
    name: 'shipping-box',
    prompt: 'Minimalist white shipping box with a hair serum bottle inside, surrounded by tissue paper. Unboxing aesthetic. Clean, premium packaging. Overhead shot.',
  },
  {
    name: 'abstract-science',
    prompt: 'Abstract visualization of hair follicles and molecular structures. Teal and emerald color palette. Scientific illustration style. Modern, clean design.',
  },
];

async function generateImage(prompt: string): Promise<string | null> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY!,
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `Generate an image: ${prompt}` }]
        }],
        generationConfig: {
          responseModalities: ['image', 'text']
        }
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('API Error:', error);
      return null;
    }

    const data = await response.json();

    // Extract base64 image from response
    const parts = data.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData?.data) {
          return part.inlineData.data;
        }
      }
    }

    console.error('No image data in response:', JSON.stringify(data, null, 2));
    return null;
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
}

async function saveImage(base64Data: string, filename: string): Promise<void> {
  const outputDir = path.join(process.cwd(), 'public', 'images', 'generated');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const buffer = Buffer.from(base64Data, 'base64');
  const filepath = path.join(outputDir, `${filename}.png`);

  fs.writeFileSync(filepath, buffer);
  console.log(`✓ Saved: ${filepath}`);
}

async function main() {
  if (!API_KEY) {
    console.error('Error: GEMINI_API_KEY environment variable not set');
    process.exit(1);
  }

  console.log('Generating images for Precision Dutasteride landing page...\n');

  for (const { name, prompt } of imagePrompts) {
    console.log(`Generating: ${name}...`);

    const imageData = await generateImage(prompt);

    if (imageData) {
      await saveImage(imageData, name);
    } else {
      console.error(`✗ Failed to generate: ${name}`);
    }

    // Rate limiting - wait between requests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\nDone!');
}

main();
