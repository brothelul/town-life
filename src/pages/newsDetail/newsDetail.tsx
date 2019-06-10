import Taro, {Component, Config} from '@tarojs/taro'
import {View, RichText, Text} from '@tarojs/components'
import {AtAvatar, AtTextarea, AtIcon, AtBadge, AtFloatLayout, AtButton} from 'taro-ui'
import CommentCell from '../../components/commentCell/commentCell'

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
    comments: []
  }

  componentDidShow(): void {
    console.log(this.$router.params)
    const params = this.$router.params
    Taro.setNavigationBarTitle({
      title: params.title
    })
    this.setState({
      articleId: params.articleId,
      article: {
        title: params.title,
        userInfo: {
          avatarUrl: 'https://jdc.jd.com/img/200',
          nickname: '山东商报',
          gov: '天全中学官方账号'
        },
        createdTime: '2小时前',
        content: '<div style="margin: 0 auto"><div><img src="https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1825563898,3554502737&fm=85&s=79843572110FE14D0E6498CF0300E0B2"></div><div><b style="text-align: center; margin-top: 8px;">厉害了</b></div></div>'
      },
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
    })
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
    const commentsContent = this.state.comments.map(comment => {
      return <CommentCell comment={comment}/>
    })
    return(
      <View>
        <View className="newsDetail">
          <View className="newsDetailTitle">
            <Text>{this.state.article.title}</Text>
          </View>
          <View className="newsDetailAuthor">
            <View>
              <AtAvatar image={this.state.article.userInfo.avatarUrl} circle size='small'/>
            </View>
            <View className="newsDetailAuthorCenter">
              <View className="newsDetailUsername"><Text>{this.state.article.userInfo.nickname}</Text></View>
              <View className="newsDetailGov"><Text>{this.state.article.createdTime}</Text><Text> . {this.state.article.userInfo.gov}</Text></View>
            </View>
          </View>
          <View className='newsDetailContent'>
            <RichText nodes={this.state.article.content}/>
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
