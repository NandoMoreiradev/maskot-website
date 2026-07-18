import { FC } from "react";
import { Content, isFilled, asText } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Quote as QuoteIcon } from "lucide-react";

/**
 * Props for `Quote`.
 */
export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

/**
 * Citação em destaque (pull-quote) com autoria opcional.
 */
const Quote: FC<QuoteProps> = ({ slice }) => {
  const { quote, author, role } = slice.primary;
  if (!isFilled.richText(quote)) return null;

  return (
    <figure
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        position: "relative",
        margin: "3.5rem 0",
        padding: "2.5rem 2.5rem 2.5rem 3.5rem",
        background: "#f8fbff",
        borderRadius: "16px",
        borderLeft: "5px solid #007BFF",
      }}
    >
      <div style={{ position: "absolute", top: "1.4rem", left: "1.4rem", color: "#cfe2ff" }}>
        <QuoteIcon size={28} />
      </div>
      <blockquote
        style={{
          margin: 0,
          fontSize: "1.35rem",
          fontWeight: 500,
          fontStyle: "italic",
          lineHeight: 1.5,
          color: "#1a1a2e",
        }}
      >
        {asText(quote)}
      </blockquote>
      {(isFilled.keyText(author) || isFilled.keyText(role)) && (
        <figcaption style={{ marginTop: "1.1rem", fontStyle: "normal" }}>
          {isFilled.keyText(author) && (
            <span style={{ fontWeight: 700, color: "#007BFF" }}>{author}</span>
          )}
          {isFilled.keyText(role) && (
            <span style={{ color: "#777", marginLeft: isFilled.keyText(author) ? "0.5rem" : 0 }}>
              {isFilled.keyText(author) ? "· " : ""}
              {role}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default Quote;
