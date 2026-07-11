import { handlers } from "@/auth";
export const { GET, POST } = handlers;
export const runtime = "edge"; // Recommended for Neon DB serverless and Edge setups
