const EventLog = require("./models/EventLog");
const { writeFileSync } = require("fs");

class Eventing {
  constructor() {
    this.events = {};
  }
  on(eventName, cb) {
    if (eventName in this.events) {
      this.events[eventName].push(cb);
    } else {
      this.events[eventName] = [cb];
    }
  }

  async trigger(eventName) {
    let allCbs = this.events[eventName];
    allCbs.forEach((e) => {
      e();
    });

    const log = await EventLog.create({ event: eventName });
    writeFileSync("app.log", `${eventName} ---> ${log.triggerTime} \n`, {
      flag: "a",
    });
  }

  async off(eventName) {
    this.events[eventName] = [];
    const log = await EventLog.create({ event: eventName });
    writeFileSync("app.log", `${eventName} ---> ${log.triggerTime} \n`, {
      flag: "a",
    });
  }
}

module.exports = Eventing;
