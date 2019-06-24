import Taro, {Component} from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components"
import './newsItem.scss'

import {getLocalTime} from '../../utils/dateUtil'

export default class NewsItem extends Component {
  props = {
    article: {
      title: '暂无内容',
      authorName: '天全论坛',
      commentCount: 0,
      publishTime: 1561387403,
      type: 1,
      imageUrl0: '',
      imageUrl1: '',
      imageUrl2: ''
    },
    onClick: () => {}
  }

  render() {
    let {article} = this.props

    let type1 = <View className="newsItem newsItemFlexRow" onClick={this.props.onClick}>
      <View className="newsItemLeft">
        <Image className="newsItemImage" src={article.imageUrl0}/>
      </View>
      <View>
        <View className="newsItemTitle">
          <Text>{article.title}</Text>
        </View>
        <View className="newsItemInfoType1">
          <Text className="newsItemInfoItem">{article.authorName}</Text>
          <Text className="newsItemInfoItem">{article.commentCount}评论</Text>
          <Text className="newsItemInfoItem">{getLocalTime(article.publishTime)}</Text>
        </View>
      </View>
    </View>

    let type2 = <View className="newsItem" onClick={this.props.onClick}>
      <View className="newsItemTitle">
        <Text>{article.title}</Text>
      </View>
      <View className='at-row newsItemFlexRow'>
        <View className='at-col newsItemImageType2Padding'>
          <Image className="newsItemImage" src={article.imageUrl0}/>
        </View>
        <View className='at-col newsItemImageType2Padding'>
          <Image className="newsItemImage" src={article.imageUrl1}/>
        </View>
        <View className='at-col'>
          <Image className="newsItemImage" src={article.imageUrl2}/>
        </View>
      </View>
      <View className="newsItemInfoType2">
        <Text className="newsItemInfoItem">{article.authorName}</Text>
        <Text className="newsItemInfoItem">{article.commentCount}评论</Text>
        <Text className="newsItemInfoItem">{getLocalTime(article.publishTime)}</Text>
      </View>
    </View>

    let type3 = <View className="newsItem" onClick={this.props.onClick}>
      <View className="newsItemTitle">
        <Text>{article.title}</Text>
      </View>
      <View className="newsItemInfoType2">
        <Text className="newsItemInfoItem">{article.authorName}</Text>
        <Text className="newsItemInfoItem">{article.commentCount}评论</Text>
        <Text className="newsItemInfoItem">{article.publishTime}</Text>
      </View>
    </View>

    let type = article.type
    return type == 1 ? type1 : (type == 2 ? type2 : type3)
  }

}
