$(function () {
    // id属性change-colorのボタンをクリックしたら
    $('#change-color').on('click', function () {
        // id属性targetの文字色を赤くする
        $('#target').css('color', 'red');
    });

    // id属性change-textのボタンをクリックしたら
    $('#change-text').on('click', function () {
        $('#target').text('Hello!');
    });

    // id属性fade-outのボタンをクリックしたら
    $('#fade-out').on('click', function () {
        // フェードアウトする
        $('#target').fadeOut();
    });

    // id属性fade-inのボタンをクリックしたら
    $('#fade-in').on('click', function () {
        $('#target').fadeIn();
    });
});