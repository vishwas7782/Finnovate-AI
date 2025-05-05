"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getUserDetails() {
    const { userId } = await auth();  // Get userId from the auth function
    if (!userId) return null;
  
    // Fetch the user details from the database
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
  
    if (!user) throw new Error("User not found");
  
    // Return the user details
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      imageUrl: user.imageUrl,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
  