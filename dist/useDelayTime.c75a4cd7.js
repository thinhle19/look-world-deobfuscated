'use strict';
const e = require('./index.3840a89d.js'),
  t = require('./Input.3f4c4aa8.js');
let n = [];
const o = new WeakMap();
function r() {
  n.forEach((e) => e(...o.get(e)));
  n = [];
}
function i(e, ...t) {
  o.set(e, t);
  n.includes(e) || (1 === n.push(e) && requestAnimationFrame(r));
}
function l(e, t) {
  let { target: n } = e;
  for (; n; ) {
    if (n.dataset && void 0 !== n.dataset[t]) {
      return true;
    }
    n = n.parentElement;
  }
  return false;
}
function a(e) {
  switch (typeof e) {
    case 'string':
      return e || void 0;
    case 'number':
      return String(e);
    default:
      return;
  }
}
function s(e) {
  const t = e.filter((e) => void 0 !== e);
  if (0 !== t.length) {
    return 1 === t.length
      ? t[0]
      : (t) => {
          e.forEach((e) => {
            e && e(t);
          });
        };
  }
}
const c = /^(\d|\.)+$/,
  u = /(\d|\.)+/;
function d(e, { c: t = 1, offset: n = 0, attachPx: o = true } = {}) {
  if ('number' == typeof e) {
    const o = (e + n) * t;
    return 0 === o ? '0' : `${o}px`;
  }
  if ('string' == typeof e) {
    if (c.test(e)) {
      const r = (Number(e) + n) * t;
      return o ? (0 === r ? '0' : `${r}px`) : `${r}`;
    }
    {
      const o = u.exec(e);
      return o ? e.replace(u, String((Number(o[0]) + n) * t)) : e;
    }
  }
  return e;
}
let f, h, p;
function v(t, n, o) {
  var r;
  const i = e.inject(t, null);
  if (null === i) {
    return;
  }
  const l =
    null === (r = e.getCurrentInstance()) || void 0 === r ? void 0 : r.proxy;
  function a(e, t) {
    const o = i[n];
    void 0 !== t &&
      (function (e, t) {
        e[t] || (e[t] = []);
        e[t].splice(
          e[t].findIndex((e) => e === l),
          1
        );
      })(o, t);
    void 0 !== e &&
      (function (e, t) {
        e[t] || (e[t] = []);
        ~e[t].findIndex((e) => e === l) || e[t].push(l);
      })(o, e);
  }
  e.watch(o, a);
  a(o.value);
  e.onBeforeUnmount(() => {
    a(void 0, o.value);
  });
}
var g, m;
function b(t, n) {
  return e.computed(() => {
    for (const e of n)
      if (void 0 !== t[e]) {
        return t[e];
      }
    return t[n[n.length - 1]];
  });
}
h = e.isBrowser
  ? null === (m = null === (g = document) || void 0 === g ? void 0 : g.fonts) ||
    void 0 === m
    ? void 0
    : m.ready
  : void 0;
p = false;
void 0 !== h
  ? h.then(() => {
      p = true;
    })
  : (p = true);
const y = e.createInjectionKey('n-internal-select-menu'),
  w = e.createInjectionKey('n-internal-select-menu-body'),
  x = '__disabled__';
function C(t) {
  const n = e.inject(e.modalBodyInjectionKey, null),
    o = e.inject(e.drawerBodyInjectionKey, null),
    r = e.inject(e.popoverBodyInjectionKey, null),
    i = e.inject(w, null),
    l = e.ref();
  if ('undefined' != typeof document) {
    l.value = document.fullscreenElement;
    const t = () => {
      l.value = document.fullscreenElement;
    };
    e.onMounted(() => {
      e.on('fullscreenchange', document, t);
    });
    e.onBeforeUnmount(() => {
      e.off('fullscreenchange', document, t);
    });
  }
  return e.useMemo(() => {
    var e;
    const { to: a } = t;
    return void 0 !== a
      ? false === a
        ? x
        : true === a
        ? l.value || 'body'
        : a
      : (null == n ? void 0 : n.value)
      ? null !== (e = n.value.$el) && void 0 !== e
        ? e
        : n.value
      : (null == o ? void 0 : o.value)
      ? o.value
      : (null == r ? void 0 : r.value)
      ? r.value
      : (null == i ? void 0 : i.value)
      ? i.value
      : null != a
      ? a
      : l.value || 'body';
  });
}
C.tdkey = x;
C.propTo = {
  type: [String, Object, Boolean],
  default: void 0,
};
let k = null;
function S() {
  if (
    null === k &&
    ((k = document.getElementById('v-binder-view-measurer')), null === k)
  ) {
    k = document.createElement('div');
    k.id = 'v-binder-view-measurer';
    const { style: e } = k;
    e.position = 'fixed';
    e.left = '0';
    e.right = '0';
    e.top = '0';
    e.bottom = '0';
    e.pointerEvents = 'none';
    e.visibility = 'hidden';
    document.body.appendChild(k);
  }
  return k.getBoundingClientRect();
}
function M(e) {
  const t = e.getBoundingClientRect(),
    n = S();
  return {
    left: t.left - n.left,
    top: t.top - n.top,
    bottom: n.height + n.top - t.bottom,
    right: n.width + n.left - t.right,
    width: t.width,
    height: t.height,
  };
}
function $(e) {
  if (null === e) {
    return null;
  }
  const t = (function (e) {
    return 9 === e.nodeType ? null : e.parentNode;
  })(e);
  if (null === t) {
    return null;
  }
  if (9 === t.nodeType) {
    return document;
  }
  if (1 === t.nodeType) {
    const { overflow: e, overflowX: n, overflowY: o } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(e + o + n)) {
      return t;
    }
  }
  return $(t);
}
const z = e.defineComponent({
    name: 'Binder',
    props: {
      syncTargetWithParent: Boolean,
      syncTarget: {
        type: Boolean,
        default: true,
      },
    },
    setup(t) {
      var n;
      e.provide(
        'VBinder',
        null === (n = e.getCurrentInstance()) || void 0 === n ? void 0 : n.proxy
      );
      const o = e.inject('VBinder', null),
        r = e.ref(null);
      let l = [];
      const a = () => {
          for (const t of l) e.off('scroll', t, c, true);
          l = [];
        },
        s = new Set(),
        c = () => {
          i(u);
        },
        u = () => {
          s.forEach((e) => e());
        },
        d = new Set(),
        f = () => {
          d.forEach((e) => e());
        };
      return (
        e.onBeforeUnmount(() => {
          e.off('resize', window, f);
          a();
        }),
        {
          targetRef: r,
          setTargetRef: (e) => {
            r.value = e;
            o && t.syncTargetWithParent && o.setTargetRef(e);
          },
          addScrollListener: (t) => {
            0 === s.size &&
              (() => {
                let t = r.value;
                for (; (t = $(t)), null !== t; ) {
                  l.push(t);
                }
                for (const n of l) e.on('scroll', n, c, true);
              })();
            s.has(t) || s.add(t);
          },
          removeScrollListener: (e) => {
            s.has(e) && s.delete(e);
            0 === s.size && a();
          },
          addResizeListener: (t) => {
            0 === d.size && e.on('resize', window, f);
            d.has(t) || d.add(t);
          },
          removeResizeListener: (t) => {
            d.has(t) && d.delete(t);
            0 === d.size && e.off('resize', window, f);
          },
        }
      );
    },
    render() {
      return e.getSlot('binder', this.$slots);
    },
  }),
  O = z,
  B = e.defineComponent({
    name: 'Target',
    setup() {
      const { setTargetRef: t, syncTarget: n } = e.inject('VBinder');
      return {
        syncTarget: n,
        setTargetDirective: {
          mounted: t,
          updated: t,
        },
      };
    },
    render() {
      const { syncTarget: t, setTargetDirective: n } = this;
      return t
        ? e.withDirectives(e.getFirstVNode('follower', this.$slots), [[n]])
        : e.getFirstVNode('follower', this.$slots);
    },
  }),
  F = '@@mmoContext',
  P = {
    mounted(t, { value: n }) {
      t[F] = { handler: void 0 };
      'function' == typeof n &&
        ((t[F].handler = n), e.on('mousemoveoutside', t, n));
    },
    updated(t, { value: n }) {
      const o = t[F];
      'function' == typeof n
        ? o.handler
          ? o.handler !== n &&
            (e.off('mousemoveoutside', t, o.handler),
            (o.handler = n),
            e.on('mousemoveoutside', t, n))
          : ((t[F].handler = n), e.on('mousemoveoutside', t, n))
        : o.handler &&
          (e.off('mousemoveoutside', t, o.handler), (o.handler = void 0));
    },
    unmounted(t) {
      const { handler: n } = t[F];
      n && e.off('mousemoveoutside', t, n);
      t[F].handler = void 0;
    },
  },
  { c: T } = e.CssRender(),
  R = 'vueuc-style';
function E(e) {
  return e & -e;
}
class A {
  constructor(e, t) {
    this.l = e;
    this.min = t;
    const n = new Array(e + 1);
    for (let o = 0; o < e + 1; ++o) {
      n[o] = 0;
    }
    this.ft = n;
  }
  add(e, t) {
    if (0 === t) {
      return;
    }
    const { l: n, ft: o } = this;
    for (e += 1; e <= n; ) {
      o[e] += t;
      e += E(e);
    }
  }
  get(e) {
    return this.sum(e + 1) - this.sum(e);
  }
  sum(e) {
    if ((void 0 === e && (e = this.l), e <= 0)) {
      return 0;
    }
    const { ft: t, min: n, l: o } = this;
    if (e > o) {
      throw new Error('[FinweckTree.sum]: `i` is larger than length.');
    }
    let r = e * n;
    for (; e > 0; ) {
      r += t[e];
      e -= E(e);
    }
    return r;
  }
  getBound(e) {
    let t = 0,
      n = this.l;
    for (; n > t; ) {
      const o = Math.floor((t + n) / 2),
        r = this.sum(o);
      if (r > e) {
        n = o;
      } else {
        if (!(r < e)) {
          return o;
        }
        if (t === o) {
          return this.sum(t + 1) <= e ? t + 1 : o;
        }
        t = o;
      }
    }
    return t;
  }
}
const j = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
  },
  I = {
    start: 'end',
    center: 'center',
    end: 'start',
  },
  N = {
    top: 'height',
    bottom: 'height',
    left: 'width',
    right: 'width',
  },
  L = {
    'bottom-start': 'top left',
    bottom: 'top center',
    'bottom-end': 'top right',
    'top-start': 'bottom left',
    top: 'bottom center',
    'top-end': 'bottom right',
    'right-start': 'top left',
    right: 'center left',
    'right-end': 'bottom left',
    'left-start': 'top right',
    left: 'center right',
    'left-end': 'bottom right',
  },
  _ = {
    'bottom-start': 'bottom left',
    bottom: 'bottom center',
    'bottom-end': 'bottom right',
    'top-start': 'top left',
    top: 'top center',
    'top-end': 'top right',
    'right-start': 'top right',
    right: 'center right',
    'right-end': 'bottom right',
    'left-start': 'top left',
    left: 'center left',
    'left-end': 'bottom left',
  },
  D = {
    'bottom-start': 'right',
    'bottom-end': 'left',
    'top-start': 'right',
    'top-end': 'left',
    'right-start': 'bottom',
    'right-end': 'top',
    'left-start': 'bottom',
    'left-end': 'top',
  },
  q = {
    top: true,
    bottom: false,
    left: true,
    right: false,
  },
  W = {
    top: 'end',
    bottom: 'start',
    left: 'end',
    right: 'start',
  };
const K = T([
    T('.v-binder-follower-container', {
      position: 'absolute',
      left: '0',
      right: '0',
      top: '0',
      height: '0',
      pointerEvents: 'none',
      zIndex: 'auto',
    }),
    T(
      '.v-binder-follower-content',
      {
        position: 'absolute',
        zIndex: 'auto',
      },
      [T('> *', { pointerEvents: 'all' })]
    ),
  ]),
  V = e.defineComponent({
    name: 'Follower',
    inheritAttrs: false,
    props: {
      show: Boolean,
      enabled: {
        type: Boolean,
        default: void 0,
      },
      placement: {
        type: String,
        default: 'bottom',
      },
      syncTrigger: {
        type: Array,
        default: ['resize', 'scroll'],
      },
      to: [String, Object],
      flip: {
        type: Boolean,
        default: true,
      },
      internalShift: Boolean,
      x: Number,
      y: Number,
      width: String,
      minWidth: String,
      containerClass: String,
      teleportDisabled: Boolean,
      zindexable: {
        type: Boolean,
        default: true,
      },
      zIndex: Number,
      overlap: Boolean,
    },
    setup(t) {
      const n = e.inject('VBinder'),
        o = e.useMemo(() => (void 0 !== t.enabled ? t.enabled : t.show)),
        r = e.ref(null),
        i = e.ref(null),
        l = () => {
          const { syncTrigger: e } = t;
          e.includes('scroll') && n.addScrollListener(c);
          e.includes('resize') && n.addResizeListener(c);
        },
        a = () => {
          n.removeScrollListener(c);
          n.removeResizeListener(c);
        };
      e.onMounted(() => {
        o.value && (c(), l());
      });
      const s = e.useSsrAdapter();
      K.mount({
        id: 'vueuc/binder',
        head: true,
        anchorMetaName: R,
        ssr: s,
      });
      e.onBeforeUnmount(() => {
        a();
      });
      (function (t) {
        if (p) {
          return;
        }
        let n = false;
        e.onMounted(() => {
          p ||
            null == h ||
            h.then(() => {
              n || t();
            });
        });
        e.onBeforeUnmount(() => {
          n = true;
        });
      })(() => {
        o.value && c();
      });
      const c = () => {
        if (!o.value) {
          return;
        }
        const e = r.value;
        if (null === e) {
          return;
        }
        const l = n.targetRef,
          { x: a, y: s, overlap: c } = t,
          u =
            void 0 !== a && void 0 !== s
              ? (function (e, t) {
                  const n = S();
                  return {
                    top: t,
                    left: e,
                    height: 0,
                    width: 0,
                    right: n.width - e,
                    bottom: n.height - t,
                  };
                })(a, s)
              : M(l);
        e.style.setProperty('--v-target-width', `${Math.round(u.width)}px`);
        e.style.setProperty('--v-target-height', `${Math.round(u.height)}px`);
        const {
          width: d,
          minWidth: f,
          placement: h,
          internalShift: p,
          flip: v,
        } = t;
        e.setAttribute('v-placement', h);
        c ? e.setAttribute('v-overlap', '') : e.removeAttribute('v-overlap');
        const { style: g } = e;
        g.width = 'target' === d ? `${u.width}px` : void 0 !== d ? d : '';
        g.minWidth = 'target' === f ? `${u.width}px` : void 0 !== f ? f : '';
        const m = M(e),
          b = M(i.value),
          {
            left: y,
            top: w,
            placement: x,
          } = (function (e, t, n, o, r, i) {
            if (!r || i) {
              return {
                placement: e,
                top: 0,
                left: 0,
              };
            }
            const [l, a] = e.split('-');
            let s = null != a ? a : 'center';
            const u = (e, r, i) => {
                let l = 0,
                  a = 0;
                const s = n[e] - t[r] - t[e];
                return (
                  s > 0 && o && (i ? (a = q[r] ? s : -s) : (l = q[r] ? s : -s)),
                  {
                    left: l,
                    top: a,
                  }
                );
              },
              d = 'left' === l || 'right' === l;
            if ('center' !== s) {
              const o = D[e],
                r = j[o],
                i = N[o];
              if (n[i] > t[i]) {
                if (t[o] + t[i] < n[i]) {
                  const e = (n[i] - t[i]) / 2;
                  t[o] < e || t[r] < e
                    ? t[o] < t[r]
                      ? ((s = I[a]), (c = u(i, r, d)))
                      : (c = u(i, o, d))
                    : (s = 'center');
                }
              } else {
                n[i] < t[i] && t[r] < 0 && t[o] > t[r] && (s = I[a]);
              }
            } else {
              const e = 'bottom' === l || 'top' === l ? 'left' : 'top',
                o = j[e],
                r = N[e],
                i = (n[r] - t[r]) / 2;
              (t[e] < i || t[o] < i) &&
                (t[e] > t[o]
                  ? ((s = W[e]), (c = u(r, e, d)))
                  : ((s = W[o]), (c = u(r, o, d))));
            }
            let f = l;
            return (
              t[l] < n[N[l]] && t[l] < t[j[l]] && (f = j[l]),
              {
                placement: 'center' !== s ? `${f}-${s}` : f,
                left: 0,
                top: 0,
              }
            );
          })(h, u, m, p, v, c),
          C = (function (e, t) {
            return t ? _[e] : L[e];
          })(x, c),
          {
            left: k,
            top: $,
            transform: z,
          } = (function (e, t, n, o, r, i) {
            if (i) {
              switch (e) {
                case 'bottom-start':
                case 'left-end':
                  return {
                    top: `${Math.round(n.top - t.top + n.height)}px`,
                    left: `${Math.round(n.left - t.left)}px`,
                    transform: 'translateY(-100%)',
                  };
                case 'bottom-end':
                case 'right-end':
                  return {
                    top: `${Math.round(n.top - t.top + n.height)}px`,
                    left: `${Math.round(n.left - t.left + n.width)}px`,
                    transform: 'translateX(-100%) translateY(-100%)',
                  };
                case 'top-start':
                case 'left-start':
                  return {
                    top: `${Math.round(n.top - t.top)}px`,
                    left: `${Math.round(n.left - t.left)}px`,
                    transform: '',
                  };
                case 'top-end':
                case 'right-start':
                  return {
                    top: `${Math.round(n.top - t.top)}px`,
                    left: `${Math.round(n.left - t.left + n.width)}px`,
                    transform: 'translateX(-100%)',
                  };
                case 'top':
                  return {
                    top: `${Math.round(n.top - t.top)}px`,
                    left: `${Math.round(n.left - t.left + n.width / 2)}px`,
                    transform: 'translateX(-50%)',
                  };
                case 'right':
                  return {
                    top: `${Math.round(n.top - t.top + n.height / 2)}px`,
                    left: `${Math.round(n.left - t.left + n.width)}px`,
                    transform: 'translateX(-100%) translateY(-50%)',
                  };
                case 'left':
                  return {
                    top: `${Math.round(n.top - t.top + n.height / 2)}px`,
                    left: `${Math.round(n.left - t.left)}px`,
                    transform: 'translateY(-50%)',
                  };
                default:
                  return {
                    top: `${Math.round(n.top - t.top + n.height)}px`,
                    left: `${Math.round(n.left - t.left + n.width / 2)}px`,
                    transform: 'translateX(-50%) translateY(-100%)',
                  };
              }
            }
            switch (e) {
              case 'bottom-start':
                return {
                  top: `${Math.round(n.top - t.top + n.height + o)}px`,
                  left: `${Math.round(n.left - t.left + r)}px`,
                  transform: '',
                };
              case 'bottom-end':
                return {
                  top: `${Math.round(n.top - t.top + n.height + o)}px`,
                  left: `${Math.round(n.left - t.left + n.width + r)}px`,
                  transform: 'translateX(-100%)',
                };
              case 'top-start':
                return {
                  top: `${Math.round(n.top - t.top + o)}px`,
                  left: `${Math.round(n.left - t.left + r)}px`,
                  transform: 'translateY(-100%)',
                };
              case 'top-end':
                return {
                  top: `${Math.round(n.top - t.top + o)}px`,
                  left: `${Math.round(n.left - t.left + n.width + r)}px`,
                  transform: 'translateX(-100%) translateY(-100%)',
                };
              case 'right-start':
                return {
                  top: `${Math.round(n.top - t.top + o)}px`,
                  left: `${Math.round(n.left - t.left + n.width + r)}px`,
                  transform: '',
                };
              case 'right-end':
                return {
                  top: `${Math.round(n.top - t.top + n.height + o)}px`,
                  left: `${Math.round(n.left - t.left + n.width + r)}px`,
                  transform: 'translateY(-100%)',
                };
              case 'left-start':
                return {
                  top: `${Math.round(n.top - t.top + o)}px`,
                  left: `${Math.round(n.left - t.left + r)}px`,
                  transform: 'translateX(-100%)',
                };
              case 'left-end':
                return {
                  top: `${Math.round(n.top - t.top + n.height + o)}px`,
                  left: `${Math.round(n.left - t.left + r)}px`,
                  transform: 'translateX(-100%) translateY(-100%)',
                };
              case 'top':
                return {
                  top: `${Math.round(n.top - t.top + o)}px`,
                  left: `${Math.round(n.left - t.left + n.width / 2 + r)}px`,
                  transform: 'translateY(-100%) translateX(-50%)',
                };
              case 'right':
                return {
                  top: `${Math.round(n.top - t.top + n.height / 2 + o)}px`,
                  left: `${Math.round(n.left - t.left + n.width + r)}px`,
                  transform: 'translateY(-50%)',
                };
              case 'left':
                return {
                  top: `${Math.round(n.top - t.top + n.height / 2 + o)}px`,
                  left: `${Math.round(n.left - t.left + r)}px`,
                  transform: 'translateY(-50%) translateX(-100%)',
                };
              default:
                return {
                  top: `${Math.round(n.top - t.top + n.height + o)}px`,
                  left: `${Math.round(n.left - t.left + n.width / 2 + r)}px`,
                  transform: 'translateX(-50%)',
                };
            }
          })(x, b, u, w, y, c);
        e.setAttribute('v-placement', x);
        e.style.setProperty('--v-offset-left', `${Math.round(y)}px`);
        e.style.setProperty('--v-offset-top', `${Math.round(w)}px`);
        e.style.transform = `translateX(${k}) translateY(${$}) ${z}`;
        e.style.setProperty('--v-transform-origin', C);
        e.style.transformOrigin = C;
      };
      e.watch(o, (e) => {
        e ? (l(), u()) : a();
      });
      const u = () => {
        e.nextTick()
          .then(c)
          .catch((e) => {});
      };
      [
        'placement',
        'x',
        'y',
        'internalShift',
        'flip',
        'width',
        'overlap',
        'minWidth',
      ].forEach((n) => {
        e.watch(e.toRef(t, n), c);
      });
      ['teleportDisabled'].forEach((n) => {
        e.watch(e.toRef(t, n), u);
      });
      e.watch(e.toRef(t, 'syncTrigger'), (e) => {
        e.includes('resize')
          ? n.addResizeListener(c)
          : n.removeResizeListener(c);
        e.includes('scroll')
          ? n.addScrollListener(c)
          : n.removeScrollListener(c);
      });
      const d = e.isMounted(),
        f = e.useMemo(() => {
          const { to: e } = t;
          if (void 0 !== e) {
            return e;
          }
          d.value;
        });
      return {
        VBinder: n,
        mergedEnabled: o,
        offsetContainerRef: i,
        followerRef: r,
        mergedTo: f,
        syncPosition: c,
      };
    },
    render() {
      return e.h(
        e.LazyTeleport,
        {
          show: this.show,
          to: this.mergedTo,
          disabled: this.teleportDisabled,
        },
        {
          default: () => {
            var t, n;
            const o = e.h(
              'div',
              {
                class: ['v-binder-follower-container', this.containerClass],
                ref: 'offsetContainerRef',
              },
              [
                e.h(
                  'div',
                  {
                    class: 'v-binder-follower-content',
                    ref: 'followerRef',
                  },
                  null === (n = (t = this.$slots).default) || void 0 === n
                    ? void 0
                    : n.call(t)
                ),
              ]
            );
            return this.zindexable
              ? e.withDirectives(o, [
                  [
                    e.zindexable,
                    {
                      enabled: this.mergedEnabled,
                      zIndex: this.zIndex,
                    },
                  ],
                ])
              : o;
          },
        }
      );
    },
  });
let H, U;
function G() {
  return (
    void 0 === U && (U = 'chrome' in window ? window.devicePixelRatio : 1), U
  );
}
const Y = T(
    '.v-vl',
    {
      maxHeight: 'inherit',
      height: '100%',
      overflow: 'auto',
      minWidth: '1px',
    },
    [
      T('&:not(.v-vl--show-scrollbar)', { scrollbarWidth: 'none' }, [
        T(
          '&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb',
          {
            width: 0,
            height: 0,
            display: 'none',
          }
        ),
      ]),
    ]
  ),
  X = e.defineComponent({
    name: 'VirtualList',
    inheritAttrs: false,
    props: {
      showScrollbar: {
        type: Boolean,
        default: true,
      },
      items: {
        type: Array,
        default: () => [],
      },
      itemSize: {
        type: Number,
        required: true,
      },
      itemResizable: Boolean,
      itemsStyle: [String, Object],
      visibleItemsTag: {
        type: [String, Object],
        default: 'div',
      },
      visibleItemsProps: Object,
      ignoreItemResize: Boolean,
      onScroll: Function,
      onWheel: Function,
      onResize: Function,
      defaultScrollKey: [Number, String],
      defaultScrollIndex: Number,
      keyField: {
        type: String,
        default: 'key',
      },
      paddingTop: {
        type: [Number, String],
        default: 0,
      },
      paddingBottom: {
        type: [Number, String],
        default: 0,
      },
    },
    setup(t) {
      const n = e.useSsrAdapter();
      Y.mount({
        id: 'vueuc/virtual-list',
        head: true,
        anchorMetaName: R,
        ssr: n,
      });
      e.onMounted(() => {
        const { defaultScrollIndex: e, defaultScrollKey: n } = t;
        null != e ? g({ index: e }) : null != n && g({ key: n });
      });
      let o = false,
        r = false;
      e.onActivated(() => {
        o = false;
        r
          ? g({
              top: h.value,
              left: f,
            })
          : (r = true);
      });
      e.onDeactivated(() => {
        o = true;
        r || (r = true);
      });
      const l = e.computed(() => {
          const e = new Map(),
            { keyField: n } = t;
          return (
            t.items.forEach((t, o) => {
              e.set(t[n], o);
            }),
            e
          );
        }),
        a = e.ref(null),
        s = e.ref(void 0),
        c = new Map(),
        u = e.computed(() => {
          const { items: e, itemSize: n, keyField: o } = t,
            r = new A(e.length, n);
          return (
            e.forEach((e, t) => {
              const n = e[o],
                i = c.get(n);
              void 0 !== i && r.add(t, i);
            }),
            r
          );
        }),
        d = e.ref(0);
      let f = 0;
      const h = e.ref(0),
        p = e.useMemo(() =>
          Math.max(u.value.getBound(h.value - e.depx(t.paddingTop)) - 1, 0)
        ),
        v = e.computed(() => {
          const { value: e } = s;
          if (void 0 === e) {
            return [];
          }
          const { items: n, itemSize: o } = t,
            r = p.value,
            i = Math.min(r + Math.ceil(e / o + 1), n.length - 1),
            l = [];
          for (let t = r; t <= i; ++t) {
            l.push(n[t]);
          }
          return l;
        }),
        g = (e, t) => {
          if ('number' == typeof e) {
            return void w(e, t, 'auto');
          }
          const {
            left: n,
            top: o,
            index: r,
            key: i,
            position: a,
            behavior: s,
            debounce: c = true,
          } = e;
          if (void 0 !== n || void 0 !== o) {
            w(n, o, s);
          } else {
            if (void 0 !== r) {
              y(r, s, c);
            } else {
              if (void 0 !== i) {
                const e = l.value.get(i);
                void 0 !== e && y(e, s, c);
              } else {
                'bottom' === a
                  ? w(0, Number.MAX_SAFE_INTEGER, s)
                  : 'top' === a && w(0, 0, s);
              }
            }
          }
        };
      let m,
        b = null;
      function y(n, o, r) {
        const { value: i } = u,
          l = i.sum(n) + e.depx(t.paddingTop);
        if (r) {
          m = n;
          null !== b && window.clearTimeout(b);
          b = window.setTimeout(() => {
            m = void 0;
            b = null;
          }, 16);
          const { scrollTop: e, offsetHeight: t } = a.value;
          if (l > e) {
            const r = i.get(n);
            l + r <= e + t ||
              a.value.scrollTo({
                left: 0,
                top: l + r - t,
                behavior: o,
              });
          } else {
            a.value.scrollTo({
              left: 0,
              top: l,
              behavior: o,
            });
          }
        } else {
          a.value.scrollTo({
            left: 0,
            top: l,
            behavior: o,
          });
        }
      }
      function w(e, t, n) {
        a.value.scrollTo({
          left: e,
          top: t,
          behavior: n,
        });
      }
      const x =
        (void 0 === H &&
          (H =
            'matchMedia' in window &&
            window.matchMedia('(pointer:coarse)').matches),
        !H);
      let C = false;
      function k() {
        const { value: e } = a;
        null != e && ((h.value = e.scrollTop), (f = e.scrollLeft));
      }
      function S(e) {
        let t = e;
        for (; null !== t; ) {
          if ('none' === t.style.display) {
            return true;
          }
          t = t.parentElement;
        }
        return false;
      }
      return {
        listHeight: s,
        listStyle: { overflow: 'auto' },
        keyToIndex: l,
        itemsStyle: e.computed(() => {
          const { itemResizable: n } = t,
            o = e.pxfy(u.value.sum());
          return (
            d.value,
            [
              t.itemsStyle,
              {
                boxSizing: 'content-box',
                height: n ? '' : o,
                minHeight: n ? o : '',
                paddingTop: e.pxfy(t.paddingTop),
                paddingBottom: e.pxfy(t.paddingBottom),
              },
            ]
          );
        }),
        visibleItemsStyle: e.computed(
          () => (
            d.value,
            { transform: `translateY(${e.pxfy(u.value.sum(p.value))})` }
          )
        ),
        viewportItems: v,
        listElRef: a,
        itemsElRef: e.ref(null),
        scrollTo: g,
        handleListResize: function (e) {
          if (o) {
            return;
          }
          if (S(e.target)) {
            return;
          }
          if (e.contentRect.height === s.value) {
            return;
          }
          s.value = e.contentRect.height;
          const { onResize: n } = t;
          void 0 !== n && n(e);
        },
        handleListScroll: function (e) {
          var n;
          null === (n = t.onScroll) || void 0 === n || n.call(t, e);
          (x && C) || k();
        },
        handleListWheel: function (e) {
          var n;
          if ((null === (n = t.onWheel) || void 0 === n || n.call(t, e), x)) {
            const t = a.value;
            if (null != t) {
              if (0 === e.deltaX) {
                if (0 === t.scrollTop && e.deltaY <= 0) {
                  return;
                }
                if (
                  t.scrollTop + t.offsetHeight >= t.scrollHeight &&
                  e.deltaY >= 0
                ) {
                  return;
                }
              }
              e.preventDefault();
              t.scrollTop += e.deltaY / G();
              t.scrollLeft += e.deltaX / G();
              k();
              C = true;
              i(() => {
                C = false;
              });
            }
          }
        },
        handleItemResize: function (e, n) {
          var r, i, s;
          if (o) {
            return;
          }
          if (t.ignoreItemResize) {
            return;
          }
          if (S(n.target)) {
            return;
          }
          const { value: f } = u,
            h = l.value.get(e),
            p = f.get(h),
            v =
              null !==
                (s =
                  null ===
                    (i =
                      null === (r = n.borderBoxSize) || void 0 === r
                        ? void 0
                        : r[0]) || void 0 === i
                    ? void 0
                    : i.blockSize) && void 0 !== s
                ? s
                : n.contentRect.height;
          if (v === p) {
            return;
          }
          0 === v - t.itemSize ? c.delete(e) : c.set(e, v - t.itemSize);
          const g = v - p;
          if (0 === g) {
            return;
          }
          f.add(h, g);
          const b = a.value;
          if (null != b) {
            if (void 0 === m) {
              const e = f.sum(h);
              b.scrollTop > e && b.scrollBy(0, g);
            } else {
              if (h < m) {
                b.scrollBy(0, g);
              } else {
                if (h === m) {
                  v + f.sum(h) > b.scrollTop + b.offsetHeight &&
                    b.scrollBy(0, g);
                }
              }
            }
            k();
          }
          d.value++;
        },
      };
    },
    render() {
      const {
        itemResizable: t,
        keyField: n,
        keyToIndex: o,
        visibleItemsTag: r,
      } = this;
      return e.h(
        e.VResizeObserver,
        { onResize: this.handleListResize },
        {
          default: () => {
            var i, l;
            return e.h(
              'div',
              e.mergeProps(this.$attrs, {
                class: ['v-vl', this.showScrollbar && 'v-vl--show-scrollbar'],
                onScroll: this.handleListScroll,
                onWheel: this.handleListWheel,
                ref: 'listElRef',
              }),
              [
                0 !== this.items.length
                  ? e.h(
                      'div',
                      {
                        ref: 'itemsElRef',
                        class: 'v-vl-items',
                        style: this.itemsStyle,
                      },
                      [
                        e.h(
                          r,
                          Object.assign(
                            {
                              class: 'v-vl-visible-items',
                              style: this.visibleItemsStyle,
                            },
                            this.visibleItemsProps
                          ),
                          {
                            default: () =>
                              this.viewportItems.map((r) => {
                                const i = r[n],
                                  l = o.get(i),
                                  a = this.$slots.default({
                                    item: r,
                                    index: l,
                                  })[0];
                                return t
                                  ? e.h(
                                      e.VResizeObserver,
                                      {
                                        key: i,
                                        onResize: (e) =>
                                          this.handleItemResize(i, e),
                                      },
                                      { default: () => a }
                                    )
                                  : ((a.key = i), a);
                              }),
                          }
                        ),
                      ]
                    )
                  : null === (l = (i = this.$slots).empty) || void 0 === l
                  ? void 0
                  : l.call(i),
              ]
            );
          },
        }
      );
    },
  }),
  Z = 'v-hidden',
  J = T('[v-hidden]', { display: 'none!important' }),
  Q = e.defineComponent({
    name: 'Overflow',
    props: {
      getCounter: Function,
      getTail: Function,
      updateCounter: Function,
      onUpdateOverflow: Function,
    },
    setup(t, { slots: n }) {
      const o = e.ref(null),
        r = e.ref(null);
      function i() {
        const { value: e } = o,
          { getCounter: i, getTail: l } = t;
        let a;
        if (((a = void 0 !== i ? i() : r.value), !e || !a)) {
          return;
        }
        a.hasAttribute(Z) && a.removeAttribute(Z);
        const { children: s } = e,
          c = e.offsetWidth,
          u = [],
          d = n.tail ? (null == l ? void 0 : l()) : null;
        let f = d ? d.offsetWidth : 0,
          h = false;
        const p = e.children.length - (n.tail ? 1 : 0);
        for (let n = 0; n < p - 1; ++n) {
          if (n < 0) {
            continue;
          }
          const e = s[n];
          if (h) {
            e.hasAttribute(Z) || e.setAttribute(Z, '');
            continue;
          }
          e.hasAttribute(Z) && e.removeAttribute(Z);
          const o = e.offsetWidth;
          if (((f += o), (u[n] = o), f > c)) {
            const { updateCounter: e } = t;
            for (let t = n; t >= 0; --t) {
              const o = p - 1 - t;
              void 0 !== e ? e(o) : (a.textContent = `${o}`);
              const r = a.offsetWidth;
              if (((f -= u[t]), f + r <= c || 0 === t)) {
                h = true;
                n = t - 1;
                d &&
                  (-1 === n
                    ? ((d.style.maxWidth = c - r + 'px'),
                      (d.style.boxSizing = 'border-box'))
                    : (d.style.maxWidth = ''));
                break;
              }
            }
          }
        }
        const { onUpdateOverflow: v } = t;
        h
          ? void 0 !== v && v(true)
          : (void 0 !== v && v(false), a.setAttribute(Z, ''));
      }
      const l = e.useSsrAdapter();
      return (
        J.mount({
          id: 'vueuc/overflow',
          head: true,
          anchorMetaName: R,
          ssr: l,
        }),
        e.onMounted(i),
        {
          selfRef: o,
          counterRef: r,
          sync: i,
        }
      );
    },
    render() {
      const { $slots: t } = this;
      return (
        e.nextTick(this.sync),
        e.h(
          'div',
          {
            class: 'v-overflow',
            ref: 'selfRef',
          },
          [
            e.renderSlot(t, 'default'),
            t.counter
              ? t.counter()
              : e.h('span', {
                  style: { display: 'inline-block' },
                  ref: 'counterRef',
                }),
            t.tail ? t.tail() : null,
          ]
        )
      );
    },
  });
function ee(t, n) {
  n &&
    (e.onMounted(() => {
      const { value: o } = t;
      o && e.resizeObserverManager.registerHandler(o, n);
    }),
    e.onBeforeUnmount(() => {
      const { value: n } = t;
      n && e.resizeObserverManager.unregisterHandler(n);
    }));
}
const te = e.getNative(e.root, 'WeakMap');
const ne = e.overArg(Object.keys, Object);
var oe = Object.prototype.hasOwnProperty;
function re(t) {
  return e.isArrayLike(t)
    ? e.arrayLikeKeys(t)
    : (function (t) {
        if (!e.isPrototype(t)) {
          return ne(t);
        }
        var n = [];
        for (var o in Object(t))
          oe.call(t, o) && 'constructor' != o && n.push(o);
        return n;
      })(t);
}
var ie = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  le = /^\w*$/;
function ae(t, n) {
  if (e.isArray(t)) {
    return false;
  }
  var o = typeof t;
  return (
    !(
      'number' != o &&
      'symbol' != o &&
      'boolean' != o &&
      null != t &&
      !e.isSymbol(t)
    ) ||
    le.test(t) ||
    !ie.test(t) ||
    (null != n && t in Object(n))
  );
}
var se = 'Expected a function';
function ce(t, n) {
  if ('function' != typeof t || (null != n && 'function' != typeof n)) {
    throw new TypeError(se);
  }
  var o = function () {
    var e = arguments,
      r = n ? n.apply(this, e) : e[0],
      i = o.cache;
    if (i.has(r)) {
      return i.get(r);
    }
    var l = t.apply(this, e);
    return (o.cache = i.set(r, l) || i), l;
  };
  return (o.cache = new (ce.Cache || e.MapCache)()), o;
}
ce.Cache = e.MapCache;
var ue,
  de,
  fe,
  he =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  pe = /\\(\\)?/g,
  ve =
    ((ue = function (e) {
      var t = [];
      return (
        46 === e.charCodeAt(0) && t.push(''),
        e.replace(he, function (e, n, o, r) {
          t.push(o ? r.replace(pe, '$1') : n || e);
        }),
        t
      );
    }),
    (de = ce(ue, function (e) {
      return 500 === fe.size && fe.clear(), e;
    })),
    (fe = de.cache),
    de);
const ge = ve;
function me(t, n) {
  return e.isArray(t) ? t : ae(t, n) ? [t] : ge(e.toString(t));
}
var be = 1e400;
function ye(t) {
  if ('string' == typeof t || e.isSymbol(t)) {
    return t;
  }
  var n = t + '';
  return '0' == n && 1 / t == -be ? '-0' : n;
}
function we(e, t) {
  for (var n = 0, o = (t = me(t, e)).length; null != e && n < o; ) {
    e = e[ye(t[n++])];
  }
  return n && n == o ? e : void 0;
}
function xe(e, t, n) {
  var o = null == e ? void 0 : we(e, t);
  return void 0 === o ? n : o;
}
var Ce = Object.prototype.propertyIsEnumerable,
  ke = Object.getOwnPropertySymbols,
  Se = ke
    ? function (e) {
        return null == e
          ? []
          : ((e = Object(e)),
            (function (e, t) {
              for (
                var n = -1, o = null == e ? 0 : e.length, r = 0, i = [];
                ++n < o;

              ) {
                var l = e[n];
                t(l, n, e) && (i[r++] = l);
              }
              return i;
            })(ke(e), function (t) {
              return Ce.call(e, t);
            }));
      }
    : function () {
        return [];
      };
const Me = Se;
function $e(t) {
  return (function (t, n, o) {
    var r = n(t);
    return e.isArray(t)
      ? r
      : (function (e, t) {
          for (var n = -1, o = t.length, r = e.length; ++n < o; ) {
            e[r + n] = t[n];
          }
          return e;
        })(r, o(t));
  })(t, re, Me);
}
const ze = e.getNative(e.root, 'DataView');
const Oe = e.getNative(e.root, 'Promise');
const Be = e.getNative(e.root, 'Set');
var Fe = '[object Map]',
  Pe = '[object Promise]',
  Te = '[object Set]',
  Re = '[object WeakMap]',
  Ee = '[object DataView]',
  Ae = e.toSource(ze),
  je = e.toSource(e.Map),
  Ie = e.toSource(Oe),
  Ne = e.toSource(Be),
  Le = e.toSource(te),
  _e = e.baseGetTag;
((ze && _e(new ze(new ArrayBuffer(1))) != Ee) ||
  (e.Map && _e(new e.Map()) != Fe) ||
  (Oe && _e(Oe.resolve()) != Pe) ||
  (Be && _e(new Be()) != Te) ||
  (te && _e(new te()) != Re)) &&
  (_e = function (t) {
    var n = e.baseGetTag(t),
      o = '[object Object]' == n ? t.constructor : void 0,
      r = o ? e.toSource(o) : '';
    if (r) {
      switch (r) {
        case Ae:
          return Ee;
        case je:
          return Fe;
        case Ie:
          return Pe;
        case Ne:
          return Te;
        case Le:
          return Re;
      }
    }
    return n;
  });
const De = _e;
function qe(t) {
  var n = -1,
    o = null == t ? 0 : t.length;
  for (this.__data__ = new e.MapCache(); ++n < o; ) {
    this.add(t[n]);
  }
}
function We(e, t) {
  for (var n = -1, o = null == e ? 0 : e.length; ++n < o; ) {
    if (t(e[n], n, e)) {
      return true;
    }
  }
  return false;
}
function Ke(e, t) {
  return e.has(t);
}
qe.prototype.add = qe.prototype.push = function (e) {
  return this.__data__.set(e, '__lodash_hash_undefined__'), this;
};
qe.prototype.has = function (e) {
  return this.__data__.has(e);
};
var Ve = 1,
  He = 2;
function Ue(e, t, n, o, r, i) {
  var l = n & Ve,
    a = e.length,
    s = t.length;
  if (a != s && !(l && s > a)) {
    return false;
  }
  var c = i.get(e),
    u = i.get(t);
  if (c && u) {
    return c == t && u == e;
  }
  var d = -1,
    f = true,
    h = n & He ? new qe() : void 0;
  for (i.set(e, t), i.set(t, e); ++d < a; ) {
    var p = e[d],
      v = t[d];
    if (o) {
      var g = l ? o(v, p, d, t, e, i) : o(p, v, d, e, t, i);
    }
    if (void 0 !== g) {
      if (g) {
        continue;
      }
      f = false;
      break;
    }
    if (h) {
      if (
        !We(t, function (e, t) {
          if (!Ke(h, t) && (p === e || r(p, e, n, o, i))) {
            return h.push(t);
          }
        })
      ) {
        f = false;
        break;
      }
    } else {
      if (p !== v && !r(p, v, n, o, i)) {
        f = false;
        break;
      }
    }
  }
  return i.delete(e), i.delete(t), f;
}
function Ge(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (e, o) {
      n[++t] = [o, e];
    }),
    n
  );
}
function Ye(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (e) {
      n[++t] = e;
    }),
    n
  );
}
var Xe = 1,
  Ze = 2,
  Je = '[object Boolean]',
  Qe = '[object Date]',
  et = '[object Error]',
  tt = '[object Map]',
  nt = '[object Number]',
  ot = '[object RegExp]',
  rt = '[object Set]',
  it = '[object String]',
  lt = '[object Symbol]',
  at = '[object ArrayBuffer]',
  st = '[object DataView]',
  ct = e.Symbol ? e.Symbol.prototype : void 0,
  ut = ct ? ct.valueOf : void 0;
var dt = 1,
  ft = Object.prototype.hasOwnProperty;
var ht = 1,
  pt = '[object Arguments]',
  vt = '[object Array]',
  gt = '[object Object]',
  mt = Object.prototype.hasOwnProperty;
function bt(t, n, o, r, i, l) {
  var a = e.isArray(t),
    s = e.isArray(n),
    c = a ? vt : De(t),
    u = s ? vt : De(n),
    d = (c = c == pt ? gt : c) == gt,
    f = (u = u == pt ? gt : u) == gt,
    h = c == u;
  if (h && e.isBuffer(t)) {
    if (!e.isBuffer(n)) {
      return false;
    }
    a = true;
    d = false;
  }
  if (h && !d) {
    return (
      l || (l = new e.Stack()),
      a || e.isTypedArray(t)
        ? Ue(t, n, o, r, i, l)
        : (function (t, n, o, r, i, l, a) {
            switch (o) {
              case st:
                if (
                  t.byteLength != n.byteLength ||
                  t.byteOffset != n.byteOffset
                ) {
                  return false;
                }
                (t = t.buffer), (n = n.buffer);
              case at:
                return !(
                  t.byteLength != n.byteLength ||
                  !l(new e.Uint8Array(t), new e.Uint8Array(n))
                );
              case Je:
              case Qe:
              case nt:
                return e.eq(+t, +n);
              case et:
                return t.name == n.name && t.message == n.message;
              case ot:
              case it:
                return t == n + '';
              case tt:
                var s = Ge;
              case rt:
                var c = r & Xe;
                if ((s || (s = Ye), t.size != n.size && !c)) {
                  return false;
                }
                var u = a.get(t);
                if (u) {
                  return u == n;
                }
                (r |= Ze), a.set(t, n);
                var d = Ue(s(t), s(n), r, i, l, a);
                return a.delete(t), d;
              case lt:
                if (ut) {
                  return ut.call(t) == ut.call(n);
                }
            }
            return false;
          })(t, n, c, o, r, i, l)
    );
  }
  if (!(o & ht)) {
    var p = d && mt.call(t, '__wrapped__'),
      v = f && mt.call(n, '__wrapped__');
    if (p || v) {
      var g = p ? t.value() : t,
        m = v ? n.value() : n;
      return l || (l = new e.Stack()), i(g, m, o, r, l);
    }
  }
  return (
    !!h &&
    (l || (l = new e.Stack()),
    (function (e, t, n, o, r, i) {
      var l = n & dt,
        a = $e(e),
        s = a.length;
      if (s != $e(t).length && !l) {
        return false;
      }
      for (var c = s; c--; ) {
        var u = a[c];
        if (!(l ? u in t : ft.call(t, u))) {
          return false;
        }
      }
      var d = i.get(e),
        f = i.get(t);
      if (d && f) {
        return d == t && f == e;
      }
      var h = true;
      i.set(e, t);
      i.set(t, e);
      for (var p = l; ++c < s; ) {
        var v = e[(u = a[c])],
          g = t[u];
        if (o) {
          var m = l ? o(g, v, u, t, e, i) : o(v, g, u, e, t, i);
        }
        if (!(void 0 === m ? v === g || r(v, g, n, o, i) : m)) {
          h = false;
          break;
        }
        p || (p = 'constructor' == u);
      }
      if (h && !p) {
        var b = e.constructor,
          y = t.constructor;
        b == y ||
          !('constructor' in e) ||
          !('constructor' in t) ||
          ('function' == typeof b &&
            b instanceof b &&
            'function' == typeof y &&
            y instanceof y) ||
          (h = false);
      }
      return i.delete(e), i.delete(t), h;
    })(t, n, o, r, i, l))
  );
}
function yt(t, n, o, r, i) {
  return (
    t === n ||
    (null == t || null == n || (!e.isObjectLike(t) && !e.isObjectLike(n))
      ? t != t && n != n
      : bt(t, n, o, r, yt, i))
  );
}
var wt = 1,
  xt = 2;
function Ct(t) {
  return t == t && !e.isObject(t);
}
function kt(e, t) {
  return function (n) {
    return null != n && n[e] === t && (void 0 !== t || e in Object(n));
  };
}
function St(t) {
  var n = (function (e) {
    for (var t = re(e), n = t.length; n--; ) {
      var o = t[n],
        r = e[o];
      t[n] = [o, r, Ct(r)];
    }
    return t;
  })(t);
  return 1 == n.length && n[0][2]
    ? kt(n[0][0], n[0][1])
    : function (o) {
        return (
          o === t ||
          (function (t, n, o, r) {
            var i = o.length,
              l = i,
              a = !r;
            if (null == t) {
              return !l;
            }
            for (t = Object(t); i--; ) {
              var s = o[i];
              if (a && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) {
                return false;
              }
            }
            for (; ++i < l; ) {
              var c = (s = o[i])[0],
                u = t[c],
                d = s[1];
              if (a && s[2]) {
                if (void 0 === u && !(c in t)) {
                  return false;
                }
              } else {
                var f = new e.Stack();
                if (r) {
                  var h = r(u, d, c, t, n, f);
                }
                if (!(void 0 === h ? yt(d, u, wt | xt, r, f) : h)) {
                  return false;
                }
              }
            }
            return true;
          })(o, t, n)
        );
      };
}
function Mt(e, t) {
  return null != e && t in Object(e);
}
function $t(t, n) {
  return (
    null != t &&
    (function (t, n, o) {
      for (var r = -1, i = (n = me(n, t)).length, l = false; ++r < i; ) {
        var a = ye(n[r]);
        if (!(l = null != t && o(t, a))) {
          break;
        }
        t = t[a];
      }
      return l || ++r != i
        ? l
        : !!(i = null == t ? 0 : t.length) &&
            e.isLength(i) &&
            e.isIndex(a, i) &&
            (e.isArray(t) || e.isArguments(t));
    })(t, n, Mt)
  );
}
var zt = 1,
  Ot = 2;
function Bt(e) {
  return ae(e)
    ? ((t = ye(e)),
      function (e) {
        return null == e ? void 0 : e[t];
      })
    : (function (e) {
        return function (t) {
          return we(t, e);
        };
      })(e);
  var t;
}
function Ft(t) {
  return 'function' == typeof t
    ? t
    : null == t
    ? e.identity
    : 'object' == typeof t
    ? e.isArray(t)
      ? ((n = t[0]),
        (o = t[1]),
        ae(n) && Ct(o)
          ? kt(ye(n), o)
          : function (e) {
              var t = xe(e, n);
              return void 0 === t && t === o ? $t(e, n) : yt(o, t, zt | Ot);
            })
      : St(t)
    : Bt(t);
  var n, o;
}
var Pt,
  Tt,
  Rt =
    ((Pt = function (t, n) {
      return t && e.baseFor(t, n, re);
    }),
    function (t, n) {
      if (null == t) {
        return t;
      }
      if (!e.isArrayLike(t)) {
        return Pt(t, n);
      }
      for (
        var o = t.length, r = Tt ? o : -1, i = Object(t);
        (Tt ? r-- : ++r < o) && false !== n(i[r], r, i);

      ) {}
      return t;
    });
const Et = Rt;
function At(t, n) {
  var o = -1,
    r = e.isArrayLike(t) ? Array(t.length) : [];
  return (
    Et(t, function (e, t, i) {
      r[++o] = n(e, t, i);
    }),
    r
  );
}
const jt = e.defineComponent({
    name: 'Checkmark',
    render: () =>
      e.h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 16 16',
        },
        e.h(
          'g',
          { fill: 'none' },
          e.h('path', {
            d: 'M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z',
            fill: 'currentColor',
          })
        )
      ),
  }),
  It = e.defineComponent({
    name: 'Empty',
    render: () =>
      e.h(
        'svg',
        {
          viewBox: '0 0 28 28',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        e.h('path', {
          d: 'M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z',
          fill: 'currentColor',
        }),
        e.h('path', {
          d: 'M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z',
          fill: 'currentColor',
        })
      ),
  }),
  Nt = e.defineComponent({
    props: {
      onFocus: Function,
      onBlur: Function,
    },
    setup: (t) => () =>
      e.h('div', {
        style: 'width: 0; height: 0',
        tabindex: 0,
        onFocus: t.onFocus,
        onBlur: t.onBlur,
      }),
  });
function Lt(e) {
  return Array.isArray(e) ? e : [e];
}
const _t = { STOP: 'STOP' };
function Dt(e, t) {
  const n = t(e);
  void 0 !== e.children && n !== _t.STOP && e.children.forEach((e) => Dt(e, t));
}
function qt(e) {
  return e.children;
}
function Wt(e) {
  return e.key;
}
function Kt() {
  return false;
}
function Vt(e) {
  return true === e.disabled;
}
function Ht(e) {
  var t;
  return null == e
    ? []
    : Array.isArray(e)
    ? e
    : null !== (t = e.checkedKeys) && void 0 !== t
    ? t
    : [];
}
function Ut(e) {
  var t;
  return null == e || Array.isArray(e)
    ? []
    : null !== (t = e.indeterminateKeys) && void 0 !== t
    ? t
    : [];
}
function Gt(e, t) {
  const n = new Set(e);
  return (
    t.forEach((e) => {
      n.has(e) || n.add(e);
    }),
    Array.from(n)
  );
}
function Yt(e, t) {
  const n = new Set(e);
  return (
    t.forEach((e) => {
      n.has(e) && n.delete(e);
    }),
    Array.from(n)
  );
}
function Xt(e) {
  return 'group' === (null == e ? void 0 : e.type);
}
class Zt extends Error {
  constructor() {
    super();
    this.message =
      'SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.';
  }
}
function Jt(e, t, n, o) {
  const r = en(t, n, o, false),
    i = en(e, n, o, true),
    l = (function (e, t) {
      const n = new Set();
      return (
        e.forEach((e) => {
          const o = t.treeNodeMap.get(e);
          if (void 0 !== o) {
            let e = o.parent;
            for (; null !== e && !e.disabled && !n.has(e.key); ) {
              n.add(e.key);
              e = e.parent;
            }
          }
        }),
        n
      );
    })(e, n),
    a = [];
  return (
    r.forEach((e) => {
      (i.has(e) || l.has(e)) && a.push(e);
    }),
    a.forEach((e) => r.delete(e)),
    r
  );
}
function Qt(e, t) {
  const {
    checkedKeys: n,
    keysToCheck: o,
    keysToUncheck: r,
    indeterminateKeys: i,
    cascade: l,
    leafOnly: a,
    checkStrategy: s,
    allowNotLoaded: c,
  } = e;
  if (!l) {
    return void 0 !== o
      ? {
          checkedKeys: Gt(n, o),
          indeterminateKeys: Array.from(i),
        }
      : void 0 !== r
      ? {
          checkedKeys: Yt(n, r),
          indeterminateKeys: Array.from(i),
        }
      : {
          checkedKeys: Array.from(n),
          indeterminateKeys: Array.from(i),
        };
  }
  const { levelTreeNodeMap: u } = t;
  let d;
  d =
    void 0 !== r
      ? Jt(r, n, t, c)
      : void 0 !== o
      ? (function (e, t, n, o) {
          return en(t.concat(e), n, o, false);
        })(o, n, t, c)
      : en(n, t, c, false);
  const f = 'parent' === s,
    h = 'child' === s || a,
    p = d,
    v = new Set();
  for (let g = Math.max.apply(null, Array.from(u.keys())); g >= 0; g -= 1) {
    const e = 0 === g,
      t = u.get(g);
    for (const n of t) {
      if (n.isLeaf) {
        continue;
      }
      const { key: t, shallowLoaded: o } = n;
      if (
        (h &&
          o &&
          n.children.forEach((e) => {
            !e.disabled &&
              !e.isLeaf &&
              e.shallowLoaded &&
              p.has(e.key) &&
              p.delete(e.key);
          }),
        n.disabled || !o)
      ) {
        continue;
      }
      let r = true,
        i = false,
        l = true;
      for (const e of n.children) {
        const t = e.key;
        if (!e.disabled) {
          if ((l && (l = false), p.has(t))) {
            i = true;
          } else {
            if (v.has(t)) {
              i = true;
              r = false;
              break;
            }
            if (((r = false), i)) {
              break;
            }
          }
        }
      }
      r && !l
        ? (f &&
            n.children.forEach((e) => {
              !e.disabled && p.has(e.key) && p.delete(e.key);
            }),
          p.add(t))
        : i && v.add(t);
      e && h && p.has(t) && p.delete(t);
    }
  }
  return {
    checkedKeys: Array.from(p),
    indeterminateKeys: Array.from(v),
  };
}
function en(e, t, n, o) {
  const { treeNodeMap: r, getChildren: i } = t,
    l = new Set(),
    a = new Set(e);
  return (
    e.forEach((e) => {
      const t = r.get(e);
      void 0 !== t &&
        Dt(t, (e) => {
          if (e.disabled) {
            return _t.STOP;
          }
          const { key: t } = e;
          if (
            !l.has(t) &&
            (l.add(t),
            a.add(t),
            (function (e, t) {
              return false === e.isLeaf && !Array.isArray(t(e));
            })(e.rawNode, i))
          ) {
            if (o) {
              return _t.STOP;
            }
            if (!n) {
              throw new Zt();
            }
          }
        });
    }),
    a
  );
}
function tn(e, t) {
  const n = e.siblings,
    o = n.length,
    { index: r } = e;
  return t ? n[(r + 1) % o] : r === n.length - 1 ? null : n[r + 1];
}
function nn(e, t, { loop: n = false, includeDisabled: o = false } = {}) {
  const r = 'prev' === t ? on : tn,
    i = { reverse: 'prev' === t };
  let l = false,
    a = null;
  return (
    (function t(s) {
      if (null !== s) {
        if (s === e) {
          if (l) {
            if (!e.disabled && !e.isGroup) {
              return void (a = e);
            }
          } else {
            l = true;
          }
        } else {
          if ((!s.disabled || o) && !s.ignored && !s.isGroup) {
            return void (a = s);
          }
        }
        if (s.isGroup) {
          const e = rn(s, i);
          null !== e ? (a = e) : t(r(s, n));
        } else {
          const e = r(s, false);
          if (null !== e) {
            t(e);
          } else {
            const e = (function (e) {
              return e.parent;
            })(s);
            (null == e ? void 0 : e.isGroup) ? t(r(e, n)) : n && t(r(s, true));
          }
        }
      }
    })(e),
    a
  );
}
function on(e, t) {
  const n = e.siblings,
    o = n.length,
    { index: r } = e;
  return t ? n[(r - 1 + o) % o] : 0 === r ? null : n[r - 1];
}
function rn(e, t = {}) {
  const { reverse: n = false } = t,
    { children: o } = e;
  if (o) {
    const { length: e } = o,
      r = n ? -1 : e,
      i = n ? -1 : 1;
    for (let l = n ? e - 1 : 0; l !== r; l += i) {
      const e = o[l];
      if (!e.disabled && !e.ignored) {
        if (!e.isGroup) {
          return e;
        }
        {
          const n = rn(e, t);
          if (null !== n) {
            return n;
          }
        }
      }
    }
  }
  return null;
}
const ln = {
  getChild() {
    return this.ignored ? null : rn(this);
  },
  getParent() {
    const { parent: e } = this;
    return (null == e ? void 0 : e.isGroup) ? e.getParent() : e;
  },
  getNext(e = {}) {
    return nn(this, 'next', e);
  },
  getPrev(e = {}) {
    return nn(this, 'prev', e);
  },
};
function an(e, t, n, o, r, i = null, l = 0) {
  const a = [];
  return (
    e.forEach((s, c) => {
      var u;
      const d = Object.create(o);
      if (
        ((d.rawNode = s),
        (d.siblings = a),
        (d.level = l),
        (d.index = c),
        (d.isFirstChild = 0 === c),
        (d.isLastChild = c + 1 === e.length),
        (d.parent = i),
        !d.ignored)
      ) {
        const e = r(s);
        Array.isArray(e) && (d.children = an(e, t, n, o, r, d, l + 1));
      }
      a.push(d);
      t.set(d.key, d);
      n.has(l) || n.set(l, []);
      null === (u = n.get(l)) || void 0 === u || u.push(d);
    }),
    a
  );
}
function sn(e, t = {}) {
  var n;
  const o = new Map(),
    r = new Map(),
    {
      getDisabled: i = Vt,
      getIgnored: l = Kt,
      getIsGroup: a = Xt,
      getKey: s = Wt,
    } = t,
    c = null !== (n = t.getChildren) && void 0 !== n ? n : qt,
    u = t.ignoreEmptyChildren
      ? (e) => {
          const t = c(e);
          return Array.isArray(t) ? (t.length ? t : null) : t;
        }
      : c,
    d = Object.assign(
      {
        get key() {
          return s(this.rawNode);
        },
        get disabled() {
          return i(this.rawNode);
        },
        get isGroup() {
          return a(this.rawNode);
        },
        get isLeaf() {
          return (function (e, t) {
            const { isLeaf: n } = e;
            return void 0 !== n ? n : !t(e);
          })(this.rawNode, u);
        },
        get shallowLoaded() {
          return (function (e, t) {
            const { isLeaf: n } = e;
            return !(false === n && !Array.isArray(t(e)));
          })(this.rawNode, u);
        },
        get ignored() {
          return l(this.rawNode);
        },
        contains(e) {
          return (function (e, t) {
            const n = e.key;
            for (; t; ) {
              if (t.key === n) {
                return true;
              }
              t = t.parent;
            }
            return false;
          })(this, e);
        },
      },
      ln
    ),
    f = an(e, o, r, d, u);
  function h(e) {
    if (null == e) {
      return null;
    }
    const t = o.get(e);
    return t && !t.ignored ? t : null;
  }
  const p = {
    treeNodes: f,
    treeNodeMap: o,
    levelTreeNodeMap: r,
    maxLevel: Math.max(...r.keys()),
    getChildren: u,
    getFlattenedNodes: (e) =>
      (function (e, t) {
        const n = t ? new Set(t) : void 0,
          o = [];
        return (
          (function e(t) {
            t.forEach((t) => {
              o.push(t);
              t.isLeaf ||
                !t.children ||
                t.ignored ||
                ((t.isGroup || void 0 === n || n.has(t.key)) && e(t.children));
            });
          })(e),
          o
        );
      })(f, e),
    getNode: function (e) {
      if (null == e) {
        return null;
      }
      const t = o.get(e);
      return !t || t.isGroup || t.ignored ? null : t;
    },
    getPrev: function (e, t) {
      const n = h(e);
      return n ? n.getPrev(t) : null;
    },
    getNext: function (e, t) {
      const n = h(e);
      return n ? n.getNext(t) : null;
    },
    getParent: function (e) {
      const t = h(e);
      return t ? t.getParent() : null;
    },
    getChild: function (e) {
      const t = h(e);
      return t ? t.getChild() : null;
    },
    getFirstAvailableNode: () =>
      (function (e) {
        if (0 === e.length) {
          return null;
        }
        const t = e[0];
        return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
      })(f),
    getPath: (e, t = {}) =>
      (function (e, { includeGroup: t = false, includeSelf: n = true }, o) {
        var r;
        const i = o.treeNodeMap;
        let l =
          null == e ? null : null !== (r = i.get(e)) && void 0 !== r ? r : null;
        const a = {
          keyPath: [],
          treeNodePath: [],
          treeNode: l,
        };
        if (null == l ? void 0 : l.ignored) {
          return (a.treeNode = null), a;
        }
        for (; l; ) {
          l.ignored || (!t && l.isGroup) || a.treeNodePath.push(l);
          l = l.parent;
        }
        return (
          a.treeNodePath.reverse(),
          n || a.treeNodePath.pop(),
          (a.keyPath = a.treeNodePath.map((e) => e.key)),
          a
        );
      })(e, t, p),
    getCheckedKeys(e, t = {}) {
      const {
        cascade: n = true,
        leafOnly: o = false,
        checkStrategy: r = 'all',
        allowNotLoaded: i = false,
      } = t;
      return Qt(
        {
          checkedKeys: Ht(e),
          indeterminateKeys: Ut(e),
          cascade: n,
          leafOnly: o,
          checkStrategy: r,
          allowNotLoaded: i,
        },
        p
      );
    },
    check(e, t, n = {}) {
      const {
        cascade: o = true,
        leafOnly: r = false,
        checkStrategy: i = 'all',
        allowNotLoaded: l = false,
      } = n;
      return Qt(
        {
          checkedKeys: Ht(t),
          indeterminateKeys: Ut(t),
          keysToCheck: null == e ? [] : Lt(e),
          cascade: o,
          leafOnly: r,
          checkStrategy: i,
          allowNotLoaded: l,
        },
        p
      );
    },
    uncheck(e, t, n = {}) {
      const {
        cascade: o = true,
        leafOnly: r = false,
        checkStrategy: i = 'all',
        allowNotLoaded: l = false,
      } = n;
      return Qt(
        {
          checkedKeys: Ht(t),
          indeterminateKeys: Ut(t),
          keysToUncheck: null == e ? [] : Lt(e),
          cascade: o,
          leafOnly: r,
          checkStrategy: i,
          allowNotLoaded: l,
        },
        p
      );
    },
    getNonLeafKeys: (e = {}) =>
      (function (e, t = {}) {
        const { preserveGroup: n = false } = t,
          o = [],
          r = n
            ? (e) => {
                e.isLeaf || (o.push(e.key), i(e.children));
              }
            : (e) => {
                e.isLeaf || (e.isGroup || o.push(e.key), i(e.children));
              };
        function i(e) {
          e.forEach(r);
        }
        return i(e), o;
      })(f, e),
  };
  return p;
}
const cn = e.cB(
    'empty',
    '\n display: flex;\n flex-direction: column;\n align-items: center;\n font-size: var(--n-font-size);\n',
    [
      e.cE(
        'icon',
        '\n width: var(--n-icon-size);\n height: var(--n-icon-size);\n font-size: var(--n-icon-size);\n line-height: var(--n-icon-size);\n color: var(--n-icon-color);\n transition:\n color .3s var(--n-bezier);\n ',
        [e.c('+', [e.cE('description', '\n margin-top: 8px;\n ')])]
      ),
      e.cE(
        'description',
        '\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n '
      ),
      e.cE(
        'extra',
        '\n text-align: center;\n transition: color .3s var(--n-bezier);\n margin-top: 12px;\n color: var(--n-extra-text-color);\n '
      ),
    ]
  ),
  un = Object.assign(Object.assign({}, e.useTheme.props), {
    description: String,
    showDescription: {
      type: Boolean,
      default: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
    renderIcon: Function,
  }),
  dn = e.defineComponent({
    name: 'Empty',
    props: un,
    setup(n) {
      const { mergedClsPrefixRef: o, inlineThemeDisabled: r } = e.useConfig(n),
        i = e.useTheme('Empty', '-empty', cn, e.emptyLight, n, o),
        { localeRef: l } = t.useLocale('Empty'),
        a = e.inject(e.configProviderInjectionKey, null),
        s = e.computed(() => {
          var e, t, o;
          return null !== (e = n.description) && void 0 !== e
            ? e
            : null ===
                (o =
                  null ===
                    (t =
                      null == a ? void 0 : a.mergedComponentPropsRef.value) ||
                  void 0 === t
                    ? void 0
                    : t.Empty) || void 0 === o
            ? void 0
            : o.description;
        }),
        c = e.computed(() => {
          var t, n;
          return (
            (null ===
              (n =
                null ===
                  (t = null == a ? void 0 : a.mergedComponentPropsRef.value) ||
                void 0 === t
                  ? void 0
                  : t.Empty) || void 0 === n
              ? void 0
              : n.renderIcon) || (() => e.h(It, null))
          );
        }),
        u = e.computed(() => {
          const { size: t } = n,
            {
              common: { cubicBezierEaseInOut: o },
              self: {
                [e.createKey('iconSize', t)]: r,
                [e.createKey('fontSize', t)]: l,
                textColor: a,
                iconColor: s,
                extraTextColor: c,
              },
            } = i.value;
          return {
            '--n-icon-size': r,
            '--n-font-size': l,
            '--n-bezier': o,
            '--n-text-color': a,
            '--n-icon-color': s,
            '--n-extra-text-color': c,
          };
        }),
        d = r
          ? e.useThemeClass(
              'empty',
              e.computed(() => {
                let e = '';
                const { size: t } = n;
                return (e += t[0]), e;
              }),
              u,
              n
            )
          : void 0;
      return {
        mergedClsPrefix: o,
        mergedRenderIcon: c,
        localizedDescription: e.computed(() => s.value || l.value.description),
        cssVars: r ? void 0 : u,
        themeClass: null == d ? void 0 : d.themeClass,
        onRender: null == d ? void 0 : d.onRender,
      };
    },
    render() {
      const { $slots: t, mergedClsPrefix: n, onRender: o } = this;
      return (
        null == o || o(),
        e.h(
          'div',
          {
            class: [`${n}-empty`, this.themeClass],
            style: this.cssVars,
          },
          this.showIcon
            ? e.h(
                'div',
                { class: `${n}-empty__icon` },
                t.icon
                  ? t.icon()
                  : e.h(
                      e.NBaseIcon,
                      { clsPrefix: n },
                      { default: this.mergedRenderIcon }
                    )
              )
            : null,
          this.showDescription
            ? e.h(
                'div',
                { class: `${n}-empty__description` },
                t.default ? t.default() : this.localizedDescription
              )
            : null,
          t.extra ? e.h('div', { class: `${n}-empty__extra` }, t.extra()) : null
        )
      );
    },
  });
const fn = e.defineComponent({
    name: 'NBaseSelectOption',
    props: {
      clsPrefix: {
        type: String,
        required: true,
      },
      tmNode: {
        type: Object,
        required: true,
      },
    },
    setup(t) {
      const {
          valueRef: n,
          pendingTmNodeRef: o,
          multipleRef: r,
          valueSetRef: i,
          renderLabelRef: l,
          renderOptionRef: a,
          labelFieldRef: s,
          valueFieldRef: c,
          showCheckmarkRef: u,
          nodePropsRef: d,
          handleOptionClick: f,
          handleOptionMouseEnter: h,
        } = e.inject(y),
        p = e.useMemo(() => {
          const { value: e } = o;
          return !!e && t.tmNode.key === e.key;
        });
      return {
        multiple: r,
        isGrouped: e.useMemo(() => {
          const { tmNode: e } = t,
            { parent: n } = e;
          return n && 'group' === n.rawNode.type;
        }),
        showCheckmark: u,
        nodeProps: d,
        isPending: p,
        isSelected: e.useMemo(() => {
          const { value: e } = n,
            { value: o } = r;
          if (null === e) {
            return false;
          }
          const l = t.tmNode.rawNode[c.value];
          if (o) {
            const { value: e } = i;
            return e.has(l);
          }
          return e === l;
        }),
        labelField: s,
        renderLabel: l,
        renderOption: a,
        handleMouseMove: function (e) {
          const { tmNode: n } = t,
            { value: o } = p;
          n.disabled || o || h(e, n);
        },
        handleMouseEnter: function (e) {
          const { tmNode: n } = t;
          n.disabled || h(e, n);
        },
        handleClick: function (e) {
          const { tmNode: n } = t;
          n.disabled || f(e, n);
        },
      };
    },
    render() {
      const {
          clsPrefix: t,
          tmNode: { rawNode: n },
          isSelected: o,
          isPending: r,
          isGrouped: i,
          showCheckmark: l,
          nodeProps: a,
          renderOption: c,
          renderLabel: u,
          handleClick: d,
          handleMouseEnter: f,
          handleMouseMove: h,
        } = this,
        p = (function (t, n) {
          return e.h(
            e.Transition,
            { name: 'fade-in-scale-up-transition' },
            {
              default: () =>
                t
                  ? e.h(
                      e.NBaseIcon,
                      {
                        clsPrefix: n,
                        class: `${n}-base-select-option__check`,
                      },
                      { default: () => e.h(jt) }
                    )
                  : null,
            }
          );
        })(o, t),
        v = u
          ? [u(n, o), l && p]
          : [e.render(n[this.labelField], n, o), l && p],
        g = null == a ? void 0 : a(n),
        m = e.h(
          'div',
          Object.assign({}, g, {
            class: [
              `${t}-base-select-option`,
              n.class,
              null == g ? void 0 : g.class,
              {
                [`${t}-base-select-option--disabled`]: n.disabled,
                [`${t}-base-select-option--selected`]: o,
                [`${t}-base-select-option--grouped`]: i,
                [`${t}-base-select-option--pending`]: r,
                [`${t}-base-select-option--show-checkmark`]: l,
              },
            ],
            style: [(null == g ? void 0 : g.style) || '', n.style || ''],
            onClick: s([d, null == g ? void 0 : g.onClick]),
            onMouseenter: s([f, null == g ? void 0 : g.onMouseenter]),
            onMousemove: s([h, null == g ? void 0 : g.onMousemove]),
          }),
          e.h('div', { class: `${t}-base-select-option__content` }, v)
        );
      return n.render
        ? n.render({
            node: m,
            option: n,
            selected: o,
          })
        : c
        ? c({
            node: m,
            option: n,
            selected: o,
          })
        : m;
    },
  }),
  hn = e.defineComponent({
    name: 'NBaseSelectGroupHeader',
    props: {
      clsPrefix: {
        type: String,
        required: true,
      },
      tmNode: {
        type: Object,
        required: true,
      },
    },
    setup() {
      const {
        renderLabelRef: t,
        renderOptionRef: n,
        labelFieldRef: o,
        nodePropsRef: r,
      } = e.inject(y);
      return {
        labelField: o,
        nodeProps: r,
        renderLabel: t,
        renderOption: n,
      };
    },
    render() {
      const {
          clsPrefix: t,
          renderLabel: n,
          renderOption: o,
          nodeProps: r,
          tmNode: { rawNode: i },
        } = this,
        l = null == r ? void 0 : r(i),
        a = n ? n(i, false) : e.render(i[this.labelField], i, false),
        s = e.h(
          'div',
          Object.assign({}, l, {
            class: [
              `${t}-base-select-group-header`,
              null == l ? void 0 : l.class,
            ],
          }),
          a
        );
      return i.render
        ? i.render({
            node: s,
            option: i,
          })
        : o
        ? o({
            node: s,
            option: i,
            selected: false,
          })
        : s;
    },
  }),
  pn = e.cB(
    'base-select-menu',
    '\n line-height: 1.5;\n outline: none;\n z-index: 0;\n position: relative;\n border-radius: var(--n-border-radius);\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n background-color: var(--n-color);\n',
    [
      e.cB('scrollbar', '\n max-height: var(--n-height);\n '),
      e.cB('virtual-list', '\n max-height: var(--n-height);\n '),
      e.cB(
        'base-select-option',
        '\n min-height: var(--n-option-height);\n font-size: var(--n-option-font-size);\n display: flex;\n align-items: center;\n ',
        [
          e.cE(
            'content',
            '\n z-index: 1;\n white-space: nowrap;\n text-overflow: ellipsis;\n overflow: hidden;\n '
          ),
        ]
      ),
      e.cB(
        'base-select-group-header',
        '\n min-height: var(--n-option-height);\n font-size: .93em;\n display: flex;\n align-items: center;\n '
      ),
      e.cB(
        'base-select-menu-option-wrapper',
        '\n position: relative;\n width: 100%;\n '
      ),
      e.cE(
        'loading, empty',
        '\n display: flex;\n padding: 12px 32px;\n flex: 1;\n justify-content: center;\n '
      ),
      e.cE(
        'loading',
        '\n color: var(--n-loading-color);\n font-size: var(--n-loading-size);\n '
      ),
      e.cE(
        'action',
        '\n padding: 8px var(--n-option-padding-left);\n font-size: var(--n-option-font-size);\n transition: \n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n border-top: 1px solid var(--n-action-divider-color);\n color: var(--n-action-text-color);\n '
      ),
      e.cB(
        'base-select-group-header',
        '\n position: relative;\n cursor: default;\n padding: var(--n-option-padding);\n color: var(--n-group-header-text-color);\n '
      ),
      e.cB(
        'base-select-option',
        '\n cursor: pointer;\n position: relative;\n padding: var(--n-option-padding);\n transition:\n color .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n box-sizing: border-box;\n color: var(--n-option-text-color);\n opacity: 1;\n ',
        [
          e.cM(
            'show-checkmark',
            '\n padding-right: calc(var(--n-option-padding-right) + 20px);\n '
          ),
          e.c(
            '&::before',
            '\n content: "";\n position: absolute;\n left: 4px;\n right: 4px;\n top: 0;\n bottom: 0;\n border-radius: var(--n-border-radius);\n transition: background-color .3s var(--n-bezier);\n '
          ),
          e.c('&:active', '\n color: var(--n-option-text-color-pressed);\n '),
          e.cM(
            'grouped',
            '\n padding-left: calc(var(--n-option-padding-left) * 1.5);\n '
          ),
          e.cM('pending', [
            e.c(
              '&::before',
              '\n background-color: var(--n-option-color-pending);\n '
            ),
          ]),
          e.cM('selected', '\n color: var(--n-option-text-color-active);\n ', [
            e.c(
              '&::before',
              '\n background-color: var(--n-option-color-active);\n '
            ),
            e.cM('pending', [
              e.c(
                '&::before',
                '\n background-color: var(--n-option-color-active-pending);\n '
              ),
            ]),
          ]),
          e.cM('disabled', '\n cursor: not-allowed;\n ', [
            e.cNotM(
              'selected',
              '\n color: var(--n-option-text-color-disabled);\n '
            ),
            e.cM(
              'selected',
              '\n opacity: var(--n-option-opacity-disabled);\n '
            ),
          ]),
          e.cE(
            'check',
            '\n font-size: 16px;\n position: absolute;\n right: calc(var(--n-option-padding-right) - 4px);\n top: calc(50% - 7px);\n color: var(--n-option-check-color);\n transition: color .3s var(--n-bezier);\n ',
            [e.fadeInScaleUpTransition({ enterScale: '0.5' })]
          ),
        ]
      ),
    ]
  ),
  vn = e.defineComponent({
    name: 'InternalSelectMenu',
    props: Object.assign(Object.assign({}, e.useTheme.props), {
      clsPrefix: {
        type: String,
        required: true,
      },
      scrollable: {
        type: Boolean,
        default: true,
      },
      treeMate: {
        type: Object,
        required: true,
      },
      multiple: Boolean,
      size: {
        type: String,
        default: 'medium',
      },
      value: {
        type: [String, Number, Array],
        default: null,
      },
      autoPending: Boolean,
      virtualScroll: {
        type: Boolean,
        default: true,
      },
      show: {
        type: Boolean,
        default: true,
      },
      labelField: {
        type: String,
        default: 'label',
      },
      valueField: {
        type: String,
        default: 'value',
      },
      loading: Boolean,
      focusable: Boolean,
      renderLabel: Function,
      renderOption: Function,
      nodeProps: Function,
      showCheckmark: {
        type: Boolean,
        default: true,
      },
      onMousedown: Function,
      onScroll: Function,
      onFocus: Function,
      onBlur: Function,
      onKeyup: Function,
      onKeydown: Function,
      onTabOut: Function,
      onMouseenter: Function,
      onMouseleave: Function,
      onResize: Function,
      resetMenuOnOptionsChange: {
        type: Boolean,
        default: true,
      },
      inlineThemeDisabled: Boolean,
      onToggle: Function,
    }),
    setup(t) {
      const n = e.useTheme(
          'InternalSelectMenu',
          '-internal-select-menu',
          pn,
          e.internalSelectMenuLight,
          t,
          e.toRef(t, 'clsPrefix')
        ),
        o = e.ref(null),
        r = e.ref(null),
        i = e.ref(null),
        a = e.computed(() => t.treeMate.getFlattenedNodes()),
        s = e.computed(() =>
          (function (e) {
            const t = new Map();
            return (
              e.forEach((e, n) => {
                t.set(e.key, n);
              }),
              (e) => {
                var n;
                return null !== (n = t.get(e)) && void 0 !== n ? n : null;
              }
            );
          })(a.value)
        ),
        c = e.ref(null);
      function u() {
        const { value: e } = c;
        e && !t.treeMate.getNode(e.key) && (c.value = null);
      }
      let d;
      e.watch(
        () => t.show,
        (n) => {
          n
            ? (d = e.watch(
                () => t.treeMate,
                () => {
                  t.resetMenuOnOptionsChange
                    ? (t.autoPending
                        ? (function () {
                            const { treeMate: e } = t;
                            let n = null;
                            const { value: o } = t;
                            null === o
                              ? (n = e.getFirstAvailableNode())
                              : ((n = t.multiple
                                  ? e.getNode((o || [])[(o || []).length - 1])
                                  : e.getNode(o)),
                                (n && !n.disabled) ||
                                  (n = e.getFirstAvailableNode()));
                            m(n || null);
                          })()
                        : u(),
                      e.nextTick(b))
                    : u();
                },
                { immediate: true }
              ))
            : null == d || d();
        },
        { immediate: true }
      );
      e.onBeforeUnmount(() => {
        null == d || d();
      });
      const f = e.computed(() =>
          e.depx(n.value.self[e.createKey('optionHeight', t.size)])
        ),
        h = e.computed(() =>
          e.getMargin(n.value.self[e.createKey('padding', t.size)])
        ),
        p = e.computed(() =>
          t.multiple && Array.isArray(t.value) ? new Set(t.value) : new Set()
        ),
        v = e.computed(() => {
          const e = a.value;
          return e && 0 === e.length;
        });
      function g(e) {
        const { onScroll: n } = t;
        n && n(e);
      }
      function m(e, t = false) {
        c.value = e;
        t && b();
      }
      function b() {
        var e, n;
        const o = c.value;
        if (!o) {
          return;
        }
        const l = s.value(o.key);
        null !== l &&
          (t.virtualScroll
            ? null === (e = r.value) || void 0 === e || e.scrollTo({ index: l })
            : null === (n = i.value) ||
              void 0 === n ||
              n.scrollTo({
                index: l,
                elSize: f.value,
              }));
      }
      e.provide(y, {
        handleOptionMouseEnter: function (e, t) {
          t.disabled || m(t, false);
        },
        handleOptionClick: function (e, n) {
          n.disabled ||
            (function (e) {
              const { onToggle: n } = t;
              n && n(e);
            })(n);
        },
        valueSetRef: p,
        pendingTmNodeRef: c,
        nodePropsRef: e.toRef(t, 'nodeProps'),
        showCheckmarkRef: e.toRef(t, 'showCheckmark'),
        multipleRef: e.toRef(t, 'multiple'),
        valueRef: e.toRef(t, 'value'),
        renderLabelRef: e.toRef(t, 'renderLabel'),
        renderOptionRef: e.toRef(t, 'renderOption'),
        labelFieldRef: e.toRef(t, 'labelField'),
        valueFieldRef: e.toRef(t, 'valueField'),
      });
      e.provide(w, o);
      e.onMounted(() => {
        const { value: e } = i;
        e && e.sync();
      });
      const x = e.computed(() => {
          const { size: o } = t,
            {
              common: { cubicBezierEaseInOut: r },
              self: {
                height: i,
                borderRadius: l,
                color: a,
                groupHeaderTextColor: s,
                actionDividerColor: c,
                optionTextColorPressed: u,
                optionTextColor: d,
                optionTextColorDisabled: f,
                optionTextColorActive: h,
                optionOpacityDisabled: p,
                optionCheckColor: v,
                actionTextColor: g,
                optionColorPending: m,
                optionColorActive: b,
                loadingColor: y,
                loadingSize: w,
                optionColorActivePending: x,
                [e.createKey('optionFontSize', o)]: C,
                [e.createKey('optionHeight', o)]: k,
                [e.createKey('optionPadding', o)]: S,
              },
            } = n.value;
          return {
            '--n-height': i,
            '--n-action-divider-color': c,
            '--n-action-text-color': g,
            '--n-bezier': r,
            '--n-border-radius': l,
            '--n-color': a,
            '--n-option-font-size': C,
            '--n-group-header-text-color': s,
            '--n-option-check-color': v,
            '--n-option-color-pending': m,
            '--n-option-color-active': b,
            '--n-option-color-active-pending': x,
            '--n-option-height': k,
            '--n-option-opacity-disabled': p,
            '--n-option-text-color': d,
            '--n-option-text-color-active': h,
            '--n-option-text-color-disabled': f,
            '--n-option-text-color-pressed': u,
            '--n-option-padding': S,
            '--n-option-padding-left': e.getMargin(S, 'left'),
            '--n-option-padding-right': e.getMargin(S, 'right'),
            '--n-loading-color': y,
            '--n-loading-size': w,
          };
        }),
        { inlineThemeDisabled: C } = t,
        k = C
          ? e.useThemeClass(
              'internal-select-menu',
              e.computed(() => t.size[0]),
              x,
              t
            )
          : void 0,
        S = {
          selfRef: o,
          next: function () {
            const { value: e } = c;
            e && m(e.getNext({ loop: true }), true);
          },
          prev: function () {
            const { value: e } = c;
            e && m(e.getPrev({ loop: true }), true);
          },
          getPendingTmNode: function () {
            const { value: e } = c;
            return e || null;
          },
        };
      return (
        ee(o, t.onResize),
        Object.assign(
          {
            mergedTheme: n,
            virtualListRef: r,
            scrollbarRef: i,
            itemSize: f,
            padding: h,
            flattenedNodes: a,
            empty: v,
            virtualListContainer() {
              const { value: e } = r;
              return null == e ? void 0 : e.listElRef;
            },
            virtualListContent() {
              const { value: e } = r;
              return null == e ? void 0 : e.itemsElRef;
            },
            doScroll: g,
            handleFocusin: function (e) {
              var n, r;
              (null === (n = o.value) || void 0 === n
                ? void 0
                : n.contains(e.target)) &&
                (null === (r = t.onFocus) || void 0 === r || r.call(t, e));
            },
            handleFocusout: function (e) {
              var n, r;
              (null === (n = o.value) || void 0 === n
                ? void 0
                : n.contains(e.relatedTarget)) ||
                null === (r = t.onBlur) ||
                void 0 === r ||
                r.call(t, e);
            },
            handleKeyUp: function (e) {
              var n;
              l(e, 'action') ||
                null === (n = t.onKeyup) ||
                void 0 === n ||
                n.call(t, e);
            },
            handleKeyDown: function (e) {
              var n;
              l(e, 'action') ||
                null === (n = t.onKeydown) ||
                void 0 === n ||
                n.call(t, e);
            },
            handleMouseDown: function (e) {
              var n;
              null === (n = t.onMousedown) || void 0 === n || n.call(t, e);
              t.focusable || e.preventDefault();
            },
            handleVirtualListResize: function () {
              var e;
              null === (e = i.value) || void 0 === e || e.sync();
            },
            handleVirtualListScroll: function (e) {
              var t;
              null === (t = i.value) || void 0 === t || t.sync();
              g(e);
            },
            cssVars: C ? void 0 : x,
            themeClass: null == k ? void 0 : k.themeClass,
            onRender: null == k ? void 0 : k.onRender,
          },
          S
        )
      );
    },
    render() {
      const {
        $slots: t,
        virtualScroll: n,
        clsPrefix: o,
        mergedTheme: r,
        themeClass: i,
        onRender: l,
      } = this;
      return (
        null == l || l(),
        e.h(
          'div',
          {
            ref: 'selfRef',
            tabindex: this.focusable ? 0 : -1,
            class: [
              `${o}-base-select-menu`,
              i,
              this.multiple && `${o}-base-select-menu--multiple`,
            ],
            style: this.cssVars,
            onFocusin: this.handleFocusin,
            onFocusout: this.handleFocusout,
            onKeyup: this.handleKeyUp,
            onKeydown: this.handleKeyDown,
            onMousedown: this.handleMouseDown,
            onMouseenter: this.onMouseenter,
            onMouseleave: this.onMouseleave,
          },
          this.loading
            ? e.h(
                'div',
                { class: `${o}-base-select-menu__loading` },
                e.h(e.NBaseLoading, {
                  clsPrefix: o,
                  strokeWidth: 20,
                })
              )
            : this.empty
            ? e.h(
                'div',
                {
                  class: `${o}-base-select-menu__empty`,
                  'data-empty': true,
                },
                e.resolveSlot(t.empty, () => [
                  e.h(dn, {
                    theme: r.peers.Empty,
                    themeOverrides: r.peerOverrides.Empty,
                  }),
                ])
              )
            : e.h(
                e.NScrollbar,
                {
                  ref: 'scrollbarRef',
                  theme: r.peers.Scrollbar,
                  themeOverrides: r.peerOverrides.Scrollbar,
                  scrollable: this.scrollable,
                  container: n ? this.virtualListContainer : void 0,
                  content: n ? this.virtualListContent : void 0,
                  onScroll: n ? void 0 : this.doScroll,
                },
                {
                  default: () =>
                    n
                      ? e.h(
                          X,
                          {
                            ref: 'virtualListRef',
                            class: `${o}-virtual-list`,
                            items: this.flattenedNodes,
                            itemSize: this.itemSize,
                            showScrollbar: false,
                            paddingTop: this.padding.top,
                            paddingBottom: this.padding.bottom,
                            onResize: this.handleVirtualListResize,
                            onScroll: this.handleVirtualListScroll,
                            itemResizable: true,
                          },
                          {
                            default: ({ item: t }) =>
                              t.isGroup
                                ? e.h(hn, {
                                    key: t.key,
                                    clsPrefix: o,
                                    tmNode: t,
                                  })
                                : t.ignored
                                ? null
                                : e.h(fn, {
                                    clsPrefix: o,
                                    key: t.key,
                                    tmNode: t,
                                  }),
                          }
                        )
                      : e.h(
                          'div',
                          {
                            class: `${o}-base-select-menu-option-wrapper`,
                            style: {
                              paddingTop: this.padding.top,
                              paddingBottom: this.padding.bottom,
                            },
                          },
                          this.flattenedNodes.map((t) =>
                            t.isGroup
                              ? e.h(hn, {
                                  key: t.key,
                                  clsPrefix: o,
                                  tmNode: t,
                                })
                              : e.h(fn, {
                                  clsPrefix: o,
                                  key: t.key,
                                  tmNode: t,
                                })
                          )
                        ),
                }
              ),
          e.resolveWrappedSlot(
            t.action,
            (t) =>
              t && [
                e.h(
                  'div',
                  {
                    class: `${o}-base-select-menu__action`,
                    'data-action': true,
                    key: 'action',
                  },
                  t
                ),
                e.h(Nt, {
                  onFocus: this.onTabOut,
                  key: 'focus-detector',
                }),
              ]
          )
        )
      );
    },
  }),
  gn = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
  },
  mn = 'var(--n-arrow-height) * 1.414',
  bn = e.c([
    e.cB(
      'popover',
      '\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n position: relative;\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n box-shadow: var(--n-box-shadow);\n word-break: break-word;\n ',
      [
        e.c('>', [
          e.cB('scrollbar', '\n height: inherit;\n max-height: inherit;\n '),
        ]),
        e.cNotM(
          'raw',
          '\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n ',
          [
            e.cNotM('scrollable', [
              e.cNotM('show-header-or-footer', 'padding: var(--n-padding);'),
            ]),
          ]
        ),
        e.cE(
          'header',
          '\n padding: var(--n-padding);\n border-bottom: 1px solid var(--n-divider-color);\n transition: border-color .3s var(--n-bezier);\n '
        ),
        e.cE(
          'footer',
          '\n padding: var(--n-padding);\n border-top: 1px solid var(--n-divider-color);\n transition: border-color .3s var(--n-bezier);\n '
        ),
        e.cM('scrollable, show-header-or-footer', [
          e.cE('content', '\n padding: var(--n-padding);\n '),
        ]),
      ]
    ),
    e.cB('popover-shared', '\n transform-origin: inherit;\n ', [
      e.cB(
        'popover-arrow-wrapper',
        '\n position: absolute;\n overflow: hidden;\n pointer-events: none;\n ',
        [
          e.cB(
            'popover-arrow',
            `\n transition: background-color .3s var(--n-bezier);\n position: absolute;\n display: block;\n width: calc(${mn});\n height: calc(${mn});\n box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);\n transform: rotate(45deg);\n background-color: var(--n-color);\n pointer-events: all;\n `
          ),
        ]
      ),
      e.c(
        '&.popover-transition-enter-from, &.popover-transition-leave-to',
        '\n opacity: 0;\n transform: scale(.85);\n '
      ),
      e.c(
        '&.popover-transition-enter-to, &.popover-transition-leave-from',
        '\n transform: scale(1);\n opacity: 1;\n '
      ),
      e.c(
        '&.popover-transition-enter-active',
        '\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .15s var(--n-bezier-ease-out),\n transform .15s var(--n-bezier-ease-out);\n '
      ),
      e.c(
        '&.popover-transition-leave-active',
        '\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .15s var(--n-bezier-ease-in),\n transform .15s var(--n-bezier-ease-in);\n '
      ),
    ]),
    Cn(
      'top-start',
      `\n top: calc(${mn} / -2);\n left: calc(${xn(
        'top-start'
      )} - var(--v-offset-left));\n `
    ),
    Cn(
      'top',
      `\n top: calc(${mn} / -2);\n transform: translateX(calc(${mn} / -2)) rotate(45deg);\n left: 50%;\n `
    ),
    Cn(
      'top-end',
      `\n top: calc(${mn} / -2);\n right: calc(${xn(
        'top-end'
      )} + var(--v-offset-left));\n `
    ),
    Cn(
      'bottom-start',
      `\n bottom: calc(${mn} / -2);\n left: calc(${xn(
        'bottom-start'
      )} - var(--v-offset-left));\n `
    ),
    Cn(
      'bottom',
      `\n bottom: calc(${mn} / -2);\n transform: translateX(calc(${mn} / -2)) rotate(45deg);\n left: 50%;\n `
    ),
    Cn(
      'bottom-end',
      `\n bottom: calc(${mn} / -2);\n right: calc(${xn(
        'bottom-end'
      )} + var(--v-offset-left));\n `
    ),
    Cn(
      'left-start',
      `\n left: calc(${mn} / -2);\n top: calc(${xn(
        'left-start'
      )} - var(--v-offset-top));\n `
    ),
    Cn(
      'left',
      `\n left: calc(${mn} / -2);\n transform: translateY(calc(${mn} / -2)) rotate(45deg);\n top: 50%;\n `
    ),
    Cn(
      'left-end',
      `\n left: calc(${mn} / -2);\n bottom: calc(${xn(
        'left-end'
      )} + var(--v-offset-top));\n `
    ),
    Cn(
      'right-start',
      `\n right: calc(${mn} / -2);\n top: calc(${xn(
        'right-start'
      )} - var(--v-offset-top));\n `
    ),
    Cn(
      'right',
      `\n right: calc(${mn} / -2);\n transform: translateY(calc(${mn} / -2)) rotate(45deg);\n top: 50%;\n `
    ),
    Cn(
      'right-end',
      `\n right: calc(${mn} / -2);\n bottom: calc(${xn(
        'right-end'
      )} + var(--v-offset-top));\n `
    ),
    ...((yn = {
      top: ['right-start', 'left-start'],
      right: ['top-end', 'bottom-end'],
      bottom: ['right-end', 'left-end'],
      left: ['top-start', 'bottom-start'],
    }),
    (wn = (t, n) => {
      const o = ['right', 'left'].includes(n),
        r = o ? 'width' : 'height';
      return t.map((t) => {
        const i = 'end' === t.split('-')[1],
          l = `calc((var(--v-target-${r}, 0px) - ${mn}) / 2)`,
          a = xn(t);
        return e.c(`[v-placement="${t}"] >`, [
          e.cB('popover-shared', [
            e.cM('center-arrow', [
              e.cB(
                'popover-arrow',
                `${n}: calc(max(${l}, ${a}) ${i ? '+' : '-'} var(--v-offset-${
                  o ? 'left' : 'top'
                }));`
              ),
            ]),
          ]),
        ]);
      });
    }),
    (e.isArray(yn) ? e.arrayMap : At)(yn, Ft(wn))),
  ]);
var yn, wn;
function xn(e) {
  return ['top', 'bottom'].includes(e.split('-')[0])
    ? 'var(--n-arrow-offset)'
    : 'var(--n-arrow-offset-vertical)';
}
function Cn(t, n) {
  const o = t.split('-')[0],
    r = ['top', 'bottom'].includes(o)
      ? 'height: var(--n-space-arrow);'
      : 'width: var(--n-space-arrow);';
  return e.c(`[v-placement="${t}"] >`, [
    e.cB('popover-shared', `\n margin-${gn[o]}: var(--n-space);\n `, [
      e.cM('show-arrow', `\n margin-${gn[o]}: var(--n-space-arrow);\n `),
      e.cM('overlap', '\n margin: 0;\n '),
      e.cCB(
        'popover-arrow-wrapper',
        `\n right: 0;\n left: 0;\n top: 0;\n bottom: 0;\n ${o}: 100%;\n ${gn[o]}: auto;\n ${r}\n `,
        [e.cB('popover-arrow', n)]
      ),
    ]),
  ]);
}
const kn = Object.assign(Object.assign({}, e.useTheme.props), {
    to: C.propTo,
    show: Boolean,
    trigger: String,
    showArrow: Boolean,
    delay: Number,
    duration: Number,
    raw: Boolean,
    arrowPointToCenter: Boolean,
    arrowStyle: [String, Object],
    displayDirective: String,
    x: Number,
    y: Number,
    flip: Boolean,
    overlap: Boolean,
    placement: String,
    width: [Number, String],
    keepAliveOnHover: Boolean,
    scrollable: Boolean,
    contentStyle: [Object, String],
    headerStyle: [Object, String],
    footerStyle: [Object, String],
    internalDeactivateImmediately: Boolean,
    animated: Boolean,
    onClickoutside: Function,
    internalTrapFocus: Boolean,
    internalOnAfterLeave: Function,
    minWidth: Number,
    maxWidth: Number,
  }),
  Sn = ({ arrowStyle: t, clsPrefix: n }) =>
    e.h(
      'div',
      {
        key: '__popover-arrow__',
        class: `${n}-popover-arrow-wrapper`,
      },
      e.h('div', {
        class: `${n}-popover-arrow`,
        style: t,
      })
    ),
  Mn = e.defineComponent({
    name: 'PopoverBody',
    inheritAttrs: false,
    props: kn,
    setup(t, { slots: n, attrs: o }) {
      const {
          namespaceRef: r,
          mergedClsPrefixRef: i,
          inlineThemeDisabled: l,
        } = e.useConfig(t),
        a = e.useTheme('Popover', '-popover', bn, e.popoverLight, t, i),
        s = e.ref(null),
        c = e.inject('NPopover'),
        u = e.ref(null),
        h = e.ref(t.show),
        p = e.ref(false);
      e.watchEffect(() => {
        const { show: e } = t;
        !e ||
          (void 0 === f &&
            (f =
              navigator.userAgent.includes('Node.js') ||
              navigator.userAgent.includes('jsdom')),
          f) ||
          t.internalDeactivateImmediately ||
          (p.value = true);
      });
      const v = e.computed(() => {
          const { trigger: n, onClickoutside: o } = t,
            r = [],
            {
              positionManuallyRef: { value: i },
            } = c;
          return (
            i ||
              ('click' !== n ||
                o ||
                r.push([e.clickoutside, k, void 0, { capture: true }]),
              'hover' === n && r.push([P, x])),
            o && r.push([e.clickoutside, k, void 0, { capture: true }]),
            ('show' === t.displayDirective || (t.animated && p.value)) &&
              r.push([e.vShow, t.show]),
            r
          );
        }),
        g = e.computed(() => {
          const e = 'trigger' === t.width ? void 0 : d(t.width),
            n = [];
          e && n.push({ width: e });
          const { maxWidth: o, minWidth: r } = t;
          return (
            o && n.push({ maxWidth: d(o) }),
            r && n.push({ maxWidth: d(r) }),
            l || n.push(m.value),
            n
          );
        }),
        m = e.computed(() => {
          const {
            common: {
              cubicBezierEaseInOut: e,
              cubicBezierEaseIn: t,
              cubicBezierEaseOut: n,
            },
            self: {
              space: o,
              spaceArrow: r,
              padding: i,
              fontSize: l,
              textColor: s,
              dividerColor: c,
              color: u,
              boxShadow: d,
              borderRadius: f,
              arrowHeight: h,
              arrowOffset: p,
              arrowOffsetVertical: v,
            },
          } = a.value;
          return {
            '--n-box-shadow': d,
            '--n-bezier': e,
            '--n-bezier-ease-in': t,
            '--n-bezier-ease-out': n,
            '--n-font-size': l,
            '--n-text-color': s,
            '--n-color': u,
            '--n-divider-color': c,
            '--n-border-radius': f,
            '--n-arrow-height': h,
            '--n-arrow-offset': p,
            '--n-arrow-offset-vertical': v,
            '--n-padding': i,
            '--n-space': o,
            '--n-space-arrow': r,
          };
        }),
        b = l ? e.useThemeClass('popover', void 0, m, t) : void 0;
      function y(e) {
        'hover' === t.trigger &&
          t.keepAliveOnHover &&
          t.show &&
          c.handleMouseEnter(e);
      }
      function w(e) {
        'hover' === t.trigger && t.keepAliveOnHover && c.handleMouseLeave(e);
      }
      function x(n) {
        'hover' !== t.trigger ||
          S().contains(e.getPreciseEventTarget(n)) ||
          c.handleMouseMoveOutside(n);
      }
      function k(n) {
        (('click' === t.trigger && !S().contains(e.getPreciseEventTarget(n))) ||
          t.onClickoutside) &&
          c.handleClickOutside(n);
      }
      function S() {
        return c.getTriggerElement();
      }
      return (
        c.setBodyInstance({
          syncPosition: function () {
            var e;
            null === (e = s.value) || void 0 === e || e.syncPosition();
          },
        }),
        e.onBeforeUnmount(() => {
          c.setBodyInstance(null);
        }),
        e.watch(e.toRef(t, 'show'), (e) => {
          t.animated || (h.value = !!e);
        }),
        e.provide(e.popoverBodyInjectionKey, u),
        e.provide(e.drawerBodyInjectionKey, null),
        e.provide(e.modalBodyInjectionKey, null),
        {
          displayed: p,
          namespace: r,
          isMounted: c.isMountedRef,
          zIndex: c.zIndexRef,
          followerRef: s,
          adjustedTo: C(t),
          followerEnabled: h,
          renderContentNode: function () {
            if (
              (null == b || b.onRender(),
              !(
                'show' === t.displayDirective ||
                t.show ||
                (t.animated && p.value)
              ))
            ) {
              return null;
            }
            let r;
            const l = c.internalRenderBodyRef.value,
              { value: a } = i;
            if (l) {
              r = l(
                [
                  `${a}-popover-shared`,
                  null == b ? void 0 : b.themeClass.value,
                  t.overlap && `${a}-popover-shared--overlap`,
                  t.showArrow && `${a}-popover-shared--show-arrow`,
                  t.arrowPointToCenter && `${a}-popover-shared--center-arrow`,
                ],
                u,
                g.value,
                y,
                w
              );
            } else {
              const { value: i } = c.extraClassRef,
                { internalTrapFocus: l } = t,
                s = !e.isSlotEmpty(n.header) || !e.isSlotEmpty(n.footer),
                d = () => {
                  var o;
                  const r = s
                    ? e.h(
                        e.Fragment,
                        null,
                        e.resolveWrappedSlot(n.header, (n) =>
                          n
                            ? e.h(
                                'div',
                                {
                                  class: `${a}-popover__header`,
                                  style: t.headerStyle,
                                },
                                n
                              )
                            : null
                        ),
                        e.resolveWrappedSlot(n.default, (o) =>
                          o
                            ? e.h(
                                'div',
                                {
                                  class: `${a}-popover__content`,
                                  style: t.contentStyle,
                                },
                                n
                              )
                            : null
                        ),
                        e.resolveWrappedSlot(n.footer, (n) =>
                          n
                            ? e.h(
                                'div',
                                {
                                  class: `${a}-popover__footer`,
                                  style: t.footerStyle,
                                },
                                n
                              )
                            : null
                        )
                      )
                    : t.scrollable
                    ? null === (o = n.default) || void 0 === o
                      ? void 0
                      : o.call(n)
                    : e.h(
                        'div',
                        {
                          class: `${a}-popover__content`,
                          style: t.contentStyle,
                        },
                        n
                      );
                  return [
                    t.scrollable
                      ? e.h(
                          e.XScrollbar,
                          {
                            contentClass: s ? void 0 : `${a}-popover__content`,
                            contentStyle: s ? void 0 : t.contentStyle,
                          },
                          { default: () => r }
                        )
                      : r,
                    t.showArrow
                      ? Sn({
                          arrowStyle: t.arrowStyle,
                          clsPrefix: a,
                        })
                      : null,
                  ];
                };
              r = e.h(
                'div',
                e.mergeProps(
                  {
                    class: [
                      `${a}-popover`,
                      `${a}-popover-shared`,
                      null == b ? void 0 : b.themeClass.value,
                      i.map((e) => `${a}-${e}`),
                      {
                        [`${a}-popover--scrollable`]: t.scrollable,
                        [`${a}-popover--show-header-or-footer`]: s,
                        [`${a}-popover--raw`]: t.raw,
                        [`${a}-popover-shared--overlap`]: t.overlap,
                        [`${a}-popover-shared--show-arrow`]: t.showArrow,
                        [`${a}-popover-shared--center-arrow`]:
                          t.arrowPointToCenter,
                      },
                    ],
                    ref: u,
                    style: g.value,
                    onKeydown: c.handleKeydown,
                    onMouseenter: y,
                    onMouseleave: w,
                  },
                  o
                ),
                l
                  ? e.h(
                      e.FocusTrap,
                      {
                        active: t.show,
                        autoFocus: true,
                      },
                      { default: d }
                    )
                  : d()
              );
            }
            return e.withDirectives(r, v.value);
          },
        }
      );
    },
    render() {
      return e.h(
        V,
        {
          ref: 'followerRef',
          zIndex: this.zIndex,
          show: this.show,
          enabled: this.followerEnabled,
          to: this.adjustedTo,
          x: this.x,
          y: this.y,
          flip: this.flip,
          placement: this.placement,
          containerClass: this.namespace,
          overlap: this.overlap,
          width: 'trigger' === this.width ? 'target' : void 0,
          teleportDisabled: this.adjustedTo === C.tdkey,
        },
        {
          default: () =>
            this.animated
              ? e.h(
                  e.Transition,
                  {
                    name: 'popover-transition',
                    appear: this.isMounted,
                    onEnter: () => {
                      this.followerEnabled = true;
                    },
                    onAfterLeave: () => {
                      var e;
                      null === (e = this.internalOnAfterLeave) ||
                        void 0 === e ||
                        e.call(this);
                      this.followerEnabled = false;
                      this.displayed = false;
                    },
                  },
                  { default: this.renderContentNode }
                )
              : this.renderContentNode(),
        }
      );
    },
  }),
  $n = Object.keys(kn),
  zn = {
    focus: ['onFocus', 'onBlur'],
    click: ['onClick'],
    hover: ['onMouseenter', 'onMouseleave'],
    manual: [],
    nested: ['onFocus', 'onBlur', 'onMouseenter', 'onMouseleave', 'onClick'],
  };
const On = e.createTextVNode('').type,
  Bn = {
    show: {
      type: Boolean,
      default: void 0,
    },
    defaultShow: Boolean,
    showArrow: {
      type: Boolean,
      default: true,
    },
    trigger: {
      type: String,
      default: 'hover',
    },
    delay: {
      type: Number,
      default: 100,
    },
    duration: {
      type: Number,
      default: 100,
    },
    raw: Boolean,
    placement: {
      type: String,
      default: 'top',
    },
    x: Number,
    y: Number,
    arrowPointToCenter: Boolean,
    disabled: Boolean,
    getDisabled: Function,
    displayDirective: {
      type: String,
      default: 'if',
    },
    arrowStyle: [String, Object],
    flip: {
      type: Boolean,
      default: true,
    },
    animated: {
      type: Boolean,
      default: true,
    },
    width: {
      type: [Number, String],
      default: void 0,
    },
    overlap: Boolean,
    keepAliveOnHover: {
      type: Boolean,
      default: true,
    },
    zIndex: Number,
    to: C.propTo,
    scrollable: Boolean,
    contentStyle: [Object, String],
    headerStyle: [Object, String],
    footerStyle: [Object, String],
    onClickoutside: Function,
    'onUpdate:show': [Function, Array],
    onUpdateShow: [Function, Array],
    internalDeactivateImmediately: Boolean,
    internalSyncTargetWithParent: Boolean,
    internalInheritedEventHandlers: {
      type: Array,
      default: () => [],
    },
    internalTrapFocus: Boolean,
    internalExtraClass: {
      type: Array,
      default: () => [],
    },
    onShow: [Function, Array],
    onHide: [Function, Array],
    arrow: {
      type: Boolean,
      default: void 0,
    },
    minWidth: Number,
    maxWidth: Number,
  },
  Fn = Object.assign(Object.assign(Object.assign({}, e.useTheme.props), Bn), {
    internalOnAfterLeave: Function,
    internalRenderBody: Function,
  }),
  Pn = e.defineComponent({
    name: 'Popover',
    inheritAttrs: false,
    props: Fn,
    __popover__: true,
    setup(n) {
      const o = e.isMounted(),
        r = e.ref(null),
        i = e.computed(() => n.show),
        l = e.ref(n.defaultShow),
        a = t.useMergedState(i, l),
        s = e.useMemo(() => !n.disabled && a.value),
        c = () => {
          if (n.disabled) {
            return true;
          }
          const { getDisabled: e } = n;
          return !!(null == e ? void 0 : e());
        },
        u = () => !c() && a.value,
        d = b(n, ['arrow', 'showArrow']),
        f = e.computed(() => !n.overlap && d.value);
      let h = null;
      const p = e.ref(null),
        v = e.ref(null),
        g = e.useMemo(() => void 0 !== n.x && void 0 !== n.y);
      function m(t) {
        const { 'onUpdate:show': o, onUpdateShow: r, onShow: i, onHide: a } = n;
        l.value = t;
        o && e.call(o, t);
        r && e.call(r, t);
        t && i && e.call(i, true);
        t && a && e.call(a, false);
      }
      function y() {
        const { value: e } = p;
        e && (window.clearTimeout(e), (p.value = null));
      }
      function w() {
        const { value: e } = v;
        e && (window.clearTimeout(e), (v.value = null));
      }
      function x() {
        const e = c();
        if ('hover' === n.trigger && !e) {
          if ((w(), null !== p.value)) {
            return;
          }
          if (u()) {
            return;
          }
          const e = () => {
              m(true);
              p.value = null;
            },
            { delay: t } = n;
          0 === t ? e() : (p.value = window.setTimeout(e, t));
        }
      }
      function C() {
        const e = c();
        if ('hover' === n.trigger && !e) {
          if ((y(), null !== v.value)) {
            return;
          }
          if (!u()) {
            return;
          }
          const e = () => {
              m(false);
              v.value = null;
            },
            { duration: t } = n;
          0 === t ? e() : (v.value = window.setTimeout(e, t));
        }
      }
      return (
        e.provide('NPopover', {
          getTriggerElement: function () {
            var e;
            return null === (e = r.value) || void 0 === e
              ? void 0
              : e.targetRef;
          },
          handleKeydown: function (e) {
            n.internalTrapFocus && 'Escape' === e.key && (y(), w(), m(false));
          },
          handleMouseEnter: x,
          handleMouseLeave: C,
          handleClickOutside: function (e) {
            var t;
            u() &&
              ('click' === n.trigger && (y(), w(), m(false)),
              null === (t = n.onClickoutside) || void 0 === t || t.call(n, e));
          },
          handleMouseMoveOutside: function () {
            C();
          },
          setBodyInstance: function (e) {
            h = e;
          },
          positionManuallyRef: g,
          isMountedRef: o,
          zIndexRef: e.toRef(n, 'zIndex'),
          extraClassRef: e.toRef(n, 'internalExtraClass'),
          internalRenderBodyRef: e.toRef(n, 'internalRenderBody'),
        }),
        e.watchEffect(() => {
          a.value && c() && m(false);
        }),
        {
          binderInstRef: r,
          positionManually: g,
          mergedShowConsideringDisabledProp: s,
          uncontrolledShow: l,
          mergedShowArrow: f,
          getMergedShow: u,
          setShow: function (e) {
            l.value = e;
          },
          handleClick: function () {
            if ('click' === n.trigger && !c()) {
              y();
              w();
              m(!u());
            }
          },
          handleMouseEnter: x,
          handleMouseLeave: C,
          handleFocus: function () {
            const e = c();
            if ('focus' === n.trigger && !e) {
              if (u()) {
                return;
              }
              m(true);
            }
          },
          handleBlur: function () {
            const e = c();
            if ('focus' === n.trigger && !e) {
              if (!u()) {
                return;
              }
              m(false);
            }
          },
          syncPosition: function () {
            h && h.syncPosition();
          },
        }
      );
    },
    render() {
      var t;
      const { positionManually: n, $slots: o } = this;
      let r,
        i = false;
      if (
        !n &&
        ((r = o.activator
          ? e.getFirstSlotVNode(o, 'activator')
          : e.getFirstSlotVNode(o, 'trigger')),
        r)
      ) {
        r = e.cloneVNode(r);
        r = r.type === On ? e.h('span', [r]) : r;
        const o = {
          onClick: this.handleClick,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
        };
        if (null === (t = r.type) || void 0 === t ? void 0 : t.__popover__) {
          i = true;
          r.props ||
            (r.props = {
              internalSyncTargetWithParent: true,
              internalInheritedEventHandlers: [],
            });
          r.props.internalSyncTargetWithParent = true;
          r.props.internalInheritedEventHandlers
            ? (r.props.internalInheritedEventHandlers = [
                o,
                ...r.props.internalInheritedEventHandlers,
              ])
            : (r.props.internalInheritedEventHandlers = [o]);
        } else {
          const { internalInheritedEventHandlers: e } = this,
            t = [o, ...e],
            i = {
              onBlur: (e) => {
                t.forEach((t) => {
                  t.onBlur(e);
                });
              },
              onFocus: (e) => {
                t.forEach((t) => {
                  t.onFocus(e);
                });
              },
              onClick: (e) => {
                t.forEach((t) => {
                  t.onClick(e);
                });
              },
              onMouseenter: (e) => {
                t.forEach((t) => {
                  t.onMouseenter(e);
                });
              },
              onMouseleave: (e) => {
                t.forEach((t) => {
                  t.onMouseleave(e);
                });
              },
            };
          l = r;
          a = e ? 'nested' : n ? 'manual' : this.trigger;
          s = i;
          zn[a].forEach((e) => {
            l.props ? (l.props = Object.assign({}, l.props)) : (l.props = {});
            const t = l.props[e],
              n = s[e];
            l.props[e] = t
              ? (...e) => {
                  t(...e);
                  n(...e);
                }
              : n;
          });
        }
      }
      var l, a, s;
      return e.h(
        O,
        {
          ref: 'binderInstRef',
          syncTarget: !i,
          syncTargetWithParent: this.internalSyncTargetWithParent,
        },
        {
          default: () => {
            this.mergedShowConsideringDisabledProp;
            const t = this.getMergedShow();
            return [
              this.internalTrapFocus && t
                ? e.withDirectives(
                    e.h('div', {
                      style: {
                        position: 'fixed',
                        inset: 0,
                      },
                    }),
                    [
                      [
                        e.zindexable,
                        {
                          enabled: t,
                          zIndex: this.zIndex,
                        },
                      ],
                    ]
                  )
                : null,
              n ? null : e.h(B, null, { default: () => r }),
              e.h(
                Mn,
                e.keep(
                  this.$props,
                  $n,
                  Object.assign(Object.assign({}, this.$attrs), {
                    showArrow: this.mergedShowArrow,
                    show: t,
                  })
                ),
                {
                  default: () => {
                    var e, t;
                    return null === (t = (e = this.$slots).default) ||
                      void 0 === t
                      ? void 0
                      : t.call(e);
                  },
                  header: () => {
                    var e, t;
                    return null === (t = (e = this.$slots).header) ||
                      void 0 === t
                      ? void 0
                      : t.call(e);
                  },
                  footer: () => {
                    var e, t;
                    return null === (t = (e = this.$slots).footer) ||
                      void 0 === t
                      ? void 0
                      : t.call(e);
                  },
                }
              ),
            ];
          },
        }
      );
    },
  }),
  Tn = {
    name: 'Tag',
    common: e.commonLight,
    self: (t) => {
      const {
        textColor2: n,
        primaryColorHover: o,
        primaryColorPressed: r,
        primaryColor: i,
        infoColor: l,
        successColor: a,
        warningColor: s,
        errorColor: c,
        baseColor: u,
        borderColor: d,
        opacityDisabled: f,
        tagColor: h,
        closeIconColor: p,
        closeIconColorHover: v,
        closeIconColorPressed: g,
        borderRadiusSmall: m,
        fontSizeMini: b,
        fontSizeTiny: y,
        fontSizeSmall: w,
        fontSizeMedium: x,
        heightMini: C,
        heightTiny: k,
        heightSmall: S,
        heightMedium: M,
        closeColorHover: $,
        closeColorPressed: z,
        buttonColor2Hover: O,
        buttonColor2Pressed: B,
        fontWeightStrong: F,
      } = t;
      return Object.assign(Object.assign({}, e.commonVariables), {
        closeBorderRadius: m,
        heightTiny: C,
        heightSmall: k,
        heightMedium: S,
        heightLarge: M,
        borderRadius: m,
        opacityDisabled: f,
        fontSizeTiny: b,
        fontSizeSmall: y,
        fontSizeMedium: w,
        fontSizeLarge: x,
        fontWeightStrong: F,
        textColorCheckable: n,
        textColorHoverCheckable: n,
        textColorPressedCheckable: n,
        textColorChecked: u,
        colorCheckable: '#0000',
        colorHoverCheckable: O,
        colorPressedCheckable: B,
        colorChecked: i,
        colorCheckedHover: o,
        colorCheckedPressed: r,
        border: `1px solid ${d}`,
        textColor: n,
        color: h,
        colorBordered: 'rgb(250, 250, 252)',
        closeIconColor: p,
        closeIconColorHover: v,
        closeIconColorPressed: g,
        closeColorHover: $,
        closeColorPressed: z,
        borderPrimary: `1px solid ${e.changeColor(i, { alpha: 0.3 })}`,
        textColorPrimary: i,
        colorPrimary: e.changeColor(i, { alpha: 0.12 }),
        colorBorderedPrimary: e.changeColor(i, { alpha: 0.1 }),
        closeIconColorPrimary: i,
        closeIconColorHoverPrimary: i,
        closeIconColorPressedPrimary: i,
        closeColorHoverPrimary: e.changeColor(i, { alpha: 0.12 }),
        closeColorPressedPrimary: e.changeColor(i, { alpha: 0.18 }),
        borderInfo: `1px solid ${e.changeColor(l, { alpha: 0.3 })}`,
        textColorInfo: l,
        colorInfo: e.changeColor(l, { alpha: 0.12 }),
        colorBorderedInfo: e.changeColor(l, { alpha: 0.1 }),
        closeIconColorInfo: l,
        closeIconColorHoverInfo: l,
        closeIconColorPressedInfo: l,
        closeColorHoverInfo: e.changeColor(l, { alpha: 0.12 }),
        closeColorPressedInfo: e.changeColor(l, { alpha: 0.18 }),
        borderSuccess: `1px solid ${e.changeColor(a, { alpha: 0.3 })}`,
        textColorSuccess: a,
        colorSuccess: e.changeColor(a, { alpha: 0.12 }),
        colorBorderedSuccess: e.changeColor(a, { alpha: 0.1 }),
        closeIconColorSuccess: a,
        closeIconColorHoverSuccess: a,
        closeIconColorPressedSuccess: a,
        closeColorHoverSuccess: e.changeColor(a, { alpha: 0.12 }),
        closeColorPressedSuccess: e.changeColor(a, { alpha: 0.18 }),
        borderWarning: `1px solid ${e.changeColor(s, { alpha: 0.35 })}`,
        textColorWarning: s,
        colorWarning: e.changeColor(s, { alpha: 0.15 }),
        colorBorderedWarning: e.changeColor(s, { alpha: 0.12 }),
        closeIconColorWarning: s,
        closeIconColorHoverWarning: s,
        closeIconColorPressedWarning: s,
        closeColorHoverWarning: e.changeColor(s, { alpha: 0.12 }),
        closeColorPressedWarning: e.changeColor(s, { alpha: 0.18 }),
        borderError: `1px solid ${e.changeColor(c, { alpha: 0.23 })}`,
        textColorError: c,
        colorError: e.changeColor(c, { alpha: 0.1 }),
        colorBorderedError: e.changeColor(c, { alpha: 0.08 }),
        closeIconColorError: c,
        closeIconColorHoverError: c,
        closeIconColorPressedError: c,
        closeColorHoverError: e.changeColor(c, { alpha: 0.12 }),
        closeColorPressedError: e.changeColor(c, { alpha: 0.18 }),
      });
    },
  },
  Rn = {
    color: Object,
    type: {
      type: String,
      default: 'default',
    },
    round: Boolean,
    size: {
      type: String,
      default: 'medium',
    },
    closable: Boolean,
    disabled: {
      type: Boolean,
      default: void 0,
    },
  },
  En = e.cB(
    'tag',
    '\n white-space: nowrap;\n position: relative;\n box-sizing: border-box;\n cursor: default;\n display: inline-flex;\n align-items: center;\n flex-wrap: nowrap;\n padding: var(--n-padding);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n transition: \n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n line-height: 1;\n height: var(--n-height);\n font-size: var(--n-font-size);\n',
    [
      e.cM('strong', '\n font-weight: var(--n-font-weight-strong);\n '),
      e.cE(
        'border',
        '\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n border: var(--n-border);\n transition: border-color .3s var(--n-bezier);\n '
      ),
      e.cE(
        'icon',
        '\n display: flex;\n margin: 0 4px 0 0;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n font-size: var(--n-avatar-size-override);\n '
      ),
      e.cE('avatar', '\n display: flex;\n margin: 0 6px 0 0;\n '),
      e.cE(
        'close',
        '\n margin: var(--n-close-margin);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n '
      ),
      e.cM(
        'round',
        '\n padding: 0 calc(var(--n-height) / 3);\n border-radius: calc(var(--n-height) / 2);\n ',
        [
          e.cE(
            'icon',
            '\n margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);\n '
          ),
          e.cE(
            'avatar',
            '\n margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);\n '
          ),
          e.cM(
            'closable',
            '\n padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);\n '
          ),
        ]
      ),
      e.cM('icon, avatar', [
        e.cM(
          'round',
          '\n padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);\n '
        ),
      ]),
      e.cM(
        'disabled',
        '\n cursor: not-allowed !important;\n opacity: var(--n-opacity-disabled);\n '
      ),
      e.cM(
        'checkable',
        '\n cursor: pointer;\n box-shadow: none;\n color: var(--n-text-color-checkable);\n background-color: var(--n-color-checkable);\n ',
        [
          e.cNotM('disabled', [
            e.c(
              '&:hover',
              'background-color: var(--n-color-hover-checkable);',
              [
                e.cNotM(
                  'checked',
                  'color: var(--n-text-color-hover-checkable);'
                ),
              ]
            ),
            e.c(
              '&:active',
              'background-color: var(--n-color-pressed-checkable);',
              [
                e.cNotM(
                  'checked',
                  'color: var(--n-text-color-pressed-checkable);'
                ),
              ]
            ),
          ]),
          e.cM(
            'checked',
            '\n color: var(--n-text-color-checked);\n background-color: var(--n-color-checked);\n ',
            [
              e.cNotM('disabled', [
                e.c(
                  '&:hover',
                  'background-color: var(--n-color-checked-hover);'
                ),
                e.c(
                  '&:active',
                  'background-color: var(--n-color-checked-pressed);'
                ),
              ]),
            ]
          ),
        ]
      ),
    ]
  ),
  An = Object.assign(Object.assign(Object.assign({}, e.useTheme.props), Rn), {
    bordered: {
      type: Boolean,
      default: void 0,
    },
    checked: Boolean,
    checkable: Boolean,
    strong: Boolean,
    triggerClickOnClose: Boolean,
    onClose: [Array, Function],
    onMouseenter: Function,
    onMouseleave: Function,
    'onUpdate:checked': Function,
    onUpdateChecked: Function,
    internalCloseFocusable: {
      type: Boolean,
      default: true,
    },
    internalCloseIsButtonTag: {
      type: Boolean,
      default: true,
    },
    onCheckedChange: Function,
  }),
  jn = e.createInjectionKey('n-tag'),
  In = e.defineComponent({
    name: 'Tag',
    props: An,
    setup(t) {
      const n = e.ref(null),
        {
          mergedBorderedRef: o,
          mergedClsPrefixRef: r,
          inlineThemeDisabled: i,
          mergedRtlRef: l,
        } = e.useConfig(t),
        a = e.useTheme('Tag', '-tag', En, Tn, t, r);
      e.provide(jn, { roundRef: e.toRef(t, 'round') });
      const s = {
          setTextContent(e) {
            const { value: t } = n;
            t && (t.textContent = e);
          },
        },
        c = e.useRtl('Tag', l, r),
        u = e.computed(() => {
          const {
              type: n,
              size: r,
              color: { color: i, textColor: l } = {},
            } = t,
            {
              common: { cubicBezierEaseInOut: s },
              self: {
                padding: c,
                closeMargin: u,
                closeMarginRtl: d,
                borderRadius: f,
                opacityDisabled: h,
                textColorCheckable: p,
                textColorHoverCheckable: v,
                textColorPressedCheckable: g,
                textColorChecked: m,
                colorCheckable: b,
                colorHoverCheckable: y,
                colorPressedCheckable: w,
                colorChecked: x,
                colorCheckedHover: C,
                colorCheckedPressed: k,
                closeBorderRadius: S,
                fontWeightStrong: M,
                [e.createKey('colorBordered', n)]: $,
                [e.createKey('closeSize', r)]: z,
                [e.createKey('closeIconSize', r)]: O,
                [e.createKey('fontSize', r)]: B,
                [e.createKey('height', r)]: F,
                [e.createKey('color', n)]: P,
                [e.createKey('textColor', n)]: T,
                [e.createKey('border', n)]: R,
                [e.createKey('closeIconColor', n)]: E,
                [e.createKey('closeIconColorHover', n)]: A,
                [e.createKey('closeIconColorPressed', n)]: j,
                [e.createKey('closeColorHover', n)]: I,
                [e.createKey('closeColorPressed', n)]: N,
              },
            } = a.value;
          return {
            '--n-font-weight-strong': M,
            '--n-avatar-size-override': `calc(${F} - 8px)`,
            '--n-bezier': s,
            '--n-border-radius': f,
            '--n-border': R,
            '--n-close-icon-size': O,
            '--n-close-color-pressed': N,
            '--n-close-color-hover': I,
            '--n-close-border-radius': S,
            '--n-close-icon-color': E,
            '--n-close-icon-color-hover': A,
            '--n-close-icon-color-pressed': j,
            '--n-close-icon-color-disabled': E,
            '--n-close-margin': u,
            '--n-close-margin-rtl': d,
            '--n-close-size': z,
            '--n-color': i || (o.value ? $ : P),
            '--n-color-checkable': b,
            '--n-color-checked': x,
            '--n-color-checked-hover': C,
            '--n-color-checked-pressed': k,
            '--n-color-hover-checkable': y,
            '--n-color-pressed-checkable': w,
            '--n-font-size': B,
            '--n-height': F,
            '--n-opacity-disabled': h,
            '--n-padding': c,
            '--n-text-color': l || T,
            '--n-text-color-checkable': p,
            '--n-text-color-checked': m,
            '--n-text-color-hover-checkable': v,
            '--n-text-color-pressed-checkable': g,
          };
        }),
        d = i
          ? e.useThemeClass(
              'tag',
              e.computed(() => {
                let n = '';
                const {
                  type: r,
                  size: i,
                  color: { color: l, textColor: a } = {},
                } = t;
                return (
                  (n += r[0]),
                  (n += i[0]),
                  l && (n += `a${e.color2Class(l)}`),
                  a && (n += `b${e.color2Class(a)}`),
                  o.value && (n += 'c'),
                  n
                );
              }),
              u,
              t
            )
          : void 0;
      return Object.assign(Object.assign({}, s), {
        rtlEnabled: c,
        mergedClsPrefix: r,
        contentRef: n,
        mergedBordered: o,
        handleClick: function (e) {
          if (!t.disabled && t.checkable) {
            const {
              checked: e,
              onCheckedChange: n,
              onUpdateChecked: o,
              'onUpdate:checked': r,
            } = t;
            o && o(!e);
            r && r(!e);
            n && n(!e);
          }
        },
        handleCloseClick: function (n) {
          if ((t.triggerClickOnClose || n.stopPropagation(), !t.disabled)) {
            const { onClose: o } = t;
            o && e.call(o, n);
          }
        },
        cssVars: i ? void 0 : u,
        themeClass: null == d ? void 0 : d.themeClass,
        onRender: null == d ? void 0 : d.onRender,
      });
    },
    render() {
      var t, n;
      const {
        mergedClsPrefix: o,
        rtlEnabled: r,
        closable: i,
        color: { borderColor: l } = {},
        round: a,
        onRender: s,
        $slots: c,
      } = this;
      null == s || s();
      const u = e.resolveWrappedSlot(
          c.avatar,
          (t) => t && e.h('div', { class: `${o}-tag__avatar` }, t)
        ),
        d = e.resolveWrappedSlot(
          c.icon,
          (t) => t && e.h('div', { class: `${o}-tag__icon` }, t)
        );
      return e.h(
        'div',
        {
          class: [
            `${o}-tag`,
            this.themeClass,
            {
              [`${o}-tag--rtl`]: r,
              [`${o}-tag--strong`]: this.strong,
              [`${o}-tag--disabled`]: this.disabled,
              [`${o}-tag--checkable`]: this.checkable,
              [`${o}-tag--checked`]: this.checkable && this.checked,
              [`${o}-tag--round`]: a,
              [`${o}-tag--avatar`]: u,
              [`${o}-tag--icon`]: d,
              [`${o}-tag--closable`]: i,
            },
          ],
          style: this.cssVars,
          onClick: this.handleClick,
          onMouseenter: this.onMouseenter,
          onMouseleave: this.onMouseleave,
        },
        d || u,
        e.h(
          'span',
          {
            class: `${o}-tag__content`,
            ref: 'contentRef',
          },
          null === (n = (t = this.$slots).default) || void 0 === n
            ? void 0
            : n.call(t)
        ),
        !this.checkable && i
          ? e.h(e.NBaseClose, {
              clsPrefix: o,
              class: `${o}-tag__close`,
              disabled: this.disabled,
              onClick: this.handleCloseClick,
              focusable: this.internalCloseFocusable,
              round: a,
              isButtonTag: this.internalCloseIsButtonTag,
              absolute: true,
            })
          : null,
        !this.checkable && this.mergedBordered
          ? e.h('div', {
              class: `${o}-tag__border`,
              style: { borderColor: l },
            })
          : null
      );
    },
  }),
  Nn = e.c([
    e.cB(
      'base-selection',
      '\n position: relative;\n z-index: auto;\n box-shadow: none;\n width: 100%;\n max-width: 100%;\n display: inline-block;\n vertical-align: bottom;\n border-radius: var(--n-border-radius);\n min-height: var(--n-height);\n line-height: 1.5;\n font-size: var(--n-font-size);\n ',
      [
        e.cB('base-loading', '\n color: var(--n-loading-color);\n '),
        e.cB('base-selection-tags', 'min-height: var(--n-height);'),
        e.cE(
          'border, state-border',
          '\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n pointer-events: none;\n border: var(--n-border);\n border-radius: inherit;\n transition:\n box-shadow .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n '
        ),
        e.cE('state-border', '\n z-index: 1;\n border-color: #0000;\n '),
        e.cB(
          'base-suffix',
          '\n cursor: pointer;\n position: absolute;\n top: 50%;\n transform: translateY(-50%);\n right: 10px;\n ',
          [
            e.cE(
              'arrow',
              '\n font-size: var(--n-arrow-size);\n color: var(--n-arrow-color);\n transition: color .3s var(--n-bezier);\n '
            ),
          ]
        ),
        e.cB(
          'base-selection-overlay',
          '\n display: flex;\n align-items: center;\n white-space: nowrap;\n pointer-events: none;\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n padding: var(--n-padding-single);\n transition: color .3s var(--n-bezier);\n ',
          [
            e.cE(
              'wrapper',
              '\n flex-basis: 0;\n flex-grow: 1;\n overflow: hidden;\n text-overflow: ellipsis;\n '
            ),
          ]
        ),
        e.cB(
          'base-selection-placeholder',
          '\n color: var(--n-placeholder-color);\n ',
          [e.cE('inner', '\n max-width: 100%;\n overflow: hidden;\n ')]
        ),
        e.cB(
          'base-selection-tags',
          '\n cursor: pointer;\n outline: none;\n box-sizing: border-box;\n position: relative;\n z-index: auto;\n display: flex;\n padding: var(--n-padding-multiple);\n flex-wrap: wrap;\n align-items: center;\n width: 100%;\n vertical-align: bottom;\n background-color: var(--n-color);\n border-radius: inherit;\n transition:\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n '
        ),
        e.cB(
          'base-selection-label',
          '\n height: var(--n-height);\n display: inline-flex;\n width: 100%;\n vertical-align: bottom;\n cursor: pointer;\n outline: none;\n z-index: auto;\n box-sizing: border-box;\n position: relative;\n transition:\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n border-radius: inherit;\n background-color: var(--n-color);\n align-items: center;\n ',
          [
            e.cB(
              'base-selection-input',
              '\n font-size: inherit;\n line-height: inherit;\n outline: none;\n cursor: pointer;\n box-sizing: border-box;\n border:none;\n width: 100%;\n padding: var(--n-padding-single);\n background-color: #0000;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n caret-color: var(--n-caret-color);\n ',
              [
                e.cE(
                  'content',
                  '\n text-overflow: ellipsis;\n overflow: hidden;\n white-space: nowrap; \n '
                ),
              ]
            ),
            e.cE('render-label', '\n color: var(--n-text-color);\n '),
          ]
        ),
        e.cNotM('disabled', [
          e.c('&:hover', [
            e.cE(
              'state-border',
              '\n box-shadow: var(--n-box-shadow-hover);\n border: var(--n-border-hover);\n '
            ),
          ]),
          e.cM('focus', [
            e.cE(
              'state-border',
              '\n box-shadow: var(--n-box-shadow-focus);\n border: var(--n-border-focus);\n '
            ),
          ]),
          e.cM('active', [
            e.cE(
              'state-border',
              '\n box-shadow: var(--n-box-shadow-active);\n border: var(--n-border-active);\n '
            ),
            e.cB(
              'base-selection-label',
              'background-color: var(--n-color-active);'
            ),
            e.cB(
              'base-selection-tags',
              'background-color: var(--n-color-active);'
            ),
          ]),
        ]),
        e.cM('disabled', 'cursor: not-allowed;', [
          e.cE('arrow', '\n color: var(--n-arrow-color-disabled);\n '),
          e.cB(
            'base-selection-label',
            '\n cursor: not-allowed;\n background-color: var(--n-color-disabled);\n ',
            [
              e.cB(
                'base-selection-input',
                '\n cursor: not-allowed;\n color: var(--n-text-color-disabled);\n '
              ),
              e.cE(
                'render-label',
                '\n color: var(--n-text-color-disabled);\n '
              ),
            ]
          ),
          e.cB(
            'base-selection-tags',
            '\n cursor: not-allowed;\n background-color: var(--n-color-disabled);\n '
          ),
          e.cB(
            'base-selection-placeholder',
            '\n cursor: not-allowed;\n color: var(--n-placeholder-color-disabled);\n '
          ),
        ]),
        e.cB(
          'base-selection-input-tag',
          '\n height: calc(var(--n-height) - 6px);\n line-height: calc(var(--n-height) - 6px);\n outline: none;\n display: none;\n position: relative;\n margin-bottom: 3px;\n max-width: 100%;\n vertical-align: bottom;\n ',
          [
            e.cE(
              'input',
              '\n font-size: inherit;\n font-family: inherit;\n min-width: 1px;\n padding: 0;\n background-color: #0000;\n outline: none;\n border: none;\n max-width: 100%;\n overflow: hidden;\n width: 1em;\n line-height: inherit;\n cursor: pointer;\n color: var(--n-text-color);\n caret-color: var(--n-caret-color);\n '
            ),
            e.cE(
              'mirror',
              '\n position: absolute;\n left: 0;\n top: 0;\n white-space: pre;\n visibility: hidden;\n user-select: none;\n -webkit-user-select: none;\n opacity: 0;\n '
            ),
          ]
        ),
        ['warning', 'error'].map((t) =>
          e.cM(`${t}-status`, [
            e.cE('state-border', `border: var(--n-border-${t});`),
            e.cNotM('disabled', [
              e.c('&:hover', [
                e.cE(
                  'state-border',
                  `\n box-shadow: var(--n-box-shadow-hover-${t});\n border: var(--n-border-hover-${t});\n `
                ),
              ]),
              e.cM('active', [
                e.cE(
                  'state-border',
                  `\n box-shadow: var(--n-box-shadow-active-${t});\n border: var(--n-border-active-${t});\n `
                ),
                e.cB(
                  'base-selection-label',
                  `background-color: var(--n-color-active-${t});`
                ),
                e.cB(
                  'base-selection-tags',
                  `background-color: var(--n-color-active-${t});`
                ),
              ]),
              e.cM('focus', [
                e.cE(
                  'state-border',
                  `\n box-shadow: var(--n-box-shadow-focus-${t});\n border: var(--n-border-focus-${t});\n `
                ),
              ]),
            ]),
          ])
        ),
      ]
    ),
    e.cB(
      'base-selection-popover',
      '\n margin-bottom: -3px;\n display: flex;\n flex-wrap: wrap;\n margin-right: -8px;\n '
    ),
    e.cB(
      'base-selection-tag-wrapper',
      '\n max-width: 100%;\n display: inline-flex;\n padding: 0 7px 3px 0;\n ',
      [
        e.c('&:last-child', 'padding-right: 0;'),
        e.cB('tag', '\n font-size: 14px;\n max-width: 100%;\n ', [
          e.cE(
            'content',
            '\n line-height: 1.25;\n text-overflow: ellipsis;\n overflow: hidden;\n '
          ),
        ]),
      ]
    ),
  ]),
  Ln = e.defineComponent({
    name: 'InternalSelection',
    props: Object.assign(Object.assign({}, e.useTheme.props), {
      clsPrefix: {
        type: String,
        required: true,
      },
      bordered: {
        type: Boolean,
        default: void 0,
      },
      active: Boolean,
      pattern: {
        type: String,
        default: '',
      },
      placeholder: String,
      selectedOption: {
        type: Object,
        default: null,
      },
      selectedOptions: {
        type: Array,
        default: null,
      },
      labelField: {
        type: String,
        default: 'label',
      },
      valueField: {
        type: String,
        default: 'value',
      },
      multiple: Boolean,
      filterable: Boolean,
      clearable: Boolean,
      disabled: Boolean,
      size: {
        type: String,
        default: 'medium',
      },
      loading: Boolean,
      autofocus: Boolean,
      showArrow: {
        type: Boolean,
        default: true,
      },
      inputProps: Object,
      focused: Boolean,
      renderTag: Function,
      onKeydown: Function,
      onClick: Function,
      onBlur: Function,
      onFocus: Function,
      onDeleteOption: Function,
      maxTagCount: [String, Number],
      onClear: Function,
      onPatternInput: Function,
      onPatternFocus: Function,
      onPatternBlur: Function,
      renderLabel: Function,
      status: String,
      inlineThemeDisabled: Boolean,
      ignoreComposition: {
        type: Boolean,
        default: true,
      },
      onResize: Function,
    }),
    setup(t) {
      const n = e.ref(null),
        o = e.ref(null),
        r = e.ref(null),
        i = e.ref(null),
        l = e.ref(null),
        a = e.ref(null),
        s = e.ref(null),
        c = e.ref(null),
        u = e.ref(null),
        d = e.ref(null),
        f = e.ref(false),
        h = e.ref(false),
        p = e.ref(false),
        v = e.useTheme(
          'InternalSelection',
          '-internal-selection',
          Nn,
          e.internalSelectionLight,
          t,
          e.toRef(t, 'clsPrefix')
        ),
        g = e.computed(
          () => t.clearable && !t.disabled && (p.value || t.active)
        ),
        m = e.computed(() =>
          t.selectedOption
            ? t.renderTag
              ? t.renderTag({
                  option: t.selectedOption,
                  handleClose: () => {},
                })
              : t.renderLabel
              ? t.renderLabel(t.selectedOption, true)
              : e.render(t.selectedOption[t.labelField], t.selectedOption, true)
            : t.placeholder
        ),
        b = e.computed(() => {
          const e = t.selectedOption;
          if (e) {
            return e[t.labelField];
          }
        }),
        y = e.computed(() =>
          t.multiple
            ? !(!Array.isArray(t.selectedOptions) || !t.selectedOptions.length)
            : null !== t.selectedOption
        );
      function w() {
        var e;
        const { value: r } = n;
        if (r) {
          const { value: n } = o;
          n &&
            ((n.style.width = `${r.offsetWidth}px`),
            'responsive' !== t.maxTagCount &&
              (null === (e = u.value) || void 0 === e || e.sync()));
        }
      }
      function x(e) {
        const { onPatternInput: n } = t;
        n && n(e);
      }
      function C(e) {
        !(function (e) {
          const { onDeleteOption: n } = t;
          n && n(e);
        })(e);
      }
      e.watch(e.toRef(t, 'active'), (e) => {
        e ||
          (function () {
            const { value: e } = d;
            e && (e.style.display = 'none');
          })();
      });
      e.watch(e.toRef(t, 'pattern'), () => {
        t.multiple && e.nextTick(w);
      });
      const k = e.ref(false);
      let S = null;
      let M = null;
      function $() {
        null !== M && window.clearTimeout(M);
      }
      e.watch(y, (e) => {
        e || (f.value = false);
      });
      e.onMounted(() => {
        e.watchEffect(() => {
          const e = a.value;
          e && (e.tabIndex = t.disabled || h.value ? -1 : 0);
        });
      });
      ee(r, t.onResize);
      const { inlineThemeDisabled: z } = t,
        O = e.computed(() => {
          const { size: n } = t,
            {
              common: { cubicBezierEaseInOut: o },
              self: {
                borderRadius: r,
                color: i,
                placeholderColor: l,
                textColor: a,
                paddingSingle: s,
                paddingMultiple: c,
                caretColor: u,
                colorDisabled: d,
                textColorDisabled: f,
                placeholderColorDisabled: h,
                colorActive: p,
                boxShadowFocus: g,
                boxShadowActive: m,
                boxShadowHover: b,
                border: y,
                borderFocus: w,
                borderHover: x,
                borderActive: C,
                arrowColor: k,
                arrowColorDisabled: S,
                loadingColor: M,
                colorActiveWarning: $,
                boxShadowFocusWarning: z,
                boxShadowActiveWarning: O,
                boxShadowHoverWarning: B,
                borderWarning: F,
                borderFocusWarning: P,
                borderHoverWarning: T,
                borderActiveWarning: R,
                colorActiveError: E,
                boxShadowFocusError: A,
                boxShadowActiveError: j,
                boxShadowHoverError: I,
                borderError: N,
                borderFocusError: L,
                borderHoverError: _,
                borderActiveError: D,
                clearColor: q,
                clearColorHover: W,
                clearColorPressed: K,
                clearSize: V,
                arrowSize: H,
                [e.createKey('height', n)]: U,
                [e.createKey('fontSize', n)]: G,
              },
            } = v.value;
          return {
            '--n-bezier': o,
            '--n-border': y,
            '--n-border-active': C,
            '--n-border-focus': w,
            '--n-border-hover': x,
            '--n-border-radius': r,
            '--n-box-shadow-active': m,
            '--n-box-shadow-focus': g,
            '--n-box-shadow-hover': b,
            '--n-caret-color': u,
            '--n-color': i,
            '--n-color-active': p,
            '--n-color-disabled': d,
            '--n-font-size': G,
            '--n-height': U,
            '--n-padding-single': s,
            '--n-padding-multiple': c,
            '--n-placeholder-color': l,
            '--n-placeholder-color-disabled': h,
            '--n-text-color': a,
            '--n-text-color-disabled': f,
            '--n-arrow-color': k,
            '--n-arrow-color-disabled': S,
            '--n-loading-color': M,
            '--n-color-active-warning': $,
            '--n-box-shadow-focus-warning': z,
            '--n-box-shadow-active-warning': O,
            '--n-box-shadow-hover-warning': B,
            '--n-border-warning': F,
            '--n-border-focus-warning': P,
            '--n-border-hover-warning': T,
            '--n-border-active-warning': R,
            '--n-color-active-error': E,
            '--n-box-shadow-focus-error': A,
            '--n-box-shadow-active-error': j,
            '--n-box-shadow-hover-error': I,
            '--n-border-error': N,
            '--n-border-focus-error': L,
            '--n-border-hover-error': _,
            '--n-border-active-error': D,
            '--n-clear-size': V,
            '--n-clear-color': q,
            '--n-clear-color-hover': W,
            '--n-clear-color-pressed': K,
            '--n-arrow-size': H,
          };
        }),
        B = z
          ? e.useThemeClass(
              'internal-selection',
              e.computed(() => t.size[0]),
              O,
              t
            )
          : void 0;
      return {
        mergedTheme: v,
        mergedClearable: g,
        patternInputFocused: h,
        filterablePlaceholder: m,
        label: b,
        selected: y,
        showTagsPanel: f,
        isComposing: k,
        counterRef: s,
        counterWrapperRef: c,
        patternInputMirrorRef: n,
        patternInputRef: o,
        selfRef: r,
        multipleElRef: i,
        singleElRef: l,
        patternInputWrapperRef: a,
        overflowRef: u,
        inputTagElRef: d,
        handleMouseDown: function (e) {
          t.active &&
            t.filterable &&
            e.target !== o.value &&
            e.preventDefault();
        },
        handleFocusin: function (e) {
          var n;
          (e.relatedTarget &&
            (null === (n = r.value) || void 0 === n
              ? void 0
              : n.contains(e.relatedTarget))) ||
            (function (e) {
              const { onFocus: n } = t;
              n && n(e);
            })(e);
        },
        handleClear: function (e) {
          !(function (e) {
            const { onClear: n } = t;
            n && n(e);
          })(e);
        },
        handleMouseEnter: function () {
          p.value = true;
        },
        handleMouseLeave: function () {
          p.value = false;
        },
        handleDeleteOption: C,
        handlePatternKeyDown: function (e) {
          if ('Backspace' === e.key && !k.value && !t.pattern.length) {
            const { selectedOptions: e } = t;
            (null == e ? void 0 : e.length) && C(e[e.length - 1]);
          }
        },
        handlePatternInputInput: function (e) {
          const { value: o } = n;
          if (o) {
            const t = e.target.value;
            o.textContent = t;
            w();
          }
          t.ignoreComposition && k.value ? (S = e) : x(e);
        },
        handlePatternInputBlur: function (e) {
          var n;
          h.value = false;
          null === (n = t.onPatternBlur) || void 0 === n || n.call(t, e);
        },
        handlePatternInputFocus: function (e) {
          var n;
          h.value = true;
          null === (n = t.onPatternFocus) || void 0 === n || n.call(t, e);
        },
        handleMouseEnterCounter: function () {
          t.disabled ||
            t.active ||
            ($(),
            (M = window.setTimeout(() => {
              y.value && (f.value = true);
            }, 100)));
        },
        handleMouseLeaveCounter: function () {
          $();
        },
        handleFocusout: function (e) {
          var n;
          (null === (n = r.value) || void 0 === n
            ? void 0
            : n.contains(e.relatedTarget)) ||
            (function (e) {
              const { onBlur: n } = t;
              n && n(e);
            })(e);
        },
        handleCompositionEnd: function () {
          k.value = false;
          t.ignoreComposition && x(S);
          S = null;
        },
        handleCompositionStart: function () {
          k.value = true;
        },
        onPopoverUpdateShow: function (e) {
          e || ($(), (f.value = false));
        },
        focus: function () {
          var e, n, o;
          t.filterable
            ? ((h.value = false),
              null === (e = a.value) || void 0 === e || e.focus())
            : t.multiple
            ? null === (n = i.value) || void 0 === n || n.focus()
            : null === (o = l.value) || void 0 === o || o.focus();
        },
        focusInput: function () {
          const { value: e } = o;
          e &&
            (!(function () {
              const { value: e } = d;
              e && (e.style.display = 'inline-block');
            })(),
            e.focus());
        },
        blur: function () {
          var e, n;
          if (t.filterable) {
            h.value = false;
            null === (e = a.value) || void 0 === e || e.blur();
            null === (n = o.value) || void 0 === n || n.blur();
          } else {
            if (t.multiple) {
              const { value: e } = i;
              null == e || e.blur();
            } else {
              const { value: e } = l;
              null == e || e.blur();
            }
          }
        },
        blurInput: function () {
          const { value: e } = o;
          e && e.blur();
        },
        updateCounter: function (e) {
          const { value: t } = s;
          t && t.setTextContent(`+${e}`);
        },
        getCounter: function () {
          const { value: e } = c;
          return e;
        },
        getTail: function () {
          return o.value;
        },
        renderLabel: t.renderLabel,
        cssVars: z ? void 0 : O,
        themeClass: null == B ? void 0 : B.themeClass,
        onRender: null == B ? void 0 : B.onRender,
      };
    },
    render() {
      const {
        status: n,
        multiple: o,
        size: r,
        disabled: i,
        filterable: l,
        maxTagCount: s,
        bordered: c,
        clsPrefix: u,
        onRender: d,
        renderTag: f,
        renderLabel: h,
      } = this;
      null == d || d();
      const p = 'responsive' === s,
        v = 'number' == typeof s,
        g = p || v,
        m = e.h(e.Wrapper, null, {
          default: () =>
            e.h(
              t.NBaseSuffix,
              {
                clsPrefix: u,
                loading: this.loading,
                showArrow: this.showArrow,
                showClear: this.mergedClearable && this.selected,
                onClear: this.handleClear,
              },
              {
                default: () => {
                  var e, t;
                  return null === (t = (e = this.$slots).arrow) || void 0 === t
                    ? void 0
                    : t.call(e);
                },
              }
            ),
        });
      let b;
      if (o) {
        const { labelField: t } = this,
          n = (n) =>
            e.h(
              'div',
              {
                class: `${u}-base-selection-tag-wrapper`,
                key: n.value,
              },
              f
                ? f({
                    option: n,
                    handleClose: () => this.handleDeleteOption(n),
                  })
                : e.h(
                    In,
                    {
                      size: r,
                      closable: !n.disabled,
                      disabled: i,
                      onClose: () => this.handleDeleteOption(n),
                      internalCloseIsButtonTag: false,
                      internalCloseFocusable: false,
                    },
                    {
                      default: () => (h ? h(n, true) : e.render(n[t], n, true)),
                    }
                  )
            ),
          o = () =>
            (v ? this.selectedOptions.slice(0, s) : this.selectedOptions).map(
              n
            ),
          a = l
            ? e.h(
                'div',
                {
                  class: `${u}-base-selection-input-tag`,
                  ref: 'inputTagElRef',
                  key: '__input-tag__',
                },
                e.h(
                  'input',
                  Object.assign({}, this.inputProps, {
                    ref: 'patternInputRef',
                    tabindex: -1,
                    disabled: i,
                    value: this.pattern,
                    autofocus: this.autofocus,
                    class: `${u}-base-selection-input-tag__input`,
                    onBlur: this.handlePatternInputBlur,
                    onFocus: this.handlePatternInputFocus,
                    onKeydown: this.handlePatternKeyDown,
                    onInput: this.handlePatternInputInput,
                    onCompositionstart: this.handleCompositionStart,
                    onCompositionend: this.handleCompositionEnd,
                  })
                ),
                e.h(
                  'span',
                  {
                    ref: 'patternInputMirrorRef',
                    class: `${u}-base-selection-input-tag__mirror`,
                  },
                  this.pattern
                )
              )
            : null,
          c = p
            ? () =>
                e.h(
                  'div',
                  {
                    class: `${u}-base-selection-tag-wrapper`,
                    ref: 'counterWrapperRef',
                  },
                  e.h(In, {
                    size: r,
                    ref: 'counterRef',
                    onMouseenter: this.handleMouseEnterCounter,
                    onMouseleave: this.handleMouseLeaveCounter,
                    disabled: i,
                  })
                )
            : void 0;
        let d;
        if (v) {
          const t = this.selectedOptions.length - s;
          t > 0 &&
            (d = e.h(
              'div',
              {
                class: `${u}-base-selection-tag-wrapper`,
                key: '__counter__',
              },
              e.h(
                In,
                {
                  size: r,
                  ref: 'counterRef',
                  onMouseenter: this.handleMouseEnterCounter,
                  disabled: i,
                },
                { default: () => `+${t}` }
              )
            ));
        }
        const y = p
            ? l
              ? e.h(
                  Q,
                  {
                    ref: 'overflowRef',
                    updateCounter: this.updateCounter,
                    getCounter: this.getCounter,
                    getTail: this.getTail,
                    style: {
                      width: '100%',
                      display: 'flex',
                      overflow: 'hidden',
                    },
                  },
                  {
                    default: o,
                    counter: c,
                    tail: () => a,
                  }
                )
              : e.h(
                  Q,
                  {
                    ref: 'overflowRef',
                    updateCounter: this.updateCounter,
                    getCounter: this.getCounter,
                    style: {
                      width: '100%',
                      display: 'flex',
                      overflow: 'hidden',
                    },
                  },
                  {
                    default: o,
                    counter: c,
                  }
                )
            : v
            ? o().concat(d)
            : o(),
          w = g
            ? () =>
                e.h(
                  'div',
                  { class: `${u}-base-selection-popover` },
                  p ? o() : this.selectedOptions.map(n)
                )
            : void 0,
          x = g
            ? {
                show: this.showTagsPanel,
                trigger: 'hover',
                overlap: true,
                placement: 'top',
                width: 'trigger',
                onUpdateShow: this.onPopoverUpdateShow,
                theme: this.mergedTheme.peers.Popover,
                themeOverrides: this.mergedTheme.peerOverrides.Popover,
              }
            : null,
          C =
            !this.selected &&
            (!this.active || (!this.pattern && !this.isComposing))
              ? e.h(
                  'div',
                  {
                    class: `${u}-base-selection-placeholder ${u}-base-selection-overlay`,
                  },
                  e.h(
                    'div',
                    { class: `${u}-base-selection-placeholder__inner` },
                    this.placeholder
                  )
                )
              : null,
          k = l
            ? e.h(
                'div',
                {
                  ref: 'patternInputWrapperRef',
                  class: `${u}-base-selection-tags`,
                },
                y,
                p ? null : a,
                m
              )
            : e.h(
                'div',
                {
                  ref: 'multipleElRef',
                  class: `${u}-base-selection-tags`,
                  tabindex: i ? void 0 : 0,
                },
                y,
                m
              );
        b = e.h(
          e.Fragment,
          null,
          g
            ? e.h(
                Pn,
                Object.assign({}, x, {
                  scrollable: true,
                  style: 'max-height: calc(var(--v-target-height) * 6.6);',
                }),
                {
                  trigger: () => k,
                  default: w,
                }
              )
            : k,
          C
        );
      } else {
        if (l) {
          const t = this.pattern || this.isComposing,
            n = this.active ? !t : !this.selected,
            o = !this.active && this.selected;
          b = e.h(
            'div',
            {
              ref: 'patternInputWrapperRef',
              class: `${u}-base-selection-label`,
            },
            e.h(
              'input',
              Object.assign({}, this.inputProps, {
                ref: 'patternInputRef',
                class: `${u}-base-selection-input`,
                value: this.active ? this.pattern : '',
                placeholder: '',
                readonly: i,
                disabled: i,
                tabindex: -1,
                autofocus: this.autofocus,
                onFocus: this.handlePatternInputFocus,
                onBlur: this.handlePatternInputBlur,
                onInput: this.handlePatternInputInput,
                onCompositionstart: this.handleCompositionStart,
                onCompositionend: this.handleCompositionEnd,
              })
            ),
            o
              ? e.h(
                  'div',
                  {
                    class: `${u}-base-selection-label__render-label ${u}-base-selection-overlay`,
                    key: 'input',
                  },
                  e.h(
                    'div',
                    { class: `${u}-base-selection-overlay__wrapper` },
                    f
                      ? f({
                          option: this.selectedOption,
                          handleClose: () => {},
                        })
                      : h
                      ? h(this.selectedOption, true)
                      : e.render(this.label, this.selectedOption, true)
                  )
                )
              : null,
            n
              ? e.h(
                  'div',
                  {
                    class: `${u}-base-selection-placeholder ${u}-base-selection-overlay`,
                    key: 'placeholder',
                  },
                  e.h(
                    'div',
                    { class: `${u}-base-selection-overlay__wrapper` },
                    this.filterablePlaceholder
                  )
                )
              : null,
            m
          );
        } else {
          b = e.h(
            'div',
            {
              ref: 'singleElRef',
              class: `${u}-base-selection-label`,
              tabindex: this.disabled ? void 0 : 0,
            },
            void 0 !== this.label
              ? e.h(
                  'div',
                  {
                    class: `${u}-base-selection-input`,
                    title: a(this.label),
                    key: 'input',
                  },
                  e.h(
                    'div',
                    { class: `${u}-base-selection-input__content` },
                    f
                      ? f({
                          option: this.selectedOption,
                          handleClose: () => {},
                        })
                      : h
                      ? h(this.selectedOption, true)
                      : e.render(this.label, this.selectedOption, true)
                  )
                )
              : e.h(
                  'div',
                  {
                    class: `${u}-base-selection-placeholder ${u}-base-selection-overlay`,
                    key: 'placeholder',
                  },
                  e.h(
                    'div',
                    { class: `${u}-base-selection-placeholder__inner` },
                    this.placeholder
                  )
                ),
            m
          );
        }
      }
      return e.h(
        'div',
        {
          ref: 'selfRef',
          class: [
            `${u}-base-selection`,
            this.themeClass,
            n && `${u}-base-selection--${n}-status`,
            {
              [`${u}-base-selection--active`]: this.active,
              [`${u}-base-selection--selected`]:
                this.selected || (this.active && this.pattern),
              [`${u}-base-selection--disabled`]: this.disabled,
              [`${u}-base-selection--multiple`]: this.multiple,
              [`${u}-base-selection--focus`]: this.focused,
            },
          ],
          style: this.cssVars,
          onClick: this.onClick,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onKeydown: this.onKeydown,
          onFocusin: this.handleFocusin,
          onFocusout: this.handleFocusout,
          onMousedown: this.handleMouseDown,
        },
        b,
        c ? e.h('div', { class: `${u}-base-selection__border` }) : null,
        c ? e.h('div', { class: `${u}-base-selection__state-border` }) : null
      );
    },
  });
function _n(e) {
  return 'group' === e.type;
}
function Dn(e) {
  return 'ignored' === e.type;
}
function qn(e, t) {
  try {
    return !!(1 + t.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch (n) {
    return false;
  }
}
const Wn = e.c([
    e.cB(
      'select',
      '\n z-index: auto;\n outline: none;\n width: 100%;\n position: relative;\n '
    ),
    e.cB(
      'select-menu',
      '\n margin: 4px 0;\n box-shadow: var(--n-menu-box-shadow);\n ',
      [
        e.fadeInScaleUpTransition({
          originalTransition:
            'background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)',
        }),
      ]
    ),
  ]),
  Kn = Object.assign(Object.assign({}, e.useTheme.props), {
    to: C.propTo,
    bordered: {
      type: Boolean,
      default: void 0,
    },
    clearable: Boolean,
    clearFilterAfterSelect: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    defaultValue: {
      type: [String, Number, Array],
      default: null,
    },
    value: [String, Number, Array],
    placeholder: String,
    menuProps: Object,
    multiple: Boolean,
    size: String,
    filterable: Boolean,
    disabled: {
      type: Boolean,
      default: void 0,
    },
    remote: Boolean,
    loading: Boolean,
    filter: Function,
    placement: {
      type: String,
      default: 'bottom-start',
    },
    widthMode: {
      type: String,
      default: 'trigger',
    },
    tag: Boolean,
    onCreate: Function,
    fallbackOption: {
      type: [Function, Boolean],
      default: void 0,
    },
    show: {
      type: Boolean,
      default: void 0,
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
    maxTagCount: [Number, String],
    consistentMenuWidth: {
      type: Boolean,
      default: true,
    },
    virtualScroll: {
      type: Boolean,
      default: true,
    },
    labelField: {
      type: String,
      default: 'label',
    },
    valueField: {
      type: String,
      default: 'value',
    },
    childrenField: {
      type: String,
      default: 'children',
    },
    renderLabel: Function,
    renderOption: Function,
    renderTag: Function,
    'onUpdate:value': [Function, Array],
    inputProps: Object,
    nodeProps: Function,
    ignoreComposition: {
      type: Boolean,
      default: true,
    },
    showOnFocus: Boolean,
    onUpdateValue: [Function, Array],
    onBlur: [Function, Array],
    onClear: [Function, Array],
    onFocus: [Function, Array],
    onScroll: [Function, Array],
    onSearch: [Function, Array],
    onUpdateShow: [Function, Array],
    'onUpdate:show': [Function, Array],
    displayDirective: {
      type: String,
      default: 'show',
    },
    resetMenuOnOptionsChange: {
      type: Boolean,
      default: true,
    },
    status: String,
    showCheckmark: {
      type: Boolean,
      default: true,
    },
    onChange: [Function, Array],
    items: Array,
  }),
  Vn = e.defineComponent({
    name: 'Select',
    props: Kn,
    setup(n) {
      const {
          mergedClsPrefixRef: o,
          mergedBorderedRef: r,
          namespaceRef: i,
          inlineThemeDisabled: a,
        } = e.useConfig(n),
        s = e.useTheme('Select', '-select', Wn, e.selectLight, n, o),
        c = e.ref(n.defaultValue),
        u = e.toRef(n, 'value'),
        d = t.useMergedState(u, c),
        f = e.ref(false),
        h = e.ref(''),
        p = e.computed(() => {
          const { valueField: e, childrenField: t } = n,
            o = (function (e, t) {
              return {
                getIsGroup: _n,
                getIgnored: Dn,
                getKey: (t) =>
                  _n(t) ? t.name || t.key || 'key-required' : t[e],
                getChildren: (e) => e[t],
              };
            })(e, t);
          return sn(R.value, o);
        }),
        v = e.computed(() =>
          (function (e, t, n) {
            const o = new Map();
            return (
              e.forEach((e) => {
                _n(e)
                  ? e[n].forEach((e) => {
                      o.set(e[t], e);
                    })
                  : o.set(e[t], e);
              }),
              o
            );
          })(P.value, n.valueField, n.childrenField)
        ),
        g = e.ref(false),
        m = t.useMergedState(e.toRef(n, 'show'), g),
        y = e.ref(null),
        w = e.ref(null),
        x = e.ref(null),
        { localeRef: k } = t.useLocale('Select'),
        S = e.computed(() => {
          var e;
          return null !== (e = n.placeholder) && void 0 !== e
            ? e
            : k.value.placeholder;
        }),
        M = b(n, ['items', 'options']),
        $ = [],
        z = e.ref([]),
        O = e.ref([]),
        B = e.ref(new Map()),
        F = e.computed(() => {
          const { fallbackOption: e } = n;
          if (void 0 === e) {
            const { labelField: e, valueField: t } = n;
            return (n) => ({
              [e]: String(n),
              [t]: n,
            });
          }
          return false !== e && ((t) => Object.assign(e(t), { value: t }));
        }),
        P = e.computed(() => O.value.concat(z.value).concat(M.value)),
        T = e.computed(() => {
          const { filter: e } = n;
          if (e) {
            return e;
          }
          const { labelField: t, valueField: o } = n;
          return (e, n) => {
            if (!n) {
              return false;
            }
            const r = n[t];
            if ('string' == typeof r) {
              return qn(e, r);
            }
            const i = n[o];
            return 'string' == typeof i
              ? qn(e, i)
              : 'number' == typeof i && qn(e, String(i));
          };
        }),
        R = e.computed(() => {
          if (n.remote) {
            return M.value;
          }
          {
            const { value: e } = P,
              { value: t } = h;
            return t.length && n.filterable
              ? (function (e, t, n, o) {
                  return t
                    ? (function e(r) {
                        if (!Array.isArray(r)) {
                          return [];
                        }
                        const i = [];
                        for (const l of r)
                          if (_n(l)) {
                            const t = e(l[o]);
                            t.length &&
                              i.push(Object.assign({}, l, { [o]: t }));
                          } else {
                            if (Dn(l)) {
                              continue;
                            }
                            t(n, l) && i.push(l);
                          }
                        return i;
                      })(e)
                    : e;
                })(e, T.value, t, n.childrenField)
              : e;
          }
        });
      function E(e) {
        const t = n.remote,
          { value: o } = B,
          { value: r } = v,
          { value: i } = F,
          l = [];
        return (
          e.forEach((e) => {
            if (r.has(e)) {
              l.push(r.get(e));
            } else {
              if (t && o.has(e)) {
                l.push(o.get(e));
              } else {
                if (i) {
                  const t = i(e);
                  t && l.push(t);
                }
              }
            }
          }),
          l
        );
      }
      const A = e.computed(() => {
          if (n.multiple) {
            const { value: e } = d;
            return Array.isArray(e) ? E(e) : [];
          }
          return null;
        }),
        j = e.computed(() => {
          const { value: e } = d;
          return n.multiple || Array.isArray(e) || null === e
            ? null
            : E([e])[0] || null;
        }),
        I = e.useFormItem(n),
        { mergedSizeRef: N, mergedDisabledRef: L, mergedStatusRef: _ } = I;
      function D(t, o) {
        const { onChange: r, 'onUpdate:value': i, onUpdateValue: l } = n,
          { nTriggerFormChange: a, nTriggerFormInput: s } = I;
        r && e.call(r, t, o);
        l && e.call(l, t, o);
        i && e.call(i, t, o);
        c.value = t;
        a();
        s();
      }
      function q(t) {
        const { onBlur: o } = n,
          { nTriggerFormBlur: r } = I;
        o && e.call(o, t);
        r();
      }
      function W() {
        var e;
        const { remote: t, multiple: o } = n;
        if (t) {
          const { value: t } = B;
          if (o) {
            const { valueField: o } = n;
            null === (e = A.value) ||
              void 0 === e ||
              e.forEach((e) => {
                t.set(e[o], e);
              });
          } else {
            const e = j.value;
            e && t.set(e[n.valueField], e);
          }
        }
      }
      function K(t) {
        const { onUpdateShow: o, 'onUpdate:show': r } = n;
        o && e.call(o, t);
        r && e.call(r, t);
        g.value = t;
      }
      function V() {
        L.value || (K(true), (g.value = true), n.filterable && ee());
      }
      function H() {
        K(false);
      }
      function U() {
        h.value = '';
        O.value = $;
      }
      const G = e.ref(false);
      function Y(e) {
        X(e.rawNode);
      }
      function X(e) {
        if (L.value) {
          return;
        }
        const {
          tag: t,
          remote: o,
          clearFilterAfterSelect: r,
          valueField: i,
        } = n;
        if (t && !o) {
          const { value: e } = O,
            t = e[0] || null;
          if (t) {
            const e = z.value;
            e.length ? e.push(t) : (z.value = [t]);
            O.value = $;
          }
        }
        if ((o && B.value.set(e[i], e), n.multiple)) {
          const l = (function (e) {
              if (!Array.isArray(e)) {
                return [];
              }
              if (F.value) {
                return Array.from(e);
              }
              {
                const { remote: t } = n,
                  { value: o } = v;
                if (t) {
                  const { value: t } = B;
                  return e.filter((e) => o.has(e) || t.has(e));
                }
                return e.filter((e) => o.has(e));
              }
            })(d.value),
            a = l.findIndex((t) => t === e[i]);
          if (~a) {
            if ((l.splice(a, 1), t && !o)) {
              const t = Z(e[i]);
              ~t && (z.value.splice(t, 1), r && (h.value = ''));
            }
          } else {
            l.push(e[i]);
            r && (h.value = '');
          }
          D(l, E(l));
        } else {
          if (t && !o) {
            const t = Z(e[i]);
            z.value = ~t ? [z.value[t]] : $;
          }
          Q();
          H();
          D(e[i], e);
        }
      }
      function Z(e) {
        return z.value.findIndex((t) => t[n.valueField] === e);
      }
      function J(t) {
        var o, r, i, l, a;
        switch (t.key) {
          case ' ':
            if (n.filterable) {
              break;
            }
            t.preventDefault();
          case 'Enter':
            if (
              !(null === (o = y.value) || void 0 === o ? void 0 : o.isComposing)
            ) {
              if (m.value) {
                const e =
                  null === (r = x.value) || void 0 === r
                    ? void 0
                    : r.getPendingTmNode();
                e ? Y(e) : n.filterable || (H(), Q());
              } else {
                if ((V(), n.tag && G.value)) {
                  const e = O.value[0];
                  if (e) {
                    const t = e[n.valueField],
                      { value: o } = d;
                    (n.multiple &&
                      Array.isArray(o) &&
                      o.some((e) => e === t)) ||
                      X(e);
                  }
                }
              }
            }
            t.preventDefault();
            break;
          case 'ArrowUp':
            if ((t.preventDefault(), n.loading)) {
              return;
            }
            m.value && (null === (i = x.value) || void 0 === i || i.prev());
            break;
          case 'ArrowDown':
            if ((t.preventDefault(), n.loading)) {
              return;
            }
            m.value ? null === (l = x.value) || void 0 === l || l.next() : V();
            break;
          case 'Escape':
            m.value && (e.markEventEffectPerformed(t), H()),
              null === (a = y.value) || void 0 === a || a.focus();
        }
      }
      function Q() {
        var e;
        null === (e = y.value) || void 0 === e || e.focus();
      }
      function ee() {
        var e;
        null === (e = y.value) || void 0 === e || e.focusInput();
      }
      W();
      e.watch(e.toRef(n, 'options'), W);
      const te = {
          focus: () => {
            var e;
            null === (e = y.value) || void 0 === e || e.focus();
          },
          blur: () => {
            var e;
            null === (e = y.value) || void 0 === e || e.blur();
          },
        },
        ne = e.computed(() => {
          const {
            self: { menuBoxShadow: e },
          } = s.value;
          return { '--n-menu-box-shadow': e };
        }),
        oe = a ? e.useThemeClass('select', void 0, ne, n) : void 0;
      return Object.assign(Object.assign({}, te), {
        mergedStatus: _,
        mergedClsPrefix: o,
        mergedBordered: r,
        namespace: i,
        treeMate: p,
        isMounted: e.isMounted(),
        triggerRef: y,
        menuRef: x,
        pattern: h,
        uncontrolledShow: g,
        mergedShow: m,
        adjustedTo: C(n),
        uncontrolledValue: c,
        mergedValue: d,
        followerRef: w,
        localizedPlaceholder: S,
        selectedOption: j,
        selectedOptions: A,
        mergedSize: N,
        mergedDisabled: L,
        focused: f,
        activeWithoutMenuOpen: G,
        inlineThemeDisabled: a,
        onTriggerInputFocus: function () {
          n.filterable && (G.value = true);
        },
        onTriggerInputBlur: function () {
          n.filterable && ((G.value = false), m.value || U());
        },
        handleTriggerOrMenuResize: function () {
          var e;
          m.value &&
            (null === (e = w.value) || void 0 === e || e.syncPosition());
        },
        handleMenuFocus: function (e) {
          f.value = true;
        },
        handleMenuBlur: function (e) {
          var t;
          (null === (t = y.value) || void 0 === t
            ? void 0
            : t.$el.contains(e.relatedTarget)) ||
            ((f.value = false), q(e), H());
        },
        handleMenuTabOut: function () {
          var e;
          null === (e = y.value) || void 0 === e || e.focus();
          H();
        },
        handleTriggerClick: function () {
          L.value || (m.value ? (n.filterable ? ee() : H()) : V());
        },
        handleToggle: Y,
        handleDeleteOption: X,
        handlePatternInput: function (t) {
          m.value || V();
          const { value: o } = t.target;
          h.value = o;
          const { tag: r, remote: i } = n;
          if (
            ((function (t) {
              const { onSearch: o } = n;
              o && e.call(o, t);
            })(o),
            r && !i)
          ) {
            if (!o) {
              return void (O.value = $);
            }
            const { onCreate: e } = n,
              t = e
                ? e(o)
                : {
                    [n.labelField]: o,
                    [n.valueField]: o,
                  },
              { valueField: r } = n;
            M.value.some((e) => e[r] === t[r]) ||
            z.value.some((e) => e[r] === t[r])
              ? (O.value = $)
              : (O.value = [t]);
          }
        },
        handleClear: function (t) {
          t.stopPropagation();
          const { multiple: o } = n;
          !o && n.filterable && H();
          (function () {
            const { onClear: t } = n;
            t && e.call(t);
          })();
          o ? D([], []) : D(null, null);
        },
        handleTriggerBlur: function (e) {
          var t, n;
          (null ===
            (n = null === (t = x.value) || void 0 === t ? void 0 : t.selfRef) ||
          void 0 === n
            ? void 0
            : n.contains(e.relatedTarget)) || ((f.value = false), q(e), H());
        },
        handleTriggerFocus: function (t) {
          !(function (t) {
            const { onFocus: o, showOnFocus: r } = n,
              { nTriggerFormFocus: i } = I;
            o && e.call(o, t);
            i();
            r && V();
          })(t);
          f.value = true;
        },
        handleKeydown: J,
        handleMenuAfterLeave: U,
        handleMenuClickOutside: function (t) {
          var n;
          m.value &&
            ((null === (n = y.value) || void 0 === n
              ? void 0
              : n.$el.contains(e.getPreciseEventTarget(t))) ||
              H());
        },
        handleMenuScroll: function (t) {
          !(function (t) {
            const { onScroll: o } = n;
            o && e.call(o, t);
          })(t);
        },
        handleMenuKeydown: J,
        handleMenuMousedown: function (e) {
          l(e, 'action') || l(e, 'empty') || e.preventDefault();
        },
        mergedTheme: s,
        cssVars: a ? void 0 : ne,
        themeClass: null == oe ? void 0 : oe.themeClass,
        onRender: null == oe ? void 0 : oe.onRender,
      });
    },
    render() {
      return e.h(
        'div',
        { class: `${this.mergedClsPrefix}-select` },
        e.h(O, null, {
          default: () => [
            e.h(B, null, {
              default: () =>
                e.h(
                  Ln,
                  {
                    ref: 'triggerRef',
                    inlineThemeDisabled: this.inlineThemeDisabled,
                    status: this.mergedStatus,
                    inputProps: this.inputProps,
                    clsPrefix: this.mergedClsPrefix,
                    showArrow: this.showArrow,
                    maxTagCount: this.maxTagCount,
                    bordered: this.mergedBordered,
                    active: this.activeWithoutMenuOpen || this.mergedShow,
                    pattern: this.pattern,
                    placeholder: this.localizedPlaceholder,
                    selectedOption: this.selectedOption,
                    selectedOptions: this.selectedOptions,
                    multiple: this.multiple,
                    renderTag: this.renderTag,
                    renderLabel: this.renderLabel,
                    filterable: this.filterable,
                    clearable: this.clearable,
                    disabled: this.mergedDisabled,
                    size: this.mergedSize,
                    theme: this.mergedTheme.peers.InternalSelection,
                    labelField: this.labelField,
                    valueField: this.valueField,
                    themeOverrides:
                      this.mergedTheme.peerOverrides.InternalSelection,
                    loading: this.loading,
                    focused: this.focused,
                    onClick: this.handleTriggerClick,
                    onDeleteOption: this.handleDeleteOption,
                    onPatternInput: this.handlePatternInput,
                    onClear: this.handleClear,
                    onBlur: this.handleTriggerBlur,
                    onFocus: this.handleTriggerFocus,
                    onKeydown: this.handleKeydown,
                    onPatternBlur: this.onTriggerInputBlur,
                    onPatternFocus: this.onTriggerInputFocus,
                    onResize: this.handleTriggerOrMenuResize,
                    ignoreComposition: this.ignoreComposition,
                  },
                  {
                    arrow: () => {
                      var e, t;
                      return [
                        null === (t = (e = this.$slots).arrow) || void 0 === t
                          ? void 0
                          : t.call(e),
                      ];
                    },
                  }
                ),
            }),
            e.h(
              V,
              {
                ref: 'followerRef',
                show: this.mergedShow,
                to: this.adjustedTo,
                teleportDisabled: this.adjustedTo === C.tdkey,
                containerClass: this.namespace,
                width: this.consistentMenuWidth ? 'target' : void 0,
                minWidth: 'target',
                placement: this.placement,
              },
              {
                default: () =>
                  e.h(
                    e.Transition,
                    {
                      name: 'fade-in-scale-up-transition',
                      appear: this.isMounted,
                      onAfterLeave: this.handleMenuAfterLeave,
                    },
                    {
                      default: () => {
                        var t, n, o;
                        return this.mergedShow ||
                          'show' === this.displayDirective
                          ? (null === (t = this.onRender) ||
                              void 0 === t ||
                              t.call(this),
                            e.withDirectives(
                              e.h(
                                vn,
                                Object.assign({}, this.menuProps, {
                                  ref: 'menuRef',
                                  onResize: this.handleTriggerOrMenuResize,
                                  inlineThemeDisabled: this.inlineThemeDisabled,
                                  virtualScroll:
                                    this.consistentMenuWidth &&
                                    this.virtualScroll,
                                  class: [
                                    `${this.mergedClsPrefix}-select-menu`,
                                    this.themeClass,
                                    null === (n = this.menuProps) ||
                                    void 0 === n
                                      ? void 0
                                      : n.class,
                                  ],
                                  clsPrefix: this.mergedClsPrefix,
                                  focusable: true,
                                  labelField: this.labelField,
                                  valueField: this.valueField,
                                  autoPending: true,
                                  nodeProps: this.nodeProps,
                                  theme:
                                    this.mergedTheme.peers.InternalSelectMenu,
                                  themeOverrides:
                                    this.mergedTheme.peerOverrides
                                      .InternalSelectMenu,
                                  treeMate: this.treeMate,
                                  multiple: this.multiple,
                                  size: 'medium',
                                  renderOption: this.renderOption,
                                  renderLabel: this.renderLabel,
                                  value: this.mergedValue,
                                  style: [
                                    null === (o = this.menuProps) ||
                                    void 0 === o
                                      ? void 0
                                      : o.style,
                                    this.cssVars,
                                  ],
                                  onToggle: this.handleToggle,
                                  onScroll: this.handleMenuScroll,
                                  onFocus: this.handleMenuFocus,
                                  onBlur: this.handleMenuBlur,
                                  onKeydown: this.handleMenuKeydown,
                                  onTabOut: this.handleMenuTabOut,
                                  onMousedown: this.handleMenuMousedown,
                                  show: this.mergedShow,
                                  showCheckmark: this.showCheckmark,
                                  resetMenuOnOptionsChange:
                                    this.resetMenuOnOptionsChange,
                                }),
                                {
                                  empty: () => {
                                    var e, t;
                                    return [
                                      null === (t = (e = this.$slots).empty) ||
                                      void 0 === t
                                        ? void 0
                                        : t.call(e),
                                    ];
                                  },
                                  action: () => {
                                    var e, t;
                                    return [
                                      null === (t = (e = this.$slots).action) ||
                                      void 0 === t
                                        ? void 0
                                        : t.call(e),
                                    ];
                                  },
                                }
                              ),
                              'show' === this.displayDirective
                                ? [
                                    [e.vShow, this.mergedShow],
                                    [
                                      e.clickoutside,
                                      this.handleMenuClickOutside,
                                      void 0,
                                      { capture: true },
                                    ],
                                  ]
                                : [
                                    [
                                      e.clickoutside,
                                      this.handleMenuClickOutside,
                                      void 0,
                                      { capture: true },
                                    ],
                                  ]
                            ))
                          : null;
                      },
                    }
                  ),
              }
            ),
          ],
        })
      );
    },
  }),
  Hn = e.cB('form', [
    e.cM(
      'inline',
      '\n width: 100%;\n display: inline-flex;\n align-items: flex-start;\n align-content: space-around;\n ',
      [
        e.cB(
          'form-item',
          {
            width: 'auto',
            marginRight: '18px',
          },
          [e.c('&:last-child', { marginRight: 0 })]
        ),
      ]
    ),
  ]),
  Un = e.createInjectionKey('n-form'),
  Gn = e.createInjectionKey('n-form-item-insts');
var Yn =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, o) {
    return new (n || (n = Promise))(function (r, i) {
      function l(e) {
        try {
          s(o.next(e));
        } catch (t) {
          i(t);
        }
      }
      function a(e) {
        try {
          s(o.throw(e));
        } catch (t) {
          i(t);
        }
      }
      function s(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(l, a);
      }
      s((o = o.apply(e, t || [])).next());
    });
  };
const Xn = Object.assign(Object.assign({}, e.useTheme.props), {
    inline: Boolean,
    labelWidth: [Number, String],
    labelAlign: String,
    labelPlacement: {
      type: String,
      default: 'top',
    },
    model: {
      type: Object,
      default: () => {},
    },
    rules: Object,
    disabled: Boolean,
    size: String,
    showRequireMark: {
      type: Boolean,
      default: void 0,
    },
    requireMarkPlacement: String,
    showFeedback: {
      type: Boolean,
      default: true,
    },
    onSubmit: {
      type: Function,
      default: (e) => e.preventDefault(),
    },
    showLabel: {
      type: Boolean,
      default: void 0,
    },
    validateMessages: Object,
  }),
  Zn = e.defineComponent({
    name: 'Form',
    props: Xn,
    setup(t) {
      const { mergedClsPrefixRef: n } = e.useConfig(t);
      e.useTheme('Form', '-form', Hn, e.formLight, t, n);
      const o = {},
        r = e.ref(void 0);
      e.provide(Un, {
        props: t,
        maxChildLabelWidthRef: r,
        deriveMaxChildLabelWidth: (e) => {
          const t = r.value;
          (void 0 === t || e >= t) && (r.value = e);
        },
      });
      e.provide(Gn, { formItems: o });
      const i = {
        validate: function (t, n = () => true) {
          return Yn(this, void 0, void 0, function* () {
            return yield new Promise((r, i) => {
              const l = [];
              for (const t of e.keysOf(o)) {
                const e = o[t];
                for (const t of e)
                  t.path && l.push(t.internalValidate(null, n));
              }
              Promise.all(l).then((e) => {
                if (e.some((e) => !e.valid)) {
                  const n = e.filter((e) => e.errors).map((e) => e.errors);
                  t && t(n);
                  i(n);
                } else {
                  t && t();
                  r();
                }
              });
            });
          });
        },
        restoreValidation: function () {
          for (const t of e.keysOf(o)) {
            const e = o[t];
            for (const t of e) t.restoreValidation();
          }
        },
      };
      return Object.assign(i, { mergedClsPrefix: n });
    },
    render() {
      const { mergedClsPrefix: t } = this;
      return e.h(
        'form',
        {
          class: [`${t}-form`, this.inline && `${t}-form--inline`],
          onSubmit: this.onSubmit,
        },
        this.$slots
      );
    },
  });
function Jn() {
  return (
    (Jn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
    Jn.apply(this, arguments)
  );
}
function Qn(e) {
  return (Qn = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function eo(e, t) {
  return (eo = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
}
function to(e, t, n) {
  return (to = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) {
      return false;
    }
    if (Reflect.construct.sham) {
      return false;
    }
    if ('function' == typeof Proxy) {
      return true;
    }
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        true
      );
    } catch (e) {
      return false;
    }
  })()
    ? Reflect.construct.bind()
    : function (e, t, n) {
        var o = [null];
        o.push.apply(o, t);
        var r = new (Function.bind.apply(e, o))();
        return n && eo(r, n.prototype), r;
      }).apply(null, arguments);
}
function no(e) {
  var t = 'function' == typeof Map ? new Map() : void 0;
  no = function (e) {
    if (
      null === e ||
      ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))
    ) {
      return e;
    }
    var n;
    if ('function' != typeof e) {
      throw new TypeError('Super expression must either be null or a function');
    }
    if (void 0 !== t) {
      if (t.has(e)) {
        return t.get(e);
      }
      t.set(e, o);
    }
    function o() {
      return to(e, arguments, Qn(this).constructor);
    }
    return (
      (o.prototype = Object.create(e.prototype, {
        constructor: {
          value: o,
          enumerable: false,
          writable: true,
          configurable: true,
        },
      })),
      eo(o, e)
    );
  };
  return no(e);
}
var oo = /%[sdj%]/g,
  ro = function () {};
function io(e) {
  if (!e || !e.length) {
    return null;
  }
  var t = { n: t[n] || [] };
  return (
    e.forEach(function (e) {
      var n = e.field;
      t[n].push(e);
    }),
    t
  );
}
function lo(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
    o < t;
    o++
  ) {
    n[o - 1] = arguments[o];
  }
  var r = 0,
    i = n.length;
  return 'function' == typeof e
    ? e.apply(null, n)
    : 'string' == typeof e
    ? e.replace(oo, function (e) {
        if ('%%' === e) {
          return '%';
        }
        if (r >= i) {
          return e;
        }
        switch (e) {
          case '%s':
            return String(n[r++]);
          case '%d':
            return Number(n[r++]);
          case '%j':
            try {
              return JSON.stringify(n[r++]);
            } catch (t) {
              return '[Circular]';
            }
            break;
          default:
            return e;
        }
      })
    : e;
}
function ao(e, t) {
  return (
    null == e ||
    !('array' !== t || !Array.isArray(e) || e.length) ||
    !(
      !(function (e) {
        return (
          'string' === e ||
          'url' === e ||
          'hex' === e ||
          'email' === e ||
          'date' === e ||
          'pattern' === e
        );
      })(t) ||
      'string' != typeof e ||
      e
    )
  );
}
function so(e, t, n) {
  var o = 0,
    r = e.length;
  !(function i(l) {
    if (l && l.length) {
      n(l);
    } else {
      var a = o;
      o += 1;
      a < r ? t(e[a], i) : n([]);
    }
  })([]);
}
'undefined' != typeof process && process.env;
var co = (function (e) {
  var t, n;
  function o(t, n) {
    var o;
    return (
      ((o = e.call(this, 'Async Validation Error') || this).errors = t),
      (o.fields = n),
      o
    );
  }
  return (
    (n = e),
    ((t = o).prototype = Object.create(n.prototype)),
    (t.prototype.constructor = t),
    eo(t, n),
    o
  );
})(no(Error));
function uo(e, t, n, o, r) {
  if (t.first) {
    var i = new Promise(function (t, i) {
      var l = (function (e) {
        var t = [];
        return (
          Object.keys(e).forEach(function (n) {
            t.push.apply(t, e[n] || []);
          }),
          t
        );
      })(e);
      so(l, n, function (e) {
        return o(e), e.length ? i(new co(e, io(e))) : t(r);
      });
    });
    return (
      i.catch(function (e) {
        return e;
      }),
      i
    );
  }
  var l = true === t.firstFields ? Object.keys(e) : t.firstFields || [],
    a = Object.keys(e),
    s = a.length,
    c = 0,
    u = [],
    d = new Promise(function (t, i) {
      var d = function (e) {
        if ((u.push.apply(u, e), ++c === s)) {
          return o(u), u.length ? i(new co(u, io(u))) : t(r);
        }
      };
      a.length || (o(u), t(r));
      a.forEach(function (t) {
        var o = e[t];
        -1 !== l.indexOf(t)
          ? so(o, n, d)
          : (function (e, t, n) {
              var o = [],
                r = 0,
                i = e.length;
              function l(e) {
                o.push.apply(o, e || []);
                ++r === i && n(o);
              }
              e.forEach(function (e) {
                t(e, l);
              });
            })(o, n, d);
      });
    });
  return (
    d.catch(function (e) {
      return e;
    }),
    d
  );
}
function fo(e, t) {
  return function (n) {
    var o, r;
    return (
      (o = e.fullFields
        ? (function (e, t) {
            for (var n = e, o = 0; o < t.length; o++) {
              if (null == n) {
                return n;
              }
              n = n[t[o]];
            }
            return n;
          })(t, e.fullFields)
        : t[n.field || e.fullField]),
      (r = n) && void 0 !== r.message
        ? ((n.field = n.field || e.fullField), (n.fieldValue = o), n)
        : {
            message: 'function' == typeof n ? n() : n,
            fieldValue: o,
            field: n.field || e.fullField,
          }
    );
  };
}
function ho(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var o = t[n];
        'object' == typeof o && 'object' == typeof e[n]
          ? (e[n] = Jn({}, e[n], o))
          : (e[n] = o);
      }
  }
  return e;
}
var po,
  vo = function (e, t, n, o, r, i) {
    !e.required ||
      (n.hasOwnProperty(e.field) && !ao(t, i || e.type)) ||
      o.push(lo(r.messages.required, e.fullField));
  },
  go =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  mo = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  bo = {
    integer: function (e) {
      return bo.number(e) && parseInt(e, 10) === e;
    },
    float: function (e) {
      return bo.number(e) && !bo.integer(e);
    },
    array: function (e) {
      return Array.isArray(e);
    },
    regexp: function (e) {
      if (e instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(e);
      } catch (t) {
        return false;
      }
    },
    date: function (e) {
      return (
        'function' == typeof e.getTime &&
        'function' == typeof e.getMonth &&
        'function' == typeof e.getYear &&
        !isNaN(e.getTime())
      );
    },
    number: function (e) {
      return !isNaN(e) && 'number' == typeof e;
    },
    object: function (e) {
      return 'object' == typeof e && !bo.array(e);
    },
    method: function (e) {
      return 'function' == typeof e;
    },
    email: function (e) {
      return 'string' == typeof e && e.length <= 320 && !!e.match(go);
    },
    url: function (e) {
      return (
        'string' == typeof e &&
        e.length <= 2048 &&
        !!e.match(
          (function () {
            if (po) {
              return po;
            }
            var t = function (t) {
                return t && t.includeBoundaries
                  ? '(?:(?<=\\s|^)(?=[a-fA-F\\d:])|(?<=[a-fA-F\\d:])(?=\\s|$))'
                  : '';
              },
              r =
                '\n(?:\n(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n'
                  .replace(/\s*\/\/.*$/gm, '')
                  .replace(/\n/g, '')
                  .trim(),
              i = new RegExp(
                '(?:^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$)|(?:^' +
                  r +
                  '$)'
              ),
              l = new RegExp(
                '^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$'
              ),
              a = new RegExp('^' + r + '$'),
              s = function (e) {
                return e && e.exact
                  ? i
                  : new RegExp(
                      '(?:' +
                        t(e) +
                        '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}' +
                        t(e) +
                        ')|(?:' +
                        t(e) +
                        r +
                        t(e) +
                        ')',
                      'g'
                    );
              };
            s.v4 = function (e) {
              return e && e.exact
                ? l
                : new RegExp(
                    '' +
                      t(e) +
                      '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}' +
                      t(e),
                    'g'
                  );
            };
            s.v6 = function (e) {
              return e && e.exact ? a : new RegExp('' + t(e) + r + t(e), 'g');
            };
            var c = s.v4().source,
              u = s.v6().source;
            return (po = new RegExp(
              '(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|' +
                c +
                '|' +
                u +
                '|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',
              'i'
            ));
          })()
        )
      );
    },
    hex: function (e) {
      return 'string' == typeof e && !!e.match(mo);
    },
  },
  yo = 'enum',
  wo = {
    required: vo,
    whitespace: function (e, t, n, o, r) {
      (/^\s+$/.test(t) || '' === t) &&
        o.push(lo(r.messages.whitespace, e.fullField));
    },
    type: function (e, t, n, o, r) {
      if (e.required && void 0 === t) {
        vo(e, t, n, o, r);
      } else {
        var i = e.type;
        [
          'integer',
          'float',
          'array',
          'regexp',
          'object',
          'method',
          'email',
          'number',
          'date',
          'url',
          'hex',
        ].indexOf(i) > -1
          ? bo[i](t) || o.push(lo(r.messages.types[i], e.fullField, e.type))
          : i &&
            typeof t !== e.type &&
            o.push(lo(r.messages.types[i], e.fullField, e.type));
      }
    },
    range: function (e, t, n, o, r) {
      var i = 'number' == typeof e.len,
        l = 'number' == typeof e.min,
        a = 'number' == typeof e.max,
        s = t,
        c = null,
        u = 'number' == typeof t,
        d = 'string' == typeof t,
        f = Array.isArray(t);
      if ((u ? (c = 'number') : d ? (c = 'string') : f && (c = 'array'), !c)) {
        return false;
      }
      f && (s = t.length);
      d && (s = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_').length);
      i
        ? s !== e.len && o.push(lo(r.messages[c].len, e.fullField, e.len))
        : l && !a && s < e.min
        ? o.push(lo(r.messages[c].min, e.fullField, e.min))
        : a && !l && s > e.max
        ? o.push(lo(r.messages[c].max, e.fullField, e.max))
        : l &&
          a &&
          (s < e.min || s > e.max) &&
          o.push(lo(r.messages[c].range, e.fullField, e.min, e.max));
    },
    enum: function (e, t, n, o, r) {
      e[yo] = Array.isArray(e[yo]) ? e[yo] : [];
      -1 === e[yo].indexOf(t) &&
        o.push(lo(r.messages[yo], e.fullField, e[yo].join(', ')));
    },
    pattern: function (e, t, n, o, r) {
      if (e.pattern) {
        if (e.pattern instanceof RegExp) {
          e.pattern.lastIndex = 0;
          e.pattern.test(t) ||
            o.push(lo(r.messages.pattern.mismatch, e.fullField, t, e.pattern));
        } else {
          if ('string' == typeof e.pattern) {
            new RegExp(e.pattern).test(t) ||
              o.push(
                lo(r.messages.pattern.mismatch, e.fullField, t, e.pattern)
              );
          }
        }
      }
    },
  },
  xo = function (e, t, n, o, r) {
    var i = e.type,
      l = [];
    if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
      if (ao(t, i) && !e.required) {
        return n();
      }
      wo.required(e, t, o, l, r, i);
      ao(t, i) || wo.type(e, t, o, l, r);
    }
    n(l);
  },
  Co = {
    string: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (ao(t, 'string') && !e.required) {
          return n();
        }
        wo.required(e, t, o, i, r, 'string');
        ao(t, 'string') ||
          (wo.type(e, t, o, i, r),
          wo.range(e, t, o, i, r),
          wo.pattern(e, t, o, i, r),
          true === e.whitespace && wo.whitespace(e, t, o, i, r));
      }
      n(i);
    },
    method: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (ao(t) && !e.required) {
          return n();
        }
        wo.required(e, t, o, i, r);
        void 0 !== t && wo.type(e, t, o, i, r);
      }
      n(i);
    },
    number: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (('' === t && (t = void 0), ao(t) && !e.required)) {
          return n();
        }
        wo.required(e, t, o, i, r);
        void 0 !== t && (wo.type(e, t, o, i, r), wo.range(e, t, o, i, r));
      }
      n(i);
    },
    boolean: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (ao(t) && !e.required) {
          return n();
        }
        wo.required(e, t, o, i, r);
        void 0 !== t && wo.type(e, t, o, i, r);
      }
      n(i);
    },
    regexp: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (ao(t) && !e.required) {
          return n();
        }
        wo.required(e, t, o, i, r);
        ao(t) || wo.type(e, t, o, i, r);
      }
      n(i);
    },
    integer: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (ao(t) && !e.required) {
          return n();
        }
        wo.required(e, t, o, i, r);
        void 0 !== t && (wo.type(e, t, o, i, r), wo.range(e, t, o, i, r));
      }
      n(i);
    },
    float: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (ao(t) && !e.required) {
          return n();
        }
        wo.required(e, t, o, i, r);
        void 0 !== t && (wo.type(e, t, o, i, r), wo.range(e, t, o, i, r));
      }
      n(i);
    },
    array: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (null == t && !e.required) {
          return n();
        }
        wo.required(e, t, o, i, r, 'array');
        null != t && (wo.type(e, t, o, i, r), wo.range(e, t, o, i, r));
      }
      n(i);
    },
    object: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (ao(t) && !e.required) {
          return n();
        }
        wo.required(e, t, o, i, r);
        void 0 !== t && wo.type(e, t, o, i, r);
      }
      n(i);
    },
    enum: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (ao(t) && !e.required) {
          return n();
        }
        wo.required(e, t, o, i, r);
        void 0 !== t && wo.enum(e, t, o, i, r);
      }
      n(i);
    },
    pattern: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (ao(t, 'string') && !e.required) {
          return n();
        }
        wo.required(e, t, o, i, r);
        ao(t, 'string') || wo.pattern(e, t, o, i, r);
      }
      n(i);
    },
    date: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (ao(t, 'date') && !e.required) {
          return n();
        }
        var l;
        if ((wo.required(e, t, o, i, r), !ao(t, 'date'))) {
          l = t instanceof Date ? t : new Date(t);
          wo.type(e, l, o, i, r);
          l && wo.range(e, l.getTime(), o, i, r);
        }
      }
      n(i);
    },
    url: xo,
    hex: xo,
    email: xo,
    required: function (e, t, n, o, r) {
      var i = [],
        l = Array.isArray(t) ? 'array' : typeof t;
      wo.required(e, t, o, i, r, l);
      n(i);
    },
    any: function (e, t, n, o, r) {
      var i = [];
      if (e.required || (!e.required && o.hasOwnProperty(e.field))) {
        if (ao(t) && !e.required) {
          return n();
        }
        wo.required(e, t, o, i, r);
      }
      n(i);
    },
  };
function ko() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: { mismatch: '%s value %s does not match pattern %s' },
    clone: function () {
      var e = JSON.parse(JSON.stringify(this));
      return (e.clone = this.clone), e;
    },
  };
}
var So = ko(),
  Mo = (function () {
    function e(e) {
      this.rules = null;
      this._messages = So;
      this.define(e);
    }
    var t = e.prototype;
    return (
      (t.define = function (e) {
        var t = this;
        if (!e) {
          throw new Error('Cannot configure a schema with no rules');
        }
        if ('object' != typeof e || Array.isArray(e)) {
          throw new Error('Rules must be an object');
        }
        this.rules = {};
        Object.keys(e).forEach(function (n) {
          var o = e[n];
          t.rules[n] = Array.isArray(o) ? o : [o];
        });
      }),
      (t.messages = function (e) {
        return e && (this._messages = ho(ko(), e)), this._messages;
      }),
      (t.validate = function (t, n, o) {
        var r = this;
        void 0 === n && (n = {});
        void 0 === o && (o = function () {});
        var i = t,
          l = n,
          a = o;
        if (
          ('function' == typeof l && ((a = l), (l = {})),
          !this.rules || 0 === Object.keys(this.rules).length)
        ) {
          return a && a(null, i), Promise.resolve(i);
        }
        if (l.messages) {
          var s = this.messages();
          s === So && (s = ko());
          ho(s, l.messages);
          l.messages = s;
        } else {
          l.messages = this.messages();
        }
        var c = {};
        (l.keys || Object.keys(this.rules)).forEach(function (e) {
          var n = r.rules[e],
            o = i[e];
          n.forEach(function (n) {
            var l = n;
            'function' == typeof l.transform &&
              (i === t && (i = Jn({}, i)), (o = i[e] = l.transform(o)));
            (l =
              'function' == typeof l ? { validator: l } : Jn({}, l)).validator =
              r.getValidationMethod(l);
            l.validator &&
              ((l.field = e),
              (l.fullField = l.fullField || e),
              (l.type = r.getType(l)),
              (c[e] = c[e] || []),
              c[e].push({
                rule: l,
                value: o,
                source: i,
                field: e,
              }));
          });
        });
        var u = {};
        return uo(
          c,
          l,
          function (t, n) {
            var o,
              r = t.rule,
              a = !(
                ('object' !== r.type && 'array' !== r.type) ||
                ('object' != typeof r.fields &&
                  'object' != typeof r.defaultField)
              );
            function s(e, t) {
              return Jn({}, t, {
                fullField: r.fullField + '.' + e,
                fullFields: r.fullFields ? [].concat(r.fullFields, [e]) : [e],
              });
            }
            function c(o) {
              void 0 === o && (o = []);
              var c = Array.isArray(o) ? o : [o];
              !l.suppressWarning &&
                c.length &&
                e.warning('async-validator:', c);
              c.length && void 0 !== r.message && (c = [].concat(r.message));
              var d = c.map(fo(r, i));
              if (l.first && d.length) {
                return (u[r.field] = 1), n(d);
              }
              if (a) {
                if (r.required && !t.value) {
                  return (
                    void 0 !== r.message
                      ? (d = [].concat(r.message).map(fo(r, i)))
                      : l.error &&
                        (d = [l.error(r, lo(l.messages.required, r.field))]),
                    n(d)
                  );
                }
                var f = { e: r.defaultField };
                r.defaultField && Object.keys(t.value).map(function (e) {});
                f = Jn({}, f, t.rule.fields);
                var h = { e: n.map(s.bind(null, e)) };
                Object.keys(f).forEach(function (e) {
                  var t = f[e],
                    n = Array.isArray(t) ? t : [t];
                });
                var p = new e(h);
                p.messages(l.messages);
                t.rule.options &&
                  ((t.rule.options.messages = l.messages),
                  (t.rule.options.error = l.error));
                p.validate(t.value, t.rule.options || l, function (e) {
                  var t = [];
                  d && d.length && t.push.apply(t, d);
                  e && e.length && t.push.apply(t, e);
                  n(t.length ? t : null);
                });
              } else {
                n(d);
              }
            }
            if (
              ((a = a && (r.required || (!r.required && t.value))),
              (r.field = t.field),
              r.asyncValidator)
            ) {
              o = r.asyncValidator(r, t.value, c, t.source, l);
            } else {
              if (r.validator) {
                try {
                  o = r.validator(r, t.value, c, t.source, l);
                } catch (d) {
                  console.error;
                  l.suppressValidatorError ||
                    setTimeout(function () {
                      throw d;
                    }, 0);
                  c(d.message);
                }
                true === o
                  ? c()
                  : false === o
                  ? c(
                      'function' == typeof r.message
                        ? r.message(r.fullField || r.field)
                        : r.message || (r.fullField || r.field) + ' fails'
                    )
                  : o instanceof Array
                  ? c(o)
                  : o instanceof Error && c(o.message);
              }
            }
            o &&
              o.then &&
              o.then(
                function () {
                  return c();
                },
                function (e) {
                  return c(e);
                }
              );
          },
          function (e) {
            !(function (e) {
              for (var t, n, o = [], r = {}, l = 0; l < e.length; l++) {
                t = e[l];
                n = void 0;
                Array.isArray(t) ? (o = (n = o).concat.apply(n, t)) : o.push(t);
              }
              o.length ? ((r = io(o)), a(o, r)) : a(null, i);
            })(e);
          },
          i
        );
      }),
      (t.getType = function (e) {
        if (
          (void 0 === e.type &&
            e.pattern instanceof RegExp &&
            (e.type = 'pattern'),
          'function' != typeof e.validator &&
            e.type &&
            !Co.hasOwnProperty(e.type))
        ) {
          throw new Error(lo('Unknown rule type %s', e.type));
        }
        return e.type || 'string';
      }),
      (t.getValidationMethod = function (e) {
        if ('function' == typeof e.validator) {
          return e.validator;
        }
        var t = Object.keys(e),
          n = t.indexOf('message');
        return (
          -1 !== n && t.splice(n, 1),
          1 === t.length && 'required' === t[0]
            ? Co.required
            : Co[this.getType(e)] || void 0
        );
      }),
      e
    );
  })();
Mo.register = function (e, t) {
  if ('function' != typeof t) {
    throw new Error(
      'Cannot register a validator by type, validator is not a function'
    );
  }
  Co[e] = t;
};
Mo.warning = ro;
Mo.messages = So;
Mo.validators = Co;
const { cubicBezierEaseInOut: $o } = e.commonVariables$1;
const zo = e.cB(
  'form-item',
  '\n display: grid;\n line-height: var(--n-line-height);\n',
  [
    e.cB(
      'form-item-label',
      '\n grid-area: label;\n align-items: center;\n line-height: 1.25;\n text-align: var(--n-label-text-align);\n font-size: var(--n-label-font-size);\n min-height: var(--n-label-height);\n padding: var(--n-label-padding);\n color: var(--n-label-text-color);\n transition: color .3s var(--n-bezier);\n box-sizing: border-box;\n font-weight: var(--n-label-font-weight);\n ',
      [
        e.cE(
          'asterisk',
          '\n white-space: nowrap;\n user-select: none;\n -webkit-user-select: none;\n color: var(--n-asterisk-color);\n transition: color .3s var(--n-bezier);\n '
        ),
        e.cE(
          'asterisk-placeholder',
          '\n grid-area: mark;\n user-select: none;\n -webkit-user-select: none;\n visibility: hidden; \n '
        ),
      ]
    ),
    e.cB(
      'form-item-blank',
      '\n grid-area: blank;\n min-height: var(--n-blank-height);\n '
    ),
    e.cM('auto-label-width', [e.cB('form-item-label', 'white-space: nowrap;')]),
    e.cM(
      'left-labelled',
      '\n grid-template-areas:\n "label blank"\n "label feedback";\n grid-template-columns: auto minmax(0, 1fr);\n grid-template-rows: auto 1fr;\n align-items: start;\n ',
      [
        e.cB(
          'form-item-label',
          '\n display: grid;\n grid-template-columns: 1fr auto;\n min-height: var(--n-blank-height);\n height: auto;\n box-sizing: border-box;\n flex-shrink: 0;\n flex-grow: 0;\n ',
          [
            e.cM(
              'reverse-columns-space',
              '\n grid-template-columns: auto 1fr;\n '
            ),
            e.cM(
              'left-mark',
              '\n grid-template-areas:\n "mark text"\n ". text";\n '
            ),
            e.cM(
              'right-mark',
              '\n grid-template-areas: \n "text mark"\n "text .";\n '
            ),
            e.cM(
              'right-hanging-mark',
              '\n grid-template-areas: \n "text mark"\n "text .";\n '
            ),
            e.cE('text', '\n grid-area: text; \n '),
            e.cE('asterisk', '\n grid-area: mark; \n align-self: end;\n '),
          ]
        ),
      ]
    ),
    e.cM(
      'top-labelled',
      '\n grid-template-areas:\n "label"\n "blank"\n "feedback";\n grid-template-rows: minmax(var(--n-label-height), auto) 1fr;\n grid-template-columns: minmax(0, 100%);\n ',
      [
        e.cM(
          'no-label',
          '\n grid-template-areas:\n "blank"\n "feedback";\n grid-template-rows: 1fr;\n '
        ),
        e.cB(
          'form-item-label',
          '\n display: flex;\n align-items: flex-start;\n justify-content: var(--n-label-text-align);\n '
        ),
      ]
    ),
    e.cB(
      'form-item-blank',
      '\n box-sizing: border-box;\n display: flex;\n align-items: center;\n position: relative;\n '
    ),
    e.cB(
      'form-item-feedback-wrapper',
      '\n grid-area: feedback;\n box-sizing: border-box;\n min-height: var(--n-feedback-height);\n font-size: var(--n-feedback-font-size);\n line-height: 1.25;\n transform-origin: top left;\n ',
      [
        e.c('&:not(:empty)', '\n padding: var(--n-feedback-padding);\n '),
        e.cB(
          'form-item-feedback',
          {
            transition: 'color .3s var(--n-bezier)',
            color: 'var(--n-feedback-text-color)',
          },
          [
            e.cM('warning', { color: 'var(--n-feedback-text-color-warning)' }),
            e.cM('error', { color: 'var(--n-feedback-text-color-error)' }),
            (function ({
              name: t = 'fade-down',
              fromOffset: n = '-4px',
              enterDuration: o = '.3s',
              leaveDuration: r = '.3s',
              enterCubicBezier: i = $o,
              leaveCubicBezier: l = $o,
            } = {}) {
              return [
                e.c(
                  `&.${t}-transition-enter-from, &.${t}-transition-leave-to`,
                  {
                    opacity: 0,
                    transform: `translateY(${n})`,
                  }
                ),
                e.c(
                  `&.${t}-transition-enter-to, &.${t}-transition-leave-from`,
                  {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }
                ),
                e.c(`&.${t}-transition-leave-active`, {
                  transition: `opacity ${r} ${l}, transform ${r} ${l}`,
                }),
                e.c(`&.${t}-transition-enter-active`, {
                  transition: `opacity ${o} ${i}, transform ${o} ${i}`,
                }),
              ];
            })({
              fromOffset: '-3px',
              enterDuration: '.3s',
              leaveDuration: '.2s',
            }),
          ]
        ),
      ]
    ),
  ]
);
var Oo =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, o) {
    return new (n || (n = Promise))(function (r, i) {
      function l(e) {
        try {
          s(o.next(e));
        } catch (t) {
          i(t);
        }
      }
      function a(e) {
        try {
          s(o.throw(e));
        } catch (t) {
          i(t);
        }
      }
      function s(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(l, a);
      }
      s((o = o.apply(e, t || [])).next());
    });
  };
const Bo = Object.assign(Object.assign({}, e.useTheme.props), {
  label: String,
  labelWidth: [Number, String],
  labelStyle: [String, Object],
  labelAlign: String,
  labelPlacement: String,
  path: String,
  first: Boolean,
  rulePath: String,
  required: Boolean,
  showRequireMark: {
    type: Boolean,
    default: void 0,
  },
  requireMarkPlacement: String,
  showFeedback: {
    type: Boolean,
    default: void 0,
  },
  rule: [Object, Array],
  size: String,
  ignorePathChange: Boolean,
  validationStatus: String,
  feedback: String,
  showLabel: {
    type: Boolean,
    default: void 0,
  },
  labelProps: Object,
});
function Fo(t, n) {
  return (...o) => {
    try {
      const r = t(...o);
      return (!n &&
        ('boolean' == typeof r || r instanceof Error || Array.isArray(r))) ||
        (null == r ? void 0 : r.then)
        ? r
        : (void 0 === r ||
            e.warn(
              'form-item/validate',
              `You return a ${typeof r} typed value in the validator method, which is not recommended. Please use ` +
                (n ? '`Promise`' : '`boolean`, `Error` or `Promise`') +
                ' typed value instead.'
            ),
          true);
    } catch (r) {
      return void e.warn(
        'form-item/validate',
        "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."
      );
    }
  };
}
const Po = e.defineComponent({
    name: 'FormItem',
    props: Bo,
    setup(t) {
      v(Gn, 'formItems', e.toRef(t, 'path'));
      const { mergedClsPrefixRef: n, inlineThemeDisabled: o } = e.useConfig(t),
        r = e.inject(Un, null),
        i = (function (t) {
          const n = e.inject(Un, null);
          return {
            mergedSize: e.computed(() =>
              void 0 !== t.size
                ? t.size
                : void 0 !== (null == n ? void 0 : n.props.size)
                ? n.props.size
                : 'medium'
            ),
          };
        })(t),
        l = (function (t) {
          const n = e.inject(Un, null),
            o = e.computed(() => {
              const { labelPlacement: e } = t;
              return void 0 !== e
                ? e
                : (null == n ? void 0 : n.props.labelPlacement)
                ? n.props.labelPlacement
                : 'top';
            }),
            r = e.computed(
              () =>
                'left' === o.value &&
                ('auto' === t.labelWidth ||
                  'auto' === (null == n ? void 0 : n.props.labelWidth))
            ),
            i = e.computed(() => {
              if ('top' === o.value) {
                return;
              }
              const { labelWidth: e } = t;
              if (void 0 !== e && 'auto' !== e) {
                return d(e);
              }
              if (r.value) {
                const e = null == n ? void 0 : n.maxChildLabelWidthRef.value;
                return void 0 !== e ? d(e) : void 0;
              }
              return void 0 !== (null == n ? void 0 : n.props.labelWidth)
                ? d(n.props.labelWidth)
                : void 0;
            }),
            l = e.computed(() => {
              const { labelAlign: e } = t;
              return (
                e ||
                ((null == n ? void 0 : n.props.labelAlign)
                  ? n.props.labelAlign
                  : void 0)
              );
            }),
            a = e.computed(() => {
              var e;
              return [
                null === (e = t.labelProps) || void 0 === e ? void 0 : e.style,
                t.labelStyle,
                { width: i.value },
              ];
            }),
            s = e.computed(() => {
              const { showRequireMark: e } = t;
              return void 0 !== e
                ? e
                : null == n
                ? void 0
                : n.props.showRequireMark;
            }),
            c = e.computed(() => {
              const { requireMarkPlacement: e } = t;
              return void 0 !== e
                ? e
                : (null == n ? void 0 : n.props.requireMarkPlacement) ||
                    'right';
            }),
            u = e.ref(false),
            f = e.computed(() => {
              const { validationStatus: e } = t;
              return void 0 !== e ? e : u.value ? 'error' : void 0;
            }),
            h = e.computed(() => {
              const { showFeedback: e } = t;
              return void 0 !== e
                ? e
                : void 0 === (null == n ? void 0 : n.props.showFeedback) ||
                    n.props.showFeedback;
            }),
            p = e.computed(() => {
              const { showLabel: e } = t;
              return void 0 !== e
                ? e
                : void 0 === (null == n ? void 0 : n.props.showLabel) ||
                    n.props.showLabel;
            });
          return {
            validationErrored: u,
            mergedLabelStyle: a,
            mergedLabelPlacement: o,
            mergedLabelAlign: l,
            mergedShowRequireMark: s,
            mergedRequireMarkPlacement: c,
            mergedValidationStatus: f,
            mergedShowFeedback: h,
            mergedShowLabel: p,
            isAutoLabelWidth: r,
          };
        })(t),
        { validationErrored: a } = l,
        { mergedRequired: s, mergedRules: c } = (function (t) {
          const n = e.inject(Un, null),
            o = e.computed(() => {
              const { rulePath: e } = t;
              if (void 0 !== e) {
                return e;
              }
              const { path: n } = t;
              return void 0 !== n ? n : void 0;
            }),
            r = e.computed(() => {
              const e = [],
                { rule: r } = t;
              if (
                (void 0 !== r && (Array.isArray(r) ? e.push(...r) : e.push(r)),
                n)
              ) {
                const { rules: t } = n.props,
                  { value: r } = o;
                if (void 0 !== t && void 0 !== r) {
                  const n = xe(t, r);
                  void 0 !== n && (Array.isArray(n) ? e.push(...n) : e.push(n));
                }
              }
              return e;
            }),
            i = e.computed(() => r.value.some((e) => e.required)),
            l = e.computed(() => i.value || t.required);
          return {
            mergedRules: r,
            mergedRequired: l,
          };
        })(t),
        { mergedSize: u } = i,
        {
          mergedLabelPlacement: f,
          mergedLabelAlign: h,
          mergedRequireMarkPlacement: p,
        } = l,
        g = e.ref([]),
        m = e.ref(e.createId()),
        b = r ? e.toRef(r.props, 'disabled') : e.ref(false),
        y = e.useTheme('Form', '-form-item', zo, e.formLight, t, n);
      function w() {
        g.value = [];
        a.value = false;
        t.feedback && (m.value = e.createId());
      }
      e.watch(e.toRef(t, 'path'), () => {
        t.ignorePathChange || w();
      });
      const x = (e = null, n = () => true, o = { suppressWarning: true }) =>
        Oo(this, void 0, void 0, function* () {
          const { path: i } = t;
          o ? o.first || (o.first = t.first) : (o = {});
          const { value: l } = c,
            s = r ? xe(r.props.model, i || '') : void 0,
            u = { e: n.renderMessage },
            d = { e: n.message },
            f = (
              e
                ? l.filter((t) =>
                    Array.isArray(t.trigger)
                      ? t.trigger.includes(e)
                      : t.trigger === e
                  )
                : l
            )
              .filter(n)
              .map((e, t) => {
                const n = Object.assign({}, e);
                if (
                  (n.validator && (n.validator = Fo(n.validator, false)),
                  n.asyncValidator &&
                    (n.asyncValidator = Fo(n.asyncValidator, true)),
                  n.renderMessage)
                ) {
                  const e = `__renderMessage__${t}`;
                  n.message = e;
                }
                return n;
              });
          if (!f.length) {
            return { valid: true };
          }
          const h = null != i ? i : '__n_no_path__',
            p = new Mo({ [h]: f }),
            { validateMessages: v } = (null == r ? void 0 : r.props) || {};
          return (
            v && p.messages(v),
            yield new Promise((e) => {
              p.validate({ [h]: s }, o, (t) => {
                (null == t ? void 0 : t.length)
                  ? ((g.value = t.map((e) => {
                      const t = (null == e ? void 0 : e.message) || '';
                      return {
                        key: t,
                        render: () =>
                          t.startsWith('__renderMessage__') ? u[t]() : t,
                      };
                    })),
                    t.forEach((e) => {
                      var t;
                      (null === (t = e.message) || void 0 === t
                        ? void 0
                        : t.startsWith('__renderMessage__')) &&
                        (e.message = d[e.message]);
                    }),
                    (a.value = true),
                    e({
                      valid: false,
                      errors: t,
                    }))
                  : (w(), e({ valid: true }));
              });
            })
          );
        });
      e.provide(e.formItemInjectionKey, {
        path: e.toRef(t, 'path'),
        disabled: b,
        mergedSize: i.mergedSize,
        mergedValidationStatus: l.mergedValidationStatus,
        restoreValidation: w,
        handleContentBlur: function () {
          x('blur');
        },
        handleContentChange: function () {
          x('change');
        },
        handleContentFocus: function () {
          x('focus');
        },
        handleContentInput: function () {
          x('input');
        },
      });
      const C = {
          validate: function (e, t) {
            return Oo(this, void 0, void 0, function* () {
              let n, o, r, i;
              return (
                'string' == typeof e
                  ? ((n = e), (o = t))
                  : null !== e &&
                    'object' == typeof e &&
                    ((n = e.trigger),
                    (o = e.callback),
                    (r = e.shouldRuleBeApplied),
                    (i = e.options)),
                yield new Promise((e, t) => {
                  x(n, r, i).then(({ valid: n, errors: r }) => {
                    n ? (o && o(), e()) : (o && o(r), t(r));
                  });
                })
              );
            });
          },
          restoreValidation: w,
          internalValidate: x,
        },
        k = e.ref(null);
      e.onMounted(() => {
        if (!l.isAutoLabelWidth.value) {
          return;
        }
        const e = k.value;
        if (null !== e) {
          const t = e.style.whiteSpace;
          e.style.whiteSpace = 'nowrap';
          e.style.width = '';
          null == r ||
            r.deriveMaxChildLabelWidth(
              Number(getComputedStyle(e).width.slice(0, -2))
            );
          e.style.whiteSpace = t;
        }
      });
      const S = e.computed(() => {
          var t;
          const { value: n } = u,
            { value: o } = f,
            r = 'top' === o ? 'vertical' : 'horizontal',
            {
              common: { cubicBezierEaseInOut: i },
              self: {
                labelTextColor: l,
                asteriskColor: a,
                lineHeight: s,
                feedbackTextColor: c,
                feedbackTextColorWarning: d,
                feedbackTextColorError: p,
                feedbackPadding: v,
                labelFontWeight: g,
                [e.createKey('labelHeight', n)]: m,
                [e.createKey('blankHeight', n)]: b,
                [e.createKey('feedbackFontSize', n)]: w,
                [e.createKey('feedbackHeight', n)]: x,
                [e.createKey('labelPadding', r)]: C,
                [e.createKey('labelTextAlign', r)]: k,
                [e.createKey(e.createKey('labelFontSize', o), n)]: S,
              },
            } = y.value;
          let M = null !== (t = h.value) && void 0 !== t ? t : k;
          'top' === o && (M = 'right' === M ? 'flex-end' : 'flex-start');
          return {
            '--n-bezier': i,
            '--n-line-height': s,
            '--n-blank-height': b,
            '--n-label-font-size': S,
            '--n-label-text-align': M,
            '--n-label-height': m,
            '--n-label-padding': C,
            '--n-label-font-weight': g,
            '--n-asterisk-color': a,
            '--n-label-text-color': l,
            '--n-feedback-padding': v,
            '--n-feedback-font-size': w,
            '--n-feedback-height': x,
            '--n-feedback-text-color': c,
            '--n-feedback-text-color-warning': d,
            '--n-feedback-text-color-error': p,
          };
        }),
        M = o
          ? e.useThemeClass(
              'form-item',
              e.computed(() => {
                var e;
                return `${u.value[0]}${f.value[0]}${
                  (null === (e = h.value) || void 0 === e ? void 0 : e[0]) || ''
                }`;
              }),
              S,
              t
            )
          : void 0,
        $ = e.computed(
          () => 'left' === f.value && 'left' === p.value && 'left' === h.value
        );
      return Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {
                labelElementRef: k,
                mergedClsPrefix: n,
                mergedRequired: s,
                feedbackId: m,
                renderExplains: g,
                reverseColSpace: $,
              },
              l
            ),
            i
          ),
          C
        ),
        {
          cssVars: o ? void 0 : S,
          themeClass: null == M ? void 0 : M.themeClass,
          onRender: null == M ? void 0 : M.onRender,
        }
      );
    },
    render() {
      const {
          $slots: t,
          mergedClsPrefix: n,
          mergedShowLabel: o,
          mergedShowRequireMark: r,
          mergedRequireMarkPlacement: i,
          onRender: l,
        } = this,
        a = void 0 !== r ? r : this.mergedRequired;
      null == l || l();
      return e.h(
        'div',
        {
          class: [
            `${n}-form-item`,
            this.themeClass,
            `${n}-form-item--${this.mergedSize}-size`,
            `${n}-form-item--${this.mergedLabelPlacement}-labelled`,
            this.isAutoLabelWidth && `${n}-form-item--auto-label-width`,
            !o && `${n}-form-item--no-label`,
          ],
          style: this.cssVars,
        },
        o &&
          (() => {
            const t = this.$slots.label ? this.$slots.label() : this.label;
            if (!t) {
              return null;
            }
            const o = e.h('span', { class: `${n}-form-item-label__text` }, t),
              r = a
                ? e.h(
                    'span',
                    { class: `${n}-form-item-label__asterisk` },
                    'left' !== i ? '\xA0*' : '*\xA0'
                  )
                : 'right-hanging' === i &&
                  e.h(
                    'span',
                    { class: `${n}-form-item-label__asterisk-placeholder` },
                    '\xA0*'
                  ),
              { labelProps: l } = this;
            return e.h(
              'label',
              Object.assign({}, l, {
                class: [
                  null == l ? void 0 : l.class,
                  `${n}-form-item-label`,
                  `${n}-form-item-label--${i}-mark`,
                  this.reverseColSpace &&
                    `${n}-form-item-label--reverse-columns-space`,
                ],
                style: this.mergedLabelStyle,
                ref: 'labelElementRef',
              }),
              'left' === i ? [r, o] : [o, r]
            );
          })(),
        e.h(
          'div',
          {
            class: [
              `${n}-form-item-blank`,
              this.mergedValidationStatus &&
                `${n}-form-item-blank--${this.mergedValidationStatus}`,
            ],
          },
          t
        ),
        this.mergedShowFeedback
          ? e.h(
              'div',
              {
                key: this.feedbackId,
                class: `${n}-form-item-feedback-wrapper`,
              },
              e.h(
                e.Transition,
                {
                  name: 'fade-down-transition',
                  mode: 'out-in',
                },
                {
                  default: () => {
                    const { mergedValidationStatus: o } = this;
                    return e.resolveWrappedSlot(t.feedback, (t) => {
                      var r;
                      const { feedback: i } = this,
                        l =
                          t || i
                            ? e.h(
                                'div',
                                {
                                  key: '__feedback__',
                                  class: `${n}-form-item-feedback__line`,
                                },
                                t || i
                              )
                            : this.renderExplains.length
                            ? null === (r = this.renderExplains) || void 0 === r
                              ? void 0
                              : r.map(({ key: t, render: o }) =>
                                  e.h(
                                    'div',
                                    {
                                      key: t,
                                      class: `${n}-form-item-feedback__line`,
                                    },
                                    o()
                                  )
                                )
                            : null;
                      return l
                        ? 'warning' === o
                          ? e.h(
                              'div',
                              {
                                key: 'controlled-warning',
                                class: `${n}-form-item-feedback ${n}-form-item-feedback--warning`,
                              },
                              l
                            )
                          : 'error' === o
                          ? e.h(
                              'div',
                              {
                                key: 'controlled-error',
                                class: `${n}-form-item-feedback ${n}-form-item-feedback--error`,
                              },
                              l
                            )
                          : 'success' === o
                          ? e.h(
                              'div',
                              {
                                key: 'controlled-success',
                                class: `${n}-form-item-feedback ${n}-form-item-feedback--success`,
                              },
                              l
                            )
                          : e.h(
                              'div',
                              {
                                key: 'controlled-default',
                                class: `${n}-form-item-feedback`,
                              },
                              l
                            )
                        : null;
                    });
                  },
                }
              )
            )
          : null
      );
    },
  }),
  To = e.c([
    e.c(
      '@keyframes spin-rotate',
      '\n from {\n transform: rotate(0);\n }\n to {\n transform: rotate(360deg);\n }\n '
    ),
    e.cB('spin-container', { position: 'relative' }, [
      e.cB(
        'spin-body',
        '\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translateX(-50%) translateY(-50%);\n ',
        [e.fadeInTransition()]
      ),
    ]),
    e.cB(
      'spin-body',
      '\n display: inline-flex;\n align-items: center;\n justify-content: center;\n flex-direction: column;\n '
    ),
    e.cB(
      'spin',
      '\n display: inline-flex;\n height: var(--n-size);\n width: var(--n-size);\n font-size: var(--n-size);\n color: var(--n-color);\n ',
      [e.cM('rotate', '\n animation: spin-rotate 2s linear infinite;\n ')]
    ),
    e.cB(
      'spin-description',
      '\n display: inline-block;\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n margin-top: 8px;\n '
    ),
    e.cB(
      'spin-content',
      '\n opacity: 1;\n transition: opacity .3s var(--n-bezier);\n pointer-events: all;\n ',
      [
        e.cM(
          'spinning',
          '\n user-select: none;\n -webkit-user-select: none;\n pointer-events: none;\n opacity: var(--n-opacity-spinning);\n '
        ),
      ]
    ),
  ]),
  Ro = {
    small: 20,
    medium: 18,
    large: 16,
  },
  Eo = Object.assign(Object.assign({}, e.useTheme.props), {
    description: String,
    stroke: String,
    size: {
      type: [String, Number],
      default: 'medium',
    },
    show: {
      type: Boolean,
      default: true,
    },
    strokeWidth: Number,
    rotate: {
      type: Boolean,
      default: true,
    },
    spinning: {
      type: Boolean,
      validator: () => true,
      default: void 0,
    },
  }),
  Ao = e.defineComponent({
    name: 'Spin',
    props: Eo,
    setup(t) {
      const { mergedClsPrefixRef: n, inlineThemeDisabled: o } = e.useConfig(t),
        r = e.useTheme('Spin', '-spin', To, e.spinLight, t, n),
        i = e.computed(() => {
          const { size: n } = t,
            {
              common: { cubicBezierEaseInOut: o },
              self: i,
            } = r.value,
            { opacitySpinning: l, color: a, textColor: s } = i;
          return {
            '--n-bezier': o,
            '--n-opacity-spinning': l,
            '--n-size':
              'number' == typeof n ? e.pxfy(n) : i[e.createKey('size', n)],
            '--n-color': a,
            '--n-text-color': s,
          };
        }),
        l = o
          ? e.useThemeClass(
              'spin',
              e.computed(() => {
                const { size: e } = t;
                return 'number' == typeof e ? String(e) : e[0];
              }),
              i,
              t
            )
          : void 0;
      return {
        mergedClsPrefix: n,
        compitableShow: b(t, ['spinning', 'show']),
        mergedStrokeWidth: e.computed(() => {
          const { strokeWidth: e } = t;
          if (void 0 !== e) {
            return e;
          }
          const { size: n } = t;
          return Ro['number' == typeof n ? 'medium' : n];
        }),
        cssVars: o ? void 0 : i,
        themeClass: null == l ? void 0 : l.themeClass,
        onRender: null == l ? void 0 : l.onRender,
      };
    },
    render() {
      var t, n;
      const { $slots: o, mergedClsPrefix: r, description: i } = this,
        l = o.icon && this.rotate,
        a =
          (i || o.description) &&
          e.h(
            'div',
            { class: `${r}-spin-description` },
            i ||
              (null === (t = o.description) || void 0 === t
                ? void 0
                : t.call(o))
          ),
        s = o.icon
          ? e.h(
              'div',
              {
                class: [`${r}-spin-body`, this.themeClass],
              },
              e.h(
                'div',
                {
                  class: [`${r}-spin`, l && `${r}-spin--rotate`],
                  style: o.default ? '' : this.cssVars,
                },
                o.icon()
              ),
              a
            )
          : e.h(
              'div',
              {
                class: [`${r}-spin-body`, this.themeClass],
              },
              e.h(e.NBaseLoading, {
                clsPrefix: r,
                style: o.default ? '' : this.cssVars,
                stroke: this.stroke,
                'stroke-width': this.mergedStrokeWidth,
                class: `${r}-spin`,
              }),
              a
            );
      return (
        null === (n = this.onRender) || void 0 === n || n.call(this),
        o.default
          ? e.h(
              'div',
              {
                class: [`${r}-spin-container`, this.themeClass],
                style: this.cssVars,
              },
              e.h(
                'div',
                {
                  class: [
                    `${r}-spin-content`,
                    this.compitableShow && `${r}-spin-content--spinning`,
                  ],
                },
                o
              ),
              e.h(
                e.Transition,
                { name: 'fade-in-transition' },
                { default: () => (this.compitableShow ? s : null) }
              )
            )
          : s
      );
    },
  });
function jo(e, t) {
  var n,
    o,
    r,
    i,
    l = {
      label: 0,
      sent: function () {
        if (1 & r[0]) {
          throw r[1];
        }
        return r[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (i = {
      next: a(0),
      throw: a(1),
      return: a(2),
    }),
    'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function a(i) {
    return function (a) {
      return (function (i) {
        if (n) {
          throw new TypeError('Generator is already executing.');
        }
        for (; l; ) {
          try {
            if (
              ((n = 1),
              o &&
                (r =
                  2 & i[0]
                    ? o.return
                    : i[0]
                    ? o.throw || ((r = o.return) && r.call(o), 0)
                    : o.next) &&
                !(r = r.call(o, i[1])).done)
            ) {
              return r;
            }
            switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
              case 0:
              case 1:
                r = i;
                break;
              case 4:
                return (
                  l.label++,
                  {
                    value: i[1],
                    done: false,
                  }
                );
              case 5:
                l.label++, (o = i[1]), (i = [0]);
                continue;
              case 7:
                (i = l.ops.pop()), l.trys.pop();
                continue;
              default:
                if (
                  !((r = l.trys),
                  (r = r.length > 0 && r[r.length - 1]) ||
                    (6 !== i[0] && 2 !== i[0]))
                ) {
                  l = 0;
                  continue;
                }
                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                  l.label = i[1];
                  break;
                }
                if (6 === i[0] && l.label < r[1]) {
                  l.label = r[1];
                  r = i;
                  break;
                }
                if (r && l.label < r[2]) {
                  l.label = r[2];
                  l.ops.push(i);
                  break;
                }
                r[2] && l.ops.pop(), l.trys.pop();
                continue;
            }
            i = t.call(e, l);
          } catch (a) {
            i = [6, a];
            o = 0;
          } finally {
            n = r = 0;
          }
        }
        if (5 & i[0]) {
          throw i[1];
        }
        return {
          value: i[0] ? i[1] : void 0,
          done: true,
        };
      })([i, a]);
    };
  }
}
function Io(e) {
  return new Promise(function (t) {
    var n = document.createElement('img');
    n.style.display = 'none';
    n.src = e + '/?v=' + Math.random();
    var o = new Date();
    n.onerror = function () {
      var e = new Date();
      t(e.getTime() - o.getTime());
    };
    n.onload = function () {
      var e = new Date();
      t(e.getTime() - o.getTime());
    };
    document.body.appendChild(n);
  });
}
function No(e) {
  return new Promise(function (t, n) {
    var o = document.createElement('link');
    o.rel = 'stylesheet';
    o.type = 'text/css';
    o.href = e;
    o.onload = function () {
      t(true);
    };
    o.onerror = function () {
      t(false);
    };
    document.body.appendChild(o);
  });
}
var Lo =
  '^((https|http)://)?(([0-9a-z]+\\.)*([0-9a-z][0-9a-z-]{0,20})?[0-9a-z]\\.[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*().;?:@&=+$,%#-]+)+/?)$';
var _o = 'http',
  Do = ['http', 'https'];
function qo(e) {
  var t = this;
  return new Promise(function (n, o) {
    return (
      (r = t),
      (i = void 0),
      (a = function () {
        var t, r, i;
        return jo(this, function (l) {
          switch (l.label) {
            case 0:
              return (
                (a = e),
                new RegExp(Lo, 'g').test(a)
                  ? (e.includes('http://') ||
                      e.includes('https://') ||
                      (e = _o + '://' + e),
                    (t = {
                      status: false,
                      time: -1,
                    }),
                    [4, No(e)])
                  : (o({
                      status: false,
                      msg: 'url is not correct!',
                    }),
                    [2])
              );
            case 1:
              return (r = l.sent()), [4, Io(e)];
            case 2:
              return (i = l.sent()), (t.status = r), (t.time = i), n(t), [2];
          }
          var a;
        });
      }),
      new ((l = void 0) || (l = Promise))(function (e, t) {
        function n(e) {
          try {
            s(a.next(e));
          } catch (n) {
            t(n);
          }
        }
        function o(e) {
          try {
            s(a.throw(e));
          } catch (n) {
            t(n);
          }
        }
        function s(t) {
          t.done
            ? e(t.value)
            : new l(function (e) {
                e(t.value);
              }).then(n, o);
        }
        s((a = a.apply(r, i || [])).next());
      })
    );
    var r, i, l, a;
  });
}
var Wo = function (e) {
    return qo(e);
  },
  Ko = function (e) {
    return (function (e) {
      var t = e.protocol;
      if (!Do.includes(t)) {
        throw new Error('protocolList not includes ' + t);
      }
      return (_o = t);
    })(e);
  };
Ko({ protocol: 'https' });
exports.NForm = Zn;
exports.NFormItem = Po;
exports.NPopover = Pn;
exports.NSelect = Vn;
exports.NSpin = Ao;
exports.VBinder = O;
exports.VFollower = V;
exports.VTarget = B;
exports.createTreeMate = sn;
exports.formatLength = d;
exports.getTitleAttribute = a;
exports.happensIn = l;
exports.popoverBaseProps = Bn;
exports.renderArrow = Sn;
exports.useAdjustedTo = C;
exports.useDelayTime = function (t = true) {
  const n = t ? ['#d6e96b', 'tomato'] : ['#18a057', 'red'],
    { t: o } = e.useLocale(),
    r = e.useUserStore(),
    i = e.useTranslateStore(),
    { delayTimeList: l, isLoading: a } = e.storeToRefs(i),
    { translateServeList: s, isFetchLoading: c } = e.useTranslate(),
    u = () => {
      const t = l.value.filter((e) => e.status).sort((e, t) => e.time - t.time);
      return r.isOversea
        ? t.find((t) => t.isOver === e.TranslateType.GOOGLE)
        : t[0];
    },
    d = (t) => Wo(e.removeProtocol(t) + '/index1.html'),
    f = e.computed(() => l.value.some((e) => e.status));
  return {
    isLoading: a,
    delayTimeList: l,
    renderLabel: (t) => {
      const r = l.value.find((e) => e.id === t.id);
      return [
        e.h('div', { className: 'ts-select' }, [
          e.h('span', c.value ? `${o('Loading')}...` : t.name),
          a.value
            ? e.h(Ao, {
                size: 16,
                className: 'delay-spin',
              })
            : e.h(
                'span',
                {
                  className: 'delay-time',
                  style: {
                    color: (null == r ? void 0 : r.status) ? n[0] : n[1],
                  },
                },
                (null == r ? void 0 : r.status)
                  ? `${null == r ? void 0 : r.time} ms`
                  : o('Timeout')
              ),
        ]),
        t.label,
      ];
    },
    fetchDelayTime: (e) => {
      a.value = true;
      const t = s.value.map((e) => d(e.serveUrl));
      Promise.all(t)
        .then((t) => {
          var n;
          l.value = t.map((e, t) => {
            var n, o;
            return {
              ...e,
              id: null == (n = s.value[t]) ? void 0 : n.id,
              isOver: null == (o = s.value[t]) ? void 0 : o.isOver,
            };
          });
          const o = u(),
            r =
              null ==
              (n = s.value.find((e) => e.id === (null == o ? void 0 : o.id)))
                ? void 0
                : n.serveUrl;
          e && r && e(r);
        })
        .catch((e) => {})
        .finally(() => {
          a.value = false;
        });
    },
    findFastServe: u,
    hasNetwork: f,
    pingUrl: d,
  };
};
