import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Members } from "../api/collections";

Template.admin.onCreated(function () {
  console.log("admin.onCreated");
  Meteor.subscribe("members");
});

Template.admin.helpers({
  members() {
    console.log("Members.find()");
    console.log(Members.find());
    return Members.find();
  },
  date() {
      const d = new Date;
      let formatted = d.getFullYear() + '/';
      formatted += (d.getMonth() + 1).toString().padStart(2, "0")+'/';
      formatted += d.getDate().toString().padStart(2, "0")+ ' ';
      formatted += d.getHours().toString().padStart(2, "0")+ ':';
      formatted += d.getMinutes().toString().padStart(2, "0");
      return formatted;
  },
});

Template.admin.events({
  "click #clearBtn"(event) {
    event.preventDefault();
    Meteor.call("clear");
  },
  "click #openBtn"(event) {
    event.preventDefault();
    Meteor.call("open");
  },
});
