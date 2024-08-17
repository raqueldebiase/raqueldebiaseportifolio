import { NextResponse } from 'next/server';
import client from '@/app/lib/db';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    // Insira os dados no banco de dados
    await client.query(
      'INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );

    // Retornar uma resposta de sucesso
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Database insert error:', error);
    return NextResponse.json({ success: false, error: 'Database insert failed' });
  }
}
