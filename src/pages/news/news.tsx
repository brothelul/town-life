import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, RichText} from '@tarojs/components'
import {AtTabs, AtTabsPane, AtList, AtListItem, AtLoadMore} from 'taro-ui'
import NewsItem from '../../components/newsItem/newsItem'
import Loading from '../../components/loading/loading'
import {URLConfig} from '../../config/config'
import './news.scss'

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
    categories: [],
    articles: [],
    currentCategory: {},
    number: 1
  }

  componentWillMount(): void {
    let that = this
    Taro.request({
      url: URLConfig.CATEGORY_LIST,
      header: {
        'content-type': 'application/json'
      }
    }).then(res => that.setState({
      categories: res.data.payload,
      currentCategory: res.data.payload ? res.data.payload[0] : {}
    }))
  }

  componentDidShow(): void {
    this.getArticleList(1, this.state.number)
  }

  getArticleList(categoryId, number) {
    let that = this
    Taro.request({
      url: URLConfig.ARTICLE_LIST + categoryId,
      data: {
        number: number,
        size: 8
      }
    }).then(res => that.setState({
      articles: that.state.articles.concat(res.data.payload.content),
      number: ++this.state.number
    }))
  }

  onReachBottom(){
    if (this.state.noMore) {
      return
    }
    this.getArticleList(1, this.getArticleList(1, this.state.number))
    // 请求数据
    this.setState({
      loading: false
    })
    if (this.state.number > 10) {
      this.setState({
        noMore: true
      })
    }
  }

  handleClick (value) {
    console.log(value)
    this.setState({
      current: value
    })

    let category = this.state.categories[value]
    console.log(category)
    this.setState({
      articles: []
    })
    this.getArticleList(1, 1)
  }

  navigateToNewsDetail(articleId, title) {
    console.log(articleId)
    Taro.navigateTo({
      url: '/pages/newsDetail/newsDetail?articleId='+articleId +'&title='+title
    })
  }

  render () {
    let {articles, categories, current} = this.state
    const content = articles.map(article => {
      return <NewsItem article={article} key={article.id}
                       onClick={this.navigateToNewsDetail.bind(this, article.id, article.title)}/>
    })
    return (
      <AtTabs
        className='news'
        current={current}
        scroll
        tabList= {categories}
        onClick={this.handleClick.bind(this)}>
        {
          categories.map((category, index) => <AtTabsPane current={current} index={index}>
            {content}
            <Loading noMore={this.state.noMore} noMoreText={this.state.noMoreText}
                     loading={this.state.loading} loadingText={this.state.loadingText}
                     moreText={this.state.moreText}/>
          </AtTabsPane>)
        }
      </AtTabs>
    )
  }
}
