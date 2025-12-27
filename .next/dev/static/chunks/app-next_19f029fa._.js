(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app-next/components/Reel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SYMBOLS = [
    "CR10",
    "CR20",
    "CR40",
    "MOD",
    "JACKPOT"
];
function Reel({ value, spinning, delay = 0 }) {
    _s();
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reel.useEffect": ()=>{
            async function spin() {
                if (!spinning) return;
                await controls.start({
                    y: [
                        "0%",
                        "-80%"
                    ],
                    transition: {
                        repeat: Infinity,
                        ease: "linear",
                        duration: 0.4
                    }
                });
            }
            spin();
        }
    }["Reel.useEffect"], [
        spinning,
        controls
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reel.useEffect": ()=>{
            async function stop() {
                if (spinning) return;
                await controls.start({
                    y: 0,
                    transition: {
                        delay,
                        type: "spring",
                        stiffness: 260,
                        damping: 14,
                        mass: 0.8
                    }
                });
            }
            stop();
        }
    }["Reel.useEffect"], [
        spinning,
        controls,
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-24 h-24 overflow-hidden rounded-xl bg-gradient-to-br from-[#1b2340] to-[#0d1224] shadow-lg shadow-cyan-500/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: controls,
                className: "flex flex-col items-center",
                children: [
                    ...SYMBOLS,
                    ...SYMBOLS
                ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-24 flex items-center justify-center font-bold text-lg ${s === "JACKPOT" ? "text-yellow-300" : "text-cyan-200"}`,
                        children: s
                    }, i, false, {
                        fileName: "[project]/app-next/components/Reel.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app-next/components/Reel.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            !spinning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 flex items-center justify-center font-bold text-lg text-cyan-200",
                children: value
            }, void 0, false, {
                fileName: "[project]/app-next/components/Reel.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-next/components/Reel.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(Reel, "4T1IXnu9FbORp0Ixvv02UeJbIck=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = Reel;
var _c;
__turbopack_context__.k.register(_c, "Reel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app-next/lib/shake.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shakeScreen",
    ()=>shakeScreen
]);
function shakeScreen(intensity = 6, duration = 300) {
    const el = document.body;
    el.animate([
        {
            transform: "translate(0px, 0px)"
        },
        {
            transform: `translate(-${intensity}px, ${intensity}px)`
        },
        {
            transform: `translate(${intensity}px, -${intensity}px)`
        },
        {
            transform: "translate(0px, 0px)"
        }
    ], {
        duration,
        easing: "ease-in-out"
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app-next/components/MTCoin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MTCoin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function MTCoin({ size = 24 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 100 100",
        className: "drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                    id: "g",
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#b9ffff"
                        }, void 0, false, {
                            fileName: "[project]/app-next/components/MTCoin.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "60%",
                            stopColor: "#2ee6ff"
                        }, void 0, false, {
                            fileName: "[project]/app-next/components/MTCoin.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#0aa3c2"
                        }, void 0, false, {
                            fileName: "[project]/app-next/components/MTCoin.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-next/components/MTCoin.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-next/components/MTCoin.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "50",
                r: "46",
                fill: "url(#g)",
                stroke: "#7ff6ff",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/app-next/components/MTCoin.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "50",
                y: "58",
                textAnchor: "middle",
                fontSize: "36",
                fontWeight: "900",
                fill: "#003844",
                style: {
                    letterSpacing: "-2px"
                },
                children: "MT"
            }, void 0, false, {
                fileName: "[project]/app-next/components/MTCoin.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-next/components/MTCoin.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = MTCoin;
var _c;
__turbopack_context__.k.register(_c, "MTCoin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app-next/components/CoinBurst.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoinBurst
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$components$2f$MTCoin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/components/MTCoin.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function CoinBurst({ count, originY = 0, onDone }) {
    const coins = Array.from({
        length: count
    }).map((_, i)=>({
            id: i,
            x: 0,
            y: originY,
            dx: (Math.random() - 0.5) * 220,
            dy: -Math.random() * 260 - 120,
            r: Math.random() * 360
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: coins.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none fixed left-1/2 top-1/2 z-50",
                initial: {
                    x: 0,
                    y: 0,
                    opacity: 0,
                    rotate: 0,
                    scale: 0.6
                },
                animate: {
                    x: c.dx,
                    y: c.dy,
                    opacity: [
                        0,
                        1,
                        1,
                        0
                    ],
                    rotate: c.r,
                    scale: [
                        0.6,
                        1,
                        0.9
                    ]
                },
                transition: {
                    duration: 1.2,
                    ease: "cubic-bezier(0.22, 1, 0.36, 1)"
                },
                onAnimationComplete: onDone,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$components$2f$MTCoin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 22 + Math.random() * 10
                }, void 0, false, {
                    fileName: "[project]/app-next/components/CoinBurst.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, c.id, false, {
                fileName: "[project]/app-next/components/CoinBurst.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app-next/components/CoinBurst.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = CoinBurst;
var _c;
__turbopack_context__.k.register(_c, "CoinBurst");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app-next/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$components$2f$Reel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/components/Reel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$lib$2f$shake$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/lib/shake.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$components$2f$CoinBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-next/components/CoinBurst.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [energy, setEnergy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [spinning, setSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reels, setReels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "?",
        "?",
        "?"
    ]);
    const [burst, setBurst] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const noEnergy = energy !== null && energy <= 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const tg = window.Telegram?.WebApp;
            if (tg) {
                tg.expand();
                tg.ready();
            }
        }
    }["Home.useEffect"], []);
    async function extract() {
        if (spinning || noEnergy) return;
        setSpinning(true);
        setStatus("Extracting…");
        const tg = window.Telegram?.WebApp;
        const isTelegram = !!tg?.initData;
        /* ================================
       🟢 PUBLIC DEMO MODE (Browser)
       ================================ */ if (!isTelegram) {
            const mockReels = [
                "CR10",
                "CR20",
                "CR40"
            ];
            const mockReward = 70;
            setTimeout(()=>setReels((r)=>[
                        mockReels[0],
                        r[1],
                        r[2]
                    ]), 600);
            setTimeout(()=>setReels((r)=>[
                        r[0],
                        mockReels[1],
                        r[2]
                    ]), 900);
            setTimeout(()=>setReels((r)=>[
                        r[0],
                        r[1],
                        mockReels[2]
                    ]), 1200);
            setTimeout(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$lib$2f$shake$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shakeScreen"])(6, 300), 1200);
            setTimeout(()=>{
                setEnergy((e)=>e === null ? 9 : Math.max(0, e - 1));
                setStatus(`+${mockReward} CR`);
                setBurst(10);
                setSpinning(false);
            }, 1400);
            return;
        }
        /* ================================
       🔵 TELEGRAM MODE (REAL API)
       ================================ */ try {
            const res = await fetch("/api/spin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    initData: tg.initData
                })
            });
            const data = await res.json();
            if (data.error) {
                setStatus(data.error);
                if (data.error.toLowerCase().includes("energy")) {
                    setEnergy(0);
                }
                setSpinning(false);
                return;
            }
            setTimeout(()=>setReels((r)=>[
                        data.reels[0],
                        r[1],
                        r[2]
                    ]), 600);
            setTimeout(()=>setReels((r)=>[
                        r[0],
                        data.reels[1],
                        r[2]
                    ]), 900);
            setTimeout(()=>setReels((r)=>[
                        r[0],
                        r[1],
                        data.reels[2]
                    ]), 1200);
            setTimeout(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$lib$2f$shake$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shakeScreen"])(data.reward >= 100 ? 10 : 6, 380), 1200);
            setTimeout(()=>{
                setEnergy(data.energy);
                setStatus(`+${data.reward} CR`);
                setBurst(Math.min(18, Math.max(6, Math.floor(data.reward / 10))));
                setSpinning(false);
            }, 1400);
        } catch  {
            setStatus("Server error");
            setSpinning(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-[#050914] via-[#0b1020] to-black overflow-hidden",
        children: [
            burst > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$components$2f$CoinBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                count: burst,
                onDone: ()=>setBurst(0)
            }, void 0, false, {
                fileName: "[project]/app-next/app/page.tsx",
                lineNumber: 105,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-cyan-400 text-3xl tracking-[0.3em] font-extrabold drop-shadow-[0_0_12px_#00ffff88]",
                children: "🚀 Neon Salvage"
            }, void 0, false, {
                fileName: "[project]/app-next/app/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-2 rounded-xl text-lg font-semibold bg-[#121a2f] shadow-inner shadow-cyan-500/40 border border-cyan-500/20",
                children: [
                    "⚡ ",
                    energy === null ? "…" : energy
                ]
            }, void 0, true, {
                fileName: "[project]/app-next/app/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$components$2f$Reel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: reels[0],
                        spinning: spinning,
                        delay: 0
                    }, void 0, false, {
                        fileName: "[project]/app-next/app/page.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$components$2f$Reel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: reels[1],
                        spinning: spinning,
                        delay: 0.15
                    }, void 0, false, {
                        fileName: "[project]/app-next/app/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$components$2f$Reel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: reels[2],
                        spinning: spinning,
                        delay: 0.3
                    }, void 0, false, {
                        fileName: "[project]/app-next/app/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-next/app/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: extract,
                disabled: spinning || noEnergy,
                className: "mt-2 px-10 py-4 rounded-2xl text-black font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 shadow-[0_0_30px_#00ffff88] hover:scale-105 active:scale-95 transition disabled:opacity-40",
                children: noEnergy ? "OUT OF ENERGY" : "EXTRACT"
            }, void 0, false, {
                fileName: "[project]/app-next/app/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-6 text-lg font-medium text-cyan-300 drop-shadow",
                children: status
            }, void 0, false, {
                fileName: "[project]/app-next/app/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 text-xs tracking-widest text-cyan-300/70",
                children: [
                    "$MT ecosystem powered by",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-cyan-400",
                        children: "Futuret3ch"
                    }, void 0, false, {
                        fileName: "[project]/app-next/app/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-next/app/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-next/app/page.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(Home, "tze0DtCY0xzRTUlPThCkqyeEvnk=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app-next_19f029fa._.js.map