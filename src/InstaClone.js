import React, {Component} from 'react'
import {View,  StyleSheet} from 'react-native'
import { MainFeed, Login,  Register, Camera, Profile } from './components/screens';
import {createSwitchNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 
'Module RCTImageLoader', 'Class RCTCxxModule']);


const Tabs = createBottomTabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
});

const IntroStact = createStackNavigator({
    login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            title: "Login"
        }) 
    },
    register: {
        screen: Register,
        navigationOptions: ({navigation}) => ({
            title: "Register"
        })
    }
});

const MainStack = createSwitchNavigator({
    intro: IntroStact,
    main: Tabs
});

class InstaClone extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <MainStack />
        );
    }
}

export default InstaClone;