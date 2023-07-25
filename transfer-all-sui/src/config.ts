import { config } from "dotenv";

config({});

if (!process.env.SUI_NETWORK) throw new Error("SUI_NETWORK not set");
if (!process.env.SENDER_ADDRESS) throw new Error("SENDER_ADDRESS not set");
if (!process.env.SENDER_SECRET_KEY)
  throw new Error("SENDER_SECRET_KEY not set");
if (!process.env.RECIPIENT_ADDRESS)
  throw new Error("RECIPIENT_ADDRESS not set");

export const SUI_NETWORK = process.env.SUI_NETWORK!;
export const SENDER_ADDRESS = process.env.SENDER_ADDRESS!;
export const SENDER_SECRET_KEY = process.env.SENDER_SECRET_KEY!;
export const RECIPIENT_ADDRESS = process.env.RECIPIENT_ADDRESS!;
