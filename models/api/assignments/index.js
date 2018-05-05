const mongoose = require("mongoose");
const {Schema} = mongoose;
const {ObjectId} = Schema.Types;

const assignmentSchema = new Schema({
    dateAssigned: {
        type: ObjectId,
        ref: "Days",
        required: true
    },
    courseMaterial: {
        type: ObjectId,
        ref: "CourseMaterial",
        required: true
    },
    assignedTo: {
        type: ObjectId,
        ref: "Users",
        required: true
    },
    cohortId: {
        type: ObjectId,
        ref: "Cohorts",
        required: true
    },
    status: {
        type: String,
        enum: ["assigned", "unassigned", "submitted", "passed", "failed"],
        default: "unassigned",
        required: true
    },
});

module.exports = mongoose.model("Assignment", assignmentSchema);