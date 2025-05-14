import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { sendEmail, formatMessage } from '@/lib/mailer';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("Portfolio");
    const messages = await db.collection("messages").find({}).toArray();
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("Portfolio");
    const result = await db.collection("messages").insertOne(body);

    await sendEmail(
      "prithvibansal0709@gmail.com",
      "Message from portfolio",
      formatMessage(body)
    );

    return NextResponse.json({ message: "Data saved and email sent", result }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: 'Failed to save or send' }, { status: 500 });
  }
}
