import Taro, {Component} from '@tarojs/taro'
import {View, RichText} from '@tarojs/components'

export default class NewsDetail extends Component {
  render() {
    let node = '<div><div><img src="https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1825563898,3554502737&fm=85&s=79843572110FE14D0E6498CF0300E0B2"></div>' +
      '<div><b style="text-align: center; margin-top: 8px;">厉害了</b></div></div>'
    return(<View>
      <RichText nodes={node}/>
    </View>)
  }
}
