import Taro, { Component, Config } from '@tarojs/taro'
import Official from './pages/official/official'

import 'taro-ui/dist/style/index.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/official/official',
      'pages/news/news',
      'pages/my/my',
      'pages/newsDetail/newsDetail',
      'pages/community/community'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '天全论坛',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#333333',
      selectedColor: '#1296db',
      backgroundColor: '#ffffff',
      list: [{
        pagePath: 'pages/official/official',
        text: '天全动态',
        iconPath: 'icon/home_origin.png',
        selectedIconPath: 'icon/home.png'
      },{
        pagePath: 'pages/news/news',
        text: '天全知事',
        iconPath: 'icon/news_origin.png',
        selectedIconPath: 'icon/news.png'
      }, {
        pagePath: 'pages/community/community',
        text: '西康广场',
        iconPath: 'icon/community_origin.png',
        selectedIconPath: 'icon/community.png'
      }, {
        pagePath: 'pages/my/my',
        text: '个人中心',
        iconPath: 'icon/my_origin.png',
        selectedIconPath: 'icon/my.png'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Official />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
