import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Members } from "../api/collections";

// tslint:disable-next-line:no-var-requires
const Cookies = require('js-cookie')

Template.front.onCreated(function() {
    console.log("front.onCreated");
    Meteor.subscribe("membersResult");
});

Template.front.onRendered(function() {
    var savedName = Cookies.get("name");
    if (savedName != null) {
        document.getElementById("name").value = decodeURIComponent(savedName);
    }
})

Template.front.helpers({
    published() {
        return Members.find({ publishFlag: true }).count() > 0;
    },
});
Template.result.helpers({
    members() {
        console.log("Members.find()");
        console.log(Members.find({ publishFlag: true }).fetch());
        return Members.find({ publishFlag: true });
    },
});

Template.front.events({
    "submit #frontForm" (event) {
        console.log("frontForm submitted.");
        event.preventDefault();
        const $el = $(event.currentTarget);
        if ($el[0].checkValidity() === false) {
            console.log("fail");
            event.preventDefault();
            event.stopPropagation();
            $el[0].classList.add("was-validated");
            return;
        }
        const name = $el.find('[name="name"]').val();
        const finger = $el.find('[name="finger"]:checked').val();
        const message = $el.find('[name="message"]').val();

        const data = { name: name, finger: finger, message: message };
        Meteor.call("send", data);
        console.log(data);

        $el.find(":input").attr("disabled", true);
        $el
            .find(":button")
            .attr("disabled", true)
            .attr("class", "btn btn-success")
            .text("おくりました！");
        Cookies.set("name", encodeURIComponent(name), { expires: 730 });
    },
});
