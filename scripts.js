/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-setclasses !*/
!function (e, n, t) {
  function r(e, n) {
    return typeof e === n;
  }function s() {
    var e, n, t, s, o, i, a;for (var f in C) if (C.hasOwnProperty(f)) {
      if (e = [], n = C[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());for (s = r(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), y.push((s ? "" : "no-") + a.join("-"));
    }
  }function o(e) {
    var n = S.className,
        t = Modernizr._config.classPrefix || "";if (x && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");n = n.replace(r, "$1" + t + "js$2");
    }Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? S.className.baseVal = n : S.className = n);
  }function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }function a() {
    var e = n.body;return e || (e = i(x ? "svg" : "body"), e.fake = !0), e;
  }function f(e, t, r, s) {
    var o,
        f,
        l,
        u,
        p = "modernizr",
        d = i("div"),
        c = a();if (parseInt(r, 10)) for (; r--;) l = i("div"), l.id = s ? s[r] : p + (r + 1), d.appendChild(l);return o = i("style"), o.type = "text/css", o.id = "s" + p, (c.fake ? c : d).appendChild(o), c.appendChild(d), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(n.createTextNode(e)), d.id = p, c.fake && (c.style.background = "", c.style.overflow = "hidden", u = S.style.overflow, S.style.overflow = "hidden", S.appendChild(c)), f = t(d, e), c.fake ? (c.parentNode.removeChild(c), S.style.overflow = u, S.offsetHeight) : d.parentNode.removeChild(d), !!f;
  }function l(e, n) {
    return !!~("" + e).indexOf(n);
  }function u(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
      return n + t.toUpperCase();
    }).replace(/^-/, "");
  }function p(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }function d(e, n, t) {
    var s;for (var o in e) if (e[o] in n) return t === !1 ? e[o] : (s = n[e[o]], r(s, "function") ? p(s, t || n) : s);return !1;
  }function c(e) {
    return e.replace(/([A-Z])/g, function (e, n) {
      return "-" + n.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }function m(n, r) {
    var s = n.length;if ("CSS" in e && "supports" in e.CSS) {
      for (; s--;) if (e.CSS.supports(c(n[s]), r)) return !0;return !1;
    }if ("CSSSupportsRule" in e) {
      for (var o = []; s--;) o.push("(" + c(n[s]) + ":" + r + ")");return o = o.join(" or "), f("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == getComputedStyle(e, null).position;
      });
    }return t;
  }function h(e, n, s, o) {
    function a() {
      p && (delete k.style, delete k.modElem);
    }if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) {
      var f = m(e, s);if (!r(f, "undefined")) return f;
    }for (var p, d, c, h, v, g = ["modernizr", "tspan", "samp"]; !k.style && g.length;) p = !0, k.modElem = i(g.shift()), k.style = k.modElem.style;for (c = e.length, d = 0; c > d; d++) if (h = e[d], v = k.style[h], l(h, "-") && (h = u(h)), k.style[h] !== t) {
      if (o || r(s, "undefined")) return a(), "pfx" == n ? h : !0;try {
        k.style[h] = s;
      } catch (y) {}if (k.style[h] != v) return a(), "pfx" == n ? h : !0;
    }return a(), !1;
  }function v(e, n, t, s, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + E.join(i + " ") + i).split(" ");return r(n, "string") || r(n, "undefined") ? h(a, n, s, o) : (a = (e + " " + N.join(i + " ") + i).split(" "), d(a, n, t));
  }function g(e, n, r) {
    return v(e, t, t, n, r);
  }var y = [],
      C = [],
      w = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, n) {
      var t = this;setTimeout(function () {
        n(t[e]);
      }, 0);
    }, addTest: function (e, n, t) {
      C.push({ name: e, fn: n, options: t });
    }, addAsyncTest: function (e) {
      C.push({ name: null, fn: e });
    } },
      Modernizr = function () {};Modernizr.prototype = w, Modernizr = new Modernizr();var S = n.documentElement,
      x = "svg" === S.nodeName.toLowerCase(),
      _ = "CSS" in e && "supports" in e.CSS,
      b = "supportsCSS" in e;Modernizr.addTest("supports", _ || b);var P = w.testStyles = f,
      z = "Moz O ms Webkit",
      E = w._config.usePrefixes ? z.split(" ") : [];w._cssomPrefixes = E;var N = w._config.usePrefixes ? z.toLowerCase().split(" ") : [];w._domPrefixes = N;var T = { elem: i("modernizr") };Modernizr._q.push(function () {
    delete T.elem;
  });var k = { style: T.elem.style };Modernizr._q.unshift(function () {
    delete k.style;
  }), w.testAllProps = v, w.testAllProps = g, Modernizr.addTest("csstransforms3d", function () {
    var e = !!g("perspective", "1px", !0),
        n = Modernizr._config.usePrefixes;if (e && (!n || "webkitPerspective" in S.style)) {
      var t,
          r = "#modernizr{width:0;height:0}";Modernizr.supports ? t = "@supports (perspective: 1px)" : (t = "@media (transform-3d)", n && (t += ",(-webkit-transform-3d)")), t += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", P(r + t, function (n) {
        e = 7 === n.offsetWidth && 18 === n.offsetHeight;
      });
    }return e;
  }), s(), o(y), delete w.addTest, delete w.addAsyncTest;for (var j = 0; j < Modernizr._q.length; j++) Modernizr._q[j]();e.Modernizr = Modernizr;
}(window, document);
const doc = window.document.documentElement;
const optWrapper = document.getElementById('js-options');
const actWrapper = document.getElementById('js-actions');
const optInput = doc.querySelectorAll('.js-option');
const btn = doc.querySelectorAll('.js-btn');
const switcher = doc.querySelectorAll('.js-switcher');

if (window.Modernizr.csstransforms3d && window.requestAnimationFrame) {
  doc.className += ' has-animation';
  window['hasAnimation'] = true;
}

const addEventListenerList = (list, event, fn) => {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
};

const removeClass = (list, className, fn) => {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].classList.remove(className);
  }
};

const handleSwitch = element => {
  const mode = element.target.value;
  doc.className += ' use-keyboard';
};

const handleClick = element => {
  const target = element.target;
  const parent = target.parentNode;
  if (target.checked) {
    parent.classList.add('is-checked');
    optWrapper.classList.add('is-active');
    actWrapper.classList.add('is-active');
  }
};

const handleAction = element => {
  optWrapper.classList.remove('is-active');
  actWrapper.classList.remove('is-active');
  removeClass(optInput, 'is-checked');
};

addEventListenerList(switcher, 'change', handleSwitch);

addEventListenerList(optInput, 'change', handleClick);

addEventListenerList(btn, 'click', handleAction);