import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default class Camera extends Component{
    login(){
        this.props.navigation.navigate("main")
    }
    render(){
        return (
            <TouchableOpacity style={
                {flex:1, width:100 + '%', height:100 + '%',
                 justifyContent: 'center', alignItems:'center'}}
                 onPress={ () => this.login()}
                 >
                <Text>Camera Page</Text>
            </TouchableOpacity>
        );
    }
}
