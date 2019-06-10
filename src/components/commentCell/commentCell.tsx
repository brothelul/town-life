import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {AtAvatar} from "taro-ui"

import './commentCell.scss'

export default class CommentCell extends Component {
  render(): any {
    const comment = this.props.comment
    return(
      <View className='comment'>
        <View className='commentAvatar'>
          <AtAvatar image={comment.userInfo.avatarUrl} size='small' circle/>
        </View>
        <View>
          <View className='commentUserName'><Text>{comment.userInfo.username}</Text></View>
          <View className='commentContent'><Text>{comment.content}</Text></View>
          <View className='commentCreatedTime'><Text>{comment.createdTime}</Text></View>
        </View>
      </View>
    )
  }
}
