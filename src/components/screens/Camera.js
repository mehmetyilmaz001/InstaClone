import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import config from '../../config'
import Turbo from 'turbo360'
import {connect} from 'react-redux'

class Camera extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> Şipşak </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data);

      const turbo = Turbo({
        site_id: "5af9ba95e2af2f0014b6d5bf"
      });

      //Upload image
      const imgUploadRes = await turbo.uploadFile({
        uri: data.uri,
        name: 'camera_pic' + Date.now(),
        type: 'image/jpeg'
      });
    
      //insert uploaded image with user id to the image table
      const res = await fetch(config.baseApiUrl + "users/"+this.props.user.id+"/photo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({imageUrl: imgUploadRes.result.url})
      })
      .then(res => res.json())
      .then(jsonRespons => {
         this.props.navigation.navigate("profile");
      })
      .catch(err => {
        alert("Hata oluştu!")
      });

    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

const stateToProps = state => {
  return {
      user: state.account.user
  }
}

const dispatchToProps = dispatch => {
  return {
      
  }
}

export default connect(stateToProps, dispatchToProps)(Camera)