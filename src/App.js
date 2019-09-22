import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import { overrideLog } from './utils/CommonUtils';

import getStore from './store/IndexStore';
import AppContainer from './containers/AppContainer'

overrideLog();
export default class App extends Component {
    state = {
        store: null
    }
    async componentDidMount() {
        const store = await getStore();// v4 redux persist
        this.setState({ store });

    }
    render() {
        if (this.state.store === null) {
            return (
                <Text>
                    Booting...
              </Text>
            )
        }
        return (
            <Provider store={this.state.store}>
                <AppContainer />
            </Provider>
        )
    }
}