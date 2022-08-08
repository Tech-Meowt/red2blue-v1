import prisma from '../lib/prisma.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const create = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
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
    answers,
    volunteerId
  } = req.body

  const lifeSkills = await prisma.lifeSkills.create({
    data: {
      firstName,
      lastName,
      email,
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
      volunteerId,
      answers: {
        connectOrCreate: [
          {
            create: {
              actor: actor,
              artist: artist,
              boardOfDirectors: boardOfDirectors,
              dataScience: dataScience,
              dbMgmt: dbMgmt,
              editor: editor,
              professor: professor,
              trainer: trainer,
              fundraising: fundraising,
              graphicDesign: graphicDesign,
              hr: hr,
              it: it,
              legal: legal,
              linguist: linguist,
              msgComms: msgComms,
              musician: musician,
              newsletterCreateDesign: newsletterCreateDesign,
              newsletterWrite: newsletterWrite,
              nonprofMgmt: nonprofMgmt,
              pr: pr,
              publicSpeak: publicSpeak,
              recruitment: recruitment,
              research: research,
              otherLanguage: otherLanguage,
              socialMediaContentCreate: socialMediaContentCreate,
              socialMediaMgmt: socialMediaMgmt,
              speechWriter: speechWriter,
              strategicPlanning: strategicPlanning,
              videoEditCreate: videoEditCreate,
              volMgmt: volMgmt,
              webDesign: webDesign,
              webMgmt: webMgmt,
              anythingElse: anythingElse,
            },
            where: {
              email: email,
            },
          },
        ],
      },
    },
    include: {
      answers: true,
    },
  });
  res.status(200).json({ lifeSkills })
}

const getAll = async (req, res) => {
  const lifeSkills = await prisma.lifeSkills.findMany({
    orderBy: {
      lastName: 'asc',
    },
    include: {
      answers: true,
    },
  });
  res.status(200).json({ lifeSkills });
}

const updateLifeSkill = async (req, res) => {
  const { id } = req.params;

  const {
    firstName,
    lastName,
    email,
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
    answers,
    volunteerId
  } = req.body;

  const lifeSkills = await prisma.lifeSkills.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      email,
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
      volunteerId,
      answers: {
        connectOrCreate: [
          {
            create: {
              actor: actor,
              artist: artist,
              boardOfDirectors: boardOfDirectors,
              dataScience: dataScience,
              dbMgmt: dbMgmt,
              editor: editor,
              professor: professor,
              trainer: trainer,
              fundraising: fundraising,
              graphicDesign: graphicDesign,
              hr: hr,
              it: it,
              legal: legal,
              linguist: linguist,
              msgComms: msgComms,
              musician: musician,
              newsletterCreateDesign: newsletterCreateDesign,
              newsletterWrite: newsletterWrite,
              nonprofMgmt: nonprofMgmt,
              pr: pr,
              publicSpeak: publicSpeak,
              recruitment: recruitment,
              research: research,
              otherLanguage: otherLanguage,
              socialMediaContentCreate: socialMediaContentCreate,
              socialMediaMgmt: socialMediaMgmt,
              speechWriter: speechWriter,
              strategicPlanning: strategicPlanning,
              videoEditCreate: videoEditCreate,
              volMgmt: volMgmt,
              webDesign: webDesign,
              webMgmt: webMgmt,
              anythingElse: anythingElse,
            },
            where: {
              email: email,
            },
          },
        ],
      },
    },
    include: {
      answers: true,
    },
  });
  res.status(200).json({ lifeSkills })
}

const deleteLifeSkill = async (req, res) => {
  const { id } = req.params;

  await prisma.lifeSkills.delete({
    where: {
      id,
    },
  });
  res.status(200).json({})
}

export { create, getAll, updateLifeSkill, deleteLifeSkill }
