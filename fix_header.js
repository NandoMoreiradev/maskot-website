const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

// 1. Modify HeaderWrapper to handle scroll state
content = content.replace(
    'const HeaderWrapper = styled.header`\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    background: rgba(255, 255, 255, 0.90);\n    backdrop-filter: blur(12px) saturate(180%);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n    transition: all 0.3s ease;\n`',
    `const HeaderWrapper = styled.header<{ $scrolled: boolean }>\`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: \${props => props.$scrolled ? 'rgba(255, 255, 255, 0.90)' : 'transparent'};
    backdrop-filter: \${props => props.$scrolled ? 'blur(12px) saturate(180%)' : 'none'};
    border-bottom: \${props => props.$scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid transparent'};
    transition: all 0.3s ease;
\``
);

// 2. Modify component to use scroll state
content = content.replace(
    'export default function Header() {\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)',
    `import { useEffect } from 'react'\n\nexport default function Header() {\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)\n    const [scrolled, setScrolled] = useState(false)\n\n    useEffect(() => {\n        const handleScroll = () => {\n            setScrolled(window.scrollY > 20)\n        }\n        window.addEventListener('scroll', handleScroll)\n        return () => window.removeEventListener('scroll', handleScroll)\n    }, [])`
);

// 3. Pass $scrolled to HeaderWrapper
content = content.replace(
    '<HeaderWrapper>',
    '<HeaderWrapper $scrolled={scrolled}>'
);

// 4. Update TrialButton styles
content = content.replace(
    /const TrialButton = styled\.button`[\s\S]*?box-shadow:[^`]*`/m,
    `const TrialButton = styled.button\`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: \${props => props.theme.gradients.primary};
    color: white;
    border: none;
    padding: 0.65rem 1.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: 100px;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
    
    &:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 6px 16px rgba(37, 99, 235, 0.35);
    }\``
);

fs.writeFileSync('src/components/Header.tsx', content, 'utf8');

