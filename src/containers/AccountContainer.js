// import all need react 
import React, { PureComponent } from 'react';
// import react-native component
import { View } from 'react-native';
// import Header component
import { Header } from '../components/common/';

// import react-redux bind library for get `dispatch` property
import { connect } from 'react-redux';

// import presentaction component for receive data from the store
import {
  TabThreeScreenOne,
} from '../components/TabThree/views/';
// import action constants for get profile
import { GET_PROFILE } from '../constants/';

// create container component
class AccountContainer extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: GET_PROFILE, payload: { id: "5a07b22591a23a14e642eb39" } });
  }

  render() {
    // get profile from the props
    const { profile, navigation } = this.props;
    const { userProfile } = profile;
    return (
      <TabThreeScreenOne profile={userProfile} navigation={navigation} />
    );
  }
}

AccountContainer.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={{ top: -10 }}>
      <Header 
        headerText="我的账号"
        navigation={navigation}
      />
    </View>
  ),
})

// connect the component and get data from the redux-store
export default connect(
  // mapStateToProps
  state => {
    // get the profile reducer state section from the user
    const { profile } = state.users;
    // inject the data in AccountContainer
    // use destruction for return new object every time(a performance method)
    return { profile };
  },
)(AccountContainer);