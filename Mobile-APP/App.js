import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Main from './src/Navigator/index'
import Reducers from './src/redux/index';

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      isReady: false,
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
      this.setState({ isReady: true });
  }


  render() {

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
        <Provider store = { createStore(Reducers) } >
            <Main/>
        </Provider>
    );

  }
}
