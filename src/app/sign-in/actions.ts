"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { getServerEnv } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const emailSchema = z.string().email();

export async function sendMagicLink(formData: FormData) {
  const parsedEmail = emailSchema.safeParse(formData.get("email"));

  if (!parsedEmail.success) {
    redirect("/sign-in?error=invalid-email");
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithOtp({
    email: parsedEmail.data,
    options: {
      emailRedirectTo: `${getServerEnv().NEXT_PUBLIC_APP_URL}/auth/callback`
    }
  });

  if (error) {
    redirect("/sign-in?error=send-failed");
  }

  redirect("/sign-in?sent=1");
}
