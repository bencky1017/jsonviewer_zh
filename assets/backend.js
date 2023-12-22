!
    function (e) {
        function o(t) {
            if (n[t]) return n[t].exports;
            var r = n[t] = {
                exports: {},
                id: t,
                loaded: !1
            };
            return e[t].call(r.exports, r, r.exports, o),
                r.loaded = !0,
                r.exports
        }
        var n = {};
        return o.m = e,
            o.c = n,
            o.p = "",
            o(0)
    }([function (e, o, n) {
        e.exports = n(7)
    },
        , , , , , ,
    function (e, o, n) {
        var t = n(8),
            r = n(9);
        t.runtime.onMessage.addListener(function (e, o, n) {
            try {
                "GET_OPTIONS" === e.action && n({
                    err: null,
                    value: r.load()
                })
            } catch (e) {
                console.error("[JSONViewer] error: " + e.message, e),
                    n({
                        err: e
                    })
            }
        })
    },
    function (e, o) {
        e.exports = chrome
    },
    function (e, o, n) {
        var t = n(10),
            r = n(11),
            s = "options",
            a = "v2.options";
        e.exports = {
            save: function (e) {
                localStorage.setItem(a, JSON.stringify(e))
            },
            load: function () {
                var e = localStorage.getItem(a);
                return e = this.restoreOldOptions(e),
                    options = e ? JSON.parse(e) : {},
                    options.theme = options.theme || t.theme,
                    options.addons = options.addons ? JSON.parse(options.addons) : {},
                    options.addons = r({},
                        t.addons, options.addons),
                    options.structure = options.structure ? JSON.parse(options.structure) : t.structure,
                    options.style = options.style && options.style.length > 0 ? options.style : t.style,
                    options
            },
            restoreOldOptions: function (e) {
                var o = localStorage.getItem(s),
                    n = null;
                if (null === e && null !== o) try {
                    o = JSON.parse(o),
                        o && "object" == typeof o || (o = {}),
                        n = {},
                        n.theme = o.theme,
                        n.addons = {
                            prependHeader: JSON.parse(o.prependHeader || t.addons.prependHeader),
                            maxJsonSize: parseInt(o.maxJsonSize || t.addons.maxJsonSize, 10)
                        },
                        n.addons.maxJsonSize < t.addons.maxJsonSize && (n.addons.maxJsonSize = t.addons.maxJsonSize),
                        n.addons = JSON.stringify(n.addons),
                        n.structure = JSON.stringify(t.structure),
                        n.style = t.style,
                        this.save(n),
                        e = JSON.stringify(n)
                } catch (e) {
                    console.error("[JSONViewer] error: " + e.message, e)
                } finally {
                        localStorage.removeItem(s)
                    }
                return e
            }
        }
    },
    function (e, o) {
        e.exports = {
            theme: "default",
            addons: {
                prependHeader: !0,
                maxJsonSize: 400,
                alwaysFold: !1,
                alwaysRenderAllContent: !1,
                sortKeys: !1,
                clickableUrls: !0,
                wrapLinkWithAnchorTag: !1,
                openLinksInNewWindow: !0,
                autoHighlight: !0
            },
            structure: {
                readOnly: !0,
                lineNumbers: !0,
                lineWrapping: !0,
                foldGutter: !0,
                tabSize: 2,
                indentCStyle: !1,
                showArraySize: !1
            },
            style: [".CodeMirror {", "  font-family: monaco, Consolas, Menlo, Courier, monospace;", "  font-size: 16px;", "  line-height: 1.5em;", "}"].join("\n")
        }
    },
    function (e, o) {
        function n() {
            var e, o = {},
                n = 0,
                t = arguments.length;
            if (0 === t) return o;
            for (; n < t; n++) for (e in arguments[n]) arguments[n].hasOwnProperty(e) && (o[e] = arguments[n][e]);
            return o
        }
        e.exports = n
    }]);