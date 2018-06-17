
1. Допустим есть корневая папка с картинками: /images/cms/data
Если на главной странице картинка img.png будет иметь путь /images/cms/data/img.png
А в подразделе /catalog/nasosy картинка another.jpg будет иметь путь /images/cms/data/catalog/nasosy/another.jpg
То у нас получится сделать все КРАСИВО

2. Все изображения должны быть с одинаковыми пропорциями - тогда можно будет стилями их настроить.



<script>
$( document ).ready(function() {
    $('img').each(function() {
        var src = '' + $(this).attr('src');
        console.log('old: ' + src);
        var nsrc = '/images/cms/data';
        if (src.search('thumbs/') != -1) {
            var s = getAfterThumbs(src)
            nsrc += '/' + getFileName(s) + '.' + getFileExt(s);
            console.log('new: ' + nsrc);
            $(this).attr('src', nsrc);
        }
    })
});

function getAfterThumbs(str) {
    var ms = str.split('thumbs/');
    var res = ms[1];
    console.log('th:' + res);
    return res;
}

function removeWh(str) {
    var ms = str.split('_');
    ms.pop();
    ms.pop();
    ms = ms.join('_');
    console.log(ms);
    return ms;
}

function getFileName(str) {
    var ms = str.split('/');
    var s = ms[ms.length - 1];
    return removeWh(s);
}

function getFileExt(str) {
    ms = str.split('.');
    return ms[ms.length - 1];
}
</script>


Upd:

<script type="text/javascript">
    var str = '/images/cms/thumbs/34324-3294-29349324-9234/some_name_AAA_130_auto.jpg';
    console.log('before: ' + str);

    var reOldName = /(\/[_A-Za-z0-9\.]+)$/
    var reWidthHeight = /(_[A-Za-z0-9]+){2}\./;
    //var re2 = /\.([\w]+)$/;

    var file = str.match(reOldName)[0];
    var newfile = file.replace(reWidthHeight,'.'); // $1, $2);

    console.log('after: ' + newfile);
</script>