import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Vendors = new Mongo.Collection('Vendors');

/** Create a schema to constrain the structure of documents associated with this collection. */
const VendorSchema = new SimpleSchema({
  name: String,
  hours: String,
  location: String,
  image: String,
  description: String,
  menu: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Vendors.attachSchema(VendorSchema);

/** Make the collection and schema available to other code. */
export { Vendors, VendorSchema };
