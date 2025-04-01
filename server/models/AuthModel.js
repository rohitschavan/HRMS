import mongoose from 'mongoose';

const AuthSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    name: { type: String },
    role: {
        type: String,
        enum: ["Admin", "HR", "Employee"],
        default: "Employee"
    },
    status: { type: Boolean, default: true }
}, { timestamps: true })



export const Authmodel = mongoose.model('Auth', AuthSchema);

