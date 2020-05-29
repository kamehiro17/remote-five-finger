import { Meteor } from "meteor/meteor";
import { Members } from "./collections.js";

Meteor.methods({
  send: function (data) {
    console.log("send called.");
    Members.insert({
      name: data.name,
      finger: data.finger,
      message: data.message,
      publishFlag: false,
      createdAt: new Date(),
    });
  },

  clear: function () {
    console.log("clear called.");
    Members.remove({});
  },

  open: function () {
    console.log("open called.");
    Members.update({}, { $set: { publishFlag: true } }, { multi: true });
  },
});
