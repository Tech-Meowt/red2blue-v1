import prisma from '../lib/prisma.js';

async function main() {
  const volunteer = await prisma.volunteer.createMany({
    data: [
      {
        firstName: 'Wiz',
        lastName: 'Khatlifa',
        email: "wiz.khatlifa@gmail.com",
        street: '123 Wiz\'s Street',
        city: 'Brooklyn',
        state: 'NY',
        zip: '12345',
        phone: '555-555-5555',
      },
      {
        firstName: 'Max',
        lastName: 'JustMax',
        email: "mjm@max.com",
        street: '456 Max\'s Street',
        city: 'New Orleans',
        state: 'LA',
        zip: '12345',
        phone: '555-555-5555',
      },
      {
        firstName: 'Fake',
        lastName: 'Jessica',
        email: "fake.jessica@gmail.com",
        street: '789 Jessica\'s Street',
        city: 'San Francisco',
        state: 'CA',
        zip: '12345',
        phone: '555-555-5555',
      },
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
