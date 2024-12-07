---
home: true
icon: home
title: 项目主页
heroImage: /assets/image/bot_avatar.png
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: QQ机器人「阿洛娜」
tagline: <br><br><br>一个攻略查询/游戏养成的QQ机器人<br><br><br>
heroFullScreen: true
actions:
  - text: 最终用户许可协议
    icon: file-text
    link: ./documentation/eula.md
    type: primary
  - text: 开始使用
    icon: play
    link: ./documentation/UsageGuide.md

highlights:
  
  - header: 小提示
    bgImage: https://theme-hope-assets.vuejs.press/bg/7-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/7-dark.svg
    highlights:
        - title: 'Tips: 请注意全角与半角的区别，阿洛娜全部使用半角 "#"，而不是全角 "＃"'
        - title: 'Tips: 部分指令需要将各参数用空格分开，如：`#转账@用户 100`'
        - title: 'Tips: 一切指令"[]"表示为必填参数，"<>""表示为可选参数，请将括号去掉后替换相应内容发送'

  - header: 指令功能
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 查询 BlueArchive 游戏攻略
      - title: BlueArchive 抽奖模拟
      - title: 每日时事新闻与B站新番推荐
      - title: 每日运势、人品与塔罗牌查询
      - title: 特色机制与系统功能

  - header: 经济系统
    description: 「阿洛娜」搭载了一套完整的经济系统，可以让您利用金币进行购买、游戏等操作
    // image: /assets/image/markdown.svg
    bgImage: /assets/image/HomePage/EconomyBg.webp
    bgImageDark: /assets/image/HomePage/EconomyBg.webp
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: '#个人信息'
        icon: id-card
        details: 查看您的个人信息，包括金币、称号、银行等
        
        
      - title: '#签到'
        icon: calendar-check
        details: 每日签到获取不等量金币
        
      - title: '#转账@[用户] [金币]'
        icon: exchange-alt
        details: 将您的金币转账给其他用户
        
      - title: '#存款 [金币]'
        icon: piggy-bank
        details: 将您的金币存入银行
        
      - title: '#取款 [金币]'
        icon: money-bill-wave
        details: 从银行取出您的金币
        
      - title: '利息机制'
        icon: hand-holding-usd
        details: 每日银行存款会获得利息
        
      - title: '称号'
        icon: crown
        details: 根据您的金币数量获得不同称号
        
      - title: '即将到来'
        icon: ellipsis
        details: 更多功能正在开发中

  - header: 好感度系统
    description: 同时，「阿洛娜」搭载了契合度高的好感度系统，在投入金币的同时，也可以提升与「阿洛娜」的好感度
    image: /assets/image/ui.svg
    bgImage: /assets/image/HomePage/FavorBg.webp
    bgImageDark: /assets/image/HomePage/FavorBg.webp
    features:
      - title: '#制造 [金币]'
        icon: hammer
        details: 用金币制造物品，提升好感度
        
      - title: '#查看制造'
        icon: search
        details: 查看您制造中的物品状况<br>直接获取制造完成物品
        
      - title: '#好感度'
        icon: heart
        details: 查看「阿洛娜」对您的好感度
        
      - title: '#好感度排行'
        icon: list
        details: 查看本群所有有记录的用户的好感度<br>由大到小排列
        
      - title: '即将到来'
        icon: ellipsis
        details: 更多功能正在开发中

  - header: 表情包系统
    description: 「阿洛娜」还搭载了表情包系统，可以让您自由生成自己喜爱的表情
    image: /assets/image/layout.svg
    bgImage: /assets/image/HomePage/EmojiBg.webp
    bgImageDark: /assets/image/HomePage/EmojiBg.webp
    features:
      - title: 'pet'
        icon: images
        details: 获取表情包列表
      
      - title: '[表情包关键词]'
        icon: image
        details: 获取指定关键词的表情包
        
      - title: '[表情包关键词] @[用户]'
        icon: user
        details: 获取指定关键词的表情包，头像为指定用户
        
      - title: '[表情包关键词] [文字]'
        icon: font
        details: 获取指定关键词的表情包，文字为指定文字
        

  - header: 回声洞系统
    description: 「阿洛娜」回声洞系统，可以让您花费金币发送消息到回声洞，让其他用户看到
    image: /assets/image/features.svg
    bgImage: /assets/image/HomePage/EchoBg.webp
    bgImageDark: /assets/image/HomePage/EchoBg.webp
    features:
      - title: '#添加回声洞 [文本]'
        icon: plus
        details: 添加一个回声洞，其他用户可以通过指令看到
        
      - title: '#回声洞 <回声洞ID>'
        icon: comment
        details: 查看 随机/指定 回声洞的内容 (ID为数字,不填则随机)
        
      - title: '#回声洞列表'
        icon: list
        details: 查看你的所有回声洞ID
        
      - title: '#删除回声洞 [ID]'
        icon: trash-alt
        details: 删除你的指定回声洞
        
      - title: '#举报回声洞 [ID]'
        icon: exclamation-triangle
        details: 举报指定回声洞
        
      - title: '即将到来'
        icon: ellipsis
        details: 更多功能正在开发中

  - header: 公测-宠物系统
    description: 「阿洛娜」新增的宠物系统，可以让您养成自己的宠物
    image: /assets/image/advanced.svg
    bgImage: /assets/image/HomePage/PetBg.webp
    bgImageDark: /assets/image/HomePage/PetBg.webp
    features:
      - title: '#宠物列表'
        icon: list
        details: 查看全部宠物列表
        
      - title: '#领养宠物 [宠物名称] <宠物名称>'
        icon: plus
        details: 领养一个宠物，可以自定义宠物名称(第一个参数)
        
      - title: '#查看宠物'
        icon: search
        details: 查看您的宠物信息
        
      - title: '#遗弃宠物'
        icon: trash-alt
        details: 遗弃您的宠物
        
      - title: '#宠物睡觉'
        icon: bed
        details: 让您的宠物睡觉，期间数值不会改变
        
      - title: '#唤醒宠物'
        icon: sun
        details: 唤醒您的宠物，数值会恢复计算
        
      - title: '#创建任务'
        icon: tasks
        details: 创建一个创意工坊宠物任务，每次消耗一定量金币，审核通过才会显示
        
      - title: '#创建物品'
        icon: hammer
        details: 创建一个创意工坊宠物物品，每次消耗一定量金币，审核通过才会显示
        
      - title: '#查看任务列表' 
        icon: list
        details: 查看您的宠物任务列表
        
      - title: '#开始任务 [任务ID]'
        icon: play
        details: 开始您的宠物任务，获取科技点、心情、经验
        
      - title: '#查看任务'
        icon: search
        details: 查看您的宠物任务状态，若时间到则直接结束
        
      - title: '#结束任务'
        icon: stop
        details: 结束您的宠物任务，获取科技点、心情、经验
        
      - title: '#查看物品列表'
        icon: list
        details: 查看您的宠物物品列表
        
      - title: '#购买物品 [物品ID]'
        icon: shopping-cart
        details: 购买您的宠物物品，消耗金币
        
      - title: '#兑换科技点 [花费金币数量]'
        icon: exchange-alt
        details: 兑换您的金币为科技点，按照固定汇率兑换
        
      - title: '即将到来'
        icon: ellipsis
        details: 更多功能正在开发中

  - header: 新功能
    description: 「阿洛娜」还在不断更新中，更多功能正在开发中
    image: /assets/image/advanced.svg
    bgImage: /assets/image/HomePage/ComingSoonBg.webp
    bgImageDark: /assets/image/HomePage/ComingSoonBg.webp
    highlights:
      - title: '更多功能'
        icon: ellipsis
        details: 更多功能正在开发中

copyright: false
// footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | by Travellerr
---
