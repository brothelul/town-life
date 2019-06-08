import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, RichText} from '@tarojs/components'
import {AtTabs, AtTabsPane, AtList, AtListItem, AtLoadMore} from 'taro-ui'
import NewsItem from '../../components/newsItem/newsItem'
import Loading from '../../components/loading/loading'

export default class News extends Taro.Component {

  config: Config = {
    onReachBottomDistance: 50,
    navigationBarTitleText: '天全知事'
  }

  state = {
    current: 0,
    loading: false,
    noMore: false,
    loadingText: '加载中(⊙o⊙)…',
    noMoreText: '没有更多了o(╥﹏╥)o',
    moreText: '上拉加载更多',
    article: [{
      id: 1,
      imageUrl: 'http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg',
      author: '小程',
      title: '618天全举行赛龙舟活动',
      commentCount: 5,
      createdTime: '5分钟',
      type: 1
    },{
      id: 2,
      imageUrl: 'http://p9.pstatp.com/large/pgc-image/40dba25719d34d1684c7c99222c366fa',
      imageUrl1: 'http://p3.pstatp.com/large/pgc-image/8cecb13889364d379f45d5fe2fec2a7f',
      imageUrl2: 'http://p9.pstatp.com/large/pgc-image/0d5ac0a720fb413ba08dc36227002953',
      author: '长安观察',
      title: '搬起石头砸自己的脚！中方表态后，美国找稀土找到非洲去了',
      commentCount: 1645,
      createdTime: '2小时',
      type: 2
    },
      {
        id: 3,
        author: '中国青年网',
        title: '马上，4G升5G！不过，你到底需要换手机还是换SIM卡？赶紧看看',
        commentCount: 124,
        createdTime: '10分钟',
        type: 3
      },
      {
        id: 4,
        imageUrl: 'https://p1.pstatp.com/list/190x124/pgc-image/2358665374ee48eeba6a9b626f625daa',
        author: '鸢飞九天2018',
        title: '119年前曾组成八国联军，侵略中国的八个列强，如今怎么样了？',
        commentCount: 23,
        createdTime: '1天',
        type: 1
      },
      {
        id: 5,
        author: '中国青年网',
        title: '马上，4G升5G！不过，你到底需要换手机还是换SIM卡？赶紧看看',
        commentCount: 124,
        createdTime: '10分钟',
        type: 3
      }
    ]
  }

  onReachBottom(){
    if (this.state.noMore) {
      return
    }
    let articles = this.state.article
    this.setState({
      loading: true,
      article: articles.concat(articles)
    })
    // 请求数据
    this.setState({
      loading: false
    })
    if (this.state.article.length > 20) {
      this.setState({
        noMore: true
      })
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  navigateToNewsDetail(articleId, title) {
    console.log(articleId)
    Taro.navigateTo({
      url: '/pages/newsDetail/newsDetail?articleId='+articleId +'&title='+title
    })
  }

  render () {
    let articles = this.state.article
    const content = articles.map(article => {
      return <NewsItem imgUrl={article.imageUrl} type={article.type}
                       author={article.author} title={article.title}
                       commentCount={article.commentCount} createdTime={article.createdTime}
                       imgUrl1={article.imageUrl1} imgUrl2={article.imageUrl2}
                       onClick={this.navigateToNewsDetail.bind(this, article.id, article.title)}/>
    })
    return (
      <AtTabs
        className='news'
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
          {content}
          <Loading noMore={this.state.noMore} noMoreText={this.state.noMoreText}
                   loading={this.state.loading} loadingText={this.state.loadingText}
                   moreText={this.state.moreText}/>
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
