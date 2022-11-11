const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    marks:{
type:[{}]
   }}, { timestamps: true })

module.exports = mongoose.model("student",studentSchema)