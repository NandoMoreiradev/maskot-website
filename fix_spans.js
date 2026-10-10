const fs = require('fs');
let content = fs.readFileSync('src/components/FeaturesSection.tsx', 'utf8');

// The replacement was replacing `<FeatureCard ` with `<FeatureCard $colSpan={2}` but earlier I accidentally inserted `={2}` because `$colSpan` was evaluated as empty string by powershell! 
// So now the file has `<FeatureCard ={2}`
content = content.replace(/<FeatureCard =\{2\}/g, '<FeatureCard \\$colSpan={2}');
content = content.replace(/<FeatureCard =\{3\}/g, '<FeatureCard \\$colSpan={3}');
content = content.replace(/<FeatureCard \\\$colSpan=\{2\} \$gradient=\"linear-gradient\(to right, #25D366/g, '<FeatureCard \\$rowSpan={2} $gradient=\"linear-gradient(to right, #25D366');

fs.writeFileSync('src/components/FeaturesSection.tsx', content, 'utf8');

