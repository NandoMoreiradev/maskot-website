import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import Image from "next/image";
import { ReactNode } from "react"; // Import necessário para tipagem

// Configuração de como renderizar cada elemento
const components: JSXMapSerializer = {
  // Configura imagens para serem responsivas e bonitas
  image: ({ node }) => (
    <div style={{ margin: '2rem 0', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
      <Image
        src={node.url}
        alt={node.alt || ""}
        width={node.dimensions?.width || 800}
        height={node.dimensions?.height || 400}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      {node.alt && (
        <span style={{ display: 'block', textAlign: 'center', fontSize: '0.8rem', color: '#888', marginTop: '0.5rem' }}>
          {node.alt}
        </span>
      )}
    </div>
  ),
  
  // Estiliza Links (com tipagem explícita para evitar o erro 'implicitly has an any type')
  hyperlink: ({ children, node }: { children: ReactNode; node: any }) => (
    <a 
      href={node.data.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: '#007BFF', textDecoration: 'underline' }}
    >
      {children}
    </a>
  ),
  
  // OBS: Removemos 'quote' pois não existe no tipo padrão do Prismic.
  // Se quiser citações, o ideal é usar o recurso "Labels" no Prismic ou um Slice específico.
};

export type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

const RichText = ({ slice }: RichTextProps) => {
  return (
    <section>
      {/* Passamos o mapa de componentes aqui */}
      <PrismicRichText field={slice.primary.text} components={components} />
    </section>
  );
};

export default RichText;