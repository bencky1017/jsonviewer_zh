!function (t) {
    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return t[o].call(r.exports, r, r.exports, n),
            r.loaded = !0,
            r.exports
    }
    var e = {};
    return n.m = t,
        n.c = e,
        n.p = "",
        n(0)
}({
    0: function (t, n, e) {
        t.exports = e(63)
    },
    8: function (t, n) {
        t.exports = chrome
    },
    63: function (t, n, e) {
        var o = e(8);
        o.omnibox.onInputChanged.addListener(function (t, n) {
            console.log("[JSONViewer] inputChanged: " + t),
                n([{
                    content: "Format JSON",
                    description: "(Format JSON) Open a page with json highlighted"
                },
                {
                    content: "Scratch pad",
                    description: "(Scratch pad) Area to write and format/highlight JSON"
                }])
        }),
            o.omnibox.onInputEntered.addListener(function (t) {
                o.tabs.query({
                    active: !0,
                    currentWindow: !0
                },
                    function (n) {
                        var e = o.extension.getURL("/pages/omnibox.html"),
                            r = /scratch pad/i.test(t) ? "?scratch-page=true" : "?json=" + encodeURIComponent(t),
                            i = e + r;
                        console.log("[JSONViewer] Opening: " + i),
                            o.tabs.update(n[0].id, {
                                url: i
                            })
                    })
            })
    }
});