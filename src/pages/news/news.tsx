import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, RichText} from '@tarojs/components'
import {AtTabs, AtTabsPane, AtList, AtListItem, AtLoadMore} from 'taro-ui'
import NewsItem from '../../components/newsItem/newsItem'

export default class News extends Taro.Component {

  config: Config = {
    onReachBottomDistance: 50,
    navigationBarTitleText: '天全知事'
  }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      status: 'more',
      articles: [1]
    }
  }

  onReachBottom(){
    this.setState({
      status: "loading"
    })
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  handleLoadMore() {
    this.setState({
      status: "loading"
    })
    let articles = this.state.articles
    if (articles.length < 10) {
      this.setState({
        articles: articles.push(1),
        status: "more"
      })
      return
    }
    this.setState({
      status: "noMore"
    })
  }

  render () {
    let content = this.state.articles.map(article => {
      return <View>
        <Text>{article}</Text>
      </View>
    })

    return (
      <AtTabs
        current={this.state.current}
        scroll
        tabList={[
          { title: '热门推荐' },
          { title: '啊嘚影像' },
          { title: '二郎山文学' },
          { title: '绿荫球场' }
        ]}
        onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0}>
          {
            content
          }
          <RichText nodes={}/>
            <AtLoadMore status={this.state.status} loadingText={'加载中(⊙o⊙)…'} onClick={this.handleLoadMore.bind(this)}/>
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
      </AtTabs>
    )
  }
}
