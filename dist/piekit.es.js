import { jsx as l, jsxs as b } from "react/jsx-runtime";
function c(t) {
  var o, r, e = "";
  if (typeof t == "string" || typeof t == "number") e += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (o = 0; o < s; o++) t[o] && (r = c(t[o])) && (e && (e += " "), e += r);
  } else for (r in t) t[r] && (e && (e += " "), e += r);
  return e;
}
function u() {
  for (var t, o, r = 0, e = "", s = arguments.length; r < s; r++) (t = arguments[r]) && (o = c(t)) && (e && (e += " "), e += o);
  return e;
}
const f = ({
  variant: t = "primary",
  alignment: o = "center",
  appearance: r = "solid",
  size: e = "md",
  full: s = !1,
  className: n,
  testId: i,
  children: d,
  ...a
}) => /* @__PURE__ */ l(
  "button",
  {
    ...a,
    "data-testid": i,
    className: u(
      "font-semibold transition-all duration-150",
      "inline-flex items-center justify-center flex-shrink-0 gap-x-1.5",
      "focus:outline-none focus-visible:outline-none focus:ring-2",
      "disabled:cursor-not-allowed disabled:opacity-30",
      {
        // size
        "px-2.5 py-1.5 text-sm rounded-lg": e === "xs",
        "px-4 py-2 text-sm rounded-lg": e === "sm",
        "px-4.5 py-2.5 text-base rounded-lg": e === "md" || e === void 0,
        "px-6 py-3 text-lg rounded-xl": e === "lg",
        // solid
        "text-white": r === "solid",
        "bg-primary-900 enabled:hover:bg-primary-950 enabled:focus:ring-primary-500/30": r === "solid" && t === "primary",
        "bg-success-500 enabled:hover:bg-success-600 enabled:focus:ring-success-500/30": r === "solid" && t === "success",
        "bg-error-500 enabled:hover:bg-error-600 enabled:focus:ring-error-500/30": r === "solid" && t === "error",
        // outline
        "bg-transparent border enabled:hover:text-white": r === "outline",
        "text-primary-900 border-primary-900 enabled:hover:bg-primary-900 enabled:focus:ring-primary-500/40": r === "outline" && t === "primary",
        "text-success-500 border-success-500 enabled:hover:bg-success-500 enabled:focus:ring-success-500/40": r === "outline" && t === "success",
        "text-error-500 border-error-500 enabled:hover:bg-error-500 enabled:focus:ring-error-500/40": r === "outline" && t === "error",
        // full
        "w-full": s,
        "justify-start": o === "left",
        "justify-center": o === "center",
        "justify-end": o === "right"
      },
      n
    ),
    children: d
  }
), m = ({
  className: t,
  testId: o,
  children: r,
  ...e
}) => /* @__PURE__ */ l(
  "div",
  {
    ...e,
    className: u(
      "p-6 rounded-xl bg-white text-gray-950 shadow-lg",
      {},
      t
    ),
    "data-testid": o,
    children: r
  }
), y = ({
  className: t,
  label: o,
  testId: r,
  hasError: e = !1,
  errorMessages: s = [],
  ...n
}) => /* @__PURE__ */ b(
  "div",
  {
    "data-testid": `${r}-form`,
    children: [
      o === void 0 ? null : /* @__PURE__ */ l(
        "label",
        {
          className: "block mb-1 text-gray-900 font-semibold",
          "data-testid": `${r}-label`,
          children: o
        }
      ),
      /* @__PURE__ */ l(
        "input",
        {
          ...n,
          className: u(
            "block w-full rounded-lg px-2.5 py-1.5 border",
            "bg-white shadow-sm",
            "disabled:cursor-not-allowed disabled:opacity-60 outline-none",
            "ring-0 focus:ring-2",
            {
              "focus:ring-gray-500/30 text-gray-900 placeholder-gray-400 border-gray-900 caret-gray-500": !e,
              "focus:ring-red-500/30 text-red-500 placeholder-red-300 border-red-500 caret-red-500": e
            },
            t
          ),
          "data-testid": `${r}-input`
        }
      ),
      e && s.length > 0 ? s.map((i, d) => /* @__PURE__ */ l(
        "p",
        {
          className: "text-sm mt-1 text-red-300",
          "data-testid": `${r}-error-msg-${d}`,
          children: i
        },
        d
      )) : null
    ]
  }
);
export {
  f as Button,
  m as Card,
  y as FormInput
};
