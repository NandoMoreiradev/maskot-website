import { NextResponse } from 'next/server';
import { createPrismicClient } from '@/prismicio';

export async function GET() {
  try {
    const client = createPrismicClient({ fetchOptions: { cache: 'no-store' } });

    // Busca todos os documentos, independente do tipo
    const all = await client.get({ fetchOptions: { cache: 'no-store' } });

    // Lista os tipos únicos encontrados
    const types = [...new Set(all.results.map(d => d.type))];

    return NextResponse.json({
      total_results_size: all.total_results_size,
      types_found: types,
      results: all.results.map(d => ({ type: d.type, uid: d.uid, id: d.id })),
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
