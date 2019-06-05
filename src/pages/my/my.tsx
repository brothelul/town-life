import Taro, { Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class My extends Taro.Component {
  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  render() {
    return(
      <View>
        <Text>个人中心</Text>
      </View>
    )
  }
}
