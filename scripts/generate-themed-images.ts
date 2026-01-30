import * as fs from 'fs';
import * as path from 'path';

const API_KEY = process.env.GEMINI_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent';

interface ImagePrompt {
  name: string;
  prompt: string;
}

const themes: { [key: string]: ImagePrompt[] } = {
  v6_futuristic: [
    { name: 'v6-hero', prompt: 'Futuristic man with perfect hair in a cyberpunk city at night, neon blue and purple lights reflecting off his face, holographic elements, sci-fi aesthetic, cinematic lighting, high contrast' },
    { name: 'v6-product', prompt: 'Futuristic hair serum bottle with holographic label, floating in zero gravity with glowing particles around it, neon blue accent lighting, dark background, sci-fi product photography' },
    { name: 'v6-science', prompt: 'Futuristic laboratory with holographic displays showing DNA and molecular structures, blue and purple neon lighting, sleek minimalist design, no people, sci-fi research facility' },
    { name: 'v6-abstract', prompt: 'Abstract visualization of hair follicles as glowing neon structures, cyberpunk color palette of blue, purple, and pink, digital art style, futuristic' },
  ],
  v7_clinical: [
    { name: 'v7-hero', prompt: 'Close-up portrait of a man examining his healthy hairline in a mirror, clinical white lighting, clean medical environment, professional photography, confident expression' },
    { name: 'v7-product', prompt: 'Medical-grade hair serum in clinical packaging, white background with subtle blue accents, pharmaceutical aesthetic, sterile clean look, product photography' },
    { name: 'v7-science', prompt: 'Modern research laboratory with scientists analyzing hair samples under microscope, bright clinical lighting, white lab coats, professional medical research setting' },
    { name: 'v7-data', prompt: 'Scientific infographic showing hair follicle cross-section with labeled parts, medical illustration style, clean white background, educational diagram' },
  ],
  v8_sexy: [
    { name: 'v8-hero', prompt: 'Confident attractive man in his 30s with thick dark hair, dramatic moody lighting, slight smirk, wearing fitted black shirt, dark background with warm accent light, masculine and alluring' },
    { name: 'v8-lifestyle', prompt: 'Stylish man running his fingers through his thick healthy hair, sensual pose, warm golden hour lighting, shallow depth of field, lifestyle photography, confident and attractive' },
    { name: 'v8-product', prompt: 'Sleek black matte hair serum bottle with gold accents, dramatic lighting with shadows, luxury masculine aesthetic, dark background, premium product photography' },
    { name: 'v8-abstract', prompt: 'Abstract flowing hair strands in slow motion, golden and black tones, sensual and elegant, artistic photography, luxury brand aesthetic' },
  ],
  v9_nature: [
    { name: 'v9-hero', prompt: 'Man with healthy natural hair outdoors in a forest, dappled sunlight through leaves, organic and fresh feeling, earth tones, wellness lifestyle photography' },
    { name: 'v9-product', prompt: 'Glass hair serum bottle surrounded by green plants and natural botanicals, soft natural lighting, organic aesthetic, sustainable packaging look, nature product photography' },
    { name: 'v9-ingredients', prompt: 'Natural botanical ingredients arranged beautifully - herbs, plant extracts, essential oils, overhead flat lay, organic textures, green and earth tones' },
    { name: 'v9-wellness', prompt: 'Peaceful spa-like setting with natural elements, bamboo, stones, plants, soft diffused lighting, wellness and self-care aesthetic, calming atmosphere' },
  ],
  v10_luxury: [
    { name: 'v10-hero', prompt: 'Distinguished man in luxury penthouse with city skyline view at night, wearing expensive suit, perfect groomed hair, sophisticated and wealthy aesthetic, cinematic lighting' },
    { name: 'v10-product', prompt: 'Premium hair serum in elegant glass bottle with gold cap, marble surface, soft dramatic lighting, luxury brand aesthetic, high-end product photography' },
    { name: 'v10-lifestyle', prompt: 'Luxury bathroom with marble countertops, gold fixtures, premium grooming products arranged elegantly, high-end interior design, warm ambient lighting' },
    { name: 'v10-abstract', prompt: 'Abstract gold and black marble texture with flowing liquid gold elements, luxury brand aesthetic, premium feel, elegant and sophisticated' },
  ],
};

async function generateImage(prompt: string): Promise<string | null> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY!,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Generate an image: ${prompt}` }] }],
        generationConfig: { responseModalities: ['image', 'text'] }
      }),
    });

    if (!response.ok) {
      console.error('API Error:', await response.text());
      return null;
    }

    const data = await response.json();
    const parts = data.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData?.data) return part.inlineData.data;
      }
    }
    return null;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

async function saveImage(base64Data: string, filename: string): Promise<void> {
  const outputDir = path.join(process.cwd(), 'public', 'images', 'generated');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const buffer = Buffer.from(base64Data, 'base64');
  fs.writeFileSync(path.join(outputDir, `${filename}.png`), buffer);
  console.log(`✓ ${filename}`);
}

async function main() {
  if (!API_KEY) { console.error('No API key'); process.exit(1); }

  for (const [theme, prompts] of Object.entries(themes)) {
    console.log(`\n=== ${theme.toUpperCase()} ===`);
    for (const { name, prompt } of prompts) {
      const imageData = await generateImage(prompt);
      if (imageData) await saveImage(imageData, name);
      else console.error(`✗ ${name}`);
      await new Promise(r => setTimeout(r, 1500));
    }
  }
  console.log('\nDone!');
}

main();
