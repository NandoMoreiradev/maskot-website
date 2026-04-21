'use client'

import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import { X, Cookie, Shield, Activity } from 'lucide-react'

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const BannerCard = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 100%;
  max-width: 400px;
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows['2xl']};
  padding: 1.5rem;
  z-index: ${props => props.theme.zIndex.fixed};
  animation: ${slideUp} 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    bottom: 16px;
    right: 16px;
    left: 16px;
    max-width: calc(100% - 32px);
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.theme.colors.textDark};

  svg {
    color: ${props => props.theme.colors.primary};
  }

  h3 {
    font-size: ${props => props.theme.typography.fontSize.lg};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    margin: 0;
  }
`

const Text = styled.p`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textMedium};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin: 0;

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
    font-weight: ${props => props.theme.typography.fontWeight.medium};

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'outline' }>`
  flex: 1;
  padding: 0.6rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${props => props.$variant === 'primary' && `
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
    border: 1px solid ${props.theme.colors.primary};

    &:hover {
      background: #0056b3;
    }
  `}

  ${props => props.$variant === 'outline' && `
    background: transparent;
    color: ${props.theme.colors.textDark};
    border: 1px solid ${props.theme.colors.borderLight};

    &:hover {
      background: ${props.theme.colors.lightGray};
    }
  `}

  ${props => props.$variant === 'secondary' && `
    background: ${props.theme.colors.lightGray};
    color: ${props.theme.colors.textDark};
    border: 1px solid transparent;

    &:hover {
      background: ${props.theme.colors.borderLight};
    }
  `}
`

const SettingsButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.textMedium};
  font-size: ${props => props.theme.typography.fontSize.xs};
  text-decoration: underline;
  cursor: pointer;
  padding: 0.25rem;
  text-align: center;
  
  &:hover {
    color: ${props => props.theme.colors.textDark};
  }
`

// --- Modal de Preferências ---
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: ${props => props.theme.zIndex.modalBackdrop};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease-out forwards;
  padding: 1rem;
`

const ModalContainer = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.borderRadius.xl};
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${props => props.theme.shadows['2xl']};
  z-index: ${props => props.theme.zIndex.modal};
  position: relative;
`

const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: ${props => props.theme.typography.fontSize.xl};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.textDark};
    margin: 0;
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.textMedium};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.md};

  &:hover {
    background: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.textDark};
  }
`

const ModalBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const CookieCategory = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.borderLight};
`

const CategoryIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.primary};
  }
`

const CategoryContent = styled.div`
  flex-grow: 1;

  h4 {
    font-size: ${props => props.theme.typography.fontSize.base};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.textDark};
    margin: 0 0 0.25rem 0;
  }

  p {
    font-size: ${props => props.theme.typography.fontSize.sm};
    color: ${props => props.theme.colors.textMedium};
    margin: 0;
    line-height: 1.5;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`

const Toggle = styled.label<{ $disabled?: boolean }>`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  opacity: ${props => props.$disabled ? 0.6 : 1};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: ${props => props.theme.colors.primary};
  }

  input:checked + span:before {
    transform: translateX(20px);
  }
`

const ModalFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.borderLight};
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  background: ${props => props.theme.colors.lightGray};
  border-radius: 0 0 ${props => props.theme.borderRadius.xl} ${props => props.theme.borderRadius.xl};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  // Consent states
  const [analyticsConsent, setAnalyticsConsent] = useState(false)

  useEffect(() => {
    // Check if consent was already given
    const consentDate = localStorage.getItem('maskot_cookie_consent_date')
    if (!consentDate) {
      setIsVisible(true)
    }
  }, [])

  const updateConsentMode = (analyticsGranted: boolean) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag('consent', 'update', {
        analytics_storage: analyticsGranted ? 'granted' : 'denied',
        ad_storage: analyticsGranted ? 'granted' : 'denied',
        ad_user_data: analyticsGranted ? 'granted' : 'denied',
        ad_personalization: analyticsGranted ? 'granted' : 'denied',
      });
    }
  }

  const saveConsent = (analyticsGranted: boolean) => {
    localStorage.setItem('maskot_cookie_consent_date', new Date().toISOString())
    localStorage.setItem('maskot_analytics_consent', analyticsGranted ? 'true' : 'false')
    
    updateConsentMode(analyticsGranted)
    
    setIsVisible(false)
    setShowModal(false)
  }

  const handleAcceptAll = () => {
    saveConsent(true)
  }

  const handleDeclineAll = () => {
    saveConsent(false)
  }

  const handleSavePreferences = () => {
    saveConsent(analyticsConsent)
  }

  if (!isVisible && !showModal) return null

  return (
    <>
      {isVisible && !showModal && (
        <BannerCard>
          <Header>
            <Cookie size={24} />
            <h3>Nós valorizamos sua privacidade</h3>
          </Header>
          <Text>
            Utilizamos cookies essenciais para o funcionamento da plataforma e cookies de análise para entender como você interage com o Maskot e melhorar sua experiência. 
            Ao clicar em &quot;Aceitar Todos&quot;, você concorda com nosso uso de cookies conforme nossa <Link href="/legal/cookies">Política de Cookies</Link> e <Link href="/legal/privacidade">Política de Privacidade</Link>.
          </Text>
          <Actions>
            <ButtonGroup>
              <Button $variant="outline" onClick={handleDeclineAll}>Recusar</Button>
              <Button $variant="primary" onClick={handleAcceptAll}>Aceitar Todos</Button>
            </ButtonGroup>
            <SettingsButton onClick={() => setShowModal(true)}>
              Gerenciar preferências de cookies
            </SettingsButton>
          </Actions>
        </BannerCard>
      )}

      {showModal && (
        <ModalOverlay onClick={(e) => {
          if (e.target === e.currentTarget) setShowModal(false)
        }}>
          <ModalContainer>
            <ModalHeader>
              <h2>Preferências de Privacidade</h2>
              <CloseButton onClick={() => setShowModal(false)} aria-label="Fechar modal">
                <X size={20} />
              </CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <Text style={{ fontSize: '1rem' }}>
                Quando você visita nosso site, ele pode armazenar ou recuperar informações no seu navegador, principalmente na forma de cookies. Essas informações geralmente não identificam você diretamente, mas podem oferecer uma experiência mais personalizada na web.
              </Text>

              <CookieCategory>
                <CategoryIcon>
                  <Shield />
                </CategoryIcon>
                <CategoryContent>
                  <h4>Cookies Estritamente Necessários</h4>
                  <p>Estes cookies são necessários para o funcionamento do site e não podem ser desligados nos nossos sistemas. Normalmente, eles só são configurados em resposta a ações como definir suas preferências de privacidade, fazer login ou preencher formulários.</p>
                </CategoryContent>
                <ToggleWrapper>
                  <Toggle $disabled>
                    <input type="checkbox" checked readOnly />
                    <span></span>
                  </Toggle>
                </ToggleWrapper>
              </CookieCategory>

              <CookieCategory>
                <CategoryIcon>
                  <Activity />
                </CategoryIcon>
                <CategoryContent>
                  <h4>Cookies de Desempenho e Analytics</h4>
                  <p>Estes cookies nos permitem contar visitas e fontes de tráfego, para que possamos medir e melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são mais populares e como os visitantes se movem pelo site.</p>
                </CategoryContent>
                <ToggleWrapper>
                  <Toggle>
                    <input 
                      type="checkbox" 
                      checked={analyticsConsent} 
                      onChange={(e) => setAnalyticsConsent(e.target.checked)} 
                    />
                    <span></span>
                  </Toggle>
                </ToggleWrapper>
              </CookieCategory>
            </ModalBody>

            <ModalFooter>
              <Button $variant="outline" onClick={handleDeclineAll} style={{ flex: 'none', padding: '0.6rem 1.5rem' }}>
                Recusar Todos
              </Button>
              <Button $variant="primary" onClick={handleSavePreferences} style={{ flex: 'none', padding: '0.6rem 1.5rem' }}>
                Salvar Minhas Escolhas
              </Button>
            </ModalFooter>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  )
}
