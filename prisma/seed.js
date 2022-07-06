import prisma from '../lib/prisma.js';

async function main() {
  // const newData = await prisma.game.update({
  //   where: {
  //     name: "game2"
  //   },
  //   data: {
  //     name: "updated name"
  //   }
  // })
  const volunteer = await prisma.volunteer.createMany({
    data: [
      {
        firstName: 'Does This',
        lastName: 'Work',
        email: 'help@sos.com',
      }
    ],
  });
  console.log(volunteer);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
