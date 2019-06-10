import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from "@tarojs/components"
import {AtButton, AtIcon} from "taro-ui"

import './community.scss'

export default class Community extends Component {
  config:Config = {
    navigationBarTitleText: '西康广场'
  }

  render(): any {
    return(<View className="community">
      <Text>西康广场</Text>
      <AtButton circle className='addDynamic' type={"primary"}>
        <AtIcon value='edit' size="20"/>
      </AtButton>
    </View>)
  }
}
