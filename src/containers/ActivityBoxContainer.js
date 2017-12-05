// react component all need package
import React, { PureComponent } from 'react';
// import component from react-native
import { View } from 'react-native';
// import react bind library connect
import { connect } from 'react-redux';
// import presentation component
import { ActivityBox } from '../components/common/';
// import actions constants
import { GET_EVENTS } from '../constants/';
// import Header from common
import { Header } from '../components/common/';


class ActivityBoxContainer extends PureComponent {
  componentDidMount() {
    // get the dispatch from the connect, get userId from the redux store
    const { dispatch, userId } = this.props;
    // dispatch REQUEST_ACTIVE_EVENT, get all need sign-up activity
    dispatch({ type: GET_EVENTS, payload: { userId, active: true } });
  }

  render() {
    // definitely give out all need pass data in one place
    const { events, navigation } = this.props;
    
    return (
      <ActivityBox
        events={events}
        navigation={navigation}
      />
    );
  }
}

// define the header for this component
ActivityBoxContainer.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={{ top: -10 }}>
      <Header 
        headerText="活动签到"
        logoLeft={require('../components/TabOne/img/back.png')}
        navigation={navigation}
      />
    </View>
  ),
});

export default connect(
  // mapStateToProps
  state => {
    // construct fake userId for replace later
    const userId = "5a07b22591a23a14e642eb39";
    // get the needAttendEvents from the state tree
    const { events } = state.events.events;
    return {
      userId,
      events,
    };
  },
)(ActivityBoxContainer);