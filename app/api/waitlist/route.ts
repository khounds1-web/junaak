import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Missing Supabase environment variables.");
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") || "").trim().toLowerCase();

  const referrer = request.headers.get("referer");
  const userAgent = request.headers.get("user-agent");

  if (!email || !email.includes("@")) {
    redirect("/?error=invalid-email");
  }

  const { error } = await supabase.from("waitlist").upsert(
    {
      email,
      source: "junaak_landing_page",
      referrer,
      user_agent: userAgent,
    },
    {
      onConflict: "email",
    }
  );

  if (error) {
  redirect(`/?error=${encodeURIComponent(error.message)}`);
}

  redirect("/thank-you");
}
