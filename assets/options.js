!
    function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t),
                i.loaded = !0,
                i.exports
        }
        var n = {};
        return t.m = e,
            t.c = n,
            t.p = "",
            t(0)
    }(function (e) {
        for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
            case "function":
                break;
            case "object":
                e[t] = function (t) {
                    var n = t.slice(1),
                        r = e[t[0]];
                    return function (e, t, i) {
                        r.apply(this, [e, t, i].concat(n))
                    }
                }(e[t]);
                break;
            default:
                e[t] = e[e[t]]
        }
        return e
    }([function (e, t, n) {
        e.exports = n(107)
    },
        , , , , , , ,
    function (e, t) {
        e.exports = chrome
    },
    function (e, t, n) {
        var r = n(10),
            i = n(11),
            o = "options",
            a = "v2.options";
        e.exports = {
            save: function (e) {
                localStorage.setItem(a, JSON.stringify(e))
            },
            load: function () {
                var e = localStorage.getItem(a);
                return e = this.restoreOldOptions(e),
                    options = e ? JSON.parse(e) : {},
                    options.theme = options.theme || r.theme,
                    options.addons = options.addons ? JSON.parse(options.addons) : {},
                    options.addons = i({},
                        r.addons, options.addons),
                    options.structure = options.structure ? JSON.parse(options.structure) : r.structure,
                    options.style = options.style && options.style.length > 0 ? options.style : r.style,
                    options
            },
            restoreOldOptions: function (e) {
                var t = localStorage.getItem(o),
                    n = null;
                if (null === e && null !== t) try {
                    t = JSON.parse(t),
                        t && "object" == typeof t || (t = {}),
                        n = {},
                        n.theme = t.theme,
                        n.addons = {
                            prependHeader: JSON.parse(t.prependHeader || r.addons.prependHeader),
                            maxJsonSize: parseInt(t.maxJsonSize || r.addons.maxJsonSize, 10)
                        },
                        n.addons.maxJsonSize < r.addons.maxJsonSize && (n.addons.maxJsonSize = r.addons.maxJsonSize),
                        n.addons = JSON.stringify(n.addons),
                        n.structure = JSON.stringify(r.structure),
                        n.style = r.style,
                        this.save(n),
                        e = JSON.stringify(n)
                } catch (e) {
                    console.error("[JSONViewer] error: " + e.message, e)
                } finally {
                        localStorage.removeItem(o)
                    }
                return e
            }
        }
    },
    function (e, t) {
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
    function (e, t) {
        function n() {
            var e, t = {},
                n = 0,
                r = arguments.length;
            if (0 === r) return t;
            for (; n < r; n++) for (e in arguments[n]) arguments[n].hasOwnProperty(e) && (t[e] = arguments[n][e]);
            return t
        }
        e.exports = n
    },
        , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function (e, t, n) {
        "use strict";
        e.exports = n(70)
    },
    function (e, t, n) {
        "use strict";
        e.exports = n(71),
            n(73),
            n(74),
            n(75),
            n(76)
    },
    function (e, t, n) {
        "use strict";
        function r() { }
        function i(e) {
            try {
                return e.then
            } catch (e) {
                return g = e,
                    v
            }
        }
        function o(e, t) {
            try {
                return e(t)
            } catch (e) {
                return g = e,
                    v
            }
        }
        function a(e, t, n) {
            try {
                e(t, n)
            } catch (e) {
                return g = e,
                    v
            }
        }
        function l(e) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._37 = 0,
                this._12 = null,
                this._59 = [],
                e !== r && p(e, this)
        }
        function s(e, t, n) {
            return new e.constructor(function (i, o) {
                var a = new l(r);
                a.then(i, o),
                    u(e, new h(t, n, a))
            })
        }
        function u(e, t) {
            for (; 3 === e._37;) e = e._12;
            return 0 === e._37 ? void e._59.push(t) : void m(function () {
                var n = 1 === e._37 ? t.onFulfilled : t.onRejected;
                if (null === n) return void (1 === e._37 ? c(t.promise, e._12) : f(t.promise, e._12));
                var r = o(n, e._12);
                r === v ? f(t.promise, g) : c(t.promise, r)
            })
        }
        function c(e, t) {
            if (t === e) return f(e, new TypeError("A promise cannot be resolved with itself."));
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = i(t);
                if (n === v) return f(e, g);
                if (n === e.then && t instanceof l) return e._37 = 3,
                    e._12 = t,
                    void d(e);
                if ("function" == typeof n) return void p(n.bind(t), e)
            }
            e._37 = 1,
                e._12 = t,
                d(e)
        }
        function f(e, t) {
            e._37 = 2,
                e._12 = t,
                d(e)
        }
        function d(e) {
            for (var t = 0; t < e._59.length; t++) u(e, e._59[t]);
            e._59 = null
        }
        function h(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
        }
        function p(e, t) {
            var n = !1,
                r = a(e,
                    function (e) {
                        n || (n = !0, c(t, e))
                    },
                    function (e) {
                        n || (n = !0, f(t, e))
                    });
            n || r !== v || (n = !0, f(t, g))
        }
        var m = n(72),
            g = null,
            v = {};
        e.exports = l,
            l._99 = r,
            l.prototype.then = function (e, t) {
                if (this.constructor !== l) return s(this, e, t);
                var n = new l(r);
                return u(this, new h(e, t, n)),
                    n
            }
    },
    function (e, t) {
        (function (t) {
            "use strict";
            function n(e) {
                l.length || (a(), s = !0),
                    l[l.length] = e
            }
            function r() {
                for (; u < l.length;) {
                    var e = u;
                    if (u += 1, l[e].call(), u > c) {
                        for (var t = 0,
                            n = l.length - u; t < n; t++) l[t] = l[t + u];
                        l.length -= u,
                            u = 0
                    }
                }
                l.length = 0,
                    u = 0,
                    s = !1
            }
            function i(e) {
                var t = 1,
                    n = new d(e),
                    r = document.createTextNode("");
                return n.observe(r, {
                    characterData: !0
                }),
                    function () {
                        t = -t,
                            r.data = t
                    }
            }
            function o(e) {
                return function () {
                    function t() {
                        clearTimeout(n),
                            clearInterval(r),
                            e()
                    }
                    var n = setTimeout(t, 0),
                        r = setInterval(t, 50)
                }
            }
            e.exports = n;
            var a, l = [],
                s = !1,
                u = 0,
                c = 1024,
                f = "undefined" != typeof t ? t : self,
                d = f.MutationObserver || f.WebKitMutationObserver;
            a = "function" == typeof d ? i(r) : o(r),
                n.requestFlush = a,
                n.makeRequestCallFromTimer = o
        }).call(t,
            function () {
                return this
            }())
    },
    function (e, t, n) {
        "use strict";
        var r = n(71);
        e.exports = r,
            r.prototype.done = function (e, t) {
                var n = arguments.length ? this.then.apply(this, arguments) : this;
                n.then(null,
                    function (e) {
                        setTimeout(function () {
                            throw e
                        },
                            0)
                    })
            }
    },
    function (e, t, n) {
        "use strict";
        var r = n(71);
        e.exports = r,
            r.prototype.
                finally = function (e) {
                    return this.then(function (t) {
                        return r.resolve(e()).then(function () {
                            return t
                        })
                    },
                        function (t) {
                            return r.resolve(e()).then(function () {
                                throw t
                            })
                        })
                }
    },
    function (e, t, n) {
        "use strict";
        function r(e) {
            var t = new i(i._99);
            return t._37 = 1,
                t._12 = e,
                t
        }
        var i = n(71);
        e.exports = i;
        var o = r(!0),
            a = r(!1),
            l = r(null),
            s = r(void 0),
            u = r(0),
            c = r("");
        i.resolve = function (e) {
            if (e instanceof i) return e;
            if (null === e) return l;
            if (void 0 === e) return s;
            if (e === !0) return o;
            if (e === !1) return a;
            if (0 === e) return u;
            if ("" === e) return c;
            if ("object" == typeof e || "function" == typeof e) try {
                var t = e.then;
                if ("function" == typeof t) return new i(t.bind(e))
            } catch (e) {
                return new i(function (t, n) {
                    n(e)
                })
            }
            return r(e)
        },
            i.all = function (e) {
                var t = Array.prototype.slice.call(e);
                return new i(function (e, n) {
                    function r(a, l) {
                        if (l && ("object" == typeof l || "function" == typeof l)) {
                            if (l instanceof i && l.then === i.prototype.then) {
                                for (; 3 === l._37;) l = l._12;
                                return 1 === l._37 ? r(a, l._12) : (2 === l._37 && n(l._12), void l.then(function (e) {
                                    r(a, e)
                                },
                                    n))
                            }
                            var s = l.then;
                            if ("function" == typeof s) {
                                var u = new i(s.bind(l));
                                return void u.then(function (e) {
                                    r(a, e)
                                },
                                    n)
                            }
                        }
                        t[a] = l,
                            0 === --o && e(t)
                    }
                    if (0 === t.length) return e([]);
                    for (var o = t.length,
                        a = 0; a < t.length; a++) r(a, t[a])
                })
            },
            i.reject = function (e) {
                return new i(function (t, n) {
                    n(e)
                })
            },
            i.race = function (e) {
                return new i(function (t, n) {
                    e.forEach(function (e) {
                        i.resolve(e).then(t, n)
                    })
                })
            },
            i.prototype.
                catch = function (e) {
                    return this.then(null, e)
                }
    },
    function (e, t, n) {
        "use strict";
        var r = n(71),
            i = n(77);
        e.exports = r,
            r.denodeify = function (e, t) {
                return t = t || 1 / 0,
                    function () {
                        var n = this,
                            i = Array.prototype.slice.call(arguments, 0, t > 0 ? t : 0);
                        return new r(function (t, r) {
                            i.push(function (e, n) {
                                e ? r(e) : t(n)
                            });
                            var o = e.apply(n, i); !o || "object" != typeof o && "function" != typeof o || "function" != typeof o.then || t(o)
                        })
                    }
            },
            r.nodeify = function (e) {
                return function () {
                    var t = Array.prototype.slice.call(arguments),
                        n = "function" == typeof t[t.length - 1] ? t.pop() : null,
                        o = this;
                    try {
                        return e.apply(this, arguments).nodeify(n, o)
                    } catch (e) {
                        if (null === n || "undefined" == typeof n) return new r(function (t, n) {
                            n(e)
                        });
                        i(function () {
                            n.call(o, e)
                        })
                    }
                }
            },
            r.prototype.nodeify = function (e, t) {
                return "function" != typeof e ? this : void this.then(function (n) {
                    i(function () {
                        e.call(t, null, n)
                    })
                },
                    function (n) {
                        i(function () {
                            e.call(t, n)
                        })
                    })
            }
    },
    function (e, t, n) {
        "use strict";
        function r() {
            if (s.length) throw s.shift()
        }
        function i(e) {
            var t;
            t = l.length ? l.pop() : new o,
                t.task = e,
                a(t)
        }
        function o() {
            this.task = null
        }
        var a = n(72),
            l = [],
            s = [],
            u = a.makeRequestCallFromTimer(r);
        e.exports = i,
            o.prototype.call = function () {
                try {
                    this.task.call()
                } catch (e) {
                    i.onerror ? i.onerror(e) : (s.push(e), u())
                } finally {
                    this.task = null,
                        l[l.length] = this
                }
            }
    },
    function (e, t) {
        var n = "undefined" == typeof n ? {} : n;
        n.format = function () {
            function e(e, t) {
                return new Array(t + 1).join(e)
            }
            function t(e, t) {
                var n = t + 1,
                    r = !1,
                    i = 1;
                try {
                    for (; i > 0 && n < e.length;) {
                        var o = e.charAt(n);
                        switch (o) {
                            case "[":
                                r || i++;
                                break;
                            case "]":
                                r || i--;
                                break;
                            case '"':
                                r = !r
                        }
                        n++
                    }
                    return JSON.parse(e.substring(t, n)).length
                } catch (e) {
                    return null
                }
            }
            function n(n, r) {
                r = r || {};
                for (var i = r.tabSize || 2,
                    o = r.indentCStyle || !1,
                    a = "undefined" != typeof r.showArraySize && Boolean(r.showArraySize), l = "", s = 0; s < i; s++) l += " ";
                var u = 0,
                    c = 0,
                    f = "",
                    d = 0,
                    h = !1,
                    p = null;
                for (u = 0, c = n.length; u < c; u += 1) switch (p = n.charAt(u)) {
                    case "{":
                    case "[":
                        if (h) f += p;
                        else {
                            if (o && (f += "\n" + e(l, d)), "[" === p && a) {
                                var m = t(n, u);
                                null !== m && (f += "Array[" + m + "]")
                            }
                            f += p,
                                f += "\n" + e(l, d + 1),
                                d += 1
                        }
                        break;
                    case "}":
                    case "]":
                        h ? f += p : (d -= 1, f += "\n" + e(l, d) + p);
                        break;
                    case ",":
                        f += h ? p : ",\n" + e(l, d);
                        break;
                    case ":":
                        f += h ? p : ": ";
                        break;
                    case " ":
                    case "\n":
                    case "\t":
                        h && (f += p);
                        break;
                    case '"':
                        0 === u ? h = !0 : ("\\" !== n.charAt(u - 1) || "\\" == n.charAt(u - 1) && "\\" == n.charAt(u - 2)) && (h = !h),
                            f += p;
                        break;
                    default:
                        f += p
                }
                return f
            }
            return {
                formatJson: n
            }
        }(),
            e.exports = n.format.formatJson
    },
        ,
    function (e, t, n) {
        !
        function (t, n) {
            e.exports = n()
        }(this,
            function () {
                "use strict";
                function e(e) {
                    return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
                }
                function t(e) {
                    for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
                    return e
                }
                function n(e, n) {
                    return t(e).appendChild(n)
                }
                function r(e, t, n, r) {
                    var i = document.createElement(e);
                    if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t));
                    else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
                    return i
                }
                function i(e, t) {
                    if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
                    do
                        if (11 == t.nodeType && (t = t.host), t == e) return !0;
                    while (t = t.parentNode)
                }
                function o() {
                    var e;
                    try {
                        e = document.activeElement
                    } catch (t) {
                        e = document.body || null
                    }
                    for (; e && e.root && e.root.activeElement;) e = e.root.activeElement;
                    return e
                }
                function a(t, n) {
                    var r = t.className;
                    e(n).test(r) || (t.className += (r ? " " : "") + n)
                }
                function l(t, n) {
                    for (var r = t.split(" "), i = 0; i < r.length; i++) r[i] && !e(r[i]).test(n) && (n += " " + r[i]);
                    return n
                }
                function s(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return function () {
                        return e.apply(null, t)
                    }
                }
                function u(e, t, n) {
                    t || (t = {});
                    for (var r in e) !e.hasOwnProperty(r) || n === !1 && t.hasOwnProperty(r) || (t[r] = e[r]);
                    return t
                }
                function c(e, t, n, r, i) {
                    null == t && (t = e.search(/[^\s\u00a0]/), t == -1 && (t = e.length));
                    for (var o = r || 0,
                        a = i || 0; ;) {
                        var l = e.indexOf("\t", o);
                        if (l < 0 || l >= t) return a + (t - o);
                        a += l - o,
                            a += n - a % n,
                            o = l + 1
                    }
                }
                function f() {
                    this.id = null
                }
                function d(e, t) {
                    for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
                    return - 1
                }
                function h(e, t, n) {
                    for (var r = 0,
                        i = 0; ;) {
                        var o = e.indexOf("\t", r);
                        o == -1 && (o = e.length);
                        var a = o - r;
                        if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
                        if (i += o - r, i += n - i % n, r = o + 1, i >= t) return r
                    }
                }
                function p(e) {
                    for (; za.length <= e;) za.push(m(za) + " ");
                    return za[e]
                }
                function m(e) {
                    return e[e.length - 1]
                }
                function g(e, t) {
                    for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
                    return n
                }
                function v(e, t, n) {
                    for (var r = 0,
                        i = n(t); r < e.length && n(e[r]) <= i;) r++;
                    e.splice(r, 0, t)
                }
                function y() { }
                function b(e, t) {
                    var n;
                    return Object.create ? n = Object.create(e) : (y.prototype = e, n = new y),
                        t && u(t, n),
                        n
                }
                function w(e) {
                    return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Pa.test(e))
                }
                function x(e, t) {
                    return t ? !!(t.source.indexOf("\\w") > -1 && w(e)) || t.test(e) : w(e)
                }
                function k(e) {
                    for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
                    return !0
                }
                function C(e) {
                    return e.charCodeAt(0) >= 768 && Da.test(e)
                }
                function S(e, t, n) {
                    var i = this;
                    this.input = n,
                        i.scrollbarFiller = r("div", null, "CodeMirror-scrollbar-filler"),
                        i.scrollbarFiller.setAttribute("cm-not-content", "true"),
                        i.gutterFiller = r("div", null, "CodeMirror-gutter-filler"),
                        i.gutterFiller.setAttribute("cm-not-content", "true"),
                        i.lineDiv = r("div", null, "CodeMirror-code"),
                        i.selectionDiv = r("div", null, null, "position: relative; z-index: 1"),
                        i.cursorDiv = r("div", null, "CodeMirror-cursors"),
                        i.measure = r("div", null, "CodeMirror-measure"),
                        i.lineMeasure = r("div", null, "CodeMirror-measure"),
                        i.lineSpace = r("div", [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv], null, "position: relative; outline: none"),
                        i.mover = r("div", [r("div", [i.lineSpace], "CodeMirror-lines")], null, "position: relative"),
                        i.sizer = r("div", [i.mover], "CodeMirror-sizer"),
                        i.sizerWidth = null,
                        i.heightForcer = r("div", null, null, "position: absolute; height: " + Aa + "px; width: 1px;"),
                        i.gutters = r("div", null, "CodeMirror-gutters"),
                        i.lineGutter = null,
                        i.scroller = r("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"),
                        i.scroller.setAttribute("tabIndex", "-1"),
                        i.wrapper = r("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"),
                        la && sa < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0),
                        ua || ia && va || (i.scroller.draggable = !0),
                        e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
                        i.viewFrom = i.viewTo = t.first,
                        i.reportedViewFrom = i.reportedViewTo = t.first,
                        i.view = [],
                        i.renderedView = null,
                        i.externalMeasured = null,
                        i.viewOffset = 0,
                        i.lastWrapHeight = i.lastWrapWidth = 0,
                        i.updateLineNumbers = null,
                        i.nativeBarWidth = i.barHeight = i.barWidth = 0,
                        i.scrollbarsClipped = !1,
                        i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null,
                        i.alignWidgets = !1,
                        i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null,
                        i.maxLine = null,
                        i.maxLineLength = 0,
                        i.maxLineChanged = !1,
                        i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null,
                        i.shift = !1,
                        i.selForContextMenu = null,
                        i.activeTouch = null,
                        n.init(i)
                }
                function T(e, t) {
                    if (t -= e.first, t < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
                    for (var n = e; !n.lines;) for (var r = 0; ; ++r) {
                        var i = n.children[r],
                            o = i.chunkSize();
                        if (t < o) {
                            n = i;
                            break
                        }
                        t -= o
                    }
                    return n.lines[t]
                }
                function L(e, t, n) {
                    var r = [],
                        i = t.line;
                    return e.iter(t.line, n.line + 1,
                        function (e) {
                            var o = e.text;
                            i == n.line && (o = o.slice(0, n.ch)),
                                i == t.line && (o = o.slice(t.ch)),
                                r.push(o),
                                ++i
                        }),
                        r
                }
                function M(e, t, n) {
                    var r = [];
                    return e.iter(t, n,
                        function (e) {
                            r.push(e.text)
                        }),
                        r
                }
                function O(e, t) {
                    var n = t - e.height;
                    if (n) for (var r = e; r; r = r.parent) r.height += n
                }
                function A(e) {
                    if (null == e.parent) return null;
                    for (var t = e.parent,
                        n = d(t.lines, e), r = t.parent; r; t = r, r = r.parent) for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
                    return n + t.first
                }
                function N(e, t) {
                    var n = e.first;
                    e: do {
                        for (var r = 0; r < e.children.length; ++r) {
                            var i = e.children[r],
                                o = i.height;
                            if (t < o) {
                                e = i;
                                continue e
                            }
                            t -= o,
                                n += i.chunkSize()
                        }
                        return n
                    } while (!e.lines);
                    for (var a = 0; a < e.lines.length; ++a) {
                        var l = e.lines[a],
                            s = l.height;
                        if (t < s) break;
                        t -= s
                    }
                    return n + a
                }
                function W(e, t) {
                    return t >= e.first && t < e.first + e.size
                }
                function H(e, t) {
                    return String(e.lineNumberFormatter(t + e.firstLineNumber))
                }
                function E(e, t) {
                    return this instanceof E ? (this.line = e, void (this.ch = t)) : new E(e, t)
                }
                function z(e, t) {
                    return e.line - t.line || e.ch - t.ch
                }
                function P(e) {
                    return E(e.line, e.ch)
                }
                function D(e, t) {
                    return z(e, t) < 0 ? t : e
                }
                function I(e, t) {
                    return z(e, t) < 0 ? e : t
                }
                function F(e, t) {
                    return Math.max(e.first, Math.min(t, e.first + e.size - 1))
                }
                function B(e, t) {
                    if (t.line < e.first) return E(e.first, 0);
                    var n = e.first + e.size - 1;
                    return t.line > n ? E(n, T(e, n).text.length) : R(t, T(e, t.line).text.length)
                }
                function R(e, t) {
                    var n = e.ch;
                    return null == n || n > t ? E(e.line, t) : n < 0 ? E(e.line, 0) : e
                }
                function j(e, t) {
                    for (var n = [], r = 0; r < t.length; r++) n[r] = B(e, t[r]);
                    return n
                }
                function _() {
                    Ia = !0
                }
                function q() {
                    Fa = !0
                }
                function K(e, t, n) {
                    this.marker = e,
                        this.from = t,
                        this.to = n
                }
                function U(e, t) {
                    if (e) for (var n = 0; n < e.length; ++n) {
                        var r = e[n];
                        if (r.marker == t) return r
                    }
                }
                function V(e, t) {
                    for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
                    return n
                }
                function G(e, t) {
                    e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t],
                        t.marker.attachLine(e)
                }
                function X(e, t, n) {
                    var r;
                    if (e) for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            a = o.marker,
                            l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                        if (l || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
                            var s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t); (r || (r = [])).push(new K(a, o.from, s ? null : o.to))
                        }
                    }
                    return r
                }
                function $(e, t, n) {
                    var r;
                    if (e) for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            a = o.marker,
                            l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                        if (l || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
                            var s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t); (r || (r = [])).push(new K(a, s ? null : o.from - t, null == o.to ? null : o.to - t))
                        }
                    }
                    return r
                }
                function Y(e, t) {
                    if (t.full) return null;
                    var n = W(e, t.from.line) && T(e, t.from.line).markedSpans,
                        r = W(e, t.to.line) && T(e, t.to.line).markedSpans;
                    if (!n && !r) return null;
                    var i = t.from.ch,
                        o = t.to.ch,
                        a = 0 == z(t.from, t.to),
                        l = X(n, i, a),
                        s = $(r, o, a),
                        u = 1 == t.text.length,
                        c = m(t.text).length + (u ? i : 0);
                    if (l) for (var f = 0; f < l.length; ++f) {
                        var d = l[f];
                        if (null == d.to) {
                            var h = U(s, d.marker);
                            h ? u && (d.to = null == h.to ? null : h.to + c) : d.to = i
                        }
                    }
                    if (s) for (var p = 0; p < s.length; ++p) {
                        var g = s[p];
                        if (null != g.to && (g.to += c), null == g.from) {
                            var v = U(l, g.marker);
                            v || (g.from = c, u && (l || (l = [])).push(g))
                        } else g.from += c,
                            u && (l || (l = [])).push(g)
                    }
                    l && (l = J(l)),
                        s && s != l && (s = J(s));
                    var y = [l];
                    if (!u) {
                        var b, w = t.text.length - 2;
                        if (w > 0 && l) for (var x = 0; x < l.length; ++x) null == l[x].to && (b || (b = [])).push(new K(l[x].marker, null, null));
                        for (var k = 0; k < w; ++k) y.push(b);
                        y.push(s)
                    }
                    return y
                }
                function J(e) {
                    for (var t = 0; t < e.length; ++t) {
                        var n = e[t];
                        null != n.from && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1)
                    }
                    return e.length ? e : null
                }
                function Z(e, t, n) {
                    var r = null;
                    if (e.iter(t.line, n.line + 1,
                        function (e) {
                            if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
                                var n = e.markedSpans[t].marker; !n.readOnly || r && d(r, n) != -1 || (r || (r = [])).push(n)
                            }
                        }), !r) return null;
                    for (var i = [{
                        from: t,
                        to: n
                    }], o = 0; o < r.length; ++o) for (var a = r[o], l = a.find(0), s = 0; s < i.length; ++s) {
                        var u = i[s];
                        if (!(z(u.to, l.from) < 0 || z(u.from, l.to) > 0)) {
                            var c = [s, 1],
                                f = z(u.from, l.from),
                                h = z(u.to, l.to); (f < 0 || !a.inclusiveLeft && !f) && c.push({
                                    from: u.from,
                                    to: l.from
                                }),
                                    (h > 0 || !a.inclusiveRight && !h) && c.push({
                                        from: l.to,
                                        to: u.to
                                    }),
                                    i.splice.apply(i, c),
                                    s += c.length - 1
                        }
                    }
                    return i
                }
                function Q(e) {
                    var t = e.markedSpans;
                    if (t) {
                        for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                        e.markedSpans = null
                    }
                }
                function ee(e, t) {
                    if (t) {
                        for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                        e.markedSpans = t
                    }
                }
                function te(e) {
                    return e.inclusiveLeft ? -1 : 0
                }
                function ne(e) {
                    return e.inclusiveRight ? 1 : 0
                }
                function re(e, t) {
                    var n = e.lines.length - t.lines.length;
                    if (0 != n) return n;
                    var r = e.find(),
                        i = t.find(),
                        o = z(r.from, i.from) || te(e) - te(t);
                    if (o) return - o;
                    var a = z(r.to, i.to) || ne(e) - ne(t);
                    return a ? a : t.id - e.id
                }
                function ie(e, t) {
                    var n, r = Fa && e.markedSpans;
                    if (r) for (var i = void 0,
                        o = 0; o < r.length; ++o) i = r[o],
                            i.marker.collapsed && null == (t ? i.from : i.to) && (!n || re(n, i.marker) < 0) && (n = i.marker);
                    return n
                }
                function oe(e) {
                    return ie(e, !0)
                }
                function ae(e) {
                    return ie(e, !1)
                }
                function le(e, t, n, r, i) {
                    var o = T(e, t),
                        a = Fa && o.markedSpans;
                    if (a) for (var l = 0; l < a.length; ++l) {
                        var s = a[l];
                        if (s.marker.collapsed) {
                            var u = s.marker.find(0),
                                c = z(u.from, n) || te(s.marker) - te(i),
                                f = z(u.to, r) || ne(s.marker) - ne(i);
                            if (!(c >= 0 && f <= 0 || c <= 0 && f >= 0) && (c <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? z(u.to, n) >= 0 : z(u.to, n) > 0) || c >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? z(u.from, r) <= 0 : z(u.from, r) < 0))) return !0
                        }
                    }
                }
                function se(e) {
                    for (var t; t = oe(e);) e = t.find(-1, !0).line;
                    return e
                }
                function ue(e) {
                    for (var t, n; t = ae(e);) e = t.find(1, !0).line,
                        (n || (n = [])).push(e);
                    return n
                }
                function ce(e, t) {
                    var n = T(e, t),
                        r = se(n);
                    return n == r ? t : A(r)
                }
                function fe(e, t) {
                    if (t > e.lastLine()) return t;
                    var n, r = T(e, t);
                    if (!de(e, r)) return t;
                    for (; n = ae(r);) r = n.find(1, !0).line;
                    return A(r) + 1
                }
                function de(e, t) {
                    var n = Fa && t.markedSpans;
                    if (n) for (var r = void 0,
                        i = 0; i < n.length; ++i) if (r = n[i], r.marker.collapsed) {
                            if (null == r.from) return !0;
                            if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && he(e, t, r)) return !0
                        }
                }
                function he(e, t, n) {
                    if (null == n.to) {
                        var r = n.marker.find(1, !0);
                        return he(e, r.line, U(r.line.markedSpans, n.marker))
                    }
                    if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
                    for (var i = void 0,
                        o = 0; o < t.markedSpans.length; ++o) if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && he(e, t, i)) return !0
                }
                function pe(e) {
                    e = se(e);
                    for (var t = 0,
                        n = e.parent,
                        r = 0; r < n.lines.length; ++r) {
                        var i = n.lines[r];
                        if (i == e) break;
                        t += i.height
                    }
                    for (var o = n.parent; o; n = o, o = n.parent) for (var a = 0; a < o.children.length; ++a) {
                        var l = o.children[a];
                        if (l == n) break;
                        t += l.height
                    }
                    return t
                }
                function me(e) {
                    if (0 == e.height) return 0;
                    for (var t, n = e.text.length,
                        r = e; t = oe(r);) {
                        var i = t.find(0, !0);
                        r = i.from.line,
                            n += i.from.ch - i.to.ch
                    }
                    for (r = e; t = ae(r);) {
                        var o = t.find(0, !0);
                        n -= r.text.length - o.from.ch,
                            r = o.to.line,
                            n += r.text.length - o.to.ch
                    }
                    return n
                }
                function ge(e) {
                    var t = e.display,
                        n = e.doc;
                    t.maxLine = T(n, n.first),
                        t.maxLineLength = me(t.maxLine),
                        t.maxLineChanged = !0,
                        n.iter(function (e) {
                            var n = me(e);
                            n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
                        })
                }
                function ve(e, t, n, r) {
                    if (!e) return r(t, n, "ltr");
                    for (var i = !1,
                        o = 0; o < e.length; ++o) {
                        var a = e[o]; (a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr"), i = !0)
                    }
                    i || r(t, n, "ltr")
                }
                function ye(e) {
                    return e.level % 2 ? e.to : e.from
                }
                function be(e) {
                    return e.level % 2 ? e.from : e.to
                }
                function we(e) {
                    var t = Me(e);
                    return t ? ye(t[0]) : 0
                }
                function xe(e) {
                    var t = Me(e);
                    return t ? be(m(t)) : e.text.length
                }
                function ke(e, t, n) {
                    var r = e[0].level;
                    return t == r || n != r && t < n
                }
                function Ce(e, t) {
                    var n;
                    Ba = null;
                    for (var r = 0; r < e.length; ++r) {
                        var i = e[r];
                        if (i.from < t && i.to > t) return r;
                        if (i.from == t || i.to == t) {
                            if (null != n) return ke(e, i.level, e[n].level) ? (i.from != i.to && (Ba = n), r) : (i.from != i.to && (Ba = r), n);
                            n = r
                        }
                    }
                    return n
                }
                function Se(e, t, n, r) {
                    if (!r) return t + n;
                    do t += n;
                    while (t > 0 && C(e.text.charAt(t)));
                    return t
                }
                function Te(e, t, n, r) {
                    var i = Me(e);
                    if (!i) return Le(e, t, n, r);
                    for (var o = Ce(i, t), a = i[o], l = Se(e, t, a.level % 2 ? -n : n, r); ;) {
                        if (l > a.from && l < a.to) return l;
                        if (l == a.from || l == a.to) return Ce(i, l) == o ? l : (a = i[o += n], n > 0 == a.level % 2 ? a.to : a.from);
                        if (a = i[o += n], !a) return null;
                        l = n > 0 == a.level % 2 ? Se(e, a.to, -1, r) : Se(e, a.from, 1, r)
                    }
                }
                function Le(e, t, n, r) {
                    var i = t + n;
                    if (r) for (; i > 0 && C(e.text.charAt(i));) i += n;
                    return i < 0 || i > e.text.length ? null : i
                }
                function Me(e) {
                    var t = e.order;
                    return null == t && (t = e.order = Ra(e.text)),
                        t
                }
                function Oe(e, t) {
                    return e._handlers && e._handlers[t] || ja
                }
                function Ae(e, t, n) {
                    if (e.removeEventListener) e.removeEventListener(t, n, !1);
                    else if (e.detachEvent) e.detachEvent("on" + t, n);
                    else {
                        var r = e._handlers,
                            i = r && r[t];
                        if (i) {
                            var o = d(i, n);
                            o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)))
                        }
                    }
                }
                function Ne(e, t) {
                    var n = Oe(e, t);
                    if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r)
                }
                function We(e, t, n) {
                    return "string" == typeof t && (t = {
                        type: t,
                        preventDefault: function () {
                            this.defaultPrevented = !0
                        }
                    }),
                        Ne(e, n || t.type, e, t),
                        Ie(t) || t.codemirrorIgnore
                }
                function He(e) {
                    var t = e._handlers && e._handlers.cursorActivity;
                    if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) d(n, t[r]) == -1 && n.push(t[r])
                }
                function Ee(e, t) {
                    return Oe(e, t).length > 0
                }
                function ze(e) {
                    e.prototype.on = function (e, t) {
                        _a(this, e, t)
                    },
                        e.prototype.off = function (e, t) {
                            Ae(this, e, t)
                        }
                }
                function Pe(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }
                function De(e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                }
                function Ie(e) {
                    return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
                }
                function Fe(e) {
                    Pe(e),
                        De(e)
                }
                function Be(e) {
                    return e.target || e.srcElement
                }
                function Re(e) {
                    var t = e.which;
                    return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)),
                        ya && e.ctrlKey && 1 == t && (t = 3),
                        t
                }
                function je(e) {
                    if (null == Ma) {
                        var t = r("span", "​");
                        n(e, r("span", [t, document.createTextNode("x")])),
                            0 != e.firstChild.offsetHeight && (Ma = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(la && sa < 8))
                    }
                    var i = Ma ? r("span", "​") : r("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                    return i.setAttribute("cm-text", ""),
                        i
                }
                function _e(e) {
                    if (null != Oa) return Oa;
                    var r = n(e, document.createTextNode("AخA")),
                        i = ka(r, 0, 1).getBoundingClientRect(),
                        o = ka(r, 1, 2).getBoundingClientRect();
                    return t(e),
                        !(!i || i.left == i.right) && (Oa = o.right - i.right < 3)
                }
                function qe(e) {
                    if (null != Ga) return Ga;
                    var t = n(e, r("span", "x")),
                        i = t.getBoundingClientRect(),
                        o = ka(t, 0, 1).getBoundingClientRect();
                    return Ga = Math.abs(i.left - o.left) > 1
                }
                function Ke(e, t) {
                    arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)),
                        Xa[e] = t
                }
                function Ue(e, t) {
                    $a[e] = t
                }
                function Ve(e) {
                    if ("string" == typeof e && $a.hasOwnProperty(e)) e = $a[e];
                    else if (e && "string" == typeof e.name && $a.hasOwnProperty(e.name)) {
                        var t = $a[e.name];
                        "string" == typeof t && (t = {
                            name: t
                        }),
                            e = b(t, e),
                            e.name = t.name
                    } else {
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Ve("application/xml");
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Ve("application/json")
                    }
                    return "string" == typeof e ? {
                        name: e
                    } : e || {
                        name: "null"
                    }
                }
                function Ge(e, t) {
                    t = Ve(t);
                    var n = Xa[t.name];
                    if (!n) return Ge(e, "text/plain");
                    var r = n(e, t);
                    if (Ya.hasOwnProperty(t.name)) {
                        var i = Ya[t.name];
                        for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o])
                    }
                    if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps) for (var a in t.modeProps) r[a] = t.modeProps[a];
                    return r
                }
                function Xe(e, t) {
                    var n = Ya.hasOwnProperty(e) ? Ya[e] : Ya[e] = {};
                    u(t, n)
                }
                function $e(e, t) {
                    if (t === !0) return t;
                    if (e.copyState) return e.copyState(t);
                    var n = {};
                    for (var r in t) {
                        var i = t[r];
                        i instanceof Array && (i = i.concat([])),
                            n[r] = i
                    }
                    return n
                }
                function Ye(e, t) {
                    for (var n; e.innerMode && (n = e.innerMode(t), n && n.mode != e);) t = n.state,
                        e = n.mode;
                    return n || {
                        mode: e,
                        state: t
                    }
                }
                function Je(e, t, n) {
                    return !e.startState || e.startState(t, n)
                }
                function Ze(e, t, n, r) {
                    var i = [e.state.modeGen],
                        o = {};
                    at(e, t.text, e.doc.mode, n,
                        function (e, t) {
                            return i.push(e, t)
                        },
                        o, r);
                    for (var a = function (n) {
                        var r = e.state.overlays[n],
                            a = 1,
                            l = 0;
                        at(e, t.text, r.mode, !0,
                            function (e, t) {
                                for (var n = a; l < e;) {
                                    var o = i[a];
                                    o > e && i.splice(a, 1, e, i[a + 1], o),
                                        a += 2,
                                        l = Math.min(e, o)
                                }
                                if (t) if (r.opaque) i.splice(n, a - n, e, "overlay " + t),
                                    a = n + 2;
                                else for (; n < a; n += 2) {
                                    var s = i[n + 1];
                                    i[n + 1] = (s ? s + " " : "") + "overlay " + t
                                }
                            },
                            o)
                    },
                        l = 0; l < e.state.overlays.length; ++l) a(l);
                    return {
                        styles: i,
                        classes: o.bgClass || o.textClass ? o : null
                    }
                }
                function Qe(e, t, n) {
                    if (!t.styles || t.styles[0] != e.state.modeGen) {
                        var r = et(e, A(t)),
                            i = Ze(e, t, t.text.length > e.options.maxHighlightLength ? $e(e.doc.mode, r) : r);
                        t.stateAfter = r,
                            t.styles = i.styles,
                            i.classes ? t.styleClasses = i.classes : t.styleClasses && (t.styleClasses = null),
                            n === e.doc.frontier && e.doc.frontier++
                    }
                    return t.styles
                }
                function et(e, t, n) {
                    var r = e.doc,
                        i = e.display;
                    if (!r.mode.startState) return !0;
                    var o = lt(e, t, n),
                        a = o > r.first && T(r, o - 1).stateAfter;
                    return a = a ? $e(r.mode, a) : Je(r.mode),
                        r.iter(o, t,
                            function (n) {
                                tt(e, n.text, a);
                                var l = o == t - 1 || o % 5 == 0 || o >= i.viewFrom && o < i.viewTo;
                                n.stateAfter = l ? $e(r.mode, a) : null,
                                    ++o
                            }),
                        n && (r.frontier = o),
                        a
                }
                function tt(e, t, n, r) {
                    var i = e.doc.mode,
                        o = new Ja(t, e.options.tabSize);
                    for (o.start = o.pos = r || 0, "" == t && nt(i, n); !o.eol();) rt(i, o, n),
                        o.start = o.pos
                }
                function nt(e, t) {
                    if (e.blankLine) return e.blankLine(t);
                    if (e.innerMode) {
                        var n = Ye(e, t);
                        return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
                    }
                }
                function rt(e, t, n, r) {
                    for (var i = 0; i < 10; i++) {
                        r && (r[0] = Ye(e, n).mode);
                        var o = e.token(t, n);
                        if (t.pos > t.start) return o
                    }
                    throw new Error("Mode " + e.name + " failed to advance stream.")
                }
                function it(e, t, n, r) {
                    var i, o = function (e) {
                        return {
                            start: f.start,
                            end: f.pos,
                            string: f.current(),
                            type: i || null,
                            state: e ? $e(a.mode, c) : c
                        }
                    },
                        a = e.doc,
                        l = a.mode;
                    t = B(a, t);
                    var s, u = T(a, t.line),
                        c = et(e, t.line, n),
                        f = new Ja(u.text, e.options.tabSize);
                    for (r && (s = []); (r || f.pos < t.ch) && !f.eol();) f.start = f.pos,
                        i = rt(l, f, c),
                        r && s.push(o(!0));
                    return r ? s : o()
                }
                function ot(e, t) {
                    if (e) for (; ;) {
                        var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                        if (!n) break;
                        e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                        var r = n[1] ? "bgClass" : "textClass";
                        null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2])
                    }
                    return e
                }
                function at(e, t, n, r, i, o, a) {
                    var l = n.flattenSpans;
                    null == l && (l = e.options.flattenSpans);
                    var s, u = 0,
                        c = null,
                        f = new Ja(t, e.options.tabSize),
                        d = e.options.addModeClass && [null];
                    for ("" == t && ot(nt(n, r), o); !f.eol();) {
                        if (f.pos > e.options.maxHighlightLength ? (l = !1, a && tt(e, t, r, f.pos), f.pos = t.length, s = null) : s = ot(rt(n, f, r, d), o), d) {
                            var h = d[0].name;
                            h && (s = "m-" + (s ? h + " " + s : h))
                        }
                        if (!l || c != s) {
                            for (; u < f.start;) u = Math.min(f.start, u + 5e3),
                                i(u, c);
                            c = s
                        }
                        f.start = f.pos
                    }
                    for (; u < f.pos;) {
                        var p = Math.min(f.pos, u + 5e3);
                        i(p, c),
                            u = p
                    }
                }
                function lt(e, t, n) {
                    for (var r, i, o = e.doc,
                        a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), l = t; l > a; --l) {
                        if (l <= o.first) return o.first;
                        var s = T(o, l - 1);
                        if (s.stateAfter && (!n || l <= o.frontier)) return l;
                        var u = c(s.text, null, e.options.tabSize); (null == i || r > u) && (i = l - 1, r = u)
                    }
                    return i
                }
                function st(e, t, n) {
                    this.text = e,
                        ee(this, t),
                        this.height = n ? n(this) : 1
                }
                function ut(e, t, n, r) {
                    e.text = t,
                        e.stateAfter && (e.stateAfter = null),
                        e.styles && (e.styles = null),
                        null != e.order && (e.order = null),
                        Q(e),
                        ee(e, n);
                    var i = r ? r(e) : 1;
                    i != e.height && O(e, i)
                }
                function ct(e) {
                    e.parent = null,
                        Q(e)
                }
                function ft(e, t) {
                    if (!e || /^\s*$/.test(e)) return null;
                    var n = t.addModeClass ? el : Qa;
                    return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
                }
                function dt(e, t) {
                    var n = r("span", null, null, ua ? "padding-right: .1px" : null),
                        i = {
                            pre: r("pre", [n], "CodeMirror-line"),
                            content: n,
                            col: 0,
                            pos: 0,
                            cm: e,
                            trailingSpace: !1,
                            splitSpaces: (la || ua) && e.getOption("lineWrapping")
                        };
                    t.measure = {};
                    for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
                        var a = o ? t.rest[o - 1] : t.line,
                            s = void 0;
                        i.pos = 0,
                            i.addToken = pt,
                            _e(e.display.measure) && (s = Me(a)) && (i.addToken = gt(i.addToken, s)),
                            i.map = [];
                        var u = t != e.display.externalMeasured && A(a);
                        yt(a, i, Qe(e, a, u)),
                            a.styleClasses && (a.styleClasses.bgClass && (i.bgClass = l(a.styleClasses.bgClass, i.bgClass || "")), a.styleClasses.textClass && (i.textClass = l(a.styleClasses.textClass, i.textClass || ""))),
                            0 == i.map.length && i.map.push(0, 0, i.content.appendChild(je(e.display.measure))),
                            0 == o ? (t.measure.map = i.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(i.map), (t.measure.caches || (t.measure.caches = [])).push({}))
                    }
                    if (ua) {
                        var c = i.content.lastChild; (/\bcm-tab\b/.test(c.className) || c.querySelector && c.querySelector(".cm-tab")) && (i.content.className = "cm-tab-wrap-hack")
                    }
                    return Ne(e, "renderLine", e, t.line, i.pre),
                        i.pre.className && (i.textClass = l(i.pre.className, i.textClass || "")),
                        i
                }
                function ht(e) {
                    var t = r("span", "•", "cm-invalidchar");
                    return t.title = "\\u" + e.charCodeAt(0).toString(16),
                        t.setAttribute("aria-label", t.title),
                        t
                }
                function pt(e, t, n, i, o, a, l) {
                    if (t) {
                        var s, u = e.splitSpaces ? mt(t, e.trailingSpace) : t,
                            c = e.cm.state.specialChars,
                            f = !1;
                        if (c.test(t)) {
                            s = document.createDocumentFragment();
                            for (var d = 0; ;) {
                                c.lastIndex = d;
                                var h = c.exec(t),
                                    m = h ? h.index - d : t.length - d;
                                if (m) {
                                    var g = document.createTextNode(u.slice(d, d + m));
                                    la && sa < 9 ? s.appendChild(r("span", [g])) : s.appendChild(g),
                                        e.map.push(e.pos, e.pos + m, g),
                                        e.col += m,
                                        e.pos += m
                                }
                                if (!h) break;
                                d += m + 1;
                                var v = void 0;
                                if ("\t" == h[0]) {
                                    var y = e.cm.options.tabSize,
                                        b = y - e.col % y;
                                    v = s.appendChild(r("span", p(b), "cm-tab")),
                                        v.setAttribute("role", "presentation"),
                                        v.setAttribute("cm-text", "\t"),
                                        e.col += b
                                } else "\r" == h[0] || "\n" == h[0] ? (v = s.appendChild(r("span", "\r" == h[0] ? "␍" : "␤", "cm-invalidchar")), v.setAttribute("cm-text", h[0]), e.col += 1) : (v = e.cm.options.specialCharPlaceholder(h[0]), v.setAttribute("cm-text", h[0]), la && sa < 9 ? s.appendChild(r("span", [v])) : s.appendChild(v), e.col += 1);
                                e.map.push(e.pos, e.pos + 1, v),
                                    e.pos++
                            }
                        } else e.col += t.length,
                            s = document.createTextNode(u),
                            e.map.push(e.pos, e.pos + t.length, s),
                            la && sa < 9 && (f = !0),
                            e.pos += t.length;
                        if (e.trailingSpace = 32 == u.charCodeAt(t.length - 1), n || i || o || f || l) {
                            var w = n || "";
                            i && (w += i),
                                o && (w += o);
                            var x = r("span", [s], w, l);
                            return a && (x.title = a),
                                e.content.appendChild(x)
                        }
                        e.content.appendChild(s)
                    }
                }
                function mt(e, t) {
                    if (e.length > 1 && !/  /.test(e)) return e;
                    for (var n = t,
                        r = "",
                        i = 0; i < e.length; i++) {
                        var o = e.charAt(i);
                        " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "),
                            r += o,
                            n = " " == o
                    }
                    return r
                }
                function gt(e, t) {
                    return function (n, r, i, o, a, l, s) {
                        i = i ? i + " cm-force-border" : "cm-force-border";
                        for (var u = n.pos,
                            c = u + r.length; ;) {
                            for (var f = void 0,
                                d = 0; d < t.length && (f = t[d], !(f.to > u && f.from <= u)); d++);
                            if (f.to >= c) return e(n, r, i, o, a, l, s);
                            e(n, r.slice(0, f.to - u), i, o, null, l, s),
                                o = null,
                                r = r.slice(f.to - u),
                                u = f.to
                        }
                    }
                }
                function vt(e, t, n, r) {
                    var i = !r && n.widgetNode;
                    i && e.map.push(e.pos, e.pos + t, i),
                        !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)),
                        i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
                        e.pos += t,
                        e.trailingSpace = !1
                }
                function yt(e, t, n) {
                    var r = e.markedSpans,
                        i = e.text,
                        o = 0;
                    if (r) for (var a, l, s, u, c, f, d, h = i.length,
                        p = 0,
                        m = 1,
                        g = "",
                        v = 0; ;) {
                        if (v == p) {
                            s = u = c = f = l = "",
                                d = null,
                                v = 1 / 0;
                            for (var y = [], b = void 0, w = 0; w < r.length; ++w) {
                                var x = r[w],
                                    k = x.marker;
                                "bookmark" == k.type && x.from == p && k.widgetNode ? y.push(k) : x.from <= p && (null == x.to || x.to > p || k.collapsed && x.to == p && x.from == p) ? (null != x.to && x.to != p && v > x.to && (v = x.to, u = ""), k.className && (s += " " + k.className), k.css && (l = (l ? l + ";" : "") + k.css), k.startStyle && x.from == p && (c += " " + k.startStyle), k.endStyle && x.to == v && (b || (b = [])).push(k.endStyle, x.to), k.title && !f && (f = k.title), k.collapsed && (!d || re(d.marker, k) < 0) && (d = x)) : x.from > p && v > x.from && (v = x.from)
                            }
                            if (b) for (var C = 0; C < b.length; C += 2) b[C + 1] == v && (u += " " + b[C]);
                            if (!d || d.from == p) for (var S = 0; S < y.length; ++S) vt(t, 0, y[S]);
                            if (d && (d.from || 0) == p) {
                                if (vt(t, (null == d.to ? h + 1 : d.to) - p, d.marker, null == d.from), null == d.to) return;
                                d.to == p && (d = !1)
                            }
                        }
                        if (p >= h) break;
                        for (var T = Math.min(h, v); ;) {
                            if (g) {
                                var L = p + g.length;
                                if (!d) {
                                    var M = L > T ? g.slice(0, T - p) : g;
                                    t.addToken(t, M, a ? a + s : s, c, p + M.length == v ? u : "", f, l)
                                }
                                if (L >= T) {
                                    g = g.slice(T - p),
                                        p = T;
                                    break
                                }
                                p = L,
                                    c = ""
                            }
                            g = i.slice(o, o = n[m++]),
                                a = ft(n[m++], t.cm.options)
                        }
                    } else for (var O = 1; O < n.length; O += 2) t.addToken(t, i.slice(o, o = n[O]), ft(n[O + 1], t.cm.options))
                }
                function bt(e, t, n) {
                    this.line = t,
                        this.rest = ue(t),
                        this.size = this.rest ? A(m(this.rest)) - n + 1 : 1,
                        this.node = this.text = null,
                        this.hidden = de(e, t)
                }
                function wt(e, t, n) {
                    for (var r, i = [], o = t; o < n; o = r) {
                        var a = new bt(e.doc, T(e.doc, o), o);
                        r = o + a.size,
                            i.push(a)
                    }
                    return i
                }
                function xt(e) {
                    tl ? tl.ops.push(e) : e.ownsGroup = tl = {
                        ops: [e],
                        delayedCallbacks: []
                    }
                }
                function kt(e) {
                    var t = e.delayedCallbacks,
                        n = 0;
                    do {
                        for (; n < t.length; n++) t[n].call(null);
                        for (var r = 0; r < e.ops.length; r++) {
                            var i = e.ops[r];
                            if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                        }
                    } while (n < t.length)
                }
                function Ct(e, t) {
                    var n = e.ownsGroup;
                    if (n) try {
                        kt(n)
                    } finally {
                            tl = null,
                                t(n)
                        }
                }
                function St(e, t) {
                    var n = Oe(e, t);
                    if (n.length) {
                        var r, i = Array.prototype.slice.call(arguments, 2);
                        tl ? r = tl.delayedCallbacks : nl ? r = nl : (r = nl = [], setTimeout(Tt, 0));
                        for (var o = function (e) {
                            r.push(function () {
                                return n[e].apply(null, i)
                            })
                        },
                            a = 0; a < n.length; ++a) o(a)
                    }
                }
                function Tt() {
                    var e = nl;
                    nl = null;
                    for (var t = 0; t < e.length; ++t) e[t]()
                }
                function Lt(e, t, n, r) {
                    for (var i = 0; i < t.changes.length; i++) {
                        var o = t.changes[i];
                        "text" == o ? Nt(e, t) : "gutter" == o ? Ht(e, t, n, r) : "class" == o ? Wt(t) : "widget" == o && Et(e, t, r)
                    }
                    t.changes = null
                }
                function Mt(e) {
                    return e.node == e.text && (e.node = r("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), la && sa < 8 && (e.node.style.zIndex = 2)),
                        e.node
                }
                function Ot(e) {
                    var t = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
                    if (t && (t += " CodeMirror-linebackground"), e.background) t ? e.background.className = t : (e.background.parentNode.removeChild(e.background), e.background = null);
                    else if (t) {
                        var n = Mt(e);
                        e.background = n.insertBefore(r("div", null, t), n.firstChild)
                    }
                }
                function At(e, t) {
                    var n = e.display.externalMeasured;
                    return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : dt(e, t)
                }
                function Nt(e, t) {
                    var n = t.text.className,
                        r = At(e, t);
                    t.text == t.node && (t.node = r.pre),
                        t.text.parentNode.replaceChild(r.pre, t.text),
                        t.text = r.pre,
                        r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, Wt(t)) : n && (t.text.className = n)
                }
                function Wt(e) {
                    Ot(e),
                        e.line.wrapClass ? Mt(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
                    var t = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
                    e.text.className = t || ""
                }
                function Ht(e, t, n, i) {
                    if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                        var o = Mt(t);
                        t.gutterBackground = r("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px; width: " + i.gutterTotalWidth + "px"),
                            o.insertBefore(t.gutterBackground, t.text)
                    }
                    var a = t.line.gutterMarkers;
                    if (e.options.lineNumbers || a) {
                        var l = Mt(t),
                            s = t.gutter = r("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px");
                        if (e.display.input.setUneditable(s), l.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), !e.options.lineNumbers || a && a["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(r("div", H(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), a) for (var u = 0; u < e.options.gutters.length; ++u) {
                            var c = e.options.gutters[u],
                                f = a.hasOwnProperty(c) && a[c];
                            f && s.appendChild(r("div", [f], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[c] + "px; width: " + i.gutterWidth[c] + "px"))
                        }
                    }
                }
                function Et(e, t, n) {
                    t.alignable && (t.alignable = null);
                    for (var r = t.node.firstChild,
                        i = void 0; r; r = i) i = r.nextSibling,
                            "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
                    Pt(e, t, n)
                }
                function zt(e, t, n, r) {
                    var i = At(e, t);
                    return t.text = t.node = i.pre,
                        i.bgClass && (t.bgClass = i.bgClass),
                        i.textClass && (t.textClass = i.textClass),
                        Wt(t),
                        Ht(e, t, n, r),
                        Pt(e, t, r),
                        t.node
                }
                function Pt(e, t, n) {
                    if (Dt(e, t.line, t, n, !0), t.rest) for (var r = 0; r < t.rest.length; r++) Dt(e, t.rest[r], t, n, !1)
                }
                function Dt(e, t, n, i, o) {
                    if (t.widgets) for (var a = Mt(n), l = 0, s = t.widgets; l < s.length; ++l) {
                        var u = s[l],
                            c = r("div", [u.node], "CodeMirror-linewidget");
                        u.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"),
                            It(u, c, n, i),
                            e.display.input.setUneditable(c),
                            o && u.above ? a.insertBefore(c, n.gutter || n.text) : a.appendChild(c),
                            St(u, "redraw")
                    }
                }
                function It(e, t, n, r) {
                    if (e.noHScroll) {
                        (n.alignable || (n.alignable = [])).push(t);
                        var i = r.wrapperWidth;
                        t.style.left = r.fixedPos + "px",
                            e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"),
                            t.style.width = i + "px"
                    }
                    e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
                }
                function Ft(e) {
                    if (null != e.height) return e.height;
                    var t = e.doc.cm;
                    if (!t) return 0;
                    if (!i(document.body, e.node)) {
                        var o = "position: relative;";
                        e.coverGutter && (o += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
                            e.noHScroll && (o += "width: " + t.display.wrapper.clientWidth + "px;"),
                            n(t.display.measure, r("div", [e.node], null, o))
                    }
                    return e.height = e.node.parentNode.offsetHeight
                }
                function Bt(e, t) {
                    for (var n = Be(t); n != e.wrapper; n = n.parentNode) if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0
                }
                function Rt(e) {
                    return e.lineSpace.offsetTop
                }
                function jt(e) {
                    return e.mover.offsetHeight - e.lineSpace.offsetHeight
                }
                function _t(e) {
                    if (e.cachedPaddingH) return e.cachedPaddingH;
                    var t = n(e.measure, r("pre", "x")),
                        i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                        o = {
                            left: parseInt(i.paddingLeft),
                            right: parseInt(i.paddingRight)
                        };
                    return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o),
                        o
                }
                function qt(e) {
                    return Aa - e.display.nativeBarWidth
                }
                function Kt(e) {
                    return e.display.scroller.clientWidth - qt(e) - e.display.barWidth
                }
                function Ut(e) {
                    return e.display.scroller.clientHeight - qt(e) - e.display.barHeight
                }
                function Vt(e, t, n) {
                    var r = e.options.lineWrapping,
                        i = r && Kt(e);
                    if (!t.measure.heights || r && t.measure.width != i) {
                        var o = t.measure.heights = [];
                        if (r) {
                            t.measure.width = i;
                            for (var a = t.text.firstChild.getClientRects(), l = 0; l < a.length - 1; l++) {
                                var s = a[l],
                                    u = a[l + 1];
                                Math.abs(s.bottom - u.bottom) > 2 && o.push((s.bottom + u.top) / 2 - n.top)
                            }
                        }
                        o.push(n.bottom - n.top)
                    }
                }
                function Gt(e, t, n) {
                    if (e.line == t) return {
                        map: e.measure.map,
                        cache: e.measure.cache
                    };
                    for (var r = 0; r < e.rest.length; r++) if (e.rest[r] == t) return {
                        map: e.measure.maps[r],
                        cache: e.measure.caches[r]
                    };
                    for (var i = 0; i < e.rest.length; i++) if (A(e.rest[i]) > n) return {
                        map: e.measure.maps[i],
                        cache: e.measure.caches[i],
                        before: !0
                    }
                }
                function Xt(e, t) {
                    t = se(t);
                    var r = A(t),
                        i = e.display.externalMeasured = new bt(e.doc, t, r);
                    i.lineN = r;
                    var o = i.built = dt(e, i);
                    return i.text = o.pre,
                        n(e.display.lineMeasure, o.pre),
                        i
                }
                function $t(e, t, n, r) {
                    return Zt(e, Jt(e, t), n, r)
                }
                function Yt(e, t) {
                    if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Sn(e, t)];
                    var n = e.display.externalMeasured;
                    return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
                }
                function Jt(e, t) {
                    var n = A(t),
                        r = Yt(e, n);
                    r && !r.text ? r = null : r && r.changes && (Lt(e, r, n, bn(e)), e.curOp.forceUpdate = !0),
                        r || (r = Xt(e, t));
                    var i = Gt(r, t, n);
                    return {
                        line: t,
                        view: r,
                        rect: null,
                        map: i.map,
                        cache: i.cache,
                        before: i.before,
                        hasHeights: !1
                    }
                }
                function Zt(e, t, n, r, i) {
                    t.before && (n = -1);
                    var o, a = n + (r || "");
                    return t.cache.hasOwnProperty(a) ? o = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Vt(e, t.view, t.rect), t.hasHeights = !0), o = tn(e, t, n, r), o.bogus || (t.cache[a] = o)),
                    {
                        left: o.left,
                        right: o.right,
                        top: i ? o.rtop : o.top,
                        bottom: i ? o.rbottom : o.bottom
                    }
                }
                function Qt(e, t, n) {
                    for (var r, i, o, a, l, s, u = 0; u < e.length; u += 3) if (l = e[u], s = e[u + 1], t < l ? (i = 0, o = 1, a = "left") : t < s ? (i = t - l, o = i + 1) : (u == e.length - 3 || t == s && e[u + 3] > t) && (o = s - l, i = o - 1, t >= s && (a = "right")), null != i) {
                        if (r = e[u + 2], l == s && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i) for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) r = e[(u -= 3) + 2],
                            a = "left";
                        if ("right" == n && i == s - l) for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) r = e[(u += 3) + 2],
                            a = "right";
                        break
                    }
                    return {
                        node: r,
                        start: i,
                        end: o,
                        collapse: a,
                        coverStart: l,
                        coverEnd: s
                    }
                }
                function en(e, t) {
                    var n = rl;
                    if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
                    else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
                    return n
                }
                function tn(e, t, n, r) {
                    var i, o = Qt(t.map, n, r),
                        a = o.node,
                        l = o.start,
                        s = o.end,
                        u = o.collapse;
                    if (3 == a.nodeType) {
                        for (var c = 0; c < 4; c++) {
                            for (; l && C(t.line.text.charAt(o.coverStart + l));)--l;
                            for (; o.coverStart + s < o.coverEnd && C(t.line.text.charAt(o.coverStart + s));)++s;
                            if (i = la && sa < 9 && 0 == l && s == o.coverEnd - o.coverStart ? a.parentNode.getBoundingClientRect() : en(ka(a, l, s).getClientRects(), r), i.left || i.right || 0 == l) break;
                            s = l,
                                l -= 1,
                                u = "right"
                        }
                        la && sa < 11 && (i = nn(e.display.measure, i))
                    } else {
                        l > 0 && (u = r = "right");
                        var f;
                        i = e.options.lineWrapping && (f = a.getClientRects()).length > 1 ? f["right" == r ? f.length - 1 : 0] : a.getBoundingClientRect()
                    }
                    if (la && sa < 9 && !l && (!i || !i.left && !i.right)) {
                        var d = a.parentNode.getClientRects()[0];
                        i = d ? {
                            left: d.left,
                            right: d.left + yn(e.display),
                            top: d.top,
                            bottom: d.bottom
                        } : rl
                    }
                    for (var h = i.top - t.rect.top,
                        p = i.bottom - t.rect.top,
                        m = (h + p) / 2, g = t.view.measure.heights, v = 0; v < g.length - 1 && !(m < g[v]); v++);
                    var y = v ? g[v - 1] : 0,
                        b = g[v],
                        w = {
                            left: ("right" == u ? i.right : i.left) - t.rect.left,
                            right: ("left" == u ? i.left : i.right) - t.rect.left,
                            top: y,
                            bottom: b
                        };
                    return i.left || i.right || (w.bogus = !0),
                        e.options.singleCursorHeightPerLine || (w.rtop = h, w.rbottom = p),
                        w
                }
                function nn(e, t) {
                    if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !qe(e)) return t;
                    var n = screen.logicalXDPI / screen.deviceXDPI,
                        r = screen.logicalYDPI / screen.deviceYDPI;
                    return {
                        left: t.left * n,
                        right: t.right * n,
                        top: t.top * r,
                        bottom: t.bottom * r
                    }
                }
                function rn(e) {
                    if (e.measure && (e.measure.cache = {},
                        e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
                }
                function on(e) {
                    e.display.externalMeasure = null,
                        t(e.display.lineMeasure);
                    for (var n = 0; n < e.display.view.length; n++) rn(e.display.view[n])
                }
                function an(e) {
                    on(e),
                        e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null,
                        e.options.lineWrapping || (e.display.maxLineChanged = !0),
                        e.display.lineNumChars = null
                }
                function ln() {
                    return window.pageXOffset || (document.documentElement || document.body).scrollLeft
                }
                function sn() {
                    return window.pageYOffset || (document.documentElement || document.body).scrollTop
                }
                function un(e, t, n, r, i) {
                    if (!i && t.widgets) for (var o = 0; o < t.widgets.length; ++o) if (t.widgets[o].above) {
                        var a = Ft(t.widgets[o]);
                        n.top += a,
                            n.bottom += a
                    }
                    if ("line" == r) return n;
                    r || (r = "local");
                    var l = pe(t);
                    if ("local" == r ? l += Rt(e.display) : l -= e.display.viewOffset, "page" == r || "window" == r) {
                        var s = e.display.lineSpace.getBoundingClientRect();
                        l += s.top + ("window" == r ? 0 : sn());
                        var u = s.left + ("window" == r ? 0 : ln());
                        n.left += u,
                            n.right += u
                    }
                    return n.top += l,
                        n.bottom += l,
                        n
                }
                function cn(e, t, n) {
                    if ("div" == n) return t;
                    var r = t.left,
                        i = t.top;
                    if ("page" == n) r -= ln(),
                        i -= sn();
                    else if ("local" == n || !n) {
                        var o = e.display.sizer.getBoundingClientRect();
                        r += o.left,
                            i += o.top
                    }
                    var a = e.display.lineSpace.getBoundingClientRect();
                    return {
                        left: r - a.left,
                        top: i - a.top
                    }
                }
                function fn(e, t, n, r, i) {
                    return r || (r = T(e.doc, t.line)),
                        un(e, r, $t(e, r, t.ch, i), n)
                }
                function dn(e, t, n, r, i, o) {
                    function a(t, a) {
                        var l = Zt(e, i, t, a ? "right" : "left", o);
                        return a ? l.left = l.right : l.right = l.left,
                            un(e, r, l, n)
                    }
                    function l(e, t) {
                        var n = s[t],
                            r = n.level % 2;
                        return e == ye(n) && t && n.level < s[t - 1].level ? (n = s[--t], e = be(n) - (n.level % 2 ? 0 : 1), r = !0) : e == be(n) && t < s.length - 1 && n.level < s[t + 1].level && (n = s[++t], e = ye(n) - n.level % 2, r = !1),
                            r && e == n.to && e > n.from ? a(e - 1) : a(e, r)
                    }
                    r = r || T(e.doc, t.line),
                        i || (i = Jt(e, r));
                    var s = Me(r),
                        u = t.ch;
                    if (!s) return a(u);
                    var c = Ce(s, u),
                        f = l(u, c);
                    return null != Ba && (f.other = l(u, Ba)),
                        f
                }
                function hn(e, t) {
                    var n = 0;
                    t = B(e.doc, t),
                        e.options.lineWrapping || (n = yn(e.display) * t.ch);
                    var r = T(e.doc, t.line),
                        i = pe(r) + Rt(e.display);
                    return {
                        left: n,
                        right: n,
                        top: i,
                        bottom: i + r.height
                    }
                }
                function pn(e, t, n, r) {
                    var i = E(e, t);
                    return i.xRel = r,
                        n && (i.outside = !0),
                        i
                }
                function mn(e, t, n) {
                    var r = e.doc;
                    if (n += e.display.viewOffset, n < 0) return pn(r.first, 0, !0, -1);
                    var i = N(r, n),
                        o = r.first + r.size - 1;
                    if (i > o) return pn(r.first + r.size - 1, T(r, o).text.length, !0, 1);
                    t < 0 && (t = 0);
                    for (var a = T(r, i); ;) {
                        var l = gn(e, a, i, t, n),
                            s = ae(a),
                            u = s && s.find(0, !0);
                        if (!s || !(l.ch > u.from.ch || l.ch == u.from.ch && l.xRel > 0)) return l;
                        i = A(a = u.to.line)
                    }
                }
                function gn(e, t, n, r, i) {
                    function o(r) {
                        var i = dn(e, E(n, r), "line", t, u);
                        return l = !0,
                            a > i.bottom ? i.left - s : a < i.top ? i.left + s : (l = !1, i.left)
                    }
                    var a = i - pe(t),
                        l = !1,
                        s = 2 * e.display.wrapper.clientWidth,
                        u = Jt(e, t),
                        c = Me(t),
                        f = t.text.length,
                        d = we(t),
                        h = xe(t),
                        p = o(d),
                        m = l,
                        g = o(h),
                        v = l;
                    if (r > g) return pn(n, h, v, 1);
                    for (; ;) {
                        if (c ? h == d || h == Te(t, d, 1) : h - d <= 1) {
                            var y = r < p || r - p <= g - r ? d : h,
                                b = y == d ? m : v,
                                w = r - (y == d ? p : g);
                            if (v && !c && !/\s/.test(t.text.charAt(y)) && w > 0 && y < t.text.length && u.view.measure.heights.length > 1) {
                                var x = Zt(e, u, y, "right");
                                a <= x.bottom && a >= x.top && Math.abs(r - x.right) < w && (b = !1, y++, w = r - x.right)
                            }
                            for (; C(t.text.charAt(y));)++y;
                            var k = pn(n, y, b, w < -1 ? -1 : w > 1 ? 1 : 0);
                            return k
                        }
                        var S = Math.ceil(f / 2),
                            T = d + S;
                        if (c) {
                            T = d;
                            for (var L = 0; L < S; ++L) T = Te(t, T, 1)
                        }
                        var M = o(T);
                        M > r ? (h = T, g = M, (v = l) && (g += 1e3), f = S) : (d = T, p = M, m = l, f -= S)
                    }
                }
                function vn(e) {
                    if (null != e.cachedTextHeight) return e.cachedTextHeight;
                    if (null == Za) {
                        Za = r("pre");
                        for (var i = 0; i < 49; ++i) Za.appendChild(document.createTextNode("x")),
                            Za.appendChild(r("br"));
                        Za.appendChild(document.createTextNode("x"))
                    }
                    n(e.measure, Za);
                    var o = Za.offsetHeight / 50;
                    return o > 3 && (e.cachedTextHeight = o),
                        t(e.measure),
                        o || 1
                }
                function yn(e) {
                    if (null != e.cachedCharWidth) return e.cachedCharWidth;
                    var t = r("span", "xxxxxxxxxx"),
                        i = r("pre", [t]);
                    n(e.measure, i);
                    var o = t.getBoundingClientRect(),
                        a = (o.right - o.left) / 10;
                    return a > 2 && (e.cachedCharWidth = a),
                        a || 10
                }
                function bn(e) {
                    for (var t = e.display,
                        n = {},
                        r = {},
                        i = t.gutters.clientLeft,
                        o = t.gutters.firstChild,
                        a = 0; o; o = o.nextSibling, ++a) n[e.options.gutters[a]] = o.offsetLeft + o.clientLeft + i,
                            r[e.options.gutters[a]] = o.clientWidth;
                    return {
                        fixedPos: wn(t),
                        gutterTotalWidth: t.gutters.offsetWidth,
                        gutterLeft: n,
                        gutterWidth: r,
                        wrapperWidth: t.wrapper.clientWidth
                    }
                }
                function wn(e) {
                    return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
                }
                function xn(e) {
                    var t = vn(e.display),
                        n = e.options.lineWrapping,
                        r = n && Math.max(5, e.display.scroller.clientWidth / yn(e.display) - 3);
                    return function (i) {
                        if (de(e.doc, i)) return 0;
                        var o = 0;
                        if (i.widgets) for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
                        return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
                    }
                }
                function kn(e) {
                    var t = e.doc,
                        n = xn(e);
                    t.iter(function (e) {
                        var t = n(e);
                        t != e.height && O(e, t)
                    })
                }
                function Cn(e, t, n, r) {
                    var i = e.display;
                    if (!n && "true" == Be(t).getAttribute("cm-not-content")) return null;
                    var o, a, l = i.lineSpace.getBoundingClientRect();
                    try {
                        o = t.clientX - l.left,
                            a = t.clientY - l.top
                    } catch (e) {
                        return null
                    }
                    var s, u = mn(e, o, a);
                    if (r && 1 == u.xRel && (s = T(e.doc, u.line).text).length == u.ch) {
                        var f = c(s, s.length, e.options.tabSize) - s.length;
                        u = E(u.line, Math.max(0, Math.round((o - _t(e.display).left) / yn(e.display)) - f))
                    }
                    return u
                }
                function Sn(e, t) {
                    if (t >= e.display.viewTo) return null;
                    if (t -= e.display.viewFrom, t < 0) return null;
                    for (var n = e.display.view,
                        r = 0; r < n.length; r++) if (t -= n[r].size, t < 0) return r
                }
                function Tn(e) {
                    e.display.input.showSelection(e.display.input.prepareSelection())
                }
                function Ln(e, t) {
                    for (var n = e.doc,
                        r = {},
                        i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++) if (t !== !1 || a != n.sel.primIndex) {
                            var l = n.sel.ranges[a];
                            if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
                                var s = l.empty(); (s || e.options.showCursorWhenSelecting) && Mn(e, l.head, i),
                                    s || On(e, l, o)
                            }
                        }
                    return r
                }
                function Mn(e, t, n) {
                    var i = dn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                        o = n.appendChild(r("div", " ", "CodeMirror-cursor"));
                    if (o.style.left = i.left + "px", o.style.top = i.top + "px", o.style.height = Math.max(0, i.bottom - i.top) * e.options.cursorHeight + "px", i.other) {
                        var a = n.appendChild(r("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                        a.style.display = "",
                            a.style.left = i.other.left + "px",
                            a.style.top = i.other.top + "px",
                            a.style.height = .85 * (i.other.bottom - i.other.top) + "px"
                    }
                }
                function On(e, t, n) {
                    function i(e, t, n, i) {
                        t < 0 && (t = 0),
                            t = Math.round(t),
                            i = Math.round(i),
                            s.appendChild(r("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? f - e : n) + "px;\n                             height: " + (i - t) + "px"))
                    }
                    function o(t, n, r) {
                        function o(n, r) {
                            return fn(e, E(t, n), "div", u, r)
                        }
                        var a, s, u = T(l, t),
                            d = u.text.length;
                        return ve(Me(u), n || 0, null == r ? d : r,
                            function (e, t, l) {
                                var u, h, p, m = o(e, "left");
                                if (e == t) u = m,
                                    h = p = m.left;
                                else {
                                    if (u = o(t - 1, "right"), "rtl" == l) {
                                        var g = m;
                                        m = u,
                                            u = g
                                    }
                                    h = m.left,
                                        p = u.right
                                }
                                null == n && 0 == e && (h = c),
                                    u.top - m.top > 3 && (i(h, m.top, null, m.bottom), h = c, m.bottom < u.top && i(h, m.bottom, null, u.top)),
                                    null == r && t == d && (p = f),
                                    (!a || m.top < a.top || m.top == a.top && m.left < a.left) && (a = m),
                                    (!s || u.bottom > s.bottom || u.bottom == s.bottom && u.right > s.right) && (s = u),
                                    h < c + 1 && (h = c),
                                    i(h, u.top, p - h, u.bottom)
                            }),
                        {
                            start: a,
                            end: s
                        }
                    }
                    var a = e.display,
                        l = e.doc,
                        s = document.createDocumentFragment(),
                        u = _t(e.display),
                        c = u.left,
                        f = Math.max(a.sizerWidth, Kt(e) - a.sizer.offsetLeft) - u.right,
                        d = t.from(),
                        h = t.to();
                    if (d.line == h.line) o(d.line, d.ch, h.ch);
                    else {
                        var p = T(l, d.line),
                            m = T(l, h.line),
                            g = se(p) == se(m),
                            v = o(d.line, d.ch, g ? p.text.length + 1 : null).end,
                            y = o(h.line, g ? 0 : null, h.ch).start;
                        g && (v.top < y.top - 2 ? (i(v.right, v.top, null, v.bottom), i(c, y.top, y.left, y.bottom)) : i(v.right, v.top, y.left - v.right, v.bottom)),
                            v.bottom < y.top && i(c, v.bottom, null, y.top)
                    }
                    n.appendChild(s)
                }
                function An(e) {
                    if (e.state.focused) {
                        var t = e.display;
                        clearInterval(t.blinker);
                        var n = !0;
                        t.cursorDiv.style.visibility = "",
                            e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
                                return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
                            },
                                e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
                    }
                }
                function Nn(e) {
                    e.state.focused || (e.display.input.focus(), Hn(e))
                }
                function Wn(e) {
                    e.state.delayingBlurEvent = !0,
                        setTimeout(function () {
                            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, En(e))
                        },
                            100)
                }
                function Hn(e, t) {
                    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
                        "nocursor" != e.options.readOnly && (e.state.focused || (Ne(e, "focus", e, t), e.state.focused = !0, a(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), ua && setTimeout(function () {
                            return e.display.input.reset(!0)
                        },
                            20)), e.display.input.receivedFocus()), An(e))
                }
                function En(e, t) {
                    e.state.delayingBlurEvent || (e.state.focused && (Ne(e, "blur", e, t), e.state.focused = !1, Ta(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
                        e.state.focused || (e.display.shift = !1)
                    },
                        150))
                }
                function zn(e) {
                    var t = e.display,
                        n = t.view;
                    if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                        for (var r = wn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++) if (!n[a].hidden) {
                            e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
                            var l = n[a].alignable;
                            if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o
                        }
                        e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
                    }
                }
                function Pn(e) {
                    if (!e.options.lineNumbers) return !1;
                    var t = e.doc,
                        n = H(e.options, t.first + t.size - 1),
                        i = e.display;
                    if (n.length != i.lineNumChars) {
                        var o = i.measure.appendChild(r("div", [r("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                            a = o.firstChild.offsetWidth,
                            l = o.offsetWidth - a;
                        return i.lineGutter.style.width = "",
                            i.lineNumInnerWidth = Math.max(a, i.lineGutter.offsetWidth - l) + 1,
                            i.lineNumWidth = i.lineNumInnerWidth + l,
                            i.lineNumChars = i.lineNumInnerWidth ? n.length : -1,
                            i.lineGutter.style.width = i.lineNumWidth + "px",
                            Ar(e),
                            !0
                    }
                    return !1
                }
                function Dn(e) {
                    for (var t = e.display,
                        n = t.lineDiv.offsetTop,
                        r = 0; r < t.view.length; r++) {
                        var i = t.view[r],
                            o = void 0;
                        if (!i.hidden) {
                            if (la && sa < 8) {
                                var a = i.node.offsetTop + i.node.offsetHeight;
                                o = a - n,
                                    n = a
                            } else {
                                var l = i.node.getBoundingClientRect();
                                o = l.bottom - l.top
                            }
                            var s = i.line.height - o;
                            if (o < 2 && (o = vn(t)), (s > .001 || s < -.001) && (O(i.line, o), In(i.line), i.rest)) for (var u = 0; u < i.rest.length; u++) In(i.rest[u])
                        }
                    }
                }
                function In(e) {
                    if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight
                }
                function Fn(e, t, n) {
                    var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
                    r = Math.floor(r - Rt(e));
                    var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
                        o = N(t, r),
                        a = N(t, i);
                    if (n && n.ensure) {
                        var l = n.ensure.from.line,
                            s = n.ensure.to.line;
                        l < o ? (o = l, a = N(t, pe(T(t, l)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= a && (o = N(t, pe(T(t, s)) - e.wrapper.clientHeight), a = s)
                    }
                    return {
                        from: o,
                        to: Math.max(a, o + 1)
                    }
                }
                function Bn(e, t) {
                    Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, ia || Mr(e, {
                        top: t
                    }), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbars.setScrollTop(t), ia && Mr(e), xr(e, 100))
                }
                function Rn(e, t, n) {
                    (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, zn(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
                }
                function jn(e) {
                    var t = e.wheelDeltaX,
                        n = e.wheelDeltaY;
                    return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
                        null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta),
                    {
                        x: t,
                        y: n
                    }
                }
                function _n(e) {
                    var t = jn(e);
                    return t.x *= ol,
                        t.y *= ol,
                        t
                }
                function qn(e, t) {
                    var n = jn(t),
                        r = n.x,
                        i = n.y,
                        o = e.display,
                        a = o.scroller,
                        l = a.scrollWidth > a.clientWidth,
                        s = a.scrollHeight > a.clientHeight;
                    if (r && l || i && s) {
                        if (i && ya && ua) e: for (var u = t.target,
                            c = o.view; u != a; u = u.parentNode) for (var f = 0; f < c.length; f++) if (c[f].node == u) {
                                e.display.currentWheelTarget = u;
                                break e
                            }
                        if (r && !ia && !da && null != ol) return i && s && Bn(e, Math.max(0, Math.min(a.scrollTop + i * ol, a.scrollHeight - a.clientHeight))),
                            Rn(e, Math.max(0, Math.min(a.scrollLeft + r * ol, a.scrollWidth - a.clientWidth))),
                            (!i || i && s) && Pe(t),
                            void (o.wheelStartX = null);
                        if (i && null != ol) {
                            var d = i * ol,
                                h = e.doc.scrollTop,
                                p = h + o.wrapper.clientHeight;
                            d < 0 ? h = Math.max(0, h + d - 50) : p = Math.min(e.doc.height, p + d + 50),
                                Mr(e, {
                                    top: h,
                                    bottom: p
                                })
                        }
                        il < 20 && (null == o.wheelStartX ? (o.wheelStartX = a.scrollLeft, o.wheelStartY = a.scrollTop, o.wheelDX = r, o.wheelDY = i, setTimeout(function () {
                            if (null != o.wheelStartX) {
                                var e = a.scrollLeft - o.wheelStartX,
                                    t = a.scrollTop - o.wheelStartY,
                                    n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
                                o.wheelStartX = o.wheelStartY = null,
                                    n && (ol = (ol * il + n) / (il + 1), ++il)
                            }
                        },
                            200)) : (o.wheelDX += r, o.wheelDY += i))
                    }
                }
                function Kn(e) {
                    var t = e.display,
                        n = t.gutters.offsetWidth,
                        r = Math.round(e.doc.height + jt(e.display));
                    return {
                        clientHeight: t.scroller.clientHeight,
                        viewHeight: t.wrapper.clientHeight,
                        scrollWidth: t.scroller.scrollWidth,
                        clientWidth: t.scroller.clientWidth,
                        viewWidth: t.wrapper.clientWidth,
                        barLeft: e.options.fixedGutter ? n : 0,
                        docHeight: r,
                        scrollHeight: r + qt(e) + t.barHeight,
                        nativeBarWidth: t.nativeBarWidth,
                        gutterWidth: n
                    }
                }
                function Un(e, t, n) {
                    this.cm = n;
                    var i = this.vert = r("div", [r("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                        o = this.horiz = r("div", [r("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                    e(i),
                        e(o),
                        _a(i, "scroll",
                            function () {
                                i.clientHeight && t(i.scrollTop, "vertical")
                            }),
                        _a(o, "scroll",
                            function () {
                                o.clientWidth && t(o.scrollLeft, "horizontal")
                            }),
                        this.checkedZeroWidth = !1,
                        la && sa < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
                }
                function Vn() { }
                function Gn(e, t) {
                    t || (t = Kn(e));
                    var n = e.display.barWidth,
                        r = e.display.barHeight;
                    Xn(e, t);
                    for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) n != e.display.barWidth && e.options.lineWrapping && Dn(e),
                        Xn(e, Kn(e)),
                        n = e.display.barWidth,
                        r = e.display.barHeight
                }
                function Xn(e, t) {
                    var n = e.display,
                        r = n.scrollbars.update(t);
                    n.sizer.style.paddingRight = (n.barWidth = r.right) + "px",
                        n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px",
                        n.heightForcer.style.borderBottom = r.bottom + "px solid transparent",
                        r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "",
                        r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
                }
                function $n(e) {
                    e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && Ta(e.display.wrapper, e.display.scrollbars.addClass)),
                        e.display.scrollbars = new al[e.options.scrollbarStyle](function (t) {
                            e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                                _a(t, "mousedown",
                                    function () {
                                        e.state.focused && setTimeout(function () {
                                            return e.display.input.focus()
                                        },
                                            0)
                                    }),
                                t.setAttribute("cm-not-content", "true")
                        },
                            function (t, n) {
                                "horizontal" == n ? Rn(e, t) : Bn(e, t)
                            },
                            e),
                        e.display.scrollbars.addClass && a(e.display.wrapper, e.display.scrollbars.addClass)
                }
                function Yn(e, t) {
                    if (!We(e, "scrollCursorIntoView")) {
                        var n = e.display,
                            i = n.sizer.getBoundingClientRect(),
                            o = null;
                        if (t.top + i.top < 0 ? o = !0 : t.bottom + i.top > (window.innerHeight || document.documentElement.clientHeight) && (o = !1), null != o && !ma) {
                            var a = r("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - Rt(e.display)) + "px;\n                         height: " + (t.bottom - t.top + qt(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: 2px;");
                            e.display.lineSpace.appendChild(a),
                                a.scrollIntoView(o),
                                e.display.lineSpace.removeChild(a)
                        }
                    }
                }
                function Jn(e, t, n, r) {
                    null == r && (r = 0);
                    for (var i, o = 0; o < 5; o++) {
                        var a = !1;
                        i = dn(e, t);
                        var l = n && n != t ? dn(e, n) : i,
                            s = Qn(e, Math.min(i.left, l.left), Math.min(i.top, l.top) - r, Math.max(i.left, l.left), Math.max(i.bottom, l.bottom) + r),
                            u = e.doc.scrollTop,
                            c = e.doc.scrollLeft;
                        if (null != s.scrollTop && (Bn(e, s.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)), null != s.scrollLeft && (Rn(e, s.scrollLeft), Math.abs(e.doc.scrollLeft - c) > 1 && (a = !0)), !a) break
                    }
                    return i
                }
                function Zn(e, t, n, r, i) {
                    var o = Qn(e, t, n, r, i);
                    null != o.scrollTop && Bn(e, o.scrollTop),
                        null != o.scrollLeft && Rn(e, o.scrollLeft)
                }
                function Qn(e, t, n, r, i) {
                    var o = e.display,
                        a = vn(e.display);
                    n < 0 && (n = 0);
                    var l = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : o.scroller.scrollTop,
                        s = Ut(e),
                        u = {};
                    i - n > s && (i = n + s);
                    var c = e.doc.height + jt(o),
                        f = n < a,
                        d = i > c - a;
                    if (n < l) u.scrollTop = f ? 0 : n;
                    else if (i > l + s) {
                        var h = Math.min(n, (d ? c : i) - s);
                        h != l && (u.scrollTop = h)
                    }
                    var p = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : o.scroller.scrollLeft,
                        m = Kt(e) - (e.options.fixedGutter ? o.gutters.offsetWidth : 0),
                        g = r - t > m;
                    return g && (r = t + m),
                        t < 10 ? u.scrollLeft = 0 : t < p ? u.scrollLeft = Math.max(0, t - (g ? 0 : 10)) : r > m + p - 3 && (u.scrollLeft = r + (g ? 0 : 10) - m),
                        u
                }
                function er(e, t, n) {
                    null == t && null == n || nr(e),
                        null != t && (e.curOp.scrollLeft = (null == e.curOp.scrollLeft ? e.doc.scrollLeft : e.curOp.scrollLeft) + t),
                        null != n && (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + n)
                }
                function tr(e) {
                    nr(e);
                    var t = e.getCursor(),
                        n = t,
                        r = t;
                    e.options.lineWrapping || (n = t.ch ? E(t.line, t.ch - 1) : t, r = E(t.line, t.ch + 1)),
                        e.curOp.scrollToPos = {
                            from: n,
                            to: r,
                            margin: e.options.cursorScrollMargin,
                            isCursor: !0
                        }
                }
                function nr(e) {
                    var t = e.curOp.scrollToPos;
                    if (t) {
                        e.curOp.scrollToPos = null;
                        var n = hn(e, t.from),
                            r = hn(e, t.to),
                            i = Qn(e, Math.min(n.left, r.left), Math.min(n.top, r.top) - t.margin, Math.max(n.right, r.right), Math.max(n.bottom, r.bottom) + t.margin);
                        e.scrollTo(i.scrollLeft, i.scrollTop)
                    }
                }
                function rr(e) {
                    e.curOp = {
                        cm: e,
                        viewChanged: !1,
                        startHeight: e.doc.height,
                        forceUpdate: !1,
                        updateInput: null,
                        typing: !1,
                        changeObjs: null,
                        cursorActivityHandlers: null,
                        cursorActivityCalled: 0,
                        selectionChanged: !1,
                        updateMaxLine: !1,
                        scrollLeft: null,
                        scrollTop: null,
                        scrollToPos: null,
                        focus: !1,
                        id: ++ll
                    },
                        xt(e.curOp)
                }
                function ir(e) {
                    var t = e.curOp;
                    Ct(t,
                        function (e) {
                            for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                            or(e)
                        })
                }
                function or(e) {
                    for (var t = e.ops,
                        n = 0; n < t.length; n++) ar(t[n]);
                    for (var r = 0; r < t.length; r++) lr(t[r]);
                    for (var i = 0; i < t.length; i++) sr(t[i]);
                    for (var o = 0; o < t.length; o++) ur(t[o]);
                    for (var a = 0; a < t.length; a++) cr(t[a])
                }
                function ar(e) {
                    var t = e.cm,
                        n = t.display;
                    Sr(t),
                        e.updateMaxLine && ge(t),
                        e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping,
                        e.update = e.mustUpdate && new Cr(t, e.mustUpdate && {
                            top: e.scrollTop,
                            ensure: e.scrollToPos
                        },
                            e.forceUpdate)
                }
                function lr(e) {
                    e.updatedDisplay = e.mustUpdate && Tr(e.cm, e.update)
                }
                function sr(e) {
                    var t = e.cm,
                        n = t.display;
                    e.updatedDisplay && Dn(t),
                        e.barMeasure = Kn(t),
                        n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = $t(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + qt(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Kt(t))),
                        (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection(e.focus))
                }
                function ur(e) {
                    var t = e.cm;
                    null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Rn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
                    var n = e.focus && e.focus == o() && (!document.hasFocus || document.hasFocus());
                    e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n),
                        (e.updatedDisplay || e.startHeight != t.doc.height) && Gn(t, e.barMeasure),
                        e.updatedDisplay && Nr(t, e.barMeasure),
                        e.selectionChanged && An(t),
                        t.state.focused && e.updateInput && t.display.input.reset(e.typing),
                        n && Nn(e.cm)
                }
                function cr(e) {
                    var t = e.cm,
                        n = t.display,
                        r = t.doc;
                    if (e.updatedDisplay && Lr(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null == e.scrollTop || n.scroller.scrollTop == e.scrollTop && !e.forceScroll || (r.scrollTop = Math.max(0, Math.min(n.scroller.scrollHeight - n.scroller.clientHeight, e.scrollTop)), n.scrollbars.setScrollTop(r.scrollTop), n.scroller.scrollTop = r.scrollTop), null == e.scrollLeft || n.scroller.scrollLeft == e.scrollLeft && !e.forceScroll || (r.scrollLeft = Math.max(0, Math.min(n.scroller.scrollWidth - n.scroller.clientWidth, e.scrollLeft)), n.scrollbars.setScrollLeft(r.scrollLeft), n.scroller.scrollLeft = r.scrollLeft, zn(t)), e.scrollToPos) {
                        var i = Jn(t, B(r, e.scrollToPos.from), B(r, e.scrollToPos.to), e.scrollToPos.margin);
                        e.scrollToPos.isCursor && t.state.focused && Yn(t, i)
                    }
                    var o = e.maybeHiddenMarkers,
                        a = e.maybeUnhiddenMarkers;
                    if (o) for (var l = 0; l < o.length; ++l) o[l].lines.length || Ne(o[l], "hide");
                    if (a) for (var s = 0; s < a.length; ++s) a[s].lines.length && Ne(a[s], "unhide");
                    n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
                        e.changeObjs && Ne(t, "changes", t, e.changeObjs),
                        e.update && e.update.finish()
                }
                function fr(e, t) {
                    if (e.curOp) return t();
                    rr(e);
                    try {
                        return t()
                    } finally {
                        ir(e)
                    }
                }
                function dr(e, t) {
                    return function () {
                        if (e.curOp) return t.apply(e, arguments);
                        rr(e);
                        try {
                            return t.apply(e, arguments)
                        } finally {
                            ir(e)
                        }
                    }
                }
                function hr(e) {
                    return function () {
                        if (this.curOp) return e.apply(this, arguments);
                        rr(this);
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            ir(this)
                        }
                    }
                }
                function pr(e) {
                    return function () {
                        var t = this.cm;
                        if (!t || t.curOp) return e.apply(this, arguments);
                        rr(t);
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            ir(t)
                        }
                    }
                }
                function mr(e, t, n, r) {
                    null == t && (t = e.doc.first),
                        null == n && (n = e.doc.first + e.doc.size),
                        r || (r = 0);
                    var i = e.display;
                    if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Fa && ce(e.doc, t) < i.viewTo && vr(e);
                    else if (n <= i.viewFrom) Fa && fe(e.doc, n + r) > i.viewFrom ? vr(e) : (i.viewFrom += r, i.viewTo += r);
                    else if (t <= i.viewFrom && n >= i.viewTo) vr(e);
                    else if (t <= i.viewFrom) {
                        var o = yr(e, n, n + r, 1);
                        o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : vr(e)
                    } else if (n >= i.viewTo) {
                        var a = yr(e, t, t, -1);
                        a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : vr(e)
                    } else {
                        var l = yr(e, t, t, -1),
                            s = yr(e, n, n + r, 1);
                        l && s ? (i.view = i.view.slice(0, l.index).concat(wt(e, l.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += r) : vr(e)
                    }
                    var u = i.externalMeasured;
                    u && (n < u.lineN ? u.lineN += r : t < u.lineN + u.size && (i.externalMeasured = null))
                }
                function gr(e, t, n) {
                    e.curOp.viewChanged = !0;
                    var r = e.display,
                        i = e.display.externalMeasured;
                    if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
                        var o = r.view[Sn(e, t)];
                        if (null != o.node) {
                            var a = o.changes || (o.changes = []);
                            d(a, n) == -1 && a.push(n)
                        }
                    }
                }
                function vr(e) {
                    e.display.viewFrom = e.display.viewTo = e.doc.first,
                        e.display.view = [],
                        e.display.viewOffset = 0
                }
                function yr(e, t, n, r) {
                    var i, o = Sn(e, t),
                        a = e.display.view;
                    if (!Fa || n == e.doc.first + e.doc.size) return {
                        index: o,
                        lineN: n
                    };
                    for (var l = e.display.viewFrom,
                        s = 0; s < o; s++) l += a[s].size;
                    if (l != t) {
                        if (r > 0) {
                            if (o == a.length - 1) return null;
                            i = l + a[o].size - t,
                                o++
                        } else i = l - t;
                        t += i,
                            n += i
                    }
                    for (; ce(e.doc, n) != n;) {
                        if (o == (r < 0 ? 0 : a.length - 1)) return null;
                        n += r * a[o - (r < 0 ? 1 : 0)].size,
                            o += r
                    }
                    return {
                        index: o,
                        lineN: n
                    }
                }
                function br(e, t, n) {
                    var r = e.display,
                        i = r.view;
                    0 == i.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = wt(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = wt(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Sn(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(wt(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Sn(e, n)))),
                        r.viewTo = n
                }
                function wr(e) {
                    for (var t = e.display.view,
                        n = 0,
                        r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.hidden || i.node && !i.changes || ++n
                    }
                    return n
                }
                function xr(e, t) {
                    e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set(t, s(kr, e))
                }
                function kr(e) {
                    var t = e.doc;
                    if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.viewTo)) {
                        var n = +new Date + e.options.workTime,
                            r = $e(t.mode, et(e, t.frontier)),
                            i = [];
                        t.iter(t.frontier, Math.min(t.first + t.size, e.display.viewTo + 500),
                            function (o) {
                                if (t.frontier >= e.display.viewFrom) {
                                    var a = o.styles,
                                        l = o.text.length > e.options.maxHighlightLength,
                                        s = Ze(e, o, l ? $e(t.mode, r) : r, !0);
                                    o.styles = s.styles;
                                    var u = o.styleClasses,
                                        c = s.classes;
                                    c ? o.styleClasses = c : u && (o.styleClasses = null);
                                    for (var f = !a || a.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), d = 0; !f && d < a.length; ++d) f = a[d] != o.styles[d];
                                    f && i.push(t.frontier),
                                        o.stateAfter = l ? r : $e(t.mode, r)
                                } else o.text.length <= e.options.maxHighlightLength && tt(e, o.text, r),
                                    o.stateAfter = t.frontier % 5 == 0 ? $e(t.mode, r) : null;
                                if (++t.frontier, +new Date > n) return xr(e, e.options.workDelay),
                                    !0
                            }),
                            i.length && fr(e,
                                function () {
                                    for (var t = 0; t < i.length; t++) gr(e, i[t], "text")
                                })
                    }
                }
                function Cr(e, t, n) {
                    var r = e.display;
                    this.viewport = t,
                        this.visible = Fn(r, e.doc, t),
                        this.editorIsHidden = !r.wrapper.offsetWidth,
                        this.wrapperHeight = r.wrapper.clientHeight,
                        this.wrapperWidth = r.wrapper.clientWidth,
                        this.oldDisplayWidth = Kt(e),
                        this.force = n,
                        this.dims = bn(e),
                        this.events = []
                }
                function Sr(e) {
                    var t = e.display; !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = qt(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = qt(e) + "px", t.scrollbarsClipped = !0)
                }
                function Tr(e, n) {
                    var r = e.display,
                        i = e.doc;
                    if (n.editorIsHidden) return vr(e),
                        !1;
                    if (!n.force && n.visible.from >= r.viewFrom && n.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == wr(e)) return !1;
                    Pn(e) && (vr(e), n.dims = bn(e));
                    var a = i.first + i.size,
                        l = Math.max(n.visible.from - e.options.viewportMargin, i.first),
                        s = Math.min(a, n.visible.to + e.options.viewportMargin);
                    r.viewFrom < l && l - r.viewFrom < 20 && (l = Math.max(i.first, r.viewFrom)),
                        r.viewTo > s && r.viewTo - s < 20 && (s = Math.min(a, r.viewTo)),
                        Fa && (l = ce(e.doc, l), s = fe(e.doc, s));
                    var u = l != r.viewFrom || s != r.viewTo || r.lastWrapHeight != n.wrapperHeight || r.lastWrapWidth != n.wrapperWidth;
                    br(e, l, s),
                        r.viewOffset = pe(T(e.doc, r.viewFrom)),
                        e.display.mover.style.top = r.viewOffset + "px";
                    var c = wr(e);
                    if (!u && 0 == c && !n.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
                    var f = o();
                    return c > 4 && (r.lineDiv.style.display = "none"),
                        Or(e, r.updateLineNumbers, n.dims),
                        c > 4 && (r.lineDiv.style.display = ""),
                        r.renderedView = r.view,
                        f && o() != f && f.offsetHeight && f.focus(),
                        t(r.cursorDiv),
                        t(r.selectionDiv),
                        r.gutters.style.height = r.sizer.style.minHeight = 0,
                        u && (r.lastWrapHeight = n.wrapperHeight, r.lastWrapWidth = n.wrapperWidth, xr(e, 400)),
                        r.updateLineNumbers = null,
                        !0
                }
                function Lr(e, t) {
                    for (var n = t.viewport,
                        r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != Kt(e) || (n && null != n.top && (n = {
                            top: Math.min(e.doc.height + jt(e.display) - Ut(e), n.top)
                        }), t.visible = Fn(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && Tr(e, t); r = !1) {
                        Dn(e);
                        var i = Kn(e);
                        Tn(e),
                            Gn(e, i),
                            Nr(e, i)
                    }
                    t.signal(e, "update", e),
                        e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
                }
                function Mr(e, t) {
                    var n = new Cr(e, t);
                    if (Tr(e, n)) {
                        Dn(e),
                            Lr(e, n);
                        var r = Kn(e);
                        Tn(e),
                            Gn(e, r),
                            Nr(e, r),
                            n.finish()
                    }
                }
                function Or(e, n, r) {
                    function i(t) {
                        var n = t.nextSibling;
                        return ua && ya && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t),
                            n
                    }
                    for (var o = e.display,
                        a = e.options.lineNumbers,
                        l = o.lineDiv,
                        s = l.firstChild,
                        u = o.view,
                        c = o.viewFrom,
                        f = 0; f < u.length; f++) {
                        var h = u[f];
                        if (h.hidden);
                        else if (h.node && h.node.parentNode == l) {
                            for (; s != h.node;) s = i(s);
                            var p = a && null != n && n <= c && h.lineNumber;
                            h.changes && (d(h.changes, "gutter") > -1 && (p = !1), Lt(e, h, c, r)),
                                p && (t(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(H(e.options, c)))),
                                s = h.node.nextSibling
                        } else {
                            var m = zt(e, h, c, r);
                            l.insertBefore(m, s)
                        }
                        c += h.size
                    }
                    for (; s;) s = i(s)
                }
                function Ar(e) {
                    var t = e.display.gutters.offsetWidth;
                    e.display.sizer.style.marginLeft = t + "px"
                }
                function Nr(e, t) {
                    e.display.sizer.style.minHeight = t.docHeight + "px",
                        e.display.heightForcer.style.top = t.docHeight + "px",
                        e.display.gutters.style.height = t.docHeight + e.display.barHeight + qt(e) + "px"
                }
                function Wr(e) {
                    var n = e.display.gutters,
                        i = e.options.gutters;
                    t(n);
                    for (var o = 0; o < i.length; ++o) {
                        var a = i[o],
                            l = n.appendChild(r("div", null, "CodeMirror-gutter " + a));
                        "CodeMirror-linenumbers" == a && (e.display.lineGutter = l, l.style.width = (e.display.lineNumWidth || 1) + "px")
                    }
                    n.style.display = o ? "" : "none",
                        Ar(e)
                }
                function Hr(e) {
                    var t = d(e.gutters, "CodeMirror-linenumbers");
                    t == -1 && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
                }
                function Er(e, t) {
                    this.ranges = e,
                        this.primIndex = t
                }
                function zr(e, t) {
                    this.anchor = e,
                        this.head = t
                }
                function Pr(e, t) {
                    var n = e[t];
                    e.sort(function (e, t) {
                        return z(e.from(), t.from())
                    }),
                        t = d(e, n);
                    for (var r = 1; r < e.length; r++) {
                        var i = e[r],
                            o = e[r - 1];
                        if (z(o.to(), i.from()) >= 0) {
                            var a = I(o.from(), i.from()),
                                l = D(o.to(), i.to()),
                                s = o.empty() ? i.from() == i.head : o.from() == o.head;
                            r <= t && --t,
                                e.splice(--r, 2, new zr(s ? l : a, s ? a : l))
                        }
                    }
                    return new Er(e, t)
                }
                function Dr(e, t) {
                    return new Er([new zr(e, t || e)], 0)
                }
                function Ir(e) {
                    return e.text ? E(e.from.line + e.text.length - 1, m(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
                }
                function Fr(e, t) {
                    if (z(e, t.from) < 0) return e;
                    if (z(e, t.to) <= 0) return Ir(t);
                    var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                        r = e.ch;
                    return e.line == t.to.line && (r += Ir(t).ch - t.to.ch),
                        E(n, r)
                }
                function Br(e, t) {
                    for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
                        var i = e.sel.ranges[r];
                        n.push(new zr(Fr(i.anchor, t), Fr(i.head, t)))
                    }
                    return Pr(n, e.sel.primIndex)
                }
                function Rr(e, t, n) {
                    return e.line == t.line ? E(n.line, e.ch - t.ch + n.ch) : E(n.line + (e.line - t.line), e.ch)
                }
                function jr(e, t, n) {
                    for (var r = [], i = E(e.first, 0), o = i, a = 0; a < t.length; a++) {
                        var l = t[a],
                            s = Rr(l.from, i, o),
                            u = Rr(Ir(l), i, o);
                        if (i = l.to, o = u, "around" == n) {
                            var c = e.sel.ranges[a],
                                f = z(c.head, c.anchor) < 0;
                            r[a] = new zr(f ? u : s, f ? s : u)
                        } else r[a] = new zr(s, s)
                    }
                    return new Er(r, e.sel.primIndex)
                }
                function _r(e) {
                    e.doc.mode = Ge(e.options, e.doc.modeOption),
                        qr(e)
                }
                function qr(e) {
                    e.doc.iter(function (e) {
                        e.stateAfter && (e.stateAfter = null),
                            e.styles && (e.styles = null)
                    }),
                        e.doc.frontier = e.doc.first,
                        xr(e, 100),
                        e.state.modeGen++,
                        e.curOp && mr(e)
                }
                function Kr(e, t) {
                    return 0 == t.from.ch && 0 == t.to.ch && "" == m(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
                }
                function Ur(e, t, n, r) {
                    function i(e) {
                        return n ? n[e] : null
                    }
                    function o(e, n, i) {
                        ut(e, n, i, r),
                            St(e, "change", e, t)
                    }
                    function a(e, t) {
                        for (var n = [], o = e; o < t; ++o) n.push(new st(u[o], i(o), r));
                        return n
                    }
                    var l = t.from,
                        s = t.to,
                        u = t.text,
                        c = T(e, l.line),
                        f = T(e, s.line),
                        d = m(u),
                        h = i(u.length - 1),
                        p = s.line - l.line;
                    if (t.full) e.insert(0, a(0, u.length)),
                        e.remove(u.length, e.size - u.length);
                    else if (Kr(e, t)) {
                        var g = a(0, u.length - 1);
                        o(f, f.text, h),
                            p && e.remove(l.line, p),
                            g.length && e.insert(l.line, g)
                    } else if (c == f) if (1 == u.length) o(c, c.text.slice(0, l.ch) + d + c.text.slice(s.ch), h);
                    else {
                        var v = a(1, u.length - 1);
                        v.push(new st(d + c.text.slice(s.ch), h, r)),
                            o(c, c.text.slice(0, l.ch) + u[0], i(0)),
                            e.insert(l.line + 1, v)
                    } else if (1 == u.length) o(c, c.text.slice(0, l.ch) + u[0] + f.text.slice(s.ch), i(0)),
                        e.remove(l.line + 1, p);
                    else {
                        o(c, c.text.slice(0, l.ch) + u[0], i(0)),
                            o(f, d + f.text.slice(s.ch), h);
                        var y = a(1, u.length - 1);
                        p > 1 && e.remove(l.line + 1, p - 1),
                            e.insert(l.line + 1, y)
                    }
                    St(e, "change", e, t)
                }
                function Vr(e, t, n) {
                    function r(e, i, o) {
                        if (e.linked) for (var a = 0; a < e.linked.length; ++a) {
                            var l = e.linked[a];
                            if (l.doc != i) {
                                var s = o && l.sharedHist;
                                n && !s || (t(l.doc, s), r(l.doc, e, s))
                            }
                        }
                    }
                    r(e, null, !0)
                }
                function Gr(e, t) {
                    if (t.cm) throw new Error("This document is already in use.");
                    e.doc = t,
                        t.cm = e,
                        kn(e),
                        _r(e),
                        e.options.lineWrapping || ge(e),
                        e.options.mode = t.modeOption,
                        mr(e)
                }
                function Xr(e) {
                    this.done = [],
                        this.undone = [],
                        this.undoDepth = 1 / 0,
                        this.lastModTime = this.lastSelTime = 0,
                        this.lastOp = this.lastSelOp = null,
                        this.lastOrigin = this.lastSelOrigin = null,
                        this.generation = this.maxGeneration = e || 1
                }
                function $r(e, t) {
                    var n = {
                        from: P(t.from),
                        to: Ir(t),
                        text: L(e, t.from, t.to)
                    };
                    return ni(e, n, t.from.line, t.to.line + 1),
                        Vr(e,
                            function (e) {
                                return ni(e, n, t.from.line, t.to.line + 1)
                            },
                            !0),
                        n
                }
                function Yr(e) {
                    for (; e.length;) {
                        var t = m(e);
                        if (!t.ranges) break;
                        e.pop()
                    }
                }
                function Jr(e, t) {
                    return t ? (Yr(e.done), m(e.done)) : e.done.length && !m(e.done).ranges ? m(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), m(e.done)) : void 0
                }
                function Zr(e, t, n, r) {
                    var i = e.history;
                    i.undone.length = 0;
                    var o, a, l = +new Date;
                    if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > l - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = Jr(i, i.lastOp == r))) a = m(o.changes),
                        0 == z(t.from, t.to) && 0 == z(t.from, a.to) ? a.to = Ir(t) : o.changes.push($r(e, t));
                    else {
                        var s = m(i.done);
                        for (s && s.ranges || ti(e.sel, i.done), o = {
                            changes: [$r(e, t)],
                            generation: i.generation
                        },
                            i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(),
                                i.done[0].ranges || i.done.shift()
                    }
                    i.done.push(n),
                        i.generation = ++i.maxGeneration,
                        i.lastModTime = i.lastSelTime = l,
                        i.lastOp = i.lastSelOp = r,
                        i.lastOrigin = i.lastSelOrigin = t.origin,
                        a || Ne(e, "historyAdded")
                }
                function Qr(e, t, n, r) {
                    var i = t.charAt(0);
                    return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
                }
                function ei(e, t, n, r) {
                    var i = e.history,
                        o = r && r.origin;
                    n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || Qr(e, o, m(i.done), t)) ? i.done[i.done.length - 1] = t : ti(t, i.done),
                        i.lastSelTime = +new Date,
                        i.lastSelOrigin = o,
                        i.lastSelOp = n,
                        r && r.clearRedo !== !1 && Yr(i.undone)
                }
                function ti(e, t) {
                    var n = m(t);
                    n && n.ranges && n.equals(e) || t.push(e)
                }
                function ni(e, t, n, r) {
                    var i = t["spans_" + e.id],
                        o = 0;
                    e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r),
                        function (n) {
                            n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans),
                                ++o
                        })
                }
                function ri(e) {
                    if (!e) return null;
                    for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
                    return t ? t.length ? t : null : e
                }
                function ii(e, t) {
                    var n = t["spans_" + e.id];
                    if (!n) return null;
                    for (var r = [], i = 0; i < t.text.length; ++i) r.push(ri(n[i]));
                    return r
                }
                function oi(e, t) {
                    var n = ii(e, t),
                        r = Y(e, t);
                    if (!n) return r;
                    if (!r) return n;
                    for (var i = 0; i < n.length; ++i) {
                        var o = n[i],
                            a = r[i];
                        if (o && a) e: for (var l = 0; l < a.length; ++l) {
                            for (var s = a[l], u = 0; u < o.length; ++u) if (o[u].marker == s.marker) continue e;
                            o.push(s)
                        } else a && (n[i] = a)
                    }
                    return n
                }
                function ai(e, t, n) {
                    for (var r = [], i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.ranges) r.push(n ? Er.prototype.deepCopy.call(o) : o);
                        else {
                            var a = o.changes,
                                l = [];
                            r.push({
                                changes: l
                            });
                            for (var s = 0; s < a.length; ++s) {
                                var u = a[s],
                                    c = void 0;
                                if (l.push({
                                    from: u.from,
                                    to: u.to,
                                    text: u.text
                                }), t) for (var f in u) (c = f.match(/^spans_(\d+)$/)) && d(t, Number(c[1])) > -1 && (m(l)[f] = u[f], delete u[f])
                            }
                        }
                    }
                    return r
                }
                function li(e, t, n, r) {
                    if (e.cm && e.cm.display.shift || e.extend) {
                        var i = t.anchor;
                        if (r) {
                            var o = z(n, i) < 0;
                            o != z(r, i) < 0 ? (i = n, n = r) : o != z(n, r) < 0 && (n = r)
                        }
                        return new zr(i, n)
                    }
                    return new zr(r || n, n)
                }
                function si(e, t, n, r) {
                    pi(e, new Er([li(e, e.sel.primary(), t, n)], 0), r)
                }
                function ui(e, t, n) {
                    for (var r = [], i = 0; i < e.sel.ranges.length; i++) r[i] = li(e, e.sel.ranges[i], t[i], null);
                    var o = Pr(r, e.sel.primIndex);
                    pi(e, o, n)
                }
                function ci(e, t, n, r) {
                    var i = e.sel.ranges.slice(0);
                    i[t] = n,
                        pi(e, Pr(i, e.sel.primIndex), r)
                }
                function fi(e, t, n, r) {
                    pi(e, Dr(t, n), r)
                }
                function di(e, t, n) {
                    var r = {
                        ranges: t.ranges,
                        update: function (t) {
                            var n = this;
                            this.ranges = [];
                            for (var r = 0; r < t.length; r++) n.ranges[r] = new zr(B(e, t[r].anchor), B(e, t[r].head))
                        },
                        origin: n && n.origin
                    };
                    return Ne(e, "beforeSelectionChange", e, r),
                        e.cm && Ne(e.cm, "beforeSelectionChange", e.cm, r),
                        r.ranges != t.ranges ? Pr(r.ranges, r.ranges.length - 1) : t
                }
                function hi(e, t, n) {
                    var r = e.history.done,
                        i = m(r);
                    i && i.ranges ? (r[r.length - 1] = t, mi(e, t, n)) : pi(e, t, n)
                }
                function pi(e, t, n) {
                    mi(e, t, n),
                        ei(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
                }
                function mi(e, t, n) {
                    (Ee(e, "beforeSelectionChange") || e.cm && Ee(e.cm, "beforeSelectionChange")) && (t = di(e, t, n));
                    var r = n && n.bias || (z(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                    gi(e, yi(e, t, r, !0)),
                        n && n.scroll === !1 || !e.cm || tr(e.cm)
                }
                function gi(e, t) {
                    t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, He(e.cm)), St(e, "cursorActivity", e))
                }
                function vi(e) {
                    gi(e, yi(e, e.sel, null, !1), Wa)
                }
                function yi(e, t, n, r) {
                    for (var i, o = 0; o < t.ranges.length; o++) {
                        var a = t.ranges[o],
                            l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                            s = wi(e, a.anchor, l && l.anchor, n, r),
                            u = wi(e, a.head, l && l.head, n, r); (i || s != a.anchor || u != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new zr(s, u))
                    }
                    return i ? Pr(i, t.primIndex) : t
                }
                function bi(e, t, n, r, i) {
                    var o = T(e, t.line);
                    if (o.markedSpans) for (var a = 0; a < o.markedSpans.length; ++a) {
                        var l = o.markedSpans[a],
                            s = l.marker;
                        if ((null == l.from || (s.inclusiveLeft ? l.from <= t.ch : l.from < t.ch)) && (null == l.to || (s.inclusiveRight ? l.to >= t.ch : l.to > t.ch))) {
                            if (i && (Ne(s, "beforeCursorEnter"), s.explicitlyCleared)) {
                                if (o.markedSpans) {
                                    --a;
                                    continue
                                }
                                break
                            }
                            if (!s.atomic) continue;
                            if (n) {
                                var u = s.find(r < 0 ? 1 : -1),
                                    c = void 0;
                                if ((r < 0 ? s.inclusiveRight : s.inclusiveLeft) && (u = xi(e, u, -r, u && u.line == t.line ? o : null)), u && u.line == t.line && (c = z(u, n)) && (r < 0 ? c < 0 : c > 0)) return bi(e, u, t, r, i)
                            }
                            var f = s.find(r < 0 ? -1 : 1);
                            return (r < 0 ? s.inclusiveLeft : s.inclusiveRight) && (f = xi(e, f, r, f.line == t.line ? o : null)),
                                f ? bi(e, f, t, r, i) : null
                        }
                    }
                    return t
                }
                function wi(e, t, n, r, i) {
                    var o = r || 1,
                        a = bi(e, t, n, o, i) || !i && bi(e, t, n, o, !0) || bi(e, t, n, -o, i) || !i && bi(e, t, n, -o, !0);
                    return a ? a : (e.cantEdit = !0, E(e.first, 0))
                }
                function xi(e, t, n, r) {
                    return n < 0 && 0 == t.ch ? t.line > e.first ? B(e, E(t.line - 1)) : null : n > 0 && t.ch == (r || T(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? E(t.line + 1, 0) : null : new E(t.line, t.ch + n)
                }
                function ki(e) {
                    e.setSelection(E(e.firstLine(), 0), E(e.lastLine()), Wa)
                }
                function Ci(e, t, n) {
                    var r = {
                        canceled: !1,
                        from: t.from,
                        to: t.to,
                        text: t.text,
                        origin: t.origin,
                        cancel: function () {
                            return r.canceled = !0
                        }
                    };
                    return n && (r.update = function (t, n, i, o) {
                        t && (r.from = B(e, t)),
                            n && (r.to = B(e, n)),
                            i && (r.text = i),
                            void 0 !== o && (r.origin = o)
                    }),
                        Ne(e, "beforeChange", e, r),
                        e.cm && Ne(e.cm, "beforeChange", e.cm, r),
                        r.canceled ? null : {
                            from: r.from,
                            to: r.to,
                            text: r.text,
                            origin: r.origin
                        }
                }
                function Si(e, t, n) {
                    if (e.cm) {
                        if (!e.cm.curOp) return dr(e.cm, Si)(e, t, n);
                        if (e.cm.state.suppressEdits) return
                    }
                    if (!(Ee(e, "beforeChange") || e.cm && Ee(e.cm, "beforeChange")) || (t = Ci(e, t, !0))) {
                        var r = Ia && !n && Z(e, t.from, t.to);
                        if (r) for (var i = r.length - 1; i >= 0; --i) Ti(e, {
                            from: r[i].from,
                            to: r[i].to,
                            text: i ? [""] : t.text
                        });
                        else Ti(e, t)
                    }
                }
                function Ti(e, t) {
                    if (1 != t.text.length || "" != t.text[0] || 0 != z(t.from, t.to)) {
                        var n = Br(e, t);
                        Zr(e, t, n, e.cm ? e.cm.curOp.id : NaN),
                            Oi(e, t, n, Y(e, t));
                        var r = [];
                        Vr(e,
                            function (e, n) {
                                n || d(r, e.history) != -1 || (Ei(e.history, t), r.push(e.history)),
                                    Oi(e, t, null, Y(e, t))
                            })
                    }
                }
                function Li(e, t, n) {
                    if (!e.cm || !e.cm.state.suppressEdits || n) {
                        for (var r, i = e.history,
                            o = e.sel,
                            a = "undo" == t ? i.done : i.undone, l = "undo" == t ? i.undone : i.done, s = 0; s < a.length && (r = a[s], n ? !r.ranges || r.equals(e.sel) : r.ranges); s++);
                        if (s != a.length) {
                            for (i.lastOrigin = i.lastSelOrigin = null; r = a.pop(), r.ranges;) {
                                if (ti(r, l), n && !r.equals(e.sel)) return void pi(e, r, {
                                    clearRedo: !1
                                });
                                o = r
                            }
                            var u = [];
                            ti(o, l),
                                l.push({
                                    changes: u,
                                    generation: i.generation
                                }),
                                i.generation = r.generation || ++i.maxGeneration;
                            for (var c = Ee(e, "beforeChange") || e.cm && Ee(e.cm, "beforeChange"), f = function (n) {
                                var i = r.changes[n];
                                if (i.origin = t, c && !Ci(e, i, !1)) return a.length = 0,
                                    {};
                                u.push($r(e, i));
                                var o = n ? Br(e, i) : m(a);
                                Oi(e, i, o, oi(e, i)),
                                    !n && e.cm && e.cm.scrollIntoView({
                                        from: i.from,
                                        to: Ir(i)
                                    });
                                var l = [];
                                Vr(e,
                                    function (e, t) {
                                        t || d(l, e.history) != -1 || (Ei(e.history, i), l.push(e.history)),
                                            Oi(e, i, null, oi(e, i))
                                    })
                            },
                                h = r.changes.length - 1; h >= 0; --h) {
                                var p = f(h);
                                if (p) return p.v
                            }
                        }
                    }
                }
                function Mi(e, t) {
                    if (0 != t && (e.first += t, e.sel = new Er(g(e.sel.ranges,
                        function (e) {
                            return new zr(E(e.anchor.line + t, e.anchor.ch), E(e.head.line + t, e.head.ch))
                        }), e.sel.primIndex), e.cm)) {
                        mr(e.cm, e.first, e.first - t, t);
                        for (var n = e.cm.display,
                            r = n.viewFrom; r < n.viewTo; r++) gr(e.cm, r, "gutter")
                    }
                }
                function Oi(e, t, n, r) {
                    if (e.cm && !e.cm.curOp) return dr(e.cm, Oi)(e, t, n, r);
                    if (t.to.line < e.first) return void Mi(e, t.text.length - 1 - (t.to.line - t.from.line));
                    if (!(t.from.line > e.lastLine())) {
                        if (t.from.line < e.first) {
                            var i = t.text.length - 1 - (e.first - t.from.line);
                            Mi(e, i),
                                t = {
                                    from: E(e.first, 0),
                                    to: E(t.to.line + i, t.to.ch),
                                    text: [m(t.text)],
                                    origin: t.origin
                                }
                        }
                        var o = e.lastLine();
                        t.to.line > o && (t = {
                            from: t.from,
                            to: E(o, T(e, o).text.length),
                            text: [t.text[0]],
                            origin: t.origin
                        }),
                            t.removed = L(e, t.from, t.to),
                            n || (n = Br(e, t)),
                            e.cm ? Ai(e.cm, t, r) : Ur(e, t, r),
                            mi(e, n, Wa)
                    }
                }
                function Ai(e, t, n) {
                    var r = e.doc,
                        i = e.display,
                        o = t.from,
                        a = t.to,
                        l = !1,
                        s = o.line;
                    e.options.lineWrapping || (s = A(se(T(r, o.line))), r.iter(s, a.line + 1,
                        function (e) {
                            if (e == i.maxLine) return l = !0,
                                !0
                        })),
                        r.sel.contains(t.from, t.to) > -1 && He(e),
                        Ur(r, t, n, xn(e)),
                        e.options.lineWrapping || (r.iter(s, o.line + t.text.length,
                            function (e) {
                                var t = me(e);
                                t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, l = !1)
                            }), l && (e.curOp.updateMaxLine = !0)),
                        r.frontier = Math.min(r.frontier, o.line),
                        xr(e, 400);
                    var u = t.text.length - (a.line - o.line) - 1;
                    t.full ? mr(e) : o.line != a.line || 1 != t.text.length || Kr(e.doc, t) ? mr(e, o.line, a.line + 1, u) : gr(e, o.line, "text");
                    var c = Ee(e, "changes"),
                        f = Ee(e, "change");
                    if (f || c) {
                        var d = {
                            from: o,
                            to: a,
                            text: t.text,
                            removed: t.removed,
                            origin: t.origin
                        };
                        f && St(e, "change", e, d),
                            c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(d)
                    }
                    e.display.selForContextMenu = null
                }
                function Ni(e, t, n, r, i) {
                    if (r || (r = n), z(r, n) < 0) {
                        var o = r;
                        r = n,
                            n = o
                    }
                    "string" == typeof t && (t = e.splitLines(t)),
                        Si(e, {
                            from: n,
                            to: r,
                            text: t,
                            origin: i
                        })
                }
                function Wi(e, t, n, r) {
                    n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
                }
                function Hi(e, t, n, r) {
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            a = !0;
                        if (o.ranges) {
                            o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);
                            for (var l = 0; l < o.ranges.length; l++) Wi(o.ranges[l].anchor, t, n, r),
                                Wi(o.ranges[l].head, t, n, r)
                        } else {
                            for (var s = 0; s < o.changes.length; ++s) {
                                var u = o.changes[s];
                                if (n < u.from.line) u.from = E(u.from.line + r, u.from.ch),
                                    u.to = E(u.to.line + r, u.to.ch);
                                else if (t <= u.to.line) {
                                    a = !1;
                                    break
                                }
                            }
                            a || (e.splice(0, i + 1), i = 0)
                        }
                    }
                }
                function Ei(e, t) {
                    var n = t.from.line,
                        r = t.to.line,
                        i = t.text.length - (r - n) - 1;
                    Hi(e.done, n, r, i),
                        Hi(e.undone, n, r, i)
                }
                function zi(e, t, n, r) {
                    var i = t,
                        o = t;
                    return "number" == typeof t ? o = T(e, F(e, t)) : i = A(t),
                        null == i ? null : (r(o, i) && e.cm && gr(e.cm, i, n), o)
                }
                function Pi(e) {
                    var t = this;
                    this.lines = e,
                        this.parent = null;
                    for (var n = 0,
                        r = 0; r < e.length; ++r) e[r].parent = t,
                            n += e[r].height;
                    this.height = n
                }
                function Di(e) {
                    var t = this;
                    this.children = e;
                    for (var n = 0,
                        r = 0,
                        i = 0; i < e.length; ++i) {
                        var o = e[i];
                        n += o.chunkSize(),
                            r += o.height,
                            o.parent = t
                    }
                    this.size = n,
                        this.height = r,
                        this.parent = null
                }
                function Ii(e, t, n) {
                    var r = this;
                    if (n) for (var i in n) n.hasOwnProperty(i) && (r[i] = n[i]);
                    this.doc = e,
                        this.node = t
                }
                function Fi(e, t, n) {
                    pe(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && er(e, null, n)
                }
                function Bi(e, t, n, r) {
                    var i = new Ii(e, n, r),
                        o = e.cm;
                    return o && i.noHScroll && (o.display.alignWidgets = !0),
                        zi(e, t, "widget",
                            function (t) {
                                var n = t.widgets || (t.widgets = []);
                                if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !de(e, t)) {
                                    var r = pe(t) < e.scrollTop;
                                    O(t, t.height + Ft(i)),
                                        r && er(o, null, i.height),
                                        o.curOp.forceUpdate = !0
                                }
                                return !0
                            }),
                        i
                }
                function Ri(e, t) {
                    this.lines = [],
                        this.type = t,
                        this.doc = e,
                        this.id = ++sl
                }
                function ji(e, t, n, i, o) {
                    if (i && i.shared) return qi(e, t, n, i, o);
                    if (e.cm && !e.cm.curOp) return dr(e.cm, ji)(e, t, n, i, o);
                    var a = new Ri(e, o),
                        l = z(t, n);
                    if (i && u(i, a, !1), l > 0 || 0 == l && a.clearWhenEmpty !== !1) return a;
                    if (a.replacedWith && (a.collapsed = !0, a.widgetNode = r("span", [a.replacedWith], "CodeMirror-widget"), i.handleMouseEvents || a.widgetNode.setAttribute("cm-ignore-events", "true"), i.insertLeft && (a.widgetNode.insertLeft = !0)), a.collapsed) {
                        if (le(e, t.line, t, n, a) || t.line != n.line && le(e, n.line, t, n, a)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                        q()
                    }
                    a.addToHistory && Zr(e, {
                        from: t,
                        to: n,
                        origin: "markText"
                    },
                        e.sel, NaN);
                    var s, c = t.line,
                        f = e.cm;
                    if (e.iter(c, n.line + 1,
                        function (e) {
                            f && a.collapsed && !f.options.lineWrapping && se(e) == f.display.maxLine && (s = !0),
                                a.collapsed && c != t.line && O(e, 0),
                                G(e, new K(a, c == t.line ? t.ch : null, c == n.line ? n.ch : null)),
                                ++c
                        }), a.collapsed && e.iter(t.line, n.line + 1,
                            function (t) {
                                de(e, t) && O(t, 0)
                            }), a.clearOnEnter && _a(a, "beforeCursorEnter",
                                function () {
                                    return a.clear()
                                }), a.readOnly && (_(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), a.collapsed && (a.id = ++sl, a.atomic = !0), f) {
                        if (s && (f.curOp.updateMaxLine = !0), a.collapsed) mr(f, t.line, n.line + 1);
                        else if (a.className || a.title || a.startStyle || a.endStyle || a.css) for (var d = t.line; d <= n.line; d++) gr(f, d, "text");
                        a.atomic && vi(f.doc),
                            St(f, "markerAdded", f, a)
                    }
                    return a
                }
                function _i(e, t) {
                    var n = this;
                    this.markers = e,
                        this.primary = t;
                    for (var r = 0; r < e.length; ++r) e[r].parent = n
                }
                function qi(e, t, n, r, i) {
                    r = u(r),
                        r.shared = !1;
                    var o = [ji(e, t, n, r, i)],
                        a = o[0],
                        l = r.widgetNode;
                    return Vr(e,
                        function (e) {
                            l && (r.widgetNode = l.cloneNode(!0)),
                                o.push(ji(e, B(e, t), B(e, n), r, i));
                            for (var s = 0; s < e.linked.length; ++s) if (e.linked[s].isParent) return;
                            a = m(o)
                        }),
                        new _i(o, a)
                }
                function Ki(e) {
                    return e.findMarks(E(e.first, 0), e.clipPos(E(e.lastLine())),
                        function (e) {
                            return e.parent
                        })
                }
                function Ui(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n],
                            i = r.find(),
                            o = e.clipPos(i.from),
                            a = e.clipPos(i.to);
                        if (z(o, a)) {
                            var l = ji(e, o, a, r.primary, r.primary.type);
                            r.markers.push(l),
                                l.parent = r
                        }
                    }
                }
                function Vi(e) {
                    for (var t = function (t) {
                        var n = e[t],
                            r = [n.primary.doc];
                        Vr(n.primary.doc,
                            function (e) {
                                return r.push(e)
                            });
                        for (var i = 0; i < n.markers.length; i++) {
                            var o = n.markers[i];
                            d(r, o.doc) == -1 && (o.parent = null, n.markers.splice(i--, 1))
                        }
                    },
                        n = 0; n < e.length; n++) t(n)
                }
                function Gi(e) {
                    var t = this;
                    if (Yi(t), !We(t, e) && !Bt(t.display, e)) {
                        Pe(e),
                            la && (fl = +new Date);
                        var n = Cn(t, e, !0),
                            r = e.dataTransfer.files;
                        if (n && !t.isReadOnly()) if (r && r.length && window.FileReader && window.File) for (var i = r.length,
                            o = Array(i), a = 0, l = function (e, r) {
                                if (!t.options.allowDropFileTypes || d(t.options.allowDropFileTypes, e.type) != -1) {
                                    var l = new FileReader;
                                    l.onload = dr(t,
                                        function () {
                                            var e = l.result;
                                            if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++a == i) {
                                                n = B(t.doc, n);
                                                var s = {
                                                    from: n,
                                                    to: n,
                                                    text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                                                    origin: "paste"
                                                };
                                                Si(t.doc, s),
                                                    hi(t.doc, Dr(n, Ir(s)))
                                            }
                                        }),
                                        l.readAsText(e)
                                }
                            },
                            s = 0; s < i; ++s) l(r[s], s);
                        else {
                            if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e),
                                void setTimeout(function () {
                                    return t.display.input.focus()
                                },
                                    20);
                            try {
                                var u = e.dataTransfer.getData("Text");
                                if (u) {
                                    var c;
                                    if (t.state.draggingText && !t.state.draggingText.copy && (c = t.listSelections()), mi(t.doc, Dr(n, n)), c) for (var f = 0; f < c.length; ++f) Ni(t.doc, "", c[f].anchor, c[f].head, "drag");
                                    t.replaceSelection(u, "around", "paste"),
                                        t.display.input.focus()
                                }
                            } catch (e) { }
                        }
                    }
                }
                function Xi(e, t) {
                    if (la && (!e.state.draggingText || +new Date - fl < 100)) return void Fe(t);
                    if (!We(e, t) && !Bt(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !ha)) {
                        var n = r("img", null, null, "position: fixed; left: 0; top: 0;");
                        n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                            da && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop),
                            t.dataTransfer.setDragImage(n, 0, 0),
                            da && n.parentNode.removeChild(n)
                    }
                }
                function $i(e, t) {
                    var i = Cn(e, t);
                    if (i) {
                        var o = document.createDocumentFragment();
                        Mn(e, i, o),
                            e.display.dragCursor || (e.display.dragCursor = r("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
                            n(e.display.dragCursor, o)
                    }
                }
                function Yi(e) {
                    e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
                }
                function Ji(e) {
                    if (document.body.getElementsByClassName) for (var t = document.body.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
                        var r = t[n].CodeMirror;
                        r && e(r)
                    }
                }
                function Zi() {
                    dl || (Qi(), dl = !0)
                }
                function Qi() {
                    var e;
                    _a(window, "resize",
                        function () {
                            null == e && (e = setTimeout(function () {
                                e = null,
                                    Ji(eo)
                            },
                                100))
                        }),
                        _a(window, "blur",
                            function () {
                                return Ji(En)
                            })
                }
                function eo(e) {
                    var t = e.display;
                    t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize())
                }
                function to(e) {
                    var t = e.split(/-(?!$)/);
                    e = t[t.length - 1];
                    for (var n, r, i, o, a = 0; a < t.length - 1; a++) {
                        var l = t[a];
                        if (/^(cmd|meta|m)$/i.test(l)) o = !0;
                        else if (/^a(lt)?$/i.test(l)) n = !0;
                        else if (/^(c|ctrl|control)$/i.test(l)) r = !0;
                        else {
                            if (!/^s(hift)?$/i.test(l)) throw new Error("Unrecognized modifier name: " + l);
                            i = !0
                        }
                    }
                    return n && (e = "Alt-" + e),
                        r && (e = "Ctrl-" + e),
                        o && (e = "Cmd-" + e),
                        i && (e = "Shift-" + e),
                        e
                }
                function no(e) {
                    var t = {};
                    for (var n in e) if (e.hasOwnProperty(n)) {
                        var r = e[n];
                        if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                        if ("..." == r) {
                            delete e[n];
                            continue
                        }
                        for (var i = g(n.split(" "), to), o = 0; o < i.length; o++) {
                            var a = void 0,
                                l = void 0;
                            o == i.length - 1 ? (l = i.join(" "), a = r) : (l = i.slice(0, o + 1).join(" "), a = "...");
                            var s = t[l];
                            if (s) {
                                if (s != a) throw new Error("Inconsistent bindings for " + l)
                            } else t[l] = a
                        }
                        delete e[n]
                    }
                    for (var u in t) e[u] = t[u];
                    return e
                }
                function ro(e, t, n, r) {
                    t = ao(t);
                    var i = t.call ? t.call(e, r) : t[e];
                    if (i === !1) return "nothing";
                    if ("..." === i) return "multi";
                    if (null != i && n(i)) return "handled";
                    if (t.fallthrough) {
                        if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return ro(e, t.fallthrough, n, r);
                        for (var o = 0; o < t.fallthrough.length; o++) {
                            var a = ro(e, t.fallthrough[o], n, r);
                            if (a) return a
                        }
                    }
                }
                function io(e) {
                    var t = "string" == typeof e ? e : hl[e.keyCode];
                    return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
                }
                function oo(e, t) {
                    if (da && 34 == e.keyCode && e.char) return !1;
                    var n = hl[e.keyCode],
                        r = n;
                    return null != r && !e.altGraphKey && (e.altKey && "Alt" != n && (r = "Alt-" + r), (Ca ? e.metaKey : e.ctrlKey) && "Ctrl" != n && (r = "Ctrl-" + r), (Ca ? e.ctrlKey : e.metaKey) && "Cmd" != n && (r = "Cmd-" + r), !t && e.shiftKey && "Shift" != n && (r = "Shift-" + r), r)
                }
                function ao(e) {
                    return "string" == typeof e ? vl[e] : e
                }
                function lo(e, t) {
                    for (var n = e.doc.sel.ranges,
                        r = [], i = 0; i < n.length; i++) {
                        for (var o = t(n[i]); r.length && z(o.from, m(r).to) <= 0;) {
                            var a = r.pop();
                            if (z(a.from, o.from) < 0) {
                                o.from = a.from;
                                break
                            }
                        }
                        r.push(o)
                    }
                    fr(e,
                        function () {
                            for (var t = r.length - 1; t >= 0; t--) Ni(e.doc, "", r[t].from, r[t].to, "+delete");
                            tr(e)
                        })
                }
                function so(e, t) {
                    var n = T(e.doc, t),
                        r = se(n);
                    r != n && (t = A(r));
                    var i = Me(r),
                        o = i ? i[0].level % 2 ? xe(r) : we(r) : 0;
                    return E(t, o)
                }
                function uo(e, t) {
                    for (var n, r = T(e.doc, t); n = ae(r);) r = n.find(1, !0).line,
                        t = null;
                    var i = Me(r),
                        o = i ? i[0].level % 2 ? we(r) : xe(r) : r.text.length;
                    return E(null == t ? A(r) : t, o)
                }
                function co(e, t) {
                    var n = so(e, t.line),
                        r = T(e.doc, n.line),
                        i = Me(r);
                    if (!i || 0 == i[0].level) {
                        var o = Math.max(0, r.text.search(/\S/)),
                            a = t.line == n.line && t.ch <= o && t.ch;
                        return E(n.line, a ? 0 : o)
                    }
                    return n
                }
                function fo(e, t, n) {
                    if ("string" == typeof t && (t = wl[t], !t)) return !1;
                    e.display.input.ensurePolled();
                    var r = e.display.shift,
                        i = !1;
                    try {
                        e.isReadOnly() && (e.state.suppressEdits = !0),
                            n && (e.display.shift = !1),
                            i = t(e) != Na
                    } finally {
                        e.display.shift = r,
                            e.state.suppressEdits = !1
                    }
                    return i
                }
                function ho(e, t, n) {
                    for (var r = 0; r < e.state.keyMaps.length; r++) {
                        var i = ro(t, e.state.keyMaps[r], n, e);
                        if (i) return i
                    }
                    return e.options.extraKeys && ro(t, e.options.extraKeys, n, e) || ro(t, e.options.keyMap, n, e)
                }
                function po(e, t, n, r) {
                    var i = e.state.keySeq;
                    if (i) {
                        if (io(t)) return "handled";
                        xl.set(50,
                            function () {
                                e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
                            }),
                            t = i + " " + t
                    }
                    var o = ho(e, t, r);
                    return "multi" == o && (e.state.keySeq = t),
                        "handled" == o && St(e, "keyHandled", e, t, n),
                        "handled" != o && "multi" != o || (Pe(n), An(e)),
                        i && !o && /\'$/.test(t) ? (Pe(n), !0) : !!o
                }
                function mo(e, t) {
                    var n = oo(t, !0);
                    return !!n && (t.shiftKey && !e.state.keySeq ? po(e, "Shift-" + n, t,
                        function (t) {
                            return fo(e, t, !0)
                        }) || po(e, n, t,
                            function (t) {
                                if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return fo(e, t)
                            }) : po(e, n, t,
                                function (t) {
                                    return fo(e, t)
                                }))
                }
                function go(e, t, n) {
                    return po(e, "'" + n + "'", t,
                        function (t) {
                            return fo(e, t, !0)
                        })
                }
                function vo(e) {
                    var t = this;
                    if (t.curOp.focus = o(), !We(t, e)) {
                        la && sa < 11 && 27 == e.keyCode && (e.returnValue = !1);
                        var n = e.keyCode;
                        t.display.shift = 16 == n || e.shiftKey;
                        var r = mo(t, e);
                        da && (kl = r ? n : null, !r && 88 == n && !Va && (ya ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")),
                            18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || yo(t)
                    }
                }
                function yo(e) {
                    function t(e) {
                        18 != e.keyCode && e.altKey || (Ta(n, "CodeMirror-crosshair"), Ae(document, "keyup", t), Ae(document, "mouseover", t))
                    }
                    var n = e.display.lineDiv;
                    a(n, "CodeMirror-crosshair"),
                        _a(document, "keyup", t),
                        _a(document, "mouseover", t)
                }
                function bo(e) {
                    16 == e.keyCode && (this.doc.sel.shift = !1),
                        We(this, e)
                }
                function wo(e) {
                    var t = this;
                    if (!(Bt(t.display, e) || We(t, e) || e.ctrlKey && !e.altKey || ya && e.metaKey)) {
                        var n = e.keyCode,
                            r = e.charCode;
                        if (da && n == kl) return kl = null,
                            void Pe(e);
                        if (!da || e.which && !(e.which < 10) || !mo(t, e)) {
                            var i = String.fromCharCode(null == r ? n : r);
                            "\b" != i && (go(t, e, i) || t.display.input.onKeyPress(e))
                        }
                    }
                }
                function xo(e) {
                    var t = this,
                        n = t.display;
                    if (!(We(t, e) || n.activeTouch && n.input.supportsTouch())) {
                        if (n.input.ensurePolled(), n.shift = e.shiftKey, Bt(n, e)) return void (ua || (n.scroller.draggable = !1, setTimeout(function () {
                            return n.scroller.draggable = !0
                        },
                            100)));
                        if (!Lo(t, e)) {
                            var r = Cn(t, e);
                            switch (window.focus(), Re(e)) {
                                case 1:
                                    t.state.selectingText ? t.state.selectingText(e) : r ? ko(t, e, r) : Be(e) == n.scroller && Pe(e);
                                    break;
                                case 2:
                                    ua && (t.state.lastMiddleDown = +new Date),
                                        r && si(t.doc, r),
                                        setTimeout(function () {
                                            return n.input.focus()
                                        },
                                            20),
                                        Pe(e);
                                    break;
                                case 3:
                                    Sa ? Mo(t, e) : Wn(t)
                            }
                        }
                    }
                }
                function ko(e, t, n) {
                    la ? setTimeout(s(Nn, e), 0) : e.curOp.focus = o();
                    var r, i = +new Date;
                    bl && bl.time > i - 400 && 0 == z(bl.pos, n) ? r = "triple" : yl && yl.time > i - 400 && 0 == z(yl.pos, n) ? (r = "double", bl = {
                        time: i,
                        pos: n
                    }) : (r = "single", yl = {
                        time: i,
                        pos: n
                    });
                    var a, l = e.doc.sel,
                        u = ya ? t.metaKey : t.ctrlKey;
                    e.options.dragDrop && qa && !e.isReadOnly() && "single" == r && (a = l.contains(n)) > -1 && (z((a = l.ranges[a]).from(), n) < 0 || n.xRel > 0) && (z(a.to(), n) > 0 || n.xRel < 0) ? Co(e, t, n, u) : So(e, t, n, r, u)
                }
                function Co(e, t, n, r) {
                    var i = e.display,
                        o = +new Date,
                        a = dr(e,
                            function (l) {
                                ua && (i.scroller.draggable = !1),
                                    e.state.draggingText = !1,
                                    Ae(document, "mouseup", a),
                                    Ae(i.scroller, "drop", a),
                                    Math.abs(t.clientX - l.clientX) + Math.abs(t.clientY - l.clientY) < 10 && (Pe(l), !r && +new Date - 200 < o && si(e.doc, n), ua || la && 9 == sa ? setTimeout(function () {
                                        document.body.focus(),
                                            i.input.focus()
                                    },
                                        20) : i.input.focus())
                            });
                    ua && (i.scroller.draggable = !0),
                        e.state.draggingText = a,
                        a.copy = ya ? t.altKey : t.ctrlKey,
                        i.scroller.dragDrop && i.scroller.dragDrop(),
                        _a(document, "mouseup", a),
                        _a(i.scroller, "drop", a)
                }
                function So(e, t, n, r, i) {
                    function a(t) {
                        if (0 != z(b, t)) if (b = t, "rect" == r) {
                            for (var i = [], o = e.options.tabSize, a = c(T(f, n.line).text, n.ch, o), l = c(T(f, t.line).text, t.ch, o), s = Math.min(a, l), u = Math.max(a, l), g = Math.min(n.line, t.line), v = Math.min(e.lastLine(), Math.max(n.line, t.line)); g <= v; g++) {
                                var y = T(f, g).text,
                                    w = h(y, s, o);
                                s == u ? i.push(new zr(E(g, w), E(g, w))) : y.length > w && i.push(new zr(E(g, w), E(g, h(y, u, o))))
                            }
                            i.length || i.push(new zr(n, n)),
                                pi(f, Pr(m.ranges.slice(0, p).concat(i), p), {
                                    origin: "*mouse",
                                    scroll: !1
                                }),
                                e.scrollIntoView(t)
                        } else {
                            var x = d,
                                k = x.anchor,
                                C = t;
                            if ("single" != r) {
                                var S;
                                S = "double" == r ? e.findWordAt(t) : new zr(E(t.line, 0), B(f, E(t.line + 1, 0))),
                                    z(S.anchor, k) > 0 ? (C = S.head, k = I(x.from(), S.anchor)) : (C = S.anchor, k = D(x.to(), S.head))
                            }
                            var L = m.ranges.slice(0);
                            L[p] = new zr(B(f, k), C),
                                pi(f, Pr(L, p), Ha)
                        }
                    }
                    function l(t) {
                        var n = ++x,
                            i = Cn(e, t, !0, "rect" == r);
                        if (i) if (0 != z(i, b)) {
                            e.curOp.focus = o(),
                                a(i);
                            var s = Fn(u, f); (i.line >= s.to || i.line < s.from) && setTimeout(dr(e,
                                function () {
                                    x == n && l(t)
                                }), 150)
                        } else {
                            var c = t.clientY < w.top ? -20 : t.clientY > w.bottom ? 20 : 0;
                            c && setTimeout(dr(e,
                                function () {
                                    x == n && (u.scroller.scrollTop += c, l(t))
                                }), 50)
                        }
                    }
                    function s(t) {
                        e.state.selectingText = !1,
                            x = 1 / 0,
                            Pe(t),
                            u.input.focus(),
                            Ae(document, "mousemove", k),
                            Ae(document, "mouseup", C),
                            f.history.lastSelOrigin = null
                    }
                    var u = e.display,
                        f = e.doc;
                    Pe(t);
                    var d, p, m = f.sel,
                        g = m.ranges;
                    if (i && !t.shiftKey ? (p = f.sel.contains(n), d = p > -1 ? g[p] : new zr(n, n)) : (d = f.sel.primary(), p = f.sel.primIndex), ba ? t.shiftKey && t.metaKey : t.altKey) r = "rect",
                        i || (d = new zr(n, n)),
                        n = Cn(e, t, !0, !0),
                        p = -1;
                    else if ("double" == r) {
                        var v = e.findWordAt(n);
                        d = e.display.shift || f.extend ? li(f, d, v.anchor, v.head) : v
                    } else if ("triple" == r) {
                        var y = new zr(E(n.line, 0), B(f, E(n.line + 1, 0)));
                        d = e.display.shift || f.extend ? li(f, d, y.anchor, y.head) : y
                    } else d = li(f, d, n);
                    i ? p == -1 ? (p = g.length, pi(f, Pr(g.concat([d]), p), {
                        scroll: !1,
                        origin: "*mouse"
                    })) : g.length > 1 && g[p].empty() && "single" == r && !t.shiftKey ? (pi(f, Pr(g.slice(0, p).concat(g.slice(p + 1)), 0), {
                        scroll: !1,
                        origin: "*mouse"
                    }), m = f.sel) : ci(f, p, d, Ha) : (p = 0, pi(f, new Er([d], 0), Ha), m = f.sel);
                    var b = n,
                        w = u.wrapper.getBoundingClientRect(),
                        x = 0,
                        k = dr(e,
                            function (e) {
                                Re(e) ? l(e) : s(e)
                            }),
                        C = dr(e, s);
                    e.state.selectingText = C,
                        _a(document, "mousemove", k),
                        _a(document, "mouseup", C)
                }
                function To(e, t, n, r) {
                    var i, o;
                    try {
                        i = t.clientX,
                            o = t.clientY
                    } catch (e) {
                        return !1
                    }
                    if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                    r && Pe(t);
                    var a = e.display,
                        l = a.lineDiv.getBoundingClientRect();
                    if (o > l.bottom || !Ee(e, n)) return Ie(t);
                    o -= l.top - a.viewOffset;
                    for (var s = 0; s < e.options.gutters.length; ++s) {
                        var u = a.gutters.childNodes[s];
                        if (u && u.getBoundingClientRect().right >= i) {
                            var c = N(e.doc, o),
                                f = e.options.gutters[s];
                            return Ne(e, n, e, c, f, t),
                                Ie(t)
                        }
                    }
                }
                function Lo(e, t) {
                    return To(e, t, "gutterClick", !0)
                }
                function Mo(e, t) {
                    Bt(e.display, t) || Oo(e, t) || We(e, t, "contextmenu") || e.display.input.onContextMenu(t)
                }
                function Oo(e, t) {
                    return !!Ee(e, "gutterContextMenu") && To(e, t, "gutterContextMenu", !1)
                }
                function Ao(e) {
                    e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
                        an(e)
                }
                function No(e) {
                    function t(t, r, i, o) {
                        e.defaults[t] = r,
                            i && (n[t] = o ?
                                function (e, t, n) {
                                    n != Cl && i(e, t, n)
                                } : i)
                    }
                    var n = e.optionHandlers;
                    e.defineOption = t,
                        e.Init = Cl,
                        t("value", "",
                            function (e, t) {
                                return e.setValue(t)
                            },
                            !0),
                        t("mode", null,
                            function (e, t) {
                                e.doc.modeOption = t,
                                    _r(e)
                            },
                            !0),
                        t("indentUnit", 2, _r, !0),
                        t("indentWithTabs", !1),
                        t("smartIndent", !0),
                        t("tabSize", 4,
                            function (e) {
                                qr(e),
                                    an(e),
                                    mr(e)
                            },
                            !0),
                        t("lineSeparator", null,
                            function (e, t) {
                                if (e.doc.lineSep = t, t) {
                                    var n = [],
                                        r = e.doc.first;
                                    e.doc.iter(function (e) {
                                        for (var i = 0; ;) {
                                            var o = e.text.indexOf(t, i);
                                            if (o == -1) break;
                                            i = o + t.length,
                                                n.push(E(r, o))
                                        }
                                        r++
                                    });
                                    for (var i = n.length - 1; i >= 0; i--) Ni(e.doc, t, n[i], E(n[i].line, n[i].ch + t.length))
                                }
                            }),
                        t("specialChars", /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,
                            function (e, t, n) {
                                e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"),
                                    n != Cl && e.refresh()
                            }),
                        t("specialCharPlaceholder", ht,
                            function (e) {
                                return e.refresh()
                            },
                            !0),
                        t("electricChars", !0),
                        t("inputStyle", va ? "contenteditable" : "textarea",
                            function () {
                                throw new Error("inputStyle can not (yet) be changed in a running editor")
                            },
                            !0),
                        t("spellcheck", !1,
                            function (e, t) {
                                return e.getInputField().spellcheck = t
                            },
                            !0),
                        t("rtlMoveVisually", !wa),
                        t("wholeLineUpdateBefore", !0),
                        t("theme", "default",
                            function (e) {
                                Ao(e),
                                    Wo(e)
                            },
                            !0),
                        t("keyMap", "default",
                            function (e, t, n) {
                                var r = ao(t),
                                    i = n != Cl && ao(n);
                                i && i.detach && i.detach(e, r),
                                    r.attach && r.attach(e, i || null)
                            }),
                        t("extraKeys", null),
                        t("lineWrapping", !1, Eo, !0),
                        t("gutters", [],
                            function (e) {
                                Hr(e.options),
                                    Wo(e)
                            },
                            !0),
                        t("fixedGutter", !0,
                            function (e, t) {
                                e.display.gutters.style.left = t ? wn(e.display) + "px" : "0",
                                    e.refresh()
                            },
                            !0),
                        t("coverGutterNextToScrollbar", !1,
                            function (e) {
                                return Gn(e)
                            },
                            !0),
                        t("scrollbarStyle", "native",
                            function (e) {
                                $n(e),
                                    Gn(e),
                                    e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                                    e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
                            },
                            !0),
                        t("lineNumbers", !1,
                            function (e) {
                                Hr(e.options),
                                    Wo(e)
                            },
                            !0),
                        t("firstLineNumber", 1, Wo, !0),
                        t("lineNumberFormatter",
                            function (e) {
                                return e
                            },
                            Wo, !0),
                        t("showCursorWhenSelecting", !1, Tn, !0),
                        t("resetSelectionOnContextMenu", !0),
                        t("lineWiseCopyCut", !0),
                        t("readOnly", !1,
                            function (e, t) {
                                "nocursor" == t ? (En(e), e.display.input.blur(), e.display.disabled = !0) : e.display.disabled = !1,
                                    e.display.input.readOnlyChanged(t)
                            }),
                        t("disableInput", !1,
                            function (e, t) {
                                t || e.display.input.reset()
                            },
                            !0),
                        t("dragDrop", !0, Ho),
                        t("allowDropFileTypes", null),
                        t("cursorBlinkRate", 530),
                        t("cursorScrollMargin", 0),
                        t("cursorHeight", 1, Tn, !0),
                        t("singleCursorHeightPerLine", !0, Tn, !0),
                        t("workTime", 100),
                        t("workDelay", 100),
                        t("flattenSpans", !0, qr, !0),
                        t("addModeClass", !1, qr, !0),
                        t("pollInterval", 100),
                        t("undoDepth", 200,
                            function (e, t) {
                                return e.doc.history.undoDepth = t
                            }),
                        t("historyEventDelay", 1250),
                        t("viewportMargin", 10,
                            function (e) {
                                return e.refresh()
                            },
                            !0),
                        t("maxHighlightLength", 1e4, qr, !0),
                        t("moveInputWithCursor", !0,
                            function (e, t) {
                                t || e.display.input.resetPosition()
                            }),
                        t("tabindex", null,
                            function (e, t) {
                                return e.display.input.getField().tabIndex = t || ""
                            }),
                        t("autofocus", null)
                }
                function Wo(e) {
                    Wr(e),
                        mr(e),
                        setTimeout(function () {
                            return zn(e)
                        },
                            20)
                }
                function Ho(e, t, n) {
                    var r = n && n != Cl;
                    if (!t != !r) {
                        var i = e.display.dragFunctions,
                            o = t ? _a : Ae;
                        o(e.display.scroller, "dragstart", i.start),
                            o(e.display.scroller, "dragenter", i.enter),
                            o(e.display.scroller, "dragover", i.over),
                            o(e.display.scroller, "dragleave", i.leave),
                            o(e.display.scroller, "drop", i.drop)
                    }
                }
                function Eo(e) {
                    e.options.lineWrapping ? (a(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (Ta(e.display.wrapper, "CodeMirror-wrap"), ge(e)),
                        kn(e),
                        mr(e),
                        an(e),
                        setTimeout(function () {
                            return Gn(e)
                        },
                            100)
                }
                function zo(e, t) {
                    var n = this;
                    if (!(this instanceof zo)) return new zo(e, t);
                    this.options = t = t ? u(t) : {},
                        u(Sl, t, !1),
                        Hr(t);
                    var r = t.value;
                    "string" == typeof r && (r = new cl(r, t.mode, null, t.lineSeparator)),
                        this.doc = r;
                    var i = new zo.inputStyles[t.inputStyle](this),
                        o = this.display = new S(e, r, i);
                    o.wrapper.CodeMirror = this,
                        Wr(this),
                        Ao(this),
                        t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
                        t.autofocus && !va && o.input.focus(),
                        $n(this),
                        this.state = {
                            keyMaps: [],
                            overlays: [],
                            modeGen: 0,
                            overwrite: !1,
                            delayingBlurEvent: !1,
                            focused: !1,
                            suppressEdits: !1,
                            pasteIncoming: !1,
                            cutIncoming: !1,
                            selectingText: !1,
                            draggingText: !1,
                            highlight: new f,
                            keySeq: null,
                            specialChars: null
                        },
                        la && sa < 11 && setTimeout(function () {
                            return n.display.input.reset(!0)
                        },
                            20),
                        Po(this),
                        Zi(),
                        rr(this),
                        this.curOp.forceUpdate = !0,
                        Gr(this, r),
                        t.autofocus && !va || this.hasFocus() ? setTimeout(s(Hn, this), 20) : En(this);
                    for (var a in Tl) Tl.hasOwnProperty(a) && Tl[a](n, t[a], Cl);
                    Pn(this),
                        t.finishInit && t.finishInit(this);
                    for (var l = 0; l < Ll.length; ++l) Ll[l](n);
                    ir(this),
                        ua && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
                }
                function Po(e) {
                    function t() {
                        i.activeTouch && (o = setTimeout(function () {
                            return i.activeTouch = null
                        },
                            1e3), a = i.activeTouch, a.end = +new Date)
                    }
                    function n(e) {
                        if (1 != e.touches.length) return !1;
                        var t = e.touches[0];
                        return t.radiusX <= 1 && t.radiusY <= 1
                    }
                    function r(e, t) {
                        if (null == t.left) return !0;
                        var n = t.left - e.left,
                            r = t.top - e.top;
                        return n * n + r * r > 400
                    }
                    var i = e.display;
                    _a(i.scroller, "mousedown", dr(e, xo)),
                        la && sa < 11 ? _a(i.scroller, "dblclick", dr(e,
                            function (t) {
                                if (!We(e, t)) {
                                    var n = Cn(e, t);
                                    if (n && !Lo(e, t) && !Bt(e.display, t)) {
                                        Pe(t);
                                        var r = e.findWordAt(n);
                                        si(e.doc, r.anchor, r.head)
                                    }
                                }
                            })) : _a(i.scroller, "dblclick",
                                function (t) {
                                    return We(e, t) || Pe(t)
                                }),
                        Sa || _a(i.scroller, "contextmenu",
                            function (t) {
                                return Mo(e, t)
                            });
                    var o, a = {
                        end: 0
                    };
                    _a(i.scroller, "touchstart",
                        function (t) {
                            if (!We(e, t) && !n(t)) {
                                i.input.ensurePolled(),
                                    clearTimeout(o);
                                var r = +new Date;
                                i.activeTouch = {
                                    start: r,
                                    moved: !1,
                                    prev: r - a.end <= 300 ? a : null
                                },
                                    1 == t.touches.length && (i.activeTouch.left = t.touches[0].pageX, i.activeTouch.top = t.touches[0].pageY)
                            }
                        }),
                        _a(i.scroller, "touchmove",
                            function () {
                                i.activeTouch && (i.activeTouch.moved = !0)
                            }),
                        _a(i.scroller, "touchend",
                            function (n) {
                                var o = i.activeTouch;
                                if (o && !Bt(i, n) && null != o.left && !o.moved && new Date - o.start < 300) {
                                    var a, l = e.coordsChar(i.activeTouch, "page");
                                    a = !o.prev || r(o, o.prev) ? new zr(l, l) : !o.prev.prev || r(o, o.prev.prev) ? e.findWordAt(l) : new zr(E(l.line, 0), B(e.doc, E(l.line + 1, 0))),
                                        e.setSelection(a.anchor, a.head),
                                        e.focus(),
                                        Pe(n)
                                }
                                t()
                            }),
                        _a(i.scroller, "touchcancel", t),
                        _a(i.scroller, "scroll",
                            function () {
                                i.scroller.clientHeight && (Bn(e, i.scroller.scrollTop), Rn(e, i.scroller.scrollLeft, !0), Ne(e, "scroll", e))
                            }),
                        _a(i.scroller, "mousewheel",
                            function (t) {
                                return qn(e, t)
                            }),
                        _a(i.scroller, "DOMMouseScroll",
                            function (t) {
                                return qn(e, t)
                            }),
                        _a(i.wrapper, "scroll",
                            function () {
                                return i.wrapper.scrollTop = i.wrapper.scrollLeft = 0
                            }),
                        i.dragFunctions = {
                            enter: function (t) {
                                We(e, t) || Fe(t)
                            },
                            over: function (t) {
                                We(e, t) || ($i(e, t), Fe(t))
                            },
                            start: function (t) {
                                return Xi(e, t)
                            },
                            drop: dr(e, Gi),
                            leave: function (t) {
                                We(e, t) || Yi(e)
                            }
                        };
                    var l = i.input.getField();
                    _a(l, "keyup",
                        function (t) {
                            return bo.call(e, t)
                        }),
                        _a(l, "keydown", dr(e, vo)),
                        _a(l, "keypress", dr(e, wo)),
                        _a(l, "focus",
                            function (t) {
                                return Hn(e, t)
                            }),
                        _a(l, "blur",
                            function (t) {
                                return En(e, t)
                            })
                }
                function Do(e, t, n, r) {
                    var i, o = e.doc;
                    null == n && (n = "add"),
                        "smart" == n && (o.mode.indent ? i = et(e, t) : n = "prev");
                    var a = e.options.tabSize,
                        l = T(o, t),
                        s = c(l.text, null, a);
                    l.stateAfter && (l.stateAfter = null);
                    var u, f = l.text.match(/^\s*/)[0];
                    if (r || /\S/.test(l.text)) {
                        if ("smart" == n && (u = o.mode.indent(i, l.text.slice(f.length), l.text), u == Na || u > 150)) {
                            if (!r) return;
                            n = "prev"
                        }
                    } else u = 0,
                        n = "not";
                    "prev" == n ? u = t > o.first ? c(T(o, t - 1).text, null, a) : 0 : "add" == n ? u = s + e.options.indentUnit : "subtract" == n ? u = s - e.options.indentUnit : "number" == typeof n && (u = s + n),
                        u = Math.max(0, u);
                    var d = "",
                        h = 0;
                    if (e.options.indentWithTabs) for (var m = Math.floor(u / a); m; --m) h += a,
                        d += "\t";
                    if (h < u && (d += p(u - h)), d != f) return Ni(o, d, E(t, 0), E(t, f.length), "+input"),
                        l.stateAfter = null,
                        !0;
                    for (var g = 0; g < o.sel.ranges.length; g++) {
                        var v = o.sel.ranges[g];
                        if (v.head.line == t && v.head.ch < f.length) {
                            var y = E(t, f.length);
                            ci(o, g, new zr(y, y));
                            break
                        }
                    }
                }
                function Io(e) {
                    Ml = e
                }
                function Fo(e, t, n, r, i) {
                    var o = e.doc;
                    e.display.shift = !1,
                        r || (r = o.sel);
                    var a = e.state.pasteIncoming || "paste" == i,
                        l = Ka(t),
                        s = null;
                    if (a && r.ranges.length > 1) if (Ml && Ml.text.join("\n") == t) {
                        if (r.ranges.length % Ml.text.length == 0) {
                            s = [];
                            for (var u = 0; u < Ml.text.length; u++) s.push(o.splitLines(Ml.text[u]))
                        }
                    } else l.length == r.ranges.length && (s = g(l,
                        function (e) {
                            return [e]
                        }));
                    for (var c, f = r.ranges.length - 1; f >= 0; f--) {
                        var d = r.ranges[f],
                            h = d.from(),
                            p = d.to();
                        d.empty() && (n && n > 0 ? h = E(h.line, h.ch - n) : e.state.overwrite && !a ? p = E(p.line, Math.min(T(o, p.line).text.length, p.ch + m(l).length)) : Ml && Ml.lineWise && Ml.text.join("\n") == t && (h = p = E(h.line, 0))),
                            c = e.curOp.updateInput;
                        var v = {
                            from: h,
                            to: p,
                            text: s ? s[f % s.length] : l,
                            origin: i || (a ? "paste" : e.state.cutIncoming ? "cut" : "+input")
                        };
                        Si(e.doc, v),
                            St(e, "inputRead", e, v)
                    }
                    t && !a && Ro(e, t),
                        tr(e),
                        e.curOp.updateInput = c,
                        e.curOp.typing = !0,
                        e.state.pasteIncoming = e.state.cutIncoming = !1
                }
                function Bo(e, t) {
                    var n = e.clipboardData && e.clipboardData.getData("Text");
                    if (n) return e.preventDefault(),
                        t.isReadOnly() || t.options.disableInput || fr(t,
                            function () {
                                return Fo(t, n, 0, null, "paste")
                            }),
                        !0
                }
                function Ro(e, t) {
                    if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel,
                        r = n.ranges.length - 1; r >= 0; r--) {
                        var i = n.ranges[r];
                        if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
                            var o = e.getModeAt(i.head),
                                a = !1;
                            if (o.electricChars) {
                                for (var l = 0; l < o.electricChars.length; l++) if (t.indexOf(o.electricChars.charAt(l)) > -1) {
                                    a = Do(e, i.head.line, "smart");
                                    break
                                }
                            } else o.electricInput && o.electricInput.test(T(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Do(e, i.head.line, "smart"));
                            a && St(e, "electricInput", e, i.head.line)
                        }
                    }
                }
                function jo(e) {
                    for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
                        var i = e.doc.sel.ranges[r].head.line,
                            o = {
                                anchor: E(i, 0),
                                head: E(i + 1, 0)
                            };
                        n.push(o),
                            t.push(e.getRange(o.anchor, o.head))
                    }
                    return {
                        text: t,
                        ranges: n
                    }
                }
                function _o(e, t) {
                    e.setAttribute("autocorrect", "off"),
                        e.setAttribute("autocapitalize", "off"),
                        e.setAttribute("spellcheck", !!t)
                }
                function qo() {
                    var e = r("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                        t = r("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                    return ua ? e.style.width = "1000px" : e.setAttribute("wrap", "off"),
                        ga && (e.style.border = "1px solid black"),
                        _o(e),
                        t
                }
                function Ko(e) {
                    var t = e.optionHandlers,
                        n = e.helpers = {};
                    e.prototype = {
                        constructor: e,
                        focus: function () {
                            window.focus(),
                                this.display.input.focus()
                        },
                        setOption: function (e, n) {
                            var r = this.options,
                                i = r[e];
                            r[e] == n && "mode" != e || (r[e] = n, t.hasOwnProperty(e) && dr(this, t[e])(this, n, i))
                        },
                        getOption: function (e) {
                            return this.options[e]
                        },
                        getDoc: function () {
                            return this.doc
                        },
                        addKeyMap: function (e, t) {
                            this.state.keyMaps[t ? "push" : "unshift"](ao(e))
                        },
                        removeKeyMap: function (e) {
                            for (var t = this.state.keyMaps,
                                n = 0; n < t.length; ++n) if (t[n] == e || t[n].name == e) return t.splice(n, 1),
                                    !0
                        },
                        addOverlay: hr(function (t, n) {
                            var r = t.token ? t : e.getMode(this.options, t);
                            if (r.startState) throw new Error("Overlays may not be stateful.");
                            v(this.state.overlays, {
                                mode: r,
                                modeSpec: t,
                                opaque: n && n.opaque,
                                priority: n && n.priority || 0
                            },
                                function (e) {
                                    return e.priority
                                }),
                                this.state.modeGen++,
                                mr(this)
                        }),
                        removeOverlay: hr(function (e) {
                            for (var t = this,
                                n = this.state.overlays,
                                r = 0; r < n.length; ++r) {
                                var i = n[r].modeSpec;
                                if (i == e || "string" == typeof e && i.name == e) return n.splice(r, 1),
                                    t.state.modeGen++,
                                    void mr(t)
                            }
                        }),
                        indentLine: hr(function (e, t, n) {
                            "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"),
                                W(this.doc, e) && Do(this, e, t, n)
                        }),
                        indentSelection: hr(function (e) {
                            for (var t = this,
                                n = this.doc.sel.ranges,
                                r = -1,
                                i = 0; i < n.length; i++) {
                                var o = n[i];
                                if (o.empty()) o.head.line > r && (Do(t, o.head.line, e, !0), r = o.head.line, i == t.doc.sel.primIndex && tr(t));
                                else {
                                    var a = o.from(),
                                        l = o.to(),
                                        s = Math.max(r, a.line);
                                    r = Math.min(t.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                                    for (var u = s; u < r; ++u) Do(t, u, e);
                                    var c = t.doc.sel.ranges;
                                    0 == a.ch && n.length == c.length && c[i].from().ch > 0 && ci(t.doc, i, new zr(a, c[i].to()), Wa)
                                }
                            }
                        }),
                        getTokenAt: function (e, t) {
                            return it(this, e, t)
                        },
                        getLineTokens: function (e, t) {
                            return it(this, E(e), t, !0)
                        },
                        getTokenTypeAt: function (e) {
                            e = B(this.doc, e);
                            var t, n = Qe(this, T(this.doc, e.line)),
                                r = 0,
                                i = (n.length - 1) / 2,
                                o = e.ch;
                            if (0 == o) t = n[2];
                            else for (; ;) {
                                var a = r + i >> 1;
                                if ((a ? n[2 * a - 1] : 0) >= o) i = a;
                                else {
                                    if (!(n[2 * a + 1] < o)) {
                                        t = n[2 * a + 2];
                                        break
                                    }
                                    r = a + 1
                                }
                            }
                            var l = t ? t.indexOf("overlay ") : -1;
                            return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1)
                        },
                        getModeAt: function (t) {
                            var n = this.doc.mode;
                            return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n
                        },
                        getHelper: function (e, t) {
                            return this.getHelpers(e, t)[0]
                        },
                        getHelpers: function (e, t) {
                            var r = this,
                                i = [];
                            if (!n.hasOwnProperty(t)) return i;
                            var o = n[t],
                                a = this.getModeAt(e);
                            if ("string" == typeof a[t]) o[a[t]] && i.push(o[a[t]]);
                            else if (a[t]) for (var l = 0; l < a[t].length; l++) {
                                var s = o[a[t][l]];
                                s && i.push(s)
                            } else a.helperType && o[a.helperType] ? i.push(o[a.helperType]) : o[a.name] && i.push(o[a.name]);
                            for (var u = 0; u < o._global.length; u++) {
                                var c = o._global[u];
                                c.pred(a, r) && d(i, c.val) == -1 && i.push(c.val)
                            }
                            return i
                        },
                        getStateAfter: function (e, t) {
                            var n = this.doc;
                            return e = F(n, null == e ? n.first + n.size - 1 : e),
                                et(this, e + 1, t)
                        },
                        cursorCoords: function (e, t) {
                            var n, r = this.doc.sel.primary();
                            return n = null == e ? r.head : "object" == typeof e ? B(this.doc, e) : e ? r.from() : r.to(),
                                dn(this, n, t || "page")
                        },
                        charCoords: function (e, t) {
                            return fn(this, B(this.doc, e), t || "page")
                        },
                        coordsChar: function (e, t) {
                            return e = cn(this, e, t || "page"),
                                mn(this, e.left, e.top)
                        },
                        lineAtHeight: function (e, t) {
                            return e = cn(this, {
                                top: e,
                                left: 0
                            },
                                t || "page").top,
                                N(this.doc, e + this.display.viewOffset)
                        },
                        heightAtLine: function (e, t, n) {
                            var r, i = !1;
                            if ("number" == typeof e) {
                                var o = this.doc.first + this.doc.size - 1;
                                e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0),
                                    r = T(this.doc, e)
                            } else r = e;
                            return un(this, r, {
                                top: 0,
                                left: 0
                            },
                                t || "page", n).top + (i ? this.doc.height - pe(r) : 0)
                        },
                        defaultTextHeight: function () {
                            return vn(this.display)
                        },
                        defaultCharWidth: function () {
                            return yn(this.display)
                        },
                        getViewport: function () {
                            return {
                                from: this.display.viewFrom,
                                to: this.display.viewTo
                            }
                        },
                        addWidget: function (e, t, n, r, i) {
                            var o = this.display;
                            e = dn(this, B(this.doc, e));
                            var a = e.bottom,
                                l = e.left;
                            if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == r) a = e.top;
                            else if ("above" == r || "near" == r) {
                                var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                                    u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth); ("above" == r || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= s && (a = e.bottom),
                                        l + t.offsetWidth > u && (l = u - t.offsetWidth)
                            }
                            t.style.top = a + "px",
                                t.style.left = t.style.right = "",
                                "right" == i ? (l = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? l = 0 : "middle" == i && (l = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = l + "px"),
                                n && Zn(this, l, a, l + t.offsetWidth, a + t.offsetHeight)
                        },
                        triggerOnKeyDown: hr(vo),
                        triggerOnKeyPress: hr(wo),
                        triggerOnKeyUp: bo,
                        execCommand: function (e) {
                            if (wl.hasOwnProperty(e)) return wl[e].call(null, this)
                        },
                        triggerElectric: hr(function (e) {
                            Ro(this, e)
                        }),
                        findPosH: function (e, t, n, r) {
                            var i = this,
                                o = 1;
                            t < 0 && (o = -1, t = -t);
                            for (var a = B(this.doc, e), l = 0; l < t && (a = Uo(i.doc, a, o, n, r), !a.hitSide); ++l);
                            return a
                        },
                        moveH: hr(function (e, t) {
                            var n = this;
                            this.extendSelectionsBy(function (r) {
                                return n.display.shift || n.doc.extend || r.empty() ? Uo(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to()
                            },
                                Ea)
                        }),
                        deleteH: hr(function (e, t) {
                            var n = this.doc.sel,
                                r = this.doc;
                            n.somethingSelected() ? r.replaceSelection("", null, "+delete") : lo(this,
                                function (n) {
                                    var i = Uo(r, n.head, e, t, !1);
                                    return e < 0 ? {
                                        from: i,
                                        to: n.head
                                    } : {
                                        from: n.head,
                                        to: i
                                    }
                                })
                        }),
                        findPosV: function (e, t, n, r) {
                            var i = this,
                                o = 1,
                                a = r;
                            t < 0 && (o = -1, t = -t);
                            for (var l = B(this.doc, e), s = 0; s < t; ++s) {
                                var u = dn(i, l, "div");
                                if (null == a ? a = u.left : u.left = a, l = Vo(i, u, o, n), l.hitSide) break
                            }
                            return l
                        },
                        moveV: hr(function (e, t) {
                            var n = this,
                                r = this.doc,
                                i = [],
                                o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                            if (r.extendSelectionsBy(function (a) {
                                if (o) return e < 0 ? a.from() : a.to();
                                var l = dn(n, a.head, "div");
                                null != a.goalColumn && (l.left = a.goalColumn),
                                    i.push(l.left);
                                var s = Vo(n, l, e, t);
                                return "page" == t && a == r.sel.primary() && er(n, null, fn(n, s, "div").top - l.top),
                                    s
                            },
                                Ea), i.length) for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = i[a]
                        }),
                        findWordAt: function (e) {
                            var t = this.doc,
                                n = T(t, e.line).text,
                                r = e.ch,
                                i = e.ch;
                            if (n) {
                                var o = this.getHelper(e, "wordChars"); (e.xRel < 0 || i == n.length) && r ? --r : ++i;
                                for (var a = n.charAt(r), l = x(a, o) ?
                                    function (e) {
                                        return x(e, o)
                                    } : /\s/.test(a) ?
                                        function (e) {
                                            return /\s/.test(e)
                                        } : function (e) {
                                            return ! /\s/.test(e) && !x(e)
                                        }; r > 0 && l(n.charAt(r - 1));)--r;
                                for (; i < n.length && l(n.charAt(i));)++i
                            }
                            return new zr(E(e.line, r), E(e.line, i))
                        },
                        toggleOverwrite: function (e) {
                            null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? a(this.display.cursorDiv, "CodeMirror-overwrite") : Ta(this.display.cursorDiv, "CodeMirror-overwrite"), Ne(this, "overwriteToggle", this, this.state.overwrite))
                        },
                        hasFocus: function () {
                            return this.display.input.getField() == o()
                        },
                        isReadOnly: function () {
                            return !(!this.options.readOnly && !this.doc.cantEdit)
                        },
                        scrollTo: hr(function (e, t) {
                            null == e && null == t || nr(this),
                                null != e && (this.curOp.scrollLeft = e),
                                null != t && (this.curOp.scrollTop = t)
                        }),
                        getScrollInfo: function () {
                            var e = this.display.scroller;
                            return {
                                left: e.scrollLeft,
                                top: e.scrollTop,
                                height: e.scrollHeight - qt(this) - this.display.barHeight,
                                width: e.scrollWidth - qt(this) - this.display.barWidth,
                                clientHeight: Ut(this),
                                clientWidth: Kt(this)
                            }
                        },
                        scrollIntoView: hr(function (e, t) {
                            if (null == e ? (e = {
                                from: this.doc.sel.primary().head,
                                to: null
                            },
                                null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                                    from: E(e, 0),
                                    to: null
                                } : null == e.from && (e = {
                                    from: e,
                                    to: null
                                }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line) nr(this),
                                    this.curOp.scrollToPos = e;
                            else {
                                var n = Qn(this, Math.min(e.from.left, e.to.left), Math.min(e.from.top, e.to.top) - e.margin, Math.max(e.from.right, e.to.right), Math.max(e.from.bottom, e.to.bottom) + e.margin);
                                this.scrollTo(n.scrollLeft, n.scrollTop)
                            }
                        }),
                        setSize: hr(function (e, t) {
                            var n = this,
                                r = function (e) {
                                    return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                                };
                            null != e && (this.display.wrapper.style.width = r(e)),
                                null != t && (this.display.wrapper.style.height = r(t)),
                                this.options.lineWrapping && on(this);
                            var i = this.display.viewFrom;
                            this.doc.iter(i, this.display.viewTo,
                                function (e) {
                                    if (e.widgets) for (var t = 0; t < e.widgets.length; t++) if (e.widgets[t].noHScroll) {
                                        gr(n, i, "widget");
                                        break
                                    } ++i
                                }),
                                this.curOp.forceUpdate = !0,
                                Ne(this, "refresh", this)
                        }),
                        operation: function (e) {
                            return fr(this, e)
                        },
                        refresh: hr(function () {
                            var e = this.display.cachedTextHeight;
                            mr(this),
                                this.curOp.forceUpdate = !0,
                                an(this),
                                this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop),
                                Ar(this),
                                (null == e || Math.abs(e - vn(this.display)) > .5) && kn(this),
                                Ne(this, "refresh", this)
                        }),
                        swapDoc: hr(function (e) {
                            var t = this.doc;
                            return t.cm = null,
                                Gr(this, e),
                                an(this),
                                this.display.input.reset(),
                                this.scrollTo(e.scrollLeft, e.scrollTop),
                                this.curOp.forceScroll = !0,
                                St(this, "swapDoc", this, t),
                                t
                        }),
                        getInputField: function () {
                            return this.display.input.getField()
                        },
                        getWrapperElement: function () {
                            return this.display.wrapper
                        },
                        getScrollerElement: function () {
                            return this.display.scroller
                        },
                        getGutterElement: function () {
                            return this.display.gutters
                        }
                    },
                        ze(e),
                        e.registerHelper = function (t, r, i) {
                            n.hasOwnProperty(t) || (n[t] = e[t] = {
                                _global: []
                            }),
                                n[t][r] = i
                        },
                        e.registerGlobalHelper = function (t, r, i, o) {
                            e.registerHelper(t, r, o),
                                n[t]._global.push({
                                    pred: i,
                                    val: o
                                })
                        }
                }
                function Uo(e, t, n, r, i) {
                    function o() {
                        var t = l + n;
                        return !(t < e.first || t >= e.first + e.size) && (l = t, c = T(e, t))
                    }
                    function a(e) {
                        var t = (i ? Te : Le)(c, s, n, !0);
                        if (null == t) {
                            if (e || !o()) return !1;
                            s = i ? (n < 0 ? xe : we)(c) : n < 0 ? c.text.length : 0
                        } else s = t;
                        return !0
                    }
                    var l = t.line,
                        s = t.ch,
                        u = n,
                        c = T(e, l);
                    if ("char" == r) a();
                    else if ("column" == r) a(!0);
                    else if ("word" == r || "group" == r) for (var f = null,
                        d = "group" == r,
                        h = e.cm && e.cm.getHelper(t, "wordChars"), p = !0; !(n < 0) || a(!p); p = !1) {
                        var m = c.text.charAt(s) || "\n",
                            g = x(m, h) ? "w" : d && "\n" == m ? "n" : !d || /\s/.test(m) ? null : "p";
                        if (!d || p || g || (g = "s"), f && f != g) {
                            n < 0 && (n = 1, a());
                            break
                        }
                        if (g && (f = g), n > 0 && !a(!p)) break
                    }
                    var v = wi(e, E(l, s), t, u, !0);
                    return z(t, v) || (v.hitSide = !0),
                        v
                }
                function Vo(e, t, n, r) {
                    var i, o = e.doc,
                        a = t.left;
                    if ("page" == r) {
                        var l = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                            s = Math.max(l - .5 * vn(e.display), 3);
                        i = (n > 0 ? t.bottom : t.top) + n * s
                    } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
                    for (var u; u = mn(e, a, i), u.outside;) {
                        if (n < 0 ? i <= 0 : i >= o.height) {
                            u.hitSide = !0;
                            break
                        }
                        i += 5 * n
                    }
                    return u
                }
                function Go(e) {
                    this.cm = e,
                        this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null,
                        this.polling = new f,
                        this.composing = null,
                        this.gracePeriod = !1,
                        this.readDOMTimeout = null
                }
                function Xo(e, t) {
                    var n = Yt(e, t.line);
                    if (!n || n.hidden) return null;
                    var r = T(e.doc, t.line),
                        i = Gt(n, r, t.line),
                        o = Me(r),
                        a = "left";
                    if (o) {
                        var l = Ce(o, t.ch);
                        a = l % 2 ? "right" : "left"
                    }
                    var s = Qt(i.map, t.ch, a);
                    return s.offset = "right" == s.collapse ? s.end : s.start,
                        s
                }
                function $o(e, t) {
                    return t && (e.bad = !0),
                        e
                }
                function Yo(e, t, n, r, i) {
                    function o(e) {
                        return function (t) {
                            return t.id == e
                        }
                    }
                    function a(t) {
                        if (1 == t.nodeType) {
                            var n = t.getAttribute("cm-text");
                            if (null != n) return void (l += "" == n ? t.textContent.replace(/\u200b/g, "") : n);
                            var c, f = t.getAttribute("cm-marker");
                            if (f) {
                                var d = e.findMarks(E(r, 0), E(i + 1, 0), o(+ f));
                                return void (d.length && (c = d[0].find()) && (l += L(e.doc, c.from, c.to).join(u)))
                            }
                            if ("false" == t.getAttribute("contenteditable")) return;
                            for (var h = 0; h < t.childNodes.length; h++) a(t.childNodes[h]);
                            /^(pre|div|p)$/i.test(t.nodeName) && (s = !0)
                        } else if (3 == t.nodeType) {
                            var p = t.nodeValue;
                            if (!p) return;
                            s && (l += u, s = !1),
                                l += p
                        }
                    }
                    for (var l = "",
                        s = !1,
                        u = e.doc.lineSeparator(); a(t), t != n;) t = t.nextSibling;
                    return l
                }
                function Jo(e, t, n) {
                    var r;
                    if (t == e.display.lineDiv) {
                        if (r = e.display.lineDiv.childNodes[n], !r) return $o(e.clipPos(E(e.display.viewTo - 1)), !0);
                        t = null,
                            n = 0
                    } else for (r = t; ; r = r.parentNode) {
                        if (!r || r == e.display.lineDiv) return null;
                        if (r.parentNode && r.parentNode == e.display.lineDiv) break
                    }
                    for (var i = 0; i < e.display.view.length; i++) {
                        var o = e.display.view[i];
                        if (o.node == r) return Zo(o, t, n)
                    }
                }
                function Zo(e, t, n) {
                    function r(t, n, r) {
                        for (var i = -1; i < (f ? f.length : 0); i++) for (var o = i < 0 ? c.map : f[i], a = 0; a < o.length; a += 3) {
                            var l = o[a + 2];
                            if (l == t || l == n) {
                                var s = A(i < 0 ? e.line : e.rest[i]),
                                    u = o[a] + r;
                                return (r < 0 || l != t) && (u = o[a + (r ? 1 : 0)]),
                                    E(s, u)
                            }
                        }
                    }
                    var o = e.text.firstChild,
                        a = !1;
                    if (!t || !i(o, t)) return $o(E(A(e.line), 0), !0);
                    if (t == o && (a = !0, t = o.childNodes[n], n = 0, !t)) {
                        var l = e.rest ? m(e.rest) : e.line;
                        return $o(E(A(l), l.text.length), a)
                    }
                    var s = 3 == t.nodeType ? t : null,
                        u = t;
                    for (s || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (s = t.firstChild, n && (n = s.nodeValue.length)); u.parentNode != o;) u = u.parentNode;
                    var c = e.measure,
                        f = c.maps,
                        d = r(s, u, n);
                    if (d) return $o(d, a);
                    for (var h = u.nextSibling,
                        p = s ? s.nodeValue.length - n : 0; h; h = h.nextSibling) {
                        if (d = r(h, h.firstChild, 0)) return $o(E(d.line, d.ch - p), a);
                        p += h.textContent.length
                    }
                    for (var g = u.previousSibling,
                        v = n; g; g = g.previousSibling) {
                        if (d = r(g, g.firstChild, -1)) return $o(E(d.line, d.ch + v), a);
                        v += g.textContent.length
                    }
                }
                function Qo(e) {
                    this.cm = e,
                        this.prevInput = "",
                        this.pollingFast = !1,
                        this.polling = new f,
                        this.inaccurateSelection = !1,
                        this.hasSelection = !1,
                        this.composing = null
                }
                function ea(e, t) {
                    function n() {
                        e.value = s.getValue()
                    }
                    if (t = t ? u(t) : {},
                        t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
                        var r = o();
                        t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body
                    }
                    var i;
                    if (e.form && (_a(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
                        var a = e.form;
                        i = a.submit;
                        try {
                            var l = a.submit = function () {
                                n(),
                                    a.submit = i,
                                    a.submit(),
                                    a.submit = l
                            }
                        } catch (e) { }
                    }
                    t.finishInit = function (t) {
                        t.save = n,
                            t.getTextArea = function () {
                                return e
                            },
                            t.toTextArea = function () {
                                t.toTextArea = isNaN,
                                    n(),
                                    e.parentNode.removeChild(t.getWrapperElement()),
                                    e.style.display = "",
                                    e.form && (Ae(e.form, "submit", n), "function" == typeof e.form.submit && (e.form.submit = i))
                            }
                    },
                        e.style.display = "none";
                    var s = zo(function (t) {
                        return e.parentNode.insertBefore(t, e.nextSibling)
                    },
                        t);
                    return s
                }
                function ta(e) {
                    e.off = Ae,
                        e.on = _a,
                        e.wheelEventPixels = _n,
                        e.Doc = cl,
                        e.splitLines = Ka,
                        e.countColumn = c,
                        e.findColumn = h,
                        e.isWordChar = w,
                        e.Pass = Na,
                        e.signal = Ne,
                        e.Line = st,
                        e.changeEnd = Ir,
                        e.scrollbarModel = al,
                        e.Pos = E,
                        e.cmpPos = z,
                        e.modes = Xa,
                        e.mimeModes = $a,
                        e.resolveMode = Ve,
                        e.getMode = Ge,
                        e.modeExtensions = Ya,
                        e.extendMode = Xe,
                        e.copyState = $e,
                        e.startState = Je,
                        e.innerMode = Ye,
                        e.commands = wl,
                        e.keyMap = vl,
                        e.keyName = oo,
                        e.isModifierKey = io,
                        e.lookupKey = ro,
                        e.normalizeKeyMap = no,
                        e.StringStream = Ja,
                        e.SharedTextMarker = _i,
                        e.TextMarker = Ri,
                        e.LineWidget = Ii,
                        e.e_preventDefault = Pe,
                        e.e_stopPropagation = De,
                        e.e_stop = Fe,
                        e.addClass = a,
                        e.contains = i,
                        e.rmClass = Ta,
                        e.keyNames = hl
                }
                var na = navigator.userAgent,
                    ra = navigator.platform,
                    ia = /gecko\/\d/i.test(na),
                    oa = /MSIE \d/.test(na),
                    aa = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(na),
                    la = oa || aa,
                    sa = la && (oa ? document.documentMode || 6 : aa[1]),
                    ua = /WebKit\//.test(na),
                    ca = ua && /Qt\/\d+\.\d+/.test(na),
                    fa = /Chrome\//.test(na),
                    da = /Opera\//.test(na),
                    ha = /Apple Computer/.test(navigator.vendor),
                    pa = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(na),
                    ma = /PhantomJS/.test(na),
                    ga = /AppleWebKit/.test(na) && /Mobile\/\w+/.test(na),
                    va = ga || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(na),
                    ya = ga || /Mac/.test(ra),
                    ba = /\bCrOS\b/.test(na),
                    wa = /win/i.test(ra),
                    xa = da && na.match(/Version\/(\d*\.\d*)/);
                xa && (xa = Number(xa[1])),
                    xa && xa >= 15 && (da = !1, ua = !0);
                var ka, Ca = ya && (ca || da && (null == xa || xa < 12.11)),
                    Sa = ia || la && sa >= 9,
                    Ta = function (t, n) {
                        var r = t.className,
                            i = e(n).exec(r);
                        if (i) {
                            var o = r.slice(i.index + i[0].length);
                            t.className = r.slice(0, i.index) + (o ? i[1] + o : "")
                        }
                    };
                ka = document.createRange ?
                    function (e, t, n, r) {
                        var i = document.createRange();
                        return i.setEnd(r || e, n),
                            i.setStart(e, t),
                            i
                    } : function (e, t, n) {
                        var r = document.body.createTextRange();
                        try {
                            r.moveToElementText(e.parentNode)
                        } catch (e) {
                            return r
                        }
                        return r.collapse(!0),
                            r.moveEnd("character", n),
                            r.moveStart("character", t),
                            r
                    };
                var La = function (e) {
                    e.select()
                };
                ga ? La = function (e) {
                    e.selectionStart = 0,
                        e.selectionEnd = e.value.length
                } : la && (La = function (e) {
                    try {
                        e.select()
                    } catch (e) { }
                }),
                    f.prototype.set = function (e, t) {
                        clearTimeout(this.id),
                            this.id = setTimeout(t, e)
                    };
                var Ma, Oa, Aa = 30,
                    Na = {
                        toString: function () {
                            return "CodeMirror.Pass"
                        }
                    },
                    Wa = {
                        scroll: !1
                    },
                    Ha = {
                        origin: "*mouse"
                    },
                    Ea = {
                        origin: "+move"
                    },
                    za = [""],
                    Pa = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
                    Da = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
                    Ia = !1,
                    Fa = !1,
                    Ba = null,
                    Ra = function () {
                        function e(e) {
                            return e <= 247 ? n.charAt(e) : 1424 <= e && e <= 1524 ? "R" : 1536 <= e && e <= 1773 ? r.charAt(e - 1536) : 1774 <= e && e <= 2220 ? "r" : 8192 <= e && e <= 8203 ? "w" : 8204 == e ? "b" : "L"
                        }
                        function t(e, t, n) {
                            this.level = e,
                                this.from = t,
                                this.to = n
                        }
                        var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                            r = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",
                            i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                            o = /[stwN]/,
                            a = /[LRr]/,
                            l = /[Lb1n]/,
                            s = /[1n]/,
                            u = "L";
                        return function (n) {
                            if (!i.test(n)) return !1;
                            for (var r = n.length,
                                c = [], f = 0; f < r; ++f) c.push(e(n.charCodeAt(f)));
                            for (var d = 0,
                                h = u; d < r; ++d) {
                                var p = c[d];
                                "m" == p ? c[d] = h : h = p
                            }
                            for (var g = 0,
                                v = u; g < r; ++g) {
                                var y = c[g];
                                "1" == y && "r" == v ? c[g] = "n" : a.test(y) && (v = y, "r" == y && (c[g] = "R"))
                            }
                            for (var b = 1,
                                w = c[0]; b < r - 1; ++b) {
                                var x = c[b];
                                "+" == x && "1" == w && "1" == c[b + 1] ? c[b] = "1" : "," != x || w != c[b + 1] || "1" != w && "n" != w || (c[b] = w),
                                    w = x
                            }
                            for (var k = 0; k < r; ++k) {
                                var C = c[k];
                                if ("," == C) c[k] = "N";
                                else if ("%" == C) {
                                    var S = void 0;
                                    for (S = k + 1; S < r && "%" == c[S]; ++S);
                                    for (var T = k && "!" == c[k - 1] || S < r && "1" == c[S] ? "1" : "N", L = k; L < S; ++L) c[L] = T;
                                    k = S - 1
                                }
                            }
                            for (var M = 0,
                                O = u; M < r; ++M) {
                                var A = c[M];
                                "L" == O && "1" == A ? c[M] = "L" : a.test(A) && (O = A)
                            }
                            for (var N = 0; N < r; ++N) if (o.test(c[N])) {
                                var W = void 0;
                                for (W = N + 1; W < r && o.test(c[W]); ++W);
                                for (var H = "L" == (N ? c[N - 1] : u), E = "L" == (W < r ? c[W] : u), z = H || E ? "L" : "R", P = N; P < W; ++P) c[P] = z;
                                N = W - 1
                            }
                            for (var D, I = [], F = 0; F < r;) if (l.test(c[F])) {
                                var B = F;
                                for (++F; F < r && l.test(c[F]); ++F);
                                I.push(new t(0, B, F))
                            } else {
                                var R = F,
                                    j = I.length;
                                for (++F; F < r && "L" != c[F]; ++F);
                                for (var _ = R; _ < F;) if (s.test(c[_])) {
                                    R < _ && I.splice(j, 0, new t(1, R, _));
                                    var q = _;
                                    for (++_; _ < F && s.test(c[_]); ++_);
                                    I.splice(j, 0, new t(2, q, _)),
                                        R = _
                                } else ++_;
                                R < F && I.splice(j, 0, new t(1, R, F))
                            }
                            return 1 == I[0].level && (D = n.match(/^\s+/)) && (I[0].from = D[0].length, I.unshift(new t(0, 0, D[0].length))),
                                1 == m(I).level && (D = n.match(/\s+$/)) && (m(I).to -= D[0].length, I.push(new t(0, r - D[0].length, r))),
                                2 == I[0].level && I.unshift(new t(1, I[0].to, I[0].to)),
                                I[0].level != m(I).level && I.push(new t(I[0].level, r, r)),
                                I
                        }
                    }(),
                    ja = [],
                    _a = function (e, t, n) {
                        if (e.addEventListener) e.addEventListener(t, n, !1);
                        else if (e.attachEvent) e.attachEvent("on" + t, n);
                        else {
                            var r = e._handlers || (e._handlers = {});
                            r[t] = (r[t] || ja).concat(n)
                        }
                    },
                    qa = function () {
                        if (la && sa < 9) return !1;
                        var e = r("div");
                        return "draggable" in e || "dragDrop" in e
                    }(),
                    Ka = 3 != "\n\nb".split(/\n/).length ?
                        function (e) {
                            for (var t = 0,
                                n = [], r = e.length; t <= r;) {
                                var i = e.indexOf("\n", t);
                                i == -1 && (i = e.length);
                                var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                                    a = o.indexOf("\r");
                                a != -1 ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1)
                            }
                            return n
                        } : function (e) {
                            return e.split(/\r\n?|\n/)
                        },
                    Ua = window.getSelection ?
                        function (e) {
                            try {
                                return e.selectionStart != e.selectionEnd
                            } catch (e) {
                                return !1
                            }
                        } : function (e) {
                            var t;
                            try {
                                t = e.ownerDocument.selection.createRange()
                            } catch (e) { }
                            return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
                        },
                    Va = function () {
                        var e = r("div");
                        return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
                    }(),
                    Ga = null,
                    Xa = {},
                    $a = {},
                    Ya = {},
                    Ja = function (e, t) {
                        this.pos = this.start = 0,
                            this.string = e,
                            this.tabSize = t || 8,
                            this.lastColumnPos = this.lastColumnValue = 0,
                            this.lineStart = 0
                    };
                Ja.prototype = {
                    eol: function () {
                        return this.pos >= this.string.length
                    },
                    sol: function () {
                        return this.pos == this.lineStart
                    },
                    peek: function () {
                        return this.string.charAt(this.pos) || void 0
                    },
                    next: function () {
                        if (this.pos < this.string.length) return this.string.charAt(this.pos++);
                    },
                    eat: function (e) {
                        var t, n = this.string.charAt(this.pos);
                        if (t = "string" == typeof e ? n == e : n && (e.test ? e.test(n) : e(n))) return ++this.pos,
                            n
                    },
                    eatWhile: function (e) {
                        for (var t = this.pos; this.eat(e););
                        return this.pos > t
                    },
                    eatSpace: function () {
                        for (var e = this,
                            t = this.pos;
                            /[\s\u00a0]/.test(this.string.charAt(this.pos));)++e.pos;
                        return this.pos > t
                    },
                    skipToEnd: function () {
                        this.pos = this.string.length
                    },
                    skipTo: function (e) {
                        var t = this.string.indexOf(e, this.pos);
                        if (t > -1) return this.pos = t,
                            !0
                    },
                    backUp: function (e) {
                        this.pos -= e
                    },
                    column: function () {
                        return this.lastColumnPos < this.start && (this.lastColumnValue = c(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start),
                            this.lastColumnValue - (this.lineStart ? c(this.string, this.lineStart, this.tabSize) : 0)
                    },
                    indentation: function () {
                        return c(this.string, null, this.tabSize) - (this.lineStart ? c(this.string, this.lineStart, this.tabSize) : 0)
                    },
                    match: function (e, t, n) {
                        if ("string" != typeof e) {
                            var r = this.string.slice(this.pos).match(e);
                            return r && r.index > 0 ? null : (r && t !== !1 && (this.pos += r[0].length), r)
                        }
                        var i = function (e) {
                            return n ? e.toLowerCase() : e
                        },
                            o = this.string.substr(this.pos, e.length);
                        if (i(o) == i(e)) return t !== !1 && (this.pos += e.length),
                            !0
                    },
                    current: function () {
                        return this.string.slice(this.start, this.pos)
                    },
                    hideFirstChars: function (e, t) {
                        this.lineStart += e;
                        try {
                            return t()
                        } finally {
                            this.lineStart -= e
                        }
                    }
                },
                    ze(st),
                    st.prototype.lineNo = function () {
                        return A(this)
                    };
                var Za, Qa = {},
                    el = {},
                    tl = null,
                    nl = null,
                    rl = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },
                    il = 0,
                    ol = null;
                la ? ol = -.53 : ia ? ol = 15 : fa ? ol = -.7 : ha && (ol = -1 / 3),
                    Un.prototype = u({
                        update: function (e) {
                            var t = e.scrollWidth > e.clientWidth + 1,
                                n = e.scrollHeight > e.clientHeight + 1,
                                r = e.nativeBarWidth;
                            if (n) {
                                this.vert.style.display = "block",
                                    this.vert.style.bottom = t ? r + "px" : "0";
                                var i = e.viewHeight - (t ? r : 0);
                                this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
                            } else this.vert.style.display = "",
                                this.vert.firstChild.style.height = "0";
                            if (t) {
                                this.horiz.style.display = "block",
                                    this.horiz.style.right = n ? r + "px" : "0",
                                    this.horiz.style.left = e.barLeft + "px";
                                var o = e.viewWidth - e.barLeft - (n ? r : 0);
                                this.horiz.firstChild.style.width = e.scrollWidth - e.clientWidth + o + "px"
                            } else this.horiz.style.display = "",
                                this.horiz.firstChild.style.width = "0";
                            return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0),
                            {
                                right: n ? r : 0,
                                bottom: t ? r : 0
                            }
                        },
                        setScrollLeft: function (e) {
                            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                                this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz)
                        },
                        setScrollTop: function (e) {
                            this.vert.scrollTop != e && (this.vert.scrollTop = e),
                                this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert)
                        },
                        zeroWidthHack: function () {
                            var e = ya && !pa ? "12px" : "18px";
                            this.horiz.style.height = this.vert.style.width = e,
                                this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none",
                                this.disableHoriz = new f,
                                this.disableVert = new f
                        },
                        enableZeroWidthBar: function (e, t) {
                            function n() {
                                var r = e.getBoundingClientRect(),
                                    i = document.elementFromPoint(r.left + 1, r.bottom - 1);
                                i != e ? e.style.pointerEvents = "none" : t.set(1e3, n)
                            }
                            e.style.pointerEvents = "auto",
                                t.set(1e3, n)
                        },
                        clear: function () {
                            var e = this.horiz.parentNode;
                            e.removeChild(this.horiz),
                                e.removeChild(this.vert)
                        }
                    },
                        Un.prototype),
                    Vn.prototype = u({
                        update: function () {
                            return {
                                bottom: 0,
                                right: 0
                            }
                        },
                        setScrollLeft: function () { },
                        setScrollTop: function () { },
                        clear: function () { }
                    },
                        Vn.prototype);
                var al = {
                    native: Un,
                    null: Vn
                },
                    ll = 0;
                Cr.prototype.signal = function (e, t) {
                    Ee(e, t) && this.events.push(arguments)
                },
                    Cr.prototype.finish = function () {
                        for (var e = this,
                            t = 0; t < this.events.length; t++) Ne.apply(null, e.events[t])
                    },
                    Er.prototype = {
                        primary: function () {
                            return this.ranges[this.primIndex]
                        },
                        equals: function (e) {
                            var t = this;
                            if (e == this) return !0;
                            if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                            for (var n = 0; n < this.ranges.length; n++) {
                                var r = t.ranges[n],
                                    i = e.ranges[n];
                                if (0 != z(r.anchor, i.anchor) || 0 != z(r.head, i.head)) return !1
                            }
                            return !0
                        },
                        deepCopy: function () {
                            for (var e = this,
                                t = [], n = 0; n < this.ranges.length; n++) t[n] = new zr(P(e.ranges[n].anchor), P(e.ranges[n].head));
                            return new Er(t, this.primIndex)
                        },
                        somethingSelected: function () {
                            for (var e = this,
                                t = 0; t < this.ranges.length; t++) if (!e.ranges[t].empty()) return !0;
                            return !1
                        },
                        contains: function (e, t) {
                            var n = this;
                            t || (t = e);
                            for (var r = 0; r < this.ranges.length; r++) {
                                var i = n.ranges[r];
                                if (z(t, i.from()) >= 0 && z(e, i.to()) <= 0) return r
                            }
                            return - 1
                        }
                    },
                    zr.prototype = {
                        from: function () {
                            return I(this.anchor, this.head)
                        },
                        to: function () {
                            return D(this.anchor, this.head)
                        },
                        empty: function () {
                            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
                        }
                    },
                    Pi.prototype = {
                        chunkSize: function () {
                            return this.lines.length
                        },
                        removeInner: function (e, t) {
                            for (var n = this,
                                r = e,
                                i = e + t; r < i; ++r) {
                                var o = n.lines[r];
                                n.height -= o.height,
                                    ct(o),
                                    St(o, "delete")
                            }
                            this.lines.splice(e, t)
                        },
                        collapse: function (e) {
                            e.push.apply(e, this.lines)
                        },
                        insertInner: function (e, t, n) {
                            var r = this;
                            this.height += n,
                                this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                            for (var i = 0; i < t.length; ++i) t[i].parent = r
                        },
                        iterN: function (e, t, n) {
                            for (var r = this,
                                i = e + t; e < i; ++e) if (n(r.lines[e])) return !0
                        }
                    },
                    Di.prototype = {
                        chunkSize: function () {
                            return this.size
                        },
                        removeInner: function (e, t) {
                            var n = this;
                            this.size -= t;
                            for (var r = 0; r < this.children.length; ++r) {
                                var i = n.children[r],
                                    o = i.chunkSize();
                                if (e < o) {
                                    var a = Math.min(t, o - e),
                                        l = i.height;
                                    if (i.removeInner(e, a), n.height -= l - i.height, o == a && (n.children.splice(r--, 1), i.parent = null), 0 == (t -= a)) break;
                                    e = 0
                                } else e -= o
                            }
                            if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Pi))) {
                                var s = [];
                                this.collapse(s),
                                    this.children = [new Pi(s)],
                                    this.children[0].parent = this
                            }
                        },
                        collapse: function (e) {
                            for (var t = this,
                                n = 0; n < this.children.length; ++n) t.children[n].collapse(e)
                        },
                        insertInner: function (e, t, n) {
                            var r = this;
                            this.size += t.length,
                                this.height += n;
                            for (var i = 0; i < this.children.length; ++i) {
                                var o = r.children[i],
                                    a = o.chunkSize();
                                if (e <= a) {
                                    if (o.insertInner(e, t, n), o.lines && o.lines.length > 50) {
                                        for (var l = o.lines.length % 25 + 25,
                                            s = l; s < o.lines.length;) {
                                            var u = new Pi(o.lines.slice(s, s += 25));
                                            o.height -= u.height,
                                                r.children.splice(++i, 0, u),
                                                u.parent = r
                                        }
                                        o.lines = o.lines.slice(0, l),
                                            r.maybeSpill()
                                    }
                                    break
                                }
                                e -= a
                            }
                        },
                        maybeSpill: function () {
                            if (!(this.children.length <= 10)) {
                                var e = this;
                                do {
                                    var t = e.children.splice(e.children.length - 5, 5), n = new Di(t);
                                    if (e.parent) {
                                        e.size -= n.size,
                                            e.height -= n.height;
                                        var r = d(e.parent.children, e);
                                        e.parent.children.splice(r + 1, 0, n)
                                    } else {
                                        var i = new Di(e.children);
                                        i.parent = e,
                                            e.children = [i, n],
                                            e = i
                                    }
                                    n.parent = e.parent
                                } while (e.children.length > 10);
                                e.parent.maybeSpill()
                            }
                        },
                        iterN: function (e, t, n) {
                            for (var r = this,
                                i = 0; i < this.children.length; ++i) {
                                var o = r.children[i],
                                    a = o.chunkSize();
                                if (e < a) {
                                    var l = Math.min(t, a - e);
                                    if (o.iterN(e, l, n)) return !0;
                                    if (0 == (t -= l)) break;
                                    e = 0
                                } else e -= a
                            }
                        }
                    },
                    ze(Ii),
                    Ii.prototype.clear = function () {
                        var e = this,
                            t = this.doc.cm,
                            n = this.line.widgets,
                            r = this.line,
                            i = A(r);
                        if (null != i && n) {
                            for (var o = 0; o < n.length; ++o) n[o] == e && n.splice(o--, 1);
                            n.length || (r.widgets = null);
                            var a = Ft(this);
                            O(r, Math.max(0, r.height - a)),
                                t && fr(t,
                                    function () {
                                        Fi(t, r, -a),
                                            gr(t, i, "widget")
                                    })
                        }
                    },
                    Ii.prototype.changed = function () {
                        var e = this.height,
                            t = this.doc.cm,
                            n = this.line;
                        this.height = null;
                        var r = Ft(this) - e;
                        r && (O(n, n.height + r), t && fr(t,
                            function () {
                                t.curOp.forceUpdate = !0,
                                    Fi(t, n, r)
                            }))
                    };
                var sl = 0;
                ze(Ri),
                    Ri.prototype.clear = function () {
                        var e = this;
                        if (!this.explicitlyCleared) {
                            var t = this.doc.cm,
                                n = t && !t.curOp;
                            if (n && rr(t), Ee(this, "clear")) {
                                var r = this.find();
                                r && St(this, "clear", r.from, r.to)
                            }
                            for (var i = null,
                                o = null,
                                a = 0; a < this.lines.length; ++a) {
                                var l = e.lines[a],
                                    s = U(l.markedSpans, e);
                                t && !e.collapsed ? gr(t, A(l), "text") : t && (null != s.to && (o = A(l)), null != s.from && (i = A(l))),
                                    l.markedSpans = V(l.markedSpans, s),
                                    null == s.from && e.collapsed && !de(e.doc, l) && t && O(l, vn(t.display))
                            }
                            if (t && this.collapsed && !t.options.lineWrapping) for (var u = 0; u < this.lines.length; ++u) {
                                var c = se(e.lines[u]),
                                    f = me(c);
                                f > t.display.maxLineLength && (t.display.maxLine = c, t.display.maxLineLength = f, t.display.maxLineChanged = !0)
                            }
                            null != i && t && this.collapsed && mr(t, i, o + 1),
                                this.lines.length = 0,
                                this.explicitlyCleared = !0,
                                this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && vi(t.doc)),
                                t && St(t, "markerCleared", t, this),
                                n && ir(t),
                                this.parent && this.parent.clear()
                        }
                    },
                    Ri.prototype.find = function (e, t) {
                        var n = this;
                        null == e && "bookmark" == this.type && (e = 1);
                        for (var r, i, o = 0; o < this.lines.length; ++o) {
                            var a = n.lines[o],
                                l = U(a.markedSpans, n);
                            if (null != l.from && (r = E(t ? a : A(a), l.from), e == -1)) return r;
                            if (null != l.to && (i = E(t ? a : A(a), l.to), 1 == e)) return i
                        }
                        return r && {
                            from: r,
                            to: i
                        }
                    },
                    Ri.prototype.changed = function () {
                        var e = this.find(-1, !0),
                            t = this,
                            n = this.doc.cm;
                        e && n && fr(n,
                            function () {
                                var r = e.line,
                                    i = A(e.line),
                                    o = Yt(n, i);
                                if (o && (rn(o), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !de(t.doc, r) && null != t.height) {
                                    var a = t.height;
                                    t.height = null;
                                    var l = Ft(t) - a;
                                    l && O(r, r.height + l)
                                }
                            })
                    },
                    Ri.prototype.attachLine = function (e) {
                        if (!this.lines.length && this.doc.cm) {
                            var t = this.doc.cm.curOp;
                            t.maybeHiddenMarkers && d(t.maybeHiddenMarkers, this) != -1 || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
                        }
                        this.lines.push(e)
                    },
                    Ri.prototype.detachLine = function (e) {
                        if (this.lines.splice(d(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                            var t = this.doc.cm.curOp; (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
                        }
                    },
                    ze(_i),
                    _i.prototype.clear = function () {
                        var e = this;
                        if (!this.explicitlyCleared) {
                            this.explicitlyCleared = !0;
                            for (var t = 0; t < this.markers.length; ++t) e.markers[t].clear();
                            St(this, "clear")
                        }
                    },
                    _i.prototype.find = function (e, t) {
                        return this.primary.find(e, t)
                    };
                var ul = 0,
                    cl = function (e, t, n, r) {
                        if (!(this instanceof cl)) return new cl(e, t, n, r);
                        null == n && (n = 0),
                            Di.call(this, [new Pi([new st("", null)])]),
                            this.first = n,
                            this.scrollTop = this.scrollLeft = 0,
                            this.cantEdit = !1,
                            this.cleanGeneration = 1,
                            this.frontier = n;
                        var i = E(n, 0);
                        this.sel = Dr(i),
                            this.history = new Xr(null),
                            this.id = ++ul,
                            this.modeOption = t,
                            this.lineSep = r,
                            this.extend = !1,
                            "string" == typeof e && (e = this.splitLines(e)),
                            Ur(this, {
                                from: i,
                                to: i,
                                text: e
                            }),
                            pi(this, Dr(i), Wa)
                    };
                cl.prototype = b(Di.prototype, {
                    constructor: cl,
                    iter: function (e, t, n) {
                        n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
                    },
                    insert: function (e, t) {
                        for (var n = 0,
                            r = 0; r < t.length; ++r) n += t[r].height;
                        this.insertInner(e - this.first, t, n)
                    },
                    remove: function (e, t) {
                        this.removeInner(e - this.first, t)
                    },
                    getValue: function (e) {
                        var t = M(this, this.first, this.first + this.size);
                        return e === !1 ? t : t.join(e || this.lineSeparator())
                    },
                    setValue: pr(function (e) {
                        var t = E(this.first, 0),
                            n = this.first + this.size - 1;
                        Si(this, {
                            from: t,
                            to: E(n, T(this, n).text.length),
                            text: this.splitLines(e),
                            origin: "setValue",
                            full: !0
                        },
                            !0),
                            pi(this, Dr(t))
                    }),
                    replaceRange: function (e, t, n, r) {
                        t = B(this, t),
                            n = n ? B(this, n) : t,
                            Ni(this, e, t, n, r)
                    },
                    getRange: function (e, t, n) {
                        var r = L(this, B(this, e), B(this, t));
                        return n === !1 ? r : r.join(n || this.lineSeparator())
                    },
                    getLine: function (e) {
                        var t = this.getLineHandle(e);
                        return t && t.text
                    },
                    getLineHandle: function (e) {
                        if (W(this, e)) return T(this, e)
                    },
                    getLineNumber: function (e) {
                        return A(e)
                    },
                    getLineHandleVisualStart: function (e) {
                        return "number" == typeof e && (e = T(this, e)),
                            se(e)
                    },
                    lineCount: function () {
                        return this.size
                    },
                    firstLine: function () {
                        return this.first
                    },
                    lastLine: function () {
                        return this.first + this.size - 1
                    },
                    clipPos: function (e) {
                        return B(this, e)
                    },
                    getCursor: function (e) {
                        var t, n = this.sel.primary();
                        return t = null == e || "head" == e ? n.head : "anchor" == e ? n.anchor : "end" == e || "to" == e || e === !1 ? n.to() : n.from()
                    },
                    listSelections: function () {
                        return this.sel.ranges
                    },
                    somethingSelected: function () {
                        return this.sel.somethingSelected()
                    },
                    setCursor: pr(function (e, t, n) {
                        fi(this, B(this, "number" == typeof e ? E(e, t || 0) : e), null, n)
                    }),
                    setSelection: pr(function (e, t, n) {
                        fi(this, B(this, e), B(this, t || e), n)
                    }),
                    extendSelection: pr(function (e, t, n) {
                        si(this, B(this, e), t && B(this, t), n)
                    }),
                    extendSelections: pr(function (e, t) {
                        ui(this, j(this, e), t)
                    }),
                    extendSelectionsBy: pr(function (e, t) {
                        var n = g(this.sel.ranges, e);
                        ui(this, j(this, n), t)
                    }),
                    setSelections: pr(function (e, t, n) {
                        var r = this;
                        if (e.length) {
                            for (var i = [], o = 0; o < e.length; o++) i[o] = new zr(B(r, e[o].anchor), B(r, e[o].head));
                            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                                pi(this, Pr(i, t), n)
                        }
                    }),
                    addSelection: pr(function (e, t, n) {
                        var r = this.sel.ranges.slice(0);
                        r.push(new zr(B(this, e), B(this, t || e))),
                            pi(this, Pr(r, r.length - 1), n)
                    }),
                    getSelection: function (e) {
                        for (var t, n = this,
                            r = this.sel.ranges,
                            i = 0; i < r.length; i++) {
                            var o = L(n, r[i].from(), r[i].to());
                            t = t ? t.concat(o) : o
                        }
                        return e === !1 ? t : t.join(e || this.lineSeparator())
                    },
                    getSelections: function (e) {
                        for (var t = this,
                            n = [], r = this.sel.ranges, i = 0; i < r.length; i++) {
                            var o = L(t, r[i].from(), r[i].to());
                            e !== !1 && (o = o.join(e || t.lineSeparator())),
                                n[i] = o
                        }
                        return n
                    },
                    replaceSelection: function (e, t, n) {
                        for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
                        this.replaceSelections(r, t, n || "+input")
                    },
                    replaceSelections: pr(function (e, t, n) {
                        for (var r = this,
                            i = [], o = this.sel, a = 0; a < o.ranges.length; a++) {
                            var l = o.ranges[a];
                            i[a] = {
                                from: l.from(),
                                to: l.to(),
                                text: r.splitLines(e[a]),
                                origin: n
                            }
                        }
                        for (var s = t && "end" != t && jr(this, i, t), u = i.length - 1; u >= 0; u--) Si(r, i[u]);
                        s ? hi(this, s) : this.cm && tr(this.cm)
                    }),
                    undo: pr(function () {
                        Li(this, "undo")
                    }),
                    redo: pr(function () {
                        Li(this, "redo")
                    }),
                    undoSelection: pr(function () {
                        Li(this, "undo", !0)
                    }),
                    redoSelection: pr(function () {
                        Li(this, "redo", !0)
                    }),
                    setExtending: function (e) {
                        this.extend = e
                    },
                    getExtending: function () {
                        return this.extend
                    },
                    historySize: function () {
                        for (var e = this.history,
                            t = 0,
                            n = 0,
                            r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
                        for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
                        return {
                            undo: t,
                            redo: n
                        }
                    },
                    clearHistory: function () {
                        this.history = new Xr(this.history.maxGeneration)
                    },
                    markClean: function () {
                        this.cleanGeneration = this.changeGeneration(!0)
                    },
                    changeGeneration: function (e) {
                        return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
                            this.history.generation
                    },
                    isClean: function (e) {
                        return this.history.generation == (e || this.cleanGeneration)
                    },
                    getHistory: function () {
                        return {
                            done: ai(this.history.done),
                            undone: ai(this.history.undone)
                        }
                    },
                    setHistory: function (e) {
                        var t = this.history = new Xr(this.history.maxGeneration);
                        t.done = ai(e.done.slice(0), null, !0),
                            t.undone = ai(e.undone.slice(0), null, !0)
                    },
                    setGutterMarker: pr(function (e, t, n) {
                        return zi(this, e, "gutter",
                            function (e) {
                                var r = e.gutterMarkers || (e.gutterMarkers = {});
                                return r[t] = n,
                                    !n && k(r) && (e.gutterMarkers = null),
                                    !0
                            })
                    }),
                    clearGutter: pr(function (e) {
                        var t = this,
                            n = this.first;
                        this.iter(function (r) {
                            r.gutterMarkers && r.gutterMarkers[e] && zi(t, r, "gutter",
                                function () {
                                    return r.gutterMarkers[e] = null,
                                        k(r.gutterMarkers) && (r.gutterMarkers = null),
                                        !0
                                }),
                                ++n
                        })
                    }),
                    lineInfo: function (e) {
                        var t;
                        if ("number" == typeof e) {
                            if (!W(this, e)) return null;
                            if (t = e, e = T(this, e), !e) return null
                        } else if (t = A(e), null == t) return null;
                        return {
                            line: t,
                            handle: e,
                            text: e.text,
                            gutterMarkers: e.gutterMarkers,
                            textClass: e.textClass,
                            bgClass: e.bgClass,
                            wrapClass: e.wrapClass,
                            widgets: e.widgets
                        }
                    },
                    addLineClass: pr(function (t, n, r) {
                        return zi(this, t, "gutter" == n ? "gutter" : "class",
                            function (t) {
                                var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass";
                                if (t[i]) {
                                    if (e(r).test(t[i])) return !1;
                                    t[i] += " " + r
                                } else t[i] = r;
                                return !0
                            })
                    }),
                    removeLineClass: pr(function (t, n, r) {
                        return zi(this, t, "gutter" == n ? "gutter" : "class",
                            function (t) {
                                var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass",
                                    o = t[i];
                                if (!o) return !1;
                                if (null == r) t[i] = null;
                                else {
                                    var a = o.match(e(r));
                                    if (!a) return !1;
                                    var l = a.index + a[0].length;
                                    t[i] = o.slice(0, a.index) + (a.index && l != o.length ? " " : "") + o.slice(l) || null
                                }
                                return !0
                            })
                    }),
                    addLineWidget: pr(function (e, t, n) {
                        return Bi(this, e, t, n)
                    }),
                    removeLineWidget: function (e) {
                        e.clear()
                    },
                    markText: function (e, t, n) {
                        return ji(this, B(this, e), B(this, t), n, n && n.type || "range")
                    },
                    setBookmark: function (e, t) {
                        var n = {
                            replacedWith: t && (null == t.nodeType ? t.widget : t),
                            insertLeft: t && t.insertLeft,
                            clearWhenEmpty: !1,
                            shared: t && t.shared,
                            handleMouseEvents: t && t.handleMouseEvents
                        };
                        return e = B(this, e),
                            ji(this, e, e, n, "bookmark")
                    },
                    findMarksAt: function (e) {
                        e = B(this, e);
                        var t = [],
                            n = T(this, e.line).markedSpans;
                        if (n) for (var r = 0; r < n.length; ++r) {
                            var i = n[r]; (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                        }
                        return t
                    },
                    findMarks: function (e, t, n) {
                        e = B(this, e),
                            t = B(this, t);
                        var r = [],
                            i = e.line;
                        return this.iter(e.line, t.line + 1,
                            function (o) {
                                var a = o.markedSpans;
                                if (a) for (var l = 0; l < a.length; l++) {
                                    var s = a[l];
                                    null != s.to && i == e.line && e.ch >= s.to || null == s.from && i != e.line || null != s.from && i == t.line && s.from >= t.ch || n && !n(s.marker) || r.push(s.marker.parent || s.marker)
                                } ++i
                            }),
                            r
                    },
                    getAllMarks: function () {
                        var e = [];
                        return this.iter(function (t) {
                            var n = t.markedSpans;
                            if (n) for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker)
                        }),
                            e
                    },
                    posFromIndex: function (e) {
                        var t, n = this.first,
                            r = this.lineSeparator().length;
                        return this.iter(function (i) {
                            var o = i.text.length + r;
                            return o > e ? (t = e, !0) : (e -= o, void ++n)
                        }),
                            B(this, E(n, t))
                    },
                    indexFromPos: function (e) {
                        e = B(this, e);
                        var t = e.ch;
                        if (e.line < this.first || e.ch < 0) return 0;
                        var n = this.lineSeparator().length;
                        return this.iter(this.first, e.line,
                            function (e) {
                                t += e.text.length + n
                            }),
                            t
                    },
                    copy: function (e) {
                        var t = new cl(M(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep);
                        return t.scrollTop = this.scrollTop,
                            t.scrollLeft = this.scrollLeft,
                            t.sel = this.sel,
                            t.extend = !1,
                            e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())),
                            t
                    },
                    linkedDoc: function (e) {
                        e || (e = {});
                        var t = this.first,
                            n = this.first + this.size;
                        null != e.from && e.from > t && (t = e.from),
                            null != e.to && e.to < n && (n = e.to);
                        var r = new cl(M(this, t, n), e.mode || this.modeOption, t, this.lineSep);
                        return e.sharedHist && (r.history = this.history),
                            (this.linked || (this.linked = [])).push({
                                doc: r,
                                sharedHist: e.sharedHist
                            }),
                            r.linked = [{
                                doc: this,
                                isParent: !0,
                                sharedHist: e.sharedHist
                            }],
                            Ui(r, Ki(this)),
                            r
                    },
                    unlinkDoc: function (e) {
                        var t = this;
                        if (e instanceof zo && (e = e.doc), this.linked) for (var n = 0; n < this.linked.length; ++n) {
                            var r = t.linked[n];
                            if (r.doc == e) {
                                t.linked.splice(n, 1),
                                    e.unlinkDoc(t),
                                    Vi(Ki(t));
                                break
                            }
                        }
                        if (e.history == this.history) {
                            var i = [e.id];
                            Vr(e,
                                function (e) {
                                    return i.push(e.id)
                                },
                                !0),
                                e.history = new Xr(null),
                                e.history.done = ai(this.history.done, i),
                                e.history.undone = ai(this.history.undone, i)
                        }
                    },
                    iterLinkedDocs: function (e) {
                        Vr(this, e)
                    },
                    getMode: function () {
                        return this.mode
                    },
                    getEditor: function () {
                        return this.cm
                    },
                    splitLines: function (e) {
                        return this.lineSep ? e.split(this.lineSep) : Ka(e)
                    },
                    lineSeparator: function () {
                        return this.lineSep || "\n"
                    }
                }),
                    cl.prototype.eachLine = cl.prototype.iter;
                for (var fl = 0,
                    dl = !1,
                    hl = {
                        3: "Enter",
                        8: "Backspace",
                        9: "Tab",
                        13: "Enter",
                        16: "Shift",
                        17: "Ctrl",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Esc",
                        32: "Space",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "Left",
                        38: "Up",
                        39: "Right",
                        40: "Down",
                        44: "PrintScrn",
                        45: "Insert",
                        46: "Delete",
                        59: ";",
                        61: "=",
                        91: "Mod",
                        92: "Mod",
                        93: "Mod",
                        106: "*",
                        107: "=",
                        109: "-",
                        110: ".",
                        111: "/",
                        127: "Delete",
                        173: "-",
                        186: ";",
                        187: "=",
                        188: ",",
                        189: "-",
                        190: ".",
                        191: "/",
                        192: "`",
                        219: "[",
                        220: "\\",
                        221: "]",
                        222: "'",
                        63232: "Up",
                        63233: "Down",
                        63234: "Left",
                        63235: "Right",
                        63272: "Delete",
                        63273: "Home",
                        63275: "End",
                        63276: "PageUp",
                        63277: "PageDown",
                        63302: "Insert"
                    },
                    pl = 0; pl < 10; pl++) hl[pl + 48] = hl[pl + 96] = String(pl);
                for (var ml = 65; ml <= 90; ml++) hl[ml] = String.fromCharCode(ml);
                for (var gl = 1; gl <= 12; gl++) hl[gl + 111] = hl[gl + 63235] = "F" + gl;
                var vl = {};
                vl.basic = {
                    Left: "goCharLeft",
                    Right: "goCharRight",
                    Up: "goLineUp",
                    Down: "goLineDown",
                    End: "goLineEnd",
                    Home: "goLineStartSmart",
                    PageUp: "goPageUp",
                    PageDown: "goPageDown",
                    Delete: "delCharAfter",
                    Backspace: "delCharBefore",
                    "Shift-Backspace": "delCharBefore",
                    Tab: "defaultTab",
                    "Shift-Tab": "indentAuto",
                    Enter: "newlineAndIndent",
                    Insert: "toggleOverwrite",
                    Esc: "singleSelection"
                },
                    vl.pcDefault = {
                        "Ctrl-A": "selectAll",
                        "Ctrl-D": "deleteLine",
                        "Ctrl-Z": "undo",
                        "Shift-Ctrl-Z": "redo",
                        "Ctrl-Y": "redo",
                        "Ctrl-Home": "goDocStart",
                        "Ctrl-End": "goDocEnd",
                        "Ctrl-Up": "goLineUp",
                        "Ctrl-Down": "goLineDown",
                        "Ctrl-Left": "goGroupLeft",
                        "Ctrl-Right": "goGroupRight",
                        "Alt-Left": "goLineStart",
                        "Alt-Right": "goLineEnd",
                        "Ctrl-Backspace": "delGroupBefore",
                        "Ctrl-Delete": "delGroupAfter",
                        "Ctrl-S": "save",
                        "Ctrl-F": "find",
                        "Ctrl-G": "findNext",
                        "Shift-Ctrl-G": "findPrev",
                        "Shift-Ctrl-F": "replace",
                        "Shift-Ctrl-R": "replaceAll",
                        "Ctrl-[": "indentLess",
                        "Ctrl-]": "indentMore",
                        "Ctrl-U": "undoSelection",
                        "Shift-Ctrl-U": "redoSelection",
                        "Alt-U": "redoSelection",
                        fallthrough: "basic"
                    },
                    vl.emacsy = {
                        "Ctrl-F": "goCharRight",
                        "Ctrl-B": "goCharLeft",
                        "Ctrl-P": "goLineUp",
                        "Ctrl-N": "goLineDown",
                        "Alt-F": "goWordRight",
                        "Alt-B": "goWordLeft",
                        "Ctrl-A": "goLineStart",
                        "Ctrl-E": "goLineEnd",
                        "Ctrl-V": "goPageDown",
                        "Shift-Ctrl-V": "goPageUp",
                        "Ctrl-D": "delCharAfter",
                        "Ctrl-H": "delCharBefore",
                        "Alt-D": "delWordAfter",
                        "Alt-Backspace": "delWordBefore",
                        "Ctrl-K": "killLine",
                        "Ctrl-T": "transposeChars",
                        "Ctrl-O": "openLine"
                    },
                    vl.macDefault = {
                        "Cmd-A": "selectAll",
                        "Cmd-D": "deleteLine",
                        "Cmd-Z": "undo",
                        "Shift-Cmd-Z": "redo",
                        "Cmd-Y": "redo",
                        "Cmd-Home": "goDocStart",
                        "Cmd-Up": "goDocStart",
                        "Cmd-End": "goDocEnd",
                        "Cmd-Down": "goDocEnd",
                        "Alt-Left": "goGroupLeft",
                        "Alt-Right": "goGroupRight",
                        "Cmd-Left": "goLineLeft",
                        "Cmd-Right": "goLineRight",
                        "Alt-Backspace": "delGroupBefore",
                        "Ctrl-Alt-Backspace": "delGroupAfter",
                        "Alt-Delete": "delGroupAfter",
                        "Cmd-S": "save",
                        "Cmd-F": "find",
                        "Cmd-G": "findNext",
                        "Shift-Cmd-G": "findPrev",
                        "Cmd-Alt-F": "replace",
                        "Shift-Cmd-Alt-F": "replaceAll",
                        "Cmd-[": "indentLess",
                        "Cmd-]": "indentMore",
                        "Cmd-Backspace": "delWrappedLineLeft",
                        "Cmd-Delete": "delWrappedLineRight",
                        "Cmd-U": "undoSelection",
                        "Shift-Cmd-U": "redoSelection",
                        "Ctrl-Up": "goDocStart",
                        "Ctrl-Down": "goDocEnd",
                        fallthrough: ["basic", "emacsy"]
                    },
                    vl.
                        default = ya ? vl.macDefault : vl.pcDefault;
                var yl, bl, wl = {
                    selectAll: ki,
                    singleSelection: function (e) {
                        return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Wa)
                    },
                    killLine: function (e) {
                        return lo(e,
                            function (t) {
                                if (t.empty()) {
                                    var n = T(e.doc, t.head.line).text.length;
                                    return t.head.ch == n && t.head.line < e.lastLine() ? {
                                        from: t.head,
                                        to: E(t.head.line + 1, 0)
                                    } : {
                                        from: t.head,
                                        to: E(t.head.line, n)
                                    }
                                }
                                return {
                                    from: t.from(),
                                    to: t.to()
                                }
                            })
                    },
                    deleteLine: function (e) {
                        return lo(e,
                            function (t) {
                                return {
                                    from: E(t.from().line, 0),
                                    to: B(e.doc, E(t.to().line + 1, 0))
                                }
                            })
                    },
                    delLineLeft: function (e) {
                        return lo(e,
                            function (e) {
                                return {
                                    from: E(e.from().line, 0),
                                    to: e.from()
                                }
                            })
                    },
                    delWrappedLineLeft: function (e) {
                        return lo(e,
                            function (t) {
                                var n = e.charCoords(t.head, "div").top + 5,
                                    r = e.coordsChar({
                                        left: 0,
                                        top: n
                                    },
                                        "div");
                                return {
                                    from: r,
                                    to: t.from()
                                }
                            })
                    },
                    delWrappedLineRight: function (e) {
                        return lo(e,
                            function (t) {
                                var n = e.charCoords(t.head, "div").top + 5,
                                    r = e.coordsChar({
                                        left: e.display.lineDiv.offsetWidth + 100,
                                        top: n
                                    },
                                        "div");
                                return {
                                    from: t.from(),
                                    to: r
                                }
                            })
                    },
                    undo: function (e) {
                        return e.undo()
                    },
                    redo: function (e) {
                        return e.redo()
                    },
                    undoSelection: function (e) {
                        return e.undoSelection()
                    },
                    redoSelection: function (e) {
                        return e.redoSelection()
                    },
                    goDocStart: function (e) {
                        return e.extendSelection(E(e.firstLine(), 0))
                    },
                    goDocEnd: function (e) {
                        return e.extendSelection(E(e.lastLine()))
                    },
                    goLineStart: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            return so(e, t.head.line)
                        },
                            {
                                origin: "+move",
                                bias: 1
                            })
                    },
                    goLineStartSmart: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            return co(e, t.head)
                        },
                            {
                                origin: "+move",
                                bias: 1
                            })
                    },
                    goLineEnd: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            return uo(e, t.head.line)
                        },
                            {
                                origin: "+move",
                                bias: -1
                            })
                    },
                    goLineRight: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var n = e.charCoords(t.head, "div").top + 5;
                            return e.coordsChar({
                                left: e.display.lineDiv.offsetWidth + 100,
                                top: n
                            },
                                "div")
                        },
                            Ea)
                    },
                    goLineLeft: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var n = e.charCoords(t.head, "div").top + 5;
                            return e.coordsChar({
                                left: 0,
                                top: n
                            },
                                "div")
                        },
                            Ea)
                    },
                    goLineLeftSmart: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var n = e.charCoords(t.head, "div").top + 5,
                                r = e.coordsChar({
                                    left: 0,
                                    top: n
                                },
                                    "div");
                            return r.ch < e.getLine(r.line).search(/\S/) ? co(e, t.head) : r
                        },
                            Ea)
                    },
                    goLineUp: function (e) {
                        return e.moveV(-1, "line")
                    },
                    goLineDown: function (e) {
                        return e.moveV(1, "line")
                    },
                    goPageUp: function (e) {
                        return e.moveV(-1, "page")
                    },
                    goPageDown: function (e) {
                        return e.moveV(1, "page")
                    },
                    goCharLeft: function (e) {
                        return e.moveH(-1, "char")
                    },
                    goCharRight: function (e) {
                        return e.moveH(1, "char")
                    },
                    goColumnLeft: function (e) {
                        return e.moveH(-1, "column")
                    },
                    goColumnRight: function (e) {
                        return e.moveH(1, "column")
                    },
                    goWordLeft: function (e) {
                        return e.moveH(-1, "word")
                    },
                    goGroupRight: function (e) {
                        return e.moveH(1, "group")
                    },
                    goGroupLeft: function (e) {
                        return e.moveH(-1, "group")
                    },
                    goWordRight: function (e) {
                        return e.moveH(1, "word")
                    },
                    delCharBefore: function (e) {
                        return e.deleteH(-1, "char")
                    },
                    delCharAfter: function (e) {
                        return e.deleteH(1, "char")
                    },
                    delWordBefore: function (e) {
                        return e.deleteH(-1, "word")
                    },
                    delWordAfter: function (e) {
                        return e.deleteH(1, "word")
                    },
                    delGroupBefore: function (e) {
                        return e.deleteH(-1, "group")
                    },
                    delGroupAfter: function (e) {
                        return e.deleteH(1, "group")
                    },
                    indentAuto: function (e) {
                        return e.indentSelection("smart")
                    },
                    indentMore: function (e) {
                        return e.indentSelection("add")
                    },
                    indentLess: function (e) {
                        return e.indentSelection("subtract")
                    },
                    insertTab: function (e) {
                        return e.replaceSelection("\t")
                    },
                    insertSoftTab: function (e) {
                        for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                            var o = n[i].from(),
                                a = c(e.getLine(o.line), o.ch, r);
                            t.push(p(r - a % r))
                        }
                        e.replaceSelections(t)
                    },
                    defaultTab: function (e) {
                        e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
                    },
                    transposeChars: function (e) {
                        return fr(e,
                            function () {
                                for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) if (t[r].empty()) {
                                    var i = t[r].head,
                                        o = T(e.doc, i.line).text;
                                    if (o) if (i.ch == o.length && (i = new E(i.line, i.ch - 1)), i.ch > 0) i = new E(i.line, i.ch + 1),
                                        e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), E(i.line, i.ch - 2), i, "+transpose");
                                    else if (i.line > e.doc.first) {
                                        var a = T(e.doc, i.line - 1).text;
                                        a && (i = new E(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), E(i.line - 1, a.length - 1), i, "+transpose"))
                                    }
                                    n.push(new zr(i, i))
                                }
                                e.setSelections(n)
                            })
                    },
                    newlineAndIndent: function (e) {
                        return fr(e,
                            function () {
                                for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
                                t = e.listSelections();
                                for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
                                tr(e)
                            })
                    },
                    openLine: function (e) {
                        return e.replaceSelection("\n", "start")
                    },
                    toggleOverwrite: function (e) {
                        return e.toggleOverwrite()
                    }
                },
                    xl = new f,
                    kl = null,
                    Cl = {
                        toString: function () {
                            return "CodeMirror.Init"
                        }
                    },
                    Sl = {},
                    Tl = {};
                zo.defaults = Sl,
                    zo.optionHandlers = Tl;
                var Ll = [];
                zo.defineInitHook = function (e) {
                    return Ll.push(e)
                };
                var Ml = null;
                Go.prototype = u({
                    init: function (e) {
                        function t(e) {
                            if (!We(i, e)) {
                                if (i.somethingSelected()) Io({
                                    lineWise: !1,
                                    text: i.getSelections()
                                }),
                                    "cut" == e.type && i.replaceSelection("", null, "cut");
                                else {
                                    if (!i.options.lineWiseCopyCut) return;
                                    var t = jo(i);
                                    Io({
                                        lineWise: !0,
                                        text: t.text
                                    }),
                                        "cut" == e.type && i.operation(function () {
                                            i.setSelections(t.ranges, 0, Wa),
                                                i.replaceSelection("", null, "cut")
                                        })
                                }
                                if (e.clipboardData) {
                                    e.clipboardData.clearData();
                                    var n = Ml.text.join("\n");
                                    if (e.clipboardData.setData("Text", n), e.clipboardData.getData("Text") == n) return void e.preventDefault()
                                }
                                var a = qo(),
                                    l = a.firstChild;
                                i.display.lineSpace.insertBefore(a, i.display.lineSpace.firstChild),
                                    l.value = Ml.text.join("\n");
                                var s = document.activeElement;
                                La(l),
                                    setTimeout(function () {
                                        i.display.lineSpace.removeChild(a),
                                            s.focus(),
                                            s == o && r.showPrimarySelection()
                                    },
                                        50)
                            }
                        }
                        var n = this,
                            r = this,
                            i = r.cm,
                            o = r.div = e.lineDiv;
                        _o(o, i.options.spellcheck),
                            _a(o, "paste",
                                function (e) {
                                    We(i, e) || Bo(e, i) || sa <= 11 && setTimeout(dr(i,
                                        function () {
                                            r.pollContent() || mr(i)
                                        }), 20)
                                }),
                            _a(o, "compositionstart",
                                function (e) {
                                    n.composing = {
                                        data: e.data
                                    }
                                }),
                            _a(o, "compositionupdate",
                                function (e) {
                                    n.composing || (n.composing = {
                                        data: e.data
                                    })
                                }),
                            _a(o, "compositionend",
                                function (e) {
                                    n.composing && (e.data != n.composing.data && n.readFromDOMSoon(), n.composing = null)
                                }),
                            _a(o, "touchstart",
                                function () {
                                    return r.forceCompositionEnd()
                                }),
                            _a(o, "input",
                                function () {
                                    n.composing || n.readFromDOMSoon()
                                }),
                            _a(o, "copy", t),
                            _a(o, "cut", t)
                    },
                    prepareSelection: function () {
                        var e = Ln(this.cm, !1);
                        return e.focus = this.cm.state.focused,
                            e
                    },
                    showSelection: function (e, t) {
                        e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
                    },
                    showPrimarySelection: function () {
                        var e = window.getSelection(),
                            t = this.cm.doc.sel.primary(),
                            n = Jo(this.cm, e.anchorNode, e.anchorOffset),
                            r = Jo(this.cm, e.focusNode, e.focusOffset);
                        if (!n || n.bad || !r || r.bad || 0 != z(I(n, r), t.from()) || 0 != z(D(n, r), t.to())) {
                            var i = Xo(this.cm, t.from()),
                                o = Xo(this.cm, t.to());
                            if (i || o) {
                                var a = this.cm.display.view,
                                    l = e.rangeCount && e.getRangeAt(0);
                                if (i) {
                                    if (!o) {
                                        var s = a[a.length - 1].measure,
                                            u = s.maps ? s.maps[s.maps.length - 1] : s.map;
                                        o = {
                                            node: u[u.length - 1],
                                            offset: u[u.length - 2] - u[u.length - 3]
                                        }
                                    }
                                } else i = {
                                    node: a[0].measure.map[2],
                                    offset: 0
                                };
                                var c;
                                try {
                                    c = ka(i.node, i.offset, o.offset, o.node)
                                } catch (e) { }
                                c && (!ia && this.cm.state.focused ? (e.collapse(i.node, i.offset), c.collapsed || (e.removeAllRanges(), e.addRange(c))) : (e.removeAllRanges(), e.addRange(c)), l && null == e.anchorNode ? e.addRange(l) : ia && this.startGracePeriod()),
                                    this.rememberSelection()
                            }
                        }
                    },
                    startGracePeriod: function () {
                        var e = this;
                        clearTimeout(this.gracePeriod),
                            this.gracePeriod = setTimeout(function () {
                                e.gracePeriod = !1,
                                    e.selectionChanged() && e.cm.operation(function () {
                                        return e.cm.curOp.selectionChanged = !0
                                    })
                            },
                                20)
                    },
                    showMultipleSelections: function (e) {
                        n(this.cm.display.cursorDiv, e.cursors),
                            n(this.cm.display.selectionDiv, e.selection)
                    },
                    rememberSelection: function () {
                        var e = window.getSelection();
                        this.lastAnchorNode = e.anchorNode,
                            this.lastAnchorOffset = e.anchorOffset,
                            this.lastFocusNode = e.focusNode,
                            this.lastFocusOffset = e.focusOffset
                    },
                    selectionInEditor: function () {
                        var e = window.getSelection();
                        if (!e.rangeCount) return !1;
                        var t = e.getRangeAt(0).commonAncestorContainer;
                        return i(this.div, t)
                    },
                    focus: function () {
                        "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
                    },
                    blur: function () {
                        this.div.blur()
                    },
                    getField: function () {
                        return this.div
                    },
                    supportsTouch: function () {
                        return !0
                    },
                    receivedFocus: function () {
                        function e() {
                            t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e))
                        }
                        var t = this;
                        this.selectionInEditor() ? this.pollSelection() : fr(this.cm,
                            function () {
                                return t.cm.curOp.selectionChanged = !0
                            }),
                            this.polling.set(this.cm.options.pollInterval, e)
                    },
                    selectionChanged: function () {
                        var e = window.getSelection();
                        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
                    },
                    pollSelection: function () {
                        if (!this.composing && null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                            var e = window.getSelection(),
                                t = this.cm;
                            this.rememberSelection();
                            var n = Jo(t, e.anchorNode, e.anchorOffset),
                                r = Jo(t, e.focusNode, e.focusOffset);
                            n && r && fr(t,
                                function () {
                                    pi(t.doc, Dr(n, r), Wa),
                                        (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
                                })
                        }
                    },
                    pollContent: function () {
                        null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
                        var e = this.cm,
                            t = e.display,
                            n = e.doc.sel.primary(),
                            r = n.from(),
                            i = n.to();
                        if (0 == r.ch && r.line > e.firstLine() && (r = E(r.line - 1, T(e.doc, r.line - 1).length)), i.ch == T(e.doc, i.line).text.length && i.line < e.lastLine() && (i = E(i.line + 1, 0)), r.line < t.viewFrom || i.line > t.viewTo - 1) return !1;
                        var o, a, l;
                        r.line == t.viewFrom || 0 == (o = Sn(e, r.line)) ? (a = A(t.view[0].line), l = t.view[0].node) : (a = A(t.view[o].line), l = t.view[o - 1].node.nextSibling);
                        var s, u, c = Sn(e, i.line);
                        if (c == t.view.length - 1 ? (s = t.viewTo - 1, u = t.lineDiv.lastChild) : (s = A(t.view[c + 1].line) - 1, u = t.view[c + 1].node.previousSibling), !l) return !1;
                        for (var f = e.doc.splitLines(Yo(e, l, u, a, s)), d = L(e.doc, E(a, 0), E(s, T(e.doc, s).text.length)); f.length > 1 && d.length > 1;) if (m(f) == m(d)) f.pop(),
                            d.pop(),
                            s--;
                        else {
                            if (f[0] != d[0]) break;
                            f.shift(),
                                d.shift(),
                                a++
                        }
                        for (var h = 0,
                            p = 0,
                            g = f[0], v = d[0], y = Math.min(g.length, v.length); h < y && g.charCodeAt(h) == v.charCodeAt(h);)++h;
                        for (var b = m(f), w = m(d), x = Math.min(b.length - (1 == f.length ? h : 0), w.length - (1 == d.length ? h : 0)); p < x && b.charCodeAt(b.length - p - 1) == w.charCodeAt(w.length - p - 1);)++p;
                        f[f.length - 1] = b.slice(0, b.length - p).replace(/^\u200b+/, ""),
                            f[0] = f[0].slice(h).replace(/\u200b+$/, "");
                        var k = E(a, h),
                            C = E(s, d.length ? m(d).length - p : 0);
                        return f.length > 1 || f[0] || z(k, C) ? (Ni(e.doc, f, k, C, "+input"), !0) : void 0
                    },
                    ensurePolled: function () {
                        this.forceCompositionEnd()
                    },
                    reset: function () {
                        this.forceCompositionEnd()
                    },
                    forceCompositionEnd: function () {
                        this.composing && (this.composing = null, this.pollContent() || mr(this.cm), this.div.blur(), this.div.focus())
                    },
                    readFromDOMSoon: function () {
                        var e = this;
                        null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
                            e.readDOMTimeout = null,
                                e.composing || !e.cm.isReadOnly() && e.pollContent() || fr(e.cm,
                                    function () {
                                        return mr(e.cm)
                                    })
                        },
                            80))
                    },
                    setUneditable: function (e) {
                        e.contentEditable = "false"
                    },
                    onKeyPress: function (e) {
                        e.preventDefault(),
                            this.cm.isReadOnly() || dr(this.cm, Fo)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0)
                    },
                    readOnlyChanged: function (e) {
                        this.div.contentEditable = String("nocursor" != e)
                    },
                    onContextMenu: y,
                    resetPosition: y,
                    needsContentAttribute: !0
                },
                    Go.prototype),
                    Qo.prototype = u({
                        init: function (e) {
                            function t(e) {
                                if (!We(i, e)) {
                                    if (i.somethingSelected()) Io({
                                        lineWise: !1,
                                        text: i.getSelections()
                                    }),
                                        r.inaccurateSelection && (r.prevInput = "", r.inaccurateSelection = !1, a.value = Ml.text.join("\n"), La(a));
                                    else {
                                        if (!i.options.lineWiseCopyCut) return;
                                        var t = jo(i);
                                        Io({
                                            lineWise: !0,
                                            text: t.text
                                        }),
                                            "cut" == e.type ? i.setSelections(t.ranges, null, Wa) : (r.prevInput = "", a.value = t.text.join("\n"), La(a))
                                    }
                                    "cut" == e.type && (i.state.cutIncoming = !0)
                                }
                            }
                            var n = this,
                                r = this,
                                i = this.cm,
                                o = this.wrapper = qo(),
                                a = this.textarea = o.firstChild;
                            e.wrapper.insertBefore(o, e.wrapper.firstChild),
                                ga && (a.style.width = "0px"),
                                _a(a, "input",
                                    function () {
                                        la && sa >= 9 && n.hasSelection && (n.hasSelection = null),
                                            r.poll()
                                    }),
                                _a(a, "paste",
                                    function (e) {
                                        We(i, e) || Bo(e, i) || (i.state.pasteIncoming = !0, r.fastPoll())
                                    }),
                                _a(a, "cut", t),
                                _a(a, "copy", t),
                                _a(e.scroller, "paste",
                                    function (t) {
                                        Bt(e, t) || We(i, t) || (i.state.pasteIncoming = !0, r.focus())
                                    }),
                                _a(e.lineSpace, "selectstart",
                                    function (t) {
                                        Bt(e, t) || Pe(t)
                                    }),
                                _a(a, "compositionstart",
                                    function () {
                                        var e = i.getCursor("from");
                                        r.composing && r.composing.range.clear(),
                                            r.composing = {
                                                start: e,
                                                range: i.markText(e, i.getCursor("to"), {
                                                    className: "CodeMirror-composing"
                                                })
                                            }
                                    }),
                                _a(a, "compositionend",
                                    function () {
                                        r.composing && (r.poll(), r.composing.range.clear(), r.composing = null)
                                    })
                        },
                        prepareSelection: function () {
                            var e = this.cm,
                                t = e.display,
                                n = e.doc,
                                r = Ln(e);
                            if (e.options.moveInputWithCursor) {
                                var i = dn(e, n.sel.primary().head, "div"),
                                    o = t.wrapper.getBoundingClientRect(),
                                    a = t.lineDiv.getBoundingClientRect();
                                r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)),
                                    r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left))
                            }
                            return r
                        },
                        showSelection: function (e) {
                            var t = this.cm,
                                r = t.display;
                            n(r.cursorDiv, e.cursors),
                                n(r.selectionDiv, e.selection),
                                null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
                        },
                        reset: function (e) {
                            if (!this.contextMenuPending) {
                                var t, n, r = this.cm,
                                    i = r.doc;
                                if (r.somethingSelected()) {
                                    this.prevInput = "";
                                    var o = i.sel.primary();
                                    t = Va && (o.to().line - o.from().line > 100 || (n = r.getSelection()).length > 1e3);
                                    var a = t ? "-" : n || r.getSelection();
                                    this.textarea.value = a,
                                        r.state.focused && La(this.textarea),
                                        la && sa >= 9 && (this.hasSelection = a)
                                } else e || (this.prevInput = this.textarea.value = "", la && sa >= 9 && (this.hasSelection = null));
                                this.inaccurateSelection = t
                            }
                        },
                        getField: function () {
                            return this.textarea
                        },
                        supportsTouch: function () {
                            return !1
                        },
                        focus: function () {
                            if ("nocursor" != this.cm.options.readOnly && (!va || o() != this.textarea)) try {
                                this.textarea.focus()
                            } catch (e) { }
                        },
                        blur: function () {
                            this.textarea.blur()
                        },
                        resetPosition: function () {
                            this.wrapper.style.top = this.wrapper.style.left = 0
                        },
                        receivedFocus: function () {
                            this.slowPoll()
                        },
                        slowPoll: function () {
                            var e = this;
                            this.pollingFast || this.polling.set(this.cm.options.pollInterval,
                                function () {
                                    e.poll(),
                                        e.cm.state.focused && e.slowPoll()
                                })
                        },
                        fastPoll: function () {
                            function e() {
                                var r = n.poll();
                                r || t ? (n.pollingFast = !1, n.slowPoll()) : (t = !0, n.polling.set(60, e))
                            }
                            var t = !1,
                                n = this;
                            n.pollingFast = !0,
                                n.polling.set(20, e)
                        },
                        poll: function () {
                            var e = this,
                                t = this.cm,
                                n = this.textarea,
                                r = this.prevInput;
                            if (this.contextMenuPending || !t.state.focused || Ua(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
                            var i = n.value;
                            if (i == r && !t.somethingSelected()) return !1;
                            if (la && sa >= 9 && this.hasSelection === i || ya && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(),
                                !1;
                            if (t.doc.sel == t.display.selForContextMenu) {
                                var o = i.charCodeAt(0);
                                if (8203 != o || r || (r = "​"), 8666 == o) return this.reset(),
                                    this.cm.execCommand("undo")
                            }
                            for (var a = 0,
                                l = Math.min(r.length, i.length); a < l && r.charCodeAt(a) == i.charCodeAt(a);)++a;
                            return fr(t,
                                function () {
                                    Fo(t, i.slice(a), r.length - a, null, e.composing ? "*compose" : null),
                                        i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i,
                                        e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
                                            className: "CodeMirror-composing"
                                        }))
                                }),
                                !0
                        },
                        ensurePolled: function () {
                            this.pollingFast && this.poll() && (this.pollingFast = !1)
                        },
                        onKeyPress: function () {
                            la && sa >= 9 && (this.hasSelection = null),
                                this.fastPoll()
                        },
                        onContextMenu: function (e) {
                            function t() {
                                if (null != a.selectionStart) {
                                    var e = i.somethingSelected(),
                                        t = "​" + (e ? a.value : "");
                                    a.value = "⇚",
                                        a.value = t,
                                        r.prevInput = e ? "" : "​",
                                        a.selectionStart = 1,
                                        a.selectionEnd = t.length,
                                        o.selForContextMenu = i.doc.sel
                                }
                            }
                            function n() {
                                if (r.contextMenuPending = !1, r.wrapper.style.cssText = f, a.style.cssText = c, la && sa < 9 && o.scrollbars.setScrollTop(o.scroller.scrollTop = s), null != a.selectionStart) {
                                    (!la || la && sa < 9) && t();
                                    var e = 0,
                                        n = function () {
                                            o.selForContextMenu == i.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "​" == r.prevInput ? dr(i, ki)(i) : e++ < 10 ? o.detectingSelectAll = setTimeout(n, 500) : o.input.reset()
                                        };
                                    o.detectingSelectAll = setTimeout(n, 200)
                                }
                            }
                            var r = this,
                                i = r.cm,
                                o = i.display,
                                a = r.textarea,
                                l = Cn(i, e),
                                s = o.scroller.scrollTop;
                            if (l && !da) {
                                var u = i.options.resetSelectionOnContextMenu;
                                u && i.doc.sel.contains(l) == -1 && dr(i, pi)(i.doc, Dr(l), Wa);
                                var c = a.style.cssText,
                                    f = r.wrapper.style.cssText;
                                r.wrapper.style.cssText = "position: absolute";
                                var d = r.wrapper.getBoundingClientRect();
                                a.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - d.top - 5) + "px; left: " + (e.clientX - d.left - 5) + "px;\n      z-index: 1000; background: " + (la ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
                                var h;
                                if (ua && (h = window.scrollY), o.input.focus(), ua && window.scrollTo(null, h), o.input.reset(), i.somethingSelected() || (a.value = r.prevInput = " "), r.contextMenuPending = !0, o.selForContextMenu = i.doc.sel, clearTimeout(o.detectingSelectAll), la && sa >= 9 && t(), Sa) {
                                    Fe(e);
                                    var p = function () {
                                        Ae(window, "mouseup", p),
                                            setTimeout(n, 20)
                                    };
                                    _a(window, "mouseup", p)
                                } else setTimeout(n, 50)
                            }
                        },
                        readOnlyChanged: function (e) {
                            e || this.reset()
                        },
                        setUneditable: y,
                        needsContentAttribute: !1
                    },
                        Qo.prototype),
                    No(zo),
                    Ko(zo);
                var Ol = "iter insert remove copy getEditor constructor".split(" ");
                for (var Al in cl.prototype) cl.prototype.hasOwnProperty(Al) && d(Ol, Al) < 0 && (zo.prototype[Al] = function (e) {
                    return function () {
                        return e.apply(this.doc, arguments)
                    }
                }(cl.prototype[Al]));
                return ze(cl),
                    zo.inputStyles = {
                        textarea: Qo,
                        contenteditable: Go
                    },
                    zo.defineMode = function (e) {
                        zo.defaults.mode || "null" == e || (zo.defaults.mode = e),
                            Ke.apply(this, arguments)
                    },
                    zo.defineMIME = Ue,
                    zo.defineMode("null",
                        function () {
                            return {
                                token: function (e) {
                                    return e.skipToEnd()
                                }
                            }
                        }),
                    zo.defineMIME("text/plain", "null"),
                    zo.defineExtension = function (e, t) {
                        zo.prototype[e] = t
                    },
                    zo.defineDocExtension = function (e, t) {
                        cl.prototype[e] = t
                    },
                    zo.fromTextArea = ea,
                    ta(zo),
                    zo.version = "5.21.0",
                    zo
            })
    },
    function (e, t, n) {
        !
        function (e) {
            e(n(80))
        }(function (e) {
            "use strict";
            function t(t, i, o, a) {
                function l(e) {
                    var n = s(t, i);
                    if (!n || n.to.line - n.from.line < u) return null;
                    for (var r = t.findMarksAt(n.from), o = 0; o < r.length; ++o) if (r[o].__isFold && "fold" !== a) {
                        if (!e) return null;
                        n.cleared = !0,
                            r[o].clear()
                    }
                    return n
                }
                if (o && o.call) {
                    var s = o;
                    o = null
                } else var s = r(t, o, "rangeFinder");
                "number" == typeof i && (i = e.Pos(i, 0));
                var u = r(t, o, "minFoldSize"),
                    c = l(!0);
                if (r(t, o, "scanUp")) for (; !c && i.line > t.firstLine();) i = e.Pos(i.line - 1, 0),
                    c = l(!1);
                if (c && !c.cleared && "unfold" !== a) {
                    var f = n(t, o);
                    e.on(f, "mousedown",
                        function (t) {
                            d.clear(),
                                e.e_preventDefault(t)
                        });
                    var d = t.markText(c.from, c.to, {
                        replacedWith: f,
                        clearOnEnter: r(t, o, "clearOnEnter"),
                        __isFold: !0
                    });
                    d.on("clear",
                        function (n, r) {
                            e.signal(t, "unfold", t, n, r)
                        }),
                        e.signal(t, "fold", t, c.from, c.to)
                }
            }
            function n(e, t) {
                var n = r(e, t, "widget");
                if ("string" == typeof n) {
                    var i = document.createTextNode(n);
                    n = document.createElement("span"),
                        n.appendChild(i),
                        n.className = "CodeMirror-foldmarker"
                }
                return n
            }
            function r(e, t, n) {
                if (t && void 0 !== t[n]) return t[n];
                var r = e.options.foldOptions;
                return r && void 0 !== r[n] ? r[n] : i[n]
            }
            e.newFoldFunction = function (e, n) {
                return function (r, i) {
                    t(r, i, {
                        rangeFinder: e,
                        widget: n
                    })
                }
            },
                e.defineExtension("foldCode",
                    function (e, n, r) {
                        t(this, e, n, r)
                    }),
                e.defineExtension("isFolded",
                    function (e) {
                        for (var t = this.findMarksAt(e), n = 0; n < t.length; ++n) if (t[n].__isFold) return !0
                    }),
                e.commands.toggleFold = function (e) {
                    e.foldCode(e.getCursor())
                },
                e.commands.fold = function (e) {
                    e.foldCode(e.getCursor(), null, "fold")
                },
                e.commands.unfold = function (e) {
                    e.foldCode(e.getCursor(), null, "unfold")
                },
                e.commands.foldAll = function (t) {
                    t.operation(function () {
                        for (var n = t.firstLine(), r = t.lastLine(); n <= r; n++) t.foldCode(e.Pos(n, 0), null, "fold")
                    })
                },
                e.commands.unfoldAll = function (t) {
                    t.operation(function () {
                        for (var n = t.firstLine(), r = t.lastLine(); n <= r; n++) t.foldCode(e.Pos(n, 0), null, "unfold")
                    })
                },
                e.registerHelper("fold", "combine",
                    function () {
                        var e = Array.prototype.slice.call(arguments, 0);
                        return function (t, n) {
                            for (var r = 0; r < e.length; ++r) {
                                var i = e[r](t, n);
                                if (i) return i
                            }
                        }
                    }),
                e.registerHelper("fold", "auto",
                    function (e, t) {
                        for (var n = e.getHelpers(t, "fold"), r = 0; r < n.length; r++) {
                            var i = n[r](e, t);
                            if (i) return i
                        }
                    });
            var i = {
                rangeFinder: e.fold.auto,
                widget: "↔",
                minFoldSize: 0,
                scanUp: !1,
                clearOnEnter: !0
            };
            e.defineOption("foldOptions", null),
                e.defineExtension("foldOption",
                    function (e, t) {
                        return r(this, e, t)
                    })
        })
    },
    function (e, t, n) {
        !
        function (e) {
            e(n(80), n(81))
        }(function (e) {
            "use strict";
            function t(e) {
                this.options = e,
                    this.from = this.to = 0
            }
            function n(e) {
                return e === !0 && (e = {}),
                    null == e.gutter && (e.gutter = "CodeMirror-foldgutter"),
                    null == e.indicatorOpen && (e.indicatorOpen = "CodeMirror-foldgutter-open"),
                    null == e.indicatorFolded && (e.indicatorFolded = "CodeMirror-foldgutter-folded"),
                    e
            }
            function r(e, t) {
                for (var n = e.findMarks(f(t, 0), f(t + 1, 0)), r = 0; r < n.length; ++r) if (n[r].__isFold && n[r].find().from.line == t) return n[r]
            }
            function i(e) {
                if ("string" == typeof e) {
                    var t = document.createElement("div");
                    return t.className = e + " CodeMirror-guttermarker-subtle",
                        t
                }
                return e.cloneNode(!0)
            }
            function o(e, t, n) {
                var o = e.state.foldGutter.options,
                    a = t,
                    l = e.foldOption(o, "minFoldSize"),
                    s = e.foldOption(o, "rangeFinder");
                e.eachLine(t, n,
                    function (t) {
                        var n = null;
                        if (r(e, a)) n = i(o.indicatorFolded);
                        else {
                            var u = f(a, 0),
                                c = s && s(e, u);
                            c && c.to.line - c.from.line >= l && (n = i(o.indicatorOpen))
                        }
                        e.setGutterMarker(t, o.gutter, n),
                            ++a
                    })
            }
            function a(e) {
                var t = e.getViewport(),
                    n = e.state.foldGutter;
                n && (e.operation(function () {
                    o(e, t.from, t.to)
                }), n.from = t.from, n.to = t.to)
            }
            function l(e, t, n) {
                var i = e.state.foldGutter;
                if (i) {
                    var o = i.options;
                    if (n == o.gutter) {
                        var a = r(e, t);
                        a ? a.clear() : e.foldCode(f(t, 0), o.rangeFinder)
                    }
                }
            }
            function s(e) {
                var t = e.state.foldGutter;
                if (t) {
                    var n = t.options;
                    t.from = t.to = 0,
                        clearTimeout(t.changeUpdate),
                        t.changeUpdate = setTimeout(function () {
                            a(e)
                        },
                            n.foldOnChangeTimeSpan || 600)
                }
            }
            function u(e) {
                var t = e.state.foldGutter;
                if (t) {
                    var n = t.options;
                    clearTimeout(t.changeUpdate),
                        t.changeUpdate = setTimeout(function () {
                            var n = e.getViewport();
                            t.from == t.to || n.from - t.to > 20 || t.from - n.to > 20 ? a(e) : e.operation(function () {
                                n.from < t.from && (o(e, n.from, t.from), t.from = n.from),
                                    n.to > t.to && (o(e, t.to, n.to), t.to = n.to)
                            })
                        },
                            n.updateViewportTimeSpan || 400)
                }
            }
            function c(e, t) {
                var n = e.state.foldGutter;
                if (n) {
                    var r = t.line;
                    r >= n.from && r < n.to && o(e, r, r + 1)
                }
            }
            e.defineOption("foldGutter", !1,
                function (r, i, o) {
                    o && o != e.Init && (r.clearGutter(r.state.foldGutter.options.gutter), r.state.foldGutter = null, r.off("gutterClick", l), r.off("change", s), r.off("viewportChange", u), r.off("fold", c), r.off("unfold", c), r.off("swapDoc", s)),
                        i && (r.state.foldGutter = new t(n(i)), a(r), r.on("gutterClick", l), r.on("change", s), r.on("viewportChange", u), r.on("fold", c), r.on("unfold", c), r.on("swapDoc", s))
                });
            var f = e.Pos
        })
    },
    function (e, t, n) {
        !
        function (e) {
            e(n(80))
        }(function (e) {
            "use strict";
            e.registerHelper("fold", "brace",
                function (t, n) {
                    function r(r) {
                        for (var l = n.ch,
                            s = 0; ;) {
                            var u = l <= 0 ? -1 : a.lastIndexOf(r, l - 1);
                            if (u != -1) {
                                if (1 == s && u < n.ch) break;
                                if (i = t.getTokenTypeAt(e.Pos(o, u + 1)), !/^(comment|string)/.test(i)) return u + 1;
                                l = u - 1
                            } else {
                                if (1 == s) break;
                                s = 1,
                                    l = a.length
                            }
                        }
                    }
                    var i, o = n.line,
                        a = t.getLine(o),
                        l = "{",
                        s = "}",
                        u = r("{");
                    if (null == u && (l = "[", s = "]", u = r("[")), null != u) {
                        var c, f, d = 1,
                            h = t.lastLine();
                        e: for (var p = o; p <= h; ++p) for (var m = t.getLine(p), g = p == o ? u : 0; ;) {
                            var v = m.indexOf(l, g),
                                y = m.indexOf(s, g);
                            if (v < 0 && (v = m.length), y < 0 && (y = m.length), g = Math.min(v, y), g == m.length) break;
                            if (t.getTokenTypeAt(e.Pos(p, g + 1)) == i) if (g == v) ++d;
                            else if (!--d) {
                                c = p,
                                    f = g;
                                break e
                            } ++g
                        }
                        if (null != c && (o != c || f != u)) return {
                            from: e.Pos(o, u),
                            to: e.Pos(c, f)
                        }
                    }
                }),
                e.registerHelper("fold", "import",
                    function (t, n) {
                        function r(n) {
                            if (n < t.firstLine() || n > t.lastLine()) return null;
                            var r = t.getTokenAt(e.Pos(n, 1));
                            if (/\S/.test(r.string) || (r = t.getTokenAt(e.Pos(n, r.end + 1))), "keyword" != r.type || "import" != r.string) return null;
                            for (var i = n,
                                o = Math.min(t.lastLine(), n + 10); i <= o; ++i) {
                                var a = t.getLine(i),
                                    l = a.indexOf(";");
                                if (l != -1) return {
                                    startCh: r.end,
                                    end: e.Pos(i, l)
                                }
                            }
                        }
                        var i, o = n.line,
                            a = r(o);
                        if (!a || r(o - 1) || (i = r(o - 2)) && i.end.line == o - 1) return null;
                        for (var l = a.end; ;) {
                            var s = r(l.line + 1);
                            if (null == s) break;
                            l = s.end
                        }
                        return {
                            from: t.clipPos(e.Pos(o, a.startCh + 1)),
                            to: l
                        }
                    }),
                e.registerHelper("fold", "include",
                    function (t, n) {
                        function r(n) {
                            if (n < t.firstLine() || n > t.lastLine()) return null;
                            var r = t.getTokenAt(e.Pos(n, 1));
                            return /\S/.test(r.string) || (r = t.getTokenAt(e.Pos(n, r.end + 1))),
                                "meta" == r.type && "#include" == r.string.slice(0, 8) ? r.start + 8 : void 0
                        }
                        var i = n.line,
                            o = r(i);
                        if (null == o || null != r(i - 1)) return null;
                        for (var a = i; ;) {
                            var l = r(a + 1);
                            if (null == l) break; ++a
                        }
                        return {
                            from: e.Pos(i, o + 1),
                            to: t.clipPos(e.Pos(a))
                        }
                    })
        })
    },
        , , , , ,
    function (e, t, n) {
        !
        function (e) {
            e(n(80))
        }(function (e) {
            "use strict";
            function t(e, t, n) {
                return /^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0)))
            }
            e.defineMode("javascript",
                function (n, r) {
                    function i(e) {
                        for (var t, n = !1,
                            r = !1; null != (t = e.next());) {
                            if (!n) {
                                if ("/" == t && !r) return;
                                "[" == t ? r = !0 : r && "]" == t && (r = !1)
                            }
                            n = !n && "\\" == t
                        }
                    }
                    function o(e, t, n) {
                        return Ce = e,
                            Se = n,
                            t
                    }
                    function a(e, n) {
                        var r = e.next();
                        if ('"' == r || "'" == r) return n.tokenize = l(r),
                            n.tokenize(e, n);
                        if ("." == r && e.match(/^\d+(?:[eE][+\-]?\d+)?/)) return o("number", "number");
                        if ("." == r && e.match("..")) return o("spread", "meta");
                        if (/[\[\]{}\(\),;\:\.]/.test(r)) return o(r);
                        if ("=" == r && e.eat(">")) return o("=>", "operator");
                        if ("0" == r && e.eat(/x/i)) return e.eatWhile(/[\da-f]/i),
                            o("number", "number");
                        if ("0" == r && e.eat(/o/i)) return e.eatWhile(/[0-7]/i),
                            o("number", "number");
                        if ("0" == r && e.eat(/b/i)) return e.eatWhile(/[01]/i),
                            o("number", "number");
                        if (/\d/.test(r)) return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),
                            o("number", "number");
                        if ("/" == r) return e.eat("*") ? (n.tokenize = s, s(e, n)) : e.eat("/") ? (e.skipToEnd(), o("comment", "comment")) : t(e, n, 1) ? (i(e), e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/), o("regexp", "string-2")) : (e.eatWhile(He), o("operator", "operator", e.current()));
                        if ("`" == r) return n.tokenize = u,
                            u(e, n);
                        if ("#" == r) return e.skipToEnd(),
                            o("error", "error");
                        if (He.test(r)) return e.eatWhile(He),
                            o("operator", "operator", e.current());
                        if (Ne.test(r)) {
                            e.eatWhile(Ne);
                            var a = e.current(),
                                c = We.propertyIsEnumerable(a) && We[a];
                            return c && "." != n.lastType ? o(c.type, c.style, a) : o("variable", "variable", a)
                        }
                    }
                    function l(e) {
                        return function (t, n) {
                            var r, i = !1;
                            if (Me && "@" == t.peek() && t.match(Ee)) return n.tokenize = a,
                                o("jsonld-keyword", "meta");
                            for (; null != (r = t.next()) && (r != e || i);) i = !i && "\\" == r;
                            return i || (n.tokenize = a),
                                o("string", "string")
                        }
                    }
                    function s(e, t) {
                        for (var n, r = !1; n = e.next();) {
                            if ("/" == n && r) {
                                t.tokenize = a;
                                break
                            }
                            r = "*" == n
                        }
                        return o("comment", "comment")
                    }
                    function u(e, t) {
                        for (var n, r = !1; null != (n = e.next());) {
                            if (!r && ("`" == n || "$" == n && e.eat("{"))) {
                                t.tokenize = a;
                                break
                            }
                            r = !r && "\\" == n
                        }
                        return o("quasi", "string-2", e.current())
                    }
                    function c(e, t) {
                        t.fatArrowAt && (t.fatArrowAt = null);
                        var n = e.string.indexOf("=>", e.start);
                        if (!(n < 0)) {
                            if (Ae) {
                                var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
                                r && (n = r.index)
                            }
                            for (var i = 0,
                                o = !1,
                                a = n - 1; a >= 0; --a) {
                                var l = e.string.charAt(a),
                                    s = ze.indexOf(l);
                                if (s >= 0 && s < 3) {
                                    if (!i) {
                                        ++a;
                                        break
                                    }
                                    if (0 == --i) {
                                        "(" == l && (o = !0);
                                        break
                                    }
                                } else if (s >= 3 && s < 6) ++i;
                                else if (Ne.test(l)) o = !0;
                                else {
                                    if (/["'\/]/.test(l)) return;
                                    if (o && !i) {
                                        ++a;
                                        break
                                    }
                                }
                            }
                            o && !i && (t.fatArrowAt = a)
                        }
                    }
                    function f(e, t, n, r, i, o) {
                        this.indented = e,
                            this.column = t,
                            this.type = n,
                            this.prev = i,
                            this.info = o,
                            null != r && (this.align = r)
                    }
                    function d(e, t) {
                        for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
                        for (var r = e.context; r; r = r.prev) for (var n = r.vars; n; n = n.next) if (n.name == t) return !0
                    }
                    function h(e, t, n, r, i) {
                        var o = e.cc;
                        for (De.state = e, De.stream = i, De.marked = null, De.cc = o, De.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ;) {
                            var a = o.length ? o.pop() : Oe ? C : k;
                            if (a(n, r)) {
                                for (; o.length && o[o.length - 1].lex;) o.pop()();
                                return De.marked ? De.marked : "variable" == n && d(e, r) ? "variable-2" : t
                            }
                        }
                    }
                    function p() {
                        for (var e = arguments.length - 1; e >= 0; e--) De.cc.push(arguments[e])
                    }
                    function m() {
                        return p.apply(null, arguments),
                            !0
                    }
                    function g(e) {
                        function t(t) {
                            for (var n = t; n; n = n.next) if (n.name == e) return !0;
                            return !1
                        }
                        var n = De.state;
                        if (De.marked = "def", n.context) {
                            if (t(n.localVars)) return;
                            n.localVars = {
                                name: e,
                                next: n.localVars
                            }
                        } else {
                            if (t(n.globalVars)) return;
                            r.globalVars && (n.globalVars = {
                                name: e,
                                next: n.globalVars
                            })
                        }
                    }
                    function v() {
                        De.state.context = {
                            prev: De.state.context,
                            vars: De.state.localVars
                        },
                            De.state.localVars = Ie
                    }
                    function y() {
                        De.state.localVars = De.state.context.vars,
                            De.state.context = De.state.context.prev
                    }
                    function b(e, t) {
                        var n = function () {
                            var n = De.state,
                                r = n.indented;
                            if ("stat" == n.lexical.type) r = n.lexical.indented;
                            else for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) r = i.indented;
                            n.lexical = new f(r, De.stream.column(), e, null, n.lexical, t)
                        };
                        return n.lex = !0,
                            n
                    }
                    function w() {
                        var e = De.state;
                        e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
                    }
                    function x(e) {
                        function t(n) {
                            return n == e ? m() : ";" == e ? p() : m(t)
                        }
                        return t
                    }
                    function k(e, t) {
                        return "var" == e ? m(b("vardef", t.length), Z, x(";"), w) : "keyword a" == e ? m(b("form"), T, k, w) : "keyword b" == e ? m(b("form"), k, w) : "{" == e ? m(b("}"), U, w) : ";" == e ? m() : "if" == e ? ("else" == De.state.lexical.info && De.state.cc[De.state.cc.length - 1] == w && De.state.cc.pop()(), m(b("form"), T, k, w, re)) : "function" == e ? m(ue) : "for" == e ? m(b("form"), ie, k, w) : "variable" == e ? m(b("stat"), F) : "switch" == e ? m(b("form"), T, b("}", "switch"), x("{"), U, w, w) : "case" == e ? m(C, x(":")) : "default" == e ? m(x(":")) : "catch" == e ? m(b("form"), v, x("("), ce, x(")"), k, w, y) : "class" == e ? m(b("form"), de, w) : "export" == e ? m(b("stat"), ge, w) : "import" == e ? m(b("stat"), ve, w) : "module" == e ? m(b("form"), Q, b("}"), x("{"), U, w, w) : "type" == e ? m(G, x("operator"), G, x(";")) : "async" == e ? m(k) : p(b("stat"), C, x(";"), w)
                    }
                    function C(e) {
                        return L(e, !1)
                    }
                    function S(e) {
                        return L(e, !0)
                    }
                    function T(e) {
                        return "(" != e ? p() : m(b(")"), C, x(")"), w)
                    }
                    function L(e, t) {
                        if (De.state.fatArrowAt == De.stream.start) {
                            var n = t ? z : E;
                            if ("(" == e) return m(v, b(")"), q(Q, ")"), w, x("=>"), n, y);
                            if ("variable" == e) return p(v, Q, x("=>"), n, y)
                        }
                        var r = t ? N : A;
                        return Pe.hasOwnProperty(e) ? m(r) : "function" == e ? m(ue, r) : "class" == e ? m(b("form"), fe, w) : "keyword c" == e || "async" == e ? m(t ? O : M) : "(" == e ? m(b(")"), M, x(")"), w, r) : "operator" == e || "spread" == e ? m(t ? S : C) : "[" == e ? m(b("]"), xe, w, r) : "{" == e ? K(R, "}", null, r) : "quasi" == e ? p(W, r) : "new" == e ? m(P(t)) : m()
                    }
                    function M(e) {
                        return e.match(/[;\}\)\],]/) ? p() : p(C)
                    }
                    function O(e) {
                        return e.match(/[;\}\)\],]/) ? p() : p(S)
                    }
                    function A(e, t) {
                        return "," == e ? m(C) : N(e, t, !1)
                    }
                    function N(e, t, n) {
                        var r = 0 == n ? A : N,
                            i = 0 == n ? C : S;
                        return "=>" == e ? m(v, n ? z : E, y) : "operator" == e ? /\+\+|--/.test(t) ? m(r) : "?" == t ? m(C, x(":"), i) : m(i) : "quasi" == e ? p(W, r) : ";" != e ? "(" == e ? K(S, ")", "call", r) : "." == e ? m(B, r) : "[" == e ? m(b("]"), M, x("]"), w, r) : void 0 : void 0
                    }
                    function W(e, t) {
                        return "quasi" != e ? p() : "${" != t.slice(t.length - 2) ? m(W) : m(C, H)
                    }
                    function H(e) {
                        if ("}" == e) return De.marked = "string-2",
                            De.state.tokenize = u,
                            m(W)
                    }
                    function E(e) {
                        return c(De.stream, De.state),
                            p("{" == e ? k : C)
                    }
                    function z(e) {
                        return c(De.stream, De.state),
                            p("{" == e ? k : S)
                    }
                    function P(e) {
                        return function (t) {
                            return "." == t ? m(e ? I : D) : p(e ? S : C)
                        }
                    }
                    function D(e, t) {
                        if ("target" == t) return De.marked = "keyword",
                            m(A)
                    }
                    function I(e, t) {
                        if ("target" == t) return De.marked = "keyword",
                            m(N)
                    }
                    function F(e) {
                        return ":" == e ? m(w, k) : p(A, x(";"), w)
                    }
                    function B(e) {
                        if ("variable" == e) return De.marked = "property",
                            m()
                    }
                    function R(e, t) {
                        return "async" == e ? (De.marked = "property", m(R)) : "variable" == e || "keyword" == De.style ? (De.marked = "property", m("get" == t || "set" == t ? j : _)) : "number" == e || "string" == e ? (De.marked = Me ? "property" : De.style + " property", m(_)) : "jsonld-keyword" == e ? m(_) : "modifier" == e ? m(R) : "[" == e ? m(C, x("]"), _) : "spread" == e ? m(C) : ":" == e ? p(_) : void 0
                    }
                    function j(e) {
                        return "variable" != e ? p(_) : (De.marked = "property", m(ue))
                    }
                    function _(e) {
                        return ":" == e ? m(S) : "(" == e ? p(ue) : void 0
                    }
                    function q(e, t) {
                        function n(r, i) {
                            if ("," == r) {
                                var o = De.state.lexical;
                                return "call" == o.info && (o.pos = (o.pos || 0) + 1),
                                    m(function (n, r) {
                                        return n == t || r == t ? p() : p(e)
                                    },
                                        n)
                            }
                            return r == t || i == t ? m() : m(x(t))
                        }
                        return function (r, i) {
                            return r == t || i == t ? m() : p(e, n)
                        }
                    }
                    function K(e, t, n) {
                        for (var r = 3; r < arguments.length; r++) De.cc.push(arguments[r]);
                        return m(b(t, n), q(e, t), w)
                    }
                    function U(e) {
                        return "}" == e ? m() : p(k, U)
                    }
                    function V(e, t) {
                        if (Ae) {
                            if (":" == e) return m(G);
                            if ("?" == t) return m(V)
                        }
                    }
                    function G(e) {
                        return "variable" == e ? (De.marked = "variable-3", m(J)) : "{" == e ? m(q($, "}")) : "(" == e ? m(q(Y, ")"), X) : void 0
                    }
                    function X(e) {
                        if ("=>" == e) return m(G)
                    }
                    function $(e) {
                        return "variable" == e || "keyword" == De.style ? (De.marked = "property", m($)) : ":" == e ? m(G) : void 0
                    }
                    function Y(e) {
                        return "variable" == e ? m(Y) : ":" == e ? m(G) : void 0
                    }
                    function J(e, t) {
                        return "<" == t ? m(q(G, ">"), J) : "[" == e ? m(x("]"), J) : void 0
                    }
                    function Z() {
                        return p(Q, V, te, ne)
                    }
                    function Q(e, t) {
                        return "modifier" == e ? m(Q) : "variable" == e ? (g(t), m()) : "spread" == e ? m(Q) : "[" == e ? K(Q, "]") : "{" == e ? K(ee, "}") : void 0
                    }
                    function ee(e, t) {
                        return "variable" != e || De.stream.match(/^\s*:/, !1) ? ("variable" == e && (De.marked = "property"), "spread" == e ? m(Q) : "}" == e ? p() : m(x(":"), Q, te)) : (g(t), m(te))
                    }
                    function te(e, t) {
                        if ("=" == t) return m(S)
                    }
                    function ne(e) {
                        if ("," == e) return m(Z)
                    }
                    function re(e, t) {
                        if ("keyword b" == e && "else" == t) return m(b("form", "else"), k, w)
                    }
                    function ie(e) {
                        if ("(" == e) return m(b(")"), oe, x(")"), w)
                    }
                    function oe(e) {
                        return "var" == e ? m(Z, x(";"), le) : ";" == e ? m(le) : "variable" == e ? m(ae) : p(C, x(";"), le)
                    }
                    function ae(e, t) {
                        return "in" == t || "of" == t ? (De.marked = "keyword", m(C)) : m(A, le)
                    }
                    function le(e, t) {
                        return ";" == e ? m(se) : "in" == t || "of" == t ? (De.marked = "keyword", m(C)) : p(C, x(";"), se)
                    }
                    function se(e) {
                        ")" != e && m(C)
                    }
                    function ue(e, t) {
                        return "*" == t ? (De.marked = "keyword", m(ue)) : "variable" == e ? (g(t), m(ue)) : "(" == e ? m(v, b(")"), q(ce, ")"), w, V, k, y) : void 0
                    }
                    function ce(e) {
                        return "spread" == e ? m(ce) : p(Q, V, te)
                    }
                    function fe(e, t) {
                        return "variable" == e ? de(e, t) : he(e, t)
                    }
                    function de(e, t) {
                        if ("variable" == e) return g(t),
                            m(he)
                    }
                    function he(e, t) {
                        return "extends" == t || "implements" == t ? m(Ae ? G : C, he) : "{" == e ? m(b("}"), pe, w) : void 0
                    }
                    function pe(e, t) {
                        return "variable" == e || "keyword" == De.style ? ("static" == t || "get" == t || "set" == t || Ae && ("public" == t || "private" == t || "protected" == t || "readonly" == t || "abstract" == t)) && De.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (De.marked = "keyword", m(pe)) : (De.marked = "property", m(Ae ? me : ue, pe)) : "*" == t ? (De.marked = "keyword", m(pe)) : ";" == e ? m(pe) : "}" == e ? m() : void 0
                    }
                    function me(e, t) {
                        return "?" == t ? m(me) : ":" == e ? m(G, te) : p(ue)
                    }
                    function ge(e, t) {
                        return "*" == t ? (De.marked = "keyword", m(we, x(";"))) : "default" == t ? (De.marked = "keyword", m(C, x(";"))) : p(k)
                    }
                    function ve(e) {
                        return "string" == e ? m() : p(ye, we)
                    }
                    function ye(e, t) {
                        return "{" == e ? K(ye, "}") : ("variable" == e && g(t), "*" == t && (De.marked = "keyword"), m(be))
                    }
                    function be(e, t) {
                        if ("as" == t) return De.marked = "keyword",
                            m(ye)
                    }
                    function we(e, t) {
                        if ("from" == t) return De.marked = "keyword",
                            m(C)
                    }
                    function xe(e) {
                        return "]" == e ? m() : p(q(S, "]"))
                    }
                    function ke(e, t) {
                        return "operator" == e.lastType || "," == e.lastType || He.test(t.charAt(0)) || /[,.]/.test(t.charAt(0))
                    }
                    var Ce, Se, Te = n.indentUnit,
                        Le = r.statementIndent,
                        Me = r.jsonld,
                        Oe = r.json || Me,
                        Ae = r.typescript,
                        Ne = r.wordCharacters || /[\w$\xa1-\uffff]/,
                        We = function () {
                            function e(e) {
                                return {
                                    type: e,
                                    style: "keyword"
                                }
                            }
                            var t = e("keyword a"),
                                n = e("keyword b"),
                                r = e("keyword c"),
                                i = e("operator"),
                                o = {
                                    type: "atom",
                                    style: "atom"
                                },
                                a = {
                                    if: e("if"),
                                    while: t,
                                    with: t,
                                    else: n,
                                    do: n,
                                    try: n,
                                    finally: n,
                                    return: r,
                                    break: r,
                                    continue: r,
                                    new: e("new"),
                                    delete: r,
                                    throw: r,
                                    debugger: r,
                                    var: e("var"),
                                    const: e("var"),
                                    let: e("var"),
                                    function: e("function"),
                                    catch: e("catch"),
                                    for: e("for"),
                                    switch: e("switch"),
                                    case:
                                        e("case"),
                                    default:
                                        e("default"),
                                    in: i,
                                    typeof: i,
                                    instanceof: i,
                                    true: o,
                                    false: o,
                                    null: o,
                                    undefined: o,
                                    NaN: o,
                                    Infinity: o,
                                    this: e("this"),
                                    class: e("class"),
                                    super: e("atom"),
                                    yield: r,
                                    export: e("export"),
                                    import: e("import"),
                                    extends: r,
                                    await: r,
                                    async: e("async")
                                };
                            if (Ae) {
                                var l = {
                                    type: "variable",
                                    style: "variable-3"
                                },
                                    s = {
                                        interface: e("class"),
                                        implements: r,
                                        namespace: r,
                                        module: e("module"),
                                        enum: e("module"),
                                        type: e("type"),
                                        public: e("modifier"),
                                        private: e("modifier"),
                                        protected: e("modifier"),
                                        abstract: e("modifier"),
                                        as: i,
                                        string: l,
                                        number: l,
                                        boolean: l,
                                        any: l
                                    };
                                for (var u in s) a[u] = s[u]
                            }
                            return a
                        }(),
                        He = /[+\-*&%=<>!?|~^]/,
                        Ee = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
                        ze = "([{}])",
                        Pe = {
                            atom: !0,
                            number: !0,
                            variable: !0,
                            string: !0,
                            regexp: !0,
                            this: !0,
                            "jsonld-keyword": !0
                        },
                        De = {
                            state: null,
                            column: null,
                            marked: null,
                            cc: null
                        },
                        Ie = {
                            name: "this",
                            next: {
                                name: "arguments"
                            }
                        };
                    return w.lex = !0,
                    {
                        startState: function (e) {
                            var t = {
                                tokenize: a,
                                lastType: "sof",
                                cc: [],
                                lexical: new f((e || 0) - Te, 0, "block", !1),
                                localVars: r.localVars,
                                context: r.localVars && {
                                    vars: r.localVars
                                },
                                indented: e || 0
                            };
                            return r.globalVars && "object" == typeof r.globalVars && (t.globalVars = r.globalVars),
                                t
                        },
                        token: function (e, t) {
                            if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), c(e, t)), t.tokenize != s && e.eatSpace()) return null;
                            var n = t.tokenize(e, t);
                            return "comment" == Ce ? n : (t.lastType = "operator" != Ce || "++" != Se && "--" != Se ? Ce : "incdec", h(t, n, Ce, Se, e))
                        },
                        indent: function (t, n) {
                            if (t.tokenize == s) return e.Pass;
                            if (t.tokenize != a) return 0;
                            var i, o = n && n.charAt(0),
                                l = t.lexical;
                            if (!/^\s*else\b/.test(n)) for (var u = t.cc.length - 1; u >= 0; --u) {
                                var c = t.cc[u];
                                if (c == w) l = l.prev;
                                else if (c != re) break
                            }
                            for (; ("stat" == l.type || "form" == l.type) && ("}" == o || (i = t.cc[t.cc.length - 1]) && (i == A || i == N) && !/^[,\.=+\-*:?[\(]/.test(n));) l = l.prev;
                            Le && ")" == l.type && "stat" == l.prev.type && (l = l.prev);
                            var f = l.type,
                                d = o == f;
                            return "vardef" == f ? l.indented + ("operator" == t.lastType || "," == t.lastType ? l.info + 1 : 0) : "form" == f && "{" == o ? l.indented : "form" == f ? l.indented + Te : "stat" == f ? l.indented + (ke(t, n) ? Le || Te : 0) : "switch" != l.info || d || 0 == r.doubleIndentSwitch ? l.align ? l.column + (d ? 0 : 1) : l.indented + (d ? 0 : Te) : l.indented + (/^(?:case|default)\b/.test(n) ? Te : 2 * Te)
                        },
                        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                        blockCommentStart: Oe ? null : "/*",
                        blockCommentEnd: Oe ? null : "*/",
                        lineComment: Oe ? null : "//",
                        fold: "brace",
                        closeBrackets: "()[]{}''\"\"``",
                        helperType: Oe ? "json" : "javascript",
                        jsonldMode: Me,
                        jsonMode: Oe,
                        expressionAllowed: t,
                        skipExpression: function (e) {
                            var t = e.cc[e.cc.length - 1];
                            t != C && t != S || e.cc.pop()
                        }
                    }
                }),
                e.registerHelper("wordChars", "javascript", /[\w$]/),
                e.defineMIME("text/javascript", "javascript"),
                e.defineMIME("text/ecmascript", "javascript"),
                e.defineMIME("application/javascript", "javascript"),
                e.defineMIME("application/x-javascript", "javascript"),
                e.defineMIME("application/ecmascript", "javascript"),
                e.defineMIME("application/json", {
                    name: "javascript",
                    json: !0
                }),
                e.defineMIME("application/x-json", {
                    name: "javascript",
                    json: !0
                }),
                e.defineMIME("application/ld+json", {
                    name: "javascript",
                    jsonld: !0
                }),
                e.defineMIME("text/typescript", {
                    name: "javascript",
                    typescript: !0
                }),
                e.defineMIME("application/typescript", {
                    name: "javascript",
                    typescript: !0
                })
        })
    },
        , , , , , , , ,
    function (e, t, n) {
        function r(e) {
            var t = o.extension.getURL(e.path),
                n = document.createElement("link");
            document.styleSheets;
            n.rel = "stylesheet",
                n.href = t,
                e.id && (n.id = e.id),
                document.head.appendChild(n);
            var r = document.createElement("div");
            r.setAttribute("class", e.checkClass),
                document.body.appendChild(r);
            var l = null,
                s = 0;
            return new i(function (e, n) {
                function i() {
                    var o = window.getComputedStyle(r, ":before").getPropertyValue("content");
                    return s > a ? n(Error("fail to load css: '" + t + "', content loaded: " + o)) : void (/loaded/.test(o) ? (clearTimeout(l), document.body.removeChild(r), e()) : (s++, l = setTimeout(i, 1)))
                }
                i()
            })
        }
        var i = n(69),
            o = n(8),
            a = 20;
        e.exports = r
    },
        , ,
    function (e, t, n) {
        var r = {
            light: ["base16-light", "coy", "funky", "mdn-like", "neo", "solarized_light", "yeti"],
            dark: ["3024-night", "ambiance", "base16-dark", "cobalt", "dark", "dracula-custom", "dracula", "jellybeans", "material", "mbo", "mehdi", "midnight", "monokai", "okaidia", "panda-syntax", "solarized_dark", "tomorrow", "twilight", "zenburn"]
        };
        e.exports = function (e) {
            var t = "light";
            return r.dark.indexOf(e) !== -1 && (t = "dark"),
                t
        }
    },
        , , , , ,
    function (e, t, n) {
        function r(e) {
            try {
                return JSON.parse(e),
                    !0
            } catch (e) {
                return !1
            }
        }
        function i() {
            var e = "0.18.2_zh-CN",
                t = document.getElementsByClassName("version")[0];
            t.innerHTML = e,
                t.href = "https://github.com/tulios/json-viewer/tree/" + e
        }
        function o() {
            var e = s.load();
            i(),
                u(a, e.theme);
            var t = c(a, e.addons),
                n = f(a, e.structure),
                o = d(a, e.style);
            p(),
                h([t, n, o],
                    function (e) {
                        r(e.addons) ? r(e.structure) ? (s.save(e), l("Success", "修改内容保存成功！", "success")) : l("Ops!", '“代码结构”不是有效JSON', "error") : l("Ops!", '“扩展组件”不是有效JSON', "error")
                    })
        }
        n(108);
        var a = n(80);
        n(81),
            n(82),
            n(83),
            n(89),
            n(116),
            n(117),
            n(118);
        var l = n(119),
            s = n(9),
            u = n(120),
            c = n(121),
            f = n(122),
            d = n(123),
            h = n(124),
            p = n(125);
        document.addEventListener("DOMContentLoaded", o, !1)
    },
    function (e, t, n) {
        n(109),
            n(110),
            n(111),
            n(112),
            n(113),
            n(114),
            n(115)
    },
    function (e, t) { },
        109, 109, 109, 109, 109, 109,
    function (e, t, n) {
        !
        function (e) {
            e(n(80))
        }(function (e) {
            "use strict";
            function t(e, t) {
                this.cm = e,
                    this.options = t,
                    this.widget = null,
                    this.debounce = 0,
                    this.tick = 0,
                    this.startPos = this.cm.getCursor("start"),
                    this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length;
                var n = this;
                e.on("cursorActivity", this.activityFunc = function () {
                    n.cursorActivity()
                })
            }
            function n(t, n) {
                var r = e.cmpPos(n.from, t.from);
                return r > 0 && t.to.ch - t.from.ch != n.to.ch - n.from.ch
            }
            function r(e, t, n) {
                var r = e.options.hintOptions,
                    i = {};
                for (var o in m) i[o] = m[o];
                if (r) for (var o in r) void 0 !== r[o] && (i[o] = r[o]);
                if (n) for (var o in n) void 0 !== n[o] && (i[o] = n[o]);
                return i.hint.resolve && (i.hint = i.hint.resolve(e, t)),
                    i
            }
            function i(e) {
                return "string" == typeof e ? e : e.text
            }
            function o(e, t) {
                function n(e, n) {
                    var i;
                    i = "string" != typeof n ?
                        function (e) {
                            return n(e, t)
                        } : r.hasOwnProperty(n) ? r[n] : n,
                        o[e] = i
                }
                var r = {
                    Up: function () {
                        t.moveFocus(-1)
                    },
                    Down: function () {
                        t.moveFocus(1)
                    },
                    PageUp: function () {
                        t.moveFocus(-t.menuSize() + 1, !0)
                    },
                    PageDown: function () {
                        t.moveFocus(t.menuSize() - 1, !0)
                    },
                    Home: function () {
                        t.setFocus(0)
                    },
                    End: function () {
                        t.setFocus(t.length - 1)
                    },
                    Enter: t.pick,
                    Tab: t.pick,
                    Esc: t.close
                },
                    i = e.options.customKeys,
                    o = i ? {} : r;
                if (i) for (var a in i) i.hasOwnProperty(a) && n(a, i[a]);
                var l = e.options.extraKeys;
                if (l) for (var a in l) l.hasOwnProperty(a) && n(a, l[a]);
                return o
            }
            function a(e, t) {
                for (; t && t != e;) {
                    if ("LI" === t.nodeName.toUpperCase() && t.parentNode == e) return t;
                    t = t.parentNode
                }
            }
            function l(t, n) {
                this.completion = t,
                    this.data = n,
                    this.picked = !1;
                var r = this,
                    l = t.cm,
                    s = this.hints = document.createElement("ul");
                s.className = "CodeMirror-hints",
                    this.selectedHint = n.selectedHint || 0;
                for (var u = n.list,
                    c = 0; c < u.length; ++c) {
                    var h = s.appendChild(document.createElement("li")),
                        p = u[c],
                        m = f + (c != this.selectedHint ? "" : " " + d);
                    null != p.className && (m = p.className + " " + m),
                        h.className = m,
                        p.render ? p.render(h, n, p) : h.appendChild(document.createTextNode(p.displayText || i(p))),
                        h.hintId = c
                }
                var g = l.cursorCoords(t.options.alignWithWord ? n.from : null),
                    v = g.left,
                    y = g.bottom,
                    b = !0;
                s.style.left = v + "px",
                    s.style.top = y + "px";
                var w = window.innerWidth || Math.max(document.body.offsetWidth, document.documentElement.offsetWidth),
                    x = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight); (t.options.container || document.body).appendChild(s);
                var k = s.getBoundingClientRect(),
                    C = k.bottom - x,
                    S = s.scrollHeight > s.clientHeight + 1,
                    T = l.getScrollInfo();
                if (C > 0) {
                    var L = k.bottom - k.top,
                        M = g.top - (g.bottom - k.top);
                    if (M - L > 0) s.style.top = (y = g.top - L) + "px",
                        b = !1;
                    else if (L > x) {
                        s.style.height = x - 5 + "px",
                            s.style.top = (y = g.bottom - k.top) + "px";
                        var O = l.getCursor();
                        n.from.ch != O.ch && (g = l.cursorCoords(O), s.style.left = (v = g.left) + "px", k = s.getBoundingClientRect())
                    }
                }
                var A = k.right - w;
                if (A > 0 && (k.right - k.left > w && (s.style.width = w - 5 + "px", A -= k.right - k.left - w), s.style.left = (v = g.left - A) + "px"), S) for (var N = s.firstChild; N; N = N.nextSibling) N.style.paddingRight = l.display.nativeBarWidth + "px";
                if (l.addKeyMap(this.keyMap = o(t, {
                    moveFocus: function (e, t) {
                        r.changeActive(r.selectedHint + e, t)
                    },
                    setFocus: function (e) {
                        r.changeActive(e)
                    },
                    menuSize: function () {
                        return r.screenAmount()
                    },
                    length: u.length,
                    close: function () {
                        t.close()
                    },
                    pick: function () {
                        r.pick()
                    },
                    data: n
                })), t.options.closeOnUnfocus) {
                    var W;
                    l.on("blur", this.onBlur = function () {
                        W = setTimeout(function () {
                            t.close()
                        },
                            100)
                    }),
                        l.on("focus", this.onFocus = function () {
                            clearTimeout(W)
                        })
                }
                return l.on("scroll", this.onScroll = function () {
                    var e = l.getScrollInfo(),
                        n = l.getWrapperElement().getBoundingClientRect(),
                        r = y + T.top - e.top,
                        i = r - (window.pageYOffset || (document.documentElement || document.body).scrollTop);
                    return b || (i += s.offsetHeight),
                        i <= n.top || i >= n.bottom ? t.close() : (s.style.top = r + "px", void (s.style.left = v + T.left - e.left + "px"))
                }),
                    e.on(s, "dblclick",
                        function (e) {
                            var t = a(s, e.target || e.srcElement);
                            t && null != t.hintId && (r.changeActive(t.hintId), r.pick())
                        }),
                    e.on(s, "click",
                        function (e) {
                            var n = a(s, e.target || e.srcElement);
                            n && null != n.hintId && (r.changeActive(n.hintId), t.options.completeOnSingleClick && r.pick())
                        }),
                    e.on(s, "mousedown",
                        function () {
                            setTimeout(function () {
                                l.focus()
                            },
                                20)
                        }),
                    e.signal(n, "select", u[0], s.firstChild),
                    !0
            }
            function s(e, t) {
                if (!e.somethingSelected()) return t;
                for (var n = [], r = 0; r < t.length; r++) t[r].supportsSelection && n.push(t[r]);
                return n
            }
            function u(e, t, n, r) {
                if (e.async) e(t, r, n);
                else {
                    var i = e(t, n);
                    i && i.then ? i.then(r) : r(i)
                }
            }
            function c(t, n) {
                var r, i = t.getHelpers(n, "hint");
                if (i.length) {
                    var o = function (e, t, n) {
                        function r(i) {
                            return i == o.length ? t(null) : void u(o[i], e, n,
                                function (e) {
                                    e && e.list.length > 0 ? t(e) : r(i + 1)
                                })
                        }
                        var o = s(e, i);
                        r(0)
                    };
                    return o.async = !0,
                        o.supportsSelection = !0,
                        o
                }
                return (r = t.getHelper(t.getCursor(), "hintWords")) ?
                    function (t) {
                        return e.hint.fromList(t, {
                            words: r
                        })
                    } : e.hint.anyword ?
                        function (t, n) {
                            return e.hint.anyword(t, n)
                        } : function () { }
            }
            var f = "CodeMirror-hint",
                d = "CodeMirror-hint-active";
            e.showHint = function (e, t, n) {
                if (!t) return e.showHint(n);
                n && n.async && (t.async = !0);
                var r = {
                    hint: t
                };
                if (n) for (var i in n) r[i] = n[i];
                return e.showHint(r)
            },
                e.defineExtension("showHint",
                    function (n) {
                        n = r(this, this.getCursor("start"), n);
                        var i = this.listSelections();
                        if (!(i.length > 1)) {
                            if (this.somethingSelected()) {
                                if (!n.hint.supportsSelection) return;
                                for (var o = 0; o < i.length; o++) if (i[o].head.line != i[o].anchor.line) return
                            }
                            this.state.completionActive && this.state.completionActive.close();
                            var a = this.state.completionActive = new t(this, n);
                            a.options.hint && (e.signal(this, "startCompletion", this), a.update(!0))
                        }
                    });
            var h = window.requestAnimationFrame ||
                function (e) {
                    return setTimeout(e, 1e3 / 60)
                },
                p = window.cancelAnimationFrame || clearTimeout;
            t.prototype = {
                close: function () {
                    this.active() && (this.cm.state.completionActive = null, this.tick = null, this.cm.off("cursorActivity", this.activityFunc), this.widget && this.data && e.signal(this.data, "close"), this.widget && this.widget.close(), e.signal(this.cm, "endCompletion", this.cm))
                },
                active: function () {
                    return this.cm.state.completionActive == this
                },
                pick: function (t, n) {
                    var r = t.list[n];
                    r.hint ? r.hint(this.cm, t, r) : this.cm.replaceRange(i(r), r.from || t.from, r.to || t.to, "complete"),
                        e.signal(t, "pick", r),
                        this.close()
                },
                cursorActivity: function () {
                    this.debounce && (p(this.debounce), this.debounce = 0);
                    var e = this.cm.getCursor(),
                        t = this.cm.getLine(e.line);
                    if (e.line != this.startPos.line || t.length - e.ch != this.startLen - this.startPos.ch || e.ch < this.startPos.ch || this.cm.somethingSelected() || e.ch && this.options.closeCharacters.test(t.charAt(e.ch - 1))) this.close();
                    else {
                        var n = this;
                        this.debounce = h(function () {
                            n.update()
                        }),
                            this.widget && this.widget.disable()
                    }
                },
                update: function (e) {
                    if (null != this.tick) {
                        var t = this,
                            n = ++this.tick;
                        u(this.options.hint, this.cm, this.options,
                            function (r) {
                                t.tick == n && t.finishUpdate(r, e)
                            })
                    }
                },
                finishUpdate: function (t, r) {
                    this.data && e.signal(this.data, "update");
                    var i = this.widget && this.widget.picked || r && this.options.completeSingle;
                    this.widget && this.widget.close(),
                        t && this.data && n(this.data, t) || (this.data = t, t && t.list.length && (i && 1 == t.list.length ? this.pick(t, 0) : (this.widget = new l(this, t), e.signal(t, "shown"))))
                }
            },
                l.prototype = {
                    close: function () {
                        if (this.completion.widget == this) {
                            this.completion.widget = null,
                                this.hints.parentNode.removeChild(this.hints),
                                this.completion.cm.removeKeyMap(this.keyMap);
                            var e = this.completion.cm;
                            this.completion.options.closeOnUnfocus && (e.off("blur", this.onBlur), e.off("focus", this.onFocus)),
                                e.off("scroll", this.onScroll)
                        }
                    },
                    disable: function () {
                        this.completion.cm.removeKeyMap(this.keyMap);
                        var e = this;
                        this.keyMap = {
                            Enter: function () {
                                e.picked = !0
                            }
                        },
                            this.completion.cm.addKeyMap(this.keyMap)
                    },
                    pick: function () {
                        this.completion.pick(this.data, this.selectedHint)
                    },
                    changeActive: function (t, n) {
                        if (t >= this.data.list.length ? t = n ? this.data.list.length - 1 : 0 : t < 0 && (t = n ? 0 : this.data.list.length - 1), this.selectedHint != t) {
                            var r = this.hints.childNodes[this.selectedHint];
                            r.className = r.className.replace(" " + d, ""),
                                r = this.hints.childNodes[this.selectedHint = t],
                                r.className += " " + d,
                                r.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = r.offsetTop - 3 : r.offsetTop + r.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = r.offsetTop + r.offsetHeight - this.hints.clientHeight + 3),
                                e.signal(this.data, "select", this.data.list[this.selectedHint], r)
                        }
                    },
                    screenAmount: function () {
                        return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1
                    }
                },
                e.registerHelper("hint", "auto", {
                    resolve: c
                }),
                e.registerHelper("hint", "fromList",
                    function (t, n) {
                        var r = t.getCursor(),
                            i = t.getTokenAt(r),
                            o = e.Pos(r.line, i.end);
                        if (i.string && /\w/.test(i.string[i.string.length - 1])) var a = i.string,
                            l = e.Pos(r.line, i.start);
                        else var a = "",
                            l = o;
                        for (var s = [], u = 0; u < n.words.length; u++) {
                            var c = n.words[u];
                            c.slice(0, a.length) == a && s.push(c)
                        }
                        if (s.length) return {
                            list: s,
                            from: l,
                            to: o
                        }
                    }),
                e.commands.autocomplete = e.showHint;
            var m = {
                hint: e.hint.auto,
                completeSingle: !0,
                alignWithWord: !0,
                closeCharacters: /[\s()\[\]{};:>,]/,
                closeOnUnfocus: !0,
                completeOnSingleClick: !0,
                container: null,
                customKeys: null,
                extraKeys: null
            };
            e.defineOption("hintOptions", null)
        })
    },
    function (e, t, n) {
        !
        function (e) {
            e(n(80), n(118))
        }(function (e) {
            "use strict";
            var t = {
                link: 1,
                visited: 1,
                active: 1,
                hover: 1,
                focus: 1,
                "first-letter": 1,
                "first-line": 1,
                "first-child": 1,
                before: 1,
                after: 1,
                lang: 1
            };
            e.registerHelper("hint", "css",
                function (n) {
                    function r(e) {
                        for (var t in e) u && 0 != t.lastIndexOf(u, 0) || f.push(t)
                    }
                    var i = n.getCursor(),
                        o = n.getTokenAt(i),
                        a = e.innerMode(n.getMode(), o.state);
                    if ("css" == a.mode.name) {
                        if ("keyword" == o.type && 0 == "!important".indexOf(o.string)) return {
                            list: ["!important"],
                            from: e.Pos(i.line, o.start),
                            to: e.Pos(i.line, o.end)
                        };
                        var l = o.start,
                            s = i.ch,
                            u = o.string.slice(0, s - l);
                        /[^\w$_-]/.test(u) && (u = "", l = s = i.ch);
                        var c = e.resolveMode("text/css"),
                            f = [],
                            d = a.state.state;
                        return "pseudo" == d || "variable-3" == o.type ? r(t) : "block" == d || "maybeprop" == d ? r(c.propertyKeywords) : "prop" == d || "parens" == d || "at" == d || "params" == d ? (r(c.valueKeywords), r(c.colorKeywords)) : "media" != d && "media_parens" != d || (r(c.mediaTypes), r(c.mediaFeatures)),
                            f.length ? {
                                list: f,
                                from: e.Pos(i.line, l),
                                to: e.Pos(i.line, s)
                            } : void 0
                    }
                })
        })
    },
    function (e, t, n) {
        !
        function (e) {
            e(n(80))
        }(function (e) {
            "use strict";
            function t(e) {
                for (var t = {},
                    n = 0; n < e.length; ++n) t[e[n].toLowerCase()] = !0;
                return t
            }
            function n(e, t) {
                for (var n, r = !1; null != (n = e.next());) {
                    if (r && "/" == n) {
                        t.tokenize = null;
                        break
                    }
                    r = "*" == n
                }
                return ["comment", "comment"]
            }
            e.defineMode("css",
                function (t, n) {
                    function r(e, t) {
                        return p = t,
                            e
                    }
                    function i(e, t) {
                        var n = e.next();
                        if (v[n]) {
                            var i = v[n](e, t);
                            if (i !== !1) return i
                        }
                        return "@" == n ? (e.eatWhile(/[\w\\\-]/), r("def", e.current())) : "=" == n || ("~" == n || "|" == n) && e.eat("=") ? r(null, "compare") : '"' == n || "'" == n ? (t.tokenize = o(n), t.tokenize(e, t)) : "#" == n ? (e.eatWhile(/[\w\\\-]/), r("atom", "hash")) : "!" == n ? (e.match(/^\s*\w*/), r("keyword", "important")) : /\d/.test(n) || "." == n && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : "-" !== n ? /[,+>*\/]/.test(n) ? r(null, "select-op") : "." == n && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? r("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(n) ? r(null, n) : "u" == n && e.match(/rl(-prefix)?\(/) || "d" == n && e.match("omain(") || "r" == n && e.match("egexp(") ? (e.backUp(1), t.tokenize = a, r("property", "word")) : /[\w\\\-]/.test(n) ? (e.eatWhile(/[\w\\\-]/), r("property", "word")) : r(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : e.match(/^-[\w\\\-]+/) ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? r("variable-2", "variable-definition") : r("variable-2", "variable")) : e.match(/^\w+-/) ? r("meta", "meta") : void 0
                    }
                    function o(e) {
                        return function (t, n) {
                            for (var i, o = !1; null != (i = t.next());) {
                                if (i == e && !o) {
                                    ")" == e && t.backUp(1);
                                    break
                                }
                                o = !o && "\\" == i
                            }
                            return (i == e || !o && ")" != e) && (n.tokenize = null),
                                r("string", "string")
                        }
                    }
                    function a(e, t) {
                        return e.next(),
                            e.match(/\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = o(")"),
                            r(null, "(")
                    }
                    function l(e, t, n) {
                        this.type = e,
                            this.indent = t,
                            this.prev = n
                    }
                    function s(e, t, n, r) {
                        return e.context = new l(n, t.indentation() + (r === !1 ? 0 : g), e.context),
                            n
                    }
                    function u(e) {
                        return e.context.prev && (e.context = e.context.prev),
                            e.context.type
                    }
                    function c(e, t, n) {
                        return N[n.context.type](e, t, n)
                    }
                    function f(e, t, n, r) {
                        for (var i = r || 1; i > 0; i--) n.context = n.context.prev;
                        return c(e, t, n)
                    }
                    function d(e) {
                        var t = e.current().toLowerCase();
                        m = M.hasOwnProperty(t) ? "atom" : L.hasOwnProperty(t) ? "keyword" : "variable"
                    }
                    var h = n.inline;
                    n.propertyKeywords || (n = e.resolveMode("text/css"));
                    var p, m, g = t.indentUnit,
                        v = n.tokenHooks,
                        y = n.documentTypes || {},
                        b = n.mediaTypes || {},
                        w = n.mediaFeatures || {},
                        x = n.mediaValueKeywords || {},
                        k = n.propertyKeywords || {},
                        C = n.nonStandardPropertyKeywords || {},
                        S = n.fontProperties || {},
                        T = n.counterDescriptors || {},
                        L = n.colorKeywords || {},
                        M = n.valueKeywords || {},
                        O = n.allowNested,
                        A = n.supportsAtComponent === !0,
                        N = {};
                    return N.top = function (e, t, n) {
                        if ("{" == e) return s(n, t, "block");
                        if ("}" == e && n.context.prev) return u(n);
                        if (A && /@component/.test(e)) return s(n, t, "atComponentBlock");
                        if (/^@(-moz-)?document$/.test(e)) return s(n, t, "documentTypes");
                        if (/^@(media|supports|(-moz-)?document|import)$/.test(e)) return s(n, t, "atBlock");
                        if (/^@(font-face|counter-style)/.test(e)) return n.stateArg = e,
                            "restricted_atBlock_before";
                        if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e)) return "keyframes";
                        if (e && "@" == e.charAt(0)) return s(n, t, "at");
                        if ("hash" == e) m = "builtin";
                        else if ("word" == e) m = "tag";
                        else {
                            if ("variable-definition" == e) return "maybeprop";
                            if ("interpolation" == e) return s(n, t, "interpolation");
                            if (":" == e) return "pseudo";
                            if (O && "(" == e) return s(n, t, "parens")
                        }
                        return n.context.type
                    },
                        N.block = function (e, t, n) {
                            if ("word" == e) {
                                var r = t.current().toLowerCase();
                                return k.hasOwnProperty(r) ? (m = "property", "maybeprop") : C.hasOwnProperty(r) ? (m = "string-2", "maybeprop") : O ? (m = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag", "block") : (m += " error", "maybeprop")
                            }
                            return "meta" == e ? "block" : O || "hash" != e && "qualifier" != e ? N.top(e, t, n) : (m = "error", "block")
                        },
                        N.maybeprop = function (e, t, n) {
                            return ":" == e ? s(n, t, "prop") : c(e, t, n)
                        },
                        N.prop = function (e, t, n) {
                            if (";" == e) return u(n);
                            if ("{" == e && O) return s(n, t, "propBlock");
                            if ("}" == e || "{" == e) return f(e, t, n);
                            if ("(" == e) return s(n, t, "parens");
                            if ("hash" != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) {
                                if ("word" == e) d(t);
                                else if ("interpolation" == e) return s(n, t, "interpolation")
                            } else m += " error";
                            return "prop"
                        },
                        N.propBlock = function (e, t, n) {
                            return "}" == e ? u(n) : "word" == e ? (m = "property", "maybeprop") : n.context.type
                        },
                        N.parens = function (e, t, n) {
                            return "{" == e || "}" == e ? f(e, t, n) : ")" == e ? u(n) : "(" == e ? s(n, t, "parens") : "interpolation" == e ? s(n, t, "interpolation") : ("word" == e && d(t), "parens")
                        },
                        N.pseudo = function (e, t, n) {
                            return "word" == e ? (m = "variable-3", n.context.type) : c(e, t, n)
                        },
                        N.documentTypes = function (e, t, n) {
                            return "word" == e && y.hasOwnProperty(t.current()) ? (m = "tag", n.context.type) : N.atBlock(e, t, n)
                        },
                        N.atBlock = function (e, t, n) {
                            if ("(" == e) return s(n, t, "atBlock_parens");
                            if ("}" == e || ";" == e) return f(e, t, n);
                            if ("{" == e) return u(n) && s(n, t, O ? "block" : "top");
                            if ("interpolation" == e) return s(n, t, "interpolation");
                            if ("word" == e) {
                                var r = t.current().toLowerCase();
                                m = "only" == r || "not" == r || "and" == r || "or" == r ? "keyword" : b.hasOwnProperty(r) ? "attribute" : w.hasOwnProperty(r) ? "property" : x.hasOwnProperty(r) ? "keyword" : k.hasOwnProperty(r) ? "property" : C.hasOwnProperty(r) ? "string-2" : M.hasOwnProperty(r) ? "atom" : L.hasOwnProperty(r) ? "keyword" : "error"
                            }
                            return n.context.type
                        },
                        N.atComponentBlock = function (e, t, n) {
                            return "}" == e ? f(e, t, n) : "{" == e ? u(n) && s(n, t, O ? "block" : "top", !1) : ("word" == e && (m = "error"), n.context.type)
                        },
                        N.atBlock_parens = function (e, t, n) {
                            return ")" == e ? u(n) : "{" == e || "}" == e ? f(e, t, n, 2) : N.atBlock(e, t, n)
                        },
                        N.restricted_atBlock_before = function (e, t, n) {
                            return "{" == e ? s(n, t, "restricted_atBlock") : "word" == e && "@counter-style" == n.stateArg ? (m = "variable", "restricted_atBlock_before") : c(e, t, n)
                        },
                        N.restricted_atBlock = function (e, t, n) {
                            return "}" == e ? (n.stateArg = null, u(n)) : "word" == e ? (m = "@font-face" == n.stateArg && !S.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == n.stateArg && !T.hasOwnProperty(t.current().toLowerCase()) ? "error" : "property", "maybeprop") : "restricted_atBlock"
                        },
                        N.keyframes = function (e, t, n) {
                            return "word" == e ? (m = "variable", "keyframes") : "{" == e ? s(n, t, "top") : c(e, t, n)
                        },
                        N.at = function (e, t, n) {
                            return ";" == e ? u(n) : "{" == e || "}" == e ? f(e, t, n) : ("word" == e ? m = "tag" : "hash" == e && (m = "builtin"), "at")
                        },
                        N.interpolation = function (e, t, n) {
                            return "}" == e ? u(n) : "{" == e || ";" == e ? f(e, t, n) : ("word" == e ? m = "variable" : "variable" != e && "(" != e && ")" != e && (m = "error"), "interpolation")
                        },
                    {
                        startState: function (e) {
                            return {
                                tokenize: null,
                                state: h ? "block" : "top",
                                stateArg: null,
                                context: new l(h ? "block" : "top", e || 0, null)
                            }
                        },
                        token: function (e, t) {
                            if (!t.tokenize && e.eatSpace()) return null;
                            var n = (t.tokenize || i)(e, t);
                            return n && "object" == typeof n && (p = n[1], n = n[0]),
                                m = n,
                                t.state = N[t.state](p, e, t),
                                m
                        },
                        indent: function (e, t) {
                            var n = e.context,
                                r = t && t.charAt(0),
                                i = n.indent;
                            return "prop" != n.type || "}" != r && ")" != r || (n = n.prev),
                                n.prev && ("}" != r || "block" != n.type && "top" != n.type && "interpolation" != n.type && "restricted_atBlock" != n.type ? (")" != r || "parens" != n.type && "atBlock_parens" != n.type) && ("{" != r || "at" != n.type && "atBlock" != n.type) || (i = Math.max(0, n.indent - g), n = n.prev) : (n = n.prev, i = n.indent)),
                                i
                        },
                        electricChars: "}",
                        blockCommentStart: "/*",
                        blockCommentEnd: "*/",
                        fold: "brace"
                    }
                });
            var r = ["domain", "regexp", "url", "url-prefix"],
                i = t(r),
                o = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
                a = t(o),
                l = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover"],
                s = t(l),
                u = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive"],
                c = t(u),
                f = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"],
                d = t(f),
                h = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"],
                p = t(h),
                m = ["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"],
                g = t(m),
                v = ["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"],
                y = t(v),
                b = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
                w = t(b),
                x = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"],
                k = t(x),
                C = r.concat(o).concat(l).concat(u).concat(f).concat(h).concat(b).concat(x);
            e.registerHelper("hintWords", "css", C),
                e.defineMIME("text/css", {
                    documentTypes: i,
                    mediaTypes: a,
                    mediaFeatures: s,
                    mediaValueKeywords: c,
                    propertyKeywords: d,
                    nonStandardPropertyKeywords: p,
                    fontProperties: g,
                    counterDescriptors: y,
                    colorKeywords: w,
                    valueKeywords: k,
                    tokenHooks: {
                        "/": function (e, t) {
                            return !!e.eat("*") && (t.tokenize = n, n(e, t))
                        }
                    },
                    name: "css"
                }),
                e.defineMIME("text/x-scss", {
                    mediaTypes: a,
                    mediaFeatures: s,
                    mediaValueKeywords: c,
                    propertyKeywords: d,
                    nonStandardPropertyKeywords: p,
                    colorKeywords: w,
                    valueKeywords: k,
                    fontProperties: g,
                    allowNested: !0,
                    tokenHooks: {
                        "/": function (e, t) {
                            return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"]
                        },
                        ":": function (e) {
                            return !!e.match(/\s*\{/) && [null, "{"]
                        },
                        $: function (e) {
                            return e.match(/^[\w-]+/),
                                e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
                        },
                        "#": function (e) {
                            return !!e.eat("{") && [null, "interpolation"]
                        }
                    },
                    name: "css",
                    helperType: "scss"
                }),
                e.defineMIME("text/x-less", {
                    mediaTypes: a,
                    mediaFeatures: s,
                    mediaValueKeywords: c,
                    propertyKeywords: d,
                    nonStandardPropertyKeywords: p,
                    colorKeywords: w,
                    valueKeywords: k,
                    fontProperties: g,
                    allowNested: !0,
                    tokenHooks: {
                        "/": function (e, t) {
                            return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"]
                        },
                        "@": function (e) {
                            return e.eat("{") ? [null, "interpolation"] : !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, !1) && (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
                        },
                        "&": function () {
                            return ["atom", "atom"]
                        }
                    },
                    name: "css",
                    helperType: "less"
                }),
                e.defineMIME("text/x-gss", {
                    documentTypes: i,
                    mediaTypes: a,
                    mediaFeatures: s,
                    propertyKeywords: d,
                    nonStandardPropertyKeywords: p,
                    fontProperties: g,
                    counterDescriptors: y,
                    colorKeywords: w,
                    valueKeywords: k,
                    supportsAtComponent: !0,
                    tokenHooks: {
                        "/": function (e, t) {
                            return !!e.eat("*") && (t.tokenize = n, n(e, t))
                        }
                    },
                    name: "css",
                    helperType: "gss"
                })
        })
    },
    function (e, t, n) {
        var r, r, i; !
            function (o, a, l) {
                "use strict"; !
                    function e(t, n, i) {
                        function o(l, s) {
                            if (!n[l]) {
                                if (!t[l]) {
                                    var u = "function" == typeof r && r;
                                    if (!s && u) return r(l, !0);
                                    if (a) return a(l, !0);
                                    var c = new Error("Cannot find module '" + l + "'");
                                    throw c.code = "MODULE_NOT_FOUND",
                                    c
                                }
                                var f = n[l] = {
                                    exports: {}
                                };
                                t[l][0].call(f.exports,
                                    function (e) {
                                        var n = t[l][1][e];
                                        return o(n ? n : e)
                                    },
                                    f, f.exports, e, t, n, i)
                            }
                            return n[l].exports
                        }
                        for (var a = "function" == typeof r && r,
                            l = 0; l < i.length; l++) o(i[l]);
                        return o
                    }({
                        1: [function (e) {
                            var t, n, r, i, s = function (e) {
                                return e && e.__esModule ? e : {
                                    default:
                                        e
                                }
                            },
                                u = e("./modules/handle-dom"),
                                c = e("./modules/utils"),
                                f = e("./modules/handle-swal-dom"),
                                d = e("./modules/handle-click"),
                                h = e("./modules/handle-key"),
                                p = s(h),
                                m = e("./modules/default-params"),
                                g = s(m),
                                v = e("./modules/set-params"),
                                y = s(v);
                            r = i = function () {
                                function e(e) {
                                    var t = r;
                                    return t[e] === l ? g.
                                        default[e] :
                                        t[e]
                                }
                                var r = arguments[0];
                                if (u.addClass(a.body, "stop-scrolling"), f.resetInput(), r === l) return c.logStr("SweetAlert expects at least 1 attribute!"),
                                    !1;
                                var i = c.extend({},
                                    g.
                                        default);
                                switch (typeof r) {
                                    case "string":
                                        i.title = r,
                                            i.text = arguments[1] || "",
                                            i.type = arguments[2] || "";
                                        break;
                                    case "object":
                                        if (r.title === l) return c.logStr('Missing "title" argument!'),
                                            !1;
                                        i.title = r.title;
                                        for (var s in g.
                                            default) i[s] = e(s);
                                        i.confirmButtonText = i.showCancelButton ? "Confirm" : g.
                                            default.confirmButtonText,
                                            i.confirmButtonText = e("confirmButtonText"),
                                            i.doneFunction = arguments[1] || null;
                                        break;
                                    default:
                                        return c.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof r),
                                            !1
                                }
                                y.
                                    default(i),
                                    f.fixVerticalPosition(),
                                    f.openModal(arguments[1]);
                                for (var h = f.getModal(), m = h.querySelectorAll("button"), v = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], b = function (e) {
                                    return d.handleButton(e, i, h)
                                },
                                    w = 0; w < m.length; w++) for (var x = 0; x < v.length; x++) {
                                        var k = v[x];
                                        m[w][k] = b
                                    }
                                f.getOverlay().onclick = b,
                                    t = o.onkeydown;
                                var C = function (e) {
                                    return p.
                                        default(e, i, h)
                                };
                                o.onkeydown = C,
                                    o.onfocus = function () {
                                        setTimeout(function () {
                                            n !== l && (n.focus(), n = l)
                                        },
                                            0)
                                    }
                            },
                                r.setDefaults = i.setDefaults = function (e) {
                                    if (!e) throw new Error("userParams is required");
                                    if ("object" != typeof e) throw new Error("userParams has to be a object");
                                    c.extend(g.
                                        default, e)
                                },
                                r.close = i.close = function () {
                                    var e = f.getModal();
                                    u.fadeOut(f.getOverlay(), 5),
                                        u.fadeOut(e, 5),
                                        u.removeClass(e, "showSweetAlert"),
                                        u.addClass(e, "hideSweetAlert"),
                                        u.removeClass(e, "visible");
                                    var r = e.querySelector(".sa-icon.sa-success");
                                    u.removeClass(r, "animate"),
                                        u.removeClass(r.querySelector(".sa-tip"), "animateSuccessTip"),
                                        u.removeClass(r.querySelector(".sa-long"), "animateSuccessLong");
                                    var i = e.querySelector(".sa-icon.sa-error");
                                    u.removeClass(i, "animateErrorIcon"),
                                        u.removeClass(i.querySelector(".sa-x-mark"), "animateXMark");
                                    var s = e.querySelector(".sa-icon.sa-warning");
                                    return u.removeClass(s, "pulseWarning"),
                                        u.removeClass(s.querySelector(".sa-body"), "pulseWarningIns"),
                                        u.removeClass(s.querySelector(".sa-dot"), "pulseWarningIns"),
                                        setTimeout(function () {
                                            var t = e.getAttribute("data-custom-class");
                                            u.removeClass(e, t)
                                        },
                                            300),
                                        u.removeClass(a.body, "stop-scrolling"),
                                        o.onkeydown = t,
                                        o.previousActiveElement && o.previousActiveElement.focus(),
                                        n = l,
                                        clearTimeout(e.timeout),
                                        !0
                                },
                                r.showInputError = i.showInputError = function (e) {
                                    var t = f.getModal(),
                                        n = t.querySelector(".sa-input-error");
                                    u.addClass(n, "show");
                                    var r = t.querySelector(".sa-error-container");
                                    u.addClass(r, "show"),
                                        r.querySelector("p").innerHTML = e,
                                        t.querySelector("input").focus()
                                },
                                r.resetInputError = i.resetInputError = function (e) {
                                    if (e && 13 === e.keyCode) return !1;
                                    var t = f.getModal(),
                                        n = t.querySelector(".sa-input-error");
                                    u.removeClass(n, "show");
                                    var r = t.querySelector(".sa-error-container");
                                    u.removeClass(r, "show")
                                },
                                "undefined" != typeof o ? o.sweetAlert = o.swal = r : c.logStr("SweetAlert is a frontend module!")
                        },
                        {
                            "./modules/default-params": 2,
                            "./modules/handle-click": 3,
                            "./modules/handle-dom": 4,
                            "./modules/handle-key": 5,
                            "./modules/handle-swal-dom": 6,
                            "./modules/set-params": 8,
                            "./modules/utils": 9
                        }],
                        2: [function (e, t, n) {
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var r = {
                                title: "",
                                text: "",
                                type: null,
                                allowOutsideClick: !1,
                                showConfirmButton: !0,
                                showCancelButton: !1,
                                closeOnConfirm: !0,
                                closeOnCancel: !0,
                                confirmButtonText: "OK",
                                confirmButtonColor: "#AEDEF4",
                                cancelButtonText: "Cancel",
                                imageUrl: null,
                                imageSize: null,
                                timer: null,
                                customClass: "",
                                html: !1,
                                animation: !0,
                                allowEscapeKey: !0,
                                inputType: "text",
                                inputPlaceholder: "",
                                inputValue: ""
                            };
                            n.
                                default = r,
                                t.exports = n.
                                    default
                        },
                        {}],
                        3: [function (e, t, n) {
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var r = e("./utils"),
                                i = (e("./handle-swal-dom"), e("./handle-dom")),
                                a = function (e, t, n) {
                                    function a(e) {
                                        p && t.confirmButtonColor && (h.style.backgroundColor = e)
                                    }
                                    var u, c, f, d = e || o.event,
                                        h = d.target || d.srcElement,
                                        p = -1 !== h.className.indexOf("confirm"),
                                        m = -1 !== h.className.indexOf("sweet-overlay"),
                                        g = i.hasClass(n, "visible"),
                                        v = t.doneFunction && "true" === n.getAttribute("data-has-done-function");
                                    switch (p && t.confirmButtonColor && (u = t.confirmButtonColor, c = r.colorLuminance(u, -.04), f = r.colorLuminance(u, -.14)), d.type) {
                                        case "mouseover":
                                            a(c);
                                            break;
                                        case "mouseout":
                                            a(u);
                                            break;
                                        case "mousedown":
                                            a(f);
                                            break;
                                        case "mouseup":
                                            a(c);
                                            break;
                                        case "focus":
                                            var y = n.querySelector("button.confirm"),
                                                b = n.querySelector("button.cancel");
                                            p ? b.style.boxShadow = "none" : y.style.boxShadow = "none";
                                            break;
                                        case "click":
                                            var w = n === h,
                                                x = i.isDescendant(n, h);
                                            if (!w && !x && g && !t.allowOutsideClick) break;
                                            p && v && g ? l(n, t) : v && g || m ? s(n, t) : i.isDescendant(n, h) && "BUTTON" === h.tagName && sweetAlert.close()
                                    }
                                },
                                l = function (e, t) {
                                    var n = !0;
                                    i.hasClass(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")),
                                        t.doneFunction(n),
                                        t.closeOnConfirm && sweetAlert.close()
                                },
                                s = function (e, t) {
                                    var n = String(t.doneFunction).replace(/\s/g, ""),
                                        r = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
                                    r && t.doneFunction(!1),
                                        t.closeOnCancel && sweetAlert.close()
                                };
                            n.
                                default = {
                                handleButton: a,
                                handleConfirm: l,
                                handleCancel: s
                            },
                                t.exports = n.
                                    default
                        },
                        {
                            "./handle-dom": 4,
                            "./handle-swal-dom": 6,
                            "./utils": 9
                        }],
                        4: [function (e, t, n) {
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var r = function (e, t) {
                                return new RegExp(" " + t + " ").test(" " + e.className + " ")
                            },
                                i = function (e, t) {
                                    r(e, t) || (e.className += " " + t)
                                },
                                l = function (e, t) {
                                    var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                                    if (r(e, t)) {
                                        for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                                        e.className = n.replace(/^\s+|\s+$/g, "")
                                    }
                                },
                                s = function (e) {
                                    var t = a.createElement("div");
                                    return t.appendChild(a.createTextNode(e)),
                                        t.innerHTML
                                },
                                u = function (e) {
                                    e.style.opacity = "",
                                        e.style.display = "block"
                                },
                                c = function (e) {
                                    if (e && !e.length) return u(e);
                                    for (var t = 0; t < e.length; ++t) u(e[t])
                                },
                                f = function (e) {
                                    e.style.opacity = "",
                                        e.style.display = "none"
                                },
                                d = function (e) {
                                    if (e && !e.length) return f(e);
                                    for (var t = 0; t < e.length; ++t) f(e[t])
                                },
                                h = function (e, t) {
                                    for (var n = t.parentNode; null !== n;) {
                                        if (n === e) return !0;
                                        n = n.parentNode
                                    }
                                    return !1
                                },
                                p = function (e) {
                                    e.style.left = "-9999px",
                                        e.style.display = "block";
                                    var t, n = e.clientHeight;
                                    return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding),
                                        e.style.left = "",
                                        e.style.display = "none",
                                        "-" + parseInt((n + t) / 2) + "px"
                                },
                                m = function (e, t) {
                                    if (+ e.style.opacity < 1) {
                                        t = t || 16,
                                            e.style.opacity = 0,
                                            e.style.display = "block";
                                        var n = +new Date,
                                            r = function (e) {
                                                function t() {
                                                    return e.apply(this, arguments)
                                                }
                                                return t.toString = function () {
                                                    return e.toString()
                                                },
                                                    t
                                            }(function () {
                                                e.style.opacity = +e.style.opacity + (new Date - n) / 100,
                                                    n = +new Date,
                                                    +e.style.opacity < 1 && setTimeout(r, t)
                                            });
                                        r()
                                    }
                                    e.style.display = "block"
                                },
                                g = function (e, t) {
                                    t = t || 16,
                                        e.style.opacity = 1;
                                    var n = +new Date,
                                        r = function (e) {
                                            function t() {
                                                return e.apply(this, arguments)
                                            }
                                            return t.toString = function () {
                                                return e.toString()
                                            },
                                                t
                                        }(function () {
                                            e.style.opacity = +e.style.opacity - (new Date - n) / 100,
                                                n = +new Date,
                                                +e.style.opacity > 0 ? setTimeout(r, t) : e.style.display = "none"
                                        });
                                    r()
                                },
                                v = function (e) {
                                    if ("function" == typeof MouseEvent) {
                                        var t = new MouseEvent("click", {
                                            view: o,
                                            bubbles: !1,
                                            cancelable: !0
                                        });
                                        e.dispatchEvent(t)
                                    } else if (a.createEvent) {
                                        var n = a.createEvent("MouseEvents");
                                        n.initEvent("click", !1, !1),
                                            e.dispatchEvent(n)
                                    } else a.createEventObject ? e.fireEvent("onclick") : "function" == typeof e.onclick && e.onclick()
                                },
                                y = function (e) {
                                    "function" == typeof e.stopPropagation ? (e.stopPropagation(), e.preventDefault()) : o.event && o.event.hasOwnProperty("cancelBubble") && (o.event.cancelBubble = !0)
                                };
                            n.hasClass = r,
                                n.addClass = i,
                                n.removeClass = l,
                                n.escapeHtml = s,
                                n._show = u,
                                n.show = c,
                                n._hide = f,
                                n.hide = d,
                                n.isDescendant = h,
                                n.getTopMargin = p,
                                n.fadeIn = m,
                                n.fadeOut = g,
                                n.fireClick = v,
                                n.stopEventPropagation = y
                        },
                        {}],
                        5: [function (e, t, n) {
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var r = e("./handle-dom"),
                                i = e("./handle-swal-dom"),
                                a = function (e, t, n) {
                                    var a = e || o.event,
                                        s = a.keyCode || a.which,
                                        u = n.querySelector("button.confirm"),
                                        c = n.querySelector("button.cancel"),
                                        f = n.querySelectorAll("button[tabindex]");
                                    if (-1 !== [9, 13, 32, 27].indexOf(s)) {
                                        for (var d = a.target || a.srcElement,
                                            h = -1,
                                            p = 0; p < f.length; p++) if (d === f[p]) {
                                                h = p;
                                                break
                                            }
                                        9 === s ? (d = -1 === h ? u : h === f.length - 1 ? f[0] : f[h + 1], r.stopEventPropagation(a), d.focus(), t.confirmButtonColor && i.setFocusStyle(d, t.confirmButtonColor)) : 13 === s ? ("INPUT" === d.tagName && (d = u, u.focus()), d = -1 === h ? u : l) : 27 === s && t.allowEscapeKey === !0 ? (d = c, r.fireClick(d, a)) : d = l
                                    }
                                };
                            n.
                                default = a,
                                t.exports = n.
                                    default
                        },
                        {
                            "./handle-dom": 4,
                            "./handle-swal-dom": 6
                        }],
                        6: [function (e, t, n) {
                            var r = function (e) {
                                return e && e.__esModule ? e : {
                                    default:
                                        e
                                }
                            };
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var i = e("./utils"),
                                l = e("./handle-dom"),
                                s = e("./default-params"),
                                u = r(s),
                                c = e("./injected-html"),
                                f = r(c),
                                d = ".sweet-alert",
                                h = ".sweet-overlay",
                                p = function () {
                                    var e = a.createElement("div");
                                    for (e.innerHTML = f.
                                        default; e.firstChild;) a.body.appendChild(e.firstChild)
                                },
                                m = function (e) {
                                    function t() {
                                        return e.apply(this, arguments)
                                    }
                                    return t.toString = function () {
                                        return e.toString()
                                    },
                                        t
                                }(function () {
                                    var e = a.querySelector(d);
                                    return e || (p(), e = m()),
                                        e
                                }),
                                g = function () {
                                    var e = m();
                                    return e ? e.querySelector("input") : void 0
                                },
                                v = function () {
                                    return a.querySelector(h)
                                },
                                y = function (e, t) {
                                    var n = i.hexToRgb(t);
                                    e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                                },
                                b = function (e) {
                                    var t = m();
                                    l.fadeIn(v(), 10),
                                        l.show(t),
                                        l.addClass(t, "showSweetAlert"),
                                        l.removeClass(t, "hideSweetAlert"),
                                        o.previousActiveElement = a.activeElement;
                                    var n = t.querySelector("button.confirm");
                                    n.focus(),
                                        setTimeout(function () {
                                            l.addClass(t, "visible")
                                        },
                                            500);
                                    var r = t.getAttribute("data-timer");
                                    if ("null" !== r && "" !== r) {
                                        var i = e;
                                        t.timeout = setTimeout(function () {
                                            var e = (i || null) && "true" === t.getAttribute("data-has-done-function");
                                            e ? i(null) : sweetAlert.close()
                                        },
                                            r)
                                    }
                                },
                                w = function () {
                                    var e = m(),
                                        t = g();
                                    l.removeClass(e, "show-input"),
                                        t.value = u.
                                            default.inputValue,
                                        t.setAttribute("type", u.
                                            default.inputType),
                                        t.setAttribute("placeholder", u.
                                            default.inputPlaceholder),
                                        x()
                                },
                                x = function (e) {
                                    if (e && 13 === e.keyCode) return !1;
                                    var t = m(),
                                        n = t.querySelector(".sa-input-error");
                                    l.removeClass(n, "show");
                                    var r = t.querySelector(".sa-error-container");
                                    l.removeClass(r, "show")
                                },
                                k = function () {
                                    var e = m();
                                    e.style.marginTop = l.getTopMargin(m())
                                };
                            n.sweetAlertInitialize = p,
                                n.getModal = m,
                                n.getOverlay = v,
                                n.getInput = g,
                                n.setFocusStyle = y,
                                n.openModal = b,
                                n.resetInput = w,
                                n.resetInputError = x,
                                n.fixVerticalPosition = k
                        },
                        {
                            "./default-params": 2,
                            "./handle-dom": 4,
                            "./injected-html": 7,
                            "./utils": 9
                        }],
                        7: [function (e, t, n) {
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var r = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <button class="confirm" tabIndex="1">OK</button>\n    </div></div>';
                            n.
                                default = r,
                                t.exports = n.
                                    default
                        },
                        {}],
                        8: [function (e, t, n) {
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var r = e("./utils"),
                                i = e("./handle-swal-dom"),
                                o = e("./handle-dom"),
                                a = ["error", "warning", "info", "success", "input", "prompt"],
                                s = function (e) {
                                    var t = i.getModal(),
                                        n = t.querySelector("h2"),
                                        s = t.querySelector("p"),
                                        u = t.querySelector("button.cancel"),
                                        c = t.querySelector("button.confirm");
                                    if (n.innerHTML = e.html ? e.title : o.escapeHtml(e.title).split("\n").join("<br>"), s.innerHTML = e.html ? e.text : o.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && o.show(s), e.customClass) o.addClass(t, e.customClass),
                                        t.setAttribute("data-custom-class", e.customClass);
                                    else {
                                        var f = t.getAttribute("data-custom-class");
                                        o.removeClass(t, f),
                                            t.setAttribute("data-custom-class", "")
                                    }
                                    if (o.hide(t.querySelectorAll(".sa-icon")), e.type && !r.isIE8()) {
                                        var d = function () {
                                            for (var n = !1,
                                                r = 0; r < a.length; r++) if (e.type === a[r]) {
                                                    n = !0;
                                                    break
                                                }
                                            if (!n) return logStr("Unknown alert type: " + e.type),
                                            {
                                                v: !1
                                            };
                                            var s = ["success", "error", "warning", "info"],
                                                u = l; - 1 !== s.indexOf(e.type) && (u = t.querySelector(".sa-icon.sa-" + e.type), o.show(u));
                                            var c = i.getInput();
                                            switch (e.type) {
                                                case "success":
                                                    o.addClass(u, "animate"),
                                                        o.addClass(u.querySelector(".sa-tip"), "animateSuccessTip"),
                                                        o.addClass(u.querySelector(".sa-long"), "animateSuccessLong");
                                                    break;
                                                case "error":
                                                    o.addClass(u, "animateErrorIcon"),
                                                        o.addClass(u.querySelector(".sa-x-mark"), "animateXMark");
                                                    break;
                                                case "warning":
                                                    o.addClass(u, "pulseWarning"),
                                                        o.addClass(u.querySelector(".sa-body"), "pulseWarningIns"),
                                                        o.addClass(u.querySelector(".sa-dot"), "pulseWarningIns");
                                                    break;
                                                case "input":
                                                case "prompt":
                                                    c.setAttribute("type", e.inputType),
                                                        c.value = e.inputValue,
                                                        c.setAttribute("placeholder", e.inputPlaceholder),
                                                        o.addClass(t, "show-input"),
                                                        setTimeout(function () {
                                                            c.focus(),
                                                                c.addEventListener("keyup", swal.resetInputError)
                                                        },
                                                            400)
                                            }
                                        }();
                                        if ("object" == typeof d) return d.v
                                    }
                                    if (e.imageUrl) {
                                        var h = t.querySelector(".sa-icon.sa-custom");
                                        h.style.backgroundImage = "url(" + e.imageUrl + ")",
                                            o.show(h);
                                        var p = 80,
                                            m = 80;
                                        if (e.imageSize) {
                                            var g = e.imageSize.toString().split("x"),
                                                v = g[0],
                                                y = g[1];
                                            v && y ? (p = v, m = y) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
                                        }
                                        h.setAttribute("style", h.getAttribute("style") + "width:" + p + "px; height:" + m + "px")
                                    }
                                    t.setAttribute("data-has-cancel-button", e.showCancelButton),
                                        e.showCancelButton ? u.style.display = "inline-block" : o.hide(u),
                                        t.setAttribute("data-has-confirm-button", e.showConfirmButton),
                                        e.showConfirmButton ? c.style.display = "inline-block" : o.hide(c),
                                        e.cancelButtonText && (u.innerHTML = o.escapeHtml(e.cancelButtonText)),
                                        e.confirmButtonText && (c.innerHTML = o.escapeHtml(e.confirmButtonText)),
                                        e.confirmButtonColor && (c.style.backgroundColor = e.confirmButtonColor, i.setFocusStyle(c, e.confirmButtonColor)),
                                        t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
                                    var b = !!e.doneFunction;
                                    t.setAttribute("data-has-done-function", b),
                                        e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"),
                                        t.setAttribute("data-timer", e.timer)
                                };
                            n.
                                default = s,
                                t.exports = n.
                                    default
                        },
                        {
                            "./handle-dom": 4,
                            "./handle-swal-dom": 6,
                            "./utils": 9
                        }],
                        9: [function (e, t, n) {
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var r = function (e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                                return e
                            },
                                i = function (e) {
                                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                                    return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
                                },
                                a = function () {
                                    return o.attachEvent && !o.addEventListener
                                },
                                l = function (e) {
                                    o.console && o.console.log("SweetAlert: " + e)
                                },
                                s = function (e, t) {
                                    e = String(e).replace(/[^0-9a-f]/gi, ""),
                                        e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                                        t = t || 0;
                                    var n, r, i = "#";
                                    for (r = 0; 3 > r; r++) n = parseInt(e.substr(2 * r, 2), 16),
                                        n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16),
                                        i += ("00" + n).substr(n.length);
                                    return i
                                };
                            n.extend = r,
                                n.hexToRgb = i,
                                n.isIE8 = a,
                                n.logStr = l,
                                n.colorLuminance = s
                        },
                        {}]
                    },
                        {},
                        [1]),
                    i = function () {
                        return sweetAlert
                    }.call(t, n, t, e),
                    !(void 0 !== i && (e.exports = i))
            }(window, document)
    },
    function (e, t, n) {
        function r(e, t) {
            var n = e.options[e.selectedIndex].value,
                r = n.replace(/_/, " "),
                i = document.getElementById("selected-theme");
            null !== i && document.head.removeChild(i);
            var o = {
                id: "selected-theme",
                path: "themes/" + c(n) + "/" + n + ".css",
                checkClass: "theme-" + n + "-css-check"
            };
            "default" === n ? t.setOption("theme", r) : u(o).then(function () {
                t.setOption("theme", r)
            })
        }
        function i(e, t) {
            var n = document.getElementById("themes"),
                i = document.getElementById("themes-example");
            i.innerHTML = s(JSON.stringify(h));
            var a = e.fromTextArea(i, {
                readOnly: !0,
                mode: "application/ld+json",
                lineWrapping: !0,
                lineNumbers: !0,
                tabSize: 2,
                foldGutter: !0,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
            });
            themes.onchange = function () {
                r(n, a)
            };
            var u = t;
            n.appendChild(o(f, u)),
                n.appendChild(l("Light", d.light, u)),
                n.appendChild(l("Dark", d.dark, u)),
                u && "default" !== u && themes.onchange()
        }
        function o(e, t) {
            var n = document.createElement("option");
            return n.value = e,
                n.text = e,
                e === t && (n.selected = "selected"),
                n
        }
        function a(e) {
            var t = document.createElement("optgroup");
            return t.label = e,
                t
        }
        function l(e, t, n) {
            var r = a(e);
            return t.forEach(function (e) {
                r.appendChild(o(e, n))
            }),
                r
        }
        var s = n(78),
            u = n(98),
            c = n(101),
            f = "default",
            d = {
                light: ["base16-light", "coy", "funky", "mdn-like", "neo", "solarized_light", "yeti"],
                dark: ["3024-night", "ambiance", "base16-dark", "cobalt", "dark", "dracula-custom", "dracula", "jellybeans", "material", "mbo", "mehdi", "midnight", "monokai", "okaidia", "panda-syntax", "solarized_dark", "tomorrow", "twilight", "zenburn"]
            },
            h = {
                title: "JSON Example",
                nested: {
                    someInteger: 7,
                    someBoolean: !0,
                    someArray: ["list of", "fake strings", "and fake keys"]
                }
            };
        e.exports = i
    },
    function (e, t, n) {
        function r(e, t) {
            var n = document.getElementById("addons");
            return n.innerHTML = i(JSON.stringify(t)),
                e.fromTextArea(n, {
                    mode: "application/ld+json",
                    lineWrapping: !0,
                    lineNumbers: !0,
                    tabSize: 2
                })
        }
        var i = n(78);
        e.exports = r
    },
    function (e, t, n) {
        function r(e, t) {
            var n = document.getElementById("structure");
            return n.innerHTML = i(JSON.stringify(t)),
                e.fromTextArea(n, {
                    mode: "application/ld+json",
                    lineWrapping: !0,
                    lineNumbers: !0,
                    tabSize: 2
                })
        }
        var i = n(78);
        e.exports = r
    },
    function (e, t, n) {
        function r(e, t) {
            var n = document.getElementById("style");
            return n.innerHTML = t,
                e.fromTextArea(n, {
                    mode: "css",
                    lineWrapping: !0,
                    lineNumbers: !0,
                    tabSize: 2,
                    extraKeys: {
                        "Ctrl-Space": "autocomplete"
                    }
                })
        }
        n(10);
        e.exports = r
    },
    function (e, t) {
        function n(e, t) {
            var n = document.getElementById("options");
            n.onsubmit = function () {
                return !1
            };
            var r = document.getElementById("save");
            r.onclick = function (r) {
                r.preventDefault();
                var i = {};
                e.forEach(function (e) {
                    e.save()
                });
                for (var o = 0; o < n.elements.length; o++) {
                    var r = n.elements[o];
                    /-example$/.test(r.name) || 0 === r.name.length || (i[r.name] = r.value)
                }
                t(i)
            }
        }
        e.exports = n
    },
    function (e, t, n) {
        function r() {
            var e = document.getElementById("reset");
            e.onclick = function (e) {
                e.preventDefault(),
                    i({
                        title: "是否确定重置？",
                        text: "自定义设置内容将丢失",
                        type: "warning",
                        showCancelButton: !0,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "是的，重置！",
                        closeOnConfirm: !1
                    },
                        function () {
                            var e = {};
                            e.theme = o.theme,
                                e.addons = JSON.stringify(o.addons),
                                e.structure = JSON.stringify(o.structure),
                                e.style = o.style,
                                a.save(e),
                                document.location.reload()
                        })
            }
        }
        var i = n(119),
            o = n(10),
            a = n(9);
        e.exports = r
    }]));