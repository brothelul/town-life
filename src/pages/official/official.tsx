import Taro, {Component} from '@tarojs/taro'
import {View, Text, Swiper, SwiperItem} from '@tarojs/components'
import SwiperNewsItem from '../../components/swiperNewsItem/swiperNewsItem'

export default class Official extends Component {
  render(): any {
    return(<View className="official">
      <Swiper>
        <SwiperItem>
          <SwiperNewsItem/>
        </SwiperItem>
        <SwiperItem>
          <SwiperNewsItem/>
        </SwiperItem>
      </Swiper>
    </View>)
  }
}
