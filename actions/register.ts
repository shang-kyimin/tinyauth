"use server";

import { RegisterFormSchema } from "@/schemas";
import * as z from "zod";

export const register = async (payload: z.infer<typeof RegisterFormSchema>) => {
  const validatedPayload = RegisterFormSchema.safeParse(payload);

  if (!validatedPayload) {
    return { error: "Invalid user inputs!" };
  }

  return { success: "Email sent!" };
};
