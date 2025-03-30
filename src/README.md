---
home: true
icon: home
title: 项目主页
heroImage: /assets/image/bot_avatar.png
bgImage: /assets/image/HomePage/HeroBg.webp
bgImageDark: /assets/image/HomePage/HeroBg.webp
bgImageStyle:
  background-attachment: fixed
heroText: QQ机器人「阿洛娜」&「星澜」
tagline: <br><br><br>一个攻略查询/游戏养成的QQ机器人<br><strong>星澜QQ：3889007690</strong><br>若查询不到请加 <a href="https://qm.qq.com/q/Xh6RaGrOgg" target="_blank">什亭之匣</a> QQ群聊<br><br><br>
heroFullScreen: true
actions:
  - text: 最终用户许可协议
    icon: file-text
    link: ./documentation/eula.md
    type: primary
  - text: 开始使用
    icon: play
    link: ./documentation/UsageGuide.md
    type: sub-button
    
  - text: Telegram-Onebot-Adapter
    icon: server
    link: ./documentation/Telegram-Onebot-Adapter.md
    type: sub-button


highlights:
  
  - header: 小提示
    bgImage: https://theme-hope-assets.vuejs.press/bg/7-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/7-dark.svg
    highlights:
        - title: 'Tips: 请注意全角与半角的区别，阿洛娜全部使用半角 "#"，而不是全角 "＃"'
        - title: 'Tips: 部分指令需要将各参数用空格分开，如：`#转账@用户 100`'
        - title: 'Tips: 一切指令"[]"表示为必填参数，"<>""表示为可选参数，请将括号去掉后替换相应内容发送'
        - title: 'Tips: 星澜全部指令使用 "@星澜 /" 作为前缀，请务必确保@选择上'

  - header: 指令功能
    image: /assets/image/HomePage/Icon/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 查询 BlueArchive 游戏攻略
      - title: BlueArchive 抽奖模拟
      - title: 每日时事新闻与B站新番推荐
      - title: 每日运势、人品与塔罗牌查询
      - title: 特色机制与系统功能
        
  - header: 杂项功能
    image: /assets/image/HomePage/Icon/miscellaneous.svg
    bgImage: /assets/image/HomePage/Menu.webp
    bgImageDark: /assets/image/HomePage/Menu.webp
    features:
      - title: '#单抽'
        icon: dice
        details: 蔚蓝档案单次抽奖
        
      - title: '#十连'
        icon: dice-d20
        details: 蔚蓝档案十连抽奖
        
      - title: '#塔罗牌'
        icon: magic
        details: 抽取一张塔罗牌
        
      - title: '#攻略 [学生/地图/杂图]'
        icon: book
        details: 查询蔚蓝档案攻略
        
      - title: '#活动 [国服/日服/国际服]'
        icon: calendar
        details: 查询蔚蓝档案活动
        
      - title: '#今日运势'
        icon: star
        details: 查询今日运势
        
      - title: '#今日人品'
        icon: thumbs-up
        details: 查询今日人品
        
      - title: '#抽老婆/#换老婆/今日老婆'
        icon: user
        details: 抽取/更换/查看今日随机群友作为老婆
        
      - title: '#mcp [ip]'
        icon: server
        details: 查询Minecraft服务器信息
        
      - title: '#今日新闻'
        icon: newspaper
        details: 获取今日60秒新闻
        
      - title: '#今日番剧'
        icon: tv
        details: 获取今日B站新番
        
      - title: '#经济菜单'
        icon: money-bill-wave
        details: 查看经济系统菜单
        
      - title: '#好感度菜单'
        icon: heart
        details: 查看好感度系统菜单
        
      - title: '#表情包菜单'
        icon: images
        details: 查看表情包系统菜单
        
      - title: '#回声洞菜单'
        icon: comment
        details: 查看回声洞系统菜单
        
      - title: '#宠物菜单'
        icon: paw
        details: 查看宠物系统菜单
        
      - title: '#Wordle菜单'
        icon: gamepad
        details: 查看Wordle游戏菜单   
        
    

  - header: 经济系统
    description: 「阿洛娜」搭载了一套完整的经济系统，可以让您利用金币进行购买、游戏等操作
    image: /assets/image/HomePage/Icon/economy.svg
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
    image: /assets/image/HomePage/Icon/heart.svg
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
    image: /assets/image/HomePage/Icon/layout.svg
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
    image: /assets/image/HomePage/Icon/features.svg
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
    image: /assets/image/HomePage/Icon/advanced.svg
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
        
  - header: 公测-Wordless游戏
    description: 「阿洛娜」新增的Wordle游戏
    image: /assets/image/HomePage/WordlePic.webp
    bgImage: /assets/image/HomePage/WordleBg.webp
    bgImageDark: /assets/image/HomePage/WordleBg.webp
    features:
      - title: "#wordle"
        icon: gamepad
        details: 开始Wordle游戏
        
      - title: "#wordle 群wordle"
        icon: gamepad
        details: 开始Wordle群游戏(群内所有人共享)
        
      - title: "#exit"
        icon: sign-out-alt
        details: 退出Wordle游戏
        
      - title: "#wordle (日/周/月)排行"
        icon: list
        details: 查看Wordle排行榜(日/周/月)
        
      - title: "#wordle (日/周/月)群排行"
        icon: list
        details: 查看Wordle群排行榜(日/周/月)
  - header: 新功能
    description: 「阿洛娜」还在不断更新中，更多功能正在开发中
    image: /assets/image/HomePage/Icon/advanced.svg
    bgImage: /assets/image/HomePage/ComingSoonBg.webp
    bgImageDark: /assets/image/HomePage/ComingSoonBg.webp
    highlights:
      - title: '更多功能'
        icon: ellipsis
        details: 更多功能正在开发中

copyright: false
// footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | by Travellerr
---
