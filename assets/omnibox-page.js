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
    }([function (e, t, n) {
        e.exports = n(64)
    },
        , , , , , , ,
    function (e, t) {
        e.exports = chrome
    },
        ,
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
        , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function (e, t, n) {
        function r() {
            var e = document.getElementsByTagName("pre")[0],
                t = window.location.search.substring(1);
            l(t) ? i(e) : o(e, t)
        }
        function i(e) {
            e.hidden = !0,
                u(e)
        }
        function o(e, t) {
            var n = t.replace(/^json=/, "");
            e.innerText = decodeURIComponent(n),
                a.checkIfJson(function (e) {
                    e.hidden = !0,
                        s(e, !0)
                },
                    e)
        }
        function l(e) {
            return /scratch-page=true/.test(e)
        }
        var a = n(65),
            s = n(67),
            u = n(102);
        document.addEventListener("DOMContentLoaded", r, !1)
    },
    function (e, t, n) {
        function r(e) {
            return !Object.keys(e).some(function (t) {
                return "#text" !== e[t].nodeName
            })
        }
        function i() {
            var e = document.body.childNodes;
            if (0 === e.length) return null;
            e.length > 1 && r(e) && document.body.normalize();
            var t = e[0],
                n = t.nodeName,
                i = t.textContent;
            if ("PRE" === n) return t;
            if ("#text" === n && i.trim().length > 0) {
                var o = document.createElement("pre");
                return o.textContent = i,
                    document.body.removeChild(t),
                    document.body.appendChild(o),
                    c = !0,
                    o
            }
            return null
        }
        function o() {
            var e = document.body.lastChild,
                t = document.createElement("text");
            t.textContent = e.textContent,
                document.body.insertBefore(t, document.body.firstChild),
                document.body.removeChild(e)
        }
        function l(e) {
            var t = e;
            return !(!t || 0 === t.length) && (t = t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@"), t = t.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]"), t = t.replace(/(?:^|:|,)(?:\s*\[)+/g, ""), /^[\],:{}\s]*$/.test(t))
        }
        function a(e) {
            return l(u(e))
        }
        function s(e, t) {
            var n = t || i();
            null !== n && void 0 !== n && (l(n.textContent) || a(n.textContent)) ? e(n) : c && o()
        }
        var u = n(66),
            c = !1;
        e.exports = {
            checkIfJson: s,
            isJSON: l
        }
    },
    function (e, t) {
        function n(e) {
            return e.replace(/\s*while\((1|true)\)\s*;?/, "").replace(/\s*for\(;;\)\s*;?/, "").replace(/^[^{\[].+\(\s*?{/, "{").replace(/}\s*?\);?\s*$/, "}")
        }
        e.exports = n
    },
    function (e, t, n) {
        function r(e, t, n) {
            var r = e.textContent.length,
                i = t.addons.maxJsonSize,
                l = r / 1024,
                a = 1024 * i,
                s = r > a;
            if (s) {
                console.warn("[JSONViewer] 因内容尺寸过大，内容未渲染。允许接收：" + i + " kbytes，当前接收：" + l +" kbytes。可以在：选项 -> 扩展组件 -> maxJsonSize 处更改此值");
                var u = document.createElement("div"),
                    c = document.createElement("div");
                c.innerHTML = "[JSONViewer] 因内容尺寸过大，内容未渲染，查看控制台日志以获取更多信息。",
                    u.appendChild(c);
                var h = document.createElement("a");
                h.href = "#",
                    h.title = "仍然渲染！",
                    h.innerHTML = "仍然渲染！",
                    h.onclick = function (t) {
                        t.preventDefault(),
                            e.hidden = !0,
                            o(e, n, !0)
                    },
                    u.appendChild(h),
                    f(e, t, u)
            }
            return s
        }
        function i(e, t, n) {
            if (!t && e.addons.prependHeader) {
                var r = "// " + s() + "\n";
                r += "// " + document.location.href + "\n\n",
                    n = r + n
            }
            return n
        }
        function o(e, t, n) {
            h().then(function (o) {
                return !n && r(e, o, t) ? e.hidden = !1 : l(e, o).then(function (e) {
                    return d(o).then(function () {
                        return e
                    })
                }).then(function (n) {
                    var r = i(o, t, n.jsonText),
                    l = new a(r, o);
                    (o.addons.alwaysFold || o.addons.awaysFold) && l.fold(),
                    u(n.jsonExtracted, t),
                        o.addons.autoHighlight ? l.highlight() : (l.highlight(), l.hide(), e.hidden = !1, console.warn("[JSONViewer] 你看到的是原始格式，因为你将扩展组件的“autoHighlight”设置为false。点击右上角的“RAW”按钮可以在此页面上渲染格式，可以在：选项 -> 扩展组件 -> autoHighlight 处更改此值")),
                        c(e, o, l)
                })
            }).
                catch(function (t) {
                    e.hidden = !1
                })
        }
        var l = n(68),
            a = n(79),
            s = n(91),
            u = n(92),
            c = n(93),
            f = n(97),
            h = n(99),
            d = n(100);
        e.exports = o
    },
    function (e, t, n) {
        function r(e, t) {
            return new u(function (n, r) {
                try {
                    var a = e.textContent,
                        s = f(a),
                        u = l(s),
                        h = JSON.parse(u);
                    t.addons.sortKeys && (h = o(h));
                    var d = JSON.stringify(h);
                    d = d.replace(m, "$1");
                    var p = i(c(d, t.structure)),
                        g = i(a).replace(i(s), p);
                    n({
                        jsonText: g,
                        jsonExtracted: d
                    })
                } catch (e) {
                    r(new Error("contentExtractor: " + e.message))
                }
            })
        }
        function i(e) {
            return e.replace(/\$/g, "$$$$")
        }
        function o(e) {
            if ("object" != typeof e || !e) return e;
            var t;
            return Array.isArray(e) ? (t = [], e.forEach(function (e, n) {
                t[n] = o(e)
            })) : (t = {},
                Object.keys(e).sort().forEach(function (n) {
                    t[n] = o(e[n])
                })),
                t
        }
        function l(e) {
            for (var t = "",
                n = "",
                r = !1,
                i = !1,
                o = !1,
                l = "",
                u = "",
                c = 0,
                f = e.length; c < f; c++) {
                var h = e[c];
                '"' != h || i || (r = !r),
                    r || o || !a(h, l) || (o = !0),
                    !r && o && s(h, l) && (o = !1, t += n.match(g) ? '"' + d + n + p + '"' : n, n = ""),
                    i = "\\" == h && !i,
                    o ? n += h : (t += h, u = l, l = h)
            }
            return t
        }
        function a(e, t) {
            return "0" <= e && e <= "9" || "0" <= t && t <= "9" && ("e" == e || "E" == e) || ("e" == t || "E" == t) && "+" == e || "." == e || "-" == e
        }
        function s(e, t) {
            return ("0" > e || e > "9") && "e" != e && "E" != e && "+" != e && "." != e && "-" != e
        }
        var u = n(69),
            c = n(78),
            f = n(66),
            h = (Math.random() + 1).toString(36).slice(2, 7),
            d = "<wrap_" + h + ">",
            p = "</wrap_" + h + ">",
            g = /^-?\d+\.?\d*([eE]\+)?\d*$/g,
            v = "(-?\\d+\\.?\\d*([eE]\\+)?\\d*)",
            m = (new RegExp("^" + d + v + p + "$", "g"), new RegExp('"' + d + v + p + '"', "g"));
        e.exports = r
    },
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
                return v = e,
                    m
            }
        }
        function o(e, t) {
            try {
                return e(t)
            } catch (e) {
                return v = e,
                    m
            }
        }
        function l(e, t, n) {
            try {
                e(t, n)
            } catch (e) {
                return v = e,
                    m
            }
        }
        function a(e) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._37 = 0,
                this._12 = null,
                this._59 = [],
                e !== r && p(e, this)
        }
        function s(e, t, n) {
            return new e.constructor(function (i, o) {
                var l = new a(r);
                l.then(i, o),
                    u(e, new d(t, n, l))
            })
        }
        function u(e, t) {
            for (; 3 === e._37;) e = e._12;
            return 0 === e._37 ? void e._59.push(t) : void g(function () {
                var n = 1 === e._37 ? t.onFulfilled : t.onRejected;
                if (null === n) return void (1 === e._37 ? c(t.promise, e._12) : f(t.promise, e._12));
                var r = o(n, e._12);
                r === m ? f(t.promise, v) : c(t.promise, r)
            })
        }
        function c(e, t) {
            if (t === e) return f(e, new TypeError("A promise cannot be resolved with itself."));
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = i(t);
                if (n === m) return f(e, v);
                if (n === e.then && t instanceof a) return e._37 = 3,
                    e._12 = t,
                    void h(e);
                if ("function" == typeof n) return void p(n.bind(t), e)
            }
            e._37 = 1,
                e._12 = t,
                h(e)
        }
        function f(e, t) {
            e._37 = 2,
                e._12 = t,
                h(e)
        }
        function h(e) {
            for (var t = 0; t < e._59.length; t++) u(e, e._59[t]);
            e._59 = null
        }
        function d(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
        }
        function p(e, t) {
            var n = !1,
                r = l(e,
                    function (e) {
                        n || (n = !0, c(t, e))
                    },
                    function (e) {
                        n || (n = !0, f(t, e))
                    });
            n || r !== m || (n = !0, f(t, v))
        }
        var g = n(72),
            v = null,
            m = {};
        e.exports = a,
            a._99 = r,
            a.prototype.then = function (e, t) {
                if (this.constructor !== a) return s(this, e, t);
                var n = new a(r);
                return u(this, new d(e, t, n)),
                    n
            }
    },
    function (e, t) {
        (function (t) {
            "use strict";
            function n(e) {
                a.length || (l(), s = !0),
                    a[a.length] = e
            }
            function r() {
                for (; u < a.length;) {
                    var e = u;
                    if (u += 1, a[e].call(), u > c) {
                        for (var t = 0,
                            n = a.length - u; t < n; t++) a[t] = a[t + u];
                        a.length -= u,
                            u = 0
                    }
                }
                a.length = 0,
                    u = 0,
                    s = !1
            }
            function i(e) {
                var t = 1,
                    n = new h(e),
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
            var l, a = [],
                s = !1,
                u = 0,
                c = 1024,
                f = "undefined" != typeof t ? t : self,
                h = f.MutationObserver || f.WebKitMutationObserver;
            l = "function" == typeof h ? i(r) : o(r),
                n.requestFlush = l,
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
            l = r(!1),
            a = r(null),
            s = r(void 0),
            u = r(0),
            c = r("");
        i.resolve = function (e) {
            if (e instanceof i) return e;
            if (null === e) return a;
            if (void 0 === e) return s;
            if (e === !0) return o;
            if (e === !1) return l;
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
                    function r(l, a) {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            if (a instanceof i && a.then === i.prototype.then) {
                                for (; 3 === a._37;) a = a._12;
                                return 1 === a._37 ? r(l, a._12) : (2 === a._37 && n(a._12), void a.then(function (e) {
                                    r(l, e)
                                },
                                    n))
                            }
                            var s = a.then;
                            if ("function" == typeof s) {
                                var u = new i(s.bind(a));
                                return void u.then(function (e) {
                                    r(l, e)
                                },
                                    n)
                            }
                        }
                        t[l] = a,
                            0 === --o && e(t)
                    }
                    if (0 === t.length) return e([]);
                    for (var o = t.length,
                        l = 0; l < t.length; l++) r(l, t[l])
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
            t = a.length ? a.pop() : new o,
                t.task = e,
                l(t)
        }
        function o() {
            this.task = null
        }
        var l = n(72),
            a = [],
            s = [],
            u = l.makeRequestCallFromTimer(r);
        e.exports = i,
            o.prototype.call = function () {
                try {
                    this.task.call()
                } catch (e) {
                    i.onerror ? i.onerror(e) : (s.push(e), u())
                } finally {
                    this.task = null,
                        a[a.length] = this
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
                    l = "undefined" != typeof r.showArraySize && Boolean(r.showArraySize), a = "", s = 0; s < i; s++) a += " ";
                var u = 0,
                    c = 0,
                    f = "",
                    h = 0,
                    d = !1,
                    p = null;
                for (u = 0, c = n.length; u < c; u += 1) switch (p = n.charAt(u)) {
                    case "{":
                    case "[":
                        if (d) f += p;
                        else {
                            if (o && (f += "\n" + e(a, h)), "[" === p && l) {
                                var g = t(n, u);
                                null !== g && (f += "Array[" + g + "]")
                            }
                            f += p,
                                f += "\n" + e(a, h + 1),
                                h += 1
                        }
                        break;
                    case "}":
                    case "]":
                        d ? f += p : (h -= 1, f += "\n" + e(a, h) + p);
                        break;
                    case ",":
                        f += d ? p : ",\n" + e(a, h);
                        break;
                    case ":":
                        f += d ? p : ": ";
                        break;
                    case " ":
                    case "\n":
                    case "\t":
                        d && (f += p);
                        break;
                    case '"':
                        0 === u ? d = !0 : ("\\" !== n.charAt(u - 1) || "\\" == n.charAt(u - 1) && "\\" == n.charAt(u - 2)) && (d = !d),
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
    function (e, t, n) {
        function r(e, t) {
            this.options = t || {},
                this.text = e,
                this.defaultSearch = !1,
                this.theme = this.options.theme || "default",
                this.theme = this.theme.replace(/_/, " ")
        }
        var i = n(80);
        n(81),
            n(82),
            n(83),
            n(84),
            n(85),
            n(86),
            n(87),
            n(88),
            n(89);
        var o = n(11),
            l = n(10),
            a = n(90),
            s = 70;
        r.prototype = {
            highlight: function () {
                this.editor = i(document.body, this.getEditorOptions()),
                    this.alwaysRenderAllContent() || this.preventDefaultSearch(),
                    this.isReadOny() && (this.getDOMEditor().className += " read-only"),
                    this.bindRenderLine(),
                    this.bindMousedown(),
                    this.editor.refresh(),
                    this.editor.focus()
            },
            hide: function () {
                this.getDOMEditor().hidden = !0,
                    this.defaultSearch = !0
            },
            show: function () {
                this.getDOMEditor().hidden = !1,
                    this.defaultSearch = !1
            },
            getDOMEditor: function () {
                return document.getElementsByClassName("CodeMirror")[0]
            },
            fold: function () {
                for (var e = !1,
                    t = this.editor.firstLine(), n = this.editor.lastLine(), r = t; r <= n; r++) e ? this.editor.foldCode({
                        line: r,
                        ch: 0
                    },
                        null, "fold") : /(\[|\{)/.test(this.editor.getLine(r).trim()) && (e = !0)
            },
            unfoldAll: function () {
                for (var e = 0; e < this.editor.lineCount(); e++) this.editor.foldCode({
                    line: e,
                    ch: 0
                },
                    null, "unfold")
            },
            bindRenderLine: function () {
                var e = this;
                this.editor.off("renderLine"),
                    this.editor.on("renderLine",
                        function (t, n, r) {
                            var i = r.getElementsByClassName("cm-string");
                            if (i && 0 !== i.length) {
                                for (var o = [], l = 0; l < i.length; l++) o.push(i[l]);
                                var s = o.reduce(function (e, t) {
                                    return e += t.textContent
                                },
                                    ""),
                                    u = e.removeQuotes(s);
                                if (u.match(a) && e.clickableUrls()) {
                                    var c = e.decodeText(u);
                                    o.forEach(function (t) {
                                        if (e.wrapLinkWithAnchorTag()) {
                                            var n = document.createElement("a");
                                            n.href = c,
                                                n.setAttribute("target", "_blank"),
                                                n.classList.add("cm-string"),
                                                t.childNodes.forEach(function (e) {
                                                    n.appendChild(e)
                                                }),
                                                n.addEventListener("contextmenu",
                                                    function (e) {
                                                        e.bubbles && (e.cancelBubble = !0)
                                                    }),
                                                t.appendChild(n)
                                        } else t.classList.add("cm-string-link"),
                                            t.setAttribute("data-url", c)
                                    })
                                }
                            }
                        })
            },
            bindMousedown: function () {
                var e = this;
                this.editor.off("mousedown"),
                    this.editor.on("mousedown",
                        function (t, n) {
                            var r = n.target;
                            if (r.classList.contains("cm-string-link")) {
                                var i = r.getAttribute("data-url"),
                                    o = "_self";
                                e.openLinksInNewWindow() && (o = "_blank"),
                                    window.open(i, o)
                            }
                        })
            },
            removeQuotes: function (e) {
                return e.replace(/^\"+/, "").replace(/\"+$/, "")
            },
            includeQuotes: function (e) {
                return '"' + e + '"'
            },
            decodeText: function (e) {
                var t = document.createElement("div");
                return t.innerHTML = e,
                    t.firstChild ? t.firstChild.nodeValue : ""
            },
            getEditorOptions: function () {
                var e = {
                    value: this.text,
                    theme: this.theme,
                    readOnly: !!this.isReadOny(),
                    mode: "application/ld+json",
                    indentUnit: 2,
                    tabSize: 2,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    extraKeys: this.getExtraKeysMap()
                };
                this.alwaysRenderAllContent() && (e.viewportMargin = 1 / 0);
                var t = l.structure,
                    n = this.options.structure;
                return o({},
                    t, n, e)
            },
            getExtraKeysMap: function () {
                var e = {
                    Esc: function (e) {
                        i.commands.clearSearch(e),
                            e.setSelection(e.getCursor()),
                            e.focus()
                    }
                };
                this.options.structure.readOnly && (e.Enter = function (e) {
                    i.commands.findNext(e)
                },
                    e["Shift-Enter"] = function (e) {
                        i.commands.findPrev(e)
                    },
                    e["Ctrl-V"] = e["Cmd-V"] = function (e) { });
                var t = this.alwaysRenderAllContent();
                return e["Ctrl-F"] = !t && this.openSearchDialog,
                    e["Cmd-F"] = !t && this.openSearchDialog,
                    e
            },
            preventDefaultSearch: function () {
                document.addEventListener("keydown",
                    function (e) {
                        var t = navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey; !this.defaultSearch && e.keyCode === s && t && e.preventDefault()
                    }.bind(this), !1)
            },
            openSearchDialog: function (e) {
                e.setCursor({
                    line: 0,
                    ch: 0
                }),
                    i.commands.find(e)
            },
            alwaysRenderAllContent: function () {
                return this.options.addons.alwaysRenderAllContent || this.options.addons.awaysRenderAllContent
            },
            clickableUrls: function () {
                return this.options.addons.clickableUrls
            },
            wrapLinkWithAnchorTag: function () {
                return this.options.addons.wrapLinkWithAnchorTag
            },
            openLinksInNewWindow: function () {
                return this.options.addons.openLinksInNewWindow
            },
            isReadOny: function () {
                return this.options.structure.readOnly
            }
        },
            e.exports = r
    },
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
                function l(t, n) {
                    var r = t.className;
                    e(n).test(r) || (t.className += (r ? " " : "") + n)
                }
                function a(t, n) {
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
                        l = i || 0; ;) {
                        var a = e.indexOf("\t", o);
                        if (a < 0 || a >= t) return l + (t - o);
                        l += a - o,
                            l += n - l % n,
                            o = a + 1
                    }
                }
                function f() {
                    this.id = null
                }
                function h(e, t) {
                    for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
                    return - 1
                }
                function d(e, t, n) {
                    for (var r = 0,
                        i = 0; ;) {
                        var o = e.indexOf("\t", r);
                        o == -1 && (o = e.length);
                        var l = o - r;
                        if (o == e.length || i + l >= t) return r + Math.min(l, t - i);
                        if (i += o - r, i += n - i % n, r = o + 1, i >= t) return r
                    }
                }
                function p(e) {
                    for (; Dl.length <= e;) Dl.push(g(Dl) + " ");
                    return Dl[e]
                }
                function g(e) {
                    return e[e.length - 1]
                }
                function v(e, t) {
                    for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
                    return n
                }
                function m(e, t, n) {
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
                    return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Pl.test(e))
                }
                function x(e, t) {
                    return t ? !!(t.source.indexOf("\\w") > -1 && w(e)) || t.test(e) : w(e)
                }
                function C(e) {
                    for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
                    return !0
                }
                function L(e) {
                    return e.charCodeAt(0) >= 768 && Fl.test(e)
                }
                function k(e, t, n) {
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
                        i.heightForcer = r("div", null, null, "position: absolute; height: " + Ol + "px; width: 1px;"),
                        i.gutters = r("div", null, "CodeMirror-gutters"),
                        i.lineGutter = null,
                        i.scroller = r("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"),
                        i.scroller.setAttribute("tabIndex", "-1"),
                        i.wrapper = r("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"),
                        al && sl < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0),
                        ul || il && ml || (i.scroller.draggable = !0),
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
                function S(e, t) {
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
                function M(e, t, n) {
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
                function T(e, t, n) {
                    var r = [];
                    return e.iter(t, n,
                        function (e) {
                            r.push(e.text)
                        }),
                        r
                }
                function N(e, t) {
                    var n = t - e.height;
                    if (n) for (var r = e; r; r = r.parent) r.height += n
                }
                function O(e) {
                    if (null == e.parent) return null;
                    for (var t = e.parent,
                        n = h(t.lines, e), r = t.parent; r; t = r, r = r.parent) for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
                    return n + t.first
                }
                function A(e, t) {
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
                    for (var l = 0; l < e.lines.length; ++l) {
                        var a = e.lines[l],
                            s = a.height;
                        if (t < s) break;
                        t -= s
                    }
                    return n + l
                }
                function E(e, t) {
                    return t >= e.first && t < e.first + e.size
                }
                function W(e, t) {
                    return String(e.lineNumberFormatter(t + e.firstLineNumber))
                }
                function H(e, t) {
                    return this instanceof H ? (this.line = e, void (this.ch = t)) : new H(e, t)
                }
                function D(e, t) {
                    return e.line - t.line || e.ch - t.ch
                }
                function P(e) {
                    return H(e.line, e.ch)
                }
                function F(e, t) {
                    return D(e, t) < 0 ? t : e
                }
                function z(e, t) {
                    return D(e, t) < 0 ? e : t
                }
                function I(e, t) {
                    return Math.max(e.first, Math.min(t, e.first + e.size - 1))
                }
                function R(e, t) {
                    if (t.line < e.first) return H(e.first, 0);
                    var n = e.first + e.size - 1;
                    return t.line > n ? H(n, S(e, n).text.length) : B(t, S(e, t.line).text.length)
                }
                function B(e, t) {
                    var n = e.ch;
                    return null == n || n > t ? H(e.line, t) : n < 0 ? H(e.line, 0) : e
                }
                function _(e, t) {
                    for (var n = [], r = 0; r < t.length; r++) n[r] = R(e, t[r]);
                    return n
                }
                function j() {
                    zl = !0
                }
                function V() {
                    Il = !0
                }
                function G(e, t, n) {
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
                function K(e, t) {
                    for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
                    return n
                }
                function q(e, t) {
                    e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t],
                        t.marker.attachLine(e)
                }
                function $(e, t, n) {
                    var r;
                    if (e) for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            l = o.marker,
                            a = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                        if (a || o.from == t && "bookmark" == l.type && (!n || !o.marker.insertLeft)) {
                            var s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t); (r || (r = [])).push(new G(l, o.from, s ? null : o.to))
                        }
                    }
                    return r
                }
                function X(e, t, n) {
                    var r;
                    if (e) for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            l = o.marker,
                            a = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                        if (a || o.from == t && "bookmark" == l.type && (!n || o.marker.insertLeft)) {
                            var s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t); (r || (r = [])).push(new G(l, s ? null : o.from - t, null == o.to ? null : o.to - t))
                        }
                    }
                    return r
                }
                function Y(e, t) {
                    if (t.full) return null;
                    var n = E(e, t.from.line) && S(e, t.from.line).markedSpans,
                        r = E(e, t.to.line) && S(e, t.to.line).markedSpans;
                    if (!n && !r) return null;
                    var i = t.from.ch,
                        o = t.to.ch,
                        l = 0 == D(t.from, t.to),
                        a = $(n, i, l),
                        s = X(r, o, l),
                        u = 1 == t.text.length,
                        c = g(t.text).length + (u ? i : 0);
                    if (a) for (var f = 0; f < a.length; ++f) {
                        var h = a[f];
                        if (null == h.to) {
                            var d = U(s, h.marker);
                            d ? u && (h.to = null == d.to ? null : d.to + c) : h.to = i
                        }
                    }
                    if (s) for (var p = 0; p < s.length; ++p) {
                        var v = s[p];
                        if (null != v.to && (v.to += c), null == v.from) {
                            var m = U(a, v.marker);
                            m || (v.from = c, u && (a || (a = [])).push(v))
                        } else v.from += c,
                            u && (a || (a = [])).push(v)
                    }
                    a && (a = Z(a)),
                        s && s != a && (s = Z(s));
                    var y = [a];
                    if (!u) {
                        var b, w = t.text.length - 2;
                        if (w > 0 && a) for (var x = 0; x < a.length; ++x) null == a[x].to && (b || (b = [])).push(new G(a[x].marker, null, null));
                        for (var C = 0; C < w; ++C) y.push(b);
                        y.push(s)
                    }
                    return y
                }
                function Z(e) {
                    for (var t = 0; t < e.length; ++t) {
                        var n = e[t];
                        null != n.from && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1)
                    }
                    return e.length ? e : null
                }
                function J(e, t, n) {
                    var r = null;
                    if (e.iter(t.line, n.line + 1,
                        function (e) {
                            if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
                                var n = e.markedSpans[t].marker; !n.readOnly || r && h(r, n) != -1 || (r || (r = [])).push(n)
                            }
                        }), !r) return null;
                    for (var i = [{
                        from: t,
                        to: n
                    }], o = 0; o < r.length; ++o) for (var l = r[o], a = l.find(0), s = 0; s < i.length; ++s) {
                        var u = i[s];
                        if (!(D(u.to, a.from) < 0 || D(u.from, a.to) > 0)) {
                            var c = [s, 1],
                                f = D(u.from, a.from),
                                d = D(u.to, a.to); (f < 0 || !l.inclusiveLeft && !f) && c.push({
                                    from: u.from,
                                    to: a.from
                                }),
                                    (d > 0 || !l.inclusiveRight && !d) && c.push({
                                        from: a.to,
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
                        o = D(r.from, i.from) || te(e) - te(t);
                    if (o) return - o;
                    var l = D(r.to, i.to) || ne(e) - ne(t);
                    return l ? l : t.id - e.id
                }
                function ie(e, t) {
                    var n, r = Il && e.markedSpans;
                    if (r) for (var i = void 0,
                        o = 0; o < r.length; ++o) i = r[o],
                            i.marker.collapsed && null == (t ? i.from : i.to) && (!n || re(n, i.marker) < 0) && (n = i.marker);
                    return n
                }
                function oe(e) {
                    return ie(e, !0)
                }
                function le(e) {
                    return ie(e, !1)
                }
                function ae(e, t, n, r, i) {
                    var o = S(e, t),
                        l = Il && o.markedSpans;
                    if (l) for (var a = 0; a < l.length; ++a) {
                        var s = l[a];
                        if (s.marker.collapsed) {
                            var u = s.marker.find(0),
                                c = D(u.from, n) || te(s.marker) - te(i),
                                f = D(u.to, r) || ne(s.marker) - ne(i);
                            if (!(c >= 0 && f <= 0 || c <= 0 && f >= 0) && (c <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? D(u.to, n) >= 0 : D(u.to, n) > 0) || c >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? D(u.from, r) <= 0 : D(u.from, r) < 0))) return !0
                        }
                    }
                }
                function se(e) {
                    for (var t; t = oe(e);) e = t.find(-1, !0).line;
                    return e
                }
                function ue(e) {
                    for (var t, n; t = le(e);) e = t.find(1, !0).line,
                        (n || (n = [])).push(e);
                    return n
                }
                function ce(e, t) {
                    var n = S(e, t),
                        r = se(n);
                    return n == r ? t : O(r)
                }
                function fe(e, t) {
                    if (t > e.lastLine()) return t;
                    var n, r = S(e, t);
                    if (!he(e, r)) return t;
                    for (; n = le(r);) r = n.find(1, !0).line;
                    return O(r) + 1
                }
                function he(e, t) {
                    var n = Il && t.markedSpans;
                    if (n) for (var r = void 0,
                        i = 0; i < n.length; ++i) if (r = n[i], r.marker.collapsed) {
                            if (null == r.from) return !0;
                            if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && de(e, t, r)) return !0
                        }
                }
                function de(e, t, n) {
                    if (null == n.to) {
                        var r = n.marker.find(1, !0);
                        return de(e, r.line, U(r.line.markedSpans, n.marker))
                    }
                    if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
                    for (var i = void 0,
                        o = 0; o < t.markedSpans.length; ++o) if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && de(e, t, i)) return !0
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
                    for (var o = n.parent; o; n = o, o = n.parent) for (var l = 0; l < o.children.length; ++l) {
                        var a = o.children[l];
                        if (a == n) break;
                        t += a.height
                    }
                    return t
                }
                function ge(e) {
                    if (0 == e.height) return 0;
                    for (var t, n = e.text.length,
                        r = e; t = oe(r);) {
                        var i = t.find(0, !0);
                        r = i.from.line,
                            n += i.from.ch - i.to.ch
                    }
                    for (r = e; t = le(r);) {
                        var o = t.find(0, !0);
                        n -= r.text.length - o.from.ch,
                            r = o.to.line,
                            n += r.text.length - o.to.ch
                    }
                    return n
                }
                function ve(e) {
                    var t = e.display,
                        n = e.doc;
                    t.maxLine = S(n, n.first),
                        t.maxLineLength = ge(t.maxLine),
                        t.maxLineChanged = !0,
                        n.iter(function (e) {
                            var n = ge(e);
                            n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
                        })
                }
                function me(e, t, n, r) {
                    if (!e) return r(t, n, "ltr");
                    for (var i = !1,
                        o = 0; o < e.length; ++o) {
                        var l = e[o]; (l.from < n && l.to > t || t == n && l.to == t) && (r(Math.max(l.from, t), Math.min(l.to, n), 1 == l.level ? "rtl" : "ltr"), i = !0)
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
                    var t = Te(e);
                    return t ? ye(t[0]) : 0
                }
                function xe(e) {
                    var t = Te(e);
                    return t ? be(g(t)) : e.text.length
                }
                function Ce(e, t, n) {
                    var r = e[0].level;
                    return t == r || n != r && t < n
                }
                function Le(e, t) {
                    var n;
                    Rl = null;
                    for (var r = 0; r < e.length; ++r) {
                        var i = e[r];
                        if (i.from < t && i.to > t) return r;
                        if (i.from == t || i.to == t) {
                            if (null != n) return Ce(e, i.level, e[n].level) ? (i.from != i.to && (Rl = n), r) : (i.from != i.to && (Rl = r), n);
                            n = r
                        }
                    }
                    return n
                }
                function ke(e, t, n, r) {
                    if (!r) return t + n;
                    do t += n;
                    while (t > 0 && L(e.text.charAt(t)));
                    return t
                }
                function Se(e, t, n, r) {
                    var i = Te(e);
                    if (!i) return Me(e, t, n, r);
                    for (var o = Le(i, t), l = i[o], a = ke(e, t, l.level % 2 ? -n : n, r); ;) {
                        if (a > l.from && a < l.to) return a;
                        if (a == l.from || a == l.to) return Le(i, a) == o ? a : (l = i[o += n], n > 0 == l.level % 2 ? l.to : l.from);
                        if (l = i[o += n], !l) return null;
                        a = n > 0 == l.level % 2 ? ke(e, l.to, -1, r) : ke(e, l.from, 1, r)
                    }
                }
                function Me(e, t, n, r) {
                    var i = t + n;
                    if (r) for (; i > 0 && L(e.text.charAt(i));) i += n;
                    return i < 0 || i > e.text.length ? null : i
                }
                function Te(e) {
                    var t = e.order;
                    return null == t && (t = e.order = Bl(e.text)),
                        t
                }
                function Ne(e, t) {
                    return e._handlers && e._handlers[t] || _l
                }
                function Oe(e, t, n) {
                    if (e.removeEventListener) e.removeEventListener(t, n, !1);
                    else if (e.detachEvent) e.detachEvent("on" + t, n);
                    else {
                        var r = e._handlers,
                            i = r && r[t];
                        if (i) {
                            var o = h(i, n);
                            o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)))
                        }
                    }
                }
                function Ae(e, t) {
                    var n = Ne(e, t);
                    if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r)
                }
                function Ee(e, t, n) {
                    return "string" == typeof t && (t = {
                        type: t,
                        preventDefault: function () {
                            this.defaultPrevented = !0
                        }
                    }),
                        Ae(e, n || t.type, e, t),
                        ze(t) || t.codemirrorIgnore
                }
                function We(e) {
                    var t = e._handlers && e._handlers.cursorActivity;
                    if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) h(n, t[r]) == -1 && n.push(t[r])
                }
                function He(e, t) {
                    return Ne(e, t).length > 0
                }
                function De(e) {
                    e.prototype.on = function (e, t) {
                        jl(this, e, t)
                    },
                        e.prototype.off = function (e, t) {
                            Oe(this, e, t)
                        }
                }
                function Pe(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }
                function Fe(e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                }
                function ze(e) {
                    return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
                }
                function Ie(e) {
                    Pe(e),
                        Fe(e)
                }
                function Re(e) {
                    return e.target || e.srcElement
                }
                function Be(e) {
                    var t = e.which;
                    return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)),
                        yl && e.ctrlKey && 1 == t && (t = 3),
                        t
                }
                function _e(e) {
                    if (null == Tl) {
                        var t = r("span", "​");
                        n(e, r("span", [t, document.createTextNode("x")])),
                            0 != e.firstChild.offsetHeight && (Tl = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(al && sl < 8))
                    }
                    var i = Tl ? r("span", "​") : r("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                    return i.setAttribute("cm-text", ""),
                        i
                }
                function je(e) {
                    if (null != Nl) return Nl;
                    var r = n(e, document.createTextNode("AخA")),
                        i = Cl(r, 0, 1).getBoundingClientRect(),
                        o = Cl(r, 1, 2).getBoundingClientRect();
                    return t(e),
                        !(!i || i.left == i.right) && (Nl = o.right - i.right < 3)
                }
                function Ve(e) {
                    if (null != ql) return ql;
                    var t = n(e, r("span", "x")),
                        i = t.getBoundingClientRect(),
                        o = Cl(t, 0, 1).getBoundingClientRect();
                    return ql = Math.abs(i.left - o.left) > 1
                }
                function Ge(e, t) {
                    arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)),
                        $l[e] = t
                }
                function Ue(e, t) {
                    Xl[e] = t
                }
                function Ke(e) {
                    if ("string" == typeof e && Xl.hasOwnProperty(e)) e = Xl[e];
                    else if (e && "string" == typeof e.name && Xl.hasOwnProperty(e.name)) {
                        var t = Xl[e.name];
                        "string" == typeof t && (t = {
                            name: t
                        }),
                            e = b(t, e),
                            e.name = t.name
                    } else {
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Ke("application/xml");
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Ke("application/json")
                    }
                    return "string" == typeof e ? {
                        name: e
                    } : e || {
                        name: "null"
                    }
                }
                function qe(e, t) {
                    t = Ke(t);
                    var n = $l[t.name];
                    if (!n) return qe(e, "text/plain");
                    var r = n(e, t);
                    if (Yl.hasOwnProperty(t.name)) {
                        var i = Yl[t.name];
                        for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o])
                    }
                    if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps) for (var l in t.modeProps) r[l] = t.modeProps[l];
                    return r
                }
                function $e(e, t) {
                    var n = Yl.hasOwnProperty(e) ? Yl[e] : Yl[e] = {};
                    u(t, n)
                }
                function Xe(e, t) {
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
                function Ze(e, t, n) {
                    return !e.startState || e.startState(t, n)
                }
                function Je(e, t, n, r) {
                    var i = [e.state.modeGen],
                        o = {};
                    lt(e, t.text, e.doc.mode, n,
                        function (e, t) {
                            return i.push(e, t)
                        },
                        o, r);
                    for (var l = function (n) {
                        var r = e.state.overlays[n],
                            l = 1,
                            a = 0;
                        lt(e, t.text, r.mode, !0,
                            function (e, t) {
                                for (var n = l; a < e;) {
                                    var o = i[l];
                                    o > e && i.splice(l, 1, e, i[l + 1], o),
                                        l += 2,
                                        a = Math.min(e, o)
                                }
                                if (t) if (r.opaque) i.splice(n, l - n, e, "overlay " + t),
                                    l = n + 2;
                                else for (; n < l; n += 2) {
                                    var s = i[n + 1];
                                    i[n + 1] = (s ? s + " " : "") + "overlay " + t
                                }
                            },
                            o)
                    },
                        a = 0; a < e.state.overlays.length; ++a) l(a);
                    return {
                        styles: i,
                        classes: o.bgClass || o.textClass ? o : null
                    }
                }
                function Qe(e, t, n) {
                    if (!t.styles || t.styles[0] != e.state.modeGen) {
                        var r = et(e, O(t)),
                            i = Je(e, t, t.text.length > e.options.maxHighlightLength ? Xe(e.doc.mode, r) : r);
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
                    var o = at(e, t, n),
                        l = o > r.first && S(r, o - 1).stateAfter;
                    return l = l ? Xe(r.mode, l) : Ze(r.mode),
                        r.iter(o, t,
                            function (n) {
                                tt(e, n.text, l);
                                var a = o == t - 1 || o % 5 == 0 || o >= i.viewFrom && o < i.viewTo;
                                n.stateAfter = a ? Xe(r.mode, l) : null,
                                    ++o
                            }),
                        n && (r.frontier = o),
                        l
                }
                function tt(e, t, n, r) {
                    var i = e.doc.mode,
                        o = new Zl(t, e.options.tabSize);
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
                            state: e ? Xe(l.mode, c) : c
                        }
                    },
                        l = e.doc,
                        a = l.mode;
                    t = R(l, t);
                    var s, u = S(l, t.line),
                        c = et(e, t.line, n),
                        f = new Zl(u.text, e.options.tabSize);
                    for (r && (s = []); (r || f.pos < t.ch) && !f.eol();) f.start = f.pos,
                        i = rt(a, f, c),
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
                function lt(e, t, n, r, i, o, l) {
                    var a = n.flattenSpans;
                    null == a && (a = e.options.flattenSpans);
                    var s, u = 0,
                        c = null,
                        f = new Zl(t, e.options.tabSize),
                        h = e.options.addModeClass && [null];
                    for ("" == t && ot(nt(n, r), o); !f.eol();) {
                        if (f.pos > e.options.maxHighlightLength ? (a = !1, l && tt(e, t, r, f.pos), f.pos = t.length, s = null) : s = ot(rt(n, f, r, h), o), h) {
                            var d = h[0].name;
                            d && (s = "m-" + (s ? d + " " + s : d))
                        }
                        if (!a || c != s) {
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
                function at(e, t, n) {
                    for (var r, i, o = e.doc,
                        l = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t; a > l; --a) {
                        if (a <= o.first) return o.first;
                        var s = S(o, a - 1);
                        if (s.stateAfter && (!n || a <= o.frontier)) return a;
                        var u = c(s.text, null, e.options.tabSize); (null == i || r > u) && (i = a - 1, r = u)
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
                    i != e.height && N(e, i)
                }
                function ct(e) {
                    e.parent = null,
                        Q(e)
                }
                function ft(e, t) {
                    if (!e || /^\s*$/.test(e)) return null;
                    var n = t.addModeClass ? ea : Ql;
                    return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
                }
                function ht(e, t) {
                    var n = r("span", null, null, ul ? "padding-right: .1px" : null),
                        i = {
                            pre: r("pre", [n], "CodeMirror-line"),
                            content: n,
                            col: 0,
                            pos: 0,
                            cm: e,
                            trailingSpace: !1,
                            splitSpaces: (al || ul) && e.getOption("lineWrapping")
                        };
                    t.measure = {};
                    for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
                        var l = o ? t.rest[o - 1] : t.line,
                            s = void 0;
                        i.pos = 0,
                            i.addToken = pt,
                            je(e.display.measure) && (s = Te(l)) && (i.addToken = vt(i.addToken, s)),
                            i.map = [];
                        var u = t != e.display.externalMeasured && O(l);
                        yt(l, i, Qe(e, l, u)),
                            l.styleClasses && (l.styleClasses.bgClass && (i.bgClass = a(l.styleClasses.bgClass, i.bgClass || "")), l.styleClasses.textClass && (i.textClass = a(l.styleClasses.textClass, i.textClass || ""))),
                            0 == i.map.length && i.map.push(0, 0, i.content.appendChild(_e(e.display.measure))),
                            0 == o ? (t.measure.map = i.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(i.map), (t.measure.caches || (t.measure.caches = [])).push({}))
                    }
                    if (ul) {
                        var c = i.content.lastChild; (/\bcm-tab\b/.test(c.className) || c.querySelector && c.querySelector(".cm-tab")) && (i.content.className = "cm-tab-wrap-hack")
                    }
                    return Ae(e, "renderLine", e, t.line, i.pre),
                        i.pre.className && (i.textClass = a(i.pre.className, i.textClass || "")),
                        i
                }
                function dt(e) {
                    var t = r("span", "•", "cm-invalidchar");
                    return t.title = "\\u" + e.charCodeAt(0).toString(16),
                        t.setAttribute("aria-label", t.title),
                        t
                }
                function pt(e, t, n, i, o, l, a) {
                    if (t) {
                        var s, u = e.splitSpaces ? gt(t, e.trailingSpace) : t,
                            c = e.cm.state.specialChars,
                            f = !1;
                        if (c.test(t)) {
                            s = document.createDocumentFragment();
                            for (var h = 0; ;) {
                                c.lastIndex = h;
                                var d = c.exec(t),
                                    g = d ? d.index - h : t.length - h;
                                if (g) {
                                    var v = document.createTextNode(u.slice(h, h + g));
                                    al && sl < 9 ? s.appendChild(r("span", [v])) : s.appendChild(v),
                                        e.map.push(e.pos, e.pos + g, v),
                                        e.col += g,
                                        e.pos += g
                                }
                                if (!d) break;
                                h += g + 1;
                                var m = void 0;
                                if ("\t" == d[0]) {
                                    var y = e.cm.options.tabSize,
                                        b = y - e.col % y;
                                    m = s.appendChild(r("span", p(b), "cm-tab")),
                                        m.setAttribute("role", "presentation"),
                                        m.setAttribute("cm-text", "\t"),
                                        e.col += b
                                } else "\r" == d[0] || "\n" == d[0] ? (m = s.appendChild(r("span", "\r" == d[0] ? "␍" : "␤", "cm-invalidchar")), m.setAttribute("cm-text", d[0]), e.col += 1) : (m = e.cm.options.specialCharPlaceholder(d[0]), m.setAttribute("cm-text", d[0]), al && sl < 9 ? s.appendChild(r("span", [m])) : s.appendChild(m), e.col += 1);
                                e.map.push(e.pos, e.pos + 1, m),
                                    e.pos++
                            }
                        } else e.col += t.length,
                            s = document.createTextNode(u),
                            e.map.push(e.pos, e.pos + t.length, s),
                            al && sl < 9 && (f = !0),
                            e.pos += t.length;
                        if (e.trailingSpace = 32 == u.charCodeAt(t.length - 1), n || i || o || f || a) {
                            var w = n || "";
                            i && (w += i),
                                o && (w += o);
                            var x = r("span", [s], w, a);
                            return l && (x.title = l),
                                e.content.appendChild(x)
                        }
                        e.content.appendChild(s)
                    }
                }
                function gt(e, t) {
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
                function vt(e, t) {
                    return function (n, r, i, o, l, a, s) {
                        i = i ? i + " cm-force-border" : "cm-force-border";
                        for (var u = n.pos,
                            c = u + r.length; ;) {
                            for (var f = void 0,
                                h = 0; h < t.length && (f = t[h], !(f.to > u && f.from <= u)); h++);
                            if (f.to >= c) return e(n, r, i, o, l, a, s);
                            e(n, r.slice(0, f.to - u), i, o, null, a, s),
                                o = null,
                                r = r.slice(f.to - u),
                                u = f.to
                        }
                    }
                }
                function mt(e, t, n, r) {
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
                    if (r) for (var l, a, s, u, c, f, h, d = i.length,
                        p = 0,
                        g = 1,
                        v = "",
                        m = 0; ;) {
                        if (m == p) {
                            s = u = c = f = a = "",
                                h = null,
                                m = 1 / 0;
                            for (var y = [], b = void 0, w = 0; w < r.length; ++w) {
                                var x = r[w],
                                    C = x.marker;
                                "bookmark" == C.type && x.from == p && C.widgetNode ? y.push(C) : x.from <= p && (null == x.to || x.to > p || C.collapsed && x.to == p && x.from == p) ? (null != x.to && x.to != p && m > x.to && (m = x.to, u = ""), C.className && (s += " " + C.className), C.css && (a = (a ? a + ";" : "") + C.css), C.startStyle && x.from == p && (c += " " + C.startStyle), C.endStyle && x.to == m && (b || (b = [])).push(C.endStyle, x.to), C.title && !f && (f = C.title), C.collapsed && (!h || re(h.marker, C) < 0) && (h = x)) : x.from > p && m > x.from && (m = x.from)
                            }
                            if (b) for (var L = 0; L < b.length; L += 2) b[L + 1] == m && (u += " " + b[L]);
                            if (!h || h.from == p) for (var k = 0; k < y.length; ++k) mt(t, 0, y[k]);
                            if (h && (h.from || 0) == p) {
                                if (mt(t, (null == h.to ? d + 1 : h.to) - p, h.marker, null == h.from), null == h.to) return;
                                h.to == p && (h = !1)
                            }
                        }
                        if (p >= d) break;
                        for (var S = Math.min(d, m); ;) {
                            if (v) {
                                var M = p + v.length;
                                if (!h) {
                                    var T = M > S ? v.slice(0, S - p) : v;
                                    t.addToken(t, T, l ? l + s : s, c, p + T.length == m ? u : "", f, a)
                                }
                                if (M >= S) {
                                    v = v.slice(S - p),
                                        p = S;
                                    break
                                }
                                p = M,
                                    c = ""
                            }
                            v = i.slice(o, o = n[g++]),
                                l = ft(n[g++], t.cm.options)
                        }
                    } else for (var N = 1; N < n.length; N += 2) t.addToken(t, i.slice(o, o = n[N]), ft(n[N + 1], t.cm.options))
                }
                function bt(e, t, n) {
                    this.line = t,
                        this.rest = ue(t),
                        this.size = this.rest ? O(g(this.rest)) - n + 1 : 1,
                        this.node = this.text = null,
                        this.hidden = he(e, t)
                }
                function wt(e, t, n) {
                    for (var r, i = [], o = t; o < n; o = r) {
                        var l = new bt(e.doc, S(e.doc, o), o);
                        r = o + l.size,
                            i.push(l)
                    }
                    return i
                }
                function xt(e) {
                    ta ? ta.ops.push(e) : e.ownsGroup = ta = {
                        ops: [e],
                        delayedCallbacks: []
                    }
                }
                function Ct(e) {
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
                function Lt(e, t) {
                    var n = e.ownsGroup;
                    if (n) try {
                        Ct(n)
                    } finally {
                            ta = null,
                                t(n)
                        }
                }
                function kt(e, t) {
                    var n = Ne(e, t);
                    if (n.length) {
                        var r, i = Array.prototype.slice.call(arguments, 2);
                        ta ? r = ta.delayedCallbacks : na ? r = na : (r = na = [], setTimeout(St, 0));
                        for (var o = function (e) {
                            r.push(function () {
                                return n[e].apply(null, i)
                            })
                        },
                            l = 0; l < n.length; ++l) o(l)
                    }
                }
                function St() {
                    var e = na;
                    na = null;
                    for (var t = 0; t < e.length; ++t) e[t]()
                }
                function Mt(e, t, n, r) {
                    for (var i = 0; i < t.changes.length; i++) {
                        var o = t.changes[i];
                        "text" == o ? At(e, t) : "gutter" == o ? Wt(e, t, n, r) : "class" == o ? Et(t) : "widget" == o && Ht(e, t, r)
                    }
                    t.changes = null
                }
                function Tt(e) {
                    return e.node == e.text && (e.node = r("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), al && sl < 8 && (e.node.style.zIndex = 2)),
                        e.node
                }
                function Nt(e) {
                    var t = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
                    if (t && (t += " CodeMirror-linebackground"), e.background) t ? e.background.className = t : (e.background.parentNode.removeChild(e.background), e.background = null);
                    else if (t) {
                        var n = Tt(e);
                        e.background = n.insertBefore(r("div", null, t), n.firstChild)
                    }
                }
                function Ot(e, t) {
                    var n = e.display.externalMeasured;
                    return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : ht(e, t)
                }
                function At(e, t) {
                    var n = t.text.className,
                        r = Ot(e, t);
                    t.text == t.node && (t.node = r.pre),
                        t.text.parentNode.replaceChild(r.pre, t.text),
                        t.text = r.pre,
                        r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, Et(t)) : n && (t.text.className = n)
                }
                function Et(e) {
                    Nt(e),
                        e.line.wrapClass ? Tt(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
                    var t = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
                    e.text.className = t || ""
                }
                function Wt(e, t, n, i) {
                    if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                        var o = Tt(t);
                        t.gutterBackground = r("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px; width: " + i.gutterTotalWidth + "px"),
                            o.insertBefore(t.gutterBackground, t.text)
                    }
                    var l = t.line.gutterMarkers;
                    if (e.options.lineNumbers || l) {
                        var a = Tt(t),
                            s = t.gutter = r("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px");
                        if (e.display.input.setUneditable(s), a.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), !e.options.lineNumbers || l && l["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(r("div", W(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), l) for (var u = 0; u < e.options.gutters.length; ++u) {
                            var c = e.options.gutters[u],
                                f = l.hasOwnProperty(c) && l[c];
                            f && s.appendChild(r("div", [f], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[c] + "px; width: " + i.gutterWidth[c] + "px"))
                        }
                    }
                }
                function Ht(e, t, n) {
                    t.alignable && (t.alignable = null);
                    for (var r = t.node.firstChild,
                        i = void 0; r; r = i) i = r.nextSibling,
                            "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
                    Pt(e, t, n)
                }
                function Dt(e, t, n, r) {
                    var i = Ot(e, t);
                    return t.text = t.node = i.pre,
                        i.bgClass && (t.bgClass = i.bgClass),
                        i.textClass && (t.textClass = i.textClass),
                        Et(t),
                        Wt(e, t, n, r),
                        Pt(e, t, r),
                        t.node
                }
                function Pt(e, t, n) {
                    if (Ft(e, t.line, t, n, !0), t.rest) for (var r = 0; r < t.rest.length; r++) Ft(e, t.rest[r], t, n, !1)
                }
                function Ft(e, t, n, i, o) {
                    if (t.widgets) for (var l = Tt(n), a = 0, s = t.widgets; a < s.length; ++a) {
                        var u = s[a],
                            c = r("div", [u.node], "CodeMirror-linewidget");
                        u.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"),
                            zt(u, c, n, i),
                            e.display.input.setUneditable(c),
                            o && u.above ? l.insertBefore(c, n.gutter || n.text) : l.appendChild(c),
                            kt(u, "redraw")
                    }
                }
                function zt(e, t, n, r) {
                    if (e.noHScroll) {
                        (n.alignable || (n.alignable = [])).push(t);
                        var i = r.wrapperWidth;
                        t.style.left = r.fixedPos + "px",
                            e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"),
                            t.style.width = i + "px"
                    }
                    e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
                }
                function It(e) {
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
                function Rt(e, t) {
                    for (var n = Re(t); n != e.wrapper; n = n.parentNode) if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0
                }
                function Bt(e) {
                    return e.lineSpace.offsetTop
                }
                function _t(e) {
                    return e.mover.offsetHeight - e.lineSpace.offsetHeight
                }
                function jt(e) {
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
                function Vt(e) {
                    return Ol - e.display.nativeBarWidth
                }
                function Gt(e) {
                    return e.display.scroller.clientWidth - Vt(e) - e.display.barWidth
                }
                function Ut(e) {
                    return e.display.scroller.clientHeight - Vt(e) - e.display.barHeight
                }
                function Kt(e, t, n) {
                    var r = e.options.lineWrapping,
                        i = r && Gt(e);
                    if (!t.measure.heights || r && t.measure.width != i) {
                        var o = t.measure.heights = [];
                        if (r) {
                            t.measure.width = i;
                            for (var l = t.text.firstChild.getClientRects(), a = 0; a < l.length - 1; a++) {
                                var s = l[a],
                                    u = l[a + 1];
                                Math.abs(s.bottom - u.bottom) > 2 && o.push((s.bottom + u.top) / 2 - n.top)
                            }
                        }
                        o.push(n.bottom - n.top)
                    }
                }
                function qt(e, t, n) {
                    if (e.line == t) return {
                        map: e.measure.map,
                        cache: e.measure.cache
                    };
                    for (var r = 0; r < e.rest.length; r++) if (e.rest[r] == t) return {
                        map: e.measure.maps[r],
                        cache: e.measure.caches[r]
                    };
                    for (var i = 0; i < e.rest.length; i++) if (O(e.rest[i]) > n) return {
                        map: e.measure.maps[i],
                        cache: e.measure.caches[i],
                        before: !0
                    }
                }
                function $t(e, t) {
                    t = se(t);
                    var r = O(t),
                        i = e.display.externalMeasured = new bt(e.doc, t, r);
                    i.lineN = r;
                    var o = i.built = ht(e, i);
                    return i.text = o.pre,
                        n(e.display.lineMeasure, o.pre),
                        i
                }
                function Xt(e, t, n, r) {
                    return Jt(e, Zt(e, t), n, r)
                }
                function Yt(e, t) {
                    if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[kn(e, t)];
                    var n = e.display.externalMeasured;
                    return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
                }
                function Zt(e, t) {
                    var n = O(t),
                        r = Yt(e, n);
                    r && !r.text ? r = null : r && r.changes && (Mt(e, r, n, bn(e)), e.curOp.forceUpdate = !0),
                        r || (r = $t(e, t));
                    var i = qt(r, t, n);
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
                function Jt(e, t, n, r, i) {
                    t.before && (n = -1);
                    var o, l = n + (r || "");
                    return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Kt(e, t.view, t.rect), t.hasHeights = !0), o = tn(e, t, n, r), o.bogus || (t.cache[l] = o)),
                    {
                        left: o.left,
                        right: o.right,
                        top: i ? o.rtop : o.top,
                        bottom: i ? o.rbottom : o.bottom
                    }
                }
                function Qt(e, t, n) {
                    for (var r, i, o, l, a, s, u = 0; u < e.length; u += 3) if (a = e[u], s = e[u + 1], t < a ? (i = 0, o = 1, l = "left") : t < s ? (i = t - a, o = i + 1) : (u == e.length - 3 || t == s && e[u + 3] > t) && (o = s - a, i = o - 1, t >= s && (l = "right")), null != i) {
                        if (r = e[u + 2], a == s && n == (r.insertLeft ? "left" : "right") && (l = n), "left" == n && 0 == i) for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) r = e[(u -= 3) + 2],
                            l = "left";
                        if ("right" == n && i == s - a) for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) r = e[(u += 3) + 2],
                            l = "right";
                        break
                    }
                    return {
                        node: r,
                        start: i,
                        end: o,
                        collapse: l,
                        coverStart: a,
                        coverEnd: s
                    }
                }
                function en(e, t) {
                    var n = ra;
                    if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
                    else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
                    return n
                }
                function tn(e, t, n, r) {
                    var i, o = Qt(t.map, n, r),
                        l = o.node,
                        a = o.start,
                        s = o.end,
                        u = o.collapse;
                    if (3 == l.nodeType) {
                        for (var c = 0; c < 4; c++) {
                            for (; a && L(t.line.text.charAt(o.coverStart + a));)--a;
                            for (; o.coverStart + s < o.coverEnd && L(t.line.text.charAt(o.coverStart + s));)++s;
                            if (i = al && sl < 9 && 0 == a && s == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : en(Cl(l, a, s).getClientRects(), r), i.left || i.right || 0 == a) break;
                            s = a,
                                a -= 1,
                                u = "right"
                        }
                        al && sl < 11 && (i = nn(e.display.measure, i))
                    } else {
                        a > 0 && (u = r = "right");
                        var f;
                        i = e.options.lineWrapping && (f = l.getClientRects()).length > 1 ? f["right" == r ? f.length - 1 : 0] : l.getBoundingClientRect()
                    }
                    if (al && sl < 9 && !a && (!i || !i.left && !i.right)) {
                        var h = l.parentNode.getClientRects()[0];
                        i = h ? {
                            left: h.left,
                            right: h.left + yn(e.display),
                            top: h.top,
                            bottom: h.bottom
                        } : ra
                    }
                    for (var d = i.top - t.rect.top,
                        p = i.bottom - t.rect.top,
                        g = (d + p) / 2, v = t.view.measure.heights, m = 0; m < v.length - 1 && !(g < v[m]); m++);
                    var y = m ? v[m - 1] : 0,
                        b = v[m],
                        w = {
                            left: ("right" == u ? i.right : i.left) - t.rect.left,
                            right: ("left" == u ? i.left : i.right) - t.rect.left,
                            top: y,
                            bottom: b
                        };
                    return i.left || i.right || (w.bogus = !0),
                        e.options.singleCursorHeightPerLine || (w.rtop = d, w.rbottom = p),
                        w
                }
                function nn(e, t) {
                    if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Ve(e)) return t;
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
                function ln(e) {
                    on(e),
                        e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null,
                        e.options.lineWrapping || (e.display.maxLineChanged = !0),
                        e.display.lineNumChars = null
                }
                function an() {
                    return window.pageXOffset || (document.documentElement || document.body).scrollLeft
                }
                function sn() {
                    return window.pageYOffset || (document.documentElement || document.body).scrollTop
                }
                function un(e, t, n, r, i) {
                    if (!i && t.widgets) for (var o = 0; o < t.widgets.length; ++o) if (t.widgets[o].above) {
                        var l = It(t.widgets[o]);
                        n.top += l,
                            n.bottom += l
                    }
                    if ("line" == r) return n;
                    r || (r = "local");
                    var a = pe(t);
                    if ("local" == r ? a += Bt(e.display) : a -= e.display.viewOffset, "page" == r || "window" == r) {
                        var s = e.display.lineSpace.getBoundingClientRect();
                        a += s.top + ("window" == r ? 0 : sn());
                        var u = s.left + ("window" == r ? 0 : an());
                        n.left += u,
                            n.right += u
                    }
                    return n.top += a,
                        n.bottom += a,
                        n
                }
                function cn(e, t, n) {
                    if ("div" == n) return t;
                    var r = t.left,
                        i = t.top;
                    if ("page" == n) r -= an(),
                        i -= sn();
                    else if ("local" == n || !n) {
                        var o = e.display.sizer.getBoundingClientRect();
                        r += o.left,
                            i += o.top
                    }
                    var l = e.display.lineSpace.getBoundingClientRect();
                    return {
                        left: r - l.left,
                        top: i - l.top
                    }
                }
                function fn(e, t, n, r, i) {
                    return r || (r = S(e.doc, t.line)),
                        un(e, r, Xt(e, r, t.ch, i), n)
                }
                function hn(e, t, n, r, i, o) {
                    function l(t, l) {
                        var a = Jt(e, i, t, l ? "right" : "left", o);
                        return l ? a.left = a.right : a.right = a.left,
                            un(e, r, a, n)
                    }
                    function a(e, t) {
                        var n = s[t],
                            r = n.level % 2;
                        return e == ye(n) && t && n.level < s[t - 1].level ? (n = s[--t], e = be(n) - (n.level % 2 ? 0 : 1), r = !0) : e == be(n) && t < s.length - 1 && n.level < s[t + 1].level && (n = s[++t], e = ye(n) - n.level % 2, r = !1),
                            r && e == n.to && e > n.from ? l(e - 1) : l(e, r)
                    }
                    r = r || S(e.doc, t.line),
                        i || (i = Zt(e, r));
                    var s = Te(r),
                        u = t.ch;
                    if (!s) return l(u);
                    var c = Le(s, u),
                        f = a(u, c);
                    return null != Rl && (f.other = a(u, Rl)),
                        f
                }
                function dn(e, t) {
                    var n = 0;
                    t = R(e.doc, t),
                        e.options.lineWrapping || (n = yn(e.display) * t.ch);
                    var r = S(e.doc, t.line),
                        i = pe(r) + Bt(e.display);
                    return {
                        left: n,
                        right: n,
                        top: i,
                        bottom: i + r.height
                    }
                }
                function pn(e, t, n, r) {
                    var i = H(e, t);
                    return i.xRel = r,
                        n && (i.outside = !0),
                        i
                }
                function gn(e, t, n) {
                    var r = e.doc;
                    if (n += e.display.viewOffset, n < 0) return pn(r.first, 0, !0, -1);
                    var i = A(r, n),
                        o = r.first + r.size - 1;
                    if (i > o) return pn(r.first + r.size - 1, S(r, o).text.length, !0, 1);
                    t < 0 && (t = 0);
                    for (var l = S(r, i); ;) {
                        var a = vn(e, l, i, t, n),
                            s = le(l),
                            u = s && s.find(0, !0);
                        if (!s || !(a.ch > u.from.ch || a.ch == u.from.ch && a.xRel > 0)) return a;
                        i = O(l = u.to.line)
                    }
                }
                function vn(e, t, n, r, i) {
                    function o(r) {
                        var i = hn(e, H(n, r), "line", t, u);
                        return a = !0,
                            l > i.bottom ? i.left - s : l < i.top ? i.left + s : (a = !1, i.left)
                    }
                    var l = i - pe(t),
                        a = !1,
                        s = 2 * e.display.wrapper.clientWidth,
                        u = Zt(e, t),
                        c = Te(t),
                        f = t.text.length,
                        h = we(t),
                        d = xe(t),
                        p = o(h),
                        g = a,
                        v = o(d),
                        m = a;
                    if (r > v) return pn(n, d, m, 1);
                    for (; ;) {
                        if (c ? d == h || d == Se(t, h, 1) : d - h <= 1) {
                            var y = r < p || r - p <= v - r ? h : d,
                                b = y == h ? g : m,
                                w = r - (y == h ? p : v);
                            if (m && !c && !/\s/.test(t.text.charAt(y)) && w > 0 && y < t.text.length && u.view.measure.heights.length > 1) {
                                var x = Jt(e, u, y, "right");
                                l <= x.bottom && l >= x.top && Math.abs(r - x.right) < w && (b = !1, y++, w = r - x.right)
                            }
                            for (; L(t.text.charAt(y));)++y;
                            var C = pn(n, y, b, w < -1 ? -1 : w > 1 ? 1 : 0);
                            return C
                        }
                        var k = Math.ceil(f / 2),
                            S = h + k;
                        if (c) {
                            S = h;
                            for (var M = 0; M < k; ++M) S = Se(t, S, 1)
                        }
                        var T = o(S);
                        T > r ? (d = S, v = T, (m = a) && (v += 1e3), f = k) : (h = S, p = T, g = a, f -= k)
                    }
                }
                function mn(e) {
                    if (null != e.cachedTextHeight) return e.cachedTextHeight;
                    if (null == Jl) {
                        Jl = r("pre");
                        for (var i = 0; i < 49; ++i) Jl.appendChild(document.createTextNode("x")),
                            Jl.appendChild(r("br"));
                        Jl.appendChild(document.createTextNode("x"))
                    }
                    n(e.measure, Jl);
                    var o = Jl.offsetHeight / 50;
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
                        l = (o.right - o.left) / 10;
                    return l > 2 && (e.cachedCharWidth = l),
                        l || 10
                }
                function bn(e) {
                    for (var t = e.display,
                        n = {},
                        r = {},
                        i = t.gutters.clientLeft,
                        o = t.gutters.firstChild,
                        l = 0; o; o = o.nextSibling, ++l) n[e.options.gutters[l]] = o.offsetLeft + o.clientLeft + i,
                            r[e.options.gutters[l]] = o.clientWidth;
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
                    var t = mn(e.display),
                        n = e.options.lineWrapping,
                        r = n && Math.max(5, e.display.scroller.clientWidth / yn(e.display) - 3);
                    return function (i) {
                        if (he(e.doc, i)) return 0;
                        var o = 0;
                        if (i.widgets) for (var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (o += i.widgets[l].height);
                        return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
                    }
                }
                function Cn(e) {
                    var t = e.doc,
                        n = xn(e);
                    t.iter(function (e) {
                        var t = n(e);
                        t != e.height && N(e, t)
                    })
                }
                function Ln(e, t, n, r) {
                    var i = e.display;
                    if (!n && "true" == Re(t).getAttribute("cm-not-content")) return null;
                    var o, l, a = i.lineSpace.getBoundingClientRect();
                    try {
                        o = t.clientX - a.left,
                            l = t.clientY - a.top
                    } catch (e) {
                        return null
                    }
                    var s, u = gn(e, o, l);
                    if (r && 1 == u.xRel && (s = S(e.doc, u.line).text).length == u.ch) {
                        var f = c(s, s.length, e.options.tabSize) - s.length;
                        u = H(u.line, Math.max(0, Math.round((o - jt(e.display).left) / yn(e.display)) - f))
                    }
                    return u
                }
                function kn(e, t) {
                    if (t >= e.display.viewTo) return null;
                    if (t -= e.display.viewFrom, t < 0) return null;
                    for (var n = e.display.view,
                        r = 0; r < n.length; r++) if (t -= n[r].size, t < 0) return r
                }
                function Sn(e) {
                    e.display.input.showSelection(e.display.input.prepareSelection())
                }
                function Mn(e, t) {
                    for (var n = e.doc,
                        r = {},
                        i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), l = 0; l < n.sel.ranges.length; l++) if (t !== !1 || l != n.sel.primIndex) {
                            var a = n.sel.ranges[l];
                            if (!(a.from().line >= e.display.viewTo || a.to().line < e.display.viewFrom)) {
                                var s = a.empty(); (s || e.options.showCursorWhenSelecting) && Tn(e, a.head, i),
                                    s || Nn(e, a, o)
                            }
                        }
                    return r
                }
                function Tn(e, t, n) {
                    var i = hn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                        o = n.appendChild(r("div", " ", "CodeMirror-cursor"));
                    if (o.style.left = i.left + "px", o.style.top = i.top + "px", o.style.height = Math.max(0, i.bottom - i.top) * e.options.cursorHeight + "px", i.other) {
                        var l = n.appendChild(r("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                        l.style.display = "",
                            l.style.left = i.other.left + "px",
                            l.style.top = i.other.top + "px",
                            l.style.height = .85 * (i.other.bottom - i.other.top) + "px"
                    }
                }
                function Nn(e, t, n) {
                    function i(e, t, n, i) {
                        t < 0 && (t = 0),
                            t = Math.round(t),
                            i = Math.round(i),
                            s.appendChild(r("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? f - e : n) + "px;\n                             height: " + (i - t) + "px"))
                    }
                    function o(t, n, r) {
                        function o(n, r) {
                            return fn(e, H(t, n), "div", u, r)
                        }
                        var l, s, u = S(a, t),
                            h = u.text.length;
                        return me(Te(u), n || 0, null == r ? h : r,
                            function (e, t, a) {
                                var u, d, p, g = o(e, "left");
                                if (e == t) u = g,
                                    d = p = g.left;
                                else {
                                    if (u = o(t - 1, "right"), "rtl" == a) {
                                        var v = g;
                                        g = u,
                                            u = v
                                    }
                                    d = g.left,
                                        p = u.right
                                }
                                null == n && 0 == e && (d = c),
                                    u.top - g.top > 3 && (i(d, g.top, null, g.bottom), d = c, g.bottom < u.top && i(d, g.bottom, null, u.top)),
                                    null == r && t == h && (p = f),
                                    (!l || g.top < l.top || g.top == l.top && g.left < l.left) && (l = g),
                                    (!s || u.bottom > s.bottom || u.bottom == s.bottom && u.right > s.right) && (s = u),
                                    d < c + 1 && (d = c),
                                    i(d, u.top, p - d, u.bottom)
                            }),
                        {
                            start: l,
                            end: s
                        }
                    }
                    var l = e.display,
                        a = e.doc,
                        s = document.createDocumentFragment(),
                        u = jt(e.display),
                        c = u.left,
                        f = Math.max(l.sizerWidth, Gt(e) - l.sizer.offsetLeft) - u.right,
                        h = t.from(),
                        d = t.to();
                    if (h.line == d.line) o(h.line, h.ch, d.ch);
                    else {
                        var p = S(a, h.line),
                            g = S(a, d.line),
                            v = se(p) == se(g),
                            m = o(h.line, h.ch, v ? p.text.length + 1 : null).end,
                            y = o(d.line, v ? 0 : null, d.ch).start;
                        v && (m.top < y.top - 2 ? (i(m.right, m.top, null, m.bottom), i(c, y.top, y.left, y.bottom)) : i(m.right, m.top, y.left - m.right, m.bottom)),
                            m.bottom < y.top && i(c, m.bottom, null, y.top)
                    }
                    n.appendChild(s)
                }
                function On(e) {
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
                function An(e) {
                    e.state.focused || (e.display.input.focus(), Wn(e))
                }
                function En(e) {
                    e.state.delayingBlurEvent = !0,
                        setTimeout(function () {
                            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, Hn(e))
                        },
                            100)
                }
                function Wn(e, t) {
                    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
                        "nocursor" != e.options.readOnly && (e.state.focused || (Ae(e, "focus", e, t), e.state.focused = !0, l(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), ul && setTimeout(function () {
                            return e.display.input.reset(!0)
                        },
                            20)), e.display.input.receivedFocus()), On(e))
                }
                function Hn(e, t) {
                    e.state.delayingBlurEvent || (e.state.focused && (Ae(e, "blur", e, t), e.state.focused = !1, Sl(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
                        e.state.focused || (e.display.shift = !1)
                    },
                        150))
                }
                function Dn(e) {
                    var t = e.display,
                        n = t.view;
                    if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                        for (var r = wn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", l = 0; l < n.length; l++) if (!n[l].hidden) {
                            e.options.fixedGutter && (n[l].gutter && (n[l].gutter.style.left = o), n[l].gutterBackground && (n[l].gutterBackground.style.left = o));
                            var a = n[l].alignable;
                            if (a) for (var s = 0; s < a.length; s++) a[s].style.left = o
                        }
                        e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
                    }
                }
                function Pn(e) {
                    if (!e.options.lineNumbers) return !1;
                    var t = e.doc,
                        n = W(e.options, t.first + t.size - 1),
                        i = e.display;
                    if (n.length != i.lineNumChars) {
                        var o = i.measure.appendChild(r("div", [r("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                            l = o.firstChild.offsetWidth,
                            a = o.offsetWidth - l;
                        return i.lineGutter.style.width = "",
                            i.lineNumInnerWidth = Math.max(l, i.lineGutter.offsetWidth - a) + 1,
                            i.lineNumWidth = i.lineNumInnerWidth + a,
                            i.lineNumChars = i.lineNumInnerWidth ? n.length : -1,
                            i.lineGutter.style.width = i.lineNumWidth + "px",
                            Or(e),
                            !0
                    }
                    return !1
                }
                function Fn(e) {
                    for (var t = e.display,
                        n = t.lineDiv.offsetTop,
                        r = 0; r < t.view.length; r++) {
                        var i = t.view[r],
                            o = void 0;
                        if (!i.hidden) {
                            if (al && sl < 8) {
                                var l = i.node.offsetTop + i.node.offsetHeight;
                                o = l - n,
                                    n = l
                            } else {
                                var a = i.node.getBoundingClientRect();
                                o = a.bottom - a.top
                            }
                            var s = i.line.height - o;
                            if (o < 2 && (o = mn(t)), (s > .001 || s < -.001) && (N(i.line, o), zn(i.line), i.rest)) for (var u = 0; u < i.rest.length; u++) zn(i.rest[u])
                        }
                    }
                }
                function zn(e) {
                    if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight
                }
                function In(e, t, n) {
                    var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
                    r = Math.floor(r - Bt(e));
                    var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
                        o = A(t, r),
                        l = A(t, i);
                    if (n && n.ensure) {
                        var a = n.ensure.from.line,
                            s = n.ensure.to.line;
                        a < o ? (o = a, l = A(t, pe(S(t, a)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= l && (o = A(t, pe(S(t, s)) - e.wrapper.clientHeight), l = s)
                    }
                    return {
                        from: o,
                        to: Math.max(l, o + 1)
                    }
                }
                function Rn(e, t) {
                    Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, il || Tr(e, {
                        top: t
                    }), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbars.setScrollTop(t), il && Tr(e), xr(e, 100))
                }
                function Bn(e, t, n) {
                    (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, Dn(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
                }
                function _n(e) {
                    var t = e.wheelDeltaX,
                        n = e.wheelDeltaY;
                    return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
                        null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta),
                    {
                        x: t,
                        y: n
                    }
                }
                function jn(e) {
                    var t = _n(e);
                    return t.x *= oa,
                        t.y *= oa,
                        t
                }
                function Vn(e, t) {
                    var n = _n(t),
                        r = n.x,
                        i = n.y,
                        o = e.display,
                        l = o.scroller,
                        a = l.scrollWidth > l.clientWidth,
                        s = l.scrollHeight > l.clientHeight;
                    if (r && a || i && s) {
                        if (i && yl && ul) e: for (var u = t.target,
                            c = o.view; u != l; u = u.parentNode) for (var f = 0; f < c.length; f++) if (c[f].node == u) {
                                e.display.currentWheelTarget = u;
                                break e
                            }
                        if (r && !il && !hl && null != oa) return i && s && Rn(e, Math.max(0, Math.min(l.scrollTop + i * oa, l.scrollHeight - l.clientHeight))),
                            Bn(e, Math.max(0, Math.min(l.scrollLeft + r * oa, l.scrollWidth - l.clientWidth))),
                            (!i || i && s) && Pe(t),
                            void (o.wheelStartX = null);
                        if (i && null != oa) {
                            var h = i * oa,
                                d = e.doc.scrollTop,
                                p = d + o.wrapper.clientHeight;
                            h < 0 ? d = Math.max(0, d + h - 50) : p = Math.min(e.doc.height, p + h + 50),
                                Tr(e, {
                                    top: d,
                                    bottom: p
                                })
                        }
                        ia < 20 && (null == o.wheelStartX ? (o.wheelStartX = l.scrollLeft, o.wheelStartY = l.scrollTop, o.wheelDX = r, o.wheelDY = i, setTimeout(function () {
                            if (null != o.wheelStartX) {
                                var e = l.scrollLeft - o.wheelStartX,
                                    t = l.scrollTop - o.wheelStartY,
                                    n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
                                o.wheelStartX = o.wheelStartY = null,
                                    n && (oa = (oa * ia + n) / (ia + 1), ++ia)
                            }
                        },
                            200)) : (o.wheelDX += r, o.wheelDY += i))
                    }
                }
                function Gn(e) {
                    var t = e.display,
                        n = t.gutters.offsetWidth,
                        r = Math.round(e.doc.height + _t(e.display));
                    return {
                        clientHeight: t.scroller.clientHeight,
                        viewHeight: t.wrapper.clientHeight,
                        scrollWidth: t.scroller.scrollWidth,
                        clientWidth: t.scroller.clientWidth,
                        viewWidth: t.wrapper.clientWidth,
                        barLeft: e.options.fixedGutter ? n : 0,
                        docHeight: r,
                        scrollHeight: r + Vt(e) + t.barHeight,
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
                        jl(i, "scroll",
                            function () {
                                i.clientHeight && t(i.scrollTop, "vertical")
                            }),
                        jl(o, "scroll",
                            function () {
                                o.clientWidth && t(o.scrollLeft, "horizontal")
                            }),
                        this.checkedZeroWidth = !1,
                        al && sl < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
                }
                function Kn() { }
                function qn(e, t) {
                    t || (t = Gn(e));
                    var n = e.display.barWidth,
                        r = e.display.barHeight;
                    $n(e, t);
                    for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) n != e.display.barWidth && e.options.lineWrapping && Fn(e),
                        $n(e, Gn(e)),
                        n = e.display.barWidth,
                        r = e.display.barHeight
                }
                function $n(e, t) {
                    var n = e.display,
                        r = n.scrollbars.update(t);
                    n.sizer.style.paddingRight = (n.barWidth = r.right) + "px",
                        n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px",
                        n.heightForcer.style.borderBottom = r.bottom + "px solid transparent",
                        r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "",
                        r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
                }
                function Xn(e) {
                    e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && Sl(e.display.wrapper, e.display.scrollbars.addClass)),
                        e.display.scrollbars = new la[e.options.scrollbarStyle](function (t) {
                            e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                                jl(t, "mousedown",
                                    function () {
                                        e.state.focused && setTimeout(function () {
                                            return e.display.input.focus()
                                        },
                                            0)
                                    }),
                                t.setAttribute("cm-not-content", "true")
                        },
                            function (t, n) {
                                "horizontal" == n ? Bn(e, t) : Rn(e, t)
                            },
                            e),
                        e.display.scrollbars.addClass && l(e.display.wrapper, e.display.scrollbars.addClass)
                }
                function Yn(e, t) {
                    if (!Ee(e, "scrollCursorIntoView")) {
                        var n = e.display,
                            i = n.sizer.getBoundingClientRect(),
                            o = null;
                        if (t.top + i.top < 0 ? o = !0 : t.bottom + i.top > (window.innerHeight || document.documentElement.clientHeight) && (o = !1), null != o && !gl) {
                            var l = r("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - Bt(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Vt(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: 2px;");
                            e.display.lineSpace.appendChild(l),
                                l.scrollIntoView(o),
                                e.display.lineSpace.removeChild(l)
                        }
                    }
                }
                function Zn(e, t, n, r) {
                    null == r && (r = 0);
                    for (var i, o = 0; o < 5; o++) {
                        var l = !1;
                        i = hn(e, t);
                        var a = n && n != t ? hn(e, n) : i,
                            s = Qn(e, Math.min(i.left, a.left), Math.min(i.top, a.top) - r, Math.max(i.left, a.left), Math.max(i.bottom, a.bottom) + r),
                            u = e.doc.scrollTop,
                            c = e.doc.scrollLeft;
                        if (null != s.scrollTop && (Rn(e, s.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (l = !0)), null != s.scrollLeft && (Bn(e, s.scrollLeft), Math.abs(e.doc.scrollLeft - c) > 1 && (l = !0)), !l) break
                    }
                    return i
                }
                function Jn(e, t, n, r, i) {
                    var o = Qn(e, t, n, r, i);
                    null != o.scrollTop && Rn(e, o.scrollTop),
                        null != o.scrollLeft && Bn(e, o.scrollLeft)
                }
                function Qn(e, t, n, r, i) {
                    var o = e.display,
                        l = mn(e.display);
                    n < 0 && (n = 0);
                    var a = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : o.scroller.scrollTop,
                        s = Ut(e),
                        u = {};
                    i - n > s && (i = n + s);
                    var c = e.doc.height + _t(o),
                        f = n < l,
                        h = i > c - l;
                    if (n < a) u.scrollTop = f ? 0 : n;
                    else if (i > a + s) {
                        var d = Math.min(n, (h ? c : i) - s);
                        d != a && (u.scrollTop = d)
                    }
                    var p = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : o.scroller.scrollLeft,
                        g = Gt(e) - (e.options.fixedGutter ? o.gutters.offsetWidth : 0),
                        v = r - t > g;
                    return v && (r = t + g),
                        t < 10 ? u.scrollLeft = 0 : t < p ? u.scrollLeft = Math.max(0, t - (v ? 0 : 10)) : r > g + p - 3 && (u.scrollLeft = r + (v ? 0 : 10) - g),
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
                    e.options.lineWrapping || (n = t.ch ? H(t.line, t.ch - 1) : t, r = H(t.line, t.ch + 1)),
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
                        var n = dn(e, t.from),
                            r = dn(e, t.to),
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
                        id: ++aa
                    },
                        xt(e.curOp)
                }
                function ir(e) {
                    var t = e.curOp;
                    Lt(t,
                        function (e) {
                            for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                            or(e)
                        })
                }
                function or(e) {
                    for (var t = e.ops,
                        n = 0; n < t.length; n++) lr(t[n]);
                    for (var r = 0; r < t.length; r++) ar(t[r]);
                    for (var i = 0; i < t.length; i++) sr(t[i]);
                    for (var o = 0; o < t.length; o++) ur(t[o]);
                    for (var l = 0; l < t.length; l++) cr(t[l])
                }
                function lr(e) {
                    var t = e.cm,
                        n = t.display;
                    kr(t),
                        e.updateMaxLine && ve(t),
                        e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping,
                        e.update = e.mustUpdate && new Lr(t, e.mustUpdate && {
                            top: e.scrollTop,
                            ensure: e.scrollToPos
                        },
                            e.forceUpdate)
                }
                function ar(e) {
                    e.updatedDisplay = e.mustUpdate && Sr(e.cm, e.update)
                }
                function sr(e) {
                    var t = e.cm,
                        n = t.display;
                    e.updatedDisplay && Fn(t),
                        e.barMeasure = Gn(t),
                        n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Xt(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Vt(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Gt(t))),
                        (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection(e.focus))
                }
                function ur(e) {
                    var t = e.cm;
                    null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Bn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
                    var n = e.focus && e.focus == o() && (!document.hasFocus || document.hasFocus());
                    e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n),
                        (e.updatedDisplay || e.startHeight != t.doc.height) && qn(t, e.barMeasure),
                        e.updatedDisplay && Ar(t, e.barMeasure),
                        e.selectionChanged && On(t),
                        t.state.focused && e.updateInput && t.display.input.reset(e.typing),
                        n && An(e.cm)
                }
                function cr(e) {
                    var t = e.cm,
                        n = t.display,
                        r = t.doc;
                    if (e.updatedDisplay && Mr(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null == e.scrollTop || n.scroller.scrollTop == e.scrollTop && !e.forceScroll || (r.scrollTop = Math.max(0, Math.min(n.scroller.scrollHeight - n.scroller.clientHeight, e.scrollTop)), n.scrollbars.setScrollTop(r.scrollTop), n.scroller.scrollTop = r.scrollTop), null == e.scrollLeft || n.scroller.scrollLeft == e.scrollLeft && !e.forceScroll || (r.scrollLeft = Math.max(0, Math.min(n.scroller.scrollWidth - n.scroller.clientWidth, e.scrollLeft)), n.scrollbars.setScrollLeft(r.scrollLeft), n.scroller.scrollLeft = r.scrollLeft, Dn(t)), e.scrollToPos) {
                        var i = Zn(t, R(r, e.scrollToPos.from), R(r, e.scrollToPos.to), e.scrollToPos.margin);
                        e.scrollToPos.isCursor && t.state.focused && Yn(t, i)
                    }
                    var o = e.maybeHiddenMarkers,
                        l = e.maybeUnhiddenMarkers;
                    if (o) for (var a = 0; a < o.length; ++a) o[a].lines.length || Ae(o[a], "hide");
                    if (l) for (var s = 0; s < l.length; ++s) l[s].lines.length && Ae(l[s], "unhide");
                    n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
                        e.changeObjs && Ae(t, "changes", t, e.changeObjs),
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
                function hr(e, t) {
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
                function dr(e) {
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
                function gr(e, t, n, r) {
                    null == t && (t = e.doc.first),
                        null == n && (n = e.doc.first + e.doc.size),
                        r || (r = 0);
                    var i = e.display;
                    if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Il && ce(e.doc, t) < i.viewTo && mr(e);
                    else if (n <= i.viewFrom) Il && fe(e.doc, n + r) > i.viewFrom ? mr(e) : (i.viewFrom += r, i.viewTo += r);
                    else if (t <= i.viewFrom && n >= i.viewTo) mr(e);
                    else if (t <= i.viewFrom) {
                        var o = yr(e, n, n + r, 1);
                        o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : mr(e)
                    } else if (n >= i.viewTo) {
                        var l = yr(e, t, t, -1);
                        l ? (i.view = i.view.slice(0, l.index), i.viewTo = l.lineN) : mr(e)
                    } else {
                        var a = yr(e, t, t, -1),
                            s = yr(e, n, n + r, 1);
                        a && s ? (i.view = i.view.slice(0, a.index).concat(wt(e, a.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += r) : mr(e)
                    }
                    var u = i.externalMeasured;
                    u && (n < u.lineN ? u.lineN += r : t < u.lineN + u.size && (i.externalMeasured = null))
                }
                function vr(e, t, n) {
                    e.curOp.viewChanged = !0;
                    var r = e.display,
                        i = e.display.externalMeasured;
                    if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
                        var o = r.view[kn(e, t)];
                        if (null != o.node) {
                            var l = o.changes || (o.changes = []);
                            h(l, n) == -1 && l.push(n)
                        }
                    }
                }
                function mr(e) {
                    e.display.viewFrom = e.display.viewTo = e.doc.first,
                        e.display.view = [],
                        e.display.viewOffset = 0
                }
                function yr(e, t, n, r) {
                    var i, o = kn(e, t),
                        l = e.display.view;
                    if (!Il || n == e.doc.first + e.doc.size) return {
                        index: o,
                        lineN: n
                    };
                    for (var a = e.display.viewFrom,
                        s = 0; s < o; s++) a += l[s].size;
                    if (a != t) {
                        if (r > 0) {
                            if (o == l.length - 1) return null;
                            i = a + l[o].size - t,
                                o++
                        } else i = a - t;
                        t += i,
                            n += i
                    }
                    for (; ce(e.doc, n) != n;) {
                        if (o == (r < 0 ? 0 : l.length - 1)) return null;
                        n += r * l[o - (r < 0 ? 1 : 0)].size,
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
                    0 == i.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = wt(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = wt(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(kn(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(wt(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, kn(e, n)))),
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
                    e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set(t, s(Cr, e))
                }
                function Cr(e) {
                    var t = e.doc;
                    if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.viewTo)) {
                        var n = +new Date + e.options.workTime,
                            r = Xe(t.mode, et(e, t.frontier)),
                            i = [];
                        t.iter(t.frontier, Math.min(t.first + t.size, e.display.viewTo + 500),
                            function (o) {
                                if (t.frontier >= e.display.viewFrom) {
                                    var l = o.styles,
                                        a = o.text.length > e.options.maxHighlightLength,
                                        s = Je(e, o, a ? Xe(t.mode, r) : r, !0);
                                    o.styles = s.styles;
                                    var u = o.styleClasses,
                                        c = s.classes;
                                    c ? o.styleClasses = c : u && (o.styleClasses = null);
                                    for (var f = !l || l.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), h = 0; !f && h < l.length; ++h) f = l[h] != o.styles[h];
                                    f && i.push(t.frontier),
                                        o.stateAfter = a ? r : Xe(t.mode, r)
                                } else o.text.length <= e.options.maxHighlightLength && tt(e, o.text, r),
                                    o.stateAfter = t.frontier % 5 == 0 ? Xe(t.mode, r) : null;
                                if (++t.frontier, +new Date > n) return xr(e, e.options.workDelay),
                                    !0
                            }),
                            i.length && fr(e,
                                function () {
                                    for (var t = 0; t < i.length; t++) vr(e, i[t], "text")
                                })
                    }
                }
                function Lr(e, t, n) {
                    var r = e.display;
                    this.viewport = t,
                        this.visible = In(r, e.doc, t),
                        this.editorIsHidden = !r.wrapper.offsetWidth,
                        this.wrapperHeight = r.wrapper.clientHeight,
                        this.wrapperWidth = r.wrapper.clientWidth,
                        this.oldDisplayWidth = Gt(e),
                        this.force = n,
                        this.dims = bn(e),
                        this.events = []
                }
                function kr(e) {
                    var t = e.display; !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Vt(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Vt(e) + "px", t.scrollbarsClipped = !0)
                }
                function Sr(e, n) {
                    var r = e.display,
                        i = e.doc;
                    if (n.editorIsHidden) return mr(e),
                        !1;
                    if (!n.force && n.visible.from >= r.viewFrom && n.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == wr(e)) return !1;
                    Pn(e) && (mr(e), n.dims = bn(e));
                    var l = i.first + i.size,
                        a = Math.max(n.visible.from - e.options.viewportMargin, i.first),
                        s = Math.min(l, n.visible.to + e.options.viewportMargin);
                    r.viewFrom < a && a - r.viewFrom < 20 && (a = Math.max(i.first, r.viewFrom)),
                        r.viewTo > s && r.viewTo - s < 20 && (s = Math.min(l, r.viewTo)),
                        Il && (a = ce(e.doc, a), s = fe(e.doc, s));
                    var u = a != r.viewFrom || s != r.viewTo || r.lastWrapHeight != n.wrapperHeight || r.lastWrapWidth != n.wrapperWidth;
                    br(e, a, s),
                        r.viewOffset = pe(S(e.doc, r.viewFrom)),
                        e.display.mover.style.top = r.viewOffset + "px";
                    var c = wr(e);
                    if (!u && 0 == c && !n.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
                    var f = o();
                    return c > 4 && (r.lineDiv.style.display = "none"),
                        Nr(e, r.updateLineNumbers, n.dims),
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
                function Mr(e, t) {
                    for (var n = t.viewport,
                        r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != Gt(e) || (n && null != n.top && (n = {
                            top: Math.min(e.doc.height + _t(e.display) - Ut(e), n.top)
                        }), t.visible = In(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && Sr(e, t); r = !1) {
                        Fn(e);
                        var i = Gn(e);
                        Sn(e),
                            qn(e, i),
                            Ar(e, i)
                    }
                    t.signal(e, "update", e),
                        e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
                }
                function Tr(e, t) {
                    var n = new Lr(e, t);
                    if (Sr(e, n)) {
                        Fn(e),
                            Mr(e, n);
                        var r = Gn(e);
                        Sn(e),
                            qn(e, r),
                            Ar(e, r),
                            n.finish()
                    }
                }
                function Nr(e, n, r) {
                    function i(t) {
                        var n = t.nextSibling;
                        return ul && yl && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t),
                            n
                    }
                    for (var o = e.display,
                        l = e.options.lineNumbers,
                        a = o.lineDiv,
                        s = a.firstChild,
                        u = o.view,
                        c = o.viewFrom,
                        f = 0; f < u.length; f++) {
                        var d = u[f];
                        if (d.hidden);
                        else if (d.node && d.node.parentNode == a) {
                            for (; s != d.node;) s = i(s);
                            var p = l && null != n && n <= c && d.lineNumber;
                            d.changes && (h(d.changes, "gutter") > -1 && (p = !1), Mt(e, d, c, r)),
                                p && (t(d.lineNumber), d.lineNumber.appendChild(document.createTextNode(W(e.options, c)))),
                                s = d.node.nextSibling
                        } else {
                            var g = Dt(e, d, c, r);
                            a.insertBefore(g, s)
                        }
                        c += d.size
                    }
                    for (; s;) s = i(s)
                }
                function Or(e) {
                    var t = e.display.gutters.offsetWidth;
                    e.display.sizer.style.marginLeft = t + "px"
                }
                function Ar(e, t) {
                    e.display.sizer.style.minHeight = t.docHeight + "px",
                        e.display.heightForcer.style.top = t.docHeight + "px",
                        e.display.gutters.style.height = t.docHeight + e.display.barHeight + Vt(e) + "px"
                }
                function Er(e) {
                    var n = e.display.gutters,
                        i = e.options.gutters;
                    t(n);
                    for (var o = 0; o < i.length; ++o) {
                        var l = i[o],
                            a = n.appendChild(r("div", null, "CodeMirror-gutter " + l));
                        "CodeMirror-linenumbers" == l && (e.display.lineGutter = a, a.style.width = (e.display.lineNumWidth || 1) + "px")
                    }
                    n.style.display = o ? "" : "none",
                        Or(e)
                }
                function Wr(e) {
                    var t = h(e.gutters, "CodeMirror-linenumbers");
                    t == -1 && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
                }
                function Hr(e, t) {
                    this.ranges = e,
                        this.primIndex = t
                }
                function Dr(e, t) {
                    this.anchor = e,
                        this.head = t
                }
                function Pr(e, t) {
                    var n = e[t];
                    e.sort(function (e, t) {
                        return D(e.from(), t.from())
                    }),
                        t = h(e, n);
                    for (var r = 1; r < e.length; r++) {
                        var i = e[r],
                            o = e[r - 1];
                        if (D(o.to(), i.from()) >= 0) {
                            var l = z(o.from(), i.from()),
                                a = F(o.to(), i.to()),
                                s = o.empty() ? i.from() == i.head : o.from() == o.head;
                            r <= t && --t,
                                e.splice(--r, 2, new Dr(s ? a : l, s ? l : a))
                        }
                    }
                    return new Hr(e, t)
                }
                function Fr(e, t) {
                    return new Hr([new Dr(e, t || e)], 0)
                }
                function zr(e) {
                    return e.text ? H(e.from.line + e.text.length - 1, g(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
                }
                function Ir(e, t) {
                    if (D(e, t.from) < 0) return e;
                    if (D(e, t.to) <= 0) return zr(t);
                    var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                        r = e.ch;
                    return e.line == t.to.line && (r += zr(t).ch - t.to.ch),
                        H(n, r)
                }
                function Rr(e, t) {
                    for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
                        var i = e.sel.ranges[r];
                        n.push(new Dr(Ir(i.anchor, t), Ir(i.head, t)))
                    }
                    return Pr(n, e.sel.primIndex)
                }
                function Br(e, t, n) {
                    return e.line == t.line ? H(n.line, e.ch - t.ch + n.ch) : H(n.line + (e.line - t.line), e.ch)
                }
                function _r(e, t, n) {
                    for (var r = [], i = H(e.first, 0), o = i, l = 0; l < t.length; l++) {
                        var a = t[l],
                            s = Br(a.from, i, o),
                            u = Br(zr(a), i, o);
                        if (i = a.to, o = u, "around" == n) {
                            var c = e.sel.ranges[l],
                                f = D(c.head, c.anchor) < 0;
                            r[l] = new Dr(f ? u : s, f ? s : u)
                        } else r[l] = new Dr(s, s)
                    }
                    return new Hr(r, e.sel.primIndex)
                }
                function jr(e) {
                    e.doc.mode = qe(e.options, e.doc.modeOption),
                        Vr(e)
                }
                function Vr(e) {
                    e.doc.iter(function (e) {
                        e.stateAfter && (e.stateAfter = null),
                            e.styles && (e.styles = null)
                    }),
                        e.doc.frontier = e.doc.first,
                        xr(e, 100),
                        e.state.modeGen++,
                        e.curOp && gr(e)
                }
                function Gr(e, t) {
                    return 0 == t.from.ch && 0 == t.to.ch && "" == g(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
                }
                function Ur(e, t, n, r) {
                    function i(e) {
                        return n ? n[e] : null
                    }
                    function o(e, n, i) {
                        ut(e, n, i, r),
                            kt(e, "change", e, t)
                    }
                    function l(e, t) {
                        for (var n = [], o = e; o < t; ++o) n.push(new st(u[o], i(o), r));
                        return n
                    }
                    var a = t.from,
                        s = t.to,
                        u = t.text,
                        c = S(e, a.line),
                        f = S(e, s.line),
                        h = g(u),
                        d = i(u.length - 1),
                        p = s.line - a.line;
                    if (t.full) e.insert(0, l(0, u.length)),
                        e.remove(u.length, e.size - u.length);
                    else if (Gr(e, t)) {
                        var v = l(0, u.length - 1);
                        o(f, f.text, d),
                            p && e.remove(a.line, p),
                            v.length && e.insert(a.line, v)
                    } else if (c == f) if (1 == u.length) o(c, c.text.slice(0, a.ch) + h + c.text.slice(s.ch), d);
                    else {
                        var m = l(1, u.length - 1);
                        m.push(new st(h + c.text.slice(s.ch), d, r)),
                            o(c, c.text.slice(0, a.ch) + u[0], i(0)),
                            e.insert(a.line + 1, m)
                    } else if (1 == u.length) o(c, c.text.slice(0, a.ch) + u[0] + f.text.slice(s.ch), i(0)),
                        e.remove(a.line + 1, p);
                    else {
                        o(c, c.text.slice(0, a.ch) + u[0], i(0)),
                            o(f, h + f.text.slice(s.ch), d);
                        var y = l(1, u.length - 1);
                        p > 1 && e.remove(a.line + 1, p - 1),
                            e.insert(a.line + 1, y)
                    }
                    kt(e, "change", e, t)
                }
                function Kr(e, t, n) {
                    function r(e, i, o) {
                        if (e.linked) for (var l = 0; l < e.linked.length; ++l) {
                            var a = e.linked[l];
                            if (a.doc != i) {
                                var s = o && a.sharedHist;
                                n && !s || (t(a.doc, s), r(a.doc, e, s))
                            }
                        }
                    }
                    r(e, null, !0)
                }
                function qr(e, t) {
                    if (t.cm) throw new Error("This document is already in use.");
                    e.doc = t,
                        t.cm = e,
                        Cn(e),
                        jr(e),
                        e.options.lineWrapping || ve(e),
                        e.options.mode = t.modeOption,
                        gr(e)
                }
                function $r(e) {
                    this.done = [],
                        this.undone = [],
                        this.undoDepth = 1 / 0,
                        this.lastModTime = this.lastSelTime = 0,
                        this.lastOp = this.lastSelOp = null,
                        this.lastOrigin = this.lastSelOrigin = null,
                        this.generation = this.maxGeneration = e || 1
                }
                function Xr(e, t) {
                    var n = {
                        from: P(t.from),
                        to: zr(t),
                        text: M(e, t.from, t.to)
                    };
                    return ni(e, n, t.from.line, t.to.line + 1),
                        Kr(e,
                            function (e) {
                                return ni(e, n, t.from.line, t.to.line + 1)
                            },
                            !0),
                        n
                }
                function Yr(e) {
                    for (; e.length;) {
                        var t = g(e);
                        if (!t.ranges) break;
                        e.pop()
                    }
                }
                function Zr(e, t) {
                    return t ? (Yr(e.done), g(e.done)) : e.done.length && !g(e.done).ranges ? g(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), g(e.done)) : void 0
                }
                function Jr(e, t, n, r) {
                    var i = e.history;
                    i.undone.length = 0;
                    var o, l, a = +new Date;
                    if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > a - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = Zr(i, i.lastOp == r))) l = g(o.changes),
                        0 == D(t.from, t.to) && 0 == D(t.from, l.to) ? l.to = zr(t) : o.changes.push(Xr(e, t));
                    else {
                        var s = g(i.done);
                        for (s && s.ranges || ti(e.sel, i.done), o = {
                            changes: [Xr(e, t)],
                            generation: i.generation
                        },
                            i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(),
                                i.done[0].ranges || i.done.shift()
                    }
                    i.done.push(n),
                        i.generation = ++i.maxGeneration,
                        i.lastModTime = i.lastSelTime = a,
                        i.lastOp = i.lastSelOp = r,
                        i.lastOrigin = i.lastSelOrigin = t.origin,
                        l || Ae(e, "historyAdded")
                }
                function Qr(e, t, n, r) {
                    var i = t.charAt(0);
                    return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
                }
                function ei(e, t, n, r) {
                    var i = e.history,
                        o = r && r.origin;
                    n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || Qr(e, o, g(i.done), t)) ? i.done[i.done.length - 1] = t : ti(t, i.done),
                        i.lastSelTime = +new Date,
                        i.lastSelOrigin = o,
                        i.lastSelOp = n,
                        r && r.clearRedo !== !1 && Yr(i.undone)
                }
                function ti(e, t) {
                    var n = g(t);
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
                            l = r[i];
                        if (o && l) e: for (var a = 0; a < l.length; ++a) {
                            for (var s = l[a], u = 0; u < o.length; ++u) if (o[u].marker == s.marker) continue e;
                            o.push(s)
                        } else l && (n[i] = l)
                    }
                    return n
                }
                function li(e, t, n) {
                    for (var r = [], i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.ranges) r.push(n ? Hr.prototype.deepCopy.call(o) : o);
                        else {
                            var l = o.changes,
                                a = [];
                            r.push({
                                changes: a
                            });
                            for (var s = 0; s < l.length; ++s) {
                                var u = l[s],
                                    c = void 0;
                                if (a.push({
                                    from: u.from,
                                    to: u.to,
                                    text: u.text
                                }), t) for (var f in u) (c = f.match(/^spans_(\d+)$/)) && h(t, Number(c[1])) > -1 && (g(a)[f] = u[f], delete u[f])
                            }
                        }
                    }
                    return r
                }
                function ai(e, t, n, r) {
                    if (e.cm && e.cm.display.shift || e.extend) {
                        var i = t.anchor;
                        if (r) {
                            var o = D(n, i) < 0;
                            o != D(r, i) < 0 ? (i = n, n = r) : o != D(n, r) < 0 && (n = r)
                        }
                        return new Dr(i, n)
                    }
                    return new Dr(r || n, n)
                }
                function si(e, t, n, r) {
                    pi(e, new Hr([ai(e, e.sel.primary(), t, n)], 0), r)
                }
                function ui(e, t, n) {
                    for (var r = [], i = 0; i < e.sel.ranges.length; i++) r[i] = ai(e, e.sel.ranges[i], t[i], null);
                    var o = Pr(r, e.sel.primIndex);
                    pi(e, o, n)
                }
                function ci(e, t, n, r) {
                    var i = e.sel.ranges.slice(0);
                    i[t] = n,
                        pi(e, Pr(i, e.sel.primIndex), r)
                }
                function fi(e, t, n, r) {
                    pi(e, Fr(t, n), r)
                }
                function hi(e, t, n) {
                    var r = {
                        ranges: t.ranges,
                        update: function (t) {
                            var n = this;
                            this.ranges = [];
                            for (var r = 0; r < t.length; r++) n.ranges[r] = new Dr(R(e, t[r].anchor), R(e, t[r].head))
                        },
                        origin: n && n.origin
                    };
                    return Ae(e, "beforeSelectionChange", e, r),
                        e.cm && Ae(e.cm, "beforeSelectionChange", e.cm, r),
                        r.ranges != t.ranges ? Pr(r.ranges, r.ranges.length - 1) : t
                }
                function di(e, t, n) {
                    var r = e.history.done,
                        i = g(r);
                    i && i.ranges ? (r[r.length - 1] = t, gi(e, t, n)) : pi(e, t, n)
                }
                function pi(e, t, n) {
                    gi(e, t, n),
                        ei(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
                }
                function gi(e, t, n) {
                    (He(e, "beforeSelectionChange") || e.cm && He(e.cm, "beforeSelectionChange")) && (t = hi(e, t, n));
                    var r = n && n.bias || (D(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                    vi(e, yi(e, t, r, !0)),
                        n && n.scroll === !1 || !e.cm || tr(e.cm)
                }
                function vi(e, t) {
                    t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, We(e.cm)), kt(e, "cursorActivity", e))
                }
                function mi(e) {
                    vi(e, yi(e, e.sel, null, !1), El)
                }
                function yi(e, t, n, r) {
                    for (var i, o = 0; o < t.ranges.length; o++) {
                        var l = t.ranges[o],
                            a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                            s = wi(e, l.anchor, a && a.anchor, n, r),
                            u = wi(e, l.head, a && a.head, n, r); (i || s != l.anchor || u != l.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new Dr(s, u))
                    }
                    return i ? Pr(i, t.primIndex) : t
                }
                function bi(e, t, n, r, i) {
                    var o = S(e, t.line);
                    if (o.markedSpans) for (var l = 0; l < o.markedSpans.length; ++l) {
                        var a = o.markedSpans[l],
                            s = a.marker;
                        if ((null == a.from || (s.inclusiveLeft ? a.from <= t.ch : a.from < t.ch)) && (null == a.to || (s.inclusiveRight ? a.to >= t.ch : a.to > t.ch))) {
                            if (i && (Ae(s, "beforeCursorEnter"), s.explicitlyCleared)) {
                                if (o.markedSpans) {
                                    --l;
                                    continue
                                }
                                break
                            }
                            if (!s.atomic) continue;
                            if (n) {
                                var u = s.find(r < 0 ? 1 : -1),
                                    c = void 0;
                                if ((r < 0 ? s.inclusiveRight : s.inclusiveLeft) && (u = xi(e, u, -r, u && u.line == t.line ? o : null)), u && u.line == t.line && (c = D(u, n)) && (r < 0 ? c < 0 : c > 0)) return bi(e, u, t, r, i)
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
                        l = bi(e, t, n, o, i) || !i && bi(e, t, n, o, !0) || bi(e, t, n, -o, i) || !i && bi(e, t, n, -o, !0);
                    return l ? l : (e.cantEdit = !0, H(e.first, 0))
                }
                function xi(e, t, n, r) {
                    return n < 0 && 0 == t.ch ? t.line > e.first ? R(e, H(t.line - 1)) : null : n > 0 && t.ch == (r || S(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? H(t.line + 1, 0) : null : new H(t.line, t.ch + n)
                }
                function Ci(e) {
                    e.setSelection(H(e.firstLine(), 0), H(e.lastLine()), El)
                }
                function Li(e, t, n) {
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
                        t && (r.from = R(e, t)),
                            n && (r.to = R(e, n)),
                            i && (r.text = i),
                            void 0 !== o && (r.origin = o)
                    }),
                        Ae(e, "beforeChange", e, r),
                        e.cm && Ae(e.cm, "beforeChange", e.cm, r),
                        r.canceled ? null : {
                            from: r.from,
                            to: r.to,
                            text: r.text,
                            origin: r.origin
                        }
                }
                function ki(e, t, n) {
                    if (e.cm) {
                        if (!e.cm.curOp) return hr(e.cm, ki)(e, t, n);
                        if (e.cm.state.suppressEdits) return
                    }
                    if (!(He(e, "beforeChange") || e.cm && He(e.cm, "beforeChange")) || (t = Li(e, t, !0))) {
                        var r = zl && !n && J(e, t.from, t.to);
                        if (r) for (var i = r.length - 1; i >= 0; --i) Si(e, {
                            from: r[i].from,
                            to: r[i].to,
                            text: i ? [""] : t.text
                        });
                        else Si(e, t)
                    }
                }
                function Si(e, t) {
                    if (1 != t.text.length || "" != t.text[0] || 0 != D(t.from, t.to)) {
                        var n = Rr(e, t);
                        Jr(e, t, n, e.cm ? e.cm.curOp.id : NaN),
                            Ni(e, t, n, Y(e, t));
                        var r = [];
                        Kr(e,
                            function (e, n) {
                                n || h(r, e.history) != -1 || (Hi(e.history, t), r.push(e.history)),
                                    Ni(e, t, null, Y(e, t))
                            })
                    }
                }
                function Mi(e, t, n) {
                    if (!e.cm || !e.cm.state.suppressEdits || n) {
                        for (var r, i = e.history,
                            o = e.sel,
                            l = "undo" == t ? i.done : i.undone, a = "undo" == t ? i.undone : i.done, s = 0; s < l.length && (r = l[s], n ? !r.ranges || r.equals(e.sel) : r.ranges); s++);
                        if (s != l.length) {
                            for (i.lastOrigin = i.lastSelOrigin = null; r = l.pop(), r.ranges;) {
                                if (ti(r, a), n && !r.equals(e.sel)) return void pi(e, r, {
                                    clearRedo: !1
                                });
                                o = r
                            }
                            var u = [];
                            ti(o, a),
                                a.push({
                                    changes: u,
                                    generation: i.generation
                                }),
                                i.generation = r.generation || ++i.maxGeneration;
                            for (var c = He(e, "beforeChange") || e.cm && He(e.cm, "beforeChange"), f = function (n) {
                                var i = r.changes[n];
                                if (i.origin = t, c && !Li(e, i, !1)) return l.length = 0,
                                    {};
                                u.push(Xr(e, i));
                                var o = n ? Rr(e, i) : g(l);
                                Ni(e, i, o, oi(e, i)),
                                    !n && e.cm && e.cm.scrollIntoView({
                                        from: i.from,
                                        to: zr(i)
                                    });
                                var a = [];
                                Kr(e,
                                    function (e, t) {
                                        t || h(a, e.history) != -1 || (Hi(e.history, i), a.push(e.history)),
                                            Ni(e, i, null, oi(e, i))
                                    })
                            },
                                d = r.changes.length - 1; d >= 0; --d) {
                                var p = f(d);
                                if (p) return p.v
                            }
                        }
                    }
                }
                function Ti(e, t) {
                    if (0 != t && (e.first += t, e.sel = new Hr(v(e.sel.ranges,
                        function (e) {
                            return new Dr(H(e.anchor.line + t, e.anchor.ch), H(e.head.line + t, e.head.ch))
                        }), e.sel.primIndex), e.cm)) {
                        gr(e.cm, e.first, e.first - t, t);
                        for (var n = e.cm.display,
                            r = n.viewFrom; r < n.viewTo; r++) vr(e.cm, r, "gutter")
                    }
                }
                function Ni(e, t, n, r) {
                    if (e.cm && !e.cm.curOp) return hr(e.cm, Ni)(e, t, n, r);
                    if (t.to.line < e.first) return void Ti(e, t.text.length - 1 - (t.to.line - t.from.line));
                    if (!(t.from.line > e.lastLine())) {
                        if (t.from.line < e.first) {
                            var i = t.text.length - 1 - (e.first - t.from.line);
                            Ti(e, i),
                                t = {
                                    from: H(e.first, 0),
                                    to: H(t.to.line + i, t.to.ch),
                                    text: [g(t.text)],
                                    origin: t.origin
                                }
                        }
                        var o = e.lastLine();
                        t.to.line > o && (t = {
                            from: t.from,
                            to: H(o, S(e, o).text.length),
                            text: [t.text[0]],
                            origin: t.origin
                        }),
                            t.removed = M(e, t.from, t.to),
                            n || (n = Rr(e, t)),
                            e.cm ? Oi(e.cm, t, r) : Ur(e, t, r),
                            gi(e, n, El)
                    }
                }
                function Oi(e, t, n) {
                    var r = e.doc,
                        i = e.display,
                        o = t.from,
                        l = t.to,
                        a = !1,
                        s = o.line;
                    e.options.lineWrapping || (s = O(se(S(r, o.line))), r.iter(s, l.line + 1,
                        function (e) {
                            if (e == i.maxLine) return a = !0,
                                !0
                        })),
                        r.sel.contains(t.from, t.to) > -1 && We(e),
                        Ur(r, t, n, xn(e)),
                        e.options.lineWrapping || (r.iter(s, o.line + t.text.length,
                            function (e) {
                                var t = ge(e);
                                t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, a = !1)
                            }), a && (e.curOp.updateMaxLine = !0)),
                        r.frontier = Math.min(r.frontier, o.line),
                        xr(e, 400);
                    var u = t.text.length - (l.line - o.line) - 1;
                    t.full ? gr(e) : o.line != l.line || 1 != t.text.length || Gr(e.doc, t) ? gr(e, o.line, l.line + 1, u) : vr(e, o.line, "text");
                    var c = He(e, "changes"),
                        f = He(e, "change");
                    if (f || c) {
                        var h = {
                            from: o,
                            to: l,
                            text: t.text,
                            removed: t.removed,
                            origin: t.origin
                        };
                        f && kt(e, "change", e, h),
                            c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h)
                    }
                    e.display.selForContextMenu = null
                }
                function Ai(e, t, n, r, i) {
                    if (r || (r = n), D(r, n) < 0) {
                        var o = r;
                        r = n,
                            n = o
                    }
                    "string" == typeof t && (t = e.splitLines(t)),
                        ki(e, {
                            from: n,
                            to: r,
                            text: t,
                            origin: i
                        })
                }
                function Ei(e, t, n, r) {
                    n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
                }
                function Wi(e, t, n, r) {
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            l = !0;
                        if (o.ranges) {
                            o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);
                            for (var a = 0; a < o.ranges.length; a++) Ei(o.ranges[a].anchor, t, n, r),
                                Ei(o.ranges[a].head, t, n, r)
                        } else {
                            for (var s = 0; s < o.changes.length; ++s) {
                                var u = o.changes[s];
                                if (n < u.from.line) u.from = H(u.from.line + r, u.from.ch),
                                    u.to = H(u.to.line + r, u.to.ch);
                                else if (t <= u.to.line) {
                                    l = !1;
                                    break
                                }
                            }
                            l || (e.splice(0, i + 1), i = 0)
                        }
                    }
                }
                function Hi(e, t) {
                    var n = t.from.line,
                        r = t.to.line,
                        i = t.text.length - (r - n) - 1;
                    Wi(e.done, n, r, i),
                        Wi(e.undone, n, r, i)
                }
                function Di(e, t, n, r) {
                    var i = t,
                        o = t;
                    return "number" == typeof t ? o = S(e, I(e, t)) : i = O(t),
                        null == i ? null : (r(o, i) && e.cm && vr(e.cm, i, n), o)
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
                function Fi(e) {
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
                function zi(e, t, n) {
                    var r = this;
                    if (n) for (var i in n) n.hasOwnProperty(i) && (r[i] = n[i]);
                    this.doc = e,
                        this.node = t
                }
                function Ii(e, t, n) {
                    pe(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && er(e, null, n)
                }
                function Ri(e, t, n, r) {
                    var i = new zi(e, n, r),
                        o = e.cm;
                    return o && i.noHScroll && (o.display.alignWidgets = !0),
                        Di(e, t, "widget",
                            function (t) {
                                var n = t.widgets || (t.widgets = []);
                                if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !he(e, t)) {
                                    var r = pe(t) < e.scrollTop;
                                    N(t, t.height + It(i)),
                                        r && er(o, null, i.height),
                                        o.curOp.forceUpdate = !0
                                }
                                return !0
                            }),
                        i
                }
                function Bi(e, t) {
                    this.lines = [],
                        this.type = t,
                        this.doc = e,
                        this.id = ++sa
                }
                function _i(e, t, n, i, o) {
                    if (i && i.shared) return Vi(e, t, n, i, o);
                    if (e.cm && !e.cm.curOp) return hr(e.cm, _i)(e, t, n, i, o);
                    var l = new Bi(e, o),
                        a = D(t, n);
                    if (i && u(i, l, !1), a > 0 || 0 == a && l.clearWhenEmpty !== !1) return l;
                    if (l.replacedWith && (l.collapsed = !0, l.widgetNode = r("span", [l.replacedWith], "CodeMirror-widget"), i.handleMouseEvents || l.widgetNode.setAttribute("cm-ignore-events", "true"), i.insertLeft && (l.widgetNode.insertLeft = !0)), l.collapsed) {
                        if (ae(e, t.line, t, n, l) || t.line != n.line && ae(e, n.line, t, n, l)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                        V()
                    }
                    l.addToHistory && Jr(e, {
                        from: t,
                        to: n,
                        origin: "markText"
                    },
                        e.sel, NaN);
                    var s, c = t.line,
                        f = e.cm;
                    if (e.iter(c, n.line + 1,
                        function (e) {
                            f && l.collapsed && !f.options.lineWrapping && se(e) == f.display.maxLine && (s = !0),
                                l.collapsed && c != t.line && N(e, 0),
                                q(e, new G(l, c == t.line ? t.ch : null, c == n.line ? n.ch : null)),
                                ++c
                        }), l.collapsed && e.iter(t.line, n.line + 1,
                            function (t) {
                                he(e, t) && N(t, 0)
                            }), l.clearOnEnter && jl(l, "beforeCursorEnter",
                                function () {
                                    return l.clear()
                                }), l.readOnly && (j(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), l.collapsed && (l.id = ++sa, l.atomic = !0), f) {
                        if (s && (f.curOp.updateMaxLine = !0), l.collapsed) gr(f, t.line, n.line + 1);
                        else if (l.className || l.title || l.startStyle || l.endStyle || l.css) for (var h = t.line; h <= n.line; h++) vr(f, h, "text");
                        l.atomic && mi(f.doc),
                            kt(f, "markerAdded", f, l)
                    }
                    return l
                }
                function ji(e, t) {
                    var n = this;
                    this.markers = e,
                        this.primary = t;
                    for (var r = 0; r < e.length; ++r) e[r].parent = n
                }
                function Vi(e, t, n, r, i) {
                    r = u(r),
                        r.shared = !1;
                    var o = [_i(e, t, n, r, i)],
                        l = o[0],
                        a = r.widgetNode;
                    return Kr(e,
                        function (e) {
                            a && (r.widgetNode = a.cloneNode(!0)),
                                o.push(_i(e, R(e, t), R(e, n), r, i));
                            for (var s = 0; s < e.linked.length; ++s) if (e.linked[s].isParent) return;
                            l = g(o)
                        }),
                        new ji(o, l)
                }
                function Gi(e) {
                    return e.findMarks(H(e.first, 0), e.clipPos(H(e.lastLine())),
                        function (e) {
                            return e.parent
                        })
                }
                function Ui(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n],
                            i = r.find(),
                            o = e.clipPos(i.from),
                            l = e.clipPos(i.to);
                        if (D(o, l)) {
                            var a = _i(e, o, l, r.primary, r.primary.type);
                            r.markers.push(a),
                                a.parent = r
                        }
                    }
                }
                function Ki(e) {
                    for (var t = function (t) {
                        var n = e[t],
                            r = [n.primary.doc];
                        Kr(n.primary.doc,
                            function (e) {
                                return r.push(e)
                            });
                        for (var i = 0; i < n.markers.length; i++) {
                            var o = n.markers[i];
                            h(r, o.doc) == -1 && (o.parent = null, n.markers.splice(i--, 1))
                        }
                    },
                        n = 0; n < e.length; n++) t(n)
                }
                function qi(e) {
                    var t = this;
                    if (Yi(t), !Ee(t, e) && !Rt(t.display, e)) {
                        Pe(e),
                            al && (fa = +new Date);
                        var n = Ln(t, e, !0),
                            r = e.dataTransfer.files;
                        if (n && !t.isReadOnly()) if (r && r.length && window.FileReader && window.File) for (var i = r.length,
                            o = Array(i), l = 0, a = function (e, r) {
                                if (!t.options.allowDropFileTypes || h(t.options.allowDropFileTypes, e.type) != -1) {
                                    var a = new FileReader;
                                    a.onload = hr(t,
                                        function () {
                                            var e = a.result;
                                            if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++l == i) {
                                                n = R(t.doc, n);
                                                var s = {
                                                    from: n,
                                                    to: n,
                                                    text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                                                    origin: "paste"
                                                };
                                                ki(t.doc, s),
                                                    di(t.doc, Fr(n, zr(s)))
                                            }
                                        }),
                                        a.readAsText(e)
                                }
                            },
                            s = 0; s < i; ++s) a(r[s], s);
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
                                    if (t.state.draggingText && !t.state.draggingText.copy && (c = t.listSelections()), gi(t.doc, Fr(n, n)), c) for (var f = 0; f < c.length; ++f) Ai(t.doc, "", c[f].anchor, c[f].head, "drag");
                                    t.replaceSelection(u, "around", "paste"),
                                        t.display.input.focus()
                                }
                            } catch (e) { }
                        }
                    }
                }
                function $i(e, t) {
                    if (al && (!e.state.draggingText || +new Date - fa < 100)) return void Ie(t);
                    if (!Ee(e, t) && !Rt(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !dl)) {
                        var n = r("img", null, null, "position: fixed; left: 0; top: 0;");
                        n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                            hl && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop),
                            t.dataTransfer.setDragImage(n, 0, 0),
                            hl && n.parentNode.removeChild(n)
                    }
                }
                function Xi(e, t) {
                    var i = Ln(e, t);
                    if (i) {
                        var o = document.createDocumentFragment();
                        Tn(e, i, o),
                            e.display.dragCursor || (e.display.dragCursor = r("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
                            n(e.display.dragCursor, o)
                    }
                }
                function Yi(e) {
                    e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
                }
                function Zi(e) {
                    if (document.body.getElementsByClassName) for (var t = document.body.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
                        var r = t[n].CodeMirror;
                        r && e(r)
                    }
                }
                function Ji() {
                    ha || (Qi(), ha = !0)
                }
                function Qi() {
                    var e;
                    jl(window, "resize",
                        function () {
                            null == e && (e = setTimeout(function () {
                                e = null,
                                    Zi(eo)
                            },
                                100))
                        }),
                        jl(window, "blur",
                            function () {
                                return Zi(Hn)
                            })
                }
                function eo(e) {
                    var t = e.display;
                    t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize())
                }
                function to(e) {
                    var t = e.split(/-(?!$)/);
                    e = t[t.length - 1];
                    for (var n, r, i, o, l = 0; l < t.length - 1; l++) {
                        var a = t[l];
                        if (/^(cmd|meta|m)$/i.test(a)) o = !0;
                        else if (/^a(lt)?$/i.test(a)) n = !0;
                        else if (/^(c|ctrl|control)$/i.test(a)) r = !0;
                        else {
                            if (!/^s(hift)?$/i.test(a)) throw new Error("Unrecognized modifier name: " + a);
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
                        for (var i = v(n.split(" "), to), o = 0; o < i.length; o++) {
                            var l = void 0,
                                a = void 0;
                            o == i.length - 1 ? (a = i.join(" "), l = r) : (a = i.slice(0, o + 1).join(" "), l = "...");
                            var s = t[a];
                            if (s) {
                                if (s != l) throw new Error("Inconsistent bindings for " + a)
                            } else t[a] = l
                        }
                        delete e[n]
                    }
                    for (var u in t) e[u] = t[u];
                    return e
                }
                function ro(e, t, n, r) {
                    t = lo(t);
                    var i = t.call ? t.call(e, r) : t[e];
                    if (i === !1) return "nothing";
                    if ("..." === i) return "multi";
                    if (null != i && n(i)) return "handled";
                    if (t.fallthrough) {
                        if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return ro(e, t.fallthrough, n, r);
                        for (var o = 0; o < t.fallthrough.length; o++) {
                            var l = ro(e, t.fallthrough[o], n, r);
                            if (l) return l
                        }
                    }
                }
                function io(e) {
                    var t = "string" == typeof e ? e : da[e.keyCode];
                    return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
                }
                function oo(e, t) {
                    if (hl && 34 == e.keyCode && e.char) return !1;
                    var n = da[e.keyCode],
                        r = n;
                    return null != r && !e.altGraphKey && (e.altKey && "Alt" != n && (r = "Alt-" + r), (Ll ? e.metaKey : e.ctrlKey) && "Ctrl" != n && (r = "Ctrl-" + r), (Ll ? e.ctrlKey : e.metaKey) && "Cmd" != n && (r = "Cmd-" + r), !t && e.shiftKey && "Shift" != n && (r = "Shift-" + r), r)
                }
                function lo(e) {
                    return "string" == typeof e ? ma[e] : e
                }
                function ao(e, t) {
                    for (var n = e.doc.sel.ranges,
                        r = [], i = 0; i < n.length; i++) {
                        for (var o = t(n[i]); r.length && D(o.from, g(r).to) <= 0;) {
                            var l = r.pop();
                            if (D(l.from, o.from) < 0) {
                                o.from = l.from;
                                break
                            }
                        }
                        r.push(o)
                    }
                    fr(e,
                        function () {
                            for (var t = r.length - 1; t >= 0; t--) Ai(e.doc, "", r[t].from, r[t].to, "+delete");
                            tr(e)
                        })
                }
                function so(e, t) {
                    var n = S(e.doc, t),
                        r = se(n);
                    r != n && (t = O(r));
                    var i = Te(r),
                        o = i ? i[0].level % 2 ? xe(r) : we(r) : 0;
                    return H(t, o)
                }
                function uo(e, t) {
                    for (var n, r = S(e.doc, t); n = le(r);) r = n.find(1, !0).line,
                        t = null;
                    var i = Te(r),
                        o = i ? i[0].level % 2 ? we(r) : xe(r) : r.text.length;
                    return H(null == t ? O(r) : t, o)
                }
                function co(e, t) {
                    var n = so(e, t.line),
                        r = S(e.doc, n.line),
                        i = Te(r);
                    if (!i || 0 == i[0].level) {
                        var o = Math.max(0, r.text.search(/\S/)),
                            l = t.line == n.line && t.ch <= o && t.ch;
                        return H(n.line, l ? 0 : o)
                    }
                    return n
                }
                function fo(e, t, n) {
                    if ("string" == typeof t && (t = wa[t], !t)) return !1;
                    e.display.input.ensurePolled();
                    var r = e.display.shift,
                        i = !1;
                    try {
                        e.isReadOnly() && (e.state.suppressEdits = !0),
                            n && (e.display.shift = !1),
                            i = t(e) != Al
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
                        xa.set(50,
                            function () {
                                e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
                            }),
                            t = i + " " + t
                    }
                    var o = ho(e, t, r);
                    return "multi" == o && (e.state.keySeq = t),
                        "handled" == o && kt(e, "keyHandled", e, t, n),
                        "handled" != o && "multi" != o || (Pe(n), On(e)),
                        i && !o && /\'$/.test(t) ? (Pe(n), !0) : !!o
                }
                function go(e, t) {
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
                function vo(e, t, n) {
                    return po(e, "'" + n + "'", t,
                        function (t) {
                            return fo(e, t, !0)
                        })
                }
                function mo(e) {
                    var t = this;
                    if (t.curOp.focus = o(), !Ee(t, e)) {
                        al && sl < 11 && 27 == e.keyCode && (e.returnValue = !1);
                        var n = e.keyCode;
                        t.display.shift = 16 == n || e.shiftKey;
                        var r = go(t, e);
                        hl && (Ca = r ? n : null, !r && 88 == n && !Kl && (yl ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")),
                            18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || yo(t)
                    }
                }
                function yo(e) {
                    function t(e) {
                        18 != e.keyCode && e.altKey || (Sl(n, "CodeMirror-crosshair"), Oe(document, "keyup", t), Oe(document, "mouseover", t))
                    }
                    var n = e.display.lineDiv;
                    l(n, "CodeMirror-crosshair"),
                        jl(document, "keyup", t),
                        jl(document, "mouseover", t)
                }
                function bo(e) {
                    16 == e.keyCode && (this.doc.sel.shift = !1),
                        Ee(this, e)
                }
                function wo(e) {
                    var t = this;
                    if (!(Rt(t.display, e) || Ee(t, e) || e.ctrlKey && !e.altKey || yl && e.metaKey)) {
                        var n = e.keyCode,
                            r = e.charCode;
                        if (hl && n == Ca) return Ca = null,
                            void Pe(e);
                        if (!hl || e.which && !(e.which < 10) || !go(t, e)) {
                            var i = String.fromCharCode(null == r ? n : r);
                            "\b" != i && (vo(t, e, i) || t.display.input.onKeyPress(e))
                        }
                    }
                }
                function xo(e) {
                    var t = this,
                        n = t.display;
                    if (!(Ee(t, e) || n.activeTouch && n.input.supportsTouch())) {
                        if (n.input.ensurePolled(), n.shift = e.shiftKey, Rt(n, e)) return void (ul || (n.scroller.draggable = !1, setTimeout(function () {
                            return n.scroller.draggable = !0
                        },
                            100)));
                        if (!Mo(t, e)) {
                            var r = Ln(t, e);
                            switch (window.focus(), Be(e)) {
                                case 1:
                                    t.state.selectingText ? t.state.selectingText(e) : r ? Co(t, e, r) : Re(e) == n.scroller && Pe(e);
                                    break;
                                case 2:
                                    ul && (t.state.lastMiddleDown = +new Date),
                                        r && si(t.doc, r),
                                        setTimeout(function () {
                                            return n.input.focus()
                                        },
                                            20),
                                        Pe(e);
                                    break;
                                case 3:
                                    kl ? To(t, e) : En(t)
                            }
                        }
                    }
                }
                function Co(e, t, n) {
                    al ? setTimeout(s(An, e), 0) : e.curOp.focus = o();
                    var r, i = +new Date;
                    ba && ba.time > i - 400 && 0 == D(ba.pos, n) ? r = "triple" : ya && ya.time > i - 400 && 0 == D(ya.pos, n) ? (r = "double", ba = {
                        time: i,
                        pos: n
                    }) : (r = "single", ya = {
                        time: i,
                        pos: n
                    });
                    var l, a = e.doc.sel,
                        u = yl ? t.metaKey : t.ctrlKey;
                    e.options.dragDrop && Vl && !e.isReadOnly() && "single" == r && (l = a.contains(n)) > -1 && (D((l = a.ranges[l]).from(), n) < 0 || n.xRel > 0) && (D(l.to(), n) > 0 || n.xRel < 0) ? Lo(e, t, n, u) : ko(e, t, n, r, u)
                }
                function Lo(e, t, n, r) {
                    var i = e.display,
                        o = +new Date,
                        l = hr(e,
                            function (a) {
                                ul && (i.scroller.draggable = !1),
                                    e.state.draggingText = !1,
                                    Oe(document, "mouseup", l),
                                    Oe(i.scroller, "drop", l),
                                    Math.abs(t.clientX - a.clientX) + Math.abs(t.clientY - a.clientY) < 10 && (Pe(a), !r && +new Date - 200 < o && si(e.doc, n), ul || al && 9 == sl ? setTimeout(function () {
                                        document.body.focus(),
                                            i.input.focus()
                                    },
                                        20) : i.input.focus())
                            });
                    ul && (i.scroller.draggable = !0),
                        e.state.draggingText = l,
                        l.copy = yl ? t.altKey : t.ctrlKey,
                        i.scroller.dragDrop && i.scroller.dragDrop(),
                        jl(document, "mouseup", l),
                        jl(i.scroller, "drop", l)
                }
                function ko(e, t, n, r, i) {
                    function l(t) {
                        if (0 != D(b, t)) if (b = t, "rect" == r) {
                            for (var i = [], o = e.options.tabSize, l = c(S(f, n.line).text, n.ch, o), a = c(S(f, t.line).text, t.ch, o), s = Math.min(l, a), u = Math.max(l, a), v = Math.min(n.line, t.line), m = Math.min(e.lastLine(), Math.max(n.line, t.line)); v <= m; v++) {
                                var y = S(f, v).text,
                                    w = d(y, s, o);
                                s == u ? i.push(new Dr(H(v, w), H(v, w))) : y.length > w && i.push(new Dr(H(v, w), H(v, d(y, u, o))))
                            }
                            i.length || i.push(new Dr(n, n)),
                                pi(f, Pr(g.ranges.slice(0, p).concat(i), p), {
                                    origin: "*mouse",
                                    scroll: !1
                                }),
                                e.scrollIntoView(t)
                        } else {
                            var x = h,
                                C = x.anchor,
                                L = t;
                            if ("single" != r) {
                                var k;
                                k = "double" == r ? e.findWordAt(t) : new Dr(H(t.line, 0), R(f, H(t.line + 1, 0))),
                                    D(k.anchor, C) > 0 ? (L = k.head, C = z(x.from(), k.anchor)) : (L = k.anchor, C = F(x.to(), k.head))
                            }
                            var M = g.ranges.slice(0);
                            M[p] = new Dr(R(f, C), L),
                                pi(f, Pr(M, p), Wl)
                        }
                    }
                    function a(t) {
                        var n = ++x,
                            i = Ln(e, t, !0, "rect" == r);
                        if (i) if (0 != D(i, b)) {
                            e.curOp.focus = o(),
                                l(i);
                            var s = In(u, f); (i.line >= s.to || i.line < s.from) && setTimeout(hr(e,
                                function () {
                                    x == n && a(t)
                                }), 150)
                        } else {
                            var c = t.clientY < w.top ? -20 : t.clientY > w.bottom ? 20 : 0;
                            c && setTimeout(hr(e,
                                function () {
                                    x == n && (u.scroller.scrollTop += c, a(t))
                                }), 50)
                        }
                    }
                    function s(t) {
                        e.state.selectingText = !1,
                            x = 1 / 0,
                            Pe(t),
                            u.input.focus(),
                            Oe(document, "mousemove", C),
                            Oe(document, "mouseup", L),
                            f.history.lastSelOrigin = null
                    }
                    var u = e.display,
                        f = e.doc;
                    Pe(t);
                    var h, p, g = f.sel,
                        v = g.ranges;
                    if (i && !t.shiftKey ? (p = f.sel.contains(n), h = p > -1 ? v[p] : new Dr(n, n)) : (h = f.sel.primary(), p = f.sel.primIndex), bl ? t.shiftKey && t.metaKey : t.altKey) r = "rect",
                        i || (h = new Dr(n, n)),
                        n = Ln(e, t, !0, !0),
                        p = -1;
                    else if ("double" == r) {
                        var m = e.findWordAt(n);
                        h = e.display.shift || f.extend ? ai(f, h, m.anchor, m.head) : m
                    } else if ("triple" == r) {
                        var y = new Dr(H(n.line, 0), R(f, H(n.line + 1, 0)));
                        h = e.display.shift || f.extend ? ai(f, h, y.anchor, y.head) : y
                    } else h = ai(f, h, n);
                    i ? p == -1 ? (p = v.length, pi(f, Pr(v.concat([h]), p), {
                        scroll: !1,
                        origin: "*mouse"
                    })) : v.length > 1 && v[p].empty() && "single" == r && !t.shiftKey ? (pi(f, Pr(v.slice(0, p).concat(v.slice(p + 1)), 0), {
                        scroll: !1,
                        origin: "*mouse"
                    }), g = f.sel) : ci(f, p, h, Wl) : (p = 0, pi(f, new Hr([h], 0), Wl), g = f.sel);
                    var b = n,
                        w = u.wrapper.getBoundingClientRect(),
                        x = 0,
                        C = hr(e,
                            function (e) {
                                Be(e) ? a(e) : s(e)
                            }),
                        L = hr(e, s);
                    e.state.selectingText = L,
                        jl(document, "mousemove", C),
                        jl(document, "mouseup", L)
                }
                function So(e, t, n, r) {
                    var i, o;
                    try {
                        i = t.clientX,
                            o = t.clientY
                    } catch (e) {
                        return !1
                    }
                    if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                    r && Pe(t);
                    var l = e.display,
                        a = l.lineDiv.getBoundingClientRect();
                    if (o > a.bottom || !He(e, n)) return ze(t);
                    o -= a.top - l.viewOffset;
                    for (var s = 0; s < e.options.gutters.length; ++s) {
                        var u = l.gutters.childNodes[s];
                        if (u && u.getBoundingClientRect().right >= i) {
                            var c = A(e.doc, o),
                                f = e.options.gutters[s];
                            return Ae(e, n, e, c, f, t),
                                ze(t)
                        }
                    }
                }
                function Mo(e, t) {
                    return So(e, t, "gutterClick", !0)
                }
                function To(e, t) {
                    Rt(e.display, t) || No(e, t) || Ee(e, t, "contextmenu") || e.display.input.onContextMenu(t)
                }
                function No(e, t) {
                    return !!He(e, "gutterContextMenu") && So(e, t, "gutterContextMenu", !1)
                }
                function Oo(e) {
                    e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
                        ln(e)
                }
                function Ao(e) {
                    function t(t, r, i, o) {
                        e.defaults[t] = r,
                            i && (n[t] = o ?
                                function (e, t, n) {
                                    n != La && i(e, t, n)
                                } : i)
                    }
                    var n = e.optionHandlers;
                    e.defineOption = t,
                        e.Init = La,
                        t("value", "",
                            function (e, t) {
                                return e.setValue(t)
                            },
                            !0),
                        t("mode", null,
                            function (e, t) {
                                e.doc.modeOption = t,
                                    jr(e)
                            },
                            !0),
                        t("indentUnit", 2, jr, !0),
                        t("indentWithTabs", !1),
                        t("smartIndent", !0),
                        t("tabSize", 4,
                            function (e) {
                                Vr(e),
                                    ln(e),
                                    gr(e)
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
                                                n.push(H(r, o))
                                        }
                                        r++
                                    });
                                    for (var i = n.length - 1; i >= 0; i--) Ai(e.doc, t, n[i], H(n[i].line, n[i].ch + t.length))
                                }
                            }),
                        t("specialChars", /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,
                            function (e, t, n) {
                                e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"),
                                    n != La && e.refresh()
                            }),
                        t("specialCharPlaceholder", dt,
                            function (e) {
                                return e.refresh()
                            },
                            !0),
                        t("electricChars", !0),
                        t("inputStyle", ml ? "contenteditable" : "textarea",
                            function () {
                                throw new Error("inputStyle can not (yet) be changed in a running editor")
                            },
                            !0),
                        t("spellcheck", !1,
                            function (e, t) {
                                return e.getInputField().spellcheck = t
                            },
                            !0),
                        t("rtlMoveVisually", !wl),
                        t("wholeLineUpdateBefore", !0),
                        t("theme", "default",
                            function (e) {
                                Oo(e),
                                    Eo(e)
                            },
                            !0),
                        t("keyMap", "default",
                            function (e, t, n) {
                                var r = lo(t),
                                    i = n != La && lo(n);
                                i && i.detach && i.detach(e, r),
                                    r.attach && r.attach(e, i || null)
                            }),
                        t("extraKeys", null),
                        t("lineWrapping", !1, Ho, !0),
                        t("gutters", [],
                            function (e) {
                                Wr(e.options),
                                    Eo(e)
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
                                return qn(e)
                            },
                            !0),
                        t("scrollbarStyle", "native",
                            function (e) {
                                Xn(e),
                                    qn(e),
                                    e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                                    e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
                            },
                            !0),
                        t("lineNumbers", !1,
                            function (e) {
                                Wr(e.options),
                                    Eo(e)
                            },
                            !0),
                        t("firstLineNumber", 1, Eo, !0),
                        t("lineNumberFormatter",
                            function (e) {
                                return e
                            },
                            Eo, !0),
                        t("showCursorWhenSelecting", !1, Sn, !0),
                        t("resetSelectionOnContextMenu", !0),
                        t("lineWiseCopyCut", !0),
                        t("readOnly", !1,
                            function (e, t) {
                                "nocursor" == t ? (Hn(e), e.display.input.blur(), e.display.disabled = !0) : e.display.disabled = !1,
                                    e.display.input.readOnlyChanged(t)
                            }),
                        t("disableInput", !1,
                            function (e, t) {
                                t || e.display.input.reset()
                            },
                            !0),
                        t("dragDrop", !0, Wo),
                        t("allowDropFileTypes", null),
                        t("cursorBlinkRate", 530),
                        t("cursorScrollMargin", 0),
                        t("cursorHeight", 1, Sn, !0),
                        t("singleCursorHeightPerLine", !0, Sn, !0),
                        t("workTime", 100),
                        t("workDelay", 100),
                        t("flattenSpans", !0, Vr, !0),
                        t("addModeClass", !1, Vr, !0),
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
                        t("maxHighlightLength", 1e4, Vr, !0),
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
                function Eo(e) {
                    Er(e),
                        gr(e),
                        setTimeout(function () {
                            return Dn(e)
                        },
                            20)
                }
                function Wo(e, t, n) {
                    var r = n && n != La;
                    if (!t != !r) {
                        var i = e.display.dragFunctions,
                            o = t ? jl : Oe;
                        o(e.display.scroller, "dragstart", i.start),
                            o(e.display.scroller, "dragenter", i.enter),
                            o(e.display.scroller, "dragover", i.over),
                            o(e.display.scroller, "dragleave", i.leave),
                            o(e.display.scroller, "drop", i.drop)
                    }
                }
                function Ho(e) {
                    e.options.lineWrapping ? (l(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (Sl(e.display.wrapper, "CodeMirror-wrap"), ve(e)),
                        Cn(e),
                        gr(e),
                        ln(e),
                        setTimeout(function () {
                            return qn(e)
                        },
                            100)
                }
                function Do(e, t) {
                    var n = this;
                    if (!(this instanceof Do)) return new Do(e, t);
                    this.options = t = t ? u(t) : {},
                        u(ka, t, !1),
                        Wr(t);
                    var r = t.value;
                    "string" == typeof r && (r = new ca(r, t.mode, null, t.lineSeparator)),
                        this.doc = r;
                    var i = new Do.inputStyles[t.inputStyle](this),
                        o = this.display = new k(e, r, i);
                    o.wrapper.CodeMirror = this,
                        Er(this),
                        Oo(this),
                        t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
                        t.autofocus && !ml && o.input.focus(),
                        Xn(this),
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
                        al && sl < 11 && setTimeout(function () {
                            return n.display.input.reset(!0)
                        },
                            20),
                        Po(this),
                        Ji(),
                        rr(this),
                        this.curOp.forceUpdate = !0,
                        qr(this, r),
                        t.autofocus && !ml || this.hasFocus() ? setTimeout(s(Wn, this), 20) : Hn(this);
                    for (var l in Sa) Sa.hasOwnProperty(l) && Sa[l](n, t[l], La);
                    Pn(this),
                        t.finishInit && t.finishInit(this);
                    for (var a = 0; a < Ma.length; ++a) Ma[a](n);
                    ir(this),
                        ul && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
                }
                function Po(e) {
                    function t() {
                        i.activeTouch && (o = setTimeout(function () {
                            return i.activeTouch = null
                        },
                            1e3), l = i.activeTouch, l.end = +new Date)
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
                    jl(i.scroller, "mousedown", hr(e, xo)),
                        al && sl < 11 ? jl(i.scroller, "dblclick", hr(e,
                            function (t) {
                                if (!Ee(e, t)) {
                                    var n = Ln(e, t);
                                    if (n && !Mo(e, t) && !Rt(e.display, t)) {
                                        Pe(t);
                                        var r = e.findWordAt(n);
                                        si(e.doc, r.anchor, r.head)
                                    }
                                }
                            })) : jl(i.scroller, "dblclick",
                                function (t) {
                                    return Ee(e, t) || Pe(t)
                                }),
                        kl || jl(i.scroller, "contextmenu",
                            function (t) {
                                return To(e, t)
                            });
                    var o, l = {
                        end: 0
                    };
                    jl(i.scroller, "touchstart",
                        function (t) {
                            if (!Ee(e, t) && !n(t)) {
                                i.input.ensurePolled(),
                                    clearTimeout(o);
                                var r = +new Date;
                                i.activeTouch = {
                                    start: r,
                                    moved: !1,
                                    prev: r - l.end <= 300 ? l : null
                                },
                                    1 == t.touches.length && (i.activeTouch.left = t.touches[0].pageX, i.activeTouch.top = t.touches[0].pageY)
                            }
                        }),
                        jl(i.scroller, "touchmove",
                            function () {
                                i.activeTouch && (i.activeTouch.moved = !0)
                            }),
                        jl(i.scroller, "touchend",
                            function (n) {
                                var o = i.activeTouch;
                                if (o && !Rt(i, n) && null != o.left && !o.moved && new Date - o.start < 300) {
                                    var l, a = e.coordsChar(i.activeTouch, "page");
                                    l = !o.prev || r(o, o.prev) ? new Dr(a, a) : !o.prev.prev || r(o, o.prev.prev) ? e.findWordAt(a) : new Dr(H(a.line, 0), R(e.doc, H(a.line + 1, 0))),
                                        e.setSelection(l.anchor, l.head),
                                        e.focus(),
                                        Pe(n)
                                }
                                t()
                            }),
                        jl(i.scroller, "touchcancel", t),
                        jl(i.scroller, "scroll",
                            function () {
                                i.scroller.clientHeight && (Rn(e, i.scroller.scrollTop), Bn(e, i.scroller.scrollLeft, !0), Ae(e, "scroll", e))
                            }),
                        jl(i.scroller, "mousewheel",
                            function (t) {
                                return Vn(e, t)
                            }),
                        jl(i.scroller, "DOMMouseScroll",
                            function (t) {
                                return Vn(e, t)
                            }),
                        jl(i.wrapper, "scroll",
                            function () {
                                return i.wrapper.scrollTop = i.wrapper.scrollLeft = 0
                            }),
                        i.dragFunctions = {
                            enter: function (t) {
                                Ee(e, t) || Ie(t)
                            },
                            over: function (t) {
                                Ee(e, t) || (Xi(e, t), Ie(t))
                            },
                            start: function (t) {
                                return $i(e, t)
                            },
                            drop: hr(e, qi),
                            leave: function (t) {
                                Ee(e, t) || Yi(e)
                            }
                        };
                    var a = i.input.getField();
                    jl(a, "keyup",
                        function (t) {
                            return bo.call(e, t)
                        }),
                        jl(a, "keydown", hr(e, mo)),
                        jl(a, "keypress", hr(e, wo)),
                        jl(a, "focus",
                            function (t) {
                                return Wn(e, t)
                            }),
                        jl(a, "blur",
                            function (t) {
                                return Hn(e, t)
                            })
                }
                function Fo(e, t, n, r) {
                    var i, o = e.doc;
                    null == n && (n = "add"),
                        "smart" == n && (o.mode.indent ? i = et(e, t) : n = "prev");
                    var l = e.options.tabSize,
                        a = S(o, t),
                        s = c(a.text, null, l);
                    a.stateAfter && (a.stateAfter = null);
                    var u, f = a.text.match(/^\s*/)[0];
                    if (r || /\S/.test(a.text)) {
                        if ("smart" == n && (u = o.mode.indent(i, a.text.slice(f.length), a.text), u == Al || u > 150)) {
                            if (!r) return;
                            n = "prev"
                        }
                    } else u = 0,
                        n = "not";
                    "prev" == n ? u = t > o.first ? c(S(o, t - 1).text, null, l) : 0 : "add" == n ? u = s + e.options.indentUnit : "subtract" == n ? u = s - e.options.indentUnit : "number" == typeof n && (u = s + n),
                        u = Math.max(0, u);
                    var h = "",
                        d = 0;
                    if (e.options.indentWithTabs) for (var g = Math.floor(u / l); g; --g) d += l,
                        h += "\t";
                    if (d < u && (h += p(u - d)), h != f) return Ai(o, h, H(t, 0), H(t, f.length), "+input"),
                        a.stateAfter = null,
                        !0;
                    for (var v = 0; v < o.sel.ranges.length; v++) {
                        var m = o.sel.ranges[v];
                        if (m.head.line == t && m.head.ch < f.length) {
                            var y = H(t, f.length);
                            ci(o, v, new Dr(y, y));
                            break
                        }
                    }
                }
                function zo(e) {
                    Ta = e
                }
                function Io(e, t, n, r, i) {
                    var o = e.doc;
                    e.display.shift = !1,
                        r || (r = o.sel);
                    var l = e.state.pasteIncoming || "paste" == i,
                        a = Gl(t),
                        s = null;
                    if (l && r.ranges.length > 1) if (Ta && Ta.text.join("\n") == t) {
                        if (r.ranges.length % Ta.text.length == 0) {
                            s = [];
                            for (var u = 0; u < Ta.text.length; u++) s.push(o.splitLines(Ta.text[u]))
                        }
                    } else a.length == r.ranges.length && (s = v(a,
                        function (e) {
                            return [e]
                        }));
                    for (var c, f = r.ranges.length - 1; f >= 0; f--) {
                        var h = r.ranges[f],
                            d = h.from(),
                            p = h.to();
                        h.empty() && (n && n > 0 ? d = H(d.line, d.ch - n) : e.state.overwrite && !l ? p = H(p.line, Math.min(S(o, p.line).text.length, p.ch + g(a).length)) : Ta && Ta.lineWise && Ta.text.join("\n") == t && (d = p = H(d.line, 0))),
                            c = e.curOp.updateInput;
                        var m = {
                            from: d,
                            to: p,
                            text: s ? s[f % s.length] : a,
                            origin: i || (l ? "paste" : e.state.cutIncoming ? "cut" : "+input")
                        };
                        ki(e.doc, m),
                            kt(e, "inputRead", e, m)
                    }
                    t && !l && Bo(e, t),
                        tr(e),
                        e.curOp.updateInput = c,
                        e.curOp.typing = !0,
                        e.state.pasteIncoming = e.state.cutIncoming = !1
                }
                function Ro(e, t) {
                    var n = e.clipboardData && e.clipboardData.getData("Text");
                    if (n) return e.preventDefault(),
                        t.isReadOnly() || t.options.disableInput || fr(t,
                            function () {
                                return Io(t, n, 0, null, "paste")
                            }),
                        !0
                }
                function Bo(e, t) {
                    if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel,
                        r = n.ranges.length - 1; r >= 0; r--) {
                        var i = n.ranges[r];
                        if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
                            var o = e.getModeAt(i.head),
                                l = !1;
                            if (o.electricChars) {
                                for (var a = 0; a < o.electricChars.length; a++) if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                                    l = Fo(e, i.head.line, "smart");
                                    break
                                }
                            } else o.electricInput && o.electricInput.test(S(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = Fo(e, i.head.line, "smart"));
                            l && kt(e, "electricInput", e, i.head.line)
                        }
                    }
                }
                function _o(e) {
                    for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
                        var i = e.doc.sel.ranges[r].head.line,
                            o = {
                                anchor: H(i, 0),
                                head: H(i + 1, 0)
                            };
                        n.push(o),
                            t.push(e.getRange(o.anchor, o.head))
                    }
                    return {
                        text: t,
                        ranges: n
                    }
                }
                function jo(e, t) {
                    e.setAttribute("autocorrect", "off"),
                        e.setAttribute("autocapitalize", "off"),
                        e.setAttribute("spellcheck", !!t)
                }
                function Vo() {
                    var e = r("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                        t = r("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                    return ul ? e.style.width = "1000px" : e.setAttribute("wrap", "off"),
                        vl && (e.style.border = "1px solid black"),
                        jo(e),
                        t
                }
                function Go(e) {
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
                            r[e] == n && "mode" != e || (r[e] = n, t.hasOwnProperty(e) && hr(this, t[e])(this, n, i))
                        },
                        getOption: function (e) {
                            return this.options[e]
                        },
                        getDoc: function () {
                            return this.doc
                        },
                        addKeyMap: function (e, t) {
                            this.state.keyMaps[t ? "push" : "unshift"](lo(e))
                        },
                        removeKeyMap: function (e) {
                            for (var t = this.state.keyMaps,
                                n = 0; n < t.length; ++n) if (t[n] == e || t[n].name == e) return t.splice(n, 1),
                                    !0
                        },
                        addOverlay: dr(function (t, n) {
                            var r = t.token ? t : e.getMode(this.options, t);
                            if (r.startState) throw new Error("Overlays may not be stateful.");
                            m(this.state.overlays, {
                                mode: r,
                                modeSpec: t,
                                opaque: n && n.opaque,
                                priority: n && n.priority || 0
                            },
                                function (e) {
                                    return e.priority
                                }),
                                this.state.modeGen++,
                                gr(this)
                        }),
                        removeOverlay: dr(function (e) {
                            for (var t = this,
                                n = this.state.overlays,
                                r = 0; r < n.length; ++r) {
                                var i = n[r].modeSpec;
                                if (i == e || "string" == typeof e && i.name == e) return n.splice(r, 1),
                                    t.state.modeGen++,
                                    void gr(t)
                            }
                        }),
                        indentLine: dr(function (e, t, n) {
                            "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"),
                                E(this.doc, e) && Fo(this, e, t, n)
                        }),
                        indentSelection: dr(function (e) {
                            for (var t = this,
                                n = this.doc.sel.ranges,
                                r = -1,
                                i = 0; i < n.length; i++) {
                                var o = n[i];
                                if (o.empty()) o.head.line > r && (Fo(t, o.head.line, e, !0), r = o.head.line, i == t.doc.sel.primIndex && tr(t));
                                else {
                                    var l = o.from(),
                                        a = o.to(),
                                        s = Math.max(r, l.line);
                                    r = Math.min(t.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                                    for (var u = s; u < r; ++u) Fo(t, u, e);
                                    var c = t.doc.sel.ranges;
                                    0 == l.ch && n.length == c.length && c[i].from().ch > 0 && ci(t.doc, i, new Dr(l, c[i].to()), El)
                                }
                            }
                        }),
                        getTokenAt: function (e, t) {
                            return it(this, e, t)
                        },
                        getLineTokens: function (e, t) {
                            return it(this, H(e), t, !0)
                        },
                        getTokenTypeAt: function (e) {
                            e = R(this.doc, e);
                            var t, n = Qe(this, S(this.doc, e.line)),
                                r = 0,
                                i = (n.length - 1) / 2,
                                o = e.ch;
                            if (0 == o) t = n[2];
                            else for (; ;) {
                                var l = r + i >> 1;
                                if ((l ? n[2 * l - 1] : 0) >= o) i = l;
                                else {
                                    if (!(n[2 * l + 1] < o)) {
                                        t = n[2 * l + 2];
                                        break
                                    }
                                    r = l + 1
                                }
                            }
                            var a = t ? t.indexOf("overlay ") : -1;
                            return a < 0 ? t : 0 == a ? null : t.slice(0, a - 1)
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
                                l = this.getModeAt(e);
                            if ("string" == typeof l[t]) o[l[t]] && i.push(o[l[t]]);
                            else if (l[t]) for (var a = 0; a < l[t].length; a++) {
                                var s = o[l[t][a]];
                                s && i.push(s)
                            } else l.helperType && o[l.helperType] ? i.push(o[l.helperType]) : o[l.name] && i.push(o[l.name]);
                            for (var u = 0; u < o._global.length; u++) {
                                var c = o._global[u];
                                c.pred(l, r) && h(i, c.val) == -1 && i.push(c.val)
                            }
                            return i
                        },
                        getStateAfter: function (e, t) {
                            var n = this.doc;
                            return e = I(n, null == e ? n.first + n.size - 1 : e),
                                et(this, e + 1, t)
                        },
                        cursorCoords: function (e, t) {
                            var n, r = this.doc.sel.primary();
                            return n = null == e ? r.head : "object" == typeof e ? R(this.doc, e) : e ? r.from() : r.to(),
                                hn(this, n, t || "page")
                        },
                        charCoords: function (e, t) {
                            return fn(this, R(this.doc, e), t || "page")
                        },
                        coordsChar: function (e, t) {
                            return e = cn(this, e, t || "page"),
                                gn(this, e.left, e.top)
                        },
                        lineAtHeight: function (e, t) {
                            return e = cn(this, {
                                top: e,
                                left: 0
                            },
                                t || "page").top,
                                A(this.doc, e + this.display.viewOffset)
                        },
                        heightAtLine: function (e, t, n) {
                            var r, i = !1;
                            if ("number" == typeof e) {
                                var o = this.doc.first + this.doc.size - 1;
                                e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0),
                                    r = S(this.doc, e)
                            } else r = e;
                            return un(this, r, {
                                top: 0,
                                left: 0
                            },
                                t || "page", n).top + (i ? this.doc.height - pe(r) : 0)
                        },
                        defaultTextHeight: function () {
                            return mn(this.display)
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
                            e = hn(this, R(this.doc, e));
                            var l = e.bottom,
                                a = e.left;
                            if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == r) l = e.top;
                            else if ("above" == r || "near" == r) {
                                var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                                    u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth); ("above" == r || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight ? l = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= s && (l = e.bottom),
                                        a + t.offsetWidth > u && (a = u - t.offsetWidth)
                            }
                            t.style.top = l + "px",
                                t.style.left = t.style.right = "",
                                "right" == i ? (a = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? a = 0 : "middle" == i && (a = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = a + "px"),
                                n && Jn(this, a, l, a + t.offsetWidth, l + t.offsetHeight)
                        },
                        triggerOnKeyDown: dr(mo),
                        triggerOnKeyPress: dr(wo),
                        triggerOnKeyUp: bo,
                        execCommand: function (e) {
                            if (wa.hasOwnProperty(e)) return wa[e].call(null, this)
                        },
                        triggerElectric: dr(function (e) {
                            Bo(this, e)
                        }),
                        findPosH: function (e, t, n, r) {
                            var i = this,
                                o = 1;
                            t < 0 && (o = -1, t = -t);
                            for (var l = R(this.doc, e), a = 0; a < t && (l = Uo(i.doc, l, o, n, r), !l.hitSide); ++a);
                            return l
                        },
                        moveH: dr(function (e, t) {
                            var n = this;
                            this.extendSelectionsBy(function (r) {
                                return n.display.shift || n.doc.extend || r.empty() ? Uo(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to()
                            },
                                Hl)
                        }),
                        deleteH: dr(function (e, t) {
                            var n = this.doc.sel,
                                r = this.doc;
                            n.somethingSelected() ? r.replaceSelection("", null, "+delete") : ao(this,
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
                                l = r;
                            t < 0 && (o = -1, t = -t);
                            for (var a = R(this.doc, e), s = 0; s < t; ++s) {
                                var u = hn(i, a, "div");
                                if (null == l ? l = u.left : u.left = l, a = Ko(i, u, o, n), a.hitSide) break
                            }
                            return a
                        },
                        moveV: dr(function (e, t) {
                            var n = this,
                                r = this.doc,
                                i = [],
                                o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                            if (r.extendSelectionsBy(function (l) {
                                if (o) return e < 0 ? l.from() : l.to();
                                var a = hn(n, l.head, "div");
                                null != l.goalColumn && (a.left = l.goalColumn),
                                    i.push(a.left);
                                var s = Ko(n, a, e, t);
                                return "page" == t && l == r.sel.primary() && er(n, null, fn(n, s, "div").top - a.top),
                                    s
                            },
                                Hl), i.length) for (var l = 0; l < r.sel.ranges.length; l++) r.sel.ranges[l].goalColumn = i[l]
                        }),
                        findWordAt: function (e) {
                            var t = this.doc,
                                n = S(t, e.line).text,
                                r = e.ch,
                                i = e.ch;
                            if (n) {
                                var o = this.getHelper(e, "wordChars"); (e.xRel < 0 || i == n.length) && r ? --r : ++i;
                                for (var l = n.charAt(r), a = x(l, o) ?
                                    function (e) {
                                        return x(e, o)
                                    } : /\s/.test(l) ?
                                        function (e) {
                                            return /\s/.test(e)
                                        } : function (e) {
                                            return ! /\s/.test(e) && !x(e)
                                        }; r > 0 && a(n.charAt(r - 1));)--r;
                                for (; i < n.length && a(n.charAt(i));)++i
                            }
                            return new Dr(H(e.line, r), H(e.line, i))
                        },
                        toggleOverwrite: function (e) {
                            null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? l(this.display.cursorDiv, "CodeMirror-overwrite") : Sl(this.display.cursorDiv, "CodeMirror-overwrite"), Ae(this, "overwriteToggle", this, this.state.overwrite))
                        },
                        hasFocus: function () {
                            return this.display.input.getField() == o()
                        },
                        isReadOnly: function () {
                            return !(!this.options.readOnly && !this.doc.cantEdit)
                        },
                        scrollTo: dr(function (e, t) {
                            null == e && null == t || nr(this),
                                null != e && (this.curOp.scrollLeft = e),
                                null != t && (this.curOp.scrollTop = t)
                        }),
                        getScrollInfo: function () {
                            var e = this.display.scroller;
                            return {
                                left: e.scrollLeft,
                                top: e.scrollTop,
                                height: e.scrollHeight - Vt(this) - this.display.barHeight,
                                width: e.scrollWidth - Vt(this) - this.display.barWidth,
                                clientHeight: Ut(this),
                                clientWidth: Gt(this)
                            }
                        },
                        scrollIntoView: dr(function (e, t) {
                            if (null == e ? (e = {
                                from: this.doc.sel.primary().head,
                                to: null
                            },
                                null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                                    from: H(e, 0),
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
                        setSize: dr(function (e, t) {
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
                                        vr(n, i, "widget");
                                        break
                                    } ++i
                                }),
                                this.curOp.forceUpdate = !0,
                                Ae(this, "refresh", this)
                        }),
                        operation: function (e) {
                            return fr(this, e)
                        },
                        refresh: dr(function () {
                            var e = this.display.cachedTextHeight;
                            gr(this),
                                this.curOp.forceUpdate = !0,
                                ln(this),
                                this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop),
                                Or(this),
                                (null == e || Math.abs(e - mn(this.display)) > .5) && Cn(this),
                                Ae(this, "refresh", this)
                        }),
                        swapDoc: dr(function (e) {
                            var t = this.doc;
                            return t.cm = null,
                                qr(this, e),
                                ln(this),
                                this.display.input.reset(),
                                this.scrollTo(e.scrollLeft, e.scrollTop),
                                this.curOp.forceScroll = !0,
                                kt(this, "swapDoc", this, t),
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
                        De(e),
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
                        var t = a + n;
                        return !(t < e.first || t >= e.first + e.size) && (a = t, c = S(e, t))
                    }
                    function l(e) {
                        var t = (i ? Se : Me)(c, s, n, !0);
                        if (null == t) {
                            if (e || !o()) return !1;
                            s = i ? (n < 0 ? xe : we)(c) : n < 0 ? c.text.length : 0
                        } else s = t;
                        return !0
                    }
                    var a = t.line,
                        s = t.ch,
                        u = n,
                        c = S(e, a);
                    if ("char" == r) l();
                    else if ("column" == r) l(!0);
                    else if ("word" == r || "group" == r) for (var f = null,
                        h = "group" == r,
                        d = e.cm && e.cm.getHelper(t, "wordChars"), p = !0; !(n < 0) || l(!p); p = !1) {
                        var g = c.text.charAt(s) || "\n",
                            v = x(g, d) ? "w" : h && "\n" == g ? "n" : !h || /\s/.test(g) ? null : "p";
                        if (!h || p || v || (v = "s"), f && f != v) {
                            n < 0 && (n = 1, l());
                            break
                        }
                        if (v && (f = v), n > 0 && !l(!p)) break
                    }
                    var m = wi(e, H(a, s), t, u, !0);
                    return D(t, m) || (m.hitSide = !0),
                        m
                }
                function Ko(e, t, n, r) {
                    var i, o = e.doc,
                        l = t.left;
                    if ("page" == r) {
                        var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                            s = Math.max(a - .5 * mn(e.display), 3);
                        i = (n > 0 ? t.bottom : t.top) + n * s
                    } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
                    for (var u; u = gn(e, l, i), u.outside;) {
                        if (n < 0 ? i <= 0 : i >= o.height) {
                            u.hitSide = !0;
                            break
                        }
                        i += 5 * n
                    }
                    return u
                }
                function qo(e) {
                    this.cm = e,
                        this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null,
                        this.polling = new f,
                        this.composing = null,
                        this.gracePeriod = !1,
                        this.readDOMTimeout = null
                }
                function $o(e, t) {
                    var n = Yt(e, t.line);
                    if (!n || n.hidden) return null;
                    var r = S(e.doc, t.line),
                        i = qt(n, r, t.line),
                        o = Te(r),
                        l = "left";
                    if (o) {
                        var a = Le(o, t.ch);
                        l = a % 2 ? "right" : "left"
                    }
                    var s = Qt(i.map, t.ch, l);
                    return s.offset = "right" == s.collapse ? s.end : s.start,
                        s
                }
                function Xo(e, t) {
                    return t && (e.bad = !0),
                        e
                }
                function Yo(e, t, n, r, i) {
                    function o(e) {
                        return function (t) {
                            return t.id == e
                        }
                    }
                    function l(t) {
                        if (1 == t.nodeType) {
                            var n = t.getAttribute("cm-text");
                            if (null != n) return void (a += "" == n ? t.textContent.replace(/\u200b/g, "") : n);
                            var c, f = t.getAttribute("cm-marker");
                            if (f) {
                                var h = e.findMarks(H(r, 0), H(i + 1, 0), o(+ f));
                                return void (h.length && (c = h[0].find()) && (a += M(e.doc, c.from, c.to).join(u)))
                            }
                            if ("false" == t.getAttribute("contenteditable")) return;
                            for (var d = 0; d < t.childNodes.length; d++) l(t.childNodes[d]);
                            /^(pre|div|p)$/i.test(t.nodeName) && (s = !0)
                        } else if (3 == t.nodeType) {
                            var p = t.nodeValue;
                            if (!p) return;
                            s && (a += u, s = !1),
                                a += p
                        }
                    }
                    for (var a = "",
                        s = !1,
                        u = e.doc.lineSeparator(); l(t), t != n;) t = t.nextSibling;
                    return a
                }
                function Zo(e, t, n) {
                    var r;
                    if (t == e.display.lineDiv) {
                        if (r = e.display.lineDiv.childNodes[n], !r) return Xo(e.clipPos(H(e.display.viewTo - 1)), !0);
                        t = null,
                            n = 0
                    } else for (r = t; ; r = r.parentNode) {
                        if (!r || r == e.display.lineDiv) return null;
                        if (r.parentNode && r.parentNode == e.display.lineDiv) break
                    }
                    for (var i = 0; i < e.display.view.length; i++) {
                        var o = e.display.view[i];
                        if (o.node == r) return Jo(o, t, n)
                    }
                }
                function Jo(e, t, n) {
                    function r(t, n, r) {
                        for (var i = -1; i < (f ? f.length : 0); i++) for (var o = i < 0 ? c.map : f[i], l = 0; l < o.length; l += 3) {
                            var a = o[l + 2];
                            if (a == t || a == n) {
                                var s = O(i < 0 ? e.line : e.rest[i]),
                                    u = o[l] + r;
                                return (r < 0 || a != t) && (u = o[l + (r ? 1 : 0)]),
                                    H(s, u)
                            }
                        }
                    }
                    var o = e.text.firstChild,
                        l = !1;
                    if (!t || !i(o, t)) return Xo(H(O(e.line), 0), !0);
                    if (t == o && (l = !0, t = o.childNodes[n], n = 0, !t)) {
                        var a = e.rest ? g(e.rest) : e.line;
                        return Xo(H(O(a), a.text.length), l)
                    }
                    var s = 3 == t.nodeType ? t : null,
                        u = t;
                    for (s || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (s = t.firstChild, n && (n = s.nodeValue.length)); u.parentNode != o;) u = u.parentNode;
                    var c = e.measure,
                        f = c.maps,
                        h = r(s, u, n);
                    if (h) return Xo(h, l);
                    for (var d = u.nextSibling,
                        p = s ? s.nodeValue.length - n : 0; d; d = d.nextSibling) {
                        if (h = r(d, d.firstChild, 0)) return Xo(H(h.line, h.ch - p), l);
                        p += d.textContent.length
                    }
                    for (var v = u.previousSibling,
                        m = n; v; v = v.previousSibling) {
                        if (h = r(v, v.firstChild, -1)) return Xo(H(h.line, h.ch + m), l);
                        m += v.textContent.length
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
                function el(e, t) {
                    function n() {
                        e.value = s.getValue()
                    }
                    if (t = t ? u(t) : {},
                        t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
                        var r = o();
                        t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body
                    }
                    var i;
                    if (e.form && (jl(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
                        var l = e.form;
                        i = l.submit;
                        try {
                            var a = l.submit = function () {
                                n(),
                                    l.submit = i,
                                    l.submit(),
                                    l.submit = a
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
                                    e.form && (Oe(e.form, "submit", n), "function" == typeof e.form.submit && (e.form.submit = i))
                            }
                    },
                        e.style.display = "none";
                    var s = Do(function (t) {
                        return e.parentNode.insertBefore(t, e.nextSibling)
                    },
                        t);
                    return s
                }
                function tl(e) {
                    e.off = Oe,
                        e.on = jl,
                        e.wheelEventPixels = jn,
                        e.Doc = ca,
                        e.splitLines = Gl,
                        e.countColumn = c,
                        e.findColumn = d,
                        e.isWordChar = w,
                        e.Pass = Al,
                        e.signal = Ae,
                        e.Line = st,
                        e.changeEnd = zr,
                        e.scrollbarModel = la,
                        e.Pos = H,
                        e.cmpPos = D,
                        e.modes = $l,
                        e.mimeModes = Xl,
                        e.resolveMode = Ke,
                        e.getMode = qe,
                        e.modeExtensions = Yl,
                        e.extendMode = $e,
                        e.copyState = Xe,
                        e.startState = Ze,
                        e.innerMode = Ye,
                        e.commands = wa,
                        e.keyMap = ma,
                        e.keyName = oo,
                        e.isModifierKey = io,
                        e.lookupKey = ro,
                        e.normalizeKeyMap = no,
                        e.StringStream = Zl,
                        e.SharedTextMarker = ji,
                        e.TextMarker = Bi,
                        e.LineWidget = zi,
                        e.e_preventDefault = Pe,
                        e.e_stopPropagation = Fe,
                        e.e_stop = Ie,
                        e.addClass = l,
                        e.contains = i,
                        e.rmClass = Sl,
                        e.keyNames = da
                }
                var nl = navigator.userAgent,
                    rl = navigator.platform,
                    il = /gecko\/\d/i.test(nl),
                    ol = /MSIE \d/.test(nl),
                    ll = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nl),
                    al = ol || ll,
                    sl = al && (ol ? document.documentMode || 6 : ll[1]),
                    ul = /WebKit\//.test(nl),
                    cl = ul && /Qt\/\d+\.\d+/.test(nl),
                    fl = /Chrome\//.test(nl),
                    hl = /Opera\//.test(nl),
                    dl = /Apple Computer/.test(navigator.vendor),
                    pl = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(nl),
                    gl = /PhantomJS/.test(nl),
                    vl = /AppleWebKit/.test(nl) && /Mobile\/\w+/.test(nl),
                    ml = vl || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(nl),
                    yl = vl || /Mac/.test(rl),
                    bl = /\bCrOS\b/.test(nl),
                    wl = /win/i.test(rl),
                    xl = hl && nl.match(/Version\/(\d*\.\d*)/);
                xl && (xl = Number(xl[1])),
                    xl && xl >= 15 && (hl = !1, ul = !0);
                var Cl, Ll = yl && (cl || hl && (null == xl || xl < 12.11)),
                    kl = il || al && sl >= 9,
                    Sl = function (t, n) {
                        var r = t.className,
                            i = e(n).exec(r);
                        if (i) {
                            var o = r.slice(i.index + i[0].length);
                            t.className = r.slice(0, i.index) + (o ? i[1] + o : "")
                        }
                    };
                Cl = document.createRange ?
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
                var Ml = function (e) {
                    e.select()
                };
                vl ? Ml = function (e) {
                    e.selectionStart = 0,
                        e.selectionEnd = e.value.length
                } : al && (Ml = function (e) {
                    try {
                        e.select()
                    } catch (e) { }
                }),
                    f.prototype.set = function (e, t) {
                        clearTimeout(this.id),
                            this.id = setTimeout(t, e)
                    };
                var Tl, Nl, Ol = 30,
                    Al = {
                        toString: function () {
                            return "CodeMirror.Pass"
                        }
                    },
                    El = {
                        scroll: !1
                    },
                    Wl = {
                        origin: "*mouse"
                    },
                    Hl = {
                        origin: "+move"
                    },
                    Dl = [""],
                    Pl = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
                    Fl = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
                    zl = !1,
                    Il = !1,
                    Rl = null,
                    Bl = function () {
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
                            l = /[LRr]/,
                            a = /[Lb1n]/,
                            s = /[1n]/,
                            u = "L";
                        return function (n) {
                            if (!i.test(n)) return !1;
                            for (var r = n.length,
                                c = [], f = 0; f < r; ++f) c.push(e(n.charCodeAt(f)));
                            for (var h = 0,
                                d = u; h < r; ++h) {
                                var p = c[h];
                                "m" == p ? c[h] = d : d = p
                            }
                            for (var v = 0,
                                m = u; v < r; ++v) {
                                var y = c[v];
                                "1" == y && "r" == m ? c[v] = "n" : l.test(y) && (m = y, "r" == y && (c[v] = "R"))
                            }
                            for (var b = 1,
                                w = c[0]; b < r - 1; ++b) {
                                var x = c[b];
                                "+" == x && "1" == w && "1" == c[b + 1] ? c[b] = "1" : "," != x || w != c[b + 1] || "1" != w && "n" != w || (c[b] = w),
                                    w = x
                            }
                            for (var C = 0; C < r; ++C) {
                                var L = c[C];
                                if ("," == L) c[C] = "N";
                                else if ("%" == L) {
                                    var k = void 0;
                                    for (k = C + 1; k < r && "%" == c[k]; ++k);
                                    for (var S = C && "!" == c[C - 1] || k < r && "1" == c[k] ? "1" : "N", M = C; M < k; ++M) c[M] = S;
                                    C = k - 1
                                }
                            }
                            for (var T = 0,
                                N = u; T < r; ++T) {
                                var O = c[T];
                                "L" == N && "1" == O ? c[T] = "L" : l.test(O) && (N = O)
                            }
                            for (var A = 0; A < r; ++A) if (o.test(c[A])) {
                                var E = void 0;
                                for (E = A + 1; E < r && o.test(c[E]); ++E);
                                for (var W = "L" == (A ? c[A - 1] : u), H = "L" == (E < r ? c[E] : u), D = W || H ? "L" : "R", P = A; P < E; ++P) c[P] = D;
                                A = E - 1
                            }
                            for (var F, z = [], I = 0; I < r;) if (a.test(c[I])) {
                                var R = I;
                                for (++I; I < r && a.test(c[I]); ++I);
                                z.push(new t(0, R, I))
                            } else {
                                var B = I,
                                    _ = z.length;
                                for (++I; I < r && "L" != c[I]; ++I);
                                for (var j = B; j < I;) if (s.test(c[j])) {
                                    B < j && z.splice(_, 0, new t(1, B, j));
                                    var V = j;
                                    for (++j; j < I && s.test(c[j]); ++j);
                                    z.splice(_, 0, new t(2, V, j)),
                                        B = j
                                } else ++j;
                                B < I && z.splice(_, 0, new t(1, B, I))
                            }
                            return 1 == z[0].level && (F = n.match(/^\s+/)) && (z[0].from = F[0].length, z.unshift(new t(0, 0, F[0].length))),
                                1 == g(z).level && (F = n.match(/\s+$/)) && (g(z).to -= F[0].length, z.push(new t(0, r - F[0].length, r))),
                                2 == z[0].level && z.unshift(new t(1, z[0].to, z[0].to)),
                                z[0].level != g(z).level && z.push(new t(z[0].level, r, r)),
                                z
                        }
                    }(),
                    _l = [],
                    jl = function (e, t, n) {
                        if (e.addEventListener) e.addEventListener(t, n, !1);
                        else if (e.attachEvent) e.attachEvent("on" + t, n);
                        else {
                            var r = e._handlers || (e._handlers = {});
                            r[t] = (r[t] || _l).concat(n)
                        }
                    },
                    Vl = function () {
                        if (al && sl < 9) return !1;
                        var e = r("div");
                        return "draggable" in e || "dragDrop" in e
                    }(),
                    Gl = 3 != "\n\nb".split(/\n/).length ?
                        function (e) {
                            for (var t = 0,
                                n = [], r = e.length; t <= r;) {
                                var i = e.indexOf("\n", t);
                                i == -1 && (i = e.length);
                                var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                                    l = o.indexOf("\r");
                                l != -1 ? (n.push(o.slice(0, l)), t += l + 1) : (n.push(o), t = i + 1)
                            }
                            return n
                        } : function (e) {
                            return e.split(/\r\n?|\n/)
                        },
                    Ul = window.getSelection ?
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
                    Kl = function () {
                        var e = r("div");
                        return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
                    }(),
                    ql = null,
                    $l = {},
                    Xl = {},
                    Yl = {},
                    Zl = function (e, t) {
                        this.pos = this.start = 0,
                            this.string = e,
                            this.tabSize = t || 8,
                            this.lastColumnPos = this.lastColumnValue = 0,
                            this.lineStart = 0
                    };
                Zl.prototype = {
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
                        if (this.pos < this.string.length) return this.string.charAt(this.pos++)
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
                    De(st),
                    st.prototype.lineNo = function () {
                        return O(this)
                    };
                var Jl, Ql = {},
                    ea = {},
                    ta = null,
                    na = null,
                    ra = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },
                    ia = 0,
                    oa = null;
                al ? oa = -.53 : il ? oa = 15 : fl ? oa = -.7 : dl && (oa = -1 / 3),
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
                            var e = yl && !pl ? "12px" : "18px";
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
                    Kn.prototype = u({
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
                        Kn.prototype);
                var la = {
                    native: Un,
                    null: Kn
                },
                    aa = 0;
                Lr.prototype.signal = function (e, t) {
                    He(e, t) && this.events.push(arguments)
                },
                    Lr.prototype.finish = function () {
                        for (var e = this,
                            t = 0; t < this.events.length; t++) Ae.apply(null, e.events[t])
                    },
                    Hr.prototype = {
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
                                if (0 != D(r.anchor, i.anchor) || 0 != D(r.head, i.head)) return !1
                            }
                            return !0
                        },
                        deepCopy: function () {
                            for (var e = this,
                                t = [], n = 0; n < this.ranges.length; n++) t[n] = new Dr(P(e.ranges[n].anchor), P(e.ranges[n].head));
                            return new Hr(t, this.primIndex)
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
                                if (D(t, i.from()) >= 0 && D(e, i.to()) <= 0) return r
                            }
                            return - 1
                        }
                    },
                    Dr.prototype = {
                        from: function () {
                            return z(this.anchor, this.head)
                        },
                        to: function () {
                            return F(this.anchor, this.head)
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
                                    kt(o, "delete")
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
                    Fi.prototype = {
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
                                    var l = Math.min(t, o - e),
                                        a = i.height;
                                    if (i.removeInner(e, l), n.height -= a - i.height, o == l && (n.children.splice(r--, 1), i.parent = null), 0 == (t -= l)) break;
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
                                    l = o.chunkSize();
                                if (e <= l) {
                                    if (o.insertInner(e, t, n), o.lines && o.lines.length > 50) {
                                        for (var a = o.lines.length % 25 + 25,
                                            s = a; s < o.lines.length;) {
                                            var u = new Pi(o.lines.slice(s, s += 25));
                                            o.height -= u.height,
                                                r.children.splice(++i, 0, u),
                                                u.parent = r
                                        }
                                        o.lines = o.lines.slice(0, a),
                                            r.maybeSpill()
                                    }
                                    break
                                }
                                e -= l
                            }
                        },
                        maybeSpill: function () {
                            if (!(this.children.length <= 10)) {
                                var e = this;
                                do {
                                    var t = e.children.splice(e.children.length - 5, 5), n = new Fi(t);
                                    if (e.parent) {
                                        e.size -= n.size,
                                            e.height -= n.height;
                                        var r = h(e.parent.children, e);
                                        e.parent.children.splice(r + 1, 0, n)
                                    } else {
                                        var i = new Fi(e.children);
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
                                    l = o.chunkSize();
                                if (e < l) {
                                    var a = Math.min(t, l - e);
                                    if (o.iterN(e, a, n)) return !0;
                                    if (0 == (t -= a)) break;
                                    e = 0
                                } else e -= l
                            }
                        }
                    },
                    De(zi),
                    zi.prototype.clear = function () {
                        var e = this,
                            t = this.doc.cm,
                            n = this.line.widgets,
                            r = this.line,
                            i = O(r);
                        if (null != i && n) {
                            for (var o = 0; o < n.length; ++o) n[o] == e && n.splice(o--, 1);
                            n.length || (r.widgets = null);
                            var l = It(this);
                            N(r, Math.max(0, r.height - l)),
                                t && fr(t,
                                    function () {
                                        Ii(t, r, -l),
                                            vr(t, i, "widget")
                                    })
                        }
                    },
                    zi.prototype.changed = function () {
                        var e = this.height,
                            t = this.doc.cm,
                            n = this.line;
                        this.height = null;
                        var r = It(this) - e;
                        r && (N(n, n.height + r), t && fr(t,
                            function () {
                                t.curOp.forceUpdate = !0,
                                    Ii(t, n, r)
                            }))
                    };
                var sa = 0;
                De(Bi),
                    Bi.prototype.clear = function () {
                        var e = this;
                        if (!this.explicitlyCleared) {
                            var t = this.doc.cm,
                                n = t && !t.curOp;
                            if (n && rr(t), He(this, "clear")) {
                                var r = this.find();
                                r && kt(this, "clear", r.from, r.to)
                            }
                            for (var i = null,
                                o = null,
                                l = 0; l < this.lines.length; ++l) {
                                var a = e.lines[l],
                                    s = U(a.markedSpans, e);
                                t && !e.collapsed ? vr(t, O(a), "text") : t && (null != s.to && (o = O(a)), null != s.from && (i = O(a))),
                                    a.markedSpans = K(a.markedSpans, s),
                                    null == s.from && e.collapsed && !he(e.doc, a) && t && N(a, mn(t.display))
                            }
                            if (t && this.collapsed && !t.options.lineWrapping) for (var u = 0; u < this.lines.length; ++u) {
                                var c = se(e.lines[u]),
                                    f = ge(c);
                                f > t.display.maxLineLength && (t.display.maxLine = c, t.display.maxLineLength = f, t.display.maxLineChanged = !0)
                            }
                            null != i && t && this.collapsed && gr(t, i, o + 1),
                                this.lines.length = 0,
                                this.explicitlyCleared = !0,
                                this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && mi(t.doc)),
                                t && kt(t, "markerCleared", t, this),
                                n && ir(t),
                                this.parent && this.parent.clear()
                        }
                    },
                    Bi.prototype.find = function (e, t) {
                        var n = this;
                        null == e && "bookmark" == this.type && (e = 1);
                        for (var r, i, o = 0; o < this.lines.length; ++o) {
                            var l = n.lines[o],
                                a = U(l.markedSpans, n);
                            if (null != a.from && (r = H(t ? l : O(l), a.from), e == -1)) return r;
                            if (null != a.to && (i = H(t ? l : O(l), a.to), 1 == e)) return i
                        }
                        return r && {
                            from: r,
                            to: i
                        }
                    },
                    Bi.prototype.changed = function () {
                        var e = this.find(-1, !0),
                            t = this,
                            n = this.doc.cm;
                        e && n && fr(n,
                            function () {
                                var r = e.line,
                                    i = O(e.line),
                                    o = Yt(n, i);
                                if (o && (rn(o), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !he(t.doc, r) && null != t.height) {
                                    var l = t.height;
                                    t.height = null;
                                    var a = It(t) - l;
                                    a && N(r, r.height + a)
                                }
                            })
                    },
                    Bi.prototype.attachLine = function (e) {
                        if (!this.lines.length && this.doc.cm) {
                            var t = this.doc.cm.curOp;
                            t.maybeHiddenMarkers && h(t.maybeHiddenMarkers, this) != -1 || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
                        }
                        this.lines.push(e)
                    },
                    Bi.prototype.detachLine = function (e) {
                        if (this.lines.splice(h(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                            var t = this.doc.cm.curOp; (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
                        }
                    },
                    De(ji),
                    ji.prototype.clear = function () {
                        var e = this;
                        if (!this.explicitlyCleared) {
                            this.explicitlyCleared = !0;
                            for (var t = 0; t < this.markers.length; ++t) e.markers[t].clear();
                            kt(this, "clear")
                        }
                    },
                    ji.prototype.find = function (e, t) {
                        return this.primary.find(e, t)
                    };
                var ua = 0,
                    ca = function (e, t, n, r) {
                        if (!(this instanceof ca)) return new ca(e, t, n, r);
                        null == n && (n = 0),
                            Fi.call(this, [new Pi([new st("", null)])]),
                            this.first = n,
                            this.scrollTop = this.scrollLeft = 0,
                            this.cantEdit = !1,
                            this.cleanGeneration = 1,
                            this.frontier = n;
                        var i = H(n, 0);
                        this.sel = Fr(i),
                            this.history = new $r(null),
                            this.id = ++ua,
                            this.modeOption = t,
                            this.lineSep = r,
                            this.extend = !1,
                            "string" == typeof e && (e = this.splitLines(e)),
                            Ur(this, {
                                from: i,
                                to: i,
                                text: e
                            }),
                            pi(this, Fr(i), El)
                    };
                ca.prototype = b(Fi.prototype, {
                    constructor: ca,
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
                        var t = T(this, this.first, this.first + this.size);
                        return e === !1 ? t : t.join(e || this.lineSeparator())
                    },
                    setValue: pr(function (e) {
                        var t = H(this.first, 0),
                            n = this.first + this.size - 1;
                        ki(this, {
                            from: t,
                            to: H(n, S(this, n).text.length),
                            text: this.splitLines(e),
                            origin: "setValue",
                            full: !0
                        },
                            !0),
                            pi(this, Fr(t))
                    }),
                    replaceRange: function (e, t, n, r) {
                        t = R(this, t),
                            n = n ? R(this, n) : t,
                            Ai(this, e, t, n, r)
                    },
                    getRange: function (e, t, n) {
                        var r = M(this, R(this, e), R(this, t));
                        return n === !1 ? r : r.join(n || this.lineSeparator())
                    },
                    getLine: function (e) {
                        var t = this.getLineHandle(e);
                        return t && t.text
                    },
                    getLineHandle: function (e) {
                        if (E(this, e)) return S(this, e)
                    },
                    getLineNumber: function (e) {
                        return O(e)
                    },
                    getLineHandleVisualStart: function (e) {
                        return "number" == typeof e && (e = S(this, e)),
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
                        return R(this, e)
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
                        fi(this, R(this, "number" == typeof e ? H(e, t || 0) : e), null, n)
                    }),
                    setSelection: pr(function (e, t, n) {
                        fi(this, R(this, e), R(this, t || e), n)
                    }),
                    extendSelection: pr(function (e, t, n) {
                        si(this, R(this, e), t && R(this, t), n)
                    }),
                    extendSelections: pr(function (e, t) {
                        ui(this, _(this, e), t)
                    }),
                    extendSelectionsBy: pr(function (e, t) {
                        var n = v(this.sel.ranges, e);
                        ui(this, _(this, n), t)
                    }),
                    setSelections: pr(function (e, t, n) {
                        var r = this;
                        if (e.length) {
                            for (var i = [], o = 0; o < e.length; o++) i[o] = new Dr(R(r, e[o].anchor), R(r, e[o].head));
                            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                                pi(this, Pr(i, t), n)
                        }
                    }),
                    addSelection: pr(function (e, t, n) {
                        var r = this.sel.ranges.slice(0);
                        r.push(new Dr(R(this, e), R(this, t || e))),
                            pi(this, Pr(r, r.length - 1), n)
                    }),
                    getSelection: function (e) {
                        for (var t, n = this,
                            r = this.sel.ranges,
                            i = 0; i < r.length; i++) {
                            var o = M(n, r[i].from(), r[i].to());
                            t = t ? t.concat(o) : o
                        }
                        return e === !1 ? t : t.join(e || this.lineSeparator())
                    },
                    getSelections: function (e) {
                        for (var t = this,
                            n = [], r = this.sel.ranges, i = 0; i < r.length; i++) {
                            var o = M(t, r[i].from(), r[i].to());
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
                            i = [], o = this.sel, l = 0; l < o.ranges.length; l++) {
                            var a = o.ranges[l];
                            i[l] = {
                                from: a.from(),
                                to: a.to(),
                                text: r.splitLines(e[l]),
                                origin: n
                            }
                        }
                        for (var s = t && "end" != t && _r(this, i, t), u = i.length - 1; u >= 0; u--) ki(r, i[u]);
                        s ? di(this, s) : this.cm && tr(this.cm)
                    }),
                    undo: pr(function () {
                        Mi(this, "undo")
                    }),
                    redo: pr(function () {
                        Mi(this, "redo")
                    }),
                    undoSelection: pr(function () {
                        Mi(this, "undo", !0)
                    }),
                    redoSelection: pr(function () {
                        Mi(this, "redo", !0)
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
                        this.history = new $r(this.history.maxGeneration)
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
                            done: li(this.history.done),
                            undone: li(this.history.undone)
                        }
                    },
                    setHistory: function (e) {
                        var t = this.history = new $r(this.history.maxGeneration);
                        t.done = li(e.done.slice(0), null, !0),
                            t.undone = li(e.undone.slice(0), null, !0)
                    },
                    setGutterMarker: pr(function (e, t, n) {
                        return Di(this, e, "gutter",
                            function (e) {
                                var r = e.gutterMarkers || (e.gutterMarkers = {});
                                return r[t] = n,
                                    !n && C(r) && (e.gutterMarkers = null),
                                    !0
                            })
                    }),
                    clearGutter: pr(function (e) {
                        var t = this,
                            n = this.first;
                        this.iter(function (r) {
                            r.gutterMarkers && r.gutterMarkers[e] && Di(t, r, "gutter",
                                function () {
                                    return r.gutterMarkers[e] = null,
                                        C(r.gutterMarkers) && (r.gutterMarkers = null),
                                        !0
                                }),
                                ++n
                        })
                    }),
                    lineInfo: function (e) {
                        var t;
                        if ("number" == typeof e) {
                            if (!E(this, e)) return null;
                            if (t = e, e = S(this, e), !e) return null
                        } else if (t = O(e), null == t) return null;
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
                        return Di(this, t, "gutter" == n ? "gutter" : "class",
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
                        return Di(this, t, "gutter" == n ? "gutter" : "class",
                            function (t) {
                                var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass",
                                    o = t[i];
                                if (!o) return !1;
                                if (null == r) t[i] = null;
                                else {
                                    var l = o.match(e(r));
                                    if (!l) return !1;
                                    var a = l.index + l[0].length;
                                    t[i] = o.slice(0, l.index) + (l.index && a != o.length ? " " : "") + o.slice(a) || null
                                }
                                return !0
                            })
                    }),
                    addLineWidget: pr(function (e, t, n) {
                        return Ri(this, e, t, n)
                    }),
                    removeLineWidget: function (e) {
                        e.clear()
                    },
                    markText: function (e, t, n) {
                        return _i(this, R(this, e), R(this, t), n, n && n.type || "range")
                    },
                    setBookmark: function (e, t) {
                        var n = {
                            replacedWith: t && (null == t.nodeType ? t.widget : t),
                            insertLeft: t && t.insertLeft,
                            clearWhenEmpty: !1,
                            shared: t && t.shared,
                            handleMouseEvents: t && t.handleMouseEvents
                        };
                        return e = R(this, e),
                            _i(this, e, e, n, "bookmark")
                    },
                    findMarksAt: function (e) {
                        e = R(this, e);
                        var t = [],
                            n = S(this, e.line).markedSpans;
                        if (n) for (var r = 0; r < n.length; ++r) {
                            var i = n[r]; (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                        }
                        return t
                    },
                    findMarks: function (e, t, n) {
                        e = R(this, e),
                            t = R(this, t);
                        var r = [],
                            i = e.line;
                        return this.iter(e.line, t.line + 1,
                            function (o) {
                                var l = o.markedSpans;
                                if (l) for (var a = 0; a < l.length; a++) {
                                    var s = l[a];
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
                            R(this, H(n, t))
                    },
                    indexFromPos: function (e) {
                        e = R(this, e);
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
                        var t = new ca(T(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep);
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
                        var r = new ca(T(this, t, n), e.mode || this.modeOption, t, this.lineSep);
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
                            Ui(r, Gi(this)),
                            r
                    },
                    unlinkDoc: function (e) {
                        var t = this;
                        if (e instanceof Do && (e = e.doc), this.linked) for (var n = 0; n < this.linked.length; ++n) {
                            var r = t.linked[n];
                            if (r.doc == e) {
                                t.linked.splice(n, 1),
                                    e.unlinkDoc(t),
                                    Ki(Gi(t));
                                break
                            }
                        }
                        if (e.history == this.history) {
                            var i = [e.id];
                            Kr(e,
                                function (e) {
                                    return i.push(e.id)
                                },
                                !0),
                                e.history = new $r(null),
                                e.history.done = li(this.history.done, i),
                                e.history.undone = li(this.history.undone, i)
                        }
                    },
                    iterLinkedDocs: function (e) {
                        Kr(this, e)
                    },
                    getMode: function () {
                        return this.mode
                    },
                    getEditor: function () {
                        return this.cm
                    },
                    splitLines: function (e) {
                        return this.lineSep ? e.split(this.lineSep) : Gl(e)
                    },
                    lineSeparator: function () {
                        return this.lineSep || "\n"
                    }
                }),
                    ca.prototype.eachLine = ca.prototype.iter;
                for (var fa = 0,
                    ha = !1,
                    da = {
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
                    pa = 0; pa < 10; pa++) da[pa + 48] = da[pa + 96] = String(pa);
                for (var ga = 65; ga <= 90; ga++) da[ga] = String.fromCharCode(ga);
                for (var va = 1; va <= 12; va++) da[va + 111] = da[va + 63235] = "F" + va;
                var ma = {};
                ma.basic = {
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
                    ma.pcDefault = {
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
                    ma.emacsy = {
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
                    ma.macDefault = {
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
                    ma.
                        default = yl ? ma.macDefault : ma.pcDefault;
                var ya, ba, wa = {
                    selectAll: Ci,
                    singleSelection: function (e) {
                        return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), El)
                    },
                    killLine: function (e) {
                        return ao(e,
                            function (t) {
                                if (t.empty()) {
                                    var n = S(e.doc, t.head.line).text.length;
                                    return t.head.ch == n && t.head.line < e.lastLine() ? {
                                        from: t.head,
                                        to: H(t.head.line + 1, 0)
                                    } : {
                                        from: t.head,
                                        to: H(t.head.line, n)
                                    }
                                }
                                return {
                                    from: t.from(),
                                    to: t.to()
                                }
                            })
                    },
                    deleteLine: function (e) {
                        return ao(e,
                            function (t) {
                                return {
                                    from: H(t.from().line, 0),
                                    to: R(e.doc, H(t.to().line + 1, 0))
                                }
                            })
                    },
                    delLineLeft: function (e) {
                        return ao(e,
                            function (e) {
                                return {
                                    from: H(e.from().line, 0),
                                    to: e.from()
                                }
                            })
                    },
                    delWrappedLineLeft: function (e) {
                        return ao(e,
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
                        return ao(e,
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
                        return e.extendSelection(H(e.firstLine(), 0))
                    },
                    goDocEnd: function (e) {
                        return e.extendSelection(H(e.lastLine()))
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
                            Hl)
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
                            Hl)
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
                            Hl)
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
                                l = c(e.getLine(o.line), o.ch, r);
                            t.push(p(r - l % r))
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
                                        o = S(e.doc, i.line).text;
                                    if (o) if (i.ch == o.length && (i = new H(i.line, i.ch - 1)), i.ch > 0) i = new H(i.line, i.ch + 1),
                                        e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), H(i.line, i.ch - 2), i, "+transpose");
                                    else if (i.line > e.doc.first) {
                                        var l = S(e.doc, i.line - 1).text;
                                        l && (i = new H(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1), H(i.line - 1, l.length - 1), i, "+transpose"))
                                    }
                                    n.push(new Dr(i, i))
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
                    xa = new f,
                    Ca = null,
                    La = {
                        toString: function () {
                            return "CodeMirror.Init"
                        }
                    },
                    ka = {},
                    Sa = {};
                Do.defaults = ka,
                    Do.optionHandlers = Sa;
                var Ma = [];
                Do.defineInitHook = function (e) {
                    return Ma.push(e)
                };
                var Ta = null;
                qo.prototype = u({
                    init: function (e) {
                        function t(e) {
                            if (!Ee(i, e)) {
                                if (i.somethingSelected()) zo({
                                    lineWise: !1,
                                    text: i.getSelections()
                                }),
                                    "cut" == e.type && i.replaceSelection("", null, "cut");
                                else {
                                    if (!i.options.lineWiseCopyCut) return;
                                    var t = _o(i);
                                    zo({
                                        lineWise: !0,
                                        text: t.text
                                    }),
                                        "cut" == e.type && i.operation(function () {
                                            i.setSelections(t.ranges, 0, El),
                                                i.replaceSelection("", null, "cut")
                                        })
                                }
                                if (e.clipboardData) {
                                    e.clipboardData.clearData();
                                    var n = Ta.text.join("\n");
                                    if (e.clipboardData.setData("Text", n), e.clipboardData.getData("Text") == n) return void e.preventDefault()
                                }
                                var l = Vo(),
                                    a = l.firstChild;
                                i.display.lineSpace.insertBefore(l, i.display.lineSpace.firstChild),
                                    a.value = Ta.text.join("\n");
                                var s = document.activeElement;
                                Ml(a),
                                    setTimeout(function () {
                                        i.display.lineSpace.removeChild(l),
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
                        jo(o, i.options.spellcheck),
                            jl(o, "paste",
                                function (e) {
                                    Ee(i, e) || Ro(e, i) || sl <= 11 && setTimeout(hr(i,
                                        function () {
                                            r.pollContent() || gr(i)
                                        }), 20)
                                }),
                            jl(o, "compositionstart",
                                function (e) {
                                    n.composing = {
                                        data: e.data
                                    }
                                }),
                            jl(o, "compositionupdate",
                                function (e) {
                                    n.composing || (n.composing = {
                                        data: e.data
                                    })
                                }),
                            jl(o, "compositionend",
                                function (e) {
                                    n.composing && (e.data != n.composing.data && n.readFromDOMSoon(), n.composing = null)
                                }),
                            jl(o, "touchstart",
                                function () {
                                    return r.forceCompositionEnd()
                                }),
                            jl(o, "input",
                                function () {
                                    n.composing || n.readFromDOMSoon()
                                }),
                            jl(o, "copy", t),
                            jl(o, "cut", t)
                    },
                    prepareSelection: function () {
                        var e = Mn(this.cm, !1);
                        return e.focus = this.cm.state.focused,
                            e
                    },
                    showSelection: function (e, t) {
                        e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
                    },
                    showPrimarySelection: function () {
                        var e = window.getSelection(),
                            t = this.cm.doc.sel.primary(),
                            n = Zo(this.cm, e.anchorNode, e.anchorOffset),
                            r = Zo(this.cm, e.focusNode, e.focusOffset);
                        if (!n || n.bad || !r || r.bad || 0 != D(z(n, r), t.from()) || 0 != D(F(n, r), t.to())) {
                            var i = $o(this.cm, t.from()),
                                o = $o(this.cm, t.to());
                            if (i || o) {
                                var l = this.cm.display.view,
                                    a = e.rangeCount && e.getRangeAt(0);
                                if (i) {
                                    if (!o) {
                                        var s = l[l.length - 1].measure,
                                            u = s.maps ? s.maps[s.maps.length - 1] : s.map;
                                        o = {
                                            node: u[u.length - 1],
                                            offset: u[u.length - 2] - u[u.length - 3]
                                        }
                                    }
                                } else i = {
                                    node: l[0].measure.map[2],
                                    offset: 0
                                };
                                var c;
                                try {
                                    c = Cl(i.node, i.offset, o.offset, o.node)
                                } catch (e) { }
                                c && (!il && this.cm.state.focused ? (e.collapse(i.node, i.offset), c.collapsed || (e.removeAllRanges(), e.addRange(c))) : (e.removeAllRanges(), e.addRange(c)), a && null == e.anchorNode ? e.addRange(a) : il && this.startGracePeriod()),
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
                            var n = Zo(t, e.anchorNode, e.anchorOffset),
                                r = Zo(t, e.focusNode, e.focusOffset);
                            n && r && fr(t,
                                function () {
                                    pi(t.doc, Fr(n, r), El),
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
                        if (0 == r.ch && r.line > e.firstLine() && (r = H(r.line - 1, S(e.doc, r.line - 1).length)), i.ch == S(e.doc, i.line).text.length && i.line < e.lastLine() && (i = H(i.line + 1, 0)), r.line < t.viewFrom || i.line > t.viewTo - 1) return !1;
                        var o, l, a;
                        r.line == t.viewFrom || 0 == (o = kn(e, r.line)) ? (l = O(t.view[0].line), a = t.view[0].node) : (l = O(t.view[o].line), a = t.view[o - 1].node.nextSibling);
                        var s, u, c = kn(e, i.line);
                        if (c == t.view.length - 1 ? (s = t.viewTo - 1, u = t.lineDiv.lastChild) : (s = O(t.view[c + 1].line) - 1, u = t.view[c + 1].node.previousSibling), !a) return !1;
                        for (var f = e.doc.splitLines(Yo(e, a, u, l, s)), h = M(e.doc, H(l, 0), H(s, S(e.doc, s).text.length)); f.length > 1 && h.length > 1;) if (g(f) == g(h)) f.pop(),
                            h.pop(),
                            s--;
                        else {
                            if (f[0] != h[0]) break;
                            f.shift(),
                                h.shift(),
                                l++
                        }
                        for (var d = 0,
                            p = 0,
                            v = f[0], m = h[0], y = Math.min(v.length, m.length); d < y && v.charCodeAt(d) == m.charCodeAt(d);)++d;
                        for (var b = g(f), w = g(h), x = Math.min(b.length - (1 == f.length ? d : 0), w.length - (1 == h.length ? d : 0)); p < x && b.charCodeAt(b.length - p - 1) == w.charCodeAt(w.length - p - 1);)++p;
                        f[f.length - 1] = b.slice(0, b.length - p).replace(/^\u200b+/, ""),
                            f[0] = f[0].slice(d).replace(/\u200b+$/, "");
                        var C = H(l, d),
                            L = H(s, h.length ? g(h).length - p : 0);
                        return f.length > 1 || f[0] || D(C, L) ? (Ai(e.doc, f, C, L, "+input"), !0) : void 0
                    },
                    ensurePolled: function () {
                        this.forceCompositionEnd()
                    },
                    reset: function () {
                        this.forceCompositionEnd()
                    },
                    forceCompositionEnd: function () {
                        this.composing && (this.composing = null, this.pollContent() || gr(this.cm), this.div.blur(), this.div.focus())
                    },
                    readFromDOMSoon: function () {
                        var e = this;
                        null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
                            e.readDOMTimeout = null,
                                e.composing || !e.cm.isReadOnly() && e.pollContent() || fr(e.cm,
                                    function () {
                                        return gr(e.cm)
                                    })
                        },
                            80))
                    },
                    setUneditable: function (e) {
                        e.contentEditable = "false"
                    },
                    onKeyPress: function (e) {
                        e.preventDefault(),
                            this.cm.isReadOnly() || hr(this.cm, Io)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0)
                    },
                    readOnlyChanged: function (e) {
                        this.div.contentEditable = String("nocursor" != e)
                    },
                    onContextMenu: y,
                    resetPosition: y,
                    needsContentAttribute: !0
                },
                    qo.prototype),
                    Qo.prototype = u({
                        init: function (e) {
                            function t(e) {
                                if (!Ee(i, e)) {
                                    if (i.somethingSelected()) zo({
                                        lineWise: !1,
                                        text: i.getSelections()
                                    }),
                                        r.inaccurateSelection && (r.prevInput = "", r.inaccurateSelection = !1, l.value = Ta.text.join("\n"), Ml(l));
                                    else {
                                        if (!i.options.lineWiseCopyCut) return;
                                        var t = _o(i);
                                        zo({
                                            lineWise: !0,
                                            text: t.text
                                        }),
                                            "cut" == e.type ? i.setSelections(t.ranges, null, El) : (r.prevInput = "", l.value = t.text.join("\n"), Ml(l))
                                    }
                                    "cut" == e.type && (i.state.cutIncoming = !0)
                                }
                            }
                            var n = this,
                                r = this,
                                i = this.cm,
                                o = this.wrapper = Vo(),
                                l = this.textarea = o.firstChild;
                            e.wrapper.insertBefore(o, e.wrapper.firstChild),
                                vl && (l.style.width = "0px"),
                                jl(l, "input",
                                    function () {
                                        al && sl >= 9 && n.hasSelection && (n.hasSelection = null),
                                            r.poll()
                                    }),
                                jl(l, "paste",
                                    function (e) {
                                        Ee(i, e) || Ro(e, i) || (i.state.pasteIncoming = !0, r.fastPoll())
                                    }),
                                jl(l, "cut", t),
                                jl(l, "copy", t),
                                jl(e.scroller, "paste",
                                    function (t) {
                                        Rt(e, t) || Ee(i, t) || (i.state.pasteIncoming = !0, r.focus())
                                    }),
                                jl(e.lineSpace, "selectstart",
                                    function (t) {
                                        Rt(e, t) || Pe(t)
                                    }),
                                jl(l, "compositionstart",
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
                                jl(l, "compositionend",
                                    function () {
                                        r.composing && (r.poll(), r.composing.range.clear(), r.composing = null)
                                    })
                        },
                        prepareSelection: function () {
                            var e = this.cm,
                                t = e.display,
                                n = e.doc,
                                r = Mn(e);
                            if (e.options.moveInputWithCursor) {
                                var i = hn(e, n.sel.primary().head, "div"),
                                    o = t.wrapper.getBoundingClientRect(),
                                    l = t.lineDiv.getBoundingClientRect();
                                r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)),
                                    r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left))
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
                                    t = Kl && (o.to().line - o.from().line > 100 || (n = r.getSelection()).length > 1e3);
                                    var l = t ? "-" : n || r.getSelection();
                                    this.textarea.value = l,
                                        r.state.focused && Ml(this.textarea),
                                        al && sl >= 9 && (this.hasSelection = l)
                                } else e || (this.prevInput = this.textarea.value = "", al && sl >= 9 && (this.hasSelection = null));
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
                            if ("nocursor" != this.cm.options.readOnly && (!ml || o() != this.textarea)) try {
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
                            if (this.contextMenuPending || !t.state.focused || Ul(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
                            var i = n.value;
                            if (i == r && !t.somethingSelected()) return !1;
                            if (al && sl >= 9 && this.hasSelection === i || yl && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(),
                                !1;
                            if (t.doc.sel == t.display.selForContextMenu) {
                                var o = i.charCodeAt(0);
                                if (8203 != o || r || (r = "​"), 8666 == o) return this.reset(),
                                    this.cm.execCommand("undo")
                            }
                            for (var l = 0,
                                a = Math.min(r.length, i.length); l < a && r.charCodeAt(l) == i.charCodeAt(l);)++l;
                            return fr(t,
                                function () {
                                    Io(t, i.slice(l), r.length - l, null, e.composing ? "*compose" : null),
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
                            al && sl >= 9 && (this.hasSelection = null),
                                this.fastPoll()
                        },
                        onContextMenu: function (e) {
                            function t() {
                                if (null != l.selectionStart) {
                                    var e = i.somethingSelected(),
                                        t = "​" + (e ? l.value : "");
                                    l.value = "⇚",
                                        l.value = t,
                                        r.prevInput = e ? "" : "​",
                                        l.selectionStart = 1,
                                        l.selectionEnd = t.length,
                                        o.selForContextMenu = i.doc.sel
                                }
                            }
                            function n() {
                                if (r.contextMenuPending = !1, r.wrapper.style.cssText = f, l.style.cssText = c, al && sl < 9 && o.scrollbars.setScrollTop(o.scroller.scrollTop = s), null != l.selectionStart) {
                                    (!al || al && sl < 9) && t();
                                    var e = 0,
                                        n = function () {
                                            o.selForContextMenu == i.doc.sel && 0 == l.selectionStart && l.selectionEnd > 0 && "​" == r.prevInput ? hr(i, Ci)(i) : e++ < 10 ? o.detectingSelectAll = setTimeout(n, 500) : o.input.reset()
                                        };
                                    o.detectingSelectAll = setTimeout(n, 200)
                                }
                            }
                            var r = this,
                                i = r.cm,
                                o = i.display,
                                l = r.textarea,
                                a = Ln(i, e),
                                s = o.scroller.scrollTop;
                            if (a && !hl) {
                                var u = i.options.resetSelectionOnContextMenu;
                                u && i.doc.sel.contains(a) == -1 && hr(i, pi)(i.doc, Fr(a), El);
                                var c = l.style.cssText,
                                    f = r.wrapper.style.cssText;
                                r.wrapper.style.cssText = "position: absolute";
                                var h = r.wrapper.getBoundingClientRect();
                                l.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - h.top - 5) + "px; left: " + (e.clientX - h.left - 5) + "px;\n      z-index: 1000; background: " + (al ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
                                var d;
                                if (ul && (d = window.scrollY), o.input.focus(), ul && window.scrollTo(null, d), o.input.reset(), i.somethingSelected() || (l.value = r.prevInput = " "), r.contextMenuPending = !0, o.selForContextMenu = i.doc.sel, clearTimeout(o.detectingSelectAll), al && sl >= 9 && t(), kl) {
                                    Ie(e);
                                    var p = function () {
                                        Oe(window, "mouseup", p),
                                            setTimeout(n, 20)
                                    };
                                    jl(window, "mouseup", p)
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
                    Ao(Do),
                    Go(Do);
                var Na = "iter insert remove copy getEditor constructor".split(" ");
                for (var Oa in ca.prototype) ca.prototype.hasOwnProperty(Oa) && h(Na, Oa) < 0 && (Do.prototype[Oa] = function (e) {
                    return function () {
                        return e.apply(this.doc, arguments)
                    }
                }(ca.prototype[Oa]));
                return De(ca),
                    Do.inputStyles = {
                        textarea: Qo,
                        contenteditable: qo
                    },
                    Do.defineMode = function (e) {
                        Do.defaults.mode || "null" == e || (Do.defaults.mode = e),
                            Ge.apply(this, arguments)
                    },
                    Do.defineMIME = Ue,
                    Do.defineMode("null",
                        function () {
                            return {
                                token: function (e) {
                                    return e.skipToEnd()
                                }
                            }
                        }),
                    Do.defineMIME("text/plain", "null"),
                    Do.defineExtension = function (e, t) {
                        Do.prototype[e] = t
                    },
                    Do.defineDocExtension = function (e, t) {
                        ca.prototype[e] = t
                    },
                    Do.fromTextArea = el,
                    tl(Do),
                    Do.version = "5.21.0",
                    Do
            })
    },
    function (e, t, n) {
        !
        function (e) {
            e(n(80))
        }(function (e) {
            "use strict";
            function t(t, i, o, l) {
                function a(e) {
                    var n = s(t, i);
                    if (!n || n.to.line - n.from.line < u) return null;
                    for (var r = t.findMarksAt(n.from), o = 0; o < r.length; ++o) if (r[o].__isFold && "fold" !== l) {
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
                    c = a(!0);
                if (r(t, o, "scanUp")) for (; !c && i.line > t.firstLine();) i = e.Pos(i.line - 1, 0),
                    c = a(!1);
                if (c && !c.cleared && "unfold" !== l) {
                    var f = n(t, o);
                    e.on(f, "mousedown",
                        function (t) {
                            h.clear(),
                                e.e_preventDefault(t)
                        });
                    var h = t.markText(c.from, c.to, {
                        replacedWith: f,
                        clearOnEnter: r(t, o, "clearOnEnter"),
                        __isFold: !0
                    });
                    h.on("clear",
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
                    l = t,
                    a = e.foldOption(o, "minFoldSize"),
                    s = e.foldOption(o, "rangeFinder");
                e.eachLine(t, n,
                    function (t) {
                        var n = null;
                        if (r(e, l)) n = i(o.indicatorFolded);
                        else {
                            var u = f(l, 0),
                                c = s && s(e, u);
                            c && c.to.line - c.from.line >= a && (n = i(o.indicatorOpen))
                        }
                        e.setGutterMarker(t, o.gutter, n),
                            ++l
                    })
            }
            function l(e) {
                var t = e.getViewport(),
                    n = e.state.foldGutter;
                n && (e.operation(function () {
                    o(e, t.from, t.to)
                }), n.from = t.from, n.to = t.to)
            }
            function a(e, t, n) {
                var i = e.state.foldGutter;
                if (i) {
                    var o = i.options;
                    if (n == o.gutter) {
                        var l = r(e, t);
                        l ? l.clear() : e.foldCode(f(t, 0), o.rangeFinder)
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
                            l(e)
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
                            t.from == t.to || n.from - t.to > 20 || t.from - n.to > 20 ? l(e) : e.operation(function () {
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
                    o && o != e.Init && (r.clearGutter(r.state.foldGutter.options.gutter), r.state.foldGutter = null, r.off("gutterClick", a), r.off("change", s), r.off("viewportChange", u), r.off("fold", c), r.off("unfold", c), r.off("swapDoc", s)),
                        i && (r.state.foldGutter = new t(n(i)), l(r), r.on("gutterClick", a), r.on("change", s), r.on("viewportChange", u), r.on("fold", c), r.on("unfold", c), r.on("swapDoc", s))
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
                        for (var a = n.ch,
                            s = 0; ;) {
                            var u = a <= 0 ? -1 : l.lastIndexOf(r, a - 1);
                            if (u != -1) {
                                if (1 == s && u < n.ch) break;
                                if (i = t.getTokenTypeAt(e.Pos(o, u + 1)), !/^(comment|string)/.test(i)) return u + 1;
                                a = u - 1
                            } else {
                                if (1 == s) break;
                                s = 1,
                                    a = l.length
                            }
                        }
                    }
                    var i, o = n.line,
                        l = t.getLine(o),
                        a = "{",
                        s = "}",
                        u = r("{");
                    if (null == u && (a = "[", s = "]", u = r("[")), null != u) {
                        var c, f, h = 1,
                            d = t.lastLine();
                        e: for (var p = o; p <= d; ++p) for (var g = t.getLine(p), v = p == o ? u : 0; ;) {
                            var m = g.indexOf(a, v),
                                y = g.indexOf(s, v);
                            if (m < 0 && (m = g.length), y < 0 && (y = g.length), v = Math.min(m, y), v == g.length) break;
                            if (t.getTokenTypeAt(e.Pos(p, v + 1)) == i) if (v == m) ++h;
                            else if (!--h) {
                                c = p,
                                    f = v;
                                break e
                            } ++v
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
                                var l = t.getLine(i),
                                    a = l.indexOf(";");
                                if (a != -1) return {
                                    startCh: r.end,
                                    end: e.Pos(i, a)
                                }
                            }
                        }
                        var i, o = n.line,
                            l = r(o);
                        if (!l || r(o - 1) || (i = r(o - 2)) && i.end.line == o - 1) return null;
                        for (var a = l.end; ;) {
                            var s = r(a.line + 1);
                            if (null == s) break;
                            a = s.end
                        }
                        return {
                            from: t.clipPos(e.Pos(o, l.startCh + 1)),
                            to: a
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
                        for (var l = i; ;) {
                            var a = r(l + 1);
                            if (null == a) break; ++l
                        }
                        return {
                            from: e.Pos(i, o + 1),
                            to: t.clipPos(e.Pos(l))
                        }
                    })
        })
    },
    function (e, t, n) {
        !
        function (e) {
            e(n(80))
        }(function (e) {
            function t(e, t, n) {
                var r, i = e.getWrapperElement();
                return r = i.appendChild(document.createElement("div")),
                    n ? r.className = "CodeMirror-dialog CodeMirror-dialog-bottom" : r.className = "CodeMirror-dialog CodeMirror-dialog-top",
                    "string" == typeof t ? r.innerHTML = t : r.appendChild(t),
                    r
            }
            function n(e, t) {
                e.state.currentNotificationClose && e.state.currentNotificationClose(),
                    e.state.currentNotificationClose = t
            }
            e.defineExtension("openDialog",
                function (r, i, o) {
                    function l(e) {
                        if ("string" == typeof e) f.value = e;
                        else {
                            if (u) return;
                            u = !0,
                                s.parentNode.removeChild(s),
                                c.focus(),
                                o.onClose && o.onClose(s)
                        }
                    }
                    o || (o = {}),
                        n(this, null);
                    var a, s = t(this, r, o.bottom),
                        u = !1,
                        c = this,
                        f = s.getElementsByTagName("input")[0];
                    return f ? (f.focus(), o.value && (f.value = o.value, o.selectValueOnOpen !== !1 && f.select()), o.onInput && e.on(f, "input",
                        function (e) {
                            o.onInput(e, f.value, l)
                        }), o.onKeyUp && e.on(f, "keyup",
                            function (e) {
                                o.onKeyUp(e, f.value, l)
                            }), e.on(f, "keydown",
                                function (t) {
                                    o && o.onKeyDown && o.onKeyDown(t, f.value, l) || ((27 == t.keyCode || o.closeOnEnter !== !1 && 13 == t.keyCode) && (f.blur(), e.e_stop(t), l()), 13 == t.keyCode && i(f.value, t))
                                }), o.closeOnBlur !== !1 && e.on(f, "blur", l)) : (a = s.getElementsByTagName("button")[0]) && (e.on(a, "click",
                                    function () {
                                        l(),
                                            c.focus()
                                    }), o.closeOnBlur !== !1 && e.on(a, "blur", l), a.focus()),
                        l
                }),
                e.defineExtension("openConfirm",
                    function (r, i, o) {
                        function l() {
                            u || (u = !0, a.parentNode.removeChild(a), c.focus())
                        }
                        n(this, null);
                        var a = t(this, r, o && o.bottom),
                            s = a.getElementsByTagName("button"),
                            u = !1,
                            c = this,
                            f = 1;
                        s[0].focus();
                        for (var h = 0; h < s.length; ++h) {
                            var d = s[h]; !
                                function (t) {
                                    e.on(d, "click",
                                        function (n) {
                                            e.e_preventDefault(n),
                                                l(),
                                                t && t(c)
                                        })
                                }(i[h]),
                                e.on(d, "blur",
                                    function () {
                                        --f,
                                        setTimeout(function () {
                                            f <= 0 && l()
                                        },
                                            200)
                                    }),
                                e.on(d, "focus",
                                    function () {
                                        ++f
                                    })
                        }
                    }),
                e.defineExtension("openNotification",
                    function (r, i) {
                        function o() {
                            s || (s = !0, clearTimeout(l), a.parentNode.removeChild(a))
                        }
                        n(this, o);
                        var l, a = t(this, r, i && i.bottom),
                            s = !1,
                            u = i && "undefined" != typeof i.duration ? i.duration : 5e3;
                        return e.on(a, "click",
                            function (t) {
                                e.e_preventDefault(t),
                                    o()
                            }),
                            u && (l = setTimeout(o, u)),
                            o
                    })
        })
    },
    function (e, t, n) {
        !
        function (e) {
            e(n(80))
        }(function (e) {
            "use strict";
            function t(e, t) {
                function n(e) {
                    clearTimeout(r.doRedraw),
                        r.doRedraw = setTimeout(function () {
                            r.redraw()
                        },
                            e)
                }
                this.cm = e,
                    this.options = t,
                    this.buttonHeight = t.scrollButtonHeight || e.getOption("scrollButtonHeight"),
                    this.annotations = [],
                    this.doRedraw = this.doUpdate = null,
                    this.div = e.getWrapperElement().appendChild(document.createElement("div")),
                    this.div.style.cssText = "position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none",
                    this.computeScale();
                var r = this;
                e.on("refresh", this.resizeHandler = function () {
                    clearTimeout(r.doUpdate),
                        r.doUpdate = setTimeout(function () {
                            r.computeScale() && n(20)
                        },
                            100)
                }),
                    e.on("markerAdded", this.resizeHandler),
                    e.on("markerCleared", this.resizeHandler),
                    t.listenForChanges !== !1 && e.on("change", this.changeHandler = function () {
                        n(250)
                    })
            }
            e.defineExtension("annotateScrollbar",
                function (e) {
                    return "string" == typeof e && (e = {
                        className: e
                    }),
                        new t(this, e)
                }),
                e.defineOption("scrollButtonHeight", 0),
                t.prototype.computeScale = function () {
                    var e = this.cm,
                        t = (e.getWrapperElement().clientHeight - e.display.barHeight - 2 * this.buttonHeight) / e.getScrollerElement().scrollHeight;
                    if (t != this.hScale) return this.hScale = t,
                        !0
                },
                t.prototype.update = function (e) {
                    this.annotations = e,
                        this.redraw()
                },
                t.prototype.redraw = function (e) {
                    function t(e, t) {
                        if (s != e.line && (s = e.line, u = n.getLineHandle(s)), l && u.height > a) return n.charCoords(e, "local")[t ? "top" : "bottom"];
                        var r = n.heightAtLine(u, "local");
                        return r + (t ? 0 : u.height)
                    }
                    e !== !1 && this.computeScale();
                    var n = this.cm,
                        r = this.hScale,
                        i = document.createDocumentFragment(),
                        o = this.annotations,
                        l = n.getOption("lineWrapping"),
                        a = l && 1.5 * n.defaultTextHeight(),
                        s = null,
                        u = null;
                    if (n.display.barWidth) for (var c, f = 0; f < o.length; f++) {
                        for (var h = o[f], d = c || t(h.from, !0) * r, p = t(h.to, !1) * r; f < o.length - 1 && (c = t(o[f + 1].from, !0) * r, !(c > p + .9));) h = o[++f],
                            p = t(h.to, !1) * r;
                        if (p != d) {
                            var g = Math.max(p - d, 3),
                                v = i.appendChild(document.createElement("div"));
                            v.style.cssText = "position: absolute; right: 0px; width: " + Math.max(n.display.barWidth - 1, 2) + "px; top: " + (d + this.buttonHeight) + "px; height: " + g + "px",
                                v.className = this.options.className,
                                h.id && v.setAttribute("annotation-id", h.id)
                        }
                    }
                    this.div.textContent = "",
                        this.div.appendChild(i)
                },
                t.prototype.clear = function () {
                    this.cm.off("refresh", this.resizeHandler),
                        this.cm.off("markerAdded", this.resizeHandler),
                        this.cm.off("markerCleared", this.resizeHandler),
                        this.changeHandler && this.cm.off("change", this.changeHandler),
                        this.div.parentNode.removeChild(this.div)
                }
        })
    },
    function (e, t, n) {
        !
        function (e) {
            e(n(80), n(87), n(85))
        }(function (e) {
            "use strict";
            function t(e, t, n, r) {
                this.cm = e,
                    this.options = r;
                var i = {
                    listenForChanges: !1
                };
                for (var o in r) i[o] = r[o];
                i.className || (i.className = "CodeMirror-search-match"),
                    this.annotation = e.annotateScrollbar(i),
                    this.query = t,
                    this.caseFold = n,
                    this.gap = {
                        from: e.firstLine(),
                        to: e.lastLine() + 1
                    },
                    this.matches = [],
                    this.update = null,
                    this.findMatches(),
                    this.annotation.update(this.matches);
                var l = this;
                e.on("change", this.changeHandler = function (e, t) {
                    l.onChange(t)
                })
            }
            function n(e, t, n) {
                return e <= t ? e : Math.max(t, e + n)
            }
            e.defineExtension("showMatchesOnScrollbar",
                function (e, n, r) {
                    return "string" == typeof r && (r = {
                        className: r
                    }),
                        r || (r = {}),
                        new t(this, e, n, r)
                });
            var r = 1e3;
            t.prototype.findMatches = function () {
                if (this.gap) {
                    for (var t = 0; t < this.matches.length; t++) {
                        var n = this.matches[t];
                        if (n.from.line >= this.gap.to) break;
                        n.to.line >= this.gap.from && this.matches.splice(t--, 1)
                    }
                    for (var i = this.cm.getSearchCursor(this.query, e.Pos(this.gap.from, 0), this.caseFold), o = this.options && this.options.maxMatches || r; i.findNext();) {
                        var n = {
                            from: i.from(),
                            to: i.to()
                        };
                        if (n.from.line >= this.gap.to) break;
                        if (this.matches.splice(t++, 0, n), this.matches.length > o) break
                    }
                    this.gap = null
                }
            },
                t.prototype.onChange = function (t) {
                    var r = t.from.line,
                        i = e.changeEnd(t).line,
                        o = i - t.to.line;
                    if (this.gap ? (this.gap.from = Math.min(n(this.gap.from, r, o), t.from.line), this.gap.to = Math.max(n(this.gap.to, r, o), t.from.line)) : this.gap = {
                        from: t.from.line,
                        to: i + 1
                    },
                        o) for (var l = 0; l < this.matches.length; l++) {
                            var a = this.matches[l],
                                s = n(a.from.line, r, o);
                            s != a.from.line && (a.from = e.Pos(s, a.from.ch));
                            var u = n(a.to.line, r, o);
                            u != a.to.line && (a.to = e.Pos(u, a.to.ch))
                        }
                    clearTimeout(this.update);
                    var c = this;
                    this.update = setTimeout(function () {
                        c.updateAfterChange()
                    },
                        250)
                },
                t.prototype.updateAfterChange = function () {
                    this.findMatches(),
                        this.annotation.update(this.matches)
                },
                t.prototype.clear = function () {
                    this.cm.off("change", this.changeHandler),
                        this.annotation.clear()
                }
        })
    },
    function (e, t, n) {
        !
        function (e) {
            e(n(80))
        }(function (e) {
            "use strict";
            function t(e, t, i, o) {
                if (this.atOccurrence = !1, this.doc = e, null == o && "string" == typeof t && (o = !1), i = i ? e.clipPos(i) : r(0, 0), this.pos = {
                    from: i,
                    to: i
                },
                    "string" != typeof t) t.global || (t = new RegExp(t.source, t.ignoreCase ? "ig" : "g")),
                        this.matches = function (n, i) {
                            if (n) {
                                t.lastIndex = 0;
                                for (var o, l, a = e.getLine(i.line).slice(0, i.ch), s = 0; ;) {
                                    t.lastIndex = s;
                                    var u = t.exec(a);
                                    if (!u) break;
                                    if (o = u, l = o.index, s = o.index + (o[0].length || 1), s == a.length) break
                                }
                                var c = o && o[0].length || 0;
                                c || (0 == l && 0 == a.length ? o = void 0 : l != e.getLine(i.line).length && c++)
                            } else {
                                t.lastIndex = i.ch;
                                var a = e.getLine(i.line),
                                    o = t.exec(a),
                                    c = o && o[0].length || 0,
                                    l = o && o.index;
                                l + c == a.length || c || (c = 1)
                            }
                            if (o && c) return {
                                from: r(i.line, l),
                                to: r(i.line, l + c),
                                match: o
                            }
                        };
                else {
                    var l = t;
                    o && (t = t.toLowerCase());
                    var a = o ?
                        function (e) {
                            return e.toLowerCase()
                        } : function (e) {
                            return e
                        },
                        s = t.split("\n");
                    if (1 == s.length) t.length ? this.matches = function (i, o) {
                        if (i) {
                            var s = e.getLine(o.line).slice(0, o.ch),
                                u = a(s),
                                c = u.lastIndexOf(t);
                            if (c > -1) return c = n(s, u, c),
                            {
                                from: r(o.line, c),
                                to: r(o.line, c + l.length)
                            }
                        } else {
                            var s = e.getLine(o.line).slice(o.ch),
                                u = a(s),
                                c = u.indexOf(t);
                            if (c > -1) return c = n(s, u, c) + o.ch,
                            {
                                from: r(o.line, c),
                                to: r(o.line, c + l.length)
                            }
                        }
                    } : this.matches = function () { };
                    else {
                        var u = l.split("\n");
                        this.matches = function (t, n) {
                            var i = s.length - 1;
                            if (t) {
                                if (n.line - (s.length - 1) < e.firstLine()) return;
                                if (a(e.getLine(n.line).slice(0, u[i].length)) != s[s.length - 1]) return;
                                for (var o = r(n.line, u[i].length), l = n.line - 1, c = i - 1; c >= 1; --c, --l) if (s[c] != a(e.getLine(l))) return;
                                var f = e.getLine(l),
                                    h = f.length - u[0].length;
                                if (a(f.slice(h)) != s[0]) return;
                                return {
                                    from: r(l, h),
                                    to: o
                                }
                            }
                            if (!(n.line + (s.length - 1) > e.lastLine())) {
                                var f = e.getLine(n.line),
                                    h = f.length - u[0].length;
                                if (a(f.slice(h)) == s[0]) {
                                    for (var d = r(n.line, h), l = n.line + 1, c = 1; c < i; ++c, ++l) if (s[c] != a(e.getLine(l))) return;
                                    if (a(e.getLine(l).slice(0, u[i].length)) == s[i]) return {
                                        from: d,
                                        to: r(l, u[i].length)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            function n(e, t, n) {
                if (e.length == t.length) return n;
                for (var r = Math.min(n, e.length); ;) {
                    var i = e.slice(0, r).toLowerCase().length;
                    if (i < n) ++r;
                    else {
                        if (!(i > n)) return r; --r
                    }
                }
            }
            var r = e.Pos;
            t.prototype = {
                findNext: function () {
                    return this.find(!1)
                },
                findPrevious: function () {
                    return this.find(!0)
                },
                find: function (e) {
                    function t(e) {
                        var t = r(e, 0);
                        return n.pos = {
                            from: t,
                            to: t
                        },
                            n.atOccurrence = !1,
                            !1
                    }
                    for (var n = this,
                        i = this.doc.clipPos(e ? this.pos.from : this.pos.to); ;) {
                        if (this.pos = this.matches(e, i)) return this.atOccurrence = !0,
                            this.pos.match || !0;
                        if (e) {
                            if (!i.line) return t(0);
                            i = r(i.line - 1, this.doc.getLine(i.line - 1).length)
                        } else {
                            var o = this.doc.lineCount();
                            if (i.line == o - 1) return t(o);
                            i = r(i.line + 1, 0)
                        }
                    }
                },
                from: function () {
                    if (this.atOccurrence) return this.pos.from
                },
                to: function () {
                    if (this.atOccurrence) return this.pos.to
                },
                replace: function (t, n) {
                    if (this.atOccurrence) {
                        var i = e.splitLines(t);
                        this.doc.replaceRange(i, this.pos.from, this.pos.to, n),
                            this.pos.to = r(this.pos.from.line + i.length - 1, i[i.length - 1].length + (1 == i.length ? this.pos.from.ch : 0))
                    }
                }
            },
                e.defineExtension("getSearchCursor",
                    function (e, n, r) {
                        return new t(this.doc, e, n, r)
                    }),
                e.defineDocExtension("getSearchCursor",
                    function (e, n, r) {
                        return new t(this, e, n, r)
                    }),
                e.defineExtension("selectMatches",
                    function (t, n) {
                        for (var r = [], i = this.getSearchCursor(t, this.getCursor("from"), n); i.findNext() && !(e.cmpPos(i.to(), this.getCursor("to")) > 0);) r.push({
                            anchor: i.from(),
                            head: i.to()
                        });
                        r.length && this.setSelections(r, 0)
                    })
        })
    },
    function (e, t, n) {
        !
        function (e) {
            e(n(80), n(87), n(84))
        }(function (e) {
            "use strict";
            function t(e, t) {
                return "string" == typeof e ? e = new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), t ? "gi" : "g") : e.global || (e = new RegExp(e.source, e.ignoreCase ? "gi" : "g")),
                {
                    token: function (t) {
                        e.lastIndex = t.pos;
                        var n = e.exec(t.string);
                        return n && n.index == t.pos ? (t.pos += n[0].length || 1, "searching") : void (n ? t.pos = n.index : t.skipToEnd())
                    }
                }
            }
            function n() {
                this.posFrom = this.posTo = this.lastQuery = this.query = null,
                    this.overlay = null
            }
            function r(e) {
                return e.state.search || (e.state.search = new n)
            }
            function i(e) {
                return "string" == typeof e && e == e.toLowerCase()
            }
            function o(e, t, n) {
                return e.getSearchCursor(t, n, i(t))
            }
            function l(e, t, n, r, i) {
                e.openDialog(t, r, {
                    value: n,
                    selectValueOnOpen: !0,
                    closeOnEnter: !1,
                    onClose: function () {
                        p(e)
                    },
                    onKeyDown: i
                })
            }
            function a(e, t, n, r, i) {
                e.openDialog ? e.openDialog(t, i, {
                    value: r,
                    selectValueOnOpen: !0
                }) : i(prompt(n, r))
            }
            function s(e, t, n, r) {
                e.openConfirm ? e.openConfirm(t, r) : confirm(n) && r[0]()
            }
            function u(e) {
                return e.replace(/\\(.)/g,
                    function (e, t) {
                        return "n" == t ? "\n" : "r" == t ? "\r" : t
                    })
            }
            function c(e) {
                var t = e.match(/^\/(.*)\/([a-z]*)$/);
                if (t) try {
                    e = new RegExp(t[1], t[2].indexOf("i") == -1 ? "" : "i")
                } catch (e) { } else e = u(e);
                return ("string" == typeof e ? "" == e : e.test("")) && (e = /x^/),
                    e
            }
            function f(e, n, r) {
                n.queryText = r,
                    n.query = c(r),
                    e.removeOverlay(n.overlay, i(n.query)),
                    n.overlay = t(n.query, i(n.query)),
                    e.addOverlay(n.overlay),
                    e.showMatchesOnScrollbar && (n.annotate && (n.annotate.clear(), n.annotate = null), n.annotate = e.showMatchesOnScrollbar(n.query, i(n.query)))
            }
            function h(t, n, i, o) {
                var s = r(t);
                if (s.query) return d(t, n);
                var u = t.getSelection() || s.lastQuery;
                if (i && t.openDialog) {
                    var c = null,
                        h = function (n, r) {
                            e.e_stop(r),
                                n && (n != s.queryText && (f(t, s, n), s.posFrom = s.posTo = t.getCursor()), c && (c.style.opacity = 1), d(t, r.shiftKey,
                                    function (e, n) {
                                        var r;
                                        n.line < 3 && document.querySelector && (r = t.display.wrapper.querySelector(".CodeMirror-dialog")) && r.getBoundingClientRect().bottom - 4 > t.cursorCoords(n, "window").top && ((c = r).style.opacity = .4)
                                    }))
                        };
                    l(t, m, u, h,
                        function (n, i) {
                            var o = e.keyName(n),
                                l = e.keyMap[t.getOption("keyMap")][o];
                            l || (l = t.getOption("extraKeys")[o]),
                                "findNext" == l || "findPrev" == l || "findPersistentNext" == l || "findPersistentPrev" == l ? (e.e_stop(n), f(t, r(t), i), t.execCommand(l)) : "find" != l && "findPersistent" != l || (e.e_stop(n), h(i, n))
                        }),
                        o && u && (f(t, s, u), d(t, n))
                } else a(t, m, "Search for:", u,
                    function (e) {
                        e && !s.query && t.operation(function () {
                            f(t, s, e),
                                s.posFrom = s.posTo = t.getCursor(),
                                d(t, n)
                        })
                    })
            }
            function d(t, n, i) {
                t.operation(function () {
                    var l = r(t),
                        a = o(t, l.query, n ? l.posFrom : l.posTo); (a.find(n) || (a = o(t, l.query, n ? e.Pos(t.lastLine()) : e.Pos(t.firstLine(), 0)), a.find(n))) && (t.setSelection(a.from(), a.to()), t.scrollIntoView({
                            from: a.from(),
                            to: a.to()
                        },
                            20), l.posFrom = a.from(), l.posTo = a.to(), i && i(a.from(), a.to()))
                })
            }
            function p(e) {
                e.operation(function () {
                    var t = r(e);
                    t.lastQuery = t.query,
                        t.query && (t.query = t.queryText = null, e.removeOverlay(t.overlay), t.annotate && (t.annotate.clear(), t.annotate = null))
                })
            }
            function g(e, t, n) {
                e.operation(function () {
                    for (var r = o(e, t); r.findNext();) if ("string" != typeof t) {
                        var i = e.getRange(r.from(), r.to()).match(t);
                        r.replace(n.replace(/\$(\d)/g,
                            function (e, t) {
                                return i[t]
                            }))
                    } else r.replace(n)
                });
            }
            function v(e, t) {
                if (!e.getOption("readOnly")) {
                    var n = e.getSelection() || r(e).lastQuery,
                        i = t ? "Replace all:" : "Replace:";
                    a(e, i + y, i, n,
                        function (n) {
                            n && (n = c(n), a(e, b, "Replace with:", "",
                                function (r) {
                                    if (r = u(r), t) g(e, n, r);
                                    else {
                                        p(e);
                                        var i = o(e, n, e.getCursor("from")),
                                            l = function () {
                                                var t, u = i.from(); !(t = i.findNext()) && (i = o(e, n), !(t = i.findNext()) || u && i.from().line == u.line && i.from().ch == u.ch) || (e.setSelection(i.from(), i.to()), e.scrollIntoView({
                                                    from: i.from(),
                                                    to: i.to()
                                                }), s(e, w, "Replace?", [function () {
                                                    a(t)
                                                },
                                                    l,
                                                function () {
                                                    g(e, n, r)
                                                }]))
                                            },
                                            a = function (e) {
                                                i.replace("string" == typeof n ? r : r.replace(/\$(\d)/g,
                                                    function (t, n) {
                                                        return e[n]
                                                    })),
                                                    l()
                                            };
                                        l()
                                    }
                                }))
                        })
                }
            }
            var m = '查找: <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">（使用 /re/ 语法进行正则表达式搜索）</span>',
                y = ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">（使用 /re/ 语法进行正则表达式搜索）</span>',
                b = 'With: <input type="text" style="width: 10em" class="CodeMirror-search-field"/>',
                w = "替换? <button>是</button> <button>否</button> <button>全部</button> <button>停止</button>";
            e.commands.find = function (e) {
                p(e),
                    h(e)
            },
                e.commands.findPersistent = function (e) {
                    p(e),
                        h(e, !1, !0)
                },
                e.commands.findPersistentNext = function (e) {
                    h(e, !1, !0, !0)
                },
                e.commands.findPersistentPrev = function (e) {
                    h(e, !0, !0, !0)
                },
                e.commands.findNext = h,
                e.commands.findPrev = function (e) {
                    h(e, !0)
                },
                e.commands.clearSearch = p,
                e.commands.replace = v,
                e.commands.replaceAll = function (e) {
                    v(e, !0)
                }
        })
    },
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
                        return Le = e,
                            ke = n,
                            t
                    }
                    function l(e, n) {
                        var r = e.next();
                        if ('"' == r || "'" == r) return n.tokenize = a(r),
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
                        if ("/" == r) return e.eat("*") ? (n.tokenize = s, s(e, n)) : e.eat("/") ? (e.skipToEnd(), o("comment", "comment")) : t(e, n, 1) ? (i(e), e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/), o("regexp", "string-2")) : (e.eatWhile(We), o("operator", "operator", e.current()));
                        if ("`" == r) return n.tokenize = u,
                            u(e, n);
                        if ("#" == r) return e.skipToEnd(),
                            o("error", "error");
                        if (We.test(r)) return e.eatWhile(We),
                            o("operator", "operator", e.current());
                        if (Ae.test(r)) {
                            e.eatWhile(Ae);
                            var l = e.current(),
                                c = Ee.propertyIsEnumerable(l) && Ee[l];
                            return c && "." != n.lastType ? o(c.type, c.style, l) : o("variable", "variable", l)
                        }
                    }
                    function a(e) {
                        return function (t, n) {
                            var r, i = !1;
                            if (Te && "@" == t.peek() && t.match(He)) return n.tokenize = l,
                                o("jsonld-keyword", "meta");
                            for (; null != (r = t.next()) && (r != e || i);) i = !i && "\\" == r;
                            return i || (n.tokenize = l),
                                o("string", "string")
                        }
                    }
                    function s(e, t) {
                        for (var n, r = !1; n = e.next();) {
                            if ("/" == n && r) {
                                t.tokenize = l;
                                break
                            }
                            r = "*" == n
                        }
                        return o("comment", "comment")
                    }
                    function u(e, t) {
                        for (var n, r = !1; null != (n = e.next());) {
                            if (!r && ("`" == n || "$" == n && e.eat("{"))) {
                                t.tokenize = l;
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
                            if (Oe) {
                                var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
                                r && (n = r.index)
                            }
                            for (var i = 0,
                                o = !1,
                                l = n - 1; l >= 0; --l) {
                                var a = e.string.charAt(l),
                                    s = De.indexOf(a);
                                if (s >= 0 && s < 3) {
                                    if (!i) {
                                        ++l;
                                        break
                                    }
                                    if (0 == --i) {
                                        "(" == a && (o = !0);
                                        break
                                    }
                                } else if (s >= 3 && s < 6) ++i;
                                else if (Ae.test(a)) o = !0;
                                else {
                                    if (/["'\/]/.test(a)) return;
                                    if (o && !i) {
                                        ++l;
                                        break
                                    }
                                }
                            }
                            o && !i && (t.fatArrowAt = l)
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
                    function h(e, t) {
                        for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
                        for (var r = e.context; r; r = r.prev) for (var n = r.vars; n; n = n.next) if (n.name == t) return !0
                    }
                    function d(e, t, n, r, i) {
                        var o = e.cc;
                        for (Fe.state = e, Fe.stream = i, Fe.marked = null, Fe.cc = o, Fe.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ;) {
                            var l = o.length ? o.pop() : Ne ? L : C;
                            if (l(n, r)) {
                                for (; o.length && o[o.length - 1].lex;) o.pop()();
                                return Fe.marked ? Fe.marked : "variable" == n && h(e, r) ? "variable-2" : t
                            }
                        }
                    }
                    function p() {
                        for (var e = arguments.length - 1; e >= 0; e--) Fe.cc.push(arguments[e])
                    }
                    function g() {
                        return p.apply(null, arguments),
                            !0
                    }
                    function v(e) {
                        function t(t) {
                            for (var n = t; n; n = n.next) if (n.name == e) return !0;
                            return !1
                        }
                        var n = Fe.state;
                        if (Fe.marked = "def", n.context) {
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
                    function m() {
                        Fe.state.context = {
                            prev: Fe.state.context,
                            vars: Fe.state.localVars
                        },
                            Fe.state.localVars = ze
                    }
                    function y() {
                        Fe.state.localVars = Fe.state.context.vars,
                            Fe.state.context = Fe.state.context.prev
                    }
                    function b(e, t) {
                        var n = function () {
                            var n = Fe.state,
                                r = n.indented;
                            if ("stat" == n.lexical.type) r = n.lexical.indented;
                            else for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) r = i.indented;
                            n.lexical = new f(r, Fe.stream.column(), e, null, n.lexical, t)
                        };
                        return n.lex = !0,
                            n
                    }
                    function w() {
                        var e = Fe.state;
                        e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
                    }
                    function x(e) {
                        function t(n) {
                            return n == e ? g() : ";" == e ? p() : g(t)
                        }
                        return t
                    }
                    function C(e, t) {
                        return "var" == e ? g(b("vardef", t.length), J, x(";"), w) : "keyword a" == e ? g(b("form"), S, C, w) : "keyword b" == e ? g(b("form"), C, w) : "{" == e ? g(b("}"), U, w) : ";" == e ? g() : "if" == e ? ("else" == Fe.state.lexical.info && Fe.state.cc[Fe.state.cc.length - 1] == w && Fe.state.cc.pop()(), g(b("form"), S, C, w, re)) : "function" == e ? g(ue) : "for" == e ? g(b("form"), ie, C, w) : "variable" == e ? g(b("stat"), I) : "switch" == e ? g(b("form"), S, b("}", "switch"), x("{"), U, w, w) : "case" == e ? g(L, x(":")) : "default" == e ? g(x(":")) : "catch" == e ? g(b("form"), m, x("("), ce, x(")"), C, w, y) : "class" == e ? g(b("form"), he, w) : "export" == e ? g(b("stat"), ve, w) : "import" == e ? g(b("stat"), me, w) : "module" == e ? g(b("form"), Q, b("}"), x("{"), U, w, w) : "type" == e ? g(q, x("operator"), q, x(";")) : "async" == e ? g(C) : p(b("stat"), L, x(";"), w)
                    }
                    function L(e) {
                        return M(e, !1)
                    }
                    function k(e) {
                        return M(e, !0)
                    }
                    function S(e) {
                        return "(" != e ? p() : g(b(")"), L, x(")"), w)
                    }
                    function M(e, t) {
                        if (Fe.state.fatArrowAt == Fe.stream.start) {
                            var n = t ? D : H;
                            if ("(" == e) return g(m, b(")"), V(Q, ")"), w, x("=>"), n, y);
                            if ("variable" == e) return p(m, Q, x("=>"), n, y)
                        }
                        var r = t ? A : O;
                        return Pe.hasOwnProperty(e) ? g(r) : "function" == e ? g(ue, r) : "class" == e ? g(b("form"), fe, w) : "keyword c" == e || "async" == e ? g(t ? N : T) : "(" == e ? g(b(")"), T, x(")"), w, r) : "operator" == e || "spread" == e ? g(t ? k : L) : "[" == e ? g(b("]"), xe, w, r) : "{" == e ? G(B, "}", null, r) : "quasi" == e ? p(E, r) : "new" == e ? g(P(t)) : g()
                    }
                    function T(e) {
                        return e.match(/[;\}\)\],]/) ? p() : p(L)
                    }
                    function N(e) {
                        return e.match(/[;\}\)\],]/) ? p() : p(k)
                    }
                    function O(e, t) {
                        return "," == e ? g(L) : A(e, t, !1)
                    }
                    function A(e, t, n) {
                        var r = 0 == n ? O : A,
                            i = 0 == n ? L : k;
                        return "=>" == e ? g(m, n ? D : H, y) : "operator" == e ? /\+\+|--/.test(t) ? g(r) : "?" == t ? g(L, x(":"), i) : g(i) : "quasi" == e ? p(E, r) : ";" != e ? "(" == e ? G(k, ")", "call", r) : "." == e ? g(R, r) : "[" == e ? g(b("]"), T, x("]"), w, r) : void 0 : void 0
                    }
                    function E(e, t) {
                        return "quasi" != e ? p() : "${" != t.slice(t.length - 2) ? g(E) : g(L, W)
                    }
                    function W(e) {
                        if ("}" == e) return Fe.marked = "string-2",
                            Fe.state.tokenize = u,
                            g(E)
                    }
                    function H(e) {
                        return c(Fe.stream, Fe.state),
                            p("{" == e ? C : L)
                    }
                    function D(e) {
                        return c(Fe.stream, Fe.state),
                            p("{" == e ? C : k)
                    }
                    function P(e) {
                        return function (t) {
                            return "." == t ? g(e ? z : F) : p(e ? k : L)
                        }
                    }
                    function F(e, t) {
                        if ("target" == t) return Fe.marked = "keyword",
                            g(O)
                    }
                    function z(e, t) {
                        if ("target" == t) return Fe.marked = "keyword",
                            g(A)
                    }
                    function I(e) {
                        return ":" == e ? g(w, C) : p(O, x(";"), w)
                    }
                    function R(e) {
                        if ("variable" == e) return Fe.marked = "property",
                            g()
                    }
                    function B(e, t) {
                        return "async" == e ? (Fe.marked = "property", g(B)) : "variable" == e || "keyword" == Fe.style ? (Fe.marked = "property", g("get" == t || "set" == t ? _ : j)) : "number" == e || "string" == e ? (Fe.marked = Te ? "property" : Fe.style + " property", g(j)) : "jsonld-keyword" == e ? g(j) : "modifier" == e ? g(B) : "[" == e ? g(L, x("]"), j) : "spread" == e ? g(L) : ":" == e ? p(j) : void 0
                    }
                    function _(e) {
                        return "variable" != e ? p(j) : (Fe.marked = "property", g(ue))
                    }
                    function j(e) {
                        return ":" == e ? g(k) : "(" == e ? p(ue) : void 0
                    }
                    function V(e, t) {
                        function n(r, i) {
                            if ("," == r) {
                                var o = Fe.state.lexical;
                                return "call" == o.info && (o.pos = (o.pos || 0) + 1),
                                    g(function (n, r) {
                                        return n == t || r == t ? p() : p(e)
                                    },
                                        n)
                            }
                            return r == t || i == t ? g() : g(x(t))
                        }
                        return function (r, i) {
                            return r == t || i == t ? g() : p(e, n)
                        }
                    }
                    function G(e, t, n) {
                        for (var r = 3; r < arguments.length; r++) Fe.cc.push(arguments[r]);
                        return g(b(t, n), V(e, t), w)
                    }
                    function U(e) {
                        return "}" == e ? g() : p(C, U)
                    }
                    function K(e, t) {
                        if (Oe) {
                            if (":" == e) return g(q);
                            if ("?" == t) return g(K)
                        }
                    }
                    function q(e) {
                        return "variable" == e ? (Fe.marked = "variable-3", g(Z)) : "{" == e ? g(V(X, "}")) : "(" == e ? g(V(Y, ")"), $) : void 0
                    }
                    function $(e) {
                        if ("=>" == e) return g(q)
                    }
                    function X(e) {
                        return "variable" == e || "keyword" == Fe.style ? (Fe.marked = "property", g(X)) : ":" == e ? g(q) : void 0
                    }
                    function Y(e) {
                        return "variable" == e ? g(Y) : ":" == e ? g(q) : void 0
                    }
                    function Z(e, t) {
                        return "<" == t ? g(V(q, ">"), Z) : "[" == e ? g(x("]"), Z) : void 0
                    }
                    function J() {
                        return p(Q, K, te, ne)
                    }
                    function Q(e, t) {
                        return "modifier" == e ? g(Q) : "variable" == e ? (v(t), g()) : "spread" == e ? g(Q) : "[" == e ? G(Q, "]") : "{" == e ? G(ee, "}") : void 0
                    }
                    function ee(e, t) {
                        return "variable" != e || Fe.stream.match(/^\s*:/, !1) ? ("variable" == e && (Fe.marked = "property"), "spread" == e ? g(Q) : "}" == e ? p() : g(x(":"), Q, te)) : (v(t), g(te))
                    }
                    function te(e, t) {
                        if ("=" == t) return g(k)
                    }
                    function ne(e) {
                        if ("," == e) return g(J)
                    }
                    function re(e, t) {
                        if ("keyword b" == e && "else" == t) return g(b("form", "else"), C, w)
                    }
                    function ie(e) {
                        if ("(" == e) return g(b(")"), oe, x(")"), w)
                    }
                    function oe(e) {
                        return "var" == e ? g(J, x(";"), ae) : ";" == e ? g(ae) : "variable" == e ? g(le) : p(L, x(";"), ae)
                    }
                    function le(e, t) {
                        return "in" == t || "of" == t ? (Fe.marked = "keyword", g(L)) : g(O, ae)
                    }
                    function ae(e, t) {
                        return ";" == e ? g(se) : "in" == t || "of" == t ? (Fe.marked = "keyword", g(L)) : p(L, x(";"), se)
                    }
                    function se(e) {
                        ")" != e && g(L)
                    }
                    function ue(e, t) {
                        return "*" == t ? (Fe.marked = "keyword", g(ue)) : "variable" == e ? (v(t), g(ue)) : "(" == e ? g(m, b(")"), V(ce, ")"), w, K, C, y) : void 0
                    }
                    function ce(e) {
                        return "spread" == e ? g(ce) : p(Q, K, te)
                    }
                    function fe(e, t) {
                        return "variable" == e ? he(e, t) : de(e, t)
                    }
                    function he(e, t) {
                        if ("variable" == e) return v(t),
                            g(de)
                    }
                    function de(e, t) {
                        return "extends" == t || "implements" == t ? g(Oe ? q : L, de) : "{" == e ? g(b("}"), pe, w) : void 0
                    }
                    function pe(e, t) {
                        return "variable" == e || "keyword" == Fe.style ? ("static" == t || "get" == t || "set" == t || Oe && ("public" == t || "private" == t || "protected" == t || "readonly" == t || "abstract" == t)) && Fe.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (Fe.marked = "keyword", g(pe)) : (Fe.marked = "property", g(Oe ? ge : ue, pe)) : "*" == t ? (Fe.marked = "keyword", g(pe)) : ";" == e ? g(pe) : "}" == e ? g() : void 0
                    }
                    function ge(e, t) {
                        return "?" == t ? g(ge) : ":" == e ? g(q, te) : p(ue)
                    }
                    function ve(e, t) {
                        return "*" == t ? (Fe.marked = "keyword", g(we, x(";"))) : "default" == t ? (Fe.marked = "keyword", g(L, x(";"))) : p(C)
                    }
                    function me(e) {
                        return "string" == e ? g() : p(ye, we)
                    }
                    function ye(e, t) {
                        return "{" == e ? G(ye, "}") : ("variable" == e && v(t), "*" == t && (Fe.marked = "keyword"), g(be))
                    }
                    function be(e, t) {
                        if ("as" == t) return Fe.marked = "keyword",
                            g(ye)
                    }
                    function we(e, t) {
                        if ("from" == t) return Fe.marked = "keyword",
                            g(L)
                    }
                    function xe(e) {
                        return "]" == e ? g() : p(V(k, "]"))
                    }
                    function Ce(e, t) {
                        return "operator" == e.lastType || "," == e.lastType || We.test(t.charAt(0)) || /[,.]/.test(t.charAt(0))
                    }
                    var Le, ke, Se = n.indentUnit,
                        Me = r.statementIndent,
                        Te = r.jsonld,
                        Ne = r.json || Te,
                        Oe = r.typescript,
                        Ae = r.wordCharacters || /[\w$\xa1-\uffff]/,
                        Ee = function () {
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
                                l = {
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
                            if (Oe) {
                                var a = {
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
                                        string: a,
                                        number: a,
                                        boolean: a,
                                        any: a
                                    };
                                for (var u in s) l[u] = s[u]
                            }
                            return l
                        }(),
                        We = /[+\-*&%=<>!?|~^]/,
                        He = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
                        De = "([{}])",
                        Pe = {
                            atom: !0,
                            number: !0,
                            variable: !0,
                            string: !0,
                            regexp: !0,
                            this: !0,
                            "jsonld-keyword": !0
                        },
                        Fe = {
                            state: null,
                            column: null,
                            marked: null,
                            cc: null
                        },
                        ze = {
                            name: "this",
                            next: {
                                name: "arguments"
                            }
                        };
                    return w.lex = !0,
                    {
                        startState: function (e) {
                            var t = {
                                tokenize: l,
                                lastType: "sof",
                                cc: [],
                                lexical: new f((e || 0) - Se, 0, "block", !1),
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
                            return "comment" == Le ? n : (t.lastType = "operator" != Le || "++" != ke && "--" != ke ? Le : "incdec", d(t, n, Le, ke, e))
                        },
                        indent: function (t, n) {
                            if (t.tokenize == s) return e.Pass;
                            if (t.tokenize != l) return 0;
                            var i, o = n && n.charAt(0),
                                a = t.lexical;
                            if (!/^\s*else\b/.test(n)) for (var u = t.cc.length - 1; u >= 0; --u) {
                                var c = t.cc[u];
                                if (c == w) a = a.prev;
                                else if (c != re) break
                            }
                            for (; ("stat" == a.type || "form" == a.type) && ("}" == o || (i = t.cc[t.cc.length - 1]) && (i == O || i == A) && !/^[,\.=+\-*:?[\(]/.test(n));) a = a.prev;
                            Me && ")" == a.type && "stat" == a.prev.type && (a = a.prev);
                            var f = a.type,
                                h = o == f;
                            return "vardef" == f ? a.indented + ("operator" == t.lastType || "," == t.lastType ? a.info + 1 : 0) : "form" == f && "{" == o ? a.indented : "form" == f ? a.indented + Se : "stat" == f ? a.indented + (Ce(t, n) ? Me || Se : 0) : "switch" != a.info || h || 0 == r.doubleIndentSwitch ? a.align ? a.column + (h ? 0 : 1) : a.indented + (h ? 0 : Se) : a.indented + (/^(?:case|default)\b/.test(n) ? Se : 2 * Se)
                        },
                        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                        blockCommentStart: Ne ? null : "/*",
                        blockCommentEnd: Ne ? null : "*/",
                        lineComment: Ne ? null : "//",
                        fold: "brace",
                        closeBrackets: "()[]{}''\"\"``",
                        helperType: Ne ? "json" : "javascript",
                        jsonldMode: Te,
                        jsonMode: Ne,
                        expressionAllowed: t,
                        skipExpression: function (e) {
                            var t = e.cc[e.cc.length - 1];
                            t != L && t != k || e.cc.pop()
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
    function (e, t) {
        function n() {
            return "(?:[/?#]\\S*)?"
        }
        function r() {
            return "(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:\\[[a-f0-9.:]+\\])|(?:[a-z0-9\\u00a1-\\uffff.-]+))(?::\\d{2,5})?" + n()
        }
        e.exports = new RegExp("^(" + r() + "|" + n() + ")$", "i")
    },
    function (e, t) {
        function n(e) {
            var t = e + "";
            return 1 === t.length ? "0" + t : t
        }
        function r() {
            var e = new Date,
                t = e.getMonth() + 1,
                r = e.getDate(),
                i = e.getHours(),
                o = e.getMinutes(),
                l = e.getSeconds();
            return e.getFullYear() + n(t) + n(r) + n(i) + n(o) + n(l)
        }
        e.exports = r
    },
    function (e, t) {
        function n(e, t) {
            if (console.info("[JSONViewer] 你的 json 已经存储至 'window.json', 可直接使用！"), t) window.json = JSON.parse(e);
            else {
                var n = document.createElement("script");
                n.innerHTML = "window.json = " + e + ";",
                    document.head.appendChild(n)
            }
        }
        e.exports = n
    },
    function (e, t, n) {
        function r(e, t, n) {
            var r = document.createElement("div");
            r.className = "extras",
                t.addons.autoHighlight || (r.className += " auto-highlight-off");
            var s = document.createElement("a");
            s.className = "json_viewer icon gear",
                s.href = i.extension.getURL("/pages/options.html"),
                s.target = "_blank",
                s.title = "选项",
                s.innerHTML = o;
            var u = document.createElement("a");
            u.className = "json_viewer icon raw",
                u.href = "#",
                u.title = "转换原式JSON",
                u.innerHTML = l,
                u.onclick = function (t) {
                    t.preventDefault();
                    document.getElementsByClassName("CodeMirror")[0];
                    e.hidden ? (n.hide(), e.hidden = !1, r.className += " auto-highlight-off") : (n.show(), e.hidden = !0, r.className = r.className.replace(/\s+auto-highlight-off/, ""))
                };
            var c = document.createElement("a");
            c.className = "json_viewer icon unfold",
                c.href = "#",
                c.title = "折叠/展开全部",
                c.innerHTML = a,
                c.onclick = function (t) {
                    t.preventDefault();
                    var r = e.getAttribute("data-folded");
                    "true" === r || r === !0 ? (n.unfoldAll(), e.setAttribute("data-folded", !1)) : (n.fold(), e.setAttribute("data-folded", !0))
                },
                r.appendChild(s),
                r.appendChild(u),
                e.setAttribute("data-folded", t.addons.alwaysFold || t.addons.awaysFold),
                r.appendChild(c),
                document.body.appendChild(r)
        }
        var i = n(8),
            o = n(94),
            l = n(95),
            a = n(96);
        e.exports = r
    },
    function (e, t) {
        e.exports = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="128pt" height="128pt" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M588 1069 c-10 -5 -18 -19 -18 -29 0 -28 -39 -65 -89 -84 -39 -15 -46 -15 -67 -1 -33 21 -67 19 -91 -7 -33 -37 -34 -45 -17 -81 28 -59 -10 -167 -59 -167 -35 0 -47 -19 -47 -72 0 -38 4 -50 18 -54 64 -21 71 -27 93 -80 21 -54 21 -56 3 -89 -21 -40 -11 -73 31 -101 25 -16 28 -16 55 -1 38 23 67 21 119 -5 33 -17 47 -32 55 -58 11 -34 12 -35 65 -35 52 0 55 1 65 32 14 40 29 54 85 78 41 18 45 18 73 2 41 -24 60 -21 91 11 32 33 32 38 11 82 -14 27 -15 38 -4 72 13 47 51 88 78 88 30 0 44 24 40 72 -3 37 -7 45 -33 56 -55 24 -60 29 -82 83 -19 48 -20 56 -7 81 21 40 17 61 -14 91 -32 30 -48 33 -76 12 -27 -20 -48 -19 -107 6 -37 16 -51 28 -55 48 -4 14 -14 34 -22 44 -17 19 -67 22 -94 6z m108 -288 c155 -71 114 -301 -54 -301 -87 0 -150 53 -159 135 -10 82 28 143 104 170 50 18 60 18 109 -4z"/></g></svg>'
    },
    function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve"><g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M103.199,39.9907 L98.8771,35.6692 L81.5177,18.3098 L77.1115,13.9036 L77.0491,13.8412 L77.0491,13.9036 L35.6369,13.9036 C29.6178,13.9036 24.739,18.7835 24.739,24.8015 L24.739,103.261 C24.739,109.28 29.6178,114.159 35.6369,114.159 L92.3007,114.159 C98.3198,114.159 103.199,109.28 103.199,103.261 L103.199,101.172 L98.8771,101.172 L98.8771,103.292 C98.8771,106.904 95.95,109.831 92.3386,109.831 L35.6257,109.831 C32.0143,109.831 29.0872,106.902 29.0872,103.292 L29.0872,24.8483 C29.0872,21.2368 32.0143,18.3098 35.6257,18.3098 L77.0491,18.3098 L77.0491,29.1552 C77.0491,35.1743 81.9279,40.0531 87.9469,40.0531 L98.8771,40.0531 L98.8771,61.9078 L103.199,61.9078 L103.199,40.0531 L103.261,40.0531 L103.199,39.9907 M77.0379,96.7905 L77.0379,66.2783 L72.6797,66.2783 L72.6797,66.3452 L68.3203,66.3452 L68.3203,66.2783 L63.961,66.2783 L63.961,96.7905 L68.3203,96.7905 L68.3203,83.6455 L72.6797,83.6455 L72.6797,96.7916 L77.0379,96.7916 L77.0379,96.7905 M68.3203,79.4222 L68.3203,70.5686 L72.6797,70.5686 L72.6797,79.4222 L68.3203,79.4222 M46.5247,66.2761 L46.5247,96.7927 L50.884,96.7927 L50.884,83.6478 L55.2434,83.6478 L55.2434,79.4244 L50.884,79.4244 L50.884,70.5708 L55.2434,70.5708 L55.2434,66.3452 L50.884,66.3452 L50.884,66.2772 L46.5247,66.2772 L46.5247,66.2761 M55.2434,79.3531 L59.6027,79.3531 L59.6027,70.6355 L55.2434,70.6355 L55.2434,79.3531 M59.6027,83.7146 L55.2434,83.7146 L55.2434,96.7916 L59.6027,96.7916 L59.6027,83.7146 M98.8347,96.7225 L98.8347,92.4322 L103.194,92.4322 L103.194,66.275 L98.8347,66.275 L98.8347,92.362 L94.4754,92.362 L94.4754,66.275 L90.116,66.275 L90.116,92.362 L85.7578,92.362 L85.7578,66.275 L81.3984,66.275 L81.3984,92.4311 L85.7366,92.4311 L85.7366,96.7214 L90.116,96.7214 L90.116,92.4311 L94.4553,92.4311 L94.4553,96.7214 L98.8347,96.7214 L98.8347,96.7225 Z"/></g></g>'
    },
    function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve"><g fill-rule="evenodd" stroke="none" stroke-width="1"><g transform="translate(-511.000000, -465.000000)"><g transform="translate(511.500000, 465.000000)"><path d="M66.7414,31.6694 L83.4281,48.3562 L90.7286,41.0557 L66.7414,17.0685 L42.7542,41.0557 L50.0546,48.3562 L66.7414,31.6694 M66.7414,96.3306 L50.0546,79.6438 L42.7542,86.9443 L66.7414,110.931 L90.7286,86.9443 L83.4281,79.6438 L66.7414,96.3306 Z"/></g></g></g></svg>'
    },
    function (e, t, n) {
        function r(e, t, n) {
            var r = document.createElement("div");
            r.className = "json-viewer-alert",
                r.appendChild(n);
            var o = document.createElement("a");
            o.className = "close",
                o.href = "#",
                o.title = "Close",
                o.innerHTML = "×",
                o.onclick = function (e) {
                    e.preventDefault(),
                        r.parentNode.removeChild(r)
                },
                r.appendChild(o),
                i({
                    path: "assets/viewer-alert.css",
                    checkClass: "json-viewer-alert"
                }).then(function () {
                    document.body.appendChild(r)
                }).
                    catch(function (e) {
                        r.hidden = !1
                    })
        }
        var i = n(98);
        e.exports = r
    },
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
            var a = null,
                s = 0;
            return new i(function (e, n) {
                function i() {
                    var o = window.getComputedStyle(r, ":before").getPropertyValue("content");
                    return s > l ? n(Error("fail to load css: '" + t + "', content loaded: " + o)) : void (/loaded/.test(o) ? (clearTimeout(a), document.body.removeChild(r), e()) : (s++, a = setTimeout(i, 1)))
                }
                i()
            })
        }
        var i = n(69),
            o = n(8),
            l = 20;
        e.exports = r
    },
    function (e, t, n) {
        function r() {
            return new i(function (e, t) {
                o.runtime.sendMessage({
                    action: "GET_OPTIONS"
                },
                    function (n) {
                        var r = n.err,
                            i = n.value;
                        r ? t("getOptions: " + r.message) : e(i)
                    })
            })
        }
        var i = n(69),
            o = n(8);
        e.exports = r
    },
    function (e, t, n) {
        function r(e) {
            var t = e.theme,
                n = [];
            return n.push(o({
                path: "assets/viewer.css",
                checkClass: "json-viewer-css-check"
            })),
                t && "default" !== t && n.push(o({
                    path: "themes/" + l(t) + "/" + t + ".css",
                    checkClass: "theme-" + t + "-css-check"
                })),
                i.all(n).then(function () {
                    var t = document.createElement("style");
                    t.rel = "stylesheet",
                        t.type = "text/css",
                        t.innerHTML = e.style,
                        document.head.appendChild(t)
                })
        }
        var i = n(69),
            o = n(98),
            l = n(101);
        e.exports = r
    },
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
    function (e, t, n) {
        function r(e) {
            l().then(function (t) {
                return a(t).then(function () {
                    var n = i({},
                        t);
                    n.structure.readOnly = !1;
                    var r = new o("", n);
                    r.highlight(),
                        s(e, t, r),
                        u(function () {
                            var e = r.editor.getValue();
                            r.editor.setValue(c(e)),
                                f.isJSON(e) && h(e, !0)
                        })
                })
            }).
                catch(function (e) {
                    console.error("[JSONViewer] error: " + e.message, e)
                })
        }
        var i = n(11),
            o = n(79),
            l = n(99),
            a = n(100),
            s = n(93),
            u = n(103),
            c = n(78),
            f = n(65),
            h = n(92);
        e.exports = r
    },
    function (e, t, n) {
        function r(e) {
            var t = document.getElementsByClassName("extras")[0],
                n = document.createElement("a");
            n.className = "json_viewer icon format",
                n.href = "#",
                n.title = "Format (ctrl+shift+F / command+shift+F)",
                n.innerHTML = i,
                n.onclick = function (t) {
                    t.preventDefault(),
                        e()
                },
                o.bindGlobal(["command+shift+f", "ctrl+shift+f"],
                    function () {
                        return e(),
                            !1
                    }),
                t.appendChild(n)
        }
        var i = n(104),
            o = n(105);
        n(106),
            e.exports = r
    },
    function (e, t) {
        e.exports = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="128pt" height="128pt" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet"><g><g><path id="shapePath1" d="M76.7995,52.3665 C76.7995,55.3545 74.3772,57.7768 71.3891,57.7768 C68.4011,57.7768 65.9788,55.3545 65.9788,52.3665 C65.9788,49.3784 68.4011,46.9561 71.3891,46.9561 C74.3772,46.9561 76.7995,49.3784 76.7995,52.3665 Z"/></g><g><path id="shapePath2" d="M82.4998,49.9039 L77.7731,49.9039 C78.2253,49.9039 78.4867,51.8015 78.4867,52.9089 C78.4867,54.0162 78.2253,54.4113 77.7731,55.9138 L82.4998,55.9138 C84.2036,55.9138 85.5844,54.6126 85.5844,52.9089 C85.5844,51.2051 84.2036,49.9039 82.4998,49.9039 Z"/></g><g><path id="shapePath3" d="M64.2915,52.9089 C64.2915,51.8015 64.5514,49.9039 65.0036,49.9039 L45.4972,49.9039 C43.7949,49.9039 42.4141,51.2051 42.4141,52.9089 C42.4141,54.6126 43.7949,55.9138 45.4972,55.9138 L65.0036,55.9138 C64.5514,54.4113 64.2915,54.0162 64.2915,52.9089 Z"/></g><g><path id="shapePath4" d="M59.5302,67.1672 C59.5302,70.1553 57.1079,72.5776 54.1198,72.5776 C51.1317,72.5776 48.7094,70.1553 48.7094,67.1672 C48.7094,64.1792 51.1317,61.7569 54.1198,61.7569 C57.1079,61.7569 59.5302,64.1792 59.5302,67.1672 Z"/></g><g><path id="shapePath5" d="M47.0237,67.1823 C47.0237,66.0749 47.2836,64.9286 47.7358,63.4261 L45.4972,63.4261 C43.7949,63.4261 42.4141,65.4785 42.4141,67.1823 C42.4141,68.886 43.7949,70.9384 45.4972,70.9384 L47.7358,70.9384 C47.2836,69.4359 47.0237,68.2881 47.0237,67.1823 Z"/></g><g><path id="shapePath6" d="M82.4998,63.4261 L60.5038,63.4261 C60.9545,64.9286 61.2159,66.0749 61.2159,67.1823 C61.2159,68.2881 60.9545,69.4359 60.5038,70.9384 L82.4998,70.9384 C84.2036,70.9384 85.5844,68.886 85.5844,67.1823 C85.5844,65.4785 84.2036,63.4261 82.4998,63.4261 Z"/></g><g><path id="shapePath7" d="M81.7321,81.9695 C81.7321,84.9575 79.3098,87.3798 76.3217,87.3798 C73.3336,87.3798 70.9113,84.9575 70.9113,81.9695 C70.9113,78.9814 73.3336,76.5591 76.3217,76.5591 C79.3098,76.5591 81.7321,78.9814 81.7321,81.9695 Z"/></g><g><path id="shapePath8" d="M69.2256,81.4556 C69.2256,80.3498 69.4855,79.9532 69.9392,78.4507 L45.4972,78.4507 C43.7949,78.4507 42.4141,79.7533 42.4141,81.4556 C42.4141,83.1609 43.7949,84.4605 45.4972,84.4605 L69.9392,84.4605 C69.4855,84.4605 69.2256,82.5614 69.2256,81.4556 Z"/></g><g><path id="shapePath9" d="M82.7177,78.9075 C83.1624,79.836 83.4193,80.8712 83.4193,81.9695 C83.4193,83.0678 83.1624,84.103 82.7177,85.0315 C84.3163,84.9188 85.5844,83.5981 85.5844,81.9695 C85.5844,80.3408 84.3163,79.0201 82.7177,78.9075 Z"/></g><g><path id="shapePath10" d="M20.4617,67.1852 C22.0648,68.1799 23.3193,69.2917 24.2223,70.5237 C25.1253,71.7542 25.7578,73.3243 26.1199,75.2339 C26.4805,77.1436 26.6623,79.5881 26.6623,82.572 C26.6623,84.8076 26.7134,86.4573 26.8156,87.5196 C26.9162,88.5803 27.1206,89.3886 27.4256,89.9415 C27.7306,90.4944 28.0972,90.8565 28.5269,91.0263 C28.9551,91.1961 29.6898,91.3599 30.7295,91.5176 C31.5874,91.6303 32.2996,92.0495 32.8645,92.7722 C33.4294,93.4934 33.7119,94.4429 33.7119,95.6193 C33.7119,98.3523 32.0517,99.7196 28.7312,99.7196 C26.6743,99.7196 24.8398,99.2914 23.2232,98.4335 C21.608,97.574 20.3595,96.3601 19.479,94.79 C18.5986,93.2199 18.1464,91.4185 18.1238,89.3841 C18.0562,85.9495 17.9886,83.194 17.921,81.1161 C17.8534,79.0367 17.7512,77.6935 17.616,77.082 C17.2764,75.569 16.7731,74.4271 16.1075,73.6594 C15.4404,72.8916 14.5705,72.1749 13.4977,71.5078 C12.425,70.8422 11.6617,70.2428 11.211,69.7124 C10.7603,69.182 10.5334,68.3391 10.5334,67.1868 C10.5334,65.516 11.1885,64.2615 12.5001,63.4246 C14.1273,62.4089 15.2842,61.545 15.9738,60.8328 C16.6634,60.1207 17.1487,59.2057 17.4312,58.0878 C17.7137,56.97 17.8759,55.75 17.9225,54.4279 C17.9676,53.1057 18.0352,49.9265 18.1253,44.8872 C18.1929,41.7696 19.1816,39.28 21.0912,37.4155 C23.0008,35.5509 25.5475,34.6194 28.7327,34.6194 C32.0532,34.6194 33.7134,35.9641 33.7134,38.652 C33.7134,39.872 33.4354,40.8321 32.8825,41.5322 C32.3281,42.2324 31.6114,42.6395 30.731,42.7522 C29.4208,42.934 28.5058,43.2045 27.986,43.5666 C27.4661,43.9286 27.1281,44.6288 26.9703,45.667 C26.8126,46.7067 26.7104,48.717 26.6653,51.6994 C26.6202,54.6142 26.446,57.0031 26.1395,58.8676 C25.8345,60.7307 25.235,62.3188 24.344,63.6289 C23.4486,64.9376 22.1549,66.123 20.4617,67.1852 Z"/></g><g><path id="shapePath11" d="M103.656,63.6274 C102.764,62.3173 102.166,60.7292 101.861,58.8661 C101.556,57.0016 101.383,54.6126 101.335,51.6979 C101.291,48.7155 101.187,46.7052 101.03,45.6655 C100.873,44.6273 100.534,43.9256 100.014,43.565 C99.4942,43.2045 98.5792,42.9325 97.269,42.7507 C96.3871,42.638 95.6719,42.2309 95.116,41.5307 C94.5646,40.8306 94.2851,39.8705 94.2851,38.6505 C94.2851,35.9626 95.9454,34.6179 99.2673,34.6179 C102.451,34.6179 104.999,35.5494 106.909,37.414 C108.818,39.2785 109.806,41.7681 109.875,44.8857 C109.965,49.925 110.031,53.1042 110.079,54.4263 C110.123,55.747 110.288,56.967 110.569,58.0863 C110.851,59.2057 111.338,60.1207 112.028,60.8313 C112.716,61.5435 113.874,62.4074 115.5,63.4231 C116.812,64.2599 117.467,65.5145 117.467,67.1852 C117.467,68.3376 117.241,69.179 116.789,69.7109 C116.337,70.2428 115.575,70.8407 114.504,71.5063 C113.43,72.1719 112.561,72.8901 111.894,73.6579 C111.228,74.4271 110.725,75.5675 110.386,77.0805 C110.25,77.6905 110.15,79.0352 110.082,81.1146 C110.013,83.1925 109.945,85.948 109.878,89.3826 C109.855,91.417 109.404,93.2184 108.522,94.7885 C107.641,96.3585 106.393,97.5725 104.778,98.432 C103.163,99.2899 101.327,99.718 99.2718,99.718 C95.9499,99.718 94.2896,98.3523 94.2896,95.6178 C94.2896,94.4429 94.5721,93.4934 95.137,92.7707 C95.702,92.048 96.4141,91.6288 97.272,91.5161 C98.3117,91.3584 99.0464,91.1946 99.4746,91.0248 C99.9043,90.8565 100.271,90.4929 100.576,89.94 C100.879,89.3871 101.085,88.5788 101.184,87.5181 C101.287,86.4558 101.338,84.8061 101.338,82.5705 C101.338,79.5881 101.519,77.1436 101.88,75.2324 C102.241,73.3228 102.875,71.7542 103.779,70.5222 C104.684,69.2902 105.937,68.1784 107.54,67.1837 C105.842,66.123 104.548,64.9376 103.656,63.6274 Z"/></g></g></svg>'
    },
    function (e, t, n) {
        var r; !
            function (i, o, l) {
                function a(e, t, n) {
                    return e.addEventListener ? void e.addEventListener(t, n, !1) : void e.attachEvent("on" + t, n)
                }
                function s(e) {
                    if ("keypress" == e.type) {
                        var t = String.fromCharCode(e.which);
                        return e.shiftKey || (t = t.toLowerCase()),
                            t
                    }
                    return x[e.which] ? x[e.which] : C[e.which] ? C[e.which] : String.fromCharCode(e.which).toLowerCase()
                }
                function u(e, t) {
                    return e.sort().join(",") === t.sort().join(",")
                }
                function c(e) {
                    var t = [];
                    return e.shiftKey && t.push("shift"),
                        e.altKey && t.push("alt"),
                        e.ctrlKey && t.push("ctrl"),
                        e.metaKey && t.push("meta"),
                        t
                }
                function f(e) {
                    return e.preventDefault ? void e.preventDefault() : void (e.returnValue = !1)
                }
                function h(e) {
                    return e.stopPropagation ? void e.stopPropagation() : void (e.cancelBubble = !0)
                }
                function d(e) {
                    return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
                }
                function p() {
                    if (!w) {
                        w = {};
                        for (var e in x) e > 95 && e < 112 || x.hasOwnProperty(e) && (w[x[e]] = e)
                    }
                    return w
                }
                function g(e, t, n) {
                    return n || (n = p()[e] ? "keydown" : "keypress"),
                        "keypress" == n && t.length && (n = "keydown"),
                        n
                }
                function v(e) {
                    return "+" === e ? ["+"] : (e = e.replace(/\+{2}/g, "+plus"), e.split("+"))
                }
                function m(e, t) {
                    var n, r, i, o = [];
                    for (n = v(e), i = 0; i < n.length; ++i) r = n[i],
                        k[r] && (r = k[r]),
                        t && "keypress" != t && L[r] && (r = L[r], o.push("shift")),
                        d(r) && o.push(r);
                    return t = g(r, o, t),
                    {
                        key: r,
                        modifiers: o,
                        action: t
                    }
                }
                function y(e, t) {
                    return null !== e && e !== o && (e === t || y(e.parentNode, t))
                }
                function b(e) {
                    function t(e) {
                        e = e || {};
                        var t, n = !1;
                        for (t in w) e[t] ? n = !0 : w[t] = 0;
                        n || (L = !1)
                    }
                    function n(e, t, n, r, i, o) {
                        var l, a, s = [],
                            c = n.type;
                        if (!v._callbacks[e]) return [];
                        for ("keyup" == c && d(e) && (t = [e]), l = 0; l < v._callbacks[e].length; ++l) if (a = v._callbacks[e][l], (r || !a.seq || w[a.seq] == a.level) && c == a.action && ("keypress" == c && !n.metaKey && !n.ctrlKey || u(t, a.modifiers))) {
                            var f = !r && a.combo == i,
                                h = r && a.seq == r && a.level == o; (f || h) && v._callbacks[e].splice(l, 1),
                                    s.push(a)
                        }
                        return s
                    }
                    function r(e, t, n, r) {
                        v.stopCallback(t, t.target || t.srcElement, n, r) || e(t, n) === !1 && (f(t), h(t))
                    }
                    function i(e) {
                        "number" != typeof e.which && (e.which = e.keyCode);
                        var t = s(e);
                        if (t) return "keyup" == e.type && x === t ? void (x = !1) : void v.handleKey(t, c(e), e)
                    }
                    function l() {
                        clearTimeout(y),
                            y = setTimeout(t, 1e3)
                    }
                    function p(e, n, i, o) {
                        function a(t) {
                            return function () {
                                L = t,
                                    ++w[e],
                                    l()
                            }
                        }
                        function u(n) {
                            r(i, n, e),
                                "keyup" !== o && (x = s(n)),
                                setTimeout(t, 10)
                        }
                        w[e] = 0;
                        for (var c = 0; c < n.length; ++c) {
                            var f = c + 1 === n.length,
                                h = f ? u : a(o || m(n[c + 1]).action);
                            g(n[c], h, o, e, c);
                        }
                    }
                    function g(e, t, r, i, o) {
                        v._directMap[e + ":" + r] = t,
                            e = e.replace(/\s+/g, " ");
                        var l, a = e.split(" ");
                        return a.length > 1 ? void p(e, a, t, r) : (l = m(e, r), v._callbacks[l.key] = v._callbacks[l.key] || [], n(l.key, l.modifiers, {
                            type: l.action
                        },
                            i, e, o), void v._callbacks[l.key][i ? "unshift" : "push"]({
                                callback: t,
                                modifiers: l.modifiers,
                                action: l.action,
                                seq: i,
                                level: o,
                                combo: e
                            }))
                    }
                    var v = this;
                    if (e = e || o, !(v instanceof b)) return new b(e);
                    v.target = e,
                        v._callbacks = {},
                        v._directMap = {};
                    var y, w = {},
                        x = !1,
                        C = !1,
                        L = !1;
                    v._handleKey = function (e, i, o) {
                        var l, a = n(e, i, o),
                            s = {},
                            u = 0,
                            c = !1;
                        for (l = 0; l < a.length; ++l) a[l].seq && (u = Math.max(u, a[l].level));
                        for (l = 0; l < a.length; ++l) if (a[l].seq) {
                            if (a[l].level != u) continue;
                            c = !0,
                                s[a[l].seq] = 1,
                                r(a[l].callback, o, a[l].combo, a[l].seq)
                        } else c || r(a[l].callback, o, a[l].combo);
                        var f = "keypress" == o.type && C;
                        o.type != L || d(e) || f || t(s),
                            C = c && "keydown" == o.type
                    },
                        v._bindMultiple = function (e, t, n) {
                            for (var r = 0; r < e.length; ++r) g(e[r], t, n)
                        },
                        a(e, "keypress", i),
                        a(e, "keydown", i),
                        a(e, "keyup", i)
                }
                for (var w, x = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "ins",
                    46: "del",
                    91: "meta",
                    93: "meta",
                    224: "meta"
                },
                    C = {
                        106: "*",
                        107: "+",
                        109: "-",
                        110: ".",
                        111: "/",
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
                        222: "'"
                    },
                    L = {
                        "~": "`",
                        "!": "1",
                        "@": "2",
                        "#": "3",
                        $: "4",
                        "%": "5",
                        "^": "6",
                        "&": "7",
                        "*": "8",
                        "(": "9",
                        ")": "0",
                        _: "-",
                        "+": "=",
                        ":": ";",
                        '"': "'",
                        "<": ",",
                        ">": ".",
                        "?": "/",
                        "|": "\\"
                    },
                    k = {
                        option: "alt",
                        command: "meta",
                        return: "enter",
                        escape: "esc",
                        plus: "+",
                        mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
                    },
                    S = 1; S < 20; ++S) x[111 + S] = "f" + S;
                for (S = 0; S <= 9; ++S) x[S + 96] = S;
                b.prototype.bind = function (e, t, n) {
                    var r = this;
                    return e = e instanceof Array ? e : [e],
                        r._bindMultiple.call(r, e, t, n),
                        r
                },
                    b.prototype.unbind = function (e, t) {
                        var n = this;
                        return n.bind.call(n, e,
                            function () { },
                            t)
                    },
                    b.prototype.trigger = function (e, t) {
                        var n = this;
                        return n._directMap[e + ":" + t] && n._directMap[e + ":" + t]({},
                            e),
                            n
                    },
                    b.prototype.reset = function () {
                        var e = this;
                        return e._callbacks = {},
                            e._directMap = {},
                            e
                    },
                    b.prototype.stopCallback = function (e, t) {
                        var n = this;
                        return !((" " + t.className + " ").indexOf(" mousetrap ") > -1) && (!y(t, n.target) && ("INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable))
                    },
                    b.prototype.handleKey = function () {
                        var e = this;
                        return e._handleKey.apply(e, arguments)
                    },
                    b.init = function () {
                        var e = b(o);
                        for (var t in e) "_" !== t.charAt(0) && (b[t] = function (t) {
                            return function () {
                                return e[t].apply(e, arguments)
                            }
                        }(t))
                    },
                    b.init(),
                    i.Mousetrap = b,
                    "undefined" != typeof e && e.exports && (e.exports = b),
                    r = function () {
                        return b
                    }.call(t, n, t, e),
                    !(r !== l && (e.exports = r))
            }(window, document)
    },
    function (e, t) {
        !
        function (e) {
            var t = {},
                n = e.prototype.stopCallback;
            e.prototype.stopCallback = function (e, r, i, o) {
                var l = this;
                return !!l.paused || !t[i] && !t[o] && n.call(l, e, r, i)
            },
                e.prototype.bindGlobal = function (e, n, r) {
                    var i = this;
                    if (i.bind(e, n, r), e instanceof Array) for (var o = 0; o < e.length; o++) t[e[o]] = !0;
                    else t[e] = !0
                },
                e.init()
        }(Mousetrap)
    }]);