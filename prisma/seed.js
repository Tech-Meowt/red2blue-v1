import prisma from '../lib/prisma.js';

async function main() {
  const politicalSkills = await prisma.politicalSkills.createMany({
    data: [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@gmail.com',
        campaignMgmt: 'Expert',
        canvassing: 'Advanced',
        communityOrganizing: 'Intermediate',
        electedOfficialCurr: 'Expert',
        electedOfficialPast: 'Expert',
        p2pTextingMgmt: 'Advanced',
        p2pTextingVol: 'Intermediate',
        phonebanking: 'Advanced',
        pollWorker: 'Intermediate',
        postcardMgmt: 'Advanced',
        postcardWriting: 'Expert',
        txtPhoneScriptEdit: 'Advanced',
        txtPhoneScriptWrite: 'Expert',
        vanVoteBuildExp: 'Expert',
        voterReg: 'Expert',
      },
      {
        firstName: 'Second',
        lastName: 'Test',
        email: 'hello@email.com',
        campaignMgmt: 'Expert',
        canvassing: 'Intermediate',
        communityOrganizing: 'Advanced',
        electedOfficialCurr: 'Expert',
        electedOfficialPast: 'Expert',
        p2pTextingMgmt: 'Advanced',
        p2pTextingVol: 'Intermediate',
        phonebanking: 'Intermediate',
        pollWorker: 'Advanced',
        postcardMgmt: 'Advanced',
        postcardWriting: 'Intermediate',
        txtPhoneScriptEdit: 'Advanced',
        txtPhoneScriptWrite: 'Intermediate',
        vanVoteBuildExp: 'Intermediate',
        voterReg: 'Expert',
      },
      {
        firstName: 'Skills',
        lastName: 'Test',
        email: 'skills.test@testing.com',
        campaignMgmt: 'Advanced',
        canvassing: 'Expert',
        communityOrganizing: 'Intermediate',
        electedOfficialCurr: 'Expert',
        electedOfficialPast: 'Expert',
        p2pTextingMgmt: 'Intermediate',
        p2pTextingVol: 'Expert',
        phonebanking: 'Intermediate',
        pollWorker: 'Expert',
        postcardMgmt: 'Expert',
        postcardWriting: 'Intermediate',
        txtPhoneScriptEdit: 'Advanced',
        txtPhoneScriptWrite: 'Intermediate',
        vanVoteBuildExp: 'Expert',
        voterReg: 'Intermediate',
      },
      {
        firstName: 'Test',
        lastName: 'Account',
        email: 'jessicalyngallagher@me.com',
        campaignMgmt: 'Advanced',
        canvassing: 'Advanced',
        communityOrganizing: 'Expert',
        electedOfficialCurr: 'Expert',
        electedOfficialPast: 'Intermediate',
        p2pTextingMgmt: 'Intermediate',
        p2pTextingVol: 'Intermediate',
        phonebanking: 'Intermediate',
        pollWorker: 'Intermediate',
        postcardMgmt: 'Intermediate',
        postcardWriting: 'Intermediate',
        txtPhoneScriptEdit: 'Advanced',
        txtPhoneScriptWrite: 'Intermediate',
        vanVoteBuildExp: 'Advanced',
        voterReg: 'Advanced',
      },
    ],
  });
  console.log(politicalSkills);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
