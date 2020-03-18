// YouTube Player APIを読み込む
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// プレーヤーを埋め込む場所
var ytArea = 'youtube';
 
// 埋め込むYouTube ID
var ytID = 'e_lQmfl69Fk';
 
// プレーヤーのサイズを指定
var ytWidth = 640;
var ytHeight = 390;
 
// API読み込み後にプレーヤー埋め込み
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(ytArea, {
        height: ytHeight,
        width: ytWidth,
        videoId: ytID
    });

// 再生
var ytPlay = document.getElementById('play');
ytPlay.addEventListener('click', function() {
    ytPlayer.playVideo();
});
 
// 一時停止
var ytPause = document.getElementById('pause');
ytPause.addEventListener('click', function() {
    ytPlayer.pauseVideo();
});
 
// 停止
var ytStop = document.getElementById('stop');
ytStop.addEventListener('click', function() {
    ytPlayer.pauseVideo().seekTo(0);
});
 
// 10秒前へ
var ytPrev = document.getElementById('prev');
ytPrev.addEventListener('click', function() {
    // 現在の再生時間取得
    var currentTime = ytPlayer.getCurrentTime();
    ytPlayer.seekTo(currentTime - 10);
});
 
// 10秒先へ
var ytNext = document.getElementById('next');
ytNext.addEventListener('click', function() {
    // 現在の再生時間取得
    var currentTime = ytPlayer.getCurrentTime();
    ytPlayer.seekTo(currentTime + 10);
});
 
// 音量アップ(+10)
var ytVolup = document.getElementById('volup');
ytVolup.addEventListener('click', function() {
    // 現在の音量取得
    var currentVol = ytPlayer.getVolume();
    ytPlayer.setVolume(currentVol + 10);
});
 
// 音量ダウン(-10)
var ytVoldown = document.getElementById('voldown');
ytVoldown.addEventListener('click', function() {
    // 現在の音量取得
    var currentVol = ytPlayer.getVolume();
    ytPlayer.setVolume(currentVol - 10);
});
 
// ミュート
var ytMute = document.getElementById('mute');
ytMute.addEventListener('click', function() {
    // ミュートされているかどうか
    if(ytPlayer.isMuted()) {
        // ミュートの解除
        ytPlayer.unMute();
    } else {
        // ミュート
        ytPlayer.mute();
    }
});
}
