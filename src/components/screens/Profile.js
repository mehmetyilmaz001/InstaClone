import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, Button } from 'react-native'
import config from '../../config'
import { connect } from 'react-redux'


class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        console.log(this.props.user);

        // this._navListener = this.props.navigation.addListener('didFocus', () => {
        //       let newPics = Object.assign([], this.state.profilePics);

        //       try{
        //         newPics.push(this.props.navigation.state.params.newPic);
        //         this.setState({
        //             profilePics: newPics
        //         }); 
        //       }catch(err){

        //       }
        // });

        // fetch(config.baseApiUrl + "photo?user=" + this.props.user.id, {
        //     method: "GET"
        // }).then(response => response.json())
        //     .then(jsonResponse => {

        //         this.setState({
        //             profilePics: jsonResponse.data
        //         });
        //     }).catch(err => {
        //         console.log(err)
        //     });

        
    }


    render() {


        return (
            <ScrollView>
                <View style={
                    {
                        flex: 1, width: 100 + '%', height: 100 + '%',
                        justifyContent: 'center', alignItems: 'center',
                        marginTop:25
                    }}
                >

                    <View style={styles.profileInfo}>

                        <View style={{ flexDirection: 'row', width: 100 + '%' }}>
                            <View style={{ flex: 3, alignItems: 'center' }}>
                                <Image
                                    source={{ uri: 'https://lh3.googleusercontent.com/gzfC0MBngDS__B5VpHd60ykjvWEQQ_6Iz9Y4Pcs647Sgk0ubPQKn4x4HpS0BL843m2x5az9HL08JAIM5f4grxZ6Ei7s' }}
                                    style={styles.userPic}
                                />
                            </View>{/* Profil picture col */}

                            <View style={{ flex: 7 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.statCol}>
                                        <Text>128</Text>
                                        <Text>Gönderi</Text>
                                    </View>

                                    <View style={styles.statCol}>
                                        <Text>265</Text>
                                        <Text>Takipçi</Text>
                                    </View>

                                    <View style={styles.statCol}>
                                        <Text>1</Text>
                                        <Text>Takip Edilen</Text>
                                    </View>
                                </View>{/* Stats row */}

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center', alignItems: 'center',
                                    flex: 1, backgroundColor: '#c3c3c3', width:100 + '%'
                                }}>
                                    <Text>Profili Düzenle</Text>
                                </View>{/* Edit profile row */}

                            </View>{/* Stats & edit profile col */}

                        </View>

                        <View style={{ flexDirection: 'column', width: 100 + '%' }}>
                            <Text style={styles.fontSm}>Mehmet Yılmaz</Text>
                            <Text style={styles.fontBold}>React Native Developer</Text>
                        </View>
                    </View>
                    <View style={styles.profilePicCont}>
                        {

                            this.props.user.photos.map((pic, i) => {
                                if (pic !== null) {
                                    return <Image
                                        style={styles.profilePicThumb}
                                        key={pic.id}
                                        source={{ uri: pic.url }} />
                                }
                            })

                        }
                    </View>

                </View>
            </ScrollView>
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
    },

    profileInfo: {
        width: 100 + '%',
        height: 250,
        display: 'flex',
    },

    fontSm: {
        fontSize: 16
    },

    fontBold: {
        fontWeight: 'bold',
        fontSize: 16
    },
    userPic: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    statCol: { flexDirection: 'column', flex: 1, alignItems: 'center' }
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

export default connect(stateToProps, dispatchToProps)(Profile);