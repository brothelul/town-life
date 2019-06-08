import Taro, {Component} from '@tarojs/taro'
import {View, Text} from "@tarojs/components"
import { AtAvatar } from 'taro-ui'
import './avatarCard.scss'

export default class AvatarCard extends Component {
  render() {
    return(<View className='card'>
      <View>
        <AtAvatar size='large' circle image={this.props.userInfo.avatar}/>
      </View>
      <View className='cardNickname'>
        <View>
          <Text>{this.props.userInfo.nickname}</Text>
        </View>
        <View className='cardComment'>
          <Text>官方认证：天全县检察院</Text>
        </View>
      </View>
    </View>)
  }
}
