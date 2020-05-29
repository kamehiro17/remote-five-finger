import { Meteor } from "meteor/meteor";
import { Members } from "../collections.js";

Meteor.publish({
  membersResult: function () {
    console.log("publish.membersResult called.");
    return Members.find({ publishFlag: true });
  },
  members: function () {
    console.log("publish.members called.");
    return Members.find({});
  },
});
