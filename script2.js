const fs = require('fs');
const file = 'src/components/features/WhatsAppDeepDive.tsx';
let code = fs.readFileSync(file, 'utf8');

// MockupCard styling
code = code.replace(/border-radius: \$\{props => props.theme.borderRadius.xl\};/g, 'border-radius: 24px;');
code = code.replace(/box-shadow: 0 20px 40px -10px rgba\(0,0,0,0.08\);/g, 'box-shadow: 0 30px 60px rgba(0,0,0,0.05);');

// PowerCard styling
code = code.replace(/border-radius: 16px;/g, 'border-radius: 20px;');
code = code.replace(/box-shadow: \$\{props => props.theme.shadows.lg\};/g, 'box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);');
code = code.replace(/box-shadow: \$\{props => props.theme.shadows.sm\};/g, 'box-shadow: 0 4px 10px rgba(0,0,0,0.05);');

// TextContent Typography
code = code.replace(/font-family: \$\{props => props.theme.typography.fontFamily.main\};/g, '');
code = code.replace(/font-size: \$\{props => props.theme.typography.fontSize\['3xl'\]\};/g, 'font-size: 2.25rem;');
code = code.replace(/font-weight: \$\{props => props.theme.typography.fontWeight.extrabold\};/g, 'font-weight: 800;');
code = code.replace(/font-size: \$\{props => props.theme.typography.fontSize.lg\};/g, 'font-size: 1.1rem;');
code = code.replace(/font-size: \$\{props => props.theme.typography.fontSize.base\};/g, 'font-size: 1rem;');
code = code.replace(/font-weight: \$\{props => props.theme.typography.fontWeight.medium\};/g, 'font-weight: 600;');

// ProfileSidebar Avatar
code = code.replace(/background: \$\{props => props.theme.colors.primary\};/g, 'background: #16A34A;');
code = code.replace(/box-shadow: \$\{props => props.theme.shadows.md\};/g, 'box-shadow: 0 4px 10px rgba(0,0,0,0.1);');

// Clean up
fs.writeFileSync(file, code);
fs.unlinkSync('script.js');

