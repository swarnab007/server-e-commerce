import Redis from "ioredis";

import dotenv from "dotenv";

dotenv.config("./.env");

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
// await redis.set("foo", "bar");
