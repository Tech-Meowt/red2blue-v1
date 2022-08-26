import prisma from '../lib/prisma.js';

async function main() {
  const volunteer = await prisma.volunteer.createMany({
    data: [
      {
        firstName: 'Christie',
        lastName: 'Arlotta',
        email: 'christie.arlotta@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Craig',
        lastName: 'Seligman',
        email: 'seligmanbrooklyn@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Jennifer',
        lastName: 'Melby',
        email: 'jfmelby@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Nancy',
        lastName: 'Brown',
        email: 'namhobrown@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Fran',
        lastName: 'de Leon',
        email: 'frandeleon@me.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Susan',
        lastName: 'Ryan',
        email: 'susaneryan29@gmail.com',
        city: 'Wellesley',
        state: 'MA',
        zip: '02481',
      },
      {
        firstName: 'Judy',
        lastName: 'Knight',
        email: 'jaknight1@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Gilda',
        lastName: 'Johnson',
        email: 'gaj000johnson@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Katherine',
        lastName: 'Giacoletti',
        email: 'kedgiacol@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Susan',
        lastName: 'Miller',
        email: 'brooklynsusan@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Katherine',
        lastName: 'Gladhart-Hayes',
        email: 'katherine.gladhart.hayes@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Jordan',
        lastName: 'Pittman',
        email: 'jordan.g.pittman@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'heather',
        lastName: 'weston',
        email: 'heatherrweston@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Nancy',
        lastName: 'Allen',
        email: 'loosepinz@gmail.com',
        city: 'New York',
        state: 'NY',
        zip: '10016',
      },
      {
        firstName: 'Lisa',
        lastName: 'Sahn',
        email: 'lisa.sahn@gmail.com',
        city: 'Ithaca',
        state: 'NY',
        zip: '14850',
      },
      {
        firstName: 'Katherine',
        lastName: 'Cleland',
        email: 'tkcleland@yahoo.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Irene',
        lastName: 'Horowitz-Nolan',
        email: 'irenenolan2017@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Danielle',
        lastName: 'Stephens',
        email: 'jags4life2019@outlook.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Debbie',
        lastName: 'Cooper',
        email: 'debra.s.cooper@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Stephanie',
        lastName: 'Bell',
        email: 'stephbell233@gmail.com',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19106',
      },
      {
        firstName: 'sandye',
        lastName: 'renz',
        email: 'lightbluebike@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Ronda',
        lastName: 'Brafford',
        email: 'ronda.brafford@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Elliot',
        lastName: 'Thygesen',
        email: 'ebthygesen15@hotmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Becca',
        lastName: 'Freed',
        email: 'beccafreed@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Linda',
        lastName: 'Hemenway',
        email: 'whatisworking@gmail.com',
        city: 'Santa Rosa',
        state: 'CA',
        zip: '95405',
      },
      {
        firstName: 'Carolina',
        lastName: 'Kroon',
        email: 'ck@carolinakroonphotography.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Loren',
        lastName: 'Siegel',
        email: 'loren.siegel45@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Sandra',
        lastName: 'Rohde',
        email: 'rohde.sandi@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Barbara',
        lastName: 'Taragan',
        email: 'bjtarag@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Sharon',
        lastName: 'Forrest',
        email: 'rainbowcollage@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Kerry',
        lastName: 'Hammon',
        email: 'kerryhammon@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Andrea',
        lastName: 'Wells',
        email: 'andreadwells@Gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'kathleen',
        lastName: 'Chalfant',
        email: 'katchact@aol.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Chris',
        lastName: 'LaMay-West',
        email: 'chris_writerinsf@yahoo.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Christine',
        lastName: 'Bissler',
        email: 'christinepotempa@yahoo.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Vivian',
        lastName: 'Figueredo',
        email: 'vfiguere@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Rachel',
        lastName: 'Dart',
        email: 'rachel.c.dart@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Leah',
        lastName: 'Mathers',
        email: 'leahcmathers@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Emily',
        lastName: 'Price',
        email: 'Emilypricehamilton@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Therese',
        lastName: 'Barbato',
        email: 'tbarbato@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Mike',
        lastName: 'Lane',
        email: 'mikelaneact@yahoo.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Allan',
        lastName: 'Frei',
        email: 'afrei2009@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Rachel',
        lastName: 'Gertzog',
        email: 'rgertzog@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Karen',
        lastName: 'Piacentini',
        email: 'kapiace@yahoo.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Lauren',
        lastName: 'Kotkin',
        email: 'lerk13@gmail.com',
        city: 'Silver Spring',
        state: 'MD',
        zip: '20910',
      },
      {
        firstName: 'Judy',
        lastName: 'Lipshutz',
        email: 'judylipshutz@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Charlotte',
        lastName: 'Brooks',
        email: 'dontbecomplicit@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Bernadette',
        lastName: 'Dwyer',
        email: 'berniedwyer14@gmail.com',
        city: 'OFallon',
        state: 'IL',
        zip: '62269',
      },
      {
        firstName: 'Corinne',
        lastName: 'Greenman',
        email: 'ccgreenman@gmail.com',
        city: 'Colorado Springs',
        state: 'CO',
        zip: '80907',
      },
      {
        firstName: 'Carin',
        lastName: 'Barbanel',
        email: 'carbanel@yahoo.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Jessica',
        lastName: 'Baron',
        email: 'jrbaron@me.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Emily',
        lastName: 'Shapiro',
        email: 'shapiro.emily@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Elaine',
        lastName: 'Machles',
        email: 'emachles@yahoo.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Synnove',
        lastName: 'Trier',
        email: 'synnove.trier@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Margot',
        lastName: 'Stein',
        email: 'Margot.stein@mac.com',
        city: 'Bala Cynwyd',
        state: 'PA',
        zip: '19004',
      },
      {
        firstName: 'Sarah',
        lastName: 'Schwartz',
        email: 'teacher_sarah@hotmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Andrew',
        lastName: 'Radin',
        email: 'a.radin@me.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Idelle',
        lastName: 'Howitt',
        email: 'iahowitt@aol.com',
        city: 'New York',
        state: 'NY',
        zip: '10128',
      },
      {
        firstName: 'Elissa',
        lastName: 'Holzman',
        email: 'emholzman@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Martha',
        lastName: 'Primozich',
        email: 'primofamily77@gmail.com',
        city: 'Duluth',
        state: 'MN',
        zip: '55811',
      },
      {
        firstName: 'Luke',
        lastName: 'Westerbeck',
        email: 'luke.westerbeck@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Elizabeth',
        lastName: 'Reingold',
        email: 'elizabeth.reingold@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Ozzie',
        lastName: 'Aery Fallick',
        email: 'ozzie.fallick@gmail.com',
        city: 'Palo Alto',
        state: 'CA',
        zip: '94306',
      },
      {
        firstName: 'Don',
        lastName: 'Fleck',
        email: 'donaldfleck.com@gmail.com',
        city: 'Brooklyn',
        state: 'NY',
        zip: '11201',
      },
      {
        firstName: 'Elaine',
        lastName: 'Trader',
        email: 'etb51364@yahoo.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Thea',
        lastName: 'Shiota',
        email: 'thea.shiota@gmail.com',
        city: 'Portland',
        state: 'OR',
        zip: '97213',
      },
      {
        firstName: 'Loretta',
        lastName: 'Agro',
        email: 'swamibk@aol.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Jamie',
        lastName: 'Stoops',
        email: 'jamiekstoops@gmail.com',
        city: 'Houston',
        state: 'TX',
        zip: '77043',
      },
      {
        firstName: 'Wendy',
        lastName: 'Holtzman',
        email: 'wholtzman717@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Sharon',
        lastName: 'Taberski',
        email: 'staberski@mac.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Dan',
        lastName: 'Minerr',
        email: 'danminer2345@gmail.com',
        city: 'Queesn',
        state: 'NY',
        zip: '11375',
      },
      {
        firstName: 'Laurie',
        lastName: 'Mendik',
        email: 'lauriemendik@yahoo.com',
        city: 'New York',
        state: 'NY',
        zip: '10023',
      },
      {
        firstName: 'Marcia',
        lastName: 'Danab',
        email: 'marciadanab@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Lana',
        lastName: 'Brewer',
        email: 'lbrewer@vom.com',
        city: 'Sonoma',
        state: 'CA',
        zip: '95476',
      },
      {
        firstName: 'Margaret',
        lastName: 'Innes',
        email: 'margaretdinnes0@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Eric',
        lastName: 'Lederman',
        email: 'edlmd92@gmail.com',
        city: 'Tyringham',
        state: 'MA',
        zip: '01264',
      },
      {
        firstName: 'Kellie',
        lastName: 'Hobbs',
        email: 'kelliedhobbs@gmail.com',
        city: 'Oakland',
        state: 'CA',
        zip: '94611',
      },
      {
        firstName: 'Kathy',
        lastName: 'Andrew',
        email: 'akandrew28@gmail.com',
        city: 'Petaluma',
        state: 'CA',
        zip: '94954',
      },
      {
        firstName: 'Alice',
        lastName: 'Friedman',
        email: 'alicef.54@gmail.com',
        city: 'Seattle',
        state: 'WA',
        zip: '98107-2553',
      },
      {
        firstName: 'Bridget',
        lastName: 'Everman',
        email: 'bgeverman@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Bonnie',
        lastName: 'Ellman',
        email: 'bonnieellman03@gmail.com',
        city: 'Encino',
        state: 'CA',
        zip: '91316',
      },
      {
        firstName: 'Kate',
        lastName: 'O\'Kula',
        email: 'ktokula@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Carol',
        lastName: 'Krafka',
        email: 'ck.2018canvass@gmail.com',
        city: 'Washington',
        state: 'DC',
        zip: '20016',
      },
      {
        firstName: 'Jessica',
        lastName: 'Barnes',
        email: 'jacko1227@gmail.com',
        city: 'Flossmoor',
        state: 'IL',
        zip: '60422',
      },
      {
        firstName: 'Rina',
        lastName: 'Schneur',
        email: 'rinarsg@gmail.com',
        city: 'Lexington',
        state: '',
        zip: '02420',
      },
      {
        firstName: 'Debra',
        lastName: 'Taylor',
        email: 'doctordeb1959@gmail.com',
        city: 'Carlisle',
        state: 'PA',
        zip: '17015-9339',
      },
      {
        firstName: 'Tony',
        lastName: 'Barnert',
        email: 't2t@sonic.net',
        city: 'Tarzana',
        state: '',
        zip: '91356',
      },
      {
        firstName: 'Sherrie',
        lastName: 'Pasarell',
        email: 'slieberpasarell@gmail.com',
        city: 'Bronx',
        state: 'NY',
        zip: '10463',
      },
      {
        firstName: 'Ann',
        lastName: 'Smith',
        email: 'smithann703@gmail.com',
        city: 'Brooklyn',
        state: 'NY',
        zip: '11218',
      },
      {
        firstName: 'Barbara',
        lastName: 'Janowitz',
        email: 'Barbara.janowitz@gmail.com',
        city: 'Brooklyn',
        state: 'NY',
        zip: '11215',
      },
      {
        firstName: 'Laura',
        lastName: 'Srebnik',
        email: 'laurasrebnik@yahoo.com',
        city: 'Brooklyn',
        state: 'NY',
        zip: '11215',
      },
      {
        firstName: 'Benjamin',
        lastName: 'Denker',
        email: 'denkerb@bxscience.edu',
        city: 'New York',
        state: 'NY',
        zip: '10024',
      },
      {
        firstName: 'Stephanie',
        lastName: 'Gardella',
        email: 'Campaign@electsteph.com',
        city: 'Little Elm',
        state: 'TX',
        zip: '75068',
      },
      {
        firstName: 'Hayley',
        lastName: 'Robinson',
        email: 'Hayley.mt@gmail.com',
        city: 'Acton',
        state: 'MA',
        zip: '01720',
      },
      {
        firstName: 'Sue',
        lastName: 'Peirce',
        email: 'Slpeirce10@gmail.com',
        city: 'Minneapolis',
        state: 'Minnesota',
        zip: '55407',
      },
      {
        firstName: 'Sarah',
        lastName: 'Bihms',
        email: 'bihmsfam@gmail.com',
        city: 'SURPRISE',
        state: 'Arizona',
        zip: '85379',
      },
      {
        firstName: 'Nicole',
        lastName: 'Keeling',
        email: 'nmbrenna@gmail.com',
        city: 'Mesa',
        state: 'AZ',
        zip: '85205',
      },
      {
        firstName: 'Melissa',
        lastName: 'Kang',
        email: 'raisingkang@gmail.com',
        city: 'Prosper',
        state: 'TX',
        zip: '75078',
      },
      {
        firstName: 'Ann',
        lastName: 'Lederman',
        email: 'extra314@gmail.com',
        city: 'Brooklyn',
        state: 'NY',
        zip: '11215',
      },
      {
        firstName: 'Joseph',
        lastName: 'Stecher',
        email: 'joseph.stecher@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Jeanette',
        lastName: 'Gross',
        email: 'jeanetteg2@mac.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Elizabeth',
        lastName: 'Wollman',
        email: 'elizwollman@gmail.com',
        city: 'Brooklyn',
        state: 'NY',
        zip: '11218',
      },
      {
        firstName: 'Molly',
        lastName: 'Magai',
        email: 'mollymagai@gmail.com',
        city: 'Seattle',
        state: 'WA',
        zip: '98118',
      },
      {
        firstName: 'Katie',
        lastName: 'Page',
        email: 'klpage2@gmail.com',
        city: 'Los Angeles',
        state: 'California',
        zip: '90065',
      },
      {
        firstName: 'Brooke',
        lastName: 'Miller',
        email: 'brookermiller@gmail.com',
        city: 'State College',
        state: 'PA',
        zip: '16801',
      },
      {
        firstName: 'Marie',
        lastName: 'Thompson',
        email: 'marie.thompson02@gmail.com',
        city: 'Oakland',
        state: 'CA',
        zip: '94608-3102',
      },
      {
        firstName: 'Mathew',
        lastName: 'Gross',
        email: 'mathew.gross@gmail.com',
        city: 'Brooklyn',
        state: 'NY',
        zip: '11226',
      },
      {
        firstName: 'Amanda',
        lastName: 'Lewis',
        email: 'amanda@lewiscenter.net',
        city: 'Wilmington',
        state: 'DE',
        zip: '19810',
      },
      {
        firstName: 'Devon',
        lastName: 'Burdick',
        email: 'devonmburdick@gmail.com',
        city: 'Dallas',
        state: 'Texas',
        zip: '75219',
      },
      {
        firstName: 'Melissa',
        lastName: 'McCaffrey',
        email: 'melissa.riebe@gmail.com',
        city: 'Chelmsford',
        state: 'Massachusetts',
        zip: '01824',
      },
      {
        firstName: 'L.',
        lastName: 'Thackeray',
        email: 'lthackeray333@gmail.com',
        city: 'Delray Beach',
        state: 'FL',
        zip: '33444',
      },
      {
        firstName: 'Steve',
        lastName: 'Agnew',
        email: 'steve_agnew@yahoo.com',
        city: 'Milltown',
        state: 'NJ',
        zip: '08850',
      },
      {
        firstName: 'Laura',
        lastName: 'Bhatt',
        email: 'laurabhatt@gmail.com',
        city: 'New York',
        state: 'New York',
        zip: '10280',
      },
      {
        firstName: 'Heather',
        lastName: 'Brady',
        email: 'hsbrady@gmail.com',
        city: 'Highland Park',
        state: 'NJ',
        zip: '08904',
      },
      {
        firstName: 'Megan',
        lastName: 'Smead',
        email: 'smead.megan@gmail.com',
        city: 'Charlottesville',
        state: 'VA',
        zip: '22901',
      },
      {
        firstName: 'Mary Ann',
        lastName: 'Mackey',
        email: 'mamackey07@gmail.com',
        city: 'Brooklyn',
        state: 'NY',
        zip: '11232',
      },
      {
        firstName: 'Jessica',
        lastName: 'Marsh',
        email: 'marshj12@up.edu',
        city: 'SUNNYVALE',
        state: 'CA',
        zip: '94087-1952',
      },
      {
        firstName: 'Pat',
        lastName: 'Bomus',
        email: 'Bomusp@msn.com',
        city: 'Rockaway',
        state: 'New Jersey',
        zip: '07866',
      },
      {
        firstName: 'Erin',
        lastName: 'Wray',
        email: 'erinswray@gmail.com',
        city: 'Indianapolis',
        state: 'IN',
        zip: '46236',
      },
      {
        firstName: 'Rebecca',
        lastName: 'Blair',
        email: 'becxas@gmail.com',
        city: 'Indianapolis',
        state: 'IN',
        zip: '46220',
      },
      {
        firstName: 'Kristen',
        lastName: 'Holmgren',
        email: 'Kristgbh@gmail.com',
        city: 'South Orange',
        state: 'New Jersey',
        zip: '07079',
      },
      {
        firstName: 'Rachel',
        lastName: 'Altman',
        email: 'raltmansb@gmail.com',
        city: 'Santa Barbara',
        state: 'CA',
        zip: '93108',
      },
      {
        firstName: 'Megan',
        lastName: 'Crane',
        email: 'meganmcrane@gmail.com',
        city: 'Medford',
        state: 'Oregon',
        zip: '97501',
      },
      {
        firstName: 'Anne',
        lastName: 'Wolf',
        email: 'Ahrenswolf1@hotmail.com',
        city: 'Alameda',
        state: 'CA',
        zip: '94501',
      },
      {
        firstName: 'Elissa',
        lastName: 'Wald',
        email: 'Elissa_karen@msn.com',
        city: 'Vancouver',
        state: 'Washington',
        zip: '98682',
      },
      {
        firstName: 'Caitlin',
        lastName: 'Csakai',
        email: 'caitlin821@gmail.com',
        city: 'Chelmsford',
        state: 'MA',
        zip: '01824',
      },
      {
        firstName: 'Michelle',
        lastName: 'Blaeser',
        email: '1871 Bayard Avenue',
        city: 'Saint Paul',
        state: 'MN',
        zip: '55116',
      },
      {
        firstName: 'nancy',
        lastName: 'smith',
        email: 'k9feldr@gmail.com',
        city: 'anderson',
        state: 'ca',
        zip: '96007',
      },
      {
        firstName: 'Lori',
        lastName: 'Sackler',
        email: 'lrsackler@gmail.com',
        city: 'Englewood',
        state: 'New Jersey',
        zip: '07631',
      },
      {
        firstName: 'Mary',
        lastName: 'Hubert',
        email: 'marymhubert@gmail.com',
        city: 'Englewood',
        state: 'NJ',
        zip: '07631',
      },
      {
        firstName: 'Liz',
        lastName: 'Hess',
        email: 'Lizdideon@hotmail.com',
        city: 'Allentown',
        state: 'PA',
        zip: '18103',
      },
      {
        firstName: 'Elizabeth',
        lastName: 'Weston',
        email: 'Missemgreen@yahoo.com',
        city: 'Altoona',
        state: 'IA',
        zip: '50009',
      },
      {
        firstName: 'Sarah',
        lastName: 'Vine',
        email: 'Snydervine@gmail.com',
        city: 'Pittsburgh',
        state: 'Pennsylvania',
        zip: '15217',
      },
      {
        firstName: 'Robin',
        lastName: 'Shanen',
        email: 'Robin.shanen@gmail.com',
        city: 'New York',
        state: 'New York',
        zip: '10023',
      },
      {
        firstName: 'Kathy',
        lastName: 'Loesch',
        email: 'kathyloesch@hotmail.com',
        city: 'Galt',
        state: 'California',
        zip: '95632',
      },
      {
        firstName: 'Jess',
        lastName: 'Wells',
        email: 'jess@jesswells.com',
        city: 'San Francisco',
        state: 'CA',
        zip: '94132',
      },
      {
        firstName: 'Amy',
        lastName: 'Rosenthal',
        email: 'akrosenthal@gmail.com',
        city: 'Washington',
        state: 'District of Columbia',
        zip: '20002',
      },
      {
        firstName: 'Laurie',
        lastName: 'Morrison',
        email: 'Laurie_Morrison@yahoo.com',
        city: '',
        state: 'IL',
        zip: '60062',
      },
      {
        firstName: 'Ruth',
        lastName: 'Winters',
        email: 'ruthwinters@verizon.net',
        city: 'Newport News',
        state: 'VA',
        zip: '23601',
      },
      {
        firstName: 'Eli',
        lastName: 'Fujita',
        email: 'etfujita23@gmail.com',
        city: 'Oakland',
        state: 'CA',
        zip: '94612',
      },
      {
        firstName: 'Jen',
        lastName: 'Runkle',
        email: 'Jennifer.runkle@gmail.com',
        city: 'Alexandria VA',
        state: 'Virginia',
        zip: '22314',
      },
      {
        firstName: 'Debbie',
        lastName: 'Murphy',
        email: 'debbiemurphystudio@gmail.com',
        city: 'Chesterfield',
        state: 'MO',
        zip: '63017',
      },
      {
        firstName: 'Mary',
        lastName: 'de la Fe',
        email: 'marydelafe69@gmail.com',
        city: 'RESTON',
        state: 'VA',
        zip: '20190',
      },
      {
        firstName: 'Pat',
        lastName: 'Gallner',
        email: 'gallner@verizon.net',
        city: 'wynnewood',
        state: 'PA',
        zip: '19096',
      },
      {
        firstName: 'Paige',
        lastName: 'Wolf',
        email: 'paige@paigewolf.com',
        city: 'Haddonfield',
        state: 'NJ',
        zip: '08033',
      },
      {
        firstName: 'Trudy',
        lastName: 'Obi',
        email: 'trudy.obi@gmail.com',
        city: 'Berkeley',
        state: 'CA',
        zip: '94707',
      },
      {
        firstName: 'Laura',
        lastName: 'Gately',
        email: 'bgately501@gmail.com',
        city: 'Landisville',
        state: 'PA',
        zip: '17538',
      },
      {
        firstName: 'Mary',
        lastName: 'Garton',
        email: 'garton@comcast.net',
        city: 'Ann Arbor',
        state: 'Michigan',
        zip: '48105',
      },
      {
        firstName: 'Emily',
        lastName: 'Klenotic',
        email: 'emilylizabethk@gmail.com',
        city: 'Austin',
        state: 'Texas',
        zip: '78701',
      },
      {
        firstName: 'David',
        lastName: 'Sipos',
        email: 'david.sipos06@gmail.com',
        city: 'Washington',
        state: 'DC',
        zip: '',
      },
      {
        firstName: 'Ethan',
        lastName: 'Hintz',
        email: 'ethanhintz1116@gmail.com',
        city: 'Mahomet',
        state: '',
        zip: '',
      },
      {
        firstName: 'Thomas',
        lastName: 'Slone',
        email: 'thslone@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Morgana',
        lastName: 'Rae',
        email: 'morganarae@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'David',
        lastName: 'Neustadt',
        email: 'dlneustadt5@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Aretha',
        lastName: 'Miller',
        email: 'roselanemiller@yahoo.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Ava',
        lastName: 'Eisenson',
        email: 'avaeisenson@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Lindsay',
        lastName: 'Malloy',
        email: 'lsw.malloy@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Deena',
        lastName: 'Allard',
        email: 'deenaallard@yahoo.com',
        city: 'Cheshire',
        state: 'CT',
        zip: '06410',
      },
      {
        firstName: 'Jessica',
        lastName: 'Gallagher',
        email: 'jessicalyngallagher@me.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Penni',
        lastName: 'Takade',
        email: 'pennitakade@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Melodie',
        lastName: 'Cooper',
        email: 'melodierosecooper@yahoo.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Jen',
        lastName: 'Gripman',
        email: 'jengripman@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Katie',
        lastName: 'Zenner',
        email: 'katie.mihaly@gmail.com',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Judy',
        lastName: 'Nemzoff',
        email: 'judynemzoff@sonic.net',
        city: '',
        state: '',
        zip: '',
      },
      {
        firstName: 'Janet',
        lastName: 'Munger',
        email: 'janetcmunger@yahoo.com',
        city: 'Rochester',
        state: 'MN',
        zip: '',
      },
      {
        firstName: 'Catherine',
        lastName: 'Reed',
        email: 'Brudnyreed@gmail.com',
        city: 'Stamford',
        state: 'CT',
        zip: '',
      },
      {
        firstName: 'Mary',
        lastName: 'Avino',
        email: 'maryavino6@gmail.com',
        city: 'Churchville',
        state: 'PA',
        zip: '',
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
