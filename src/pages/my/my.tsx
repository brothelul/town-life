import Taro, { Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {AtList, AtListItem, AtCard} from 'taro-ui'
import AvatarCard from '../../components/avatarCard/avatarCard'
import './my.scss'

export default class My extends Taro.Component {
  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  state = {
    userInfo: {
      avatar: 'https://p3.pstatp.com/large/6ed60003350cee78a356',
      nickname: '赵小平'
    }
  }

  handleItemClick(){
    Taro.navigateTo({
      url: '/pages/newsDetail/newsDetail'
    })
  }

  render() {
    return(
      <View className="my">
        <View className="myUserInfo">
          <AvatarCard userInfo={this.state.userInfo}/>
        </View>
        <View className="myMenu-1">
          <AtList className="myMenu-1t">
            <AtListItem
              title='我的投稿'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='广告投放'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
          </AtList>
        </View>

        <View className="myMenu-1">
          <AtList className="myMenu-1t">
            <AtListItem
              title='用户反馈'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='消息通知'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
          </AtList>
        </View>
      </View>
    )
  }
}
