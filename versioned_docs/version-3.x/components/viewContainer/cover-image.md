---
title: CoverImage
sidebar_label: CoverImage
---

覆盖在原生组件之上的图片视图。可覆盖的原生组件同cover-view，支持嵌套在cover-view里。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html)

## 类型

```tsx
ComponentType<CoverImageProps>
```

## 示例代码


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="React"
  values={[
    {label: 'React', value: 'React'},
    {label: 'Vue', value: 'Vue'}
  ]}>
<TabItem value="React">


```tsx
// js
class App extends Components {
  render () {
    return (
      <View className='container'>
      <Video id='myVideo' src='src'>
        <CoverView className='controls'>
          <CoverView className='play' onClick='play'>
            <CoverImage className='img' src='src' />
          </CoverView>
        </CoverView>
      </Video>
    )
  }
}
// css
.container {
  position: relative;
}
.controls {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 225px;
  transform: translate(-50%, -50%);
}
```

</TabItem>

<TabItem value="Vue">

```html
<template>
  <view class="container">
    <video id='myvideo' src='https://ugccsy.qq.com/uwMROfz2r5zBIaQXGdGnC2dfDma3J1MItM3912IN4IRQvkRM/o31507f7lcd.mp4?sdtfrom=v1010&guid=aa18cf106b7fdb7e40f2d20b206f2b4f&vkey=63B0FCCC7FC3ADC342C166D86571AE02772258CD9B515B065DC68DF3919D8C288AE831D570ED5E8FE0FF3E81E170D04FF11F874BFDDACF7AAA2C0CFF2ACB39FB1A94DAD1AB859BDA53E4DD6DBCDC1217CEF789A9AC079924E2BBC599EED7A1FFDD60A727F2EB7E7B6472CE63DD4B683C9199DFC78A6A6C4D9891E05467C4B64E'>
    </video>
    <cover-view class='controls'>
      <cover-view class='play' onClick='play'>
        <cover-image class='img' src='https://img10.360buyimg.com/ling/s345x208_jfs/t1/133501/7/9865/382161/5f5ee31fEbdd6a418/0cdc0156ffff3c23.png' />
      </cover-view>
    </cover-view>
  </view>
</template>

<style>
.container {
  position: relative;
}
.controls {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 225px;
  transform: translate(-50%, -50%);
}
</style>

```
  
</TabItem>
</Tabs>

## CoverImageProps

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>类型</th>
      <th style={{ textAlign: "center"}}>必填</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>src</td>
      <td><code>string</code></td>
      <td style={{ textAlign: "center"}}>是</td>
      <td>图标路径，支持临时路径、网络地址、云文件ID。暂不支持base64格式。</td>
    </tr>
    <tr>
      <td>onLoad</td>
      <td><code>BaseEventOrigFunction&lt;any&gt;</code></td>
      <td style={{ textAlign: "center"}}>否</td>
      <td>图片加载成功时触发</td>
    </tr>
    <tr>
      <td>onError</td>
      <td><code>BaseEventOrigFunction&lt;any&gt;</code></td>
      <td style={{ textAlign: "center"}}>否</td>
      <td>图片加载失败时触发</td>
    </tr>
  </tbody>
</table>

### API 支持度

| API | 微信小程序 | H5 | React Native |
| :---: | :---: | :---: | :---: |
| CoverImageProps.src | ✔️ |  |  |
| CoverImageProps.onLoad | ✔️ |  |  |
| CoverImageProps.onError | ✔️ |  |  |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | H5 | React Native |
| :---: | :---: | :---: | :---: | :---: | :---: |
| CoverImage | ✔️ | ✔️ | ✔️ |  |  |