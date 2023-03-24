(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(
        document.createTextNode(
          ".global{all:initial;display:flex;flex-direction:column;justify-content:center;align-items:center}p .name{font-weight:700;color:orange}button{background-color:red}"
        )
      ),
        document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const u of o.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var me = {},
  vc = {
    get exports() {
      return me;
    },
    set exports(e) {
      me = e;
    },
  },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qn = Symbol.for("react.element"),
  yc = Symbol.for("react.portal"),
  gc = Symbol.for("react.fragment"),
  wc = Symbol.for("react.strict_mode"),
  Sc = Symbol.for("react.profiler"),
  kc = Symbol.for("react.provider"),
  Ec = Symbol.for("react.context"),
  Cc = Symbol.for("react.forward_ref"),
  _c = Symbol.for("react.suspense"),
  xc = Symbol.for("react.memo"),
  Pc = Symbol.for("react.lazy"),
  Hu = Symbol.iterator;
function Nc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hu && e[Hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ns = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rs = Object.assign,
  ls = {};
function un(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ls),
    (this.updater = n || ns);
}
un.prototype.isReactComponent = {};
un.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function os() {}
os.prototype = un.prototype;
function Go(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ls),
    (this.updater = n || ns);
}
var Zo = (Go.prototype = new os());
Zo.constructor = Go;
rs(Zo, un.prototype);
Zo.isPureReactComponent = !0;
var Qu = Array.isArray,
  us = Object.prototype.hasOwnProperty,
  Jo = { current: null },
  is = { key: !0, ref: !0, __self: !0, __source: !0 };
function ss(e, t, n) {
  var r,
    l = {},
    o = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      us.call(t, r) && !is.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var s = Array(i), f = 0; f < i; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((i = e.defaultProps), i)) l[r] === void 0 && (l[r] = i[r]);
  return {
    $$typeof: qn,
    type: e,
    key: o,
    ref: u,
    props: l,
    _owner: Jo.current,
  };
}
function zc(e, t) {
  return {
    $$typeof: qn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function qo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qn;
}
function Tc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ku = /\/+/g;
function Pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Tc("" + e.key)
    : t.toString(36);
}
function Cr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (o) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case qn:
          case yc:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (l = l(u)),
      (e = r === "" ? "." + Pl(u, 0) : r),
      Qu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ku, "$&/") + "/"),
          Cr(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (qo(l) &&
            (l = zc(
              l,
              n +
                (!l.key || (u && u.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ku, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((u = 0), (r = r === "" ? "." : r + ":"), Qu(e)))
    for (var i = 0; i < e.length; i++) {
      o = e[i];
      var s = r + Pl(o, i);
      u += Cr(o, t, n, s, l);
    }
  else if (((s = Nc(e)), typeof s == "function"))
    for (e = s.call(e), i = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Pl(o, i++)), (u += Cr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return u;
}
function or(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Cr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Lc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  _r = { transition: null },
  Oc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: _r,
    ReactCurrentOwner: Jo,
  };
L.Children = {
  map: or,
  forEach: function (e, t, n) {
    or(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      or(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      or(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!qo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = un;
L.Fragment = gc;
L.Profiler = Sc;
L.PureComponent = Go;
L.StrictMode = wc;
L.Suspense = _c;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oc;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = rs({}, e.props),
    l = e.key,
    o = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (u = Jo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (s in t)
      us.call(t, s) &&
        !is.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var f = 0; f < s; f++) i[f] = arguments[f + 2];
    r.children = i;
  }
  return { $$typeof: qn, type: e.type, key: l, ref: o, props: r, _owner: u };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ec,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: kc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = ss;
L.createFactory = function (e) {
  var t = ss.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: Cc, render: e };
};
L.isValidElement = qo;
L.lazy = function (e) {
  return { $$typeof: Pc, _payload: { _status: -1, _result: e }, _init: Lc };
};
L.memo = function (e, t) {
  return { $$typeof: xc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = _r.transition;
  _r.transition = {};
  try {
    e();
  } finally {
    _r.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
L.useContext = function (e) {
  return ue.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
L.useId = function () {
  return ue.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return ue.current.useRef(e);
};
L.useState = function (e) {
  return ue.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return ue.current.useTransition();
};
L.version = "18.2.0";
(function (e) {
  e.exports = L;
})(vc);
const wt = hc(me);
var bl = {},
  Mr = {},
  Rc = {
    get exports() {
      return Mr;
    },
    set exports(e) {
      Mr = e;
    },
  },
  ge = {},
  eo = {},
  jc = {
    get exports() {
      return eo;
    },
    set exports(e) {
      eo = e;
    },
  },
  as = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, z) {
    var T = x.length;
    x.push(z);
    e: for (; 0 < T; ) {
      var B = (T - 1) >>> 1,
        X = x[B];
      if (0 < l(X, z)) (x[B] = z), (x[T] = X), (T = B);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var z = x[0],
      T = x.pop();
    if (T !== z) {
      x[0] = T;
      e: for (var B = 0, X = x.length, rr = X >>> 1; B < rr; ) {
        var vt = 2 * (B + 1) - 1,
          xl = x[vt],
          yt = vt + 1,
          lr = x[yt];
        if (0 > l(xl, T))
          yt < X && 0 > l(lr, xl)
            ? ((x[B] = lr), (x[yt] = T), (B = yt))
            : ((x[B] = xl), (x[vt] = T), (B = vt));
        else if (yt < X && 0 > l(lr, T)) (x[B] = lr), (x[yt] = T), (B = yt);
        else break e;
      }
    }
    return z;
  }
  function l(x, z) {
    var T = x.sortIndex - z.sortIndex;
    return T !== 0 ? T : x.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var u = Date,
      i = u.now();
    e.unstable_now = function () {
      return u.now() - i;
    };
  }
  var s = [],
    f = [],
    m = 1,
    h = null,
    p = 3,
    g = !1,
    w = !1,
    S = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var z = n(f); z !== null; ) {
      if (z.callback === null) r(f);
      else if (z.startTime <= x)
        r(f), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(f);
    }
  }
  function v(x) {
    if (((S = !1), d(x), !w))
      if (n(s) !== null) (w = !0), Cl(k);
      else {
        var z = n(f);
        z !== null && _l(v, z.startTime - x);
      }
  }
  function k(x, z) {
    (w = !1), S && ((S = !1), c(N), (N = -1)), (g = !0);
    var T = p;
    try {
      for (
        d(z), h = n(s);
        h !== null && (!(h.expirationTime > z) || (x && !Ne()));

      ) {
        var B = h.callback;
        if (typeof B == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var X = B(h.expirationTime <= z);
          (z = e.unstable_now()),
            typeof X == "function" ? (h.callback = X) : h === n(s) && r(s),
            d(z);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var rr = !0;
      else {
        var vt = n(f);
        vt !== null && _l(v, vt.startTime - z), (rr = !1);
      }
      return rr;
    } finally {
      (h = null), (p = T), (g = !1);
    }
  }
  var _ = !1,
    P = null,
    N = -1,
    W = 5,
    O = -1;
  function Ne() {
    return !(e.unstable_now() - O < W);
  }
  function cn() {
    if (P !== null) {
      var x = e.unstable_now();
      O = x;
      var z = !0;
      try {
        z = P(!0, x);
      } finally {
        z ? fn() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var fn;
  if (typeof a == "function")
    fn = function () {
      a(cn);
    };
  else if (typeof MessageChannel < "u") {
    var Bu = new MessageChannel(),
      mc = Bu.port2;
    (Bu.port1.onmessage = cn),
      (fn = function () {
        mc.postMessage(null);
      });
  } else
    fn = function () {
      E(cn, 0);
    };
  function Cl(x) {
    (P = x), _ || ((_ = !0), fn());
  }
  function _l(x, z) {
    N = E(function () {
      x(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Cl(k));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (x) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var T = p;
      p = z;
      try {
        return x();
      } finally {
        p = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, z) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var T = p;
      p = x;
      try {
        return z();
      } finally {
        p = T;
      }
    }),
    (e.unstable_scheduleCallback = function (x, z, T) {
      var B = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? B + T : B))
          : (T = B),
        x)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = T + X),
        (x = {
          id: m++,
          callback: z,
          priorityLevel: x,
          startTime: T,
          expirationTime: X,
          sortIndex: -1,
        }),
        T > B
          ? ((x.sortIndex = T),
            t(f, x),
            n(s) === null &&
              x === n(f) &&
              (S ? (c(N), (N = -1)) : (S = !0), _l(v, T - B)))
          : ((x.sortIndex = X), t(s, x), w || g || ((w = !0), Cl(k))),
        x
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (x) {
      var z = p;
      return function () {
        var T = p;
        p = z;
        try {
          return x.apply(this, arguments);
        } finally {
          p = T;
        }
      };
    });
})(as);
(function (e) {
  e.exports = as;
})(jc);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cs = me,
  ye = eo;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var fs = new Set(),
  Dn = {};
function Rt(e, t) {
  bt(e, t), bt(e + "Capture", t);
}
function bt(e, t) {
  for (Dn[e] = t, e = 0; e < t.length; e++) fs.add(t[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  to = Object.prototype.hasOwnProperty,
  Dc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yu = {},
  Xu = {};
function Mc(e) {
  return to.call(Xu, e)
    ? !0
    : to.call(Yu, e)
    ? !1
    : Dc.test(e)
    ? (Xu[e] = !0)
    : ((Yu[e] = !0), !1);
}
function Fc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ic(e, t, n, r) {
  if (t === null || typeof t > "u" || Fc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ie(e, t, n, r, l, o, u) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = u);
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    b[e] = new ie(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  b[t] = new ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  b[e] = new ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  b[e] = new ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    b[e] = new ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  b[e] = new ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  b[e] = new ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  b[e] = new ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  b[e] = new ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bo = /[\-:]([a-z])/g;
function eu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bo, eu);
    b[t] = new ie(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bo, eu);
    b[t] = new ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(bo, eu);
  b[t] = new ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  b[e] = new ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new ie(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  b[e] = new ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function tu(e, t, n, r) {
  var l = b.hasOwnProperty(t) ? b[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ic(t, n, l, r) && (n = null),
    r || l === null
      ? Mc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = cs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ur = Symbol.for("react.element"),
  Mt = Symbol.for("react.portal"),
  Ft = Symbol.for("react.fragment"),
  nu = Symbol.for("react.strict_mode"),
  no = Symbol.for("react.profiler"),
  ds = Symbol.for("react.provider"),
  ps = Symbol.for("react.context"),
  ru = Symbol.for("react.forward_ref"),
  ro = Symbol.for("react.suspense"),
  lo = Symbol.for("react.suspense_list"),
  lu = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  ms = Symbol.for("react.offscreen"),
  Gu = Symbol.iterator;
function dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gu && e[Gu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A = Object.assign,
  Nl;
function kn(e) {
  if (Nl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Nl = (t && t[1]) || "";
    }
  return (
    `
` +
    Nl +
    e
  );
}
var zl = !1;
function Tl(e, t) {
  if (!e || zl) return "";
  zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          o = r.stack.split(`
`),
          u = l.length - 1,
          i = o.length - 1;
        1 <= u && 0 <= i && l[u] !== o[i];

      )
        i--;
      for (; 1 <= u && 0 <= i; u--, i--)
        if (l[u] !== o[i]) {
          if (u !== 1 || i !== 1)
            do
              if ((u--, i--, 0 > i || l[u] !== o[i])) {
                var s =
                  `
` + l[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= u && 0 <= i);
          break;
        }
    }
  } finally {
    (zl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function $c(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Tl(e.type, !1)), e;
    case 11:
      return (e = Tl(e.type.render, !1)), e;
    case 1:
      return (e = Tl(e.type, !0)), e;
    default:
      return "";
  }
}
function oo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ft:
      return "Fragment";
    case Mt:
      return "Portal";
    case no:
      return "Profiler";
    case nu:
      return "StrictMode";
    case ro:
      return "Suspense";
    case lo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ps:
        return (e.displayName || "Context") + ".Consumer";
      case ds:
        return (e._context.displayName || "Context") + ".Provider";
      case ru:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case lu:
        return (
          (t = e.displayName || null), t !== null ? t : oo(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return oo(e(t));
        } catch {}
    }
  return null;
}
function Uc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return oo(t);
    case 8:
      return t === nu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function hs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ac(e) {
  var t = hs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (u) {
          (r = "" + u), o.call(this, u);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = Ac(e));
}
function vs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = hs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Fr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uo(e, t) {
  var n = t.checked;
  return A({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Zu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ys(e, t) {
  (t = t.checked), t != null && tu(e, "checked", t, !1);
}
function io(e, t) {
  ys(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? so(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && so(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ju(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function so(e, t, n) {
  (t !== "number" || Fr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var En = Array.isArray;
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ao(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return A({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function qu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (En(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function gs(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function bu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ws(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function co(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ws(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var sr,
  Ss = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        sr = sr || document.createElement("div"),
          sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = sr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Vc = ["Webkit", "ms", "Moz", "O"];
Object.keys(xn).forEach(function (e) {
  Vc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xn[t] = xn[e]);
  });
});
function ks(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xn.hasOwnProperty(e) && xn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Es(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ks(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Wc = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function fo(e, t) {
  if (t) {
    if (Wc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function po(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var mo = null;
function ou(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ho = null,
  Xt = null,
  Gt = null;
function ei(e) {
  if ((e = tr(e))) {
    if (typeof ho != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = fl(t)), ho(e.stateNode, e.type, t));
  }
}
function Cs(e) {
  Xt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Xt = e);
}
function _s() {
  if (Xt) {
    var e = Xt,
      t = Gt;
    if (((Gt = Xt = null), ei(e), t)) for (e = 0; e < t.length; e++) ei(t[e]);
  }
}
function xs(e, t) {
  return e(t);
}
function Ps() {}
var Ll = !1;
function Ns(e, t, n) {
  if (Ll) return e(t, n);
  Ll = !0;
  try {
    return xs(e, t, n);
  } finally {
    (Ll = !1), (Xt !== null || Gt !== null) && (Ps(), _s());
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var vo = !1;
if (Qe)
  try {
    var pn = {};
    Object.defineProperty(pn, "passive", {
      get: function () {
        vo = !0;
      },
    }),
      window.addEventListener("test", pn, pn),
      window.removeEventListener("test", pn, pn);
  } catch {
    vo = !1;
  }
function Bc(e, t, n, r, l, o, u, i, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (m) {
    this.onError(m);
  }
}
var Pn = !1,
  Ir = null,
  $r = !1,
  yo = null,
  Hc = {
    onError: function (e) {
      (Pn = !0), (Ir = e);
    },
  };
function Qc(e, t, n, r, l, o, u, i, s) {
  (Pn = !1), (Ir = null), Bc.apply(Hc, arguments);
}
function Kc(e, t, n, r, l, o, u, i, s) {
  if ((Qc.apply(this, arguments), Pn)) {
    if (Pn) {
      var f = Ir;
      (Pn = !1), (Ir = null);
    } else throw Error(y(198));
    $r || (($r = !0), (yo = f));
  }
}
function jt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function zs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ti(e) {
  if (jt(e) !== e) throw Error(y(188));
}
function Yc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ti(l), e;
        if (o === r) return ti(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var u = !1, i = l.child; i; ) {
        if (i === n) {
          (u = !0), (n = l), (r = o);
          break;
        }
        if (i === r) {
          (u = !0), (r = l), (n = o);
          break;
        }
        i = i.sibling;
      }
      if (!u) {
        for (i = o.child; i; ) {
          if (i === n) {
            (u = !0), (n = o), (r = l);
            break;
          }
          if (i === r) {
            (u = !0), (r = o), (n = l);
            break;
          }
          i = i.sibling;
        }
        if (!u) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ts(e) {
  return (e = Yc(e)), e !== null ? Ls(e) : null;
}
function Ls(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ls(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Os = ye.unstable_scheduleCallback,
  ni = ye.unstable_cancelCallback,
  Xc = ye.unstable_shouldYield,
  Gc = ye.unstable_requestPaint,
  H = ye.unstable_now,
  Zc = ye.unstable_getCurrentPriorityLevel,
  uu = ye.unstable_ImmediatePriority,
  Rs = ye.unstable_UserBlockingPriority,
  Ur = ye.unstable_NormalPriority,
  Jc = ye.unstable_LowPriority,
  js = ye.unstable_IdlePriority,
  il = null,
  $e = null;
function qc(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : tf,
  bc = Math.log,
  ef = Math.LN2;
function tf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bc(e) / ef) | 0)) | 0;
}
var ar = 64,
  cr = 4194304;
function Cn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ar(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    u = n & 268435455;
  if (u !== 0) {
    var i = u & ~l;
    i !== 0 ? (r = Cn(i)) : ((o &= u), o !== 0 && (r = Cn(o)));
  } else (u = n & ~l), u !== 0 ? (r = Cn(u)) : o !== 0 && (r = Cn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function nf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function rf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var u = 31 - Re(o),
      i = 1 << u,
      s = l[u];
    s === -1
      ? (!(i & n) || i & r) && (l[u] = nf(i, t))
      : s <= t && (e.expiredLanes |= i),
      (o &= ~i);
  }
}
function go(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ds() {
  var e = ar;
  return (ar <<= 1), !(ar & 4194240) && (ar = 64), e;
}
function Ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function lf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function iu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var j = 0;
function Ms(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fs,
  su,
  Is,
  $s,
  Us,
  wo = !1,
  fr = [],
  rt = null,
  lt = null,
  ot = null,
  In = new Map(),
  $n = new Map(),
  be = [],
  of =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ri(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      In.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $n.delete(t.pointerId);
  }
}
function mn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = tr(t)), t !== null && su(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function uf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rt = mn(rt, e, t, n, r, l)), !0;
    case "dragenter":
      return (lt = mn(lt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = mn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return In.set(o, mn(In.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), $n.set(o, mn($n.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function As(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zs(n)), t !== null)) {
          (e.blockedOn = t),
            Us(e.priority, function () {
              Is(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = So(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (mo = r), n.target.dispatchEvent(r), (mo = null);
    } else return (t = tr(n)), t !== null && su(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function li(e, t, n) {
  xr(e) && n.delete(t);
}
function sf() {
  (wo = !1),
    rt !== null && xr(rt) && (rt = null),
    lt !== null && xr(lt) && (lt = null),
    ot !== null && xr(ot) && (ot = null),
    In.forEach(li),
    $n.forEach(li);
}
function hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    wo ||
      ((wo = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, sf)));
}
function Un(e) {
  function t(l) {
    return hn(l, e);
  }
  if (0 < fr.length) {
    hn(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var r = fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && hn(rt, e),
      lt !== null && hn(lt, e),
      ot !== null && hn(ot, e),
      In.forEach(t),
      $n.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    As(n), n.blockedOn === null && be.shift();
}
var Zt = Ge.ReactCurrentBatchConfig,
  Vr = !0;
function af(e, t, n, r) {
  var l = j,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (j = 1), au(e, t, n, r);
  } finally {
    (j = l), (Zt.transition = o);
  }
}
function cf(e, t, n, r) {
  var l = j,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (j = 4), au(e, t, n, r);
  } finally {
    (j = l), (Zt.transition = o);
  }
}
function au(e, t, n, r) {
  if (Vr) {
    var l = So(e, t, n, r);
    if (l === null) Vl(e, t, r, Wr, n), ri(e, r);
    else if (uf(l, e, t, n, r)) r.stopPropagation();
    else if ((ri(e, r), t & 4 && -1 < of.indexOf(e))) {
      for (; l !== null; ) {
        var o = tr(l);
        if (
          (o !== null && Fs(o),
          (o = So(e, t, n, r)),
          o === null && Vl(e, t, r, Wr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Vl(e, t, r, null, n);
  }
}
var Wr = null;
function So(e, t, n, r) {
  if (((Wr = null), (e = ou(r)), (e = Et(e)), e !== null))
    if (((t = jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Wr = e), null;
}
function Vs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Zc()) {
        case uu:
          return 1;
        case Rs:
          return 4;
        case Ur:
        case Jc:
          return 16;
        case js:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  cu = null,
  Pr = null;
function Ws() {
  if (Pr) return Pr;
  var e,
    t = cu,
    n = t.length,
    r,
    l = "value" in tt ? tt.value : tt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
  return (Pr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Nr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function dr() {
  return !0;
}
function oi() {
  return !1;
}
function we(e) {
  function t(n, r, l, o, u) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = u),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(o) : o[i]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? dr
        : oi),
      (this.isPropagationStopped = oi),
      this
    );
  }
  return (
    A(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = dr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = dr));
      },
      persist: function () {},
      isPersistent: dr,
    }),
    t
  );
}
var sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fu = we(sn),
  er = A({}, sn, { view: 0, detail: 0 }),
  ff = we(er),
  Rl,
  jl,
  vn,
  sl = A({}, er, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: du,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vn &&
            (vn && e.type === "mousemove"
              ? ((Rl = e.screenX - vn.screenX), (jl = e.screenY - vn.screenY))
              : (jl = Rl = 0),
            (vn = e)),
          Rl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : jl;
    },
  }),
  ui = we(sl),
  df = A({}, sl, { dataTransfer: 0 }),
  pf = we(df),
  mf = A({}, er, { relatedTarget: 0 }),
  Dl = we(mf),
  hf = A({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vf = we(hf),
  yf = A({}, sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gf = we(yf),
  wf = A({}, sn, { data: 0 }),
  ii = we(wf),
  Sf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  kf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ef = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Cf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ef[e]) ? !!t[e] : !1;
}
function du() {
  return Cf;
}
var _f = A({}, er, {
    key: function (e) {
      if (e.key) {
        var t = Sf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Nr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? kf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: du,
    charCode: function (e) {
      return e.type === "keypress" ? Nr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xf = we(_f),
  Pf = A({}, sl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  si = we(Pf),
  Nf = A({}, er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: du,
  }),
  zf = we(Nf),
  Tf = A({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lf = we(Tf),
  Of = A({}, sl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Rf = we(Of),
  jf = [9, 13, 27, 32],
  pu = Qe && "CompositionEvent" in window,
  Nn = null;
Qe && "documentMode" in document && (Nn = document.documentMode);
var Df = Qe && "TextEvent" in window && !Nn,
  Bs = Qe && (!pu || (Nn && 8 < Nn && 11 >= Nn)),
  ai = String.fromCharCode(32),
  ci = !1;
function Hs(e, t) {
  switch (e) {
    case "keyup":
      return jf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Qs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var It = !1;
function Mf(e, t) {
  switch (e) {
    case "compositionend":
      return Qs(t);
    case "keypress":
      return t.which !== 32 ? null : ((ci = !0), ai);
    case "textInput":
      return (e = t.data), e === ai && ci ? null : e;
    default:
      return null;
  }
}
function Ff(e, t) {
  if (It)
    return e === "compositionend" || (!pu && Hs(e, t))
      ? ((e = Ws()), (Pr = cu = tt = null), (It = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Bs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var If = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function fi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!If[e.type] : t === "textarea";
}
function Ks(e, t, n, r) {
  Cs(r),
    (t = Br(t, "onChange")),
    0 < t.length &&
      ((n = new fu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zn = null,
  An = null;
function $f(e) {
  ra(e, 0);
}
function al(e) {
  var t = At(e);
  if (vs(t)) return e;
}
function Uf(e, t) {
  if (e === "change") return t;
}
var Ys = !1;
if (Qe) {
  var Ml;
  if (Qe) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var di = document.createElement("div");
      di.setAttribute("oninput", "return;"),
        (Fl = typeof di.oninput == "function");
    }
    Ml = Fl;
  } else Ml = !1;
  Ys = Ml && (!document.documentMode || 9 < document.documentMode);
}
function pi() {
  zn && (zn.detachEvent("onpropertychange", Xs), (An = zn = null));
}
function Xs(e) {
  if (e.propertyName === "value" && al(An)) {
    var t = [];
    Ks(t, An, e, ou(e)), Ns($f, t);
  }
}
function Af(e, t, n) {
  e === "focusin"
    ? (pi(), (zn = t), (An = n), zn.attachEvent("onpropertychange", Xs))
    : e === "focusout" && pi();
}
function Vf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return al(An);
}
function Wf(e, t) {
  if (e === "click") return al(t);
}
function Bf(e, t) {
  if (e === "input" || e === "change") return al(t);
}
function Hf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Hf;
function Vn(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!to.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function mi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hi(e, t) {
  var n = mi(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = mi(n);
  }
}
function Gs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Gs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Zs() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fr(e.document);
  }
  return t;
}
function mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qf(e) {
  var t = Zs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && mu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = hi(n, o));
        var u = hi(n, r);
        l &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Kf = Qe && "documentMode" in document && 11 >= document.documentMode,
  $t = null,
  ko = null,
  Tn = null,
  Eo = !1;
function vi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Eo ||
    $t == null ||
    $t !== Fr(r) ||
    ((r = $t),
    "selectionStart" in r && mu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Tn && Vn(Tn, r)) ||
      ((Tn = r),
      (r = Br(ko, "onSelect")),
      0 < r.length &&
        ((t = new fu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $t))));
}
function pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ut = {
    animationend: pr("Animation", "AnimationEnd"),
    animationiteration: pr("Animation", "AnimationIteration"),
    animationstart: pr("Animation", "AnimationStart"),
    transitionend: pr("Transition", "TransitionEnd"),
  },
  Il = {},
  Js = {};
Qe &&
  ((Js = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ut.animationend.animation,
    delete Ut.animationiteration.animation,
    delete Ut.animationstart.animation),
  "TransitionEvent" in window || delete Ut.transitionend.transition);
function cl(e) {
  if (Il[e]) return Il[e];
  if (!Ut[e]) return e;
  var t = Ut[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Js) return (Il[e] = t[n]);
  return e;
}
var qs = cl("animationend"),
  bs = cl("animationiteration"),
  ea = cl("animationstart"),
  ta = cl("transitionend"),
  na = new Map(),
  yi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  na.set(e, t), Rt(t, [e]);
}
for (var $l = 0; $l < yi.length; $l++) {
  var Ul = yi[$l],
    Yf = Ul.toLowerCase(),
    Xf = Ul[0].toUpperCase() + Ul.slice(1);
  pt(Yf, "on" + Xf);
}
pt(qs, "onAnimationEnd");
pt(bs, "onAnimationIteration");
pt(ea, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(ta, "onTransitionEnd");
bt("onMouseEnter", ["mouseout", "mouseover"]);
bt("onMouseLeave", ["mouseout", "mouseover"]);
bt("onPointerEnter", ["pointerout", "pointerover"]);
bt("onPointerLeave", ["pointerout", "pointerover"]);
Rt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Rt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Rt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Rt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var _n =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));
function gi(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Kc(r, t, void 0, e), (e.currentTarget = null);
}
function ra(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u],
            s = i.instance,
            f = i.currentTarget;
          if (((i = i.listener), s !== o && l.isPropagationStopped())) break e;
          gi(l, i, f), (o = s);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((i = r[u]),
            (s = i.instance),
            (f = i.currentTarget),
            (i = i.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          gi(l, i, f), (o = s);
        }
    }
  }
  if ($r) throw ((e = yo), ($r = !1), (yo = null), e);
}
function M(e, t) {
  var n = t[No];
  n === void 0 && (n = t[No] = new Set());
  var r = e + "__bubble";
  n.has(r) || (la(t, e, 2, !1), n.add(r));
}
function Al(e, t, n) {
  var r = 0;
  t && (r |= 4), la(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
  if (!e[mr]) {
    (e[mr] = !0),
      fs.forEach(function (n) {
        n !== "selectionchange" && (Gf.has(n) || Al(n, !1, e), Al(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || ((t[mr] = !0), Al("selectionchange", !1, t));
  }
}
function la(e, t, n, r) {
  switch (Vs(t)) {
    case 1:
      var l = af;
      break;
    case 4:
      l = cf;
      break;
    default:
      l = au;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !vo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Vl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var s = u.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = u.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            u = u.return;
          }
        for (; i !== null; ) {
          if (((u = Et(i)), u === null)) return;
          if (((s = u.tag), s === 5 || s === 6)) {
            r = o = u;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  Ns(function () {
    var f = o,
      m = ou(n),
      h = [];
    e: {
      var p = na.get(e);
      if (p !== void 0) {
        var g = fu,
          w = e;
        switch (e) {
          case "keypress":
            if (Nr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = xf;
            break;
          case "focusin":
            (w = "focus"), (g = Dl);
            break;
          case "focusout":
            (w = "blur"), (g = Dl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Dl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ui;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = pf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = zf;
            break;
          case qs:
          case bs:
          case ea:
            g = vf;
            break;
          case ta:
            g = Lf;
            break;
          case "scroll":
            g = ff;
            break;
          case "wheel":
            g = Rf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = gf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = si;
        }
        var S = (t & 4) !== 0,
          E = !S && e === "scroll",
          c = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var a = f, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              c !== null && ((v = Fn(a, c)), v != null && S.push(Bn(a, v, d)))),
            E)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((p = new g(p, w, null, n, m)), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== mo &&
            (w = n.relatedTarget || n.fromElement) &&
            (Et(w) || w[Ke]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = f),
              (w = w ? Et(w) : null),
              w !== null &&
                ((E = jt(w)), w !== E || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = f)),
          g !== w)
        ) {
          if (
            ((S = ui),
            (v = "onMouseLeave"),
            (c = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = si),
              (v = "onPointerLeave"),
              (c = "onPointerEnter"),
              (a = "pointer")),
            (E = g == null ? p : At(g)),
            (d = w == null ? p : At(w)),
            (p = new S(v, a + "leave", g, n, m)),
            (p.target = E),
            (p.relatedTarget = d),
            (v = null),
            Et(m) === f &&
              ((S = new S(c, a + "enter", w, n, m)),
              (S.target = d),
              (S.relatedTarget = E),
              (v = S)),
            (E = v),
            g && w)
          )
            t: {
              for (S = g, c = w, a = 0, d = S; d; d = Dt(d)) a++;
              for (d = 0, v = c; v; v = Dt(v)) d++;
              for (; 0 < a - d; ) (S = Dt(S)), a--;
              for (; 0 < d - a; ) (c = Dt(c)), d--;
              for (; a--; ) {
                if (S === c || (c !== null && S === c.alternate)) break t;
                (S = Dt(S)), (c = Dt(c));
              }
              S = null;
            }
          else S = null;
          g !== null && wi(h, p, g, S, !1),
            w !== null && E !== null && wi(h, E, w, S, !0);
        }
      }
      e: {
        if (
          ((p = f ? At(f) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var k = Uf;
        else if (fi(p))
          if (Ys) k = Bf;
          else {
            k = Vf;
            var _ = Af;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (k = Wf);
        if (k && (k = k(e, f))) {
          Ks(h, k, n, m);
          break e;
        }
        _ && _(e, p, f),
          e === "focusout" &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === "number" &&
            so(p, "number", p.value);
      }
      switch (((_ = f ? At(f) : window), e)) {
        case "focusin":
          (fi(_) || _.contentEditable === "true") &&
            (($t = _), (ko = f), (Tn = null));
          break;
        case "focusout":
          Tn = ko = $t = null;
          break;
        case "mousedown":
          Eo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Eo = !1), vi(h, n, m);
          break;
        case "selectionchange":
          if (Kf) break;
        case "keydown":
        case "keyup":
          vi(h, n, m);
      }
      var P;
      if (pu)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        It
          ? Hs(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Bs &&
          n.locale !== "ko" &&
          (It || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && It && (P = Ws())
            : ((tt = m),
              (cu = "value" in tt ? tt.value : tt.textContent),
              (It = !0))),
        (_ = Br(f, N)),
        0 < _.length &&
          ((N = new ii(N, e, null, n, m)),
          h.push({ event: N, listeners: _ }),
          P ? (N.data = P) : ((P = Qs(n)), P !== null && (N.data = P)))),
        (P = Df ? Mf(e, n) : Ff(e, n)) &&
          ((f = Br(f, "onBeforeInput")),
          0 < f.length &&
            ((m = new ii("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: f }),
            (m.data = P)));
    }
    ra(h, t);
  });
}
function Bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Fn(e, n)),
      o != null && r.unshift(Bn(e, o, l)),
      (o = Fn(e, t)),
      o != null && r.push(Bn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wi(e, t, n, r, l) {
  for (var o = t._reactName, u = []; n !== null && n !== r; ) {
    var i = n,
      s = i.alternate,
      f = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 &&
      f !== null &&
      ((i = f),
      l
        ? ((s = Fn(n, o)), s != null && u.unshift(Bn(n, s, i)))
        : l || ((s = Fn(n, o)), s != null && u.push(Bn(n, s, i)))),
      (n = n.return);
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var Zf = /\r\n?/g,
  Jf = /\u0000|\uFFFD/g;
function Si(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zf,
      `
`
    )
    .replace(Jf, "");
}
function hr(e, t, n) {
  if (((t = Si(t)), Si(e) !== t && n)) throw Error(y(425));
}
function Hr() {}
var Co = null,
  _o = null;
function xo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Po = typeof setTimeout == "function" ? setTimeout : void 0,
  qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ki = typeof Promise == "function" ? Promise : void 0,
  bf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ki < "u"
      ? function (e) {
          return ki.resolve(null).then(e).catch(ed);
        }
      : Po;
function ed(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Un(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Un(t);
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ei(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var an = Math.random().toString(36).slice(2),
  Ie = "__reactFiber$" + an,
  Hn = "__reactProps$" + an,
  Ke = "__reactContainer$" + an,
  No = "__reactEvents$" + an,
  td = "__reactListeners$" + an,
  nd = "__reactHandles$" + an;
function Et(e) {
  var t = e[Ie];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[Ie])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ei(e); e !== null; ) {
          if ((n = e[Ie])) return n;
          e = Ei(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function tr(e) {
  return (
    (e = e[Ie] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function At(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function fl(e) {
  return e[Hn] || null;
}
var zo = [],
  Vt = -1;
function mt(e) {
  return { current: e };
}
function F(e) {
  0 > Vt || ((e.current = zo[Vt]), (zo[Vt] = null), Vt--);
}
function D(e, t) {
  Vt++, (zo[Vt] = e.current), (e.current = t);
}
var dt = {},
  re = mt(dt),
  ce = mt(!1),
  Nt = dt;
function en(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Qr() {
  F(ce), F(re);
}
function Ci(e, t, n) {
  if (re.current !== dt) throw Error(y(168));
  D(re, t), D(ce, n);
}
function oa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Uc(e) || "Unknown", l));
  return A({}, n, r);
}
function Kr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (Nt = re.current),
    D(re, e),
    D(ce, ce.current),
    !0
  );
}
function _i(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = oa(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(ce),
      F(re),
      D(re, e))
    : F(ce),
    D(ce, n);
}
var Ve = null,
  dl = !1,
  Bl = !1;
function ua(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function rd(e) {
  (dl = !0), ua(e);
}
function ht() {
  if (!Bl && Ve !== null) {
    Bl = !0;
    var e = 0,
      t = j;
    try {
      var n = Ve;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (dl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Os(uu, ht), l);
    } finally {
      (j = t), (Bl = !1);
    }
  }
  return null;
}
var Wt = [],
  Bt = 0,
  Yr = null,
  Xr = 0,
  Se = [],
  ke = 0,
  zt = null,
  We = 1,
  Be = "";
function St(e, t) {
  (Wt[Bt++] = Xr), (Wt[Bt++] = Yr), (Yr = e), (Xr = t);
}
function ia(e, t, n) {
  (Se[ke++] = We), (Se[ke++] = Be), (Se[ke++] = zt), (zt = e);
  var r = We;
  e = Be;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Re(t) + l;
  if (30 < o) {
    var u = l - (l % 5);
    (o = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (l -= u),
      (We = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (Be = o + e);
  } else (We = (1 << o) | (n << l) | r), (Be = e);
}
function hu(e) {
  e.return !== null && (St(e, 1), ia(e, 1, 0));
}
function vu(e) {
  for (; e === Yr; )
    (Yr = Wt[--Bt]), (Wt[Bt] = null), (Xr = Wt[--Bt]), (Wt[Bt] = null);
  for (; e === zt; )
    (zt = Se[--ke]),
      (Se[ke] = null),
      (Be = Se[--ke]),
      (Se[ke] = null),
      (We = Se[--ke]),
      (Se[ke] = null);
}
var ve = null,
  he = null,
  I = !1,
  Oe = null;
function sa(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (he = ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: We, overflow: Be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function To(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Lo(e) {
  if (I) {
    var t = he;
    if (t) {
      var n = t;
      if (!xi(e, t)) {
        if (To(e)) throw Error(y(418));
        t = ut(n.nextSibling);
        var r = ve;
        t && xi(e, t)
          ? sa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (I = !1), (ve = e));
      }
    } else {
      if (To(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (I = !1), (ve = e);
    }
  }
}
function Pi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function vr(e) {
  if (e !== ve) return !1;
  if (!I) return Pi(e), (I = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !xo(e.type, e.memoizedProps))),
    t && (t = he))
  ) {
    if (To(e)) throw (aa(), Error(y(418)));
    for (; t; ) sa(e, t), (t = ut(t.nextSibling));
  }
  if ((Pi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              he = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function aa() {
  for (var e = he; e; ) e = ut(e.nextSibling);
}
function tn() {
  (he = ve = null), (I = !1);
}
function yu(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var ld = Ge.ReactCurrentBatchConfig;
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = A({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Gr = mt(null),
  Zr = null,
  Ht = null,
  gu = null;
function wu() {
  gu = Ht = Zr = null;
}
function Su(e) {
  var t = Gr.current;
  F(Gr), (e._currentValue = t);
}
function Oo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jt(e, t) {
  (Zr = e),
    (gu = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ae = !0), (e.firstContext = null));
}
function xe(e) {
  var t = e._currentValue;
  if (gu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Zr === null) throw Error(y(308));
      (Ht = e), (Zr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var Ct = null;
function ku(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function ca(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ku(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function Eu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function it(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ku(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function zr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), iu(e, n);
  }
}
function Ni(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Jr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate,
    u = l.lastBaseUpdate,
    i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i,
      f = s.next;
    (s.next = null), u === null ? (o = f) : (u.next = f), (u = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (i = m.lastBaseUpdate),
      i !== u &&
        (i === null ? (m.firstBaseUpdate = f) : (i.next = f),
        (m.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (u = 0), (m = f = s = null), (i = o);
    do {
      var p = i.lane,
        g = i.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var w = e,
            S = i;
          switch (((p = t), (g = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w == "function" ? w.call(g, h, p) : w),
                p == null)
              )
                break e;
              h = A({}, h, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [i]) : p.push(i));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          m === null ? ((f = m = g), (s = h)) : (m = m.next = g),
          (u |= p);
      if (((i = i.next), i === null)) {
        if (((i = l.shared.pending), i === null)) break;
        (p = i),
          (i = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (u |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Lt |= u), (e.lanes = u), (e.memoizedState = h);
  }
}
function zi(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var da = new cs.Component().refs;
function Ro(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : A({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = at(e),
      o = He(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = it(e, o, l)),
      t !== null && (je(t, e, l, r), zr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = at(e),
      o = He(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = it(e, o, l)),
      t !== null && (je(t, e, l, r), zr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = at(e),
      l = He(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = it(e, l, r)),
      t !== null && (je(t, e, r, n), zr(t, e, r));
  },
};
function Ti(e, t, n, r, l, o, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Vn(n, r) || !Vn(l, o)
      : !0
  );
}
function pa(e, t, n) {
  var r = !1,
    l = dt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = xe(o))
      : ((l = fe(t) ? Nt : re.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? en(e, l) : dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Li(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function jo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = da), Eu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = xe(o))
    : ((o = fe(t) ? Nt : re.current), (l.context = en(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ro(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && pl.enqueueReplaceState(l, l.state, null),
      Jr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (u) {
            var i = l.refs;
            i === da && (i = l.refs = {}),
              u === null ? delete i[o] : (i[o] = u);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function yr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Oi(e) {
  var t = e._init;
  return t(e._payload);
}
function ma(e) {
  function t(c, a) {
    if (e) {
      var d = c.deletions;
      d === null ? ((c.deletions = [a]), (c.flags |= 16)) : d.push(a);
    }
  }
  function n(c, a) {
    if (!e) return null;
    for (; a !== null; ) t(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; )
      a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = ct(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function o(c, a, d) {
    return (
      (c.index = d),
      e
        ? ((d = c.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((c.flags |= 2), a) : d)
            : ((c.flags |= 2), a))
        : ((c.flags |= 1048576), a)
    );
  }
  function u(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function i(c, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Zl(d, c.mode, v)), (a.return = c), a)
      : ((a = l(a, d)), (a.return = c), a);
  }
  function s(c, a, d, v) {
    var k = d.type;
    return k === Ft
      ? m(c, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Je &&
            Oi(k) === a.type))
      ? ((v = l(a, d.props)), (v.ref = yn(c, a, d)), (v.return = c), v)
      : ((v = Dr(d.type, d.key, d.props, null, c.mode, v)),
        (v.ref = yn(c, a, d)),
        (v.return = c),
        v);
  }
  function f(c, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Jl(d, c.mode, v)), (a.return = c), a)
      : ((a = l(a, d.children || [])), (a.return = c), a);
  }
  function m(c, a, d, v, k) {
    return a === null || a.tag !== 7
      ? ((a = Pt(d, c.mode, v, k)), (a.return = c), a)
      : ((a = l(a, d)), (a.return = c), a);
  }
  function h(c, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Zl("" + a, c.mode, d)), (a.return = c), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ur:
          return (
            (d = Dr(a.type, a.key, a.props, null, c.mode, d)),
            (d.ref = yn(c, null, a)),
            (d.return = c),
            d
          );
        case Mt:
          return (a = Jl(a, c.mode, d)), (a.return = c), a;
        case Je:
          var v = a._init;
          return h(c, v(a._payload), d);
      }
      if (En(a) || dn(a))
        return (a = Pt(a, c.mode, d, null)), (a.return = c), a;
      yr(c, a);
    }
    return null;
  }
  function p(c, a, d, v) {
    var k = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return k !== null ? null : i(c, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ur:
          return d.key === k ? s(c, a, d, v) : null;
        case Mt:
          return d.key === k ? f(c, a, d, v) : null;
        case Je:
          return (k = d._init), p(c, a, k(d._payload), v);
      }
      if (En(d) || dn(d)) return k !== null ? null : m(c, a, d, v, null);
      yr(c, d);
    }
    return null;
  }
  function g(c, a, d, v, k) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (c = c.get(d) || null), i(a, c, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ur:
          return (c = c.get(v.key === null ? d : v.key) || null), s(a, c, v, k);
        case Mt:
          return (c = c.get(v.key === null ? d : v.key) || null), f(a, c, v, k);
        case Je:
          var _ = v._init;
          return g(c, a, d, _(v._payload), k);
      }
      if (En(v) || dn(v)) return (c = c.get(d) || null), m(a, c, v, k, null);
      yr(a, v);
    }
    return null;
  }
  function w(c, a, d, v) {
    for (
      var k = null, _ = null, P = a, N = (a = 0), W = null;
      P !== null && N < d.length;
      N++
    ) {
      P.index > N ? ((W = P), (P = null)) : (W = P.sibling);
      var O = p(c, P, d[N], v);
      if (O === null) {
        P === null && (P = W);
        break;
      }
      e && P && O.alternate === null && t(c, P),
        (a = o(O, a, N)),
        _ === null ? (k = O) : (_.sibling = O),
        (_ = O),
        (P = W);
    }
    if (N === d.length) return n(c, P), I && St(c, N), k;
    if (P === null) {
      for (; N < d.length; N++)
        (P = h(c, d[N], v)),
          P !== null &&
            ((a = o(P, a, N)), _ === null ? (k = P) : (_.sibling = P), (_ = P));
      return I && St(c, N), k;
    }
    for (P = r(c, P); N < d.length; N++)
      (W = g(P, c, N, d[N], v)),
        W !== null &&
          (e && W.alternate !== null && P.delete(W.key === null ? N : W.key),
          (a = o(W, a, N)),
          _ === null ? (k = W) : (_.sibling = W),
          (_ = W));
    return (
      e &&
        P.forEach(function (Ne) {
          return t(c, Ne);
        }),
      I && St(c, N),
      k
    );
  }
  function S(c, a, d, v) {
    var k = dn(d);
    if (typeof k != "function") throw Error(y(150));
    if (((d = k.call(d)), d == null)) throw Error(y(151));
    for (
      var _ = (k = null), P = a, N = (a = 0), W = null, O = d.next();
      P !== null && !O.done;
      N++, O = d.next()
    ) {
      P.index > N ? ((W = P), (P = null)) : (W = P.sibling);
      var Ne = p(c, P, O.value, v);
      if (Ne === null) {
        P === null && (P = W);
        break;
      }
      e && P && Ne.alternate === null && t(c, P),
        (a = o(Ne, a, N)),
        _ === null ? (k = Ne) : (_.sibling = Ne),
        (_ = Ne),
        (P = W);
    }
    if (O.done) return n(c, P), I && St(c, N), k;
    if (P === null) {
      for (; !O.done; N++, O = d.next())
        (O = h(c, O.value, v)),
          O !== null &&
            ((a = o(O, a, N)), _ === null ? (k = O) : (_.sibling = O), (_ = O));
      return I && St(c, N), k;
    }
    for (P = r(c, P); !O.done; N++, O = d.next())
      (O = g(P, c, N, O.value, v)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? N : O.key),
          (a = o(O, a, N)),
          _ === null ? (k = O) : (_.sibling = O),
          (_ = O));
    return (
      e &&
        P.forEach(function (cn) {
          return t(c, cn);
        }),
      I && St(c, N),
      k
    );
  }
  function E(c, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ft &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case ur:
          e: {
            for (var k = d.key, _ = a; _ !== null; ) {
              if (_.key === k) {
                if (((k = d.type), k === Ft)) {
                  if (_.tag === 7) {
                    n(c, _.sibling),
                      (a = l(_, d.props.children)),
                      (a.return = c),
                      (c = a);
                    break e;
                  }
                } else if (
                  _.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Je &&
                    Oi(k) === _.type)
                ) {
                  n(c, _.sibling),
                    (a = l(_, d.props)),
                    (a.ref = yn(c, _, d)),
                    (a.return = c),
                    (c = a);
                  break e;
                }
                n(c, _);
                break;
              } else t(c, _);
              _ = _.sibling;
            }
            d.type === Ft
              ? ((a = Pt(d.props.children, c.mode, v, d.key)),
                (a.return = c),
                (c = a))
              : ((v = Dr(d.type, d.key, d.props, null, c.mode, v)),
                (v.ref = yn(c, a, d)),
                (v.return = c),
                (c = v));
          }
          return u(c);
        case Mt:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(c, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = c),
                    (c = a);
                  break e;
                } else {
                  n(c, a);
                  break;
                }
              else t(c, a);
              a = a.sibling;
            }
            (a = Jl(d, c.mode, v)), (a.return = c), (c = a);
          }
          return u(c);
        case Je:
          return (_ = d._init), E(c, a, _(d._payload), v);
      }
      if (En(d)) return w(c, a, d, v);
      if (dn(d)) return S(c, a, d, v);
      yr(c, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(c, a.sibling), (a = l(a, d)), (a.return = c), (c = a))
          : (n(c, a), (a = Zl(d, c.mode, v)), (a.return = c), (c = a)),
        u(c))
      : n(c, a);
  }
  return E;
}
var nn = ma(!0),
  ha = ma(!1),
  nr = {},
  Ue = mt(nr),
  Qn = mt(nr),
  Kn = mt(nr);
function _t(e) {
  if (e === nr) throw Error(y(174));
  return e;
}
function Cu(e, t) {
  switch ((D(Kn, t), D(Qn, e), D(Ue, nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : co(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = co(t, e));
  }
  F(Ue), D(Ue, t);
}
function rn() {
  F(Ue), F(Qn), F(Kn);
}
function va(e) {
  _t(Kn.current);
  var t = _t(Ue.current),
    n = co(t, e.type);
  t !== n && (D(Qn, e), D(Ue, n));
}
function _u(e) {
  Qn.current === e && (F(Ue), F(Qn));
}
var $ = mt(0);
function qr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Hl = [];
function xu() {
  for (var e = 0; e < Hl.length; e++)
    Hl[e]._workInProgressVersionPrimary = null;
  Hl.length = 0;
}
var Tr = Ge.ReactCurrentDispatcher,
  Ql = Ge.ReactCurrentBatchConfig,
  Tt = 0,
  U = null,
  K = null,
  G = null,
  br = !1,
  Ln = !1,
  Yn = 0,
  od = 0;
function ee() {
  throw Error(y(321));
}
function Pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function Nu(e, t, n, r, l, o) {
  if (
    ((Tt = o),
    (U = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Tr.current = e === null || e.memoizedState === null ? ad : cd),
    (e = n(r, l)),
    Ln)
  ) {
    o = 0;
    do {
      if (((Ln = !1), (Yn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (G = K = null),
        (t.updateQueue = null),
        (Tr.current = fd),
        (e = n(r, l));
    } while (Ln);
  }
  if (
    ((Tr.current = el),
    (t = K !== null && K.next !== null),
    (Tt = 0),
    (G = K = U = null),
    (br = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function zu() {
  var e = Yn !== 0;
  return (Yn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return G === null ? (U.memoizedState = G = e) : (G = G.next = e), G;
}
function Pe() {
  if (K === null) {
    var e = U.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = G === null ? U.memoizedState : G.next;
  if (t !== null) (G = t), (K = e);
  else {
    if (e === null) throw Error(y(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      G === null ? (U.memoizedState = G = e) : (G = G.next = e);
  }
  return G;
}
function Xn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Kl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var u = l.next;
      (l.next = o.next), (o.next = u);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var i = (u = null),
      s = null,
      f = o;
    do {
      var m = f.lane;
      if ((Tt & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var h = {
          lane: m,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        s === null ? ((i = s = h), (u = r)) : (s = s.next = h),
          (U.lanes |= m),
          (Lt |= m);
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? (u = r) : (s.next = i),
      De(r, t.memoizedState) || (ae = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (U.lanes |= o), (Lt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var u = (l = l.next);
    do (o = e(o, u.action)), (u = u.next);
    while (u !== l);
    De(o, t.memoizedState) || (ae = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ya() {}
function ga(e, t) {
  var n = U,
    r = Pe(),
    l = t(),
    o = !De(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ae = !0)),
    (r = r.queue),
    Tu(ka.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (G !== null && G.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gn(9, Sa.bind(null, n, r, l, t), void 0, null),
      Z === null)
    )
      throw Error(y(349));
    Tt & 30 || wa(n, t, l);
  }
  return l;
}
function wa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Sa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ea(t) && Ca(e);
}
function ka(e, t, n) {
  return n(function () {
    Ea(t) && Ca(e);
  });
}
function Ea(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function Ca(e) {
  var t = Ye(e, 1);
  t !== null && je(t, e, 1, -1);
}
function Ri(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = sd.bind(null, U, e)),
    [t.memoizedState, e]
  );
}
function Gn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _a() {
  return Pe().memoizedState;
}
function Lr(e, t, n, r) {
  var l = Fe();
  (U.flags |= e),
    (l.memoizedState = Gn(1 | t, n, void 0, r === void 0 ? null : r));
}
function ml(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var u = K.memoizedState;
    if (((o = u.destroy), r !== null && Pu(r, u.deps))) {
      l.memoizedState = Gn(t, n, o, r);
      return;
    }
  }
  (U.flags |= e), (l.memoizedState = Gn(1 | t, n, o, r));
}
function ji(e, t) {
  return Lr(8390656, 8, e, t);
}
function Tu(e, t) {
  return ml(2048, 8, e, t);
}
function xa(e, t) {
  return ml(4, 2, e, t);
}
function Pa(e, t) {
  return ml(4, 4, e, t);
}
function Na(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function za(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ml(4, 4, Na.bind(null, t, e), n)
  );
}
function Lu() {}
function Ta(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function La(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Oa(e, t, n) {
  return Tt & 21
    ? (De(n, t) || ((n = Ds()), (U.lanes |= n), (Lt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ae = !0)), (e.memoizedState = n));
}
function ud(e, t) {
  var n = j;
  (j = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ql.transition;
  Ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (j = n), (Ql.transition = r);
  }
}
function Ra() {
  return Pe().memoizedState;
}
function id(e, t, n) {
  var r = at(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ja(e))
  )
    Da(t, n);
  else if (((n = ca(e, t, n, r)), n !== null)) {
    var l = oe();
    je(n, e, r, l), Ma(n, t, r);
  }
}
function sd(e, t, n) {
  var r = at(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ja(e)) Da(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var u = t.lastRenderedState,
          i = o(u, n);
        if (((l.hasEagerState = !0), (l.eagerState = i), De(i, u))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), ku(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ca(e, t, l, r)),
      n !== null && ((l = oe()), je(n, e, r, l), Ma(n, t, r));
  }
}
function ja(e) {
  var t = e.alternate;
  return e === U || (t !== null && t === U);
}
function Da(e, t) {
  Ln = br = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ma(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), iu(e, n);
  }
}
var el = {
    readContext: xe,
    useCallback: ee,
    useContext: ee,
    useEffect: ee,
    useImperativeHandle: ee,
    useInsertionEffect: ee,
    useLayoutEffect: ee,
    useMemo: ee,
    useReducer: ee,
    useRef: ee,
    useState: ee,
    useDebugValue: ee,
    useDeferredValue: ee,
    useTransition: ee,
    useMutableSource: ee,
    useSyncExternalStore: ee,
    useId: ee,
    unstable_isNewReconciler: !1,
  },
  ad = {
    readContext: xe,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xe,
    useEffect: ji,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Lr(4194308, 4, Na.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Lr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Lr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = id.bind(null, U, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ri,
    useDebugValue: Lu,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Ri(!1),
        t = e[0];
      return (e = ud.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = U,
        l = Fe();
      if (I) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), Z === null)) throw Error(y(349));
        Tt & 30 || wa(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ji(ka.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Gn(9, Sa.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = Z.identifierPrefix;
      if (I) {
        var n = Be,
          r = We;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = od++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cd = {
    readContext: xe,
    useCallback: Ta,
    useContext: xe,
    useEffect: Tu,
    useImperativeHandle: za,
    useInsertionEffect: xa,
    useLayoutEffect: Pa,
    useMemo: La,
    useReducer: Kl,
    useRef: _a,
    useState: function () {
      return Kl(Xn);
    },
    useDebugValue: Lu,
    useDeferredValue: function (e) {
      var t = Pe();
      return Oa(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Kl(Xn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: ya,
    useSyncExternalStore: ga,
    useId: Ra,
    unstable_isNewReconciler: !1,
  },
  fd = {
    readContext: xe,
    useCallback: Ta,
    useContext: xe,
    useEffect: Tu,
    useImperativeHandle: za,
    useInsertionEffect: xa,
    useLayoutEffect: Pa,
    useMemo: La,
    useReducer: Yl,
    useRef: _a,
    useState: function () {
      return Yl(Xn);
    },
    useDebugValue: Lu,
    useDeferredValue: function (e) {
      var t = Pe();
      return K === null ? (t.memoizedState = e) : Oa(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(Xn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: ya,
    useSyncExternalStore: ga,
    useId: Ra,
    unstable_isNewReconciler: !1,
  };
function ln(e, t) {
  try {
    var n = "",
      r = t;
    do (n += $c(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Do(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var dd = typeof WeakMap == "function" ? WeakMap : Map;
function Fa(e, t, n) {
  (n = He(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      nl || ((nl = !0), (Ho = r)), Do(e, t);
    }),
    n
  );
}
function Ia(e, t, n) {
  (n = He(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Do(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Do(e, t),
          typeof r != "function" &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    n
  );
}
function Di(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Pd.bind(null, e, t, n)), t.then(e, e));
}
function Mi(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fi(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = He(-1, 1)), (t.tag = 2), it(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pd = Ge.ReactCurrentOwner,
  ae = !1;
function le(e, t, n, r) {
  t.child = e === null ? ha(t, null, n, r) : nn(t, e.child, n, r);
}
function Ii(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Jt(t, l),
    (r = Nu(e, t, n, r, o, l)),
    (n = zu()),
    e !== null && !ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (I && n && hu(t), (t.flags |= 1), le(e, t, r, l), t.child)
  );
}
function $i(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !$u(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), $a(e, t, o, r, l))
      : ((e = Dr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var u = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vn), n(u, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $a(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Vn(o, r) && e.ref === t.ref)
      if (((ae = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ae = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return Mo(e, t, n, r, l);
}
function Ua(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Kt, pe),
        (pe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Kt, pe),
          (pe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(Kt, pe),
        (pe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Kt, pe),
      (pe |= r);
  return le(e, t, l, n), t.child;
}
function Aa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Mo(e, t, n, r, l) {
  var o = fe(n) ? Nt : re.current;
  return (
    (o = en(t, o)),
    Jt(t, l),
    (n = Nu(e, t, n, r, o, l)),
    (r = zu()),
    e !== null && !ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (I && r && hu(t), (t.flags |= 1), le(e, t, n, l), t.child)
  );
}
function Ui(e, t, n, r, l) {
  if (fe(n)) {
    var o = !0;
    Kr(t);
  } else o = !1;
  if ((Jt(t, l), t.stateNode === null))
    Or(e, t), pa(t, n, r), jo(t, n, r, l), (r = !0);
  else if (e === null) {
    var u = t.stateNode,
      i = t.memoizedProps;
    u.props = i;
    var s = u.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = xe(f))
      : ((f = fe(n) ? Nt : re.current), (f = en(t, f)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((i !== r || s !== f) && Li(t, u, r, f)),
      (qe = !1);
    var p = t.memoizedState;
    (u.state = p),
      Jr(t, r, u, l),
      (s = t.memoizedState),
      i !== r || p !== s || ce.current || qe
        ? (typeof m == "function" && (Ro(t, n, m, r), (s = t.memoizedState)),
          (i = qe || Ti(t, n, i, r, p, s, f))
            ? (h ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (u.props = r),
          (u.state = s),
          (u.context = f),
          (r = i))
        : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (u = t.stateNode),
      fa(e, t),
      (i = t.memoizedProps),
      (f = t.type === t.elementType ? i : Te(t.type, i)),
      (u.props = f),
      (h = t.pendingProps),
      (p = u.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = xe(s))
        : ((s = fe(n) ? Nt : re.current), (s = en(t, s)));
    var g = n.getDerivedStateFromProps;
    (m =
      typeof g == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((i !== h || p !== s) && Li(t, u, r, s)),
      (qe = !1),
      (p = t.memoizedState),
      (u.state = p),
      Jr(t, r, u, l);
    var w = t.memoizedState;
    i !== h || p !== w || ce.current || qe
      ? (typeof g == "function" && (Ro(t, n, g, r), (w = t.memoizedState)),
        (f = qe || Ti(t, n, f, r, p, w, s) || !1)
          ? (m ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, w, s),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, w, s)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (u.props = r),
        (u.state = w),
        (u.context = s),
        (r = f))
      : (typeof u.componentDidUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Fo(e, t, n, r, o, l);
}
function Fo(e, t, n, r, l, o) {
  Aa(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return l && _i(t, n, !1), Xe(e, t, o);
  (r = t.stateNode), (pd.current = t);
  var i =
    u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = nn(t, e.child, null, o)), (t.child = nn(t, null, i, o)))
      : le(e, t, i, o),
    (t.memoizedState = r.state),
    l && _i(t, n, !0),
    t.child
  );
}
function Va(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ci(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ci(e, t.context, !1),
    Cu(e, t.containerInfo);
}
function Ai(e, t, n, r, l) {
  return tn(), yu(l), (t.flags |= 256), le(e, t, n, r), t.child;
}
var Io = { dehydrated: null, treeContext: null, retryLane: 0 };
function $o(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wa(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    o = !1,
    u = (t.flags & 128) !== 0,
    i;
  if (
    ((i = u) ||
      (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    i
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D($, l & 1),
    e === null)
  )
    return (
      Lo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = u))
                : (o = yl(u, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = $o(n)),
              (t.memoizedState = Io),
              e)
            : Ou(t, u))
    );
  if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
    return md(e, t, u, r, i, l, n);
  if (o) {
    (o = r.fallback), (u = t.mode), (l = e.child), (i = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      i !== null ? (o = ct(i, o)) : ((o = Pt(o, u, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? $o(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (o.memoizedState = u),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Io),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ct(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ou(e, t) {
  return (
    (t = yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gr(e, t, n, r) {
  return (
    r !== null && yu(r),
    nn(t, e.child, null, n),
    (e = Ou(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function md(e, t, n, r, l, o, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Xl(Error(y(422)))), gr(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = yl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Pt(o, l, u, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && nn(t, e.child, null, u),
        (t.child.memoizedState = $o(u)),
        (t.memoizedState = Io),
        o);
  if (!(t.mode & 1)) return gr(e, t, u, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
    return (r = i), (o = Error(y(419))), (r = Xl(o, r, void 0)), gr(e, t, u, r);
  }
  if (((i = (u & e.childLanes) !== 0), ae || i)) {
    if (((r = Z), r !== null)) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | u) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ye(e, l), je(r, e, l, -1));
    }
    return Iu(), (r = Xl(Error(y(421)))), gr(e, t, u, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Nd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (he = ut(l.nextSibling)),
      (ve = t),
      (I = !0),
      (Oe = null),
      e !== null &&
        ((Se[ke++] = We),
        (Se[ke++] = Be),
        (Se[ke++] = zt),
        (We = e.id),
        (Be = e.overflow),
        (zt = t)),
      (t = Ou(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Oo(e.return, t, n);
}
function Gl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Ba(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((le(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vi(e, n, t);
        else if (e.tag === 19) Vi(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && qr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Gl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && qr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Gl(t, !0, n, null, o);
        break;
      case "together":
        Gl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Or(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Lt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function hd(e, t, n) {
  switch (t.tag) {
    case 3:
      Va(t), tn();
      break;
    case 5:
      va(t);
      break;
    case 1:
      fe(t.type) && Kr(t);
      break;
    case 4:
      Cu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(Gr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Wa(e, t, n)
          : (D($, $.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      D($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ba(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ua(e, t, n);
  }
  return Xe(e, t, n);
}
var Ha, Uo, Qa, Ka;
Ha = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Uo = function () {};
Qa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), _t(Ue.current);
    var o = null;
    switch (n) {
      case "input":
        (l = uo(e, l)), (r = uo(e, r)), (o = []);
        break;
      case "select":
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ao(e, l)), (r = ao(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hr);
    }
    fo(n, r);
    var u;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var i = l[f];
          for (u in i) i.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (Dn.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (
        ((i = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && s !== i && (s != null || i != null))
      )
        if (f === "style")
          if (i) {
            for (u in i)
              !i.hasOwnProperty(u) ||
                (s && s.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ""));
            for (u in s)
              s.hasOwnProperty(u) &&
                i[u] !== s[u] &&
                (n || (n = {}), (n[u] = s[u]));
          } else n || (o || (o = []), o.push(f, n)), (n = s);
        else
          f === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (i = i ? i.__html : void 0),
              s != null && i !== s && (o = o || []).push(f, s))
            : f === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(f, "" + s)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (Dn.hasOwnProperty(f)
                ? (s != null && f === "onScroll" && M("scroll", e),
                  o || i === s || (o = []))
                : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Ka = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!I)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function vd(e, t, n) {
  var r = t.pendingProps;
  switch ((vu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return te(t), null;
    case 1:
      return fe(t.type) && Qr(), te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rn(),
        F(ce),
        F(re),
        xu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (Yo(Oe), (Oe = null)))),
        Uo(e, t),
        te(t),
        null
      );
    case 5:
      _u(t);
      var l = _t(Kn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Qa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return te(t), null;
        }
        if (((e = _t(Ue.current)), vr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ie] = t), (r[Hn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < _n.length; l++) M(_n[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M("error", r), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              Zu(r, o), M("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                M("invalid", r);
              break;
            case "textarea":
              qu(r, o), M("invalid", r);
          }
          fo(n, o), (l = null);
          for (var u in o)
            if (o.hasOwnProperty(u)) {
              var i = o[u];
              u === "children"
                ? typeof i == "string"
                  ? r.textContent !== i &&
                    (o.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, i, e),
                    (l = ["children", i]))
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (o.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, i, e),
                    (l = ["children", "" + i]))
                : Dn.hasOwnProperty(u) &&
                  i != null &&
                  u === "onScroll" &&
                  M("scroll", r);
            }
          switch (n) {
            case "input":
              ir(r), Ju(r, o, !0);
              break;
            case "textarea":
              ir(r), bu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Hr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (u = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ws(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === "select" &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[Ie] = t),
            (e[Hn] = r),
            Ha(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((u = po(n, r)), n)) {
              case "dialog":
                M("cancel", e), M("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < _n.length; l++) M(_n[l], e);
                l = r;
                break;
              case "source":
                M("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                M("error", e), M("load", e), (l = r);
                break;
              case "details":
                M("toggle", e), (l = r);
                break;
              case "input":
                Zu(e, r), (l = uo(e, r)), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  M("invalid", e);
                break;
              case "textarea":
                qu(e, r), (l = ao(e, r)), M("invalid", e);
                break;
              default:
                l = r;
            }
            fo(n, l), (i = l);
            for (o in i)
              if (i.hasOwnProperty(o)) {
                var s = i[o];
                o === "style"
                  ? Es(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ss(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Mn(e, s)
                    : typeof s == "number" && Mn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Dn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && M("scroll", e)
                      : s != null && tu(e, o, s, u));
              }
            switch (n) {
              case "input":
                ir(e), Ju(e, r, !1);
                break;
              case "textarea":
                ir(e), bu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Yt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Yt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Hr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return te(t), null;
    case 6:
      if (e && t.stateNode != null) Ka(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = _t(Kn.current)), _t(Ue.current), vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ie] = t),
            (o = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ie] = t),
            (t.stateNode = r);
      }
      return te(t), null;
    case 13:
      if (
        (F($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (I && he !== null && t.mode & 1 && !(t.flags & 128))
          aa(), tn(), (t.flags |= 98560), (o = !1);
        else if (((o = vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[Ie] = t;
          } else
            tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          te(t), (o = !1);
        } else Oe !== null && (Yo(Oe), (Oe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? Y === 0 && (Y = 3) : Iu())),
          t.updateQueue !== null && (t.flags |= 4),
          te(t),
          null);
    case 4:
      return (
        rn(), Uo(e, t), e === null && Wn(t.stateNode.containerInfo), te(t), null
      );
    case 10:
      return Su(t.type._context), te(t), null;
    case 17:
      return fe(t.type) && Qr(), te(t), null;
    case 19:
      if ((F($), (o = t.memoizedState), o === null)) return te(t), null;
      if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
        if (r) gn(o, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((u = qr(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    gn(o, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (u = o.alternate),
                    u === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = u.childLanes),
                        (o.lanes = u.lanes),
                        (o.child = u.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = u.memoizedProps),
                        (o.memoizedState = u.memoizedState),
                        (o.updateQueue = u.updateQueue),
                        (o.type = u.type),
                        (e = u.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            H() > on &&
            ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = qr(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !u.alternate && !I)
            )
              return te(t), null;
          } else
            2 * H() - o.renderingStartTime > on &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = o.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (o.last = u));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = H()),
          (t.sibling = null),
          (n = $.current),
          D($, r ? (n & 1) | 2 : n & 1),
          t)
        : (te(t), null);
    case 22:
    case 23:
      return (
        Fu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? pe & 1073741824 && (te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function yd(e, t) {
  switch ((vu(t), t.tag)) {
    case 1:
      return (
        fe(t.type) && Qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rn(),
        F(ce),
        F(re),
        xu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return _u(t), null;
    case 13:
      if ((F($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F($), null;
    case 4:
      return rn(), null;
    case 10:
      return Su(t.type._context), null;
    case 22:
    case 23:
      return Fu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1,
  ne = !1,
  gd = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function Qt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function Ao(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Wi = !1;
function wd(e, t) {
  if (((Co = Vr), (e = Zs()), mu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0,
            i = -1,
            s = -1,
            f = 0,
            m = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (l !== 0 && h.nodeType !== 3) || (i = u + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = u + r),
                h.nodeType === 3 && (u += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (p = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++f === l && (i = u),
                p === o && ++m === r && (s = u),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = g;
          }
          n = i === -1 || s === -1 ? null : { start: i, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_o = { focusedElem: e, selectionRange: n }, Vr = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    E = w.memoizedState,
                    c = t.stateNode,
                    a = c.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Te(t.type, S),
                      E
                    );
                  c.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          V(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (w = Wi), (Wi = !1), w;
}
function On(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ao(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function hl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Vo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ya(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ya(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ie], delete t[Hn], delete t[No], delete t[td], delete t[nd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bi(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xa(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Hr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wo(e, t, n), e = e.sibling; e !== null; ) Wo(e, t, n), (e = e.sibling);
}
function Bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bo(e, t, n), e = e.sibling; e !== null; ) Bo(e, t, n), (e = e.sibling);
}
var J = null,
  Le = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Ga(e, t, n), (n = n.sibling);
}
function Ga(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ne || Qt(n, t);
    case 6:
      var r = J,
        l = Le;
      (J = null),
        Ze(e, t, n),
        (J = r),
        (Le = l),
        J !== null &&
          (Le
            ? ((e = J),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : J.removeChild(n.stateNode));
      break;
    case 18:
      J !== null &&
        (Le
          ? ((e = J),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wl(e.parentNode, n)
              : e.nodeType === 1 && Wl(e, n),
            Un(e))
          : Wl(J, n.stateNode));
      break;
    case 4:
      (r = J),
        (l = Le),
        (J = n.stateNode.containerInfo),
        (Le = !0),
        Ze(e, t, n),
        (J = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ne &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            u = o.destroy;
          (o = o.tag),
            u !== void 0 && (o & 2 || o & 4) && Ao(n, t, u),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !ne &&
        (Qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (i) {
          V(n, t, i);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ne = (r = ne) || n.memoizedState !== null), Ze(e, t, n), (ne = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Hi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gd()),
      t.forEach(function (r) {
        var l = zd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          u = t,
          i = u;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (J = i.stateNode), (Le = !1);
              break e;
            case 3:
              (J = i.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (J = i.stateNode.containerInfo), (Le = !0);
              break e;
          }
          i = i.return;
        }
        if (J === null) throw Error(y(160));
        Ga(o, u, l), (J = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (f) {
        V(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Za(t, e), (t = t.sibling);
}
function Za(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Me(e), r & 4)) {
        try {
          On(3, e, e.return), hl(3, e);
        } catch (S) {
          V(e, e.return, S);
        }
        try {
          On(5, e, e.return);
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 1:
      ze(t, e), Me(e), r & 512 && n !== null && Qt(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Me(e),
        r & 512 && n !== null && Qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Mn(l, "");
        } catch (S) {
          V(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          u = n !== null ? n.memoizedProps : o,
          i = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            i === "input" && o.type === "radio" && o.name != null && ys(l, o),
              po(i, u);
            var f = po(i, o);
            for (u = 0; u < s.length; u += 2) {
              var m = s[u],
                h = s[u + 1];
              m === "style"
                ? Es(l, h)
                : m === "dangerouslySetInnerHTML"
                ? Ss(l, h)
                : m === "children"
                ? Mn(l, h)
                : tu(l, m, h, f);
            }
            switch (i) {
              case "input":
                io(l, o);
                break;
              case "textarea":
                gs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Yt(l, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Yt(l, !!o.multiple, o.defaultValue, !0)
                      : Yt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Hn] = o;
          } catch (S) {
            V(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Un(t.containerInfo);
        } catch (S) {
          V(e, e.return, S);
        }
      break;
    case 4:
      ze(t, e), Me(e);
      break;
    case 13:
      ze(t, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Du = H())),
        r & 4 && Hi(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ne = (f = ne) || m), ze(t, e), (ne = f)) : ze(t, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !m && e.mode & 1)
        )
          for (C = e, m = e.child; m !== null; ) {
            for (h = C = m; C !== null; ) {
              switch (((p = C), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  On(4, p, p.return);
                  break;
                case 1:
                  Qt(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      V(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Qt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ki(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (C = g)) : Ki(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  f
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((i = h.stateNode),
                      (s = h.memoizedProps.style),
                      (u =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (i.style.display = ks("display", u)));
              } catch (S) {
                V(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = f ? "" : h.memoizedProps;
              } catch (S) {
                V(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Me(e), r & 4 && Hi(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mn(l, ""), (r.flags &= -33));
          var o = Bi(e);
          Bo(e, o, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            i = Bi(e);
          Wo(e, i, u);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sd(e, t, n) {
  (C = e), Ja(e);
}
function Ja(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      o = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || wr;
      if (!u) {
        var i = l.alternate,
          s = (i !== null && i.memoizedState !== null) || ne;
        i = wr;
        var f = ne;
        if (((wr = u), (ne = s) && !f))
          for (C = l; C !== null; )
            (u = C),
              (s = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? Yi(l)
                : s !== null
                ? ((s.return = u), (C = s))
                : Yi(l);
        for (; o !== null; ) (C = o), Ja(o), (o = o.sibling);
        (C = l), (wr = i), (ne = f);
      }
      Qi(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (C = o)) : Qi(e);
  }
}
function Qi(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ne || hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ne)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && zi(t, o, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                zi(t, u, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var m = f.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Un(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        ne || (t.flags & 512 && Vo(t));
      } catch (p) {
        V(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Ki(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Yi(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hl(4, t);
          } catch (s) {
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, l, s);
            }
          }
          var o = t.return;
          try {
            Vo(t);
          } catch (s) {
            V(t, o, s);
          }
          break;
        case 5:
          var u = t.return;
          try {
            Vo(t);
          } catch (s) {
            V(t, u, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (C = i);
      break;
    }
    C = t.return;
  }
}
var kd = Math.ceil,
  tl = Ge.ReactCurrentDispatcher,
  Ru = Ge.ReactCurrentOwner,
  _e = Ge.ReactCurrentBatchConfig,
  R = 0,
  Z = null,
  Q = null,
  q = 0,
  pe = 0,
  Kt = mt(0),
  Y = 0,
  Zn = null,
  Lt = 0,
  vl = 0,
  ju = 0,
  Rn = null,
  se = null,
  Du = 0,
  on = 1 / 0,
  Ae = null,
  nl = !1,
  Ho = null,
  st = null,
  Sr = !1,
  nt = null,
  rl = 0,
  jn = 0,
  Qo = null,
  Rr = -1,
  jr = 0;
function oe() {
  return R & 6 ? H() : Rr !== -1 ? Rr : (Rr = H());
}
function at(e) {
  return e.mode & 1
    ? R & 2 && q !== 0
      ? q & -q
      : ld.transition !== null
      ? (jr === 0 && (jr = Ds()), jr)
      : ((e = j),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vs(e.type))),
        e)
    : 1;
}
function je(e, t, n, r) {
  if (50 < jn) throw ((jn = 0), (Qo = null), Error(y(185)));
  bn(e, n, r),
    (!(R & 2) || e !== Z) &&
      (e === Z && (!(R & 2) && (vl |= n), Y === 4 && et(e, q)),
      de(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((on = H() + 500), dl && ht()));
}
function de(e, t) {
  var n = e.callbackNode;
  rf(e, t);
  var r = Ar(e, e === Z ? q : 0);
  if (r === 0)
    n !== null && ni(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ni(n), t === 1))
      e.tag === 0 ? rd(Xi.bind(null, e)) : ua(Xi.bind(null, e)),
        bf(function () {
          !(R & 6) && ht();
        }),
        (n = null);
    else {
      switch (Ms(r)) {
        case 1:
          n = uu;
          break;
        case 4:
          n = Rs;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = js;
          break;
        default:
          n = Ur;
      }
      n = oc(n, qa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function qa(e, t) {
  if (((Rr = -1), (jr = 0), R & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = Ar(e, e === Z ? q : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ll(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = ec();
    (Z !== e || q !== t) && ((Ae = null), (on = H() + 500), xt(e, t));
    do
      try {
        _d();
        break;
      } catch (i) {
        ba(e, i);
      }
    while (1);
    wu(),
      (tl.current = o),
      (R = l),
      Q !== null ? (t = 0) : ((Z = null), (q = 0), (t = Y));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = go(e)), l !== 0 && ((r = l), (t = Ko(e, l)))), t === 1)
    )
      throw ((n = Zn), xt(e, 0), et(e, r), de(e, H()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Ed(l) &&
          ((t = ll(e, r)),
          t === 2 && ((o = go(e)), o !== 0 && ((r = o), (t = Ko(e, o)))),
          t === 1))
      )
        throw ((n = Zn), xt(e, 0), et(e, r), de(e, H()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          kt(e, se, Ae);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = Du + 500 - H()), 10 < t))
          ) {
            if (Ar(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Po(kt.bind(null, e, se, Ae), t);
            break;
          }
          kt(e, se, Ae);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Re(r);
            (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
          }
          if (
            ((r = l),
            (r = H() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * kd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Po(kt.bind(null, e, se, Ae), r);
            break;
          }
          kt(e, se, Ae);
          break;
        case 5:
          kt(e, se, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return de(e, H()), e.callbackNode === n ? qa.bind(null, e) : null;
}
function Ko(e, t) {
  var n = Rn;
  return (
    e.current.memoizedState.isDehydrated && (xt(e, t).flags |= 256),
    (e = ll(e, t)),
    e !== 2 && ((t = se), (se = n), t !== null && Yo(t)),
    e
  );
}
function Yo(e) {
  se === null ? (se = e) : se.push.apply(se, e);
}
function Ed(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~ju,
      t &= ~vl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xi(e) {
  if (R & 6) throw Error(y(327));
  qt();
  var t = Ar(e, 0);
  if (!(t & 1)) return de(e, H()), null;
  var n = ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = go(e);
    r !== 0 && ((t = r), (n = Ko(e, r)));
  }
  if (n === 1) throw ((n = Zn), xt(e, 0), et(e, t), de(e, H()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, se, Ae),
    de(e, H()),
    null
  );
}
function Mu(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((on = H() + 500), dl && ht());
  }
}
function Ot(e) {
  nt !== null && nt.tag === 0 && !(R & 6) && qt();
  var t = R;
  R |= 1;
  var n = _e.transition,
    r = j;
  try {
    if (((_e.transition = null), (j = 1), e)) return e();
  } finally {
    (j = r), (_e.transition = n), (R = t), !(R & 6) && ht();
  }
}
function Fu() {
  (pe = Kt.current), F(Kt);
}
function xt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), qf(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var r = n;
      switch ((vu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Qr();
          break;
        case 3:
          rn(), F(ce), F(re), xu();
          break;
        case 5:
          _u(r);
          break;
        case 4:
          rn();
          break;
        case 13:
          F($);
          break;
        case 19:
          F($);
          break;
        case 10:
          Su(r.type._context);
          break;
        case 22:
        case 23:
          Fu();
      }
      n = n.return;
    }
  if (
    ((Z = e),
    (Q = e = ct(e.current, null)),
    (q = pe = t),
    (Y = 0),
    (Zn = null),
    (ju = vl = Lt = 0),
    (se = Rn = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var u = o.next;
          (o.next = l), (r.next = u);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function ba(e, t) {
  do {
    var n = Q;
    try {
      if ((wu(), (Tr.current = el), br)) {
        for (var r = U.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        br = !1;
      }
      if (
        ((Tt = 0),
        (G = K = U = null),
        (Ln = !1),
        (Yn = 0),
        (Ru.current = null),
        n === null || n.return === null)
      ) {
        (Y = 1), (Zn = t), (Q = null);
        break;
      }
      e: {
        var o = e,
          u = n.return,
          i = n,
          s = t;
        if (
          ((t = q),
          (i.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var f = s,
            m = i,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = Mi(u);
          if (g !== null) {
            (g.flags &= -257),
              Fi(g, u, i, o, t),
              g.mode & 1 && Di(o, f, t),
              (t = g),
              (s = f);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Di(o, f, t), Iu();
              break e;
            }
            s = Error(y(426));
          }
        } else if (I && i.mode & 1) {
          var E = Mi(u);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Fi(E, u, i, o, t),
              yu(ln(s, i));
            break e;
          }
        }
        (o = s = ln(s, i)),
          Y !== 4 && (Y = 2),
          Rn === null ? (Rn = [o]) : Rn.push(o),
          (o = u);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var c = Fa(o, s, t);
              Ni(o, c);
              break e;
            case 1:
              i = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (st === null || !st.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Ia(o, i, t);
                Ni(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      nc(n);
    } catch (k) {
      (t = k), Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function ec() {
  var e = tl.current;
  return (tl.current = el), e === null ? el : e;
}
function Iu() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    Z === null || (!(Lt & 268435455) && !(vl & 268435455)) || et(Z, q);
}
function ll(e, t) {
  var n = R;
  R |= 2;
  var r = ec();
  (Z !== e || q !== t) && ((Ae = null), xt(e, t));
  do
    try {
      Cd();
      break;
    } catch (l) {
      ba(e, l);
    }
  while (1);
  if ((wu(), (R = n), (tl.current = r), Q !== null)) throw Error(y(261));
  return (Z = null), (q = 0), Y;
}
function Cd() {
  for (; Q !== null; ) tc(Q);
}
function _d() {
  for (; Q !== null && !Xc(); ) tc(Q);
}
function tc(e) {
  var t = lc(e.alternate, e, pe);
  (e.memoizedProps = e.pendingProps),
    t === null ? nc(e) : (Q = t),
    (Ru.current = null);
}
function nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yd(n, t)), n !== null)) {
        (n.flags &= 32767), (Q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), (Q = null);
        return;
      }
    } else if (((n = vd(n, t, pe)), n !== null)) {
      Q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function kt(e, t, n) {
  var r = j,
    l = _e.transition;
  try {
    (_e.transition = null), (j = 1), xd(e, t, n, r);
  } finally {
    (_e.transition = l), (j = r);
  }
  return null;
}
function xd(e, t, n, r) {
  do qt();
  while (nt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (lf(e, o),
    e === Z && ((Q = Z = null), (q = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Sr ||
      ((Sr = !0),
      oc(Ur, function () {
        return qt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = _e.transition), (_e.transition = null);
    var u = j;
    j = 1;
    var i = R;
    (R |= 4),
      (Ru.current = null),
      wd(e, n),
      Za(n, e),
      Qf(_o),
      (Vr = !!Co),
      (_o = Co = null),
      (e.current = n),
      Sd(n),
      Gc(),
      (R = i),
      (j = u),
      (_e.transition = o);
  } else e.current = n;
  if (
    (Sr && ((Sr = !1), (nt = e), (rl = l)),
    (o = e.pendingLanes),
    o === 0 && (st = null),
    qc(n.stateNode),
    de(e, H()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (nl) throw ((nl = !1), (e = Ho), (Ho = null), e);
  return (
    rl & 1 && e.tag !== 0 && qt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Qo ? jn++ : ((jn = 0), (Qo = e))) : (jn = 0),
    ht(),
    null
  );
}
function qt() {
  if (nt !== null) {
    var e = Ms(rl),
      t = _e.transition,
      n = j;
    try {
      if (((_e.transition = null), (j = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (rl = 0), R & 6)) throw Error(y(331));
        var l = R;
        for (R |= 4, C = e.current; C !== null; ) {
          var o = C,
            u = o.child;
          if (C.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var f = i[s];
                for (C = f; C !== null; ) {
                  var m = C;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      On(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (C = h);
                  else
                    for (; C !== null; ) {
                      m = C;
                      var p = m.sibling,
                        g = m.return;
                      if ((Ya(m), m === f)) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (C = p);
                        break;
                      }
                      C = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var E = S.sibling;
                    (S.sibling = null), (S = E);
                  } while (S !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (C = u);
          else
            e: for (; C !== null; ) {
              if (((o = C), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    On(9, o, o.return);
                }
              var c = o.sibling;
              if (c !== null) {
                (c.return = o.return), (C = c);
                break e;
              }
              C = o.return;
            }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          u = C;
          var d = u.child;
          if (u.subtreeFlags & 2064 && d !== null) (d.return = u), (C = d);
          else
            e: for (u = a; C !== null; ) {
              if (((i = C), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hl(9, i);
                  }
                } catch (k) {
                  V(i, i.return, k);
                }
              if (i === u) {
                C = null;
                break e;
              }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (C = v);
                break e;
              }
              C = i.return;
            }
        }
        if (
          ((R = l), ht(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (j = n), (_e.transition = t);
    }
  }
  return !1;
}
function Gi(e, t, n) {
  (t = ln(n, t)),
    (t = Fa(e, t, 1)),
    (e = it(e, t, 1)),
    (t = oe()),
    e !== null && (bn(e, 1, t), de(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Gi(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Gi(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (st === null || !st.has(r)))
        ) {
          (e = ln(n, e)),
            (e = Ia(t, e, 1)),
            (t = it(t, e, 1)),
            (e = oe()),
            t !== null && (bn(t, 1, e), de(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Pd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Z === e &&
      (q & n) === n &&
      (Y === 4 || (Y === 3 && (q & 130023424) === q && 500 > H() - Du)
        ? xt(e, 0)
        : (ju |= n)),
    de(e, t);
}
function rc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = cr), (cr <<= 1), !(cr & 130023424) && (cr = 4194304))
      : (t = 1));
  var n = oe();
  (e = Ye(e, t)), e !== null && (bn(e, t, n), de(e, n));
}
function Nd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), rc(e, n);
}
function zd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), rc(e, n);
}
var lc;
lc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ce.current) ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ae = !1), hd(e, t, n);
      ae = !!(e.flags & 131072);
    }
  else (ae = !1), I && t.flags & 1048576 && ia(t, Xr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Or(e, t), (e = t.pendingProps);
      var l = en(t, re.current);
      Jt(t, n), (l = Nu(null, t, r, e, l, n));
      var o = zu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            fe(r) ? ((o = !0), Kr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Eu(t),
            (l.updater = pl),
            (t.stateNode = l),
            (l._reactInternals = t),
            jo(t, r, e, n),
            (t = Fo(null, t, r, !0, o, n)))
          : ((t.tag = 0), I && o && hu(t), le(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Or(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ld(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Mo(null, t, r, e, n);
            break e;
          case 1:
            t = Ui(null, t, r, e, n);
            break e;
          case 11:
            t = Ii(null, t, r, e, n);
            break e;
          case 14:
            t = $i(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Mo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ui(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Va(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          fa(e, t),
          Jr(t, r, null, n);
        var u = t.memoizedState;
        if (((r = u.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = ln(Error(y(423)), t)), (t = Ai(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ln(Error(y(424)), t)), (t = Ai(e, t, r, n, l));
            break e;
          } else
            for (
              he = ut(t.stateNode.containerInfo.firstChild),
                ve = t,
                I = !0,
                Oe = null,
                n = ha(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tn(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        va(t),
        e === null && Lo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (u = l.children),
        xo(r, l) ? (u = null) : o !== null && xo(r, o) && (t.flags |= 32),
        Aa(e, t),
        le(e, t, u, n),
        t.child
      );
    case 6:
      return e === null && Lo(t), null;
    case 13:
      return Wa(e, t, n);
    case 4:
      return (
        Cu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nn(t, null, r, n)) : le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ii(e, t, r, l, n)
      );
    case 7:
      return le(e, t, t.pendingProps, n), t.child;
    case 8:
      return le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (u = l.value),
          D(Gr, r._currentValue),
          (r._currentValue = u),
          o !== null)
        )
          if (De(o.value, u)) {
            if (o.children === l.children && !ce.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var i = o.dependencies;
              if (i !== null) {
                u = o.child;
                for (var s = i.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = He(-1, n & -n)), (s.tag = 2);
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var m = f.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (f.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Oo(o.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((u = o.return), u === null)) throw Error(y(341));
                (u.lanes |= n),
                  (i = u.alternate),
                  i !== null && (i.lanes |= n),
                  Oo(u, n, t),
                  (u = o.sibling);
              } else u = o.child;
              if (u !== null) u.return = o;
              else
                for (u = o; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((o = u.sibling), o !== null)) {
                    (o.return = u.return), (u = o);
                    break;
                  }
                  u = u.return;
                }
              o = u;
            }
        le(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jt(t, n),
        (l = xe(l)),
        (r = r(l)),
        (t.flags |= 1),
        le(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        $i(e, t, r, l, n)
      );
    case 15:
      return $a(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Or(e, t),
        (t.tag = 1),
        fe(r) ? ((e = !0), Kr(t)) : (e = !1),
        Jt(t, n),
        pa(t, r, l),
        jo(t, r, l, n),
        Fo(null, t, r, !0, e, n)
      );
    case 19:
      return Ba(e, t, n);
    case 22:
      return Ua(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function oc(e, t) {
  return Os(e, t);
}
function Td(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new Td(e, t, n, r);
}
function $u(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ld(e) {
  if (typeof e == "function") return $u(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ru)) return 11;
    if (e === lu) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Dr(e, t, n, r, l, o) {
  var u = 2;
  if (((r = e), typeof e == "function")) $u(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case Ft:
        return Pt(n.children, l, o, t);
      case nu:
        (u = 8), (l |= 8);
        break;
      case no:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = no), (e.lanes = o), e
        );
      case ro:
        return (e = Ce(13, n, t, l)), (e.elementType = ro), (e.lanes = o), e;
      case lo:
        return (e = Ce(19, n, t, l)), (e.elementType = lo), (e.lanes = o), e;
      case ms:
        return yl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ds:
              u = 10;
              break e;
            case ps:
              u = 9;
              break e;
            case ru:
              u = 11;
              break e;
            case lu:
              u = 14;
              break e;
            case Je:
              (u = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Pt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function yl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = ms),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zl(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function Jl(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Od(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ol(0)),
    (this.expirationTimes = Ol(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ol(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Uu(e, t, n, r, l, o, u, i, s) {
  return (
    (e = new Od(e, t, n, i, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ce(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Eu(o),
    e
  );
}
function Rd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function uc(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (jt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (fe(n)) return oa(e, n, t);
  }
  return t;
}
function ic(e, t, n, r, l, o, u, i, s) {
  return (
    (e = Uu(n, r, !0, e, l, o, u, i, s)),
    (e.context = uc(null)),
    (n = e.current),
    (r = oe()),
    (l = at(n)),
    (o = He(r, l)),
    (o.callback = t ?? null),
    it(n, o, l),
    (e.current.lanes = l),
    bn(e, l, r),
    de(e, r),
    e
  );
}
function gl(e, t, n, r) {
  var l = t.current,
    o = oe(),
    u = at(l);
  return (
    (n = uc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = He(o, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = it(l, t, u)),
    e !== null && (je(e, l, u, o), zr(e, l, u)),
    u
  );
}
function ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zi(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Au(e, t) {
  Zi(e, t), (e = e.alternate) && Zi(e, t);
}
function jd() {
  return null;
}
var sc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Vu(e) {
  this._internalRoot = e;
}
wl.prototype.render = Vu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  gl(e, t, null, null);
};
wl.prototype.unmount = Vu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function () {
      gl(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $s();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && As(e);
  }
};
function Wu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ji() {}
function Dd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var f = ol(u);
        o.call(f);
      };
    }
    var u = ic(t, r, e, 0, null, !1, !1, "", Ji);
    return (
      (e._reactRootContainer = u),
      (e[Ke] = u.current),
      Wn(e.nodeType === 8 ? e.parentNode : e),
      Ot(),
      u
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function () {
      var f = ol(s);
      i.call(f);
    };
  }
  var s = Uu(e, 0, !1, null, null, !1, !1, "", Ji);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function () {
      gl(t, s, n, r);
    }),
    s
  );
}
function kl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var u = o;
    if (typeof l == "function") {
      var i = l;
      l = function () {
        var s = ol(u);
        i.call(s);
      };
    }
    gl(t, u, e, l);
  } else u = Dd(n, t, e, l, r);
  return ol(u);
}
Fs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cn(t.pendingLanes);
        n !== 0 &&
          (iu(t, n | 1), de(t, H()), !(R & 6) && ((on = H() + 500), ht()));
      }
      break;
    case 13:
      Ot(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = oe();
          je(r, e, 1, l);
        }
      }),
        Au(e, 1);
  }
};
su = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = oe();
      je(t, e, 134217728, n);
    }
    Au(e, 134217728);
  }
};
Is = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = oe();
      je(n, e, t, r);
    }
    Au(e, t);
  }
};
$s = function () {
  return j;
};
Us = function (e, t) {
  var n = j;
  try {
    return (j = e), t();
  } finally {
    j = n;
  }
};
ho = function (e, t, n) {
  switch (t) {
    case "input":
      if ((io(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = fl(r);
            if (!l) throw Error(y(90));
            vs(r), io(r, l);
          }
        }
      }
      break;
    case "textarea":
      gs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yt(e, !!n.multiple, t, !1);
  }
};
xs = Mu;
Ps = Ot;
var Md = { usingClientEntryPoint: !1, Events: [tr, At, fl, Cs, _s, Mu] },
  wn = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Fd = {
    bundleType: wn.bundleType,
    version: wn.version,
    rendererPackageName: wn.rendererPackageName,
    rendererConfig: wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ts(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wn.findFiberByHostInstance || jd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kr.isDisabled && kr.supportsFiber)
    try {
      (il = kr.inject(Fd)), ($e = kr);
    } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wu(t)) throw Error(y(200));
  return Rd(e, t, null, n);
};
ge.createRoot = function (e, t) {
  if (!Wu(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = sc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Uu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    new Vu(t)
  );
};
ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Ts(t)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
  return Ot(e);
};
ge.hydrate = function (e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return kl(null, e, t, !0, n);
};
ge.hydrateRoot = function (e, t, n) {
  if (!Wu(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    u = sc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = ic(t, null, e, 1, n ?? null, l, !1, o, u)),
    (e[Ke] = t.current),
    Wn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new wl(t);
};
ge.render = function (e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return kl(null, e, t, !1, n);
};
ge.unmountComponentAtNode = function (e) {
  if (!Sl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Ot(function () {
        kl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
ge.unstable_batchedUpdates = Mu;
ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Sl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return kl(e, t, n, !1, r);
};
ge.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = ge);
})(Rc);
var qi = Mr;
(bl.createRoot = qi.createRoot), (bl.hydrateRoot = qi.hydrateRoot);
const ul = Symbol.for("r2wc.reactRender"),
  bi = Symbol.for("r2wc.shouldRender"),
  Er = Symbol.for("r2wc.root");
function Id(e = "") {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function $d(e = "") {
  return e.replace(/-([a-z0-9])/g, function (t) {
    return t[1].toUpperCase();
  });
}
var es = {
  expando: function (e, t, n) {
    Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return n;
      },
      set: function (r) {
        (n = r), this[ul]();
      },
    }),
      e[ul]();
  },
};
function Ud(e, t, n, r = {}) {
  var l = { isConnected: "isConnected" in HTMLElement.prototype },
    o = !1,
    u = function () {
      var f = Reflect.construct(HTMLElement, arguments, this.constructor);
      return (
        typeof r.shadow == "string"
          ? f.attachShadow({ mode: r.shadow })
          : r.shadow &&
            (console.warn(
              'Specifying the "shadow" option as a boolean is deprecated and will be removed in a future version.'
            ),
            f.attachShadow({ mode: "open" })),
        f
      );
    },
    i = Object.create(HTMLElement.prototype);
  i.constructor = u;
  var s = new Proxy(i, {
    has: function (f, m) {
      return m in e.propTypes || m in i;
    },
    set: function (f, m, h, p) {
      return (
        o && (l[m] = !0),
        typeof m == "symbol" || l[m] || m in f
          ? (e.propTypes && m in e.propTypes && es.expando(p, m, h),
            Reflect.set(f, m, h, p))
          : (es.expando(p, m, h), !0)
      );
    },
    getOwnPropertyDescriptor: function (f, m) {
      var h = Reflect.getOwnPropertyDescriptor(f, m);
      if (h) return h;
      if (m in e.propTypes)
        return {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: void 0,
        };
    },
  });
  return (
    (u.prototype = s),
    (i.connectedCallback = function () {
      (this[bi] = !0), this[ul]();
    }),
    (i.disconnectedCallback = function () {
      typeof n.createRoot == "function"
        ? this[Er].unmount()
        : n.unmountComponentAtNode(this);
    }),
    (i[ul] = function () {
      if (this[bi] === !0) {
        var f = {};
        Object.keys(this).forEach(function (p) {
          l[p] !== !1 && (f[p] = this[p]);
        }, this),
          (o = !0);
        const m = r.shadow ? this.shadowRoot : this,
          h = t.createElement(e, f);
        typeof n.createRoot == "function"
          ? (this[Er] || (this[Er] = n.createRoot(m)), this[Er].render(h))
          : n.render(h, m),
          (o = !1);
      }
    }),
    e.propTypes &&
      ((u.observedAttributes = r.dashStyleAttributes
        ? Object.keys(e.propTypes).map(function (f) {
            return Id(f);
          })
        : Object.keys(e.propTypes)),
      (i.attributeChangedCallback = function (f, m, h) {
        var p = r.dashStyleAttributes ? $d(f) : f;
        this[p] = h;
      })),
    u
  );
}
var Jn = {},
  Ad = {
    get exports() {
      return Jn;
    },
    set exports(e) {
      Jn = e;
    },
  },
  El = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd = me,
  Wd = Symbol.for("react.element"),
  Bd = Symbol.for("react.fragment"),
  Hd = Object.prototype.hasOwnProperty,
  Qd = Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r,
    l = {},
    o = null,
    u = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (u = t.ref);
  for (r in t) Hd.call(t, r) && !Kd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Wd,
    type: e,
    key: o,
    ref: u,
    props: l,
    _owner: Qd.current,
  };
}
El.Fragment = Bd;
El.jsx = ac;
El.jsxs = ac;
(function (e) {
  e.exports = El;
})(Ad);
const Yd = Jn.Fragment,
  Sn = Jn.jsx,
  gt = Jn.jsxs,
  Xd = `.global{all:initial;display:flex;flex-direction:column;justify-content:center;align-items:center}p .name{font-weight:700;color:orange}button{background-color:red}
`;
var Ee = {},
  Gd = {
    get exports() {
      return Ee;
    },
    set exports(e) {
      Ee = e;
    },
  },
  Zd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Jd = Zd,
  qd = Jd;
function cc() {}
function fc() {}
fc.resetWarningCache = cc;
var bd = function () {
  function e(r, l, o, u, i, s) {
    if (s !== qd) {
      var f = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((f.name = "Invariant Violation"), f);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: fc,
    resetWarningCache: cc,
  };
  return (n.PropTypes = n), n;
};
Gd.exports = bd();
var ep =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function dc(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var tp = dc(function (e) {
    (function (t) {
      var n = function (E, c, a) {
          if (!s(c) || m(c) || h(c) || p(c) || i(c)) return c;
          var d,
            v = 0,
            k = 0;
          if (f(c))
            for (d = [], k = c.length; v < k; v++) d.push(n(E, c[v], a));
          else
            for (var _ in ((d = {}), c))
              Object.prototype.hasOwnProperty.call(c, _) &&
                (d[E(_, a)] = n(E, c[_], a));
          return d;
        },
        r = function (E) {
          return g(E)
            ? E
            : (E = E.replace(/[\-_\s]+(.)?/g, function (c, a) {
                return a ? a.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + E.substr(1);
        },
        l = function (E) {
          var c = r(E);
          return c.substr(0, 1).toUpperCase() + c.substr(1);
        },
        o = function (E, c) {
          return (function (a, d) {
            var v = (d = d || {}).separator || "_",
              k = d.split || /(?=[A-Z])/;
            return a.split(k).join(v);
          })(E, c).toLowerCase();
        },
        u = Object.prototype.toString,
        i = function (E) {
          return typeof E == "function";
        },
        s = function (E) {
          return E === Object(E);
        },
        f = function (E) {
          return u.call(E) == "[object Array]";
        },
        m = function (E) {
          return u.call(E) == "[object Date]";
        },
        h = function (E) {
          return u.call(E) == "[object RegExp]";
        },
        p = function (E) {
          return u.call(E) == "[object Boolean]";
        },
        g = function (E) {
          return (E -= 0) == E;
        },
        w = function (E, c) {
          var a = c && "process" in c ? c.process : c;
          return typeof a != "function"
            ? E
            : function (d, v) {
                return a(d, E, v);
              };
        },
        S = {
          camelize: r,
          decamelize: o,
          pascalize: l,
          depascalize: o,
          camelizeKeys: function (E, c) {
            return n(w(r, c), E);
          },
          decamelizeKeys: function (E, c) {
            return n(w(o, c), E, c);
          },
          pascalizeKeys: function (E, c) {
            return n(w(l, c), E);
          },
          depascalizeKeys: function () {
            return this.decamelizeKeys.apply(this, arguments);
          },
        };
      e.exports ? (e.exports = S) : (t.humps = S);
    })(ep);
  }).decamelize,
  np = dc(function (e) {
    function t() {
      return (
        (e.exports = t =
          Object.assign ||
          function (n) {
            for (var r = 1; r < arguments.length; r++) {
              var l = arguments[r];
              for (var o in l)
                Object.prototype.hasOwnProperty.call(l, o) && (n[o] = l[o]);
            }
            return n;
          }),
        t.apply(this, arguments)
      );
    }
    e.exports = t;
  }),
  rp = function (e) {
    if (Array.isArray(e)) return e;
  },
  lp = function (e, t) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) {
      var n = [],
        r = !0,
        l = !1,
        o = void 0;
      try {
        for (
          var u, i = e[Symbol.iterator]();
          !(r = (u = i.next()).done) && (n.push(u.value), !t || n.length !== t);
          r = !0
        );
      } catch (s) {
        (l = !0), (o = s);
      } finally {
        try {
          r || i.return == null || i.return();
        } finally {
          if (l) throw o;
        }
      }
      return n;
    }
  },
  ts = function (e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  },
  op = function (e, t) {
    if (e) {
      if (typeof e == "string") return ts(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set"
          ? Array.from(e)
          : n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? ts(e, t)
          : void 0
      );
    }
  },
  up = function () {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  },
  ip = function (e, t) {
    return rp(e) || lp(e, t) || op(e, t) || up();
  },
  sp = function (e, t) {
    if (e == null) return {};
    var n,
      r,
      l = {},
      o = Object.keys(e);
    for (r = 0; r < o.length; r++)
      (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l;
  },
  ap = function (e, t) {
    if (e == null) return {};
    var n,
      r,
      l = sp(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++)
        (n = o[r]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
    }
    return l;
  },
  cp = me.createContext(null);
function Xo(e) {
  var t = e.root,
    n = e.children;
  return Mr.createPortal(n, t);
}
function fp(e) {
  var t = me.forwardRef(function (n, r) {
    var l,
      o,
      u = n.mode,
      i = n.delegatesFocus,
      s = n.styleSheets,
      f = n.ssr,
      m = n.children,
      h = ap(n, ["mode", "delegatesFocus", "styleSheets", "ssr", "children"]),
      p =
        ((o = me.useRef((l = r) && l.current)),
        me.useEffect(
          function () {
            l && (l.current = o.current);
          },
          [l]
        ),
        o),
      g = me.useState(null),
      w = ip(g, 2),
      S = w[0],
      E = w[1],
      c = "node_".concat(u).concat(i);
    return (
      me.useLayoutEffect(
        function () {
          if (p.current)
            try {
              if ((typeof r == "function" && r(p.current), f)) {
                var a = p.current.shadowRoot;
                return void E(a);
              }
              var d = p.current.attachShadow({ mode: u, delegatesFocus: i });
              s.length > 0 && (d.adoptedStyleSheets = s), E(d);
            } catch (v) {
              (function (k) {
                var _ = k.error,
                  P = k.styleSheets,
                  N = k.root;
                switch (_.name) {
                  case "NotSupportedError":
                    P.length > 0 && (N.adoptedStyleSheets = P);
                    break;
                  default:
                    throw _;
                }
              })({ error: v, styleSheets: s, root: S });
            }
        },
        [r, p, s]
      ),
      wt.createElement(
        wt.Fragment,
        null,
        wt.createElement(
          e.tag,
          np({ key: c, ref: p }, h),
          (S || f) &&
            wt.createElement(
              cp.Provider,
              { value: S },
              f
                ? wt.createElement(
                    "template",
                    { shadowroot: "open" },
                    e.render({ root: S, ssr: f, children: m })
                  )
                : wt.createElement(
                    Xo,
                    { root: S },
                    e.render({ root: S, ssr: f, children: m })
                  )
            )
        )
      )
    );
  });
  return (
    (t.propTypes = {
      mode: Ee.oneOf(["open", "closed"]),
      delegatesFocus: Ee.bool,
      styleSheets: Ee.arrayOf(Ee.instanceOf(globalThis.CSSStyleSheet)),
      ssr: Ee.bool,
      children: Ee.node,
    }),
    (t.defaultProps = {
      mode: "open",
      delegatesFocus: !1,
      styleSheets: [],
      ssr: !1,
      children: null,
    }),
    t
  );
}
(Xo.propTypes = { root: Ee.object.isRequired, children: Ee.node }),
  (Xo.defaultProps = { children: null });
var ql = new Map();
function dp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "core",
    n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : function (r) {
            return r.children;
          };
  return new Proxy(e, {
    get: function (r, l) {
      var o = tp(l, { separator: "-" }),
        u = "".concat(t, "-").concat(o);
      return ql.has(u) || ql.set(u, fp({ tag: o, render: n })), ql.get(u);
    },
  });
}
var pp = dp();
const pc = (e) => {
  const [t, n] = me.useState();
  me.useEffect(() => {
    (async () => {
      const u = await r();
      n(u);
    })();
  }, []);
  const r = async () =>
      (await fetch("https://swapi.dev/api/starships/9/")).json(),
    l = () => {
      var o = new CustomEvent("onWidgetBtnClick", {
        detail: "Example of an event from the web component",
      });
      document.getElementById(e.widgetid).dispatchEvent(o);
    };
  return gt(pp.div, {
    id: e.widgetid,
    children: [
      Sn("style", { type: "text/css", children: Xd }),
      gt("div", {
        className: "global",
        children: [
          Sn("h1", { children: "React web component v5" }),
          Sn("h2", { children: e.title }),
          gt("h3", { children: ["Widget id: ", e.widgetid] }),
          t &&
            gt(Yd, {
              children: [
                gt("p", {
                  children: [
                    "Name: ",
                    Sn("span", { className: "name", children: t.name }),
                  ],
                }),
                gt("p", { children: ["Model: ", t.model] }),
                gt("p", { children: ["Length: ", t.length] }),
              ],
            }),
          Sn("button", { onClick: l, children: "Click me" }),
        ],
      }),
    ],
  });
};
pc.propTypes = { title: Ee.string, widgetid: Ee.string };
customElements.define("react-starwars", Ud(pc, wt, bl));
