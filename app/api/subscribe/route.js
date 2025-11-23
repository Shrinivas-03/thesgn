// app/api/subscribe/route.js
import { NextResponse } from "next/server";

const BUTTONDOWN_URL = "https://api.buttondown.email/v1/subscribers";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    const apiKey = process.env.BUTTONDOWN_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Buttondown API key missing" },
        { status: 500 },
      );
    }

    // MAIN FIX IS HERE 🔥
    const res = await fetch(BUTTONDOWN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${apiKey}`,
      },
      body: JSON.stringify({
        email_address: email, // ✔ Correct field
        tags: ["portfolio"], // optional
      }),
    });

    const result = await res.text();

    if (res.ok) {
      return NextResponse.json(
        { success: true, message: "Subscribed successfully" },
        { status: 201 },
      );
    }

    return NextResponse.json(
      { success: false, message: result },
      { status: 400 },
    );
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 },
    );
  }
}
