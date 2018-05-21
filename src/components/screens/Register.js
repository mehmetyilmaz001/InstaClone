import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native'
import config from '../../config'

export default class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            credentials: {
                email:'',
                password: ''
            }
        }
    }

    updateText(text, field){
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState({credentials: newCredentials});
    }

    register(){
        // this.props.navigation.navigate("main")
        console.log(JSON.stringify(this.state.credentials));

        fetch(config.baseApiUrl + 'signup', {
            method: 'POST',
            headers:{
                Accept: 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.credentials)
        }).then(response => response.json())
        .then(jsonResponse => {
            console.log(JSON.stringify(jsonResponse))
            if(jsonResponse.confirmation === "success"){
                this.props.navigation.navigate("main")
            }else{
                throw new Error({
                    message : "Kayıt işlemi hatalı!"
                })
            }
        })
        .catch(err => {
            alert(err.message)
        });
    }
    render(){
        return (
            <View style={
                {flex:1, width:100 + '%', height:100 + '%',
                 justifyContent: 'center', alignItems:'center',
                 backgroundColor: '#fff',
                 padding:50
                }}
                 
                 >
                <Text></Text>

                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={this.state.credentials.email}
                    style={styles.input} 
                    placeholder="Kullanıcı Adı"
                    onChangeText={(text) => this.updateText(text, 'email')} 
                />
                <TextInput 
                    value={this.state.credentials.password}
                    secureTextEntry={true} 
                    style={styles.input} 
                    placeholder="Şifre"
                    onChangeText={(text) => this.updateText(text, 'password')}
                />
                <Button title="Kayıt Ol" onPress={ () => this.register()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create(
     {
        input:{
            height: 50,
            width: 100 + '%',
            borderBottomColor:'gray',
            borderBottomWidth: StyleSheet.hairlineWidth
        }

    }
);
