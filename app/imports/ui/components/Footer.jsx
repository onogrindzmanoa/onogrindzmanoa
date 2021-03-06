import React from 'react';
import { Icon } from 'semantic-ui-react';

/** Footer leading to the Github Page, also includes a nice note. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px', color: 'white' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
            <hr />
            OnoGrindzManoa
            <br/>
            Making Food Choice Easier for the UH Community<br/>
            Find Us on Github
              <a href="https://github.com/onogrindzmanoa">
                <Icon inverted name='github' size='large'/></a><br/>
          </div>
        </footer>
    );
  }
}

export default Footer;
