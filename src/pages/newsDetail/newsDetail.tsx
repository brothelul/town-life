import Taro, {Component, Config} from '@tarojs/taro'
import {View, RichText, Text} from '@tarojs/components'
import {AtAvatar, AtTextarea, AtIcon, AtBadge, AtFloatLayout, AtButton} from 'taro-ui'
import CommentCell from '../../components/commentCell/commentCell'
import ADCard from '../../components/adCard/adCard'
import {URLConfig} from '../../config/config'
import {getLocalTime} from '../../utils/dateUtil'

import './newsDetail.scss'

export default class NewsDetail extends Component {
  config: Config = {
    navigationBarTitleText: '天全论坛'
  }

  state = {
    articleId: 0,
    article: {
      title: ''
    },
    addCommentContent: '',
    openAddComment: false,
    addCommentFocus: false,
    comments: [{
      userInfo: {
        username: '李小强',
        avatarUrl: 'https://jdc.jd.com/img/200'
      },
      content: '这个有问题吧？',
      createdTime: '2019-1-5 14:30'
    },
      {
        userInfo: {
          username: '张小明',
          avatarUrl: 'https://jdc.jd.com/img/200'
        },
        content: '这个不太好吧？',
        createdTime: '2小时前'
      }]
  }

  componentDidShow(): void {
    const {articleId, title} = this.$router.params
    this.getArticleContent(articleId)
  }

  getArticleContent(articleId) {
    let that = this
    Taro.request({
      url: URLConfig.ARTICLE_CONTENT + '1'
    }).then(res => that.setState({
      article: res.data.payload
    }))
  }

  handleCommentChange(value) {
    console.log(value)
  }

  handleOpenAddComment() {
    this.setState({
      openAddComment: true,
      addCommentFocus: true
    })
  }

  handleCloseAddComment() {
    this.setState({
      openAddComment: false,
      addCommentFocus: false
    })
  }

  render() {
    const {comments, article} = this.state
    const commentsContent = comments.map(comment => {
      return <CommentCell comment={comment}/>
    })
    return(
      <View className="parent">
        <View className="newsDetail">
          <View className="newsDetailTitle">
            <Text>{article.title}</Text>
          </View>
          <View className="newsDetailAuthor">
            <View>
              <AtAvatar image={article.author.avatar} circle size='small'/>
            </View>
            <View className="newsDetailAuthorCenter">
              <View className="newsDetailUsername"><Text>{article.author.name}</Text></View>
              <View className="newsDetailGov"><Text>{getLocalTime(article.publishTime)}</Text><Text> . {article.author.authName}</Text></View>
            </View>
          </View>
          <View className='newsDetailContent'>
            <RichText nodes={article.content}/>
          </View>

          <View>
            <ADCard/>
          </View>

          <View className='newsDetailComment'>
            {commentsContent}
          </View>
        </View>
        <View className="newsDetailCommentAdd">
          <View className='newsDetailCommentAddContent' onClick={this.handleOpenAddComment.bind(this)}>
            <AtIcon value='edit'/>
            <Text>发表我的观点(ˇˍˇ) 想～</Text>
          </View>
          <View className='newsDetailCommentAddShare'>
            <View>
              <AtBadge value={10}><AtIcon value='message'/></AtBadge>
            </View>
          </View>
          <View className='newsDetailCommentAddShare'>
            <View><AtIcon value='share'/></View>
          </View>
        </View>

        <AtFloatLayout title='发表评论' isOpened={this.state.openAddComment} onClose={this.handleCloseAddComment} className='addComment'>
          <View>
            <AtTextarea value={this.state.addCommentContent}
                        onChange={this.handleCommentChange.bind(this)} focus={this.state.addCommentFocus}
                        count={false}/>
          </View>
          <View className='newsDetailCommentAddShareButton'>
            <AtButton type="secondary" circle>发表评论</AtButton>
          </View>
        </AtFloatLayout>
      </View>)
  }
}
