"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const MOCK_USER = {
  email: "admin@gmail.com",
  password: "1234",
};
export async function loginUser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    const cookieStore = await cookies();
    cookieStore.set("session_token", "mock_token_secret", {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    redirect("/");
  } else {
    return { error: "Invalid Email or Password!" };
  }
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete("session_token");
  redirect("/");
}
