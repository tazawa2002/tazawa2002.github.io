---
title: "2Dイジングモデルのシミュレーション"
date: 2023-11-17T16:37:07+09:00
tags: [ising model]
featured_image: "/ising/ising.jpg"
description: "メトロポリス法を用いたイジングモデルのシミュレーション"
draft: false
useMath: true
useP5js: true
useP5jsbg: false
---


# イジングモデルって何？
磁性体の基礎的なモデル。格子点上に局在したスピンにおいて最近接のみの相互作用を考慮したモデル。

![イジングモデル](/ising/ising.jpg)

ハミルトニアンは、
$$
\mathcal{H} = -J \sum_{<i,j>} \sigma_{i}\sigma_{j} - mB \sum_{i} \sigma_{i}
$$
である。

# どうやってシミュレーションするの？
初期配置を選んでスタートボタンを押すとシミュレーションがはじまるよ。

kT/Jの数値を変えると面白いと思うよ。

# シミュレーション

{{< ising >}}