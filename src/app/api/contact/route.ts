import { NextResponse } from 'next/server';

// O método POST lida com a submissão do formulário
export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Aqui você pode adicionar a lógica para processar os dados do formulário,
  // como enviar um email ou armazenar os dados em um banco de dados.

  console.log('Received message:', { name, email, message });

  // Retornar uma resposta de sucesso
  return NextResponse.json({ success: true });
}

// Você pode adicionar outros métodos, como GET, se necessário
