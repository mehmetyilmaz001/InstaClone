import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native'
import config from '../../config'

export default class Login extends Component{

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

    login(){

        let credentials = this.state.credentials;
        credentials.email = this.state.credentials.email.toLowerCase();

        fetch(config.baseApiUrl + 'login', {
            method: 'POST',
            headers:{
                Accept: 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(response => response.json())
        .then(jsonResponse => {
            console.log(JSON.stringify(jsonResponse))
            if(jsonResponse.confirmation === "success"){
                this.props.navigation.navigate("main")
            }else{
                throw new Error(jsonResponse.message)
            }
        })
        .catch(err => {
            alert(err)
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
                <Button style={{marginTop:10}} title="Giriş" onPress={ () => this.login()}/>
                <Button title="Kayıt ol" onPress={ () => this.props.navigation.navigate("register")}/>
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
