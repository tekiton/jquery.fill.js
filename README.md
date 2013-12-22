jquery.fill.js
==============

何これ？
--------
画像を画面いっぱいに広げるためのjQueryプラグイン。何番煎じでしょうね？  
Fullscreenrは書き方がjQueryらしくなくてで嫌いだった。MaxImageは複数書いた時におかしな動作になったので(ry  
……私の使い方が悪いのだろうか？各プラグイン作者さん、ごめんなさい。


使い方
------
jquery.fill.jsを読み込んで、画面いっぱいに表示したい画像を指定します。

* HTML
```html
<img src="./images/main_vis.jpg" alt="" id="mainvis" />
```

* JS
```javascript
$(function(){
    $('#mainvis').fill({ /* option */ });
});
```


オプション
----------
fill() を実行する際、引数を与えることで動作の設定変更ができます。

* target:string / jQuery Object/ DOM Object  
  拡大の基準となる要素。指定がなければwindowを基準にします。

* size:string  
  拡大方法。次に挙げるキーワードのうち、いずれかを指定します。
  * 'cover'  
    画像が対象要素を覆いつくすような最小サイズに拡大します。  
    ちょうどCSSの background-size:cover; のような動作。これがデフォルトです。
  * 'contain'  
    画像を対象要素に収まる最大サイズに拡大します。  
    background-size:contain;のような動作。
  * 'width'  
    幅のみを対象要素に合わせます。高さはなりゆきです。  
    多分jsでやる意味はない。width:100%;のような動作です。
  * 'emulateMaxImage'  
    MaxImageという類似プラグインが、以上のいずれの動作でもなかったので、それを再現。  

* left:integer  
  横に何pxずらすか。  

* top:integer  
  縦に何pxずらすか。

* widthDiff:integer  
  基準となる要素の横幅より幅を大きく/小さくできます。px。

* heightDiff:integer  
  基準となる要素の高さより高さを大きく/小さくできます。px。


動作確認済みブラウザ
--------------------
* Internet Explorer 7+
* Google Chrome
* Firefox
他のブラウザは試していませんが、最新のブラウザなら問題ないはずです。


ライセンス
----------
This is MIT LICENSE :)

