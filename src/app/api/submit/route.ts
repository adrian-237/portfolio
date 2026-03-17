import { NextResponse } from "next/server";

export const runtime = "nodejs";

type SubmitPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function normalizeValue(value: string | undefined) {
  return value?.trim() ?? "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      { error: "Telegram is not configured on the server." },
      { status: 500 },
    );
  }

  let body: SubmitPayload;

  try {
    body = (await req.json()) as SubmitPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = normalizeValue(body.name);
  const email = normalizeValue(body.email);
  const message = normalizeValue(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const text = [
    "New portfolio contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
      cache: "no-store",
    },
  );

  if (!telegramResponse.ok) {
    const telegramError = await telegramResponse.text();

    return NextResponse.json(
      {
        error: "Failed to send message to Telegram.",
        details: telegramError,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
