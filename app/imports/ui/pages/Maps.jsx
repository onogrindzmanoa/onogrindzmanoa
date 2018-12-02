import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class Maps extends React.Component {
  render() {
    const contStyle = { paddingRight: '200px', paddingLeft: '200px' };
    return (
        <Header as="h2" inverted textAlign="center">
          <p>Maps</p>
          <Grid container centered stackable>
            <Grid container centered stackable columns={2} style={contStyle}>
              <Grid.Column textAlign='center'>
              <Header as="h4" inverted textAlign="center"><p>Administered by Auxiliary Services</p>
                <Image size='small'
                       src='http://manoa.hawaii.edu/food/resources/images/auxSvcsIcon.png' centered/>
              </Header>
              </Grid.Column>
              <Grid.Column textAlign='center'>
              <Header as="h4" inverted textAlign="center"><p>Administered by Student Affairs</p>
                <Image size='small'
                       src='http://manoa.hawaii.edu/food/resources/images/studentAffairsIcon.png' centered/>
              </Header>
              </Grid.Column>
            </Grid>
            <Image floated='center'
                   src='http://manoa.hawaii.edu/food/resources/images/maps/locationsUpperCampusMap.png' centered/>
            <Image floated='center'
                   src='http://manoa.hawaii.edu/food/resources/images/maps/locationsLowerCampusMap.png' centered/>
          </Grid>
        </Header>
    );
  }
}

export default Maps;
