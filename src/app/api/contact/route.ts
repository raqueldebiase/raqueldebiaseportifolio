import { NextResponse } from 'next/server';
import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.POSTGRES_URL,
});

client.connect().catch(err => console.error('Connection error', err.stack));

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'All fields are required' });
    }

    await client.query(
      'INSERT INTO form_submissions (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ success: false, message: 'An error occurred' });
  }
}
