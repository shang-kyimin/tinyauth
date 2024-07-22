"use server";

import { LoginFormSchema } from "@/schemas";
import * as z from "zod";

export const login = async (payload: z.infer<typeof LoginFormSchema>) => {
  const validatedPayload = LoginFormSchema.safeParse(payload);

  if (!validatedPayload) {
    return { error: "Invalid user inputs!" };
  }

  return { success: "Email sent!" };
};
