import { PrismaClient } from "./app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// 1. Initialize the PostgreSQL connection pool using node-postgres
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL!,
});

const adapter = new PrismaPg(pool);

// 2. Define the singleton factory function using your adapter
const prismaClientSingleton = () => {
  return new PrismaClient({ adapter });
};

// 3. Declare global types so TypeScript registers the global prisma property
declare global {
  var prisma: ReturnType<typeof prismaClientSingleton> | undefined;
}

// 4. Fallback to global database client or instantiate a fresh pool if empty
const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

// 5. Cache the connection pool in globalThis to stop Next.js hot-reloads from breaking the database
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
