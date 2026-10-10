'use client'

import styled, { keyframes } from 'styled-components'

const blob1 = keyframes`
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
`

const blob2 = keyframes`
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(-50px, 30px) scale(0.9); }
  66% { transform: translate(40px, -20px) scale(1.1); }
  100% { transform: translate(0px, 0px) scale(1); }
`

const float = keyframes`
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(15deg); }
    100% { transform: translateY(0) rotate(0deg); }
`

const floatReverse = keyframes`
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(30px) rotate(-15deg); }
    100% { transform: translateY(0) rotate(0deg); }
`

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -3; 
  background: #FFFFFF; /* Fundo claro */
`

const Blob = styled.div`
  position: absolute;
  filter: blur(100px);
  border-radius: 50%;
  opacity: 0.35; /* Opacidade reduzida para não sobrecarregar o branco */
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  pointer-events: none;
`

const BlobBlue = styled(Blob)`
  top: -10%;
  left: -10%;
  width: 55vw;
  height: 55vw;
  background: radial-gradient(circle, #3B82F6 0%, rgba(59,130,246,0) 70%); /* Azul mais vibrante no claro */
  animation-name: ${blob1};
`

const BlobCyan = styled(Blob)`
  bottom: -20%;
  right: -10%;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, #06B6D4 0%, rgba(6,182,212,0) 70%);
  animation-name: ${blob2};
  animation-delay: -5s;
`

const BlobPurple = styled(Blob)`
  top: 30%;
  left: 40%;
  width: 45vw;
  height: 45vw;
  background: radial-gradient(circle, #8B5CF6 0%, rgba(139,92,246,0) 70%);
  animation-name: ${blob1};
  animation-delay: -10s;
  opacity: 0.2; /* Sutil */
`

const GridOverlay = styled.div`
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
        linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%);
    -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%);
    pointer-events: none;
`

/* FORMAS GEOMÉTRICAS SUCINTAS E MINIMALISTAS */
const ThinRing = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.04); /* Anéis escuros bem sutis */
  pointer-events: none;
`

const Ring1 = styled(ThinRing)`
  width: 600px;
  height: 600px;
  top: -150px;
  right: -100px;
`

const Ring2 = styled(ThinRing)`
  width: 450px;
  height: 450px;
  bottom: -150px;
  left: -100px;
`

const Cross = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  pointer-events: none;
  opacity: 0.1; /* Cruzes escuras e transparentes */
  animation: ${float} 10s ease-in-out infinite;
  
  &::before, &::after {
    content: '';
    position: absolute;
    background: #0F172A;
  }
  
  &::before { top: 50%; left: 0; right: 0; height: 1px; transform: translateY(-50%); }
  &::after { left: 50%; top: 0; bottom: 0; width: 1px; transform: translateX(-50%); }
`

const Cross1 = styled(Cross)`
  top: 25%;
  left: 15%;
  animation-delay: -2s;
`

const Cross2 = styled(Cross)`
  bottom: 30%;
  right: 20%;
  animation-name: ${floatReverse};
  animation-delay: -5s;
`

const Cross3 = styled(Cross)`
  top: 15%;
  right: 35%;
  opacity: 0.1;
  transform: scale(0.8);
  animation-delay: -7s;
`

export default function AuroraBackground() {
    return (
        <BackgroundWrapper>
            <BlobBlue />
            <BlobCyan />
            <BlobPurple />
            
            <GridOverlay />
            
            <Ring1 />
            <Ring2 />
            <Cross1 />
            <Cross2 />
            <Cross3 />
        </BackgroundWrapper>
    )
}

