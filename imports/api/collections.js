import { Mongo } from "meteor/mongo";

//declare the Mongo collections to use
export const Members = new Mongo.Collection("members");
