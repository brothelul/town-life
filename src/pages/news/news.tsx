import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, ScrollView} from '@tarojs/components'
import {AtTabs, AtTabsPane, AtList, AtListItem, AtLoadMore} from 'taro-ui'

export default class News extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      status: 'more'
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  onScrollToUpper(e){
    console.log(e.detail)
  }

  onScroll(e){
    console.log(e.detail)
  }

  render () {
    const scrollStyle = {
      height: '100%'
    }
    const scrollTop = 0
    const Threshold = 20
    return (
      <AtTabs
        current={this.state.current}
        scroll
        tabList={[
          { title: '热门推荐' },
          { title: '啊嘚影像' },
          { title: '二郎山文学' },
          { title: '绿荫球场' },
          { title: '龙湾茶语' },
          { title: '历史名人' }
        ]}
        onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0}>
            <AtList>
              <AtListItem
                title='那些“不明觉厉”的设计！网友：错怪设计师了'
                thumb='http://p9.pstatp.com/large/pgc-image/RR7p97g8vOwla3'
              />
              <Text>OK</Text>
              <Text>那些“不明觉厉”的设计！网友：错怪设计师了</Text>
              <Text>“君子报仇，十年不晚”，这波官方打脸真是爽翻了hhh</Text>
              <Text>看了这么久，登陆上来一起参与互动吧您需要 登录 才可以下载或查看，没有帐号？立即注册x韩培范四川省天全人，为北京卫戍区现任副怀念韩志宏之父。</Text>
              <Text>看了这么久，登陆上来一起参与互动吧您需要 登录 才可以下载或查看，没有帐号？立即注册x韩培范四川省天全人，为北京卫戍区现任副怀念韩志宏之父。</Text>
              <Text>看了这么久，登陆上来一起参与互动吧您需要 登录 才可以下载或查看，没有帐号？立即注册x韩培范四川省天全人，为北京卫戍区现任副怀念韩志宏之父。</Text>
            </AtList>
            <AtLoadMore status={this.state.status}/>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={3}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={4}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={5}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
        </AtTabsPane>
      </AtTabs>
    )
  }
}
