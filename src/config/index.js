import {Dimensions} from 'react-native'

export default{
    images: {
        iconHeart: require("../../assets/ic-heart.png"),
        iconBuble: require("../../assets/ic-buble.png"),
        iconArrow: require("../../assets/ic-arrow.png"),
    },

    styleConstants: {
        rowHeight : 50,
        oneThirdWidth: (Dimensions.get("window").width) / 3
    },

    //baseApiUrl: 'http://insta-clone-6kyble.turbo360-vertex.com/api/'
    baseApiUrl: 'http://localhost:3000/api/'
};