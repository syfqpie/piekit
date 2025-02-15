import ke from "react";
var A = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function Ce() {
  if (de) return k;
  de = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function a(s, c, b) {
    var g = null;
    if (b !== void 0 && (g = "" + b), c.key !== void 0 && (g = "" + c.key), "key" in c) {
      b = {};
      for (var v in c)
        v !== "key" && (b[v] = c[v]);
    } else b = c;
    return c = b.ref, {
      $$typeof: n,
      type: s,
      key: g,
      ref: c !== void 0 ? c : null,
      props: b
    };
  }
  return k.Fragment = i, k.jsx = a, k.jsxs = a, k;
}
var C = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Ne() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === je ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Y:
          return "Fragment";
        case we:
          return "Portal";
        case Z:
          return "Profiler";
        case L:
          return "StrictMode";
        case M:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case K:
            return (e.displayName || "Context") + ".Provider";
          case Q:
            return (e._context.displayName || "Context") + ".Consumer";
          case $:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case U:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case q:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function a(e) {
      try {
        i(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), i(e);
      }
    }
    function s() {
    }
    function c() {
      if (T === 0) {
        ee = console.log, re = console.info, te = console.warn, oe = console.error, ne = console.group, ae = console.groupCollapsed, le = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      T++;
    }
    function b() {
      if (T--, T === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: p({}, e, { value: ee }),
          info: p({}, e, { value: re }),
          warn: p({}, e, { value: te }),
          error: p({}, e, { value: oe }),
          group: p({}, e, { value: ne }),
          groupCollapsed: p({}, e, { value: ae }),
          groupEnd: p({}, e, { value: le })
        });
      }
      0 > T && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function g(e) {
      if (V === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          V = r && r[1] || "", se = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + V + e + se;
    }
    function v(e, r) {
      if (!e || G) return "";
      var t = B.get(e);
      if (t !== void 0) return t;
      G = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var l = null;
      l = y.H, y.H = null, c();
      try {
        var f = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var x = function() {
                  throw Error();
                };
                if (Object.defineProperty(x.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(x, []);
                  } catch (E) {
                    var N = E;
                  }
                  Reflect.construct(e, [], x);
                } else {
                  try {
                    x.call();
                  } catch (E) {
                    N = E;
                  }
                  e.call(x.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (E) {
                  N = E;
                }
                (x = e()) && typeof x.catch == "function" && x.catch(function() {
                });
              }
            } catch (E) {
              if (E && N && typeof E.stack == "string")
                return [E.stack, N.stack];
            }
            return [null, null];
          }
        };
        f.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var u = Object.getOwnPropertyDescriptor(
          f.DetermineComponentFrameRoot,
          "name"
        );
        u && u.configurable && Object.defineProperty(
          f.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = f.DetermineComponentFrameRoot(), m = o[0], w = o[1];
        if (m && w) {
          var d = m.split(`
`), h = w.split(`
`);
          for (o = u = 0; u < d.length && !d[u].includes(
            "DetermineComponentFrameRoot"
          ); )
            u++;
          for (; o < h.length && !h[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (u === d.length || o === h.length)
            for (u = d.length - 1, o = h.length - 1; 1 <= u && 0 <= o && d[u] !== h[o]; )
              o--;
          for (; 1 <= u && 0 <= o; u--, o--)
            if (d[u] !== h[o]) {
              if (u !== 1 || o !== 1)
                do
                  if (u--, o--, 0 > o || d[u] !== h[o]) {
                    var R = `
` + d[u].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, R), R;
                  }
                while (1 <= u && 0 <= o);
              break;
            }
        }
      } finally {
        G = !1, y.H = l, b(), Error.prepareStackTrace = t;
      }
      return d = (d = e ? e.displayName || e.name : "") ? g(d) : "", typeof e == "function" && B.set(e, d), d;
    }
    function j(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return v(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return g(e);
      switch (e) {
        case M:
          return g("Suspense");
        case W:
          return g("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            return e = v(e.render, !1), e;
          case U:
            return j(e.type);
          case q:
            r = e._payload, e = e._init;
            try {
              return j(e(r));
            } catch {
            }
        }
      return "";
    }
    function O() {
      var e = y.A;
      return e === null ? null : e.getOwner();
    }
    function me(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function Ee(e, r) {
      function t() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function xe() {
      var e = n(this.type);
      return ie[e] || (ie[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function ye(e, r, t, l, f, u) {
      return t = u.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: u,
        _owner: f
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: xe
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function X(e, r, t, l, f, u) {
      if (typeof e == "string" || typeof e == "function" || e === Y || e === Z || e === L || e === M || e === W || e === _e || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === U || e.$$typeof === K || e.$$typeof === Q || e.$$typeof === $ || e.$$typeof === Te || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (l)
            if (J(o)) {
              for (l = 0; l < o.length; l++)
                z(o[l], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else z(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? l = "null" : J(e) ? l = "array" : e !== void 0 && e.$$typeof === P ? (l = "<" + (n(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          l,
          o
        );
      if (D.call(r, "key")) {
        o = n(e);
        var m = Object.keys(r).filter(function(d) {
          return d !== "key";
        });
        l = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", ce[o + l] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          o,
          m,
          o
        ), ce[o + l] = !0);
      }
      if (o = null, t !== void 0 && (a(t), o = "" + t), me(r) && (a(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var w in r)
          w !== "key" && (t[w] = r[w]);
      } else t = r;
      return o && Ee(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), ye(e, o, u, f, O(), t);
    }
    function z(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Re) {
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var l = e[t];
            S(l) && F(l, r);
          }
        else if (S(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = I && e[I] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            S(e.value) && F(e.value, r);
      }
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    function F(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = pe(r), !fe[r])) {
        fe[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== O() && (t = null, typeof e._owner.tag == "number" ? t = n(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var l = y.getCurrentStack;
        y.getCurrentStack = function() {
          var f = j(e.type);
          return l && (f += l() || ""), f;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), y.getCurrentStack = l;
      }
    }
    function pe(e) {
      var r = "", t = O();
      return t && (t = n(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = n(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var he = ke, P = Symbol.for("react.transitional.element"), we = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), Q = Symbol.for("react.consumer"), K = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), I = Symbol.iterator, je = Symbol.for("react.client.reference"), y = he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, p = Object.assign, Te = Symbol.for("react.client.reference"), J = Array.isArray, T = 0, ee, re, te, oe, ne, ae, le;
    s.__reactDisabledLog = !0;
    var V, se, G = !1, B = new (typeof WeakMap == "function" ? WeakMap : Map)(), Re = Symbol.for("react.client.reference"), ue, ie = {}, ce = {}, fe = {};
    C.Fragment = Y, C.jsx = function(e, r, t, l, f) {
      return X(e, r, t, !1, l, f);
    }, C.jsxs = function(e, r, t, l, f) {
      return X(e, r, t, !0, l, f);
    };
  }()), C;
}
var ge;
function Ae() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? A.exports = Ce() : A.exports = Ne()), A.exports;
}
var _ = Ae();
function ve(n) {
  var i, a, s = "";
  if (typeof n == "string" || typeof n == "number") s += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var c = n.length;
    for (i = 0; i < c; i++) n[i] && (a = ve(n[i])) && (s && (s += " "), s += a);
  } else for (a in n) n[a] && (s && (s += " "), s += a);
  return s;
}
function H() {
  for (var n, i, a = 0, s = "", c = arguments.length; a < c; a++) (n = arguments[a]) && (i = ve(n)) && (s && (s += " "), s += i);
  return s;
}
const Se = ({
  variant: n = "primary",
  alignment: i = "center",
  appearance: a = "solid",
  size: s = "md",
  full: c = !1,
  className: b,
  testId: g,
  children: v,
  ...j
}) => /* @__PURE__ */ _.jsx(
  "button",
  {
    ...j,
    "data-testid": g,
    className: H(
      "font-semibold transition-all duration-150",
      "inline-flex items-center justify-center flex-shrink-0 gap-x-1.5",
      "focus:outline-none focus-visible:outline-none focus:ring-2",
      "disabled:cursor-not-allowed disabled:opacity-30",
      {
        // size
        "px-2.5 py-1.5 text-sm rounded-lg": s === "xs",
        "px-4 py-2 text-sm rounded-lg": s === "sm",
        "px-4.5 py-2.5 text-base rounded-lg": s === "md" || s === void 0,
        "px-6 py-3 text-lg rounded-xl": s === "lg",
        // solid
        "text-white": a === "solid",
        "bg-primary-900 enabled:hover:bg-primary-950 enabled:focus:ring-primary-500/30": a === "solid" && n === "primary",
        "bg-success-500 enabled:hover:bg-success-600 enabled:focus:ring-success-500/30": a === "solid" && n === "success",
        "bg-error-500 enabled:hover:bg-error-600 enabled:focus:ring-error-500/30": a === "solid" && n === "error",
        // outline
        "bg-transparent border enabled:hover:text-white": a === "outline",
        "text-primary-900 border-primary-900 enabled:hover:bg-primary-900 enabled:focus:ring-primary-500/40": a === "outline" && n === "primary",
        "text-success-500 border-success-500 enabled:hover:bg-success-500 enabled:focus:ring-success-500/40": a === "outline" && n === "success",
        "text-error-500 border-error-500 enabled:hover:bg-error-500 enabled:focus:ring-error-500/40": a === "outline" && n === "error",
        // full
        "w-full": c,
        "justify-start": i === "left",
        "justify-center": i === "center",
        "justify-end": i === "right"
      },
      b
    ),
    children: v
  }
), Pe = ({
  className: n,
  testId: i,
  children: a,
  ...s
}) => /* @__PURE__ */ _.jsx(
  "div",
  {
    ...s,
    className: H(
      "p-6 rounded-xl bg-white text-gray-950 shadow-lg",
      {},
      n
    ),
    "data-testid": i,
    children: a
  }
), Ye = ({
  className: n,
  label: i,
  testId: a,
  hasError: s = !1,
  errorMessages: c = [],
  ...b
}) => /* @__PURE__ */ _.jsxs(
  "div",
  {
    "data-testid": `${a}-form`,
    children: [
      i === void 0 ? null : /* @__PURE__ */ _.jsx(
        "label",
        {
          className: "block mb-1 text-gray-900 font-semibold",
          "data-testid": `${a}-label`,
          children: i
        }
      ),
      /* @__PURE__ */ _.jsx(
        "input",
        {
          ...b,
          className: H(
            "block w-full rounded-lg px-2.5 py-1.5 border",
            "bg-white shadow-sm",
            "disabled:cursor-not-allowed disabled:opacity-60 outline-none",
            "ring-0 focus:ring-2",
            {
              "focus:ring-gray-500/30 text-gray-900 placeholder-gray-400 border-gray-900 caret-gray-500": !s,
              "focus:ring-red-500/30 text-red-500 placeholder-red-300 border-red-500 caret-red-500": s
            },
            n
          ),
          "data-testid": `${a}-input`
        }
      ),
      s && c.length > 0 ? c.map((g, v) => /* @__PURE__ */ _.jsx(
        "p",
        {
          className: "text-sm mt-1 text-red-300",
          "data-testid": `${a}-error-msg-${v}`,
          children: g
        },
        v
      )) : null
    ]
  }
);
export {
  Se as Button,
  Pe as Card,
  Ye as FormInput
};
