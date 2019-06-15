import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'

export default class SwiperNewsItem extends Component {

  props = {
    newsItem: {
      title: "离家五周年",
      imageUrl: 'http://www.tqjw.gov.cn/nzcms_nzweb/nzcms_up/attached/image/nzcms201953111465546004.jpg',
      id: 1
    },
    onClick: this.handleClick
  }

  handleClick() {
    console.log("click" + this.props.newsItem.id)
  }

  render(): any {
    return (
      <View className="swiperNewsItem" onClick={this.props.onClick}>
        <View className="swiperNewsItemImage">
          <Image src={this.props.newsItem.imageUrl} className="swiperNewsItemImageContent"/>
        </View>
        <View>
          <Text>{this.props.newsItem.title}</Text>
        </View>
      </View>
      )
  }
}
