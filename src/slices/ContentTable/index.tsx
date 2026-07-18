import { FC } from "react";
import { Content, isFilled, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContentTable`.
 */
export type ContentTableProps = SliceComponentProps<Content.ContentTableSlice>;

/**
 * Tabela comparativa (ex: "Sistema X vs Y", planos, recursos).
 * O número de colunas é inferido pelos cabeçalhos preenchidos; se nenhum
 * cabeçalho for preenchido, usa a linha com mais células preenchidas.
 */
const ContentTable: FC<ContentTableProps> = ({ slice }) => {
  const { title, col1_header, col2_header, col3_header, col4_header } = slice.primary;
  const headers: KeyTextField[] = [col1_header, col2_header, col3_header, col4_header];

  let colCount = headers.filter((h) => isFilled.keyText(h)).length;
  if (colCount === 0) {
    colCount = slice.items.reduce((max, item) => {
      const cells = [item.cell_1, item.cell_2, item.cell_3, item.cell_4];
      return Math.max(max, cells.filter((c) => isFilled.keyText(c)).length);
    }, 0);
  }
  if (colCount === 0) return null;

  const hasHeaders = headers.slice(0, colCount).some((h) => isFilled.keyText(h));

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{ margin: "3.5rem 0" }}
    >
      {isFilled.keyText(title) && (
        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: 800,
            color: "#1a1a2e",
            marginBottom: "1.25rem",
          }}
        >
          {title}
        </h3>
      )}

      <div
        style={{
          overflowX: "auto",
          borderRadius: "14px",
          border: "1px solid #e6ecf2",
          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.98rem",
            minWidth: colCount > 2 ? "560px" : "auto",
          }}
        >
          {hasHeaders && (
            <thead>
              <tr style={{ background: "#f0f7ff" }}>
                {headers.slice(0, colCount).map((h, i) => (
                  <th
                    key={i}
                    style={{
                      textAlign: "left",
                      padding: "0.9rem 1.1rem",
                      fontWeight: 800,
                      color: "#007BFF",
                      borderBottom: "2px solid #d6e6ff",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {slice.items.map((item, rowIdx) => {
              const cells = [item.cell_1, item.cell_2, item.cell_3, item.cell_4].slice(0, colCount);
              return (
                <tr
                  key={rowIdx}
                  style={{ background: rowIdx % 2 === 0 ? "white" : "#fafcff" }}
                >
                  {cells.map((cell, colIdx) => (
                    <td
                      key={colIdx}
                      style={{
                        padding: "0.85rem 1.1rem",
                        borderBottom: "1px solid #eef2f7",
                        color: colIdx === 0 ? "#1a1a2e" : "#444",
                        fontWeight: colIdx === 0 ? 700 : 400,
                        verticalAlign: "top",
                      }}
                    >
                      {isFilled.keyText(cell) ? cell : "—"}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ContentTable;
