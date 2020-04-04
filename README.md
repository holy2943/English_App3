# README

# 作成意図
## アプリ名English_APP3
 英単語の登録/編集/削除とクイズ機能、youtubeを操作する事ができるアプリケーションを作成しました。
 現在、同居人と英語の学習をしており、
 英語を覚える為の単語学習に役立つアプリを作りたいと思った事が作成のきっかけになりました。

# 開発環境
フロントサイド
 ・html/css
 ・javascript
サーバサイド
 ・ruby on rails
 ・ruby
DB
 ・MySql
デプロイ環境(サーバー)
 ・AWS
 ・GitHub
 
・作品URL : 52.69.155.108

# アプリの説明
  英単語登録
  youtubeプレイヤー操作
  3択クイズ

 【indexページ】
  ・自身が登録した英単語一覧を見る事ができます。
  ・youtubeのプレイヤーを設置しており、youtubeのHPに遷移しなくても動画が見れます。
  ・選んだ英単語をクリックする事で、対象単語の詳細(showページ)に遷移します。
 【newページ】
  ・英単語/日本語訳/文法を登録できます。
 【editページ】
  ・自分の登録した英単語/日本語訳/文法を編集できます。
 【destroy】
  ・選択した登録情報を削除します。

# DB設計
  ## english_words テーブル
    |Column|Type|Option|
    |------|----|------|
    |key_word|text||
    |key_word_kana||
    |grammar|varchar||

  ## usersテーブル
    |Column|Type|Option|
    |------|----|------|
    
