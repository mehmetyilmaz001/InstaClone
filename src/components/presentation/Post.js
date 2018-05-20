import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native'
import config from '../../config'

export default class Post extends Component{
    constructor(){
        super();
        this.state = {
            screenWdith: Dimensions.get("window").width,
            liked: false
        };
    }

    likeToggled(){
        this.setState({
            liked: !this.state.liked
        });
    }

    componentDidMount(){
    }

    render(){

        const imageHeight = Math.floor(this.state.screenWdith * 1.1);
        const imageSelection= (this.props.item % 2 === 0 ? 'https://lh3.googleusercontent.com/3C3zdK_DumzsNY_1oXLN' + 
        'VXUC_iQH6HYaJGAhlpkK7hujXgzIAbnJf3CNEosIMM6-xfx-TXSwbrxvo6KXP6qLyhzi_JE' : 'https://lh3.googleusercontent.com/AbuA2jMP9yuct9jWijjETrA2bzgKczG3fU76S71KIuTVkJOCGCtA0JjSyLBiluiRWmpEMk82kSa4esI34mY72iTz9A')

        const imageUri = imageSelection + '=s'
        + imageHeight + '-c';

        const heartIconColor= (this.state.liked ? 'rgb(252, 61, 57)': null)

        return(
           <View style={{flex:1, width:100 + '%'}}>
                <View style={styles.userBar}>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Image source={{uri : 'https://lh3.googleusercontent.com/gzfC0MBngDS__B5VpHd60ykjvWEQQ_6Iz9Y4Pcs647Sgk0ubPQKn4x4HpS0BL843m2x5az9HL08JAIM5f4grxZ6Ei7s'}} 
                            style={styles.userPic}
                        />

                        <Text style={{marginLeft:8}}>mehmetyilmaz001</Text>
                    </View>
                    
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:30}}>...</Text>
                    </View>
                </View>
                
                <TouchableOpacity 
                    activeOpacity={0.9}
                    onPress={() => {
                    this.likeToggled()
                    }}
                >
                    <Image 
                        style={{width:this.state.screenWdith, height:450}}
                        source={ {uri : imageUri}}
                    />
                </TouchableOpacity>

                <View style={styles.iconBar}>
                    <Image style={[styles.icon, {tintColor: heartIconColor}]} source={config.images.iconHeart} />
                    <Image style={[styles.icon]} source={config.images.iconBuble} />
                    <Image style={[styles.icon]} source={config.images.iconArrow} />
                </View>

                <View style={styles.iconBar}>
                    <Image style={[styles.icon, {height:20, width:20}]} 
                    source={config.images.iconHeart} />
                    <Text> 128 beğeni</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav : {
        width:100 + '%', 
        height: 56, 
        marginTop : 20,
        backgroundColor:"rgb(246,245,246)",
        borderBottomWidth : StyleSheet.hairlineWidth,
        borderBottomColor : "rgb(233,233,233)",
        justifyContent : 'center',
        alignItems : 'center'
    },
    userBar : {
        width : 100 + '%',
        height : config.styleConstants.rowHeight,
        backgroundColor : 'white',
        flexDirection : 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },

    userPic : {
        width : 40,
        height : 40,
        borderRadius: 20,
    },

    iconBar : {    
        height : config.styleConstants.rowHeight,
        width : 100 + '%',
        borderTopWidth : StyleSheet.hairlineWidth,
        borderBottomWidth : StyleSheet.hairlineWidth,
        borderBottomColor : "rgb(233,233,233)",
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon:{
        marginLeft: 5,
        paddingHorizontal: 5,
        width: 30,
        height: 30
    },

    commentBar: {
        width : 100 + '%',
        height : config.styleConstants.rowHeight,
        borderTopWidth : StyleSheet.hairlineWidth,
        borderBottomWidth : StyleSheet.hairlineWidth,
        borderBottomColor : "rgb(233,233,233)",

    }
});