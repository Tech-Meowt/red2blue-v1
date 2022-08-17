import prisma from '../lib/prisma.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const create = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    campaignMgmt,
    canvassing,
    communityOrganizing,
    electedOfficialCurr,
    electedOfficialPast,
    p2pTextingMgmt,
    p2pTextingVol,
    phonebanking,
    pollWorker,
    postcardMgmt,
    postcardWriting,
    txtPhoneScriptEdit,
    txtPhoneScriptWrite,
    vanVoteBuildExp,
    voterReg,
    volunteer,
   volunteerId,
  } = req.body;

  const politicalSkills = await prisma.politicalSkills.create({
    data: {
      firstName,
      lastName,
      email,
      campaignMgmt,
      canvassing,
      communityOrganizing,
      electedOfficialCurr,
      electedOfficialPast,
      p2pTextingMgmt,
      p2pTextingVol,
      phonebanking,
      pollWorker,
      postcardMgmt,
      postcardWriting,
      txtPhoneScriptEdit,
      txtPhoneScriptWrite,
      vanVoteBuildExp,
      voterReg,
      volunteerId,
      volunteer: {
        connectOrCreate: [
          {
            create: {
              firstName: firstName,
              lastName: lastName,
              email: email,
            },
            where: {
              email: email,
            },
          },
        ],
      },
    },
    include: {
      volunteer: true,
    },
  });
  res.status(200).json({ politicalSkills });
};

const getAll = async (req, res) => {
  const politicalSkills = await prisma.politicalSkills.findMany({
    orderBy: {
      lastName: 'asc',
    },
    include: {
      volunteer: true,
    },
  });
  res.status(200).json({ politicalSkills });
};

const updatePoliticalSkill = async (req, res) => {
  const { id } = req.params;

  const {
    firstName,
    lastName,
    email,
    campaignMgmt,
    canvassing,
    communityOrganizing,
    electedOfficialCurr,
    electedOfficialPast,
    p2pTextingMgmt,
    p2pTextingVol,
    phonebanking,
    pollWorker,
    postcardMgmt,
    postcardWriting,
    txtPhoneScriptEdit,
    txtPhoneScriptWrite,
    vanVoteBuildExp,
    voterReg,
    volunteer,
    volunteerId,
  } = req.body;

  const politicalSkills = await prisma.politicalSkills.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      email,
      campaignMgmt,
      canvassing,
      communityOrganizing,
      electedOfficialCurr,
      electedOfficialPast,
      p2pTextingMgmt,
      p2pTextingVol,
      phonebanking,
      pollWorker,
      postcardMgmt,
      postcardWriting,
      txtPhoneScriptEdit,
      txtPhoneScriptWrite,
      vanVoteBuildExp,
      voterReg,
      volunteerId,
      volunteer: {
        connectOrCreate: [
          {
            create: {
              firstName: firstName,
              lastName: lastName,
              email: email,
            },
            where: {
              email: email,
            },
          },
        ],
      },
    },
    include: {
      volunteer: true,
    },
  });
  res.status(200).json({ politicalSkills })
}

const deletePoliticalSkill = async (req, res) => {
  const { id } = req.params;

  await prisma.politicalSkills.delete({
    where: {
      id,
    },
  });
  res.status(200).json({})
}

export { create, getAll, updatePoliticalSkill, deletePoliticalSkill };
