'use strict';

/*
$( document ).ready(function() {
    $('img').each(function() {
        var src = '' + $(this).attr('src');
        var nsrc = '/images/cms/data';
        if (src.search('thumbs/') != -1) {
            var s = getAfterThumbs(src)
            nsrc += '/' + getFileName(s) + '.' + getFileExt(s);
            $(this).attr('src', nsrc);
        }
    })
});
*/

$( document ).ready(function() {
    var reOldName = /(\/[_A-Za-z0-9\.]+)$/
    var reWidthHeight = /(_[A-Za-z0-9]+){2}\./;
    $('img').each(function() {
        var src = '' + $(this).attr('src');
        var nsrc = '/images/cms/data';
        if (src.search('thumbs/') != -1) {
            var file = src.match(reOldName)[0];
            var newfile = file.replace(reWidthHeight,'.');
            $(this).attr('src', nsrc + newfile);
        }
    });
});


function getAfterThumbs(str) {
    var ms = str.split('thumbs/');
    var res = ms[1];
    return res;
}

function removeWh(str) {
    var ms = str.split('_');
    ms.pop();
    ms.pop();
    ms = ms.join('_');
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
