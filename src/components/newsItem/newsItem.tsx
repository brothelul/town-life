import Taro, {Component} from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components"
import './newsItem.scss'

export default class NewsItem extends Component {
  render() {
    let type1 = <View className="newsItem newsItemFlexRow" onClick={this.props.onClick}>
      <View className="newsItemLeft">
        <Image className="newsItemImage" src={this.props.imgUrl}/>
      </View>
      <View>
        <View className="newsItemTitle">
          <Text>{this.props.title}</Text>
        </View>
        <View className="newsItemInfoType1">
          <Text className="newsItemInfoItem">{this.props.author}</Text>
          <Text className="newsItemInfoItem">{this.props.commentCount}评论</Text>
          <Text className="newsItemInfoItem">{this.props.createdTime}前</Text>
        </View>
      </View>
    </View>

    let type2 = <View className="newsItem" onClick={this.props.onClick}>
      <View className="newsItemTitle">
        <Text>{this.props.title}</Text>
      </View>
      <View className='at-row newsItemFlexRow'>
        <View className='at-col newsItemImageType2Padding'>
          <Image className="newsItemImage" src={this.props.imgUrl}/>
        </View>
        <View className='at-col newsItemImageType2Padding'>
          <Image className="newsItemImage" src={this.props.imgUrl1}/>
        </View>
        <View className='at-col'>
          <Image className="newsItemImage" src={this.props.imgUrl2}/>
        </View>
      </View>
      <View className="newsItemInfoType2">
        <Text className="newsItemInfoItem">{this.props.author}</Text>
        <Text className="newsItemInfoItem">{this.props.commentCount}评论</Text>
        <Text className="newsItemInfoItem">{this.props.createdTime}前</Text>
      </View>
    </View>

    let type3 = <View className="newsItem" onClick={this.props.onClick}>
      <View className="newsItemTitle">
        <Text>{this.props.title}</Text>
      </View>
      <View className="newsItemInfoType2">
        <Text className="newsItemInfoItem">{this.props.author}</Text>
        <Text className="newsItemInfoItem">{this.props.commentCount}评论</Text>
        <Text className="newsItemInfoItem">{this.props.createdTime}前</Text>
      </View>
    </View>

    let type = this.props.type
    return type == 1 ? type1 : (type == 2 ? type2 : type3)
  }

}
