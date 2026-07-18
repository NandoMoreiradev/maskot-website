import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { Lightbulb, Info, AlertTriangle, CheckCircle, LucideIcon } from "lucide-react";

/**
 * Props for `Callout`.
 */
export type CalloutProps = SliceComponentProps<Content.CalloutSlice>;

type VariantStyle = { color: string; bg: string; border: string; Icon: LucideIcon };

const VARIANTS: Record<string, VariantStyle> = {
  Dica: { color: "#0a58ca", bg: "#f0f7ff", border: "#cfe2ff", Icon: Lightbulb },
  "Informação": { color: "#087990", bg: "#eefbfe", border: "#c5ecf5", Icon: Info },
  "Atenção": { color: "#b9770a", bg: "#fff8e6", border: "#ffe2a8", Icon: AlertTriangle },
  "Sucesso": { color: "#1e7e34", bg: "#eafaf0", border: "#c3ecd0", Icon: CheckCircle },
};

/**
 * Caixa de destaque para dicas, avisos e informações dentro do artigo.
 */
const Callout: FC<CalloutProps> = ({ slice }) => {
  const { variant, title, content } = slice.primary;
  const v = VARIANTS[variant ?? "Dica"] ?? VARIANTS.Dica;
  const Icon = v.Icon;

  return (
    <aside
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        display: "flex",
        gap: "1rem",
        margin: "2.5rem 0",
        padding: "1.4rem 1.6rem",
        background: v.bg,
        border: `1px solid ${v.border}`,
        borderLeft: `4px solid ${v.color}`,
        borderRadius: "12px",
      }}
    >
      <div style={{ flexShrink: 0, color: v.color, marginTop: "2px" }}>
        <Icon size={22} />
      </div>
      <div style={{ minWidth: 0 }}>
        {isFilled.keyText(title) && (
          <p
            style={{
              margin: "0 0 0.35rem",
              fontWeight: 800,
              color: v.color,
              fontSize: "1.02rem",
            }}
          >
            {title}
          </p>
        )}
        {isFilled.richText(content) && (
          <div style={{ color: "#333", fontSize: "1rem", lineHeight: 1.65 }}>
            <PrismicRichText field={content} />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Callout;
