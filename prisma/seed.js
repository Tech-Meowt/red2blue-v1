import prisma from '../lib/prisma.js';

async function main() {
  const sandbox = await prisma.sandbox.createMany({
    data: [
      {
        firstName: 'Nancy',
        lastName: 'Allen',
        email: 'nancy.allen@mac.com',
        state: 'MN',
        phone: '555-555-5555',
        interests: 'Social Media',
      },
      {
        firstName: 'Kwame',
        lastName: 'Anthony',
        email: 'kanthonyorg@gmail.com',
        state: 'PA',
        phone: '555-555-5556',
        interests: 'Data',
      },
      {
        firstName: 'Robin',
        lastName: 'Aronson',
        email: 'robin.aronson@gmail.com',
        state: 'MD',
        phone: '555-555-5557',
        interests: 'Leadership, phone banking',
      },
      {
        firstName: 'Isabel',
        lastName: 'Byron',
        email: 'isabelbyron1@gmail.com',
        state: 'NY',
        phone: '555-555-5558',
        interests: 'Leadership, phone banking',
      },
      {
        firstName: 'Peg',
        lastName: 'Byron',
        email: 'pegbyron1@gmail.com',
        state: 'NY',
        phone: '555-555-5559',
        interests: 'None',
      },
      {
        firstName: 'Ronda',
        lastName: 'Channing',
        email: 'ronda_channing@yahoo.com',
        state: 'CA',
        phone: '555-555-5550',
        interests: 'None',
      },
      {
        firstName: 'Genevieve',
        lastName: 'Christy',
        email: 'genevieve.christy@gmail.com',
        state: 'CA',
        phone: '555-555-5551',
        interests: 'Campaign Liason',
      },
      {
        firstName: 'Shawky',
        lastName: 'Darwish',
        email: 'Shawky@claudette4pa176.org',
        state: 'CA',
        phone: '555-555-5552',
        interests: 'Texting',
      },
      {
        firstName: 'Ava',
        lastName: 'Eisenson',
        email: 'avaeisenson@gmail.com',
        state: 'OR',
        phone: '555-555-5553',
        interests: 'phone banking, social media, outreach',
      },
      {
        firstName: 'Megan',
        lastName: 'Hackett',
        email: 'meanmegan@hotmail.com',
        state: 'NY',
        phone: '555-555-5554',
        interests: 'Texting',
      },
      {
        firstName: 'Fran',
        lastName: 'Hawthorne',
        email: 'fran.n.hawthorne@gmail.com',
        state: 'CT',
        phone: '655-555-5550',
        interests: 'Canvassing, phone banking, texting',
      },
      {
        firstName: 'Justine',
        lastName: 'Henniing',
        email: 'jhh1822@gmail.com',
        state: 'NJ',
        phone: '655-555-5551',
        interests: 'phone banking, training',
      },
      {
        firstName: 'Landon',
        lastName: 'Kissell',
        email: 'landonkissell23@gmail.com',
        state: 'NY',
        phone: '655-555-5552',
        interests: 'None',
      },
      {
        id: '525ca47c-b18d-4f4a-95f9-0f5be911bbeb',
        firstName: 'Mark',
        lastName: 'Kleiman',
        email: 'markikleiman@gmail.com',
        state: 'NY',
        phone: '655-555-5553',
        interests: 'phone banking',
      },
      {
        firstName: 'Karen',
        lastName: "Scourby-D'\arc",
        email: 'darcwriter1@gmail.com',
        state: 'NY',
        phone: '655-555-5554',
        interests: 'None',
      },
    ],
  });
  console.log(sandbox);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
