import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

// Import to load these templates
import "../../ui/about.html";
import "../../ui/front.html";
import "../../ui/facilitator-console.html";
import "../../ui/_component.html";

const main = document.getElementById("main-container");

FlowRouter.route("/front", {
    name: "front",
    action() {
        require("../../ui/front.js")
        BlazeLayout.render("front", main);
    },
});

FlowRouter.route("/about", {
    name: "about",
    action() {
        BlazeLayout.render("about", main);
    },
});

FlowRouter.route("/facilitator-console", {
    name: "facilitator-console",
    action() {
        require("../../ui/facilitator-console.js")
        BlazeLayout.render("facilitatorConsole", main);
    },
});

FlowRouter.route("/", {
    name: "front",
    action() {
        require("../../ui/front.js")
        BlazeLayout.render("front", main);
    },
});