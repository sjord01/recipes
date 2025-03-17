"use server";
import { db } from "@/database";
import { redirect } from "next/navigation";

export const register = async () => {

}
// Authentication Logion
export const login = async (formData: FormData) => {
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

export const deleteBlock = async (formData: FormData) => {
  const blockId = parseInt(formData.get("id") as string);
  await db.block.delete({
    where: { id: blockId },
  });
  redirect('/');
};

export const updateBlock = async (formData: FormData) => {
  const blockId = parseInt(formData.get("id") as string);
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  const updatedBlock = await db.block.update({
    where: { id: blockId },
    data: { title, code },
  });
  redirect('/');
};