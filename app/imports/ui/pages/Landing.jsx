import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const contStyle = { paddingTop: '15px', paddingBottom: '15px' };
    return (
        <div className='grindz-background-image'>
          <Grid container centered stackable columns={2} style={contStyle}>

            <Grid.Column textAlign='center'>
              <Icon inverted name='food' size='huge'/>
              <Header as='h1' inverted>Food</Header>
              <Header as='h3' inverted>OnoGrindzManoa enables you to find vendors around campus
                and their menus so that you can make the food choices you want in a faster, easier way.
                It is all about making food choice easier for members of the University of Hawaii community.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon inverted name='search' size='huge'/>
              <Header as='h1' inverted>Search</Header>
              <Header as='h3' inverted>You can look for vendors that match
                your food preferences and offer the menus you want.
                It makes finding food faster and less stressful.
                You can also browse the list of vendors to find places you
                might want to try, and can view their menus, hours of operation, and other information.</Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon inverted name='info' size='huge'/>
              <Header as='h1' inverted>Information</Header>
              <Header as='h3' inverted>Forget checking back and forth for your favorite food items to finally arrive.
                Along with vendor locations, find vendor information regarding upcoming specials,
                promotions and prices.</Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon inverted name='map marker alternate' size='huge'/>
              <Header as='h1' inverted>Maps</Header>
              <Header as='h3' inverted>Stop hunting for food! Maps will provide the location for each vendor. Click on
                Locations to see more.</Header>
            </Grid.Column>
          </Grid>
        </div>

    );
  }
}

export default Landing;
