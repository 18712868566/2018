~ function(d, w) {
    var docEl = d.documentElement,
        resizeEvt = 'orientationchange' in w ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!d.addEventListener) return;
    recalc();
    w.addEventListener(resizeEvt, recalc, false);
    d.addEventListener('DOMContentLoaded', recalc, false);
}(document, window);