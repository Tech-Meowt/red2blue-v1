import mongoose from 'mongoose';
import validator from 'validator';

const VolunteerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minlength: 2,
      maxlength: 20,
      trim: true,
    },
    lastName: {
      type: String,
      minlength: 2,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email',
      },
    },
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    phone: {
      type: String,
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
    prevExp: {
      type: String,
    },
    polExp: {
      type: String,
    },
    other: {
      type: String,
    },
    foundR2b: {
      type: String,
    },
    campaignMgmt: {
      type: String,
    },
    canvassing: {
      type: String,
    },
    commOrganizing: {
      type: String,
    },
    electedOffCurr: {
      type: String,
    },
    electedOffPast: {
      type: String,
    },
    p2pTxtMgmt: {
      type: String,
    },
    p2pTxtVol: {
      type: String,
    },
    phoneBanking: {
      type: String,
    },
    pollWorker: {
      type: String,
    },
    postcardPlanningMgmt: {
      type: String,
    },
    postcardWriting: {
      type: String,
    },
    txtPhoneBankScriptEdit: {
      type: String,
    },
    txtPhoneBankScriptWrite: {
      type: String,
    },
    vanVoteBuildExp: {
      type: String,
    },
    voterReg: {
      type: String,
    },
    actor: {
      type: String,
    },
    artist: {
      type: String,
    },
    boardOfDir: {
      type: String,
    },
    dataScience: {
      type: String,
    },
    dbMgmt: {
      type: String,
    },
    editor: {
      type: String,
    },
    teacherProf: {
      type: String,
    },
    trainer: {
      type: String,
    },
    fundraising: {
      type: String,
    },
    graphicDesign: {
      type: String,
    },
    hr: {
      type: String,
    },
    it: {
      type: String,
    },
    legal: {
      type: String,
    },
    linguist: {
      type: String,
    },
    msgComms: {
      type: String,
    },
    musician: {
      type: String,
    },
    newsletterCreateDesign: {
      type: String,
    },
    newsletterWrite: {
      type: String,
    },
    nonprofMgmt: {
      type: String,
    },
    pr: {
      type: String,
    },
    publicSpeak: {
      type: String,
    },
    recruitment: {
      type: String,
    },
    research: {
      type: String,
    },
    otherLanguage: {
      type: String,
    },
    socialMediaContentCreate: {
      type: String,
    },
    socialMediaMgmt: {
      type: String,
    },
    speechWriter: {
      type: String,
    },
    strategicPlanning: {
      type: String,
    },
    videoEditCreate: {
      type: String,
    },
    volMgmt: {
      type: String,
    },
    webDesign: {
      type: String,
    },
    webMgmt: {
      type: String,
    },
    anythingElse: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Volunteer', VolunteerSchema)
