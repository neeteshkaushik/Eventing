const mongoose = require("mongoose");

const EventLogSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  triggerTime: {
    type: Date,
    default: new Date().toString(),
  },
});

module.exports = mongoose.model("EventLog", EventLogSchema);
