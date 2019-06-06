import Taro, { Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {AtList, AtListItem, AtCard} from 'taro-ui'

export default class My extends Taro.Component {
  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  handleItemClick(){
    Taro.navigateTo({
      url: '/pages/newsDetail/newsDetail'
    })
  }

  render() {
    return(
      <View>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
          我就是我，不一样的炮火
        </AtCard>
        <AtList>
          <AtListItem
            title='我的文章'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          />
          <AtListItem
            title='我要投稿'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            onClick={this.handleItemClick.bind(this)}
          />

          <AtListItem
            title='设置'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
        </AtList>
      </View>
    )
  }
}
