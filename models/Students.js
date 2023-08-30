const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
  name:  {
    type : String,
    unique : true
  },
  roll: Number,
  math:   String,
  english: String,
  science: String,
});
module.exports = mongoose.model("Student", studentSchema)