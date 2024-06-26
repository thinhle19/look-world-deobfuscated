'use strict';
const e = require('./AppSettingModal.454e866b.js'),
  n = require('./index.3840a89d.js'),
  o = require('./useDelayTime.c75a4cd7.js'),
  t = require('./Input.3f4c4aa8.js'),
  r = require('./Switch.a86b5994.js'),
  a = require('./Badge.53ca7866.js');
function l(e) {
  return (n) => {
    e.value = n ? n.$el : null;
  };
}
const i = n.defineComponent({
    name: 'ChevronRight',
    render: () =>
      n.h(
        'svg',
        {
          viewBox: '0 0 16 16',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        n.h('path', {
          d: 'M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z',
          fill: 'currentColor',
        })
      ),
  }),
  s = n.h(
    'svg',
    {
      viewBox: '0 0 64 64',
      class: 'check-icon',
    },
    n.h('path', {
      d: 'M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z',
    })
  ),
  c = n.h(
    'svg',
    {
      viewBox: '0 0 100 100',
      class: 'line-icon',
    },
    n.h('path', {
      d: 'M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z',
    })
  ),
  d = n.createInjectionKey('n-checkbox-group'),
  u = {
    min: Number,
    max: Number,
    size: String,
    value: Array,
    defaultValue: {
      type: Array,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: void 0,
    },
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    onChange: [Function, Array],
  };
n.defineComponent({
  name: 'CheckboxGroup',
  props: u,
  setup(e) {
    const { mergedClsPrefixRef: o } = n.useConfig(e),
      r = n.useFormItem(e),
      { mergedSizeRef: a, mergedDisabledRef: l } = r,
      i = n.ref(e.defaultValue),
      s = n.computed(() => e.value),
      c = t.useMergedState(s, i),
      u = n.computed(() => {
        var e;
        return (
          (null === (e = c.value) || void 0 === e ? void 0 : e.length) || 0
        );
      }),
      p = n.computed(() =>
        Array.isArray(c.value) ? new Set(c.value) : new Set()
      );
    return (
      n.provide(d, {
        checkedCountRef: u,
        maxRef: n.toRef(e, 'max'),
        minRef: n.toRef(e, 'min'),
        valueSetRef: p,
        disabledRef: l,
        mergedSizeRef: a,
        toggleCheckbox: function (o, t) {
          const { nTriggerFormInput: a, nTriggerFormChange: l } = r,
            { onChange: s, 'onUpdate:value': d, onUpdateValue: u } = e;
          if (Array.isArray(c.value)) {
            const e = Array.from(c.value),
              r = e.findIndex((e) => e === t);
            o
              ? ~r ||
                (e.push(t),
                u &&
                  n.call(u, e, {
                    actionType: 'check',
                    value: t,
                  }),
                d &&
                  n.call(d, e, {
                    actionType: 'check',
                    value: t,
                  }),
                a(),
                l(),
                (i.value = e),
                s && n.call(s, e))
              : ~r &&
                (e.splice(r, 1),
                u &&
                  n.call(u, e, {
                    actionType: 'uncheck',
                    value: t,
                  }),
                d &&
                  n.call(d, e, {
                    actionType: 'uncheck',
                    value: t,
                  }),
                s && n.call(s, e),
                (i.value = e),
                a(),
                l());
          } else {
            o
              ? (u &&
                  n.call(u, [t], {
                    actionType: 'check',
                    value: t,
                  }),
                d &&
                  n.call(d, [t], {
                    actionType: 'check',
                    value: t,
                  }),
                s && n.call(s, [t]),
                (i.value = [t]),
                a(),
                l())
              : (u &&
                  n.call(u, [], {
                    actionType: 'uncheck',
                    value: t,
                  }),
                d &&
                  n.call(d, [], {
                    actionType: 'uncheck',
                    value: t,
                  }),
                s && n.call(s, []),
                (i.value = []),
                a(),
                l());
          }
        },
      }),
      { mergedClsPrefix: o }
    );
  },
  render() {
    return n.h(
      'div',
      {
        class: `${this.mergedClsPrefix}-checkbox-group`,
        role: 'group',
      },
      this.$slots
    );
  },
});
const p = n.c([
    n.cB(
      'checkbox',
      '\n line-height: var(--n-label-line-height);\n font-size: var(--n-font-size);\n outline: none;\n cursor: pointer;\n display: inline-flex;\n flex-wrap: nowrap;\n align-items: flex-start;\n word-break: break-word;\n --n-merged-color-table: var(--n-color-table);\n ',
      [
        n.c('&:hover', [
          n.cB('checkbox-box', [
            n.cE('border', { border: 'var(--n-border-checked)' }),
          ]),
        ]),
        n.c('&:focus:not(:active)', [
          n.cB('checkbox-box', [
            n.cE(
              'border',
              '\n border: var(--n-border-focus);\n box-shadow: var(--n-box-shadow-focus);\n '
            ),
          ]),
        ]),
        n.cM('inside-table', [
          n.cB(
            'checkbox-box',
            '\n background-color: var(--n-merged-color-table);\n '
          ),
        ]),
        n.cM('checked', [
          n.cB(
            'checkbox-box',
            '\n background-color: var(--n-color-checked);\n ',
            [
              n.cB('checkbox-icon', [
                n.c('.check-icon', '\n opacity: 1;\n transform: scale(1);\n '),
              ]),
            ]
          ),
        ]),
        n.cM('indeterminate', [
          n.cB('checkbox-box', [
            n.cB('checkbox-icon', [
              n.c('.check-icon', '\n opacity: 0;\n transform: scale(.5);\n '),
              n.c('.line-icon', '\n opacity: 1;\n transform: scale(1);\n '),
            ]),
          ]),
        ]),
        n.cM('checked, indeterminate', [
          n.c('&:focus:not(:active)', [
            n.cB('checkbox-box', [
              n.cE(
                'border',
                '\n border: var(--n-border-checked);\n box-shadow: var(--n-box-shadow-focus);\n '
              ),
            ]),
          ]),
          n.cB(
            'checkbox-box',
            '\n background-color: var(--n-color-checked);\n border-left: 0;\n border-top: 0;\n ',
            [n.cE('border', { border: 'var(--n-border-checked)' })]
          ),
        ]),
        n.cM('disabled', { cursor: 'not-allowed' }, [
          n.cM('checked', [
            n.cB(
              'checkbox-box',
              '\n background-color: var(--n-color-disabled-checked);\n ',
              [
                n.cE('border', { border: 'var(--n-border-disabled-checked)' }),
                n.cB('checkbox-icon', [
                  n.c('.check-icon, .line-icon', {
                    fill: 'var(--n-check-mark-color-disabled-checked)',
                  }),
                ]),
              ]
            ),
          ]),
          n.cB(
            'checkbox-box',
            '\n background-color: var(--n-color-disabled);\n ',
            [
              n.cE('border', { border: 'var(--n-border-disabled)' }),
              n.cB('checkbox-icon', [
                n.c('.check-icon, .line-icon', {
                  fill: 'var(--n-check-mark-color-disabled)',
                }),
              ]),
            ]
          ),
          n.cE('label', { color: 'var(--n-text-color-disabled)' }),
        ]),
        n.cB(
          'checkbox-box-wrapper',
          '\n position: relative;\n width: var(--n-size);\n flex-shrink: 0;\n flex-grow: 0;\n user-select: none;\n -webkit-user-select: none;\n '
        ),
        n.cB(
          'checkbox-box',
          '\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n height: var(--n-size);\n width: var(--n-size);\n display: inline-block;\n box-sizing: border-box;\n border-radius: var(--n-border-radius);\n background-color: var(--n-color);\n transition: background-color 0.3s var(--n-bezier);\n ',
          [
            n.cE(
              'border',
              '\n transition:\n border-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n border-radius: inherit;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border: var(--n-border);\n '
            ),
            n.cB(
              'checkbox-icon',
              '\n display: flex;\n align-items: center;\n justify-content: center;\n position: absolute;\n left: 1px;\n right: 1px;\n top: 1px;\n bottom: 1px;\n ',
              [
                n.c(
                  '.check-icon, .line-icon',
                  '\n width: 100%;\n fill: var(--n-check-mark-color);\n opacity: 0;\n transform: scale(0.5);\n transform-origin: center;\n transition:\n fill 0.3s var(--n-bezier),\n transform 0.3s var(--n-bezier),\n opacity 0.3s var(--n-bezier),\n border-color 0.3s var(--n-bezier);\n '
                ),
                n.iconSwitchTransition({
                  left: '1px',
                  top: '1px',
                }),
              ]
            ),
          ]
        ),
        n.cE(
          'label',
          '\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n padding: var(--n-label-padding);\n font-weight: var(--n-label-font-weight);\n ',
          [n.c('&:empty', { display: 'none' })]
        ),
      ]
    ),
    n.insideModal(
      n.cB(
        'checkbox',
        '\n --n-merged-color-table: var(--n-color-table-modal);\n '
      )
    ),
    n.insidePopover(
      n.cB(
        'checkbox',
        '\n --n-merged-color-table: var(--n-color-table-popover);\n '
      )
    ),
  ]),
  v = Object.assign(Object.assign({}, n.useTheme.props), {
    size: String,
    checked: {
      type: [Boolean, String, Number],
      default: void 0,
    },
    defaultChecked: {
      type: [Boolean, String, Number],
      default: false,
    },
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: void 0,
    },
    indeterminate: Boolean,
    label: String,
    focusable: {
      type: Boolean,
      default: true,
    },
    checkedValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    uncheckedValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    'onUpdate:checked': [Function, Array],
    onUpdateChecked: [Function, Array],
    privateInsideTable: Boolean,
    onChange: [Function, Array],
  }),
  h = n.defineComponent({
    name: 'Checkbox',
    props: v,
    setup(e) {
      const o = n.ref(null),
        {
          mergedClsPrefixRef: r,
          inlineThemeDisabled: a,
          mergedRtlRef: l,
        } = n.useConfig(e),
        i = n.useFormItem(e, {
          mergedSize(n) {
            const { size: o } = e;
            if (void 0 !== o) {
              return o;
            }
            if (u) {
              const { value: e } = u.mergedSizeRef;
              if (void 0 !== e) {
                return e;
              }
            }
            if (n) {
              const { mergedSize: e } = n;
              if (void 0 !== e) {
                return e.value;
              }
            }
            return 'medium';
          },
          mergedDisabled(n) {
            const { disabled: o } = e;
            if (void 0 !== o) {
              return o;
            }
            if (u) {
              if (u.disabledRef.value) {
                return true;
              }
              const {
                maxRef: { value: e },
                checkedCountRef: n,
              } = u;
              if (void 0 !== e && n.value >= e && !m.value) {
                return true;
              }
              const {
                minRef: { value: o },
              } = u;
              if (void 0 !== o && n.value <= o && m.value) {
                return true;
              }
            }
            return !!n && n.disabled.value;
          },
        }),
        { mergedDisabledRef: s, mergedSizeRef: c } = i,
        u = n.inject(d, null),
        v = n.ref(e.defaultChecked),
        h = n.toRef(e, 'checked'),
        f = t.useMergedState(h, v),
        m = n.useMemo(() => {
          if (u) {
            const n = u.valueSetRef.value;
            return !(!n || void 0 === e.value) && n.has(e.value);
          }
          return f.value === e.checkedValue;
        }),
        g = n.useTheme('Checkbox', '-checkbox', p, n.checkboxLight, e, r);
      function b(o) {
        if (u && void 0 !== e.value) {
          u.toggleCheckbox(!m.value, e.value);
        } else {
          const { onChange: t, 'onUpdate:checked': r, onUpdateChecked: a } = e,
            { nTriggerFormInput: l, nTriggerFormChange: s } = i,
            c = m.value ? e.uncheckedValue : e.checkedValue;
          r && n.call(r, c, o);
          a && n.call(a, c, o);
          t && n.call(t, c, o);
          l();
          s();
          v.value = c;
        }
      }
      const w = {
          focus: () => {
            var e;
            null === (e = o.value) || void 0 === e || e.focus();
          },
          blur: () => {
            var e;
            null === (e = o.value) || void 0 === e || e.blur();
          },
        },
        x = n.useRtl('Checkbox', l, r),
        y = n.computed(() => {
          const { value: e } = c,
            {
              common: { cubicBezierEaseInOut: o },
              self: {
                borderRadius: t,
                color: r,
                colorChecked: a,
                colorDisabled: l,
                colorTableHeader: i,
                colorTableHeaderModal: s,
                colorTableHeaderPopover: d,
                checkMarkColor: u,
                checkMarkColorDisabled: p,
                border: v,
                borderFocus: h,
                borderDisabled: f,
                borderChecked: m,
                boxShadowFocus: b,
                textColor: w,
                textColorDisabled: x,
                checkMarkColorDisabledChecked: y,
                colorDisabledChecked: k,
                borderDisabledChecked: C,
                labelPadding: S,
                labelLineHeight: _,
                labelFontWeight: N,
                [n.createKey('fontSize', e)]: I,
                [n.createKey('size', e)]: T,
              },
            } = g.value;
          return {
            '--n-label-line-height': _,
            '--n-label-font-weight': N,
            '--n-size': T,
            '--n-bezier': o,
            '--n-border-radius': t,
            '--n-border': v,
            '--n-border-checked': m,
            '--n-border-focus': h,
            '--n-border-disabled': f,
            '--n-border-disabled-checked': C,
            '--n-box-shadow-focus': b,
            '--n-color': r,
            '--n-color-checked': a,
            '--n-color-table': i,
            '--n-color-table-modal': s,
            '--n-color-table-popover': d,
            '--n-color-disabled': l,
            '--n-color-disabled-checked': k,
            '--n-text-color': w,
            '--n-text-color-disabled': x,
            '--n-check-mark-color': u,
            '--n-check-mark-color-disabled': p,
            '--n-check-mark-color-disabled-checked': y,
            '--n-font-size': I,
            '--n-label-padding': S,
          };
        }),
        k = a
          ? n.useThemeClass(
              'checkbox',
              n.computed(() => c.value[0]),
              y,
              e
            )
          : void 0;
      return Object.assign(i, w, {
        rtlEnabled: x,
        selfRef: o,
        mergedClsPrefix: r,
        mergedDisabled: s,
        renderedChecked: m,
        mergedTheme: g,
        labelId: n.createId(),
        handleClick: function (e) {
          s.value || b(e);
        },
        handleKeyUp: function (e) {
          if (!s.value) {
            switch (e.key) {
              case ' ':
              case 'Enter':
                b(e);
            }
          }
        },
        handleKeyDown: function (e) {
          if (' ' === e.key) {
            e.preventDefault();
          }
        },
        cssVars: a ? void 0 : y,
        themeClass: null == k ? void 0 : k.themeClass,
        onRender: null == k ? void 0 : k.onRender,
      });
    },
    render() {
      var e;
      const {
        $slots: o,
        renderedChecked: t,
        mergedDisabled: r,
        indeterminate: a,
        privateInsideTable: l,
        cssVars: i,
        labelId: d,
        label: u,
        mergedClsPrefix: p,
        focusable: v,
        handleKeyUp: h,
        handleKeyDown: f,
        handleClick: m,
      } = this;
      return (
        null === (e = this.onRender) || void 0 === e || e.call(this),
        n.h(
          'div',
          {
            ref: 'selfRef',
            class: [
              `${p}-checkbox`,
              this.themeClass,
              this.rtlEnabled && `${p}-checkbox--rtl`,
              t && `${p}-checkbox--checked`,
              r && `${p}-checkbox--disabled`,
              a && `${p}-checkbox--indeterminate`,
              l && `${p}-checkbox--inside-table`,
            ],
            tabindex: r || !v ? void 0 : 0,
            role: 'checkbox',
            'aria-checked': a ? 'mixed' : t,
            'aria-labelledby': d,
            style: i,
            onKeyup: h,
            onKeydown: f,
            onClick: m,
            onMousedown: () => {
              n.on(
                'selectstart',
                window,
                (e) => {
                  e.preventDefault();
                },
                { once: true }
              );
            },
          },
          n.h(
            'div',
            { class: `${p}-checkbox-box-wrapper` },
            '\xA0',
            n.h(
              'div',
              { class: `${p}-checkbox-box` },
              n.h(n.NIconSwitchTransition, null, {
                default: () =>
                  this.indeterminate
                    ? n.h(
                        'div',
                        {
                          key: 'indeterminate',
                          class: `${p}-checkbox-icon`,
                        },
                        c
                      )
                    : n.h(
                        'div',
                        {
                          key: 'check',
                          class: `${p}-checkbox-icon`,
                        },
                        s
                      ),
              }),
              n.h('div', { class: `${p}-checkbox-box__border` })
            )
          ),
          null !== u || o.default
            ? n.h(
                'span',
                {
                  class: `${p}-checkbox__label`,
                  id: d,
                },
                o.default ? o.default() : u
              )
            : null
        )
      );
    },
  }),
  f = n.cB('collapse-transition', { width: '100%' }, [
    n.fadeInHeightExpandTransition(),
  ]),
  m = Object.assign(Object.assign({}, n.useTheme.props), {
    show: {
      type: Boolean,
      default: true,
    },
    appear: Boolean,
    collapsed: {
      type: Boolean,
      default: void 0,
    },
  }),
  g = n.defineComponent({
    name: 'CollapseTransition',
    props: m,
    inheritAttrs: false,
    setup(e) {
      const {
          mergedClsPrefixRef: o,
          inlineThemeDisabled: t,
          mergedRtlRef: r,
        } = n.useConfig(e),
        a = n.useTheme(
          'CollapseTransition',
          '-collapse-transition',
          f,
          n.collapseTransitionLight,
          e,
          o
        ),
        l = n.useRtl('CollapseTransition', r, o),
        i = n.computed(() => (void 0 !== e.collapsed ? e.collapsed : e.show)),
        s = n.computed(() => {
          const {
            self: { bezier: e },
          } = a.value;
          return { '--n-bezier': e };
        }),
        c = t ? n.useThemeClass('collapse-transition', void 0, s, e) : void 0;
      return {
        rtlEnabled: l,
        mergedShow: i,
        mergedClsPrefix: o,
        cssVars: t ? void 0 : s,
        themeClass: null == c ? void 0 : c.themeClass,
        onRender: null == c ? void 0 : c.onRender,
      };
    },
    render() {
      return n.h(
        n.NFadeInExpandTransition,
        { appear: this.appear },
        {
          default: () => {
            var e;
            if (this.mergedShow) {
              return (
                null === (e = this.onRender) || void 0 === e || e.call(this),
                n.h(
                  'div',
                  n.mergeProps(
                    {
                      class: [
                        `${this.mergedClsPrefix}-collapse-transition`,
                        this.rtlEnabled &&
                          `${this.mergedClsPrefix}-collapse-transition--rtl`,
                        this.themeClass,
                      ],
                      style: this.cssVars,
                    },
                    this.$attrs
                  ),
                  this.$slots
                )
              );
            }
          },
        }
      );
    },
  }),
  b = n.defineComponent({
    name: 'DropdownDivider',
    props: {
      clsPrefix: {
        type: String,
        required: true,
      },
    },
    render() {
      return n.h('div', { class: `${this.clsPrefix}-dropdown-divider` });
    },
  }),
  w = n.cB(
    'icon',
    '\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n transform: translateZ(0);\n',
    [
      n.cM('color-transition', { transition: 'color .3s var(--n-bezier)' }),
      n.cM('depth', { color: 'var(--n-color)' }, [
        n.c('svg', {
          opacity: 'var(--n-opacity)',
          transition: 'opacity .3s var(--n-bezier)',
        }),
      ]),
      n.c('svg', {
        height: '1em',
        width: '1em',
      }),
    ]
  ),
  x = Object.assign(Object.assign({}, n.useTheme.props), {
    depth: [String, Number],
    size: [Number, String],
    color: String,
    component: Object,
  }),
  y = n.defineComponent({
    _n_icon__: true,
    name: 'Icon',
    inheritAttrs: false,
    props: x,
    setup(e) {
      const { mergedClsPrefixRef: t, inlineThemeDisabled: r } = n.useConfig(e),
        a = n.useTheme('Icon', '-icon', w, n.iconLight, e, t),
        l = n.computed(() => {
          const { depth: n } = e,
            {
              common: { cubicBezierEaseInOut: o },
              self: t,
            } = a.value;
          if (void 0 !== n) {
            const { color: e, [`opacity${n}Depth`]: r } = t;
            return {
              '--n-bezier': o,
              '--n-color': e,
              '--n-opacity': r,
            };
          }
          return {
            '--n-bezier': o,
            '--n-color': '',
            '--n-opacity': '',
          };
        }),
        i = r
          ? n.useThemeClass(
              'icon',
              n.computed(() => `${e.depth || 'd'}`),
              l,
              e
            )
          : void 0;
      return {
        mergedClsPrefix: t,
        mergedStyle: n.computed(() => {
          const { size: n, color: t } = e;
          return {
            fontSize: o.formatLength(n),
            color: t,
          };
        }),
        cssVars: r ? void 0 : l,
        themeClass: null == i ? void 0 : i.themeClass,
        onRender: null == i ? void 0 : i.onRender,
      };
    },
    render() {
      var e;
      const {
        $parent: o,
        depth: t,
        mergedClsPrefix: r,
        component: a,
        onRender: l,
        themeClass: i,
      } = this;
      return (
        (null === (e = null == o ? void 0 : o.$options) || void 0 === e
          ? void 0
          : e._n_icon__) &&
          n.warn('icon', "don't wrap `n-icon` inside `n-icon`"),
        null == l || l(),
        n.h(
          'i',
          n.mergeProps(this.$attrs, {
            role: 'img',
            class: [
              `${r}-icon`,
              i,
              {
                [`${r}-icon--depth`]: t,
                [`${r}-icon--color-transition`]: void 0 !== t,
              },
            ],
            style: [this.cssVars, this.mergedStyle],
          }),
          a ? n.h(a) : this.$slots
        )
      );
    },
  }),
  k = n.createInjectionKey('n-dropdown-menu'),
  C = n.createInjectionKey('n-dropdown'),
  S = n.createInjectionKey('n-dropdown-option');
function _(e, n) {
  return 'submenu' === e.type || (void 0 === e.type && void 0 !== e[n]);
}
function N(e) {
  return 'divider' === e.type;
}
const I = n.defineComponent({
    name: 'DropdownOption',
    props: {
      clsPrefix: {
        type: String,
        required: true,
      },
      tmNode: {
        type: Object,
        required: true,
      },
      parentKey: {
        type: [String, Number],
        default: null,
      },
      placement: {
        type: String,
        default: 'right-start',
      },
      props: Object,
      scrollable: Boolean,
    },
    setup(e) {
      const t = n.inject(C),
        {
          hoverKeyRef: r,
          keyboardKeyRef: a,
          lastToggledSubmenuKeyRef: l,
          pendingKeyPathRef: i,
          activeKeyPathRef: s,
          animatedRef: c,
          mergedShowRef: d,
          renderLabelRef: u,
          renderIconRef: p,
          labelFieldRef: v,
          childrenFieldRef: h,
          renderOptionRef: f,
          nodePropsRef: m,
          menuPropsRef: g,
        } = t,
        b = n.inject(S, null),
        w = n.inject(k),
        x = n.inject(n.popoverBodyInjectionKey),
        y = n.computed(() => e.tmNode.rawNode),
        N = n.computed(() => {
          const { value: n } = h;
          return _(e.tmNode.rawNode, n);
        }),
        I = n.computed(() => {
          const { disabled: n } = e.tmNode;
          return n;
        }),
        T = (function (e, o, t) {
          if (!o) {
            return e;
          }
          const r = n.ref(e.value);
          let a = null;
          return (
            n.watch(e, (e) => {
              null !== a && window.clearTimeout(a);
              true === e
                ? t && !t.value
                  ? (r.value = true)
                  : (a = window.setTimeout(() => {
                      r.value = true;
                    }, o))
                : (r.value = false);
            }),
            r
          );
        })(
          n.computed(() => {
            if (!N.value) {
              return false;
            }
            const { key: n, disabled: o } = e.tmNode;
            if (o) {
              return false;
            }
            const { value: t } = r,
              { value: s } = a,
              { value: c } = l,
              { value: d } = i;
            return null !== t
              ? d.includes(n)
              : null !== s
              ? d.includes(n) && d[d.length - 1] !== n
              : null !== c && d.includes(n);
          }),
          300,
          n.computed(() => null === a.value && !c.value)
        ),
        B = n.computed(
          () => !!(null == b ? void 0 : b.enteringSubmenuRef.value)
        ),
        R = n.ref(false);
      function A() {
        const { parentKey: n, tmNode: o } = e;
        o.disabled ||
          (d.value && ((l.value = n), (a.value = null), (r.value = o.key)));
      }
      return (
        n.provide(S, { enteringSubmenuRef: R }),
        {
          labelField: v,
          renderLabel: u,
          renderIcon: p,
          siblingHasIcon: w.showIconRef,
          siblingHasSubmenu: w.hasSubmenuRef,
          menuProps: g,
          popoverBody: x,
          animated: c,
          mergedShowSubmenu: n.computed(() => T.value && !B.value),
          rawNode: y,
          hasSubmenu: N,
          pending: n.useMemo(() => {
            const { value: n } = i,
              { key: o } = e.tmNode;
            return n.includes(o);
          }),
          childActive: n.useMemo(() => {
            const { value: n } = s,
              { key: o } = e.tmNode,
              t = n.findIndex((e) => o === e);
            return -1 !== t && t < n.length - 1;
          }),
          active: n.useMemo(() => {
            const { value: n } = s,
              { key: o } = e.tmNode,
              t = n.findIndex((e) => o === e);
            return -1 !== t && t === n.length - 1;
          }),
          mergedDisabled: I,
          renderOption: f,
          nodeProps: m,
          handleClick: function () {
            const { value: n } = N,
              { tmNode: o } = e;
            d.value &&
              (n ||
                o.disabled ||
                (t.doSelect(o.key, o.rawNode), t.doUpdateShow(false)));
          },
          handleMouseMove: function () {
            const { tmNode: n } = e;
            n.disabled || (d.value && r.value !== n.key && A());
          },
          handleMouseEnter: A,
          handleMouseLeave: function (n) {
            if (e.tmNode.disabled) {
              return;
            }
            if (!d.value) {
              return;
            }
            const { relatedTarget: t } = n;
            !t ||
              o.happensIn({ target: t }, 'dropdownOption') ||
              o.happensIn({ target: t }, 'scrollbarRail') ||
              (r.value = null);
          },
          handleSubmenuBeforeEnter: function () {
            R.value = true;
          },
          handleSubmenuAfterEnter: function () {
            R.value = false;
          },
        }
      );
    },
    render() {
      var e, t;
      const {
        animated: r,
        rawNode: a,
        mergedShowSubmenu: l,
        clsPrefix: s,
        siblingHasIcon: c,
        siblingHasSubmenu: d,
        renderLabel: u,
        renderIcon: p,
        renderOption: v,
        nodeProps: h,
        props: f,
        scrollable: m,
      } = this;
      let g = null;
      if (l) {
        const o =
          null === (e = this.menuProps) || void 0 === e
            ? void 0
            : e.call(this, a, a.children);
        g = n.h(
          A,
          Object.assign({}, o, {
            clsPrefix: s,
            scrollable: this.scrollable,
            tmNodes: this.tmNode.children,
            parentKey: this.tmNode.key,
          })
        );
      }
      const b = {
          class: [
            `${s}-dropdown-option-body`,
            this.pending && `${s}-dropdown-option-body--pending`,
            this.active && `${s}-dropdown-option-body--active`,
            this.childActive && `${s}-dropdown-option-body--child-active`,
            this.mergedDisabled && `${s}-dropdown-option-body--disabled`,
          ],
          onMousemove: this.handleMouseMove,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onClick: this.handleClick,
        },
        w = null == h ? void 0 : h(a),
        x = n.h(
          'div',
          Object.assign(
            {
              class: [`${s}-dropdown-option`, null == w ? void 0 : w.class],
              'data-dropdown-option': true,
            },
            w
          ),
          n.h('div', n.mergeProps(b, f), [
            n.h(
              'div',
              {
                class: [
                  `${s}-dropdown-option-body__prefix`,
                  c && `${s}-dropdown-option-body__prefix--show-icon`,
                ],
              },
              [p ? p(a) : n.render(a.icon)]
            ),
            n.h(
              'div',
              {
                'data-dropdown-option': true,
                class: `${s}-dropdown-option-body__label`,
              },
              u
                ? u(a)
                : n.render(
                    null !== (t = a[this.labelField]) && void 0 !== t
                      ? t
                      : a.title
                  )
            ),
            n.h(
              'div',
              {
                'data-dropdown-option': true,
                class: [
                  `${s}-dropdown-option-body__suffix`,
                  d && `${s}-dropdown-option-body__suffix--has-submenu`,
                ],
              },
              this.hasSubmenu
                ? n.h(y, null, { default: () => n.h(i, null) })
                : null
            ),
          ]),
          this.hasSubmenu
            ? n.h(o.VBinder, null, {
                default: () => [
                  n.h(o.VTarget, null, {
                    default: () =>
                      n.h(
                        'div',
                        { class: `${s}-dropdown-offset-container` },
                        n.h(
                          o.VFollower,
                          {
                            show: this.mergedShowSubmenu,
                            placement: this.placement,
                            to: (m && this.popoverBody) || void 0,
                            teleportDisabled: !m,
                          },
                          {
                            default: () =>
                              n.h(
                                'div',
                                { class: `${s}-dropdown-menu-wrapper` },
                                r
                                  ? n.h(
                                      n.Transition,
                                      {
                                        onBeforeEnter:
                                          this.handleSubmenuBeforeEnter,
                                        onAfterEnter:
                                          this.handleSubmenuAfterEnter,
                                        name: 'fade-in-scale-up-transition',
                                        appear: true,
                                      },
                                      { default: () => g }
                                    )
                                  : g
                              ),
                          }
                        )
                      ),
                  }),
                ],
              })
            : null
        );
      return v
        ? v({
            node: x,
            option: a,
          })
        : x;
    },
  }),
  T = n.defineComponent({
    name: 'DropdownGroupHeader',
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
      const { showIconRef: e, hasSubmenuRef: o } = n.inject(k),
        {
          renderLabelRef: t,
          labelFieldRef: r,
          nodePropsRef: a,
          renderOptionRef: l,
        } = n.inject(C);
      return {
        labelField: r,
        showIcon: e,
        hasSubmenu: o,
        renderLabel: t,
        nodeProps: a,
        renderOption: l,
      };
    },
    render() {
      var e;
      const {
          clsPrefix: o,
          hasSubmenu: t,
          showIcon: r,
          nodeProps: a,
          renderLabel: l,
          renderOption: i,
        } = this,
        { rawNode: s } = this.tmNode,
        c = n.h(
          'div',
          Object.assign(
            { class: `${o}-dropdown-option` },
            null == a ? void 0 : a(s)
          ),
          n.h(
            'div',
            {
              class: `${o}-dropdown-option-body ${o}-dropdown-option-body--group`,
            },
            n.h(
              'div',
              {
                'data-dropdown-option': true,
                class: [
                  `${o}-dropdown-option-body__prefix`,
                  r && `${o}-dropdown-option-body__prefix--show-icon`,
                ],
              },
              n.render(s.icon)
            ),
            n.h(
              'div',
              {
                class: `${o}-dropdown-option-body__label`,
                'data-dropdown-option': true,
              },
              l
                ? l(s)
                : n.render(
                    null !== (e = s.title) && void 0 !== e
                      ? e
                      : s[this.labelField]
                  )
            ),
            n.h('div', {
              class: [
                `${o}-dropdown-option-body__suffix`,
                t && `${o}-dropdown-option-body__suffix--has-submenu`,
              ],
              'data-dropdown-option': true,
            })
          )
        );
      return i
        ? i({
            node: c,
            option: s,
          })
        : c;
    },
  }),
  B = n.defineComponent({
    name: 'NDropdownGroup',
    props: {
      clsPrefix: {
        type: String,
        required: true,
      },
      tmNode: {
        type: Object,
        required: true,
      },
      parentKey: {
        type: [String, Number],
        default: null,
      },
    },
    render() {
      const { tmNode: e, parentKey: o, clsPrefix: t } = this,
        { children: r } = e;
      return n.h(
        n.Fragment,
        null,
        n.h(T, {
          clsPrefix: t,
          tmNode: e,
          key: e.key,
        }),
        null == r
          ? void 0
          : r.map((e) => {
              const { rawNode: r } = e;
              return false === r.show
                ? null
                : N(r)
                ? n.h(b, {
                    clsPrefix: t,
                    key: e.key,
                  })
                : e.isGroup
                ? (n.warn(
                    'dropdown',
                    '`group` node is not allowed to be put in `group` node.'
                  ),
                  null)
                : n.h(I, {
                    clsPrefix: t,
                    tmNode: e,
                    parentKey: o,
                    key: e.key,
                  });
            })
      );
    },
  }),
  R = n.defineComponent({
    name: 'DropdownRenderOption',
    props: {
      tmNode: {
        type: Object,
        required: true,
      },
    },
    render() {
      const {
        rawNode: { render: e, props: o },
      } = this.tmNode;
      return n.h('div', o, [null == e ? void 0 : e()]);
    },
  }),
  A = n.defineComponent({
    name: 'DropdownMenu',
    props: {
      scrollable: Boolean,
      showArrow: Boolean,
      arrowStyle: [String, Object],
      clsPrefix: {
        type: String,
        required: true,
      },
      tmNodes: {
        type: Array,
        default: () => [],
      },
      parentKey: {
        type: [String, Number],
        default: null,
      },
    },
    setup(e) {
      const { renderIconRef: o, childrenFieldRef: t } = n.inject(C);
      n.provide(k, {
        showIconRef: n.computed(() => {
          const n = o.value;
          return e.tmNodes.some((e) => {
            var o;
            if (e.isGroup) {
              return null === (o = e.children) || void 0 === o
                ? void 0
                : o.some(({ rawNode: e }) => (n ? n(e) : e.icon));
            }
            const { rawNode: t } = e;
            return n ? n(t) : t.icon;
          });
        }),
        hasSubmenuRef: n.computed(() => {
          const { value: n } = t;
          return e.tmNodes.some((e) => {
            var o;
            if (e.isGroup) {
              return null === (o = e.children) || void 0 === o
                ? void 0
                : o.some(({ rawNode: e }) => _(e, n));
            }
            const { rawNode: t } = e;
            return _(t, n);
          });
        }),
      });
      const r = n.ref(null);
      return (
        n.provide(n.modalBodyInjectionKey, null),
        n.provide(n.drawerBodyInjectionKey, null),
        n.provide(n.popoverBodyInjectionKey, r),
        { bodyRef: r }
      );
    },
    render() {
      const { parentKey: e, clsPrefix: t, scrollable: r } = this,
        a = this.tmNodes.map((o) => {
          const { rawNode: a } = o;
          return false === a.show
            ? null
            : (function (e) {
                return 'render' === e.type;
              })(a)
            ? n.h(R, {
                tmNode: o,
                key: o.key,
              })
            : N(a)
            ? n.h(b, {
                clsPrefix: t,
                key: o.key,
              })
            : (function (e) {
                return 'group' === e.type;
              })(a)
            ? n.h(B, {
                clsPrefix: t,
                tmNode: o,
                parentKey: e,
                key: o.key,
              })
            : n.h(I, {
                clsPrefix: t,
                tmNode: o,
                parentKey: e,
                key: o.key,
                props: a.props,
                scrollable: r,
              });
        });
      return n.h(
        'div',
        {
          class: [`${t}-dropdown-menu`, r && `${t}-dropdown-menu--scrollable`],
          ref: 'bodyRef',
        },
        r
          ? n.h(
              n.XScrollbar,
              { contentClass: `${t}-dropdown-menu__content` },
              { default: () => a }
            )
          : a,
        this.showArrow
          ? o.renderArrow({
              clsPrefix: t,
              arrowStyle: this.arrowStyle,
            })
          : null
      );
    },
  }),
  z = n.cB(
    'dropdown-menu',
    '\n transform-origin: var(--v-transform-origin);\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n box-shadow: var(--n-box-shadow);\n position: relative;\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n',
    [
      n.fadeInScaleUpTransition(),
      n.cB('dropdown-option', '\n position: relative;\n ', [
        n.c(
          'a',
          '\n text-decoration: none;\n color: inherit;\n outline: none;\n ',
          [
            n.c(
              '&::before',
              '\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n '
            ),
          ]
        ),
        n.cB(
          'dropdown-option-body',
          '\n display: flex;\n cursor: pointer;\n position: relative;\n height: var(--n-option-height);\n line-height: var(--n-option-height);\n font-size: var(--n-font-size);\n color: var(--n-option-text-color);\n transition: color .3s var(--n-bezier);\n ',
          [
            n.c(
              '&::before',
              '\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n left: 4px;\n right: 4px;\n transition: background-color .3s var(--n-bezier);\n border-radius: var(--n-border-radius);\n '
            ),
            n.cNotM('disabled', [
              n.cM(
                'pending',
                '\n color: var(--n-option-text-color-hover);\n ',
                [
                  n.cE(
                    'prefix, suffix',
                    '\n color: var(--n-option-text-color-hover);\n '
                  ),
                  n.c(
                    '&::before',
                    'background-color: var(--n-option-color-hover);'
                  ),
                ]
              ),
              n.cM(
                'active',
                '\n color: var(--n-option-text-color-active);\n ',
                [
                  n.cE(
                    'prefix, suffix',
                    '\n color: var(--n-option-text-color-active);\n '
                  ),
                  n.c(
                    '&::before',
                    'background-color: var(--n-option-color-active);'
                  ),
                ]
              ),
              n.cM(
                'child-active',
                '\n color: var(--n-option-text-color-child-active);\n ',
                [
                  n.cE(
                    'prefix, suffix',
                    '\n color: var(--n-option-text-color-child-active);\n '
                  ),
                ]
              ),
            ]),
            n.cM(
              'disabled',
              '\n cursor: not-allowed;\n opacity: var(--n-option-opacity-disabled);\n '
            ),
            n.cM(
              'group',
              '\n font-size: calc(var(--n-font-size) - 1px);\n color: var(--n-group-header-text-color);\n ',
              [
                n.cE(
                  'prefix',
                  '\n width: calc(var(--n-option-prefix-width) / 2);\n ',
                  [
                    n.cM(
                      'show-icon',
                      '\n width: calc(var(--n-option-icon-prefix-width) / 2);\n '
                    ),
                  ]
                ),
              ]
            ),
            n.cE(
              'prefix',
              '\n width: var(--n-option-prefix-width);\n display: flex;\n justify-content: center;\n align-items: center;\n color: var(--n-prefix-color);\n transition: color .3s var(--n-bezier);\n z-index: 1;\n ',
              [
                n.cM(
                  'show-icon',
                  '\n width: var(--n-option-icon-prefix-width);\n '
                ),
                n.cB('icon', '\n font-size: var(--n-option-icon-size);\n '),
              ]
            ),
            n.cE(
              'label',
              '\n white-space: nowrap;\n flex: 1;\n z-index: 1;\n '
            ),
            n.cE(
              'suffix',
              '\n box-sizing: border-box;\n flex-grow: 0;\n flex-shrink: 0;\n display: flex;\n justify-content: flex-end;\n align-items: center;\n min-width: var(--n-option-suffix-width);\n padding: 0 8px;\n transition: color .3s var(--n-bezier);\n color: var(--n-suffix-color);\n z-index: 1;\n ',
              [
                n.cM(
                  'has-submenu',
                  '\n width: var(--n-option-icon-suffix-width);\n '
                ),
                n.cB('icon', '\n font-size: var(--n-option-icon-size);\n '),
              ]
            ),
            n.cB('dropdown-menu', 'pointer-events: all;'),
          ]
        ),
        n.cB(
          'dropdown-offset-container',
          '\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: -4px;\n bottom: -4px;\n '
        ),
      ]),
      n.cB(
        'dropdown-divider',
        '\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-divider-color);\n height: 1px;\n margin: 4px 0;\n '
      ),
      n.cB(
        'dropdown-menu-wrapper',
        '\n transform-origin: var(--v-transform-origin);\n width: fit-content;\n '
      ),
      n.c('>', [
        n.cB('scrollbar', '\n height: inherit;\n max-height: inherit;\n '),
      ]),
      n.cNotM('scrollable', '\n padding: var(--n-padding);\n '),
      n.cM('scrollable', [n.cE('content', '\n padding: var(--n-padding);\n ')]),
    ]
  ),
  M = {
    animated: {
      type: Boolean,
      default: true,
    },
    keyboard: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
    inverted: Boolean,
    placement: {
      type: String,
      default: 'bottom',
    },
    onSelect: [Function, Array],
    options: {
      type: Array,
      default: () => [],
    },
    menuProps: Function,
    showArrow: Boolean,
    renderLabel: Function,
    renderIcon: Function,
    renderOption: Function,
    nodeProps: Function,
    labelField: {
      type: String,
      default: 'label',
    },
    keyField: {
      type: String,
      default: 'key',
    },
    childrenField: {
      type: String,
      default: 'children',
    },
    value: [String, Number],
  },
  P = Object.keys(o.popoverBaseProps),
  F = Object.assign(
    Object.assign(Object.assign({}, o.popoverBaseProps), M),
    n.useTheme.props
  ),
  $ = n.defineComponent({
    name: 'Dropdown',
    inheritAttrs: false,
    props: F,
    setup(e) {
      const r = n.ref(false),
        a = t.useMergedState(n.toRef(e, 'show'), r),
        l = n.computed(() => {
          const { keyField: n, childrenField: t } = e;
          return o.createTreeMate(e.options, {
            getKey: (e) => e[n],
            getDisabled: (e) => true === e.disabled,
            getIgnored: (e) => 'divider' === e.type || 'render' === e.type,
            getChildren: (e) => e[t],
          });
        }),
        i = n.computed(() => l.value.treeNodes),
        s = n.ref(null),
        c = n.ref(null),
        d = n.ref(null),
        u = n.computed(() => {
          var e, n, o;
          return null !==
            (o =
              null !==
                (n = null !== (e = s.value) && void 0 !== e ? e : c.value) &&
              void 0 !== n
                ? n
                : d.value) && void 0 !== o
            ? o
            : null;
        }),
        p = n.computed(() => l.value.getPath(u.value).keyPath),
        v = n.computed(() => l.value.getPath(e.value).keyPath);
      !(function (e = {}, o) {
        const t = n.reactive({
            ctrl: false,
            command: false,
            win: false,
            shift: false,
            tab: false,
          }),
          { keydown: r, keyup: a } = e,
          l = (e) => {
            switch (e.key) {
              case 'Control':
                t.ctrl = true;
                break;
              case 'Meta':
                (t.command = true), (t.win = true);
                break;
              case 'Shift':
                t.shift = true;
                break;
              case 'Tab':
                t.tab = true;
            }
            void 0 !== r &&
              Object.keys(r).forEach((n) => {
                if (n !== e.key) {
                  return;
                }
                const o = r[n];
                if ('function' == typeof o) {
                  o(e);
                } else {
                  const { stop: n = false, prevent: t = false } = o;
                  n && e.stopPropagation();
                  t && e.preventDefault();
                  o.handler(e);
                }
              });
          },
          i = (e) => {
            switch (e.key) {
              case 'Control':
                t.ctrl = false;
                break;
              case 'Meta':
                (t.command = false), (t.win = false);
                break;
              case 'Shift':
                t.shift = false;
                break;
              case 'Tab':
                t.tab = false;
            }
            void 0 !== a &&
              Object.keys(a).forEach((n) => {
                if (n !== e.key) {
                  return;
                }
                const o = a[n];
                if ('function' == typeof o) {
                  o(e);
                } else {
                  const { stop: n = false, prevent: t = false } = o;
                  n && e.stopPropagation();
                  t && e.preventDefault();
                  o.handler(e);
                }
              });
          },
          s = () => {
            (void 0 === o || o.value) &&
              (n.on('keydown', document, l), n.on('keyup', document, i));
            void 0 !== o &&
              n.watch(o, (e) => {
                e
                  ? (n.on('keydown', document, l), n.on('keyup', document, i))
                  : (n.off('keydown', document, l),
                    n.off('keyup', document, i));
              });
          };
        n.hasInstance()
          ? (n.onBeforeMount(s),
            n.onBeforeUnmount(() => {
              (void 0 === o || o.value) &&
                (n.off('keydown', document, l), n.off('keyup', document, i));
            }))
          : s();
        n.readonly(t);
      })(
        {
          keydown: {
            ArrowUp: {
              prevent: true,
              handler: function () {
                y('up');
              },
            },
            ArrowRight: {
              prevent: true,
              handler: function () {
                y('right');
              },
            },
            ArrowDown: {
              prevent: true,
              handler: function () {
                y('down');
              },
            },
            ArrowLeft: {
              prevent: true,
              handler: function () {
                y('left');
              },
            },
            Enter: {
              prevent: true,
              handler: function () {
                const e = x();
                (null == e ? void 0 : e.isLeaf) &&
                  a.value &&
                  (g(e.key, e.rawNode), b(false));
              },
            },
            Escape: function () {
              b(false);
            },
          },
        },
        n.useMemo(() => e.keyboard && a.value)
      );
      const { mergedClsPrefixRef: h, inlineThemeDisabled: f } = n.useConfig(e),
        m = n.useTheme('Dropdown', '-dropdown', z, n.dropdownLight, e, h);
      function g(o, t) {
        const { onSelect: r } = e;
        r && n.call(r, o, t);
      }
      function b(o) {
        const { 'onUpdate:show': t, onUpdateShow: a } = e;
        t && n.call(t, o);
        a && n.call(a, o);
        r.value = o;
      }
      function w() {
        s.value = null;
        c.value = null;
        d.value = null;
      }
      function x() {
        var e;
        const { value: n } = l,
          { value: o } = u;
        return n && null !== o && null !== (e = n.getNode(o)) && void 0 !== e
          ? e
          : null;
      }
      function y(e) {
        const { value: n } = u,
          {
            value: { getFirstAvailableNode: o },
          } = l;
        let t = null;
        if (null === n) {
          const e = o();
          null !== e && (t = e.key);
        } else {
          const n = x();
          if (n) {
            let o;
            switch (e) {
              case 'down':
                o = n.getNext();
                break;
              case 'up':
                o = n.getPrev();
                break;
              case 'right':
                o = n.getChild();
                break;
              case 'left':
                o = n.getParent();
            }
            o && (t = o.key);
          }
        }
        null !== t && ((s.value = null), (c.value = t));
      }
      n.provide(C, {
        labelFieldRef: n.toRef(e, 'labelField'),
        childrenFieldRef: n.toRef(e, 'childrenField'),
        renderLabelRef: n.toRef(e, 'renderLabel'),
        renderIconRef: n.toRef(e, 'renderIcon'),
        hoverKeyRef: s,
        keyboardKeyRef: c,
        lastToggledSubmenuKeyRef: d,
        pendingKeyPathRef: p,
        activeKeyPathRef: v,
        animatedRef: n.toRef(e, 'animated'),
        mergedShowRef: a,
        nodePropsRef: n.toRef(e, 'nodeProps'),
        renderOptionRef: n.toRef(e, 'renderOption'),
        menuPropsRef: n.toRef(e, 'menuProps'),
        doSelect: g,
        doUpdateShow: b,
      });
      n.watch(a, (n) => {
        e.animated || n || w();
      });
      const k = n.computed(() => {
          const { size: o, inverted: t } = e,
            {
              common: { cubicBezierEaseInOut: r },
              self: a,
            } = m.value,
            {
              padding: l,
              dividerColor: i,
              borderRadius: s,
              optionOpacityDisabled: c,
              [n.createKey('optionIconSuffixWidth', o)]: d,
              [n.createKey('optionSuffixWidth', o)]: u,
              [n.createKey('optionIconPrefixWidth', o)]: p,
              [n.createKey('optionPrefixWidth', o)]: v,
              [n.createKey('fontSize', o)]: h,
              [n.createKey('optionHeight', o)]: f,
              [n.createKey('optionIconSize', o)]: g,
            } = a,
            b = {
              '--n-bezier': r,
              '--n-font-size': h,
              '--n-padding': l,
              '--n-border-radius': s,
              '--n-option-height': f,
              '--n-option-prefix-width': v,
              '--n-option-icon-prefix-width': p,
              '--n-option-suffix-width': u,
              '--n-option-icon-suffix-width': d,
              '--n-option-icon-size': g,
              '--n-divider-color': i,
              '--n-option-opacity-disabled': c,
            };
          return (
            t
              ? ((b['--n-color'] = a.colorInverted),
                (b['--n-option-color-hover'] = a.optionColorHoverInverted),
                (b['--n-option-color-active'] = a.optionColorActiveInverted),
                (b['--n-option-text-color'] = a.optionTextColorInverted),
                (b['--n-option-text-color-hover'] =
                  a.optionTextColorHoverInverted),
                (b['--n-option-text-color-active'] =
                  a.optionTextColorActiveInverted),
                (b['--n-option-text-color-child-active'] =
                  a.optionTextColorChildActiveInverted),
                (b['--n-prefix-color'] = a.prefixColorInverted),
                (b['--n-suffix-color'] = a.suffixColorInverted),
                (b['--n-group-header-text-color'] =
                  a.groupHeaderTextColorInverted))
              : ((b['--n-color'] = a.color),
                (b['--n-option-color-hover'] = a.optionColorHover),
                (b['--n-option-color-active'] = a.optionColorActive),
                (b['--n-option-text-color'] = a.optionTextColor),
                (b['--n-option-text-color-hover'] = a.optionTextColorHover),
                (b['--n-option-text-color-active'] = a.optionTextColorActive),
                (b['--n-option-text-color-child-active'] =
                  a.optionTextColorChildActive),
                (b['--n-prefix-color'] = a.prefixColor),
                (b['--n-suffix-color'] = a.suffixColor),
                (b['--n-group-header-text-color'] = a.groupHeaderTextColor)),
            b
          );
        }),
        S = f
          ? n.useThemeClass(
              'dropdown',
              n.computed(() => `${e.size[0]}${e.inverted ? 'i' : ''}`),
              k,
              e
            )
          : void 0;
      return {
        mergedClsPrefix: h,
        mergedTheme: m,
        tmNodes: i,
        mergedShow: a,
        handleAfterLeave: () => {
          e.animated && w();
        },
        doUpdateShow: b,
        cssVars: f ? void 0 : k,
        themeClass: null == S ? void 0 : S.themeClass,
        onRender: null == S ? void 0 : S.onRender,
      };
    },
    render() {
      const { mergedTheme: e } = this,
        t = {
          show: this.mergedShow,
          theme: e.peers.Popover,
          themeOverrides: e.peerOverrides.Popover,
          internalOnAfterLeave: this.handleAfterLeave,
          internalRenderBody: (e, o, t, r, a) => {
            var i;
            const { mergedClsPrefix: s, menuProps: c } = this;
            null === (i = this.onRender) || void 0 === i || i.call(this);
            const d =
                (null == c
                  ? void 0
                  : c(
                      void 0,
                      this.tmNodes.map((e) => e.rawNode)
                    )) || {},
              u = {
                ref: l(o),
                class: [e, `${s}-dropdown`, this.themeClass],
                clsPrefix: s,
                tmNodes: this.tmNodes,
                style: [t, this.cssVars],
                showArrow: this.showArrow,
                arrowStyle: this.arrowStyle,
                scrollable: this.scrollable,
                onMouseenter: r,
                onMouseleave: a,
              };
            return n.h(A, n.mergeProps(this.$attrs, u, d));
          },
          onUpdateShow: this.doUpdateShow,
          'onUpdate:show': void 0,
        };
      return n.h(o.NPopover, Object.assign({}, n.keep(this.$props, P), t), {
        trigger: () => {
          var e, n;
          return null === (n = (e = this.$slots).default) || void 0 === n
            ? void 0
            : n.call(e);
        },
      });
    },
  });
const V = n.h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 36 36',
    },
    n.h('circle', {
      fill: '#FFCB4C',
      cx: '18',
      cy: '17.018',
      r: '17',
    }),
    n.h('path', {
      fill: '#65471B',
      d: 'M14.524 21.036c-.145-.116-.258-.274-.312-.464-.134-.46.13-.918.59-1.021 4.528-1.021 7.577 1.363 7.706 1.465.384.306.459.845.173 1.205-.286.358-.828.401-1.211.097-.11-.084-2.523-1.923-6.182-1.098-.274.061-.554-.016-.764-.184z',
    }),
    n.h('ellipse', {
      fill: '#65471B',
      cx: '13.119',
      cy: '11.174',
      rx: '2.125',
      ry: '2.656',
    }),
    n.h('ellipse', {
      fill: '#65471B',
      cx: '24.375',
      cy: '12.236',
      rx: '2.125',
      ry: '2.656',
    }),
    n.h('path', {
      fill: '#F19020',
      d: 'M17.276 35.149s1.265-.411 1.429-1.352c.173-.972-.624-1.167-.624-1.167s1.041-.208 1.172-1.376c.123-1.101-.861-1.363-.861-1.363s.97-.4 1.016-1.539c.038-.959-.995-1.428-.995-1.428s5.038-1.221 5.556-1.341c.516-.12 1.32-.615 1.069-1.694-.249-1.08-1.204-1.118-1.697-1.003-.494.115-6.744 1.566-8.9 2.068l-1.439.334c-.54.127-.785-.11-.404-.512.508-.536.833-1.129.946-2.113.119-1.035-.232-2.313-.433-2.809-.374-.921-1.005-1.649-1.734-1.899-1.137-.39-1.945.321-1.542 1.561.604 1.854.208 3.375-.833 4.293-2.449 2.157-3.588 3.695-2.83 6.973.828 3.575 4.377 5.876 7.952 5.048l3.152-.681z',
    }),
    n.h('path', {
      fill: '#65471B',
      d: 'M9.296 6.351c-.164-.088-.303-.224-.391-.399-.216-.428-.04-.927.393-1.112 4.266-1.831 7.699-.043 7.843.034.433.231.608.747.391 1.154-.216.405-.74.546-1.173.318-.123-.063-2.832-1.432-6.278.047-.257.109-.547.085-.785-.042zm12.135 3.75c-.156-.098-.286-.243-.362-.424-.187-.442.023-.927.468-1.084 4.381-1.536 7.685.48 7.823.567.415.26.555.787.312 1.178-.242.39-.776.495-1.191.238-.12-.072-2.727-1.621-6.267-.379-.266.091-.553.046-.783-.096z',
    })
  ),
  D = n.h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 36 36',
    },
    n.h('path', {
      fill: '#FFCC4D',
      d: 'M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18',
    }),
    n.h('ellipse', {
      fill: '#664500',
      cx: '18',
      cy: '27',
      rx: '5',
      ry: '6',
    }),
    n.h('path', {
      fill: '#664500',
      d: 'M5.999 11c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4C8.462 5.05 12.816 5 13 5c.552 0 1 .448 1 1 0 .551-.445.998-.996 1-.155.002-3.568.086-6.204 3.6-.196.262-.497.4-.801.4zm24.002 0c-.305 0-.604-.138-.801-.4-2.64-3.521-6.061-3.598-6.206-3.6-.55-.006-.994-.456-.991-1.005C22.006 5.444 22.45 5 23 5c.184 0 4.537.05 7.8 4.4.332.442.242 1.069-.2 1.4-.18.135-.39.2-.599.2zm-16.087 4.5l1.793-1.793c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L12.5 14.086l-1.793-1.793c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.793 1.793-1.793 1.793c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.793-1.793 1.793 1.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L13.914 15.5zm11 0l1.793-1.793c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L23.5 14.086l-1.793-1.793c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.793 1.793-1.793 1.793c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.793-1.793 1.793 1.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L24.914 15.5z',
    })
  ),
  L = n.h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 36 36',
    },
    n.h('ellipse', {
      fill: '#292F33',
      cx: '18',
      cy: '26',
      rx: '18',
      ry: '10',
    }),
    n.h('ellipse', {
      fill: '#66757F',
      cx: '18',
      cy: '24',
      rx: '18',
      ry: '10',
    }),
    n.h('path', {
      fill: '#E1E8ED',
      d: 'M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z',
    }),
    n.h('path', {
      fill: '#77B255',
      d: 'M35 12.056c0 5.216-7.611 9.444-17 9.444S1 17.271 1 12.056C1 6.84 8.611 3.611 18 3.611s17 3.229 17 8.445z',
    }),
    n.h('ellipse', {
      fill: '#A6D388',
      cx: '18',
      cy: '13',
      rx: '15',
      ry: '7',
    }),
    n.h('path', {
      d: 'M21 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z',
      fill: '#5C913B',
    })
  ),
  E = n.h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 36 36',
    },
    n.h('path', {
      fill: '#EF9645',
      d: 'M15.5 2.965c1.381 0 2.5 1.119 2.5 2.5v.005L20.5.465c1.381 0 2.5 1.119 2.5 2.5V4.25l2.5-1.535c1.381 0 2.5 1.119 2.5 2.5V8.75L29 18H15.458L15.5 2.965z',
    }),
    n.h('path', {
      fill: '#FFDC5D',
      d: 'M4.625 16.219c1.381-.611 3.354.208 4.75 2.188.917 1.3 1.187 3.151 2.391 3.344.46.073 1.234-.313 1.234-1.397V4.5s0-2 2-2 2 2 2 2v11.633c0-.029 1-.064 1-.082V2s0-2 2-2 2 2 2 2v14.053c0 .017 1 .041 1 .069V4.25s0-2 2-2 2 2 2 2v12.638c0 .118 1 .251 1 .398V8.75s0-2 2-2 2 2 2 2V24c0 6.627-5.373 12-12 12-4.775 0-8.06-2.598-9.896-5.292C8.547 28.423 8.096 26.051 8 25.334c0 0-.123-1.479-1.156-2.865-1.469-1.969-2.5-3.156-3.125-3.866-.317-.359-.625-1.707.906-2.384z',
    })
  ),
  O = n.cB(
    'result',
    '\n color: var(--n-text-color);\n line-height: var(--n-line-height);\n font-size: var(--n-font-size);\n transition:\n color .3s var(--n-bezier);\n',
    [
      n.cB(
        'result-icon',
        '\n display: flex;\n justify-content: center;\n transition: color .3s var(--n-bezier);\n ',
        [
          n.cE(
            'status-image',
            '\n font-size: var(--n-icon-size);\n width: 1em;\n height: 1em;\n '
          ),
          n.cB(
            'base-icon',
            '\n color: var(--n-icon-color);\n font-size: var(--n-icon-size);\n '
          ),
        ]
      ),
      n.cB('result-content', { marginTop: '24px' }),
      n.cB('result-footer', '\n margin-top: 24px;\n text-align: center;\n '),
      n.cB('result-header', [
        n.cE(
          'title',
          '\n margin-top: 16px;\n font-weight: var(--n-title-font-weight);\n transition: color .3s var(--n-bezier);\n text-align: center;\n color: var(--n-title-text-color);\n font-size: var(--n-title-font-size);\n '
        ),
        n.cE(
          'description',
          '\n margin-top: 4px;\n text-align: center;\n font-size: var(--n-font-size);\n '
        ),
      ]),
    ]
  ),
  j = {
    403: E,
    404: V,
    418: L,
    500: D,
    info: n.h(n.InfoIcon, null),
    success: n.h(n.SuccessIcon, null),
    warning: n.h(n.WarningIcon, null),
    error: n.h(n.ErrorIcon, null),
  },
  U = Object.assign(Object.assign({}, n.useTheme.props), {
    size: {
      type: String,
      default: 'medium',
    },
    status: {
      type: String,
      default: 'info',
    },
    title: String,
    description: String,
  }),
  K = n.defineComponent({
    name: 'Result',
    props: U,
    setup(e) {
      const { mergedClsPrefixRef: o, inlineThemeDisabled: t } = n.useConfig(e),
        r = n.useTheme('Result', '-result', O, n.resultLight, e, o),
        a = n.computed(() => {
          const { size: o, status: t } = e,
            {
              common: { cubicBezierEaseInOut: a },
              self: {
                textColor: l,
                lineHeight: i,
                titleTextColor: s,
                titleFontWeight: c,
                [n.createKey('iconColor', t)]: d,
                [n.createKey('fontSize', o)]: u,
                [n.createKey('titleFontSize', o)]: p,
                [n.createKey('iconSize', o)]: v,
              },
            } = r.value;
          return {
            '--n-bezier': a,
            '--n-font-size': u,
            '--n-icon-size': v,
            '--n-line-height': i,
            '--n-text-color': l,
            '--n-title-font-size': p,
            '--n-title-font-weight': c,
            '--n-title-text-color': s,
            '--n-icon-color': d || '',
          };
        }),
        l = t
          ? n.useThemeClass(
              'result',
              n.computed(() => {
                const { size: n, status: o } = e;
                let t = '';
                return n && (t += n[0]), o && (t += o[0]), t;
              }),
              a,
              e
            )
          : void 0;
      return {
        mergedClsPrefix: o,
        cssVars: t ? void 0 : a,
        themeClass: null == l ? void 0 : l.themeClass,
        onRender: null == l ? void 0 : l.onRender,
      };
    },
    render() {
      var e;
      const { status: o, $slots: t, mergedClsPrefix: r, onRender: a } = this;
      return (
        null == a || a(),
        n.h(
          'div',
          {
            class: [`${r}-result`, this.themeClass],
            style: this.cssVars,
          },
          n.h(
            'div',
            { class: `${r}-result-icon` },
            (null === (e = t.icon) || void 0 === e ? void 0 : e.call(t)) ||
              n.h(n.NBaseIcon, { clsPrefix: r }, { default: () => j[o] })
          ),
          n.h(
            'div',
            { class: `${r}-result-header` },
            this.title
              ? n.h('div', { class: `${r}-result-header__title` }, this.title)
              : null,
            this.description
              ? n.h(
                  'div',
                  { class: `${r}-result-header__description` },
                  this.description
                )
              : null
          ),
          t.default && n.h('div', { class: `${r}-result-content` }, t),
          t.footer && n.h('div', { class: `${r}-result-footer` }, t.footer())
        )
      );
    },
  });
function q() {
  const e = n.useAppStore(),
    o = n.useKeyStore(),
    t = n.useRouter();
  return {
    updateCurrentApp: (r, a) => {
      var l;
      e.setCurrentMenuType(r);
      const i = null == (l = e.getEndAppList(r)) ? void 0 : l.appList;
      if (a) {
        e.updateCurrentApp(a);
      } else {
        if (i) {
          const n = null == i ? void 0 : i[0];
          n && e.updateCurrentApp(n);
        }
      }
      n.isEmpty(i) && (o.clearApp(true), t.push({ name: 'home' }));
    },
  };
}
const H = n.useAppStore(),
  { updateCurrentApp: J } = q();
function W(e) {
  const n = H.currentApp.name.replace(/\s/g, '-');
  return ~(null == e ? void 0 : e.search(new RegExp(`^${n}-`)))
    ? document.querySelectorAll(`webview[id^="${n}-"][preload$="preload.js"]`)
    : [];
}
function G(e) {
  const o = n.ref(),
    t = (e) => document.querySelector(`#${e}`),
    r = () => {
      var e;
      return null == (e = o.value) ? void 0 : e.isDevToolsOpened();
    };
  return (
    (o.value = t(e)),
    {
      openDevTools: () => {
        var e;
        r() || null == (e = o.value) || e.openDevTools();
      },
      isDevToolsOpened: r,
      executeJavaScript: (e) => {
        var n;
        null == (n = o.value) || n.executeJavaScript(e);
      },
      reload: () => {
        var e;
        return null == (e = o.value) ? void 0 : e.reload();
      },
      reloadAll: () => {
        const n = W(e);
        for (const e of n) {
          e.reload();
        }
      },
      closeAll: () => {
        const n = W(e);
        for (const e of n) {
          const n = e;
          H.removeApp(n.id);
        }
        J(H.currentMenuType);
      },
      getURL: () => {
        var e;
        return null == (e = o.value) ? void 0 : e.getURL();
      },
      setURL: (e) => {
        o.value.src = e;
      },
      getTitle: () => {
        var e;
        return null == (e = o.value) ? void 0 : e.getTitle();
      },
      insertCSS: (e) => {
        var n;
        null == (n = o.value) || n.insertCSS(e);
      },
      reloadIgnoringCache: () => {
        var e;
        return null == (e = o.value) ? void 0 : e.reloadIgnoringCache();
      },
      getWebview: t,
    }
  );
}
const Z = { class: 'text-black' },
  X = { class: 'text-black' },
  Y = n.defineComponent({
    __name: 'TranslateSetting',
    emits: ['update:show', 'update:formModel', 'submit'],
    setup(t, { emit: a }) {
      const { t: l } = n.useLocale(),
        i = n.ref(null),
        s = n.computed$1(() => ({
          showName: [
            {
              required: true,
              message: l('Please enter the application name'),
            },
          ],
          translateServe: [
            {
              required: true,
              message: l('Please select a translation server'),
            },
          ],
          sendFrom: [
            {
              required: true,
              message: l('Please select the sending language'),
            },
          ],
          sendTo: [
            {
              required: true,
              message: l('Please select the language to send the translation'),
            },
          ],
          msgFrom: [
            {
              required: true,
              message: l('Please choose to accept the language'),
            },
          ],
          msgTo: [
            {
              required: true,
              message: l('Please choose to receive translation language'),
            },
          ],
          fontSize: [
            {
              required: true,
              message: l('Please set the font size'),
            },
          ],
          fontColor: [
            {
              required: true,
              message: l('Please set the font color'),
            },
          ],
        })),
        {
          fetchLanguage: c,
          languageList: d,
          fetchTranslateServe: u,
          translateServeList: p,
          isFetchLoading: v,
        } = n.useTranslate(),
        { renderLabel: f, fetchDelayTime: m } = o.useDelayTime(false),
        { getDefaultFormModel: g } = n.useDefault(),
        b = n.useAppStore(),
        w = n.useUserStore(),
        x = n.ref({
          ...b.getChatApp,
          translateType: w.vipType,
          ...b.getSameChatShareConfig,
        }),
        y = async () => {
          c(w.vipType);
          (() => {
            const e = b.getChatApp;
            (null == e ? void 0 : e.translateType) === w.vipType
              ? (x.value = {
                  ...e,
                  ...b.getSameChatShareConfig,
                })
              : (x.value = {
                  ...g(),
                  ...b.getSameChatShareConfig,
                });
          })();
        };
      n.onMounted(() => {
        y();
      });
      const k = (e, n) => {
          if (0 === d.value.length) {
            return { value: e };
          }
          const o = g()[n];
          return (x.value[n] = o), { value: o };
        },
        C = n.computed$1(() => d.value.filter(({ value: e }) => !!e)),
        S = (function () {
          const e = n.inject(n.dialogApiInjectionKey, null);
          return (
            null === e &&
              n.throwError(
                'use-dialog',
                'No outer <n-dialog-provider /> founded.'
              ),
            e
          );
        })();
      n.watch(
        () => x.value.msgTo,
        (e, n) => {
          e &&
            ['zh-CN', 'ZH', 'zh-CHS'].includes(n) &&
            !['zh-CN', 'ZH', 'zh-CHS'].includes(e) &&
            S.warning({
              title: '警告',
              content: '确定修改接收语言\uFF1F',
              positiveText: '修改',
              negativeText: '不修改',
              onPositiveClick: () => {},
              onNegativeClick: () => {
                x.value.msgTo = n;
              },
            });
        }
      );
      n.watch(
        () => b.currentMenuType,
        (e) => {
          [
            n.MenuType.HOME,
            n.MenuType.SETTING,
            n.MenuType.USER_CENTER,
          ].includes(e) || y();
        }
      );
      n.watch(
        () => b.currentAppId,
        (e) => {
          if (b.supportSplitChat) {
            const { executeJavaScript: e } = G(b.currentAppId);
            e(
              '!function(){let fn = (window.updateChatChange || window.lookworld && window.lookworld.updateChatChange); fn && fn()}();'
            );
          }
          x.value = {
            ...b.getChatApp,
            ...b.getSameChatShareConfig,
          };
        }
      );
      n.watch(
        () => b.chatUser,
        () => {
          x.value = {
            ...b.getChatApp,
            ...b.getSameChatShareConfig,
          };
        }
      );
      const _ = n.shallowRef();
      return (
        n.watch(
          () => x.value,
          (e) => {
            _.value && (clearTimeout(_.value), (_.value = null));
            _.value = setTimeout(() => {
              const { fontSize: n, fontColor: o, translateServe: t } = x.value;
              b.setSameChatShareConfig(b.currentApp.name, {
                fontSize: n,
                fontColor: o,
                translateServe: t,
              });
              a('submit', e);
            }, 100);
          },
          { deep: true }
        ),
        (t, a) => (
          n.openBlock(),
          n.createBlock(
            n.unref(o.NForm),
            {
              class: 'translate-form',
              ref_key: 'formRef',
              ref: i,
              'show-require-mark': false,
              rules: n.unref(s),
              model: x.value,
              'label-placement': 'left',
              size: 'small',
              'show-feedback': false,
            },
            {
              default: n.withCtx(() => [
                n.createBaseVNode('table', null, [
                  n.createBaseVNode('tr', null, [
                    n.createBaseVNode('td', null, [
                      n.createVNode(
                        n.unref(o.NFormItem),
                        { path: 'openSend' },
                        {
                          default: n.withCtx(() => [
                            n.createVNode(
                              n.unref(h),
                              {
                                checked: x.value.openSend,
                                'onUpdate:checked':
                                  a[0] ||
                                  (a[0] = (e) => (x.value.openSend = e)),
                              },
                              {
                                default: n.withCtx(() => [
                                  n.createBaseVNode(
                                    'span',
                                    Z,
                                    n.toDisplayString(
                                      n.unref(l)('Send translation')
                                    ),
                                    1
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ['checked']
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    n.createBaseVNode('td', null, [
                      n.createVNode(
                        n.unref(o.NFormItem),
                        {
                          label: n.unref(l)('Send language'),
                          path: 'sendFrom',
                        },
                        {
                          default: n.withCtx(() => [
                            n.createVNode(
                              n.unref(o.NSelect),
                              {
                                style: { width: '100px' },
                                'consistent-menu-width': false,
                                value: x.value.sendFrom,
                                'onUpdate:value':
                                  a[1] ||
                                  (a[1] = (e) => (x.value.sendFrom = e)),
                                options: n.unref(d),
                                placeholder: n.unref(l)('Send language'),
                                filterable: '',
                                to: false,
                                'fallback-option': (e) => k(e, 'sendFrom'),
                              },
                              null,
                              8,
                              [
                                'value',
                                'options',
                                'placeholder',
                                'fallback-option',
                              ]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['label']
                      ),
                    ]),
                    n.createBaseVNode('td', null, [
                      n.createVNode(
                        n.unref(o.NFormItem),
                        {
                          label: n.unref(l)('Send translation language'),
                          path: 'sendTo',
                        },
                        {
                          default: n.withCtx(() => [
                            n.createVNode(
                              n.unref(o.NSelect),
                              {
                                style: { width: '100px' },
                                'consistent-menu-width': false,
                                value: x.value.sendTo,
                                'onUpdate:value':
                                  a[2] || (a[2] = (e) => (x.value.sendTo = e)),
                                options: n.unref(C),
                                placeholder: n.unref(l)(
                                  'Send translation language'
                                ),
                                filterable: '',
                                to: false,
                                'fallback-option': (e) => k(e, 'sendTo'),
                              },
                              null,
                              8,
                              [
                                'value',
                                'options',
                                'placeholder',
                                'fallback-option',
                              ]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['label']
                      ),
                    ]),
                    n.createBaseVNode('td', null, [
                      n.createVNode(
                        n.unref(o.NFormItem),
                        {
                          label: n.unref(l)('Group translation'),
                          path: 'isGroup',
                        },
                        {
                          default: n.withCtx(() => [
                            n.createVNode(
                              n.unref(r.NSwitch),
                              {
                                value: x.value.isGroup,
                                'onUpdate:value':
                                  a[3] || (a[3] = (e) => (x.value.isGroup = e)),
                              },
                              null,
                              8,
                              ['value']
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['label']
                      ),
                    ]),
                    n.createBaseVNode('td', null, [
                      n.createVNode(
                        n.unref(o.NFormItem),
                        {
                          label: n.unref(l)('Font size'),
                          path: 'fontSize',
                        },
                        {
                          default: n.withCtx(() => [
                            n.createVNode(
                              n.unref(o.NSelect),
                              {
                                style: { width: '100px' },
                                'consistent-menu-width': false,
                                value: x.value.fontSize,
                                'onUpdate:value':
                                  a[4] ||
                                  (a[4] = (e) => (x.value.fontSize = e)),
                                options: n.unref(e.FONT_SIZE_LIST),
                                placeholder: n.unref(l)('Font size'),
                                to: false,
                              },
                              null,
                              8,
                              ['value', 'options', 'placeholder']
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['label']
                      ),
                    ]),
                  ]),
                  n.createBaseVNode('tr', null, [
                    n.createBaseVNode('td', null, [
                      n.createVNode(
                        n.unref(o.NFormItem),
                        { path: 'openMsg' },
                        {
                          default: n.withCtx(() => [
                            n.createVNode(
                              n.unref(h),
                              {
                                checked: x.value.openMsg,
                                'onUpdate:checked':
                                  a[5] || (a[5] = (e) => (x.value.openMsg = e)),
                              },
                              {
                                default: n.withCtx(() => [
                                  n.createBaseVNode(
                                    'span',
                                    X,
                                    n.toDisplayString(
                                      n.unref(l)('Receive translation')
                                    ),
                                    1
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ['checked']
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    n.createBaseVNode('td', null, [
                      n.createVNode(
                        n.unref(o.NFormItem),
                        {
                          label: n.unref(l)('Receive language'),
                          path: 'msgFrom',
                        },
                        {
                          default: n.withCtx(() => [
                            n.createVNode(
                              n.unref(o.NSelect),
                              {
                                style: { width: '100px' },
                                'consistent-menu-width': false,
                                value: x.value.msgFrom,
                                'onUpdate:value':
                                  a[6] || (a[6] = (e) => (x.value.msgFrom = e)),
                                options: n.unref(d),
                                placeholder: n.unref(l)('Accept language'),
                                filterable: '',
                                to: false,
                                'fallback-option': (e) => k(e, 'msgFrom'),
                              },
                              null,
                              8,
                              [
                                'value',
                                'options',
                                'placeholder',
                                'fallback-option',
                              ]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['label']
                      ),
                    ]),
                    n.createBaseVNode('td', null, [
                      n.createVNode(
                        n.unref(o.NFormItem),
                        {
                          label: n.unref(l)('Receive translation language'),
                          path: 'msgTo',
                        },
                        {
                          default: n.withCtx(() => [
                            n.createVNode(
                              n.unref(o.NSelect),
                              {
                                style: { width: '100px' },
                                'consistent-menu-width': false,
                                value: x.value.msgTo,
                                'onUpdate:value':
                                  a[7] || (a[7] = (e) => (x.value.msgTo = e)),
                                options: n.unref(C),
                                placeholder: n.unref(l)(
                                  'Receive translation language'
                                ),
                                filterable: '',
                                to: false,
                                'fallback-option': (e) => k(e, 'msgTo'),
                              },
                              null,
                              8,
                              [
                                'value',
                                'options',
                                'placeholder',
                                'fallback-option',
                              ]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['label']
                      ),
                    ]),
                    n.createBaseVNode('td', null, [
                      n.createVNode(
                        n.unref(o.NFormItem),
                        {
                          label: n.unref(l)('Translation server'),
                          path: 'translateServe',
                        },
                        {
                          default: n.withCtx(() => [
                            n.createVNode(
                              n.unref(o.NSelect),
                              {
                                style: { width: '100px' },
                                'consistent-menu-width': false,
                                value: x.value.translateServe,
                                'onUpdate:value':
                                  a[8] ||
                                  (a[8] = (e) => (x.value.translateServe = e)),
                                'label-field': 'name',
                                'value-field': 'serveUrl',
                                options: n.unref(p),
                                placeholder: n.unref(l)('Translation server'),
                                to: false,
                                'render-label': n.unref(f),
                              },
                              null,
                              8,
                              [
                                'value',
                                'options',
                                'placeholder',
                                'render-label',
                              ]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['label']
                      ),
                    ]),
                    n.createBaseVNode('td', null, [
                      n.createVNode(
                        n.unref(o.NFormItem),
                        {
                          label: n.unref(l)('Font color'),
                          path: 'fontColor',
                          'show-feedback': false,
                        },
                        {
                          default: n.withCtx(() => [
                            n.createVNode(
                              n.unref(e.NColorPicker),
                              {
                                value: x.value.fontColor,
                                'onUpdate:value':
                                  a[9] ||
                                  (a[9] = (e) => (x.value.fontColor = e)),
                                swatches: [
                                  '#FFFFFF',
                                  '#18A058',
                                  '#2080F0',
                                  '#F0A020',
                                  'rgba(208, 48, 80, 1)',
                                ],
                              },
                              null,
                              8,
                              ['value', 'swatches']
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['label']
                      ),
                    ]),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ['rules', 'model']
          )
        )
      );
    },
  }),
  Q = n._export_sfc(Y, [['__scopeId', 'data-v-6231e733']]),
  ee = n.defineComponent({
    __name: 'index',
    props: {
      id: String,
      loading: Boolean,
      ready: Boolean,
      preload: String,
    },
    emits: [
      'update:loading',
      'update:ready',
      'dom-ready',
      'did-stop-loading',
      'did-start-loading',
      'did-attach',
      'did-start-navigation',
      'did-navigate-in-page',
      'did-fail-load',
      'ipc-message',
    ],
    setup(e, { emit: o }) {
      const t = e,
        r = n.ref(null),
        f = n.ref(false);
      let m = false;
      const g = (e) => {
          m || ((m = true), o('update:loading', true));
          o('did-start-loading', e);
        },
        b = (e) => {
          f.value = true;
          o('update:ready', true);
          o('dom-ready', e);
        },
        w = (e) => {
          o('update:loading', false);
          o('update:ready', f.value);
          o('did-stop-loading', e);
        },
        x = (e) => {
          r.value = e.target;
          o('did-attach', e);
        },
        y = (e) => {},
        k = (e) => {
          o('did-start-navigation', e);
        },
        C = (e) => {
          o('did-navigate-in-page', e);
        },
        S = (e) => {
          o('did-fail-load', e);
        },
        _ = (e, n) => {
          o('ipc-message', e);
        };
      return (
        n.onMounted(() => {}),
        (o, r) => {
          const a = n.resolveComponent('webview');
          return (
            n.openBlock(),
            n.createBlock(
              a,
              n.mergeProps(o.$attrs, {
                class: 'electron-webview',
                id: t.id,
                onDomReady: b,
                onDidStartLoading: g,
                onDidStopLoading: w,
                onDidAttach: x,
                onWillNavigate: y,
                onDidStartNavigation: k,
                onDidNavigateInPage: C,
                onDidFailLoad: S,
                onIpcMessage: _,
                preload: e.preload,
              }),
              null,
              16,
              ['id', 'preload']
            )
          );
        }
      );
    },
  }),
  ne = n._export_sfc(ee, [['__scopeId', 'data-v-8a622ec7']]);
const oe = {
    key: 0,
    class: 'loading-page',
  },
  te = { class: 'loading-box' },
  re = n.defineComponent({
    inheritAttrs: false,
    __name: 'WebviewPage',
    props: ['app'],
    setup(e) {
      const t = e,
        r = ['google-voice', 'textnow', 'phound', 'bumble'],
        a = n.useMessage(),
        l = n.useAppStore(),
        i = n.ref(false),
        s = n.ref(true),
        c = n.ref(false),
        { electron: d } = n.useElectron(),
        { play: u } = (function () {
          const e = new Audio('message.wav');
          return {
            play: () => {
              e.play();
            },
          };
        })(),
        p = n.ref(false),
        v = n.useNoticeStore(),
        h = n.useUserStore(),
        f = n.ref({
          errorCode: 0,
          errorDescription: '',
        }),
        m = n.computed$1(() => (!s.value && !i.value) || p.value),
        g = n.computed$1(
          () => m.value && !['line', 'tinder'].includes(t.app.type)
        ),
        { t: b } = n.useLocale(),
        w = n.computed$1(() => [
          {
            errorCode: -118,
            errorMessage: b('Network connection timed out'),
          },
          {
            errorCode: -102,
            errorMessage: b('Connection refused'),
          },
        ]),
        x = n.computed$1(() => {
          const e = w.value.find((e) => e.errorCode === f.value.errorCode);
          return (
            (null == e ? void 0 : e.errorMessage) || f.value.errorDescription
          );
        }),
        y = n.computed$1(() => `persist:webview-page-${t.app.appId}`),
        k = n.computed$1(() =>
          d.path.join(d.rootDir(), 'dist-electron/features/webview/preload.js')
        ),
        C = n.ref(),
        S = (e) => {
          var n;
          ((null == (n = l.getChatApp.appId)
            ? void 0
            : n.includes(t.app.appId)) ||
            e) &&
            (clearTimeout(C.value),
            (C.value = setTimeout(() => {
              var n;
              const o = l.getChatApp;
              if (
                (null == (n = o.appId) ? void 0 : n.includes(t.app.appId)) ||
                void 0 === o.appId ||
                e
              ) {
                const { executeJavaScript: e } = G(t.app.appId),
                  n = r.includes(t.app.type),
                  a = {
                    ...l.getApp(t.app.appId),
                    ...o,
                    ...l.getSameChatShareConfig,
                    appId: t.app.appId,
                  };
                e(
                  `${
                    n
                      ? 'window.lookworld&&lookworld.'
                      : 'window.updateTranslate&&'
                  }updateTranslate(${JSON.stringify(a)})`
                );
              }
            }, 100)));
        };
      if (
        (n.watch(
          () => [l.chatUser, l.getChatApp],
          () => {
            S();
          },
          {}
        ),
        n.watch(
          () => l.sameChatShareConfig[t.app.name],
          (e, n) => {
            S(true);
          }
        ),
        'telegram-new' === t.app.type)
      ) {
        let e,
          o = 0;
        n.watch(
          () => l.currentAppId,
          (n) => {
            const r = Date.now();
            clearTimeout(e);
            n !== t.app.appId &&
              r - o > 1800000 &&
              (e = setTimeout(() => {
                var e;
                if (null == (e = t.app) ? void 0 : e.appId) {
                  const e = document.querySelector(`#${t.app.appId}`);
                  o = r;
                  e.reload();
                }
              }, 250));
          }
        );
        n.onUnmounted(() => {
          clearTimeout(e);
        });
      }
      const _ = async () => {
          const { getURL: e, reload: n } = G(t.app.appId),
            o = e();
          -1 === o.indexOf('login.live.com') &&
            -1 === o.indexOf('login.skype.com') &&
            -1 === o.indexOf('lw.skype.com') &&
            ((async () => {
              const { insertCSS: e } = G(t.app.appId);
              e(
                '\n.webview-reset-btn {\n  font-size: 13px;\n  color: gray;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  user-select: none;\n  padding:1px 5px;\n}\n\n.webview-disabled {\n  point-events:none;\n  cursor: default;\n}\n\n.webview-reset-btn:focus {\n  outline: none;\n}\n.webview-reset-btn:hover {\n  color: #129d12;\n  border-color: #129d12;\n  background-color: #eeeeee45;\n}\n\n.webview-reset-btn.error {\n  color:#db1e1e;\n}\n.webview-reset-btn.error:hover {\n  border-color: #db1e1e;\n}\n.webview-display-el {\n  color: var(--chatColor);\n  font-size: var(--chatSize);\n  background-color: rgba(255, 255, 255, 0.9);\n  font-style: initial;\n  padding: 6px 8px;\n  word-break: break-all;\n  border-radius: 8px;\n  user-select: none;\n}\n\n.webview-display-el:hover {\n  opacity: 0.8;\n  cursor: pointer;\n\n}\n\n.mt-8 {\n  margin-top:8px;\n}\n\n.webview-translate-el {\n  display: inline-block;\n  color: var(--chatColor);\n  font-size: var(--chatSize);\n  letter-spacing: 1px;\n  margin-top: 6px;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 6px 8px;\n  word-break: break-all;\n  user-select: none;\n}\n.text-error {\n  color:#db1e1e;\n}\n\n\n.lw-translate-text {\n  color: var(--chatColor);\n  font-size: var(--chatSize);\n  letter-spacing: 1px;\n  margin-top: 6px;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 6px 8px;\n  word-break: break-all;\n  user-select: none;\n}\n.lw-translate-btn {\n  background: var(--chatColor);\n  color: rgba(255, 255, 255, 0.9);\n  padding: 8px 20px;\n  border-radius: 3px;\n  cursor: pointer;\n  text-align: center;\n}\n'
              );
            })(),
            (async () => {
              const { executeJavaScript: e } = G(t.app.appId);
              try {
                const n = r.includes(t.app.type);
                e(await d.readJsFile('common' + (n ? '-new' : '')));
                e(await d.readJsFile(t.app.type));
                c.value = true;
                const o = {
                  ...t.app,
                  ...l.getSameChatShareConfig,
                  appId: t.app.appId,
                };
                e(
                  `${
                    n
                      ? 'window.lookworld&&lookworld.'
                      : 'window.initTranslateData&&'
                  }initTranslateData(${JSON.stringify(o)})`
                );
                e(await d.readJsFile('common-copy'));
              } catch (n) {
                c.value = false;
              }
            })());
        },
        N = () => {
          p.value = false;
        },
        I = (e) => {
          if (c.value) {
            const { executeJavaScript: n } = G(t.app.appId);
            n(`window.urlChange&&urlChange(${JSON.stringify(e.url)})`);
          }
        },
        T = (e) => {},
        B = n.computed$1(() => {
          var e;
          const n = null == (e = t.app) ? void 0 : e.url;
          return n ? `${n}${~n.search(/\?/) ? '&' : '?'}${R.value}` : '';
        }),
        R = n.ref(Date.now()),
        A = (e) => {
          var n;
          e.validatedURL.includes(null == (n = t.app) ? void 0 : n.url) &&
            (e.validatedURL.includes('chat.zalo.me') || (R.value = Date.now()));
        },
        z = (e) => {
          if (c.value && -1 !== e.url.indexOf('telegram.org')) {
            const { executeJavaScript: n } = G(t.app.appId);
            n(`window.hashchange&&hashchange(${JSON.stringify(e.url)})`);
          }
        },
        M = (e) => {
          const { args: n } = e,
            o = e.target.id;
          if (!m.value) {
            if ('updateUnreadCount' === e.channel) {
              const [e] = n;
              v.getNotice(o) < e && e > 0 && !h.openDisturb && u();
              v.setNotice(t.app.type, o, e);
            } else {
              if ('chatChange' === e.channel) {
                const [e] = n;
                l.updateChatUser(e.curUser);
              } else {
                'showMessage' === e.channel && a.success(b('Copy success'));
              }
            }
          }
        };
      return (
        n.onMounted(() => {
          'line' == t.app.type || 'tinder' == t.app.type
            ? (d.loadExtension({
                type: t.app.type,
                partition: y.value,
              }),
              d.onPluginInstalled((e, n) => {
                const { reload: o } = G(t.app.appId);
                o();
              }))
            : 'zalo' === t.app.type && d.overwriteRequestHeader(y.value);
        }),
        (e, r) => {
          const a = n.resolveComponent('base-layout');
          return (
            n.openBlock(),
            n.createBlock(
              a,
              { class: n.normalizeClass(e.$attrs.class) },
              {
                default: n.withCtx(() => {
                  var a, l, c, d;
                  return [
                    i.value
                      ? (n.openBlock(),
                        n.createElementBlock('div', oe, [
                          n.createBaseVNode('div', te, [
                            n.createVNode(n.unref(o.NSpin), { size: 'large' }),
                            n.createBaseVNode(
                              'span',
                              null,
                              n.toDisplayString(
                                n.unref(b)('Loading { text }, please wait...', {
                                  text: null == (a = t.app) ? void 0 : a.name,
                                })
                              ),
                              1
                            ),
                          ]),
                        ]))
                      : n.createCommentVNode('', true),
                    n.createVNode(
                      ne,
                      n.mergeProps(
                        {
                          style: { 'background-color': '#fff' },
                          allowpopups: '',
                          webpreferences:
                            'nativeWindowOpen=yes, spellcheck=no, contextIsolation=no, sandbox = false',
                          class: {
                            'v-hidden': !s.value,
                            hidden: n.unref(m),
                          },
                          partition: n.unref(y),
                          ready: s.value,
                          'onUpdate:ready':
                            r[0] || (r[0] = (e) => (s.value = e)),
                          loading: i.value,
                          'onUpdate:loading':
                            r[1] || (r[1] = (e) => (i.value = e)),
                          id: null == (l = t.app) ? void 0 : l.appId,
                          src: n.unref(B),
                          useragent: null == (c = t.app) ? void 0 : c.userAgent,
                        },
                        n.unref(n.omit)(e.$attrs, 'class'),
                        {
                          onDomReady: _,
                          onDidAttach: T,
                          onDidStartNavigation: I,
                          onDidNavigateInPage: z,
                          onDidFailLoad: A,
                          onIpcMessage: M,
                          onDidStartLoading: N,
                          preload: n.unref(k),
                        }
                      ),
                      null,
                      16,
                      [
                        'class',
                        'partition',
                        'ready',
                        'loading',
                        'id',
                        'src',
                        'useragent',
                        'preload',
                      ]
                    ),
                    n.unref(g)
                      ? (n.openBlock(),
                        n.createBlock(
                          n.unref(K),
                          {
                            key: 1,
                            class: 'load-error',
                            status: '500',
                            title: n.unref(x),
                            description: n.unref(b)('Failed to load { text }', {
                              text: null == (d = t.app) ? void 0 : d.name,
                            }),
                          },
                          null,
                          8,
                          ['title', 'description']
                        ))
                      : n.createCommentVNode('', true),
                  ];
                }),
                _: 1,
              },
              8,
              ['class']
            )
          );
        }
      );
    },
  }),
  ae = n._export_sfc(re, [['__scopeId', 'data-v-87e93db1']]),
  le = { class: 'webview-header' },
  ie = { class: 'webview-nav' },
  se = ['onContextmenu'],
  ce = ['onClick'],
  de = ['src'],
  ue = { class: 'right' },
  pe = { class: 'right-nav' },
  ve = { class: 'webview-container' },
  he = { class: 'webview-list' },
  fe = n.defineComponent({
    __name: 'index',
    setup(o) {
      const { electron: t } = n.useElectron(),
        r = n.ref({}),
        l = n.ref({}),
        i = n.ref('TranslateSetting'),
        s = n.ref(false),
        { t: c } = n.useLocale(),
        d = n.useMessage(),
        u = n.useAppStore(),
        p = n.useNoticeStore(),
        v = [
          {
            label: c('Modify Application'),
            key: n.ContextmenuAction.EDIT_APP,
            self: true,
          },
          {
            label: c('Delete app'),
            key: n.ContextmenuAction.DELETE_APP,
          },
          {
            label: c('Refresh application'),
            key: n.ContextmenuAction.RELOAD,
            self: true,
          },
          {
            label: c('Refresh app (forced)'),
            key: n.ContextmenuAction.FORCE_RELOAD,
            self: true,
          },
        ],
        h = n.reactive({
          x: 0,
          y: 0,
          appId: '',
        }),
        f = n.ref({}),
        m = n.ref([]),
        b = n.ref(false),
        w = n.ref(false),
        x = n.ref({}),
        y = n.useRouter(),
        k = n.computed(() => {
          var e;
          return null ==
            (e = u.endAppList.find((e) => e.type === u.currentMenuType))
            ? void 0
            : e.appList;
        });
      n.watch(
        () => p.totalNoticeNum,
        (e) => {
          t.setAppBadge(e);
        }
      );
      const { updateCurrentApp: C } = q(),
        S = (e) => {
          if (
            (t.sendLog({
              type: 'rederSetTranslateConfig',
              message: JSON.parse(JSON.stringify(e)),
            }),
            u.supportSplitChat)
          ) {
            u.updateChatAppList(e);
          } else {
            const n = { ...e };
            delete n.appIdBySplitChat;
            u.editApp(n.appId, n);
            u.updateCurrentApp(n);
          }
          b.value = false;
        },
        _ = n.ref(''),
        N = n.ref(1),
        I = n.ref(false),
        T = n.ref(''),
        B = () => {
          if (((I.value = false), 1 === N.value)) {
            R(T.value);
          } else {
            const { closeAll: e } = G(u.currentAppId);
            e();
          }
        },
        R = (e) => {
          u.removeApp(e);
          C(u.currentMenuType);
        },
        A = () => {
          var e;
          const o = n.appList.find((e) => u.currentApp.type === e.type),
            t = u.getEndAppList(o.type);
          if (
            (null == (e = null == t ? void 0 : t.appList)
              ? void 0
              : e.length) >= n.APP_LIMIT_NUM
          ) {
            return (
              (w.value = false),
              d.error(
                c('The upper limit for a single application is {limit}', {
                  limit: n.APP_LIMIT_NUM,
                })
              )
            );
          }
          l.value = o;
          w.value = true;
          const { name: a } = l.value;
          r.value.showName = a;
          r.value.name = a;
        },
        z = (e) => {
          const n = Object.assign({}, e, l.value);
          u.addApp(n, true);
          u.setCurrentMenuType(n.type);
          y.push({ name: 'appview' });
          w.value = false;
        },
        M = () => {
          s.value = false;
          h.appId = '';
        },
        P = () => {
          M();
        },
        F = () => {
          const e = f.value === u.currentAppId,
            o = v.filter((n) => !n.self || e);
          o.push({
            label: c('Refresh all') + u.currentApp.name,
            key: n.ContextmenuAction.RELOAD_ALL,
          });
          o.push({
            label: c('Close all') + u.currentApp.name,
            key: n.ContextmenuAction.CLOSE_ALL,
          });
          u.devtools &&
            o.push({
              label: c('Developer Tools'),
              key: n.ContextmenuAction.DEVTOOL,
            });
          const t = function (e) {
            const { getWebview: n } = G(),
              o = n(h.appId);
            1 === e ? o.goBack() : o.goForward();
            P();
          };
          o.unshift({
            key: n.ContextmenuAction.PAGE_ACTION,
            type: 'render',
            render: () =>
              n.h(
                'div',
                { className: 'n-dropdown-option' },
                n.h('div', { className: 'n-dropdown-option-body' }, [
                  n.h('div', { className: 'n-dropdown-option-body__prefix' }),
                  n.h(
                    'div',
                    {
                      className:
                        'n-dropdown-option-body__label page-action__menu-box',
                    },
                    [
                      n.h('span', { onClick: () => t(1) }, [
                        n.h(n.SvgIcon, { name: 'chevrons-left' }),
                        '上一页',
                      ]),
                      n.h('span', { onClick: () => t(2) }, [
                        '下一页',
                        n.h(n.SvgIcon, { name: 'chevrons-right' }),
                      ]),
                    ]
                  ),
                  n.h('div', { className: 'n-dropdown-option-body__suffix' }),
                ])
              ),
          });
          m.value = o;
        },
        V = (e) => {
          const o = h.appId,
            {
              openDevTools: t,
              reload: r,
              reloadIgnoringCache: a,
              reloadAll: l,
            } = G(o);
          e === n.ContextmenuAction.EDIT_APP
            ? ((b.value = true),
              (x.value = {
                ...u.getApp(o),
                ...u.getSameChatShareConfig,
              }))
            : e === n.ContextmenuAction.DELETE_APP
            ? R(o)
            : e === n.ContextmenuAction.DEVTOOL
            ? t()
            : e === n.ContextmenuAction.RELOAD
            ? r()
            : e === n.ContextmenuAction.FORCE_RELOAD
            ? a()
            : e === n.ContextmenuAction.RELOAD_ALL
            ? l()
            : e === n.ContextmenuAction.CLOSE_ALL &&
              ((I.value = true),
              (N.value = 2),
              (_.value = `确认关闭所有${u.currentApp.name}聊天窗口？`));
          M();
        },
        D = n.ref(),
        L = (e = false) => {
          const n = D.value.scrollLeft,
            o = D.value.scrollWidth,
            t = D.value.clientWidth,
            r = Math.max(o / k.value.length, 200),
            a = o - t;
          e
            ? D.value.scrollTo({
                left: Math.max(n - r, 0),
                behavior: 'smooth',
              })
            : D.value.scrollTo({
                left: Math.min(n + r, a),
                behavior: 'smooth',
              });
        },
        E = n.ref(false),
        O = n.ref(false),
        j = n.ref(false),
        U = () => {
          var e, n, o;
          const t = null == (e = D.value) ? void 0 : e.scrollLeft,
            r = null == (n = D.value) ? void 0 : n.scrollWidth,
            a = null == (o = D.value) ? void 0 : o.clientWidth;
          E.value = t > 0;
          O.value = r > a && r - Math.abs(t) !== a;
          j.value = r > a;
        };
      return (
        n.watch(
          () => k.value,
          () => {
            n.nextTick(() => U());
          }
        ),
        n.onMounted(() => {
          U();
        }),
        (o, t) => {
          const d = n.resolveComponent('base-layout');
          return (
            n.openBlock(),
            n.createBlock(
              d,
              {
                class: 'webview-layout',
                isFloat: '',
              },
              {
                default: n.withCtx(() => {
                  var o;
                  return [
                    n.createBaseVNode('div', le, [
                      j.value
                        ? (n.openBlock(),
                          n.createElementBlock(
                            'div',
                            {
                              key: 0,
                              class: n.normalizeClass([
                                'svg-box',
                                { disabled: !E.value },
                              ]),
                            },
                            [
                              n.createVNode(n.SvgIcon, {
                                name: 'chevrons-left',
                                onClick: t[0] || (t[0] = (e) => L(true)),
                              }),
                            ],
                            2
                          ))
                        : n.createCommentVNode('', true),
                      n.createBaseVNode('div', ie, [
                        n.createBaseVNode(
                          'ul',
                          {
                            class: 'webview-nav-list',
                            ref_key: 'navRef',
                            ref: D,
                            onScroll: U,
                          },
                          [
                            (n.openBlock(true),
                            n.createElementBlock(
                              n.Fragment,
                              null,
                              n.renderList(n.unref(k), (o) => {
                                return (
                                  n.openBlock(),
                                  n.createElementBlock(
                                    'li',
                                    {
                                      class: n.normalizeClass([
                                        'webview-nav-item',
                                        {
                                          active:
                                            n.unref(u).currentAppId === o.appId,
                                        },
                                      ]),
                                      onContextmenu: (e) => {
                                        return (
                                          (t = e),
                                          (r = o),
                                          (f.value = r.appId),
                                          F(),
                                          t.preventDefault(),
                                          (s.value = false),
                                          void n.nextTick(() => {
                                            h.x = t.x;
                                            h.y = t.y;
                                            h.appId = r.appId;
                                            s.value = true;
                                          })
                                        );
                                        var t, r;
                                      },
                                    },
                                    [
                                      n.createBaseVNode(
                                        'div',
                                        {
                                          class: 'webview-nav-content',
                                          onClick: (e) => {
                                            return (
                                              (n = o),
                                              u.resetChatUser(),
                                              void C(u.currentMenuType, n)
                                            );
                                            var n;
                                          },
                                        },
                                        [
                                          n.createBaseVNode(
                                            'img',
                                            {
                                              src:
                                                ((r = o.logo),
                                                new URL(
                                                  Object.assign({
                                                    '../../assets/icons/bumble.png':
                                                      e.__vite_glob_0_0,
                                                    '../../assets/icons/custom.png':
                                                      e.__vite_glob_0_1,
                                                    '../../assets/icons/customer_service.png':
                                                      e.__vite_glob_0_2,
                                                    '../../assets/icons/discord.png':
                                                      e.__vite_glob_0_3,
                                                    '../../assets/icons/facebook.png':
                                                      e.__vite_glob_0_4,
                                                    '../../assets/icons/gmail.png':
                                                      e.__vite_glob_0_5,
                                                    '../../assets/icons/google-voice.png':
                                                      e.__vite_glob_0_6,
                                                    '../../assets/icons/instagram.png':
                                                      e.__vite_glob_0_7,
                                                    '../../assets/icons/line.png':
                                                      e.__vite_glob_0_8,
                                                    '../../assets/icons/linkedIn.png':
                                                      e.__vite_glob_0_9,
                                                    '../../assets/icons/messenger.png':
                                                      e.__vite_glob_0_10,
                                                    '../../assets/icons/outlook.png':
                                                      e.__vite_glob_0_11,
                                                    '../../assets/icons/phound.png':
                                                      e.__vite_glob_0_12,
                                                    '../../assets/icons/skype.png':
                                                      e.__vite_glob_0_13,
                                                    '../../assets/icons/slack.png':
                                                      e.__vite_glob_0_14,
                                                    '../../assets/icons/telegram.png':
                                                      e.__vite_glob_0_15,
                                                    '../../assets/icons/textnow.png':
                                                      e.__vite_glob_0_16,
                                                    '../../assets/icons/tiktok.png':
                                                      e.__vite_glob_0_17,
                                                    '../../assets/icons/tinder.png':
                                                      e.__vite_glob_0_18,
                                                    '../../assets/icons/twitter.png':
                                                      e.__vite_glob_0_19,
                                                    '../../assets/icons/vk.png':
                                                      e.__vite_glob_0_20,
                                                    '../../assets/icons/wechat.png':
                                                      e.__vite_glob_0_21,
                                                    '../../assets/icons/whatsapp.png':
                                                      e.__vite_glob_0_22,
                                                    '../../assets/icons/zalo.png':
                                                      e.__vite_glob_0_23,
                                                  })[`../../assets/icons/${r}`],
                                                  self.location
                                                ).href),
                                              alt: '',
                                              class: 'nav-icon',
                                            },
                                            null,
                                            8,
                                            de
                                          ),
                                          n.createBaseVNode(
                                            'span',
                                            null,
                                            n.toDisplayString(o.showName),
                                            1
                                          ),
                                        ],
                                        8,
                                        ce
                                      ),
                                      n.createVNode(
                                        n.unref(a.NBadge),
                                        {
                                          value:
                                            ((t = o),
                                            p.getNotice(t.appId) || 0),
                                          max: 99,
                                          class: 'nav-badge',
                                        },
                                        null,
                                        8,
                                        ['value']
                                      ),
                                      n.createVNode(
                                        n.SvgIcon,
                                        {
                                          className: 'svg-icon',
                                          name: 'close',
                                          size: 16,
                                          onClick: n.withModifiers(
                                            (e) => {
                                              return (
                                                (n = o.appId),
                                                (I.value = true),
                                                (N.value = 1),
                                                (_.value =
                                                  '确认关闭当前聊天窗口\uFF1F'),
                                                void (T.value = n)
                                              );
                                              var n;
                                            },
                                            ['prevent']
                                          ),
                                        },
                                        null,
                                        8,
                                        ['onClick']
                                      ),
                                    ],
                                    42,
                                    se
                                  )
                                );
                                var t, r;
                              }),
                              256
                            )),
                          ],
                          544
                        ),
                      ]),
                      j.value
                        ? (n.openBlock(),
                          n.createElementBlock(
                            'div',
                            {
                              key: 1,
                              class: n.normalizeClass([
                                'svg-box svg-box__right',
                                { disabled: !O.value },
                              ]),
                            },
                            [
                              n.createVNode(n.SvgIcon, {
                                name: 'chevrons-right',
                                onClick: t[1] || (t[1] = (e) => L()),
                              }),
                            ],
                            2
                          ))
                        : n.createCommentVNode('', true),
                      n.createBaseVNode(
                        'div',
                        {
                          class: 'append-icon',
                          onClick: A,
                        },
                        [
                          n.createVNode(n.SvgIcon, {
                            name: 'add',
                            class: 'add-icon',
                          }),
                        ]
                      ),
                      n.createBaseVNode('div', ue, [
                        n.createBaseVNode('div', pe, [
                          n.createBaseVNode(
                            'div',
                            {
                              class: n.normalizeClass([
                                'svg-box',
                                { active: 'TranslateSetting' === i.value },
                              ]),
                              onClick:
                                t[2] ||
                                (t[2] = (e) => {
                                  return (
                                    (n = 'TranslateSetting'),
                                    void (i.value !== n
                                      ? (i.value = n)
                                      : (i.value = ''))
                                  );
                                  var n;
                                }),
                            },
                            [n.createVNode(n.SvgIcon, { name: 'setting' })],
                            2
                          ),
                        ]),
                      ]),
                    ]),
                    n.createVNode(
                      n.unref(g),
                      { show: 'TranslateSetting' === i.value },
                      {
                        default: n.withCtx(() => [
                          n.createVNode(Q, { onSubmit: S }),
                        ]),
                        _: 1,
                      },
                      8,
                      ['show']
                    ),
                    n.createBaseVNode('div', ve, [
                      n.createBaseVNode('div', he, [
                        (n.openBlock(true),
                        n.createElementBlock(
                          n.Fragment,
                          null,
                          n.renderList(
                            n.unref(u).appList,
                            (e) => (
                              n.openBlock(),
                              n.createBlock(
                                ae,
                                {
                                  class: n.normalizeClass([
                                    'webview-item',
                                    {
                                      active:
                                        n.unref(u).currentAppId === e.appId,
                                    },
                                  ]),
                                  app: e,
                                  key: e.appId,
                                },
                                null,
                                8,
                                ['class', 'app']
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                    n.createVNode(
                      n.unref(n.NModal),
                      {
                        show: I.value,
                        'onUpdate:show': t[3] || (t[3] = (e) => (I.value = e)),
                        preset: 'dialog',
                        title: '确认',
                        'transform-origin': 'center',
                        content: _.value,
                        'positive-text': '确认',
                        'negative-text': '取消',
                        onPositiveClick: B,
                      },
                      null,
                      8,
                      ['show', 'content']
                    ),
                    n.createVNode(
                      n.unref($),
                      {
                        placement: 'bottom-start',
                        trigger: 'manual',
                        x: h.x,
                        y: h.y,
                        options: m.value,
                        show: s.value,
                        onSelect: V,
                        'on-clickoutside': P,
                      },
                      null,
                      8,
                      ['x', 'y', 'options', 'show']
                    ),
                    n.createVNode(
                      e.AppSettingModal,
                      {
                        title: `${n.unref(c)('Modify')} ${
                          null == (o = x.value) ? void 0 : o.name
                        }`,
                        show: b.value,
                        'onUpdate:show': t[4] || (t[4] = (e) => (b.value = e)),
                        formModel: x.value,
                        'onUpdate:formModel':
                          t[5] || (t[5] = (e) => (x.value = e)),
                        onSubmit: S,
                      },
                      null,
                      8,
                      ['title', 'show', 'formModel']
                    ),
                    n.createVNode(
                      e.AppSettingModal,
                      {
                        title: `${n.unref(c)('Add to')} ${l.value.name}`,
                        show: w.value,
                        'onUpdate:show': t[6] || (t[6] = (e) => (w.value = e)),
                        formModel: r.value,
                        'onUpdate:formModel':
                          t[7] || (t[7] = (e) => (r.value = e)),
                        onSubmit: z,
                      },
                      null,
                      8,
                      ['title', 'show', 'formModel']
                    ),
                  ];
                }),
                _: 1,
              }
            )
          );
        }
      );
    },
  }),
  me = n._export_sfc(fe, [['__scopeId', 'data-v-8d78b710']]),
  ge = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: me,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
exports.AppView = me;
exports.index = ge;
exports.useApp = q;
