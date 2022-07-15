import prisma from '../lib/prisma.js';

async function main() {
  const event = await prisma.event.createMany({
    data: [
      {
        eventName: 'Postcards VA LDoghertyTY 2019',
        eventDate: '',
        eventYear: "2019",
        eventType: 'Postcarding',
      },
      {
        eventName: 'Postcards VA KWashingtonGOTV 2019',
        eventDate: '',
        eventYear: "2019",
        eventType: 'Postcarding',
      },
      {
        eventName: 'Postcards VA RWillett 2019',
        eventDate: '',
        eventYear: "2019",
        eventType: 'Postcarding',
      },
      {
        eventName: 'Postcards VA MULTIPLE 2019',
        eventDate: '',
        eventYear: "2019",
        eventType: 'Postcarding',
      },
      {
        eventName: 'Postcards VA MJoyce 2019',
        eventDate: '',
        eventYear: "2019",
        eventType: 'Postcarding',
      },
      {
        eventName: 'Postcards VA MGoodman 2019',
        eventDate: '',
        eventYear: "2019",
        eventType: 'Postcarding',
      },
      {
        eventName: 'Fundraiser VA 2019',
        eventDate: '',
        eventYear: "2019",
        eventType: 'Fundraiser',
      },
      {
        eventName: 'Postcards VA Eric Stamps 2019',
        eventDate: '',
        eventYear: "2019",
        eventType: 'Postcarding',
      },
    ],
  });
  console.log(event);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
