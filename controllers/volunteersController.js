import prisma from '../lib/prisma.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const create = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    city,
    state,
    zip,
    prevExp,
    polExp,
    other,
    foundR2b,
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
    actor,
    artist,
    boardOfDirectors,
    dataScience,
    dbMgmt,
    editor,
    professor,
    trainer,
    fundraising,
    graphicDesign,
    hr,
    it,
    legal,
    linguist,
    msgComms,
    musician,
    newsletterCreateDesign,
    newsletterWrite,
    nonprofMgmt,
    pr,
    publicSpeak,
    recruitment,
    research,
    otherLanguage,
    socialMediaContentCreate,
    socialMediaMgmt,
    speechWriter,
    strategicPlanning,
    videoEditCreate,
    volMgmt,
    webDesign,
    webMgmt,
    anythingElse,
    events,
    updatedAt,
  } = req.body;

  const volunteer = await prisma.volunteer.create({
    data: {
      firstName,
      lastName,
      email,
      city,
      state,
      zip,
      prevExp,
      polExp,
      other,
      foundR2b,
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
      actor,
      artist,
      boardOfDirectors,
      dataScience,
      dbMgmt,
      editor,
      professor,
      trainer,
      fundraising,
      graphicDesign,
      hr,
      it,
      legal,
      linguist,
      msgComms,
      musician,
      newsletterCreateDesign,
      newsletterWrite,
      nonprofMgmt,
      pr,
      publicSpeak,
      recruitment,
      research,
      otherLanguage,
      socialMediaContentCreate,
      socialMediaMgmt,
      speechWriter,
      strategicPlanning,
      videoEditCreate,
      volMgmt,
      webDesign,
      webMgmt,
      anythingElse,
      // events: {
      //   connectOrCreate: [
      //     {
      //       create: {
      //         eventName: events,
      //       },
      //       where: {
      //         eventName: events
      //       },
      //     }
      //   ],
      // },
      events: {
        connectOrCreate: 
          events.map((event) => ({
            where: {
                eventName: event,
            },
            create: {
              eventName: event
            }
            }))
      },
      updatedAt,
    },
    include: {
      events: true,
    },
  });
  res.status(200).json({ volunteer });
};

const getAll = async (req, res) => {
  const volunteer = await prisma.volunteer.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    include: {
      events: true,
    },
  });
  res.status(200).json({ volunteer });
};

const updateVolunteer = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    city,
    state,
    zip,
    prevExp,
    polExp,
    other,
    foundR2b,
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
    actor,
    artist,
    boardOfDirectors,
    dataScience,
    dbMgmt,
    editor,
    professor,
    trainer,
    fundraising,
    graphicDesign,
    hr,
    it,
    legal,
    linguist,
    msgComms,
    musician,
    newsletterCreateDesign,
    newsletterWrite,
    nonprofMgmt,
    pr,
    publicSpeak,
    recruitment,
    research,
    otherLanguage,
    socialMediaContentCreate,
    socialMediaMgmt,
    speechWriter,
    strategicPlanning,
    videoEditCreate,
    volMgmt,
    webDesign,
    webMgmt,
    anythingElse,
    events,
    updatedAt,
  } = req.body;

  const volunteer = await prisma.volunteer.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      email,
      city,
      state,
      zip,
      prevExp,
      polExp,
      other,
      foundR2b,
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
      actor,
      artist,
      boardOfDirectors,
      dataScience,
      dbMgmt,
      editor,
      professor,
      trainer,
      fundraising,
      graphicDesign,
      hr,
      it,
      legal,
      linguist,
      msgComms,
      musician,
      newsletterCreateDesign,
      newsletterWrite,
      nonprofMgmt,
      pr,
      publicSpeak,
      recruitment,
      research,
      otherLanguage,
      socialMediaContentCreate,
      socialMediaMgmt,
      speechWriter,
      strategicPlanning,
      videoEditCreate,
      volMgmt,
      webDesign,
      webMgmt,
      anythingElse,
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
      updatedAt,
    },
    include: {
      events: true,
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
