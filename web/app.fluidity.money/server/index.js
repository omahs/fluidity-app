"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(server_exports);
var import_architect = require("@remix-run/architect");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), Sentry = __toESM(require("@sentry/remix")), import_react2 = require("react"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
{
  let dsn = "https://6e55f2609b29473599d99a87221c60dc@o1103433.ingest.sentry.io/6745508";
  dsn || console.error("DSN not set!"), Sentry.init({
    dsn,
    tracesSampleRate: 1,
    integrations: [
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.remixRouterInstrumentation(
          import_react2.useEffect,
          import_react.useLocation,
          import_react.useMatches
        )
      })
    ]
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => root_default,
  links: () => links2,
  loader: () => loader,
  meta: () => meta
});
var import_react13 = require("@remix-run/react"), import_remix = require("@sentry/remix"), import_tracing = require("@sentry/tracing"), import_remix2 = require("@sentry/remix");

// app/global-styles.css
var global_styles_default = "/_static/build/_assets/global-styles-CSFXEZMA.css";

// ../surfing/dist/style.css
var style_default = "/_static/build/_assets/style-XIKPT2CP.css";

// app/components/Table/index.tsx
var import_react3 = require("@remix-run/react"), import_framer_motion = require("framer-motion"), import_surfing = require("@fluidity-money/surfing"), import_jsx_runtime2 = require("react/jsx-runtime"), Table = (props) => {
  let {
    count,
    itemName,
    pagination,
    data,
    renderRow,
    headings,
    filters,
    onFilter,
    activeFilterIndex,
    loaded,
    showLoadingAnimation = !1
  } = props, { rowsPerPage, page } = pagination, isTransition = (0, import_react3.useTransition)(), cappedPageCount = Math.min(240, count), pageCount = Math.ceil(cappedPageCount / rowsPerPage), startIndex = (page - 1) * rowsPerPage + 1, endIndex = Math.min(page * rowsPerPage, cappedPageCount);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "transactions-header", children: [
      filters && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "transaction-filters", children: filters.map((filter, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_surfing.GeneralButton,
        {
          version: "secondary",
          buttontype: "text",
          size: "medium",
          handleClick: () => onFilter == null ? void 0 : onFilter(i),
          className: activeFilterIndex === i ? "active-filter-btn" : "inactive-filter-btn",
          children: filter.name
        },
        `filter-${filter.name}`
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_surfing.Text, { children: [
        cappedPageCount > 0 ? `${startIndex} - ${endIndex}` : 0,
        " of",
        " ",
        cappedPageCount,
        " ",
        itemName
      ] })
    ] }),
    data.length === 0 ? loaded !== !0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      "Fetching table data...",
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "center-table-loading-anim loader-dots", children: showLoadingAnimation && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_surfing.LoadingDots, {}) })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "center-table-loading-anim loader-dots", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_surfing.Text, { size: "lg", children: "No reward record found!" }) }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("table", { className: "transaction-table", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tr", { children: headings.map((heading) => {
        let classProps = `heading ${heading.alignRight ? "alignRight" : "alignLeft"}`;
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { className: classProps, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_surfing.Text, { children: heading.name }) }, heading.name);
      }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_framer_motion.AnimatePresence, { mode: "wait", initial: !1, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_framer_motion.motion.tbody,
        {
          initial: "enter",
          animate: isTransition.state === "idle" ? "enter" : "transitioning",
          exit: "exit",
          variants: {
            enter: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.05
              }
            },
            exit: {
              opacity: 0,
              transition: {
                when: "afterChildren",
                staggerChildren: 0.05
              }
            },
            transitioning: {}
          },
          children: data.map((row, i) => renderRow({ data: row, index: i }))
        },
        `page-${page}`
      ) })
    ] }),
    pageCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_framer_motion.motion.div, { className: "pagination", layout: "position", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "pagination-numbers", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react3.Link,
          {
            className: page === 1 ? "current-pagination" : "pagination-number",
            to: `?${pagination.pageQuery || "page"}=${1}`,
            children: 1
          },
          `page-${1}`
        ),
        pageCount > 4 && page > 4 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "..." }),
        Array(5).fill(1).map((_, i) => i + page - 2).filter((pageNo) => pageNo > 1 && pageNo < pageCount).map((pageNo) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react3.Link,
          {
            className: page === pageNo ? "current-pagination" : "pagination-number",
            to: `?${pagination.pageQuery || "page"}=${pageNo}`,
            children: pageNo
          },
          `page-${pageNo}`
        )),
        pageCount > 4 && page < pageCount - 3 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "..." }),
        pageCount > 1 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react3.Link,
          {
            className: page === pageCount ? "current-pagination" : "pagination-number",
            to: `?${pagination.pageQuery || "page"}=${pageCount}`,
            children: pageCount
          },
          `page-${pageCount}`
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "pagination-arrows", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react3.Link,
          {
            to: page === 1 ? "" : `?${pagination.pageQuery || "page"}=${page - 1}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "img",
              {
                style: { width: 16 },
                src: page === 1 ? "/images/icons/arrowLeftDark.svg" : "/images/icons/arrowLeftWhite.svg",
                className: page === 1 ? "pagination-arrow-off" : "pagination-arrow"
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react3.Link,
          {
            to: page === pageCount ? "" : `?${pagination.pageQuery || "page"}=${page + 1}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "img",
              {
                style: { width: 16 },
                src: page === pageCount ? "/images/icons/arrowRightDark.svg" : "/images/icons/arrowRightWhite.svg",
                className: page === pageCount ? "pagination-arrow-off" : "pagination-arrow"
              }
            )
          }
        )
      ] })
    ] })
  ] });
}, Table_default = Table;

// app/components/LabelledValue/index.tsx
var import_surfing2 = require("@fluidity-money/surfing");
var import_jsx_runtime3 = require("react/jsx-runtime");
var LabelledValue = ({
  icon,
  className,
  children,
  label
}) => {
  let classProps = `container ${className || ""}`, { width } = (0, import_surfing2.useViewport)(), mobileView = width <= 500;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: classProps, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_surfing2.Text, { size: mobileView ? "sm" : "md", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "value", children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: icon }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_surfing2.Display, { className: "row-value", size: mobileView ? "xxxs" : "xxs", children })
    ] })
  ] });
}, LabelledValue_default = LabelledValue;

// app/components/ProviderCard/index.tsx
var import_surfing3 = require("@fluidity-money/surfing");
var import_jsx_runtime4 = require("react/jsx-runtime"), ProviderCard = ({ name, prize, avgPrize, size }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_surfing3.Card, { className: size === "lg" ? "provider-card-large" : "provider-card-medium", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "card-left", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ProviderIcon_default, { provider: name }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "card-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_surfing3.Heading, { className: "card-token-name", as: "h5", children: name === "Fluidity" ? "Transacting \u0192Assets" : name }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_surfing3.Text, { children: [
        (0, import_surfing3.numberToMonetaryString)(avgPrize),
        " Avg prize/tx"
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "card-section", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_surfing3.Text, { prominent: !0, children: (0, import_surfing3.numberToMonetaryString)(prize) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_surfing3.Text, { children: "Top prize" })
  ] })
] }), ProviderCard_default = ProviderCard;

// app/components/ProvideLiquidity/index.tsx
var import_surfing4 = require("@fluidity-money/surfing"), import_framer_motion3 = require("framer-motion"), import_react5 = require("@remix-run/react"), import_react6 = require("react");

// app/components/BloomEffect.tsx
var import_framer_motion2 = require("framer-motion"), import_react4 = require("react"), import_tinycolor2 = __toESM(require("tinycolor2")), import_jsx_runtime5 = require("react/jsx-runtime"), BloomEffect = (props) => {
  let { color: colorStr = "#fff", type = "static", blendMode } = props, [colorStart, colorEnd] = (0, import_react4.useMemo)(() => {
    let _color = new import_tinycolor2.default(colorStr);
    return [
      _color.setAlpha(0.8).toRgbString(),
      _color.setAlpha(0).toRgbString()
    ];
  }, [colorStr]), BloomEffectVariants = {
    initial: {
      background: `radial-gradient(circle, ${colorStart} 0%, ${colorEnd} 0%)`
    },
    static: {
      background: `radial-gradient(circle, ${colorStart} 0%, ${colorEnd} 70%)`
    },
    pulsing: {
      transition: {
        repeat: 1 / 0,
        ease: "easeInOut",
        duration: 2
      },
      background: [
        `radial-gradient(circle, ${colorStart} 0%, ${colorEnd} 70%)`,
        `radial-gradient(circle, ${colorStart} 0%, ${colorEnd} 60%)`,
        `radial-gradient(circle, ${colorStart} 0%, ${colorEnd} 70%)`
      ]
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_framer_motion2.motion.div,
    {
      style: {
        position: "absolute",
        inset: 0,
        mixBlendMode: blendMode
      },
      variants: BloomEffectVariants,
      initial: "initial",
      animate: type
    }
  );
}, BloomEffect_default = BloomEffect;

// app/components/ProvideLiquidity/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), parent = {
  variantA: { scale: 1 },
  variantB: { scale: 1 }
}, child = {
  variantA: { scale: 1 },
  variantB: { scale: 1.05 }
}, useClickOutside = (ref, handleClick) => {
  (0, import_react6.useEffect)(() => {
    let handleClickOutside = (event) => {
      ref.current && !ref.current.contains(event.target) && handleClick();
    };
    return document.addEventListener("mousedown", handleClickOutside), () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}, ProvideLiquidity = () => {
  let { provider, network, tokensConfig } = (0, import_react5.useLoaderData)(), fluidTokens = tokensConfig[network].tokens.filter(
    (token) => token.isFluidOf
  ), [poolToken, setPoolToken] = (0, import_react6.useState)(fluidTokens[0]), providers = network === "ethereum" ? provider.ethereum.providers : provider.solana.providers, liqidityProviders = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "liquidity-providers", children: providers.map((provider2) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_framer_motion3.motion.a,
    {
      href: provider2.link[poolToken.symbol],
      rel: "noopener noreferrer",
      target: "_blank",
      variants: parent,
      initial: "variantA",
      whileHover: "variantB",
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_framer_motion3.motion.img,
        {
          src: provider2.img,
          variants: child,
          style: { width: 72, height: 72 }
        }
      )
    },
    provider2.name
  )) }), [openDropdown, setOpenDropdown] = (0, import_react6.useState)(!1), dropdownRef = (0, import_react6.useRef)(null);
  useClickOutside(
    dropdownRef,
    () => setTimeout(() => setOpenDropdown(!1), 200)
  );
  let dropdownOptions = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "dropdown-options", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { children: fluidTokens.map((option) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "button",
    {
      className: "token-option",
      onClick: () => {
        setPoolToken(() => option);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_surfing4.Text, { size: "xl", prominent: !0, children: option.symbol }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { style: { width: 30, height: 30 }, src: option.logo })
      ]
    }
  ) }, `${option.name} ${option.logo}`)) }) });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_surfing4.Card,
    {
      id: "provide-liquidity",
      className: "card-outer",
      component: "div",
      rounded: !0,
      type: "box",
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "card-inner", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "provide-liquidity-left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
            liqidityProviders,
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_surfing4.Heading, { as: "h2", className: "provide-heading", children: [
              "Provide Liquidity for",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                "button",
                {
                  ref: dropdownRef,
                  className: "open-provider-dropdown",
                  onClick: () => {
                    setOpenDropdown(!openDropdown);
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_surfing4.Heading, { as: "h1", className: "fluid-liquidity-token", children: `\u0192${poolToken.symbol.slice(1)}` }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      "img",
                      {
                        src: "/images/icons/triangleDown.svg",
                        style: { width: 18, height: 8 }
                      }
                    ),
                    openDropdown && dropdownOptions
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_surfing4.Text, { size: "lg", children: "Make your assets work harder for your rewards. Get involved." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "provide-liquidity-right", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "provide-liquidity-right-images", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(BloomEffect_default, { color: poolToken.colour, type: "static" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "dashed-circle" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "img",
            {
              src: poolToken.logo,
              style: {
                height: 110,
                width: 110,
                position: "absolute",
                transform: "translate(41%, 41%)"
              }
            }
          )
        ] }) })
      ] })
    }
  );
}, ProvideLiquidity_default = ProvideLiquidity;

// app/components/ProviderIcon/index.tsx
var import_react7 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime"), providerNames = {
  none: "Fluidity",
  uniswap_v2: "Uniswap",
  balancer_v2: "Balancer",
  oneinch_v1: "Oneinch",
  oneinch_v2: "Oneinch",
  oneinch_fixedrate: "Oneinch",
  mooniswap: "Mooniswap",
  dodo_v2: "Dodo",
  curve: "Curve",
  multichain: "Multichain",
  xy_finance: "XY Finance",
  spl: "Fluidity",
  saber: "Saber",
  orca: "Orca",
  raydium: "Raydium",
  aldrinv1: "Aldrin",
  aldrinv2: "Aldrin",
  lifinity: "Lifinity",
  mercurial: "Mercurial"
}, providerToDisplayName = (name) => providerNames[name], ProviderIcon = ({ provider }) => {
  let { icons } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { className: "provider-img", src: icons[provider], alt: "" });
}, ProviderIcon_default = ProviderIcon;

// app/components/ToolTip/ToolProvider.tsx
var import_react10 = require("react"), import_react_dom = require("react-dom");

// app/components/ToolTip/ToolContext.tsx
var import_react8 = require("react"), ToolContext = (0, import_react8.createContext)({}), useToolTip = () => (0, import_react8.useContext)(ToolContext);

// app/components/ToolTip/ToolTip.tsx
var import_react9 = require("react");

// app/components/ToolTip/styles.css
var styles_default = "/_static/build/_assets/styles-ZFNCSQX7.css";

// app/components/ToolTip/ToolTip.tsx
var import_surfing5 = require("@fluidity-money/surfing"), import_framer_motion4 = require("framer-motion"), import_jsx_runtime8 = require("react/jsx-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }], rightIn = {
  visible: {
    opacity: 1,
    transform: "translateX(0px)",
    transition: { duration: 0.2 }
  },
  hidden: { opacity: 0, transform: "translateX(180px)" }
}, ToolTip = (props) => {
  let [width, setNewWidth] = (0, import_react9.useState)(0), savedCallback = (0, import_react9.useRef)(props.close), control = (0, import_framer_motion4.useAnimation)();
  return (0, import_react9.useEffect)(() => {
    control.start("visible"), setTimeout(() => {
      control.set("hidden");
    }, 7500);
    let width2 = 0, id = setInterval(() => {
      width2 < 100 && setNewWidth(width2 += 0.13333333);
    }, 10);
    setTimeout(() => {
      clearInterval(id);
    }, 7500);
  }, []), (0, import_react9.useEffect)(() => {
    savedCallback.current = props.close;
  }, [props.close]), (0, import_react9.useEffect)(() => {
    if (7500 === null)
      return;
    let id = setTimeout(() => savedCallback.current(), 7500);
    return () => clearTimeout(id);
  }, [7500]), /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_framer_motion4.motion.div,
      {
        className: "tooltip",
        animate: control,
        initial: "hidden",
        variants: rightIn,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "div",
          {
            className: "tooltip_content",
            style: {
              background: `linear-gradient(0.20turn, ${props.bgColor}, #000, ${props.bgColor})`
            },
            children: [
              props.children,
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { onClick: props.close, className: "tool_cancel_btn", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_surfing5.Text, { prominent: !0, size: "lg", children: "x" }) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "div",
      {
        className: "toolkit_duration_bar",
        style: {
          width: `${width}%`
        }
      }
    )
  ] });
};

// app/components/ToolTip/ToolProvider.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), ToolProvider = (props) => {
  let [toolTips, setToolTips] = (0, import_react10.useState)([]), [portalElement, setPortalElement] = (0, import_react10.useState)();
  (0, import_react10.useEffect)(() => {
    setPortalElement(document.body);
  });
  let open = (bgColor, content) => setToolTips((currentTooltip) => [
    ...currentTooltip,
    { id: String(Date.now()), content, bgColor }
  ]), close = (id) => setToolTips(
    (currentTooltip) => currentTooltip.filter((toolTip) => toolTip.id !== id)
  ), contextValue = (0, import_react10.useMemo)(() => ({ open }), []);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(ToolContext.Provider, { value: contextValue, children: [
    props.children,
    portalElement && (0, import_react_dom.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "tooltip_container", children: toolTips.map((item) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        ToolTip,
        {
          bgColor: item.bgColor,
          close: () => close(item.id),
          children: item.content
        },
        item.id
      )) }),
      portalElement
    )
  ] });
};

// app/components/ToolTip/ToolTipContent.tsx
var import_surfing6 = require("@fluidity-money/surfing"), import_jsx_runtime10 = require("react/jsx-runtime");
var ToolTipContent = ({
  tokenLogoSrc,
  boldTitle,
  details,
  linkLabel,
  linkLabelOnClickCallback
}) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "tool_detail_section", children: [
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", { className: "tool_icon", src: tokenLogoSrc }),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "tooltip_title", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_surfing6.Text, { prominent: !0, size: "xl", children: [
    boldTitle,
    " "
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "tooltip_content_details", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_surfing6.Text, { size: "lg", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("b", { children: details }) }) }),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { onClick: linkLabelOnClickCallback, className: "tool_content_link", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_surfing6.Text, { prominent: !0, size: "lg", children: linkLabel }) })
] });

// app/util/split.tsx
var import_react11 = require("react"), import_splitio = require("@splitsoftware/splitio"), import_jsx_runtime11 = require("react/jsx-runtime"), initContext = () => ({ showExperiment: () => !1, client: null }), SplitContext = (0, import_react11.createContext)(initContext()), SplitContextProvider = ({
  children,
  splitBrowserKey,
  splitUser,
  splitClientFeatures = []
}) => {
  let [splitTreatment, setSplitTreatment] = (0, import_react11.useState)(
    initContext()
  );
  return (0, import_react11.useEffect)(() => {
    if (!(splitBrowserKey && splitUser && splitClientFeatures.length))
      return;
    window.split = window.split || (0, import_splitio.SplitFactory)({
      core: {
        authorizationKey: splitBrowserKey,
        key: splitUser
      },
      debug: !1
    });
    let splitClient = window.split.client();
    (async () => {
      await splitClient.ready();
      let featureFlags = splitClientFeatures.reduce(
        (flags, featName) => ({
          ...flags,
          [featName]: splitClient.getTreatment(featName)
        }),
        {}
      );
      setSplitTreatment({
        showExperiment: (featName) => featureFlags[featName] === "on",
        client: splitClient
      });
    })();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SplitContext.Provider, { value: splitTreatment, children });
};

// contexts/CacheProvider.tsx
var import_react12 = require("react"), import_swr = require("swr"), import_jsx_runtime12 = require("react/jsx-runtime");
function localStorageProvider(sha) {
  if (typeof window > "u")
    return /* @__PURE__ */ new Map();
  let key = `app-cache-${sha}`, map = new Map(JSON.parse(localStorage.getItem(key) || "[]"));
  return window.addEventListener("beforeunload", () => {
    if (localStorage.getItem("purge-cache") === "true") {
      localStorage.removeItem(key);
      return;
    }
    let appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem(key, appCache);
  }), map;
}
var CacheProvider = ({
  children,
  sha
}) => {
  let [useCacheProvider, setCacheProvider] = (0, import_react12.useState)();
  return (0, import_react12.useEffect)(() => {
    setCacheProvider(localStorageProvider(sha));
  }, []), /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children: useCacheProvider ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_swr.SWRConfig, { value: { provider: () => useCacheProvider }, children }) : children });
}, CacheProvider_default = CacheProvider;

// app/root.tsx
var import_react14 = require("react"), import_surfing7 = require("@fluidity-money/surfing"), import_jsx_runtime13 = require("react/jsx-runtime"), links2 = () => [
  ...links(),
  { rel: "icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
  { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
  { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
  { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/apple-icon-114x114.png"
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/apple-icon-120x120.png"
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/apple-icon-144x144.png"
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/apple-icon-152x152.png"
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-icon-180x180.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/android-icon-192x192.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicon-96x96.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "msapplication-TileColor", content: "#000000" },
  { rel: "msapplication-TileImage", href: "/ms-icon-144x144.png" },
  { rel: "theme-color", content: "#000000" },
  { rel: "stylesheet", href: global_styles_default },
  { rel: "stylesheet", href: style_default }
], meta = ({
  data: { gitSha, isProduction: isProduction2, isStaging, host }
}) => ({
  charset: "utf-8",
  title: "Fluidity",
  description: "Fluidity is a platform for getting more utility out of your crypto assets.",
  viewport: "width=device-width,initial-scale=1",
  "og:image": "https://static.fluidity.money/img/FluidShare.png",
  "og:site_name": "Fluidity Money",
  "fluidity:version": gitSha,
  "fluidity:environment": isProduction2 ? "production" : isStaging ? "staging" : "development",
  "fluidity:host": host
}), loader = async ({
  request
}) => {
  var _a, _b, _c, _d;
  let nodeEnv = "production", sentryDsn = ((_a = process.env) == null ? void 0 : _a.FLU_SENTRY_DSN) ?? "", gaToken = process.env.GA_WEBAPP_ANALYTICS_ID, host = request.headers.get("Host") ?? "unknown-host", isProduction2 = nodeEnv === "production" && host === "app.fluidity.money", isStaging = nodeEnv === "production" && host === "staging.app.fluidity.money", gitSha = ((_c = (_b = process.env) == null ? void 0 : _b.GIT_SHA) == null ? void 0 : _c.slice(0, 8)) ?? "unknown-git-sha", splitBrowserKey = ((_d = process.env) == null ? void 0 : _d.FLU_SPLIT_BROWSER_KEY) ?? "";
  return {
    nodeEnv,
    sentryDsn,
    gaToken,
    isProduction: isProduction2,
    isStaging,
    host,
    gitSha,
    splitBrowserKey,
    splitClientFeatures: ["Fluidify-Button-Placement"],
    splitUserKey: "user"
  };
};
function ErrorBoundary(err) {
  return console.error(err), /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      "body",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { src: "/images/logoMetallic.png", alt: "", style: { height: "40px" } }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { children: "Something went wrong!" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { children: "Our team has been notified, and are working on fixing it!" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.Scripts, {})
        ]
      }
    )
  ] });
}
function App() {
  let {
    nodeEnv,
    sentryDsn,
    gaToken,
    isProduction: isProduction2,
    gitSha = "unknown",
    splitBrowserKey,
    splitUserKey,
    splitClientFeatures
  } = (0, import_react13.useLoaderData)();
  switch (!0) {
    case nodeEnv !== "production":
      console.log("Running in development, ignoring Sentry initialisation...");
      break;
    case !sentryDsn:
      console.error("DSN not set!");
      break;
    default:
      (0, import_remix.init)({
        dsn: sentryDsn,
        integrations: [new import_tracing.Integrations.BrowserTracing()],
        tracesSampleRate: 1
      });
  }
  let location2 = (0, import_react13.useLocation)();
  (0, import_react14.useEffect)(() => {
    gaToken && typeof window.gtag < "u" && window.gtag("config", gaToken, {
      page_path: new URL(window.location.href)
    });
  }, [location2, gaToken]);
  let [cookieConsent, setCookieConsent] = (0, import_react14.useState)(!0);
  return (0, import_react14.useEffect)(() => {
    localStorage.getItem("cookieConsent") || setCookieConsent(!1);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_surfing7.CookieConsent,
        {
          activated: cookieConsent,
          url: "https://static.fluidity.money/assets/fluidity-privacy-policy.pdf",
          callBack: () => {
            setCookieConsent(!0);
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CacheProvider_default, { sha: gitSha, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(ToolProvider, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          SplitContextProvider,
          {
            splitBrowserKey,
            splitUser: splitUserKey,
            splitClientFeatures,
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.Outlet, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.ScrollRestoration, {}),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.Scripts, {}),
        gaToken && isProduction2 && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "script",
            {
              src: `https://www.googletagmanager.com/gtag/js?id=${gaToken}`,
              async: !0
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "script",
            {
              dangerouslySetInnerHTML: {
                __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gaToken}');
                    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "script",
            {
              dangerouslySetInnerHTML: {
                __html: `
                      (function (h, o, t, j, a, r) {
                        h.hj =
                          h.hj ||
                          function () {
                            (h.hj.q = h.hj.q || []).push(arguments);
                          };
                        h._hjSettings = { hjid: 3278724, hjsv: 6 };
                        a = o.getElementsByTagName("head")[0];
                        r = o.createElement("script");
                        r.async = 1;
                        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                        a.appendChild(r);
                      })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
                    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "script",
            {
              dangerouslySetInnerHTML: {
                __html: `(function(e,t,o,n,p,r,i) {
                        e.visitorGlobalObjectAlias=n;
                        e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){
                          (e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)
                        };
                        e[e.visitorGlobalObjectAlias].l=(new Date).getTime();
                        r=t.createElement("script");
                        r.src=o;
                        r.async=true;
                        i=t.getElementsByTagName("script")[0];
                        i.parentNode.insertBefore(r,i)
                      })(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
                      vgo('setAccount', '612285146');
                      vgo('setTrackByDefault', true);
                      vgo('process');`
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.LiveReload, {})
      ] }) })
    ] })
  ] });
}
var root_default = (0, import_remix2.withSentry)(App, {
  wrapWithErrorBoundary: !0
});

// app/routes/$network.tsx
var network_exports = {};
__export(network_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Network,
  loader: () => loader2
});
var import_react21 = require("@remix-run/react");

// webapp.config.js
var options = {
  drivers: {
    ethereum: [
      {
        label: "Ethereum",
        testnet: !1,
        rpc: {
          http: "",
          ws: ""
        }
      }
    ],
    solana: [
      {
        label: "Solana",
        testnet: !1,
        rpc: {
          http: "",
          ws: ""
        }
      }
    ]
  }
}, webapp_config_default = options;

// app/webapp.config.server.ts
var import_toml = require("toml"), import_fs = require("fs"), import_path = require("path"), import_sharp = __toESM(require("sharp")), import_zod = __toESM(require("zod")), envVar = () => ({
  default: (key) => (0, import_zod.string)().default(`${key}`).transform((key2) => process.env[key2] ?? "")
}), OptionsSchema = import_zod.default.object({
  drivers: import_zod.default.object({}).catchall(
    import_zod.default.array(
      import_zod.default.object({
        label: import_zod.default.string(),
        testnet: import_zod.default.boolean(),
        rpc: import_zod.default.object({
          http: envVar().default(import_zod.default.string()),
          ws: envVar().default(import_zod.default.string())
        }),
        secret: envVar().default(import_zod.default.string()).optional(),
        server: import_zod.default.string().optional()
      })
    ).min(1)
  ),
  config: import_zod.default.object({}).catchall(
    import_zod.default.object({
      explorer: import_zod.default.string(),
      fluidAssets: import_zod.default.array(import_zod.default.string()),
      tokens: import_zod.default.array(
        import_zod.default.object({
          symbol: import_zod.default.string(),
          name: import_zod.default.string(),
          logo: import_zod.default.string(),
          address: import_zod.default.string(),
          colour: import_zod.default.string(),
          isFluidOf: import_zod.default.string().optional(),
          obligationAccount: import_zod.default.string().optional(),
          dataAccount: import_zod.default.string().optional(),
          decimals: import_zod.default.number(),
          userMintLimit: import_zod.default.number().optional()
        })
      ).min(1),
      wallets: import_zod.default.array(
        import_zod.default.object({
          name: import_zod.default.string(),
          id: import_zod.default.string(),
          description: import_zod.default.string().optional(),
          logo: import_zod.default.string()
        })
      ).optional()
    })
  ),
  liquidity_providers: import_zod.default.object({}).catchall(
    import_zod.default.object({
      providers: import_zod.default.array(
        import_zod.default.object({
          name: import_zod.default.string(),
          img: import_zod.default.string(),
          link: import_zod.default.object({
            fUSDC: import_zod.default.string(),
            fUSDT: import_zod.default.string(),
            fTUSD: import_zod.default.string().optional(),
            fFRAX: import_zod.default.string().optional(),
            fDAI: import_zod.default.string().optional()
          })
        })
      ).min(1)
    })
  ),
  provider_icons: import_zod.default.object({
    Aave: import_zod.default.string(),
    Aldrin: import_zod.default.string(),
    Circle: import_zod.default.string(),
    Compound: import_zod.default.string(),
    Dodo: import_zod.default.string(),
    Jupiter: import_zod.default.string(),
    Lemniscap: import_zod.default.string(),
    Maker: import_zod.default.string(),
    Multicoin: import_zod.default.string(),
    Orca: import_zod.default.string(),
    Polygon: import_zod.default.string(),
    Saber: import_zod.default.string(),
    Solana: import_zod.default.string(),
    Solend: import_zod.default.string(),
    Uniswap: import_zod.default.string(),
    Sushiswap: import_zod.default.string(),
    Fluidity: import_zod.default.string(),
    Balancer: import_zod.default.string(),
    Oneinch: import_zod.default.string(),
    Mooniswap: import_zod.default.string(),
    Curve: import_zod.default.string(),
    Multichain: import_zod.default.string(),
    "XY Finance": import_zod.default.string(),
    Raydium: import_zod.default.string(),
    Lifinity: import_zod.default.string(),
    Mercurial: import_zod.default.string()
  })
}), options2 = OptionsSchema.parse(
  (0, import_toml.parse)((0, import_fs.readFileSync)((0, import_path.resolve)(__dirname, "../config.toml"), "utf8"))
), getColors = async () => {
  let networks = [];
  for (let network of Object.keys(options2.config)) {
    let tokenColors = [];
    for (let { symbol, logo } of options2.config[network].tokens) {
      let colors2 = await (0, import_sharp.default)((0, import_path.join)(__dirname, "../public", logo)).resize(1, 1).raw().toBuffer();
      tokenColors.push({
        symbol,
        color: `#${colors2.toString("hex").substring(0, 6)}`
      });
    }
    let colorsMap = tokenColors.reduce(
      (acc, { symbol, color: color2 }) => (acc[symbol] = color2, acc),
      {}
    );
    networks.push({
      network,
      colorsMap
    });
  }
  return networks.reduce(
    (acc, { network, colorsMap }) => (acc[network] = colorsMap, acc),
    {}
  );
}, colors = getColors(), webapp_config_server_default = options2;

// app/routes/$network.tsx
var import_node = require("@remix-run/node"), import_react22 = require("react");

// app/util/chainUtils/ethereum/Token.json
var Token_default = [
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "winner",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256"
      }
    ],
    name: "BlockedReward",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "BurnFluid",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bool",
        name: "status",
        type: "bool"
      }
    ],
    name: "Emergency",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "GlobalMintLimitChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "MaxUncheckedRewardLimitChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "MintFluid",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bool",
        name: "status",
        type: "bool"
      }
    ],
    name: "MintLimitsStateChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "oldOperator",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newOperator",
        type: "address"
      }
    ],
    name: "OperatorChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "winner",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256"
      }
    ],
    name: "Reward",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "RewardQuarantineThresholdUpdated",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "UserMintLimitChanged",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "newConfig",
        type: "address"
      }
    ],
    name: "WorkerConfigUpdated",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "mintLimitsEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "winner",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        internalType: "struct Winner[]",
        name: "rewards",
        type: "tuple[]"
      },
      {
        internalType: "uint256",
        name: "firstBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastBlock",
        type: "uint256"
      }
    ],
    name: "batchReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_workerConfig",
        type: "address"
      }
    ],
    name: "disableEmergencyMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "enableEmergencyMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enable",
        type: "bool"
      }
    ],
    name: "enableMintLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "erc20In",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "erc20Out",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_liquidityProvider",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8"
      },
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      },
      {
        internalType: "address",
        name: "_emergencyCouncil",
        type: "address"
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "address",
        name: "_workerConfig",
        type: "address"
      }
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "chainid",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "winner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "winAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "firstBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastBlock",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes"
      }
    ],
    name: "manualReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "noEmergencyMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardPoolAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxUncheckedReward",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_mintLimitsEnabled",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "_globalMint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_userMint",
        type: "uint256"
      }
    ],
    name: "setRestrictions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "transferWithBeneficiary",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "payout",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "firstBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastBlock",
        type: "uint256"
      }
    ],
    name: "unblockReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "global",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "user",
        type: "uint256"
      }
    ],
    name: "updateMintLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOperator",
        type: "address"
      }
    ],
    name: "updateOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxUncheckedReward",
        type: "uint256"
      }
    ],
    name: "updateRewardQuarantineThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_workerConfig",
        type: "address"
      }
    ],
    name: "updateWorkerConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "userAmountMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "userMintLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// contexts/EthereumProvider.tsx
var import_bn3 = __toESM(require("bn.js")), import_react16 = require("react"), import_core = require("@web3-react/core"), import_metamask = require("@web3-react/metamask"), import_walletconnect = require("@web3-react/walletconnect");

// contexts/FluidityFacade.tsx
var import_react15 = require("react"), FluidityFacadeContext = (0, import_react15.createContext)({
  connected: !1
}), FluidityFacade_default = FluidityFacadeContext;

// app/util/chainUtils/ethereum/RewardPool.json
var RewardPool_default = [
  {
    inputs: [],
    name: "getPools",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8"
          }
        ],
        internalType: "struct RewardPool[]",
        name: "rewardPool",
        type: "tuple[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// app/util/chainUtils/ethereum/transaction.ts
var import_ethers = require("ethers"), import_ethers2 = require("ethers"), import_bn2 = __toESM(require("bn.js")), import_web3_utils = require("web3-utils");

// app/util/api/graphql.ts
var gql = String.raw;

// app/util/api/rpc.ts
var jsonPost = async (url, body, headers) => {
  try {
    return await (await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...headers || {}
      },
      method: "POST",
      body: JSON.stringify(body)
    })).json();
  } catch (e) {
    throw new Error(`Could not parse JSON: ${e}`);
  }
}, jsonGet = async (url, params_, headers) => {
  try {
    let queryString = Object.entries(params_ || {}).map(
      ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
    ).join("&");
    return await (await fetch(`${url}?${queryString}`, {
      headers: {
        "Content-Type": "application/json",
        ...headers || {}
      }
    })).json();
  } catch (e) {
    throw new Error(`Could not parse JSON: ${e}`);
  }
};

// app/util/chainUtils/tokens.ts
var import_bn = __toESM(require("bn.js")), getTokenForNetwork = (network) => {
  var _a;
  let { config, drivers } = webapp_config_server_default;
  return Object.keys(drivers).includes(network) ? (_a = config[network]) == null ? void 0 : _a.fluidAssets : [];
};
var getUsdFromTokenAmount = (amount, { decimals }) => amount.div(new import_bn.default(10).pow(new import_bn.default(decimals - 2))).toNumber() / 100, getTokenAmountFromUsd = (usd, { decimals }) => usd.mul(new import_bn.default(10).pow(new import_bn.default(decimals))), addDecimalToBn = (amount, decimals) => {
  let whole = amount.toString().slice(0, -decimals) || "0", dec = amount.toString().slice(0 - decimals).padStart(decimals, "0").replace(/0+$/, "");
  return dec ? `${whole}.${dec}` : whole;
};

// app/util/chainUtils/links.ts
var getAddressExplorerLink = (chain, address) => chain === "ethereum" ? `https://etherscan.io/address/${address}` : `https://explorer.solana.com/address/${address}`, getBlockExplorerLink = (chain, block) => chain === "ethereum" ? `https://etherscan.io/block/${block}` : `https://explorer.solana.com/block/${block}`, getTxExplorerLink = (chain, address) => chain === "ethereum" ? `https://etherscan.io/tx/${address}` : `https://explorer.solana.com/tx/${address}`, networkMapper = (network) => {
  switch (network) {
    case "ETH":
      return "ethereum";
    case "SOL":
      return "solana";
    case "ethereum":
      return "ETH";
    default:
      return "SOL";
  }
};

// app/util/converters.ts
var import_date_fns = require("date-fns"), import_buffer = require("buffer"), B64ToUint8Array = (b64string) => import_buffer.Buffer.from(b64string, "base64");
var trimAddress = (address) => {
  let leftSide = address.slice(0, 4), rightSide = address.slice(-4);
  return leftSide + "..." + rightSide;
}, transactionActivityLabel = (activity, address) => {
  let { sender, currency, swapType } = activity;
  return swapType ? swapType === "in" ? `Fluidified ${currency[0] === "f" ? currency.slice(1) : currency}` : `Reverted ${currency}` : sender === address ? `Sent ${currency}` : `Received ${currency}`;
}, transactionTimeLabel = (timestamp) => {
  let isTransactionToday = (0, import_date_fns.isToday)(timestamp), isTransactionYesterday = (0, import_date_fns.isYesterday)(timestamp);
  return isTransactionToday ? (0, import_date_fns.formatDistanceToNow)(timestamp, {
    addSuffix: !0
  }) : isTransactionYesterday ? `Yesterday ${(0, import_date_fns.format)(timestamp, "h:mmaaa")}` : (0, import_date_fns.format)(timestamp, "dd.MM.yy h:mmaaa");
};

// app/util/chainUtils/ethereum/transaction.ts
var getContract = (ABI, address, signer) => new import_ethers2.Contract(address, ABI, signer), getBalanceOfERC20 = async (signer, contractAddress, ABI) => {
  let contract = getContract(ABI, contractAddress, signer);
  if (!contract)
    return new import_bn2.default(0);
  let userAddress = await signer.getAddress();
  return new import_bn2.default((await contract.balanceOf(userAddress)).toString());
};
var userMintLimitEnabled = async (provider, contractAddress, ABI) => {
  let contract = new import_ethers2.Contract(contractAddress, ABI, provider);
  if (!contract)
    return !1;
  try {
    return await contract.mintLimitsEnabled();
  } catch (e) {
    console.error(e);
  }
  return !1;
}, getUserMintLimit = async (provider, contractAddress, ABI) => {
  let contract = new import_ethers2.Contract(contractAddress, ABI, provider);
  return contract ? new import_bn2.default((await contract.userMintLimit()).toString()) : new import_bn2.default(0);
};
var getAmountMinted = async (provider, contractAddress, ABI, userAddress) => {
  let contract = new import_ethers2.Contract(contractAddress, ABI, provider);
  return contract ? new import_bn2.default((await contract.userAmountMinted(userAddress)).toString()) : new import_bn2.default(0);
};
var makeContractSwap = async (signer, from, to, amount) => {
  let { address: fromAddress, ABI: fromABI, isFluidOf: fromIsFluidOf } = from, { address: toAddress, ABI: toABI, isFluidOf: toIsFluidOf } = to, fromContract = getContract(fromABI, fromAddress, signer), toContract = getContract(toABI, toAddress, signer), amountBn = import_ethers.utils.parseUnits(String(amount));
  if (amountBn.eq(0))
    throw new Error(`Cannot send 0 ${from.symbol}!`);
  if (amountBn.lt(0))
    throw new Error(`${amount} is less than 0!`);
  try {
    let fromAddress2 = await signer.getAddress();
    if ((await fromContract.balanceOf(fromAddress2)).lt(amount))
      throw new Error(`You don't have enough ${from.symbol}`);
    if (toIsFluidOf) {
      let allowance = await fromContract.allowance(
        fromAddress2,
        toAddress
      );
      return allowance.lt(amount) && (allowance.isZero() || await (await fromContract.approve(
        toContract.address,
        import_ethers.constants.Zero
      )).wait(), await (await fromContract.approve(
        toContract.address,
        import_ethers.constants.MaxUint256
      )).wait()), await toContract.erc20In(amount);
    } else {
      if (fromIsFluidOf)
        return await fromContract.erc20Out(amount);
      throw new Error(`Invalid token pair ${from.symbol}:${to.symbol}`);
    }
  } catch (error) {
    return await handleContractErrors(error, signer.provider);
  }
}, manualRewardToken = async (token, baseTokenSymbol, address, signer) => {
  let manualRewardUrl = "https://api.ethereum.fluidity.money/manual-reward", manualRewardBody = {
    address,
    token_short_name: baseTokenSymbol
  }, { error, payload } = await jsonPost(
    manualRewardUrl,
    manualRewardBody
  );
  if (error || !payload)
    return;
  let { winner, win_amount, first_block, last_block, token_details } = payload.reward, { token_decimals } = token_details, decimals = import_ethers.BigNumber.from(10).pow(token_decimals), winningAmount = import_ethers.BigNumber.from(`${win_amount}`), { signature: b64Signature } = payload, uint8Signature = B64ToUint8Array(b64Signature), hexSignature = (0, import_web3_utils.bytesToHex)(Array.from(uint8Signature)), mainnetId = 1;
  try {
    let res = await (await getContract(token.ABI, token.address, signer).manualReward(
      token.address,
      mainnetId,
      winner,
      winningAmount,
      first_block,
      last_block,
      hexSignature
    )).wait();
    return {
      networkFee: res.gasUsed.toNumber(),
      gasFee: res.gasUsed.toNumber(),
      amount: parseFloat(winningAmount.div(decimals).toString())
    };
  } catch (error2) {
    return await handleContractErrors(error2, signer.provider), { amount: 0, gasFee: 0, networkFee: 0 };
  }
}, getTotalPrizePool = async (provider, rewardPoolAddr, rewardPoolAbi) => {
  try {
    let rewardPoolContract = new import_ethers2.Contract(
      rewardPoolAddr,
      rewardPoolAbi,
      provider
    );
    if (!rewardPoolContract)
      throw new Error(`Could not instantiate Reward Pool at ${rewardPoolAddr}`);
    return (await rewardPoolContract.callStatic.getPools()).reduce((sum, { amount, decimals }) => {
      let amountBn = new import_bn2.default(amount.toString()), decimalsBn = new import_bn2.default(10).pow(new import_bn2.default(decimals)), amountDiv = amountBn.div(decimalsBn);
      return sum.add(amountDiv);
    }, new import_bn2.default(0)).toNumber();
  } catch (error) {
    return await handleContractErrors(error, provider), 0;
  }
}, handleContractErrors = async (error, provider) => {
  var _a, _b, _c;
  let msg = ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) ?? (error == null ? void 0 : error.message);
  if (!msg)
    throw new Error(`Unknown Error: ${error}`);
  if (msg === "MetaMask Tx Signature: User denied transaction signature.")
    throw new Error("Transaction Denied");
  try {
    let metaMaskError = JSON.parse(((_b = msg.match(/{.*}/)) == null ? void 0 : _b[0]) || "");
    if ((metaMaskError == null ? void 0 : metaMaskError.value.code) === -32603)
      throw new Error(
        "Failed to make swap. Please reset your Metamask account (settings -> advanced -> reset account)"
      );
    if ((metaMaskError == null ? void 0 : metaMaskError.value.code) === -32e3)
      throw new Error("Failed to make swap. Gas limit too low.");
    let { hash } = metaMaskError || {}, receipt = await (provider == null ? void 0 : provider.getTransactionReceipt(hash));
    if ((receipt == null ? void 0 : receipt.status) === 0)
      throw new Error(
        `Failed to make swap. Gas limit of ${(_c = receipt == null ? void 0 : receipt.gasUsed) == null ? void 0 : _c.toNumber()} exhausted!`
      );
  } catch {
    throw new Error(`Failed to make swap. ${msg}`);
  }
}, transaction_default = makeContractSwap;

// contexts/EthereumProvider.tsx
var import_buffer2 = require("buffer"), import_jsx_runtime14 = require("react/jsx-runtime"), EthereumFacade = ({
  children,
  tokens,
  connectors
}) => {
  let { isActive, provider, account, connector } = (0, import_core.useWeb3React)();
  (0, import_react16.useEffect)(() => {
    connectors.every(([connector2]) => {
      var _a, _b;
      return (_b = (_a = connector2 == null ? void 0 : connector2.connectEagerly) == null ? void 0 : _a.call(connector2)) == null || _b.catch(() => !0), !1;
    });
  }, []);
  let getBalance2 = async (contractAddress) => {
    let signer = provider == null ? void 0 : provider.getSigner();
    if (!!signer)
      return await getBalanceOfERC20(signer, contractAddress, Token_default);
  }, useConnectorType = (type) => {
    var _a, _b;
    let connector2;
    switch (type) {
      case "metamask":
        connector2 = (_a = connectors.find(
          (connector3) => connector3[0] instanceof import_metamask.MetaMask
        )) == null ? void 0 : _a[0];
        break;
      case "walletconnect":
        connector2 = (_b = connectors.find(
          (connector3) => connector3[0] instanceof import_walletconnect.WalletConnect
        )) == null ? void 0 : _b[0], window.Buffer = import_buffer2.Buffer;
        break;
      default:
        console.warn("Unsupported connector", type);
        break;
    }
    connector2 == null || connector2.activate();
  }, deactivate = async () => {
    connector != null && connector.deactivate ? connector.deactivate() : connector.resetState();
  }, limit2 = async (contractAddress) => {
    let signer = provider == null ? void 0 : provider.getSigner();
    if (!(!signer || !await userMintLimitEnabled(
      signer.provider,
      contractAddress,
      Token_default
    )))
      return await getUserMintLimit(signer.provider, contractAddress, Token_default);
  }, amountMinted2 = async (contractAddress) => {
    let signer = provider == null ? void 0 : provider.getSigner();
    return signer ? await getAmountMinted(
      signer.provider,
      contractAddress,
      Token_default,
      await signer.getAddress()
    ) : new import_bn3.default(0);
  }, swap = async (amount, contractAddress) => {
    let signer = provider == null ? void 0 : provider.getSigner();
    if (!signer)
      return;
    let fromToken = tokens.find((t) => t.address === contractAddress);
    if (!fromToken)
      return;
    let fromFluid = !!fromToken.isFluidOf, toToken = fromFluid ? tokens.find((t) => t.address === fromToken.isFluidOf) : tokens.find((t) => t.isFluidOf === fromToken.address);
    if (!toToken)
      return;
    let from = {
      address: fromToken.address,
      ABI: Token_default,
      symbol: fromToken.symbol,
      isFluidOf: fromFluid
    }, to = {
      address: toToken.address,
      ABI: Token_default,
      symbol: toToken.symbol,
      isFluidOf: !fromFluid
    }, ethContractRes = await transaction_default(signer, from, to, amount);
    return ethContractRes ? {
      confirmTx: async () => {
        var _a;
        return ((_a = await ethContractRes.wait()) == null ? void 0 : _a.status) === 1;
      },
      txHash: ethContractRes.hash
    } : void 0;
  }, manualReward = async (fluidTokenAddrs, userAddr) => {
    let signer = provider == null ? void 0 : provider.getSigner();
    if (!!signer)
      return Promise.all(
        fluidTokenAddrs.map((addr) => tokens.find((t) => t.address === addr)).filter((t) => !!t && !!t.isFluidOf).map(async (token) => {
          let baseToken = tokens.find((t) => t.address === (token == null ? void 0 : token.isFluidOf));
          if (!baseToken)
            return;
          let contract = {
            address: (token == null ? void 0 : token.address) ?? "",
            ABI: Token_default,
            symbol: (token == null ? void 0 : token.symbol) ?? "",
            isFluidOf: !!(token != null && token.isFluidOf)
          };
          return await manualRewardToken(
            contract,
            baseToken.symbol,
            userAddr,
            signer
          );
        })
      );
  }, addToken = async (symbol) => {
    var _a;
    let token = tokens.find((t) => t.symbol === symbol);
    if (!token)
      return;
    let { protocol, host } = window.location, watchToken = {
      address: token.address,
      symbol: token.symbol,
      decimals: token.decimals,
      image: `${protocol}//${host}${token.logo}`
    };
    return (_a = connector == null ? void 0 : connector.watchAsset) == null ? void 0 : _a.call(connector, watchToken);
  }, getPrizePool = async () => {
    let signer = provider == null ? void 0 : provider.getSigner();
    if (!signer)
      return 0;
    let rewardPoolAddr = "0xD3E24D732748288ad7e016f93B1dc4F909Af1ba0";
    return getTotalPrizePool(signer.provider, rewardPoolAddr, RewardPool_default);
  }, getFluidTokens = async () => {
    let fluidTokenAddrs = tokens.filter((t) => !!t.isFluidOf).map((t) => t.address), fluidTokenBalances = await Promise.all(
      fluidTokenAddrs.map(async (addr) => [addr, await getBalance2(addr)])
    ), ZERO = new import_bn3.default(0);
    return fluidTokenBalances.filter((token) => {
      var _a;
      return (_a = token[1]) == null ? void 0 : _a.gt(ZERO);
    }).map(([addr]) => addr);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    FluidityFacade_default.Provider,
    {
      value: {
        swap,
        limit: limit2,
        amountMinted: amountMinted2,
        balance: getBalance2,
        tokens: getFluidTokens,
        prizePool: getPrizePool,
        disconnect: deactivate,
        useConnectorType,
        rawAddress: account ?? "",
        address: (account == null ? void 0 : account.toLowerCase()) ?? "",
        manualReward,
        addToken,
        connected: isActive
      },
      children
    }
  );
}, EthereumProvider = (rpcUrl, tokens) => ({ children }) => {
  let connectors = (0, import_react16.useMemo)(() => {
    let [metaMask, metamaskHooks] = (0, import_core.initializeConnector)(
      (actions) => new import_metamask.MetaMask({ actions })
    ), [walletConnect, walletconnectHooks] = (0, import_core.initializeConnector)(
      (actions) => new import_walletconnect.WalletConnect({
        actions,
        options: {
          rpc: {
            1: rpcUrl
          }
        }
      })
    );
    return [
      [metaMask, metamaskHooks],
      [walletConnect, walletconnectHooks]
    ];
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_core.Web3ReactProvider, { connectors, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(EthereumFacade, { tokens, connectors, children }) }) });
}, EthereumProvider_default = EthereumProvider;

// contexts/SolanaProvider.tsx
var import_react17 = require("react"), import_wallet_adapter_react2 = require("@solana/wallet-adapter-react"), import_wallet_adapter_wallets = require("@solana/wallet-adapter-wallets");

// app/util/chainUtils/solana/instructions.ts
var import_web33 = require("@solana/web3.js"), import_token_utils2 = require("@saberhq/token-utils"), import_wallet_adapter_react = require("@solana/wallet-adapter-react");
var import_bn4 = __toESM(require("bn.js"));

// app/util/chainUtils/solana/fluidityInstruction.ts
var import_web3 = require("@solana/web3.js"), import_borsh = require("borsh");
var _FluidityInstruction = class extends import_web3.Enum {
  constructor(amount) {
    _FluidityInstruction.updated || (import_web3.SOLANA_SCHEMA.set(_FluidityInstruction, {
      kind: "enum",
      field: "enum",
      values: [
        ["Wrap", ["u64", "String", "u8"]],
        ["Unwrap", ["u64", "String", "u8"]],
        ["Payout", "u64"],
        ["InitSolendObligation", ["u64", "u64", "String", "u8"]]
      ]
    }), _FluidityInstruction.updated = !0);
    let field = amount.Wrap ? "Wrap" : "Unwrap";
    super({
      [field]: [amount[field], amount.TokenSymbol, amount.bumpSeed]
    });
  }
  static async getBumpSeed(TokenSymbol) {
    let seedString = `FLU:${TokenSymbol}_OBLIGATION`, seedBuffer = Buffer.from(seedString, "utf8");
    return (await import_web3.PublicKey.findProgramAddress(
      [seedBuffer],
      new import_web3.PublicKey("HEvunKKgzf4SMZimVMET6HuzAyfGJS4ZMShUz94KLUdR")
    ))[1];
  }
  static async getProgramAddress(TokenSymbol) {
    let seedString = `FLU:${TokenSymbol}_OBLIGATION`, seedBuffer = Buffer.from(seedString, "utf8"), [address] = await import_web3.PublicKey.findProgramAddress(
      [seedBuffer],
      new import_web3.PublicKey("HEvunKKgzf4SMZimVMET6HuzAyfGJS4ZMShUz94KLUdR")
    );
    return address;
  }
  encode() {
    let writer = new import_borsh.BinaryWriter();
    return this.Wrap ? (writer.writeU8(0), writer.writeU64(this.Wrap[0]), writer.writeString(this.Wrap[1]), writer.writeU8(this.Wrap[2])) : this.Unwrap && (writer.writeU8(1), writer.writeU64(this.Unwrap[0]), writer.writeString(this.Unwrap[1]), writer.writeU8(this.Unwrap[2])), Buffer.from(writer.toArray());
  }
}, FluidityInstruction = _FluidityInstruction;
__publicField(FluidityInstruction, "updated", !1);

// app/util/chainUtils/solana/solanaAddresses.ts
var import_web32 = require("@solana/web3.js"), import_token_utils = require("@saberhq/token-utils"), splToken = __toESM(require("@solana/spl-token"));

// app/util/chainUtils/solana/mainnet-production-solend.json
var mainnet_production_solend_default = {
  programID: "So1endDq2YkqhipRh3WViPa8hdiSpxWy6z3Z6tMCpAo",
  assets: [
    {
      name: "Serum",
      symbol: "SRM",
      decimals: 6,
      mintAddress: "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt/logo.png"
    },
    {
      name: "Solend",
      symbol: "SLND",
      decimals: 6,
      mintAddress: "SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp/logo.png"
    },
    {
      name: "FTX Token (Portal)",
      symbol: "FTT",
      decimals: 8,
      mintAddress: "EzfgjvkSwthhgHaceR3LnKXUoRkP6NUhfghdaHAj1tUv",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EzfgjvkSwthhgHaceR3LnKXUoRkP6NUhfghdaHAj1tUv/logo.png"
    },
    {
      name: "Mercurial",
      symbol: "MER",
      decimals: 6,
      mintAddress: "MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K/logo.png"
    },
    {
      name: "UST (Portal)",
      symbol: "UST",
      decimals: 6,
      mintAddress: "9vMJfxuKxXBoEa7rM12mYLMwTacLMLDJqHozw96WQL8i",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9vMJfxuKxXBoEa7rM12mYLMwTacLMLDJqHozw96WQL8i/logo.png"
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      decimals: 6,
      mintAddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"
    },
    {
      name: "Saber Protocol Token",
      symbol: "SBR",
      decimals: 6,
      mintAddress: "Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1/logo.svg"
    },
    {
      name: "Ether (Portal)",
      symbol: "ETH",
      decimals: 8,
      mintAddress: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs/logo.png"
    },
    {
      name: "Marinade staked SOL (mSOL)",
      symbol: "mSOL",
      decimals: 9,
      mintAddress: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So/logo.png"
    },
    {
      name: "USDT",
      symbol: "USDT",
      decimals: 6,
      mintAddress: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg"
    },
    {
      name: "Raydium",
      symbol: "RAY",
      decimals: 6,
      mintAddress: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png"
    },
    {
      name: "Wrapped Bitcoin (Sollet)",
      symbol: "BTC",
      decimals: 6,
      mintAddress: "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E/logo.png"
    },
    {
      name: "Lido Staked SOL",
      symbol: "stSOL",
      decimals: 9,
      mintAddress: "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj/logo.png"
    },
    {
      name: "Orca",
      symbol: "ORCA",
      decimals: 6,
      mintAddress: "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE/logo.png"
    },
    {
      name: "Saber USDT-USDC LP",
      symbol: "USDT-USDC",
      decimals: 6,
      mintAddress: "2poo1w1DL6yd2WNTCnNTzDqkC6MBXq7axo77P16yrBuf",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2poo1w1DL6yd2WNTCnNTzDqkC6MBXq7axo77P16yrBuf/icon.png"
    },
    {
      name: "Wrapped SOL",
      symbol: "SOL",
      decimals: 9,
      mintAddress: "So11111111111111111111111111111111111111112",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
    },
    {
      name: "Wrapped FTT (Sollet)",
      symbol: "soFTT",
      decimals: 6,
      mintAddress: "AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3/logo.png"
    },
    {
      name: "Socean staked SOL",
      symbol: "scnSOL",
      decimals: 9,
      mintAddress: "5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm/logo.png"
    },
    {
      name: "Wrapped Ethereum (Sollet)",
      symbol: "soETH",
      decimals: 6,
      mintAddress: "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk/logo.png"
    },
    {
      name: "Saber mSOL-SOL LP",
      symbol: "mSOL-SOL",
      decimals: 9,
      mintAddress: "SoLEao8wTzSfqhuou8rcYsVoLjthVmiXuEjzdNPMnCz",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SoLEao8wTzSfqhuou8rcYsVoLjthVmiXuEjzdNPMnCz/icon.png"
    },
    {
      name: "PAI (Parrot USD)",
      symbol: "PAI",
      decimals: 6,
      mintAddress: "Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS/logo.svg"
    },
    {
      name: "UXD Stablecoin",
      symbol: "UXD",
      decimals: 6,
      mintAddress: "7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT/uxd-icon-black.png"
    },
    {
      name: "USDH Hubble Stablecoin",
      symbol: "USDH",
      decimals: 6,
      mintAddress: "USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX/usdh.svg"
    },
    {
      name: "Coin98",
      symbol: "C98",
      decimals: 6,
      mintAddress: "C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9",
      logo: "https://coin98.s3.ap-southeast-1.amazonaws.com/Coin/c98-512.svg"
    },
    {
      name: "Star Atlas DAO",
      symbol: "POLIS",
      decimals: 8,
      mintAddress: "poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk/logo.png"
    },
    {
      name: "Star Atlas",
      symbol: "ATLAS",
      decimals: 8,
      mintAddress: "ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx/logo.png"
    },
    {
      name: "Samoyed Coin",
      symbol: "SAMO",
      decimals: 9,
      mintAddress: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU/logo.png"
    },
    {
      name: "Step",
      symbol: "STEP",
      decimals: 9,
      mintAddress: "StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT/logo.png"
    },
    {
      name: "Staked Step",
      symbol: "xSTEP",
      decimals: 9,
      mintAddress: "xStpgUCss9piqeFUk2iLVcvJEGhAdJxJQuwLkXP555G",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/xStpgUCss9piqeFUk2iLVcvJEGhAdJxJQuwLkXP555G/logo.svg"
    },
    {
      name: "Solana Monkey Business Droplet",
      symbol: "SMBD",
      decimals: 8,
      mintAddress: "smbdJcLBrtKPhjrWCpDv5ABdJwz2vYo3mm6ojmePL3t",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/smbdJcLBrtKPhjrWCpDv5ABdJwz2vYo3mm6ojmePL3t/logo.png"
    },
    {
      name: "Degenerate Ape Academy Droplet",
      symbol: "DAPE",
      decimals: 8,
      mintAddress: "dapeM1DJj3xf2rC5o3Gcz1Cg3Rdu2ayZae9nGcsRRZT",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/dapeM1DJj3xf2rC5o3Gcz1Cg3Rdu2ayZae9nGcsRRZT/logo.png"
    },
    {
      name: "Wrapped Locked Staked Sol Invictus",
      symbol: "lsIN",
      decimals: 9,
      mintAddress: "LsinpBtQH68hzHqrvWw4PYbH7wMoAobQAzcvxVHwTLv"
    },
    {
      name: "Bonfida",
      symbol: "FIDA",
      decimals: 6,
      mintAddress: "EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp/logo.svg"
    },
    {
      name: "UXP Governance Token",
      symbol: "UXP",
      decimals: 9,
      mintAddress: "UXPhBoR3qG4UCiGNJfV7MqhHyFqKN68g45GoYvAeL2M",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/UXPhBoR3qG4UCiGNJfV7MqhHyFqKN68g45GoYvAeL2M/uxp-icon-black.png"
    },
    {
      name: "GST",
      symbol: "GST",
      decimals: 9,
      mintAddress: "AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB/logo.png"
    },
    {
      name: "GMT",
      symbol: "GMT",
      decimals: 9,
      mintAddress: "7i5KKsX2weiTkry7jA4ZwSuXGhs5eJBEjY8vVxR4pfRx",
      logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7i5KKsX2weiTkry7jA4ZwSuXGhs5eJBEjY8vVxR4pfRx/logo.png"
    }
  ],
  markets: [
    {
      name: "main",
      isPrimary: !0,
      description: null,
      creator: "5pHk2TmnqQzRF9L6egy5FfiyBgS7G9cMZ5RFaJAvghzw",
      address: "4UpD2fh7xH3VP9QQaXtsS1YY3bxzWhtfpks7FatyKvdY",
      authorityAddress: "DdZR6zRFiUt4S5mg7AV1uKB2z1f1WzcNYCaTEEWPAuby",
      reserves: [
        {
          asset: "SRM",
          address: "5suXmvdbKQ98VonxGCXqViuWRu8k4zgZRxndYKsH2fJg",
          collateralMintAddress: "4CxGuD2NMr6zM8f18gr6kRhgd748pnmkAhkY1YJtkup1",
          collateralSupplyAddress: "D52HyVBEMWy2WBptV5zsPuYS8W8C62gYjYKuVzaK1ruM",
          liquidityAddress: "4JHVBtmMPFyRpidxHtM8gVjGuLBXhaXCF4jNFFKBdGpb",
          liquidityFeeReceiverAddress: "AkwRd7hZ35BmnYvj9S5PgVpiBQfuzxaapshJe9PCN5hh",
          userSupplyCap: 6e5
        },
        {
          asset: "SLND",
          address: "CviGNzD2C9ZCMmjDt5DKCce5cLV4Emrcm3NFvwudBFKA",
          collateralMintAddress: "D3Cu5urZJhkKyNZQQq2ne6xSfzbXLU4RrywVErMA2vf8",
          collateralSupplyAddress: "Cc8DRe9wagmkVBeeeLsjgkAk7fkpyZt7XF8Ts3ddyYXd",
          liquidityAddress: "5pHGhh9pjzHP6fWQF4wQ3CKWpZM3YaerRJYN6RLTtZ5m",
          liquidityFeeReceiverAddress: "FtsXfVZWLgMWJH1owUmLhtET5KW1Ck8oykYXyPMkxFcE",
          userSupplyCap: 5e5
        },
        {
          asset: "FTT",
          address: "8bDyV3N7ctLKoaSVqUoEwUzw6msS2F65yyNPgAVUisKm",
          collateralMintAddress: "DiMx1n2dJmxqFtENRPhYWsqi8Mhg2p39MpTzsm6phzMP",
          collateralSupplyAddress: "EPNB8NiL3vFDYQhSZY5LQAoW6AJYLdwFXezXeyqiPvEM",
          liquidityAddress: "ByYuFLvwVW9NSKnGbnKSMToy3Ea9StJ4t7HjAmcTjk7w",
          liquidityFeeReceiverAddress: "2C2aefnxUSAMQrfey1hC6yHLh18BpjkwL1zAJCS9YqDG",
          userSupplyCap: 1e5
        },
        {
          asset: "MER",
          address: "5Sb6wDpweg6mtYksPJ2pfGbSyikrhR8Ut8GszcULQ83A",
          collateralMintAddress: "BsWLxf6hRJnyytKR52kKBiz7qU7BB3SH77mrBxNnYU1G",
          collateralSupplyAddress: "FeWc3QLKQBYS3RbrzEzj4ADsdNtQStomNepajeubY9cW",
          liquidityAddress: "CNREdzCSa2X5HQ6xjDZ1jd2XN3nmwTHfQkYj9pWAZuXs",
          liquidityFeeReceiverAddress: "8hWXJ8jY6WrnbRM47hJZbstfBz3eX9HtsPTHvv2RJH2D",
          userSupplyCap: 4e6
        },
        {
          asset: "UST",
          address: "Ab48bKsiEzdm481mGaNVmv9m9DmXsWWxcYHM588M59Yd",
          collateralMintAddress: "nZtL8HKX3aQtk3VpdvtdwPpXF2uMia522Pnan2meqdf",
          collateralSupplyAddress: "4HXDioboWL85gQocYNkWM62AB5ctrf8jVykSVco67Lzx",
          liquidityAddress: "5LyHdTXh1MSbRzE7xfTtfpV8W5eaySJnSiTs6FdHhrSo",
          liquidityFeeReceiverAddress: "4GctGML68E1kDcvskGTXRPY9ngxmxVnJXjpsJ68YBXPR",
          userSupplyCap: 5e6
        },
        {
          asset: "USDC",
          address: "BgxfHJDzm44T7XG68MYKx7YisTjZu73tVovyZSjJMpmw",
          collateralMintAddress: "993dVFL2uXWYeoXuEBFXR4BijeXdTv4s6BzsCjJZuwqk",
          collateralSupplyAddress: "UtRy8gcEu9fCkDuUrU8EmC7Uc6FZy5NCwttzG7i6nkw",
          liquidityAddress: "8SheGtsopRUDzdiD6v6BR9a6bqZ9QwywYQY99Fp5meNf",
          liquidityFeeReceiverAddress: "5Gdxn4yquneifE6uk9tK8X4CqHfWKjW2BvYU25hAykwP"
        },
        {
          asset: "SBR",
          address: "Hthrt4Lab21Yz1Dx9Q4sFW4WVihdBUTtWRQBjPsYHCor",
          collateralMintAddress: "Bpm2aBL57uqVhgxutfRVrbtnjDpZLV8PZrRrytV1LgeT",
          collateralSupplyAddress: "9wSy4XV4XN1hzp9nuC8TbCc78zDkWgu8tGNABH4cpBG5",
          liquidityAddress: "86hiF77ktrdVFU9xFqxsYChRirgs9KCvQDD9g4jT64bJ",
          liquidityFeeReceiverAddress: "7mjo1oAYVcAQmysfS64LTYi2ZkKJFveymmhYVasEc1nh",
          userSupplyCap: 1e7
        },
        {
          asset: "ETH",
          address: "CPDiKagfozERtJ33p7HHhEfJERjvfk1VAjMXAFLrvrKP",
          collateralMintAddress: "FbKvdbx5h6F86h1pZuEqv7FxwmsVhJ88cDuSqHvLm6Xf",
          collateralSupplyAddress: "BtGoQiwEWUZQfNaxSxzBgRikfT1rx3hSkzjQEWvktEMe",
          liquidityAddress: "8HAaZSiCbVqrLDQHxg3yey8JWuGbeyC2tNTEmzgmt4C4",
          liquidityFeeReceiverAddress: "86FvZEpX1y6pK5E6JPLbhoBvp6P2n1givZiikFGgi6Lj"
        },
        {
          asset: "mSOL",
          address: "CCpirWrgNuBVLdkP2haxLTbD6XqEgaYuVXixbbpxUB6",
          collateralMintAddress: "3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h",
          collateralSupplyAddress: "FG7yuhS6udX8v2LQYxqwpcsdC2J1pUREoGrRYsQjr1uh",
          liquidityAddress: "3R5SVe3qABRUYozgeMNVkSotVoa4HhTFFgWgx2G2QMov",
          liquidityFeeReceiverAddress: "83r2poRUiqaghyymPtfhhRtHdReFAKbgGGCQajkczW5w",
          userSupplyCap: 2e5
        },
        {
          asset: "USDT",
          address: "8K9WC8xoh2rtQNY7iEGXtPvfbDCi563SdWhCAhuMP2xE",
          collateralMintAddress: "BTsbZDV7aCMRJ3VNy9ygV4Q2UeEo9GpR8D6VvmMZzNr8",
          collateralSupplyAddress: "CXDxj6cepVv9nWh4QYqWS2MpeoVKBLKJkMfo3c6Y1Lud",
          liquidityAddress: "3CdpSW5dxM7RTxBgxeyt8nnnjqoDbZe48tsBs9QUrmuN",
          liquidityFeeReceiverAddress: "Cpyk5WRGmdK2yFGTJCrmgyABPiNEF5eCyCMMZLxpdkXu"
        },
        {
          asset: "RAY",
          address: "9n2exoMQwMTzfw6NFoFFujxYPndWVLtKREJePssrKb36",
          collateralMintAddress: "2d95ZC8L5XP6xCnaKx8D5U5eX6rKbboBBAwuBLxaFmmJ",
          collateralSupplyAddress: "6uEjo58ecepRyYnKRLdAMRn8ic3oJJxnwMBH96ufMSXN",
          liquidityAddress: "5JT6EK5wLEYGpAXMY2BXvhoeuQCp93eo4os2EtXwnPG1",
          liquidityFeeReceiverAddress: "2E15BsCyBeAu9TwhWKQ9yWj9a4TKoPkv7B1JjNxFF7v7",
          userSupplyCap: 5e5
        },
        {
          asset: "BTC",
          address: "GYzjMCXTDue12eUGKKWAqtF5jcBYNmewr6Db6LaguEaX",
          collateralMintAddress: "Gqu3TFmJXfnfSX84kqbZ5u9JjSBVoesaHjfTsaPjRSnZ",
          collateralSupplyAddress: "9HrQ9RuRsHjKXuAbZzMHMrYuyq62LjY3B7EBWkM4Uyke",
          liquidityAddress: "4jkyJVWQm8NUkiJFJQx6ZJQhfKLGpeZsNrXoT4bAPrRv",
          liquidityFeeReceiverAddress: "9CjhBpwiQbP2zYnj7PqHTxPPp2BCR4Y4rP4ZPWkqrCQk"
        },
        {
          asset: "stSOL",
          address: "5sjkv6HD8wycocJ4tC4U36HHbvgcXYqcyiPRUkncnwWs",
          collateralMintAddress: "QQ6WK86aUCBvNPkGeYBKikk15sUg6aMUEi5PTL6eB4i",
          collateralSupplyAddress: "9MBrzWjgw1sbca6X2M6YoUCQgN6udVeKp9oLFwuzPY2p",
          liquidityAddress: "7ma18yBbX37RbFHQXiq1XhP6c561nDnYSmF84mwiY7Wo",
          liquidityFeeReceiverAddress: "6N5JTX3hXRwudgbVxbAbMvnrW1GB4QdpFGQgYonaWj4C",
          userSupplyCap: 2e5
        },
        {
          asset: "ORCA",
          address: "FKZTsydxPShJ8baThobis6qFxTjALMkVC49EA88wqvm7",
          collateralMintAddress: "E9LAZYxBVhJr9Cdfi9Tn4GSiJHDWSZDsew5tfgJja6Cu",
          collateralSupplyAddress: "FELidXszawDEujYLV7A5u7XXFCsPCNvTHm1heJbnh36G",
          liquidityAddress: "5grnVTzYxhhhbiSdbkznMff721ZPMP3SzYhy2Yzd37jt",
          liquidityFeeReceiverAddress: "GHoC6JumDEw5CB35wqMwZK2G6NmrhjynKAdNnVNUP9ie",
          userSupplyCap: 3e5
        },
        {
          asset: "USDT-USDC",
          address: "9mZsd1b9cN7JyqJvkbqhVuTfg8PAuKjuhPxpcsVNjYoC",
          collateralMintAddress: "6XrbsKScacEwpEW5DVNko9t5vW3cim9wktAeT9mmiYHS",
          collateralSupplyAddress: "fh6Bv7k29VBYTnXBRNJX9Gqk9pZVRxwj1vjcg6M2R3M",
          liquidityAddress: "AZkoTbjXJubLng1MSa5beFks93KpArVu3f3efGvNB6CH",
          liquidityFeeReceiverAddress: "2Us5qmLmBx6rCXMg7mJGQFwvG1kq1opTvVwPKt5G8oHi",
          userSupplyCap: 1e6
        },
        {
          asset: "SOL",
          address: "8PbodeaosQP19SjYFx855UMqWxH2HynZLdBXmsrbac36",
          collateralMintAddress: "5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV",
          collateralSupplyAddress: "B1ATuYXNkacjjJS78MAmqu8Lu8PvEPt51u4oBasH1m1g",
          liquidityAddress: "8UviNr47S8eL6J3WfDxMRa3hvLta1VDJwNWqsDgtN3Cv",
          liquidityFeeReceiverAddress: "5wo1tFpi4HaVKnemqaXeQnBEpezrJXcXvuztYaPhvgC7"
        },
        {
          asset: "soFTT",
          address: "2dC4V23zJxuv521iYQj8c471jrxYLNQFaGS6YPwtTHMd",
          collateralMintAddress: "A38TjtcYrfutXT6nfRxhqwoGiXyzwJsGPmekoZYYmfgP",
          collateralSupplyAddress: "HbMugfk2UDNoCiBUqgXdPu75ksMZHvkJjRZ8YKrcPwz2",
          liquidityAddress: "9ZdwVAZsqFWtzNNGZhmQJttYQxTCVPRnaXMgA2KrQpLK",
          liquidityFeeReceiverAddress: "J4Zttvtnt2ECLyyEaxQRywAQEN4xcbHsgMF1Fhgdyow9",
          userSupplyCap: 5e5
        },
        {
          asset: "scnSOL",
          address: "DUExYJG5sc1SQdMMdq6LdUYW9ULXbo2fFFTbedywgjNN",
          collateralMintAddress: "AFq1sSdevxfqWGcmcz7XpPbfjHevcJY7baZf9RkyrzoR",
          collateralSupplyAddress: "7NJCWoLDngquvYcCPzUBLYfpS9F3eox4ibgivEGxXweU",
          liquidityAddress: "5Ynq25D3t124WkQZaaWHBXkWkMGJchVg2sCRgfu1PYbs",
          liquidityFeeReceiverAddress: "6SytVt3JLkB5VdLPxTBd5zZFGGVDXsMhf6AdcajdZTBV",
          userSupplyCap: 1e5
        },
        {
          asset: "soETH",
          address: "3PArRsZQ6SLkr1WERZWyC6AqsajtALMq4C66ZMYz4dKQ",
          collateralMintAddress: "AppJPZka33cu4DyUenFe9Dc1ZmZ3oQju6mBn9k37bNAa",
          collateralSupplyAddress: "2Yv6ZgZ9ccV8bCYD7T5t2kcAQYRbukMKha6NiPQ8cFAT",
          liquidityAddress: "B7Lg4cJZHPLFaGdqfaAWG35KFFaEtBMmRAGf98kNaogt",
          liquidityFeeReceiverAddress: "8RS6VQM1RcuVUrQmfHgF3RAUPCbsbmejgbvTLvr8ZgrV"
        },
        {
          asset: "mSOL-SOL",
          address: "6ve8XyELbecPdbzSTsyhYKiWr7wg3JpjfxE1cqoN9qhN",
          collateralMintAddress: "4icXEpFVMrcqob6fnd3jZ6KjKrc6cqre6do1f8kKAC1u",
          collateralSupplyAddress: "3nfgTBPf1N1NPNTTYk2HpJABaL59db3XKnjgJ8JGwtHJ",
          liquidityAddress: "ETnpmAETSfzmfevgUxzaHGTdDrTofHGZgCdccCHkA6nM",
          liquidityFeeReceiverAddress: "2TWjqvWCjMFBWJSx42AZYbDyihBrQqCo6URDpLhWA8L6",
          userSupplyCap: 1e4
        }
      ]
    },
    {
      name: "Coin98",
      isPrimary: !1,
      description: null,
      creator: "5pHk2TmnqQzRF9L6egy5FfiyBgS7G9cMZ5RFaJAvghzw",
      address: "7tiNvRHSjYDfc6usrWnSNPyuN68xQfKs1ZG2oqtR5F46",
      authorityAddress: "8web9hJK4TQJBV23WQpBw9jMvn3YE1EV3PEcnXJvgwQa",
      reserves: [
        {
          asset: "PAI",
          address: "A3cQwWXzsaC5nfLDf7cbakZeBAJFGf1qMxvnf4yDRUUJ",
          collateralMintAddress: "CKUk55h1JcyK7DsvSYjYVw5XiEgrB2LgXMfyuBBnRmHT",
          collateralSupplyAddress: "97AFq1qdq5rWyyaQFybFCt2bkLSk5VWuC15LPbeFZZKV",
          liquidityAddress: "7bcdN2XJBhaDuQpH7vtS6dC1spQYEogQRQyCpXKiPJir",
          liquidityFeeReceiverAddress: "8fXGHJ6ArM9cyaZkaBFsLDM4W5HdPofjMFoHgX3Bb7K7",
          userSupplyCap: 2e5
        },
        {
          asset: "UXD",
          address: "46Lh1P2XmTNG8Gnt4zkTdG1BXi2V18NggfYTbXpSzAYy",
          collateralMintAddress: "ErJswCkk3oRS9poFdRxJHt6j9yQisTB8YQAqJkE7iC5U",
          collateralSupplyAddress: "BdjGeJQNEZhCLyW89RNWgxkn3hwRMsAxncc29QNuHvRf",
          liquidityAddress: "Fr3A2agcj8G8jEVPhE1rYUQsGF85meEN5fDQ4etFp5Wi",
          liquidityFeeReceiverAddress: "AsJ7wz4a4cbP9qkX4iadD4jbfr5mcDV9D8SZdD37pm2t",
          userSupplyCap: 2e5
        },
        {
          asset: "UST",
          address: "B5513y5wt161CxLX5U2o5cGFHYbcGMuTKc6yu1ni3AbC",
          collateralMintAddress: "DWYPVVz79kAbbiL42rWtmWoyvDX9M7aGLyf9Cu7Ewvds",
          collateralSupplyAddress: "9LgyN4yyT7gYWm9MCFrRX7uapcqQ1v4CBUYcaeqU9eP2",
          liquidityAddress: "F98wY9aiUnQL24ecXMRDptvhnmF4dkPccQdAZRhnKNrp",
          liquidityFeeReceiverAddress: "4GctGML68E1kDcvskGTXRPY9ngxmxVnJXjpsJ68YBXPR",
          userSupplyCap: 2e5
        },
        {
          asset: "USDH",
          address: "3eDDvVgyxZ7aWLjLmKDYpeGHidCH7jkfHXcCXtpGqNKg",
          collateralMintAddress: "AGhAmBTQGHhDWSwmBCL91GRyv7FP3HRZarmRK6XccnM7",
          collateralSupplyAddress: "CeuaEJwGcLrAbUGaf3U3pyGpWyWujCTbVxc7bWJwBZnw",
          liquidityAddress: "BwJcKTcekXM59ML7p4gnjQEQ4p9hp5MBg4FeUS3DSdCr",
          liquidityFeeReceiverAddress: "5ZBZ37C9BiEHarAcnWeCyLwp8E1YnVQ7AWHRZwhhtTpR",
          userSupplyCap: 2e5
        },
        {
          asset: "C98",
          address: "9bVRrxPjXBxM6rEyTLcR2opvdA2UGhdDwL8CLLm1b8KP",
          collateralMintAddress: "VTyR5PvnbNAp7uAg7kr9cfAhNZEodoJrCTRGC67pAjP",
          collateralSupplyAddress: "5gurmwpjQTgcFAh8xR6ZePe2jNC6qnp4Y3EkY4Dm8iNm",
          liquidityAddress: "5w4MvZvso7Shbr9Fd1mVd5nKUuRPHQ98Jxwz7wkFqVSt",
          liquidityFeeReceiverAddress: "CcizC7YGvroMgk6zhW5MoCt2CQtF1NXxtWhAv53Q7VFe",
          userSupplyCap: 1e5
        }
      ]
    },
    {
      name: "Star Atlas",
      isPrimary: !1,
      description: "Star Atlas is a blockchain-based, space-themed, grand strategy video game built on the Solana blockchain. With ATLAS pool, holders of the ATLAS and POLIS tokens will gain additional lending/borrowing utility.",
      creator: "5pHk2TmnqQzRF9L6egy5FfiyBgS7G9cMZ5RFaJAvghzw",
      address: "99S4iReDsyxKDViKdXQKWDcB6C3waDmfPWWyb5HAbcZF",
      authorityAddress: "2vhoVMQWEc12dUEEcJ6w8j3ZnrA4Tk6w8pPFhoWfVsUy",
      reserves: [
        {
          asset: "POLIS",
          address: "29Znf6g5qmRfTdnbyRQUWvMt94Gzn2KPCzY2ixxY9Mnt",
          collateralMintAddress: "ZeTubq2tcT9s8sPGKihum5scLGoQDqtYd6BYAy15y2P",
          collateralSupplyAddress: "3E1Cinh4vYhqNKQmSBDTK8k6pxbLSr94eXWVDGvbatRP",
          liquidityAddress: "BnooBAnfoqbixXd7xJwiYBn3vU4UyE8G4uHAsfinCg3D",
          liquidityFeeReceiverAddress: "913RkijsY8rQxyuuoHs5hd4YETdhXBNwwd648ABEqXT4",
          userSupplyCap: 3e5
        },
        {
          asset: "USDC",
          address: "5hVVs474TRejwwfqsecNp97riQGDtSmhTV6jiWSxJfWR",
          collateralMintAddress: "HwdCShcytebyeLaU79FB5cD4RDJVWnN7vs5kCJr6nKf7",
          collateralSupplyAddress: "49HFHN2waPusSTK6dib6Pr8gjgGGkTjziwNczq7kDeRx",
          liquidityAddress: "3wKtbpbm5KnG3xUp51gP5MbCynPJtYvn4ZUwmm2KHBeR",
          liquidityFeeReceiverAddress: "5Gdxn4yquneifE6uk9tK8X4CqHfWKjW2BvYU25hAykwP"
        },
        {
          asset: "ATLAS",
          address: "8RX5oDxnydPPsA92epWnyXrrM26w7JgAQoVVt9kbiZwq",
          collateralMintAddress: "EHFzasjYT1VmeKtvPtPCytJugQFBoYdhXXBt2WazinfY",
          collateralSupplyAddress: "GCagCmPq1uUV43DtWSd4rKh3eP8JdxE2XSKCUBJzyK2X",
          liquidityAddress: "DGMYGHmQiCs9H1MUxe57H78Ea1jwkAynzEfDKXUkF6ZT",
          liquidityFeeReceiverAddress: "3iyLRAJyLS6QMkVs4aD5KiUBDizjxtqHv4RbX3hGCrRz",
          userSupplyCap: 2e7
        }
      ]
    },
    {
      name: "Dog",
      isPrimary: !1,
      description: "The Dog pool currently contains SAMO, the premier community token and symbol of the Solana ecosystem. Over time, this pool will grow to contain your favourite dog-themed meme coins. Earn interest and borrow while holding your favourite dog coins.",
      creator: "5pHk2TmnqQzRF9L6egy5FfiyBgS7G9cMZ5RFaJAvghzw",
      address: "HASr6hiYVoRcVXk3GttC4PjBBPQ3sGYDzE7HSPJdcke6",
      authorityAddress: "DLokPHis2W5f3jQ4Kgv5PQHebkun2KQtsXcFidhR19Za",
      reserves: [
        {
          asset: "USDC",
          address: "5VuBkDYXcV1svRm1BKShA2wqKsszYWjPwoT4Q32YXcp3",
          collateralMintAddress: "9zCPUDEF5oGymtihmPQL6bUUxarno7w6qzM7Amiyh9bw",
          collateralSupplyAddress: "5YjjhzNHQoBdisyMrxhmt2nwy8yoQ9zA7o2ruUZg894g",
          liquidityAddress: "yumozQYL4ddiEDLhpUqa7o4UpUg46pkbmGsEF5cJibs",
          liquidityFeeReceiverAddress: "5Gdxn4yquneifE6uk9tK8X4CqHfWKjW2BvYU25hAykwP"
        },
        {
          asset: "SAMO",
          address: "HwZSKqyo2QQ2YCzF282ZrpH4JRQWf3Qad1fWHtKCDZjx",
          collateralMintAddress: "E9qQ9pdZjk9zvm7Qp3UUynddJMadK85F8ZNqWyeUHcjV",
          collateralSupplyAddress: "DzERiPrzkwRi4pG5SsWaevVr2jSNhRkwNCibx5eP5K1g",
          liquidityAddress: "GHnH17QEJvVv7bqzqrhPMrLpTvdbZW4e1jxn8ZnbgUFF",
          liquidityFeeReceiverAddress: "Ag3ZHEVDZPUkTQSeCs6BMmh7xweakVvUuef76tT7Syt9",
          userSupplyCap: 25e6
        }
      ]
    },
    {
      name: "Stable",
      isPrimary: !1,
      description: "The Stable pool contains only stablecoins, and allows for leverage through high loan-to-value ratios. This enables better price discovery since it allows for leveraged basis trades.",
      creator: "5pHk2TmnqQzRF9L6egy5FfiyBgS7G9cMZ5RFaJAvghzw",
      address: "GktVYgkstojYd8nVXGXKJHi7SstvgZ6pkQqQhUPD7y7Q",
      authorityAddress: "Ej4KxxUz73edQzjfsPVWvYxT5eyhQoWoXpo7BYm2Ejhj",
      reserves: [
        {
          asset: "UXD",
          address: "27YJsVpHWvjS8BKaz7Gd8unSFJAMrh6gPEFjqhYxn9AE",
          collateralMintAddress: "3R3mzc8o9oXCsBX2dKG7Bzc3ov1m7t4UHtb81ktAeCxY",
          collateralSupplyAddress: "6RTTJkwZ7NuK4JaJnnaUgqU78gaW3A8McDTfiGsBBbLX",
          liquidityAddress: "9v6c1QVoyQxX6hWKGCYLwcunc3JfMWQLcMS3KWR5Kqhf",
          liquidityFeeReceiverAddress: "AsJ7wz4a4cbP9qkX4iadD4jbfr5mcDV9D8SZdD37pm2t"
        },
        {
          asset: "UST",
          address: "A57FVdDgcyz1NserCSMSWaWDyfWZw77ikfXvE2cwPF18",
          collateralMintAddress: "5czXDWSVFjH16hJGvwZTE8sMbh4vQggZ1gMhyVE4RWgx",
          collateralSupplyAddress: "4VDZMvxihqGggUYGiDbce2WTgsKDBeN47128Bkv72vsc",
          liquidityAddress: "GRcfCPgSMBKuJicp76qRRdpFQnPnZ5KzHB2wD5nbJ3Wx",
          liquidityFeeReceiverAddress: "4GctGML68E1kDcvskGTXRPY9ngxmxVnJXjpsJ68YBXPR"
        },
        {
          asset: "PAI",
          address: "DyJZX45rgh9nADa19tsFeSV69ZwvX4UqPoPP39mdBiDq",
          collateralMintAddress: "Bd5pFCJf9AafuXZkfkU6SDZVpeE5xAqX69bs8nDSxd2J",
          collateralSupplyAddress: "4xRmRbur3HAc4nNLaAYKgZDXiEtCVc2a9wA5TSsmS1qP",
          liquidityAddress: "9RZi6AMPGmBZ9isLkQikvLwANNQ6UWZsyv9537KLo8EV",
          liquidityFeeReceiverAddress: "8fXGHJ6ArM9cyaZkaBFsLDM4W5HdPofjMFoHgX3Bb7K7"
        },
        {
          asset: "USDC",
          address: "JCRDg9T5mUUxazdJ2nGWDN2pdcXVQc5VM8XDp1DW6Aoa",
          collateralMintAddress: "4JZ6PXqRDp8jQxXUYX9cbAzHi6uzZk856aoAqPGdV5Da",
          collateralSupplyAddress: "7JF8e93t52SGFUHzMt5cD7vte4b8gWZHY99GLziAUeiP",
          liquidityAddress: "z7yTesDCUkvheHnULMjS6dggiiVczpX5JjfTx5atRgQ",
          liquidityFeeReceiverAddress: "5Gdxn4yquneifE6uk9tK8X4CqHfWKjW2BvYU25hAykwP"
        },
        {
          asset: "USDT",
          address: "aMyCaGf7MwsqpgoeioVGXZytadsjFZ6euuYSadLcXbY",
          collateralMintAddress: "9wCxum1oB9JpgPUuVmsPTqDDvKeQqP3rnGFg3GEMrUGT",
          collateralSupplyAddress: "8MaWP9fsX9FrzPGLsxvUfNu8Sr5rR3M8rerwHAQpFxsn",
          liquidityAddress: "E2cfK7KdG5NRzsFzD8o3pib7af7DmFLrfP6WbU44H3Cw",
          liquidityFeeReceiverAddress: "Cpyk5WRGmdK2yFGTJCrmgyABPiNEF5eCyCMMZLxpdkXu"
        },
        {
          asset: "USDH",
          address: "NoTf6a9khWa5cCh6v5RRronH7YuatY7gDWmdKUPoBhM",
          collateralMintAddress: "DE9WN39kGuqZwsBpmd8Fs8F7b4T38nzpiNo8DseznLBU",
          collateralSupplyAddress: "3WKotLKSFoNjPAymuP3HdkkRmoQE7cY1JrL7vnTCMWRW",
          liquidityAddress: "BMgsTqMrAYg2mvpqWYYkzUDjhVmipZjVMGRFE9z5y8GF",
          liquidityFeeReceiverAddress: "5ZBZ37C9BiEHarAcnWeCyLwp8E1YnVQ7AWHRZwhhtTpR"
        }
      ]
    },
    {
      name: "TURBO SOL",
      isPrimary: !1,
      description: "The TURBO SOL pool offers increased LTV to allow a leveraged SOL position up to 10x. Higher leverage comes at the cost of increased liquidation risk so proceed with caution.",
      creator: "5pHk2TmnqQzRF9L6egy5FfiyBgS7G9cMZ5RFaJAvghzw",
      address: "7RCz8wb6WXxUhAigok9ttgrVgDFFFbibcirECzWSBauM",
      authorityAddress: "55YceCDfyvdcPPozDiMeNp9TpwmL1hdoTEFw5BMNWbpf",
      reserves: [
        {
          asset: "USDC",
          address: "EjUgEaPpKMg2nqex9obb46gZQ6Ar9mWSdVKbw9A6PyXA",
          collateralMintAddress: "HKijBKC2zKcV2BXA9CuNemmWUhTuFkPLLgvQBP7zrQjL",
          collateralSupplyAddress: "8YGu5iFMKHau2XjVBwKiyPjY2rYpbaLMyxfVhM916jPd",
          liquidityAddress: "49mYvAcRHFYnHt3guRPsxecFqBAY8frkGSFuXRL3cqfC",
          liquidityFeeReceiverAddress: "5Gdxn4yquneifE6uk9tK8X4CqHfWKjW2BvYU25hAykwP"
        },
        {
          asset: "SOL",
          address: "UTABCRXirrbpCNDogCoqEECtM3V44jXGCsK23ZepV3Z",
          collateralMintAddress: "AVxnqyCameKsKTCGVKeyJMA7vjHnxJit6afC8AM9MdMj",
          collateralSupplyAddress: "9QqRewoWbePkSH919xXn826h67ea1EFAVXhTdiJArDnx",
          liquidityAddress: "5cSfC32xBUYqGfkURLGfANuK64naHmMp27jUT7LQSujY",
          liquidityFeeReceiverAddress: "5wo1tFpi4HaVKnemqaXeQnBEpezrJXcXvuztYaPhvgC7"
        }
      ]
    },
    {
      name: "Step",
      isPrimary: !1,
      description: "Step Finance is a transaction aggregation and portfolio management platform that enables users to transact and monitor the entire Solana ecosystem in one easy to use location. The Step pool allows STEP and xSTEP tokens to be deposited and borrowed.",
      creator: "5pHk2TmnqQzRF9L6egy5FfiyBgS7G9cMZ5RFaJAvghzw",
      address: "DxdnNmdWHcW6RGTYiD5ms5f7LNZBaA7Kd1nMfASnzwdY",
      authorityAddress: "csotR9rcbLV3bCzBKxNJ3GjYhzH9cXffZX3TAQpw4oG",
      reserves: [
        {
          asset: "SOL",
          address: "7trBAMkVU8dcPQVdScz7VNywZwqnD1rwXkwkVPQJ95bT",
          collateralMintAddress: "7criSZai4hqKukScLUa5W2UV6Q9pjFMdJjQphKavBqur",
          collateralSupplyAddress: "Cw43LkrYXWQUufbP11DKBJBikkxtXeseCuH1WMQDh6q",
          liquidityAddress: "FR1tYTYEcMhBiuETNs1b5DZft2pT6oEJBixDZ1Qe1WHw",
          liquidityFeeReceiverAddress: "5wo1tFpi4HaVKnemqaXeQnBEpezrJXcXvuztYaPhvgC7"
        },
        {
          asset: "STEP",
          address: "C5ozcRb4PJeJvakPeGgm9bgwcL6rPcKPfV95d2owW86C",
          collateralMintAddress: "9XtoqcLnc1psQuTPTGjfEwwabzBeUeFihvyZptcALwph",
          collateralSupplyAddress: "9PJCVs62fyRiQ1v9DqxD83TXDXqHabVeAUW2sHpsG13t",
          liquidityAddress: "CCfF5XivAg682CbZkHw4oMYj9wSTnEUeFLcn4pUjZJ8F",
          liquidityFeeReceiverAddress: "Fzbt2QWmMsK7YW7AAF4nwkJMARpviPXo8CgfBX1oLD4u",
          userSupplyCap: 25e5
        },
        {
          asset: "USDC",
          address: "FCU2wpx3ED1dY7bKszzcyxUVNTduLurUEmCGGv2w3Lfm",
          collateralMintAddress: "7tBwN1tWTNsepwJcuD46zPBu6FuivWMvN2J5zP6HoPYg",
          collateralSupplyAddress: "BPhX4N7r9z9HQTAVDyfvVcYWbjsWiL476vsWAYYFh5Lg",
          liquidityAddress: "E4g9gNiwtxUcdaP8C7Sx99YVArWCceSkTSErpXGCnMuB",
          liquidityFeeReceiverAddress: "5Gdxn4yquneifE6uk9tK8X4CqHfWKjW2BvYU25hAykwP"
        },
        {
          asset: "xSTEP",
          address: "HH9Aig5MAvMNcivGfAbWU5Da9nfiTwBaYJBK2KZyZppn",
          collateralMintAddress: "E1hgwtGqjT4po2vg1LFGvf5XiZgUZBQeabcstQympPPa",
          collateralSupplyAddress: "B4Gsh8FpAuxvVknRny2xSvdt3T1N15RAuDrt3Yg4FDVC",
          liquidityAddress: "38xTjUm1egfkDojm8jesRWtpy9j3fepPAwBgAHZFQMuD",
          liquidityFeeReceiverAddress: "8nzMDB9bp2BNpkL3QSgPEmCpevEhFrb8vigvLqxAzecv",
          userSupplyCap: 25e5
        }
      ]
    },
    {
      name: "NFT",
      isPrimary: !1,
      description: "The NFT pool contains Solvent droplets, which are tokens that track the floor price of a collection and can always be redeemed for any NFT in the bucket at a 100:1 ratio. This pool unlocks borrowing against NFT price exposure, also enabling leverage longing and shorting.",
      creator: "5pHk2TmnqQzRF9L6egy5FfiyBgS7G9cMZ5RFaJAvghzw",
      address: "29yTiqjGdoNiRLMVc7ZoqFpbW3gkmefwMG9SUiMMD4J9",
      authorityAddress: "BtDeXoN6L5s5Nodvny3qvwK55b3YLcFkL7KqvKD7bFNz",
      reserves: [
        {
          asset: "SMBD",
          address: "EpZipddM7X7TofTzypVaz9GkjBziWgZZCgPz9HhGAB1t",
          collateralMintAddress: "5NBAYi6ELmNCvxy1QQ3iLaNRidRSBM9R8DN4bVK6kXM2",
          collateralSupplyAddress: "GwGEZ7iuookTDMzq3gWmboEmvrRCTYGJGimKTxefy12D",
          liquidityAddress: "7QWfEYXGDDFabUGRXkQXmNHgEfmMBZPjEhCECzJFG8EL",
          liquidityFeeReceiverAddress: "37iSf9SzU8P3JVvHNYUg22JHfWCysvtR9bneYB2h9rBb",
          userSupplyCap: 200
        },
        {
          asset: "SOL",
          address: "8xogd14bBxBdGKDfkDciPPp6pZ3Cw4Yj5USRbGJDbZpA",
          collateralMintAddress: "83xjxt6wQzci6zgEukhswGVwesHC94D6C7q6fUZaAThb",
          collateralSupplyAddress: "ECJtpWhPfG8R6qQVrps5cm9NqyNZPk1iE5wN8Cj3H6RG",
          liquidityAddress: "Czx5rru4gktqTdiheTyT9TPCQ8A677ykXyKFeVxJDm1U",
          liquidityFeeReceiverAddress: "5wo1tFpi4HaVKnemqaXeQnBEpezrJXcXvuztYaPhvgC7",
          userSupplyCap: 1e4
        },
        {
          asset: "USDC",
          address: "8WpwDA1qs28vrkS3q1B8pfEXNP5MMkAc9qhiQZeYBK9N",
          collateralMintAddress: "Awi5FDTwSH5XKH11kDLynccJPQbvKgkGFaekExSRk5QM",
          collateralSupplyAddress: "H4Z2n1wamM8Q3tmyimLn62VwFzjWu6CesnQqE12ZVNWA",
          liquidityAddress: "6HiP2psv16ddfPmnc5mTxxKyKuFNdB3a6ZrNBihSt5hH",
          liquidityFeeReceiverAddress: "5Gdxn4yquneifE6uk9tK8X4CqHfWKjW2BvYU25hAykwP",
          userSupplyCap: 1e6
        },
        {
          asset: "DAPE",
          address: "5mrrZ1rZmKZtzNdoCojfHqQzzf89k3PdJnkiq1ano7ti",
          collateralMintAddress: "EJUNzHVka2MWnTA81Jp1NjUNhvGb8Lb1SDevHR4Eqn4r",
          collateralSupplyAddress: "GBaPd92TrRj9RjmnkH7WaBajD5Kea8CHngBgNV8TuvkK",
          liquidityAddress: "37rjRZ2Y6eWY4k58WgPvHmv6JjKwBSUjhigyNDVQDisj",
          liquidityFeeReceiverAddress: "Co76cu45Y2eiCCiktXsgACgH4f9muHWv8JFpY2Nyk3no"
        }
      ]
    },
    {
      name: "Invictus",
      isPrimary: !1,
      description: "The Invictus pool contains the Locked Staked IN (lsIN) token which allows you to earn lsIN staking yields while using it as collateral.",
      creator: "5pHk2TmnqQzRF9L6egy5FfiyBgS7G9cMZ5RFaJAvghzw",
      address: "5i8SzwX2LjpGUxLZRJ8EiYohpuKgW2FYDFhVjhGj66P1",
      authorityAddress: "6N6tqnemGoR5pUdtKKp3FvdD94Gi98f2ySEo1dzZ2Uqv",
      reserves: [
        {
          asset: "USDC",
          address: "AuT5vA4bScsaJBiyNHnAttKToTCHj4Kwi4sg8bCyPPr8",
          collateralMintAddress: "DR1b9VzSe8o658UVJL9b6XzqkRmurcmLujpZRaBL3yDU",
          collateralSupplyAddress: "2877K885jCdVts6X5Kn7gPbezNPhXufEbheUbVwoZmAi",
          liquidityAddress: "GwRqjjkj7JhB4Tqi8PDLKTnESCtBRJwJsGZzg5NQb38W",
          liquidityFeeReceiverAddress: "5Gdxn4yquneifE6uk9tK8X4CqHfWKjW2BvYU25hAykwP",
          userSupplyCap: 5e5
        },
        {
          asset: "lsIN",
          address: "4XYbgZJirfnwjmpJKQgMQEvjncYFi2CsPTFzBguCjCjG",
          collateralMintAddress: "5Jk2vER2x9WGAZmVGEafBtkEzjYB4mcvvVHbxMcbprhJ",
          collateralSupplyAddress: "734df6ZLSzQhyDyqwk8YaKdG2rWPMP6fdsBfxDREZ1nf",
          liquidityAddress: "BQHcDqbe9SC5yXcxwNGozD17CPfUvq6q95Lvfv8ZhRU1",
          liquidityFeeReceiverAddress: "FaWVdXqVxcZqW3vdiAouAPxhyK29vWR78ec5GmfayJzc",
          userSupplyCap: 3e4
        },
        {
          asset: "UST",
          address: "7MymBKwTPPMC4A9Ktwc1F2V5Xw7Kj3DqvRYUvLk2SF4h",
          collateralMintAddress: "5vxqpDHcHhhJBwNdgeFjfJ814qL36S4fJneSihYccZNg",
          collateralSupplyAddress: "EKnFN4ehqwdu8RDmZ2hKnsEMJvA2Jnaszbydae8axbMu",
          liquidityAddress: "9DboZFVjGtPtzXKg8dy7RMDGr1hmk43BkhVF9Nz8atFc",
          liquidityFeeReceiverAddress: "4GctGML68E1kDcvskGTXRPY9ngxmxVnJXjpsJ68YBXPR",
          userSupplyCap: 5e5
        }
      ]
    },
    {
      name: "Bonfida",
      isPrimary: !1,
      description: null,
      creator: "5pHk2TmnqQzRF9L6egy5FfiyBgS7G9cMZ5RFaJAvghzw",
      address: "91taAt3bocVZwcChVgZTTaQYt2WpBVE3M9PkWekFQx4J",
      authorityAddress: "76Asux4XZYqrP61G52eRZRQ6GCUPQUmYme3hTCaNgmxv",
      reserves: [
        {
          asset: "FIDA",
          address: "A3ZhKMuwHygRqjXiMDqM2PyeT35Z1LiDUqwrtjiHn89M",
          collateralMintAddress: "ArohPh341JrQsWk7paiUwJKDe4MjvhtE5XxjYUoiM2fH",
          collateralSupplyAddress: "FuFEvCPuCkCPn9rW3uZ7bcmLERxFzFJPRfSSyAyZNLzb",
          liquidityAddress: "CaVSnSWA1Tpbm79YY2SVtkkKp89AiDxifgdxoWyZLSom",
          liquidityFeeReceiverAddress: "61bnpU4YGZe6iHrg44HT1B3v4bPyvxwfqRixwP2ft6t6",
          userSupplyCap: 3e5
        },
        {
          asset: "SOL",
          address: "3WPYWiZtc2uJq1JiF3Z3KswicFAp5VrFgEHwP3CkuDUn",
          collateralMintAddress: "2fHFudEbottFSbpe8oX5KyCDrnx8tfgL8PFj67iz9Y2h",
          collateralSupplyAddress: "AmVdrQeciRQiuisGKuuQrno6ZpygGimBvqFUwBTdrAZn",
          liquidityAddress: "urW2JA3FeBHjug7ingkuWh4rWJv3X8k2fnbQg2g8bNx",
          liquidityFeeReceiverAddress: "5wo1tFpi4HaVKnemqaXeQnBEpezrJXcXvuztYaPhvgC7"
        },
        {
          asset: "USDC",
          address: "EBRtjgHJiEBYnQ5QzTGcBxTwbapEQ3bvh1BrgaGzhX9e",
          collateralMintAddress: "7ziVqwra9BTyzXwFTL6JBMY4LtHdQZeQ9cqLkTKeYvoq",
          collateralSupplyAddress: "CoAKRsiTBt9vQK5irMS3HmLLRKEtSNuGLmb8RaxKnK7P",
          liquidityAddress: "HG9yB9xfeqxy4ZntKkLt8mzJ71ZsAf5cpsvybszZJ6Ni",
          liquidityFeeReceiverAddress: "5Gdxn4yquneifE6uk9tK8X4CqHfWKjW2BvYU25hAykwP"
        }
      ]
    },
    {
      name: "UXD",
      isPrimary: !1,
      description: "The UXD Pool contains the UXP governance token and the UXD stablecoin. Deposit UXD & UXP to earn supply yields or borrow SOL/USDC against them.",
      creator: "81KTtWjRndxGQbJHGJq6EaJWL8JfXbyywVvZReVPQd1X",
      address: "HCuEqcXaGeioiJf5vNMTyQC7HMPqJm5aZPkSjA2qceDS",
      authorityAddress: "AwT1ixXdQcjQMgDWpzyNQhMyuU3z2hbMGcEYT9sHBAsU",
      reserves: [
        {
          asset: "SOL",
          address: "3x4swTGLgBkCDmxXYQRP96J1evCgy3ZsnUf9YJzVPtNy",
          collateralMintAddress: "29icHQwfhSgSo3MYjtAgCXKyfFn6RETz2sREEtgfaXy4",
          collateralSupplyAddress: "7GeuioxrRAthYL2YPJDubA3jgLQWwTLexh7Ds6hqX99m",
          liquidityAddress: "8jVVXXxzC9N5FeHUxKBgXLM8xARzLpnzXz8dqZHzpykY",
          liquidityFeeReceiverAddress: "5wo1tFpi4HaVKnemqaXeQnBEpezrJXcXvuztYaPhvgC7"
        },
        {
          asset: "UXP",
          address: "BvZwsK3v8gqHqhNMDnGsD7z2V83bGzw82o2vrqU3kvBC",
          collateralMintAddress: "Gqi3AojEduDqgyNuKzTwW3QPwUD55J2WzbCuYaqCDMiU",
          collateralSupplyAddress: "2WHngM1w2PzwFrhofmZBjgkUpTiXH9prfUGa396YiLk8",
          liquidityAddress: "Fz5gcq7Z8kYRc4QkuKh46EuFjpFrpwbuZJAhkca2d1rX",
          liquidityFeeReceiverAddress: "D2RWgT3kstRwNhED76mDT9PuXRZeEP3jQ6wyJdgaf5YR"
        },
        {
          asset: "UXD",
          address: "GseYnT313pSLAVidDwKWzo48QRFMmaoF2QLk3fK8DpZU",
          collateralMintAddress: "GDkx8oKUf5rHx1UNCaMfvjwEGa8uZy6ECYmzGh3Pkxef",
          collateralSupplyAddress: "DyNMTn6V7pFmWHR4uUDgCbmiDSFp2rwSBcgEUTxW7C83",
          liquidityAddress: "GfNYgNM5rJrCXYVGnVvfgcucmsyoGTBoJZgdqAviUSqe",
          liquidityFeeReceiverAddress: "AsJ7wz4a4cbP9qkX4iadD4jbfr5mcDV9D8SZdD37pm2t"
        },
        {
          asset: "USDC",
          address: "Br6ucRrPNrJXPMa31FGBqS9WH86YGMQvu8Lv4dma8R5k",
          collateralMintAddress: "5vsr61rdgfeCtWTZHv54y7jkJ4xKg9WQDT4UusBsnePf",
          collateralSupplyAddress: "3TmYkdfGeeNtjRNoDdXXaTH2dFJseyREMuB6xDNZ6bnq",
          liquidityAddress: "T9WZyVsbL2Jvn9H9tenx2rQyi2dUtdRtGiLDvNU984p",
          liquidityFeeReceiverAddress: "5Gdxn4yquneifE6uk9tK8X4CqHfWKjW2BvYU25hAykwP"
        }
      ]
    },
    {
      name: "STEPN",
      isPrimary: !1,
      description: "The STEPN pool allows users to deposit or borrow GST, GMT, and USDC. This pool can be used to hedge or gain leveraged exposure. For example, a user could borrow GST to fix or upgrade their shoes, then pay it off by walking.",
      creator: "81KTtWjRndxGQbJHGJq6EaJWL8JfXbyywVvZReVPQd1X",
      address: "BjsAGLZzAgBUsiaTTDQv7PWDUDL9dQfKvYwb4q6FoDuD",
      authorityAddress: "CqEyTyxQDSwqFcrp7GXqEhhyeDNGvYrhyDkWtUcaa9oG",
      reserves: [
        {
          asset: "GST",
          address: "CaacWq72hHubpwi92UUVsoE4xDNKqr1MhRwYeqH3YPAU",
          collateralMintAddress: "GHuZTLtRqFH6s6nkRBaaHFrVuVpepuvHsNApX4zvP3Hg",
          collateralSupplyAddress: "AJSkG29hrcLB6omKbzGknLNJd9wGnABdcvcj6Jbeb5ti",
          liquidityAddress: "7jVwZVTJijefxy2uFv63MGXrM9xsXeoizKh5kBBuDjb8",
          liquidityFeeReceiverAddress: "EHbPN4aP2y9WAYY5Xmnsyy8dUtBWwQ17gSfNrTBgLgvd"
        },
        {
          asset: "USDC",
          address: "DxdbG2YwFFJeePbNFZRXuF2Sx34B1NTxWNbeEHdo4rzb",
          collateralMintAddress: "9E4YoiXauf22frwmioB7WFkQ2XAaTgKV7J7YsvM4TAN",
          collateralSupplyAddress: "CKzzNHHJhtva2aZkj3YNFU1X9N3zEBMGqjG7Ay3yUVdX",
          liquidityAddress: "7yYA4taed8iZknuQSnERwmygCTQiR1HEoQAdURgxBGTw",
          liquidityFeeReceiverAddress: "5Gdxn4yquneifE6uk9tK8X4CqHfWKjW2BvYU25hAykwP"
        },
        {
          asset: "GMT",
          address: "BqYvhari2P9mXYLqcgJv41kRUvLhBfGoQXGWHnw26UJw",
          collateralMintAddress: "C8Pm2aMMdvHHBV1QDFzTGMrTs5k6MdDjxBwJEXX3aJ5U",
          collateralSupplyAddress: "Gh9ueJbjei9L5ZRGs3JqqhMkbDL6BfeJt9JkVx2YC7z1",
          liquidityAddress: "Fth8CM3Vj3vPgioTZqXPvfZz44coUsfr8fkMgS2x7zUt",
          liquidityFeeReceiverAddress: "EFZRzYzb3iFjjt2iPgPRCA2etwNu9VwzWpQ8mxvTHZkG"
        }
      ]
    }
  ],
  oracles: {
    pythProgramID: "FsJ3A3u2vn5cTVofAjvy6y5kwABJAqYWpe4975bi2epH",
    switchboardProgramID: "DtmE9D2CSB4L5D6A15mraeEjrGMm6auWVzgaD8hK2tZM",
    assets: [
      {
        asset: "SRM",
        priceAddress: "3NBReDRTLKMQEKiLD5tGcx4kXbTf88b7f2xLS9UuGjym",
        switchboardFeedAddress: "BAoygKcKN7wk8yKzLD6sxzUQUqLvhBV1rjMA4UJqfZuH"
      },
      {
        asset: "SLND",
        priceAddress: "HkGEau5xY1e8REXUFbwvWWvyJGywkgiAZZFpryyraWqJ",
        switchboardFeedAddress: "7QKyBR3zLRhoEH5UMjcG8emDD2J2CCDmkxv3qsa2Mqif"
      },
      {
        asset: "FTT",
        priceAddress: "8JPJJkmDScpcNmBRKGZuPuG2GYAveQgP3t5gFuMymwvF",
        switchboardFeedAddress: "6SqRewrr5f4ycWy7NvLmNgpXJbhwXrtTc1erL9aq2gP3"
      },
      {
        asset: "MER",
        priceAddress: "G4AQpTYKH1Fmg38VpFQbv6uKYQMpRhJzNPALhp7hqdrs",
        switchboardFeedAddress: "5pHX3fd81SpGywzsw4R12L3Xu3qd418h1PcnHpQAiMWA"
      },
      {
        asset: "UST",
        priceAddress: "H8DvrfSaRfUyP1Ytse1exGf7VSinLWtmKNNaBhA4as9P",
        switchboardFeedAddress: "8o8gN6VnW45R8pPfQzUJUwJi2adFmsWwfGcFNmicWt61"
      },
      {
        asset: "USDC",
        priceAddress: "Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD",
        switchboardFeedAddress: "CZx29wKMUxaJDq6aLVQTdViPL754tTR64NAgQBUGxxHb"
      },
      {
        asset: "SBR",
        priceAddress: "8Td9VML1nHxQK6M8VVyzsHo32D7VBk72jSpa9U861z2A",
        switchboardFeedAddress: "Lp3VNoRQi699VZe6u59TV8J38ELEUzxkaisoWsDuJgB"
      },
      {
        asset: "ETH",
        priceAddress: "JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB",
        switchboardFeedAddress: "QJc2HgGhdtW4e7zjvLB1TGRuwEpTre2agU5Lap2UqYz"
      },
      {
        asset: "mSOL",
        priceAddress: "E4v1BBgoso9s64TQvmyownAVJbhbEPGyzA3qn4n46qj9",
        switchboardFeedAddress: "CEPVH2t11KS4CaL3w4YxT9tRiijoGA4VEbnQ97cEpDmQ"
      },
      {
        asset: "USDT",
        priceAddress: "3vxLXJqLqF3JG5TCbYycbKWRBbCJQLxQmBGCkyqEEefL",
        switchboardFeedAddress: "5mp8kbkTYwWWCsKSte8rURjTuyinsqBpJ9xAQsewPDD"
      },
      {
        asset: "RAY",
        priceAddress: "AnLf8tVYCM816gmBjiy8n53eXKKEDydT5piYjjQDPgTB",
        switchboardFeedAddress: "CppyF6264uKZkGua1brTUa2fSVdMFSCszwzDs76HCuzU"
      },
      {
        asset: "BTC",
        priceAddress: "GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU",
        switchboardFeedAddress: "74YzQPGUT9VnjrBz8MuyDLKgKpbDqGot5xZJvTtMi6Ng"
      },
      {
        asset: "stSOL",
        priceAddress: "Bt1hEbY62aMriY1SyQqbeZbm8VmSbQVGBFzSzMuVNWzN",
        switchboardFeedAddress: "9r2p6vyF8Wp5YB2DASK95yuXEakQth6wmUmV2DpH91WX"
      },
      {
        asset: "ORCA",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "EHwSRkm2ErRjWxCxrTxrmC7sT2kGb5jJcsiindUHAX7W"
      },
      {
        asset: "USDT-USDC",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "GnTHvhe4opQXHL4JGgDpfQKk2JY1ugmVLWvJocTH639q"
      },
      {
        asset: "SOL",
        priceAddress: "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG",
        switchboardFeedAddress: "AdtRGGhmqvom3Jemp5YNrxd9q9unX36BZk1pujkkXijL"
      },
      {
        asset: "soFTT",
        priceAddress: "8JPJJkmDScpcNmBRKGZuPuG2GYAveQgP3t5gFuMymwvF",
        switchboardFeedAddress: "6SqRewrr5f4ycWy7NvLmNgpXJbhwXrtTc1erL9aq2gP3"
      },
      {
        asset: "scnSOL",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "DpzEKDSszosuzRUdRYzEcEbt6iZ4xhVEANQSRAYDYw8h"
      },
      {
        asset: "soETH",
        priceAddress: "JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB",
        switchboardFeedAddress: "QJc2HgGhdtW4e7zjvLB1TGRuwEpTre2agU5Lap2UqYz"
      },
      {
        asset: "mSOL-SOL",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "6ZuSuX14mxyZQ8JgjAC9PoDcbAU9sr1umUoyYVseVaNF"
      },
      {
        asset: "PAI",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "G26LmGqGvoggYQm2zEKD15rL4LutkZFrtP8mRPd6gPjk"
      },
      {
        asset: "UXD",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "Lj3y2beRYhCaQQH9SYjmMJv3uuTcqpCJjQYe4829FAL"
      },
      {
        asset: "USDH",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "37NFcKPTgqUVx3gwTQ4c2Q94oJWk2xZy3NQUXtDixReb"
      },
      {
        asset: "C98",
        priceAddress: "45rTB9ezDcTX5tMZx2uJUBbBEqAWDhXykYbBfaSWUXvD",
        switchboardFeedAddress: "6Lh96cq8JN9VuzRcRa6u27GXKi6P4f2SvSYJ41TqhsnZ"
      },
      {
        asset: "POLIS",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "3wFcT6hG5RYarNS3Z8FwoanBRm4PN4MBhkCiJGKWBa3v"
      },
      {
        asset: "ATLAS",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "63TGehKbqbaQUowgLudRybxQmT7p41NJxHEfkqUtyQRt"
      },
      {
        asset: "SAMO",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "DCXJ2dhdfh6UZH5zgMMHmzXTa52kbnXU3R7eDWD7jLH5"
      },
      {
        asset: "STEP",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "4bTCjzmtdRgK4ZvdaxX1Fx1Z3h6iApfM5qoaAhQBJAkj"
      },
      {
        asset: "xSTEP",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "7whYKCH5zQVQeLqgnWW6qXME3sxQozByaFbhbVwhYMkP"
      },
      {
        asset: "SMBD",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "3VxjTPfkngSYkrATdeS1sgZxzkhNePhkczquUNxb44jm"
      },
      {
        asset: "DAPE",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "BTWdcU1yxn3CFnhcoVngcLNQwCcNbJhf8KqhDx5LuLFS"
      },
      {
        asset: "lsIN",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "3YUHvezfoeY8JxLB624bnk3mamLDnJZ6VTUs9ezwJTDo"
      },
      {
        asset: "FIDA",
        priceAddress: "ETp9eKXVv1dWwHSpsXRUuXHmw24PwRkttCGVgpZEY9zF",
        switchboardFeedAddress: "GyiFJtWLYGGTCNTpnHCVKinzWpwLJN3PnscsRdqypFAL"
      },
      {
        asset: "UXP",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "EsQkrtuJdRnDp6JvAcmRiYGoQbWL668TEZDW8VmrNcm3"
      },
      {
        asset: "GST",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "JA1GQW8ta1LjNn3h1vZmhL3fWEdZ6F9QfZHvPB4y7fLm"
      },
      {
        asset: "GMT",
        priceAddress: "nu11111111111111111111111111111111111111111",
        switchboardFeedAddress: "Bys1SNouEqVdbUWj93GfpqwY1bsWjYVYtNZG1QdV5Y1B"
      }
    ]
  }
};

// app/util/chainUtils/solana/solanaAddresses.ts
var getOrCreateATA = async (connection, mint, owner, payer) => {
  let address = (0, import_token_utils.getATAAddressSync)({ mint, owner });
  return await connection.getAccountInfo(address) ? { address, instruction: null } : {
    address,
    instruction: (0, import_token_utils.createATAInstruction)({
      mint,
      address,
      owner,
      payer
    })
  };
}, getFluidInstructionKeys = async (publicKey, token, fluidToken, ata, fluidAta, obligationInfo, dataAccount) => {
  let pdaAccount = await FluidityInstruction.getProgramAddress(token.symbol), market = [...mainnet_production_solend_default.markets].find(
    ({ name }) => name === "main"
  );
  if (!market)
    return null;
  let reserve = market.reserves.find(
    ({ asset }) => asset === token.symbol
  ), solendAsset = mainnet_production_solend_default.oracles.assets.find(
    ({ asset }) => asset === token.symbol
  );
  if (!solendAsset || !reserve)
    return null;
  let solendProgram = mainnet_production_solend_default.programID, reserveInfo = reserve.address, reserveLiquiditySupplyInfo = reserve.liquidityAddress, reserveCollateralMintInfo = reserve.collateralMintAddress, lendingMarketInfo = market.address, lendingMarketAuthorityInfo = market.authorityAddress, destinationCollateralInfo = reserve.collateralSupplyAddress, pythPriceInfo = solendAsset.priceAddress, switchboardFeedInfo = solendAsset.switchboardFeedAddress, clock = "SysvarC1ock11111111111111111111111111111111", pdaCollateral = (0, import_token_utils.getATAAddressSync)({
    mint: new import_web32.PublicKey(reserveCollateralMintInfo),
    owner: new import_web32.PublicKey(pdaAccount)
  });
  return [
    {
      pubkey: new import_web32.PublicKey(dataAccount),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isSigner: !1,
      isWritable: !1
    },
    {
      pubkey: new import_web32.PublicKey(token.address),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(fluidToken.address),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(pdaAccount),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: publicKey,
      isSigner: !0,
      isWritable: !0
    },
    {
      pubkey: ata,
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: fluidAta,
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(solendProgram),
      isSigner: !1,
      isWritable: !1
    },
    {
      pubkey: new import_web32.PublicKey(pdaCollateral),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(reserveInfo),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(reserveLiquiditySupplyInfo),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(reserveCollateralMintInfo),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(lendingMarketInfo),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(lendingMarketAuthorityInfo),
      isSigner: !1,
      isWritable: !1
    },
    {
      pubkey: new import_web32.PublicKey(destinationCollateralInfo),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(obligationInfo),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(pythPriceInfo),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(switchboardFeedInfo),
      isSigner: !1,
      isWritable: !0
    },
    {
      pubkey: new import_web32.PublicKey(clock),
      isSigner: !1,
      isWritable: !1
    }
  ];
};

// app/util/chainUtils/solana/instructions.ts
var getCheckedSolContext = () => {
  let wallet = (0, import_wallet_adapter_react.useWallet)();
  if (!wallet)
    return new Error("Not wallet found");
  let { connected, publicKey } = wallet;
  if (!connected)
    return new Error("Not connected");
  if (!publicKey)
    return new Error("No public key found");
  let { connection } = (0, import_wallet_adapter_react.useConnection)();
  return {
    connected,
    publicKey,
    wallet,
    connection
  };
}, getBalance = async (token) => {
  let solContext = getCheckedSolContext();
  if (solContext instanceof Error)
    throw new Error(`Could not fetch balance: ${solContext}`);
  let { publicKey, connection } = solContext;
  if (!publicKey)
    throw new Error("Could not fetch balance: No public key found");
  try {
    if (token.name === "Solana") {
      let value = await connection.getBalance(publicKey);
      return new import_bn4.default(value);
    } else {
      let ata = (0, import_token_utils2.getATAAddressSync)({
        mint: new import_web33.PublicKey(token.address),
        owner: publicKey
      }), { value } = await connection.getTokenAccountBalance(ata);
      return new import_bn4.default(value.toString());
    }
  } catch {
    throw new Error(
      `Could not fetch balance: Could not fetch token ${token.address}`
    );
  }
}, limit = async (tokenName) => {
  let response = await jsonPost(
    "https://api.solana.fluidity.money/user-mint-limit",
    {
      token_short_name: tokenName
    }
  );
  return new import_bn4.default(response.mint_limit);
}, amountMinted = async (tokenName) => {
  let solContext = getCheckedSolContext();
  if (solContext instanceof Error)
    throw new Error(`Could not fetch limit: ${solContext}`);
  let { publicKey } = solContext, url = "https://api.solana.fluidity.money/user-amount-minted", body = {
    address: publicKey.toString(),
    token_short_name: tokenName
  }, response = await jsonPost(
    url,
    body
  );
  return new import_bn4.default(response.amount_minted);
}, internalSwap = async (amount, fromToken, toToken) => {
  var _a;
  let solContext = getCheckedSolContext();
  if (solContext instanceof Error)
    throw new Error(`Could not fetch balance: ${solContext}`);
  let { publicKey, wallet, connection, connected } = solContext;
  if (!wallet.signTransaction)
    throw new Error("Could not initiate Swap: Wallet cannot sign transactions");
  let fromFluid = !!fromToken.isFluidOf, [baseToken, fluidToken] = fromFluid ? [toToken, fromToken] : [fromToken, toToken], obligationAccount = fluidToken.obligationAccount;
  if (!obligationAccount)
    throw new Error(
      `Could not initiate Swap: Fluid token ${fluidToken} missing obligationAccount`
    );
  let dataAccount = fluidToken.dataAccount;
  if (!dataAccount)
    throw new Error(
      `Could not initiate Swap: Fluid token ${fluidToken} missing dataAccount`
    );
  let fromBalance_ = await getBalance(fromToken), fromBalance = new import_bn4.default(fromBalance_), amountBn = new import_bn4.default(amount);
  if (fromBalance.lt(amountBn))
    throw new Error(
      `Could not initiate Swap: Attempted to swap ${amount} ${fromToken.name}, but balance is ${fromBalance}`
    );
  try {
    let baseTokenSymbol = baseToken.symbol, bumpSeed = await FluidityInstruction.getBumpSeed(baseTokenSymbol), fluidityInstruction = new FluidityInstruction({
      ...fromFluid ? { Unwrap: amountBn } : { Wrap: amountBn },
      TokenSymbol: baseTokenSymbol,
      bumpSeed
    }), ataResult = await getOrCreateATA(
      connection,
      new import_web33.PublicKey(baseToken.address),
      publicKey,
      publicKey
    ), fluidAtaResult = await getOrCreateATA(
      connection,
      new import_web33.PublicKey(fluidToken.address),
      publicKey,
      publicKey
    ), transaction = new import_web33.Transaction({
      feePayer: publicKey,
      blockhash: "",
      lastValidBlockHeight: 0
    });
    ataResult.instruction && transaction.add(ataResult.instruction), fluidAtaResult.instruction && transaction.add(fluidAtaResult.instruction);
    let keys = await getFluidInstructionKeys(
      publicKey,
      baseToken,
      fluidToken,
      ataResult.address,
      fluidAtaResult.address,
      new import_web33.PublicKey(obligationAccount),
      new import_web33.PublicKey(dataAccount)
    );
    if (!keys)
      throw new Error("No keys found");
    let instruction = new import_web33.TransactionInstruction({
      keys,
      programId: new import_web33.PublicKey("HEvunKKgzf4SMZimVMET6HuzAyfGJS4ZMShUz94KLUdR"),
      data: fluidityInstruction.encode()
    }), { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
    connected || await wallet.connect(), transaction.recentBlockhash = blockhash, transaction.lastValidBlockHeight = lastValidBlockHeight, transaction.add(instruction);
    let signedTxn = await wallet.signTransaction(transaction), signature = await connection.sendRawTransaction(
      signedTxn.serialize()
    );
    return {
      confirmTx: async () => connection.confirmTransaction({
        signature,
        blockhash,
        lastValidBlockHeight
      }).then((res) => !!res.value),
      txHash: signature
    };
  } catch (e) {
    throw ((_a = e.message) == null ? void 0 : _a.search("0x1")) !== -1 ? new Error(`Failed to send transaction - balance too low: ${e}`) : e;
  }
};

// contexts/SolanaProvider.tsx
var import_jsx_runtime15 = require("react/jsx-runtime"), SolanaFacade = ({
  children,
  tokens
}) => {
  let { connected, publicKey, disconnect, connecting } = (0, import_wallet_adapter_react2.useWallet)(), swap = async (amount, tokenAddr) => {
    let fromToken = tokens.find((t) => t.address === tokenAddr);
    if (!fromToken)
      throw new Error(
        `Could not initiate Swap: Could not find matching token ${tokenAddr} in solana`
      );
    let toToken = !!fromToken.isFluidOf ? tokens.find((t) => t.address === fromToken.isFluidOf) : tokens.find((t) => t.isFluidOf === fromToken.address);
    if (!toToken)
      throw new Error(
        `Could not initiate Swap: Could not find dest pair token from ${tokenAddr} in solana`
      );
    return internalSwap(amount, fromToken, toToken);
  }, balance = async (tokenAddr) => {
    let token = tokens.find((t) => t.address === tokenAddr);
    if (!token)
      throw new Error(
        `Could not fetch balance: Could not find matching token ${tokenAddr} in solana`
      );
    return getBalance(token);
  }, getFluidTokens = async () => {
    let fluidTokens = tokens.filter((t) => t.isFluidOf);
    return (await Promise.all(
      fluidTokens.filter(async (t) => getBalance(t))
    )).map((t) => t.address);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    FluidityFacade_default.Provider,
    {
      value: {
        connected,
        disconnect,
        connecting,
        swap,
        balance,
        limit,
        tokens: getFluidTokens,
        amountMinted,
        rawAddress: (publicKey == null ? void 0 : publicKey.toString()) ?? "",
        address: (publicKey == null ? void 0 : publicKey.toString().toLowerCase()) ?? ""
      },
      children
    }
  );
}, SolanaProvider = (rpcUrl, tokens) => ({ children }) => {
  let endpoint = (0, import_react17.useMemo)(() => rpcUrl, [0]), wallets = (0, import_react17.useMemo)(
    () => [
      new import_wallet_adapter_wallets.PhantomWalletAdapter(),
      new import_wallet_adapter_wallets.SolletWalletAdapter(),
      new import_wallet_adapter_wallets.SolflareWalletAdapter(),
      new import_wallet_adapter_wallets.NightlyWalletAdapter(),
      new import_wallet_adapter_wallets.CloverWalletAdapter(),
      new import_wallet_adapter_wallets.Coin98WalletAdapter()
    ],
    [0]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_wallet_adapter_react2.ConnectionProvider, { endpoint, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_wallet_adapter_react2.WalletProvider, { wallets, autoConnect: !0, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SolanaFacade, { tokens, children }) }) });
}, SolanaProvider_default = SolanaProvider;

// app/routes/$network.tsx
var import_react23 = require("react");

// app/components/NotificationSubscription.tsx
var import_react19 = require("react"), import_react20 = require("@remix-run/react");

// app/types/MintAddress.ts
var MintAddress = "0x0000000000000000000000000000000000000000";

// app/util/client-connections.ts
var import_socket = __toESM(require("socket.io-client")), DSSocketManager = ({ onCallback = (payload) => payload }, opts) => {
  let socket = (0, import_socket.default)(opts), emitEvent = (protocol, address) => {
    socket.emit("subscribeTransactions", {
      protocol,
      address
    });
  };
  return setTimeout(() => {
    socket.on("Transactions", (payload) => {
      onCallback(payload);
    });
  }, 1e4), {
    emitEvent
  };
}, client_connections_default = DSSocketManager;

// app/components/NotificationSubscription.tsx
var import_bn5 = __toESM(require("bn.js"));

// app/components/ViewRewardModal.tsx
var import_react18 = require("react"), import_react_dom2 = require("react-dom"), import_surfing9 = require("@fluidity-money/surfing");

// app/util/tweeter.ts
var import_surfing8 = require("@fluidity-money/surfing"), generateMeta = (action) => {
  let basic = {
    title: "Why Fluidify? - Fluidity Money",
    description: "Fluidity is a protocol that rewards users for using their cryptocurrency.",
    "twitter:card": "summary_large_image",
    "twitter:site": "@fluiditymoney",
    "twitter:title": "Why Fluidify? - Fluidity Money",
    "twitter:description": "Fluidity is a protocol that rewards users for using their cryptocurrency.",
    "twitter:image": "https://static.fluidity.money/img/FluidShare.png",
    "og:title": "Why Fluidify?",
    "og:description": "Fluidity is a protocol that rewards users for using their cryptocurrency.",
    "og:url": "https://app.fluidity.money/wtf",
    "og:type": "website"
  };
  switch (action) {
    case "send":
      return {
        ...basic,
        "twitter:image": "https://static.fluidity.money/img/FluidSend.png",
        "og:image": "https://static.fluidity.money/img/FluidSend.png",
        "og:url": "https://app.fluidity.money/wtf?action=send"
      };
    case "receive":
      return {
        ...basic,
        "twitter:image": "https://static.fluidity.money/img/FluidRecv.png",
        "og:image": "https://static.fluidity.money/img/FluidRecv.png",
        "og:url": "https://app.fluidity.money/wtf?action=receive"
      };
    default:
      return basic;
  }
}, generateTweet = (reward, action, extraHashtags = []) => {
  let inboundQueries = {
    utm_source: "twitter",
    utm_medium: "social",
    utm_campaign: action ? `${action}-share` : "est-share"
  }, tweetQueries = {};
  action && (inboundQueries.action = action);
  let inboundUrl = new URL("https://app.fluidity.money/wtf");
  Object.entries(inboundQueries).forEach(([key, value]) => {
    inboundUrl.searchParams.set(key, value);
  }), tweetQueries.url = inboundUrl.href;
  let twitterUrl = new URL("https://twitter.com/intent/tweet");
  if (!reward)
    return "";
  let formattedReward = typeof reward == "number" ? (0, import_surfing8.numberToMonetaryString)(reward) : reward[0] === "$" ? reward : `$${reward}`;
  return tweetQueries.text = (() => {
    switch (action) {
      case "claim":
        return `I just redeemed ${formattedReward} for using crypto with Fluidity Money!`;
      case "send":
        return `I just won ${formattedReward} for sending crypto with Fluidity Money!`;
      case "receive":
        return `I just won ${formattedReward} for receiving crypto with Fluidity Money!`;
      default:
        return `I could have won ${formattedReward} for sending and receiving crypto with Fluidity Money!`;
    }
  })(), tweetQueries.hashtags = ["fluiditymoney", ...extraHashtags].join(","), tweetQueries.via = "fluiditymoney", Object.entries(tweetQueries).forEach(([key, value]) => {
    twitterUrl.searchParams.set(key, value);
  }), twitterUrl.href;
};

// app/components/ViewRewardModal.tsx
var import_jsx_runtime16 = require("react/jsx-runtime"), ViewRewardModal = ({
  visible,
  close,
  callback,
  tokenSymbol,
  img,
  colour,
  winAmount,
  explorerUri,
  balance,
  forSending
}) => {
  let [modal, setModal] = (0, import_react18.useState)(null), { width } = (0, import_surfing9.useViewport)(), isMobile = width < 500 && width > 0;
  return (0, import_react18.useEffect)(() => {
    setModal(
      (0, import_react_dom2.createPortal)(
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_jsx_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
          "div",
          {
            className: `view-reward-modal-container ${visible === !0 ? "show-modal" : "hide-modal"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "view-reward-modal-cancel", onClick: close, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                import_surfing9.LinkButton,
                {
                  handleClick: () => close(),
                  size: isMobile ? "medium" : "large",
                  type: "internal",
                  left: !0,
                  className: "close-btn",
                  children: "Close"
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "view-reward-main-modal", children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  import_surfing9.Heading,
                  {
                    as: isMobile ? "h6" : "h3",
                    className: "view-reward-modal-title",
                    children: "Get. That. Money."
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_surfing9.Text, { size: "md", children: [
                  "$",
                  winAmount,
                  " USD in unclaimed prizes"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "view-reward-image-content", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    "img",
                    {
                      src: img,
                      style: {
                        aspectRatio: "1 / 1",
                        height: "50%",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    BloomEffect_default,
                    {
                      blendMode: "lighten",
                      type: "static",
                      color: colour ?? "#fff"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_surfing9.Heading, { as: "h3", className: "view-reward-modal-token-title-size", children: [
                  "$",
                  winAmount,
                  " ",
                  tokenSymbol
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_surfing9.Text, { size: "md", className: "view-reward-modal-usd-info", children: `(${winAmount} USD)` }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "view-reward-modal-price-desc", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_surfing9.Text, { size: "md", children: [
                    "Won for",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "a",
                      {
                        className: "view-reward-modal-link",
                        href: explorerUri,
                        rel: "noopener noreferrer",
                        target: "_blank",
                        children: forSending === !0 ? "sending" : "receiving"
                      }
                    ),
                    " ",
                    "fluid assets."
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_surfing9.Text, { size: "md", children: [
                    balance,
                    " ",
                    tokenSymbol,
                    " total balance"
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  import_surfing9.GeneralButton,
                  {
                    version: "primary",
                    buttontype: "text",
                    size: "medium",
                    handleClick: () => {
                      callback();
                    },
                    className: "view-reward-modal-breakdown-btn",
                    children: "WINNINGS BREAKDOWN"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "a",
                  {
                    href: generateTweet(winAmount, forSending ? "send" : "receive"),
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      import_surfing9.GeneralButton,
                      {
                        className: "share-button",
                        size: "large",
                        version: "transparent",
                        buttontype: "icon before",
                        icon: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_surfing9.Twitter, {}),
                        handleClick: () => {
                        },
                        children: "SHARE"
                      }
                    )
                  }
                )
              ] })
            ]
          }
        ) }),
        document.body
      )
    );
  }, [visible]), modal;
};

// app/components/NotificationSubscription.tsx
var import_jsx_runtime17 = require("react/jsx-runtime"), NotificationSubscription = ({
  network,
  tokens,
  colorMap
}) => {
  let navigate = (0, import_react20.useNavigate)(), toolTip = useToolTip(), { rawAddress, balance } = (0, import_react19.useContext)(FluidityFacade_default), [detailedRewardObject, setDetailedRewardObject] = (0, import_react19.useState)({
    visible: !1,
    token: "",
    img: "",
    colour: "",
    winAmount: "",
    explorerUri: "",
    balance: "",
    forSending: !1
  }), handleCloseViewRewardDetailModal = () => {
    setDetailedRewardObject({
      visible: !1,
      token: "",
      img: "",
      colour: "",
      winAmount: "",
      explorerUri: "",
      balance: "",
      forSending: !1
    });
  }, notifDetails = (payload) => {
    let { source, destination } = payload, mintLabel = "Mint", sourceParseTrimAddress = source === MintAddress ? mintLabel : trimAddress(payload.source), destinationParseTrimAddress = destination === MintAddress ? mintLabel : trimAddress(payload.destination);
    switch (payload.type) {
      case 3 /* PENDING_REWARD */:
      case 2 /* WINNING_REWARD */:
        return payload.rewardType === "send" ? "reward for s\u035Fe\u035Fn\u035Fd\u035Fi\u035Fn\u035Fg" : "reward for r\u035Fe\u035Fc\u035Fe\u035Fi\u035Fv\u035Fi\u035Fn\u035Fg";
      case 4 /* CLAIMED_WINNING_REWARD */:
        return "reward has been c\u035Fl\u035Fa\u035Fi\u035Fm\u035Fe\u035Fd! \u{1F389}";
      case 1 /* ONCHAIN */:
      default:
        return sourceParseTrimAddress === mintLabel ? "successfully m\u035Fi\u035Fn\u035Ft\u035Fe\u035Fd" : destinationParseTrimAddress === mintLabel ? "successfully r\u035Fe\u035Fv\u035Fe\u035Fr\u035Ft\u035Fe\u035Fd" : source === rawAddress ? `s\u035Fe\u035Fn\u035Ft to ${destinationParseTrimAddress}` : `r\u035Fe\u035Fc\u035Fe\u035Fi\u035Fv\u035Fe\u035Fd from ${sourceParseTrimAddress}`;
    }
  }, handleClientListener = (payload) => {
    let _token = tokens.find((token) => token.symbol === payload.token);
    if (!_token)
      return payload;
    let imgUrl = _token == null ? void 0 : _token.logo, tokenColour = colorMap[payload.token], transactionUrl = getTxExplorerLink(
      network,
      payload.transactionHash
    );
    return toolTip.open(
      tokenColour,
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        ToolTipContent,
        {
          tokenLogoSrc: _token == null ? void 0 : _token.logo,
          boldTitle: payload.amount + " " + payload.token,
          details: notifDetails(payload),
          linkLabel: "DETAILS",
          linkLabelOnClickCallback: async () => {
            payload.type !== 1 /* ONCHAIN */ ? setDetailedRewardObject({
              visible: !0,
              token: payload.token,
              img: imgUrl,
              colour: tokenColour,
              winAmount: payload.amount,
              explorerUri: transactionUrl,
              balance: addDecimalToBn(
                await (balance == null ? void 0 : balance(_token == null ? void 0 : _token.address)) || new import_bn5.default(0),
                _token.decimals
              ),
              forSending: payload.rewardType === "send"
            }) : window.open(transactionUrl, "_");
          }
        }
      )
    ), payload;
  };
  return (0, import_react19.useEffect)(() => {
    if (rawAddress) {
      let { emitEvent } = client_connections_default(
        {
          onCallback: handleClientListener
        },
        window.location.protocol === "https:" ? {
          path: "/socket.io",
          transports: ["websocket"],
          secure: !0
        } : void 0
      );
      emitEvent(network, rawAddress.toLowerCase());
    }
  }, [rawAddress]), /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    ViewRewardModal,
    {
      visible: detailedRewardObject.visible,
      close: () => {
        handleCloseViewRewardDetailModal();
      },
      callback: () => {
        handleCloseViewRewardDetailModal(), navigate("./rewards/unclaimed");
      },
      tokenSymbol: detailedRewardObject.token,
      img: detailedRewardObject.img,
      colour: detailedRewardObject.colour,
      winAmount: detailedRewardObject.winAmount,
      explorerUri: detailedRewardObject.explorerUri,
      balance: detailedRewardObject.balance,
      forSending: detailedRewardObject.forSending
    }
  );
};

// app/routes/$network.tsx
var import_jsx_runtime18 = require("react/jsx-runtime"), Provider = ({
  network,
  tokens,
  solRpc,
  ethRpc,
  children
}) => {
  let providers = {
    ethereum: EthereumProvider_default(ethRpc, tokens),
    solana: SolanaProvider_default(solRpc, tokens)
  }, [validNetwork, setValidNetwork] = (0, import_react22.useState)(network ?? "ethereum");
  (0, import_react22.useEffect)(() => {
    network && Object.keys(providers).includes(network) && setValidNetwork(network);
  }, [network, providers]);
  let ProviderComponent = (0, import_react22.useMemo)(
    () => network && providers[validNetwork] || import_react23.Fragment,
    [validNetwork]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ProviderComponent, { children });
}, loader2 = async ({ params }) => {
  let { network } = params, { tokens, explorer } = webapp_config_server_default.config[network] ?? {}, solanaRpcUrl = process.env.FLU_SOL_RPC_HTTP, ethereumRpcUrl = process.env.FLU_ETH_RPC_HTTP, redirectTarget = (0, import_node.redirect)("/");
  return !network || !(network in webapp_config_default.drivers) ? redirectTarget : {
    network,
    explorer,
    tokens,
    rpcUrls: {
      solana: solanaRpcUrl,
      ethereum: ethereumRpcUrl
    },
    colors: (await colors)[network]
  };
};
function ErrorBoundary2() {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { src: "/images/logoMetallic.png", alt: "", style: { height: "40px" } }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h1", { children: "Could not connect to Provider!" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { children: "Our team has been notified, and are working on fixing it!" })
  ] });
}
function Network() {
  let { network, tokens, rpcUrls, colors: colors2 } = (0, import_react21.useLoaderData)();
  if (network === "solana")
    throw new Error("Solana not supported");
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    Provider,
    {
      network,
      tokens,
      solRpc: rpcUrls.solana,
      ethRpc: rpcUrls.ethereum,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          NotificationSubscription,
          {
            network,
            tokens,
            colorMap: colors2
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react21.Outlet, {})
      ]
    }
  );
}

// app/routes/$network/query/dashboard/unclaimedRewards.tsx
var unclaimedRewards_exports = {};
__export(unclaimedRewards_exports, {
  loader: () => loader3
});
var import_node2 = require("@remix-run/node");

// app/queries/useUserTransactionCount.ts
var queryByAddress = {
  ethereum: gql`
    query getTransactionCount($fluidCurrencies: [String!], $address: String!) {
      ethereum {
        transfers(
          currency: { in: $fluidCurrencies }
          any: [{ sender: { is: $address } }, { receiver: { is: $address } }]
        ) {
          count
        }
      }
    }
  `,
  solana: gql`
    query getTransactionCount($fluidCurrencies: [String!], $address: String!) {
      solana {
        transfers(
          currency: { in: $fluidCurrencies }
          any: [
            { senderAddress: { is: $address } }
            { receiverAddress: { is: $address } }
          ]
        ) {
          count
        }
      }
    }
  `
}, queryAll = {
  ethereum: gql`
    query getTransactionCount($fluidCurrencies: [String!]) {
      ethereum {
        transfers(currency: { in: $fluidCurrencies }) {
          count
        }
      }
    }
  `,
  solana: gql`
    query getTransactionCount($fluidCurrencies: [String!]) {
      solana {
        transfers(currency: { in: $fluidCurrencies }) {
          count
        }
      }
    }
  `
};

// app/queries/useUserTransactions.ts
var queryByAddress2 = {
  ethereum: gql`
    query getTransactionsByAddress(
      $tokens: [String!]
      $address: String!
      $offset: Int = 0
      $filterHashes: [String!] = []
      $limit: Int = 12
    ) {
      ethereum {
        transfers(
          currency: { in: $tokens }
          any: [{ sender: { is: $address } }, { receiver: { is: $address } }]
          options: {
            desc: "block.timestamp.unixtime"
            limit: $limit
            offset: $offset
          }
        ) {
          sender {
            address
          }
          receiver {
            address
          }
          amount
          currency {
            symbol
          }
          transaction(txHash: { notIn: $filterHashes }) {
            hash
          }
          block {
            timestamp {
              unixtime
            }
          }
        }
      }
    }
  `,
  solana: gql`
    query getTransactionsByAddress(
      $tokens: [String!]
      $address: String!
      $offset: Int = 0
      $filterHashes: [String!] = []
      $limit: Int = 12
    ) {
      solana {
        transfers(
          currency: { in: $tokens }
          any: [
            { senderAddress: { is: $address } }
            { receiverAddress: { is: $address } }
          ]
          options: {
            desc: "block.timestamp.unixtime"
            limit: $limit
            offset: $offset
          }
        ) {
          sender {
            address
          }
          receiver {
            address
          }
          amount
          currency {
            symbol
          }
          block {
            timestamp {
              unixtime
            }
          }
          transaction(txHash: { notIn: $filterHashes }) {
            hash: signature
          }
        }
      }
    }
  `
}, queryByTxHash = {
  ethereum: gql`
    query getTransactionsByTxHash(
      $transactions: [String!]
      $filterHashes: [String!] = []
      $tokens: [String!] = []
      $limit: Int = 12
    ) {
      ethereum {
        transfers(
          options: { desc: "block.timestamp.unixtime", limit: $limit }
          txHash: { in: $transactions }
          currency: { in: $tokens }
        ) {
          sender {
            address
          }
          receiver {
            address
          }
          amount
          currency {
            symbol
          }
          transaction(txHash: { notIn: $filterHashes }) {
            hash
          }
          block {
            timestamp {
              unixtime
            }
          }
        }
      }
    }
  `,
  solana: gql`
    query getTransactionsByTxHash(
      $transactions: [String!]
      $filterHashes: [String!] = []
      $limit: Int = 12
    ) {
      solana {
        transfers(
          options: { desc: "block.timestamp.unixtime", limit: $limit }
          signature: { in: $transactions }
        ) {
          sender {
            address
          }
          receiver {
            address
          }
          amount
          currency {
            symbol
          }
          block {
            timestamp {
              unixtime
            }
          }
          transaction(txHash: { notIn: $filterHashes }) {
            hash: signature
          }
        }
      }
    }
  `
}, queryAll2 = {
  ethereum: gql`
    query getTransactions(
      $tokens: [String!]
      $offset: Int = 0
      $filterHashes: [String!] = []
      $limit: Int = 12
    ) {
      ethereum {
        transfers(
          currency: { in: $tokens }
          options: {
            desc: "block.timestamp.unixtime"
            limit: $limit
            offset: $offset
          }
        ) {
          sender {
            address
          }
          receiver {
            address
          }
          amount
          currency {
            symbol
          }
          transaction(txHash: { notIn: $filterHashes }) {
            hash
          }
          block {
            timestamp {
              unixtime
            }
          }
        }
      }
    }
  `,
  solana: gql`
    query getTransactions(
      $tokens: [String!]
      $offset: Int = 0
      $filterHashes: [String!] = []
      $limit: Int = 12
    ) {
      solana {
        transfers(
          currency: { in: $tokens }
          options: {
            desc: "block.timestamp.unixtime"
            limit: $limit
            offset: $offset
          }
        ) {
          sender {
            address
          }
          receiver {
            address
          }
          amount
          currency {
            symbol
          }
          block {
            timestamp {
              unixtime
            }
          }
          transaction(txHash: { notIn: $filterHashes }) {
            hash: signature
          }
        }
      }
    }
  `
}, useUserTransactionsByAddress = async (network, tokens, page, address, filterHashes, limit2 = 12) => {
  let variables = {
    address,
    offset: (page - 1) * 12,
    tokens,
    filterHashes,
    limit: limit2
  }, body = {
    query: queryByAddress2[network],
    variables
  };
  return jsonPost(
    "https://graphql.bitquery.io",
    body,
    {
      "X-API-KEY": process.env.FLU_BITQUERY_TOKEN ?? ""
    }
  );
}, useUserTransactionsByTxHash = async (network, transactions, filterHashes, tokens, limit2 = 12) => {
  let variables = {
    transactions,
    filterHashes,
    tokens,
    limit: limit2
  }, body = {
    query: queryByTxHash[network],
    variables
  };
  return jsonPost(
    "https://graphql.bitquery.io",
    body,
    {
      "X-API-KEY": process.env.FLU_BITQUERY_TOKEN ?? ""
    }
  );
}, useUserTransactionsAll = async (network, tokens, page, filterHashes, limit2 = 12) => {
  let variables = {
    tokens,
    offset: (page - 1) * 12,
    filterHashes,
    limit: limit2
  }, body = {
    query: queryAll2[network],
    variables
  };
  return jsonPost(
    "https://graphql.bitquery.io",
    body,
    {
      "X-API-KEY": process.env.FLU_BITQUERY_TOKEN ?? ""
    }
  );
};

// app/queries/useUserUnclaimedRewards.ts
var query = {
  ethereum: gql`
    query getPendingRewards($address: String!) {
      ethereum_pending_winners(
        where: { reward_sent: { _eq: false }, address: { _eq: $address } }
        order_by: { block_number: desc }
      ) {
        address
        reward_sent
        token_decimals
        token_short_name
        transaction_hash
        win_amount
        block_number
      }
    }
  `,
  solana: gql``
}, useUserUnclaimedRewards = async (network, address) => {
  if (network !== "ethereum")
    throw Error(`network ${network} not supported`);
  let body = {
    query: query[network],
    variables: {
      address: address.toLowerCase()
    }
  };
  return jsonPost(
    "https://fluidity.hasura.app/v1/graphql",
    body,
    process.env.FLU_HASURA_SECRET ? {
      "x-hasura-admin-secret": process.env.FLU_HASURA_SECRET
    } : {}
  );
}, useUserUnclaimedRewards_default = useUserUnclaimedRewards;

// app/queries/useUserRewards.ts
var queryWinnersAll = gql`
  query WinnersAll($network: network_blockchain!) {
    winners(
      where: {
        network: { _eq: $network }
        send_transaction_hash: { _neq: "" }
        transaction_hash: { _neq: "" }
      }
      order_by: { awarded_time: desc }
      limit: 240
    ) {
      network
      solana_winning_owner_address
      winning_address
      created
      transaction_hash
      send_transaction_hash
      winning_amount
      token_decimals
      ethereum_application
      solana_application
      reward_type
      awarded_time
    }
  }
`, queryWinnersByAddress = gql`
  query WinnersByAddress($network: network_blockchain!, $address: String!) {
    winners(
      where: { network: { _eq: $network }, winning_address: { _eq: $address } }
      order_by: { awarded_time: desc }
      limit: 240
    ) {
      network
      solana_winning_owner_address
      winning_address
      created
      transaction_hash
      send_transaction_hash
      winning_amount
      token_decimals
      ethereum_application
      solana_application
      reward_type
      awarded_time
    }
  }
`, queryPendingWinnersAll = gql`
  query PendingWinnersAll($network: network_blockchain!) {
    ethereum_pending_winners(
      where: {
        network: { _eq: $network }
        transaction_hash: { _neq: "" }
        reward_sent: { _eq: false }
      }
      order_by: { inserted_date: desc }
      limit: 240
    ) {
      network
      address
      inserted_date
      transaction_hash
      win_amount
      token_decimals
      reward_type
    }
  }
`, queryPendingWinnersByAddress = gql`
  query PendingWinnersByAddress(
    $network: network_blockchain!
    $address: String!
  ) {
    ethereum_pending_winners(
      where: {
        network: { _eq: $network }
        address: { _eq: $address }
        reward_sent: { _eq: false }
      }
      order_by: { inserted_date: desc }
      limit: 240
    ) {
      network
      address
      inserted_date
      transaction_hash
      win_amount
      token_decimals
      reward_type
    }
  }
`, useUserRewardsAll = async (network) => jsonPost(
  "https://fluidity.hasura.app/v1/graphql",
  {
    variables: {
      network
    },
    query: queryWinnersAll
  },
  process.env.FLU_HASURA_SECRET ? {
    "x-hasura-admin-secret": process.env.FLU_HASURA_SECRET
  } : {}
), useUserRewardsByAddress = async (network, address) => jsonPost(
  "https://fluidity.hasura.app/v1/graphql",
  {
    variables: { network, address },
    query: queryWinnersByAddress
  },
  process.env.FLU_HASURA_SECRET ? {
    "x-hasura-admin-secret": process.env.FLU_HASURA_SECRET
  } : {}
), useUserPendingRewardsAll = async (network) => jsonPost(
  "https://fluidity.hasura.app/v1/graphql",
  {
    variables: {
      network
    },
    query: queryPendingWinnersAll
  },
  process.env.FLU_HASURA_SECRET ? {
    "x-hasura-admin-secret": process.env.FLU_HASURA_SECRET
  } : {}
), useUserPendingRewardsByAddress = async (network, address) => jsonPost(
  "https://fluidity.hasura.app/v1/graphql",
  {
    variables: { network, address },
    query: queryPendingWinnersByAddress
  },
  process.env.FLU_HASURA_SECRET ? {
    "x-hasura-admin-secret": process.env.FLU_HASURA_SECRET
  } : {}
);

// app/queries/useUserYield.ts
var queryAll3 = gql`
  fragment rewardFields on total_reward_return {
    network
    total_reward
    count
  }
  query TotalRewards($network: network_blockchain!) {
    day: total_reward(
      where: { network: { _eq: $network } }
      args: { i: "1 day" }
    ) {
      ...rewardFields
    }
    week: total_reward(
      where: { network: { _eq: $network } }
      args: { i: "1 week" }
    ) {
      ...rewardFields
    }
    month: total_reward(
      where: { network: { _eq: $network } }
      args: { i: "1 month" }
    ) {
      ...rewardFields
    }
    year: total_reward(
      where: { network: { _eq: $network } }
      args: { i: "1 year" }
    ) {
      ...rewardFields
    }
    all: total_reward(where: { network: { _eq: $network } }, args: {}) {
      ...rewardFields
    }
  }
`, queryByAddress3 = gql`
  fragment rewardFields on total_reward_return {
    network
    total_reward
    count
  }
  query TotalRewards($network: network_blockchain!, $address: String!) {
    day: total_reward(
      where: { network: { _eq: $network } }
      args: { i: "1 day", address: $address }
    ) {
      ...rewardFields
    }
    week: total_reward(
      where: { network: { _eq: $network } }
      args: { i: "1 week", address: $address }
    ) {
      ...rewardFields
    }
    month: total_reward(
      where: { network: { _eq: $network } }
      args: { i: "1 month", address: $address }
    ) {
      ...rewardFields
    }
    year: total_reward(
      where: { network: { _eq: $network } }
      args: { i: "1 year", address: $address }
    ) {
      ...rewardFields
    }
    all: total_reward(
      where: { network: { _eq: $network } }
      args: { address: $address }
    ) {
      ...rewardFields
    }
  }
`, useUserYieldAll = async (network) => jsonPost(
  "https://fluidity.hasura.app/v1/graphql",
  {
    variables: { network },
    query: queryAll3
  },
  process.env.FLU_HASURA_SECRET ? {
    "x-hasura-admin-secret": process.env.FLU_HASURA_SECRET
  } : {}
), useUserYieldByAddress = async (network, address) => jsonPost(
  "https://fluidity.hasura.app/v1/graphql",
  {
    variables: { network, address },
    query: queryByAddress3
  },
  process.env.FLU_HASURA_SECRET ? {
    "x-hasura-admin-secret": process.env.FLU_HASURA_SECRET
  } : {}
);

// app/routes/$network/query/dashboard/unclaimedRewards.tsx
var loader3 = async ({ request, params }) => {
  let network = params.network ?? "", address = new URL(request.url).searchParams.get("address");
  if (!address)
    throw new Error("Invalid Request");
  try {
    let { data, error } = await useUserUnclaimedRewards_default(
      network,
      address ?? ""
    );
    if (!data || error)
      return;
    let { ethereum_pending_winners: rewards } = data, sanitisedRewards = rewards.filter(
      (transaction) => !transaction.reward_sent
    ), userUnclaimedRewards = sanitisedRewards.reduce(
      (sum, transaction) => {
        let { win_amount, token_decimals } = transaction, decimals = 10 ** token_decimals;
        return sum + win_amount / decimals;
      },
      0
    ), { tokens } = webapp_config_server_default.config[network], fluidTokenMap = tokens.reduce(
      (map, token) => token.isFluidOf ? {
        ...map,
        [token.symbol]: token.address,
        [token.symbol.slice(1)]: token.address
      } : map,
      {}
    ), unclaimedTokenAddrs = Array.from(
      new Set(sanitisedRewards.map(({ token_short_name }) => token_short_name))
    ).map((name) => fluidTokenMap[name] ?? "");
    return (0, import_node2.json)({
      userUnclaimedRewards,
      unclaimedTokenAddrs
    });
  } catch (err) {
    throw console.log(err), new Error(
      `Could not fetch User Unclaimed Rewards on ${network}: ${err}`
    );
  }
};

// app/routes/$network/query/winningUserTransactions.tsx
var winningUserTransactions_exports = {};
__export(winningUserTransactions_exports, {
  loader: () => loader4
});
var import_node3 = require("@remix-run/node");
var import_react24 = require("@sentry/react");
var loader4 = async ({ params, request }) => {
  let { network } = params, url = new URL(request.url), address = url.searchParams.get("address"), page_ = url.searchParams.get("page");
  if (!network || !page_)
    return new Error("Invalid Request");
  let page = parseInt(page_);
  if (!page || page < 1 || page > 20)
    return new Error("Invalid Request");
  try {
    let { data: winnersData, errors: winnersErr } = address ? await useUserRewardsByAddress(network ?? "", address) : await useUserRewardsAll(network ?? ""), { data: pendingWinnersData, errors: pendingWinnersErr } = address ? await useUserPendingRewardsByAddress(network ?? "", address) : await useUserPendingRewardsAll(network ?? "");
    if (winnersErr || !winnersData || !pendingWinnersData || pendingWinnersErr)
      throw winnersErr;
    let castPending = pendingWinnersData.ethereum_pending_winners.map((pending_winner) => ({
      network: pending_winner.network,
      solana_winning_owner_address: null,
      winning_address: pending_winner.address,
      created: "",
      transaction_hash: "",
      send_transaction_hash: pending_winner.transaction_hash,
      winning_amount: pending_winner.win_amount,
      token_decimals: pending_winner.token_decimals,
      ethereum_application: void 0,
      solana_application: void 0,
      reward_type: pending_winner.reward_type,
      awarded_time: pending_winner.inserted_date
    }));
    winnersData.winners = castPending.concat(winnersData.winners).sort(
      (first, second) => Date.parse(second.awarded_time) - Date.parse(first.awarded_time)
    );
    let winners = winnersData.winners.slice((page - 1) * 12, page * 12), winnerAddrs = winners.map(
      ({ send_transaction_hash }) => send_transaction_hash
    ), ethereumTokens = webapp_config_server_default.config.ethereum.tokens.filter((entry2) => entry2.isFluidOf !== void 0).map((entry2) => entry2.symbol), { data: userTransactionsData, errors: userTransactionsErr } = await useUserTransactionsByTxHash(
      network,
      winnerAddrs,
      [],
      ethereumTokens
    );
    if (!userTransactionsData || userTransactionsErr)
      return (0, import_react24.captureException)(
        new Error(
          `Could not fetch User Transactions for ${address}, on ${network}`
        ),
        {
          tags: {
            section: "dashboard"
          }
        }
      ), new Error("Server could not fulfill request");
    let {
      [network]: { transfers: transactions }
    } = userTransactionsData, userTransactions = transactions.map(
      (transaction) => {
        let {
          sender: { address: sender },
          receiver: { address: receiver },
          block: {
            timestamp: { unixtime: timestamp }
          },
          transaction: { hash },
          amount: value,
          currency: { symbol: currency }
        } = transaction;
        return {
          sender,
          receiver,
          hash,
          timestamp: timestamp * 1e3,
          value: currency === "DAI" || currency === "fDAI" ? value / 10 ** 12 : value,
          currency
        };
      }
    ), {
      config: {
        [network]: { tokens }
      }
    } = webapp_config_server_default, tokenLogoMap = tokens.reduce(
      (map, token) => ({
        ...map,
        [token.symbol]: token.logo
      }),
      {}
    ), defaultLogo = "/assets/tokens/usdt.svg", transactionMap = userTransactions.reduce(
      (map, tx) => ({
        ...map,
        [tx.hash]: tx
      }),
      {}
    ), mergedTransactions = winners.filter(({ send_transaction_hash: hash }) => !!transactionMap[hash]).map((winner) => {
      let tx = transactionMap[winner.send_transaction_hash], swapType = tx.sender === MintAddress ? "in" : tx.receiver === MintAddress ? "out" : void 0;
      return {
        sender: tx.sender,
        receiver: tx.receiver,
        winner: winner.winning_address ?? "",
        reward: winner.winning_amount / 10 ** winner.token_decimals,
        hash: tx.hash,
        rewardHash: winner.ethereum_application === void 0 ? "" : (winner == null ? void 0 : winner.transaction_hash) ?? "",
        currency: tx.currency,
        value: tx.value,
        timestamp: new Date(winner.awarded_time).getTime(),
        logo: tokenLogoMap[tx.currency] || defaultLogo,
        provider: (network === "ethereum" ? winner == null ? void 0 : winner.ethereum_application : winner == null ? void 0 : winner.solana_application) ?? "Fluidity",
        swapType
      };
    });
    return (0, import_node3.json)({
      page,
      transactions: mergedTransactions,
      count: winnersData.winners.length,
      loaded: !0
    });
  } catch {
    return (0, import_react24.captureException)(
      new Error(
        `BitQuery returned an invalid response for ${address}, on ${network}. Maybe your API key is invalid?`
      ),
      {
        tags: {
          section: "dashboard"
        }
      }
    ), new Error("Server could not fulfill request");
  }
};

// app/routes/$network/query/dashboard/unclaimed.tsx
var unclaimed_exports = {};
__export(unclaimed_exports, {
  loader: () => loader5
});
var import_node4 = require("@remix-run/node");
var loader5 = async ({ request, params }) => {
  let network = params.network ?? "", address = new URL(request.url).searchParams.get("address");
  if (!!address)
    try {
      let [
        { data: userRewardsData, errors: userRewardsErr },
        { data: userUnclaimedRewardsData, error: userUnclaimedRewardsErr }
      ] = await Promise.all([
        useUserRewardsByAddress(network, address),
        useUserUnclaimedRewards_default(network, address)
      ]);
      if (!userUnclaimedRewardsData || userUnclaimedRewardsErr)
        throw userUnclaimedRewardsErr;
      if (!userRewardsData || userRewardsErr)
        throw userRewardsErr;
      let { ethereum_pending_winners: rewards } = userUnclaimedRewardsData, userUnclaimedRewards = rewards.reduce((sum, transaction) => {
        let { win_amount, token_decimals } = transaction, decimals = 10 ** token_decimals;
        return sum + win_amount / decimals;
      }, 0), unclaimedTokens = Object.entries(
        rewards.reduce((map, transaction) => {
          let { win_amount, token_decimals, token_short_name } = transaction, reward = (map[token_short_name] ?? 0) + win_amount / 10 ** token_decimals;
          return {
            ...map,
            [token_short_name]: reward
          };
        }, {})
      ).map(([symbol, reward]) => ({ symbol, reward })), { winners } = userRewardsData, userClaimedRewards = winners.reduce(
        (sum, { winning_amount, token_decimals }) => sum + winning_amount / 10 ** token_decimals,
        0
      );
      return (0, import_node4.json)({
        unclaimedTxs: rewards,
        unclaimedTokens,
        userUnclaimedRewards,
        userClaimedRewards
      });
    } catch (err) {
      throw new Error(`Could not fetch Unclaimed Rewards on ${network}: ${err}`);
    }
};

// app/routes/$network/query/dashboard/rewards.tsx
var rewards_exports = {};
__export(rewards_exports, {
  loader: () => loader6
});
var import_providers = require("@ethersproject/providers");
var import_node5 = require("@remix-run/node");

// app/queries/useApplicationRewardStatistics.ts
var query2 = gql`
  fragment appFields on app_performance_return {
    network
    application
    count
    average_reward
    highest_reward
  }
  query ApplicationPerformance($network: network_blockchain!) {
    week: application_performance(
      where: { network: { _eq: $network } }
      args: { i: "1 week" }
    ) {
      ...appFields
    }
    month: application_performance(
      where: { network: { _eq: $network } }
      args: { i: "1 month" }
    ) {
      ...appFields
    }
    year: application_performance(
      where: { network: { _eq: $network } }
      args: { i: "1 year" }
    ) {
      ...appFields
    }
    all: application_performance(
      where: { network: { _eq: $network } }
      args: {}
    ) {
      ...appFields
    }
  }
`, useApplicationRewardStatistics = async (network) => jsonPost(
  "https://fluidity.hasura.app/v1/graphql",
  {
    variables: { network },
    query: query2
  },
  process.env.FLU_HASURA_SECRET ? {
    "x-hasura-admin-secret": process.env.FLU_HASURA_SECRET
  } : {}
), useApplicationRewardStatistics_default = useApplicationRewardStatistics;

// app/util/rewardAggregates.ts
var aggregateRewards = (rewardData) => {
  let aggregatedRewarders = {
    week: aggregateRewardInterval(rewardData == null ? void 0 : rewardData.week),
    month: aggregateRewardInterval(rewardData == null ? void 0 : rewardData.month),
    year: aggregateRewardInterval(rewardData == null ? void 0 : rewardData.year),
    all: aggregateRewardInterval(rewardData == null ? void 0 : rewardData.all)
  };
  return Object.entries(aggregatedRewarders).reduce(
    (previous, [interval, value]) => ({
      ...previous,
      [interval]: Object.values(value || {})
    }),
    {}
  );
}, aggregateRewardInterval = (rewards) => rewards == null ? void 0 : rewards.map((reward) => ({
  name: providerToDisplayName(reward.application),
  avgPrize: reward.average_reward,
  prize: reward.highest_reward
})).filter((reward) => reward.name !== void 0).reduce((previous, currentApp) => {
  let { name, prize, avgPrize } = currentApp;
  return previous[name] ? (previous[name].avgPrize += avgPrize, previous[name].prize = Math.max(previous[name].prize, prize)) : previous[name] = {
    name,
    prize,
    avgPrize
  }, previous;
}, {});

// app/routes/$network/query/dashboard/rewards.tsx
var loader6 = async ({ request, params }) => {
  let network = params.network ?? "", fluidPairs = webapp_config_server_default.config[network ?? ""].fluidAssets.length, networkFee = 2e-3, gasFee = 2e-3, address = new URL(request.url).searchParams.get("address");
  try {
    let infuraRpc = webapp_config_server_default.drivers.ethereum[0].rpc.http, provider = new import_providers.JsonRpcProvider(infuraRpc), rewardPoolAddr = "0xD3E24D732748288ad7e016f93B1dc4F909Af1ba0", { tokens } = webapp_config_server_default.config[network], fluidTokenMap = tokens.reduce(
      (map, token) => token.isFluidOf ? {
        ...map,
        [token.symbol]: token.address,
        [token.symbol.slice(1)]: token.address
      } : map,
      {}
    ), [
      totalPrizePool,
      { data: rewardsData, errors: rewardsErr },
      { data: appRewardData, errors: appRewardErrors }
    ] = await Promise.all([
      getTotalPrizePool(provider, rewardPoolAddr, RewardPool_default),
      address ? useUserYieldByAddress(network, address) : useUserYieldAll(network),
      useApplicationRewardStatistics_default(network ?? "")
    ]);
    if (rewardsErr || !rewardsData)
      throw rewardsErr;
    if (appRewardErrors || !appRewardData)
      throw appRewardErrors;
    let rewarders = aggregateRewards(appRewardData);
    return (0, import_node5.json)({
      network,
      rewarders,
      rewards: rewardsData,
      fluidTokenMap,
      fluidPairs,
      totalPrizePool,
      networkFee,
      gasFee,
      timestamp: new Date().getTime()
    });
  } catch (err) {
    throw new Error(`Could not fetch Rewards on ${network}: ${err}`);
  }
};

// app/routes/$network/query/projectedWinnings.tsx
var projectedWinnings_exports = {};
__export(projectedWinnings_exports, {
  loader: () => loader7
});
var import_node6 = require("@remix-run/node"), import_react25 = require("@sentry/react");
var loader7 = async ({ params, request }) => {
  let { network } = params, address = new URL(request.url).searchParams.get("address"), { tokens } = webapp_config_server_default.config[network ?? ""];
  if (!address || !tokens)
    throw new Error("Invalid Request");
  let tokenAddrs = tokens.filter((t) => !t.isFluidOf).map(({ address: address2 }) => address2);
  try {
    let { data: userTransactionsData, errors: userTransactionsErr } = await useUserTransactionsByAddress(
      network ?? "",
      tokenAddrs,
      1,
      address,
      [],
      50
    );
    if (userTransactionsErr || !userTransactionsData)
      return (0, import_react25.captureException)(userTransactionsErr, {
        tags: {
          section: "opportunity"
        }
      }), new Error("Server could not fulfill request");
    let {
      [network]: { transfers: transactions }
    } = userTransactionsData, projectedWin = transactions.reduce((sum, transaction) => {
      let {
        amount: value,
        currency: { symbol: currency }
      } = transaction, normalisedValue = currency === "DAI" || currency === "fDAI" ? value / 10 ** 12 : value;
      return sum + normalisedValue;
    }, 0) * 0.076;
    return (0, import_node6.json)({
      projectedWin
    });
  } catch (err) {
    return (0, import_react25.captureException)(new Error(`Could not fetch historical rewards: ${err}`), {
      tags: {
        section: "network/index"
      }
    }), new Error("Server could not fulfill request");
  }
};

// app/routes/$network/query/userTransactions.tsx
var userTransactions_exports = {};
__export(userTransactions_exports, {
  loader: () => loader8
});
var import_node7 = require("@remix-run/node");
var import_react26 = require("@sentry/react");
var loader8 = async ({ params, request }) => {
  let { network } = params, url = new URL(request.url), address = url.searchParams.get("address"), page_ = url.searchParams.get("page");
  if (!network || !page_)
    return new Error("Invalid Request");
  let page = parseInt(page_);
  if (!page || page < 1 || page > 20)
    return new Error("Invalid Request");
  try {
    let { data: winnersData, errors: winnersErr } = address ? await useUserRewardsByAddress(network ?? "", address) : await useUserRewardsAll(network ?? ""), { data: pendingWinnersData, errors: pendingWinnersErr } = address ? await useUserPendingRewardsByAddress(network ?? "", address) : await useUserPendingRewardsAll(network ?? "");
    if (winnersErr || !winnersData || !pendingWinnersData || pendingWinnersErr)
      throw winnersErr;
    let winnersMap = winnersData.winners.reduce(
      (map, winner) => {
        var _a;
        return {
          ...map,
          [winner.send_transaction_hash]: {
            ...winner,
            win_amount: winner.winning_amount + (((_a = map[winner.transaction_hash]) == null ? void 0 : _a.winning_amount) || 0)
          }
        };
      },
      {}
    ), jointWinnersMap = {
      ...pendingWinnersData.ethereum_pending_winners.reduce(
        (map, winner) => {
          var _a;
          return {
            ...map,
            [winner.transaction_hash]: {
              ...winner,
              win_amount: winner.win_amount + (((_a = map[winner.transaction_hash]) == null ? void 0 : _a.win_amount) || 0)
            }
          };
        },
        {}
      ),
      ...winnersMap
    }, winnersPayoutAddrs = winnersData.winners.map(
      ({ transaction_hash }) => transaction_hash
    ), pendingWinnersPayoutAddrs = winnersData.winners.map(
      ({ transaction_hash }) => transaction_hash
    ), JointPayoutAddrs = [
      ...new Set(winnersPayoutAddrs.concat(pendingWinnersPayoutAddrs))
    ], userTransactionsData = {
      [network]: {
        transfers: []
      }
    };
    for (let i = 0; i <= JointPayoutAddrs.length; i += 100) {
      let { data: transactionsData, errors: transactionsErr } = await (async () => {
        switch (!0) {
          case !!address: {
            let limit2 = 12 / Math.ceil(JointPayoutAddrs.length / 100);
            return useUserTransactionsByAddress(
              network,
              getTokenForNetwork(network),
              page,
              address,
              JointPayoutAddrs.slice(i, i + 99),
              limit2 === 1 / 0 ? 12 : limit2
            );
          }
          default: {
            let limit2 = 12 / Math.ceil(JointPayoutAddrs.length / 100);
            return useUserTransactionsAll(
              network,
              getTokenForNetwork(network),
              page,
              JointPayoutAddrs.slice(i, i + 99),
              limit2 === 1 / 0 ? 12 : limit2
            );
          }
        }
      })();
      if (!transactionsData || transactionsErr)
        return (0, import_react26.captureException)(
          new Error(
            `Could not fetch User Transactions for ${address}, on ${network}`
          ),
          {
            tags: {
              section: "dashboard"
            }
          }
        ), new Error("Server could not fulfill request");
      Array.prototype.push.apply(
        userTransactionsData[network].transfers,
        transactionsData[network].transfers
      );
    }
    let {
      [network]: { transfers: transactions }
    } = userTransactionsData, userTransactions = transactions.map(
      (transaction) => {
        let {
          sender: { address: sender },
          receiver: { address: receiver },
          block: {
            timestamp: { unixtime: timestamp }
          },
          transaction: { hash },
          amount: value,
          currency: { symbol: currency }
        } = transaction;
        return {
          sender,
          receiver,
          hash,
          timestamp: timestamp * 1e3,
          value: currency === "DAI" || currency === "fDAI" ? value / 10 ** 12 : value,
          currency
        };
      }
    ), {
      config: {
        [network]: { tokens }
      }
    } = webapp_config_server_default, tokenLogoMap = tokens.reduce(
      (map, token) => ({
        ...map,
        [token.symbol]: token.logo
      }),
      {}
    ), defaultLogo = "/assets/tokens/usdt.svg", mergedTransactions = userTransactions.map((tx) => {
      let swapType = tx.sender === MintAddress ? "in" : tx.receiver === MintAddress ? "out" : void 0, winner = jointWinnersMap[tx.hash], isFromPendingWin = winner && tx.hash === winner.transaction_hash;
      return {
        sender: tx.sender,
        receiver: tx.receiver,
        winner: isFromPendingWin ? winner == null ? void 0 : winner.address : (winner == null ? void 0 : winner.winning_address) ?? "",
        reward: winner ? (isFromPendingWin ? winner.win_amount : winner.winning_amount) / 10 ** winner.token_decimals : 0,
        hash: tx.hash,
        rewardHash: isFromPendingWin ? "" : winner == null ? void 0 : winner.transaction_hash,
        currency: tx.currency,
        value: tx.value,
        timestamp: tx.timestamp,
        logo: tokenLogoMap[tx.currency] || defaultLogo,
        provider: (network === "ethereum" ? isFromPendingWin ? winner == null ? void 0 : winner.solana_application : winner == null ? void 0 : winner.ethereum_application : "Fluidity") ?? "Fluidity",
        swapType
      };
    });
    return (0, import_node7.json)({
      page,
      transactions: mergedTransactions,
      count: Object.keys(winnersMap).length
    });
  } catch {
    return (0, import_react26.captureException)(
      new Error(
        `BitQuery returned an invalid response for ${address}, on ${network}. Maybe your API key is invalid?`
      ),
      {
        tags: {
          section: "dashboard"
        }
      }
    ), new Error("Server could not fulfill request");
  }
};

// app/routes/$network/query/dashboard/home.tsx
var home_exports = {};
__export(home_exports, {
  loader: () => loader9
});
var import_providers2 = require("@ethersproject/providers"), import_node8 = require("@remix-run/node");
var loader9 = async ({ request, params }) => {
  let { network } = params, url = new URL(request.url), address = url.searchParams.get("address"), fluidPairs = webapp_config_server_default.config[network ?? ""].fluidAssets.length, timestamp = new Date().getTime(), mainnetId = 0, infuraRpc = webapp_config_server_default.drivers.ethereum[mainnetId].rpc.http, provider = new import_providers2.JsonRpcProvider(infuraRpc), rewardPoolAddr = "0xD3E24D732748288ad7e016f93B1dc4F909Af1ba0";
  try {
    let [
      totalPrizePool,
      { volume },
      { data: rewardsData, errors: rewardsErr }
    ] = await Promise.all([
      getTotalPrizePool(provider, rewardPoolAddr, RewardPool_default),
      address ? jsonGet(
        `${url.origin}/${network}/query/volumeStats`,
        {
          address
        }
      ) : jsonGet(
        `${url.origin}/${network}/query/volumeStats`
      ),
      address ? useUserYieldByAddress(network ?? "", address) : useUserYieldAll(network ?? "")
    ]);
    if (!volume)
      throw new Error("Could not fetch volume data");
    if (rewardsErr || !rewardsData)
      throw new Error("Could not fetch rewards data");
    return (0, import_node8.json)({
      totalPrizePool,
      rewards: rewardsData,
      volume,
      totalFluidPairs: fluidPairs,
      network,
      timestamp
    });
  } catch (err) {
    throw console.log(err), new Error(`Could not fetch Transactions on ${network}: ${err}`);
  }
};

// app/routes/$network/query/volumeStats.tsx
var volumeStats_exports = {};
__export(volumeStats_exports, {
  loader: () => loader10
});
var import_node9 = require("@remix-run/node"), import_bn6 = __toESM(require("bn.js"));

// app/queries/useVolumeTx.ts
var queryByAddressTimestamp = gql`
  query VolumeTxs(
    $fluidAssets: [String!]
    $address: String!
    $timestamp: ISO8601DateTime!
  ) {
    ethereum {
      transfers(
        currency: { in: $fluidAssets }
        any: [{ sender: { is: $address } }, { receiver: { is: $address } }]
        options: { desc: "block.timestamp.unixtime" }
      ) {
        sender {
          address
        }
        receiver {
          address
        }
        amount
        currency {
          symbol
        }
        block(time: { after: $timestamp }) {
          timestamp {
            unixtime
          }
        }
      }
    }
  }
`, queryByTimestamp = gql`
  query VolumeTxs($fluidAssets: [String!], $timestamp: ISO8601DateTime!) {
    ethereum {
      transfers(
        currency: { in: $fluidAssets }

        options: { desc: "block.timestamp.unixtime" }
      ) {
        sender {
          address
        }
        receiver {
          address
        }
        amount
        currency {
          symbol
        }
        block(time: { after: $timestamp }) {
          timestamp {
            unixtime
          }
        }
      }
    }
  }
`, useVolumeTxByAddressTimestamp = async (fluidAssets, address, iso8601Timestamp) => jsonPost(
  "https://graphql.bitquery.io",
  {
    variables: { fluidAssets, address, timestamp: iso8601Timestamp },
    query: queryByAddressTimestamp
  },
  {
    "X-API-KEY": process.env.FLU_BITQUERY_TOKEN ?? ""
  }
), useVolumeTxByTimestamp = async (fluidAssets, iso8601Timestamp) => jsonPost("https://graphql.bitquery.io", {
  variables: { fluidAssets, timestamp: iso8601Timestamp },
  query: queryByTimestamp
}, {
  "X-API-KEY": process.env.FLU_BITQUERY_TOKEN ?? ""
});

// app/routes/$network/query/volumeStats.tsx
var loader10 = async ({ params, request }) => {
  let { network } = params, address = new URL(request.url).searchParams.get("address"), fdaiPostprocess = (volume) => {
    let bn = new import_bn6.default(volume.amount), decimals = new import_bn6.default(10).pow(new import_bn6.default(12)), amount = bn.div(decimals).toNumber();
    return {
      ...volume,
      amount
    };
  }, { fluidAssets } = webapp_config_server_default.config[network ?? ""];
  if (!fluidAssets)
    return;
  let prevYear = new Date().getFullYear() - 1, prevYearDate = new Date();
  prevYearDate.setFullYear(prevYear);
  let prevYearIso = prevYearDate.toISOString(), daiSanitisedVolumes = (address ? await useVolumeTxByAddressTimestamp(fluidAssets, address, prevYearIso) : await useVolumeTxByTimestamp(fluidAssets, prevYearIso)).data.ethereum.transfers.map((transfer) => ({
    symbol: transfer.currency.symbol,
    amount: parseFloat(transfer.amount) || 0,
    timestamp: transfer.block.timestamp.unixtime * 1e3,
    sender: transfer.sender.address,
    receiver: transfer.receiver.address
  })).map(
    (volume) => volume.symbol === "fDAI" ? fdaiPostprocess(volume) : volume
  );
  return (0, import_node9.json)({
    volume: daiSanitisedVolumes
  });
};

// app/routes/$network/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => Dashboard,
  links: () => links3,
  loader: () => loader11,
  meta: () => meta2
});
var import_node10 = require("@remix-run/node"), import_react34 = require("@remix-run/react"), import_react35 = require("react");
var import_framer_motion7 = require("framer-motion");
var import_surfing16 = require("@fluidity-money/surfing");

// app/components/BurgerButton.tsx
var import_framer_motion5 = require("framer-motion"), import_surfing10 = require("@fluidity-money/surfing"), import_jsx_runtime19 = require("react/jsx-runtime"), BurgerMenu = ({ isOpen, setIsOpen }) => {
  let diagonalVariants = {
    rotateD: { rotate: 45, y: 4 },
    rotateU: { rotate: -45, y: -4 },
    stop: { rotate: 0 }
  }, disappearingVariants = {
    appear: { opacity: 1 },
    disappear: { opacity: 0 }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    import_surfing10.GeneralButton,
    {
      version: "transparent",
      size: "small",
      buttontype: "text",
      handleClick: () => setIsOpen(!isOpen),
      className: "burger-btn",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_framer_motion5.motion.span,
          {
            variants: diagonalVariants,
            className: "burger-span",
            animate: isOpen ? "rotateD" : "stop"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_framer_motion5.motion.span,
          {
            variants: disappearingVariants,
            className: "burger-span",
            animate: isOpen ? "disappear" : "appear"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_framer_motion5.motion.span,
          {
            variants: diagonalVariants,
            className: "burger-span",
            animate: isOpen ? "rotateU" : "stop"
          }
        )
      ]
    }
  );
}, BurgerButton_default = BurgerMenu;

// app/components/ConnectWalletModal.tsx
var import_surfing11 = require("@fluidity-money/surfing"), import_react27 = require("@remix-run/react"), import_wallet_adapter_base = require("@solana/wallet-adapter-base"), import_wallet_adapter_react3 = require("@solana/wallet-adapter-react"), import_react28 = require("react");
var import_react_dom3 = require("react-dom"), import_jsx_runtime20 = require("react/jsx-runtime"), ConnectWalletModal = ({ visible, close }) => {
  let { network } = (0, import_react27.useLoaderData)(), [modal, setModal] = (0, import_react28.useState)(null), SolWalletsMap = () => {
    let { wallets, select } = (0, import_wallet_adapter_react3.useWallet)(), selectWallet = (0, import_react28.useCallback)(
      (_event, walletName) => {
        select(walletName);
      },
      [select]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: wallets.map((wallet) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "li",
      {
        onClick: (event) => selectWallet(event, wallet.adapter.name),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("img", { src: wallet == null ? void 0 : wallet.adapter.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_surfing11.Text, { size: "sm", className: "connect-wallet-modal-names", children: wallet.adapter.name })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_surfing11.Text, { size: "xs", className: "connect-wallet-modal-status", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("i", { children: wallet.readyState === import_wallet_adapter_base.WalletReadyState.Installed ? "Installed" : "Not Installed" }) })
        ]
      },
      `wallet-${wallet.adapter.name}`
    )) });
  }, EthWalletsMap = () => {
    let { useConnectorType } = (0, import_react28.useContext)(FluidityFacade_default), { ethereumWallets } = (0, import_react27.useLoaderData)(), hasEthereumContext = !!window.ethereum;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: ethereumWallets.filter((wallet) => wallet.id !== "metamask" || hasEthereumContext).map((wallet) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "li",
      {
        onClick: () => {
          useConnectorType == null || useConnectorType(wallet.id);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("img", { src: wallet.logo }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_surfing11.Text, { size: "sm", className: "connect-wallet-modal-names", children: wallet.name })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_surfing11.Text, { size: "xs", className: "connect-wallet-modal-status", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("i", {}) })
        ]
      },
      `wallet-${wallet.name}`
    )) });
  }, closeWithEsc = (0, import_react28.useCallback)(
    (event) => {
      event.key === "Escape" && visible === !0 && close();
    },
    [visible]
  );
  return (0, import_react28.useEffect)(() => (document.addEventListener("keydown", closeWithEsc), () => document.removeEventListener("keydown", closeWithEsc)), [visible]), (0, import_react28.useEffect)(() => {
    setModal(
      (0, import_react_dom3.createPortal)(
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
          "div",
          {
            className: `connect-wallet-outer-container ${visible === !0 ? "show-modal" : "hide-modal"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { onClick: close, className: "connected-wallet-background" }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                "div",
                {
                  className: `connect-wallet-modal-container  ${visible === !0 ? "show-modal" : "hide-modal"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "connect-wallet-modal-header", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_surfing11.Text, { prominent: !0, size: "xxl", children: "Connect your wallet" }),
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                        "img",
                        {
                          onClick: close,
                          src: "/images/icons/x.svg",
                          className: "modal-cancel-btn"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("ul", { className: "connect-wallet-modal-list", children: [
                      network === "ethereum" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(EthWalletsMap, {}),
                      network === "solana" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SolWalletsMap, {})
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_surfing11.Text, { size: "xs", children: "By connecting a wallet, you agree to Fluidity Money\u2019s Terms of Service and acknowledge that you have read and understand the Disclaimer." })
                  ]
                }
              )
            ]
          }
        ),
        document.body
      )
    );
  }, [visible]), modal;
}, ConnectWalletModal_default = ConnectWalletModal;

// app/components/ConnectedWallet.tsx
var import_surfing12 = require("@fluidity-money/surfing"), import_react_jazzicon = __toESM(require("react-jazzicon")), import_jsx_runtime21 = require("react/jsx-runtime"), ConnectedWallet = ({
  address,
  callback,
  className,
  short = !0
}) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
  "button",
  {
    onClick: callback,
    className: `connected-wallet ${className ?? ""}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "holo", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_jazzicon.default, { diameter: 36, seed: (0, import_react_jazzicon.jsNumberForAddress)(address) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_surfing12.Text, { size: "lg", prominent: !0, children: [
        "   ",
        short ? (0, import_surfing12.trimAddressShort)(address) : (0, import_surfing12.trimAddress)(address)
      ] })
    ]
  }
), ConnectedWallet_default = ConnectedWallet;

// app/components/Modal.tsx
var import_react_dom4 = require("react-dom"), import_react29 = require("react"), import_jsx_runtime22 = require("react/jsx-runtime"), Modal = ({ visible, children }) => {
  let [modalElement, setModalElement] = (0, import_react29.useState)();
  return (0, import_react29.useEffect)(() => {
    let modalRoot = document.body, el = document.createElement("div");
    return el.id = "wallet-modal", modalRoot.appendChild(el), setModalElement(el), () => {
      modalRoot.removeChild(el);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: modalElement && visible && (0, import_react_dom4.createPortal)(children, modalElement) });
}, Modal_default = Modal;

// app/styles/dashboard.css
var dashboard_default = "/_static/build/_assets/dashboard-6YLMM4QG.css";

// app/components/MobileModal.tsx
var import_react31 = require("@remix-run/react");
var import_react32 = require("react");
var import_framer_motion6 = require("framer-motion"), import_surfing14 = require("@fluidity-money/surfing");

// app/components/ConnectedWalletModal.tsx
var import_react30 = require("react"), import_react_dom5 = require("react-dom"), import_surfing13 = require("@fluidity-money/surfing");
var import_jsx_runtime23 = require("react/jsx-runtime"), ConnectedWalletModal = ({
  visible,
  address,
  close,
  disconnect
}) => {
  let [modal, setModal] = (0, import_react30.useState)(null), [icon, setIcon] = (0, import_react30.useState)(
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "img",
      {
        height: "32",
        width: "32",
        src: "/images/icons/copyIconCircle.svg",
        alt: "copy"
      }
    )
  ), copyAddress = (address2) => {
    navigator.clipboard.writeText(address2), setIcon(
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { height: "32", width: "32", src: "/images/icons/checked.svg", alt: "copy" })
    ), setTimeout(() => {
      setIcon(
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "img",
          {
            height: "32",
            width: "32",
            src: "/images/icons/copyIconCircle.svg",
            alt: "copy"
          }
        )
      );
    }, 1e3);
  }, closeWithEsc = (0, import_react30.useCallback)(
    (event) => {
      event.key === "Escape" && visible === !0 && close();
    },
    [visible]
  );
  return (0, import_react30.useEffect)(() => (document.addEventListener("keydown", closeWithEsc), () => document.removeEventListener("keydown", closeWithEsc)), [visible]), (0, import_react30.useEffect)(() => {
    setModal(
      (0, import_react_dom5.createPortal)(
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_jsx_runtime23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
          "div",
          {
            className: `connected-wallet-modal-container ${visible === !0 ? "show-modal" : "hide-modal"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { onClick: close, className: "connected-wallet-background" }),
              /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_surfing13.Text, { size: "xxl", children: [
                  " ",
                  "Fluidity:",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_surfing13.Text, { prominent: !0, size: "md", children: "Connected" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { onClick: close, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: "/images/icons/x.svg", className: "modal-cancel-btn" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "connected-wallet-modal-body", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                    import_surfing13.Card,
                    {
                      className: "card-outer address-copy-box",
                      component: "div",
                      rounded: !1,
                      type: "box",
                      children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
                        "span",
                        {
                          className: "address-copy-box",
                          title: "Copy Wallet Address",
                          onClick: () => copyAddress(address),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                              ConnectedWallet_default,
                              {
                                className: "connected-btn-in-modal",
                                address,
                                short: !1,
                                callback: () => copyAddress(address)
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { children: icon })
                          ]
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                    import_surfing13.GeneralButton,
                    {
                      title: "Disconnect Wallet",
                      version: "transparent",
                      buttontype: "icon before",
                      icon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                        "img",
                        {
                          src: "/images/icons/disconnectIcon.svg",
                          alt: "disconnect"
                        }
                      ),
                      size: "medium",
                      handleClick: () => {
                        disconnect();
                      },
                      className: "disconnect-wallet-btn",
                      children: "Disconnect Wallet"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_surfing13.Text, { size: "xs", className: "legal", children: [
                    "By connecting a wallet, you agree to Fluidity Money's",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                      "a",
                      {
                        className: "link-text",
                        href: "https://static.fluidity.money/assets/fluidity-website-tc.pdf",
                        children: "Terms of Service"
                      }
                    ),
                    " ",
                    "and acknowledge that you have read and understand the",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("a", { className: "link-text", children: "Disclaimer" })
                  ] })
                ] })
              ] })
            ]
          }
        ) }),
        document.body
      )
    );
  }, [visible, address, icon]), modal;
};

// app/components/MobileModal.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
function MobileModal({
  navigationMap,
  activeIndex,
  chains,
  network,
  unclaimedFluid,
  isOpen,
  setIsOpen,
  unclaimedRewards
}) {
  let navigate = (0, import_react31.useNavigate)(), [walletModalVisibility, setWalletModalVisibility] = (0, import_react32.useState)(!1), [chainModalVisibility, setChainModalVisibility] = (0, import_react32.useState)(!1), [connectedWalletModalVisibility, setconnectedWalletModalVisibility] = (0, import_react32.useState)(!1), { connected, address, rawAddress, connecting, disconnect } = (0, import_react32.useContext)(
    FluidityFacade_default
  ), [animation, setAnimation] = (0, import_react32.useState)(!0);
  if ((0, import_react32.useEffect)(() => {
    isOpen && setAnimation(!1), isOpen || setAnimation(!0);
  }, [isOpen]), (0, import_react32.useEffect)(() => {
    walletModalVisibility ? document.body.style.position = "static" : setTimeout(() => document.body.style.position = "fixed", 1e3);
  }, [walletModalVisibility]), (0, import_react32.useEffect)(() => {
    connected && setWalletModalVisibility(!1);
  }, [connected]), walletModalVisibility)
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      ConnectWalletModal_default,
      {
        visible: walletModalVisibility,
        close: () => setWalletModalVisibility(!1)
      }
    );
  if (chainModalVisibility) {
    let handleSetChain = (network2) => {
      let { pathname } = location, pathComponents = pathname.split("/").slice(2);
      navigate(`/${networkMapper(network2)}/${pathComponents.join("/")}`);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "select-blockchain-mobile", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      import_surfing14.BlockchainModal,
      {
        handleModal: setChainModalVisibility,
        option: chains[network],
        options: Object.values(chains),
        setOption: handleSetChain,
        mobile: !0
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_framer_motion6.AnimatePresence, { initial: !!animation, children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    import_framer_motion6.motion.div,
    {
      initial: { opacity: 0, x: "75%" },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.4, type: "tween" },
      exit: { opacity: 0, x: "75%" },
      className: `mobile-modal-container  ${isOpen === !0 ? "show-modal" : "hide-modal"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("nav", { id: "mobile-top-navbar", className: "pad-main", children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "top-navbar-left", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "a",
            {
              onClick: () => {
                setTimeout(() => {
                  setIsOpen(!1);
                }, 800), navigate("./home");
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                "img",
                {
                  style: { width: "5.5em", height: "2.5em" },
                  src: "/images/outlinedLogo.svg",
                  alt: "Fluidity"
                }
              )
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "mobile-navbar-right", children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
              import_surfing14.GeneralButton,
              {
                version: "transparent",
                buttontype: "icon after",
                size: "small",
                className: "trophy-button",
                handleClick: () => {
                  setTimeout(() => {
                    setIsOpen(!1);
                  }, 800), navigate(unclaimedRewards ? "./rewards/unclaimed" : "./rewards");
                },
                icon: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_surfing14.Trophy, {}),
                children: (0, import_surfing14.numberToMonetaryString)(unclaimedRewards)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(BurgerButton_default, { isOpen, setIsOpen })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "mobile-modal-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("section", { children: [
              connected && address ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                ConnectedWallet_default,
                {
                  address: rawAddress ?? "",
                  callback: () => {
                    !connectedWalletModalVisibility && setconnectedWalletModalVisibility(!0), connectedWalletModalVisibility && setconnectedWalletModalVisibility(!1);
                  }
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                import_surfing14.GeneralButton,
                {
                  version: connected || connecting ? "transparent" : "primary",
                  buttontype: "text",
                  size: "medium",
                  handleClick: () => connecting ? null : setWalletModalVisibility(!0),
                  children: connecting ? "Connecting..." : "Connect Wallet"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                import_surfing14.ChainSelectorButton,
                {
                  chain: chains[network],
                  onClick: () => setChainModalVisibility(!0)
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("nav", { className: "navbar-v2 ", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("ul", { children: navigationMap.map(
              (obj, index) => {
                let key = Object.values(obj)[0], { name, icon } = obj, active = index === activeIndex;
                return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                  "li",
                  {
                    onClick: () => {
                      setTimeout(() => {
                        setIsOpen(!1);
                      }, 800);
                    },
                    children: [
                      index === activeIndex ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                        import_framer_motion6.motion.div,
                        {
                          className: "active",
                          layoutId: "active"
                        }
                      ) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                        import_react31.Link,
                        {
                          to: index === 0 ? "./" : key,
                          children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_surfing14.Text, { prominent: active, children: [
                            icon,
                            " ",
                            name
                          ] })
                        }
                      )
                    ]
                  },
                  key
                );
              }
            ) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("section", { className: "mobile-modal-bottom", children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
              import_surfing14.GeneralButton,
              {
                version: "secondary",
                buttontype: "icon after",
                size: "small",
                handleClick: () => {
                  setTimeout(() => {
                    setIsOpen(!1);
                  }, 800), navigate(unclaimedRewards ? "./rewards/unclaimed" : "./rewards");
                },
                icon: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("img", { src: "/images/icons/arrowRightWhite.svg" }),
                className: "unclaimed-button",
                children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_surfing14.Text, { size: "lg", prominent: !0, children: [
                  "Unclaimed $FLUID",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_surfing14.Heading, { as: "h5", className: "no-margin", children: (0, import_surfing14.numberToMonetaryString)(unclaimedFluid) })
                ] })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
              import_surfing14.GeneralButton,
              {
                version: "primary",
                buttontype: "text",
                size: "medium",
                handleClick: () => {
                  setTimeout(() => {
                    setIsOpen(!1);
                  }, 800), navigate("../fluidify");
                },
                className: "fluidify-money-button",
                children: "Fluidify Money"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("footer", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("a", { href: "https://fluidity.money", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
              import_surfing14.LinkButton,
              {
                size: "medium",
                type: "external",
                handleClick: () => {
                },
                children: "Fluidity Money Website"
              }
            ) }) })
          ] })
        ] }),
        connectedWalletModalVisibility && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          ConnectedWalletModal,
          {
            visible: connectedWalletModalVisibility,
            address: rawAddress ?? "",
            close: () => {
              setconnectedWalletModalVisibility(!1);
            },
            disconnect: () => {
              disconnect == null || disconnect(), setconnectedWalletModalVisibility(!1);
            }
          }
        )
      ]
    },
    "modal"
  ) });
}

// app/components/UnclaimedRewardsHoverModal.tsx
var import_surfing15 = require("@fluidity-money/surfing"), import_react33 = require("@remix-run/react"), import_jsx_runtime25 = require("react/jsx-runtime"), UnclaimedRewardsHoverModal = ({
  setShowModal,
  unclaimedRewards
}) => {
  let navigate = (0, import_react33.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "div",
    {
      className: "unclaimed-modal-container",
      onMouseEnter: () => setShowModal(!0),
      onMouseLeave: () => setTimeout(() => setShowModal(!1), 500),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "img",
          {
            id: "card-logo",
            src: "/images/fluidTokensMetallicCropped.svg",
            alt: "tokens",
            style: { width: 100 }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_surfing15.Text, { size: "sm", children: "Unclaimed rewards" }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_surfing15.Display, { className: "unclaimed-total", size: "xs", children: (0, import_surfing15.numberToMonetaryString)(unclaimedRewards) }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            import_surfing15.LinkButton,
            {
              size: "small",
              type: "internal",
              handleClick: () => {
                unclaimedRewards > 0 ? navigate("./rewards/unclaimed") : navigate("./rewards");
              },
              children: "DETAILS"
            }
          )
        ] })
      ]
    }
  );
}, UnclaimedRewardsHoverModal_default = UnclaimedRewardsHoverModal;

// app/routes/$network/dashboard.tsx
var import_jsx_runtime26 = require("react/jsx-runtime"), links3 = () => [{ rel: "stylesheet", href: dashboard_default }], loader11 = async ({ params }) => {
  let ethereumWallets = webapp_config_server_default.config.ethereum.wallets, network = params.network ?? "", provider = webapp_config_server_default.liquidity_providers, tokensConfig = webapp_config_server_default.config;
  return (0, import_node10.json)({
    network,
    provider,
    tokensConfig,
    ethereumWallets
  });
};
function ErrorBoundary3() {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "div",
    {
      className: "pad-main",
      style: {
        paddingTop: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("img", { src: "/images/logoMetallic.png", alt: "", style: { height: "40px" } }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h1", { children: "Could not load Dashboard!" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h2", { children: "Our team has been notified, and are working on fixing it!" })
      ]
    }
  );
}
var meta2 = ({ data }) => ({
  ...data,
  title: "Fluidity - Dashboard"
}), routeMapper = (route) => {
  switch (route.toLowerCase()) {
    case "home":
      return "DASHBOARD";
    case "rewards":
      return "REWARDS";
    case "unclaimed":
      return "CLAIM";
    case "assets":
      return "ASSETS";
    case "dao":
      return "DAO";
    default:
      return "DASHBOARD";
  }
};
function Dashboard() {
  var _a;
  let { network } = (0, import_react34.useLoaderData)(), navigate = (0, import_react34.useNavigate)(), { connected, address, rawAddress, disconnect, connecting } = (0, import_react35.useContext)(
    FluidityFacade_default
  ), { showExperiment, client } = (0, import_react35.useContext)(SplitContext), pathname = (0, import_react34.useLocation)().pathname.split("/").pop() ?? "", appName = routeMapper(pathname), [openMobModal, setOpenMobModal] = (0, import_react35.useState)(!1), [walletModalVisibility, setWalletModalVisibility] = (0, import_react35.useState)(!1), [connectedWalletModalVisibility, setConnectedWalletModalVisibility] = (0, import_react35.useState)(!1), [chainModalVisibility, setChainModalVisibility] = (0, import_react35.useState)(!1);
  (0, import_react35.useEffect)(() => {
    (connected || connecting) && setWalletModalVisibility(!1);
  }, [connected, connecting]);
  let { width } = (0, import_surfing16.useViewport)(), isMobile = width <= 500 && width > 0, isTablet = width <= 850 && width > 0, closeMobileModal = !(width > 850);
  (0, import_react35.useEffect)(() => {
    !closeMobileModal && setOpenMobModal(!1);
  }, [closeMobileModal]);
  let navigationMap = [
    { home: { name: "dashboard", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_surfing16.DashboardIcon, {}) } },
    { rewards: { name: "rewards", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_surfing16.Trophy, {}) } }
  ], chainNameMap = {
    ethereum: {
      name: "ETH",
      icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("img", { src: "/assets/chains/ethIcon.svg" })
    },
    solana: {
      name: "SOL",
      icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("img", { src: "/assets/chains/solanaIcon.svg" })
    }
  }, matches = (0, import_react34.useMatches)(), currentPath = ((_a = (0, import_react34.useTransition)().location) == null ? void 0 : _a.pathname) || matches[matches.length - 1].pathname, activeIndex = navigationMap.map(
    (obj) => (0, import_react34.useResolvedPath)(Object.keys(obj)[0])
  ).findIndex(
    (path) => path.pathname === currentPath || path.pathname === currentPath.slice(0, -1)
  ), handleSetChain = (network2) => {
    let { pathname: pathname2 } = location, pathComponents = pathname2.split("/").slice(2);
    navigate(`/${networkMapper(network2)}/${pathComponents.join("/")}`);
  }, userUnclaimedData = (0, import_react34.useFetcher)(), unclaimedRewards = userUnclaimedData.data ? userUnclaimedData.data.userUnclaimedRewards : 0;
  (0, import_react35.useEffect)(() => {
    !address || userUnclaimedData.load(
      `/${network}/query/dashboard/unclaimedRewards?address=${address}`
    );
  }, [address]);
  let handleScroll = () => {
    openMobModal || (document.body.style.overflow = "unset", document.body.style.position = "static"), openMobModal && typeof window < "u" && window.document && (document.body.style.overflow = "hidden", document.body.style.position = "fixed");
  };
  (0, import_react35.useEffect)(() => {
    openMobModal ? setTimeout(() => {
      handleScroll();
    }, 1e3) : handleScroll();
  }, [openMobModal]), (0, import_react35.useEffect)(() => {
    document.body.style.overflow = "unset", document.body.style.position = "static";
  }, [currentPath]), (0, import_react35.useEffect)(() => {
    connected && setWalletModalVisibility(!1);
  }, [connected]);
  let [hoverModal, setHoverModal] = (0, import_react35.useState)(!1), [showModal, setShowModal] = (0, import_react35.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("header", { id: "flu-logo", className: "hide-on-mobile", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react34.Link, { to: "./home", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "img",
        {
          style: { width: "5.5em", height: "2.5em" },
          src: "/images/outlinedLogo.svg",
          alt: "Fluidity"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        import_surfing16.ChainSelectorButton,
        {
          className: "selector-button",
          chain: chainNameMap[network],
          onClick: () => setChainModalVisibility(!0)
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Modal_default, { visible: chainModalVisibility, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "cover", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      import_surfing16.BlockchainModal,
      {
        handleModal: setChainModalVisibility,
        option: chainNameMap[network],
        options: Object.values(chainNameMap),
        setOption: handleSetChain,
        mobile: isMobile
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("nav", { id: "dashboard-navbar", className: "navbar-v2 hide-on-mobile", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("ul", { children: navigationMap.map((obj, index) => {
        let key = Object.keys(obj)[0], { name, icon } = Object.values(obj)[0], active = index === activeIndex;
        return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("li", { children: [
          index === activeIndex ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_framer_motion7.motion.div, { className: "active", layoutId: "active" }) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {}),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react34.Link, { to: key, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
            import_surfing16.Text,
            {
              prominent: active,
              className: active ? "dashboard-navbar-active" : "dashboard-navbar-default",
              children: [
                icon,
                " ",
                name
              ]
            }
          ) })
        ] }, key);
      }) }),
      network === "solana" ? connected && address ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        ConnectedWallet_default,
        {
          address: rawAddress ?? "",
          callback: () => {
            setConnectedWalletModalVisibility(
              !connectedWalletModalVisibility
            );
          },
          className: "connect-wallet-btn"
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        import_surfing16.GeneralButton,
        {
          version: connected || connecting ? "transparent" : "primary",
          buttontype: "text",
          size: "medium",
          handleClick: () => connecting ? null : setWalletModalVisibility(!0),
          className: "connect-wallet-btn",
          children: connecting ? "Connecting..." : "Connect Wallet"
        }
      ) : connected && address ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        ConnectedWallet_default,
        {
          address: rawAddress ?? "",
          callback: () => {
            !connectedWalletModalVisibility && setConnectedWalletModalVisibility(!0), connectedWalletModalVisibility && setConnectedWalletModalVisibility(!1);
          },
          className: "connect-wallet-btn"
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        import_surfing16.GeneralButton,
        {
          version: connected || connecting ? "transparent" : "primary",
          buttontype: "text",
          size: "medium",
          handleClick: () => connecting ? null : setWalletModalVisibility(!0),
          className: "connect-wallet-btn",
          children: connecting ? "Connecting..." : "Connect Wallet"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("main", { id: "dashboard-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("nav", { id: "top-navbar", className: "pad-main", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "top-navbar-left", children: [
          (isMobile || isTablet) && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("a", { onClick: () => navigate("./home"), children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            "img",
            {
              style: { width: "5.5em", height: "2.5em" },
              src: "/images/outlinedLogo.svg",
              alt: "Fluidity"
            }
          ) }),
          !isMobile && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_surfing16.Heading, { as: "h6", color: "gray", children: appName })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { id: "top-navbar-right", children: [
          showExperiment("Fluidify-Button-Placement") && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            import_surfing16.GeneralButton,
            {
              className: "fluidify-button-dashboard ",
              version: "primary",
              buttontype: "text",
              size: "small",
              handleClick: () => {
                client == null || client.track("user", "click_fluidify"), navigate("../fluidify");
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("b", { children: [
                "Fluidify",
                isMobile ? "" : " Money"
              ] })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            import_surfing16.GeneralButton,
            {
              onMouseEnter: () => setHoverModal(!0),
              onMouseLeave: () => setTimeout(() => setHoverModal(!1), 500),
              className: "trophy-button",
              version: "transparent",
              buttontype: "icon after",
              size: "small",
              handleClick: () => unclaimedRewards < 5e-6 ? navigate("./rewards") : navigate("./rewards/unclaimed"),
              icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_surfing16.Trophy, {}),
              children: unclaimedRewards < 5e-6 ? "$0" : (0, import_surfing16.numberToMonetaryString)(unclaimedRewards)
            }
          ),
          (isTablet || isMobile) && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(BurgerButton_default, { isOpen: openMobModal, setIsOpen: setOpenMobModal })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        ConnectedWalletModal,
        {
          visible: connectedWalletModalVisibility,
          address: rawAddress ?? "",
          close: () => {
            setConnectedWalletModalVisibility(!1);
          },
          disconnect: () => {
            disconnect == null || disconnect(), setConnectedWalletModalVisibility(!1);
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        ConnectWalletModal_default,
        {
          visible: walletModalVisibility,
          close: () => setWalletModalVisibility(!1)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react34.Outlet, {}),
      !openMobModal && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(ProvideLiquidity_default, {}),
      unclaimedRewards >= 5e-6 && (hoverModal || showModal) && !isMobile && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        UnclaimedRewardsHoverModal_default,
        {
          unclaimedRewards,
          setShowModal
        }
      ),
      !showExperiment("Fluidify-Button-Placement") && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        import_surfing16.GeneralButton,
        {
          className: "fluidify-button-dashboard-mobile rainbow ",
          version: "primary",
          buttontype: "text",
          size: "medium",
          handleClick: () => {
            client == null || client.track("user", "click_fluidify"), navigate("../fluidify");
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_surfing16.Heading, { as: "h5", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("b", { children: "Fluidify Money" }) })
        }
      ),
      openMobModal && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        MobileModal,
        {
          navigationMap: navigationMap.map((obj) => {
            let { name, icon } = Object.values(obj)[0];
            return { name, icon };
          }),
          activeIndex,
          chains: chainNameMap,
          unclaimedFluid: unclaimedRewards,
          network,
          isOpen: openMobModal,
          setIsOpen: setOpenMobModal,
          unclaimedRewards
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("footer", { id: "flu-socials", className: "hide-on-mobile pad-main", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_surfing16.Text, { children: "Fluidity Money" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            "a",
            {
              href: "https://static.fluidity.money/assets/fluidity-website-tc.pdf",
              children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_surfing16.Text, { children: "Terms" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            "a",
            {
              href: "https://static.fluidity.money/assets/fluidity-privacy-policy.pdf",
              children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_surfing16.Text, { children: "Privacy policy" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            "a",
            {
              href: "https://docs.fluidity.money/docs/security/audits-completed",
              children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_surfing16.Text, { children: "Audits Completed" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("a", { href: "https://docs.fluidity.money/docs/fundamentals/roadmap", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_surfing16.Text, { children: "Roadmap" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("a", { href: "https://twitter.com/fluiditymoney", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("img", { src: "/images/socials/twitter.svg", alt: "Twitter" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("a", { href: "https://discord.com/invite/CNvpJk4HpC", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("img", { src: "/images/socials/discord.svg", alt: "Discord" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("a", { href: "https://t.me/fluiditymoney", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("img", { src: "/images/socials/telegram.svg", alt: "Telegram" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("a", { href: "https://www.linkedin.com/company/fluidity-money", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("img", { src: "/images/socials/linkedin.svg", alt: "LinkedIn" }) })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/$network/dashboard/rewards.tsx
var rewards_exports2 = {};
__export(rewards_exports2, {
  default: () => Rewards,
  links: () => links4
});
var import_react36 = require("@remix-run/react");

// app/styles/dashboard/rewards.css
var rewards_default = "/_static/build/_assets/rewards-JJJNW37Z.css";

// app/routes/$network/dashboard/rewards.tsx
var import_jsx_runtime27 = require("react/jsx-runtime"), links4 = () => [{ rel: "stylesheet", href: rewards_default }];
function Rewards() {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react36.Outlet, {}) });
}

// app/routes/$network/dashboard/rewards/unclaimed.tsx
var unclaimed_exports2 = {};
__export(unclaimed_exports2, {
  default: () => unclaimed_default,
  loader: () => loader12,
  unstable_shouldReload: () => unstable_shouldReload
});
var import_node11 = require("@remix-run/node"), import_react39 = require("@remix-run/react"), import_react40 = require("react");

// app/routes/$network/dashboard/rewards/common.tsx
var common_exports = {};
__export(common_exports, {
  UserRewards: () => UserRewards
});
var import_react37 = require("react"), import_react38 = require("@remix-run/react"), import_surfing17 = require("@fluidity-money/surfing");
var import_jsx_runtime28 = require("react/jsx-runtime"), UserRewards = ({
  claimNow,
  unclaimedRewards,
  claimedRewards,
  network,
  networkFee,
  gasFee,
  tokenAddrs = []
}) => {
  let { manualReward, address } = (0, import_react37.useContext)(FluidityFacade_default), navigate = (0, import_react38.useNavigate)(), [claiming, setClaiming] = (0, import_react37.useState)(!1), buttonText = claimNow ? "Claim now with fees" : "View breakdown", networkNotEth = network !== "ethereum", onClick = async () => {
    if (!networkNotEth) {
      if (!claimNow)
        return navigate("../unclaimed");
      if (!claiming) {
        setClaiming(!0);
        try {
          let rewards = await (manualReward == null ? void 0 : manualReward(tokenAddrs, address ?? ""));
          if (!(rewards != null && rewards.length))
            return;
          let rewardedSum = rewards.reduce(
            (sum, res) => sum + ((res == null ? void 0 : res.amount) || 0),
            0
          );
          if (!rewardedSum) {
            setClaiming(!1);
            return;
          }
          let networkFee2 = rewards.reduce(
            (sum, res) => sum + ((res == null ? void 0 : res.networkFee) || 0),
            0
          ), gasFee2 = rewards.reduce((sum, res) => sum + ((res == null ? void 0 : res.gasFee) || 0), 0);
          return navigate(
            `../claim?reward=${rewardedSum}&networkfee=${networkFee2}&gasfee=${gasFee2}`
          );
        } catch (e) {
          console.error(e);
        } finally {
          setClaiming(!1);
        }
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      import_surfing17.Card,
      {
        id: "user-rewards",
        className: "card-outer",
        component: "div",
        rounded: !0,
        type: "box",
        children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "card-inner unclaimed-inner", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("section", { id: "unclaimed-left", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              "img",
              {
                id: "card-logo",
                src: "/images/fluidTokensMetallicCropped.svg",
                alt: "tokens",
                style: { width: 200 }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("section", { id: "unclaimed", children: [
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_surfing17.Text, { size: "md", children: "Unclaimed fluid rewards" }),
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_surfing17.Display, { className: "unclaimed-total", size: "sm", children: (0, import_surfing17.numberToMonetaryString)(unclaimedRewards) }),
              claiming ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
                import_surfing17.GeneralButton,
                {
                  size: "large",
                  version: "primary",
                  buttontype: "icon only",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_surfing17.Spinner, {}),
                  handleClick: onClick,
                  className: "view-breakdown-button"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
                import_surfing17.GeneralButton,
                {
                  size: "large",
                  version: "primary",
                  buttontype: "text",
                  handleClick: onClick,
                  className: "view-breakdown-button",
                  children: networkNotEth ? "Coming Soon!" : buttonText
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("section", { id: "infobox", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_surfing17.Heading, { className: "claims-title", as: "h5", children: "Auto-claims" }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_surfing17.Text, { size: "xs", children: [
              "Rewards will be claimed automatically without fees when market volume is reached. Claiming before this, time will incur instant-claim fees stated below.",
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("br", {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("hr", { className: "gradient-line" }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_surfing17.Heading, { className: "claims-title", as: "h5", children: "Instant-claim fees" }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("section", { className: "fees", children: [
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_surfing17.Text, { size: "xs", children: "Network fee" }),
              /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_surfing17.Text, { size: "xs", children: [
                networkFee,
                " ",
                network === "ethereum" ? "ETH" : "SOL"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("hr", { className: "line" }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("section", { className: "fees", children: [
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_surfing17.Text, { size: "xs", children: "Gas fee" }),
              /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_surfing17.Text, { size: "xs", children: [
                gasFee,
                " ",
                network === "ethereum" ? "ETH" : "SOL"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("hr", { className: "line" })
          ] })
        ] })
      }
    ),
    claimNow && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_surfing17.Text, { children: "Total yield claimed to date " }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_surfing17.Text, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("strong", { children: (0, import_surfing17.numberToMonetaryString)(claimedRewards) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react38.Link, { to: "..", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        import_surfing17.LinkButton,
        {
          size: "small",
          type: "internal",
          handleClick: () => {
          },
          children: "Reward History"
        }
      ) })
    ] })
  ] });
};

// app/routes/$network/dashboard/rewards/unclaimed.tsx
var import_framer_motion8 = require("framer-motion");
var import_surfing18 = require("@fluidity-money/surfing");
var import_jsx_runtime29 = require("react/jsx-runtime"), unstable_shouldReload = () => !1, loader12 = async ({ request, params }) => {
  let network = params.network ?? "", { tokens } = webapp_config_server_default.config[network], tokenDetailsMap = tokens.reduce(
    (map, token) => ({
      ...map,
      [token.symbol]: { logo: token.logo, address: token.address }
    }),
    {}
  ), fluidTokenMap = tokens.reduce(
    (map, token) => token.isFluidOf ? {
      ...map,
      [token.symbol]: token.address,
      [token.symbol.slice(1)]: token.address
    } : map,
    {}
  ), _pageStr = new URL(request.url).searchParams.get("page"), _pageUnsafe = _pageStr ? parseInt(_pageStr) : 1, page = _pageUnsafe > 0 ? _pageUnsafe : 1;
  return (0, import_node11.json)({
    tokenDetailsMap,
    fluidTokenMap,
    page,
    network
  });
}, SAFE_DEFAULT = {
  unclaimedTxs: [],
  unclaimedTokens: [],
  userUnclaimedRewards: 0,
  userClaimedRewards: 0
}, UnclaimedWinnings = () => {
  let { network, fluidTokenMap, tokenDetailsMap } = (0, import_react39.useLoaderData)(), { address } = (0, import_react40.useContext)(FluidityFacade_default), unclaimedData = (0, import_react39.useFetcher)();
  (0, import_react40.useEffect)(() => {
    !address || unclaimedData.load(
      `/${network}/query/dashboard/unclaimed?address=${address}`
    );
  }, [address]);
  let {
    unclaimedTxs,
    unclaimedTokens,
    userUnclaimedRewards,
    userClaimedRewards
  } = {
    ...SAFE_DEFAULT,
    ...unclaimedData.data
  }, [{ networkFee, gasFee }] = (0, import_react40.useState)({
    networkFee: 0,
    gasFee: 0
  }), location2 = (0, import_react39.useLocation)(), { width } = (0, import_surfing18.useViewport)(), isSmallMobile = width < 375, pageRegex = /page=[0-9]+/gi, _pageMatches = location2.search.match(pageRegex), _pageStr = _pageMatches != null && _pageMatches.length ? _pageMatches[0].split("=")[1] : "", _pageUnsafe = _pageStr ? parseInt(_pageStr) : 1, txTablePage = _pageUnsafe > 0 ? _pageUnsafe : 1, unclaimedRewardColumns = isSmallMobile ? [{ name: "TOKEN" }, { name: "REWARD" }] : [
    {
      name: "TOKEN"
    },
    {
      name: "REWARD"
    },
    {
      name: "TRANSACTION"
    },
    {
      name: "BLOCK",
      alignRight: !0
    }
  ], unclaimedTokenColumns = [{ name: "TOKEN" }, { name: "REWARD" }], [winningTableViewIndex, setWinningTableViewIndex] = (0, import_react40.useState)(0), winningTableViews = [
    { name: "My Breakdown", filter: () => !0 },
    { name: "My Winnings", filter: () => !0 }
  ], RewardRow = (chain) => function({
    data,
    index
  }) {
    let {
      token_decimals,
      token_short_name,
      transaction_hash,
      win_amount,
      block_number
    } = data, rewardUsd = win_amount / 10 ** token_decimals;
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      import_framer_motion8.motion.tr,
      {
        variants: {
          enter: { opacity: [0, 1] },
          ready: { opacity: 1 },
          exit: { opacity: 0 },
          transitioning: {
            opacity: [0.75, 1, 0.75],
            transition: { duration: 1.5, repeat: 1 / 0 }
          }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
            "a",
            {
              className: "table-activity",
              href: getAddressExplorerLink(
                network,
                tokenDetailsMap[token_short_name].address ?? ""
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  "img",
                  {
                    src: tokenDetailsMap[token_short_name].logo ?? "/assets/tokens/usdt.svg"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_surfing18.Text, { children: token_short_name })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_surfing18.Text, { prominent: !0, children: (0, import_surfing18.numberToMonetaryString)(rewardUsd) }) }),
          !isSmallMobile && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "a",
            {
              className: "table-address",
              href: getTxExplorerLink(chain, transaction_hash),
              children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_surfing18.Text, { children: (0, import_surfing18.trimAddress)(transaction_hash) })
            }
          ) }),
          !isSmallMobile && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "a",
            {
              style: { textDecoration: "underline" },
              href: getBlockExplorerLink(network, block_number),
              children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_surfing18.Text, { children: block_number })
            }
          ) })
        ]
      },
      `${transaction_hash}-${index}`
    );
  }, BreakdownRow = (chain) => function({
    data,
    index
  }) {
    let { reward, symbol } = data;
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      import_framer_motion8.motion.tr,
      {
        variants: {
          enter: { opacity: [0, 1] },
          ready: { opacity: 1 },
          exit: { opacity: 0 },
          transitioning: {
            opacity: [0.75, 1, 0.75],
            transition: { duration: 1.5, repeat: 1 / 0 }
          }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
            "a",
            {
              className: "table-activity",
              href: getAddressExplorerLink(
                chain,
                tokenDetailsMap[symbol].address ?? ""
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  "img",
                  {
                    src: tokenDetailsMap[symbol].logo ?? "/assets/tokens/usdt.svg"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_surfing18.Text, { children: symbol })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_surfing18.Text, { prominent: !0, children: (0, import_surfing18.numberToMonetaryString)(reward) }) })
        ]
      },
      `${symbol}-${index}`
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "pad-main", children: [
    network === "ethereum" && !!userUnclaimedRewards && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      UserRewards,
      {
        claimNow: !0,
        unclaimedRewards: userUnclaimedRewards,
        claimedRewards: userClaimedRewards,
        network,
        networkFee,
        gasFee,
        tokenAddrs: unclaimedTokens.map(
          ({ symbol }) => fluidTokenMap[symbol]
        )
      }
    ),
    !!address && unclaimedData.state === "loading" && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { style: { marginBottom: "12px" }, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_surfing18.Text, { children: "Loading data..." }) }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_surfing18.Heading, { as: "h2", children: winningTableViews[winningTableViewIndex].name }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { id: "table", children: [
      winningTableViewIndex === 0 && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        Table_default,
        {
          pagination: {
            page: txTablePage,
            rowsPerPage: 12
          },
          itemName: "unclaimed tokens",
          headings: unclaimedTokenColumns,
          count: unclaimedTokens.length,
          data: unclaimedTokens,
          renderRow: BreakdownRow(network),
          filters: winningTableViews,
          onFilter: setWinningTableViewIndex,
          activeFilterIndex: winningTableViewIndex
        }
      ),
      winningTableViewIndex === 1 && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        Table_default,
        {
          pagination: {
            page: txTablePage,
            rowsPerPage: 12
          },
          itemName: "unclaimed wins",
          headings: unclaimedRewardColumns,
          count: unclaimedTxs.length,
          data: unclaimedTxs,
          renderRow: RewardRow(network),
          filters: winningTableViews,
          onFilter: setWinningTableViewIndex,
          activeFilterIndex: winningTableViewIndex
        }
      )
    ] })
  ] });
}, unclaimed_default = UnclaimedWinnings;

// app/routes/$network/dashboard/rewards/claim.tsx
var claim_exports = {};
__export(claim_exports, {
  default: () => claim_default2,
  links: () => links5,
  loader: () => loader13
});
var import_node12 = require("@remix-run/node"), import_react41 = require("@remix-run/react"), import_react42 = require("react"), import_react43 = require("@remix-run/react");
var import_surfing19 = require("@fluidity-money/surfing");

// app/styles/dashboard/rewards/claim.css
var claim_default = "/_static/build/_assets/claim-YZLX6HKK.css";

// app/routes/$network/dashboard/rewards/claim.tsx
var import_jsx_runtime30 = require("react/jsx-runtime"), links5 = () => [{ rel: "stylesheet", href: claim_default }], loader13 = async ({ request, params }) => {
  let { network } = params, url = new URL(request.url), _reward = url.searchParams.get("reward"), reward = _reward ? parseInt(_reward) : 0, _networkFee = url.searchParams.get("networkFee"), networkFee = _networkFee ? parseInt(_networkFee) : 0, _gasFee = url.searchParams.get("gasFee"), gasFee = _gasFee ? parseInt(_gasFee) : 0;
  return (0, import_node12.json)({
    network,
    reward,
    networkFee,
    gasFee
  });
}, ClaimedRewards = () => {
  let { reward, networkFee, gasFee, network } = (0, import_react41.useLoaderData)(), { connected } = (0, import_react42.useContext)(FluidityFacade_default), navigate = (0, import_react43.useNavigate)();
  return connected ? /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { id: "claim-container", className: "cover", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "video",
      {
        id: "cover-vid",
        src: "/images/FluidityOpportunityB.mp4",
        autoPlay: !0,
        loop: !0
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("header", { id: "claim-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("img", { src: "/images/logoOutline.svg", alt: "FluidLogo" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        import_surfing19.LinkButton,
        {
          size: "small",
          type: "internal",
          handleClick: () => navigate(".."),
          children: "Close"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { id: "claim-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_surfing19.Text, { children: "Congrats! You\u2019ve claimed" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_surfing19.Heading, { as: "h1", children: [
        (0, import_surfing19.numberToMonetaryString)(reward),
        " USD"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_surfing19.Text, { children: "The funds have been added to your wallet." }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { className: "spread", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { className: "spread-text", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_surfing19.Text, { children: "Network fee" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_surfing19.Text, { children: [
            networkFee,
            " ",
            network === "ethereum" ? "ETH" : "SOL"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("hr", {}),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { className: "spread-text", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_surfing19.Text, { children: "Gas fee" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_surfing19.Text, { children: [
            gasFee,
            " ",
            network === "ethereum" ? "ETH" : "SOL"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("hr", {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        import_surfing19.GeneralButton,
        {
          className: "spread",
          version: "primary",
          buttontype: "text",
          size: "large",
          handleClick: () => {
            navigate("../../../fluidify");
          },
          children: "Fluidify Your Money"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        import_surfing19.GeneralButton,
        {
          className: "spread",
          size: "large",
          version: "transparent",
          buttontype: "icon before",
          icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_surfing19.Twitter, {}),
          handleClick: () => {
            window.open(generateTweet(reward, "claim"));
          },
          children: "SHARE"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        import_surfing19.LinkButton,
        {
          size: "small",
          type: "internal",
          handleClick: () => navigate(".."),
          children: "Rewards History"
        }
      )
    ] })
  ] }) : navigate("../../home");
}, claim_default2 = ClaimedRewards;

// app/routes/$network/dashboard/rewards/index.tsx
var rewards_exports3 = {};
__export(rewards_exports3, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => Rewards2,
  links: () => links6,
  loader: () => loader14
});
var import_framer_motion9 = require("framer-motion"), import_node13 = require("@remix-run/node"), import_react44 = require("@remix-run/react");
var import_surfing20 = require("@fluidity-money/surfing"), import_react45 = require("react");

// app/hooks/useCache.ts
var import_swr2 = __toESM(require("swr")), fetcher = (url) => fetch(url).then((r) => r.json()), useCache = (key) => (0, import_swr2.default)(key, fetcher);

// app/routes/$network/dashboard/rewards/index.tsx
var import_date_fns2 = require("date-fns"), import_jsx_runtime31 = require("react/jsx-runtime"), links6 = () => [{ rel: "stylesheet", href: rewards_default }], loader14 = async ({ params, request }) => {
  let { network } = params, icons = webapp_config_server_default.provider_icons, _pageStr = new URL(request.url).searchParams.get("page"), _pageUnsafe = _pageStr ? parseInt(_pageStr) : 1, txTablePage = _pageUnsafe > 0 ? _pageUnsafe : 1;
  return (0, import_node13.json)({
    network,
    icons,
    page: txTablePage,
    colors: (await colors)[network]
  });
};
function ErrorBoundary4() {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    "div",
    {
      className: "pad-main",
      style: {
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("img", { src: "/images/logoMetallic.png", alt: "", style: { height: "40px" } }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h1", { children: "Could not load User Rewards!" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h2", { children: "Our team has been notified, and are working on fixing it!" })
      ]
    }
  );
}
var SAFE_DEFAULT2 = {
  count: 0,
  network: "ethereum",
  fluidTokenMap: {},
  transactions: [],
  totalPrizePool: 0,
  page: 0,
  loaded: !1,
  fluidPairs: 0,
  networkFee: 0,
  gasFee: 0,
  timestamp: 0,
  rewarders: {
    week: [],
    month: [],
    year: [],
    all: []
  },
  rewards: {
    day: [],
    week: [],
    month: [],
    year: [],
    all: []
  }
};
function Rewards2() {
  var _a, _b, _c, _d;
  let { network, page, colors: colors2 } = (0, import_react44.useLoaderData)(), { data: rewardsData } = useCache(
    `/${network}/query/dashboard/rewards`
  ), isFirstLoad = !rewardsData, { data: globalTransactionsData } = useCache(
    `/${network}/query/winningUserTransactions?page=${page}`
  ), { connected, address, tokens } = (0, import_react45.useContext)(FluidityFacade_default), userRewardsData = (0, import_react44.useFetcher)(), userTransactionsData = (0, import_react44.useFetcher)(), userUnclaimedRewardsData = (0, import_react44.useFetcher)();
  (0, import_react45.useEffect)(() => {
    !address || (userRewardsData.load(
      `/${network}/query/dashboard/rewards?address=${address}`
    ), userTransactionsData.load(
      `/${network}/query/winningUserTransactions?page=${page}&address=${address}`
    ), userUnclaimedRewardsData.load(
      `/${network}/query/dashboard/unclaimedRewards?address=${address}&page=${page}`
    ));
  }, [address, page]);
  let [userFluidPairs, setUserFluidPairs] = (0, import_react45.useState)(SAFE_DEFAULT2.fluidPairs), data = {
    global: {
      ...SAFE_DEFAULT2,
      ...rewardsData,
      ...globalTransactionsData
    },
    user: {
      ...SAFE_DEFAULT2,
      ...userRewardsData.data,
      ...userTransactionsData.data,
      ...userUnclaimedRewardsData.data,
      fluidPairs: userFluidPairs
    }
  };
  (0, import_react45.useEffect)(() => {
    !connected || (async () => {
      let fluidTokens = await (tokens == null ? void 0 : tokens());
      setUserFluidPairs((fluidTokens == null ? void 0 : fluidTokens.length) || 0);
    })();
  }, [connected]);
  let { width } = (0, import_surfing20.useViewport)(), mobileView = width <= 500 && width > 0, tableBreakpoint = 850, txTableColumns = width > 0 && width < tableBreakpoint ? [{ name: "ACTIVITY" }, { name: "REWARD" }] : [
    {
      name: "ACTIVITY"
    },
    {
      name: "VALUE"
    },
    {
      name: "REWARD"
    },
    {
      name: "WINNER"
    },
    {
      name: "REWARDED TIME",
      alignRight: !0
    }
  ], [activeTableFilterIndex, setActiveTableFilterIndex] = (0, import_react45.useState)(0), txTableFilters = address ? [
    {
      filter: () => !0,
      name: "GLOBAL"
    },
    {
      filter: ({ sender, receiver }) => [sender, receiver].includes(address),
      name: "MY REWARDS"
    }
  ] : [
    {
      filter: () => !0,
      name: "GLOBAL"
    }
  ];
  (0, import_react45.useEffect)(() => {
    setActiveTableFilterIndex(connected ? 1 : 0);
  }, [connected]);
  let unixNow = Date.now(), [activeRewardFilterIndex, setActiveRewardFilterIndex] = (0, import_react45.useState)(0), rewardFilters = [
    {
      name: "All time",
      filter: () => !0
    },
    {
      name: "Last week",
      filter: ({ timestamp: timestamp2 }) => timestamp2 > unixNow - 7 * 24 * 60 * 60 * 1e3
    },
    {
      name: "Last month",
      filter: ({ timestamp: timestamp2 }) => timestamp2 > unixNow - 30 * 24 * 60 * 60 * 1e3
    },
    {
      name: "This year",
      filter: ({ timestamp: timestamp2 }) => timestamp2 > unixNow - 365 * 24 * 60 * 60 * 1e3
    }
  ], {
    count,
    hasRewarders,
    fluidPairs,
    networkFee,
    gasFee,
    transactions,
    rewarders,
    activeYield,
    totalPrizePool,
    timestamp,
    userUnclaimedRewards,
    unclaimedTokenAddrs,
    weeklyRewards
  } = (0, import_react45.useMemo)(() => {
    let {
      fluidPairs: fluidPairs2,
      networkFee: networkFee2,
      gasFee: gasFee2,
      transactions: transactions2,
      totalPrizePool: totalPrizePool2,
      timestamp: timestamp2,
      rewarders: rewarders2,
      rewards,
      userUnclaimedRewards: userUnclaimedRewards2,
      unclaimedTokenAddrs: unclaimedTokenAddrs2
    } = activeTableFilterIndex ? data.user : data.global, {
      week: weeklyYield,
      month: monthlyYield,
      year: yearlyYield,
      all: allYield
    } = rewards, {
      week: weeklyRewards2,
      month: monthlyRewards,
      year: yearlyRewards,
      all: allRewards
    } = rewarders2, [activeRewards, activeYield2] = (() => {
      switch (activeRewardFilterIndex) {
        case 1:
          return [weeklyRewards2, weeklyYield];
        case 2:
          return [monthlyRewards, monthlyYield];
        case 3:
          return [yearlyRewards, yearlyYield];
        case 0:
        default:
          return [allRewards, allYield];
      }
    })(), hasRewarders2 = !!activeRewards.length;
    return {
      count: allYield.length ? allYield[0].count : 0,
      hasRewarders: hasRewarders2,
      fluidPairs: fluidPairs2,
      networkFee: networkFee2,
      gasFee: gasFee2,
      transactions: transactions2,
      rewarders: activeRewards,
      timestamp: timestamp2,
      activeYield: activeYield2.length ? activeYield2[0].total_reward : 0,
      totalPrizePool: totalPrizePool2,
      userUnclaimedRewards: userUnclaimedRewards2,
      unclaimedTokenAddrs: unclaimedTokenAddrs2,
      weeklyRewards: weeklyRewards2
    };
  }, [
    activeTableFilterIndex,
    activeRewardFilterIndex,
    rewardsData == null ? void 0 : rewardsData.timestamp,
    globalTransactionsData == null ? void 0 : globalTransactionsData.page,
    userRewardsData.state,
    userTransactionsData.state,
    userUnclaimedRewardsData.state
  ]), TransactionRow = (chain) => function({ data: data2, index }) {
    let {
      winner,
      timestamp: timestamp2,
      value,
      reward,
      hash,
      rewardHash,
      logo,
      currency
    } = data2, toolTip = useToolTip(), handleRewardTransactionClick = (network2, currency2, logo2, hash2) => {
      hash2 && window.open(getTxExplorerLink(network2, hash2), "_blank"), !hash2 && toolTip.open(
        colors2[currency2],
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          ToolTipContent,
          {
            tokenLogoSrc: logo2,
            boldTitle: "",
            details: "\u23F3 This reward claim is still pending! \u23F3"
          }
        )
      );
    };
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
      import_framer_motion9.motion.tr,
      {
        variants: {
          enter: { opacity: [0, 1] },
          ready: { opacity: 1 },
          exit: { opacity: 0 },
          transitioning: {
            opacity: [0.75, 1, 0.75],
            transition: { duration: 1.5, repeat: 1 / 0 }
          }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
            "a",
            {
              className: "table-activity",
              href: getTxExplorerLink(network, hash),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("img", { src: logo }),
                /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_surfing20.Text, { children: transactionActivityLabel(data2, winner) })
              ]
            }
          ) }),
          width > tableBreakpoint && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_surfing20.Text, { children: value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("td", { children: reward ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            "a",
            {
              className: "table-address",
              onClick: () => handleRewardTransactionClick(
                network,
                currency,
                logo,
                rewardHash
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_surfing20.Text, { prominent: !0, children: reward ? (0, import_surfing20.numberToMonetaryString)(reward) : "-" })
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_surfing20.Text, { children: "-" }) }),
          width > tableBreakpoint && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            "a",
            {
              className: "table-address",
              href: getAddressExplorerLink(chain, winner),
              children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_surfing20.Text, { children: winner === MintAddress ? "Mint Address" : (0, import_surfing20.trimAddress)(winner) })
            }
          ) }),
          width > tableBreakpoint && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_surfing20.Text, { children: transactionTimeLabel(timestamp2) }) })
        ]
      },
      `${timestamp2}-${index}`
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "pad-main", children: [
    !!userUnclaimedRewards && userUnclaimedRewards > 5e-6 ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      UserRewards,
      {
        claimNow: mobileView,
        unclaimedRewards: userUnclaimedRewards,
        claimedRewards: activeYield,
        network,
        networkFee,
        gasFee,
        tokenAddrs: unclaimedTokenAddrs
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "no-user-rewards", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("section", { id: "spend-to-earn", children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_surfing20.Heading, { className: "spendToEarnHeading", as: "h2", children: "Spend to earn" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_surfing20.Text, { size: "lg", children: [
          "Use, send and receive fluid assets ",
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("br", {}),
          "to generate yield."
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("section", { children: (weeklyRewards == null ? void 0 : weeklyRewards.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_surfing20.Text, { size: "md", children: "Highest reward distribution this week" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          ProviderCard_default,
          {
            name: weeklyRewards[0].name,
            prize: weeklyRewards[0].prize,
            avgPrize: weeklyRewards[0].avgPrize,
            size: "lg"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "reward-ceiling", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_surfing20.Heading, { className: "reward-performance", as: mobileView ? "h3" : "h2", children: [
        activeTableFilterIndex ? "My" : "Global",
        " Reward Performance"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "filter-row", children: rewardFilters.map((filter, i) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "button",
        {
          onClick: () => setActiveRewardFilterIndex(i),
          children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            import_surfing20.Text,
            {
              size: "xl",
              prominent: activeRewardFilterIndex === i,
              className: activeRewardFilterIndex === i ? "active-filter" : "",
              children: filter.name
            }
          )
        },
        `filter-${filter.name}`
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("section", { id: "performance", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { style: { marginBottom: "12px" }, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_surfing20.Text, { children: isFirstLoad || !timestamp ? "Loading data..." : `Last updated: ${(0, import_date_fns2.format)(timestamp, "dd-MM-yyyy HH:mm:ss")}` }) }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "statistics-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "statistics-set", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          LabelledValue_default,
          {
            label: `${activeTableFilterIndex ? "My" : "Total"} claimed yield`,
            children: (0, import_surfing20.numberToMonetaryString)(activeYield)
          }
        ) }),
        hasRewarders && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "statistics-set", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(LabelledValue_default, { label: "Highest performer", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "highest-performer-child", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(ProviderIcon_default, { provider: (_a = rewarders[0]) == null ? void 0 : _a.name }),
          ((_b = rewarders[0]) == null ? void 0 : _b.name) === "Fluidity" ? "Transacting \u0192Assets" : (_c = rewarders[0]) == null ? void 0 : _c.name
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "statistics-set", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(LabelledValue_default, { label: "Total prize pool", children: (0, import_surfing20.numberToMonetaryString)(totalPrizePool) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "statistics-set", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(LabelledValue_default, { label: "Fluid Pairs", children: fluidPairs }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react44.Link, { to: `/${network}/fluidify`, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            import_surfing20.LinkButton,
            {
              size: "medium",
              type: "internal",
              handleClick: () => {
              },
              children: "Create Assets"
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("section", { id: "table", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      Table_default,
      {
        itemName: "rewards",
        headings: txTableColumns,
        pagination: {
          page,
          rowsPerPage: 12
        },
        count,
        data: transactions,
        renderRow: TransactionRow(network),
        filters: txTableFilters,
        onFilter: setActiveTableFilterIndex,
        activeFilterIndex: activeTableFilterIndex,
        loaded: activeTableFilterIndex ? (_d = userTransactionsData.data) == null ? void 0 : _d.loaded : globalTransactionsData == null ? void 0 : globalTransactionsData.loaded,
        showLoadingAnimation: !0
      }
    ) }),
    hasRewarders && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("section", { id: "rewarders", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_surfing20.Heading, { className: "highest-rewarders", as: "h2", children: "Highest Rewarders" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_surfing20.ManualCarousel, { scrollBar: !0, className: "rewards-carousel", children: rewarders.map((rewarder) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "carousel-card-container", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        ProviderCard_default,
        {
          name: rewarder.name,
          prize: rewarder.prize,
          avgPrize: rewarder.avgPrize,
          size: "md"
        }
      ) }, rewarder.name)) })
    ] })
  ] });
}

// app/routes/$network/dashboard/assets.tsx
var assets_exports = {};
__export(assets_exports, {
  default: () => assets_default
});
var import_jsx_runtime32 = require("react/jsx-runtime"), Assets = () => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_jsx_runtime32.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h1", { children: "Assets" }) }), assets_default = Assets;

// app/routes/$network/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  loader: () => loader15
});
var import_node14 = require("@remix-run/node"), loader15 = async ({ params }) => (0, import_node14.redirect)(`/${params.network}/dashboard/home`, 301);

// app/routes/$network/dashboard/home.tsx
var home_exports2 = {};
__export(home_exports2, {
  ErrorBoundary: () => ErrorBoundary5,
  default: () => Home,
  links: () => links7,
  loader: () => loader16
});
var import_framer_motion10 = require("framer-motion"), import_node15 = require("@remix-run/node"), import_date_fns3 = require("date-fns");
var import_surfing21 = require("@fluidity-money/surfing"), import_react46 = require("react"), import_react47 = require("@remix-run/react");

// app/styles/dashboard/home.css
var home_default = "/_static/build/_assets/home-GUF2IRGQ.css";

// app/routes/$network/dashboard/home.tsx
var import_jsx_runtime33 = require("react/jsx-runtime"), links7 = () => [{ rel: "stylesheet", href: home_default }], graphEmptyVolume = (time, amount = 0) => ({
  sender: "",
  receiver: "",
  timestamp: time,
  amount,
  symbol: ""
}), binTransactions = (bins, txs) => {
  let txMappedBins = bins.map((bin) => [bin]), binIndex = 0;
  txs.every((tx) => {
    for (; tx.timestamp < bins[binIndex].timestamp; )
      if (binIndex++, binIndex >= bins.length)
        return !1;
    return txMappedBins[binIndex].push(tx), !0;
  });
  let maxTxMappedBins = txMappedBins.map(
    (txs2, i) => txs2.find(
      (tx) => tx.amount === Math.max(...txs2.map(({ amount }) => amount))
    ) || bins[i]
  ).reverse(), [txMappedBinsStart, ...rest] = maxTxMappedBins.filter(
    (tx) => tx.amount
  );
  if (!txMappedBinsStart)
    return maxTxMappedBins;
  let txMappedBinsEnd = rest.pop();
  return maxTxMappedBins.filter(
    (tx, i) => tx.amount || i === 0 || i === maxTxMappedBins.length - 1 || tx.timestamp < txMappedBinsStart.timestamp && txMappedBinsEnd && tx.timestamp > txMappedBinsEnd.timestamp
  );
}, graphTransformers = [
  {
    name: "D",
    transform: (vols) => {
      let unixNow = Date.now(), mappedTxBins = Array.from({ length: 24 }).map((_, i) => ({
        ...graphEmptyVolume(unixNow - (i + 1) * 36e5)
      }));
      return binTransactions(mappedTxBins, vols);
    }
  },
  {
    name: "W",
    transform: (vols) => {
      let unixNow = Date.now(), mappedTxBins = Array.from({ length: 7 }).map((_, i) => ({
        ...graphEmptyVolume(unixNow - (i + 1) * 864e5)
      }));
      return binTransactions(mappedTxBins, vols);
    }
  },
  {
    name: "M",
    transform: (vols) => {
      let unixNow = Date.now(), mappedTxBins = Array.from({ length: 30 }).map((_, i) => ({
        ...graphEmptyVolume(unixNow - (i + 1) * 864e5)
      }));
      return binTransactions(mappedTxBins, vols);
    }
  },
  {
    name: "Y",
    transform: (vols) => {
      let unixNow = Date.now(), mappedTxBins = Array.from({ length: 12 }).map((_, i) => ({
        ...graphEmptyVolume(unixNow - (i + 1) * 2592e6)
      }));
      return binTransactions(mappedTxBins, vols);
    }
  }
], timeFilters = [
  {
    name: "D",
    filter: ({ timestamp }) => timestamp > Date.now() - 24 * 60 * 60 * 1e3
  },
  {
    name: "W",
    filter: ({ timestamp }) => timestamp > Date.now() - 7 * 24 * 60 * 60 * 1e3
  },
  {
    name: "M",
    filter: ({ timestamp }) => timestamp > Date.now() - 30 * 24 * 60 * 60 * 1e3
  },
  {
    name: "Y",
    filter: ({ timestamp }) => timestamp > Date.now() - 365 * 24 * 60 * 60 * 1e3
  }
];
function ErrorBoundary5(error) {
  return console.log(error), /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    "div",
    {
      className: "pad-main",
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("img", { src: "/images/logoMetallic.png", alt: "", style: { height: "40px" } }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h1", { children: "Could not fetch transactions!" })
      ]
    }
  );
}
var SAFE_DEFAULT3 = {
  totalPrizePool: 0,
  count: 0,
  network: "ethereum",
  transactions: [],
  loaded: !1,
  rewards: {
    day: [],
    week: [],
    month: [],
    year: [],
    all: []
  },
  volume: [],
  totalFluidPairs: 0,
  timestamp: 0,
  page: 0
}, loader16 = async ({ params, request }) => {
  let { network } = params, _pageStr = new URL(request.url).searchParams.get("page"), _pageUnsafe = _pageStr ? parseInt(_pageStr) : 1, txTablePage = _pageUnsafe > 0 ? _pageUnsafe : 1;
  return (0, import_node15.json)({
    network,
    page: txTablePage,
    colors: (await colors)[network]
  });
};
function Home() {
  var _a;
  let { network, page, colors: colors2 } = (0, import_react47.useLoaderData)(), { address, connected, tokens } = (0, import_react46.useContext)(FluidityFacade_default), { data: homeData } = useCache(
    `/${network}/query/dashboard/home`
  ), isFirstLoad = !homeData, { data: globalTransactionsData } = useCache(
    `/${network}/query/userTransactions?page=${page}`
  ), userHomeData = (0, import_react47.useFetcher)(), userTransactionsData = (0, import_react47.useFetcher)(), toolTip = useToolTip(), handleRewardTransactionClick = (network2, currency, logo, hash) => {
    hash && window.open(getTxExplorerLink(network2, hash), "_blank"), !hash && toolTip.open(
      colors2[currency],
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        ToolTipContent,
        {
          tokenLogoSrc: logo,
          boldTitle: "",
          details: "\u23F3 This reward claim is still pending! \u23F3"
        }
      )
    );
  };
  (0, import_react46.useEffect)(() => {
    !address || (userHomeData.load(`/${network}/query/dashboard/home?address=${address}`), userTransactionsData.load(
      `/${network}/query/userTransactions?page=${page}&address=${address}`
    ));
  }, [address, page]);
  let [userFluidPairs, setUserFluidPairs] = (0, import_react46.useState)(
    SAFE_DEFAULT3.totalFluidPairs
  ), data = {
    global: {
      ...SAFE_DEFAULT3,
      ...homeData,
      ...globalTransactionsData
    },
    user: {
      ...SAFE_DEFAULT3,
      ...userHomeData.data,
      ...userTransactionsData.data,
      totalFluidPairs: userFluidPairs
    }
  };
  (0, import_react46.useEffect)(() => {
    !connected || (async () => {
      let fluidTokens = await (tokens == null ? void 0 : tokens());
      setUserFluidPairs((fluidTokens == null ? void 0 : fluidTokens.length) || 0);
    })();
  }, [connected]);
  let [activeTransformerIndex, setActiveTransformerIndex] = (0, import_react46.useState)(3), [activeTableFilterIndex, setActiveTableFilterIndex] = (0, import_react46.useState)(0);
  (0, import_react46.useEffect)(() => {
    setActiveTableFilterIndex(connected ? 1 : 0);
  }, [connected]);
  let { width } = (0, import_surfing21.useViewport)(), isTablet = width < 850 && width > 0, isMobile = width < 500 && width > 0, isSmallMobile = width < 375, txTableColumns = isSmallMobile ? [{ name: "ACTIVITY" }, { name: "VALUE" }] : isMobile ? [{ name: "ACTIVITY" }, { name: "VALUE" }, { name: "ACCOUNT" }] : isTablet ? [
    { name: "ACTIVITY" },
    { name: "VALUE" },
    { name: "REWARD" },
    { name: "ACCOUNT" }
  ] : [
    {
      name: "ACTIVITY"
    },
    {
      name: "VALUE"
    },
    {
      name: "REWARD"
    },
    {
      name: "ACCOUNT"
    },
    {
      name: "TIME",
      alignRight: !0
    }
  ], txTableFilters = address ? [
    {
      filter: () => !0,
      name: "GLOBAL"
    },
    {
      filter: ({
        sender,
        receiver
      }) => [sender, receiver].includes(address),
      name: "MY DASHBOARD"
    }
  ] : [
    {
      filter: () => !0,
      name: "GLOBAL"
    }
  ], {
    totalPrizePool,
    count,
    totalCount,
    rewards,
    volume,
    transactions,
    graphTransformedTransactions,
    fluidPairs,
    timestamp
  } = (0, import_react46.useMemo)(() => {
    let {
      transactions: transactions2,
      volume: volume2,
      rewards: rewards2,
      totalFluidPairs,
      timestamp: timestamp2,
      totalPrizePool: totalPrizePool2
    } = activeTableFilterIndex ? data.user : data.global, {
      day: dailyRewards,
      week: weeklyRewards,
      month: monthlyRewards,
      year: yearlyRewards
    } = rewards2, activeRewards = (() => {
      switch (activeTransformerIndex) {
        case 0:
          return dailyRewards;
        case 1:
          return weeklyRewards;
        case 2:
          return monthlyRewards;
        case 3:
        default:
          return yearlyRewards;
      }
    })(), filteredVolume = volume2.filter(
      timeFilters[activeTransformerIndex].filter
    ), totalVolume = filteredVolume.reduce(
      (sum, { amount }) => sum + amount,
      0
    ), graphTransformedTransactions2 = graphTransformers[activeTransformerIndex].transform(filteredVolume);
    return {
      count: filteredVolume.length,
      totalCount: volume2.length,
      rewards: activeRewards,
      volume: totalVolume,
      transactions: transactions2,
      graphTransformedTransactions: graphTransformedTransactions2,
      fluidPairs: totalFluidPairs,
      timestamp: timestamp2,
      totalPrizePool: totalPrizePool2
    };
  }, [
    activeTableFilterIndex,
    activeTransformerIndex,
    userHomeData.state,
    userTransactionsData.state,
    homeData == null ? void 0 : homeData.timestamp,
    globalTransactionsData == null ? void 0 : globalTransactionsData.page
  ]), TransactionRow = (chain) => function({ data: data2, index }) {
    let {
      sender,
      timestamp: timestamp2,
      value,
      reward,
      hash,
      rewardHash,
      currency,
      logo
    } = data2;
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
      import_framer_motion10.motion.tr,
      {
        variants: {
          enter: { opacity: [0, 1] },
          ready: { opacity: 1 },
          exit: { opacity: 0 },
          transitioning: {
            opacity: [0.75, 1, 0.75],
            transition: { duration: 1.5, repeat: 1 / 0 }
          }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
            "a",
            {
              className: "table-activity",
              href: getTxExplorerLink(network, hash),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("img", { src: logo }),
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.Text, { children: transactionActivityLabel(data2, sender) })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.Text, { children: (0, import_surfing21.numberToMonetaryString)(value) }) }),
          !isMobile && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("td", { children: reward ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "a",
            {
              className: "table-address",
              onClick: () => handleRewardTransactionClick(
                network,
                currency,
                logo,
                rewardHash
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.Text, { prominent: !0, children: reward ? (0, import_surfing21.numberToMonetaryString)(reward) : "-" })
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.Text, { children: "-" }) }),
          !isSmallMobile && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "a",
            {
              className: "table-address",
              href: getAddressExplorerLink(chain, sender),
              children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.Text, { children: sender === MintAddress ? "Mint Address" : (0, import_surfing21.trimAddress)(sender) })
            }
          ) }),
          !isTablet && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.Text, { children: transactionTimeLabel(timestamp2) }) })
        ]
      },
      `${timestamp2}-${index}`
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "pad-main top-text", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.Text, { children: isFirstLoad || !timestamp ? "Loading data..." : `Last updated: ${(0, import_date_fns3.format)(timestamp, "dd-MM-yyyy HH:mm:ss")}` }),
      width < 1200 && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        import_surfing21.Display,
        {
          size: isSmallMobile ? "xxs" : "xs",
          color: "gray",
          className: "dashboard-identifier",
          children: `${activeTableFilterIndex ? "My" : "Global"} Dashboard`
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("section", { id: "graph", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "graph-ceiling pad-main", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "overlay", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "totals-column", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "statistics-set", children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_surfing21.Text, { children: [
                activeTableFilterIndex ? "My" : "Total",
                " yield"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                import_surfing21.Display,
                {
                  size: width < 500 && width > 0 ? "xxxs" : "xxs",
                  style: { margin: 0 },
                  children: (0, import_surfing21.numberToMonetaryString)(
                    ((_a = rewards.find(
                      ({ network: rewardNetwork }) => rewardNetwork === network
                    )) == null ? void 0 : _a.total_reward) || 0
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react47.Link, { to: "../rewards", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                import_surfing21.LinkButton,
                {
                  size: "medium",
                  type: "internal",
                  handleClick: () => {
                  },
                  children: "Rewards"
                }
              ) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "statistics-set", children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_surfing21.Text, { children: [
                activeTableFilterIndex ? "My" : "Total",
                " transactions"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                import_surfing21.Display,
                {
                  size: width < 500 && width > 0 ? "xxxs" : "xxs",
                  style: { margin: 0 },
                  children: count
                }
              ),
              !!count && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.AnchorButton, { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("a", { href: "#transactions", children: "Activity" }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "totals-column", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "statistics-set", children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.Text, { children: "Prize Pool" }),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                import_surfing21.Display,
                {
                  size: width < 500 && width > 0 ? "xxxs" : "xxs",
                  style: { margin: 0 },
                  children: (0, import_surfing21.numberToMonetaryString)(totalPrizePool)
                }
              )
            ] }),
            activeTableFilterIndex === 0 ? /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "statistics-set", children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.Text, { children: "Total volume" }),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                import_surfing21.Display,
                {
                  size: width < 500 && width > 0 ? "xxxs" : "xxs",
                  style: { margin: 0 },
                  children: (0, import_surfing21.numberToMonetaryString)(volume)
                }
              )
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "statistics-set", children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.Text, { children: "Fluid assets" }),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                import_surfing21.Display,
                {
                  size: width < 500 && width > 0 ? "xxxs" : "xxs",
                  style: { margin: 0 },
                  children: fluidPairs
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react47.Link, { to: `/${network}/fluidify`, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                import_surfing21.LinkButton,
                {
                  size: "medium",
                  type: "internal",
                  handleClick: () => {
                  },
                  children: "Create Assets"
                }
              ) })
            ] })
          ] }),
          activeTableFilterIndex === 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "totals-column", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "statistics-set", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_surfing21.Text, { children: "Fluid assets" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              import_surfing21.Display,
              {
                size: width < 500 && width > 0 ? "xxxs" : "xxs",
                style: { margin: 0 },
                children: fluidPairs
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react47.Link, { to: `/${network}/fluidify`, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              import_surfing21.LinkButton,
              {
                size: "medium",
                type: "internal",
                handleClick: () => {
                },
                children: "Create Assets"
              }
            ) })
          ] }) })
        ] }),
        width > 1200 && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_surfing21.Display,
          {
            size: width < 1010 ? "xxs" : "xs",
            color: "gray",
            className: "dashboard-identifier",
            children: `${activeTableFilterIndex ? "My" : "Global"} Dashboard`
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "graph", style: { width: "100%", height: "400px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "statistics-row pad-main", children: graphTransformers.map((filter, i) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "button",
          {
            onClick: () => setActiveTransformerIndex(i),
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              import_surfing21.Text,
              {
                size: "lg",
                prominent: activeTransformerIndex === i,
                className: activeTransformerIndex === i ? "active-filter" : "",
                children: filter.name
              }
            )
          },
          `filter-${filter.name}`
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_surfing21.LineChart,
          {
            data: graphTransformedTransactions.map((tx, i) => ({
              ...tx,
              x: i
            })),
            lineLabel: "transactions",
            accessors: {
              xAccessor: (d) => d.x,
              yAccessor: (d) => d.amount ? Math.log(d.amount + 1) : 0
            },
            renderTooltip: ({ datum }) => datum.amount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "graph-tooltip-container", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "graph-tooltip", children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { style: { color: "rgba(255,255,255, 50%)" }, children: (0, import_date_fns3.format)(datum.timestamp, "dd/MM/yy") }),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: datum.sender === MintAddress ? "Mint Address" : (0, import_surfing21.trimAddress)(datum.sender) }),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { children: [
                  (0, import_surfing21.numberToMonetaryString)(datum.amount),
                  " "
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { style: { color: "rgba(2555,255,255, 50%)" }, children: "swapped" })
              ] })
            ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_jsx_runtime33.Fragment, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("section", { id: "transactions", className: "pad-main", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      Table_default,
      {
        itemName: "transactions",
        headings: txTableColumns,
        pagination: {
          page,
          rowsPerPage: 12
        },
        count: totalCount,
        data: transactions,
        renderRow: TransactionRow(network),
        onFilter: setActiveTableFilterIndex,
        activeFilterIndex: activeTableFilterIndex,
        filters: txTableFilters
      }
    ) })
  ] });
}

// app/routes/$network/dashboard/dao.tsx
var dao_exports = {};
__export(dao_exports, {
  default: () => dao_default
});
var import_jsx_runtime34 = require("react/jsx-runtime"), DAO = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_jsx_runtime34.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h1", { children: "DAO" }) }), dao_default = DAO;

// app/routes/$network/fluidify.tsx
var fluidify_exports = {};
__export(fluidify_exports, {
  default: () => Fluidify,
  links: () => links8,
  meta: () => meta3
});
var import_react48 = require("@remix-run/react");

// app/styles/fluidify.css
var fluidify_default = "/_static/build/_assets/fluidify-WJ34PG5X.css";

// app/routes/$network/fluidify.tsx
var import_jsx_runtime35 = require("react/jsx-runtime"), links8 = () => [
  {
    rel: "stylesheet",
    href: fluidify_default
  }
], meta3 = ({ data }) => ({
  ...data,
  title: "Fluidity - Fluidify"
});
function Fluidify() {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_jsx_runtime35.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react48.Outlet, {}) });
}

// app/routes/$network/fluidify/index.tsx
var fluidify_exports2 = {};
__export(fluidify_exports2, {
  ErrorBoundary: () => ErrorBoundary6,
  default: () => FluidifyToken,
  loader: () => loader17
});
var import_react69 = require("@remix-run/react"), import_bn9 = __toESM(require("bn.js"));
var import_lodash = require("lodash"), import_react70 = require("react");

// ../node_modules/react-dnd/dist/core/DndContext.js
var import_react49 = require("react"), DndContext = (0, import_react49.createContext)({
  dragDropManager: void 0
});

// ../node_modules/react-dnd/dist/core/DndProvider.js
var import_jsx_runtime36 = require("react/jsx-runtime");

// ../node_modules/dnd-core/dist/createDragDropManager.js
var import_redux = require("redux");

// ../node_modules/@react-dnd/invariant/dist/index.js
function invariant(condition, format5, ...args) {
  if (isProduction() && format5 === void 0)
    throw new Error("invariant requires an error message argument");
  if (!condition) {
    let error;
    if (format5 === void 0)
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      let argIndex = 0;
      error = new Error(format5.replace(/%s/g, function() {
        return args[argIndex++];
      })), error.name = "Invariant Violation";
    }
    throw error.framesToPop = 1, error;
  }
}
function isProduction() {
  return typeof process < "u" && !0;
}

// ../node_modules/dnd-core/dist/utils/js_utils.js
function get(obj, path, defaultValue) {
  return path.split(".").reduce(
    (a, c) => a && a[c] ? a[c] : defaultValue || null,
    obj
  );
}
function without(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function isObject(input) {
  return typeof input == "object";
}
function xor(itemsA, itemsB) {
  let map = /* @__PURE__ */ new Map(), insertItem = (item) => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem), itemsB.forEach(insertItem);
  let result = [];
  return map.forEach((count, key) => {
    count === 1 && result.push(key);
  }), result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(
    (t) => itemsB.indexOf(t) > -1
  );
}

// ../node_modules/dnd-core/dist/actions/dragDrop/types.js
var INIT_COORDS = "dnd-core/INIT_COORDS", BEGIN_DRAG = "dnd-core/BEGIN_DRAG", PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE", HOVER = "dnd-core/HOVER", DROP = "dnd-core/DROP", END_DRAG = "dnd-core/END_DRAG";

// ../node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

// ../node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js
var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function(sourceIds = [], options3 = {
    publishSource: !0
  }) {
    let { publishSource = !0, clientOffset, getSourceClientOffset: getSourceClientOffset2 } = options3, monitor = manager.getMonitor(), registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset)), verifyInvariants(sourceIds, monitor, registry);
    let sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2)
        throw new Error("getSourceClientOffset must be defined");
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2), sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    let item = registry.getSource(sourceId).beginDrag(monitor, sourceId);
    if (item == null)
      return;
    verifyItemIsObject(item), registry.pinSource(sourceId);
    let itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging."), sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i = sourceIds.length - 1; i >= 0; i--)
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  return sourceId;
}

// ../node_modules/dnd-core/dist/actions/dragDrop/drop.js
function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function createDrop(manager) {
  return function(options3 = {}) {
    let monitor = manager.getMonitor(), registry = manager.getRegistry();
    verifyInvariants2(monitor), getDroppableTargets(monitor).forEach((targetId, index) => {
      let dropResult = determineDropResult(targetId, index, registry, monitor), action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread({}, options3, dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}
function verifyInvariants2(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging."), invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  let target = registry.getTarget(targetId), dropResult = target ? target.drop(monitor, targetId) : void 0;
  return verifyDropResultType(dropResult), typeof dropResult > "u" && (dropResult = index === 0 ? {} : monitor.getDropResult()), dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult > "u" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  let targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  return targetIds.reverse(), targetIds;
}

// ../node_modules/dnd-core/dist/actions/dragDrop/endDrag.js
function createEndDrag(manager) {
  return function() {
    let monitor = manager.getMonitor(), registry = manager.getRegistry();
    verifyIsDragging(monitor);
    let sourceId = monitor.getSourceId();
    return sourceId != null && (registry.getSource(sourceId, !0).endDrag(monitor, sourceId), registry.unpinSource()), {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}

// ../node_modules/dnd-core/dist/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  return draggedItemType === null ? targetType === null : Array.isArray(targetType) ? targetType.some(
    (t) => t === draggedItemType
  ) : targetType === draggedItemType;
}

// ../node_modules/dnd-core/dist/actions/dragDrop/hover.js
function createHover(manager) {
  return function(targetIdsArg, { clientOffset } = {}) {
    verifyTargetIdsIsArray(targetIdsArg);
    let targetIds = targetIdsArg.slice(0), monitor = manager.getMonitor(), registry = manager.getRegistry(), draggedItemType = monitor.getItemType();
    return removeNonMatchingTargetIds(targetIds, registry, draggedItemType), checkInvariants(targetIds, monitor, registry), hoverAllTargets(targetIds, monitor, registry), {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), "Cannot call hover while not dragging."), invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (let i = 0; i < targetIds.length; i++) {
    let targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    let target = registry.getTarget(targetId);
    invariant(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (let i = targetIds.length - 1; i >= 0; i--) {
    let targetId = targetIds[i], targetType = registry.getTargetType(targetId);
    matchesType(targetType, draggedItemType) || targetIds.splice(i, 1);
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    registry.getTarget(targetId).hover(monitor, targetId);
  });
}

// ../node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js
function createPublishDragSource(manager) {
  return function() {
    if (manager.getMonitor().isDragging())
      return {
        type: PUBLISH_DRAG_SOURCE
      };
  };
}

// ../node_modules/dnd-core/dist/actions/dragDrop/index.js
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}

// ../node_modules/dnd-core/dist/classes/DragDropManagerImpl.js
var DragDropManagerImpl = class {
  receiveBackend(backend) {
    this.backend = backend;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    let manager = this, { dispatch } = this.store;
    function bindActionCreator(actionCreator) {
      return (...args) => {
        let action = actionCreator.apply(manager, args);
        typeof action < "u" && dispatch(action);
      };
    }
    let actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      let action = actions[key];
      return boundActions[key] = bindActionCreator(action), boundActions;
    }, {});
  }
  dispatch(action) {
    this.store.dispatch(action);
  }
  constructor(store, monitor) {
    this.isSetUp = !1, this.handleRefCountChange = () => {
      let shouldSetUp = this.store.getState().refCount > 0;
      this.backend && (shouldSetUp && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !shouldSetUp && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    }, this.store = store, this.monitor = monitor, store.subscribe(this.handleRefCountChange);
  }
};

// ../node_modules/dnd-core/dist/utils/coords.js
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getSourceClientOffset(state) {
  let { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
  return !clientOffset || !initialClientOffset || !initialSourceClientOffset ? null : subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  let { clientOffset, initialClientOffset } = state;
  return !clientOffset || !initialClientOffset ? null : subtract(clientOffset, initialClientOffset);
}

// ../node_modules/dnd-core/dist/utils/dirtiness.js
var NONE = [], ALL = [];
NONE.__IS_NONE__ = !0;
ALL.__IS_ALL__ = !0;
function areDirty(dirtyIds, handlerIds) {
  return dirtyIds === NONE ? !1 : dirtyIds === ALL || typeof handlerIds > "u" ? !0 : intersection(handlerIds, dirtyIds).length > 0;
}

// ../node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js
var DragDropMonitorImpl = class {
  subscribeToStateChange(listener, options3 = {}) {
    let { handlerIds } = options3;
    invariant(typeof listener == "function", "listener must be a function."), invariant(typeof handlerIds > "u" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let prevStateId = this.store.getState().stateId, handleChange = () => {
      let state = this.store.getState(), currentStateId = state.stateId;
      try {
        currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds) || listener();
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    invariant(typeof listener == "function", "listener must be a function.");
    let previousState = this.store.getState().dragOffset, handleChange = () => {
      let nextState = this.store.getState().dragOffset;
      nextState !== previousState && (previousState = nextState, listener());
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId)
      return !1;
    let source = this.registry.getSource(sourceId);
    return invariant(source, `Expected to find a valid source. sourceId=${sourceId}`), this.isDragging() ? !1 : source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    if (!targetId)
      return !1;
    let target = this.registry.getTarget(targetId);
    if (invariant(target, `Expected to find a valid target. targetId=${targetId}`), !this.isDragging() || this.didDrop())
      return !1;
    let targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    if (!sourceId)
      return !1;
    let source = this.registry.getSource(sourceId, !0);
    if (invariant(source, `Expected to find a valid source. sourceId=${sourceId}`), !this.isDragging() || !this.isSourcePublic())
      return !1;
    let sourceType = this.registry.getSourceType(sourceId), draggedItemType = this.getItemType();
    return sourceType !== draggedItemType ? !1 : source.isDragging(this, sourceId);
  }
  isOverTarget(targetId, options3 = {
    shallow: !1
  }) {
    if (!targetId)
      return !1;
    let { shallow } = options3;
    if (!this.isDragging())
      return !1;
    let targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType))
      return !1;
    let targetIds = this.getTargetIds();
    if (!targetIds.length)
      return !1;
    let index = targetIds.indexOf(targetId);
    return shallow ? index === targetIds.length - 1 : index > -1;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return getSourceClientOffset(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
  }
  constructor(store, registry) {
    this.store = store, this.registry = registry;
  }
};

// ../node_modules/@react-dnd/asap/dist/makeRequestCall.js
var scope = typeof global < "u" ? global : self, BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function() {
    let timeoutHandle = setTimeout(handleTimer, 0), intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle), clearInterval(intervalHandle), callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1, observer = new BrowserMutationObserver(callback), node = document.createTextNode("");
  return observer.observe(node, {
    characterData: !0
  }), function() {
    toggle = -toggle, node.data = toggle;
  };
}
var makeRequestCall = typeof BrowserMutationObserver == "function" ? makeRequestCallFromMutationObserver : makeRequestCallFromTimer;

// ../node_modules/@react-dnd/asap/dist/AsapQueue.js
var AsapQueue = class {
  enqueueTask(task) {
    let { queue: q, requestFlush } = this;
    q.length || (requestFlush(), this.flushing = !0), q[q.length] = task;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      let { queue: q } = this;
      for (; this.index < q.length; ) {
        let currentIndex = this.index;
        if (this.index++, q[currentIndex].call(), this.index > this.capacity) {
          for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++)
            q[scan] = q[scan + this.index];
          q.length -= this.index, this.index = 0;
        }
      }
      q.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (err) => {
      this.pendingErrors.push(err), this.requestErrorThrow();
    }, this.requestFlush = makeRequestCall(this.flush), this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
};

// ../node_modules/@react-dnd/asap/dist/RawTask.js
var RawTask = class {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError, this.release = release, this.task = null;
  }
};

// ../node_modules/@react-dnd/asap/dist/TaskFactory.js
var TaskFactory = class {
  create(task) {
    let tasks = this.freeTasks, t1 = tasks.length ? tasks.pop() : new RawTask(
      this.onError,
      (t) => tasks[tasks.length] = t
    );
    return t1.task = task, t1;
  }
  constructor(onError) {
    this.onError = onError, this.freeTasks = [];
  }
};

// ../node_modules/@react-dnd/asap/dist/asap.js
var asapQueue = new AsapQueue(), taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}

// ../node_modules/dnd-core/dist/actions/registry.js
var ADD_SOURCE = "dnd-core/ADD_SOURCE", ADD_TARGET = "dnd-core/ADD_TARGET", REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE", REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}

// ../node_modules/dnd-core/dist/contracts.js
function validateSourceContract(source) {
  invariant(typeof source.canDrag == "function", "Expected canDrag to be a function."), invariant(typeof source.beginDrag == "function", "Expected beginDrag to be a function."), invariant(typeof source.endDrag == "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop == "function", "Expected canDrop to be a function."), invariant(typeof target.hover == "function", "Expected hover to be a function."), invariant(typeof target.drop == "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(
      (t) => validateType(t, !1)
    );
    return;
  }
  invariant(typeof type == "string" || typeof type == "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}

// ../node_modules/dnd-core/dist/interfaces.js
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2.SOURCE = "SOURCE", HandlerRole2.TARGET = "TARGET";
})(HandlerRole || (HandlerRole = {}));

// ../node_modules/dnd-core/dist/utils/getNextUniqueId.js
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

// ../node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js
function getNextHandlerId(role) {
  let id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`Unknown Handler Role: ${role}`);
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${handlerId}`);
  }
}
function mapContainsValue(map, searchValue) {
  let entries = map.entries(), isDone = !1;
  do {
    let { done, value: [, value] } = entries.next();
    if (value === searchValue)
      return !0;
    isDone = !!done;
  } while (!isDone);
  return !1;
}
var HandlerRegistryImpl = class {
  addSource(type, source) {
    validateType(type), validateSourceContract(source);
    let sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    return this.store.dispatch(addSource(sourceId)), sourceId;
  }
  addTarget(type, target) {
    validateType(type, !0), validateTargetContract(target);
    let targetId = this.addHandler(HandlerRole.TARGET, type, target);
    return this.store.dispatch(addTarget(targetId)), targetId;
  }
  containsHandler(handler2) {
    return mapContainsValue(this.dragSources, handler2) || mapContainsValue(this.dropTargets, handler2);
  }
  getSource(sourceId, includePinned = !1) {
    return invariant(this.isSourceId(sourceId), "Expected a valid source ID."), includePinned && sourceId === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(sourceId);
  }
  getTarget(targetId) {
    return invariant(this.isTargetId(targetId), "Expected a valid target ID."), this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    return invariant(this.isSourceId(sourceId), "Expected a valid source ID."), this.types.get(sourceId);
  }
  getTargetType(targetId) {
    return invariant(this.isTargetId(targetId), "Expected a valid target ID."), this.types.get(targetId);
  }
  isSourceId(handlerId) {
    return parseRoleFromHandlerId(handlerId) === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    return parseRoleFromHandlerId(handlerId) === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    invariant(this.getSource(sourceId), "Expected an existing source."), this.store.dispatch(removeSource(sourceId)), asap(() => {
      this.dragSources.delete(sourceId), this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    invariant(this.getTarget(targetId), "Expected an existing target."), this.store.dispatch(removeTarget(targetId)), this.dropTargets.delete(targetId), this.types.delete(targetId);
  }
  pinSource(sourceId) {
    let source = this.getSource(sourceId);
    invariant(source, "Expected an existing source."), this.pinnedSourceId = sourceId, this.pinnedSource = source;
  }
  unpinSource() {
    invariant(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(role, type, handler2) {
    let id = getNextHandlerId(role);
    return this.types.set(id, type), role === HandlerRole.SOURCE ? this.dragSources.set(id, handler2) : role === HandlerRole.TARGET && this.dropTargets.set(id, handler2), id;
  }
  constructor(store) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = store;
  }
};

// ../node_modules/dnd-core/dist/utils/equality.js
var strictEquality = (a, b) => a === b;
function areCoordsEqual(offsetA, offsetB) {
  return !offsetA && !offsetB ? !0 : !offsetA || !offsetB ? !1 : offsetA.x === offsetB.x && offsetA.y === offsetB.y;
}
function areArraysEqual(a, b, isEqual = strictEquality) {
  if (a.length !== b.length)
    return !1;
  for (let i = 0; i < a.length; ++i)
    if (!isEqual(a[i], b[i]))
      return !1;
  return !0;
}

// ../node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js
function reduce(_state = NONE, action) {
  switch (action.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  let { targetIds = [], prevTargetIds = [] } = action.payload, result = xor(targetIds, prevTargetIds);
  if (!(result.length > 0 || !areArraysEqual(targetIds, prevTargetIds)))
    return NONE;
  let prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1], innermostTargetId = targetIds[targetIds.length - 1];
  return prevInnermostTargetId !== innermostTargetId && (prevInnermostTargetId && result.push(prevInnermostTargetId), innermostTargetId && result.push(innermostTargetId)), result;
}

// ../node_modules/dnd-core/dist/reducers/dragOffset.js
function _defineProperty2(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    });
  }
  return target;
}
var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce2(state = initialState, action) {
  let { payload } = action;
  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      return areCoordsEqual(state.clientOffset, payload.clientOffset) ? state : _objectSpread2({}, state, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState;
    default:
      return state;
  }
}

// ../node_modules/dnd-core/dist/reducers/dragOperation.js
function _defineProperty3(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    });
  }
  return target;
}
var initialState2 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function reduce3(state = initialState2, action) {
  let { payload } = action;
  switch (action.type) {
    case BEGIN_DRAG:
      return _objectSpread3({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread3({}, state, {
        isSourcePublic: !0
      });
    case HOVER:
      return _objectSpread3({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      return state.targetIds.indexOf(payload.targetId) === -1 ? state : _objectSpread3({}, state, {
        targetIds: without(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread3({}, state, {
        dropResult: payload.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread3({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}

// ../node_modules/dnd-core/dist/reducers/refCount.js
function reduce4(state = 0, action) {
  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}

// ../node_modules/dnd-core/dist/reducers/stateId.js
function reduce5(state = 0) {
  return state + 1;
}

// ../node_modules/dnd-core/dist/reducers/index.js
function _defineProperty4(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    });
  }
  return target;
}
function reduce6(state = {}, action) {
  return {
    dirtyHandlerIds: reduce(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread4({}, action.payload, {
        prevTargetIds: get(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce2(state.dragOffset, action),
    refCount: reduce4(state.refCount, action),
    dragOperation: reduce3(state.dragOperation, action),
    stateId: reduce5(state.stateId)
  };
}

// ../node_modules/dnd-core/dist/createDragDropManager.js
function createDragDropManager(backendFactory, globalContext = void 0, backendOptions = {}, debugMode = !1) {
  let store = makeStoreInstance(debugMode), monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store)), manager = new DragDropManagerImpl(store, monitor), backend = backendFactory(manager, globalContext, backendOptions);
  return manager.receiveBackend(backend), manager;
}
function makeStoreInstance(debugMode) {
  let reduxDevTools = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return (0, import_redux.createStore)(reduce6, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}

// ../node_modules/react-dnd/dist/core/DndProvider.js
var import_react50 = require("react");
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded), key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++)
      key = sourceSymbolKeys[i], !(excluded.indexOf(key) >= 0) && (!Object.prototype.propertyIsEnumerable.call(source, key) || (target[key] = source[key]));
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
var refCount = 0, INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), DndProvider = /* @__PURE__ */ (0, import_react50.memo)(function(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  let [manager, isGlobalInstance] = getDndContextValue(props);
  return (0, import_react50.useEffect)(() => {
    if (isGlobalInstance) {
      let context = getGlobalContext();
      return ++refCount, () => {
        --refCount === 0 && (context[INSTANCE_SYM] = null);
      };
    }
  }, []), /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(DndContext.Provider, {
    value: manager,
    children
  });
});
function getDndContextValue(props) {
  if ("manager" in props)
    return [
      {
        dragDropManager: props.manager
      },
      !1
    ];
  let manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode), isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options3, debugMode) {
  let ctx = context;
  return ctx[INSTANCE_SYM] || (ctx[INSTANCE_SYM] = {
    dragDropManager: createDragDropManager(backend, context, options3, debugMode)
  }), ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof global < "u" ? global : window;
}

// ../node_modules/react-dnd/dist/hooks/useCollector.js
var import_fast_deep_equal = __toESM(require("fast-deep-equal"), 1), import_react52 = require("react");

// ../node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
var import_react51 = require("react"), useIsomorphicLayoutEffect = typeof window < "u" ? import_react51.useLayoutEffect : import_react51.useEffect;

// ../node_modules/react-dnd/dist/hooks/useCollector.js
function useCollector(monitor, collect, onUpdate) {
  let [collected, setCollected] = (0, import_react52.useState)(
    () => collect(monitor)
  ), updateCollected = (0, import_react52.useCallback)(() => {
    let nextValue = collect(monitor);
    (0, import_fast_deep_equal.default)(collected, nextValue) || (setCollected(nextValue), onUpdate && onUpdate());
  }, [
    collected,
    monitor,
    onUpdate
  ]);
  return useIsomorphicLayoutEffect(updateCollected), [
    collected,
    updateCollected
  ];
}

// ../node_modules/react-dnd/dist/hooks/useMonitorOutput.js
function useMonitorOutput(monitor, collect, onCollect) {
  let [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  return useIsomorphicLayoutEffect(function() {
    let handlerId = monitor.getHandlerId();
    if (handlerId != null)
      return monitor.subscribeToStateChange(updateCollected, {
        handlerIds: [
          handlerId
        ]
      });
  }, [
    monitor,
    updateCollected
  ]), collected;
}

// ../node_modules/react-dnd/dist/hooks/useCollectedProps.js
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(
    monitor,
    collector || (() => ({})),
    () => connector.reconnect()
  );
}

// ../node_modules/react-dnd/dist/hooks/useOptionalFactory.js
var import_react53 = require("react");
function useOptionalFactory(arg, deps) {
  let memoDeps = [
    ...deps || []
  ];
  return deps == null && typeof arg != "function" && memoDeps.push(arg), (0, import_react53.useMemo)(() => typeof arg == "function" ? arg() : arg, memoDeps);
}

// ../node_modules/react-dnd/dist/hooks/useDrag/connectors.js
var import_react54 = require("react");
function useConnectDragSource(connector) {
  return (0, import_react54.useMemo)(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return (0, import_react54.useMemo)(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}

// ../node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
var import_react57 = require("react");

// ../node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js
var isCallingCanDrag = !1, isCallingIsDragging = !1, DragSourceMonitorImpl = class {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return isCallingCanDrag = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return isCallingIsDragging = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = !1;
    }
  }
  subscribeToStateChange(listener, options3) {
    return this.internalMonitor.subscribeToStateChange(listener, options3);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options3) {
    return this.internalMonitor.isOverTarget(targetId, options3);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null, this.internalMonitor = manager.getMonitor();
  }
};

// ../node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js
var isCallingCanDrop = !1, DropTargetMonitorImpl = class {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options3) {
    return this.internalMonitor.subscribeToStateChange(listener, options3);
  }
  canDrop() {
    if (!this.targetId)
      return !1;
    invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return isCallingCanDrop = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = !1;
    }
  }
  isOver(options3) {
    return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, options3) : !1;
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.targetId = null, this.internalMonitor = manager.getMonitor();
  }
};

// ../node_modules/react-dnd/dist/internals/registration.js
function registerTarget(type, target, manager) {
  let registry = manager.getRegistry(), targetId = registry.addTarget(type, target);
  return [
    targetId,
    () => registry.removeTarget(targetId)
  ];
}
function registerSource(type, source, manager) {
  let registry = manager.getRegistry(), sourceId = registry.addSource(type, source);
  return [
    sourceId,
    () => registry.removeSource(sourceId)
  ];
}

// ../node_modules/@react-dnd/shallowequal/dist/index.js
function shallowEqual(objA, objB, compare, compareContext) {
  let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (compareResult !== void 0)
    return !!compareResult;
  if (objA === objB)
    return !0;
  if (typeof objA != "object" || !objA || typeof objB != "object" || !objB)
    return !1;
  let keysA = Object.keys(objA), keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return !1;
  let bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    let key = keysA[idx];
    if (!bHasOwnProperty(key))
      return !1;
    let valueA = objA[key], valueB = objB[key];
    if (compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0, compareResult === !1 || compareResult === void 0 && valueA !== valueB)
      return !1;
  }
  return !0;
}

// ../node_modules/react-dnd/dist/internals/isRef.js
function isRef(obj) {
  return obj !== null && typeof obj == "object" && Object.prototype.hasOwnProperty.call(obj, "current");
}

// ../node_modules/react-dnd/dist/internals/wrapConnectorHooks.js
var import_react55 = require("react");
function throwIfCompositeComponentElement(element) {
  if (typeof element.type == "string")
    return;
  let displayName = element.type.displayName || element.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${displayName} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function wrapHookToRecognizeElement(hook) {
  return (elementOrNode = null, options3 = null) => {
    if (!(0, import_react55.isValidElement)(elementOrNode)) {
      let node = elementOrNode;
      return hook(node, options3), node;
    }
    let element = elementOrNode;
    return throwIfCompositeComponentElement(element), cloneWithRef(element, options3 ? (node) => hook(node, options3) : hook);
  };
}
function wrapConnectorHooks(hooks) {
  let wrappedHooks = {};
  return Object.keys(hooks).forEach((key) => {
    let hook = hooks[key];
    if (key.endsWith("Ref"))
      wrappedHooks[key] = hooks[key];
    else {
      let wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  }), wrappedHooks;
}
function setRef(ref, node) {
  typeof ref == "function" ? ref(node) : ref.current = node;
}
function cloneWithRef(element, newRef) {
  let previousRef = element.ref;
  return invariant(typeof previousRef != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), previousRef ? (0, import_react55.cloneElement)(element, {
    ref: (node) => {
      setRef(previousRef, node), setRef(newRef, node);
    }
  }) : (0, import_react55.cloneElement)(element, {
    ref: newRef
  });
}

// ../node_modules/react-dnd/dist/internals/SourceConnector.js
var SourceConnector = class {
  receiveHandlerId(newHandlerId) {
    this.handlerId !== newHandlerId && (this.handlerId = newHandlerId, this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options3) {
    this.dragSourceOptionsInternal = options3;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options3) {
    this.dragPreviewOptionsInternal = options3;
  }
  reconnect() {
    let didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    let dragSource = this.dragSource, didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    return didChange && this.disconnectDragSource(), this.handlerId ? dragSource ? (didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = dragSource, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions)), didChange) : (this.lastConnectedDragSource = dragSource, didChange) : didChange;
  }
  reconnectDragPreview(forceDidChange = !1) {
    let dragPreview = this.dragPreview, didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange && this.disconnectDragPreview(), !!this.handlerId) {
      if (!dragPreview) {
        this.lastConnectedDragPreview = dragPreview;
        return;
      }
      didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = dragPreview, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions));
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
  }
  disconnectDragPreview() {
    this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null, this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null, this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node, options3) => {
        this.clearDragSource(), this.dragSourceOptions = options3 || null, isRef(node) ? this.dragSourceRef = node : this.dragSourceNode = node, this.reconnectDragSource();
      },
      dragPreview: (node, options3) => {
        this.clearDragPreview(), this.dragPreviewOptions = options3 || null, isRef(node) ? this.dragPreviewRef = node : this.dragPreviewNode = node, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = backend;
  }
};

// ../node_modules/react-dnd/dist/internals/TargetConnector.js
var TargetConnector = class {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    let didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    didChange && this.disconnectDropTarget();
    let dropTarget = this.dropTarget;
    if (!!this.handlerId) {
      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }
      didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = dropTarget, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions));
    }
  }
  receiveHandlerId(newHandlerId) {
    newHandlerId !== this.handlerId && (this.handlerId = newHandlerId, this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options3) {
    this.dropTargetOptionsInternal = options3;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null, this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dropTarget: (node, options3) => {
        this.clearDropTarget(), this.dropTargetOptions = options3, isRef(node) ? this.dropTargetRef = node : this.dropTargetNode = node, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = backend;
  }
};

// ../node_modules/react-dnd/dist/hooks/useDragDropManager.js
var import_react56 = require("react");
function useDragDropManager() {
  let { dragDropManager } = (0, import_react56.useContext)(DndContext);
  return invariant(dragDropManager != null, "Expected drag drop context"), dragDropManager;
}

// ../node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  let manager = useDragDropManager(), connector = (0, import_react57.useMemo)(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  return useIsomorphicLayoutEffect(() => (connector.dragSourceOptions = dragSourceOptions || null, connector.reconnect(), () => connector.disconnectDragSource()), [
    connector,
    dragSourceOptions
  ]), useIsomorphicLayoutEffect(() => (connector.dragPreviewOptions = dragPreviewOptions || null, connector.reconnect(), () => connector.disconnectDragPreview()), [
    connector,
    dragPreviewOptions
  ]), connector;
}

// ../node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js
var import_react58 = require("react");
function useDragSourceMonitor() {
  let manager = useDragDropManager();
  return (0, import_react58.useMemo)(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}

// ../node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
var import_react59 = require("react");

// ../node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js
var DragSourceImpl = class {
  beginDrag() {
    let spec = this.spec, monitor = this.monitor, result = null;
    return typeof spec.item == "object" ? result = spec.item : typeof spec.item == "function" ? result = spec.item(monitor) : result = {}, result ?? null;
  }
  canDrag() {
    let spec = this.spec, monitor = this.monitor;
    return typeof spec.canDrag == "boolean" ? spec.canDrag : typeof spec.canDrag == "function" ? spec.canDrag(monitor) : !0;
  }
  isDragging(globalMonitor, target) {
    let spec = this.spec, monitor = this.monitor, { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    let spec = this.spec, monitor = this.monitor, connector = this.connector, { end } = spec;
    end && end(monitor.getItem(), monitor), connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec, this.monitor = monitor, this.connector = connector;
  }
};

// ../node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
function useDragSource(spec, monitor, connector) {
  let handler2 = (0, import_react59.useMemo)(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  return (0, import_react59.useEffect)(() => {
    handler2.spec = spec;
  }, [
    spec
  ]), handler2;
}

// ../node_modules/react-dnd/dist/hooks/useDrag/useDragType.js
var import_react60 = require("react");
function useDragType(spec) {
  return (0, import_react60.useMemo)(() => {
    let result = spec.type;
    return invariant(result != null, "spec.type must be defined"), result;
  }, [
    spec
  ]);
}

// ../node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js
function useRegisteredDragSource(spec, monitor, connector) {
  let manager = useDragDropManager(), handler2 = useDragSource(spec, monitor, connector), itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function() {
    if (itemType != null) {
      let [handlerId, unregister] = registerSource(itemType, handler2, manager);
      return monitor.receiveHandlerId(handlerId), connector.receiveHandlerId(handlerId), unregister;
    }
  }, [
    manager,
    monitor,
    connector,
    handler2,
    itemType
  ]);
}

// ../node_modules/react-dnd/dist/hooks/useDrag/useDrag.js
function useDrag(specArg, deps) {
  let spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  let monitor = useDragSourceMonitor(), connector = useDragSourceConnector(spec.options, spec.previewOptions);
  return useRegisteredDragSource(spec, monitor, connector), [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}

// ../node_modules/react-dnd/dist/hooks/useDrop/connectors.js
var import_react61 = require("react");
function useConnectDropTarget(connector) {
  return (0, import_react61.useMemo)(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}

// ../node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js
var import_react62 = require("react");
function useDropTargetConnector(options3) {
  let manager = useDragDropManager(), connector = (0, import_react62.useMemo)(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  return useIsomorphicLayoutEffect(() => (connector.dropTargetOptions = options3 || null, connector.reconnect(), () => connector.disconnectDropTarget()), [
    options3
  ]), connector;
}

// ../node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js
var import_react63 = require("react");
function useDropTargetMonitor() {
  let manager = useDragDropManager();
  return (0, import_react63.useMemo)(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}

// ../node_modules/react-dnd/dist/hooks/useDrop/useAccept.js
var import_react64 = require("react");
function useAccept(spec) {
  let { accept } = spec;
  return (0, import_react64.useMemo)(() => (invariant(spec.accept != null, "accept must be defined"), Array.isArray(accept) ? accept : [
    accept
  ]), [
    accept
  ]);
}

// ../node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
var import_react65 = require("react");

// ../node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js
var DropTargetImpl = class {
  canDrop() {
    let spec = this.spec, monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : !0;
  }
  hover() {
    let spec = this.spec, monitor = this.monitor;
    spec.hover && spec.hover(monitor.getItem(), monitor);
  }
  drop() {
    let spec = this.spec, monitor = this.monitor;
    if (spec.drop)
      return spec.drop(monitor.getItem(), monitor);
  }
  constructor(spec, monitor) {
    this.spec = spec, this.monitor = monitor;
  }
};

// ../node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
function useDropTarget(spec, monitor) {
  let dropTarget = (0, import_react65.useMemo)(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  return (0, import_react65.useEffect)(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]), dropTarget;
}

// ../node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js
function useRegisteredDropTarget(spec, monitor, connector) {
  let manager = useDragDropManager(), dropTarget = useDropTarget(spec, monitor), accept = useAccept(spec);
  useIsomorphicLayoutEffect(function() {
    let [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    return monitor.receiveHandlerId(handlerId), connector.receiveHandlerId(handlerId), unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a) => a.toString()
    ).join("|")
  ]);
}

// ../node_modules/react-dnd/dist/hooks/useDrop/useDrop.js
function useDrop(specArg, deps) {
  let spec = useOptionalFactory(specArg, deps), monitor = useDropTargetMonitor(), connector = useDropTargetConnector(spec.options);
  return useRegisteredDropTarget(spec, monitor, connector), [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}

// app/types/ItemTypes.ts
var ItemTypes = {
  ASSET: "asset",
  FLUID_ASSET: "fluid-asset"
}, ItemTypes_default = ItemTypes;

// ../node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
function memoize(fn) {
  let result = null;
  return () => (result == null && (result = fn()), result);
}
function without2(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function union(itemsA, itemsB) {
  let set = /* @__PURE__ */ new Set(), insertItem = (item) => set.add(item);
  itemsA.forEach(insertItem), itemsB.forEach(insertItem);
  let result = [];
  return set.forEach(
    (key) => result.push(key)
  ), result;
}

// ../node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js
var EnterLeaveCounter = class {
  enter(enteringNode) {
    let previousLength = this.entered.length, isNodeEntered = (node) => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    return this.entered = union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]), previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    let previousLength = this.entered.length;
    return this.entered = without2(this.entered.filter(this.isNodeInDocument), leavingNode), previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [], this.isNodeInDocument = isNodeInDocument;
  }
};

// ../node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js
var NativeDragSource = class {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property) => {
      Object.defineProperty(this.item, property, {
        configurable: !0,
        enumerable: !0,
        get() {
          return console.warn(`Browser doesn't allow reading "${property}" until the drop event.`), null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      let newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property) => {
        let propertyFn = this.config.exposeProperties[property];
        propertyFn != null && (newProperties[property] = {
          value: propertyFn(dataTransfer, this.config.matchesTypes),
          configurable: !0,
          enumerable: !0
        });
      }), Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return !0;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
  }
  constructor(config) {
    this.config = config, this.item = {}, this.initializeExposedProperties();
  }
};

// ../node_modules/react-dnd-html5-backend/dist/NativeTypes.js
var NativeTypes_exports = {};
__export(NativeTypes_exports, {
  FILE: () => FILE,
  HTML: () => HTML,
  TEXT: () => TEXT,
  URL: () => URL2
});
var FILE = "__NATIVE_FILE__", URL2 = "__NATIVE_URL__", TEXT = "__NATIVE_TEXT__", HTML = "__NATIVE_HTML__";

// ../node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  let result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result ?? defaultValue;
}

// ../node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js
var nativeTypesConfig = {
  [FILE]: {
    exposeProperties: {
      files: (dataTransfer) => Array.prototype.slice.call(dataTransfer.files),
      items: (dataTransfer) => dataTransfer.items,
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Files"
    ]
  },
  [HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [URL2]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, "").split(`
`),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};

// ../node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js
function createNativeDragSource(type, dataTransfer) {
  let config = nativeTypesConfig[type];
  if (!config)
    throw new Error(`native type ${type} has no configuration`);
  let result = new NativeDragSource(config);
  return result.loadDataTransfer(dataTransfer), result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer)
    return null;
  let dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter((nativeItemType) => {
    let typeConfig = nativeTypesConfig[nativeItemType];
    return typeConfig != null && typeConfig.matchesTypes ? typeConfig.matchesTypes.some(
      (t) => dataTransferTypes.indexOf(t) > -1
    ) : !1;
  })[0] || null;
}

// ../node_modules/react-dnd-html5-backend/dist/BrowserDetector.js
var isFirefox = memoize(
  () => /firefox/i.test(navigator.userAgent)
), isSafari = memoize(
  () => Boolean(window.safari)
);

// ../node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js
var MonotonicInterpolant = class {
  interpolate(x) {
    let { xs, ys, c1s, c2s, c3s } = this, i = xs.length - 1;
    if (x === xs[i])
      return ys[i];
    let low = 0, high = c3s.length - 1, mid;
    for (; low <= high; ) {
      mid = Math.floor(0.5 * (low + high));
      let xHere = xs[mid];
      if (xHere < x)
        low = mid + 1;
      else if (xHere > x)
        high = mid - 1;
      else
        return ys[mid];
    }
    i = Math.max(0, high);
    let diff = x - xs[i], diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  }
  constructor(xs, ys) {
    let { length } = xs, indexes = [];
    for (let i = 0; i < length; i++)
      indexes.push(i);
    indexes.sort(
      (a, b) => xs[a] < xs[b] ? -1 : 1
    );
    let dys = [], dxs = [], ms = [], dx, dy;
    for (let i1 = 0; i1 < length - 1; i1++)
      dx = xs[i1 + 1] - xs[i1], dy = ys[i1 + 1] - ys[i1], dxs.push(dx), dys.push(dy), ms.push(dy / dx);
    let c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      let m2 = ms[i2], mNext = ms[i2 + 1];
      if (m2 * mNext <= 0)
        c1s.push(0);
      else {
        dx = dxs[i2];
        let dxNext = dxs[i2 + 1], common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    let c2s = [], c3s = [], m;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m = ms[i3];
      let c1 = c1s[i3], invDx = 1 / dxs[i3], common = c1 + c1s[i3 + 1] - m - m;
      c2s.push((m - c1 - common) * invDx), c3s.push(common * invDx * invDx);
    }
    this.xs = xs, this.ys = ys, this.c1s = c1s, this.c2s = c2s, this.c3s = c3s;
  }
};

// ../node_modules/react-dnd-html5-backend/dist/OffsetUtils.js
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  let el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el)
    return null;
  let { top, left } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var ref;
  return node.nodeName === "IMG" && (isFirefox() || !(!((ref = document.documentElement) === null || ref === void 0) && ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth, dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  return isSafari() && isImage && (dragPreviewHeight /= window.devicePixelRatio, dragPreviewWidth /= window.devicePixelRatio), {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  let isImage = isImageNode(dragPreview), dragPreviewNodeOffsetFromClient = getNodeClientOffset(isImage ? sourceNode : dragPreview), offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  }, { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode, { anchorX, anchorY } = anchorPoint, { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), calculateYOffset = () => {
    let y = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      offsetFromDragPreview.y,
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]).interpolate(anchorY);
    return isSafari() && isImage && (y += (window.devicePixelRatio - 1) * dragPreviewHeight), y;
  }, calculateXOffset = () => new MonotonicInterpolant([
    0,
    0.5,
    1
  ], [
    offsetFromDragPreview.x,
    offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
    offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
  ]).interpolate(anchorX), { offsetX, offsetY } = offsetPoint, isManualOffsetX = offsetX === 0 || offsetX, isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

// ../node_modules/react-dnd-html5-backend/dist/OptionsReader.js
var OptionsReader = class {
  get window() {
    if (this.globalContext)
      return this.globalContext;
    if (typeof window < "u")
      return window;
  }
  get document() {
    var ref;
    return !((ref = this.globalContext) === null || ref === void 0) && ref.document ? this.globalContext.document : this.window ? this.window.document : void 0;
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options3) {
    this.ownerDocument = null, this.globalContext = globalContext, this.optionsArgs = options3;
  }
};

// ../node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function _defineProperty5(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    });
  }
  return target;
}
var HTML5BackendImpl = class {
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    let root = this.rootElement;
    if (root !== void 0) {
      if (root.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      root.__isReactDndBackendSetUp = !0, this.addEventListeners(root);
    }
  }
  teardown() {
    let root = this.rootElement;
    if (root !== void 0 && (root.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
      var ref;
      (ref = this.window) === null || ref === void 0 || ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options3) {
    return this.sourcePreviewNodeOptions.set(sourceId, options3), this.sourcePreviewNodes.set(sourceId, node), () => {
      this.sourcePreviewNodes.delete(sourceId), this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options3) {
    this.sourceNodes.set(sourceId, node), this.sourceNodeOptions.set(sourceId, options3);
    let handleDragStart = (e) => this.handleDragStart(e, sourceId), handleSelectStart = (e) => this.handleSelectStart(e);
    return node.setAttribute("draggable", "true"), node.addEventListener("dragstart", handleDragStart), node.addEventListener("selectstart", handleSelectStart), () => {
      this.sourceNodes.delete(sourceId), this.sourceNodeOptions.delete(sourceId), node.removeEventListener("dragstart", handleDragStart), node.removeEventListener("selectstart", handleSelectStart), node.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node) {
    let handleDragEnter = (e) => this.handleDragEnter(e, targetId), handleDragOver = (e) => this.handleDragOver(e, targetId), handleDrop = (e) => this.handleDrop(e, targetId);
    return node.addEventListener("dragenter", handleDragEnter), node.addEventListener("dragover", handleDragOver), node.addEventListener("drop", handleDrop), () => {
      node.removeEventListener("dragenter", handleDragEnter), node.removeEventListener("dragover", handleDragOver), node.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target) {
    !target.addEventListener || (target.addEventListener("dragstart", this.handleTopDragStart), target.addEventListener("dragstart", this.handleTopDragStartCapture, !0), target.addEventListener("dragend", this.handleTopDragEndCapture, !0), target.addEventListener("dragenter", this.handleTopDragEnter), target.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), target.addEventListener("dragover", this.handleTopDragOver), target.addEventListener("dragover", this.handleTopDragOverCapture, !0), target.addEventListener("drop", this.handleTopDrop), target.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(target) {
    !target.removeEventListener || (target.removeEventListener("dragstart", this.handleTopDragStart), target.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), target.removeEventListener("dragend", this.handleTopDragEndCapture, !0), target.removeEventListener("dragenter", this.handleTopDragEnter), target.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), target.removeEventListener("dragover", this.handleTopDragOver), target.removeEventListener("dragover", this.handleTopDragOverCapture, !0), target.removeEventListener("drop", this.handleTopDrop), target.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    let sourceId = this.monitor.getSourceId(), sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread5({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    let sourceId = this.monitor.getSourceId(), sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread5({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    let itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes_exports).some(
      (key) => NativeTypes_exports[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = createNativeDragSource(type, dataTransfer), this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource), this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = node;
    let MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (this.currentDragSourceNode = null, this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 || ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
      }
      return this.mouseMoveTimeoutTimer = null, !0;
    }
    return !1;
  }
  handleDragStart(e, sourceId) {
    e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(sourceId));
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options3) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (sourceId) => {
      let source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    }, this.endDragNativeItem = () => {
      !this.isDraggingNativeItem() || (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
    }, this.isNodeInDocument = (node) => Boolean(node && this.document && this.document.body && this.document.body.contains(node)), this.endDragIfSourceWasRemovedFromDOM = () => {
      let node = this.currentDragSourceNode;
      node == null || this.isNodeInDocument(node) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
    }, this.scheduleHover = (dragOverTargetIds) => {
      this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
        this.monitor.isDragging() && this.actions.hover(dragOverTargetIds || [], {
          clientOffset: this.lastClientOffset
        }), this.hoverRafId = null;
      }));
    }, this.cancelHover = () => {
      this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
    }, this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
    }, this.handleTopDragStart = (e) => {
      if (e.defaultPrevented)
        return;
      let { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      let clientOffset = getEventClientOffset(e);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      let { dataTransfer } = e, nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage == "function") {
          let sourceId = this.monitor.getSourceId(), sourceNode = this.sourceNodes.get(sourceId), dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            let { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions(), dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, {
              anchorX,
              anchorY
            }, {
              offsetX,
              offsetY
            });
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer == null || dataTransfer.setData("application/json", {});
        } catch {
        }
        this.setCurrentDragSourceNode(e.target);
        let { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        captureDraggingState ? this.actions.publishDragSource() : setTimeout(
          () => this.actions.publishDragSource(),
          0
        );
      } else if (nativeType)
        this.beginDragNativeItem(nativeType);
      else {
        if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable")))
          return;
        e.preventDefault();
      }
    }, this.handleTopDragEndCapture = () => {
      this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleTopDragEnterCapture = (e) => {
      if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      }
      if (!this.enterLeaveCounter.enter(e.target) || this.monitor.isDragging())
        return;
      let { dataTransfer } = e, nativeType = matchNativeItemType(dataTransfer);
      nativeType && this.beginDragNativeItem(nativeType, dataTransfer);
    }, this.handleTopDragEnter = (e) => {
      let { dragEnterTargetIds } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = e.altKey, dragEnterTargetIds.length > 0 && this.actions.hover(dragEnterTargetIds, {
        clientOffset: getEventClientOffset(e)
      }), dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      ) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect()));
    }, this.handleTopDragOverCapture = (e) => {
      if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      }
    }, this.handleTopDragOver = (e) => {
      let { dragOverTargetIds } = this;
      if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
        return;
      }
      this.altKeyPressed = e.altKey, this.lastClientOffset = getEventClientOffset(e), this.scheduleHover(dragOverTargetIds), (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      ) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
    }, this.handleTopDragLeaveCapture = (e) => {
      this.isDraggingNativeItem() && e.preventDefault(), this.enterLeaveCounter.leave(e.target) && (this.isDraggingNativeItem() && setTimeout(
        () => this.endDragNativeItem(),
        0
      ), this.cancelHover());
    }, this.handleTopDropCapture = (e) => {
      if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault(), (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      } else
        matchNativeItemType(e.dataTransfer) && e.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (e) => {
      let { dropTargetIds } = this;
      this.dropTargetIds = [], this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (e) => {
      let target = e.target;
      typeof target.dragDrop == "function" && (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable || (e.preventDefault(), target.dragDrop()));
    }, this.options = new OptionsReader(globalContext, options3), this.actions = manager.getActions(), this.monitor = manager.getMonitor(), this.registry = manager.getRegistry(), this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
};

// ../node_modules/react-dnd-html5-backend/dist/index.js
var HTML5Backend = function(manager, context, options3) {
  return new HTML5BackendImpl(manager, context, options3);
};

// app/routes/$network/fluidify/index.tsx
var import_surfing26 = require("@fluidity-money/surfing");

// app/components/Draggable.tsx
var import_jsx_runtime37 = require("react/jsx-runtime"), Draggable = (props) => {
  let { dragItem, type, children } = props, drag = useDrag(() => ({
    type,
    item: dragItem,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }), [dragItem])[1];
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { ref: drag, children });
}, Draggable_default = Draggable;

// app/components/FluidifyCard.tsx
var import_jsx_runtime38 = require("react/jsx-runtime"), FluidifyCard = (props) => {
  let {
    fluid,
    logo,
    name,
    symbol,
    amount,
    mintCapPercentage,
    color: color2,
    addToken
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "fluidify-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "fluidify-card--container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "fluidify-card-left", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "img",
          {
            className: `fluidify-card-logo ${fluid ? "fluid-token-logo" : ""}`,
            src: logo
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { children: symbol }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("br", {}),
          fluid && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { children: name })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { children: amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", {}),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        "button",
        {
          onClick: (e) => {
            e == null || e.stopPropagation(), addToken == null || addToken(symbol);
          },
          title: "Add Token to Wallet",
          className: "fluidify-card-add",
          children: "+"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "fluidify-card--progress-bar", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      "div",
      {
        className: "fluidify-card--progress",
        style: {
          background: `${color2}`,
          transform: `scaleX(${mintCapPercentage || 0})`
        }
      }
    ) })
  ] }, symbol);
}, FluidifyCard_default = FluidifyCard;

// app/components/Fluidify/SwapCircle.tsx
var import_framer_motion12 = require("framer-motion"), import_surfing23 = require("@fluidity-money/surfing");

// app/components/Fluidify/FluidifyHotSpot.tsx
var import_framer_motion11 = require("framer-motion"), import_surfing22 = require("@fluidity-money/surfing");
var import_jsx_runtime39 = require("react/jsx-runtime"), FluidityHotSpot = ({
  activeToken,
  callBack
}) => {
  let drop = useDrop(() => ({
    accept: [ItemTypes_default.ASSET, ItemTypes_default.FLUID_ASSET],
    drop: callBack,
    collect: (monitor) => ({
      canDrop: monitor.canDrop()
    })
  }))[1];
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_framer_motion11.AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    import_framer_motion11.motion.main,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1.5 },
      exit: { opacity: 0 },
      className: "main-hotspot",
      style: {
        mixBlendMode: activeToken !== void 0 ? "color-dodge" : "normal"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { ref: drop, className: "fluidify-hot-spot", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          "img",
          {
            className: "fluidify-circle",
            src: "/images/fluidify/fluidify-hotspot.png"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "dashed-circle", children: !activeToken && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_surfing22.Text, { size: "sm", className: "circle-text", children: [
          "Drag and drop the asset ",
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
          " you want to fluidify here.",
          " "
        ] }) })
      ] })
    }
  ) });
}, FluidifyHotSpot_default = FluidityHotSpot;

// app/components/Fluidify/SwapCircle.tsx
var import_jsx_runtime40 = require("react/jsx-runtime"), SwapCircle = ({
  swapping,
  setSwapping,
  assetToken,
  setAssetToken,
  colorMap
}) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
  "div",
  {
    style: { position: "relative", aspectRatio: "1 / 1", width: "inherit" },
    children: [
      assetToken !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          BloomEffect_default,
          {
            type: swapping ? "pulsing" : "static",
            color: colorMap[assetToken.symbol] ?? "#fff"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "img",
          {
            src: assetToken == null ? void 0 : assetToken.logo,
            style: {
              aspectRatio: "1 / 1",
              height: "10%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }
          }
        )
      ] }),
      swapping && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_framer_motion12.AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        import_framer_motion12.motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1.5 },
          exit: { opacity: 0 },
          className: "video-container",
          children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
            import_surfing23.Video,
            {
              className: "swapping-video",
              src: "/videos/LoadingOther.webm",
              loop: !1,
              type: "none",
              onEnded: () => {
                setSwapping(!1);
              },
              playbackRate: 1.5
            }
          )
        }
      ) }),
      !swapping && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(FluidifyHotSpot_default, { activeToken: assetToken, callBack: setAssetToken })
    ]
  }
), SwapCircle_default = SwapCircle;

// app/components/Fluidify/FluidifyForm.tsx
var import_react66 = require("react"), import_bn7 = __toESM(require("bn.js"));
var import_surfing24 = require("@fluidity-money/surfing");
var import_jsx_runtime41 = require("react/jsx-runtime"), FluidifyForm = ({
  handleSwap,
  assetToken,
  toToken,
  swapping
}) => {
  let { address, connected, swap } = (0, import_react66.useContext)(FluidityFacade_default), fluidTokenAddress = assetToken.isFluidOf ?? toToken.isFluidOf ?? "", tokenDecimals = assetToken.decimals, [swapInput, setSwapInput] = (0, import_react66.useState)(""), parseSwapInputToTokenAmount = (input) => {
    let [whole, dec] = input.split("."), wholeBn = getTokenAmountFromUsd(new import_bn7.default(whole || 0), assetToken);
    if (dec === void 0)
      return wholeBn;
    let decimalsBn = new import_bn7.default(dec).mul(
      new import_bn7.default(10).pow(new import_bn7.default(assetToken.decimals - dec.length))
    );
    return wholeBn.add(decimalsBn);
  }, snapToValidValue = (input) => {
    let usdBn = parseSwapInputToTokenAmount(input), maxUserPayable = import_bn7.default.min(usdBn, assetToken.userTokenBalance);
    if (!assetToken.userMintLimit)
      return maxUserPayable;
    let maxMintable = assetToken.userMintLimit.sub(
      assetToken.userMintedAmt || new import_bn7.default(0)
    );
    return import_bn7.default.min(maxUserPayable, maxMintable);
  }, swapAmount = snapToValidValue(swapInput), assertCanSwap = connected && !!address && !!fluidTokenAddress && !!swap && !!assetToken.userTokenBalance && swapAmount.gt(new import_bn7.default(0)) && swapAmount.lte(assetToken.userTokenBalance) && (assetToken.userMintLimit === void 0 || swapAmount.lte(
    assetToken.userMintLimit.sub(assetToken.userMintedAmt || new import_bn7.default(0))
  )), handleChangeSwapInput = (e) => {
    let numericChars = e.target.value.replace(/[^0-9.]+/, ""), [whole, dec] = numericChars.split("."), unpaddedWhole = whole === "" ? "" : parseInt(whole) || 0;
    if (dec === void 0)
      return setSwapInput(`${unpaddedWhole}`);
    let limitedDecimals = dec.slice(0 - tokenDecimals);
    return setSwapInput([whole, limitedDecimals].join("."));
  }, inputMaxBalance = () => setSwapInput(
    addDecimalToBn(
      snapToValidValue(assetToken.userTokenBalance.toString()),
      assetToken.decimals
    )
  ), swapAndRedirect = async (e) => {
    if (e.preventDefault(), !!assertCanSwap && !!swap && !!assetToken)
      try {
        let receipt = await swap(swapAmount.toString(), assetToken.address);
        receipt && handleSwap(receipt, addDecimalToBn(swapAmount, assetToken.decimals));
      } catch (e2) {
        console.log(e2);
        return;
      }
  }, tokenIsFluid = !!assetToken.isFluidOf;
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("form", { className: "fluidify-form", onSubmit: swapAndRedirect, children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_surfing24.Text, { size: "lg", prominent: !0, children: [
      "AMOUNT TO ",
      tokenIsFluid ? "REVERT" : "FLUIDIFY"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("section", { className: "fluidify-form-el fluidify-input-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "img",
        {
          className: `fluidify-form-logo ${tokenIsFluid ? "fluid-token-form-logo" : ""}`,
          src: assetToken.logo || ""
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "input",
        {
          className: "fluidify-input",
          min: "",
          value: swapInput,
          onBlur: (e) => setSwapInput(
            addDecimalToBn(
              snapToValidValue(e.target.value),
              assetToken.decimals
            )
          ),
          onChange: handleChangeSwapInput,
          placeholder: "0",
          step: "any"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_surfing24.Text, { size: "lg", children: assetToken.symbol || "" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        import_surfing24.GeneralButton,
        {
          version: "transparent",
          size: "small",
          buttontype: "text",
          type: "button",
          handleClick: inputMaxBalance,
          disabled: assetToken.userTokenBalance.eq(new import_bn7.default(0)) || swapAmount.eq(assetToken.userTokenBalance),
          children: "max"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("hr", { className: "fluidify-form-el" }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_surfing24.Text, { children: [
      "Creating ",
      addDecimalToBn(swapAmount, toToken.decimals),
      " ",
      toToken.symbol || ""
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_surfing24.Text, { prominent: !0, children: [
      addDecimalToBn(assetToken.userTokenBalance, assetToken.decimals),
      " ",
      assetToken.symbol || "",
      " ($",
      getUsdFromTokenAmount(assetToken.userTokenBalance, assetToken),
      ") remaining in wallet."
    ] }),
    !!assetToken.userMintLimit && /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_surfing24.Text, { children: [
      "Daily ",
      assetToken.symbol,
      " limit:",
      " ",
      addDecimalToBn(
        assetToken.userMintedAmt || new import_bn7.default(0),
        assetToken.decimals
      ),
      "/",
      addDecimalToBn(assetToken.userMintLimit, assetToken.decimals)
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      import_surfing24.GeneralButton,
      {
        version: "primary",
        size: "large",
        buttontype: "text",
        type: "submit",
        handleClick: () => null,
        disabled: !assertCanSwap,
        className: "fluidify-form-submit",
        children: tokenIsFluid ? swapping ? `Reverting ${assetToken.symbol}` : "Revert Fluid Asset" : swapping ? `Creating ${toToken.symbol || ""}...` : "Create Fluid Asset"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_surfing24.Text, { size: "sm", className: "swap-footer-text", children: [
      "By pressing the button you agree to our",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("a", { href: "https://static.fluidity.money/assets/fluidity-website-tc.pdf", children: "terms of service" }),
      "."
    ] })
  ] });
}, FluidifyForm_default = FluidifyForm;

// app/components/SwapCompleteModal.tsx
var import_bn8 = __toESM(require("bn.js")), import_framer_motion13 = require("framer-motion"), import_react67 = require("react"), import_react68 = require("@remix-run/react");
var import_surfing25 = require("@fluidity-money/surfing");
var import_jsx_runtime42 = require("react/jsx-runtime"), SwapCompleteModal = ({
  visible,
  confirmed,
  close,
  amount,
  colorMap,
  assetToken,
  tokenPair,
  network,
  txHash,
  error
}) => {
  let { balance, addToken } = (0, import_react67.useContext)(FluidityFacade_default), [walletBalance, setWalletBalance] = (0, import_react67.useState)(), [playVideo, setPlayVideo] = (0, import_react67.useState)(!0);
  (0, import_react67.useEffect)(() => {
    network === "ethereum" && (balance == null || balance(assetToken.address).then(setWalletBalance));
  }, [confirmed]);
  let variants = {
    visible: { opacity: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0 }
  };
  return (0, import_react67.useEffect)(() => {
    setTimeout(() => setPlayVideo(!1), 15 * 1e3);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Modal_default, { visible, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "swap-complete-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      import_surfing25.LinkButton,
      {
        handleClick: () => close(),
        size: "large",
        type: "internal",
        left: !0,
        className: "cancel-btn",
        children: "Close"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
      import_framer_motion13.motion.div,
      {
        variants,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        className: "swap-complete-modal-top",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            BloomEffect_default,
            {
              type: "static",
              color: colorMap[tokenPair.symbol] ?? "#fff"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            import_framer_motion13.motion.img,
            {
              variants,
              initial: "hidden",
              animate: "visible",
              exit: "hidden",
              src: tokenPair == null ? void 0 : tokenPair.logo,
              style: {
                aspectRatio: "1 / 1",
                height: "20%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_framer_motion13.AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            import_framer_motion13.motion.div,
            {
              variants,
              initial: "hidden",
              animate: "visible",
              exit: "hidden",
              className: "video-container",
              children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                import_surfing25.Video,
                {
                  className: "swapping-video",
                  src: "/videos/LoadingOther.webm",
                  loop: !1,
                  type: "none",
                  onEnded: () => {
                    setPlayVideo(!1);
                  },
                  playbackRate: 1.5
                }
              )
            }
          ) })
        ]
      }
    ),
    !playVideo && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
      import_framer_motion13.motion.div,
      {
        variants,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        className: "swap-complete-modal-content",
        children: [
          confirmed && !error && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_surfing25.Heading, { as: "h5", children: [
              amount,
              " ",
              tokenPair.symbol,
              " (",
              (0, import_surfing25.stringifiedNumberToMonetaryString)(amount, 2),
              ") created and added to your wallet."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_surfing25.Text, { children: [
              addDecimalToBn(
                walletBalance || new import_bn8.default(0),
                assetToken.decimals
              ),
              " ",
              assetToken.symbol,
              " (",
              (0, import_surfing25.numberToMonetaryString)(
                getUsdFromTokenAmount(
                  walletBalance || new import_bn8.default(0),
                  assetToken
                )
              ),
              ") remaining in wallet.."
            ] })
          ] }),
          confirmed && error && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_surfing25.Heading, { as: "h5", children: "Something went wrong during the swap.." }),
          !confirmed && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_surfing25.Heading, { as: "h5", children: [
              amount,
              " ",
              tokenPair.symbol,
              " ($",
              (0, import_surfing25.stringifiedNumberToMonetaryString)(amount, 2),
              ") swapping and awaiting confirmation..."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_surfing25.Text, { children: "We'll notify you when it's done!" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            import_surfing25.LinkButton,
            {
              type: "internal",
              size: "medium",
              handleClick: () => addToken == null ? void 0 : addToken(tokenPair.symbol),
              children: "Add Token To Wallet"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react68.Link, { to: "../../dashboard/home", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            import_surfing25.GeneralButton,
            {
              buttontype: "text",
              size: "medium",
              version: "primary",
              handleClick: () => {
              },
              children: "GO TO DASHBOARD"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            import_surfing25.LinkButton,
            {
              type: "internal",
              size: "medium",
              handleClick: () => close(),
              children: "FLUIDIFY MORE ASSETS"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            "a",
            {
              href: getTxExplorerLink(network, txHash),
              rel: "noopener noreferrer",
              target: "_blank",
              children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                import_surfing25.LinkButton,
                {
                  type: "internal",
                  size: "medium",
                  handleClick: () => {
                  },
                  children: "VIEW TRANSACTION"
                }
              )
            }
          )
        ]
      }
    )
  ] }) });
}, SwapCompleteModal_default = SwapCompleteModal;

// app/routes/$network/fluidify/index.tsx
var import_react71 = require("@sentry/react"), import_node16 = require("@remix-run/node");
var import_jsx_runtime43 = require("react/jsx-runtime"), loader17 = async ({ params }) => {
  let { network } = params, ethereumWallets = webapp_config_server_default.config.ethereum.wallets, {
    config: {
      [network]: { tokens }
    }
  } = webapp_config_server_default;
  return (0, import_node16.json)({
    tokens,
    ethereumWallets,
    network,
    colors: (await colors)[network]
  });
};
function ErrorBoundary6(error) {
  return console.log(error), /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
    "div",
    {
      style: {
        paddingTop: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("img", { src: "/images/logoMetallic.png", alt: "", style: { height: "40px" } }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("h1", { style: { textAlign: "center" }, children: "Could not find Token to Fluidify!" })
      ]
    }
  );
}
function FluidifyToken() {
  let {
    network,
    tokens: defaultTokens,
    colors: colors2
  } = (0, import_react69.useLoaderData)(), {
    address,
    rawAddress,
    amountMinted: amountMinted2,
    connected,
    connecting,
    disconnect,
    balance,
    limit: limit2,
    addToken
  } = (0, import_react70.useContext)(FluidityFacade_default), { width } = (0, import_surfing26.useViewport)(), isTablet = width < 1250, [openMobModal, setOpenMobModal] = (0, import_react70.useState)(!1);
  (0, import_react70.useEffect)(() => {
    if (!isTablet)
      return setOpenMobModal(!1);
  }, [width]);
  let [tokens, setTokens] = (0, import_react70.useState)(
    defaultTokens.map((tok) => ({ ...tok, userTokenBalance: new import_bn9.default(0) }))
  ), [assetToken, setAssetToken] = (0, import_react70.useState)(), tokenIsFluid = !!(assetToken != null && assetToken.isFluidOf), toToken = assetToken ? tokenIsFluid ? tokens.find((t) => t.address === assetToken.isFluidOf) : tokens.find((t) => t.isFluidOf === assetToken.address) : void 0, handleAddToken = (symbol) => {
    !connected || !addToken || addToken(symbol);
  }, [connectedWalletModalVisibility, setConnectedWalletModalVisibility] = (0, import_react70.useState)(!1), [walletModalVisibility, setWalletModalVisibility] = (0, import_react70.useState)(
    !connected
  );
  (0, import_react70.useEffect)(() => {
    connected && setWalletModalVisibility(!1);
  }, [connected]);
  let [search, setSearch] = (0, import_react70.useState)(""), [activeFilterIndex, setActiveFilterIndex] = (0, import_react70.useState)(0), searchFilters = [
    {
      name: "All assets",
      filter: () => !0
    },
    {
      name: "Fluid",
      filter: (t) => t.isFluidOf
    },
    {
      name: "Regular",
      filter: (t) => !t.isFluidOf
    }
  ], [swapping, setSwapping] = (0, import_react70.useState)(!1), [{ amount, txHash }, setSwapData] = (0, import_react70.useState)({
    amount: "",
    txHash: ""
  }), [swapError, setSwapError] = (0, import_react70.useState)(!1), [confirmed, setConfirmed] = (0, import_react70.useState)(!1);
  (0, import_react70.useEffect)(() => {
    if (address && !swapping) {
      (async () => {
        switch (network) {
          case "ethereum": {
            let [tokensMinted, userTokenBalance, mintLimit] = await Promise.all([
              Promise.all(
                tokens.map(async (token) => {
                  if (token.isFluidOf)
                    return;
                  let fluidToken = tokens.find(
                    ({ isFluidOf }) => isFluidOf === token.address
                  );
                  if (!!fluidToken)
                    return amountMinted2 == null ? void 0 : amountMinted2(fluidToken.address);
                })
              ),
              Promise.all(
                tokens.map(
                  async ({ address: address2 }) => await (balance == null ? void 0 : balance(address2)) || new import_bn9.default(0)
                )
              ),
              Promise.all(
                tokens.map(async (token) => {
                  let { isFluidOf, address: address2 } = token;
                  if (isFluidOf)
                    return;
                  let fluidPair = tokens.find(
                    ({ isFluidOf: isFluidOf2 }) => isFluidOf2 === address2
                  );
                  if (!fluidPair)
                    throw new Error(
                      `Could not find fluid Pair of ${token.name}`
                    );
                  return await (limit2 == null ? void 0 : limit2(fluidPair.address));
                })
              )
            ]);
            return setTokens(
              tokens.map((token, i) => ({
                ...token,
                userMintedAmt: tokensMinted[i],
                userTokenBalance: userTokenBalance[i],
                userMintLimit: mintLimit[i]
              }))
            );
          }
          case "solana": {
            let userTokenBalance = await Promise.all(
              tokens.map(
                async ({ address: address2 }) => await (balance == null ? void 0 : balance(address2)) || new import_bn9.default(0)
              )
            );
            return setTokens(
              tokens.map((token, i) => ({
                ...token,
                userTokenBalance: userTokenBalance[i]
              }))
            );
          }
        }
      })();
      return;
    }
    return setTokens(
      tokens.map((token) => ({
        ...token,
        userTokenBalance: new import_bn9.default(0)
      }))
    );
  }, [address, swapping]), (0, import_react70.useEffect)(() => {
    assetToken && !assetToken.userMintLimit && setAssetToken(tokens.find((t) => t.address === assetToken.address));
  }, [tokens]);
  let handleRedirect = async (transaction, amount2) => {
    setSwapData({
      amount: amount2,
      txHash: transaction.txHash
    }), setSwapping(!0);
    try {
      let success = await transaction.confirmTx();
      setSwapError(!success);
    } catch (e) {
      (0, import_react71.captureException)(e);
    } finally {
      setConfirmed(!0);
    }
  }, [filteredTokens, setFilteredTokens] = (0, import_react70.useState)(
    tokens
  ), debouncedSearch = (0, import_lodash.debounce)((tokens2) => {
    let filteredTokens2 = tokens2.filter(
      (token) => token.name.toLowerCase().includes(search.toLowerCase()) || token.symbol.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTokens(filteredTokens2);
  }, 500);
  return (0, import_react70.useEffect)(() => {
    let typeFilteredTokens = tokens.filter(searchFilters[activeFilterIndex].filter).sort(
      (first, second) => getUsdFromTokenAmount(second.userTokenBalance, second) - getUsdFromTokenAmount(first.userTokenBalance, first)
    );
    return debouncedSearch(typeFilteredTokens), () => {
      debouncedSearch.cancel();
    };
  }, [search, activeFilterIndex, tokens]), /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(DndProvider, { backend: HTML5Backend, children: [
    swapping && assetToken && toToken && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
      SwapCompleteModal_default,
      {
        visible: swapping,
        confirmed,
        close: () => {
          setSwapping(!1), setSwapData({
            amount: "",
            txHash: ""
          }), setSwapError(!1);
        },
        colorMap: colors2,
        assetToken,
        tokenPair: toToken,
        amount,
        network,
        txHash,
        error: swapError
      }
    ),
    isTablet && openMobModal && !swapping && /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "mob-swap-modal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        import_surfing26.LinkButton,
        {
          handleClick: () => setOpenMobModal(!1),
          size: "large",
          type: "internal",
          left: !0,
          className: "cancel-btn",
          children: "Cancel"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        SwapCircle_default,
        {
          swapping,
          setSwapping,
          assetToken,
          setAssetToken,
          colorMap: colors2
        }
      ),
      assetToken && toToken && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        FluidifyForm_default,
        {
          handleSwap: handleRedirect,
          assetToken,
          toToken,
          swapping
        }
      )
    ] }),
    !openMobModal && !swapping && /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_jsx_runtime43.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("header", { className: "fluidify-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_surfing26.Display, { size: "xs", style: { margin: 0 }, children: [
          "Create or revert ",
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
          " fluid assets"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react69.Link, { to: `/${network}/dashboard/home`, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          import_surfing26.LinkButton,
          {
            handleClick: () => null,
            size: "large",
            type: "internal",
            left: !0,
            className: "cancel-btn",
            children: "Cancel"
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "fluidify-container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("aside", { className: "fluidify-tokens-container", children: [
          connected && address ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            ConnectedWallet_default,
            {
              address: rawAddress ?? "",
              callback: () => {
                setConnectedWalletModalVisibility(
                  !connectedWalletModalVisibility
                );
              },
              className: "connect-wallet-btn"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            import_surfing26.GeneralButton,
            {
              version: connected || connecting ? "transparent" : "primary",
              buttontype: "text",
              size: "medium",
              handleClick: () => connecting ? null : setWalletModalVisibility(!0),
              className: "connect-wallet-btn",
              children: connecting ? "Connecting..." : "Connect Wallet"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            ConnectedWalletModal,
            {
              visible: connectedWalletModalVisibility,
              address: rawAddress ?? "",
              close: () => {
                setConnectedWalletModalVisibility(!1);
              },
              disconnect: () => {
                disconnect == null || disconnect(), setConnectedWalletModalVisibility(!1);
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            ConnectWalletModal_default,
            {
              visible: walletModalVisibility,
              close: () => setWalletModalVisibility(!1)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            "input",
            {
              className: "search-bar",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search your assets"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "fluidify-token-filters", children: searchFilters.map((filter, i) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            "button",
            {
              onClick: () => setActiveFilterIndex(i),
              children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                import_surfing26.Text,
                {
                  size: "lg",
                  prominent: activeFilterIndex === i,
                  className: activeFilterIndex === i ? "selected" : "",
                  children: filter.name
                }
              )
            },
            `filter-${filter.name}`
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "fluidify-tokens", children: [
            tokens.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              "div",
              {
                style: {
                  padding: "1rem"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_surfing26.Text, { prominent: !0, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    "span",
                    {
                      role: "img",
                      "aria-label": "loading",
                      style: { padding: "10px" },
                      children: "\u{1F680}"
                    }
                  ),
                  "Loading tokens for the first time..."
                ] })
              }
            ),
            filteredTokens.length === 0 && search.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              "div",
              {
                style: {
                  padding: "1rem"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_surfing26.Text, { prominent: !0, children: `No tokens found for "${search}"` })
              }
            ),
            filteredTokens.map((token) => {
              let {
                symbol,
                name,
                logo,
                address: address2,
                userMintLimit,
                userMintedAmt,
                userTokenBalance,
                isFluidOf
              } = token;
              return isTablet ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                "div",
                {
                  onClick: () => {
                    setAssetToken(token), setOpenMobModal(!0);
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    FluidifyCard_default,
                    {
                      fluid: isFluidOf !== void 0,
                      symbol,
                      name,
                      logo,
                      address: address2,
                      mintCapPercentage: !!userMintLimit && userMintedAmt !== void 0 ? userMintedAmt.div(userMintLimit).toNumber() : void 0,
                      color: colors2[symbol],
                      amount: getUsdFromTokenAmount(userTokenBalance, token),
                      addToken: handleAddToken
                    },
                    symbol
                  )
                },
                `tok-${symbol}`
              ) : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                "div",
                {
                  onClick: () => {
                    setAssetToken(token);
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    Draggable_default,
                    {
                      type: isFluidOf ? ItemTypes_default.FLUID_ASSET : ItemTypes_default.ASSET,
                      dragItem: token,
                      children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                        FluidifyCard_default,
                        {
                          fluid: isFluidOf !== void 0,
                          symbol,
                          name,
                          logo,
                          address: address2,
                          mintCapPercentage: !!userMintLimit && userMintedAmt !== void 0 ? userMintedAmt.div(userMintLimit).toNumber() : void 0,
                          color: colors2[symbol],
                          amount: getUsdFromTokenAmount(
                            userTokenBalance,
                            token
                          ),
                          addToken: handleAddToken
                        },
                        symbol
                      )
                    }
                  )
                },
                `tok-${symbol}`
              );
            }),
            isTablet && /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_surfing26.Text, { size: "xs", className: "footer-text", children: [
              "Fluidity employs daily limits on fluidifying assets for",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
              " maintained system stability. Limits reset at midnight EST. ",
              /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
              "Unlimited reversion of fluid to non-fluid assets per day."
            ] })
          ] })
        ] }),
        !isTablet && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          SwapCircle_default,
          {
            swapping,
            setSwapping,
            assetToken,
            setAssetToken,
            colorMap: colors2
          }
        ),
        !isTablet && /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_surfing26.Text, { size: "xs", className: "footer-text", children: [
          "Fluidity employs daily limits on fluidifying assets for ",
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
          " ",
          "maintained system stability. Limits reset at midnight EST.",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
          "Unlimited reversion of fluid to non-fluid assets per day."
        ] }),
        !!assetToken && !isTablet && !!toToken && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          FluidifyForm_default,
          {
            handleSwap: handleRedirect,
            assetToken,
            toToken,
            swapping
          }
        )
      ] })
    ] })
  ] });
}

// app/routes/$network/index.tsx
var network_exports2 = {};
__export(network_exports2, {
  default: () => network_default,
  links: () => links9,
  loader: () => loader18
});
var import_node17 = require("@remix-run/node"), import_react72 = require("react"), import_react73 = require("@remix-run/react");
var import_surfing27 = require("@fluidity-money/surfing");

// app/styles/opportunity.css
var opportunity_default = "/_static/build/_assets/opportunity-UN6C4OBV.css";

// app/routes/$network/index.tsx
var import_jsx_runtime44 = require("react/jsx-runtime"), links9 = () => [{ rel: "stylesheet", href: opportunity_default }], loader18 = async ({ params }) => {
  let { network } = params, redirectTarget = (0, import_node17.redirect)("/"), ethereumWallets = webapp_config_server_default.config.ethereum.wallets;
  return !network || !Object.keys(webapp_config_server_default.drivers).includes(network) ? redirectTarget : {
    network,
    ethereumWallets
  };
}, NetworkPage = () => {
  var _a;
  let { network } = (0, import_react73.useLoaderData)(), { connected, address, rawAddress, disconnect } = (0, import_react72.useContext)(
    FluidityFacade_default
  ), navigate = (0, import_react73.useNavigate)(), projectedWinningsData = (0, import_react73.useFetcher)();
  (0, import_react72.useEffect)(() => {
    !address || projectedWinningsData.load(
      `/${network}/query/projectedWinnings?address=${address}`
    );
  }, [connected]);
  let projectedWin = ((_a = projectedWinningsData.data) == null ? void 0 : _a.projectedWin) || 0, loaded = !!(projectedWinningsData != null && projectedWinningsData.data), [walletModalVisibility, setWalletModalVisibility] = (0, import_react72.useState)(
    !connected
  ), [chainModalVisibility, setChainModalVisibility] = (0, import_react72.useState)(!1), [connectedWalletModalVisibility, setConnectedWalletModalVisibility] = (0, import_react72.useState)(!1), { width } = (0, import_surfing27.useViewport)(), mobileBreakpoint = 500, chainNameMap = {
    ethereum: {
      name: "ETH",
      icon: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("img", { src: "/assets/chains/ethIcon.svg" })
    },
    solana: {
      name: "SOL",
      icon: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("img", { src: "/assets/chains/solanaIcon.svg" })
    }
  };
  return (0, import_react72.useEffect)(() => {
    connected && setWalletModalVisibility(!1);
  }, [connected]), /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [
    connected && connected && loaded && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      import_surfing27.Video,
      {
        className: "video",
        src: "/videos/FluidityOpportunityA.mp4",
        type: "none",
        loop: !1
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "index-page", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "header-buttons", children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("a", { href: "https://fluidity.money", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          import_surfing27.LinkButton,
          {
            size: "small",
            type: "internal",
            left: !0,
            handleClick: () => {
            },
            children: width < mobileBreakpoint ? "WEBSITE " : "FLUIDITY WEBSITE"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          import_surfing27.LinkButton,
          {
            size: "small",
            type: "internal",
            handleClick: () => {
              navigate("dashboard/home");
            },
            children: width < mobileBreakpoint ? "APP" : "FLUIDITY APP"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "connected", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "connected-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          import_surfing27.ChainSelectorButton,
          {
            chain: chainNameMap[network],
            onClick: () => setChainModalVisibility(!0)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "connected-wallet", children: [
          address && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            ConnectedWallet_default,
            {
              address: rawAddress ?? "",
              callback: () => {
                setConnectedWalletModalVisibility(!0);
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Modal_default, { visible: connectedWalletModalVisibility, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            ConnectedWalletModal,
            {
              visible: connectedWalletModalVisibility,
              address: rawAddress ?? "",
              close: () => {
                setConnectedWalletModalVisibility(!1);
              },
              disconnect: () => {
                disconnect == null || disconnect(), setConnectedWalletModalVisibility(!1);
              }
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Modal_default, { visible: chainModalVisibility, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            import_surfing27.BlockchainModal,
            {
              handleModal: setChainModalVisibility,
              option: chainNameMap[network],
              options: Object.values(chainNameMap),
              setOption: (chain) => navigate(`/${networkMapper(chain)}/dashboard/home`),
              mobile: width <= mobileBreakpoint
            }
          ) }),
          !connected && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            import_surfing27.GeneralButton,
            {
              version: connected ? "transparent" : "primary",
              buttontype: "text",
              size: "medium",
              handleClick: () => setWalletModalVisibility(!0),
              className: "connect-wallet-btn",
              children: "Connnect Wallet"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Modal_default, { visible: walletModalVisibility, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "cover", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            ConnectWalletModal_default,
            {
              visible: walletModalVisibility,
              close: () => setWalletModalVisibility(!1)
            }
          ) }) })
        ] }),
        projectedWinningsData.state === "loading" && connected && /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "loader-dots", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_surfing27.LoadingDots, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_surfing27.Text, { size: width < mobileBreakpoint ? "md" : "xl", children: "Loading your last 50 transactions..." }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("br", {})
        ] }),
        !!projectedWinningsData.data && connected && /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            import_surfing27.Display,
            {
              className: "winnings-figure",
              size: width < mobileBreakpoint ? "xs" : "md",
              children: (0, import_surfing27.numberToMonetaryString)(projectedWin)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_surfing27.Text, { size: width < mobileBreakpoint ? "md" : "xl", children: "Would have been your winnings, based on your last 50 transactions." }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("br", {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_surfing27.Text, { size: width < mobileBreakpoint ? "md" : "xl", children: "Fluidify your assets to start earning." }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "connected-buttons", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            import_surfing27.GeneralButton,
            {
              size: "large",
              version: "primary",
              buttontype: "text",
              handleClick: () => navigate("fluidify"),
              children: "FLUIDIFY MONEY"
            }
          ),
          !!projectedWinningsData.data && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            "a",
            {
              href: generateTweet(projectedWin),
              rel: "noopener noreferrer",
              target: "_blank",
              children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                import_surfing27.GeneralButton,
                {
                  className: "share-button",
                  size: "large",
                  version: "transparent",
                  buttontype: "icon before",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_surfing27.Twitter, {}),
                  handleClick: () => {
                  },
                  children: "SHARE"
                }
              )
            }
          )
        ] })
      ] }) })
    ] })
  ] });
}, network_default = NetworkPage;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader19
});
var import_node18 = require("@remix-run/node"), loader19 = async () => (0, import_node18.redirect)("/ethereum/dashboard/home");

// app/routes/wtf.tsx
var wtf_exports = {};
__export(wtf_exports, {
  ErrorBoundary: () => ErrorBoundary7,
  default: () => IndexPage,
  links: () => links10,
  loader: () => loader20,
  meta: () => meta4
});
var import_react74 = require("@remix-run/react"), import_react75 = require("react"), import_node19 = require("@remix-run/node");

// app/queries/useHighestRewardStatistics.ts
var queryByNetwork = gql`
  query HighestRewardsByNetwork($network: network_blockchain!) {
    highest_rewards_monthly(where: { network: { _eq: $network } }) {
      network
      transaction_hash
      winning_address
      awarded_day
      token_short_name
      winning_amount_scaled
    }
    highest_reward_winner_totals(where: { network: { _eq: $network } }) {
      network
      transaction_count
      winning_address
      total_winnings
    }
  }
`, queryAll4 = gql`
  query HighestRewardsAllNetworks {
    highest_rewards_monthly {
      network
      transaction_hash
      winning_address
      awarded_day
      token_short_name
      winning_amount_scaled
    }
    highest_reward_winner_totals {
      network
      transaction_count
      winning_address
      total_winnings
    }
  }
`;
var useHighestRewardStatisticsAll = async () => await jsonPost(
  "https://fluidity.hasura.app/v1/graphql",
  {
    query: queryAll4
  },
  process.env.FLU_HASURA_SECRET ? {
    "x-hasura-admin-secret": process.env.FLU_HASURA_SECRET
  } : {}
);

// app/routes/wtf.tsx
var import_date_fns4 = require("date-fns");
var import_surfing28 = require("@fluidity-money/surfing"), import_react76 = require("@remix-run/react");
var import_react77 = require("@sentry/react");
var import_jsx_runtime45 = require("react/jsx-runtime"), links10 = () => [{ rel: "stylesheet", href: opportunity_default }], loader20 = async () => {
  let { data, errors } = await useHighestRewardStatisticsAll();
  if (errors || !data)
    return (0, import_react77.captureException)(new Error("Could not fetch historical Rewards"), {
      tags: {
        section: "opportunity"
      }
    }), (0, import_node19.json)({
      highestRewards: [],
      winnerTotals: {},
      highestWinner: {}
    });
  let highestRewards = data.highest_rewards_monthly;
  if (!Object.keys(data.highest_reward_winner_totals).length)
    return (0, import_node19.json)({
      highestRewards,
      winnerTotals: {},
      highestWinner: {}
    });
  let winnerTotals = data.highest_reward_winner_totals.reduce(
    (prev, current) => ({
      ...prev,
      [current.winning_address]: {
        network: current.network,
        transactionCount: current.transaction_count,
        totalWinnings: current.total_winnings
      }
    }),
    {}
  ), largestWinnerEntries = Object.entries(winnerTotals).reduce(
    (largestWinner, winner) => largestWinner[1].totalWinnings >= winner[1].totalWinnings ? largestWinner : winner
  );
  return (0, import_node19.json)({
    highestRewards,
    winnerTotals,
    highestWinner: {
      address: largestWinnerEntries[0],
      network: largestWinnerEntries[1].network,
      totalWinnings: largestWinnerEntries[1].totalWinnings,
      transactionCount: largestWinnerEntries[1].transactionCount
    }
  });
}, meta4 = ({ location: location2 }) => {
  var _a;
  let reActionQuery = /action=[\w]*/, actionString = (_a = location2.search.match(reActionQuery)) == null ? void 0 : _a[0], action = actionString == null ? void 0 : actionString.split("=")[1];
  return generateMeta(action ?? "");
};
function ErrorBoundary7() {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
    "div",
    {
      style: {
        paddingTop: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { src: "/images/logoMetallic.png", alt: "", style: { height: "40px" } }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h1", { children: "Could not load Highest Rewards" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { children: "Our team has been notified, and are working on fixing it!" })
      ]
    }
  );
}
function IndexPage() {
  let [showChainDashboardModal, setShowChainDashboardModal] = (0, import_react75.useState)(!1), [showChainOpportunityModal, setShowChainOpportunityModal] = (0, import_react75.useState)(!1), navigate = (0, import_react74.useNavigate)(), { highestRewards, highestWinner } = (0, import_react76.useLoaderData)(), { width } = (0, import_surfing28.useViewport)(), mobileBreakpoint = 500, chains = [
    {
      name: "ETH",
      icon: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { src: "/assets/chains/ethIcon.svg" })
    },
    {
      name: "SOL",
      icon: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { src: "/assets/chains/solanaIcon.svg" })
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      import_surfing28.Video,
      {
        className: "video",
        src: "/videos/FluidityOpportunityB.mp4",
        type: "none",
        loop: !0
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "index-page", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        "div",
        {
          className: "opportunity-graph",
          style: {
            width: "100%",
            height: "400px",
            bottom: "-50px",
            position: "fixed"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
            import_surfing28.LineChart,
            {
              data: highestRewards.map(
                (reward, i) => ({
                  ...reward,
                  x: i
                })
              ),
              lineLabel: "transactions",
              accessors: {
                xAccessor: (d) => d.x,
                yAccessor: (d) => d.winning_amount_scaled * 1e6 + 1
              },
              renderTooltip: ({ datum }) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "graph-tooltip-container", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "graph-tooltip", children: [
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { style: { color: "rgba(255,255,255, 50%)" }, children: (0, import_date_fns4.format)((0, import_date_fns4.parseISO)(datum.awarded_day), "dd/MM/yy") }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { children: (0, import_surfing28.trimAddress)(datum.winning_address) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("span", { children: [
                    (0, import_surfing28.numberToMonetaryString)(datum.winning_amount_scaled),
                    " "
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { style: { color: "rgba(2555,255,255, 50%)" }, children: "prize awarded" })
                ] })
              ] }) })
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "header-buttons", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("a", { href: "https://fluidity.money", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
          import_surfing28.LinkButton,
          {
            size: "small",
            type: "internal",
            left: !0,
            handleClick: () => {
            },
            children: width < mobileBreakpoint ? "WEBSITE " : "FLUIDITY WEBSITE"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
          import_surfing28.LinkButton,
          {
            size: "small",
            type: "internal",
            handleClick: () => setShowChainDashboardModal(!0),
            children: width < mobileBreakpoint ? "APP" : "FLUIDITY APP"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Modal_default, { visible: showChainDashboardModal, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
          import_surfing28.BlockchainModal,
          {
            handleModal: setShowChainDashboardModal,
            option: { name: "", icon: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", {}) },
            options: chains,
            setOption: (chain) => navigate(`/${networkMapper(chain)}/dashboard/home`),
            mobile: width <= mobileBreakpoint
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "disconnected", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "opportunity", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "opportunity-bottom", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "opportunity-text", children: [
            highestWinner.address && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_surfing28.Display, { className: "opportunity-text-top", size: "xs", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_surfing28.Text, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
                "a",
                {
                  href: getAddressExplorerLink(
                    highestWinner.network,
                    highestWinner.address
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_surfing28.Text, { prominent: !0, children: (0, import_surfing28.appendLeading0x)(
                    (0, import_surfing28.trimAddressShort)(
                      (0, import_surfing28.normaliseAddress)(highestWinner.address)
                    )
                  ) })
                }
              ),
              " claimed ",
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_surfing28.Text, { prominent: !0, children: (0, import_surfing28.numberToMonetaryString)(highestWinner.totalWinnings) }),
              ` in fluid prizes over ${highestWinner.transactionCount} transaction${highestWinner.transactionCount > 1 ? "s" : ""}.`
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
              import_surfing28.Text,
              {
                className: "connect-text",
                size: width < mobileBreakpoint ? "lg" : "xl",
                children: "Connect your wallet to see what you could make."
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
            import_surfing28.GeneralButton,
            {
              size: "large",
              buttontype: "text",
              version: "primary",
              handleClick: () => {
                setShowChainOpportunityModal(!0);
              },
              children: "MAKE IT RAIN"
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Modal_default, { visible: showChainOpportunityModal, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
          import_surfing28.BlockchainModal,
          {
            handleModal: setShowChainOpportunityModal,
            option: { name: "", icon: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", {}) },
            options: chains,
            setOption: (chain) => navigate(`/${networkMapper(chain)}`),
            mobile: width <= mobileBreakpoint
          }
        ) })
      ] })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "599b1065", entry: { module: "/_static/build/entry.client-K37SSZPD.js", imports: ["/_static/build/_shared/chunk-CNV52W5I.js", "/_static/build/_shared/chunk-VPWCVO3N.js", "/_static/build/_shared/chunk-NUI2OEGL.js", "/_static/build/_shared/chunk-JBZWRZUQ.js", "/_static/build/_shared/chunk-UQQYXKUD.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/_static/build/root-U7K54GU3.js", imports: ["/_static/build/_shared/chunk-QXUO66FE.js", "/_static/build/_shared/chunk-AZ3NYQG6.js", "/_static/build/_shared/chunk-HXUUNAQO.js", "/_static/build/_shared/chunk-HP5735OU.js", "/_static/build/_shared/chunk-MH3VNOLR.js", "/_static/build/_shared/chunk-SGQAPALE.js", "/_static/build/_shared/chunk-DQ4BDDG2.js", "/_static/build/_shared/chunk-PBKV4PR6.js", "/_static/build/_shared/chunk-B6VBOKRA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$network": { id: "routes/$network", parentId: "root", path: ":network", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network-PNVF7OKA.js", imports: ["/_static/build/_shared/chunk-GC5IJP7J.js", "/_static/build/_shared/chunk-MUPLLB4T.js", "/_static/build/_shared/chunk-V35OJKGC.js", "/_static/build/_shared/chunk-6DSGVQEA.js", "/_static/build/_shared/chunk-ZJXKPDKC.js", "/_static/build/_shared/chunk-AQZAYOCJ.js", "/_static/build/_shared/chunk-FY7JIE3Z.js", "/_static/build/_shared/chunk-IAIM2CXI.js", "/_static/build/_shared/chunk-PWBL3DVE.js", "/_static/build/_shared/chunk-7CU653CZ.js", "/_static/build/_shared/chunk-6HRJ64NN.js", "/_static/build/_shared/chunk-WTK6ZYNK.js", "/_static/build/_shared/chunk-UFOQREBP.js", "/_static/build/_shared/chunk-C2J7UWGZ.js", "/_static/build/_shared/chunk-UP3HBK4E.js", "/_static/build/_shared/chunk-YNVBVKZV.js", "/_static/build/_shared/chunk-JX2544TO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$network/dashboard": { id: "routes/$network/dashboard", parentId: "routes/$network", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/dashboard-BU2DLEHG.js", imports: ["/_static/build/_shared/chunk-EMUPS7JN.js", "/_static/build/_shared/chunk-6RDBCIQU.js", "/_static/build/_shared/chunk-HXUUNAQO.js", "/_static/build/_shared/chunk-HP5735OU.js", "/_static/build/_shared/chunk-SGQAPALE.js", "/_static/build/_shared/chunk-PBKV4PR6.js", "/_static/build/_shared/chunk-B6VBOKRA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$network/dashboard/assets": { id: "routes/$network/dashboard/assets", parentId: "routes/$network/dashboard", path: "assets", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/dashboard/assets-ZQ24TS4E.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/dashboard/dao": { id: "routes/$network/dashboard/dao", parentId: "routes/$network/dashboard", path: "dao", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/dashboard/dao-F3NDIFIT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/dashboard/home": { id: "routes/$network/dashboard/home", parentId: "routes/$network/dashboard", path: "home", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/dashboard/home-XGOWGSWT.js", imports: ["/_static/build/_shared/chunk-RFAZUZZH.js", "/_static/build/_shared/chunk-QXUO66FE.js", "/_static/build/_shared/chunk-MH3VNOLR.js", "/_static/build/_shared/chunk-PWBL3DVE.js", "/_static/build/_shared/chunk-C2J7UWGZ.js", "/_static/build/_shared/chunk-UP3HBK4E.js", "/_static/build/_shared/chunk-JX2544TO.js", "/_static/build/_shared/chunk-DQ4BDDG2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$network/dashboard/index": { id: "routes/$network/dashboard/index", parentId: "routes/$network/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/_static/build/routes/$network/dashboard/index-U3VXJ5B4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/dashboard/rewards": { id: "routes/$network/dashboard/rewards", parentId: "routes/$network/dashboard", path: "rewards", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/dashboard/rewards-NWY2ZRFM.js", imports: ["/_static/build/_shared/chunk-A46PU6KI.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/dashboard/rewards/claim": { id: "routes/$network/dashboard/rewards/claim", parentId: "routes/$network/dashboard/rewards", path: "claim", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/dashboard/rewards/claim-JSFRULCA.js", imports: ["/_static/build/_shared/chunk-YNVBVKZV.js", "/_static/build/_shared/chunk-JX2544TO.js", "/_static/build/_shared/chunk-B6VBOKRA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/dashboard/rewards/common": { id: "routes/$network/dashboard/rewards/common", parentId: "routes/$network/dashboard/rewards", path: "common", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/dashboard/rewards/common-GOWH36M3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/dashboard/rewards/index": { id: "routes/$network/dashboard/rewards/index", parentId: "routes/$network/dashboard/rewards", path: void 0, index: !0, caseSensitive: void 0, module: "/_static/build/routes/$network/dashboard/rewards/index-BHJEWVG7.js", imports: ["/_static/build/_shared/chunk-RFAZUZZH.js", "/_static/build/_shared/chunk-QRRNFI2A.js", "/_static/build/_shared/chunk-QXUO66FE.js", "/_static/build/_shared/chunk-MH3VNOLR.js", "/_static/build/_shared/chunk-SGQAPALE.js", "/_static/build/_shared/chunk-PWBL3DVE.js", "/_static/build/_shared/chunk-C2J7UWGZ.js", "/_static/build/_shared/chunk-UP3HBK4E.js", "/_static/build/_shared/chunk-JX2544TO.js", "/_static/build/_shared/chunk-DQ4BDDG2.js", "/_static/build/_shared/chunk-PBKV4PR6.js", "/_static/build/_shared/chunk-B6VBOKRA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$network/dashboard/rewards/unclaimed": { id: "routes/$network/dashboard/rewards/unclaimed", parentId: "routes/$network/dashboard/rewards", path: "unclaimed", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/dashboard/rewards/unclaimed-TDY7P2IA.js", imports: ["/_static/build/_shared/chunk-QRRNFI2A.js", "/_static/build/_shared/chunk-MH3VNOLR.js", "/_static/build/_shared/chunk-SGQAPALE.js", "/_static/build/_shared/chunk-C2J7UWGZ.js", "/_static/build/_shared/chunk-UP3HBK4E.js", "/_static/build/_shared/chunk-JX2544TO.js", "/_static/build/_shared/chunk-DQ4BDDG2.js", "/_static/build/_shared/chunk-PBKV4PR6.js", "/_static/build/_shared/chunk-B6VBOKRA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/fluidify": { id: "routes/$network/fluidify", parentId: "routes/$network", path: "fluidify", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/fluidify-GL4Q276K.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/fluidify/index": { id: "routes/$network/fluidify/index", parentId: "routes/$network/fluidify", path: void 0, index: !0, caseSensitive: void 0, module: "/_static/build/routes/$network/fluidify/index-BQ22MCFS.js", imports: ["/_static/build/_shared/chunk-B3QE2T47.js", "/_static/build/_shared/chunk-EMUPS7JN.js", "/_static/build/_shared/chunk-6RDBCIQU.js", "/_static/build/_shared/chunk-AZ3NYQG6.js", "/_static/build/_shared/chunk-7CU653CZ.js", "/_static/build/_shared/chunk-6HRJ64NN.js", "/_static/build/_shared/chunk-WTK6ZYNK.js", "/_static/build/_shared/chunk-UFOQREBP.js", "/_static/build/_shared/chunk-C2J7UWGZ.js", "/_static/build/_shared/chunk-UP3HBK4E.js", "/_static/build/_shared/chunk-JX2544TO.js", "/_static/build/_shared/chunk-PBKV4PR6.js", "/_static/build/_shared/chunk-B6VBOKRA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$network/index": { id: "routes/$network/index", parentId: "routes/$network", path: void 0, index: !0, caseSensitive: void 0, module: "/_static/build/routes/$network/index-LODSTOGZ.js", imports: ["/_static/build/_shared/chunk-6LUKJOL3.js", "/_static/build/_shared/chunk-EMUPS7JN.js", "/_static/build/_shared/chunk-6RDBCIQU.js", "/_static/build/_shared/chunk-B6VBOKRA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/query/dashboard/home": { id: "routes/$network/query/dashboard/home", parentId: "routes/$network", path: "query/dashboard/home", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/query/dashboard/home-DIP7S6AO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/query/dashboard/rewards": { id: "routes/$network/query/dashboard/rewards", parentId: "routes/$network", path: "query/dashboard/rewards", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/query/dashboard/rewards-XRA4GT4S.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/query/dashboard/unclaimed": { id: "routes/$network/query/dashboard/unclaimed", parentId: "routes/$network", path: "query/dashboard/unclaimed", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/query/dashboard/unclaimed-T4TW4TVZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/query/dashboard/unclaimedRewards": { id: "routes/$network/query/dashboard/unclaimedRewards", parentId: "routes/$network", path: "query/dashboard/unclaimedRewards", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/query/dashboard/unclaimedRewards-ETDOUXQC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/query/projectedWinnings": { id: "routes/$network/query/projectedWinnings", parentId: "routes/$network", path: "query/projectedWinnings", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/query/projectedWinnings-EVZ5GNIY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/query/userTransactions": { id: "routes/$network/query/userTransactions", parentId: "routes/$network", path: "query/userTransactions", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/query/userTransactions-OVGFHYJM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/query/volumeStats": { id: "routes/$network/query/volumeStats", parentId: "routes/$network", path: "query/volumeStats", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/query/volumeStats-Q3TZU7SR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$network/query/winningUserTransactions": { id: "routes/$network/query/winningUserTransactions", parentId: "routes/$network", path: "query/winningUserTransactions", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/$network/query/winningUserTransactions-JKRPUS47.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/_static/build/routes/index-N5FFAPLF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/wtf": { id: "routes/wtf", parentId: "root", path: "wtf", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/wtf-QM4IMRME.js", imports: ["/_static/build/_shared/chunk-6LUKJOL3.js", "/_static/build/_shared/chunk-6RDBCIQU.js", "/_static/build/_shared/chunk-C2J7UWGZ.js", "/_static/build/_shared/chunk-UP3HBK4E.js", "/_static/build/_shared/chunk-YNVBVKZV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, url: "/_static/build/manifest-599B1065.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/_static/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$network": {
    id: "routes/$network",
    parentId: "root",
    path: ":network",
    index: void 0,
    caseSensitive: void 0,
    module: network_exports
  },
  "routes/$network/query/dashboard/unclaimedRewards": {
    id: "routes/$network/query/dashboard/unclaimedRewards",
    parentId: "routes/$network",
    path: "query/dashboard/unclaimedRewards",
    index: void 0,
    caseSensitive: void 0,
    module: unclaimedRewards_exports
  },
  "routes/$network/query/winningUserTransactions": {
    id: "routes/$network/query/winningUserTransactions",
    parentId: "routes/$network",
    path: "query/winningUserTransactions",
    index: void 0,
    caseSensitive: void 0,
    module: winningUserTransactions_exports
  },
  "routes/$network/query/dashboard/unclaimed": {
    id: "routes/$network/query/dashboard/unclaimed",
    parentId: "routes/$network",
    path: "query/dashboard/unclaimed",
    index: void 0,
    caseSensitive: void 0,
    module: unclaimed_exports
  },
  "routes/$network/query/dashboard/rewards": {
    id: "routes/$network/query/dashboard/rewards",
    parentId: "routes/$network",
    path: "query/dashboard/rewards",
    index: void 0,
    caseSensitive: void 0,
    module: rewards_exports
  },
  "routes/$network/query/projectedWinnings": {
    id: "routes/$network/query/projectedWinnings",
    parentId: "routes/$network",
    path: "query/projectedWinnings",
    index: void 0,
    caseSensitive: void 0,
    module: projectedWinnings_exports
  },
  "routes/$network/query/userTransactions": {
    id: "routes/$network/query/userTransactions",
    parentId: "routes/$network",
    path: "query/userTransactions",
    index: void 0,
    caseSensitive: void 0,
    module: userTransactions_exports
  },
  "routes/$network/query/dashboard/home": {
    id: "routes/$network/query/dashboard/home",
    parentId: "routes/$network",
    path: "query/dashboard/home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/$network/query/volumeStats": {
    id: "routes/$network/query/volumeStats",
    parentId: "routes/$network",
    path: "query/volumeStats",
    index: void 0,
    caseSensitive: void 0,
    module: volumeStats_exports
  },
  "routes/$network/dashboard": {
    id: "routes/$network/dashboard",
    parentId: "routes/$network",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/$network/dashboard/rewards": {
    id: "routes/$network/dashboard/rewards",
    parentId: "routes/$network/dashboard",
    path: "rewards",
    index: void 0,
    caseSensitive: void 0,
    module: rewards_exports2
  },
  "routes/$network/dashboard/rewards/unclaimed": {
    id: "routes/$network/dashboard/rewards/unclaimed",
    parentId: "routes/$network/dashboard/rewards",
    path: "unclaimed",
    index: void 0,
    caseSensitive: void 0,
    module: unclaimed_exports2
  },
  "routes/$network/dashboard/rewards/common": {
    id: "routes/$network/dashboard/rewards/common",
    parentId: "routes/$network/dashboard/rewards",
    path: "common",
    index: void 0,
    caseSensitive: void 0,
    module: common_exports
  },
  "routes/$network/dashboard/rewards/claim": {
    id: "routes/$network/dashboard/rewards/claim",
    parentId: "routes/$network/dashboard/rewards",
    path: "claim",
    index: void 0,
    caseSensitive: void 0,
    module: claim_exports
  },
  "routes/$network/dashboard/rewards/index": {
    id: "routes/$network/dashboard/rewards/index",
    parentId: "routes/$network/dashboard/rewards",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: rewards_exports3
  },
  "routes/$network/dashboard/assets": {
    id: "routes/$network/dashboard/assets",
    parentId: "routes/$network/dashboard",
    path: "assets",
    index: void 0,
    caseSensitive: void 0,
    module: assets_exports
  },
  "routes/$network/dashboard/index": {
    id: "routes/$network/dashboard/index",
    parentId: "routes/$network/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/$network/dashboard/home": {
    id: "routes/$network/dashboard/home",
    parentId: "routes/$network/dashboard",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports2
  },
  "routes/$network/dashboard/dao": {
    id: "routes/$network/dashboard/dao",
    parentId: "routes/$network/dashboard",
    path: "dao",
    index: void 0,
    caseSensitive: void 0,
    module: dao_exports
  },
  "routes/$network/fluidify": {
    id: "routes/$network/fluidify",
    parentId: "routes/$network",
    path: "fluidify",
    index: void 0,
    caseSensitive: void 0,
    module: fluidify_exports
  },
  "routes/$network/fluidify/index": {
    id: "routes/$network/fluidify/index",
    parentId: "routes/$network/fluidify",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: fluidify_exports2
  },
  "routes/$network/index": {
    id: "routes/$network/index",
    parentId: "routes/$network",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: network_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/wtf": {
    id: "routes/wtf",
    parentId: "root",
    path: "wtf",
    index: void 0,
    caseSensitive: void 0,
    module: wtf_exports
  }
};

// server.js
var handler = (0, import_architect.createRequestHandler)({
  build: server_build_exports,
  mode: "production"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
