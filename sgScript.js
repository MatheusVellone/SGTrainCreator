function addCommas(e) {
    e += "", x = e.split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "";
    for (var t = /(\d+)(\d{3})/; t.test(x1);) x1 = x1.replace(t, "$1,$2");
    return x1 + x2
}

function checkTimezone(e, t) {
    var i = jstz.determine();
    i.name() !== e && $.ajax({
        url: ajax_url,
        type: "POST",
        data: {
            "do": "set_timezone",
            timezone: i.name(),
            xsrf_token: t
        }
    })
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function i(e, t) {
        t = t || Z;
        var i = t.createElement("script");
        i.text = e, t.head.appendChild(i).parentNode.removeChild(i)
    }

    function n(e) {
        var t = !!e && "length" in e && e.length,
            i = he.type(e);
        return "function" === i || he.isWindow(e) ? !1 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function a(e, t, i) {
        if (he.isFunction(t)) return he.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return he.grep(e, function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (xe.test(t)) return he.filter(t, e, i);
            t = he.filter(t, e)
        }
        return he.grep(e, function(e) {
            return ae.call(t, e) > -1 !== i && 1 === e.nodeType
        })
    }

    function s(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function r(e) {
        var t = {};
        return he.each(e.match($e) || [], function(e, i) {
            t[i] = !0
        }), t
    }

    function o(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function u(e, t, i) {
        var n;
        try {
            e && he.isFunction(n = e.promise) ? n.call(e).done(t).fail(i) : e && he.isFunction(n = e.then) ? n.call(e, t, i) : t.call(void 0, e)
        } catch (e) {
            i.call(void 0, e)
        }
    }

    function c() {
        Z.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), he.ready()
    }

    function d() {
        this.expando = he.expando + d.uid++
    }

    function h(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(Fe, "-$&").toLowerCase(), i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ee.test(i) ? JSON.parse(i) : i
                } catch (a) {}
                Ie.set(e, t, i)
            } else i = void 0;
        return i
    }

    function p(e, t, i, n) {
        var a, s = 1,
            r = 20,
            o = n ? function() {
                return n.cur()
            } : function() {
                return he.css(e, t, "")
            },
            l = o(),
            u = i && i[3] || (he.cssNumber[t] ? "" : "px"),
            c = (he.cssNumber[t] || "px" !== u && +l) && Pe.exec(he.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], i = i || [], c = +l || 1;
            do s = s || ".5", c /= s, he.style(e, t, c + u); while (s !== (s = o() / l) && 1 !== s && --r)
        }
        return i && (c = +c || +l || 0, a = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = a)), a
    }

    function f(e) {
        var t, i = e.ownerDocument,
            n = e.nodeName,
            a = Re[n];
        return a ? a : (t = i.body.appendChild(i.createElement(n)), a = he.css(t, "display"), t.parentNode.removeChild(t), "none" === a && (a = "block"), Re[n] = a, a)
    }

    function m(e, t) {
        for (var i, n, a = [], s = 0, r = e.length; r > s; s++) n = e[s], n.style && (i = n.style.display, t ? ("none" === i && (a[s] = Ne.get(n, "display") || null, a[s] || (n.style.display = "")), "" === n.style.display && He(n) && (a[s] = f(n))) : "none" !== i && (a[s] = "none", Ne.set(n, "display", i)));
        for (s = 0; r > s; s++) null != a[s] && (e[s].style.display = a[s]);
        return e
    }

    function g(e, t) {
        var i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && he.nodeName(e, t) ? he.merge([e], i) : i
    }

    function _(e, t) {
        for (var i = 0, n = e.length; n > i; i++) Ne.set(e[i], "globalEval", !t || Ne.get(t[i], "globalEval"))
    }

    function v(e, t, i, n, a) {
        for (var s, r, o, l, u, c, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; f > p; p++)
            if (s = e[p], s || 0 === s)
                if ("object" === he.type(s)) he.merge(h, s.nodeType ? [s] : s);
                else if (Ke.test(s)) {
            for (r = r || d.appendChild(t.createElement("div")), o = (We.exec(s) || ["", ""])[1].toLowerCase(), l = Ue[o] || Ue._default, r.innerHTML = l[1] + he.htmlPrefilter(s) + l[2], c = l[0]; c--;) r = r.lastChild;
            he.merge(h, r.childNodes), r = d.firstChild, r.textContent = ""
        } else h.push(t.createTextNode(s));
        for (d.textContent = "", p = 0; s = h[p++];)
            if (n && he.inArray(s, n) > -1) a && a.push(s);
            else if (u = he.contains(s.ownerDocument, s), r = g(d.appendChild(s), "script"), u && _(r), i)
            for (c = 0; s = r[c++];) Be.test(s.type || "") && i.push(s);
        return d
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function k() {
        try {
            return Z.activeElement
        } catch (e) {}
    }

    function x(e, t, i, n, a, s) {
        var r, o;
        if ("object" == typeof t) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (o in t) x(e, o, i, n, t[o], s);
            return e
        }
        if (null == n && null == a ? (a = i, n = i = void 0) : null == a && ("string" == typeof i ? (a = n, n = void 0) : (a = n, n = i, i = void 0)), a === !1) a = b;
        else if (!a) return e;
        return 1 === s && (r = a, a = function(e) {
            return he().off(e), r.apply(this, arguments)
        }, a.guid = r.guid || (r.guid = he.guid++)), e.each(function() {
            he.event.add(this, t, a, n, i)
        })
    }

    function w(e, t) {
        return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function D(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function C(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function M(e, t) {
        var i, n, a, s, r, o, l, u;
        if (1 === t.nodeType) {
            if (Ne.hasData(e) && (s = Ne.access(e), r = Ne.set(t, s), u = s.events)) {
                delete r.handle, r.events = {};
                for (a in u)
                    for (i = 0, n = u[a].length; n > i; i++) he.event.add(t, a, u[a][i])
            }
            Ie.hasData(e) && (o = Ie.access(e), l = he.extend({}, o), Ie.set(t, l))
        }
    }

    function T(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && Ye.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }

    function $(e, t, n, a) {
        t = ie.apply([], t);
        var s, r, o, l, u, c, d = 0,
            h = e.length,
            p = h - 1,
            f = t[0],
            m = he.isFunction(f);
        if (m || h > 1 && "string" == typeof f && !ce.checkClone && et.test(f)) return e.each(function(i) {
            var s = e.eq(i);
            m && (t[0] = f.call(this, i, s.html())), $(s, t, n, a)
        });
        if (h && (s = v(t, e[0].ownerDocument, !1, e, a), r = s.firstChild, 1 === s.childNodes.length && (s = r), r || a)) {
            for (o = he.map(g(s, "script"), D), l = o.length; h > d; d++) u = s, d !== p && (u = he.clone(u, !0, !0), l && he.merge(o, g(u, "script"))), n.call(e[d], u, d);
            if (l)
                for (c = o[o.length - 1].ownerDocument, he.map(o, C), d = 0; l > d; d++) u = o[d], Be.test(u.type || "") && !Ne.access(u, "globalEval") && he.contains(c, u) && (u.src ? he._evalUrl && he._evalUrl(u.src) : i(u.textContent.replace(it, ""), c))
        }
        return e
    }

    function S(e, t, i) {
        for (var n, a = t ? he.filter(t, e) : e, s = 0; null != (n = a[s]); s++) i || 1 !== n.nodeType || he.cleanData(g(n)), n.parentNode && (i && he.contains(n.ownerDocument, n) && _(g(n, "script")), n.parentNode.removeChild(n));
        return e
    }

    function A(e, t, i) {
        var n, a, s, r, o = e.style;
        return i = i || st(e), i && (r = i.getPropertyValue(t) || i[t], "" !== r || he.contains(e.ownerDocument, e) || (r = he.style(e, t)), !ce.pixelMarginRight() && at.test(r) && nt.test(t) && (n = o.width, a = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = i.width, o.width = n, o.minWidth = a, o.maxWidth = s)), void 0 !== r ? r + "" : r
    }

    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function O(e) {
        if (e in ct) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = ut.length; i--;)
            if (e = ut[i] + t, e in ct) return e
    }

    function N(e, t, i) {
        var n = Pe.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function I(e, t, i, n, a) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += he.css(e, i + Le[s], !0, a)), n ? ("content" === i && (r -= he.css(e, "padding" + Le[s], !0, a)), "margin" !== i && (r -= he.css(e, "border" + Le[s] + "Width", !0, a))) : (r += he.css(e, "padding" + Le[s], !0, a), "padding" !== i && (r += he.css(e, "border" + Le[s] + "Width", !0, a)));
        return r
    }

    function E(e, t, i) {
        var n, a = !0,
            s = st(e),
            r = "border-box" === he.css(e, "boxSizing", !1, s);
        if (e.getClientRects().length && (n = e.getBoundingClientRect()[t]), 0 >= n || null == n) {
            if (n = A(e, t, s), (0 > n || null == n) && (n = e.style[t]), at.test(n)) return n;
            a = r && (ce.boxSizingReliable() || n === e.style[t]), n = parseFloat(n) || 0
        }
        return n + I(e, t, i || (r ? "border" : "content"), a, s) + "px"
    }

    function F(e, t, i, n, a) {
        return new F.prototype.init(e, t, i, n, a)
    }

    function z() {
        ht && (e.requestAnimationFrame(z), he.fx.tick())
    }

    function P() {
        return e.setTimeout(function() {
            dt = void 0
        }), dt = he.now()
    }

    function L(e, t) {
        var i, n = 0,
            a = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = Le[n], a["margin" + i] = a["padding" + i] = e;
        return t && (a.opacity = a.width = e), a
    }

    function H(e, t, i) {
        for (var n, a = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), s = 0, r = a.length; r > s; s++)
            if (n = a[s].call(i, t, e)) return n
    }

    function q(e, t, i) {
        var n, a, s, r, o, l, u, c, d = "width" in t || "height" in t,
            h = this,
            p = {},
            f = e.style,
            g = e.nodeType && He(e),
            _ = Ne.get(e, "fxshow");
        i.queue || (r = he._queueHooks(e, "fx"), null == r.unqueued && (r.unqueued = 0, o = r.empty.fire, r.empty.fire = function() {
            r.unqueued || o()
        }), r.unqueued++, h.always(function() {
            h.always(function() {
                r.unqueued--, he.queue(e, "fx").length || r.empty.fire()
            })
        }));
        for (n in t)
            if (a = t[n], pt.test(a)) {
                if (delete t[n], s = s || "toggle" === a, a === (g ? "hide" : "show")) {
                    if ("show" !== a || !_ || void 0 === _[n]) continue;
                    g = !0
                }
                p[n] = _ && _[n] || he.style(e, n)
            }
        if (l = !he.isEmptyObject(t), l || !he.isEmptyObject(p)) {
            d && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], u = _ && _.display, null == u && (u = Ne.get(e, "display")), c = he.css(e, "display"), "none" === c && (u ? c = u : (m([e], !0), u = e.style.display || u, c = he.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === he.css(e, "float") && (l || (h.done(function() {
                f.display = u
            }), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            })), l = !1;
            for (n in p) l || (_ ? "hidden" in _ && (g = _.hidden) : _ = Ne.access(e, "fxshow", {
                display: u
            }), s && (_.hidden = !g), g && m([e], !0), h.done(function() {
                g || m([e]), Ne.remove(e, "fxshow");
                for (n in p) he.style(e, n, p[n])
            })), l = H(g ? _[n] : 0, n, h), n in _ || (_[n] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function R(e, t) {
        var i, n, a, s, r;
        for (i in e)
            if (n = he.camelCase(i), a = t[n], s = e[i], he.isArray(s) && (a = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), r = he.cssHooks[n], r && "expand" in r) {
                s = r.expand(s), delete e[n];
                for (i in s) i in e || (e[i] = s[i], t[i] = a)
            } else t[n] = a
    }

    function Y(e, t, i) {
        var n, a, s = 0,
            r = Y.prefilters.length,
            o = he.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (a) return !1;
                for (var t = dt || P(), i = Math.max(0, u.startTime + u.duration - t), n = i / u.duration || 0, s = 1 - n, r = 0, l = u.tweens.length; l > r; r++) u.tweens[r].run(s);
                return o.notifyWith(e, [u, s, i]), 1 > s && l ? i : (o.resolveWith(e, [u]), !1)
            },
            u = o.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, {
                    specialEasing: {},
                    easing: he.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: dt || P(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = he.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? u.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; n > i; i++) u.tweens[i].run(1);
                    return t ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t])) : o.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (R(c, u.opts.specialEasing); r > s; s++)
            if (n = Y.prefilters[s].call(u, e, c, u.opts)) return he.isFunction(n.stop) && (he._queueHooks(u.elem, u.opts.queue).stop = he.proxy(n.stop, n)), n;
        return he.map(c, H, u), he.isFunction(u.opts.start) && u.opts.start.call(e, u), he.fx.timer(he.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function W(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function B(e, t, i, n) {
        var a;
        if (he.isArray(t)) he.each(t, function(t, a) {
            i || Mt.test(e) ? n(e, a) : B(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, i, n)
        });
        else if (i || "object" !== he.type(t)) n(e, t);
        else
            for (a in t) B(e + "[" + a + "]", t[a], i, n)
    }

    function U(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, a = 0,
                s = t.toLowerCase().match($e) || [];
            if (he.isFunction(i))
                for (; n = s[a++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function K(e, t, i, n) {
        function a(o) {
            var l;
            return s[o] = !0, he.each(e[o] || [], function(e, o) {
                var u = o(t, i, n);
                return "string" != typeof u || r || s[u] ? r ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
            }), l
        }
        var s = {},
            r = e === Pt;
        return a(t.dataTypes[0]) || !s["*"] && a("*")
    }

    function V(e, t) {
        var i, n, a = he.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((a[i] ? e : n || (n = {}))[i] = t[i]);
        return n && he.extend(!0, e, n), e
    }

    function G(e, t, i) {
        for (var n, a, s, r, o = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (a in o)
                if (o[a] && o[a].test(n)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in i) s = l[0];
        else {
            for (a in i) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    s = a;
                    break
                }
                r || (r = a)
            }
            s = s || r
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }

    function X(e, t, i, n) {
        var a, s, r, o, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (r in e.converters) u[r.toLowerCase()] = e.converters[r];
        for (s = c.shift(); s;)
            if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (r = u[l + " " + s] || u["* " + s], !r)
                for (a in u)
                    if (o = a.split(" "), o[1] === s && (r = u[l + " " + o[0]] || u["* " + o[0]])) {
                        r === !0 ? r = u[a] : u[a] !== !0 && (s = o[0], c.unshift(o[1]));
                        break
                    }
            if (r !== !0)
                if (r && e["throws"]) t = r(t);
                else try {
                    t = r(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: r ? d : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Q(e) {
        return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var J = [],
        Z = e.document,
        ee = Object.getPrototypeOf,
        te = J.slice,
        ie = J.concat,
        ne = J.push,
        ae = J.indexOf,
        se = {},
        re = se.toString,
        oe = se.hasOwnProperty,
        le = oe.toString,
        ue = le.call(Object),
        ce = {},
        de = "3.0.0",
        he = function(e, t) {
            return new he.fn.init(e, t)
        },
        pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        fe = /^-ms-/,
        me = /-([a-z])/g,
        ge = function(e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: de,
        constructor: he,
        length: 0,
        toArray: function() {
            return te.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : te.call(this)
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return he.each(this, e)
        },
        map: function(e) {
            return this.pushStack(he.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(te.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ne,
        sort: J.sort,
        splice: J.splice
    }, he.extend = he.fn.extend = function() {
        var e, t, i, n, a, s, r = arguments[0] || {},
            o = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof r && (u = r, r = arguments[o] || {}, o++), "object" == typeof r || he.isFunction(r) || (r = {}), o === l && (r = this, o--); l > o; o++)
            if (null != (e = arguments[o]))
                for (t in e) i = r[t], n = e[t], r !== n && (u && n && (he.isPlainObject(n) || (a = he.isArray(n))) ? (a ? (a = !1, s = i && he.isArray(i) ? i : []) : s = i && he.isPlainObject(i) ? i : {}, r[t] = he.extend(u, s, n)) : void 0 !== n && (r[t] = n));
        return r
    }, he.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === he.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, i;
            return e && "[object Object]" === re.call(e) ? (t = ee(e)) ? (i = oe.call(t, "constructor") && t.constructor, "function" == typeof i && le.call(i) === ue) : !0 : !1
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[re.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            i(e)
        },
        camelCase: function(e) {
            return e.replace(fe, "ms-").replace(me, ge)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, a = 0;
            if (n(e))
                for (i = e.length; i > a && t.call(e[a], a, e[a]) !== !1; a++);
            else
                for (a in e)
                    if (t.call(e[a], a, e[a]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(pe, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? he.merge(i, "string" == typeof e ? [e] : e) : ne.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : ae.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, a = e.length; i > n; n++) e[a++] = t[n];
            return e.length = a, e
        },
        grep: function(e, t, i) {
            for (var n, a = [], s = 0, r = e.length, o = !i; r > s; s++) n = !t(e[s], s), n !== o && a.push(e[s]);
            return a
        },
        map: function(e, t, i) {
            var a, s, r = 0,
                o = [];
            if (n(e))
                for (a = e.length; a > r; r++) s = t(e[r], r, i), null != s && o.push(s);
            else
                for (r in e) s = t(e[r], r, i), null != s && o.push(s);
            return ie.apply([], o)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, a;
            return "string" == typeof t && (i = e[t], t = e, e = i), he.isFunction(e) ? (n = te.call(arguments, 2), a = function() {
                return e.apply(t || this, n.concat(te.call(arguments)))
            }, a.guid = e.guid = e.guid || he.guid++, a) : void 0
        },
        now: Date.now,
        support: ce
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = J[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        se["[object " + t + "]"] = t.toLowerCase()
    });
    var _e = function(e) {
        function t(e, t, i, n) {
            var a, s, r, o, l, u, c, h = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((t ? t.ownerDocument || t : q) !== N && O(t), t = t || N, E)) {
                if (11 !== f && (l = _e.exec(e)))
                    if (a = l[1]) {
                        if (9 === f) {
                            if (!(r = t.getElementById(a))) return i;
                            if (r.id === a) return i.push(r), i
                        } else if (h && (r = h.getElementById(a)) && L(t, r) && r.id === a) return i.push(r), i
                    } else {
                        if (l[2]) return J.apply(i, t.getElementsByTagName(e)), i;
                        if ((a = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(i, t.getElementsByClassName(a)), i
                    }
                if (x.qsa && !U[e + " "] && (!F || !F.test(e))) {
                    if (1 !== f) h = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(ke, xe) : t.setAttribute("id", o = H), u = M(e), s = u.length; s--;) u[s] = "#" + o + " " + p(u[s]);
                        c = u.join(","), h = ve.test(e) && d(t.parentNode) || t
                    }
                    if (c) try {
                        return J.apply(i, h.querySelectorAll(c)), i
                    } catch (m) {} finally {
                        o === H && t.removeAttribute("id")
                    }
                }
            }
            return $(e.replace(oe, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > w.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[H] = !0, e
        }

        function a(e) {
            var t = N.createElement("fieldset");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
        }

        function r(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function o(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                return "label" in t && t.disabled === e || "form" in t && t.disabled === e || "form" in t && t.disabled === !1 && (t.isDisabled === e || t.isDisabled !== !e && ("label" in t || !De(t)) !== e)
            }
        }

        function c(e) {
            return n(function(t) {
                return t = +t, n(function(i, n) {
                    for (var a, s = e([], i.length, t), r = s.length; r--;) i[a = s[r]] && (i[a] = !(n[a] = i[a]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function h() {}

        function p(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function f(e, t, i) {
            var n = t.dir,
                a = t.next,
                s = a || n,
                r = i && "parentNode" === s,
                o = Y++;
            return t.first ? function(t, i, a) {
                for (; t = t[n];)
                    if (1 === t.nodeType || r) return e(t, i, a)
            } : function(t, i, l) {
                var u, c, d, h = [R, o];
                if (l) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || r) && e(t, i, l)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || r)
                            if (d = t[H] || (t[H] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[n] || t;
                            else {
                                if ((u = c[s]) && u[0] === R && u[1] === o) return h[2] = u[2];
                                if (c[s] = h, h[2] = e(t, i, l)) return !0
                            }
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var a = e.length; a--;)
                    if (!e[a](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function g(e, i, n) {
            for (var a = 0, s = i.length; s > a; a++) t(e, i[a], n);
            return n
        }

        function _(e, t, i, n, a) {
            for (var s, r = [], o = 0, l = e.length, u = null != t; l > o; o++)(s = e[o]) && (i && !i(s, n, a) || (r.push(s), u && t.push(o)));
            return r
        }

        function v(e, t, i, a, s, r) {
            return a && !a[H] && (a = v(a)), s && !s[H] && (s = v(s, r)), n(function(n, r, o, l) {
                var u, c, d, h = [],
                    p = [],
                    f = r.length,
                    m = n || g(t || "*", o.nodeType ? [o] : o, []),
                    v = !e || !n && t ? m : _(m, h, e, o, l),
                    y = i ? s || (n ? e : f || a) ? [] : r : v;
                if (i && i(v, y, o, l), a)
                    for (u = _(y, p), a(u, [], o, l), c = u.length; c--;)(d = u[c]) && (y[p[c]] = !(v[p[c]] = d));
                if (n) {
                    if (s || e) {
                        if (s) {
                            for (u = [], c = y.length; c--;)(d = y[c]) && u.push(v[c] = d);
                            s(null, y = [], u, l)
                        }
                        for (c = y.length; c--;)(d = y[c]) && (u = s ? ee(n, d) : h[c]) > -1 && (n[u] = !(r[u] = d))
                    }
                } else y = _(y === r ? y.splice(f, y.length) : y), s ? s(null, r, y, l) : J.apply(r, y)
            })
        }

        function y(e) {
            for (var t, i, n, a = e.length, s = w.relative[e[0].type], r = s || w.relative[" "], o = s ? 1 : 0, l = f(function(e) {
                    return e === t
                }, r, !0), u = f(function(e) {
                    return ee(t, e) > -1
                }, r, !0), c = [function(e, i, n) {
                    var a = !s && (n || i !== S) || ((t = i).nodeType ? l(e, i, n) : u(e, i, n));
                    return t = null, a
                }]; a > o; o++)
                if (i = w.relative[e[o].type]) c = [f(m(c), i)];
                else {
                    if (i = w.filter[e[o].type].apply(null, e[o].matches), i[H]) {
                        for (n = ++o; a > n && !w.relative[e[n].type]; n++);
                        return v(o > 1 && m(c), o > 1 && p(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(oe, "$1"), i, n > o && y(e.slice(o, n)), a > n && y(e = e.slice(n)), a > n && p(e))
                    }
                    c.push(i)
                }
            return m(c)
        }

        function b(e, i) {
            var a = i.length > 0,
                s = e.length > 0,
                r = function(n, r, o, l, u) {
                    var c, d, h, p = 0,
                        f = "0",
                        m = n && [],
                        g = [],
                        v = S,
                        y = n || s && w.find.TAG("*", u),
                        b = R += null == v ? 1 : Math.random() || .1,
                        k = y.length;
                    for (u && (S = r === N || r || u); f !== k && null != (c = y[f]); f++) {
                        if (s && c) {
                            for (d = 0, r || c.ownerDocument === N || (O(c), o = !E); h = e[d++];)
                                if (h(c, r || N, o)) {
                                    l.push(c);
                                    break
                                }
                            u && (R = b)
                        }
                        a && ((c = !h && c) && p--, n && m.push(c))
                    }
                    if (p += f, a && f !== p) {
                        for (d = 0; h = i[d++];) h(m, g, r, o);
                        if (n) {
                            if (p > 0)
                                for (; f--;) m[f] || g[f] || (g[f] = X.call(l));
                            g = _(g)
                        }
                        J.apply(l, g), u && !n && g.length > 0 && p + i.length > 1 && t.uniqueSort(l)
                    }
                    return u && (R = b, S = v), m
                };
            return a ? n(r) : r
        }
        var k, x, w, D, C, M, T, $, S, A, j, O, N, I, E, F, z, P, L, H = "sizzle" + 1 * new Date,
            q = e.document,
            R = 0,
            Y = 0,
            W = i(),
            B = i(),
            U = i(),
            K = function(e, t) {
                return e === t && (j = !0), 0
            },
            V = {}.hasOwnProperty,
            G = [],
            X = G.pop,
            Q = G.push,
            J = G.push,
            Z = G.slice,
            ee = function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            ae = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ie + "*\\]",
            se = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
            re = new RegExp(ie + "+", "g"),
            oe = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            le = new RegExp("^" + ie + "*," + ie + "*"),
            ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            ce = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            de = new RegExp(se),
            he = new RegExp("^" + ne + "$"),
            pe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne + "|[*])"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            _e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            be = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            ke = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            xe = function(e, t) {
                return t ? "\x00" === e ? "?" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            we = function() {
                O()
            },
            De = f(function(e) {
                return e.disabled === !0
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(G = Z.call(q.childNodes), q.childNodes), G[q.childNodes.length].nodeType
        } catch (Ce) {
            J = {
                apply: G.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        x = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, O = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : q;
            return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, I = N.documentElement, E = !C(N), q !== N && (i = N.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", we, !1) : i.attachEvent && i.attachEvent("onunload", we)), x.attributes = a(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = a(function(e) {
                return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ge.test(N.getElementsByClassName), x.getById = a(function(e) {
                return I.appendChild(e).id = H, !N.getElementsByName || !N.getElementsByName(H).length
            }), x.getById ? (w.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), w.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    a = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = s[a++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, w.find.CLASS = x.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && E ? t.getElementsByClassName(e) : void 0
            }, z = [], F = [], (x.qsa = ge.test(N.querySelectorAll)) && (a(function(e) {
                I.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || F.push(".#.+[+~]")
            }), a(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = N.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ie + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), I.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (x.matchesSelector = ge.test(P = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && a(function(e) {
                x.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), z.push("!=", se)
            }), F = F.length && new RegExp(F.join("|")), z = z.length && new RegExp(z.join("|")), t = ge.test(I.compareDocumentPosition), L = t || ge.test(I.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, K = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === N || e.ownerDocument === q && L(q, e) ? -1 : t === N || t.ownerDocument === q && L(q, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var i, n = 0,
                    a = e.parentNode,
                    s = t.parentNode,
                    o = [e],
                    l = [t];
                if (!a || !s) return e === N ? -1 : t === N ? 1 : a ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                if (a === s) return r(e, t);
                for (i = e; i = i.parentNode;) o.unshift(i);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (; o[n] === l[n];) n++;
                return n ? r(o[n], l[n]) : o[n] === q ? -1 : l[n] === q ? 1 : 0
            }, N) : N
        }, t.matches = function(e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== N && O(e), i = i.replace(ce, "='$1']"), x.matchesSelector && E && !U[i + " "] && (!z || !z.test(i)) && (!F || !F.test(i))) try {
                var n = P.call(e, i);
                if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (a) {}
            return t(i, N, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== N && O(e), L(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== N && O(e);
            var i = w.attrHandle[t.toLowerCase()],
                n = i && V.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !E) : void 0;
            return void 0 !== n ? n : x.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.escape = function(e) {
            return (e + "").replace(ke, xe)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                a = 0;
            if (j = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(K), j) {
                for (; t = e[a++];) t === e[a] && (n = i.push(a));
                for (; n--;) e.splice(i[n], 1)
            }
            return A = null, e
        }, D = t.getText = function(e) {
            var t, i = "",
                n = 0,
                a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += D(e)
                } else if (3 === a || 4 === a) return e.nodeValue
            } else
                for (; t = e[n++];) i += D(t);
            return i
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && de.test(i) && (t = M(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(a) {
                        var s = t.attr(a, e);
                        return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(re, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, i, n, a) {
                    var s = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        o = "of-type" === t;
                    return 1 === n && 0 === a ? function(e) {
                        return !!e.parentNode
                    } : function(t, i, l) {
                        var u, c, d, h, p, f, m = s !== r ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            _ = o && t.nodeName.toLowerCase(),
                            v = !l && !o,
                            y = !1;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (h = t; h = h[m];)
                                        if (o ? h.nodeName.toLowerCase() === _ : 1 === h.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? g.firstChild : g.lastChild], r && v) {
                                for (h = g, d = h[H] || (h[H] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), u = c[e] || [], p = u[0] === R && u[1], y = p && u[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (y = p = 0) || f.pop();)
                                    if (1 === h.nodeType && ++y && h === t) {
                                        c[e] = [R, p, y];
                                        break
                                    }
                            } else if (v && (h = t, d = h[H] || (h[H] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), u = c[e] || [], p = u[0] === R && u[1], y = p), y === !1)
                                for (;
                                    (h = ++p && h && h[m] || (y = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== _ : 1 !== h.nodeType) || !++y || (v && (d = h[H] || (h[H] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), c[e] = [R, y]), h !== t)););
                            return y -= a, y === n || y % n === 0 && y / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var a, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[H] ? s(i) : s.length > 1 ? (a = [e, e, "", i], w.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, a = s(e, i), r = a.length; r--;) n = ee(e, a[r]), e[n] = !(t[n] = a[r])
                    }) : function(e) {
                        return s(e, 0, a)
                    }) : s
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [],
                        i = [],
                        a = T(e.replace(oe, "$1"));
                    return a[H] ? n(function(e, t, i, n) {
                        for (var s, r = a(e, null, n, []), o = e.length; o--;)(s = r[o]) && (e[o] = !(t[o] = s))
                    }) : function(e, n, s) {
                        return t[0] = e, a(t, null, s, i), t[0] = null, !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(ye, be),
                        function(t) {
                            return (t.textContent || t.innerText || D(t)).indexOf(e) > -1
                        }
                }),
                lang: n(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = E ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === I
                },
                focus: function(e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: c(function(e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: c(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: c(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (k in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[k] = o(k);
        for (k in {
                submit: !0,
                reset: !0
            }) w.pseudos[k] = l(k);
        return h.prototype = w.filters = w.pseudos, w.setFilters = new h, M = t.tokenize = function(e, i) {
            var n, a, s, r, o, l, u, c = B[e + " "];
            if (c) return i ? 0 : c.slice(0);
            for (o = e, l = [], u = w.preFilter; o;) {
                n && !(a = le.exec(o)) || (a && (o = o.slice(a[0].length) || o), l.push(s = [])), n = !1, (a = ue.exec(o)) && (n = a.shift(), s.push({
                    value: n,
                    type: a[0].replace(oe, " ")
                }), o = o.slice(n.length));
                for (r in w.filter) !(a = pe[r].exec(o)) || u[r] && !(a = u[r](a)) || (n = a.shift(), s.push({
                    value: n,
                    type: r,
                    matches: a
                }), o = o.slice(n.length));
                if (!n) break
            }
            return i ? o.length : o ? t.error(e) : B(e, l).slice(0)
        }, T = t.compile = function(e, t) {
            var i, n = [],
                a = [],
                s = U[e + " "];
            if (!s) {
                for (t || (t = M(e)), i = t.length; i--;) s = y(t[i]), s[H] ? n.push(s) : a.push(s);
                s = U(e, b(a, n)), s.selector = e
            }
            return s
        }, $ = t.select = function(e, t, i, n) {
            var a, s, r, o, l, u = "function" == typeof e && e,
                c = !n && M(e = u.selector || e);
            if (i = i || [], 1 === c.length) {
                if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && x.getById && 9 === t.nodeType && E && w.relative[s[1].type]) {
                    if (t = (w.find.ID(r.matches[0].replace(ye, be), t) || [])[0], !t) return i;
                    u && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (a = pe.needsContext.test(e) ? 0 : s.length; a-- && (r = s[a], !w.relative[o = r.type]);)
                    if ((l = w.find[o]) && (n = l(r.matches[0].replace(ye, be), ve.test(s[0].type) && d(t.parentNode) || t))) {
                        if (s.splice(a, 1), e = n.length && p(s), !e) return J.apply(i, n), i;
                        break
                    }
            }
            return (u || T(e, c))(n, t, !E, i, !t || ve.test(e) && d(t.parentNode) || t), i
        }, x.sortStable = H.split("").sort(K).join("") === H, x.detectDuplicates = !!j, O(), x.sortDetached = a(function(e) {
            return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
        }), a(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && a(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), a(function(e) {
            return null == e.getAttribute("disabled")
        }) || s(te, function(e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    he.find = _e, he.expr = _e.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = _e.uniqueSort, he.text = _e.getText, he.isXMLDoc = _e.isXML, he.contains = _e.contains, he.escapeSelector = _e.escape;
    var ve = function(e, t, i) {
            for (var n = [], a = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (a && he(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        ye = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        be = he.expr.match.needsContext,
        ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        xe = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? he.find.matchesSelector(n, e) ? [n] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                a = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (he.contains(a[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; n > t; t++) he.find(e, a[t], i);
            return n > 1 ? he.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(a(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(a(this, e || [], !0))
        },
        is: function(e) {
            return !!a(this, "string" == typeof e && be.test(e) ? he(e) : e || [], !1).length
        }
    });
    var we, De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Ce = he.fn.init = function(e, t, i) {
            var n, a;
            if (!e) return this;
            if (i = i || we, "string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : De.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), ke.test(n[1]) && he.isPlainObject(t))
                        for (n in t) he.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return a = Z.getElementById(n[2]), a && (this[0] = a, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(he) : he.makeArray(e, this)
        };
    Ce.prototype = he.fn, we = he(Z);
    var Me = /^(?:parents|prev(?:Until|All))/,
        Te = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; i > e; e++)
                    if (he.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0,
                a = this.length,
                s = [],
                r = "string" != typeof e && he(e);
            if (!be.test(e))
                for (; a > n; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && he.find.matchesSelector(i, e))) {
                            s.push(i);
                            break
                        }
            return this.pushStack(s.length > 1 ? he.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ve(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return ve(e, "parentNode", i)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return ve(e, "nextSibling")
        },
        prevAll: function(e) {
            return ve(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return ve(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return ve(e, "previousSibling", i)
        },
        siblings: function(e) {
            return ye((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ye(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || he.merge([], e.childNodes)
        }
    }, function(e, t) {
        he.fn[e] = function(i, n) {
            var a = he.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (a = he.filter(n, a)), this.length > 1 && (Te[e] || he.uniqueSort(a), Me.test(e) && a.reverse()), this.pushStack(a)
        }
    });
    var $e = /\S+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? r(e) : he.extend({}, e);
        var t, i, n, a, s = [],
            o = [],
            l = -1,
            u = function() {
                for (a = e.once, n = t = !0; o.length; l = -1)
                    for (i = o.shift(); ++l < s.length;) s[l].apply(i[0], i[1]) === !1 && e.stopOnFalse && (l = s.length, i = !1);
                e.memory || (i = !1), t = !1, a && (s = i ? [] : "")
            },
            c = {
                add: function() {
                    return s && (i && !t && (l = s.length - 1, o.push(i)), function n(t) {
                        he.each(t, function(t, i) {
                            he.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== he.type(i) && n(i)
                        })
                    }(arguments), i && !t && u()), this
                },
                remove: function() {
                    return he.each(arguments, function(e, t) {
                        for (var i;
                            (i = he.inArray(t, s, i)) > -1;) s.splice(i, 1), l >= i && l--
                    }), this
                },
                has: function(e) {
                    return e ? he.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = o = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = o = [], i || t || (s = i = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, i) {
                    return a || (i = i || [], i = [e, i.slice ? i.slice() : i], o.push(i), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return c
    }, he.extend({
        Deferred: function(t) {
            var i = [
                    ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                    ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                a = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return he.Deferred(function(t) {
                            he.each(i, function(i, n) {
                                var a = he.isFunction(e[n[4]]) && e[n[4]];
                                s[n[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, n, a) {
                        function s(t, i, n, a) {
                            return function() {
                                var u = this,
                                    c = arguments,
                                    d = function() {
                                        var e, d;
                                        if (!(r > t)) {
                                            if (e = n.apply(u, c), e === i.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? a ? d.call(e, s(r, i, o, a), s(r, i, l, a)) : (r++, d.call(e, s(r, i, o, a), s(r, i, l, a), s(r, i, o, i.notifyWith))) : (n !== o && (u = void 0, c = [e]), (a || i.resolveWith)(u, c))
                                        }
                                    },
                                    h = a ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= r && (n !== l && (u = void 0, c = [e]), i.rejectWith(u, c))
                                        }
                                    };
                                t ? h() : (he.Deferred.getStackHook && (h.stackTrace = he.Deferred.getStackHook()), e.setTimeout(h))
                            }
                        }
                        var r = 0;
                        return he.Deferred(function(e) {
                            i[0][3].add(s(0, e, he.isFunction(a) ? a : o, e.notifyWith)), i[1][3].add(s(0, e, he.isFunction(t) ? t : o)), i[2][3].add(s(0, e, he.isFunction(n) ? n : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? he.extend(e, a) : a
                    }
                },
                s = {};
            return he.each(i, function(e, t) {
                var r = t[2],
                    o = t[5];
                a[t[1]] = r.add, o && r.add(function() {
                    n = o
                }, i[3 - e][2].disable, i[0][2].lock), r.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = r.fireWith
            }), a.promise(s), t && t.call(s, s), s
        },
        when: function(e) {
            var t = arguments.length,
                i = t,
                n = Array(i),
                a = te.call(arguments),
                s = he.Deferred(),
                r = function(e) {
                    return function(i) {
                        n[e] = this, a[e] = arguments.length > 1 ? te.call(arguments) : i, --t || s.resolveWith(n, a)
                    }
                };
            if (1 >= t && (u(e, s.done(r(i)).resolve, s.reject), "pending" === s.state() || he.isFunction(a[i] && a[i].then))) return s.then();
            for (; i--;) u(a[i], r(i), s.reject);
            return s.promise()
        }
    });
    var Se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, i) {
        e.console && e.console.warn && t && Se.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    var Ae = he.Deferred();
    he.fn.ready = function(e) {
        return Ae.then(e), this
    }, he.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? he.readyWait++ : he.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || Ae.resolveWith(Z, [he]))
        }
    }), he.ready.then = Ae.then, "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? e.setTimeout(he.ready) : (Z.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var je = function(e, t, i, n, a, s, r) {
            var o = 0,
                l = e.length,
                u = null == i;
            if ("object" === he.type(i)) {
                a = !0;
                for (o in i) je(e, t, o, i[o], !0, s, r)
            } else if (void 0 !== n && (a = !0, he.isFunction(n) || (r = !0), u && (r ? (t.call(e, n), t = null) : (u = t, t = function(e, t, i) {
                    return u.call(he(e), i)
                })), t))
                for (; l > o; o++) t(e[o], i, r ? n : n.call(e[o], o, t(e[o], i)));
            return a ? e : u ? t.call(e) : l ? t(e[0], i) : s
        },
        Oe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, a = this.cache(e);
            if ("string" == typeof t) a[he.camelCase(t)] = i;
            else
                for (n in t) a[he.camelCase(n)] = t[n];
            return a
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in n ? [t] : t.match($e) || []), i = t.length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || he.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Ne = new d,
        Ie = new d,
        Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Fe = /[A-Z]/g;
    he.extend({
        hasData: function(e) {
            return Ie.hasData(e) || Ne.hasData(e)
        },
        data: function(e, t, i) {
            return Ie.access(e, t, i)
        },
        removeData: function(e, t) {
            Ie.remove(e, t)
        },
        _data: function(e, t, i) {
            return Ne.access(e, t, i)
        },
        _removeData: function(e, t) {
            Ne.remove(e, t)
        }
    }), he.fn.extend({
        data: function(e, t) {
            var i, n, a, s = this[0],
                r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (a = Ie.get(s), 1 === s.nodeType && !Ne.get(s, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = he.camelCase(n.slice(5)), h(s, n, a[n])));
                    Ne.set(s, "hasDataAttrs", !0)
                }
                return a
            }
            return "object" == typeof e ? this.each(function() {
                Ie.set(this, e)
            }) : je(this, function(t) {
                var i;
                if (s && void 0 === t) {
                    if (i = Ie.get(s, e), void 0 !== i) return i;
                    if (i = h(s, e), void 0 !== i) return i
                } else this.each(function() {
                    Ie.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ie.remove(this, e)
            })
        }
    }), he.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = Ne.get(e, t), i && (!n || he.isArray(i) ? n = Ne.access(e, t, he.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = he.queue(e, t),
                n = i.length,
                a = i.shift(),
                s = he._queueHooks(e, t),
                r = function() {
                    he.dequeue(e, t)
                };
            "inprogress" === a && (a = i.shift(), n--), a && ("fx" === t && i.unshift("inprogress"), delete s.stop, a.call(e, r, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return Ne.get(e, i) || Ne.access(e, i, {
                empty: he.Callbacks("once memory").add(function() {
                    Ne.remove(e, [t + "queue", i])
                })
            })
        }
    }), he.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && he.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                he.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                a = he.Deferred(),
                s = this,
                r = this.length,
                o = function() {
                    --n || a.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) i = Ne.get(s[r], e + "queueHooks"), i && i.empty && (n++, i.empty.add(o));
            return o(), a.promise(t)
        }
    });
    var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Pe = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"),
        Le = ["Top", "Right", "Bottom", "Left"],
        He = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
        },
        qe = function(e, t, i, n) {
            var a, s, r = {};
            for (s in t) r[s] = e.style[s], e.style[s] = t[s];
            a = i.apply(e, n || []);
            for (s in t) e.style[s] = r[s];
            return a
        },
        Re = {};
    he.fn.extend({
        show: function() {
            return m(this, !0)
        },
        hide: function() {
            return m(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                He(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var Ye = /^(?:checkbox|radio)$/i,
        We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Be = /^$|\/(?:java|ecma)script/i,
        Ue = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;
    var Ke = /<|&#?\w+;/;
    ! function() {
        var e = Z.createDocumentFragment(),
            t = e.appendChild(Z.createElement("div")),
            i = Z.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), ce.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ce.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ve = Z.documentElement,
        Ge = /^key/,
        Xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qe = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, i, n, a) {
            var s, r, o, l, u, c, d, h, p, f, m, g = Ne.get(e);
            if (g)
                for (i.handler && (s = i, i = s.handler, a = s.selector), a && he.find.matchesSelector(Ve, a), i.guid || (i.guid = he.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(t) {
                        return "undefined" != typeof he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match($e) || [""], u = t.length; u--;) o = Qe.exec(t[u]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (d = he.event.special[p] || {}, p = (a ? d.delegateType : d.bindType) || p, d = he.event.special[p] || {}, c = he.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: a,
                    needsContext: a && he.expr.match.needsContext.test(a),
                    namespace: f.join(".")
                }, s), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, d.setup && d.setup.call(e, n, f, r) !== !1 || e.addEventListener && e.addEventListener(p, r)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), a ? h.splice(h.delegateCount++, 0, c) : h.push(c), he.event.global[p] = !0)
        },
        remove: function(e, t, i, n, a) {
            var s, r, o, l, u, c, d, h, p, f, m, g = Ne.hasData(e) && Ne.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match($e) || [""], u = t.length; u--;)
                    if (o = Qe.exec(t[u]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p) {
                        for (d = he.event.special[p] || {}, p = (n ? d.delegateType : d.bindType) || p, h = l[p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) c = h[s], !a && m !== c.origType || i && i.guid !== c.guid || o && !o.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
                        r && !h.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || he.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) he.event.remove(e, p + t[u], i, n, !0);
                he.isEmptyObject(l) && Ne.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, a, s, r, o = he.event.fix(e),
                l = new Array(arguments.length),
                u = (Ne.get(this, "events") || {})[o.type] || [],
                c = he.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, o) !== !1) {
                for (r = he.event.handlers.call(this, o, u), t = 0;
                    (a = r[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = a.elem, i = 0;
                        (s = a.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(s.namespace) || (o.handleObj = s, o.data = s.data, n = ((he.event.special[s.origType] || {}).handle || s.handler).apply(a.elem, l), void 0 !== n && (o.result = n) === !1 && (o.preventDefault(), o.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, o), o.result
            }
        },
        handlers: function(e, t) {
            var i, n, a, s, r = [],
                o = t.delegateCount,
                l = e.target;
            if (o && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (n = [], i = 0; o > i; i++) s = t[i], a = s.selector + " ", void 0 === n[a] && (n[a] = s.needsContext ? he(a, this).index(l) > -1 : he.find(a, this, null, [l]).length), n[a] && n.push(s);
                        n.length && r.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return o < t.length && r.push({
                elem: this,
                handlers: t.slice(o)
            }), r
        },
        addProp: function(e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function() {
                    return this.originalEvent ? t(this.originalEvent) : void 0
                } : function() {
                    return this.originalEvent ? this.originalEvent[e] : void 0
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[he.expando] ? e : new he.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== k() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === k() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && he.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return he.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, he.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, he.Event = function(e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : b, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    a = e.relatedTarget,
                    s = e.handleObj;
                return a && (a === n || he.contains(n, a)) || (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), he.fn.extend({
        on: function(e, t, i, n) {
            return x(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return x(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, a;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, he(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (a in e) this.off(a, t, e[a]);
                return this
            }
            return t !== !1 && "function" != typeof t || (i = t, t = void 0), i === !1 && (i = b), this.each(function() {
                he.event.remove(this, e, i, t)
            })
        }
    });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ze = /<script|<style|<link/i,
        et = /checked\s*(?:[^=]|=\s*.checked.)/i,
        tt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(Je, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, a, s, r, o = e.cloneNode(!0),
                l = he.contains(e.ownerDocument, e);
            if (!(ce.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (r = g(o), s = g(e), n = 0, a = s.length; a > n; n++) T(s[n], r[n]);
            if (t)
                if (i)
                    for (s = s || g(e), r = r || g(o), n = 0, a = s.length; a > n; n++) M(s[n], r[n]);
                else M(e, o);
            return r = g(o, "script"), r.length > 0 && _(r, !l && g(e, "script")), o
        },
        cleanData: function(e) {
            for (var t, i, n, a = he.event.special, s = 0; void 0 !== (i = e[s]); s++)
                if (Oe(i)) {
                    if (t = i[Ne.expando]) {
                        if (t.events)
                            for (n in t.events) a[n] ? he.event.remove(i, n) : he.removeEvent(i, n, t.handle);
                        i[Ne.expando] = void 0
                    }
                    i[Ie.expando] && (i[Ie.expando] = void 0)
                }
        }
    }), he.fn.extend({
        detach: function(e) {
            return S(this, e, !0)
        },
        remove: function(e) {
            return S(this, e)
        },
        text: function(e) {
            return je(this, function(e) {
                return void 0 === e ? he.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return $(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return $(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return $(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return $(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(g(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return he.clone(this, e, t)
            })
        },
        html: function(e) {
            return je(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ze.test(e) && !Ue[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (he.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (a) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return $(this, arguments, function(t) {
                var i = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(g(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        he.fn[e] = function(e) {
            for (var i, n = [], a = he(e), s = a.length - 1, r = 0; s >= r; r++) i = r === s ? this : this.clone(!0), he(a[r])[t](i), ne.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var nt = /^margin/,
        at = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"),
        st = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (o) {
                o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", Ve.appendChild(r);
                var t = e.getComputedStyle(o);
                i = "1%" !== t.top, s = "2px" === t.marginLeft, n = "4px" === t.width, o.style.marginRight = "50%", a = "4px" === t.marginRight, Ve.removeChild(r), o = null
            }
        }
        var i, n, a, s, r = Z.createElement("div"),
            o = Z.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", ce.clearCloneStyle = "content-box" === o.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(o), he.extend(ce, {
            pixelPosition: function() {
                return t(), i
            },
            boxSizingReliable: function() {
                return t(), n
            },
            pixelMarginRight: function() {
                return t(), a
            },
            reliableMarginLeft: function() {
                return t(), s
            }
        }))
    }();
    var rt = /^(none|table(?!-c[ea]).+)/,
        ot = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        lt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ut = ["Webkit", "Moz", "ms"],
        ct = Z.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = A(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, s, r, o = he.camelCase(t),
                    l = e.style;
                return t = he.cssProps[o] || (he.cssProps[o] = O(o) || o), r = he.cssHooks[t] || he.cssHooks[o], void 0 === i ? r && "get" in r && void 0 !== (a = r.get(e, !1, n)) ? a : l[t] : (s = typeof i, "string" === s && (a = Pe.exec(i)) && a[1] && (i = p(e, t, a), s = "number"), void(null != i && i === i && ("number" === s && (i += a && a[3] || (he.cssNumber[o] ? "" : "px")), ce.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l[t] = i))))
            }
        },
        css: function(e, t, i, n) {
            var a, s, r, o = he.camelCase(t);
            return t = he.cssProps[o] || (he.cssProps[o] = O(o) || o), r = he.cssHooks[t] || he.cssHooks[o], r && "get" in r && (a = r.get(e, !0, i)), void 0 === a && (a = A(e, t, n)), "normal" === a && t in lt && (a = lt[t]), "" === i || i ? (s = parseFloat(a), i === !0 || isFinite(s) ? s || 0 : a) : a
        }
    }), he.each(["height", "width"], function(e, t) {
        he.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? !rt.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? E(e, t, n) : qe(e, ot, function() {
                    return E(e, t, n)
                }) : void 0
            },
            set: function(e, i, n) {
                var a, s = n && st(e),
                    r = n && I(e, t, n, "border-box" === he.css(e, "boxSizing", !1, s), s);
                return r && (a = Pe.exec(i)) && "px" !== (a[3] || "px") && (e.style[t] = i, i = he.css(e, t)), N(e, i, r)
            }
        }
    }), he.cssHooks.marginLeft = j(ce.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        he.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, a = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) a[e + Le[n] + t] = s[n] || s[n - 2] || s[0];
                return a
            }
        }, nt.test(e) || (he.cssHooks[e + t].set = N)
    }), he.fn.extend({
        css: function(e, t) {
            return je(this, function(e, t, i) {
                var n, a, s = {},
                    r = 0;
                if (he.isArray(t)) {
                    for (n = st(e), a = t.length; a > r; r++) s[t[r]] = he.css(e, t[r], !1, n);
                    return s
                }
                return void 0 !== i ? he.style(e, t, i) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = F, F.prototype = {
        constructor: F,
        init: function(e, t, i, n, a, s) {
            this.elem = e, this.prop = i, this.easing = a || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (he.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = F.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, he.fx = F.prototype.init, he.fx.step = {};
    var dt, ht, pt = /^(?:toggle|show|hide)$/,
        ft = /queueHooks$/;
    he.Animation = he.extend(Y, {
            tweeners: {
                "*": [function(e, t) {
                    var i = this.createTween(e, t);
                    return p(i.elem, e, Pe.exec(t), i), i
                }]
            },
            tweener: function(e, t) {
                he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match($e);
                for (var i, n = 0, a = e.length; a > n; n++) i = e[n], Y.tweeners[i] = Y.tweeners[i] || [], Y.tweeners[i].unshift(t)
            },
            prefilters: [q],
            prefilter: function(e, t) {
                t ? Y.prefilters.unshift(e) : Y.prefilters.push(e)
            }
        }), he.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? he.extend({}, e) : {
                complete: i || !i && t || he.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !he.isFunction(t) && t
            };
            return he.fx.off || Z.hidden ? n.duration = 0 : n.duration = "number" == typeof n.duration ? n.duration : n.duration in he.fx.speeds ? he.fx.speeds[n.duration] : he.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                he.isFunction(n.old) && n.old.call(this), n.queue && he.dequeue(this, n.queue)
            }, n
        }, he.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(He).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var a = he.isEmptyObject(e),
                    s = he.speed(t, i, n),
                    r = function() {
                        var t = Y(this, he.extend({}, e), s);
                        (a || Ne.get(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, a || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        a = null != e && e + "queueHooks",
                        s = he.timers,
                        r = Ne.get(this);
                    if (a) r[a] && r[a].stop && n(r[a]);
                    else
                        for (a in r) r[a] && r[a].stop && ft.test(a) && n(r[a]);
                    for (a = s.length; a--;) s[a].elem !== this || null != e && s[a].queue !== e || (s[a].anim.stop(i), t = !1, s.splice(a, 1));
                    !t && i || he.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, i = Ne.get(this),
                        n = i[e + "queue"],
                        a = i[e + "queueHooks"],
                        s = he.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, he.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; r > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), he.each(["toggle", "show", "hide"], function(e, t) {
            var i = he.fn[t];
            he.fn[t] = function(e, n, a) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(L(t, !0), e, n, a)
            }
        }), he.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            he.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), he.timers = [], he.fx.tick = function() {
            var e, t = 0,
                i = he.timers;
            for (dt = he.now(); t < i.length; t++) e = i[t], e() || i[t] !== e || i.splice(t--, 1);
            i.length || he.fx.stop(), dt = void 0
        }, he.fx.timer = function(e) {
            he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
        }, he.fx.interval = 13, he.fx.start = function() {
            ht || (ht = e.requestAnimationFrame ? e.requestAnimationFrame(z) : e.setInterval(he.fx.tick, he.fx.interval))
        }, he.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(ht) : e.clearInterval(ht), ht = null
        }, he.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, he.fn.delay = function(t, i) {
            return t = he.fx ? he.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function(i, n) {
                var a = e.setTimeout(i, t);
                n.stop = function() {
                    e.clearTimeout(a)
                }
            })
        },
        function() {
            var e = Z.createElement("input"),
                t = Z.createElement("select"),
                i = t.appendChild(Z.createElement("option"));
            e.type = "checkbox", ce.checkOn = "" !== e.value, ce.optSelected = i.selected, e = Z.createElement("input"), e.value = "t", e.type = "radio", ce.radioValue = "t" === e.value
        }();
    var mt, gt = he.expr.attrHandle;
    he.fn.extend({
        attr: function(e, t) {
            return je(this, he.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function(e, t, i) {
            var n, a, s = e.nodeType;
            return 3 !== s && 8 !== s && 2 !== s ? "undefined" == typeof e.getAttribute ? he.prop(e, t, i) : (1 === s && he.isXMLDoc(e) || (a = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : void 0)), void 0 !== i ? null === i ? void he.removeAttr(e, t) : a && "set" in a && void 0 !== (n = a.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : a && "get" in a && null !== (n = a.get(e, t)) ? n : (n = he.find.attr(e, t), null == n ? void 0 : n)) : void 0
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ce.radioValue && "radio" === t && he.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                a = t && t.match($e);
            if (a && 1 === e.nodeType)
                for (; i = a[n++];) e.removeAttribute(i)
        }
    }), mt = {
        set: function(e, t, i) {
            return t === !1 ? he.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = gt[t] || he.find.attr;
        gt[t] = function(e, t, n) {
            var a, s, r = t.toLowerCase();
            return n || (s = gt[r], gt[r] = a, a = null != i(e, t, n) ? r : null, gt[r] = s), a
        }
    });
    var _t = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return je(this, he.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[he.propFix[e] || e]
            })
        }
    }), he.extend({
        prop: function(e, t, i) {
            var n, a, s = e.nodeType;
            return 3 !== s && 8 !== s && 2 !== s ? (1 === s && he.isXMLDoc(e) || (t = he.propFix[t] || t, a = he.propHooks[t]), void 0 !== i ? a && "set" in a && void 0 !== (n = a.set(e, i, t)) ? n : e[t] = i : a && "get" in a && null !== (n = a.get(e, t)) ? n : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : _t.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ce.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        he.propFix[this.toLowerCase()] = this
    });
    var yt = /[\t\r\n\f]/g;
    he.fn.extend({
        addClass: function(e) {
            var t, i, n, a, s, r, o, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match($e) || []; i = this[l++];)
                    if (a = W(i), n = 1 === i.nodeType && (" " + a + " ").replace(yt, " ")) {
                        for (r = 0; s = t[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        o = he.trim(n), a !== o && i.setAttribute("class", o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, a, s, r, o, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match($e) || []; i = this[l++];)
                    if (a = W(i), n = 1 === i.nodeType && (" " + a + " ").replace(yt, " ")) {
                        for (r = 0; s = t[r++];)
                            for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                        o = he.trim(n), a !== o && i.setAttribute("class", o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(i) {
                he(this).toggleClass(e.call(this, i, W(this), t), t)
            }) : this.each(function() {
                var t, n, a, s;
                if ("string" === i)
                    for (n = 0, a = he(this), s = e.match($e) || []; t = s[n++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                else void 0 !== e && "boolean" !== i || (t = W(this), t && Ne.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ne.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + W(i) + " ").replace(yt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g,
        kt = /[\x20\t\r\n\f]+/g;
    he.fn.extend({
        val: function(e) {
            var t, i, n, a = this[0];
            return arguments.length ? (n = he.isFunction(e), this.each(function(i) {
                var a;
                1 === this.nodeType && (a = n ? e.call(this, i, he(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : he.isArray(a) && (a = he.map(a, function(e) {
                    return null == e ? "" : e + ""
                })), t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
            })) : a ? (t = he.valHooks[a.type] || he.valHooks[a.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(a, "value")) ? i : (i = a.value, "string" == typeof i ? i.replace(bt, "") : null == i ? "" : i)) : void 0
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : he.trim(he.text(e)).replace(kt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, a = e.selectedIndex, s = "select-one" === e.type, r = s ? null : [], o = s ? a + 1 : n.length, l = 0 > a ? o : s ? a : 0; o > l; l++)
                        if (i = n[l], (i.selected || l === a) && !i.disabled && (!i.parentNode.disabled || !he.nodeName(i.parentNode, "optgroup"))) {
                            if (t = he(i).val(), s) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var i, n, a = e.options, s = he.makeArray(t), r = a.length; r--;) n = a[r], (n.selected = he.inArray(he.valHooks.option.get(n), s) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1), s
                }
            }
        }
    }), he.each(["radio", "checkbox"], function() {
        he.valHooks[this] = {
            set: function(e, t) {
                return he.isArray(t) ? e.checked = he.inArray(he(e).val(), t) > -1 : void 0
            }
        }, ce.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function(t, i, n, a) {
            var s, r, o, l, u, c, d, h = [n || Z],
                p = oe.call(t, "type") ? t.type : t,
                f = oe.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = o = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !xt.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[he.expando] ? t : new he.Event(p, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : he.makeArray(i, [t]), d = he.event.special[p] || {}, a || !d.trigger || d.trigger.apply(n, i) !== !1)) {
                if (!a && !d.noBubble && !he.isWindow(n)) {
                    for (l = d.delegateType || p, xt.test(l + p) || (r = r.parentNode); r; r = r.parentNode) h.push(r), o = r;
                    o === (n.ownerDocument || Z) && h.push(o.defaultView || o.parentWindow || e)
                }
                for (s = 0;
                    (r = h[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? l : d.bindType || p, c = (Ne.get(r, "events") || {})[t.type] && Ne.get(r, "handle"), c && c.apply(r, i), c = u && r[u], c && c.apply && Oe(r) && (t.result = c.apply(r, i), t.result === !1 && t.preventDefault());
                return t.type = p, a || t.isDefaultPrevented() || d._default && d._default.apply(h.pop(), i) !== !1 || !Oe(n) || u && he.isFunction(n[p]) && !he.isWindow(n) && (o = n[u], o && (n[u] = null), he.event.triggered = p, n[p](), he.event.triggered = void 0, o && (n[u] = o)), t.result
            }
        },
        simulate: function(e, t, i) {
            var n = he.extend(new he.Event, i, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(n, null, t)
        }
    }), he.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? he.event.trigger(e, t, i, !0) : void 0
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        he.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), he.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ce.focusin = "onfocusin" in e, ce.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    a = Ne.access(n, t);
                a || n.addEventListener(e, i, !0), Ne.access(n, t, (a || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    a = Ne.access(n, t) - 1;
                a ? Ne.access(n, t, a) : (n.removeEventListener(e, i, !0), Ne.remove(n, t))
            }
        }
    });
    var wt = e.location,
        Dt = he.now(),
        Ct = /\?/;
    he.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (n) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), i
    };
    var Mt = /\[\]$/,
        Tt = /\r?\n/g,
        $t = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var i, n = [],
            a = function(e, t) {
                var i = he.isFunction(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
            a(this.name, this.value)
        });
        else
            for (i in e) B(i, e[i], t, a);
        return n.join("&")
    }, he.fn.extend({
        serialize: function() {
            return he.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && St.test(this.nodeName) && !$t.test(e) && (this.checked || !Ye.test(e))
            }).map(function(e, t) {
                var i = he(this).val();
                return null == i ? null : he.isArray(i) ? he.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Tt, "\r\n")
                }
            }).get()
        }
    });
    var At = /%20/g,
        jt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Et = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        zt = {},
        Pt = {},
        Lt = "*/".concat("*"),
        Ht = Z.createElement("a");
    Ht.href = wt.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: It.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? V(V(e, he.ajaxSettings), t) : V(he.ajaxSettings, e)
        },
        ajaxPrefilter: U(zt),
        ajaxTransport: U(Pt),
        ajax: function(t, i) {
            function n(t, i, n, o) {
                var u, h, p, b, k, x = i;
                c || (c = !0, l && e.clearTimeout(l), a = void 0, r = o || "", w.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (b = G(f, w, n)), b = X(f, b, w, u), u ? (f.ifModified && (k = w.getResponseHeader("Last-Modified"), k && (he.lastModified[s] = k), k = w.getResponseHeader("etag"), k && (he.etag[s] = k)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, h = b.data, p = b.error, u = !p)) : (p = x, !t && x || (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (i || x) + "", u ? _.resolveWith(m, [h, x, w]) : _.rejectWith(m, [w, x, p]), w.statusCode(y), y = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? h : p]), v.fireWith(m, [w, x]), d && (g.trigger("ajaxComplete", [w, f]), --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var a, s, r, o, l, u, c, d, h, p, f = he.ajaxSetup({}, i),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? he(m) : he.event,
                _ = he.Deferred(),
                v = he.Callbacks("once memory"),
                y = f.statusCode || {},
                b = {},
                k = {},
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!o)
                                for (o = {}; t = Nt.exec(r);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) w.always(e[w.status]);
                            else
                                for (t in e) y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return a && a.abort(t), n(0, t), this
                    }
                };
            if (_.promise(w), f.url = ((t || f.url || wt.href) + "").replace(Ft, wt.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match($e) || [""], null == f.crossDomain) {
                u = Z.createElement("a");
                try {
                    u.href = f.url, u.href = u.href, f.crossDomain = Ht.protocol + "//" + Ht.host != u.protocol + "//" + u.host
                } catch (D) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = he.param(f.data, f.traditional)), K(zt, f, i, w), c) return w;
            d = he.event && f.global, d && 0 === he.active++ && he.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Et.test(f.type), s = f.url.replace(jt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+")) : (p = f.url.slice(s.length), f.data && (s += (Ct.test(s) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (s = s.replace(Ot, ""), p = (Ct.test(s) ? "&" : "?") + "_=" + Dt++ + p), f.url = s + p), f.ifModified && (he.lastModified[s] && w.setRequestHeader("If-Modified-Since", he.lastModified[s]), he.etag[s] && w.setRequestHeader("If-None-Match", he.etag[s])), (f.data && f.hasContent && f.contentType !== !1 || i.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : f.accepts["*"]);
            for (h in f.headers) w.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (f.beforeSend.call(m, w, f) === !1 || c)) return w.abort();
            if (x = "abort", v.add(f.complete), w.done(f.success), w.fail(f.error), a = K(Pt, f, i, w)) {
                if (w.readyState = 1, d && g.trigger("ajaxSend", [w, f]), c) return w;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, a.send(b, n)
                } catch (D) {
                    if (c) throw D;
                    n(-1, D)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, i) {
            return he.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return he.get(e, void 0, t, "script")
        }
    }), he.each(["get", "post"], function(e, t) {
        he[t] = function(e, i, n, a) {
            return he.isFunction(i) && (a = a || n, n = i, i = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: a,
                data: i,
                success: n
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function(e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, he.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = he(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = he.isFunction(e);
            return this.each(function(i) {
                he(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                he(this).replaceWith(this.childNodes)
            }), this
        }
    }), he.expr.pseudos.hidden = function(e) {
        return !he.expr.pseudos.visible(e)
    }, he.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, he.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var qt = {
            0: 200,
            1223: 204
        },
        Rt = he.ajaxSettings.xhr();
    ce.cors = !!Rt && "withCredentials" in Rt, ce.ajax = Rt = !!Rt, he.ajaxTransport(function(t) {
        var i, n;
        return ce.cors || Rt && !t.crossDomain ? {
            send: function(a, s) {
                var r, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) o[r] = t.xhrFields[r];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
                for (r in a) o.setRequestHeader(r, a[r]);
                i = function(e) {
                    return function() {
                        i && (i = n = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? s(0, "error") : s(o.status, o.statusText) : s(qt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                            binary: o.response
                        } : {
                            text: o.responseText
                        }, o.getAllResponseHeaders()))
                    }
                }, o.onload = i(), n = o.onerror = i("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function() {
                    4 === o.readyState && e.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (i) throw l
                }
            },
            abort: function() {
                i && i()
            }
        } : void 0
    }), he.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), he.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function(n, a) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function(e) {
                        t.remove(), i = null, e && a("error" === e.type ? 404 : 200, e.type)
                    }), Z.head.appendChild(t[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Yt = [],
        Wt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || he.expando + "_" + Dt++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function(t, i, n) {
        var a, s, r, o = t.jsonp !== !1 && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");
        return o || "jsonp" === t.dataTypes[0] ? (a = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Wt, "$1" + a) : t.jsonp !== !1 && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function() {
            return r || he.error(a + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[a], e[a] = function() {
            r = arguments
        }, n.always(function() {
            void 0 === s ? he(e).removeProp(a) : e[a] = s, t[a] && (t.jsonpCallback = i.jsonpCallback, Yt.push(a)), r && he.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), ce.createHTMLDocument = function() {
        var e = Z.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), he.parseHTML = function(e, t, i) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (i = t, t = !1);
        var n, a, s;
        return t || (ce.createHTMLDocument ? (t = Z.implementation.createHTMLDocument(""), n = t.createElement("base"), n.href = Z.location.href, t.head.appendChild(n)) : t = Z), a = ke.exec(e), s = !i && [], a ? [t.createElement(a[1])] : (a = v([e], t, s), s && s.length && he(s).remove(), he.merge([], a.childNodes))
    }, he.fn.load = function(e, t, i) {
        var n, a, s, r = this,
            o = e.indexOf(" ");
        return o > -1 && (n = he.trim(e.slice(o)), e = e.slice(0, o)), he.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (a = "POST"), r.length > 0 && he.ajax({
            url: e,
            type: a || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, r.html(n ? he("<div>").append(he.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            r.each(function() {
                i.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        he.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), he.expr.pseudos.animated = function(e) {
        return he.grep(he.timers, function(t) {
            return e === t.elem
        }).length
    }, he.offset = {
        setOffset: function(e, t, i) {
            var n, a, s, r, o, l, u, c = he.css(e, "position"),
                d = he(e),
                h = {};
            "static" === c && (e.style.position = "relative"), o = d.offset(), s = he.css(e, "top"), l = he.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, u ? (n = d.position(), r = n.top, a = n.left) : (r = parseFloat(s) || 0, a = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, i, he.extend({}, o))), null != t.top && (h.top = t.top - o.top + r), null != t.left && (h.left = t.left - o.left + a), "using" in t ? t.using.call(e, h) : d.css(h)
        }
    }, he.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                he.offset.setOffset(this, e, t)
            });
            var t, i, n, a, s = this[0];
            return s ? s.getClientRects().length ? (n = s.getBoundingClientRect(), n.width || n.height ? (a = s.ownerDocument, i = Q(a), t = a.documentElement, {
                top: n.top + i.pageYOffset - t.clientTop,
                left: n.left + i.pageXOffset - t.clientLeft
            }) : n) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === he.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (n = e.offset()), n = {
                    top: n.top + he.css(e[0], "borderTopWidth", !0),
                    left: n.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - n.top - he.css(i, "marginTop", !0),
                    left: t.left - n.left - he.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Ve
            })
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        he.fn[e] = function(n) {
            return je(this, function(e, n, a) {
                var s = Q(e);
                return void 0 === a ? s ? s[t] : e[n] : void(s ? s.scrollTo(i ? s.pageXOffset : a, i ? a : s.pageYOffset) : e[n] = a)
            }, e, n, arguments.length)
        }
    }), he.each(["top", "left"], function(e, t) {
        he.cssHooks[t] = j(ce.pixelPosition, function(e, i) {
            return i ? (i = A(e, t), at.test(i) ? he(e).position()[t] + "px" : i) : void 0
        })
    }), he.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            he.fn[n] = function(a, s) {
                var r = arguments.length && (i || "boolean" != typeof a),
                    o = i || (a === !0 || s === !0 ? "margin" : "border");
                return je(this, function(t, i, a) {
                    var s;
                    return he.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === a ? he.css(t, i, o) : he.style(t, i, a, o)
                }, t, r ? a : void 0, r)
            }
        })
    }), he.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return he
    });
    var Bt = e.jQuery,
        Ut = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = Ut), t && e.jQuery === he && (e.jQuery = Bt), he
    }, t || (e.jQuery = e.$ = he), he
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(t, n) {
        var a, s, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode, s = a.name, t.href && s && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap='#" + s + "']")[0], !!r && i(r)) : !1) : (/^(input|select|textarea|button|object)$/.test(o) ? !t.disabled : "a" === o ? t.href || n : n) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    function n(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            e = e.parent()
        }
        return 0
    }

    function a() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = s(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", r)
    }

    function r() {
        e.datepicker._isDisabledDatepicker(d.inline ? d.dpDiv.parent()[0] : d.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function o(t, i) {
        e.extend(t, i);
        for (var n in i) null == i[n] && (t[n] = i[n]);
        return t
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                n = "absolute" === i,
                a = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                s = this.parents().filter(function() {
                    var t = e(this);
                    return n && "static" === t.css("position") ? !1 : a.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && s.length ? s : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, n) {
            return !!e.data(t, n[3])
        },
        focusable: function(i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var n = e.attr(i, "tabindex"),
                a = isNaN(n);
            return (a || n >= 0) && t(i, !a)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function n(t, i, n, s) {
            return e.each(a, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var a = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            s = i.toLowerCase(),
            r = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function(t) {
            return void 0 === t ? r["inner" + i].call(this) : this.each(function() {
                e(this).css(s, n(this, t) + "px")
            })
        }, e.fn["outer" + i] = function(t, a) {
            return "number" != typeof t ? r["outer" + i].call(this, t) : this.each(function() {
                e(this).css(s, n(this, t, !0, a) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), n && n.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var i, n, a = e(this[0]); a.length && a[0] !== document;) {
                    if (i = a.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(a.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                    a = a.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, i, n) {
            var a, s = e.ui[t].prototype;
            for (a in n) s.plugins[a] = s.plugins[a] || [], s.plugins[a].push([i, n[a]])
        },
        call: function(e, t, i, n) {
            var a, s = e.plugins[t];
            if (s && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (a = 0; s.length > a; a++) e.options[s[a][0]] && s[a][1].apply(e.element, i)
        }
    };
    var l = 0,
        u = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var n, a, s;
            for (s = 0; null != (a = i[s]); s++) try {
                n = e._data(a, "events"), n && n.remove && e(a).triggerHandler("remove")
            } catch (r) {}
            t(i)
        }
    }(e.cleanData), e.widget = function(t, i, n) {
        var a, s, r, o, l = {},
            u = t.split(".")[0];
        return t = t.split(".")[1], a = u + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][a.toLowerCase()] = function(t) {
            return !!e.data(t, a)
        }, e[u] = e[u] || {}, s = e[u][t], r = e[u][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new r(e, t)
        }, e.extend(r, s, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }), o = new i, o.options = e.widget.extend({}, o.options), e.each(n, function(t, n) {
            return e.isFunction(n) ? void(l[t] = function() {
                var e = function() {
                        return i.prototype[t].apply(this, arguments)
                    },
                    a = function(e) {
                        return i.prototype[t].apply(this, e)
                    };
                return function() {
                    var t, i = this._super,
                        s = this._superApply;
                    return this._super = e, this._superApply = a, t = n.apply(this, arguments), this._super = i, this._superApply = s, t
                }
            }()) : void(l[t] = n)
        }), r.prototype = e.widget.extend(o, {
            widgetEventPrefix: s ? o.widgetEventPrefix || t : t
        }, l, {
            constructor: r,
            namespace: u,
            widgetName: t,
            widgetFullName: a
        }), s ? (e.each(s._childConstructors, function(t, i) {
            var n = i.prototype;
            e.widget(n.namespace + "." + n.widgetName, r, i._proto)
        }), delete s._childConstructors) : i._childConstructors.push(r), e.widget.bridge(t, r), r
    }, e.widget.extend = function(t) {
        for (var i, n, a = u.call(arguments, 1), s = 0, r = a.length; r > s; s++)
            for (i in a[s]) n = a[s][i], a[s].hasOwnProperty(i) && void 0 !== n && (t[i] = e.isPlainObject(n) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], n) : e.widget.extend({}, n) : n);
        return t
    }, e.widget.bridge = function(t, i) {
        var n = i.prototype.widgetFullName || t;
        e.fn[t] = function(a) {
            var s = "string" == typeof a,
                r = u.call(arguments, 1),
                o = this;
            return s ? this.each(function() {
                var i, s = e.data(this, n);
                return "instance" === a ? (o = s, !1) : s ? e.isFunction(s[a]) && "_" !== a.charAt(0) ? (i = s[a].apply(s, r), i !== s && void 0 !== i ? (o = i && i.jquery ? o.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'");
            }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function() {
                var t = e.data(this, n);
                t ? (t.option(a || {}), t._init && t._init()) : e.data(this, n, new i(a, this))
            })), o
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var n, a, s, r = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (r = {}, n = t.split("."), t = n.shift(), n.length) {
                    for (a = r[t] = e.widget.extend({}, this.options[t]), s = 0; n.length - 1 > s; s++) a[n[s]] = a[n[s]] || {}, a = a[n[s]];
                    if (t = n.pop(), 1 === arguments.length) return void 0 === a[t] ? null : a[t];
                    a[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    r[t] = i
                }
            return this._setOptions(r), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, i, n) {
            var a, s = this;
            "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = a = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, a = this.widget()), e.each(n, function(n, r) {
                function o() {
                    return t || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : void 0
                }
                "string" != typeof r && (o.guid = r.guid = r.guid || o.guid || e.guid++);
                var l = n.match(/^([\w:-]*)\s*(.*)$/),
                    u = l[1] + s.eventNamespace,
                    c = l[2];
                c ? a.delegate(c, u, o) : i.bind(u, o)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? n[e] : e).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, n) {
            var a, s, r = this.options[t];
            if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
                for (a in s) a in i || (i[a] = s[a]);
            return this.element.trigger(i, n), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(n, a, s) {
            "string" == typeof a && (a = {
                effect: a
            });
            var r, o = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t;
            a = a || {}, "number" == typeof a && (a = {
                duration: a
            }), r = !e.isEmptyObject(a), a.complete = s, a.delay && n.delay(a.delay), r && e.effects && e.effects.effect[o] ? n[t](a) : o !== t && n[o] ? n[o](a.duration, a.easing, s) : n.queue(function(i) {
                e(this)[t](), s && s.call(n[0]), i()
            })
        }
    }), e.widget;
    var c = !1;
    e(document).mouseup(function() {
        c = !1
    }), e.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!c) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this,
                    n = 1 === t.which,
                    a = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), c = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), c = !1, !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }), e.extend(e.ui, {
        datepicker: {
            version: "1.11.4"
        }
    });
    var d;
    e.extend(a.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return o(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, i) {
            var n, a, s;
            n = t.nodeName.toLowerCase(), a = "div" === n || "span" === n, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), a), s.settings = e.extend({}, i || {}), "input" === n ? this._connectDatepicker(t, s) : a && this._inlineDatepicker(t, s)
        },
        _newInst: function(t, i) {
            var n = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: n,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var n = e(t);
            i.append = e([]), i.trigger = e([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var n, a, s, r = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && t.focus(this._showDatepicker), ("button" === n || "both" === n) && (a = this._get(i, "buttonText"), s = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: s,
                alt: a,
                title: a
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
                src: s,
                alt: a,
                title: a
            }) : a)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, n, a, s = new Date(2009, 11, 20),
                    r = this._get(e, "dateFormat");
                r.match(/[DM]/) && (t = function(e) {
                    for (i = 0, n = 0, a = 0; e.length > a; a++) e[a].length > i && (i = e[a].length, n = a);
                    return n
                }, s.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var n = e(t);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, n, a, s) {
            var r, l, u, c, d, h = this._dialogInst;
            return h || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), h = this._dialogInst = this._newInst(this._dialogInput, !1), h.settings = {}, e.data(this._dialogInput[0], "datepicker", h)), o(h.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(h, i) : i, this._dialogInput.val(i), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (l = document.documentElement.clientWidth, u = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, u / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), h.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", h), this
        },
        _destroyDatepicker: function(t) {
            var i, n = e(t),
                a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (a.append.remove(), a.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), d === a && (d = null))
        },
        _enableDatepicker: function(t) {
            var i, n, a = e(t),
                s = e.data(t, "datepicker");
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, s.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (n = a.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var i, n, a = e(t),
                s = e.data(t, "datepicker");
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, s.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (n = a.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, i, n) {
            var a, s, r, l, u = this._getInst(t);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : u ? "all" === i ? e.extend({}, u.settings) : this._get(u, i) : null : (a = i || {}, "string" == typeof i && (a = {}, a[i] = n), void(u && (this._curInst === u && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), r = this._getMinMaxDate(u, "min"), l = this._getMinMaxDate(u, "max"), o(u.settings, a), null !== r && void 0 !== a.dateFormat && void 0 === a.minDate && (u.settings.minDate = this._formatDate(u, r)), null !== l && void 0 !== a.dateFormat && void 0 === a.maxDate && (u.settings.maxDate = this._formatDate(u, l)), "disabled" in a && (a.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), u), this._autoSize(u), this._setDate(u, s), this._updateAlternate(u), this._updateDatepicker(u))))
        },
        _changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i, n, a, s = e.datepicker._getInst(t.target),
                r = !0,
                o = s.dpDiv.is(".ui-datepicker-rtl");
            if (s._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return a = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), a[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, a[0]), i = e.datepicker._get(s, "onSelect"), i ? (n = e.datepicker._formatDate(s), i.apply(s.input ? s.input[0] : null, [n, s])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, n, a = e.datepicker._getInst(t.target);
            return e.datepicker._get(a, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(a, "dateFormat")), n = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var i, n = e.datepicker._getInst(t.target);
            if (n.input.val() !== n.lastVal) try {
                i = e.datepicker.parseDate(e.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, e.datepicker._getFormatConfig(n)), i && (e.datepicker._setDateFromField(n), e.datepicker._updateAlternate(n), e.datepicker._updateDatepicker(n))
            } catch (a) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, a, s, r, l, u, c;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), s = a ? a.apply(t, [t, i]) : {}, s !== !1 && (o(i.settings, s), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function() {
                    return r |= "fixed" === e(this).css("position"), !r
                }), l = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), l = e.datepicker._checkOffset(i, l, r), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: l.left + "px",
                    top: l.top + "px"
                }), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", n(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, d = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i, n = this._getNumberOfMonths(t),
                a = n[1],
                s = 17,
                o = t.dpDiv.find("." + this._dayOverClass + " a");
            o.length > 0 && r.apply(o.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", s * a + "em"), t.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, i, n) {
            var a = t.dpDiv.outerWidth(),
                s = t.dpDiv.outerHeight(),
                r = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : e(document).scrollLeft()),
                u = document.documentElement.clientHeight + (n ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? a - r : 0, i.left -= n && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= n && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + a > l && l > a ? Math.abs(i.left + a - l) : 0), i.top -= Math.min(i.top, i.top + s > u && u > s ? Math.abs(s + o) : 0), i
        },
        _findPos: function(t) {
            for (var i, n = this._getInst(t), a = this._get(n, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[a ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var i, n, a, s, r = this._curInst;
            !r || t && r !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), n = this._get(r, "duration"), a = function() {
                e.datepicker._tidyDialog(r)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? r.dpDiv.hide(i, e.datepicker._get(r, "showOptions"), n, a) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, a), i || a(), this._datepickerShowing = !1, s = this._get(r, "onClose"), s && s.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    n = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== n) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, n) {
            var a = e(t),
                s = this._getInst(a[0]);
            this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(s, i + ("M" === n ? this._get(s, "showCurrentAtPos") : 0), n), this._updateDatepicker(s))
        },
        _gotoToday: function(t) {
            var i, n = e(t),
                a = this._getInst(n[0]);
            this._get(a, "gotoCurrent") && a.currentDay ? (a.selectedDay = a.currentDay, a.drawMonth = a.selectedMonth = a.currentMonth, a.drawYear = a.selectedYear = a.currentYear) : (i = new Date, a.selectedDay = i.getDate(), a.drawMonth = a.selectedMonth = i.getMonth(), a.drawYear = a.selectedYear = i.getFullYear()), this._notifyChange(a), this._adjustDate(n)
        },
        _selectMonthYear: function(t, i, n) {
            var a = e(t),
                s = this._getInst(a[0]);
            s["selected" + ("M" === n ? "Month" : "Year")] = s["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(a)
        },
        _selectDay: function(t, i, n, a) {
            var s, r = e(t);
            e(a).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (s = this._getInst(r[0]), s.selectedDay = s.currentDay = e("a", a).html(), s.selectedMonth = s.currentMonth = i, s.selectedYear = s.currentYear = n, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var n, a = e(t),
                s = this._getInst(a[0]);
            i = null != i ? i : this._formatDate(s), s.input && s.input.val(i), this._updateAlternate(s), n = this._get(s, "onSelect"), n ? n.apply(s.input ? s.input[0] : null, [i, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, n, a, s = this._get(t, "altField");
            s && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), n = this._getDate(t), a = this.formatDate(i, n, this._getFormatConfig(t)), e(s).each(function() {
                e(this).val(a)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, n) {
            if (null == t || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
            var a, s, r, o, l = 0,
                u = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
                d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                h = (n ? n.dayNames : null) || this._defaults.dayNames,
                p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (n ? n.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                _ = -1,
                v = -1,
                y = !1,
                b = function(e) {
                    var i = t.length > a + 1 && t.charAt(a + 1) === e;
                    return i && a++, i
                },
                k = function(e) {
                    var t = b(e),
                        n = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        a = "y" === e ? n : 1,
                        s = RegExp("^\\d{" + a + "," + n + "}"),
                        r = i.substring(l).match(s);
                    if (!r) throw "Missing number at position " + l;
                    return l += r[0].length, parseInt(r[0], 10)
                },
                x = function(t, n, a) {
                    var s = -1,
                        r = e.map(b(t) ? a : n, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(r, function(e, t) {
                            var n = t[1];
                            return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (s = t[0], l += n.length, !1) : void 0
                        }), -1 !== s) return s + 1;
                    throw "Unknown name at position " + l
                },
                w = function() {
                    if (i.charAt(l) !== t.charAt(a)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (a = 0; t.length > a; a++)
                if (y) "'" !== t.charAt(a) || b("'") ? w() : y = !1;
                else switch (t.charAt(a)) {
                    case "d":
                        _ = k("d");
                        break;
                    case "D":
                        x("D", d, h);
                        break;
                    case "o":
                        v = k("o");
                        break;
                    case "m":
                        g = k("m");
                        break;
                    case "M":
                        g = x("M", p, f);
                        break;
                    case "y":
                        m = k("y");
                        break;
                    case "@":
                        o = new Date(k("@")), m = o.getFullYear(), g = o.getMonth() + 1, _ = o.getDate();
                        break;
                    case "!":
                        o = new Date((k("!") - this._ticksTo1970) / 1e4), m = o.getFullYear(), g = o.getMonth() + 1, _ = o.getDate();
                        break;
                    case "'":
                        b("'") ? w() : y = !0;
                        break;
                    default:
                        w()
                }
                if (i.length > l && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), v > -1)
                for (g = 1, _ = v; s = this._getDaysInMonth(m, g - 1), !(s >= _);) g++, _ -= s;
            if (o = this._daylightSavingAdjust(new Date(m, g - 1, _)), o.getFullYear() !== m || o.getMonth() + 1 !== g || o.getDate() !== _) throw "Invalid date";
            return o
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t) return "";
            var n, a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(t) {
                    var i = e.length > n + 1 && e.charAt(n + 1) === t;
                    return i && n++, i
                },
                u = function(e, t, i) {
                    var n = "" + t;
                    if (l(e))
                        for (; i > n.length;) n = "0" + n;
                    return n
                },
                c = function(e, t, i, n) {
                    return l(e) ? n[t] : i[t]
                },
                d = "",
                h = !1;
            if (t)
                for (n = 0; e.length > n; n++)
                    if (h) "'" !== e.charAt(n) || l("'") ? d += e.charAt(n) : h = !1;
                    else switch (e.charAt(n)) {
                        case "d":
                            d += u("d", t.getDate(), 2);
                            break;
                        case "D":
                            d += c("D", t.getDay(), a, s);
                            break;
                        case "o":
                            d += u("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            d += u("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += c("M", t.getMonth(), r, o);
                            break;
                        case "y":
                            d += l("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            d += t.getTime();
                            break;
                        case "!":
                            d += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? d += "'" : h = !0;
                            break;
                        default:
                            d += e.charAt(n)
                    }
                    return d
        },
        _possibleChars: function(e) {
            var t, i = "",
                n = !1,
                a = function(i) {
                    var n = e.length > t + 1 && e.charAt(t + 1) === i;
                    return n && t++, n
                };
            for (t = 0; e.length > t; t++)
                if (n) "'" !== e.charAt(t) || a("'") ? i += e.charAt(t) : n = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        a("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
                return i
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    n = e.lastVal = e.input ? e.input.val() : null,
                    a = this._getDefaultDate(e),
                    s = a,
                    r = this._getFormatConfig(e);
                try {
                    s = this.parseDate(i, n, r) || a
                } catch (o) {
                    n = t ? "" : n
                }
                e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = n ? s.getDate() : 0, e.currentMonth = n ? s.getMonth() : 0, e.currentYear = n ? s.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, n) {
            var a = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                s = function(i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                    } catch (n) {}
                    for (var a = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = a.getFullYear(), r = a.getMonth(), o = a.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = l.exec(i); u;) {
                        switch (u[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(u[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += 7 * parseInt(u[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(u[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(s, r));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(u[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(s, r))
                        }
                        u = l.exec(i)
                    }
                    return new Date(s, r, o)
                },
                r = null == i || "" === i ? n : "string" == typeof i ? s(i) : "number" == typeof i ? isNaN(i) ? n : a(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? n : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, i) {
            var n = !t,
                a = e.selectedMonth,
                s = e.selectedYear,
                r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), a === e.selectedMonth && s === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"),
                n = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(n, -i, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(n, +i, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(n)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, n, a, s, r, o, l, u, c, d, h, p, f, m, g, _, v, y, b, k, x, w, D, C, M, T, $, S, A, j, O, N, I, E, F, z, P, L, H = new Date,
                q = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
                R = this._get(e, "isRTL"),
                Y = this._get(e, "showButtonPanel"),
                W = this._get(e, "hideIfNoPrevNext"),
                B = this._get(e, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(e),
                K = this._get(e, "showCurrentAtPos"),
                V = this._get(e, "stepMonths"),
                G = 1 !== U[0] || 1 !== U[1],
                X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(e, "min"),
                J = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - K,
                ee = e.drawYear;
            if (0 > Z && (Z += 12, ee--), J)
                for (t = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), t = Q && Q > t ? Q : t; this._daylightSavingAdjust(new Date(ee, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, ee--);
            for (e.drawMonth = Z, e.drawYear = ee, i = this._get(e, "prevText"), i = B ? this.formatDate(i, this._daylightSavingAdjust(new Date(ee, Z - V, 1)), this._getFormatConfig(e)) : i, n = this._canAdjustMonth(e, -1, ee, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>", a = this._get(e, "nextText"), a = B ? this.formatDate(a, this._daylightSavingAdjust(new Date(ee, Z + V, 1)), this._getFormatConfig(e)) : a, s = this._canAdjustMonth(e, 1, ee, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + a + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + a + "</span></a>",
                r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? X : q, r = B ? this.formatDate(r, o, this._getFormatConfig(e)) : r, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", u = Y ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (R ? l : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (R ? "" : l) + "</div>" : "", c = parseInt(this._get(e, "firstDay"), 10), c = isNaN(c) ? 0 : c, d = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), _ = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), y = this._getDefaultDate(e), b = "", x = 0; U[0] > x; x++) {
                for (w = "", this.maxRows = 4, D = 0; U[1] > D; D++) {
                    if (C = this._daylightSavingAdjust(new Date(ee, Z, e.selectedDay)), M = " ui-corner-all", T = "", G) {
                        if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (D) {
                            case 0:
                                T += " ui-datepicker-group-first", M = " ui-corner-" + (R ? "right" : "left");
                                break;
                            case U[1] - 1:
                                T += " ui-datepicker-group-last", M = " ui-corner-" + (R ? "left" : "right");
                                break;
                            default:
                                T += " ui-datepicker-group-middle", M = ""
                        }
                        T += "'>"
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + M + "'>" + (/all|left/.test(M) && 0 === x ? R ? s : n : "") + (/all|right/.test(M) && 0 === x ? R ? n : s : "") + this._generateMonthYearHeader(e, Z, ee, Q, J, x > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", $ = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", k = 0; 7 > k; k++) S = (k + c) % 7, $ += "<th scope='col'" + ((k + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + h[S] + "'>" + p[S] + "</span></th>";
                    for (T += $ + "</tr></thead><tbody>", A = this._getDaysInMonth(ee, Z), ee === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), j = (this._getFirstDayOfMonth(ee, Z) - c + 7) % 7, O = Math.ceil((j + A) / 7), N = G && this.maxRows > O ? this.maxRows : O, this.maxRows = N, I = this._daylightSavingAdjust(new Date(ee, Z, 1 - j)), E = 0; N > E; E++) {
                        for (T += "<tr>", F = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(I) + "</td>" : "", k = 0; 7 > k; k++) z = g ? g.apply(e.input ? e.input[0] : null, [I]) : [!0, ""], P = I.getMonth() !== Z, L = P && !v || !z[0] || Q && Q > I || J && I > J, F += "<td class='" + ((k + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (P ? " ui-datepicker-other-month" : "") + (I.getTime() === C.getTime() && Z === e.selectedMonth && e._keyEvent || y.getTime() === I.getTime() && y.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (P && !_ ? "" : " " + z[1] + (I.getTime() === X.getTime() ? " " + this._currentClass : "") + (I.getTime() === q.getTime() ? " ui-datepicker-today" : "")) + "'" + (P && !_ || !z[2] ? "" : " title='" + z[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (P && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === q.getTime() ? " ui-state-highlight" : "") + (I.getTime() === X.getTime() ? " ui-state-active" : "") + (P ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                        T += F + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, ee++), T += "</tbody></table>" + (G ? "</div>" + (U[0] > 0 && D === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += T
                }
                b += w
            }
            return b += u, e._keyEvent = !1, b
        },
        _generateMonthYearHeader: function(e, t, i, n, a, s, r, o) {
            var l, u, c, d, h, p, f, m, g = this._get(e, "changeMonth"),
                _ = this._get(e, "changeYear"),
                v = this._get(e, "showMonthAfterYear"),
                y = "<div class='ui-datepicker-title'>",
                b = "";
            if (s || !g) b += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, u = a && a.getFullYear() === i, b += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!u || a.getMonth() >= c) && (b += "<option value='" + c + "'" + (c === t ? " selected='selected'" : "") + ">" + o[c] + "</option>");
                b += "</select>"
            }
            if (v || (y += b + (!s && g && _ ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", s || !_) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? h : t
                        }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = a ? Math.min(m, a.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", y += e.yearshtml, e.yearshtml = null
                }
            return y += this._get(e, "yearSuffix"), v && (y += (!s && g && _ ? "" : "&#xa0;") + b), y += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var n = e.drawYear + ("Y" === i ? t : 0),
                a = e.drawMonth + ("M" === i ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(n, a)) + ("D" === i ? t : 0),
                r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, a, s)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"),
                n = this._getMinMaxDate(e, "max"),
                a = i && i > t ? i : t;
            return n && a > n ? n : a
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, i, n) {
            var a = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : a[0] * a[1]), 1));
            return 0 > t && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function(e, t) {
            var i, n, a = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                r = null,
                o = null,
                l = this._get(e, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (o += n)), (!a || t.getTime() >= a.getTime()) && (!s || t.getTime() <= s.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, i, n) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var a = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), a, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new a, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker, e.widget("ui.slider", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var t, i, n = this.options,
                a = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                s = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                r = [];
            for (i = n.values && n.values.length || 1, a.length > i && (a.slice(i).remove(), a = a.slice(0, i)), t = a.length; i > t; t++) r.push(s);
            this.handles = a.add(e(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options,
                i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i, n, a, s, r, o, l, u, c = this,
                d = this.options;
            return d.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            }, n = this._normValueFromMouse(i), a = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var i = Math.abs(n - c.values(t));
                (a > i || a === i && (t === c._lastChangedValue || c.values(t) === d.min)) && (a = i, s = e(this), r = t)
            }), o = this._start(t, r), o === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, s.addClass("ui-state-active").focus(), l = s.offset(), u = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = u ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - l.left - s.width() / 2,
                top: t.pageY - l.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, r, n), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, i, n, a, s;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / t, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), a = this._valueMax() - this._valueMin(), s = this._valueMin() + n * a, this._trimAlignValue(s)
        },
        _start: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
        },
        _slide: function(e, t, i) {
            var n, a, s;
            this.options.values && this.options.values.length ? (n = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > n || 1 === t && n > i) && (i = n), i !== this.values(t) && (a = this.values(), a[t] = i, s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: a
            }), n = this.values(t ? 0 : 1), s !== !1 && this.values(t, i))) : i !== this.value() && (s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            }), s !== !1 && this.value(i))
        },
        _stop: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
            }
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(t, i) {
            var n, a, s;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (n = this.options.values, a = arguments[0], s = 0; n.length > s; s += 1) n[s] = this._trimAlignValue(a[s]), this._change(null, s);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var n, a = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (a = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), n = 0; a > n; n += 1) this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, i, n;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                n = e - i;
            return 2 * Math.abs(i) >= t && (n += i > 0 ? t : -t), parseFloat(n.toFixed(5))
        },
        _calculateNewMax: function() {
            var e = this.options.max,
                t = this._valueMin(),
                i = this.options.step,
                n = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
            e = n + t, this.max = parseFloat(e.toFixed(this._precision()))
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function(e) {
            var t = "" + e,
                i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshValue: function() {
            var t, i, n, a, s, r = this.options.range,
                o = this.options,
                l = this,
                u = this._animateOff ? !1 : o.animate,
                c = {};
            this.options.values && this.options.values.length ? this.handles.each(function(n) {
                i = 100 * ((l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[u ? "animate" : "css"](c, o.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: i + "%"
                }, o.animate), 1 === n && l.range[u ? "animate" : "css"]({
                    width: i - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                })) : (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: i + "%"
                }, o.animate), 1 === n && l.range[u ? "animate" : "css"]({
                    height: i - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))), t = i
            }) : (n = this.value(), a = this._valueMin(), s = this._valueMax(), i = s !== a ? 100 * ((n - a) / (s - a)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, o.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: i + "%"
            }, o.animate), "max" === r && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: o.animate
            }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: i + "%"
            }, o.animate), "max" === r && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: o.animate
            }))
        },
        _handleEvents: {
            keydown: function(t) {
                var i, n, a, s, r = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, r), i === !1)) return
                }
                switch (s = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        a = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        a = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (n === this._valueMax()) return;
                        a = this._trimAlignValue(n + s);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (n === this._valueMin()) return;
                        a = this._trimAlignValue(n - s)
                }
                this._slide(t, r, a)
            },
            keyup: function(t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
            }
        }
    });
    var h = "ui-effects-",
        p = e;
    e.effects = {
            effect: {}
        },
        function(e, t) {
            function i(e, t, i) {
                var n = d[t.type] || {};
                return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : e > n.max ? n.max : e)
            }

            function n(i) {
                var n = u(),
                    a = n._rgba = [];
                return i = i.toLowerCase(), f(l, function(e, s) {
                    var r, o = s.re.exec(i),
                        l = o && s.parse(o),
                        u = s.space || "rgba";
                    return l ? (r = n[u](l), n[c[u].cache] = r[c[u].cache], a = n._rgba = r._rgba, !1) : t
                }), a.length ? ("0,0,0,0" === a.join() && e.extend(a, s.transparent), n) : s[i]
            }

            function a(e, t, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
            }
            var s, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                o = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                u = e.Color = function(t, i, n, a) {
                    return new e.Color.fn.parse(t, i, n, a)
                },
                c = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                d = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                h = u.support = {},
                p = e("<p>")[0],
                f = e.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), u.fn = e.extend(u.prototype, {
                parse: function(a, r, o, l) {
                    if (a === t) return this._rgba = [null, null, null, null], this;
                    (a.jquery || a.nodeType) && (a = e(a).css(r), r = t);
                    var d = this,
                        h = e.type(a),
                        p = this._rgba = [];
                    return r !== t && (a = [a, r, o, l], h = "array"), "string" === h ? this.parse(n(a) || s._default) : "array" === h ? (f(c.rgba.props, function(e, t) {
                        p[t.idx] = i(a[t.idx], t)
                    }), this) : "object" === h ? (a instanceof u ? f(c, function(e, t) {
                        a[t.cache] && (d[t.cache] = a[t.cache].slice())
                    }) : f(c, function(t, n) {
                        var s = n.cache;
                        f(n.props, function(e, t) {
                            if (!d[s] && n.to) {
                                if ("alpha" === e || null == a[e]) return;
                                d[s] = n.to(d._rgba)
                            }
                            d[s][t.idx] = i(a[e], t, !0)
                        }), d[s] && 0 > e.inArray(null, d[s].slice(0, 3)) && (d[s][3] = 1, n.from && (d._rgba = n.from(d[s])))
                    }), this) : t
                },
                is: function(e) {
                    var i = u(e),
                        n = !0,
                        a = this;
                    return f(c, function(e, s) {
                        var r, o = i[s.cache];
                        return o && (r = a[s.cache] || s.to && s.to(a._rgba) || [], f(s.props, function(e, i) {
                            return null != o[i.idx] ? n = o[i.idx] === r[i.idx] : t
                        })), n
                    }), n
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return f(c, function(i, n) {
                        t[n.cache] && e.push(i)
                    }), e.pop()
                },
                transition: function(e, t) {
                    var n = u(e),
                        a = n._space(),
                        s = c[a],
                        r = 0 === this.alpha() ? u("transparent") : this,
                        o = r[s.cache] || s.to(r._rgba),
                        l = o.slice();
                    return n = n[s.cache], f(s.props, function(e, a) {
                        var s = a.idx,
                            r = o[s],
                            u = n[s],
                            c = d[a.type] || {};
                        null !== u && (null === r ? l[s] = u : (c.mod && (u - r > c.mod / 2 ? r += c.mod : r - u > c.mod / 2 && (r -= c.mod)), l[s] = i((u - r) * t + r, a)))
                    }), this[a](l)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        a = u(t)._rgba;
                    return u(e.map(i, function(e, t) {
                        return (1 - n) * a[t] + n * e
                    }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        i = e.map(this._rgba, function(e, t) {
                            return null == e ? t > 2 ? 1 : 0 : e
                        });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function(e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                        });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function(t) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return t && i.push(~~(255 * n)), "#" + e.map(i, function(e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), u.fn.parse.prototype = u.fn, c.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, i, n = e[0] / 255,
                    a = e[1] / 255,
                    s = e[2] / 255,
                    r = e[3],
                    o = Math.max(n, a, s),
                    l = Math.min(n, a, s),
                    u = o - l,
                    c = o + l,
                    d = .5 * c;
                return t = l === o ? 0 : n === o ? 60 * (a - s) / u + 360 : a === o ? 60 * (s - n) / u + 120 : 60 * (n - a) / u + 240, i = 0 === u ? 0 : .5 >= d ? u / c : u / (2 - c), [Math.round(t) % 360, i, d, null == r ? 1 : r]
            }, c.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    i = e[1],
                    n = e[2],
                    s = e[3],
                    r = .5 >= n ? n * (1 + i) : n + i - n * i,
                    o = 2 * n - r;
                return [Math.round(255 * a(o, r, t + 1 / 3)), Math.round(255 * a(o, r, t)), Math.round(255 * a(o, r, t - 1 / 3)), s]
            }, f(c, function(n, a) {
                var s = a.props,
                    r = a.cache,
                    l = a.to,
                    c = a.from;
                u.fn[n] = function(n) {
                    if (l && !this[r] && (this[r] = l(this._rgba)), n === t) return this[r].slice();
                    var a, o = e.type(n),
                        d = "array" === o || "object" === o ? n : arguments,
                        h = this[r].slice();
                    return f(s, function(e, t) {
                        var n = d["object" === o ? e : t.idx];
                        null == n && (n = h[t.idx]), h[t.idx] = i(n, t)
                    }), c ? (a = u(c(h)), a[r] = h, a) : u(h)
                }, f(s, function(t, i) {
                    u.fn[t] || (u.fn[t] = function(a) {
                        var s, r = e.type(a),
                            l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : n,
                            u = this[l](),
                            c = u[i.idx];
                        return "undefined" === r ? c : ("function" === r && (a = a.call(this, c), r = e.type(a)), null == a && i.empty ? this : ("string" === r && (s = o.exec(a), s && (a = c + parseFloat(s[2]) * ("+" === s[1] ? 1 : -1))), u[i.idx] = a, this[l](u)))
                    })
                })
            }), u.hook = function(t) {
                var i = t.split(" ");
                f(i, function(t, i) {
                    e.cssHooks[i] = {
                        set: function(t, a) {
                            var s, r, o = "";
                            if ("transparent" !== a && ("string" !== e.type(a) || (s = n(a)))) {
                                if (a = u(s || a), !h.rgba && 1 !== a._rgba[3]) {
                                    for (r = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === o || "transparent" === o) && r && r.style;) try {
                                        o = e.css(r, "backgroundColor"), r = r.parentNode
                                    } catch (l) {}
                                    a = a.blend(o && "transparent" !== o ? o : "_default")
                                }
                                a = a.toRgbaString()
                            }
                            try {
                                t.style[i] = a
                            } catch (l) {}
                        }
                    }, e.fx.step[i] = function(t) {
                        t.colorInit || (t.start = u(t.elem, i), t.end = u(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, u.hook(r), e.cssHooks.borderColor = {
                expand: function(e) {
                    var t = {};
                    return f(["Top", "Right", "Bottom", "Left"], function(i, n) {
                        t["border" + n + "Color"] = e
                    }), t
                }
            }, s = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(p),
        function() {
            function t(t) {
                var i, n, a = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    s = {};
                if (a && a.length && a[0] && a[a[0]])
                    for (n = a.length; n--;) i = a[n], "string" == typeof a[i] && (s[e.camelCase(i)] = a[i]);
                else
                    for (i in a) "string" == typeof a[i] && (s[i] = a[i]);
                return s
            }

            function i(t, i) {
                var n, s, r = {};
                for (n in i) s = i[n], t[n] !== s && (a[n] || (e.fx.step[n] || !isNaN(parseFloat(s))) && (r[n] = s));
                return r
            }
            var n = ["add", "remove", "toggle"],
                a = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                e.fx.step[i] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (p.style(e.elem, i, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e.effects.animateClass = function(a, s, r, o) {
                var l = e.speed(s, r, o);
                return this.queue(function() {
                    var s, r = e(this),
                        o = r.attr("class") || "",
                        u = l.children ? r.find("*").addBack() : r;
                    u = u.map(function() {
                        var i = e(this);
                        return {
                            el: i,
                            start: t(this)
                        }
                    }), s = function() {
                        e.each(n, function(e, t) {
                            a[t] && r[t + "Class"](a[t])
                        })
                    }, s(), u = u.map(function() {
                        return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                    }), r.attr("class", o), u = u.map(function() {
                        var t = this,
                            i = e.Deferred(),
                            n = e.extend({}, l, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, n), i.promise()
                    }), e.when.apply(e, u.get()).done(function() {
                        s(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) {
                                t.css(e, "")
                            })
                        }), l.complete.call(r[0])
                    })
                })
            }, e.fn.extend({
                addClass: function(t) {
                    return function(i, n, a, s) {
                        return n ? e.effects.animateClass.call(this, {
                            add: i
                        }, n, a, s) : t.apply(this, arguments)
                    }
                }(e.fn.addClass),
                removeClass: function(t) {
                    return function(i, n, a, s) {
                        return arguments.length > 1 ? e.effects.animateClass.call(this, {
                            remove: i
                        }, n, a, s) : t.apply(this, arguments)
                    }
                }(e.fn.removeClass),
                toggleClass: function(t) {
                    return function(i, n, a, s, r) {
                        return "boolean" == typeof n || void 0 === n ? a ? e.effects.animateClass.call(this, n ? {
                            add: i
                        } : {
                            remove: i
                        }, a, s, r) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                            toggle: i
                        }, n, a, s)
                    }
                }(e.fn.toggleClass),
                switchClass: function(t, i, n, a, s) {
                    return e.effects.animateClass.call(this, {
                        add: i,
                        remove: t
                    }, n, a, s)
                }
            })
        }(),
        function() {
            function t(t, i, n, a) {
                return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                    effect: t
                }, null == i && (i = {}), e.isFunction(i) && (a = i, n = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (a = n, n = i, i = {}), e.isFunction(n) && (a = n, n = null), i && e.extend(t, i), n = n || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof n ? n : n in e.fx.speeds ? e.fx.speeds[n] : e.fx.speeds._default, t.complete = a || i.complete, t
            }

            function i(t) {
                return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
            }
            e.extend(e.effects, {
                version: "1.11.4",
                save: function(e, t) {
                    for (var i = 0; t.length > i; i++) null !== t[i] && e.data(h + t[i], e[0].style[t[i]])
                },
                restore: function(e, t) {
                    var i, n;
                    for (n = 0; t.length > n; n++) null !== t[n] && (i = e.data(h + t[n]), void 0 === i && (i = ""), e.css(t[n], i))
                },
                setMode: function(e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function(e, t) {
                    var i, n;
                    switch (e[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            n = 0;
                            break;
                        case "center":
                            n = .5;
                            break;
                        case "right":
                            n = 1;
                            break;
                        default:
                            n = e[1] / t.width
                    }
                    return {
                        x: n,
                        y: i
                    }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            "float": t.css("float")
                        },
                        n = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        a = {
                            width: t.width(),
                            height: t.height()
                        },
                        s = document.activeElement;
                    try {
                        s.id
                    } catch (r) {
                        s = document.body
                    }
                    return t.wrap(n), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), n = t.parent(), "static" === t.css("position") ? (n.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function(e, n) {
                        i[n] = t.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(a), n.css(i).show()
                },
                removeWrapper: function(t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
                },
                setTransition: function(t, i, n, a) {
                    return a = a || {}, e.each(i, function(e, i) {
                        var s = t.cssUnit(i);
                        s[0] > 0 && (a[i] = s[0] * n + s[1])
                    }), a
                }
            }), e.fn.extend({
                effect: function() {
                    function i(t) {
                        function i() {
                            e.isFunction(s) && s.call(a[0]), e.isFunction(t) && t()
                        }
                        var a = e(this),
                            s = n.complete,
                            o = n.mode;
                        (a.is(":hidden") ? "hide" === o : "show" === o) ? (a[o](), i()) : r.call(a[0], n, i)
                    }
                    var n = t.apply(this, arguments),
                        a = n.mode,
                        s = n.queue,
                        r = e.effects.effect[n.effect];
                    return e.fx.off || !r ? a ? this[a](n.duration, n.complete) : this.each(function() {
                        n.complete && n.complete.call(this)
                    }) : s === !1 ? this.each(i) : this.queue(s || "fx", i)
                },
                show: function(e) {
                    return function(n) {
                        if (i(n)) return e.apply(this, arguments);
                        var a = t.apply(this, arguments);
                        return a.mode = "show", this.effect.call(this, a)
                    }
                }(e.fn.show),
                hide: function(e) {
                    return function(n) {
                        if (i(n)) return e.apply(this, arguments);
                        var a = t.apply(this, arguments);
                        return a.mode = "hide", this.effect.call(this, a)
                    }
                }(e.fn.hide),
                toggle: function(e) {
                    return function(n) {
                        if (i(n) || "boolean" == typeof n) return e.apply(this, arguments);
                        var a = t.apply(this, arguments);
                        return a.mode = "toggle", this.effect.call(this, a)
                    }
                }(e.fn.toggle),
                cssUnit: function(t) {
                    var i = this.css(t),
                        n = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) {
                        i.indexOf(t) > 0 && (n = [parseFloat(i), t])
                    }), n
                }
            })
        }(),
        function() {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
                t[i] = function(t) {
                    return Math.pow(t, e + 2)
                }
            }), e.extend(t, {
                Sine: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function(e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function(e) {
                    for (var t, i = 4;
                        ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function(t, i) {
                e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function(e) {
                    return 1 - i(1 - e)
                }, e.easing["easeInOut" + t] = function(e) {
                    return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
                }
            })
        }(), e.effects
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "jquery-ui"], e) : e(jQuery)
}(function($) {
    if ($.ui.timepicker = $.ui.timepicker || {}, !$.ui.timepicker.version) {
        $.extend($.ui, {
            timepicker: {
                version: "1.6.1"
            }
        });
        var Timepicker = function() {
            this.regional = [], this.regional[""] = {
                currentText: "Now",
                closeText: "Done",
                amNames: ["AM", "A"],
                pmNames: ["PM", "P"],
                timeFormat: "HH:mm",
                timeSuffix: "",
                timeOnlyTitle: "Choose Time",
                timeText: "Time",
                hourText: "Hour",
                minuteText: "Minute",
                secondText: "Second",
                millisecText: "Millisecond",
                microsecText: "Microsecond",
                timezoneText: "Time Zone",
                isRTL: !1
            }, this._defaults = {
                showButtonPanel: !0,
                timeOnly: !1,
                timeOnlyShowDate: !1,
                showHour: null,
                showMinute: null,
                showSecond: null,
                showMillisec: null,
                showMicrosec: null,
                showTimezone: null,
                showTime: !0,
                stepHour: 1,
                stepMinute: 1,
                stepSecond: 1,
                stepMillisec: 1,
                stepMicrosec: 1,
                hour: 0,
                minute: 0,
                second: 0,
                millisec: 0,
                microsec: 0,
                timezone: null,
                hourMin: 0,
                minuteMin: 0,
                secondMin: 0,
                millisecMin: 0,
                microsecMin: 0,
                hourMax: 23,
                minuteMax: 59,
                secondMax: 59,
                millisecMax: 999,
                microsecMax: 999,
                minDateTime: null,
                maxDateTime: null,
                maxTime: null,
                minTime: null,
                onSelect: null,
                hourGrid: 0,
                minuteGrid: 0,
                secondGrid: 0,
                millisecGrid: 0,
                microsecGrid: 0,
                alwaysSetTime: !0,
                separator: " ",
                altFieldTimeOnly: !0,
                altTimeFormat: null,
                altSeparator: null,
                altTimeSuffix: null,
                altRedirectFocus: !0,
                pickerTimeFormat: null,
                pickerTimeSuffix: null,
                showTimepicker: !0,
                timezoneList: null,
                addSliderAccess: !1,
                sliderAccessArgs: null,
                controlType: "slider",
                oneLine: !1,
                defaultValue: null,
                parse: "strict",
                afterInject: null
            }, $.extend(this._defaults, this.regional[""])
        };
        $.extend(Timepicker.prototype, {
            $input: null,
            $altInput: null,
            $timeObj: null,
            inst: null,
            hour_slider: null,
            minute_slider: null,
            second_slider: null,
            millisec_slider: null,
            microsec_slider: null,
            timezone_select: null,
            maxTime: null,
            minTime: null,
            hour: 0,
            minute: 0,
            second: 0,
            millisec: 0,
            microsec: 0,
            timezone: null,
            hourMinOriginal: null,
            minuteMinOriginal: null,
            secondMinOriginal: null,
            millisecMinOriginal: null,
            microsecMinOriginal: null,
            hourMaxOriginal: null,
            minuteMaxOriginal: null,
            secondMaxOriginal: null,
            millisecMaxOriginal: null,
            microsecMaxOriginal: null,
            ampm: "",
            formattedDate: "",
            formattedTime: "",
            formattedDateTime: "",
            timezoneList: null,
            units: ["hour", "minute", "second", "millisec", "microsec"],
            support: {},
            control: null,
            setDefaults: function(e) {
                return extendRemove(this._defaults, e || {}), this
            },
            _newInst: function($input, opts) {
                var tp_inst = new Timepicker,
                    inlineSettings = {},
                    fns = {},
                    overrides, i;
                for (var attrName in this._defaults)
                    if (this._defaults.hasOwnProperty(attrName)) {
                        var attrValue = $input.attr("time:" + attrName);
                        if (attrValue) try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                overrides = {
                    beforeShow: function(e, t) {
                        return $.isFunction(tp_inst._defaults.evnts.beforeShow) ? tp_inst._defaults.evnts.beforeShow.call($input[0], e, t, tp_inst) : void 0
                    },
                    onChangeMonthYear: function(e, t, i) {
                        $.isFunction(tp_inst._defaults.evnts.onChangeMonthYear) && tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], e, t, i, tp_inst)
                    },
                    onClose: function(e, t) {
                        tp_inst.timeDefined === !0 && "" !== $input.val() && tp_inst._updateDateTime(t), $.isFunction(tp_inst._defaults.evnts.onClose) && tp_inst._defaults.evnts.onClose.call($input[0], e, t, tp_inst)
                    }
                };
                for (i in overrides) overrides.hasOwnProperty(i) && (fns[i] = opts[i] || this._defaults[i] || null);
                tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, {
                    evnts: fns,
                    timepicker: tp_inst
                }), tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(e) {
                    return e.toUpperCase()
                }), tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(e) {
                    return e.toUpperCase()
                }), tp_inst.support = detectSupport(tp_inst._defaults.timeFormat + (tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : "") + (tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : "")), "string" == typeof tp_inst._defaults.controlType ? ("slider" === tp_inst._defaults.controlType && "undefined" == typeof $.ui.slider && (tp_inst._defaults.controlType = "select"), tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType]) : tp_inst.control = tp_inst._defaults.controlType;
                var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60, 0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840];
                null !== tp_inst._defaults.timezoneList && (timezoneList = tp_inst._defaults.timezoneList);
                var tzl = timezoneList.length,
                    tzi = 0,
                    tzv = null;
                if (tzl > 0 && "object" != typeof timezoneList[0])
                    for (; tzl > tzi; tzi++) tzv = timezoneList[tzi], timezoneList[tzi] = {
                        value: tzv,
                        label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601)
                    };
                return tp_inst._defaults.timezoneList = timezoneList, tp_inst.timezone = null !== tp_inst._defaults.timezone ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : -1 * (new Date).getTimezoneOffset(), tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin : tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour, tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin : tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute, tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin : tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second, tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin : tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec, tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin : tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec, tp_inst.ampm = "", tp_inst.$input = $input, tp_inst._defaults.altField && (tp_inst.$altInput = $(tp_inst._defaults.altField), tp_inst._defaults.altRedirectFocus === !0 && tp_inst.$altInput.css({
                    cursor: "pointer"
                }).focus(function() {
                    $input.trigger("focus")
                })), (0 === tp_inst._defaults.minDate || 0 === tp_inst._defaults.minDateTime) && (tp_inst._defaults.minDate = new Date), (0 === tp_inst._defaults.maxDate || 0 === tp_inst._defaults.maxDateTime) && (tp_inst._defaults.maxDate = new Date), void 0 !== tp_inst._defaults.minDate && tp_inst._defaults.minDate instanceof Date && (tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime())), void 0 !== tp_inst._defaults.minDateTime && tp_inst._defaults.minDateTime instanceof Date && (tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime())), void 0 !== tp_inst._defaults.maxDate && tp_inst._defaults.maxDate instanceof Date && (tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime())), void 0 !== tp_inst._defaults.maxDateTime && tp_inst._defaults.maxDateTime instanceof Date && (tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime())), tp_inst.$input.bind("focus", function() {
                    tp_inst._onFocus()
                }), tp_inst
            },
            _addTimePicker: function(e) {
                var t = $.trim(this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : this.$input.val());
                this.timeDefined = this._parseTime(t), this._limitMinMaxDateTime(e, !1), this._injectTimePicker(), this._afterInject()
            },
            _parseTime: function(e, t) {
                if (this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), t || !this._defaults.timeOnly) {
                    var i = $.datepicker._get(this.inst, "dateFormat");
                    try {
                        var n = parseDateTimeInternal(i, this._defaults.timeFormat, e, $.datepicker._getFormatConfig(this.inst), this._defaults);
                        if (!n.timeObj) return !1;
                        $.extend(this, n.timeObj)
                    } catch (a) {
                        return $.timepicker.log("Error parsing the date/time string: " + a + "\ndate/time string = " + e + "\ntimeFormat = " + this._defaults.timeFormat + "\ndateFormat = " + i), !1
                    }
                    return !0
                }
                var s = $.datepicker.parseTime(this._defaults.timeFormat, e, this._defaults);
                return s ? ($.extend(this, s), !0) : !1
            },
            _afterInject: function() {
                var e = this.inst.settings;
                $.isFunction(e.afterInject) && e.afterInject.call(this)
            },
            _injectTimePicker: function() {
                var e = this.inst.dpDiv,
                    t = this.inst.settings,
                    i = this,
                    n = "",
                    a = "",
                    s = null,
                    r = {},
                    o = {},
                    l = null,
                    u = 0,
                    c = 0;
                if (0 === e.find("div.ui-timepicker-div").length && t.showTimepicker) {
                    var d = " ui_tpicker_unit_hide",
                        h = '<div class="ui-timepicker-div' + (t.isRTL ? " ui-timepicker-rtl" : "") + (t.oneLine && "select" === t.controlType ? " ui-timepicker-oneLine" : "") + '"><dl><dt class="ui_tpicker_time_label' + (t.showTime ? "" : d) + '">' + t.timeText + '</dt><dd class="ui_tpicker_time ' + (t.showTime ? "" : d) + '"><input class="ui_tpicker_time_input" ' + (t.timeInput ? "" : "disabled") + "/></dd>";
                    for (u = 0, c = this.units.length; c > u; u++) {
                        if (n = this.units[u], a = n.substr(0, 1).toUpperCase() + n.substr(1), s = null !== t["show" + a] ? t["show" + a] : this.support[n], r[n] = parseInt(t[n + "Max"] - (t[n + "Max"] - t[n + "Min"]) % t["step" + a], 10), o[n] = 0, h += '<dt class="ui_tpicker_' + n + "_label" + (s ? "" : d) + '">' + t[n + "Text"] + '</dt><dd class="ui_tpicker_' + n + (s ? "" : d) + '"><div class="ui_tpicker_' + n + "_slider" + (s ? "" : d) + '"></div>', s && t[n + "Grid"] > 0) {
                            if (h += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>', "hour" === n)
                                for (var p = t[n + "Min"]; p <= r[n]; p += parseInt(t[n + "Grid"], 10)) {
                                    o[n]++;
                                    var f = $.datepicker.formatTime(this.support.ampm ? "hht" : "HH", {
                                        hour: p
                                    }, t);
                                    h += '<td data-for="' + n + '">' + f + "</td>"
                                } else
                                    for (var m = t[n + "Min"]; m <= r[n]; m += parseInt(t[n + "Grid"], 10)) o[n]++, h += '<td data-for="' + n + '">' + (10 > m ? "0" : "") + m + "</td>";
                            h += "</tr></table></div>"
                        }
                        h += "</dd>"
                    }
                    var g = null !== t.showTimezone ? t.showTimezone : this.support.timezone;
                    h += '<dt class="ui_tpicker_timezone_label' + (g ? "" : d) + '">' + t.timezoneText + "</dt>", h += '<dd class="ui_tpicker_timezone' + (g ? "" : d) + '"></dd>', h += "</dl></div>";
                    var _ = $(h);
                    for (t.timeOnly === !0 && (_.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">' + t.timeOnlyTitle + "</div></div>"), e.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()), u = 0, c = i.units.length; c > u; u++) n = i.units[u], a = n.substr(0, 1).toUpperCase() + n.substr(1), s = null !== t["show" + a] ? t["show" + a] : this.support[n], i[n + "_slider"] = i.control.create(i, _.find(".ui_tpicker_" + n + "_slider"), n, i[n], t[n + "Min"], r[n], t["step" + a]), s && t[n + "Grid"] > 0 && (l = 100 * o[n] * t[n + "Grid"] / (r[n] - t[n + "Min"]), _.find(".ui_tpicker_" + n + " table").css({
                        width: l + "%",
                        marginLeft: t.isRTL ? "0" : l / (-2 * o[n]) + "%",
                        marginRight: t.isRTL ? l / (-2 * o[n]) + "%" : "0",
                        borderCollapse: "collapse"
                    }).find("td").click(function(e) {
                        var t = $(this),
                            a = t.html(),
                            s = parseInt(a.replace(/[^0-9]/g), 10),
                            r = a.replace(/[^apm]/gi),
                            o = t.data("for");
                        "hour" === o && (-1 !== r.indexOf("p") && 12 > s ? s += 12 : -1 !== r.indexOf("a") && 12 === s && (s = 0)), i.control.value(i, i[o + "_slider"], n, s), i._onTimeChange(), i._onSelectHandler()
                    }).css({
                        cursor: "pointer",
                        width: 100 / o[n] + "%",
                        textAlign: "center",
                        overflow: "hidden"
                    }));
                    if (this.timezone_select = _.find(".ui_tpicker_timezone").append("<select></select>").find("select"), $.fn.append.apply(this.timezone_select, $.map(t.timezoneList, function(e, t) {
                            return $("<option />").val("object" == typeof e ? e.value : e).text("object" == typeof e ? e.label : e)
                        })), "undefined" != typeof this.timezone && null !== this.timezone && "" !== this.timezone) {
                        var v = -1 * new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12).getTimezoneOffset();
                        v === this.timezone ? selectLocalTimezone(i) : this.timezone_select.val(this.timezone)
                    } else "undefined" != typeof this.hour && null !== this.hour && "" !== this.hour ? this.timezone_select.val(t.timezone) : selectLocalTimezone(i);
                    this.timezone_select.change(function() {
                        i._onTimeChange(), i._onSelectHandler(), i._afterInject()
                    });
                    var y = e.find(".ui-datepicker-buttonpane");
                    if (y.length ? y.before(_) : e.append(_), this.$timeObj = _.find(".ui_tpicker_time_input"), this.$timeObj.change(function() {
                            var e = i.inst.settings.timeFormat,
                                t = $.datepicker.parseTime(e, this.value),
                                n = new Date;
                            t ? (n.setHours(t.hour), n.setMinutes(t.minute), n.setSeconds(t.second), $.datepicker._setTime(i.inst, n)) : (this.value = i.formattedTime, this.blur())
                        }), null !== this.inst) {
                        var b = this.timeDefined;
                        this._onTimeChange(), this.timeDefined = b
                    }
                    if (this._defaults.addSliderAccess) {
                        var k = this._defaults.sliderAccessArgs,
                            x = this._defaults.isRTL;
                        k.isRTL = x, setTimeout(function() {
                            if (0 === _.find(".ui-slider-access").length) {
                                _.find(".ui-slider:visible").sliderAccess(k);
                                var e = _.find(".ui-slider-access:eq(0)").outerWidth(!0);
                                e && _.find("table:visible").each(function() {
                                    var t = $(this),
                                        i = t.outerWidth(),
                                        n = t.css(x ? "marginRight" : "marginLeft").toString().replace("%", ""),
                                        a = i - e,
                                        s = n * a / i + "%",
                                        r = {
                                            width: a,
                                            marginRight: 0,
                                            marginLeft: 0
                                        };
                                    r[x ? "marginRight" : "marginLeft"] = s, t.css(r)
                                })
                            }
                        }, 10)
                    }
                    i._limitMinMaxDateTime(this.inst, !0)
                }
            },
            _limitMinMaxDateTime: function(e, t) {
                var i = this._defaults,
                    n = new Date(e.selectedYear, e.selectedMonth, e.selectedDay);
                if (this._defaults.showTimepicker) {
                    if (null !== $.datepicker._get(e, "minDateTime") && void 0 !== $.datepicker._get(e, "minDateTime") && n) {
                        var a = $.datepicker._get(e, "minDateTime"),
                            s = new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0, 0);
                        (null === this.hourMinOriginal || null === this.minuteMinOriginal || null === this.secondMinOriginal || null === this.millisecMinOriginal || null === this.microsecMinOriginal) && (this.hourMinOriginal = i.hourMin, this.minuteMinOriginal = i.minuteMin, this.secondMinOriginal = i.secondMin, this.millisecMinOriginal = i.millisecMin, this.microsecMinOriginal = i.microsecMin), e.settings.timeOnly || s.getTime() === n.getTime() ? (this._defaults.hourMin = a.getHours(), this.hour <= this._defaults.hourMin ? (this.hour = this._defaults.hourMin, this._defaults.minuteMin = a.getMinutes(), this.minute <= this._defaults.minuteMin ? (this.minute = this._defaults.minuteMin, this._defaults.secondMin = a.getSeconds(), this.second <= this._defaults.secondMin ? (this.second = this._defaults.secondMin, this._defaults.millisecMin = a.getMilliseconds(), this.millisec <= this._defaults.millisecMin ? (this.millisec = this._defaults.millisecMin, this._defaults.microsecMin = a.getMicroseconds()) : (this.microsec < this._defaults.microsecMin && (this.microsec = this._defaults.microsecMin), this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.hourMin = this.hourMinOriginal, this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)
                    }
                    if (null !== $.datepicker._get(e, "maxDateTime") && void 0 !== $.datepicker._get(e, "maxDateTime") && n) {
                        var r = $.datepicker._get(e, "maxDateTime"),
                            o = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0, 0);
                        (null === this.hourMaxOriginal || null === this.minuteMaxOriginal || null === this.secondMaxOriginal || null === this.millisecMaxOriginal) && (this.hourMaxOriginal = i.hourMax, this.minuteMaxOriginal = i.minuteMax, this.secondMaxOriginal = i.secondMax, this.millisecMaxOriginal = i.millisecMax, this.microsecMaxOriginal = i.microsecMax), e.settings.timeOnly || o.getTime() === n.getTime() ? (this._defaults.hourMax = r.getHours(), this.hour >= this._defaults.hourMax ? (this.hour = this._defaults.hourMax, this._defaults.minuteMax = r.getMinutes(), this.minute >= this._defaults.minuteMax ? (this.minute = this._defaults.minuteMax, this._defaults.secondMax = r.getSeconds(), this.second >= this._defaults.secondMax ? (this.second = this._defaults.secondMax, this._defaults.millisecMax = r.getMilliseconds(), this.millisec >= this._defaults.millisecMax ? (this.millisec = this._defaults.millisecMax, this._defaults.microsecMax = r.getMicroseconds()) : (this.microsec > this._defaults.microsecMax && (this.microsec = this._defaults.microsecMax), this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.hourMax = this.hourMaxOriginal, this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)
                    }
                    if (null !== e.settings.minTime) {
                        var l = new Date("01/01/1970 " + e.settings.minTime);
                        this.hour < l.getHours() ? (this.hour = this._defaults.hourMin = l.getHours(), this.minute = this._defaults.minuteMin = l.getMinutes()) : this.hour === l.getHours() && this.minute < l.getMinutes() ? this.minute = this._defaults.minuteMin = l.getMinutes() : this._defaults.hourMin < l.getHours() ? (this._defaults.hourMin = l.getHours(), this._defaults.minuteMin = l.getMinutes()) : this._defaults.hourMin === l.getHours() === this.hour && this._defaults.minuteMin < l.getMinutes() ? this._defaults.minuteMin = l.getMinutes() : this._defaults.minuteMin = 0
                    }
                    if (null !== e.settings.maxTime) {
                        var u = new Date("01/01/1970 " + e.settings.maxTime);
                        this.hour > u.getHours() ? (this.hour = this._defaults.hourMax = u.getHours(), this.minute = this._defaults.minuteMax = u.getMinutes()) : this.hour === u.getHours() && this.minute > u.getMinutes() ? this.minute = this._defaults.minuteMax = u.getMinutes() : this._defaults.hourMax > u.getHours() ? (this._defaults.hourMax = u.getHours(), this._defaults.minuteMax = u.getMinutes()) : this._defaults.hourMax === u.getHours() === this.hour && this._defaults.minuteMax > u.getMinutes() ? this._defaults.minuteMax = u.getMinutes() : this._defaults.minuteMax = 59
                    }
                    if (void 0 !== t && t === !0) {
                        var c = parseInt(this._defaults.hourMax - (this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour, 10),
                            d = parseInt(this._defaults.minuteMax - (this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute, 10),
                            h = parseInt(this._defaults.secondMax - (this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond, 10),
                            p = parseInt(this._defaults.millisecMax - (this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec, 10),
                            f = parseInt(this._defaults.microsecMax - (this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec, 10);
                        this.hour_slider && (this.control.options(this, this.hour_slider, "hour", {
                            min: this._defaults.hourMin,
                            max: c,
                            step: this._defaults.stepHour
                        }), this.control.value(this, this.hour_slider, "hour", this.hour - this.hour % this._defaults.stepHour)), this.minute_slider && (this.control.options(this, this.minute_slider, "minute", {
                            min: this._defaults.minuteMin,
                            max: d,
                            step: this._defaults.stepMinute
                        }), this.control.value(this, this.minute_slider, "minute", this.minute - this.minute % this._defaults.stepMinute)), this.second_slider && (this.control.options(this, this.second_slider, "second", {
                            min: this._defaults.secondMin,
                            max: h,
                            step: this._defaults.stepSecond
                        }), this.control.value(this, this.second_slider, "second", this.second - this.second % this._defaults.stepSecond)), this.millisec_slider && (this.control.options(this, this.millisec_slider, "millisec", {
                            min: this._defaults.millisecMin,
                            max: p,
                            step: this._defaults.stepMillisec
                        }), this.control.value(this, this.millisec_slider, "millisec", this.millisec - this.millisec % this._defaults.stepMillisec)), this.microsec_slider && (this.control.options(this, this.microsec_slider, "microsec", {
                            min: this._defaults.microsecMin,
                            max: f,
                            step: this._defaults.stepMicrosec
                        }), this.control.value(this, this.microsec_slider, "microsec", this.microsec - this.microsec % this._defaults.stepMicrosec))
                    }
                }
            },
            _onTimeChange: function() {
                if (this._defaults.showTimepicker) {
                    var e = this.hour_slider ? this.control.value(this, this.hour_slider, "hour") : !1,
                        t = this.minute_slider ? this.control.value(this, this.minute_slider, "minute") : !1,
                        i = this.second_slider ? this.control.value(this, this.second_slider, "second") : !1,
                        n = this.millisec_slider ? this.control.value(this, this.millisec_slider, "millisec") : !1,
                        a = this.microsec_slider ? this.control.value(this, this.microsec_slider, "microsec") : !1,
                        s = this.timezone_select ? this.timezone_select.val() : !1,
                        r = this._defaults,
                        o = r.pickerTimeFormat || r.timeFormat,
                        l = r.pickerTimeSuffix || r.timeSuffix;
                    "object" == typeof e && (e = !1), "object" == typeof t && (t = !1), "object" == typeof i && (i = !1), "object" == typeof n && (n = !1), "object" == typeof a && (a = !1), "object" == typeof s && (s = !1), e !== !1 && (e = parseInt(e, 10)), t !== !1 && (t = parseInt(t, 10)), i !== !1 && (i = parseInt(i, 10)), n !== !1 && (n = parseInt(n, 10)), a !== !1 && (a = parseInt(a, 10)), s !== !1 && (s = s.toString());
                    var u = r[12 > e ? "amNames" : "pmNames"][0],
                        c = e !== parseInt(this.hour, 10) || t !== parseInt(this.minute, 10) || i !== parseInt(this.second, 10) || n !== parseInt(this.millisec, 10) || a !== parseInt(this.microsec, 10) || this.ampm.length > 0 && 12 > e != (-1 !== $.inArray(this.ampm.toUpperCase(), this.amNames)) || null !== this.timezone && s !== this.timezone.toString();
                    if (c && (e !== !1 && (this.hour = e), t !== !1 && (this.minute = t), i !== !1 && (this.second = i), n !== !1 && (this.millisec = n), a !== !1 && (this.microsec = a), s !== !1 && (this.timezone = s), this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), this._limitMinMaxDateTime(this.inst, !0)), this.support.ampm && (this.ampm = u), this.formattedTime = $.datepicker.formatTime(r.timeFormat, this, r), this.$timeObj) {
                        var d = this.$timeObj[0].selectionStart,
                            h = this.$timeObj[0].selectionEnd;
                        o === r.timeFormat ? this.$timeObj.val(this.formattedTime + l) : this.$timeObj.val($.datepicker.formatTime(o, this, r) + l), this.$timeObj[0].setSelectionRange(d, h)
                    }
                    this.timeDefined = !0, c && this._updateDateTime()
                }
            },
            _onSelectHandler: function() {
                var e = this._defaults.onSelect || this.inst.settings.onSelect,
                    t = this.$input ? this.$input[0] : null;
                e && t && e.apply(t, [this.formattedDateTime, this])
            },
            _updateDateTime: function(e) {
                e = this.inst || e;
                var t = e.currentYear > 0 ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(e.selectedYear, e.selectedMonth, e.selectedDay),
                    i = $.datepicker._daylightSavingAdjust(t),
                    n = $.datepicker._get(e, "dateFormat"),
                    a = $.datepicker._getFormatConfig(e),
                    s = null !== i && this.timeDefined;
                this.formattedDate = $.datepicker.formatDate(n, null === i ? new Date : i, a);
                var r = this.formattedDate;
                if ("" === e.lastVal && (e.currentYear = e.selectedYear, e.currentMonth = e.selectedMonth, e.currentDay = e.selectedDay), this._defaults.timeOnly === !0 && this._defaults.timeOnlyShowDate === !1 ? r = this.formattedTime : (this._defaults.timeOnly !== !0 && (this._defaults.alwaysSetTime || s) || this._defaults.timeOnly === !0 && this._defaults.timeOnlyShowDate === !0) && (r += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix), this.formattedDateTime = r, this._defaults.showTimepicker)
                    if (this.$altInput && this._defaults.timeOnly === !1 && this._defaults.altFieldTimeOnly === !0) this.$altInput.val(this.formattedTime), this.$input.val(this.formattedDate);
                    else if (this.$altInput) {
                    this.$input.val(r);
                    var o = "",
                        l = null !== this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
                        u = null !== this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
                    this._defaults.timeOnly || (o = this._defaults.altFormat ? $.datepicker.formatDate(this._defaults.altFormat, null === i ? new Date : i, a) : this.formattedDate, o && (o += l)), o += null !== this._defaults.altTimeFormat ? $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + u : this.formattedTime + u, this.$altInput.val(o)
                } else this.$input.val(r);
                else this.$input.val(this.formattedDate);
                this.$input.trigger("change")
            },
            _onFocus: function() {
                if (!this.$input.val() && this._defaults.defaultValue) {
                    this.$input.val(this._defaults.defaultValue);
                    var e = $.datepicker._getInst(this.$input.get(0)),
                        t = $.datepicker._get(e, "timepicker");
                    if (t && t._defaults.timeOnly && e.input.val() !== e.lastVal) try {
                        $.datepicker._updateDatepicker(e)
                    } catch (i) {
                        $.timepicker.log(i)
                    }
                }
            },
            _controls: {
                slider: {
                    create: function(e, t, i, n, a, s, r) {
                        var o = e._defaults.isRTL;
                        return t.prop("slide", null).slider({
                            orientation: "horizontal",
                            value: o ? -1 * n : n,
                            min: o ? -1 * s : a,
                            max: o ? -1 * a : s,
                            step: r,
                            slide: function(t, n) {
                                e.control.value(e, $(this), i, o ? -1 * n.value : n.value), e._onTimeChange()
                            },
                            stop: function(t, i) {
                                e._onSelectHandler()
                            }
                        })
                    },
                    options: function(e, t, i, n, a) {
                        if (e._defaults.isRTL) {
                            if ("string" == typeof n) return "min" === n || "max" === n ? void 0 !== a ? t.slider(n, -1 * a) : Math.abs(t.slider(n)) : t.slider(n);
                            var s = n.min,
                                r = n.max;
                            return n.min = n.max = null, void 0 !== s && (n.max = -1 * s), void 0 !== r && (n.min = -1 * r), t.slider(n)
                        }
                        return "string" == typeof n && void 0 !== a ? t.slider(n, a) : t.slider(n)
                    },
                    value: function(e, t, i, n) {
                        return e._defaults.isRTL ? void 0 !== n ? t.slider("value", -1 * n) : Math.abs(t.slider("value")) : void 0 !== n ? t.slider("value", n) : t.slider("value")
                    }
                },
                select: {
                    create: function(e, t, i, n, a, s, r) {
                        for (var o = '<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="' + i + '" data-min="' + a + '" data-max="' + s + '" data-step="' + r + '">', l = e._defaults.pickerTimeFormat || e._defaults.timeFormat, u = a; s >= u; u += r) o += '<option value="' + u + '"' + (u === n ? " selected" : "") + ">", o += "hour" === i ? $.datepicker.formatTime($.trim(l.replace(/[^ht ]/gi, "")), {
                            hour: u
                        }, e._defaults) : "millisec" === i || "microsec" === i || u >= 10 ? u : "0" + u.toString(), o += "</option>";
                        return o += "</select>", t.children("select").remove(), $(o).appendTo(t).change(function(t) {
                            e._onTimeChange(), e._onSelectHandler(), e._afterInject()
                        }), t
                    },
                    options: function(e, t, i, n, a) {
                        var s = {},
                            r = t.children("select");
                        if ("string" == typeof n) {
                            if (void 0 === a) return r.data(n);
                            s[n] = a
                        } else s = n;
                        return e.control.create(e, t, r.data("unit"), r.val(), s.min >= 0 ? s.min : r.data("min"), s.max || r.data("max"), s.step || r.data("step"))
                    },
                    value: function(e, t, i, n) {
                        var a = t.children("select");
                        return void 0 !== n ? a.val(n) : a.val()
                    }
                }
            }
        }), $.fn.extend({
            timepicker: function(e) {
                e = e || {};
                var t = Array.prototype.slice.call(arguments);
                return "object" == typeof e && (t[0] = $.extend(e, {
                    timeOnly: !0
                })), $(this).each(function() {
                    $.fn.datetimepicker.apply($(this), t)
                })
            },
            datetimepicker: function(e) {
                e = e || {};
                var t = arguments;
                return "string" == typeof e ? "getDate" === e || "option" === e && 2 === t.length && "string" == typeof t[1] ? $.fn.datepicker.apply($(this[0]), t) : this.each(function() {
                    var e = $(this);
                    e.datepicker.apply(e, t)
                }) : this.each(function() {
                    var t = $(this);
                    t.datepicker($.timepicker._newInst(t, e)._defaults)
                })
            }
        }), $.datepicker.parseDateTime = function(e, t, i, n, a) {
            var s = parseDateTimeInternal(e, t, i, n, a);
            if (s.timeObj) {
                var r = s.timeObj;
                s.date.setHours(r.hour, r.minute, r.second, r.millisec), s.date.setMicroseconds(r.microsec)
            }
            return s.date
        }, $.datepicker.parseTime = function(e, t, i) {
            var n = extendRemove(extendRemove({}, $.timepicker._defaults), i || {}),
                a = (-1 !== e.replace(/\'.*?\'/g, "").indexOf("Z"), function(e, t, i) {
                    var n, a = function(e, t) {
                            var i = [];
                            return e && $.merge(i, e), t && $.merge(i, t), i = $.map(i, function(e) {
                                return e.replace(/[.*+?|()\[\]{}\\]/g, "\\$&")
                            }), "(" + i.join("|") + ")?"
                        },
                        s = function(e) {
                            var t = e.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
                                i = {
                                    h: -1,
                                    m: -1,
                                    s: -1,
                                    l: -1,
                                    c: -1,
                                    t: -1,
                                    z: -1
                                };
                            if (t)
                                for (var n = 0; n < t.length; n++) - 1 === i[t[n].toString().charAt(0)] && (i[t[n].toString().charAt(0)] = n + 1);
                            return i
                        },
                        r = "^" + e.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(e) {
                            var t = e.length;
                            switch (e.charAt(0).toLowerCase()) {
                                case "h":
                                    return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                                case "m":
                                    return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                                case "s":
                                    return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                                case "l":
                                    return "(\\d?\\d?\\d)";
                                case "c":
                                    return "(\\d?\\d?\\d)";
                                case "z":
                                    return "(z|[-+]\\d\\d:?\\d\\d|\\S+)?";
                                case "t":
                                    return a(i.amNames, i.pmNames);
                                default:
                                    return "(" + e.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function(e) {
                                        return "\\" + e
                                    }) + ")?"
                            }
                        }).replace(/\s/g, "\\s?") + i.timeSuffix + "$",
                        o = s(e),
                        l = "";
                    n = t.match(new RegExp(r, "i"));
                    var u = {
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisec: 0,
                        microsec: 0
                    };
                    return n ? (-1 !== o.t && (void 0 === n[o.t] || 0 === n[o.t].length ? (l = "", u.ampm = "") : (l = -1 !== $.inArray(n[o.t].toUpperCase(), $.map(i.amNames, function(e, t) {
                        return e.toUpperCase()
                    })) ? "AM" : "PM", u.ampm = i["AM" === l ? "amNames" : "pmNames"][0])), -1 !== o.h && ("AM" === l && "12" === n[o.h] ? u.hour = 0 : "PM" === l && "12" !== n[o.h] ? u.hour = parseInt(n[o.h], 10) + 12 : u.hour = Number(n[o.h])), -1 !== o.m && (u.minute = Number(n[o.m])), -1 !== o.s && (u.second = Number(n[o.s])), -1 !== o.l && (u.millisec = Number(n[o.l])), -1 !== o.c && (u.microsec = Number(n[o.c])), -1 !== o.z && void 0 !== n[o.z] && (u.timezone = $.timepicker.timezoneOffsetNumber(n[o.z])), u) : !1
                }),
                s = function(e, t, i) {
                    try {
                        var n = new Date("2012-01-01 " + t);
                        if (isNaN(n.getTime()) && (n = new Date("2012-01-01T" + t), isNaN(n.getTime()) && (n = new Date("01/01/2012 " + t), isNaN(n.getTime())))) throw "Unable to parse time with native Date: " + t;
                        return {
                            hour: n.getHours(),
                            minute: n.getMinutes(),
                            second: n.getSeconds(),
                            millisec: n.getMilliseconds(),
                            microsec: n.getMicroseconds(),
                            timezone: -1 * n.getTimezoneOffset()
                        }
                    } catch (s) {
                        try {
                            return a(e, t, i)
                        } catch (r) {
                            $.timepicker.log("Unable to parse \ntimeString: " + t + "\ntimeFormat: " + e)
                        }
                    }
                    return !1
                };
            return "function" == typeof n.parse ? n.parse(e, t, n) : "loose" === n.parse ? s(e, t, n) : a(e, t, n)
        }, $.datepicker.formatTime = function(e, t, i) {
            i = i || {}, i = $.extend({}, $.timepicker._defaults, i), t = $.extend({
                hour: 0,
                minute: 0,
                second: 0,
                millisec: 0,
                microsec: 0,
                timezone: null
            }, t);
            var n = e,
                a = i.amNames[0],
                s = parseInt(t.hour, 10);
            return s > 11 && (a = i.pmNames[0]), n = n.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(e) {
                switch (e) {
                    case "HH":
                        return ("0" + s).slice(-2);
                    case "H":
                        return s;
                    case "hh":
                        return ("0" + convert24to12(s)).slice(-2);
                    case "h":
                        return convert24to12(s);
                    case "mm":
                        return ("0" + t.minute).slice(-2);
                    case "m":
                        return t.minute;
                    case "ss":
                        return ("0" + t.second).slice(-2);
                    case "s":
                        return t.second;
                    case "l":
                        return ("00" + t.millisec).slice(-3);
                    case "c":
                        return ("00" + t.microsec).slice(-3);
                    case "z":
                        return $.timepicker.timezoneOffsetString(null === t.timezone ? i.timezone : t.timezone, !1);
                    case "Z":
                        return $.timepicker.timezoneOffsetString(null === t.timezone ? i.timezone : t.timezone, !0);
                    case "T":
                        return a.charAt(0).toUpperCase();
                    case "TT":
                        return a.toUpperCase();
                    case "t":
                        return a.charAt(0).toLowerCase();
                    case "tt":
                        return a.toLowerCase();
                    default:
                        return e.replace(/'/g, "")
                }
            })
        }, $.datepicker._base_selectDate = $.datepicker._selectDate, $.datepicker._selectDate = function(e, t) {
            var i, n = this._getInst($(e)[0]),
                a = this._get(n, "timepicker");
            a && n.settings.showTimepicker ? (a._limitMinMaxDateTime(n, !0), i = n.inline, n.inline = n.stay_open = !0, this._base_selectDate(e, t), n.inline = i, n.stay_open = !1, this._notifyChange(n), this._updateDatepicker(n)) : this._base_selectDate(e, t)
        }, $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker, $.datepicker._updateDatepicker = function(e) {
            var t = e.input[0];
            if (!($.datepicker._curInst && $.datepicker._curInst !== e && $.datepicker._datepickerShowing && $.datepicker._lastInput !== t || "boolean" == typeof e.stay_open && e.stay_open !== !1)) {
                this._base_updateDatepicker(e);
                var i = this._get(e, "timepicker");
                i && i._addTimePicker(e)
            }
        }, $.datepicker._base_doKeyPress = $.datepicker._doKeyPress, $.datepicker._doKeyPress = function(e) {
            var t = $.datepicker._getInst(e.target),
                i = $.datepicker._get(t, "timepicker");
            if (i && $.datepicker._get(t, "constrainInput")) {
                var n = i.support.ampm,
                    a = null !== i._defaults.showTimezone ? i._defaults.showTimezone : i.support.timezone,
                    s = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                    r = i._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, n ? "APM" : "").replace(/Tt/g, n ? "AaPpMm" : "").replace(/tT/g, n ? "AaPpMm" : "").replace(/T/g, n ? "AP" : "").replace(/tt/g, n ? "apm" : "").replace(/t/g, n ? "ap" : "") + " " + i._defaults.separator + i._defaults.timeSuffix + (a ? i._defaults.timezoneList.join("") : "") + i._defaults.amNames.join("") + i._defaults.pmNames.join("") + s,
                    o = String.fromCharCode(void 0 === e.charCode ? e.keyCode : e.charCode);
                return e.ctrlKey || " " > o || !s || r.indexOf(o) > -1
            }
            return $.datepicker._base_doKeyPress(e)
        }, $.datepicker._base_updateAlternate = $.datepicker._updateAlternate, $.datepicker._updateAlternate = function(e) {
            var t = this._get(e, "timepicker");
            if (t) {
                var i = t._defaults.altField;
                if (i) {
                    var n = (t._defaults.altFormat || t._defaults.dateFormat, this._getDate(e)),
                        a = $.datepicker._getFormatConfig(e),
                        s = "",
                        r = t._defaults.altSeparator ? t._defaults.altSeparator : t._defaults.separator,
                        o = t._defaults.altTimeSuffix ? t._defaults.altTimeSuffix : t._defaults.timeSuffix,
                        l = null !== t._defaults.altTimeFormat ? t._defaults.altTimeFormat : t._defaults.timeFormat;
                    s += $.datepicker.formatTime(l, t, t._defaults) + o, t._defaults.timeOnly || t._defaults.altFieldTimeOnly || null === n || (s = t._defaults.altFormat ? $.datepicker.formatDate(t._defaults.altFormat, n, a) + r + s : t.formattedDate + r + s), $(i).val(e.input.val() ? s : "")
                }
            } else $.datepicker._base_updateAlternate(e)
        }, $.datepicker._base_doKeyUp = $.datepicker._doKeyUp, $.datepicker._doKeyUp = function(e) {
            var t = $.datepicker._getInst(e.target),
                i = $.datepicker._get(t, "timepicker");
            if (i && i._defaults.timeOnly && t.input.val() !== t.lastVal) try {
                $.datepicker._updateDatepicker(t)
            } catch (n) {
                $.timepicker.log(n)
            }
            return $.datepicker._base_doKeyUp(e)
        }, $.datepicker._base_gotoToday = $.datepicker._gotoToday, $.datepicker._gotoToday = function(e) {
            var t = this._getInst($(e)[0]);
            this._base_gotoToday(e);
            var i = this._get(t, "timepicker"),
                n = $.timepicker.timezoneOffsetNumber(i.timezone),
                a = new Date;
            a.setMinutes(a.getMinutes() + a.getTimezoneOffset() + n), this._setTime(t, a), this._setDate(t, a), i._onSelectHandler();
        }, $.datepicker._disableTimepickerDatepicker = function(e) {
            var t = this._getInst(e);
            if (t) {
                var i = this._get(t, "timepicker");
                $(e).datepicker("getDate"), i && (t.settings.showTimepicker = !1, i._defaults.showTimepicker = !1, i._updateDateTime(t))
            }
        }, $.datepicker._enableTimepickerDatepicker = function(e) {
            var t = this._getInst(e);
            if (t) {
                var i = this._get(t, "timepicker");
                $(e).datepicker("getDate"), i && (t.settings.showTimepicker = !0, i._defaults.showTimepicker = !0, i._addTimePicker(t), i._updateDateTime(t))
            }
        }, $.datepicker._setTime = function(e, t) {
            var i = this._get(e, "timepicker");
            if (i) {
                var n = i._defaults;
                i.hour = t ? t.getHours() : n.hour, i.minute = t ? t.getMinutes() : n.minute, i.second = t ? t.getSeconds() : n.second, i.millisec = t ? t.getMilliseconds() : n.millisec, i.microsec = t ? t.getMicroseconds() : n.microsec, i._limitMinMaxDateTime(e, !0), i._onTimeChange(), i._updateDateTime(e)
            }
        }, $.datepicker._setTimeDatepicker = function(e, t, i) {
            var n = this._getInst(e);
            if (n) {
                var a = this._get(n, "timepicker");
                if (a) {
                    this._setDateFromField(n);
                    var s;
                    t && ("string" == typeof t ? (a._parseTime(t, i), s = new Date, s.setHours(a.hour, a.minute, a.second, a.millisec), s.setMicroseconds(a.microsec)) : (s = new Date(t.getTime()), s.setMicroseconds(t.getMicroseconds())), "Invalid Date" === s.toString() && (s = void 0), this._setTime(n, s))
                }
            }
        }, $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker, $.datepicker._setDateDatepicker = function(e, t) {
            var i = this._getInst(e),
                n = t;
            if (i) {
                "string" == typeof t && (n = new Date(t), n.getTime() || (this._base_setDateDatepicker.apply(this, arguments), n = $(e).datepicker("getDate")));
                var a, s = this._get(i, "timepicker");
                n instanceof Date ? (a = new Date(n.getTime()), a.setMicroseconds(n.getMicroseconds())) : a = n, s && a && (s.support.timezone || null !== s._defaults.timezone || (s.timezone = -1 * a.getTimezoneOffset()), n = $.timepicker.timezoneAdjust(n, s.timezone), a = $.timepicker.timezoneAdjust(a, s.timezone)), this._updateDatepicker(i), this._base_setDateDatepicker.apply(this, arguments), this._setTimeDatepicker(e, a, !0)
            }
        }, $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker, $.datepicker._getDateDatepicker = function(e, t) {
            var i = this._getInst(e);
            if (i) {
                var n = this._get(i, "timepicker");
                if (n) {
                    void 0 === i.lastVal && this._setDateFromField(i, t);
                    var a = this._getDate(i),
                        s = $.trim(n.$altInput && n._defaults.altFieldTimeOnly ? n.$input.val() + " " + n.$altInput.val() : n.$input.val());
                    return a && n._parseTime(s, !i.settings.timeOnly) && (a.setHours(n.hour, n.minute, n.second, n.millisec), a.setMicroseconds(n.microsec), null != n.timezone && (n.support.timezone || null !== n._defaults.timezone || (n.timezone = -1 * a.getTimezoneOffset()), a = $.timepicker.timezoneAdjust(a, n.timezone))), a
                }
                return this._base_getDateDatepicker(e, t)
            }
        }, $.datepicker._base_parseDate = $.datepicker.parseDate, $.datepicker.parseDate = function(e, t, i) {
            var n;
            try {
                n = this._base_parseDate(e, t, i)
            } catch (a) {
                if (!(a.indexOf(":") >= 0)) throw a;
                n = this._base_parseDate(e, t.substring(0, t.length - (a.length - a.indexOf(":") - 2)), i), $.timepicker.log("Error parsing the date string: " + a + "\ndate string = " + t + "\ndate format = " + e)
            }
            return n
        }, $.datepicker._base_formatDate = $.datepicker._formatDate, $.datepicker._formatDate = function(e, t, i, n) {
            var a = this._get(e, "timepicker");
            return a ? (a._updateDateTime(e), a.$input.val()) : this._base_formatDate(e)
        }, $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker, $.datepicker._optionDatepicker = function(e, t, i) {
            var n, a = this._getInst(e);
            if (!a) return null;
            var s = this._get(a, "timepicker");
            if (s) {
                var r, o, l, u, c = null,
                    d = null,
                    h = null,
                    p = s._defaults.evnts,
                    f = {};
                if ("string" == typeof t) {
                    if ("minDate" === t || "minDateTime" === t) c = i;
                    else if ("maxDate" === t || "maxDateTime" === t) d = i;
                    else if ("onSelect" === t) h = i;
                    else if (p.hasOwnProperty(t)) {
                        if ("undefined" == typeof i) return p[t];
                        f[t] = i, n = {}
                    }
                } else if ("object" == typeof t) {
                    t.minDate ? c = t.minDate : t.minDateTime ? c = t.minDateTime : t.maxDate ? d = t.maxDate : t.maxDateTime && (d = t.maxDateTime);
                    for (r in p) p.hasOwnProperty(r) && t[r] && (f[r] = t[r])
                }
                for (r in f) f.hasOwnProperty(r) && (p[r] = f[r], n || (n = $.extend({}, t)), delete n[r]);
                if (n && isEmptyObject(n)) return;
                if (c ? (c = 0 === c ? new Date : new Date(c), s._defaults.minDate = c, s._defaults.minDateTime = c) : d ? (d = 0 === d ? new Date : new Date(d), s._defaults.maxDate = d, s._defaults.maxDateTime = d) : h && (s._defaults.onSelect = h), c || d) return u = $(e), l = u.datetimepicker("getDate"), o = this._base_optionDatepicker.call($.datepicker, e, n || t, i), u.datetimepicker("setDate", l), o
            }
            return void 0 === i ? this._base_optionDatepicker.call($.datepicker, e, t) : this._base_optionDatepicker.call($.datepicker, e, n || t, i)
        };
        var isEmptyObject = function(e) {
                var t;
                for (t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            },
            extendRemove = function(e, t) {
                $.extend(e, t);
                for (var i in t)(null === t[i] || void 0 === t[i]) && (e[i] = t[i]);
                return e
            },
            detectSupport = function(e) {
                var t = e.replace(/'.*?'/g, "").toLowerCase(),
                    i = function(e, t) {
                        return -1 !== e.indexOf(t) ? !0 : !1
                    };
                return {
                    hour: i(t, "h"),
                    minute: i(t, "m"),
                    second: i(t, "s"),
                    millisec: i(t, "l"),
                    microsec: i(t, "c"),
                    timezone: i(t, "z"),
                    ampm: i(t, "t") && i(e, "h"),
                    iso8601: i(e, "Z")
                }
            },
            convert24to12 = function(e) {
                return e %= 12, 0 === e && (e = 12), String(e)
            },
            computeEffectiveSetting = function(e, t) {
                return e && e[t] ? e[t] : $.timepicker._defaults[t]
            },
            splitDateTime = function(e, t) {
                var i = computeEffectiveSetting(t, "separator"),
                    n = computeEffectiveSetting(t, "timeFormat"),
                    a = n.split(i),
                    s = a.length,
                    r = e.split(i),
                    o = r.length;
                return o > 1 ? {
                    dateString: r.splice(0, o - s).join(i),
                    timeString: r.splice(0, s).join(i)
                } : {
                    dateString: e,
                    timeString: ""
                }
            },
            parseDateTimeInternal = function(e, t, i, n, a) {
                var s, r, o;
                if (r = splitDateTime(i, a), s = $.datepicker._base_parseDate(e, r.dateString, n), "" === r.timeString) return {
                    date: s
                };
                if (o = $.datepicker.parseTime(t, r.timeString, a), !o) throw "Wrong time format";
                return {
                    date: s,
                    timeObj: o
                }
            },
            selectLocalTimezone = function(e, t) {
                if (e && e.timezone_select) {
                    var i = t || new Date;
                    e.timezone_select.val(-i.getTimezoneOffset())
                }
            };
        $.timepicker = new Timepicker, $.timepicker.timezoneOffsetString = function(e, t) {
            if (isNaN(e) || e > 840 || -720 > e) return e;
            var i = e,
                n = i % 60,
                a = (i - n) / 60,
                s = t ? ":" : "",
                r = (i >= 0 ? "+" : "-") + ("0" + Math.abs(a)).slice(-2) + s + ("0" + Math.abs(n)).slice(-2);
            return "+00:00" === r ? "Z" : r
        }, $.timepicker.timezoneOffsetNumber = function(e) {
            var t = e.toString().replace(":", "");
            return "Z" === t.toUpperCase() ? 0 : /^(\-|\+)\d{4}$/.test(t) ? ("-" === t.substr(0, 1) ? -1 : 1) * (60 * parseInt(t.substr(1, 2), 10) + parseInt(t.substr(3, 2), 10)) : e
        }, $.timepicker.timezoneAdjust = function(e, t) {
            var i = $.timepicker.timezoneOffsetNumber(t);
            return isNaN(i) || e.setMinutes(e.getMinutes() + -e.getTimezoneOffset() - i), e
        }, $.timepicker.timeRange = function(e, t, i) {
            return $.timepicker.handleRange("timepicker", e, t, i)
        }, $.timepicker.datetimeRange = function(e, t, i) {
            $.timepicker.handleRange("datetimepicker", e, t, i)
        }, $.timepicker.dateRange = function(e, t, i) {
            $.timepicker.handleRange("datepicker", e, t, i)
        }, $.timepicker.handleRange = function(e, t, i, n) {
            function a(a, s) {
                var r = t[e]("getDate"),
                    o = i[e]("getDate"),
                    l = a[e]("getDate");
                if (null !== r) {
                    var u = new Date(r.getTime()),
                        c = new Date(r.getTime());
                    u.setMilliseconds(u.getMilliseconds() + n.minInterval), c.setMilliseconds(c.getMilliseconds() + n.maxInterval), n.minInterval > 0 && u > o ? i[e]("setDate", u) : n.maxInterval > 0 && o > c ? i[e]("setDate", c) : r > o && s[e]("setDate", l)
                }
            }

            function s(t, i, a) {
                if (t.val()) {
                    var s = t[e].call(t, "getDate");
                    null !== s && n.minInterval > 0 && ("minDate" === a && s.setMilliseconds(s.getMilliseconds() + n.minInterval), "maxDate" === a && s.setMilliseconds(s.getMilliseconds() - n.minInterval)), s.getTime && i[e].call(i, "option", a, s)
                }
            }
            n = $.extend({}, {
                minInterval: 0,
                maxInterval: 0,
                start: {},
                end: {}
            }, n);
            var r = !1;
            return "timepicker" === e && (r = !0, e = "datetimepicker"), $.fn[e].call(t, $.extend({
                timeOnly: r,
                onClose: function(e, t) {
                    a($(this), i)
                },
                onSelect: function(e) {
                    s($(this), i, "minDate")
                }
            }, n, n.start)), $.fn[e].call(i, $.extend({
                timeOnly: r,
                onClose: function(e, i) {
                    a($(this), t)
                },
                onSelect: function(e) {
                    s($(this), t, "maxDate")
                }
            }, n, n.end)), a(t, i), s(t, i, "minDate"), s(i, t, "maxDate"), $([t.get(0), i.get(0)])
        }, $.timepicker.log = function() {
            window.console && window.console.log.apply(window.console, Array.prototype.slice.call(arguments))
        }, $.timepicker._util = {
            _extendRemove: extendRemove,
            _isEmptyObject: isEmptyObject,
            _convert24to12: convert24to12,
            _detectSupport: detectSupport,
            _selectLocalTimezone: selectLocalTimezone,
            _computeEffectiveSetting: computeEffectiveSetting,
            _splitDateTime: splitDateTime,
            _parseDateTimeInternal: parseDateTimeInternal
        }, Date.prototype.getMicroseconds || (Date.prototype.microseconds = 0, Date.prototype.getMicroseconds = function() {
            return this.microseconds
        }, Date.prototype.setMicroseconds = function(e) {
            return this.setMilliseconds(this.getMilliseconds() + Math.floor(e / 1e3)), this.microseconds = e % 1e3, this
        }), $.timepicker.version = "1.6.1"
    }
}),
function(e) {
    var t = function() {
        "use strict";
        var e = "s",
            i = 2011,
            n = function(e) {
                var t = -e.getTimezoneOffset();
                return null !== t ? t : 0
            },
            a = function(e, t, i) {
                var n = new Date;
                return void 0 !== e && n.setFullYear(e), n.setDate(i), n.setMonth(t), n
            },
            s = function(e) {
                return n(a(e, 0, 2))
            },
            r = function(e) {
                return n(a(e, 5, 2))
            },
            o = function(e) {
                var t = e.getMonth() > 7 ? r(e.getFullYear()) : s(e.getFullYear()),
                    i = n(e);
                return t - i !== 0
            },
            l = function() {
                var t = s(i),
                    n = r(i),
                    a = t - n;
                return 0 > a ? t + ",1" : a > 0 ? n + ",1," + e : t + ",0"
            },
            u = function() {
                var e = l();
                return new t.TimeZone(t.olson.timezones[e])
            },
            c = function(e) {
                var t = new Date(2010, 6, 15, 1, 0, 0, 0),
                    i = {
                        "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0),
                        "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0),
                        "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0),
                        "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0),
                        "America/Asuncion": new Date(2012, 9, 7, 3, 0, 0, 0),
                        "America/Santiago": new Date(2012, 9, 3, 3, 0, 0, 0),
                        "America/Campo_Grande": new Date(2012, 9, 21, 5, 0, 0, 0),
                        "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0),
                        "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0),
                        "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0),
                        "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0),
                        "America/Havana": new Date(2012, 2, 10, 2, 0, 0, 0),
                        "America/New_York": new Date(2012, 2, 10, 7, 0, 0, 0),
                        "Asia/Beirut": new Date(2011, 2, 27, 1, 0, 0, 0),
                        "Europe/Helsinki": new Date(2011, 2, 27, 4, 0, 0, 0),
                        "Europe/Istanbul": new Date(2011, 2, 28, 5, 0, 0, 0),
                        "Asia/Damascus": new Date(2011, 3, 1, 2, 0, 0, 0),
                        "Asia/Jerusalem": new Date(2011, 3, 1, 6, 0, 0, 0),
                        "Asia/Gaza": new Date(2009, 2, 28, 0, 30, 0, 0),
                        "Africa/Cairo": new Date(2009, 3, 25, 0, 30, 0, 0),
                        "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0),
                        "Pacific/Fiji": new Date(2010, 10, 29, 23, 0, 0, 0),
                        "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0),
                        "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0),
                        "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0),
                        "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0),
                        "Europe/Moscow": t,
                        "Asia/Yekaterinburg": t,
                        "Asia/Omsk": t,
                        "Asia/Krasnoyarsk": t,
                        "Asia/Irkutsk": t,
                        "Asia/Yakutsk": t,
                        "Asia/Vladivostok": t,
                        "Asia/Kamchatka": t,
                        "Europe/Minsk": t,
                        "Pacific/Apia": new Date(2010, 10, 1, 1, 0, 0, 0),
                        "Australia/Perth": new Date(2008, 10, 1, 1, 0, 0, 0)
                    };
                return i[e]
            };
        return {
            determine: u,
            date_is_dst: o,
            dst_start_for: c
        }
    }();
    t.TimeZone = function(e) {
        "use strict";
        var i = {
                "America/Denver": ["America/Denver", "America/Mazatlan"],
                "America/Chicago": ["America/Chicago", "America/Mexico_City"],
                "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"],
                "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
                "Asia/Beirut": ["Asia/Beirut", "Europe/Helsinki", "Europe/Istanbul", "Asia/Damascus", "Asia/Jerusalem", "Asia/Gaza"],
                "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
                "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
                "America/New_York": ["America/Havana", "America/New_York"],
                "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
                "America/Godthab": ["America/Miquelon", "America/Godthab"],
                "Asia/Dubai": ["Europe/Moscow"],
                "Asia/Dhaka": ["Asia/Yekaterinburg"],
                "Asia/Jakarta": ["Asia/Omsk"],
                "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"],
                "Asia/Tokyo": ["Asia/Irkutsk"],
                "Australia/Brisbane": ["Asia/Yakutsk"],
                "Pacific/Noumea": ["Asia/Vladivostok"],
                "Pacific/Tarawa": ["Asia/Kamchatka"],
                "Pacific/Tongatapu": ["Pacific/Apia"],
                "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"],
                "Asia/Baghdad": ["Europe/Minsk"]
            },
            n = e,
            a = function() {
                for (var e = i[n], a = e.length, s = 0, r = e[0]; a > s; s += 1)
                    if (r = e[s], t.date_is_dst(t.dst_start_for(r))) return void(n = r)
            },
            s = function() {
                return "undefined" != typeof i[n]
            };
        return s() && a(), {
            name: function() {
                return n
            }
        }
    }, t.olson = {}, t.olson.timezones = {
        "-720,0": "Pacific/Majuro",
        "-660,0": "Pacific/Pago_Pago",
        "-600,1": "America/Adak",
        "-600,0": "Pacific/Honolulu",
        "-570,0": "Pacific/Marquesas",
        "-540,0": "Pacific/Gambier",
        "-540,1": "America/Anchorage",
        "-480,1": "America/Los_Angeles",
        "-480,0": "Pacific/Pitcairn",
        "-420,0": "America/Phoenix",
        "-420,1": "America/Denver",
        "-360,0": "America/Guatemala",
        "-360,1": "America/Chicago",
        "-360,1,s": "Pacific/Easter",
        "-300,0": "America/Bogota",
        "-300,1": "America/New_York",
        "-270,0": "America/Caracas",
        "-240,1": "America/Halifax",
        "-240,0": "America/Santo_Domingo",
        "-240,1,s": "America/Santiago",
        "-210,1": "America/St_Johns",
        "-180,1": "America/Godthab",
        "-180,0": "America/Argentina/Buenos_Aires",
        "-180,1,s": "America/Montevideo",
        "-120,0": "America/Noronha",
        "-120,1": "America/Noronha",
        "-60,1": "Atlantic/Azores",
        "-60,0": "Atlantic/Cape_Verde",
        "0,0": "UTC",
        "0,1": "Europe/London",
        "60,1": "Europe/Berlin",
        "60,0": "Africa/Lagos",
        "60,1,s": "Africa/Windhoek",
        "120,1": "Asia/Beirut",
        "120,0": "Africa/Johannesburg",
        "180,0": "Asia/Baghdad",
        "180,1": "Europe/Moscow",
        "210,1": "Asia/Tehran",
        "240,0": "Asia/Dubai",
        "240,1": "Asia/Baku",
        "270,0": "Asia/Kabul",
        "300,1": "Asia/Yekaterinburg",
        "300,0": "Asia/Karachi",
        "330,0": "Asia/Kolkata",
        "345,0": "Asia/Kathmandu",
        "360,0": "Asia/Dhaka",
        "360,1": "Asia/Omsk",
        "390,0": "Asia/Rangoon",
        "420,1": "Asia/Krasnoyarsk",
        "420,0": "Asia/Jakarta",
        "480,0": "Asia/Shanghai",
        "480,1": "Asia/Irkutsk",
        "525,0": "Australia/Eucla",
        "525,1,s": "Australia/Eucla",
        "540,1": "Asia/Yakutsk",
        "540,0": "Asia/Tokyo",
        "570,0": "Australia/Darwin",
        "570,1,s": "Australia/Adelaide",
        "600,0": "Australia/Brisbane",
        "600,1": "Asia/Vladivostok",
        "600,1,s": "Australia/Sydney",
        "630,1,s": "Australia/Lord_Howe",
        "660,1": "Asia/Kamchatka",
        "660,0": "Pacific/Noumea",
        "690,0": "Pacific/Norfolk",
        "720,1,s": "Pacific/Auckland",
        "720,0": "Pacific/Tarawa",
        "765,1,s": "Pacific/Chatham",
        "780,0": "Pacific/Tongatapu",
        "780,1,s": "Pacific/Apia",
        "840,0": "Pacific/Kiritimati"
    }, "undefined" != typeof exports ? exports.jstz = t : e.jstz = t
}(this),
function(e) {
    "function" == typeof define && define.amd ? define(e) : window.purl = e()
}(function() {
    function e(e, t) {
        for (var i = decodeURI(e), n = m[t ? "strict" : "loose"].exec(i), a = {
                attr: {},
                param: {},
                seg: {}
            }, r = 14; r--;) a.attr[p[r]] = n[r] || "";
        return a.param.query = s(a.attr.query), a.param.fragment = s(a.attr.fragment), a.seg.path = a.attr.path.replace(/^\/+|\/+$/g, "").split("/"), a.seg.fragment = a.attr.fragment.replace(/^\/+|\/+$/g, "").split("/"), a.attr.base = a.attr.host ? (a.attr.protocol ? a.attr.protocol + "://" + a.attr.host : a.attr.host) + (a.attr.port ? ":" + a.attr.port : "") : "", a
    }

    function t(e) {
        var t = e.tagName;
        return "undefined" != typeof t ? h[t.toLowerCase()] : t
    }

    function i(e, t) {
        if (0 === e[t].length) return e[t] = {};
        var i = {};
        for (var n in e[t]) i[n] = e[t][n];
        return e[t] = i, i
    }

    function n(e, t, a, s) {
        var r = e.shift();
        if (r) {
            var o = t[a] = t[a] || [];
            "]" == r ? u(o) ? "" !== s && o.push(s) : "object" == typeof o ? o[c(o).length] = s : o = t[a] = [t[a], s] : ~r.indexOf("]") ? (r = r.substr(0, r.length - 1), !g.test(r) && u(o) && (o = i(t, a)), n(e, o, r, s)) : (!g.test(r) && u(o) && (o = i(t, a)), n(e, o, r, s))
        } else u(t[a]) ? t[a].push(s) : "object" == typeof t[a] ? t[a] = s : "undefined" == typeof t[a] ? t[a] = s : t[a] = [t[a], s]
    }

    function a(e, t, i) {
        if (~t.indexOf("]")) {
            var a = t.split("[");
            n(a, e, "base", i)
        } else {
            if (!g.test(t) && u(e.base)) {
                var s = {};
                for (var o in e.base) s[o] = e.base[o];
                e.base = s
            }
            "" !== t && r(e.base, t, i)
        }
        return e
    }

    function s(e) {
        return l(String(e).split(/&|;/), function(e, t) {
            try {
                t = decodeURIComponent(t.replace(/\+/g, " "))
            } catch (i) {}
            var n = t.indexOf("="),
                s = o(t),
                r = t.substr(0, s || n),
                l = t.substr(s || n, t.length);
            return l = l.substr(l.indexOf("=") + 1, l.length), "" === r && (r = t, l = ""), a(e, r, l)
        }, {
            base: {}
        }).base
    }

    function r(e, t, i) {
        var n = e[t];
        "undefined" == typeof n ? e[t] = i : u(n) ? n.push(i) : e[t] = [n, i]
    }

    function o(e) {
        for (var t, i, n = e.length, a = 0; n > a; ++a)
            if (i = e[a], "]" == i && (t = !1), "[" == i && (t = !0), "=" == i && !t) return a
    }

    function l(e, t) {
        for (var i = 0, n = e.length >> 0, a = arguments[2]; n > i;) i in e && (a = t.call(void 0, a, e[i], i, e)), ++i;
        return a
    }

    function u(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function c(e) {
        var t = [];
        for (var i in e) e.hasOwnProperty(i) && t.push(i);
        return t
    }

    function d(t, i) {
        return 1 === arguments.length && t === !0 && (i = !0, t = void 0), i = i || !1, t = t || window.location.toString(), {
            data: e(t, i),
            attr: function(e) {
                return e = f[e] || e, "undefined" != typeof e ? this.data.attr[e] : this.data.attr
            },
            param: function(e) {
                return "undefined" != typeof e ? this.data.param.query[e] : this.data.param.query
            },
            fparam: function(e) {
                return "undefined" != typeof e ? this.data.param.fragment[e] : this.data.param.fragment
            },
            segment: function(e) {
                return "undefined" == typeof e ? this.data.seg.path : (e = 0 > e ? this.data.seg.path.length + e : e - 1, this.data.seg.path[e])
            },
            fsegment: function(e) {
                return "undefined" == typeof e ? this.data.seg.fragment : (e = 0 > e ? this.data.seg.fragment.length + e : e - 1, this.data.seg.fragment[e])
            }
        }
    }
    var h = {
            a: "href",
            img: "src",
            form: "action",
            base: "href",
            script: "src",
            iframe: "src",
            link: "href",
            embed: "src",
            object: "data"
        },
        p = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
        f = {
            anchor: "fragment"
        },
        m = {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        },
        g = /^[0-9]+$/;
    return d.jQuery = function(e) {
        null != e && (e.fn.url = function(i) {
            var n = "";
            return this.length && (n = e(this).attr(t(this[0])) || ""), d(n, i)
        }, e.url = d)
    }, d.jQuery(window.jQuery), d
}), ! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Clipboard = e()
    }
}(function() {
    var e;
    return function t(e, i, n) {
        function a(r, o) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!o && l) return l(r, !0);
                    if (s) return s(r, !0);
                    var u = new Error("Cannot find module '" + r + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = i[r] = {
                    exports: {}
                };
                e[r][0].call(c.exports, function(t) {
                    var i = e[r][1][t];
                    return a(i ? i : t)
                }, c, c.exports, t, e, i, n)
            }
            return i[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) a(n[r]);
        return a
    }({
        1: [function(e, t, i) {
            var n = e("matches-selector");
            t.exports = function(e, t, i) {
                for (var a = i ? e : e.parentNode; a && a !== document;) {
                    if (n(a, t)) return a;
                    a = a.parentNode
                }
            }
        }, {
            "matches-selector": 5
        }],
        2: [function(e, t, i) {
            function n(e, t, i, n, s) {
                var r = a.apply(this, arguments);
                return e.addEventListener(i, r, s), {
                    destroy: function() {
                        e.removeEventListener(i, r, s)
                    }
                }
            }

            function a(e, t, i, n) {
                return function(i) {
                    i.delegateTarget = s(i.target, t, !0), i.delegateTarget && n.call(e, i)
                }
            }
            var s = e("closest");
            t.exports = n
        }, {
            closest: 1
        }],
        3: [function(e, t, i) {
            i.node = function(e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, i.nodeList = function(e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || i.node(e[0]))
            }, i.string = function(e) {
                return "string" == typeof e || e instanceof String
            }, i.fn = function(e) {
                var t = Object.prototype.toString.call(e);
                return "[object Function]" === t
            }
        }, {}],
        4: [function(e, t, i) {
            function n(e, t, i) {
                if (!e && !t && !i) throw new Error("Missing required arguments");
                if (!o.string(t)) throw new TypeError("Second argument must be a String");
                if (!o.fn(i)) throw new TypeError("Third argument must be a Function");
                if (o.node(e)) return a(e, t, i);
                if (o.nodeList(e)) return s(e, t, i);
                if (o.string(e)) return r(e, t, i);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function a(e, t, i) {
                return e.addEventListener(t, i), {
                    destroy: function() {
                        e.removeEventListener(t, i)
                    }
                }
            }

            function s(e, t, i) {
                return Array.prototype.forEach.call(e, function(e) {
                    e.addEventListener(t, i)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(e, function(e) {
                            e.removeEventListener(t, i)
                        })
                    }
                }
            }

            function r(e, t, i) {
                return l(document.body, e, t, i)
            }
            var o = e("./is"),
                l = e("delegate");
            t.exports = n
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function(e, t, i) {
            function n(e, t) {
                if (s) return s.call(e, t);
                for (var i = e.parentNode.querySelectorAll(t), n = 0; n < i.length; ++n)
                    if (i[n] == e) return !0;
                return !1
            }
            var a = Element.prototype,
                s = a.matchesSelector || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            t.exports = n
        }, {}],
        6: [function(e, t, i) {
            function n(e) {
                var t;
                if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) e.focus(), e.setSelectionRange(0, e.value.length), t = e.value;
                else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var i = window.getSelection(),
                        n = document.createRange();
                    n.selectNodeContents(e), i.removeAllRanges(), i.addRange(n), t = i.toString()
                }
                return t
            }
            t.exports = n
        }, {}],
        7: [function(e, t, i) {
            function n() {}
            n.prototype = {
                on: function(e, t, i) {
                    var n = this.e || (this.e = {});
                    return (n[e] || (n[e] = [])).push({
                        fn: t,
                        ctx: i
                    }), this
                },
                once: function(e, t, i) {
                    function n() {
                        a.off(e, n), t.apply(i, arguments)
                    }
                    var a = this;
                    return n._ = t, this.on(e, n, i)
                },
                emit: function(e) {
                    var t = [].slice.call(arguments, 1),
                        i = ((this.e || (this.e = {}))[e] || []).slice(),
                        n = 0,
                        a = i.length;
                    for (n; a > n; n++) i[n].fn.apply(i[n].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var i = this.e || (this.e = {}),
                        n = i[e],
                        a = [];
                    if (n && t)
                        for (var s = 0, r = n.length; r > s; s++) n[s].fn !== t && n[s].fn._ !== t && a.push(n[s]);
                    return a.length ? i[e] = a : delete i[e], this
                }
            }, t.exports = n
        }, {}],
        8: [function(t, i, n) {
            ! function(a, s) {
                if ("function" == typeof e && e.amd) e(["module", "select"], s);
                else if ("undefined" != typeof n) s(i, t("select"));
                else {
                    var r = {
                        exports: {}
                    };
                    s(r, a.select), a.clipboardAction = r.exports
                }
            }(this, function(e, t) {
                "use strict";

                function i(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                var a = i(t),
                    s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                    },
                    r = function() {
                        function e(e, t) {
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }
                        return function(t, i, n) {
                            return i && e(t.prototype, i), n && e(t, n), t
                        }
                    }(),
                    o = function() {
                        function e(t) {
                            n(this, e), this.resolveOptions(t), this.initSelection()
                        }
                        return e.prototype.resolveOptions = function() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                        }, e.prototype.initSelection = function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }, e.prototype.selectFake = function() {
                            var e = this,
                                t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return e.removeFake()
                            }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, a["default"])(this.fakeElem), this.copyText()
                        }, e.prototype.removeFake = function() {
                            this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                        }, e.prototype.selectTarget = function() {
                            this.selectedText = (0, a["default"])(this.target), this.copyText()
                        }, e.prototype.copyText = function() {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch (t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }, e.prototype.handleResult = function(e) {
                            e ? this.emitter.emit("success", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            }) : this.emitter.emit("error", {
                                action: this.action,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }, e.prototype.clearSelection = function() {
                            this.target && this.target.blur(), window.getSelection().removeAllRanges()
                        }, e.prototype.destroy = function() {
                            this.removeFake()
                        }, r(e, [{
                            key: "action",
                            set: function() {
                                var e = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== ("undefined" == typeof e ? "undefined" : s(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]), e
                    }();
                e.exports = o
            })
        }, {
            select: 6
        }],
        9: [function(t, i, n) {
            ! function(a, s) {
                if ("function" == typeof e && e.amd) e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], s);
                else if ("undefined" != typeof n) s(i, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
                else {
                    var r = {
                        exports: {}
                    };
                    s(r, a.clipboardAction, a.tinyEmitter, a.goodListener), a.clipboard = r.exports
                }
            }(this, function(e, t, i, n) {
                "use strict";

                function a(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function s(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function r(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function l(e, t) {
                    var i = "data-clipboard-" + e;
                    return t.hasAttribute(i) ? t.getAttribute(i) : void 0
                }
                var u = a(t),
                    c = a(i),
                    d = a(n),
                    h = function(e) {
                        function t(i, n) {
                            s(this, t);
                            var a = r(this, e.call(this));
                            return a.resolveOptions(n), a.listenClick(i), a
                        }
                        return o(t, e), t.prototype.resolveOptions = function() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
                        }, t.prototype.listenClick = function(e) {
                            var t = this;
                            this.listener = (0, d["default"])(e, "click", function(e) {
                                return t.onClick(e)
                            })
                        }, t.prototype.onClick = function(e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new u["default"]({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                trigger: t,
                                emitter: this
                            })
                        }, t.prototype.defaultAction = function(e) {
                            return l("action", e)
                        }, t.prototype.defaultTarget = function(e) {
                            var t = l("target", e);
                            return t ? document.querySelector(t) : void 0
                        }, t.prototype.defaultText = function(e) {
                            return l("text", e)
                        }, t.prototype.destroy = function() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }, t
                    }(c["default"]);
                e.exports = h
            })
        }, {
            "./clipboard-action": 8,
            "good-listener": 4,
            "tiny-emitter": 7
        }]
    }, {}, [9])(9)
}),
function(e) {
    var t, i = {
            className: "autosizejs",
            id: "autosizejs",
            append: "\n",
            callback: !1,
            resizeDelay: 10,
            placeholder: !0
        },
        n = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
        a = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
        s = e(n).data("autosize", !0)[0];
    s.style.lineHeight = "99px", "99px" === e(s).css("lineHeight") && a.push("lineHeight"), s.style.lineHeight = "", e.fn.autosize = function(n) {
        return this.length ? (n = e.extend({}, i, n || {}), s.parentNode !== document.body && e(document.body).append(s), this.each(function() {
            function i() {
                var t, i = window.getComputedStyle ? window.getComputedStyle(h, null) : !1;
                i ? (t = h.getBoundingClientRect().width, (0 === t || "number" != typeof t) && (t = parseInt(i.width, 10)), e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(e, n) {
                    t -= parseInt(i[n], 10)
                })) : t = p.width(), s.style.width = Math.max(t, 0) + "px"
            }

            function r() {
                var r = {};
                if (t = h, s.className = n.className, s.id = n.id, u = parseInt(p.css("maxHeight"), 10), e.each(a, function(e, t) {
                        r[t] = p.css(t)
                    }), e(s).css(r).attr("wrap", p.attr("wrap")), i(), window.chrome) {
                    var o = h.style.width;
                    h.style.width = "0px", h.offsetWidth, h.style.width = o
                }
            }

            function o() {
                var e, a;
                t !== h ? r() : i(), s.value = !h.value && n.placeholder ? (p.attr("placeholder") || "") + n.append : h.value + n.append, s.style.overflowY = h.style.overflowY, a = parseInt(h.style.height, 10), s.scrollTop = 0, s.scrollTop = 9e4, e = s.scrollTop, u && e > u ? (h.style.overflowY = "scroll", e = u) : (h.style.overflowY = "hidden", c > e && (e = c)), e += f, a !== e && (h.style.height = e + "px", m && n.callback.call(h, h))
            }

            function l() {
                clearTimeout(d), d = setTimeout(function() {
                    var e = p.width();
                    e !== _ && (_ = e, o())
                }, parseInt(n.resizeDelay, 10))
            }
            var u, c, d, h = this,
                p = e(h),
                f = 0,
                m = e.isFunction(n.callback),
                g = {
                    height: h.style.height,
                    overflow: h.style.overflow,
                    overflowY: h.style.overflowY,
                    wordWrap: h.style.wordWrap,
                    resize: h.style.resize
                },
                _ = p.width(),
                v = p.css("resize");
            p.data("autosize") || (p.data("autosize", !0), ("border-box" === p.css("box-sizing") || "border-box" === p.css("-moz-box-sizing") || "border-box" === p.css("-webkit-box-sizing")) && (f = p.outerHeight() - p.height()), c = Math.max(parseInt(p.css("minHeight"), 10) - f || 0, p.height()), p.css({
                overflow: "hidden",
                overflowY: "hidden",
                wordWrap: "break-word"
            }), "vertical" === v ? p.css("resize", "none") : "both" === v && p.css("resize", "horizontal"), "onpropertychange" in h ? "oninput" in h ? p.on("input.autosize keyup.autosize", o) : p.on("propertychange.autosize", function() {
                "value" === event.propertyName && o()
            }) : p.on("input.autosize", o), n.resizeDelay !== !1 && e(window).on("resize.autosize", l), p.on("autosize.resize", o), p.on("autosize.resizeIncludeStyle", function() {
                t = null, o()
            }), p.on("autosize.destroy", function() {
                t = null, clearTimeout(d), e(window).off("resize", l), p.off("autosize").off(".autosize").css(g).removeData("autosize")
            }), o())
        })) : this
    }
}(window.jQuery || window.$),
function(e) {
    e.fn.bPopup = function(t, i) {
        function n() {
            switch (g.contentContainer = e(g.contentContainer || $), g.content) {
                case "iframe":
                    var t = e('<iframe class="b-iframe" ' + g.iframeAttr + "></iframe>");
                    t.appendTo(g.contentContainer), D = $.outerHeight(!0), C = $.outerWidth(!0), a(), t.attr("src", g.loadUrl), p(g.loadCallback);
                    break;
                case "image":
                    a(), e("<img />").load(function() {
                        p(g.loadCallback), o(e(this))
                    }).attr("src", g.loadUrl).hide().appendTo(g.contentContainer);
                    break;
                default:
                    a(), e('<div class="b-ajax-wrapper"></div>').load(g.loadUrl, g.loadData, function(t, i, n) {
                        p(g.loadCallback, i), o(e(this))
                    }).hide().appendTo(g.contentContainer)
            }
        }

        function a() {
            g.modal && e('<div class="b-modal ' + _ + '"></div>').css({
                backgroundColor: g.modalColor,
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0,
                zIndex: g.zIndex + F
            }).appendTo(g.appendTo).fadeTo(g.speed, g.opacity), f(), $.data("bPopup", g).data("id", _).css({
                left: "slideIn" == g.transition || "slideBack" == g.transition ? "slideBack" == g.transition ? S.scrollLeft() + N : -1 * (w + C) : d(!(!g.follow[0] && b || k)),
                position: g.positionStyle || "absolute",
                top: "slideDown" == g.transition || "slideUp" == g.transition ? "slideUp" == g.transition ? S.scrollTop() + O : x + -1 * D : h(!(!g.follow[1] && y || k)),
                "z-index": g.zIndex + F + 1
            }).each(function() {
                g.appending && e(this).appendTo(g.appendTo)
            }), u(!0)
        }

        function s() {
            return g.modal && e(".b-modal." + $.data("id")).fadeTo(g.speed, 0, function() {
                e(this).remove()
            }), g.scrollBar || e("html").css("overflow", "auto"), e(".b-modal." + _).unbind("click"), S.unbind("keydown." + _), j.unbind("." + _).data("bPopup", 0 < j.data("bPopup") - 1 ? j.data("bPopup") - 1 : null), $.undelegate(".bClose, ." + g.closeClass, "click." + _, s).data("bPopup", null), clearTimeout(T), u(), !1
        }

        function r(t) {
            O = A.innerHeight || j.height(),
                N = A.innerWidth || j.width(), (v = m()) && (clearTimeout(M), M = setTimeout(function() {
                    f(), t = t || g.followSpeed, $.dequeue().each(function() {
                        k ? e(this).css({
                            left: w,
                            top: x
                        }) : e(this).animate({
                            left: g.follow[0] ? d(!0) : "auto",
                            top: g.follow[1] ? h(!0) : "auto"
                        }, t, g.followEasing)
                    })
                }, 50))
        }

        function o(e) {
            var t = e.width(),
                i = e.height(),
                n = {};
            g.contentContainer.css({
                height: i,
                width: t
            }), i >= $.height() && (n.height = $.height()), t >= $.width() && (n.width = $.width()), D = $.outerHeight(!0), C = $.outerWidth(!0), f(), g.contentContainer.css({
                height: "auto",
                width: "auto"
            }), n.left = d(!(!g.follow[0] && b || k)), n.top = h(!(!g.follow[1] && y || k)), $.animate(n, 250, function() {
                e.show(), v = m()
            })
        }

        function l() {
            j.data("bPopup", F), $.delegate(".bClose, ." + g.closeClass, "click." + _, s), g.modalClose && e(".b-modal." + _).css("cursor", "pointer").bind("click", s), I || !g.follow[0] && !g.follow[1] || j.bind("scroll." + _, function() {
                v && $.dequeue().animate({
                    left: g.follow[0] ? d(!k) : "auto",
                    top: g.follow[1] ? h(!k) : "auto"
                }, g.followSpeed, g.followEasing)
            }).bind("resize." + _, function() {
                r()
            }), g.escClose && S.bind("keydown." + _, function(e) {
                27 == e.which && s()
            })
        }

        function u(e) {
            function t(t) {
                $.css({
                    display: "block",
                    opacity: 1
                }).animate(t, g.speed, g.easing, function() {
                    c(e)
                })
            }
            switch (e ? g.transition : g.transitionClose || g.transition) {
                case "slideIn":
                    t({
                        left: e ? d(!(!g.follow[0] && b || k)) : S.scrollLeft() - (C || $.outerWidth(!0)) - E
                    });
                    break;
                case "slideBack":
                    t({
                        left: e ? d(!(!g.follow[0] && b || k)) : S.scrollLeft() + N + E
                    });
                    break;
                case "slideDown":
                    t({
                        top: e ? h(!(!g.follow[1] && y || k)) : S.scrollTop() - (D || $.outerHeight(!0)) - E
                    });
                    break;
                case "slideUp":
                    t({
                        top: e ? h(!(!g.follow[1] && y || k)) : S.scrollTop() + O + E
                    });
                    break;
                default:
                    $.stop().fadeTo(g.speed, e ? 1 : 0, function() {
                        c(e)
                    })
            }
        }

        function c(e) {
            e ? (l(), p(i), g.autoClose && (T = setTimeout(s, g.autoClose))) : ($.hide(), p(g.onClose), g.loadUrl && (g.contentContainer.empty(), $.css({
                height: "auto",
                width: "auto"
            })))
        }

        function d(e) {
            return e ? w + S.scrollLeft() : w
        }

        function h(e) {
            return e ? x + S.scrollTop() : x
        }

        function p(t, i) {
            e.isFunction(t) && t.call($, i)
        }

        function f() {
            x = y ? g.position[1] : Math.max(0, (O - $.outerHeight(!0)) / 2 - g.amsl), w = b ? g.position[0] : (N - $.outerWidth(!0)) / 2, v = m()
        }

        function m() {
            return O > $.outerHeight(!0) && N > $.outerWidth(!0)
        }
        e.isFunction(t) && (i = t, t = null);
        var g = e.extend({}, e.fn.bPopup.defaults, t);
        g.scrollBar || e("html").css("overflow", "hidden");
        var _, v, y, b, k, x, w, D, C, M, T, $ = this,
            S = e(document),
            A = window,
            j = e(A),
            O = A.innerHeight || j.height(),
            N = A.innerWidth || j.width(),
            I = /OS 6(_\d)+/i.test(navigator.userAgent),
            E = 200,
            F = 0;
        return $.close = function() {
            s()
        }, $.reposition = function(e) {
            r(e)
        }, $.each(function() {
            e(this).data("bPopup") || (p(g.onOpen), F = (j.data("bPopup") || 0) + 1, _ = "__b-popup" + F + "__", y = "auto" !== g.position[1], b = "auto" !== g.position[0], k = "fixed" === g.positionStyle, D = $.outerHeight(!0), C = $.outerWidth(!0), g.loadUrl ? n() : a())
        })
    }, e.fn.bPopup.defaults = {
        amsl: 50,
        appending: !0,
        appendTo: "body",
        autoClose: !1,
        closeClass: "b-close",
        content: "ajax",
        contentContainer: !1,
        easing: "swing",
        escClose: !0,
        follow: [!0, !0],
        followEasing: "swing",
        followSpeed: 500,
        iframeAttr: 'scrolling="no" frameborder="0"',
        loadCallback: !1,
        loadData: !1,
        loadUrl: !1,
        modal: !0,
        modalClose: !0,
        modalColor: "#000",
        onClose: !1,
        onOpen: !1,
        opacity: .7,
        position: ["auto", "auto"],
        positionStyle: "absolute",
        scrollBar: !0,
        speed: 250,
        transition: "fadeIn",
        transitionClose: !1,
        zIndex: 9997
    }
}(jQuery);
var ajax_url = "/ajax.php",
    typewatch = function() {
        var e = 0;
        return function(t, i) {
            clearTimeout(e), e = setTimeout(t, i)
        }
    }();
$(document).ready(function() {
    function e(e) {
        var t = 0,
            i = 0,
            n = 0;
        e.find(".table__rows > div").sort(function(e, t) {
            return parseInt($(e).attr("data-votes")) < parseInt($(t).attr("data-votes"))
        }).appendTo(e.find(".table__rows")), e.find(".table__row-outer-wrap").each(function() {
            t = parseInt($(this).attr("data-votes")), n = Math.max(n, t), i += t
        }), e.find(".table__row-outer-wrap").each(function() {
            t = parseInt($(this).attr("data-votes")), n ? answer_percent = Math.round(t / i * 100) : answer_percent = 0, $(this).find(".poll__vote-results__total").text(addCommas(t)), $(this).find(".poll__vote-results__percentage").text("(" + answer_percent + "%)"), t >= n ? ($(this).removeClass("poll__answer-container--negative"), $(this).addClass("poll__answer-container--positive")) : ($(this).removeClass("poll__answer-container--positive"), $(this).addClass("poll__answer-container--negative")), $(this).find(".poll__vote-graph").width(answer_percent + "%")
        })
    }

    function t(e) {
        return (start_time = $("input[name=start_time]").datetimepicker("getDate")) && (end_time = $("input[name=end_time]").datetimepicker("getDate")) ? (start_time.setHours(0, 0, 0, 0), end_time.setHours(0, 0, 0, 0), [!0, e.getTime() >= start_time.getTime() && e.getTime() <= end_time.getTime() ? "datepicker-highlight-range" : ""]) : [!0, ""]
    }

    function i() {
        (start_time = $("input[name=start_time]").datetimepicker("getDate")) && (end_time = $("input[name=end_time]").datetimepicker("getDate")) && (start_time = new Date(start_time.getTime() + 36e5), start_time > end_time && $("input[name=end_time]").datetimepicker("setDate", start_time))
    }

    function n() {
        (start_time = $("input[name=start_time]").datetimepicker("getDate")) && (end_time = $("input[name=end_time]").datetimepicker("getDate")) && (end_time = new Date(end_time.getTime() - 36e5), end_time < start_time && $("input[name=start_time]").datetimepicker("setDate", end_time))
    }

    function a(e) {
        if (e.hasClass("js__autocomplete-name")) var t = 1;
        else {
            var t = e.attr("data-page-number");
            e = e.closest(".js__autocomplete-data").siblings(".js__autocomplete-name")
        }
        e.siblings(".js__autocomplete-data").stop(!0).animate({
            opacity: .5
        }, 150), e.siblings(".js__autocomplete-id").val(""), e.hasClass("js__populate-winners") && e.closest(".form__row").siblings().find(".js__populated-winners").html('<option value=""></option>'), typewatch(function() {
            "undefined" != typeof req && req.abort(), req = $.ajax({
                type: "POST",
                url: ajax_url,
                dataType: "json",
                data: {
                    search_query: e.val(),
                    page_number: t,
                    "do": e.attr("data-autocomplete-do")
                },
                success: function(t) {
                    e.siblings(".js__autocomplete-data").html(t.html), e.siblings(".js__autocomplete-data").removeClass("is-hidden"), e.siblings(".js__autocomplete-data").stop(!0).animate({
                        opacity: 1
                    }, 150)
                }
            })
        }, 500)
    }

    function s() {
        var e = $.url(),
            t = e.param();
        delete t.page, delete t.q, delete t.have, delete t.want, $.trim($(".trade__search-have").val()) && (t.have = $.trim($(".trade__search-have").val())), $.trim($(".trade__search-want").val()) && (t.want = $.trim($(".trade__search-want").val())), jQuery.isEmptyObject(t) ? window.location.href = baseUrl : window.location.href = baseUrl + "/search?" + $.param(t)
    }
    new Clipboard(".icon_to_clipboard"), $(document).on("click", ".icon_to_clipboard", function() {
        $(this).data("previous_color", $(this).css("color")), $(this).css("color", "#96c468"), $(this).animate({
            color: $(this).data("previous_color")
        }, 1e3)
    }), $("html").click(function() {
        $("nav .nav__button, .page__heading__button--is-dropdown").removeClass("is-selected"), $("nav .nav__relative-dropdown").addClass("is-hidden")
    }), $("nav .nav__button--is-dropdown-arrow").click(function(e) {
        var t = $(this).hasClass("is-selected");
        $("nav .nav__button").removeClass("is-selected"), $("nav .nav__relative-dropdown").addClass("is-hidden"), t || $(this).addClass("is-selected").siblings(".nav__relative-dropdown").removeClass("is-hidden"), e.stopPropagation()
    }), $(".giveaway__hide").click(function() {
        $(".popup--hide-games input[name=game_id]").val($(this).closest(".giveaway__row-outer-wrap").attr("data-game-id")), $(".popup--hide-games .popup__heading__bold").text($(this).closest("h2").find(".giveaway__heading__name").text())
    }), $(document).on("click", ".js__submit-hide-games", function() {
        var e = $(this);
        e.addClass("is-hidden"), e.siblings(".form__saving-button").removeClass("is-hidden"), $.ajax({
            url: ajax_url,
            type: "POST",
            dataType: "json",
            data: e.closest("form").serialize(),
            success: function(t) {
                $(".giveaway__row-outer-wrap[data-game-id=" + e.siblings("input[name=game_id]").val() + "]").remove(), e.closest(".popup--hide-games").bPopup({
                    onClose: function() {
                        $(this).find(".form__saving-button").addClass("is-hidden"), $(this).find(".form__submit-button").removeClass("is-hidden")
                    }
                }).close()
            }
        })
    }), $(".trigger-popup").click(function() {
        $("." + $(this).attr("data-popup")).bPopup({
            opacity: .85,
            fadeSpeed: 200,
            followSpeed: 500,
            modalColor: "#3c424d",
            amsl: [0]
        })
    }), $(".page__heading__button--is-dropdown").click(function(e) {
        $(".page__heading__button--is-dropdown").not(this).removeClass("is-selected"), $(this).toggleClass("is-selected"), e.stopPropagation()
    }), $(document).on("click", ".trigger-popup--keys", function() {
        $(".popup--view-keys .popup__heading__bold").text($(this).attr("data-name")), $(".popup--view-keys").find(".popup__keys").addClass("is-hidden"), $(".popup--view-keys").find(".form__saving-button").removeClass("is-hidden"), $.ajax({
            url: ajax_url,
            type: "POST",
            dataType: "json",
            data: $(this).closest("form").serialize(),
            success: function(e) {
                $(".popup--view-keys").find(".popup__keys").html(e.html), $(".popup--view-keys").find(".form__saving-button").addClass("is-hidden"), $(".popup--view-keys").find(".popup__keys").removeClass("is-hidden"), $(".popup--view-keys").bPopup().reposition()
            }
        })
    }), $(".disable-form-onclick").submit(function() {
        $(".disable-form-onclick").submit(function() {
            return !1
        })
    }), $(location.hash).find(".comment__username").before('<div class="comment__permalink"><i class="fa fa-share"></i></div>'), $(document).on("focus", "textarea", function() {
        $(this).autosize()
    }), $(document).on("click", ".js__comment-reply", function() {
        $(".comment--submit input[name=parent_id]").val($(this).closest(".comment").attr("data-comment-id")), $(".comment--submit .comment__parent").attr("class", "comment__child"), $(".comment--submit").prependTo($(this).closest(".comment").children(".comment__children")), $(".comment--submit textarea").focus()
    }), $(".js__comment-reply-cancel").click(function() {
        $(".comment--submit input[name=parent_id]").val(""), $(".comment--submit .comment__child").attr("class", "comment__parent"), $(".comment--submit").insertAfter(".pagination")
    }), $(document).on("click", ".js__comment-edit-save, .js__comment-delete, .js__comment-undelete", function() {
        var e = $(this);
        return $.ajax({
            url: ajax_url,
            type: "POST",
            dataType: "json",
            data: $(this).closest("form").serialize(),
            success: function(t) {
                "success" === t.type && e.closest(".comment .ajax").html(t.comment)
            }
        }), !1
    }), $(document).on("click", ".js__comment-edit-cancel", function() {
        var e = $(this).closest(".comment__summary");
        e.children(".comment__edit-state").addClass("is-hidden"), e.children(".comment__display-state").removeClass("is-hidden"), e.children(".comment__actions").removeClass("is-hidden")
    }), $(document).on("click", ".js__comment-edit", function() {
        var e = $(this).closest(".comment__summary");
        e.children(".comment__actions").addClass("is-hidden"), e.children(".comment__display-state").addClass("is-hidden"), e.children(".comment__edit-state").removeClass("is-hidden")
    }), $(document).on("click", ".comment__toggle-attached", function() {
        $(this).parent().find("img").toggleClass("is-hidden")
    }), $(document).on("click", ".comment__expand-button, .comment__collapse-button", function() {
        $(this).closest(".comment").toggleClass("comment--collapsed")
    }), $(".poll__vote-button").click(function() {
        var t = $(this);
        t.hasClass("poll__vote-button--voted") ? t.closest("form").find("input[name=do]").val("poll_vote_delete") : t.closest("form").find("input[name=do]").val("poll_vote_insert");
        var i = $(this).closest(".table__row-outer-wrap");
        $.ajax({
            url: ajax_url,
            type: "POST",
            data: t.closest("form").serialize()
        }), $(this).closest(".poll").find(".table__row-outer-wrap.is-selected").attr("data-votes", function(e, t) {
            return Number(t) - 1
        }), i.toggleClass("is-selected"), i.hasClass("is-selected") ? (i.removeClass("not-selected"), i.siblings(".table__row-outer-wrap").removeClass("is-selected"), i.siblings(".table__row-outer-wrap").addClass("not-selected"), i.attr("data-votes", function(e, t) {
            return Number(t) + 1
        })) : i.siblings(".table__row-outer-wrap").removeClass("not-selected"), $(this).closest(".poll").removeClass("poll--enable-voting"), $(this).closest(".poll").addClass("poll--enable-results"), e($(this).closest(".poll"))
    }), $(".poll__view-results-container").click(function() {
        $(this).closest(".poll").removeClass("poll--enable-voting"), $(this).closest(".poll").addClass("poll--enable-results"), e($(this).closest(".poll"))
    }), $(".poll").each(function() {
        $(this).hasClass("poll--enable-results") && e($(this))
    }), $(document).on("click", ".ui-datepicker-current", function() {
        $(".ui-datepicker-today").click()
    }), $("input[name=start_time]").datetimepicker({
        beforeShowDay: t,
        minDate: new Date,
        maxDate: new Date((new Date).getTime() + 2592e6 - 36e5),
        minDateTime: new Date,
        maxDateTime: new Date((new Date).getTime() + 2592e6 - 36e5),
        timeFormat: "h:mm tt",
        numberOfMonths: 1,
        showOtherMonths: !0,
        selectOtherMonths: !0,
        dateFormat: "M d, yy",
        onSelect: function() {
            i()
        },
        onClose: function() {
            i()
        }
    }), $("input[name=end_time]").datetimepicker({
        beforeShowDay: t,
        minDate: new Date((new Date).getTime() + 36e5),
        maxDate: new Date((new Date).getTime() + 2592e6),
        minDateTime: new Date((new Date).getTime() + 36e5),
        maxDateTime: new Date((new Date).getTime() + 2592e6),
        timeFormat: "h:mm tt",
        numberOfMonths: 1,
        showOtherMonths: !0,
        selectOtherMonths: !0,
        dateFormat: "M d, yy",
        onSelect: function() {
            n()
        },
        onClose: function() {
            n()
        }
    }), $(".form__row--length-type .form__checkbox").click(function() {
        "custom" === $(this).attr("data-checkbox-value") ? $(".form__row--length").removeClass("is-hidden") : $(".form__row--length").addClass("is-hidden")
    }), $(".js__submit-form").click(function() {
        return $(this).hasClass("js__edit-giveaway") && $(this).closest("form").find("input[name=next_step]").val(1), $(this).closest("form").submit(), !1
    }), $(".js__submit-form-inner").click(function() {
        return $(this).find("form").submit(), !1
    }), $(document).on("click", ".page__description__save", function() {
        var e = $(this);
        $.ajax({
            url: ajax_url,
            type: "POST",
            dataType: "json",
            data: $(this).closest("form").serialize(),
            success: function(t) {
                "success" === t.type && (e.closest(".page__description").find(".page__description__display-state").html(t.html), e.closest(".page__description").find(".page__description__edit-state").addClass("is-hidden"), e.closest(".page__description").find(".page__description__display-state").removeClass("is-hidden"))
            }
        })
    }), $(document).on("click", ".page__description__cancel", function() {
        $(this).closest(".page__description").find(".page__description__edit-state").addClass("is-hidden"), $(this).closest(".page__description").find(".page__description__display-state").removeClass("is-hidden")
    }), $(document).on("click", ".page__description__edit", function() {
        $(this).closest(".page__description").find(".page__description__display-state").addClass("is-hidden"), $(this).closest(".page__description").find(".page__description__edit-state").removeClass("is-hidden")
    }), $(".js__discussion-include-poll .form__checkbox").click(function() {
        "1" === $(this).attr("data-checkbox-value") ? $(".js__poll-container").removeClass("is-hidden") : "0" === $(this).attr("data-checkbox-value") && $(".js__poll-container").addClass("is-hidden")
    }), $(".js__poll-type .form__checkbox").click(function() {
        "single" === $(this).attr("data-checkbox-value") ? ($(".js__poll-type-single").removeClass("is-hidden"), $(".js__poll-type-multi").addClass("is-hidden"), $(".js__poll-type-other").addClass("is-hidden")) : "multi" === $(this).attr("data-checkbox-value") ? ($(".js__poll-type-multi").removeClass("is-hidden"), $(".js__poll-type-single").addClass("is-hidden"), $(".js__poll-type-other").addClass("is-hidden")) : "other" === $(this).attr("data-checkbox-value") && ($(".js__poll-type-other").removeClass("is-hidden"), $(".js__poll-type-single").addClass("is-hidden"), $(".js__poll-type-multi").addClass("is-hidden"))
    }), $(".form__add-answer-button--single").click(function() {
        var e = $(this).siblings(".js__poll-answer-container");
        $('<div class="poll__input-container"><div class="poll__input-fill"><input type="text" name="poll_single_answers[]" value="" /></div><div class="poll__delete-input"><i class="fa fa-times"></i></div></div>').appendTo(e)
    }), $(".form__add-answer-button--other").click(function() {
        var e = $(this).siblings(".js__poll-answer-container");
        $('<div class="poll__input-container"><div class="poll__input-fill"><input type="text" name="poll_other_answers[]" value="" /></div><div class="poll__delete-input"><i class="fa fa-times"></i></div></div>').appendTo(e)
    }), $(".form__add-answer-button--multi").click(function() {
        var e = $(this).siblings(".js__poll-answer-container");
        $('<div class="poll__input-container"><div class="poll__input-fill"><input class="js__autocomplete-id" type="hidden" name="poll_multi_answers[]" value="" /><input data-autocomplete-do="autocomplete_game" class="js__autocomplete-name" type="text" placeholder="Start typing a game..." value="" /><div class="js__autocomplete-data"></div></div><div class="poll__delete-input"><i class="fa fa-times"></i></div></div>').appendTo(e)
    }), $(document).on("click", ".poll__delete-input", function() {
        $(this).closest(".poll__input-container").remove()
    }), $(document).on({
        mouseenter: function() {
            $(this).siblings().children(".table__row-inner-wrap").css("opacity", .3)
        },
        mouseleave: function() {
            $(this).siblings().children(".table__row-inner-wrap").css("opacity", 1)
        }
    }, ".table__row-outer-wrap--fade-siblings"), $(".markdown p:empty").remove(), $(".form__sync-default").click(function() {
        var e = $(this);
        e.addClass("is-hidden"), e.siblings(".form__sync-loading").removeClass("is-hidden"), e.siblings(".form__sync-data").stop(!0).animate({
            opacity: .5
        }, 150), $.ajax({
            url: ajax_url,
            type: "POST",
            dataType: "json",
            data: e.closest("form").serialize(),
            success: function(t) {
                "success" === t.type ? e.siblings(".form__sync-data").html('<div class="notification notification--success"><i class="fa fa-check-circle"></i> ' + t.msg + "</div>") : "warning" === t.type && e.siblings(".form__sync-data").html('<div class="notification notification--warning"><i class="fa fa-warning"></i> ' + t.msg + "</div>"), e.siblings(".form__sync-data").stop(!0).animate({
                    opacity: 1
                }, 150), e.siblings(".form__sync-loading").addClass("is-hidden"), e.removeClass("is-hidden")
            }
        })
    }), $(".form__key-btn-insert").click(function() {
        var e = $(this).closest("form");
        e.find(".form__key-insert").addClass("is-hidden"), e.find(".form__key-update").removeClass("is-hidden"), e.find("input[name=key_value]").focus()
    }), $(".form__key-btn-update").click(function() {
        var e = $(this).closest("form");
        e.find(".form__key-read").addClass("is-hidden"), e.find(".form__key-update").removeClass("is-hidden"), e.find("input[name=key_value]").focus(), $initialVal = e.find("input[name=key_value]").val(), e.find("input[name=key_value]").val(""), e.find("input[name=key_value]").val($initialVal)
    }), $(".form__key-btn-delete").click(function() {
        var e = $(this).closest(".table__row-inner-wrap").find(".js__sent-text"),
            t = $(this).closest("form");
        t.find(".form__key-read").addClass("is-hidden"), t.find(".form__key-loading").removeClass("is-hidden"), t.find("input[name=key_value]").val(""), t.find(".form__key-value").html(""), $.ajax({
            url: ajax_url,
            type: "POST",
            data: t.serialize(),
            success: function(i) {
                t.find(".form__key-loading").addClass("is-hidden"), t.find(".form__key-insert").removeClass("is-hidden"), e.text("Sent Gift")
            }
        })
    }), $(".form__key-btn-save").click(function() {
        var e = $(this).closest(".table__row-inner-wrap").find(".js__sent-text"),
            t = $(this).closest("form");
        t.find(".form__key-update").addClass("is-hidden"), t.find(".form__key-loading").removeClass("is-hidden"), $.ajax({
            url: ajax_url,
            type: "POST",
            dataType: "json",
            data: t.serialize(),
            success: function(i) {
                t.find(".form__key-loading").addClass("is-hidden"), "error" === i.type ? (t.find(".form__row__error__text").text(i.msg), t.find(".form__row__error").removeClass("is-hidden"), t.find(".form__key-update").removeClass("is-hidden")) : "success" === i.type && (t.find(".form__key-value").html(i.key), t.find(".form__row__error").addClass("is-hidden"), i.key ? (t.find(".form__key-read").removeClass("is-hidden"), e.text("Send Key")) : (t.find("input[name=key_value]").val(""), t.find(".form__key-insert").removeClass("is-hidden"), e.text("Sent Gift")))
            }
        })
    }), $(".table__remove-default").click(function() {
        var e = $(this);
        e.addClass("is-hidden"), e.siblings(".table__remove-loading").removeClass("is-hidden"), $.ajax({
            url: ajax_url,
            type: "POST",
            dataType: "json",
            data: e.closest("form").serialize(),
            success: function(t) {
                e.siblings(".table__remove-loading").addClass("is-hidden"), e.siblings(".table__remove-complete").removeClass("is-hidden"), e.closest(".table__row-inner-wrap").addClass("is-faded"), "undefined" != typeof t.points && t.points !== !1 && $(".nav__points").text(t.points)
            }
        })
    }), $(".sidebar__entry-insert, .sidebar__entry-delete").click(function() {
        var e = $(this);
        e.addClass("is-hidden"), e.closest("form").find(".sidebar__entry-loading").removeClass("is-hidden"), e.closest("form").find("input[name=do]").val(e.attr("data-do")), $.ajax({
            url: ajax_url,
            type: "POST",
            dataType: "json",
            data: e.closest("form").serialize(),
            success: function(t) {
                e.closest("form").find(".sidebar__entry-loading").addClass("is-hidden"), "success" === t.type ? e.hasClass("sidebar__entry-insert") ? e.closest("form").find(".sidebar__entry-delete").removeClass("is-hidden") : e.hasClass("sidebar__entry-delete") && e.closest("form").find(".sidebar__entry-insert").removeClass("is-hidden") : "error" === t.type && ("undefined" != typeof t.link && t.link !== !1 ? e.closest("form").html('<a href="' + t.link + '" class="sidebar__error"><i class="fa fa-exclamation-circle"></i> ' + t.msg + "</a>") : e.closest("form").html('<div class="sidebar__error is-disabled"><i class="fa fa-exclamation-circle"></i> ' + t.msg + "</div>")), "undefined" != typeof t.entry_count && t.entry_count !== !1 && $(".live__entry-count").text(t.entry_count), $(".nav__points").text(t.points)
            }
        })
    }), $(document).on("click", ".table__gift-feedback-not-received:not(.is-disabled), .table__gift-feedback-received:not(.is-disabled), .table__gift-feedback-awaiting-reply:not(.is-disabled)", function() {
        var e = $(this);
        e.closest(".table__column--gift-feedback").siblings(".table__column--gift-feedback").find(".table__gift-feedback-not-received, .table__gift-feedback-received, .table__gift-feedback-awaiting-reply").addClass("is-disabled"), e.addClass("is-hidden"), e.siblings(".table__gift-feedback-loading").removeClass("is-hidden"), e.siblings("form").find("input[name=action]").val(e.attr("data-feedback")), $.ajax({
            url: ajax_url,
            type: "POST",
            data: e.siblings("form").serialize(),
            success: function(t) {
                e.siblings(".table__gift-feedback-loading").addClass("is-hidden"), e.hasClass("table__gift-feedback-not-received") || e.hasClass("table__gift-feedback-received") ? e.siblings(".table__gift-feedback-awaiting-reply").removeClass("is-hidden") : e.hasClass("table__gift-feedback-awaiting-reply") && (e.siblings(".table__gift-feedback-not-received, .table__gift-feedback-received").removeClass("is-hidden"), e.closest(".table__column--gift-feedback").siblings(".table__column--gift-feedback").find(".table__gift-feedback-not-received, .table__gift-feedback-received").addClass("is-hidden"), e.closest(".table__column--gift-feedback").siblings(".table__column--gift-feedback").find(".table__gift-feedback-awaiting-reply").removeClass("is-hidden")), e.closest(".table__column--gift-feedback").siblings(".table__column--gift-feedback").find(".table__gift-feedback-not-received, .table__gift-feedback-received, .table__gift-feedback-awaiting-reply").removeClass("is-disabled")
            }
        })
    }), $(".table__gift-sent, .table__gift-not-sent").click(function() {
        var e = $(this);
        e.addClass("is-hidden"), e.siblings(".table__gift-loading").removeClass("is-hidden"), e.siblings("input[name=action]").val(e.attr("data-feedback")), $.ajax({
            url: ajax_url,
            type: "POST",
            data: e.closest("form").serialize(),
            success: function(t) {
                e.siblings(".table__gift-loading").addClass("is-hidden"), e.hasClass("table__gift-sent") ? e.siblings(".table__gift-not-sent").removeClass("is-hidden") : e.hasClass("table__gift-not-sent") && e.siblings(".table__gift-sent").removeClass("is-hidden")
            }
        })
    }), $(".table__toggle-default").click(function() {
        var e = $(this);
        e.addClass("is-hidden"), e.siblings(".table__toggle-loading").removeClass("is-hidden"), e.siblings("input[name=action]").val(e.attr("data-value")), $.ajax({
            url: ajax_url,
            type: "POST",
            data: e.closest("form").serialize(),
            success: function(t) {
                e.siblings(".table__toggle-loading").addClass("is-hidden"), e.siblings(".table__toggle-default").removeClass("is-hidden")
            }
        })
    }), $(".sidebar__shortcut-inner-wrap > *").hover(function() {
        $(this).hasClass("is-selected") ? $(this).closest(".sidebar__shortcut-outer-wrap").find(".js-tooltip").text($(this).attr("data-selected-tooltip")) : $(this).closest(".sidebar__shortcut-outer-wrap").find(".js-tooltip").text($(this).attr("data-tooltip")), $(this).siblings().css("opacity", .2)
    }, function() {
        $(this).siblings().css("opacity", 1)
    }), $(document).on("click", ".sidebar__shortcut__whitelist:not(.is-disabled), .sidebar__shortcut__blacklist:not(.is-disabled)", function() {
        var e = $(this);
        $(".sidebar__shortcut__whitelist, .sidebar__shortcut__blacklist").addClass("is-disabled"), e.toggleClass("is-loading"), e.hasClass("is-selected") ? e.find("input[name=action]").val("delete") : e.find("input[name=action]").val("insert"), $.ajax({
            url: ajax_url,
            type: "POST",
            dataType: "json",
            data: e.find("form").serialize(),
            success: function(t) {
                "success" === t.type && (e.hasClass("is-selected") || e.siblings().removeClass("is-selected"), e.toggleClass("is-selected")), e.toggleClass("is-loading"), $(".sidebar__shortcut__whitelist, .sidebar__shortcut__blacklist").removeClass("is-disabled")
            }
        })
    }), $(".form__checkbox").click(function() {
        $(this).siblings(".form__checkbox").attr("class", "form__checkbox is-disabled"), $(this).attr("class", "form__checkbox is-selected"), $(this).siblings("input").val($(this).attr("data-checkbox-value"))
    }), $(".form__row--giveaway-type .form__checkbox").click(function() {
        "gift" === $(this).attr("data-checkbox-value") ? ($(".form__row--giveaway-keys").addClass("is-hidden"), $(".form__row--giveaway-copies").removeClass("is-hidden")) : "key" === $(this).attr("data-checkbox-value") && ($(".form__row--giveaway-copies").addClass("is-hidden"), $(".form__row--giveaway-keys").removeClass("is-hidden"))
    }), $(".form__row--who-can-enter .form__checkbox").click(function() {
        "groups" === $(this).attr("data-checkbox-value") ? $(".form__groups").removeClass("is-hidden") : $(".form__groups").addClass("is-hidden")
    }), $(".form__group").click(function() {
        if ($(this).toggleClass("is-selected"), $(this).hasClass("form__group--steam")) {
            var e = "";
            $.each($(".form__group--steam"), function() {
                $(this).hasClass("is-selected") && (e = e + " " + $(this).attr("data-group-id"))
            }), $(".form__row--who-can-enter input[name=group_string]").val(e)
        } else $(this).hasClass("form__group--whitelist") && ($(this).hasClass("is-selected") ? $(".form__row--who-can-enter input[name=whitelist]").val("1") : $(".form__row--who-can-enter input[name=whitelist]").val("0"))
    }), $(document).on("click", ".pagination--ajax a", function() {
        return a($(this)), !1
    }), $(document).on("keyup", ".js__autocomplete-name", function() {
        a($(this))
    }), $(document).on("click", ".js__autocomplete-data .table__row-outer-wrap", function() {
        if ($(this).closest(".js__autocomplete-data").siblings(".js__autocomplete-id").val($(this).attr("data-autocomplete-id")), $(this).closest(".js__autocomplete-data").siblings(".js__autocomplete-name").val($(this).attr("data-autocomplete-name")), $(this).closest(".js__autocomplete-data").addClass("is-hidden"), $(this).closest(".js__autocomplete-data").siblings(".js__autocomplete-name").hasClass("js__populate-winners")) {
            var e = $(this).closest(".form__row").siblings().find(".js__populated-winners"),
                t = $(this).attr("data-autocomplete-id");
            req = $.ajax({
                type: "POST",
                url: ajax_url,
                dataType: "json",
                data: {
                    giveaway_id: t,
                    "do": "autocomplete_winner"
                },
                success: function(t) {
                    e.html(t.html)
                }
            })
        }
    }), $("textarea[name=key_string]").keyup(function() {
        typewatch(function() {
            "undefined" != typeof req && req.abort(), req = $.ajax({
                type: "POST",
                url: ajax_url,
                dataType: "json",
                data: {
                    key_string: $("textarea[name=key_string]").val(),
                    "do": "key_results"
                },
                success: function(e) {
                    $(".form__key-results").html(e.html)
                }
            })
        }, 500)
    }), $("select[name=category_id]").on("change", function() {
        $(".form__ticket-type").addClass("is-hidden"), "" !== this.value && ("1" === this.value ? $(".form__ticket-type--reroll").removeClass("is-hidden") : "2" === this.value ? $(".form__ticket-type--user-report").removeClass("is-hidden") : "3" === this.value ? $(".form__ticket-type--change-game").removeClass("is-hidden") : "4" === this.value ? $(".form__ticket-type--delete-giveaway").removeClass("is-hidden") : "5" === this.value ? $(".form__ticket-type--change-feedback").removeClass("is-hidden") : "9" === this.value ? $(".form__ticket-type--unsuspend").removeClass("is-hidden") : "10" === this.value ? $(".form__ticket-type--giveaway-limit").removeClass("is-hidden") : $(".form__ticket-type--general").removeClass("is-hidden"))
    }), $(".sidebar__search-input").keypress(function(e) {
        if (13 == e.which) {
            e.preventDefault();
            var t = $.url(),
                i = t.param();
            delete i.page, delete i.q, delete i.have, delete i.want, $.trim($(".sidebar__search-input").val()) && (i.q = $.trim($(".sidebar__search-input").val())), jQuery.isEmptyObject(i) ? window.location.href = baseUrl : window.location.href = baseUrl + "/search?" + $.param(i)
        }
    }), $(".trade__search-have, .trade__search-want").keypress(function(e) {
        13 == e.which && (e.preventDefault(), s())
    }), $(".trade__search-submit").click(function() {
        s()
    }), $(".pinned-giveaways__button").click(function(e) {
        $(this).hide(), $(this).siblings(".pinned-giveaways__inner-wrap--minimized").removeClass("pinned-giveaways__inner-wrap--minimized")
    })
});