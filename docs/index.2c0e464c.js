/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(this, function() {
    "use strict";
    const t1 = "transitionend", e1 = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null;
        }
        return e;
    }, i1 = (t)=>{
        const i = e1(t);
        return i && document.querySelector(i) ? i : null;
    }, n1 = (t)=>{
        const i = e1(t);
        return i ? document.querySelector(i) : null;
    }, s1 = (e)=>{
        e.dispatchEvent(new Event(t1));
    }, o1 = (t)=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType)
    , r1 = (t)=>o1(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
    , a1 = (t, e, i)=>{
        Object.keys(i).forEach((n)=>{
            const s = i[n], r = e[n], a = r && o1(r) ? "element" : null == (l = r) ? `${l}` : ({
            }).toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
            var l;
            if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`);
        });
    }, l1 = (t)=>!(!o1(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
    , c1 = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
    , h1 = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? h1(t.parentNode) : null;
    }, d1 = ()=>{
    }, u1 = (t)=>{
        t.offsetHeight;
    }, f1 = ()=>{
        const { jQuery: t  } = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    }, p1 = [], m1 = ()=>"rtl" === document.documentElement.dir
    , g1 = (t2)=>{
        var e2;
        e2 = ()=>{
            const e = f1();
            if (e) {
                const i = t2.NAME, n = e.fn[i];
                e.fn[i] = t2.jQueryInterface, e.fn[i].Constructor = t2, e.fn[i].noConflict = ()=>(e.fn[i] = n, t2.jQueryInterface)
                ;
            }
        }, "loading" === document.readyState ? (p1.length || document.addEventListener("DOMContentLoaded", ()=>{
            p1.forEach((t)=>t()
            );
        }), p1.push(e2)) : e2();
    }, _1 = (t)=>{
        "function" == typeof t && t();
    }, b1 = (e3, i2, n2 = !0)=>{
        if (!n2) return void _1(e3);
        const o = ((t)=>{
            if (!t) return 0;
            let { transitionDuration: e , transitionDelay: i  } = window.getComputedStyle(t);
            const n = Number.parseFloat(e), s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1000 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(i2) + 5;
        let r = !1;
        const a = ({ target: n  })=>{
            n === i2 && (r = !0, i2.removeEventListener(t1, a), _1(e3));
        };
        i2.addEventListener(t1, a), setTimeout(()=>{
            r || s1(i2);
        }, o);
    }, v1 = (t, e, i, n)=>{
        let s = t.indexOf(e);
        if (-1 === s) return t[!i && n ? t.length - 1 : 0];
        const o = t.length;
        return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
    }, y1 = /[^.]*(?=\..*)\.|.*/, w1 = /\..*/, E1 = /::\d+$/, A1 = {
    };
    let T1 = 1;
    const O1 = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, C1 = /^(mouseenter|mouseleave)/i, k1 = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function L1(t, e) {
        return e && `${e}::${T1++}` || t.uidEvent || T1++;
    }
    function x1(t) {
        const e = L1(t);
        return t.uidEvent = e, A1[e] = A1[e] || {
        }, A1[e];
    }
    function D1(t, e, i = null) {
        const n = Object.keys(t);
        for(let s = 0, o = n.length; s < o; s++){
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o;
        }
        return null;
    }
    function S1(t, e, i) {
        const n = "string" == typeof e, s = n ? i : e;
        let o = P1(t);
        return k1.has(o) || (o = t), [
            n,
            s,
            o
        ];
    }
    function N1(t4, e4, i3, n3, s2) {
        if ("string" != typeof e4 || !t4) return;
        if (i3 || (i3 = n3, n3 = null), C1.test(e4)) {
            const t3 = (t)=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                }
            ;
            n3 ? n3 = t3(n3) : i3 = t3(i3);
        }
        const [o2, r2, a2] = S1(e4, i3, n3), l = x1(t4), c = l[a2] || (l[a2] = {
        }), h = D1(c, r2, o2 ? i3 : null);
        if (h) return void (h.oneOff = h.oneOff && s2);
        const d = L1(r2, e4.replace(y1, "")), u = o2 ? function(t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for(let { target: r  } = s; r && r !== this; r = r.parentNode)for(let a = o.length; a--;)if (o[a] === r) return s.delegateTarget = r, n.oneOff && j1.off(t, s.type, e, i), i.apply(r, [
                    s
                ]);
                return null;
            };
        }(t4, i3, n3) : function(t, e) {
            return function i(n) {
                return n.delegateTarget = t, i.oneOff && j1.off(t, n.type, e), e.apply(t, [
                    n
                ]);
            };
        }(t4, i3);
        u.delegationSelector = o2 ? i3 : null, u.originalHandler = r2, u.oneOff = s2, u.uidEvent = d, c[d] = u, t4.addEventListener(a2, u, o2);
    }
    function I1(t, e, i, n, s) {
        const o = D1(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function P1(t) {
        return t = t.replace(w1, ""), O1[t] || t;
    }
    const j1 = {
        on (t, e, i, n) {
            N1(t, e, i, n, !1);
        },
        one (t, e, i, n) {
            N1(t, e, i, n, !0);
        },
        off (t5, e5, i4, n4) {
            if ("string" != typeof e5 || !t5) return;
            const [s3, o3, r] = S1(e5, i4, n4), a = r !== e5, l = x1(t5), c = e5.startsWith(".");
            if (void 0 !== o3) {
                if (!l || !l[r]) return;
                return void I1(t5, l, r, o3, s3 ? i4 : null);
            }
            c && Object.keys(l).forEach((i5)=>{
                !function(t, e, i, n5) {
                    const s = e[i] || {
                    };
                    Object.keys(s).forEach((o)=>{
                        if (o.includes(n5)) {
                            const n = s[o];
                            I1(t, e, i, n.originalHandler, n.delegationSelector);
                        }
                    });
                }(t5, l, i5, e5.slice(1));
            });
            const h = l[r] || {
            };
            Object.keys(h).forEach((i)=>{
                const n = i.replace(E1, "");
                if (!a || e5.includes(n)) {
                    const e = h[i];
                    I1(t5, l, r, e.originalHandler, e.delegationSelector);
                }
            });
        },
        trigger (t6, e, i) {
            if ("string" != typeof e || !t6) return null;
            const n = f1(), s = P1(e), o = e !== s, r = k1.has(s);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && n && (a = n.Event(e, i), n(t6).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
                bubbles: l,
                cancelable: !0
            }), void 0 !== i && Object.keys(i).forEach((t)=>{
                Object.defineProperty(d, t, {
                    get: ()=>i[t]
                });
            }), h && d.preventDefault(), c && t6.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
        }
    }, M1 = new Map, H1 = {
        set (t, e, i) {
            M1.has(t) || M1.set(t, new Map);
            const n = M1.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
        },
        get: (t, e)=>M1.has(t) && M1.get(t).get(e) || null
        ,
        remove (t, e) {
            if (!M1.has(t)) return;
            const i = M1.get(t);
            i.delete(e), 0 === i.size && M1.delete(t);
        }
    };
    class B1 {
        constructor(t10){
            (t10 = r1(t10)) && (this._element = t10, H1.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            H1.remove(this._element, this.constructor.DATA_KEY), j1.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t)=>{
                this[t] = null;
            });
        }
        _queueCallback(t7, e7, i6 = !0) {
            b1(t7, e7, i6);
        }
        static getInstance(t8) {
            return H1.get(r1(t8), this.DATA_KEY);
        }
        static getOrCreateInstance(t9, e6 = {
        }) {
            return this.getInstance(t9) || new this(t9, "object" == typeof e6 ? e6 : null);
        }
        static get VERSION() {
            return "5.1.3";
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
    }
    const R1 = (t, e = "hide")=>{
        const i7 = `click.dismiss${t.EVENT_KEY}`, s = t.NAME;
        j1.on(document, i7, `[data-bs-dismiss="${s}"]`, function(i) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && i.preventDefault(), c1(this)) return;
            const o = n1(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(o)[e]();
        });
    };
    class W1 extends B1 {
        static get NAME() {
            return "alert";
        }
        close() {
            if (j1.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement()
            , this._element, t);
        }
        _destroyElement() {
            this._element.remove(), j1.trigger(this._element, "closed.bs.alert"), this.dispose();
        }
        static jQueryInterface(t12) {
            return this.each(function() {
                const e = W1.getOrCreateInstance(this);
                if ("string" == typeof t12) {
                    if (void 0 === e[t12] || t12.startsWith("_") || "constructor" === t12) throw new TypeError(`No method named "${t12}"`);
                    e[t12](this);
                }
            });
        }
    }
    R1(W1, "close"), g1(W1);
    const $1 = '[data-bs-toggle="button"]';
    class z1 extends B1 {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t11) {
            return this.each(function() {
                const e = z1.getOrCreateInstance(this);
                "toggle" === t11 && e[t11]();
            });
        }
    }
    function q1(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
    }
    function F1(t13) {
        return t13.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`
        );
    }
    j1.on(document, "click.bs.button.data-api", $1, (t)=>{
        t.preventDefault();
        const e = t.target.closest($1);
        z1.getOrCreateInstance(e).toggle();
    }), g1(z1);
    const U1 = {
        setDataAttribute (t, e, i) {
            t.setAttribute(`data-bs-${F1(e)}`, i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute(`data-bs-${F1(e)}`);
        },
        getDataAttributes (t14) {
            if (!t14) return {
            };
            const e = {
            };
            return Object.keys(t14.dataset).filter((t)=>t.startsWith("bs")
            ).forEach((i)=>{
                let n = i.replace(/^bs/, "");
                n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q1(t14.dataset[i]);
            }), e;
        },
        getDataAttribute: (t, e)=>q1(t.getAttribute(`data-bs-${F1(e)}`))
        ,
        offset (t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset
            };
        },
        position: (t)=>({
                top: t.offsetTop,
                left: t.offsetLeft
            })
    }, V1 = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t))
        ,
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t)
        ,
        children: (t15, e)=>[].concat(...t15.children).filter((t)=>t.matches(e)
            )
        ,
        parents (t, e) {
            const i = [];
            let n = t.parentNode;
            for(; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;)n.matches(e) && i.push(n), n = n.parentNode;
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren (t16) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((t)=>`${t}:not([tabindex^="-"])`
            ).join(", ");
            return this.find(e, t16).filter((t)=>!c1(t) && l1(t)
            );
        }
    }, K1 = "carousel", X1 = {
        interval: 5000,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, Y1 = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, Q = "next", G = "prev", Z1 = "left", J1 = "right", tt1 = {
        ArrowLeft: J1,
        ArrowRight: Z1
    }, et1 = "slid.bs.carousel", it = "active", nt = ".active.carousel-item";
    class st extends B1 {
        constructor(t21, e9){
            super(t21), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e9), this._indicatorsElement = V1.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
        }
        static get Default() {
            return X1;
        }
        static get NAME() {
            return K1;
        }
        next() {
            this._slide(Q);
        }
        nextWhenVisible() {
            !document.hidden && l1(this._element) && this.next();
        }
        prev() {
            this._slide(G);
        }
        pause(t17) {
            t17 || (this._isPaused = !0), V1.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (s1(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }
        cycle(t18) {
            t18 || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }
        to(t19) {
            this._activeElement = V1.findOne(nt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t19 > this._items.length - 1 || t19 < 0) return;
            if (this._isSliding) return void j1.one(this._element, et1, ()=>this.to(t19)
            );
            if (e === t19) return this.pause(), void this.cycle();
            const i = t19 > e ? Q : G;
            this._slide(i, this._items[t19]);
        }
        _getConfig(t20) {
            return t20 = {
                ...X1,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t20 ? t20 : {
                }
            }, a1(K1, t20, Y1), t20;
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? J1 : Z1);
        }
        _addEventListeners() {
            this._config.keyboard && j1.on(this._element, "keydown.bs.carousel", (t)=>this._keydown(t)
            ), "hover" === this._config.pause && (j1.on(this._element, "mouseenter.bs.carousel", (t)=>this.pause(t)
            ), j1.on(this._element, "mouseleave.bs.carousel", (t)=>this.cycle(t)
            )), this._config.touch && this._touchSupported && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const t22 = (t)=>this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType)
            , e8 = (e)=>{
                t22(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
            }, i = (t)=>{
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX;
            }, n = (e)=>{
                t22(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t)=>this.cycle(t)
                , 500 + this._config.interval));
            };
            V1.find(".carousel-item img", this._element).forEach((t23)=>{
                j1.on(t23, "dragstart.bs.carousel", (t)=>t.preventDefault()
                );
            }), this._pointerEvent ? (j1.on(this._element, "pointerdown.bs.carousel", (t)=>e8(t)
            ), j1.on(this._element, "pointerup.bs.carousel", (t)=>n(t)
            ), this._element.classList.add("pointer-event")) : (j1.on(this._element, "touchstart.bs.carousel", (t)=>e8(t)
            ), j1.on(this._element, "touchmove.bs.carousel", (t)=>i(t)
            ), j1.on(this._element, "touchend.bs.carousel", (t)=>n(t)
            ));
        }
        _keydown(t34) {
            if (/input|textarea/i.test(t34.target.tagName)) return;
            const e = tt1[t34.key];
            e && (t34.preventDefault(), this._slide(e));
        }
        _getItemIndex(t24) {
            return this._items = t24 && t24.parentNode ? V1.find(".carousel-item", t24.parentNode) : [], this._items.indexOf(t24);
        }
        _getItemByOrder(t25, e14) {
            const i = t25 === Q;
            return v1(this._items, e14, i, this._config.wrap);
        }
        _triggerSlideEvent(t26, e10) {
            const i = this._getItemIndex(t26), n = this._getItemIndex(V1.findOne(nt, this._element));
            return j1.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t26,
                direction: e10,
                from: n,
                to: i
            });
        }
        _setActiveIndicatorElement(t27) {
            if (this._indicatorsElement) {
                const e = V1.findOne(".active", this._indicatorsElement);
                e.classList.remove(it), e.removeAttribute("aria-current");
                const i = V1.find("[data-bs-target]", this._indicatorsElement);
                for(let e11 = 0; e11 < i.length; e11++)if (Number.parseInt(i[e11].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t27)) {
                    i[e11].classList.add(it), i[e11].setAttribute("aria-current", "true");
                    break;
                }
            }
        }
        _updateInterval() {
            const t = this._activeElement || V1.findOne(nt, this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
        }
        _slide(t28, e12) {
            const i = this._directionToOrder(t28), n = V1.findOne(nt, this._element), s = this._getItemIndex(n), o = e12 || this._getItemByOrder(i, n), r = this._getItemIndex(o), a = Boolean(this._interval), l = i === Q, c = l ? "carousel-item-start" : "carousel-item-end", h = l ? "carousel-item-next" : "carousel-item-prev", d = this._orderToDirection(i);
            if (o && o.classList.contains(it)) return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(o, d).defaultPrevented) return;
            if (!n || !o) return;
            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
            const f = ()=>{
                j1.trigger(this._element, et1, {
                    relatedTarget: o,
                    direction: d,
                    from: s,
                    to: r
                });
            };
            if (this._element.classList.contains("slide")) {
                o.classList.add(h), u1(o), n.classList.add(c), o.classList.add(c);
                const t = ()=>{
                    o.classList.remove(c, h), o.classList.add(it), n.classList.remove(it, h, c), this._isSliding = !1, setTimeout(f, 0);
                };
                this._queueCallback(t, n, !0);
            } else n.classList.remove(it), o.classList.add(it), this._isSliding = !1, f();
            a && this.cycle();
        }
        _directionToOrder(t29) {
            return [
                J1,
                Z1
            ].includes(t29) ? m1() ? t29 === Z1 ? G : Q : t29 === Z1 ? Q : G : t29;
        }
        _orderToDirection(t30) {
            return [
                Q,
                G
            ].includes(t30) ? m1() ? t30 === G ? Z1 : J1 : t30 === G ? J1 : Z1 : t30;
        }
        static carouselInterface(t31, e13) {
            const i = st.getOrCreateInstance(t31, e13);
            let { _config: n  } = i;
            "object" == typeof e13 && (n = {
                ...n,
                ...e13
            });
            const s = "string" == typeof e13 ? e13 : n.slide;
            if ("number" == typeof e13) i.to(e13);
            else if ("string" == typeof s) {
                if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                i[s]();
            } else n.interval && n.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(t32) {
            return this.each(function() {
                st.carouselInterface(this, t32);
            });
        }
        static dataApiClickHandler(t33) {
            const e = n1(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = {
                ...U1.getDataAttributes(e),
                ...U1.getDataAttributes(this)
            }, s = this.getAttribute("data-bs-slide-to");
            s && (i.interval = !1), st.carouselInterface(e, i), s && st.getInstance(e).to(s), t33.preventDefault();
        }
    }
    j1.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", st.dataApiClickHandler), j1.on(window, "load.bs.carousel.data-api", ()=>{
        const t = V1.find('[data-bs-ride="carousel"]');
        for(let e = 0, i = t.length; e < i; e++)st.carouselInterface(t[e], st.getInstance(t[e]));
    }), g1(st);
    const ot = "collapse", rt = {
        toggle: !0,
        parent: null
    }, at = {
        toggle: "boolean",
        parent: "(null|element)"
    }, lt = "show", ct = "collapse", ht = "collapsing", dt = "collapsed", ut = ":scope .collapse .collapse", ft = '[data-bs-toggle="collapse"]';
    class pt extends B1 {
        constructor(t36, e17){
            super(t36), this._isTransitioning = !1, this._config = this._getConfig(e17), this._triggerArray = [];
            const n = V1.find(ft);
            for(let t35 = 0, e15 = n.length; t35 < e15; t35++){
                const e15 = n[t35], s = i1(e15), o = V1.find(s).filter((t)=>t === this._element
                );
                null !== s && o.length && (this._selector = s, this._triggerArray.push(e15));
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return rt;
        }
        static get NAME() {
            return ot;
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t37, e16 = [];
            if (this._config.parent) {
                const t = V1.find(ut, this._config.parent);
                e16 = V1.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e)=>!t.includes(e)
                );
            }
            const i = V1.findOne(this._selector);
            if (e16.length) {
                const n = e16.find((t)=>i !== t
                );
                if (t37 = n ? pt.getInstance(n) : null, t37 && t37._isTransitioning) return;
            }
            if (j1.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            e16.forEach((e)=>{
                i !== e && pt.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(), t37 || H1.set(e, "bs.collapse", null);
            });
            const n = this._getDimension();
            this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[n] = "", j1.trigger(this._element, "shown.bs.collapse");
            }, this._element, !0), this._element.style[n] = `${this._element[s]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (j1.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, u1(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
            const e = this._triggerArray.length;
            for(let t38 = 0; t38 < e; t38++){
                const e = this._triggerArray[t38], i = n1(e);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([
                    e
                ], !1);
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct), j1.trigger(this._element, "hidden.bs.collapse");
            }, this._element, !0);
        }
        _isShown(t41 = this._element) {
            return t41.classList.contains(lt);
        }
        _getConfig(t39) {
            return (t39 = {
                ...rt,
                ...U1.getDataAttributes(this._element),
                ...t39
            }).toggle = Boolean(t39.toggle), t39.parent = r1(t39.parent), a1(ot, t39, at), t39;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t40 = V1.find(ut, this._config.parent);
            V1.find(ft, this._config.parent).filter((e)=>!t40.includes(e)
            ).forEach((t)=>{
                const e = n1(t);
                e && this._addAriaAndCollapsedClass([
                    t
                ], this._isShown(e));
            });
        }
        _addAriaAndCollapsedClass(t42, e18) {
            t42.length && t42.forEach((t)=>{
                e18 ? t.classList.remove(dt) : t.classList.add(dt), t.setAttribute("aria-expanded", e18);
            });
        }
        static jQueryInterface(t43) {
            return this.each(function() {
                const e = {
                };
                "string" == typeof t43 && /show|hide/.test(t43) && (e.toggle = !1);
                const i = pt.getOrCreateInstance(this, e);
                if ("string" == typeof t43) {
                    if (void 0 === i[t43]) throw new TypeError(`No method named "${t43}"`);
                    i[t43]();
                }
            });
        }
    }
    j1.on(document, "click.bs.collapse.data-api", ft, function(t44) {
        ("A" === t44.target.tagName || t44.delegateTarget && "A" === t44.delegateTarget.tagName) && t44.preventDefault();
        const e = i1(this);
        V1.find(e).forEach((t)=>{
            pt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle();
        });
    }), g1(pt);
    var mt = "top", gt = "bottom", _t = "right", bt = "left", vt = "auto", yt = [
        mt,
        gt,
        _t,
        bt
    ], wt = "start", Et = "end", At = "clippingParents", Tt = "viewport", Ot = "popper", Ct = "reference", kt = yt.reduce(function(t, e) {
        return t.concat([
            e + "-" + wt,
            e + "-" + Et
        ]);
    }, []), Lt = [].concat(yt, [
        vt
    ]).reduce(function(t, e) {
        return t.concat([
            e,
            e + "-" + wt,
            e + "-" + Et
        ]);
    }, []), xt = "beforeRead", Dt = "read", St = "afterRead", Nt = "beforeMain", It = "main", Pt = "afterMain", jt = "beforeWrite", Mt = "write", Ht = "afterWrite", Bt = [
        xt,
        Dt,
        St,
        Nt,
        It,
        Pt,
        jt,
        Mt,
        Ht
    ];
    function Rt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function Wt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window;
        }
        return t;
    }
    function $t(t) {
        return t instanceof Wt(t).Element || t instanceof Element;
    }
    function zt(t) {
        return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement;
    }
    function qt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot);
    }
    const Ft = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t45) {
            var e19 = t45.state;
            Object.keys(e19.elements).forEach(function(t46) {
                var i = e19.styles[t46] || {
                }, n = e19.attributes[t46] || {
                }, s = e19.elements[t46];
                zt(s) && Rt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                }));
            });
        },
        effect: function(t47) {
            var e = t47.state, i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {
                }
            };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function() {
                Object.keys(e.elements).forEach(function(t48) {
                    var n = e.elements[t48], s = e.attributes[t48] || {
                    }, o = Object.keys(e.styles.hasOwnProperty(t48) ? e.styles[t48] : i[t48]).reduce(function(t, e) {
                        return t[e] = "", t;
                    }, {
                    });
                    zt(n) && Rt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function(t) {
                        n.removeAttribute(t);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    function Ut(t) {
        return t.split("-")[0];
    }
    function Vt(t, e) {
        var i = t.getBoundingClientRect();
        return {
            width: i.width / 1,
            height: i.height / 1,
            top: i.top / 1,
            right: i.right / 1,
            bottom: i.bottom / 1,
            left: i.left / 1,
            x: i.left / 1,
            y: i.top / 1
        };
    }
    function Kt(t) {
        var e = Vt(t), i = t.offsetWidth, n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        };
    }
    function Xt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && qt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            }while (n)
        }
        return !1;
    }
    function Yt(t) {
        return Wt(t).getComputedStyle(t);
    }
    function Qt(t) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(Rt(t)) >= 0;
    }
    function Gt(t) {
        return (($t(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function Zt(t) {
        return "html" === Rt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || Gt(t);
    }
    function Jt(t) {
        return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null;
    }
    function te(t49) {
        for(var e20 = Wt(t49), i8 = Jt(t49); i8 && Qt(i8) && "static" === Yt(i8).position;)i8 = Jt(i8);
        return i8 && ("html" === Rt(i8) || "body" === Rt(i8) && "static" === Yt(i8).position) ? e20 : i8 || (function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t) && "fixed" === Yt(t).position) return null;
            for(var i = Zt(t); zt(i) && [
                "html",
                "body"
            ].indexOf(Rt(i)) < 0;){
                var n = Yt(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode;
            }
            return null;
        })(t49) || e20;
    }
    function ee(t) {
        return [
            "top",
            "bottom"
        ].indexOf(t) >= 0 ? "x" : "y";
    }
    var ie = Math.max, ne = Math.min, se = Math.round;
    function oe(t, e, i) {
        return ie(t, ne(e, i));
    }
    function re(t) {
        return Object.assign({
        }, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t);
    }
    function ae(t, e21) {
        return e21.reduce(function(e, i) {
            return e[i] = t, e;
        }, {
        });
    }
    const le = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t50) {
            var e22, i = t50.state, n = t50.name, s = t50.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = Ut(i.placement), l = ee(a), c = [
                bt,
                _t
            ].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                    return re("number" != typeof (t = "function" == typeof t ? t(Object.assign({
                    }, e.rects, {
                        placement: e.placement
                    })) : t) ? t : ae(t, yt));
                }(s.padding, i), d = Kt(o), u = "y" === l ? mt : bt, f = "y" === l ? gt : _t, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], m = r[l] - i.rects.reference[l], g = te(o), _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = p / 2 - m / 2, v = h[u], y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, E = oe(v, w, y), A = l;
                i.modifiersData[n] = ((e22 = {
                })[A] = E, e22.centerOffset = E - w, e22);
            }
        },
        effect: function(t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Xt(e.elements.popper, n) && (e.elements.arrow = n);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function ce(t) {
        return t.split("-")[1];
    }
    var he = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function de(t51) {
        var e23, i9 = t51.popper, n6 = t51.popperRect, s = t51.placement, o = t51.variation, r = t51.offsets, a = t51.position, l = t51.gpuAcceleration, c = t51.adaptive, h = t51.roundOffsets, d = !0 === h ? function(t) {
            var e = t.x, i = t.y, n = window.devicePixelRatio || 1;
            return {
                x: se(se(e * n) / n) || 0,
                y: se(se(i * n) / n) || 0
            };
        }(r) : "function" == typeof h ? h(r) : r, u = d.x, f = void 0 === u ? 0 : u, p = d.y, m = void 0 === p ? 0 : p, g = r.hasOwnProperty("x"), _ = r.hasOwnProperty("y"), b = bt, v = mt, y = window;
        if (c) {
            var w = te(i9), E = "clientHeight", A = "clientWidth";
            w === Wt(i9) && "static" !== Yt(w = Gt(i9)).position && "absolute" === a && (E = "scrollHeight", A = "scrollWidth"), s !== mt && (s !== bt && s !== _t || o !== Et) || (v = gt, m -= w[E] - n6.height, m *= l ? 1 : -1), s !== bt && (s !== mt && s !== gt || o !== Et) || (b = _t, f -= w[A] - n6.width, f *= l ? 1 : -1);
        }
        var T, O = Object.assign({
            position: a
        }, c && he);
        return l ? Object.assign({
        }, O, ((T = {
        })[v] = _ ? "0" : "", T[b] = g ? "0" : "", T.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T)) : Object.assign({
        }, O, ((e23 = {
        })[v] = _ ? m + "px" : "", e23[b] = g ? f + "px" : "", e23.transform = "", e23));
    }
    const ue = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                placement: Ut(e.placement),
                variation: ce(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({
            }, e.styles.popper, de(Object.assign({
            }, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({
            }, e.styles.arrow, de(Object.assign({
            }, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({
            }, e.attributes.popper, {
                "data-popper-placement": e.placement
            });
        },
        data: {
        }
    };
    var fe = {
        passive: !0
    };
    const pe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {
        },
        effect: function(t52) {
            var e = t52.state, i = t52.instance, n = t52.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = Wt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function(t) {
                t.addEventListener("scroll", i.update, fe);
            }), a && l.addEventListener("resize", i.update, fe), function() {
                o && c.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, fe);
                }), a && l.removeEventListener("resize", i.update, fe);
            };
        },
        data: {
        }
    };
    var me = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function ge(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return me[t];
        });
    }
    var _e = {
        start: "end",
        end: "start"
    };
    function be(t) {
        return t.replace(/start|end/g, function(t) {
            return _e[t];
        });
    }
    function ve(t) {
        var e = Wt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        };
    }
    function ye(t) {
        return Vt(Gt(t)).left + ve(t).scrollLeft;
    }
    function we(t) {
        var e = Yt(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Ee(t) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(Rt(t)) >= 0 ? t.ownerDocument.body : zt(t) && we(t) ? t : Ee(Zt(t));
    }
    function Ae(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ee(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = Wt(n), r = s ? [
            o
        ].concat(o.visualViewport || [], we(n) ? n : []) : n, a = e.concat(r);
        return s ? a : a.concat(Ae(Zt(r)));
    }
    function Te(t) {
        return Object.assign({
        }, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        });
    }
    function Oe(t53, e24) {
        return e24 === Tt ? Te(function(t) {
            var e = Wt(t), i = Gt(t), n = e.visualViewport, s = i.clientWidth, o = i.clientHeight, r = 0, a = 0;
            return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                width: s,
                height: o,
                x: r + ye(t),
                y: a
            };
        }(t53)) : zt(e24) ? (function(t) {
            var e = Vt(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
        })(e24) : Te(function(t) {
            var e, i = Gt(t), n = ve(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = ie(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = ie(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + ye(t), l = -n.scrollTop;
            return "rtl" === Yt(s || i).direction && (a += ie(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            };
        }(Gt(t53)));
    }
    function Ce(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? Ut(s) : null, r = s ? ce(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch(o){
            case mt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case gt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case _t:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case bt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                };
        }
        var c = o ? ee(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch(r){
                case wt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Et:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function ke(t54, e25) {
        void 0 === e25 && (e25 = {
        });
        var i10 = e25, n7 = i10.placement, s4 = void 0 === n7 ? t54.placement : n7, o4 = i10.boundary, r3 = void 0 === o4 ? At : o4, a = i10.rootBoundary, l = void 0 === a ? Tt : a, c = i10.elementContext, h = void 0 === c ? Ot : c, d = i10.altBoundary, u = void 0 !== d && d, f = i10.padding, p = void 0 === f ? 0 : f, m = re("number" != typeof p ? p : ae(p, yt)), g = h === Ot ? Ct : Ot, _ = t54.rects.popper, b = t54.elements[u ? g : h], v = function(t55, e26, i11) {
            var n8 = "clippingParents" === e26 ? function(t56) {
                var e = Ae(Zt(t56)), i = [
                    "absolute",
                    "fixed"
                ].indexOf(Yt(t56).position) >= 0 && zt(t56) ? te(t56) : t56;
                return $t(i) ? e.filter(function(t) {
                    return $t(t) && Xt(t, i) && "body" !== Rt(t);
                }) : [];
            }(t55) : [].concat(e26), s = [].concat(n8, [
                i11
            ]), o = s[0], r = s.reduce(function(e, i) {
                var n = Oe(t55, i);
                return e.top = ie(n.top, e.top), e.right = ne(n.right, e.right), e.bottom = ne(n.bottom, e.bottom), e.left = ie(n.left, e.left), e;
            }, Oe(t55, o));
            return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
        }($t(b) ? b : b.contextElement || Gt(t54.elements.popper), r3, l), y = Vt(t54.elements.reference), w = Ce({
            reference: y,
            element: _,
            strategy: "absolute",
            placement: s4
        }), E = Te(Object.assign({
        }, _, w)), A = h === Ot ? E : y, T = {
            top: v.top - A.top + m.top,
            bottom: A.bottom - v.bottom + m.bottom,
            left: v.left - A.left + m.left,
            right: A.right - v.right + m.right
        }, O = t54.modifiersData.offset;
        if (h === Ot && O) {
            var C = O[s4];
            Object.keys(T).forEach(function(t) {
                var e = [
                    _t,
                    gt
                ].indexOf(t) >= 0 ? 1 : -1, i = [
                    mt,
                    gt
                ].indexOf(t) >= 0 ? "y" : "x";
                T[t] += C[i] * e;
            });
        }
        return T;
    }
    function Le(t57, e27) {
        void 0 === e27 && (e27 = {
        });
        var i12 = e27, n = i12.placement, s = i12.boundary, o = i12.rootBoundary, r = i12.padding, a = i12.flipVariations, l = i12.allowedAutoPlacements, c = void 0 === l ? Lt : l, h = ce(n), d = h ? a ? kt : kt.filter(function(t) {
            return ce(t) === h;
        }) : yt, u = d.filter(function(t) {
            return c.indexOf(t) >= 0;
        });
        0 === u.length && (u = d);
        var f = u.reduce(function(e, i) {
            return e[i] = ke(t57, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[Ut(i)], e;
        }, {
        });
        return Object.keys(f).sort(function(t, e) {
            return f[t] - f[e];
        });
    }
    const xe = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t58) {
            var e28 = t58.state, i13 = t58.options, n = t58.name;
            if (!e28.modifiersData[n]._skip) {
                for(var s = i13.mainAxis, o = void 0 === s || s, r = i13.altAxis, a = void 0 === r || r, l = i13.fallbackPlacements, c = i13.padding, h = i13.boundary, d = i13.rootBoundary, u = i13.altBoundary, f = i13.flipVariations, p = void 0 === f || f, m = i13.allowedAutoPlacements, g = e28.options.placement, _ = Ut(g), b = l || (_ !== g && p ? function(t) {
                    if (Ut(t) === vt) return [];
                    var e = ge(t);
                    return [
                        be(t),
                        e,
                        be(e)
                    ];
                }(g) : [
                    ge(g)
                ]), v = [
                    g
                ].concat(b).reduce(function(t, i) {
                    return t.concat(Ut(i) === vt ? Le(e28, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: m
                    }) : i);
                }, []), y = e28.rects.reference, w = e28.rects.popper, E = new Map, A = !0, T = v[0], O = 0; O < v.length; O++){
                    var C = v[O], k = Ut(C), L = ce(C) === wt, x = [
                        mt,
                        gt
                    ].indexOf(k) >= 0, D = x ? "width" : "height", S = ke(e28, {
                        placement: C,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c
                    }), N = x ? L ? _t : bt : L ? gt : mt;
                    y[D] > w[D] && (N = ge(N));
                    var I = ge(N), P = [];
                    if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[I] <= 0), P.every(function(t) {
                        return t;
                    })) {
                        T = C, A = !1;
                        break;
                    }
                    E.set(C, P);
                }
                if (A) for(var j = function(t59) {
                    var e29 = v.find(function(e) {
                        var i = E.get(e);
                        if (i) return i.slice(0, t59).every(function(t) {
                            return t;
                        });
                    });
                    if (e29) return T = e29, "break";
                }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--);
                e28.placement !== T && (e28.modifiersData[n]._skip = !0, e28.placement = T, e28.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function De(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        };
    }
    function Se(t) {
        return [
            mt,
            _t,
            gt,
            bt
        ].some(function(e) {
            return t[e] >= 0;
        });
    }
    const Ne = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = ke(e, {
                elementContext: "reference"
            }), a = ke(e, {
                altBoundary: !0
            }), l = De(r, n), c = De(a, s, o), h = Se(l), d = Se(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            }, e.attributes.popper = Object.assign({
            }, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            });
        }
    }, Ie = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(t60) {
            var e30 = t60.state, i14 = t60.options, n9 = t60.name, s5 = i14.offset, o5 = void 0 === s5 ? [
                0,
                0
            ] : s5, r4 = Lt.reduce(function(t61, i15) {
                return t61[i15] = (function(t, e, i) {
                    var n = Ut(t), s = [
                        bt,
                        mt
                    ].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({
                    }, e, {
                        placement: t
                    })) : i, r = o[0], a = o[1];
                    return r = r || 0, a = (a || 0) * s, [
                        bt,
                        _t
                    ].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    };
                })(i15, e30.rects, o5), t61;
            }, {
            }), a3 = r4[e30.placement], l = a3.x, c = a3.y;
            null != e30.modifiersData.popperOffsets && (e30.modifiersData.popperOffsets.x += l, e30.modifiersData.popperOffsets.y += c), e30.modifiersData[n9] = r4;
        }
    }, Pe = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = Ce({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            });
        },
        data: {
        }
    }, je = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, m = void 0 === p ? 0 : p, g = ke(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h
            }), _ = Ut(e.placement), b = ce(e.placement), v = !b, y = ee(_), w = "x" === y ? "y" : "x", E = e.modifiersData.popperOffsets, A = e.rects.reference, T = e.rects.popper, O = "function" == typeof m ? m(Object.assign({
            }, e.rects, {
                placement: e.placement
            })) : m, C = {
                x: 0,
                y: 0
            };
            if (E) {
                if (o || a) {
                    var k = "y" === y ? mt : bt, L = "y" === y ? gt : _t, x = "y" === y ? "height" : "width", D = E[y], S = E[y] + g[k], N = E[y] - g[L], I = f ? -T[x] / 2 : 0, P = b === wt ? A[x] : T[x], j = b === wt ? -T[x] : -A[x], M = e.elements.arrow, H = f && M ? Kt(M) : {
                        width: 0,
                        height: 0
                    }, B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, R = B[k], W = B[L], $ = oe(0, A[x], H[x]), z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O, q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O, F = e.elements.arrow && te(e.elements.arrow), U = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0, V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0, K = E[y] + z - V - U, X = E[y] + q - V;
                    if (o) {
                        var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
                        E[y] = Y, C[y] = Y - D;
                    }
                    if (a) {
                        var Q = "x" === y ? mt : bt, G = "x" === y ? gt : _t, Z = E[w], J = Z + g[Q], tt = Z - g[G], et = oe(f ? ne(J, K) : J, Z, f ? ie(tt, X) : tt);
                        E[w] = et, C[w] = et - Z;
                    }
                }
                e.modifiersData[n] = C;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    function Me(t62, e31, i) {
        void 0 === i && (i = !1);
        var n = zt(e31);
        zt(e31) && (function(t) {
            var e = t.getBoundingClientRect();
            e.width, t.offsetWidth, e.height, t.offsetHeight;
        })(e31);
        var s, o, r = Gt(e31), a = Vt(t62), l = {
            scrollLeft: 0,
            scrollTop: 0
        }, c = {
            x: 0,
            y: 0
        };
        return (n || !n && !i) && (("body" !== Rt(e31) || we(r)) && (l = (s = e31) !== Wt(s) && zt(s) ? {
            scrollLeft: (o = s).scrollLeft,
            scrollTop: o.scrollTop
        } : ve(s)), zt(e31) ? ((c = Vt(e31)).x += e31.clientLeft, c.y += e31.clientTop) : r && (c.x = ye(r))), {
            x: a.left + l.scrollLeft - c.x,
            y: a.top + l.scrollTop - c.y,
            width: a.width,
            height: a.height
        };
    }
    function He(t63) {
        var e = new Map, i = new Set, n10 = [];
        function s(t64) {
            i.add(t64.name), [].concat(t64.requires || [], t64.requiresIfExists || []).forEach(function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n);
                }
            }), n10.push(t64);
        }
        return t63.forEach(function(t) {
            e.set(t.name, t);
        }), t63.forEach(function(t) {
            i.has(t.name) || s(t);
        }), n10;
    }
    var Be = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Re() {
        for(var t65 = arguments.length, e = new Array(t65), i = 0; i < t65; i++)e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function We(t66) {
        void 0 === t66 && (t66 = {
        });
        var e32 = t66, i16 = e32.defaultModifiers, n11 = void 0 === i16 ? [] : i16, s6 = e32.defaultOptions, o6 = void 0 === s6 ? Be : s6;
        return function(t67, e33, i17) {
            void 0 === i17 && (i17 = o6);
            var s7, r5, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({
                }, Be, o6),
                modifiersData: {
                },
                elements: {
                    reference: t67,
                    popper: e33
                },
                attributes: {
                },
                styles: {
                }
            }, l2 = [], c2 = !1, h = {
                state: a,
                setOptions: function(i18) {
                    var s8 = "function" == typeof i18 ? i18(a.options) : i18;
                    d2(), a.options = Object.assign({
                    }, o6, a.options, s8), a.scrollParents = {
                        reference: $t(t67) ? Ae(t67) : t67.contextElement ? Ae(t67.contextElement) : [],
                        popper: Ae(e33)
                    };
                    var r, c, u = function(t68) {
                        var e = He(t68);
                        return Bt.reduce(function(t69, i) {
                            return t69.concat(e.filter(function(t) {
                                return t.phase === i;
                            }));
                        }, []);
                    }((r = [].concat(n11, a.options.modifiers), c = r.reduce(function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({
                        }, i, e, {
                            options: Object.assign({
                            }, i.options, e.options),
                            data: Object.assign({
                            }, i.data, e.data)
                        }) : e, t;
                    }, {
                    }), Object.keys(c).map(function(t) {
                        return c[t];
                    })));
                    return a.orderedModifiers = u.filter(function(t) {
                        return t.enabled;
                    }), a.orderedModifiers.forEach(function(t) {
                        var e = t.name, i = t.options, n = void 0 === i ? {
                        } : i, s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l2.push(o || function() {
                            });
                        }
                    }), h.update();
                },
                forceUpdate: function() {
                    if (!c2) {
                        var t70 = a.elements, e = t70.reference, i = t70.popper;
                        if (Re(e, i)) {
                            a.rects = {
                                reference: Me(e, te(i), "fixed" === a.options.strategy),
                                popper: Kt(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                                return a.modifiersData[t.name] = Object.assign({
                                }, t.data);
                            });
                            for(var n = 0; n < a.orderedModifiers.length; n++)if (!0 !== a.reset) {
                                var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {
                                } : r, d = s.name;
                                "function" == typeof o && (a = o({
                                    state: a,
                                    options: l,
                                    name: d,
                                    instance: h
                                }) || a);
                            } else a.reset = !1, n = -1;
                        }
                    }
                },
                update: (s7 = function() {
                    return new Promise(function(t) {
                        h.forceUpdate(), t(a);
                    });
                }, function() {
                    return r5 || (r5 = new Promise(function(t) {
                        Promise.resolve().then(function() {
                            r5 = void 0, t(s7());
                        });
                    })), r5;
                }),
                destroy: function() {
                    d2(), c2 = !0;
                }
            };
            if (!Re(t67, e33)) return h;
            function d2() {
                l2.forEach(function(t) {
                    return t();
                }), l2 = [];
            }
            return h.setOptions(i17).then(function(t) {
                !c2 && i17.onFirstUpdate && i17.onFirstUpdate(t);
            }), h;
        };
    }
    var $e = We(), ze = We({
        defaultModifiers: [
            pe,
            Pe,
            ue,
            Ft
        ]
    }), qe = We({
        defaultModifiers: [
            pe,
            Pe,
            ue,
            Ft,
            Ie,
            xe,
            je,
            le,
            Ne
        ]
    });
    const Fe = Object.freeze({
        __proto__: null,
        popperGenerator: We,
        detectOverflow: ke,
        createPopperBase: $e,
        createPopper: qe,
        createPopperLite: ze,
        top: mt,
        bottom: gt,
        right: _t,
        left: bt,
        auto: vt,
        basePlacements: yt,
        start: wt,
        end: Et,
        clippingParents: At,
        viewport: Tt,
        popper: Ot,
        reference: Ct,
        variationPlacements: kt,
        placements: Lt,
        beforeRead: xt,
        read: Dt,
        afterRead: St,
        beforeMain: Nt,
        main: It,
        afterMain: Pt,
        beforeWrite: jt,
        write: Mt,
        afterWrite: Ht,
        modifierPhases: Bt,
        applyStyles: Ft,
        arrow: le,
        computeStyles: ue,
        eventListeners: pe,
        flip: xe,
        hide: Ne,
        offset: Ie,
        popperOffsets: Pe,
        preventOverflow: je
    }), Ue = "dropdown", Ve = "Escape", Ke = "Space", Xe = "ArrowUp", Ye = "ArrowDown", Qe = new RegExp("ArrowUp|ArrowDown|Escape"), Ge = "click.bs.dropdown.data-api", Ze = "keydown.bs.dropdown.data-api", Je = "show", ti = '[data-bs-toggle="dropdown"]', ei = ".dropdown-menu", ii = m1() ? "top-end" : "top-start", ni = m1() ? "top-start" : "top-end", si = m1() ? "bottom-end" : "bottom-start", oi = m1() ? "bottom-start" : "bottom-end", ri = m1() ? "left-start" : "right-start", ai = m1() ? "right-start" : "left-start", li = {
        offset: [
            0,
            2
        ],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }, ci = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class hi extends B1 {
        constructor(t73, e34){
            super(t73), this._popper = null, this._config = this._getConfig(e34), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
            return li;
        }
        static get DefaultType() {
            return ci;
        }
        static get NAME() {
            return Ue;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (c1(this._element) || this._isShown(this._menu)) return;
            const t71 = {
                relatedTarget: this._element
            };
            if (j1.trigger(this._element, "show.bs.dropdown", t71).defaultPrevented) return;
            const e = hi.getParentFromElement(this._element);
            this._inNavbar ? U1.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t)=>j1.on(t, "mouseover", d1)
            ), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), j1.trigger(this._element, "shown.bs.dropdown", t71);
        }
        hide() {
            if (c1(this._element) || !this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t72) {
            j1.trigger(this._element, "hide.bs.dropdown", t72).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>j1.off(t, "mouseover", d1)
            ), this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), U1.removeDataAttribute(this._menu, "popper"), j1.trigger(this._element, "hidden.bs.dropdown", t72));
        }
        _getConfig(t75) {
            if (t75 = {
                ...this.constructor.Default,
                ...U1.getDataAttributes(this._element),
                ...t75
            }, a1(Ue, t75, this.constructor.DefaultType), "object" == typeof t75.reference && !o1(t75.reference) && "function" != typeof t75.reference.getBoundingClientRect) throw new TypeError(`${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t75;
        }
        _createPopper(t74) {
            if (void 0 === Fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t74 : o1(this._config.reference) ? e = r1(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const i = this._getPopperConfig(), n = i.modifiers.find((t)=>"applyStyles" === t.name && !1 === t.enabled
            );
            this._popper = qe(e, this._menu, i), n && U1.setDataAttribute(this._menu, "popper", "static");
        }
        _isShown(t82 = this._element) {
            return t82.classList.contains(Je);
        }
        _getMenuElement() {
            return V1.next(this._element, ei)[0];
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ri;
            if (t.classList.contains("dropstart")) return ai;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t76  } = this._config;
            return "string" == typeof t76 ? t76.split(",").map((t)=>Number.parseInt(t, 10)
            ) : "function" == typeof t76 ? (e)=>t76(e, this._element)
             : t76;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return "static" === this._config.display && (t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            };
        }
        _selectMenuItem({ key: t77 , target: e35  }) {
            const i = V1.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l1);
            i.length && v1(i, e35, t77 === Ye, !i.includes(e35)).focus();
        }
        static jQueryInterface(t78) {
            return this.each(function() {
                const e = hi.getOrCreateInstance(this, t78);
                if ("string" == typeof t78) {
                    if (void 0 === e[t78]) throw new TypeError(`No method named "${t78}"`);
                    e[t78]();
                }
            });
        }
        static clearMenus(t79) {
            if (t79 && (2 === t79.button || "keyup" === t79.type && "Tab" !== t79.key)) return;
            const e = V1.find(ti);
            for(let i = 0, n = e.length; i < n; i++){
                const n = hi.getInstance(e[i]);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._isShown()) continue;
                const s = {
                    relatedTarget: n._element
                };
                if (t79) {
                    const e = t79.composedPath(), i = e.includes(n._menu);
                    if (e.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
                    if (n._menu.contains(t79.target) && ("keyup" === t79.type && "Tab" === t79.key || /input|select|option|textarea|form/i.test(t79.target.tagName))) continue;
                    "click" === t79.type && (s.clickEvent = t79);
                }
                n._completeHide(s);
            }
        }
        static getParentFromElement(t80) {
            return n1(t80) || t80.parentNode;
        }
        static dataApiKeydownHandler(t81) {
            if (/input|textarea/i.test(t81.target.tagName) ? t81.key === Ke || t81.key !== Ve && (t81.key !== Ye && t81.key !== Xe || t81.target.closest(ei)) : !Qe.test(t81.key)) return;
            const e = this.classList.contains(Je);
            if (!e && t81.key === Ve) return;
            if (t81.preventDefault(), t81.stopPropagation(), c1(this)) return;
            const i = this.matches(ti) ? this : V1.prev(this, ti)[0], n = hi.getOrCreateInstance(i);
            if (t81.key !== Ve) return t81.key === Xe || t81.key === Ye ? (e || n.show(), void n._selectMenuItem(t81)) : void (e && t81.key !== Ke || hi.clearMenus());
            n.hide();
        }
    }
    j1.on(document, Ze, ti, hi.dataApiKeydownHandler), j1.on(document, Ze, ei, hi.dataApiKeydownHandler), j1.on(document, Ge, hi.clearMenus), j1.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), j1.on(document, Ge, ti, function(t) {
        t.preventDefault(), hi.getOrCreateInstance(this).toggle();
    }), g1(hi);
    const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ui = ".sticky-top";
    class fi {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e)=>e + t
            ), this._setElementAttributes(di, "paddingRight", (e)=>e + t
            ), this._setElementAttributes(ui, "marginRight", (e)=>e - t
            );
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t83, e41, i19) {
            const n = this.getWidth();
            this._applyManipulationCallback(t83, (t)=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e41);
                const s = window.getComputedStyle(t)[e41];
                t.style[e41] = `${i19(Number.parseFloat(s))}px`;
            });
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(di, "paddingRight"), this._resetElementAttributes(ui, "marginRight");
        }
        _saveInitialAttribute(t85, e36) {
            const i = t85.style[e36];
            i && U1.setDataAttribute(t85, e36, i);
        }
        _resetElementAttributes(t84, e37) {
            this._applyManipulationCallback(t84, (t)=>{
                const i = U1.getDataAttribute(t, e37);
                void 0 === i ? t.style.removeProperty(e37) : (U1.removeDataAttribute(t, e37), t.style[e37] = i);
            });
        }
        _applyManipulationCallback(t93, e38) {
            o1(t93) ? e38(t93) : V1.find(t93, this._element).forEach(e38);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
    }
    const pi = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }, mi = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    }, gi = "show", _i = "mousedown.bs.backdrop";
    class bi {
        constructor(t86){
            this._config = this._getConfig(t86), this._isAppended = !1, this._element = null;
        }
        show(t87) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && u1(this._getElement()), this._getElement().classList.add(gi), this._emulateAnimation(()=>{
                _1(t87);
            })) : _1(t87);
        }
        hide(t88) {
            this._config.isVisible ? (this._getElement().classList.remove(gi), this._emulateAnimation(()=>{
                this.dispose(), _1(t88);
            })) : _1(t88);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
            }
            return this._element;
        }
        _getConfig(t89) {
            return (t89 = {
                ...pi,
                ..."object" == typeof t89 ? t89 : {
                }
            }).rootElement = r1(t89.rootElement), a1("backdrop", t89, mi), t89;
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), j1.on(this._getElement(), _i, ()=>{
                _1(this._config.clickCallback);
            }), this._isAppended = !0);
        }
        dispose() {
            this._isAppended && (j1.off(this._element, _i), this._element.remove(), this._isAppended = !1);
        }
        _emulateAnimation(t90) {
            b1(t90, this._getElement(), this._config.isAnimated);
        }
    }
    const vi = {
        trapElement: null,
        autofocus: !0
    }, yi = {
        trapElement: "element",
        autofocus: "boolean"
    }, wi = ".bs.focustrap", Ei = "backward";
    class Ai {
        constructor(t91){
            this._config = this._getConfig(t91), this._isActive = !1, this._lastTabNavDirection = null;
        }
        activate() {
            const { trapElement: t92 , autofocus: e  } = this._config;
            this._isActive || (e && t92.focus(), j1.off(document, wi), j1.on(document, "focusin.bs.focustrap", (t)=>this._handleFocusin(t)
            ), j1.on(document, "keydown.tab.bs.focustrap", (t)=>this._handleKeydown(t)
            ), this._isActive = !0);
        }
        deactivate() {
            this._isActive && (this._isActive = !1, j1.off(document, wi));
        }
        _handleFocusin(t99) {
            const { target: e  } = t99, { trapElement: i  } = this._config;
            if (e === document || e === i || i.contains(e)) return;
            const n = V1.focusableChildren(i);
            0 === n.length ? i.focus() : this._lastTabNavDirection === Ei ? n[n.length - 1].focus() : n[0].focus();
        }
        _handleKeydown(t94) {
            "Tab" === t94.key && (this._lastTabNavDirection = t94.shiftKey ? Ei : "forward");
        }
        _getConfig(t95) {
            return t95 = {
                ...vi,
                ..."object" == typeof t95 ? t95 : {
                }
            }, a1("focustrap", t95, yi), t95;
        }
    }
    const Ti = "modal", Oi = "Escape", Ci = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }, ki = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }, Li = "hidden.bs.modal", xi = "show.bs.modal", Di = "resize.bs.modal", Si = "click.dismiss.bs.modal", Ni = "keydown.dismiss.bs.modal", Ii = "mousedown.dismiss.bs.modal", Pi = "modal-open", ji = "show", Mi = "modal-static";
    class Hi extends B1 {
        constructor(t96, e39){
            super(t96), this._config = this._getConfig(e39), this._dialog = V1.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new fi;
        }
        static get Default() {
            return Ci;
        }
        static get NAME() {
            return Ti;
        }
        toggle(t97) {
            return this._isShown ? this.hide() : this.show(t97);
        }
        show(t98) {
            this._isShown || this._isTransitioning || j1.trigger(this._element, xi, {
                relatedTarget: t98
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j1.on(this._dialog, Ii, ()=>{
                j1.one(this._element, "mouseup.dismiss.bs.modal", (t)=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0);
                });
            }), this._showBackdrop(()=>this._showElement(t98)
            ));
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (j1.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(ji), j1.off(this._element, Si), j1.off(this._dialog, Ii), this._queueCallback(()=>this._hideModal()
            , this._element, t);
        }
        dispose() {
            [
                window,
                this._dialog
            ].forEach((t)=>j1.off(t, ".bs.modal")
            ), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new bi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new Ai({
                trapElement: this._element
            });
        }
        _getConfig(t101) {
            return t101 = {
                ...Ci,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t101 ? t101 : {
                }
            }, a1(Ti, t101, ki), t101;
        }
        _showElement(t100) {
            const e = this._isAnimated(), i = V1.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u1(this._element), this._element.classList.add(ji), this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, j1.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t100
                });
            }, this._dialog, e);
        }
        _setEscapeEvent() {
            this._isShown ? j1.on(this._element, Ni, (t)=>{
                this._config.keyboard && t.key === Oi ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Oi || this._triggerBackdropTransition();
            }) : j1.off(this._element, Ni);
        }
        _setResizeEvent() {
            this._isShown ? j1.on(window, Di, ()=>this._adjustDialog()
            ) : j1.off(window, Di);
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove(Pi), this._resetAdjustments(), this._scrollBar.reset(), j1.trigger(this._element, Li);
            });
        }
        _showBackdrop(t102) {
            j1.on(this._element, Si, (t)=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
            }), this._backdrop.show(t102);
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (j1.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const { classList: t , scrollHeight: e , style: i  } = this._element, n = e > document.documentElement.clientHeight;
            !n && "hidden" === i.overflowY || t.contains(Mi) || (n || (i.overflowY = "hidden"), t.add(Mi), this._queueCallback(()=>{
                t.remove(Mi), n || this._queueCallback(()=>{
                    i.overflowY = "";
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            (!i && t && !m1() || i && !t && m1()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !m1() || !i && t && m1()) && (this._element.style.paddingRight = `${e}px`);
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t103, e40) {
            return this.each(function() {
                const i = Hi.getOrCreateInstance(this, t103);
                if ("string" == typeof t103) {
                    if (void 0 === i[t103]) throw new TypeError(`No method named "${t103}"`);
                    i[t103](e40);
                }
            });
        }
    }
    j1.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t104) {
        const e = n1(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t104.preventDefault(), j1.one(e, xi, (t)=>{
            t.defaultPrevented || j1.one(e, Li, ()=>{
                l1(this) && this.focus();
            });
        });
        const i = V1.findOne(".modal.show");
        i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this);
    }), R1(Hi), g1(Hi);
    const Bi = "offcanvas", Ri = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, Wi = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }, $i = "show", zi = ".offcanvas.show", qi = "hidden.bs.offcanvas";
    class Fi extends B1 {
        constructor(t108, e42){
            super(t108), this._config = this._getConfig(e42), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get NAME() {
            return Bi;
        }
        static get Default() {
            return Ri;
        }
        toggle(t105) {
            return this._isShown ? this.hide() : this.show(t105);
        }
        show(t106) {
            this._isShown || j1.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t106
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new fi).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add($i), this._queueCallback(()=>{
                this._config.scroll || this._focustrap.activate(), j1.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t106
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && (j1.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove($i), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new fi).reset(), j1.trigger(this._element, qi);
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _getConfig(t107) {
            return t107 = {
                ...Ri,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t107 ? t107 : {
                }
            }, a1(Bi, t107, Wi), t107;
        }
        _initializeBackDrop() {
            return new bi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            });
        }
        _initializeFocusTrap() {
            return new Ai({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            j1.on(this._element, "keydown.dismiss.bs.offcanvas", (t)=>{
                this._config.keyboard && "Escape" === t.key && this.hide();
            });
        }
        static jQueryInterface(t109) {
            return this.each(function() {
                const e = Fi.getOrCreateInstance(this, t109);
                if ("string" == typeof t109) {
                    if (void 0 === e[t109] || t109.startsWith("_") || "constructor" === t109) throw new TypeError(`No method named "${t109}"`);
                    e[t109](this);
                }
            });
        }
    }
    j1.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
        const e = n1(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), c1(this)) return;
        j1.one(e, qi, ()=>{
            l1(this) && this.focus();
        });
        const i = V1.findOne(zi);
        i && i !== e && Fi.getInstance(i).hide(), Fi.getOrCreateInstance(e).toggle(this);
    }), j1.on(window, "load.bs.offcanvas.data-api", ()=>V1.find(zi).forEach((t)=>Fi.getOrCreateInstance(t).show()
        )
    ), R1(Fi), g1(Fi);
    const Ui = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Xi = (t111, e)=>{
        const i = t111.nodeName.toLowerCase();
        if (e.includes(i)) return !Ui.has(i) || Boolean(Vi.test(t111.nodeValue) || Ki.test(t111.nodeValue));
        const n = e.filter((t)=>t instanceof RegExp
        );
        for(let t110 = 0, e43 = n.length; t110 < e43; t110++)if (n[t110].test(i)) return !0;
        return !1;
    };
    function Yi(t113, e, i) {
        if (!t113.length) return t113;
        if (i && "function" == typeof i) return i(t113);
        const n = (new window.DOMParser).parseFromString(t113, "text/html"), s = [].concat(...n.body.querySelectorAll("*"));
        for(let t112 = 0, i20 = s.length; t112 < i20; t112++){
            const i20 = s[t112], n = i20.nodeName.toLowerCase();
            if (!Object.keys(e).includes(n)) {
                i20.remove();
                continue;
            }
            const o = [].concat(...i20.attributes), r = [].concat(e["*"] || [], e[n] || []);
            o.forEach((t)=>{
                Xi(t, r) || i20.removeAttribute(t.nodeName);
            });
        }
        return n.body.innerHTML;
    }
    const Qi = "tooltip", Gi = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), Zi = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }, Ji = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: m1() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: m1() ? "right" : "left"
    }, tn = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [
            0,
            0
        ],
        container: !1,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": [
                "class",
                "dir",
                "id",
                "lang",
                "role",
                /^aria-[\w-]*$/i
            ],
            a: [
                "target",
                "href",
                "title",
                "rel"
            ],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: [
                "src",
                "srcset",
                "alt",
                "title",
                "width",
                "height"
            ],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }, en = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }, nn = "fade", sn = "show", on = "show", rn = "out", an = ".tooltip-inner", ln = ".modal", cn = "hide.bs.modal", hn = "hover", dn = "focus";
    class un extends B1 {
        constructor(t116, e47){
            if (void 0 === Fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t116), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {
            }, this._popper = null, this._config = this._getConfig(e47), this.tip = null, this._setListeners();
        }
        static get Default() {
            return tn;
        }
        static get NAME() {
            return Qi;
        }
        static get Event() {
            return en;
        }
        static get DefaultType() {
            return Zi;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t114) {
            if (this._isEnabled) {
                if (t114) {
                    const e = this._initializeOnDelegatedTarget(t114);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
                } else {
                    if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this);
                    this._enter(null, this);
                }
            }
        }
        dispose() {
            clearTimeout(this._timeout), j1.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t115 = j1.trigger(this._element, this.constructor.Event.SHOW), e = h1(this._element), i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t115.defaultPrevented || !i) return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(an).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
            const n = this.getTipElement(), s = ((t)=>{
                do t += Math.floor(1000000 * Math.random());
                while (document.getElementById(t))
                return t;
            })(this.constructor.NAME);
            n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add(nn);
            const o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement, r = this._getAttachment(o);
            this._addAttachmentClass(r);
            const { container: a  } = this._config;
            H1.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), j1.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = qe(this._element, n, this._getPopperConfig(r)), n.classList.add(sn);
            const l = this._resolvePossibleFunction(this._config.customClass);
            l && n.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>{
                j1.on(t, "mouseover", d1);
            });
            const c = this.tip.classList.contains(nn);
            this._queueCallback(()=>{
                const t = this._hoverState;
                this._hoverState = null, j1.trigger(this._element, this.constructor.Event.SHOWN), t === rn && this._leave(null, this);
            }, this.tip, c);
        }
        hide() {
            if (!this._popper) return;
            const t117 = this.getTipElement();
            if (j1.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t117.classList.remove(sn), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>j1.off(t, "mouseover", d1)
            ), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains(nn);
            this._queueCallback(()=>{
                this._isWithActiveTrigger() || (this._hoverState !== on && t117.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), j1.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
            }, this.tip, e), this._hoverState = "";
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e), e.classList.remove(nn, sn), this.tip = e, this.tip;
        }
        setContent(t125) {
            this._sanitizeAndSetContent(t125, this.getTitle(), an);
        }
        _sanitizeAndSetContent(t118, e44, i21) {
            const n = V1.findOne(i21, t118);
            e44 || !n ? this.setElementContent(n, e44) : n.remove();
        }
        setElementContent(t119, e45) {
            if (null !== t119) return o1(e45) ? (e45 = r1(e45), void (this._config.html ? e45.parentNode !== t119 && (t119.innerHTML = "", t119.append(e45)) : t119.textContent = e45.textContent)) : void (this._config.html ? (this._config.sanitize && (e45 = Yi(e45, this._config.allowList, this._config.sanitizeFn)), t119.innerHTML = e45) : t119.textContent = e45);
        }
        getTitle() {
            const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t);
        }
        updateAttachment(t120) {
            return "right" === t120 ? "end" : "left" === t120 ? "start" : t120;
        }
        _initializeOnDelegatedTarget(t121, e46) {
            return e46 || this.constructor.getOrCreateInstance(t121.delegateTarget, this._getDelegateConfig());
        }
        _getOffset() {
            const { offset: t122  } = this._config;
            return "string" == typeof t122 ? t122.split(",").map((t)=>Number.parseInt(t, 10)
            ) : "function" == typeof t122 ? (e)=>t122(e, this._element)
             : t122;
        }
        _resolvePossibleFunction(t123) {
            return "function" == typeof t123 ? t123.call(this._element) : t123;
        }
        _getPopperConfig(t124) {
            const e = {
                placement: t124,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (t)=>this._handlePopperPlacementChange(t)
                    }
                ],
                onFirstUpdate: (t)=>{
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t);
                }
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            };
        }
        _addAttachmentClass(t127) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t127)}`);
        }
        _getAttachment(t126) {
            return Ji[t126.toUpperCase()];
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t128)=>{
                if ("click" === t128) j1.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t)=>this.toggle(t)
                );
                else if ("manual" !== t128) {
                    const e = t128 === hn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i = t128 === hn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    j1.on(this._element, e, this._config.selector, (t)=>this._enter(t)
                    ), j1.on(this._element, i, this._config.selector, (t)=>this._leave(t)
                    );
                }
            }), this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, j1.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle();
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
        }
        _enter(t131, e50) {
            e50 = this._initializeOnDelegatedTarget(t131, e50), t131 && (e50._activeTrigger["focusin" === t131.type ? dn : hn] = !0), e50.getTipElement().classList.contains(sn) || e50._hoverState === on ? e50._hoverState = on : (clearTimeout(e50._timeout), e50._hoverState = on, e50._config.delay && e50._config.delay.show ? e50._timeout = setTimeout(()=>{
                e50._hoverState === on && e50.show();
            }, e50._config.delay.show) : e50.show());
        }
        _leave(t129, e48) {
            e48 = this._initializeOnDelegatedTarget(t129, e48), t129 && (e48._activeTrigger["focusout" === t129.type ? dn : hn] = e48._element.contains(t129.relatedTarget)), e48._isWithActiveTrigger() || (clearTimeout(e48._timeout), e48._hoverState = rn, e48._config.delay && e48._config.delay.hide ? e48._timeout = setTimeout(()=>{
                e48._hoverState === rn && e48.hide();
            }, e48._config.delay.hide) : e48.hide());
        }
        _isWithActiveTrigger() {
            for(const t in this._activeTrigger)if (this._activeTrigger[t]) return !0;
            return !1;
        }
        _getConfig(t130) {
            const e = U1.getDataAttributes(this._element);
            return Object.keys(e).forEach((t)=>{
                Gi.has(t) && delete e[t];
            }), (t130 = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t130 && t130 ? t130 : {
                }
            }).container = !1 === t130.container ? document.body : r1(t130.container), "number" == typeof t130.delay && (t130.delay = {
                show: t130.delay,
                hide: t130.delay
            }), "number" == typeof t130.title && (t130.title = t130.title.toString()), "number" == typeof t130.content && (t130.content = t130.content.toString()), a1(Qi, t130, this.constructor.DefaultType), t130.sanitize && (t130.template = Yi(t130.template, t130.allowList, t130.sanitizeFn)), t130;
        }
        _getDelegateConfig() {
            const t = {
            };
            for(const e in this._config)this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t;
        }
        _cleanTipClass() {
            const t132 = this.getTipElement(), e49 = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), i = t132.getAttribute("class").match(e49);
            null !== i && i.length > 0 && i.map((t)=>t.trim()
            ).forEach((e)=>t132.classList.remove(e)
            );
        }
        _getBasicClassPrefix() {
            return "bs-tooltip";
        }
        _handlePopperPlacementChange(t138) {
            const { state: e  } = t138;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null);
        }
        static jQueryInterface(t133) {
            return this.each(function() {
                const e = un.getOrCreateInstance(this, t133);
                if ("string" == typeof t133) {
                    if (void 0 === e[t133]) throw new TypeError(`No method named "${t133}"`);
                    e[t133]();
                }
            });
        }
    }
    g1(un);
    const fn = {
        ...un.Default,
        placement: "right",
        offset: [
            0,
            8
        ],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }, pn = {
        ...un.DefaultType,
        content: "(string|element|function)"
    }, mn = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class gn extends un {
        static get Default() {
            return fn;
        }
        static get NAME() {
            return "popover";
        }
        static get Event() {
            return mn;
        }
        static get DefaultType() {
            return pn;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent(t134) {
            this._sanitizeAndSetContent(t134, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t134, this._getContent(), ".popover-body");
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        _getBasicClassPrefix() {
            return "bs-popover";
        }
        static jQueryInterface(t135) {
            return this.each(function() {
                const e = gn.getOrCreateInstance(this, t135);
                if ("string" == typeof t135) {
                    if (void 0 === e[t135]) throw new TypeError(`No method named "${t135}"`);
                    e[t135]();
                }
            });
        }
    }
    g1(gn);
    const _n = "scrollspy", bn = {
        offset: 10,
        method: "auto",
        target: ""
    }, vn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, yn = "active", wn = ".nav-link, .list-group-item, .dropdown-item", En = "position";
    class An extends B1 {
        constructor(t136, e52){
            super(t136), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e52), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, j1.on(this._scrollElement, "scroll.bs.scrollspy", ()=>this._process()
            ), this.refresh(), this._process();
        }
        static get Default() {
            return bn;
        }
        static get NAME() {
            return _n;
        }
        refresh() {
            const t137 = this._scrollElement === this._scrollElement.window ? "offset" : En, e51 = "auto" === this._config.method ? t137 : this._config.method, n = e51 === En ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V1.find(wn, this._config.target).map((t)=>{
                const s = i1(t), o = s ? V1.findOne(s) : null;
                if (o) {
                    const t = o.getBoundingClientRect();
                    if (t.width || t.height) return [
                        U1[e51](o).top + n,
                        s
                    ];
                }
                return null;
            }).filter((t)=>t
            ).sort((t, e)=>t[0] - e[0]
            ).forEach((t)=>{
                this._offsets.push(t[0]), this._targets.push(t[1]);
            });
        }
        dispose() {
            j1.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
        }
        _getConfig(t140) {
            return (t140 = {
                ...bn,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t140 && t140 ? t140 : {
                }
            }).target = r1(t140.target) || document.documentElement, a1(_n, t140, vn), t140;
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t);
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for(let e = this._offsets.length; e--;)this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]);
            }
        }
        _activate(t139) {
            this._activeTarget = t139, this._clear();
            const e53 = wn.split(",").map((e)=>`${e}[data-bs-target="${t139}"],${e}[href="${t139}"]`
            ), i = V1.findOne(e53.join(","), this._config.target);
            i.classList.add(yn), i.classList.contains("dropdown-item") ? V1.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(yn) : V1.parents(i, ".nav, .list-group").forEach((t141)=>{
                V1.prev(t141, ".nav-link, .list-group-item").forEach((t)=>t.classList.add(yn)
                ), V1.prev(t141, ".nav-item").forEach((t142)=>{
                    V1.children(t142, ".nav-link").forEach((t)=>t.classList.add(yn)
                    );
                });
            }), j1.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t139
            });
        }
        _clear() {
            V1.find(wn, this._config.target).filter((t)=>t.classList.contains(yn)
            ).forEach((t)=>t.classList.remove(yn)
            );
        }
        static jQueryInterface(t143) {
            return this.each(function() {
                const e = An.getOrCreateInstance(this, t143);
                if ("string" == typeof t143) {
                    if (void 0 === e[t143]) throw new TypeError(`No method named "${t143}"`);
                    e[t143]();
                }
            });
        }
    }
    j1.on(window, "load.bs.scrollspy.data-api", ()=>{
        V1.find('[data-bs-spy="scroll"]').forEach((t)=>new An(t)
        );
    }), g1(An);
    const Tn = "active", On = "fade", Cn = "show", kn = ".active", Ln = ":scope > li > .active";
    class xn extends B1 {
        static get NAME() {
            return "tab";
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tn)) return;
            let t;
            const e = n1(this._element), i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;
                t = V1.find(e, i), t = t[t.length - 1];
            }
            const s = t ? j1.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (j1.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== s && s.defaultPrevented) return;
            this._activate(this._element, i);
            const o = ()=>{
                j1.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), j1.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                });
            };
            e ? this._activate(e, e.parentNode, o) : o();
        }
        _activate(t145, e55, i) {
            const n = (!e55 || "UL" !== e55.nodeName && "OL" !== e55.nodeName ? V1.children(e55, kn) : V1.find(Ln, e55))[0], s = i && n && n.classList.contains(On), o = ()=>this._transitionComplete(t145, n, i)
            ;
            n && s ? (n.classList.remove(Cn), this._queueCallback(o, t145, !0)) : o();
        }
        _transitionComplete(t144, e54, i22) {
            if (e54) {
                e54.classList.remove(Tn);
                const t = V1.findOne(":scope > .dropdown-menu .active", e54.parentNode);
                t && t.classList.remove(Tn), "tab" === e54.getAttribute("role") && e54.setAttribute("aria-selected", !1);
            }
            t144.classList.add(Tn), "tab" === t144.getAttribute("role") && t144.setAttribute("aria-selected", !0), u1(t144), t144.classList.contains(On) && t144.classList.add(Cn);
            let n = t144.parentNode;
            if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
                const e = t144.closest(".dropdown");
                e && V1.find(".dropdown-toggle", e).forEach((t)=>t.classList.add(Tn)
                ), t144.setAttribute("aria-expanded", !0);
            }
            i22 && i22();
        }
        static jQueryInterface(t146) {
            return this.each(function() {
                const e = xn.getOrCreateInstance(this);
                if ("string" == typeof t146) {
                    if (void 0 === e[t146]) throw new TypeError(`No method named "${t146}"`);
                    e[t146]();
                }
            });
        }
    }
    j1.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), c1(this) || xn.getOrCreateInstance(this).show();
    }), g1(xn);
    const Dn = "toast", Sn = "hide", Nn = "show", In = "showing", Pn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, jn = {
        animation: !0,
        autohide: !0,
        delay: 5000
    };
    class Mn extends B1 {
        constructor(t149, e57){
            super(t149), this._config = this._getConfig(e57), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get DefaultType() {
            return Pn;
        }
        static get Default() {
            return jn;
        }
        static get NAME() {
            return Dn;
        }
        show() {
            j1.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Sn), u1(this._element), this._element.classList.add(Nn), this._element.classList.add(In), this._queueCallback(()=>{
                this._element.classList.remove(In), j1.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this._element.classList.contains(Nn) && (j1.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(In), this._queueCallback(()=>{
                this._element.classList.add(Sn), this._element.classList.remove(In), this._element.classList.remove(Nn), j1.trigger(this._element, "hidden.bs.toast");
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), super.dispose();
        }
        _getConfig(t147) {
            return t147 = {
                ...jn,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t147 && t147 ? t147 : {
                }
            }, a1(Dn, t147, this.constructor.DefaultType), t147;
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t148, e56) {
            switch(t148.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e56;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e56;
            }
            if (e56) return void this._clearTimeout();
            const i = t148.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            j1.on(this._element, "mouseover.bs.toast", (t)=>this._onInteraction(t, !0)
            ), j1.on(this._element, "mouseout.bs.toast", (t)=>this._onInteraction(t, !1)
            ), j1.on(this._element, "focusin.bs.toast", (t)=>this._onInteraction(t, !0)
            ), j1.on(this._element, "focusout.bs.toast", (t)=>this._onInteraction(t, !1)
            );
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Mn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return R1(Mn), g1(Mn), {
        Alert: W1,
        Button: z1,
        Carousel: st,
        Collapse: pt,
        Dropdown: hi,
        Modal: Hi,
        Offcanvas: Fi,
        Popover: gn,
        ScrollSpy: An,
        Tab: xn,
        Toast: Mn,
        Tooltip: un
    };
});

//# sourceMappingURL=index.2c0e464c.js.map
