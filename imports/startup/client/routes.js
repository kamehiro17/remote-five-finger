import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

// Import to load these templates
import "../../ui/front.html";
import "../../ui/admin.html";

FlowRouter.route("/front", {
  name: "front",
  action() {
    require("../../ui/front.js")
    BlazeLayout.render("front");
  },
});

FlowRouter.route("/admin", {
  name: "admin",
  action() {
    require("../../ui/admin.js")
    BlazeLayout.render("admin");
  },
});