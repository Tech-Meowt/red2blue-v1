import prisma from '../lib/prisma.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const create = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zip,
    events,
    updatedAt,
    lifeSkillId,
    skillId,
  } = req.body;

  const volunteer = await prisma.volunteer.create({
    data: {
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zip,
      lifeSkillId,
      skillId,
      // events,
      // events: {
      //   connectOrCreate: [
      //     {
      //       create: {
      //         eventName: events,
      //       },
      //       where: {
      //         eventName: events,
      //       },
      //     },
      //   ],
      // },
      // events: {
      //   connectOrCreate:
      //     events.map((event) => ({
      //       where: {
      //           eventName: event,
      //       },
      //       create: {
      //         eventName: event
      //       }
      //       }))
      // },
    },
    // include: {
    //   events: true,
    // },
  });
  res.status(200).json({ volunteer });
};

const getAll = async (req, res) => {
  const volunteer = await prisma.volunteer.findMany({
    orderBy: {
      lastName: 'asc',
    },
    // include: {
    //   events: true,
    //   politicalSkills: true,
    // },
  });
  res.status(200).json({ volunteer });
};

const updateVolunteer = async (req, res) => {
  const { id } = req.params;

  const {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zip,
    events,
    updatedAt,
    lifeSkillId,
    skillId,
  } = req.body;

  const volunteer = await prisma.volunteer.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zip,
      lifeSkillId,
      skillId,
      events: {
        connectOrCreate: [
          {
            create: {
              eventName: events,
            },
            where: {
              eventName: events,
            },
          },
        ],
      },
      // events: {
      //   connectOrCreate:
      //     events.map((event) => ({
      //       where: {
      //           eventName: event,
      //       },
      //       create: {
      //         eventName: event
      //       }
      //       }))
      // },
      // politicalSkills: {
      //   connectOrCreate: [
      //     {
      //       create: {
      //         campaignMgmt: campaignMgmt,
      //         canvassing: canvassing,
      //         communityOrganizing: communityOrganizing,
      //         electedOfficialCurr: electedOfficialCurr,
      //         electedOfficialPast: electedOfficialPast,
      //         p2pTextingMgmt: p2pTextingMgmt,
      //         p2pTextingVol: p2pTextingVol,
      //         phonebanking: phonebanking,
      //         pollWorker: pollWorker,
      //         postcardMgmt: postcardMgmt,
      //         postcardWriting: postcardWriting,
      //         txtPhoneScriptEdit: txtPhoneScriptEdit,
      //         txtPhoneScriptWrite: txtPhoneScriptWrite,
      //         vanVoteBuildExp: vanVoteBuildExp,
      //         voterReg: voterReg,
      //       },
      //       where: {
      //         email: email,
      //       }
      //     },
      //   ],
      // },
    },
    include: {
      events: true,
      // politicalSkills: true,
    },
  });
  res.status(200).json({ volunteer });
};

const deleteVolunteer = async (req, res) => {
  const { id } = req.params;

  await prisma.volunteer.delete({
    where: {
      id,
    },
  });
  res.status(200).json({});
};

export { create, getAll, updateVolunteer, deleteVolunteer };
