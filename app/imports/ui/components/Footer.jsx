import React from 'react';
import { Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px', color: 'white' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
            <hr />
            OnoGrindzManoa
            <a href="https://github.com/onogrindzmanoa"><Icon name='github' size='large'/></a><br/>
            Making Food Choice Easier for the UH Community
          </div>
        </footer>
    );
  }
}

export default Footer;
