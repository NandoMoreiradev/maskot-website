const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Replace HeroSection
content = content.replace(
    /const HeroSection = styled\.section`[\s\S]*?pointer-events: none;\n    }\n`/m,
    `const HeroSection = styled.section\`
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: #060B19; /* Azul Marinho Profundo */
    position: relative;
    padding-top: 11rem;
    padding-bottom: 6rem;
    z-index: 1;
    overflow: hidden;

    /* Destaque Azul Vívido (Esquerda) */
    &::before {
        content: '';
        position: absolute;
        top: -15%;
        left: -10%;
        width: 50vw;
        height: 50vw;
        background: radial-gradient(circle, \${props => props.theme.colors.primary} 0%, transparent 60%);
        opacity: 0.35;
        filter: blur(100px);
        z-index: -3;
        pointer-events: none;
        border-radius: 50%;
    }

    /* Destaque Laranja Vibrante (Direita / Atrás do Card) */
    &::after {
        content: '';
        position: absolute;
        bottom: -20%;
        right: -10%;
        width: 55vw;
        height: 55vw;
        background: radial-gradient(circle, \${props => props.theme.colors.accent} 0%, transparent 60%);
        opacity: 0.18;
        filter: blur(120px);
        z-index: -3;
        pointer-events: none;
        border-radius: 50%;
    }
\``
);

// Se não tiver GridLayer, adiciona.
if (!content.includes('const GridLayer')) {
    content = content.replace(
        'const Container = styled(BaseContainer)`',
        `const GridLayer = styled.div\`
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%);
    -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%);
    z-index: -2;
    pointer-events: none;
\`\n\nconst Container = styled(BaseContainer)\``
    );
}

// Injetar <GridLayer /> no JSX se não existir
if (!content.includes('<GridLayer />')) {
    content = content.replace(
        '<Container>',
        '<GridLayer />\n            <Container>'
    );
}

fs.writeFileSync('src/components/Hero.tsx', content, 'utf8');
