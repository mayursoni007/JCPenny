
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Footer, FooterTab, Button, Icon } from 'native-base';

import navigateTo from '../../actions/footerNav';
import myTheme from '../../themes/base-theme';

import styles from './style';

class FooterBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'Departments');
  }

  render() {
    return (
      <Footer>
        <FooterTab>
            <Button onPress={() => this.navigateTo('Departments')}>
                <Icon name="home" />
                <Text>Departments</Text>
            </Button>
            <Button onPress={() => this.navigateTo('stores')}>
                <Icon name="navigate" />
                <Text>Stores</Text>
            </Button>
        </FooterTab>
      </Footer>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute))
  };
}

const mapStateToProps = state => ({
  //navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(FooterBar);
