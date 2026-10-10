const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Replace HeroSection styles
content = content.replace(
    /const HeroSection = styled\.section`[\s\S]*?z-index: -1;\n        pointer-events: none;\n    }\n`/m,
    `const HeroSection = styled.section\`
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: \${props => props.theme.colors.pageBackground};
    position: relative;
    padding-top: 11rem;
    padding-bottom: 6rem;
    z-index: 1;

    /* Ambient Light / Glows */
    &::before {
        content: '';
        position: absolute;
        top: -30%;
        left: -10%;
        width: 70vw;
        height: 70vw;
        background: radial-gradient(circle, \${props => props.theme.colors.primary} 0%, transparent 60%);
        opacity: 0.07;
        z-index: -3;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -20%;
        right: -10%;
        width: 60vw;
        height: 60vw;
        background: radial-gradient(circle, \${props => props.theme.colors.accent} 0%, transparent 60%);
        opacity: 0.05;
        z-index: -3;
    }
\`

const GridLayer = styled.div\`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Padrão de Pontos */
    background-image: radial-gradient(\${props => props.theme.colors.borderMedium} 1px, transparent 1px);
    background-size: 40px 40px;
    /* Máscara suave para sumir nas bordas */
    mask-image: radial-gradient(ellipse at center, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 80%);
    -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 80%);
    z-index: -2;
    pointer-events: none;
\``
);

// Inject GridLayer into JSX (if not already there)
if (!content.includes('<GridLayer />')) {
    content = content.replace(
        '<Container>',
        '<GridLayer />\n            <Container>'
    );
}

fs.writeFileSync('src/components/Hero.tsx', content, 'utf8');

