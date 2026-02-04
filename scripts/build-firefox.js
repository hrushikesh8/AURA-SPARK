import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Setup paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');
const manifestPath = path.join(distPath, 'manifest.json');

// 2. Read the built manifest
if (fs.existsSync(manifestPath)) {
  console.log('🦊 preparing manifest for Firefox...');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

  // 3. Add the ID required by Firefox
  manifest.browser_specific_settings = {
    gecko: {
      id: "auraspark@extension", // This ID is required for Firefox to run
      strict_min_version: "109.0"
    }
  };

  // 4. Save the file back
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('✅ Firefox compatibility added!');
} else {
  console.log('⚠️ No dist folder found. Run build first.');
}