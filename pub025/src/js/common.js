/* ===================================================================

 * ロールオーバー

=================================================================== */
$.fn.rollover = function() {
    return this.each(function() {
        // 画像名を取得
        var src = $(this).attr('src');
        //すでに画像名に「_on.」が付いていた場合、ロールオーバー処理をしない
        if (src.match('_on.')) return;
        // ロールオーバー用の画像名を取得（_onを付加）
        var src_on = src.replace(/^(.+)(\.[a-z]+)$/, "$1_on$2");
        // 画像のプリロード（先読み込み）
        $('').attr('src', src_on);
        // ロールオーバー処理
        $(this).hover(
            function() { $(this).attr('src', src_on); },
            function() { $(this).attr('src', src); }
        );
    });
};


/* ===================================================================

 * ページトップへの戻り

=================================================================== */
$(function(){
    // スクロールすると表示するエリア
    var element = $('#pageTop');
    // スクロール量の設定
    var position = 400; // 単位：px
    // スクロールすると表示するエリアを非表示
    element.hide();
    $(window).scroll(function(){
        // スクロールすると表示させる
        if ($(this).scrollTop() > position) {
            $(element).fadeIn();
        } else {
            $(element).fadeOut();
        }
    });
});


/* ===================================================================

 * スムーススクロール

=================================================================== */
$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function() {
        // スクロールの速度
        var speed = 400;// ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});


/* ===================================================================

 * コンテンツの高さを揃える

=================================================================== */
$.fn.uniformHeight = function() {
    var maxHeight = 0;
    this.each(function() {
        var thisHeight = $(this).height();
        if(thisHeight > maxHeight){
            maxHeight = thisHeight;
        }
    });
    $(this).height(maxHeight);
};