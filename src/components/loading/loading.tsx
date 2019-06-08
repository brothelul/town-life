import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from "@tarojs/components";
import { AtActivityIndicator } from 'taro-ui'
import './loading.scss'

export default class Loading extends Component {

  render() {
    return (
      <View className='loadCell'>
        {
          this.props.noMore ? <View className="normalText">
              <Text>{this.props.noMoreText}</Text>
            </View> :
            (this.props.loading ? <AtActivityIndicator content={this.props.loadingText} mode='center'/> :
                <View className="normalText">
                  <Text>{this.props.moreText}</Text>
                </View>
            )
        }
      </View>
    )
  }
}
