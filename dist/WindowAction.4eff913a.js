'use strict';
const e = require('./index.3840a89d.js'),
  o = { class: 'window-action' },
  n = e.defineComponent({
    __name: 'WindowAction',
    setup(n) {
      const c = e.useRoute(),
        i = (e) => {
          window.$electron.handleWindow(e);
        },
        s = e.computed$1(() => 'login' === c.name),
        t = e.useAppStore();
      return (n, c) => {
        const a = e.resolveComponent('svg-icon');
        return (
          e.openBlock(),
          e.createElementBlock('div', o, [
            e.unref(t).devtools
              ? (e.openBlock(),
                e.createBlock(a, {
                  key: 0,
                  class: 'svg-icon',
                  name: 'console',
                  onClick: c[0] || (c[0] = (e) => i('openDevTools')),
                }))
              : e.createCommentVNode('', true),
            e.createVNode(a, {
              class: 'svg-icon',
              name: 'minimize',
              onClick: c[1] || (c[1] = (e) => i('minimize')),
            }),
            e.unref(s)
              ? e.createCommentVNode('', true)
              : (e.openBlock(),
                e.createBlock(a, {
                  key: 1,
                  class: 'svg-icon',
                  name: 'maximize',
                  onClick: c[2] || (c[2] = (e) => i('maximize')),
                })),
            e.createVNode(a, {
              class: 'svg-icon',
              name: 'close',
              onClick: c[3] || (c[3] = (e) => i('close')),
            }),
          ])
        );
      };
    },
  }),
  c = e._export_sfc(n, [['__scopeId', 'data-v-f1b09afc']]);
exports.WindowAction = c;
