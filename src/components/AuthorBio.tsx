import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";
import { asText, isFilled, RichTextField } from "@prismicio/client";

export type BlogAuthor = {
  uid?: string;
  data: {
    name?: string | null;
    role?: string | null;
    bio?: RichTextField;
    photo?: { url?: string | null; alt?: string | null };
    linkedin?: { url?: string } | Record<string, unknown>;
    instagram?: { url?: string } | Record<string, unknown>;
  };
};

function linkUrl(link: unknown): string | null {
  if (link && typeof link === "object" && "url" in link) {
    const url = (link as { url?: string }).url;
    return url || null;
  }
  return null;
}

/**
 * Bloco de bio do autor exibido ao final do artigo (E-E-A-T / confiança).
 */
export default function AuthorBio({ author }: { author: BlogAuthor | null }) {
  if (!author?.data?.name) return null;

  const { name, role, bio, photo } = author.data;
  const linkedin = linkUrl(author.data.linkedin);
  const instagram = linkUrl(author.data.instagram);
  const bioText = isFilled.richText(bio) ? asText(bio) : "";

  return (
    <section
      style={{
        display: "flex",
        gap: "1.5rem",
        alignItems: "flex-start",
        marginTop: "4rem",
        padding: "2rem",
        background: "#f8fbff",
        border: "1px solid #e6ecf2",
        borderRadius: "20px",
      }}
    >
      {photo?.url && (
        <div
          style={{
            position: "relative",
            width: "84px",
            height: "84px",
            flexShrink: 0,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        >
          <Image
            src={photo.url}
            alt={photo.alt || name || "Autor"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <div style={{ minWidth: 0 }}>
        <span
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#007BFF",
          }}
        >
          Escrito por
        </span>
        <h3 style={{ margin: "0.2rem 0 0.15rem", fontSize: "1.25rem", fontWeight: 800, color: "#1a1a2e" }}>
          {name}
        </h3>
        {role && <p style={{ margin: 0, color: "#777", fontSize: "0.92rem" }}>{role}</p>}
        {bioText && (
          <p style={{ margin: "0.75rem 0 0", color: "#444", fontSize: "0.98rem", lineHeight: 1.6 }}>
            {bioText}
          </p>
        )}
        {(linkedin || instagram) && (
          <div style={{ display: "flex", gap: "0.6rem", marginTop: "1rem" }}>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${name}`}
                style={{ color: "#007BFF", display: "inline-flex" }}
              >
                <Linkedin size={20} />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram de ${name}`}
                style={{ color: "#007BFF", display: "inline-flex" }}
              >
                <Instagram size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
