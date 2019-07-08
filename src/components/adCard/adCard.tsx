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
    onClick: () =>{}
  }

  render() {
    let {adInfo, onClick} = this.props
    return (<View className="adCard" onClick={onClick}>
      <View className="adCardTitle">
        <Text>{adInfo.title}</Text>
      </View>
      <View>
        <Image src={adInfo.imageUrl} className="adCardImage"/>
      </View>
      <View className="adCardComment">
        <Text className="adCardCommentTag">广告</Text>
        <Text className="adCardProvider">{adInfo.providerName}</Text>
      </View>
    </View>)
  }
}
