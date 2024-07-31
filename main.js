var bar = new ProgressBar.Line(splash_text, {
    easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 1000,//時間指定(1000＝1秒)
    strokeWidth: 0.9,//進捗ゲージの太さ
    color: '#555',//進捗ゲージのカラー
    trailWidth: 0.9,//ゲージベースの線の太さ
    trailColor: '#ccc',//ゲージベースの線のカラー
    text: {//テキストの形状を直接指定       
      style: {//天地中央に配置
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: '0',
        margin: '-30px 0 0 0',//バーより上に配置
        transform:'translate(-50%,-50%)',
        'font-size':'1.5rem',
        color: '#fff',
      },
      autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
  });
  
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500)
    $("#splash").fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  