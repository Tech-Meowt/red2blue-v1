import prisma from '../lib/prisma.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const create = async (req, res) => {
  const { firstName,
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
  } = req.body

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
      events: {
        connectOrCreate: {
          where: {
            eventName: events
          },
          create: {
            eventName: events
          }
        }
      }
    },
  });
  res.status(200).json({ volunteer })
};

const getAll = async (req, res) => {
  const volunteer = await prisma.volunteer.findMany();
  res.status(200).json({ volunteer })
};

const updateVolunteer = async (req, res) => {
  const { id: recordId } = req.params;
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
    commOrganizing,
    electedOffCurr,
    electedOffPast,
    p2pTxtMgmt,
    p2pTxtVol,
    phoneBanking,
    pollWorker,
    postcardPlanningMgmt,
    postcardWriting,
    txtPhoneBankScriptEdit,
    txtPhoneBankScriptWrite,
    vanVoteBuildExp,
    voterReg,
    actor,
    artist,
    boardOfDir,
    dataScience,
    dbMgmt,
    editor,
    teacherProf,
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
  } = req.body;

  const record = await Volunteer.findOne({ _id: recordId });

  if (!record) {
    throw new NotFoundError(`No record found`);
  }

  const updatedRecord = await Volunteer.findOneAndUpdate(
    { _id: recordId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedRecord });
};

const deleteVolunteer= (req, res) => {
  Volunteer.findById(req.params.id, function (err, deletedRecord) {
    if (!deletedRecord) {
      res.status(404).send('Record not found');
    } else {
      Volunteer.findByIdAndRemove(req.params.id)
        .then(function () {
          res.status(200).json('Record deleted!');
        })
        .catch(function (err) {
          res.status(400).send('Delete failed.');
        });
    }
  });
};

export { create, getAll, updateVolunteer, deleteVolunteer };
