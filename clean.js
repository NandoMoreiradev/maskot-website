const fs = require('fs');
let content = fs.readFileSync('src/components/FeaturesSection.tsx', 'utf8');
content = content.replace(/\\\$colSpan/g, '$colSpan');
content = content.replace(/\\\$rowSpan/g, '$rowSpan');
fs.writeFileSync('src/components/FeaturesSection.tsx', content, 'utf8');

