import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {AtTabBar} from 'taro-ui'
import My from '../my/my'
import News from '../news/news'

import './index.scss'

export default class Index extends Taro.Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '天全知事',
    'enablePullDownRefresh': true,
    onReachBottomDistance:50
  }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  onPullDownRefresh(){
    console.log('下拉')
    this.setState({
      status: 'loading'
    })
  }//下拉事件

  onReachBottom(){
    console.log('上拉')
  }//上拉事件监听


  render () {
    return (
      <View className='index'>
        {
          this.state.current == 0 ?  <News/> : <My/>
        }
        <AtTabBar
          fixed
          tabList={[
            { title: '天全知事', iconType: 'home' },
            { title: '个人中心', iconType: 'user' },
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
