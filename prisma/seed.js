// "prisma": {
//   "seed": "node prisma/seed.js"
// }

import prisma from '../lib/prisma.js';

async function main() {
  const event = await prisma.event.createMany({
    data: [
      {
        firstName: 'Nancy',
        lastName: 'Allen',
        street: '4 Low street',
        city: 'Minneapolis',
        state: 'MN',
        zip: '55401',
        phone: '555-555-5555',
        interests: 'Social Media',
      },
      {
        firstName: 'Kwame',
        lastName: 'Anthony',
        street: '6 High street',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19131',
        phone: '555-555-5556',
        interests: 'Data',
      },
      {
        firstName: 'Robin',
        lastName: 'Aronson',
        street: '21 1st Ave',
        city: 'Baltimore',
        state: 'MD',
        zip: '21298',
        phone: '555-555-5557',
        interests: 'Leadership, phone banking',
      },
      {
        firstName: 'Isabel',
        lastName: 'Byron',
        street: '696 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10452',
        phone: '555-555-5558',
        interests: 'Leadership, phone banking',
      },
      {
        firstName: 'Peg',
        lastName: 'Byron',
        street: '2348 W .Center St',
        city: 'Westchester',
        state: 'NY',
        zip: '10545',
        phone: '555-555-5559',
        interests: 'None',
      },
      {
        firstName: 'Ronda',
        lastName: 'Channing',
        street: '90 Cramer-Challenge Road',
        city: 'Sacramento',
        state: 'CA',
        zip: '95660',
        phone: '555-555-5550',
        interests: 'None',
      },
      {
        firstName: 'Genevieve',
        lastName: 'Christy',
        street: '89 West St',
        city: 'Beverly Hills',
        state: 'CA',
        zip: '90210',
        phone: '555-555-5551',
        interests: 'Campaign Liason',
      },
      {
        firstName: 'Shawky',
        lastName: 'Darwish',
        street: '8 Center St',
        city: 'Beverly Hills',
        state: 'CA',
        zip: '10940',
        phone: '555-555-5552',
        interests: 'Texting',
      },
      {
        firstName: 'Ava',
        lastName: 'Eisenson',
        street: '654 W. 41st St',
        city: 'Portland',
        state: 'OR',
        zip: '97236',
        phone: '555-555-5553',
        interests: 'phone banking, social media, outreach',
      },
      {
        firstName: 'Megan',
        lastName: 'Hackett',
        street: '123 W. 41st St',
        city: 'New York',
        state: 'NY',
        zip: '12721',
        phone: '555-555-5554',
        interests: 'Texting',
      },
      {
        firstName: 'Fran',
        lastName: 'Hawthorne',
        street: '125 W. 41st St',
        city: 'Milford',
        state: 'CT',
        zip: '12729',
        phone: '655-555-5550',
        interests: 'Canvassing, phone banking, texting',
      },
      {
        firstName: 'Justine',
        lastName: 'Henniing',
        street: '12 W. 41st St',
        city: 'Milltown',
        state: 'NJ',
        zip: '12345',
        phone: '655-555-5551',
        interests: 'phone banking, training',
      },
      {
        firstName: 'Landon',
        lastName: 'Kissell',
        street: '13 W. 41st St',
        city: 'Brooklyn',
        state: 'NY',
        zip: '12345',
        phone: '655-555-5552',
        interests: 'None',
      },
      {
        firstName: 'Mark',
        lastName: 'Kleiman',
        street: '9 W. 41st St',
        city: 'New York',
        state: 'NY',
        zip: '12345',
        phone: '655-555-5553',
        interests: 'phone banking',
      },
      {
        firstName: 'Karen',
        lastName: "Scourby-D\'arc",
        street: '96 W. 41st St',
        city: 'New York',
        state: 'NY',
        zip: '12345',
        phone: '655-555-5554',
        interests: 'None',
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
