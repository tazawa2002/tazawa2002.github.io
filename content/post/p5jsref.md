---
title: "p5.js reference"
date: 2023-11-17T23:53:29+09:00
tags: [p5.js]
featured_image: ""
description: "p5.jsのリファレンスとして使える情報をまとめたページ"
draft: true
useP5js: true
---
{{< p5js test >}}

# JavaScriptの基礎

## データ型

## 演算子

## 算術関数

# p5.jsの使い方

## プログラムの構造

```javascript
// プログラムが開始するとき1度だけ実行
function setup(){
    // innerWidth, innerHeightを使ってキャンバスサイズを定義する！！
    createCanvas(innerWidth, innerHeight);
}

// setup()が実行された後, 継続して実行
function draw(){
    // 実行毎に画面をリセットする処理
    background(255, 255, 255);

    // レンダリング処理を記述
}
```

## システム変数


## 図形・文字

## 色

## マウス・キーボード