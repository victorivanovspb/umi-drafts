'use strict';

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


Upd 2018-06-18:

<script>
$( document ).ready(function() {
    var reOldName = /(\/[_A-Za-z0-9\.]+)$/
    var reWidthHeight = /(_[A-Za-z0-9]+){2}\./;
    $('img').each(function() {
        var src = '' + $(this).attr('src');
        console.log('before: ' + src);
        var nsrc = '/images/cms/data';
        if (src.search('thumbs/') != -1) {
            var file = src.match(reOldName)[0];
            var newfile = file.replace(reWidthHeight,'.');
            console.log('new: ' + nsrc + newfile);
            $(this).attr('src', nsrc + newfile);
        }
    });
});
</script>
