# React Native -- Moji app

## day 01 启动页面搭建 （2020年 4月 7日）

### react-native-swiper 的使用
> 在 welcomepage.js 中使用 Swiper 组件

[详细参考文件](https://github.com/leecade/react-native-swiper)

### 动画的使用
> 在 welcomepage.js 中使用 LayoutAnimation

> 在Android中使用 LayoutAnimation 要加上如下代码。
``` javascript
//android 使用 LayoutAnimation 的动画设置
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
```

[详细参考文章](https://www.jianshu.com/p/c7151be8d87f)

## day 02 主页面框架搭建 （2020年 4月 8日）

