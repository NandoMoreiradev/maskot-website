/**
 * Gera um slug estável a partir de um texto (usado para âncoras do índice do artigo).
 * Remove acentos, normaliza espaços e caracteres especiais.
 */
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove acentos (combining diacritical marks)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // remove caracteres especiais
    .replace(/\s+/g, '-') // espaços -> hífen
    .replace(/-+/g, '-') // colapsa hífens
    .replace(/^-+|-+$/g, ''); // remove hífens das pontas
}
