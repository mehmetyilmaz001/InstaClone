import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native'
import config from '../../config'

export default class Profile extends Component{

    constructor(props){
        super(props);

        this.state = {
            userId : '5b01ba9fda1d9b00143111a3',
            profilePics: []
        };
    }

    componentDidMount(){

        this._navListener = this.props.navigation.addListener('didFocus', () => {
              let newPics = Object.assign([], this.state.profilePics);
              newPics.push(this.props.navigation.state.params.newPic);
              this.setState({
                  profilePics: newPics
              });  
        });
        
        fetch(config.baseApiUrl + "photo?user=" + this.state.userId, {
            method: "GET"
        }).then(response => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse.data)
           this.setState({
               profilePics: jsonResponse.data
           });
        }).catch( err => {
            console.log(err)
        });
    }

    
    render(){


        return (
            <View style={
                {flex:1, width:100 + '%', height:100 + '%',
                 justifyContent: 'center', alignItems:'center'}}
                 >
                <View style={styles.profilePicCont}>
                {
                     this.state.profilePics.map((pic,i)=>{
                        return <Image 
                            style={styles.profilePicThumb} 
                            key={pic.id} 
                            source={{uri:pic.url}} />
                    })
                 }
                 </View>
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    profilePicCont: {
        width: 100 + '%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    profilePicThumb: {
        width: config.styleConstants.oneThirdWidth,
        height: config.styleConstants.oneThirdWidth
    }
});
