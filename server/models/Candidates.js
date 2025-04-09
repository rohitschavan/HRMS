import mongoose from "mongoose";

const CandidatesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'JobDB',
      required: true,
    },
    resumeLink: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Applied', 'Shortlisted', 'Interviewed', 'Rejected'],
      default: 'Applied',
    },
  },
  { timestamps: true }
);

const CandidatesDB = mongoose.model('Candidates', CandidatesSchema);

export default CandidatesDB;
