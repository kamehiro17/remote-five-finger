import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

// Import to load these templates
import "../../ui/front.html";
import "../../ui/facilitator-console.html";

FlowRouter.route("/front", {
  name: "front",
  action() {
    require("../../ui/front.js")
    BlazeLayout.render("front");
  },
});

FlowRouter.route("/facilitator-console", {
  name: "facilitator-console",
  action() {
    require("../../ui/facilitator-console.js")
    BlazeLayout.render("facilitatorConsole");
  },
});

FlowRouter.route("/", {
  name: "front",
  action() {
    require("../../ui/front.js")
    BlazeLayout.render("front");
  },
});

