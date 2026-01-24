/// <reference types="node" />
import { prisma } from "./lib/prisma";

async function main() {
  //create

  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //   },
  // });
  // console.log('Created user:', user);

  // const user = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: 'nishat',
  //       email: 'nishat1234@gamil.com',
  //     },
  //     {
  //       name: 'Uhe',
  //       email: 'uhe1234@gamil.com',
  //     },
  //   ]
  // });
  // console.log('Created user:', user);

  // Fetch all users with their posts

  // const allUsers = await prisma.user.findMany({
  // });
  // console.log('All users:', JSON.stringify(allUsers, null, 2));
  // const allUsers = await prisma.user.findUnique({
  //   where: { id: 2 }
  // });
  // console.log('All users:', JSON.stringify(allUsers, null, 2));

  const allUsers = await prisma.user.findUnique({
    where: { id: 2 }
  });
  console.log('All users:', JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });