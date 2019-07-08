import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Swiper, SwiperItem} from '@tarojs/components'
import SwiperNewsItem from '../../components/swiperNewsItem/swiperNewsItem'
import NewsItem from '../../components/newsItem/newsItem'
import {URLConfig} from "../../config/config"
import Loading from "../../components/loading/loading"
import './official.scss'

export default class Official extends Component {

  config: Config = {
    onReachBottomDistance: 50,
    navigationBarTitleText: '天全新闻'
  }

  state = {
    loading: false,
    noMore: false,
    loadingText: '加载中(⊙o⊙)…',
    noMoreText: '没有更多了o(╥﹏╥)o',
    moreText: '上拉加载更多',
    articles: [],
    number: 1
  }

  componentDidShow(): void {
    this.getArticleList(1, this.state.number)
  }

  getArticleList(categoryId, number) {
    let that = this
    Taro.request({
      url: URLConfig.OFFICIAL_ARTICLE_LIST,
      data: {
        number: number,
        size: 8
      }
    }).then(res => that.setState({
      articles: that.state.articles.concat(res.data.payload.content),
      number: ++this.state.number
    }))
  }

  navigateToNewsDetail(articleId, title) {
    console.log(articleId)
    Taro.navigateTo({
      url: '/pages/newsDetail/newsDetail?articleId='+articleId +'&title='+title
    })
  }

  render(): any {
    let {articles} = this.state
    const content = articles.map(article => {
      return <NewsItem article={article} key={article.id}
                       onClick={this.navigateToNewsDetail.bind(this, article.id, article.title)}/>
    })

    return(<View className="official">
      <Swiper>
        <SwiperItem>
          <SwiperNewsItem/>
        </SwiperItem>
        <SwiperItem>
          <SwiperNewsItem/>
        </SwiperItem>
      </Swiper>

      <View className="officialContent">
        {content}
        <Loading noMore={this.state.noMore} noMoreText={this.state.noMoreText}
                 loading={this.state.loading} loadingText={this.state.loadingText}
                 moreText={this.state.moreText}/>
      </View>
    </View>)
  }
}
