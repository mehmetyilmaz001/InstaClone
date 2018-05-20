import React, {Component} from 'react'
import {FlatList} from 'react-native'
import { Post } from '../presentation';

class PostFeed extends Component{
    _renderPost({item}){
        return <Post item={item} />
    }

    _keyExtractor = (item, index) => item.toString()


    render(){
        return(
            <FlatList 
                data={[1,2,3,4,5,6,7,8]} 
                renderItem={ (item) => this._renderPost(item)}
                keyExtractor={this._keyExtractor}
            />
        )
    }
}

export default PostFeed