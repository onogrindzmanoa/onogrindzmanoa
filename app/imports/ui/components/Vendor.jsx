import React from 'react';
import { Card, Image /* , Feed */ } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
/* import Note from '/imports/ui/components/Note';
import AddNote from '/imports/ui/components/AddNote'; */

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Vendor extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='right' size='small' src={this.props.vendor.image} />
            <Card.Header> {this.props.vendor.name} </Card.Header>
            <Card.Description>Hours</Card.Description>
            <Card.Meta>{this.props.vendor.hours}</Card.Meta>
            <Card.Description>Location</Card.Description>
            <Card.Meta>{this.props.vendor.location}</Card.Meta>
            <Card.Description>Description</Card.Description>
            <Card.Meta>{this.props.vendor.description}</Card.Meta>
            <Card.Description>Menu</Card.Description>
            <Card.Meta>{this.props.vendor.menu}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.vendor._id}`}>Edit</Link>
          </Card.Content>
          {/*
          <Card.Content extra>
            <Feed>
              {this.props.notes.map((note, index) => <Note key={index} note={note}/>)}
            </Feed>
          </Card.Content>
          <Card.Content extra>
            <AddNote owner={this.props.contact.owner} contactId={this.props.contact._id}/>
          </Card.Content>
          */}
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Vendor.propTypes = {
  vendor: PropTypes.object.isRequired,
  /* notes: PropTypes.array.isRequired, */
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Vendor);
