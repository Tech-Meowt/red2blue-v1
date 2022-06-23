// "prisma": {
//   "seed": "node prisma/seed.js"
// }

import prisma from '../lib/prisma.js';

async function main() {
  const event = await prisma.event.createMany({
    data: [
      {
        "eventName": 'Community Meeting 4/12/21',
        "eventType": 'Community Meeting',
        "eventDate": '4/21/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Community Meeting 7/20/21',
        "eventType": 'Community Meeting',
        "eventDate": '7/20/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Phone Bank Kelly Fowler 10/14/2021',
        "eventType": 'Phonebanking',
        "eventDate": '10/14/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Phone Bank Kelly Fowler 10/21/2021',
        "eventType": 'Phonebanking',
        "eventDate": '10/21/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Phone Bank Kelly Fowler 10/28/2021',
        "eventType": 'Phonebanking',
        "eventDate": '10/28/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Phone Bank Kelly Fowler 10/7/2021',
        "eventType": 'Phonebanking',
        "eventDate": '10/7/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Phone Bank Kelly Fowler 8/26/2021',
        "eventType": 'Phonebanking',
        "eventDate": '8/26/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Phone Bank Kelly Fowler 9/19/2021',
        "eventType": 'Phonebanking',
        "eventDate": '9/19/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Phone Bank Kelly Fowler 9/2/2021',
        "eventType": 'Phonebanking',
        "eventDate": '9/2/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Phone Bank Kelly Fowler 9/23/2021',
        "eventType": 'Phonebanking',
        "eventDate": '9/23/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Phone Bank Kelly Fowler 9/9/2021',
        "eventType": 'Phonebanking',
        "eventDate": '9/9/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Postcards PA Special Election 2021',
        "eventType": 'Postcards',
        "eventDate": '',
        "eventYear": "2021"
      },
      {
        "eventName": 'Postcards SD/VA Research and SI 2021',
        "eventType": 'Postcards',
        "eventDate": '',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Bryan Amezquita Early Voting 3/20/21',
        "eventType": 'Texting',
        "eventDate": '3/20/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Bryan Amezquita Event Invite 2/24/21',
        "eventType": 'Texting',
        "eventDate": '2/24/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Carlos Burgos GOTV 6/21/21',
        "eventType": 'Texting',
        "eventDate": '6/21/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Carlos Burgos Support ID 6/1/21',
        "eventType": 'Texting',
        "eventDate": '6/1/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Debra Gardner Early Vote 10/17/2021',
        "eventType": 'Texting',
        "eventDate": '10/17/2021',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Debra Gardner Early Vote 10/24/2021',
        "eventType": 'Texting',
        "eventDate": '10/24/2021',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Debra Gardner VBM 9/26/2021',
        "eventType": 'Texting',
        "eventDate": '9/26/2021',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Diana Saleh Early Vote 5/26/2021',
        "eventType": 'Texting',
        "eventDate": '5/26/2021',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Diana Saleh GOTV 4/30/2021',
        "eventType": 'Texting',
        "eventDate": '4/30/2021',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Diana Saleh GOTV 6/4/2021',
        "eventType": 'Texting',
        "eventDate": '6/4/2021',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Diana Saleh Listening 4/1/2021',
        "eventType": 'Texting',
        "eventDate": '4/1/2021',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Kelly Fowler Support ID 10/1/21',
        "eventType": 'Texting',
        "eventDate": '10/1/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Kelly Fowler Support ID 10/24/21',
        "eventType": 'Texting',
        "eventDate": '10/24/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Kelly Fowler Support ID 10/30/21',
        "eventType": 'Texting',
        "eventDate": '10/30/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Nasra Mohammed GOTV 4/5/21',
        "eventType": 'Texting',
        "eventDate": '4/5/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Nasra Mohammed Support ID 4/1/21',
        "eventType": 'Texting',
        "eventDate": '4/1/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Nick Beaven Support ID 2/19/21',
        "eventType": 'Texting',
        "eventDate": '2/19/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Nick Beaven Support ID 3/20/21',
        "eventType": 'Texting',
        "eventDate": '3/20/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Sheridan Black GOTV 7/11/21',
        "eventType": 'Texting',
        "eventDate": '7/11/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting Sheridan Black Informing 6/26/21',
        "eventType": 'Texting',
        "eventDate": '6/26/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting VA Beach Dems Early Vote 10/1/2021',
        "eventType": 'Texting',
        "eventDate": '10/1/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting VA Beach Dems GOTV 10/31/2021',
        "eventType": 'Texting',
        "eventDate": '10/31/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting VA Beach Dems VBM 10/1/2021',
        "eventType": 'Texting',
        "eventDate": '10/1/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting VA Beach Dems VBM 10/10/2021',
        "eventType": 'Texting',
        "eventDate": '10/10/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting VA Beach Dems VBM 9/12/2021',
        "eventType": 'Texting',
        "eventDate": '9/12/21',
        "eventYear": "2021"
      },
      {
        "eventName": 'Texting VA Beach Dems VBM part 2 10/1/2021',
        "eventType": 'Texting',
        "eventDate": '10/1/21',
        "eventYear": "2021"
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
