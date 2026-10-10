const fs = require('fs');

function updateTag(file, iconColor) {
    let code = fs.readFileSync(file, 'utf8');
    
    // Replace background, color, and border in Tag definition
    code = code.replace(/background: #[A-F0-9]+;/g, "background: transparent;");
    code = code.replace(/color: #[A-F0-9]+;/g, "color: #475569;");
    code = code.replace(/border: 1px solid rgba\([0-9, ]+\);/g, "border: 1px solid #E2E8F0;\n    box-shadow: 0 1px 2px rgba(0,0,0,0.02);");
    
    // We also need to add the svg rule if it doesn't have the iconColor explicitly yet.
    // Actually, in both files I wrote `svg { width: 16px; height: 16px; }`
    // Let's replace that specific block
    const svgBlock = "    svg {\n        width: 16px;\n        height: 16px;\n    }";
    const newSvgBlock = `    svg {\n        color: ${iconColor};\n        width: 14px;\n        height: 14px;\n    }`;
    code = code.replace(svgBlock, newSvgBlock);
    
    fs.writeFileSync(file, code);
}

// Ensure we only modify the Tag component by just replacing the specific lines we want
function run() {
    // WhatsAppHero uses #16A34A
    updateTag('src/components/features/WhatsAppHero.tsx', '#16A34A');
    // AutomationsHero uses #9333EA
    updateTag('src/components/features/AutomationsHero.tsx', '#9333EA');
}

run();

