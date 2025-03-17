"use server";
import { db } from "@/database";
import { redirect } from "next/navigation";

export const register() {
  
}
// Authentication Logion
export const login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const foundUser = await db.user.findUnique({
    where: { username, password }
  });
  // TODO:
  // if the foundUser is null...
  // -> redirect("/login?error=User%20not%20found")
  // if the foundUser is NOT null
  // -> create a session (telling the browser to remember this user for x days)
  // redirect("/")
}

export const createBlock = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  const createdBlock = await db.block.create({
    data: { title, code, user: { connect: { id: 1 } } },
  });
  redirect(`/blocks/${createdBlock.id}`);
};

export const deleteBlock = async () => {};
export const updateBlock = async () => {};
