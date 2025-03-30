---
title: Telegram-Onebot-Adapter
icon: server
order: 1
category: Guide
tag:
  - GUIDE
---

# Telegram-Onebot-Adapter

[![](https://socialify.git.ci/Travellerrr/Telegram-Onebot-Adapter/image?description=0&font=Raleway&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto)](https://github.com/Travellerrr/Telegram-Onebot-Adapter)

Telegram bot Onebot v11 Java protocol based on [OneBot](https://github.com/botuniverse/onebot/blob/main/README.md)

## Underlying
- [Java Telegram Bot API](https://github.com/pengrad/java-telegram-bot-api): Java implementation of the Telegram Bot API

## Compatibility
Fully compatible with the Onebot-v11 protocol, can connect with Onebot-v11 protocol frameworks to achieve most functions

Uses the SpringBoot framework, can be directly packaged as a jar file to run in the `Jdk17` environment

Provides Onebot-v11 forward WebSocket connection to this project.

The Telegram adapter supports the following connection methods:

- [x] Pure http polling getmsg to get information

Supports connection to [Mirai-Overflow](https://github.com/MrXiaoM/Overflow)

Other projects have not been tested yet

Can be used with projects that support the onebotV11 adapter

## Usage

::: warning
Please ensure your environment supports JDK17, otherwise it will not run properly

[JDK17 download link](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
:::

Go to [Release](https://github.com/Travellerrr/Telegram-Onebot-Adapter/releases) to download the latest version

Place the project body in any directory, ensuring there are no other files in the folder

Use the command below to start the project

```shell
java -jar Telegram-Onebot-Adapter-[version].jar
```

If it is the first startup, the project will automatically generate configuration files, please modify the configuration files according to your needs

After modifying the configuration, restart the project

## Configuration Guide

This project currently only supports [array format](https://github.com/botuniverse/onebot-11/blob/master/message/array.md) message forwarding/receiving, please ensure your framework supports this format

Other formats will be gradually adapted later, if there are any issues, please go to the issue to raise them

Supports proxy (HTTP (untested)/SOCKS with account and password), if needed, please configure in `config.yml`

The following configurations are all `config.yml` configuration items, with comments and format examples on the right side of the configuration items

```yaml
onebot:
  ip: 0.0.0.0
  path: [Onebot ws connection path]
  port: [Onebot ws connection port]
spring:
  database:
    dataType: [database type, H2/SQLITE/MYSQL]
    mysqlPassword: [database password, not required if using H2/SQLITE]
    mysqlUrl: [database connection url, not required if using H2/SQLITE]
    mysqlUser: [database username, not required if using H2/SQLITE]
  jackson:
    dateformat: yyyy-MM-dd HH:mm:ss
    timezone: Asia/Shanghai
telegram:
  bot:
    proxy:
      host: [proxy IP address, pure domain name not recommended]
      port: [proxy port]
      secret: [proxy password]
      type: [HTTP/SOCKS/DIRECT]
      username: [proxy account]
    token: [your bot token]
    username: [your bot username, set freely]
```

### Interface

- [ ] HTTP API
- [ ] Reverse HTTP POST
- [x] Forward WebSocket
- [ ] Reverse WebSocket
- [ ] Connect multiple ws addresses
- [x] Proxy support
- [x] Distinguish between user and group in Telegram chat information

### Implementation

::: tip
The table below shows ✅ for implemented, ❌ for not implemented, and ✅❓ for implemented but not tested
:::

<details>
<summary>Implemented API</summary>

#### APIs compliant with OneBot standards

| API                      |      Function       |  Implementation  |
|--------------------------|:-------------:|:------:|
| /send_private_msg        |   [Send private message]    |   ✅    |
| /send_group_msg          |    [Send group message]    |   ✅    |
| /send_msg                |    [Send message]     |   ❌    |
| /delete_msg              |    [Recall message]     |   ❌    |
| /set_group_kick          |    [Kick group member]     |   ✅❓   |
| /set_group_ban           |   [Group single ban]    |   ❌    |
| /set_group_whole_ban     |   [Group whole ban]    |   ❌    |
| /set_group_admin         |   [Set group admin]   |   ✅❓   |
| /set_group_card          | [Set group card (group note)]  |   ✅❓   |
| /set_group_name          |    [Set group name]     |   ✅❓   |
| /set_group_leave         |    [Leave group]     |   ✅❓   |
| /set_group_special_title |  [Set group special title]   |   ✅❓   |
| /set_friend_add_request  |   [Handle friend request]   |   ❌    |
| /set_group_add_request   |  [Handle group request/invitation]  |   ❌    |
| /get_login_info          |   [Get login info]   |   ✅    |
| /get_stranger_info       |   [Get stranger info]   |   ❌    |
| /get_friend_list         |   [Get friend list]    |   ✅    |
| /get_group_info          |    [Get group info]    |   ✅    |
| /get_group_list          |    [Get group list]    |   ✅    |
| /get_group_member_info   |   [Get group member info]   |   ✅    |
| /get_group_member_list   |   [Get group member list]   |   ✅    |
| /get_group_honor_info    |   [Get group honor info]   |   ❌    |
| /can_send_image          | [Check if image can be sent]  |   ❌    |
| /can_send_record         | [Check if record can be sent]  |   ❌    |
| /get_version_info        |   [Get version info]    |   ✅    |
| /set_restart             |    [Restart protocol end]    |   ❌    |
| /.handle_quick_operation |  [Perform quick operation on event]  |   ❌    |
| /get_image               |   [Get image info]    |   ❌    |
| /get_msg                 |    [Get message]     |   ❌    |
| /get_status              |    [Get status]     |   ✅    |

</details>

<details>
<summary>Implemented Event</summary>

#### Events compliant with OneBot standards

| Event Type |   Event Description    | Implementation |
|------|:---------:|:----:|
| Message Event |  [Private message]   |  ✅   |
| Message Event |   [Group message]   |  ✅   |
| Message Event |  [at parsing]   |  ✅   |
| Notification Event |  [Group file upload]  |  ❌   |
| Notification Event | [Group admin change]  |  ❌   |
| Notification Event |  [Group member decrease]  |  ❌   |
| Notification Event |  [Group member increase]  |  ❌   |
| Notification Event |   [Group ban]   |  ❌   |
| Notification Event |  [Friend add]   |  ❌   |
| Notification Event |  [Group message recall]  |  ❌   |
| Notification Event | [Friend message recall]  |  ❌   |
| Notification Event |  [Group poke]  |  ❌   |
| Notification Event | [Group red packet luck king]  |  ❌   |
| Notification Event | [Group member honor change] |  ❌   |
| Request Event |  [Friend request]  |  ❌   |
| Request Event | [Group request/invitation] |  ❌   |

</details>