import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { Vendors } from '/imports/api/vendor/vendor';
/* import { Notes } from '/imports/api/note/note'; */
import Vendor from '/imports/ui/components/Vendor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListVendors extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>List Vendors</Header>
          <Card.Group>
            {this.props.vendors.map((vendor, index) => <Vendor key={index}
                         vendor={vendor}
                         /* notes={this.props.notes.filter(note => (note.contactId === contact._id))} */ />)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  /* notes: PropTypes.array.isRequired, */
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Vendors');
  /* const subscription2 = Meteor.subscribe('Notes'); */
  return {
    vendors: Vendors.find({}).fetch(),
    /* notes: Notes.find({}).fetch(), */
    ready: subscription.ready(), /* && subscription2.ready() */
  };
})(ListVendors);
