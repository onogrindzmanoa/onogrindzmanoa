import _ from 'lodash';
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';

/**
 * This Search Bar is the component that appears at the top of the landing page.
 */
const source = _.times(1, () => ({
  name: 'Bale',
  hours: '10am - 8pm',
  location: 'Outside of Sinclair Library',
  description: 'Vietnamese Cafe',
}));

export default class SearchExampleStandard extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) => this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
        <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
        />
    );
  }
}
