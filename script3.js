const fs = require('fs');
const file = 'src/components/features/AutomationsDeepDive.tsx';
let code = fs.readFileSync(file, 'utf8');

// Global replaces
code = code.replace(/color: #333;/g, "color: #0F172A;");
code = code.replace(/color: #666;/g, "color: #475569;");
code = code.replace(/color: #999;/g, "color: #94A3B8;");
code = code.replace(/color: #ccc;/g, "color: #CBD5E1;");
code = code.replace(/color: #28A745;/g, "color: #16A34A;");
code = code.replace(/background: #DCFCE7;/g, "background: #F0FDF4;");
code = code.replace(/background: #E9ECEF;/g, "background: #F8FAFC;");
code = code.replace(/border-bottom: 1px solid #E9ECEF;/g, "border-bottom: 1px solid #E2E8F0;");
code = code.replace(/background: #FAFAFA;/g, "background: #F8FAFC;");

// Mockup Window
code = code.replace(/border-radius: 16px;/g, "border-radius: 24px;");
code = code.replace(/box-shadow: \$\{props => props.theme.shadows\['2xl'\]\};/g, "box-shadow: 0 30px 60px rgba(0,0,0,0.05);");
code = code.replace(/border: 1px solid \$\{props => \(props.theme.colors as unknown as \{ borderLight\?: string \}\)\.borderLight \|\| '#DEE2E6'\};/g, "border: 1px solid #E2E8F0;");

// NodeCard styling
code = code.replace(/border: 1px solid \$\{props => props.\$type === 'trigger' \? props.theme.colors.secondary : '#DEE2E6'\};/g, "border: 1px solid #E2E8F0;");
code = code.replace(/border-left: 4px solid \$\{props => props.\$type === 'trigger' \? props.theme.colors.secondary : props.theme.colors.primary\};/g, "border-left: 4px solid ${props => props.$type === 'trigger' ? '#9333EA' : '#3B82F6'};");

// "GATILHO" Tag
code = code.replace(/background: \$\{props.theme.colors.secondary\};/g, "background: #9333EA;");

// UseCases Grid
code = code.replace(/border: 1px solid \$\{\(props\) => \(props.theme.colors as unknown as \{ borderLight\?: string \}\)\.borderLight \|\| '#DEE2E6'\};/g, "border: 1px solid #E2E8F0;");
code = code.replace(/border-radius: 16px;/g, "border-radius: 24px;"); // done globally above but good to ensure
code = code.replace(/background: #fff;/g, "background: #FFFFFF;");

// Replace Typography inline theme props
code = code.replace(/color: \$\{props => props.theme.colors.textDark\};/g, "color: #0F172A;");
code = code.replace(/color: \$\{props => props.theme.colors.textMedium\};/g, "color: #475569;");
code = code.replace(/color: \$\{props => props.theme.colors.primary\};/g, "color: #9333EA;");

// Builder Canvas background
code = code.replace(/background: #F8F9FA;/g, "background: #FFFFFF;");
code = code.replace(/background-image: radial-gradient\(#E5E7EB 1px, transparent 0\);/g, "background-image: radial-gradient(rgba(147, 51, 234, 0.08) 1px, transparent 0);");

// ConnectorLine
code = code.replace(/background: #CBD5E1;/g, "background: #E2E8F0;");

// FeatureList Icons
code = code.replace(/border: 1px solid \$\{props => \(props.theme.colors as unknown as \{ borderLight\?: string \}\)\.borderLight \|\| '#DEE2E6'\};/g, "border: 1px solid #E2E8F0;");

// TagChip
code = code.replace(/background: #E0F2F1;/g, "background: #F3E8FF;");
code = code.replace(/color: #00695C;/g, "color: #9333EA;");

// Node Icons hardcoded colors
code = code.replace(/\$color="#28A745"/g, "$color=\"#9333EA\""); // Trigger -> purple
code = code.replace(/\$color="#00A884"/g, "$color=\"#16A34A\""); // Action Whatsapp -> green
code = code.replace(/\$color="#6C757D"/g, "$color=\"#3B82F6\""); // Action Tag -> blue

// AddNodeButton
code = code.replace(/border: 1px dashed #94A3B8;/g, "border: 1px dashed #CBD5E1;");

fs.writeFileSync(file, code);

