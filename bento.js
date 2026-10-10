const fs = require('fs');
let content = fs.readFileSync('src/components/FeaturesSection.tsx', 'utf8');

// replace FeaturesGrid styled component
let newGrid = `const FeaturesGrid = styled.div\`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(280px, auto);
    gap: 1.5rem;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
    }
\``;

content = content.replace(/const FeaturesGrid = styled\.div`[\s\S]*?`/m, newGrid);

// update FeatureCardProps
content = content.replace(/interface FeatureCardProps \{[^}]*\}/m, `interface FeatureCardProps {
    $gradient: string;
    $colSpan?: number;
    $rowSpan?: number;
}`);

// update FeatureCard styled component to use spans
let oldCard = /const FeatureCard = styled\.div<FeatureCardProps>`[\s\S]*?&:hover \{/m;
let newCard = `const FeatureCard = styled.div<FeatureCardProps>\`
    background: \${props => props.theme.colors.white};
    padding: 2.5rem;
    border-radius: 24px;
    border: 1px solid rgba(0,0,0,0.05);
    box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    /* Bento Grid Spans */
    \${props => props.$colSpan && \`grid-column: span \${props.$colSpan};\`}
    \${props => props.$rowSpan && \`grid-row: span \${props.$rowSpan};\`}

    @media (max-width: 968px) {
        grid-column: span 1;
        grid-row: span 1;
    }

    /* Barra colorida no topo */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 6px;
        background: \${props => props.$gradient};
    }

    &:hover {`;

content = content.replace(oldCard, newCard);

fs.writeFileSync('src/components/FeaturesSection.tsx', content, 'utf8');

