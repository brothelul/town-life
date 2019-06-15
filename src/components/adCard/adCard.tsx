import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'

import './adCard.scss'

export default class ADCard extends Component {
  props = {
    adInfo: {
      id: 0,
      title: '广告位热忱招商中...',
      imageUrl: 'https://misc.aotu.io/jimczj/2018-08-27taro-ui.jpg',
      providerName: '天全论坛'
    },
    onClick: this.handleADClick
  }

  handleADClick() {
    Taro.navigateTo({
      url: '/pages/newsDetail/newsDetail'
    })
  }

  render() {
    return (<View className="adCard" onClick={this.props.onClick}>
      <View className="adCardTitle">
        <Text>{this.props.adInfo.title}</Text>
      </View>
      <View>
        <Image src={this.props.adInfo.imageUrl} className="adCardImage"/>
      </View>
      <View className="adCardComment">
        <Text className="adCardCommentTag">广告</Text>
        <Text className="adCardProvider">{this.props.adInfo.providerName}</Text>
      </View>
    </View>)
  }
}
