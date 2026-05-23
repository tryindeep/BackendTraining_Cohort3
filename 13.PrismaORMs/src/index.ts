import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();



async function createUser() {
  await client.user.create({
    data: {
      email: "Tridip@gmail.com",
      password: "123",
      age: 21,
      city: "Kolkata",
    },
  });
}

createUser();