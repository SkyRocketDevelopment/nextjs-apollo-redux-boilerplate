import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../components/layout'
import * as demoActions from '../actions/demoActions';
/**
 * Home component to show basic redux usage with nextjs.
 */
class Home extends Component {
  static propTypes = {
    /**
     * demo string from redux actions.
     */
    demoString: PropTypes.string.isRequired,
    /**
     * redux function from actions to set the string, accepts a string param,
     * if none is passed, it will return the default string set in the action.
     */
    setString: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.changeDemoString = this.changeDemoString.bind(this);
  }

  componentDidMount() {
    const { setString } = this.props;
    setString();
  }

  /**
   * Change the demo string to whatever you pass as a parameter.
   * @param {string} theString - String to be passed to show in component.
   */
  changeDemoString(theString: String) {
    const { setString } = this.props;
    console.log('changing demo string to: ', theString);
    setString(theString);
  }

  render() {
    const { demoString } = this.props;
    return (
      <Layout title="Home page">
        <button
          onClick={() => this.changeDemoString('not the default string')}
        >
          change demo string of redux store property to 'not the default string'
        </button>
        <button
          onClick={() => this.changeDemoString()}
        >
          change back to default
        </button>
        <div className="carousel">
          <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/1" /></a>
          <a className="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2" /></a>
          <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3"/></a>
          <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4" /></a>
          <a className="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5" /></a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s1">this is a row</div>
            <div className="col s1">this is a row</div>
          </div>
          <p>{demoString}</p>
        </div>
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    demoString: state.demoString
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(demoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
