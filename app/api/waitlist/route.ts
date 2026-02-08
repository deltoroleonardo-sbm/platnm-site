import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
      return NextResponse.json(
        { message: "Signup is not configured yet. Try again later." },
        { status: 503 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { error } = await supabase.from("waitlist").insert({
      email,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "This email is already on the list." },
          { status: 409 }
        );
      }
      console.error("Supabase waitlist insert error:", error);
      return NextResponse.json(
        { message: "Something went wrong. Try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Waitlist API error:", e);
    return NextResponse.json(
      { message: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
