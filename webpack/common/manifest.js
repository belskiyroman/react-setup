const fs = require('fs');
const path = require('path');

const manifest = () => {
  const manifestUrl = path.join(process.cwd(), 'dist', 'dll', 'dll-manifest.json');
  console.log(`The DLL manifest: ${manifestUrl}`);

  if (!fs.existsSync(manifestUrl)) {
    console.error('\n');
    console.error('>>> The DLL library not found.');
    console.error('>>> You must run "npm run build:dll".');
    console.error('\n');
    process.exit(1);
  }

  const dllManifest = require(manifestUrl);
  console.log(`The DLL library: ${dllManifest.name}`);

  return dllManifest;
};

module.exports = manifest;
