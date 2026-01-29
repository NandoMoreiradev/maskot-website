import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import Image from "next/image";

const components: JSXMapSerializer = {
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
  
  hyperlink: ({ children, node }) => {
    const url = 'url' in node.data ? node.data.url : '#';
    
    return (
      <a 
        href={url || '#'} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: '#007BFF', textDecoration: 'underline' }}
      >
        {children}
      </a>
    );
  },
};

export type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

const RichText = ({ slice }: RichTextProps) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.text} components={components} />
    </section>
  );
};

export default RichText;