'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const e = require('./AppSettingModal.454e866b.js'),
  s = require('./index.3840a89d.js'),
  t = require('./useDelayTime.c75a4cd7.js');
require('./Switch.a86b5994.js');
require('./Input.3f4c4aa8.js');
const A = (e) => (
    s.pushScopeId('data-v-1a15502e'), (e = e()), s.popScopeId(), e
  ),
  a = { class: 'app-list w flex flex-wrap' },
  n = ['onClick'],
  l = ['src'],
  o = { class: 'app-text' },
  i = { class: 'side_consult' },
  g = { class: 'side_consult__item' },
  r = A(() =>
    s.createBaseVNode(
      'img',
      {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABKFJREFUaEPtmGnI5WMYxn+XJXwQY51ismSZsU9ZJtMYMomULwYZMpTEyAcx1gxjq2FkQpbIjA+UJZJSE42xk7LvSxhElvCFsd663p737X/O+1+e/znvmfHW+9T5cDrXc5/7eu79FuP8aJzrzwSB9W3BCQuMOwtExB7AkcARwC7AdunzD/Bj+rwFPA+slvTFIElmuVBEbAKcClwATGup0CrgTuAxSX+3vNsIbyQQEfOAm4DJjdLqAW8DCyS92KecjuuVBCJiEnAHcNIY/mEANwMLJf07FnJLCUTE1sAzwL5j8SclMh4H5kn6rV/5owikl7ffHtCv8Ib7jwJzJdkqPZ8yAg8CJ/Yssd3FRZKuaXelE91BICKOA2zesuMMcpqzCXAg8HBNYL9uFwG+SZnrqhqZ0yR92iuJbgIfA7tXCFsh6Yzh3yLiXOC2CuxMSS8VsG8C+1dgH5LUc6IYIRARM4EXal5imaTzC0r5he+vwO8t6f0CdjUwuwLrbDRZ0g+9WKFI4HbgnBohPwEzbO6I2AJ4OrlS2ZUHgPkuXBHhqr0S2LBG9umS7uuXgAvMoQ1C1gIuSHYz14m6Y///DpgObFAAfgk4y30CfA/45T+T9F6/BL4GduhFSMadn1NRXJ5IzUpp2n3UNsDvicwa4FlJH2XIHIIUXchCNs29mIn7E3CaXAYcBjiGHAsbZ1jPZG+VZCtVniIBm3S3TMVyYA7iU5L73FuThepk2WWXAldL+qsMWCTgQDsqR7MMzBup5T4TuC7jxZtEuq4cX9aaFwksAS5qkpTx+weAffw84MoMfC7Ec8VsSY6TkVMksCfwYa60CpyHmhnJXe7pU1bZdes3XZJdqzOI/S0inN48afV6HKw3AvZ/14riMTkH8aupvSjrt35Jtegr4IaKtL5E0iVVBPx6HgU36oGBu8qdgUuBs0vuPyLphPRQznZOrd1Zz8E65HYRsRdQVhvck02R5Bozei8UEVc46nsg4PnhGODbiiL3pKRjk3K2jgtYdzpdKmlhwrhhfK1CjwsleUosJeCS/0RSpg0PE385tRhV95wSX0kBXtYb2bdtAbvQImBqhSAXu8NLCST2fpkVqSXOJTE/vegggrdbhzWSdqokkEg4Q7ldXpDJwDXkYODaTHw/sLWSNqslkEi4N3KPlHPmJt+/OwfcJ+ZzSbvmEKib0Lp1cBF0BX6qT+Vyrq+S5Da9fjsdEbekgDPWGeGypKSnK6fcfVI3uRXwXPrd6a27BuQo1QZzsSTXiUYC7v23T7l9ec4GISLuAs5qo01LrDvcHYcnuNrNXETM8ctL+jX3TyJiSipAm+feaYnrGG0bV4sthQ/BI8KV2Fu9sT7vAAdJ+mNY8EAIJBLXJ9cbKxLuQudI8twycgZGIJG4HFjcMNDnEHwXOFqS5+yOM1ACicQhgMfDtmv5oqL7SbL7jDoDJ5BIeCvhmuJ22vunuhVLmZ6zJJXurNYJgaJGEbEl4EbMtcRbiW0BB6X3Tt4Mel7w9HVycj/XmMWSSteT65xAjsMPY9Ka31uNSZJMaP24UBul22L/1xbIITNBIOeVBomZsMAgXzdH9n+rKU9AwedGpAAAAABJRU5ErkJggg==',
        alt: '',
      },
      null,
      -1
    )
  ),
  c = { class: 'side_consult__content' },
  u = ['src'],
  p = A(() =>
    s.createBaseVNode(
      'img',
      {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABCpJREFUaEPtmGvonnMYxz9fZ8IclmF4s9oYpYVQihxmyCk5jiFtmS0TSjnMKGSFF8whFLGUNtsbm0PeKCltEW+GpViOOTXlFL661u//79m9+/jc9//Zf/Vc757nvn7X7/pe598ldnDSDq4/QwDb24NDDww9UMMCto8FrgPOAXYHbpK0No6O2xCyPRG4Kik+I4PzU0lHjjsAtndJVg5rnw/sWuCgryUdNm4A2D4GuB6YDUyqEVXrJJ2wXQHYPgC4Mil+XA2le1melLRg4ABs7wzMSnF9AbBbQ8VH2OdIemlgAGwfnZS+Gji4QukfgFeBS0vCaZqkz8YUgO39gStSiGyJ1wr6D3gKuAs4FVhRkMQ/AxMluXMAKURmJmtfmGp2leLxfT1wo6R1tucDjwMRbnm0VtK5Ix866QO2oyZH6bsGOLSOxolnM3A3sAwIiz4E3FFxfomk+1oDsL0fcHkKkRMbKD3CGnF+i6RvbUcyv5CqUpWoWZLe7AuA7Z2As5K1LwL2qLot5/tGYIGkt+JbMsTqFPdV4sJLB0r6pREA21OT0nOAyVW3FHz/C1gKPCjpz6T8EUDMNNNryhwdISoB2J4AXJZC5OSaFxSxvZMGsC2lLykf883rwCENZL8oKXJtlLZKYtvx+8xk7YuBPRsIz2P9HrhN0vLej7bPTmVy74by50t6OheA7ajVkUh13Vl2d9T0Z4A7Jf2aUf4GIJSIwa0pzZD0URGADcC0phJz+D9MNf2D7DfbUf4W93nH78AESf8UAZgbCRZdrs8LfgPuAZ6Q9G/G6jEWPwtc26fsOPaupOjQW1E2B6Ienw5EF41hq25Tira/SNI3OVbfB1iZym8L/VkqaZsmV9iJU0IfD0S9D0AxkGXpi1TT38jTzHaU3Kg08SRsS5dIeq3UA2U32J6SgASYSPhHgQck/VGgfDxS1gCHt9U8nZ+c5+G+ZqF4+mWTKRPzEYZhreglXdAmSdH0tqG+AFR4Kmb+51s8VvLEr5AU74OxBWD7VuCRLkyekXG7pFy5nXrAdjSZLhI2a4NTJL03CA98CeTGaguvROPat6hYdO2BaGZN55sqbOslRTnPpc4A2I5u+3eVNn18XyZp4SAAHATE9JmleHwsicGu5tIqe350hTKmOWA7BsEYCHspAM2U9LHtABjTbixom9BUSZ8PwgMnAe/3XLQp3hYj+5v4P40nNwMP19xY/CSpdLjsMgdi1RFzT1C8e8+Q9FWe5dK6/BXgqApXrJF0XhlPlwBiMfsy8EkKm+/KLra9F/AYMK+E715J9w8KQDxBY15fLCn2PbXIdpx7Dohlb5Yif94eCIBa2hYw2Y5dfyxrT+th+TE2IJJKS3NnIdQGQErw2DktiudoaoYLJa2qkjtuAFQpOuZltF8F2p4beqCtBdueH3qgrQXbnv8f7ngwQP/0atYAAAAASUVORK5CYII=',
        alt: '',
      },
      null,
      -1
    )
  ),
  d = A(() =>
    s.createBaseVNode(
      'img',
      {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABLZJREFUaEPtmWvopVMUxn+P+y3FuAvxxSczgxlGY3KZZjJMTUkyU8yMSwzK+KAQXxQjKSZhRnOJcikfKMZl5H6/30pJSESDJCV3S+vfPqf37LP3efd7znvwr1kfz7v3WutZe12evY+Y5KJJ7j9bAfzXJ9j4BMzsQGAZsH3Lzv8OrJe0pYneRgDMbGfgNWBqEyMN1r4JHC/JwRRJUwB3A+cUaR5+0VpJF5VuLwZgZq70zlLFI65bJsmDVStFAMxsJvASsEOtxnYW/AIcJ+n9OnW1AMxsCvAOcHCdspa/fwrMkPTjIL0DAZjZNsDjwPyWnStV9wiwSJLlNtQBuA64ttTamNZdI+n6xgDM7DTAI1CbZmNyvKP2b+AUSU+l7CSdM7NDgbeBPcbsXKn674GjJH0Zb+gDYGY7Aa8AR0aLfwXuBTwfzwZ2LLVeuK6j331aArgfVXkDmBMPuRSA9cC5CaNnSnrQfzezecATgBd5G+JpcqqkJ4P+M4AJW5GskbSi+lsPADM7D1iX8Wg3ST93vpnZDcBVbXgPrJJ0dUX3LkDXVmSjZ8jFAL4D9so4dbqkhypGtgNeBGaNCMK5lafGnxXdi4CHM3q3SNqv8y0GcClwW2bjN8A0SQ5yQkKxvwfsPiSIn4Dpkj6v6Nwb8Am8f0bnCklrkgCCUxsDXU7t3yRpYfWDmZ0F3D8kgMWSHoj0PQp4C0/JOkkXZGsgAPDu8gJwTEbJ5ZJujYzmCn8Qrg2SvOa6YmYrgVsym14FTqztQgGEX1p8DuybUOZcfZakdyvHvmtYf3jhSXwMHB01BW/bXg8pwvh14EWexj2SnbJmNht4NnPzSjkwPThQNx9+CwHw2pkQMxsUAA/YCZIcXJ/UcaELgW7BRLs3SuqZF2Z2GdCTXgmbKyWtjlJnA7A8c3rnS/IUTUotzzGzu4CewqloalqETZvAHZIuGZSWJQA8J5/zC0ZCUaoN+hz5INEGPX+nSnJe00kd51y5NuwzZq6kP0YCEHLUe/JbwAEJZa+Hi3h1EJ0MOHvsUA2nCvMkPVNx3geh3/KOTej8KhT5t4Oc92+1J1Ax6Iaez5C4GyX10IqIavRQhRCUVcCVCQed1Plk9oDVSjGAYDTHlTzC8yU9HUXY08Alpgpzgc0ZMrhU0j21nocFjQAEELcDFycM5KgGDajCakk+zIplGAD+IueRnpOw0tdl4jVmlqMKPnP8FLu1VIKiMYBwCvuEoj4oYaSvz1fSKjcnvgiTttuhSpxvVMSJSM4IdDq+OfVN2gA6N6n9DWh2lZqUOj8SgOCUPzOmXtB6qEYNVVgiaVg2W95Gc1ExM6cOnhqxbArF7nfotcCCxJqbJV3RJOLx2qFqoKrEzHwgeUs8qaEjPugWSPqr4b6e5SMDCKnk9MEHzyGFznwGzJT0Q+H67LJWAFSK9GXAL+SDxC/r/nD74ajOj1zEic60GLivxrHu88z/DkA4iZuAXGH2caJRQbSWQh1HzGxb4LHEi7a/ci+U5LypNWkdQDiFPQH/v+uw4Okn/khQ99Y/DKqxAAggjgD8JcEj7o8AHw3jYN2esQEIIPwOYZL8YXYsMlYAY/E4UroVwL8R5UE2Jv0J/ANUwqBAaqt3TAAAAABJRU5ErkJggg==',
        alt: '',
      },
      null,
      -1
    )
  ),
  w = A(() =>
    s.createBaseVNode(
      'img',
      {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABNNJREFUaEPtml1oHFUUx//nTjbJ7lbxg+QhZJOZiXlxWwWJVqgaKiIW3/x4UsQHixZrMGBV7KvUthEqVYmiDyL6VPVNWgQ/ogZsLIVSIwQiCxH3JRhXbTfReOfICZNlO5mdubOZiQi5TwMzc+753fMx954zhAwGM1sAblxdXT1QrVahtZ50XfdHItJpT0dpCWTmDgA3AdgP4EkApLXGwsLC2hRExADe1lq/OzQ0dIGI/klj7k0BMHMOwC0AngLweFChZoDgPWZ+Tyn1lm3b54lotV2YxADM3AXgNgDPAHg4auIogOb3lFKnPM97XWs9Mzw8/FcSGCMAZs4D2APgWQD3m05gChCQ96llWa8ppaZLpdJy3FwtAZh5B4C7ADwHYG+coLD7bQI0RBHRl0T0aqFQ+Lq3t/dS2BwNAGaW66sB3A3gRd9N2tG78c5mAQKTzyiljmqtv3Bd9w8/KYCY+ToA9wJ4CcCuhBqfA3AMwHcAfk4SxJ2dnSWt9e1a6xcAjCSc96LneUe6uro+EwBJb0nGNwCOA5gCcElWgpmvAfBbEgAiutZxnJpYfm5ubkc+nx/VWj8P4M4kypgCnAFwAsC3RFQPSYllAD8kAbAsa+fg4OBs8J1qtVpYWVm5Qyk17nnefXEwUQCfADgJ4CwRrUQJYuYHAXyUBEAp9ZBt2x9Hya1UKt0AdgMYY+YHQoM4xIXG5ItJRH/H0a/fZ+ajAMSXrxhRQUxExxzHkWRhNGZnZzvz+bx84WVRGyPMAruIaIM7xFjg+7BAjMlC51zXvdVIe/+h+fn5nUqpi6kC+OnXC1MkLo06jqPW06EJSFYA8sH7sx2A5eXlq8rlcugHKkxeVgBDAObbAejo6LhhYGDgJ5PVl2eyApBUd7odACLa5ziOpGijkRXAYQAvtwOglDps2/YRI+0ztIDRjraVkv95EJuuXhrPZeJCaShmKmMbwHSlsnpu2wJZrayp3FQtwMwFAFJWaTlqtRrVajV4nhd5aMrn86t9fX0bzhlBwWkDyKnsUBRA3Gau6d0J13XlNBY50gZ4BMAHaQAopR61bfvDrQaQ4tbZNADk1OW67sxWA/SHVSKalTB1oVwu118qlX7ZagAJ4stpWGBpaak4MjKy5UEsm7j186lcPx2EibHAmwDWspPjOGMmm7pUg7hZ2VbHyiiApMdJmW8boJW/b1sgLv34901d6CCAdxIWtiSIN5RW0owBKWwVi8X9nue90cwbVVo8BUAeltJiZNckKxeSblClUtmtlDroeV5oN8i0uCtVBynuTrco7qZmAb+4u4eIxpl5X5x3mQI0y5Gy+oRfXr/sl9fbBhDrLS4uFuv1+igzH2Lm0Tilgy4kDQ6p7UihtZ0GxysAvgLwa5IPWS6Xu15rvdfzPJk3cYNDujWWZZ0JazHdA0C2trJZ29Qw3QsZTiItpuPM/Llt2783WkxhL/tBWQQg5pQ9fyKzrsvcLAARTRHRRKFQmOrp6Vlz16C+RkUp//QlbdZxALGBtRkAIjrNzCe6u7unTU5pRgCBfY80ute6JgCkM9NyJLCAdGpOOo4Tm7LbskDEFqLT/9XgAIDHkgQxgPeJaLJer58vl8vG3aBUAQKWkZ89bgbwxP/mZ48Iy1zxu41lWZP9/f2Z/G7zL2tddfR/O9uoAAAAAElFTkSuQmCC',
        alt: '',
      },
      null,
      -1
    )
  ),
  C = s.defineComponent({
    __name: 'index',
    props: { aboutInfo: Object },
    setup(A) {
      const C = s.ref(false),
        v = s.ref({}),
        { skipOuterLink: S } = s.useElectron(),
        b = s.ref({}),
        _ = s.ref({}),
        J = s.useAppStore(),
        m = s.useRouter(),
        { t: B } = s.useLocale(),
        f = s.useMessage(),
        M = (e) => {
          var t;
          const A = Object.assign({}, e, b.value),
            a = J.getEndAppList(A.type);
          if (
            (null == (t = null == a ? void 0 : a.appList)
              ? void 0
              : t.length) >= s.APP_LIMIT_NUM
          ) {
            return (
              (C.value = false),
              f.error(
                B('The upper limit for a single application is {limit}', {
                  limit: s.APP_LIMIT_NUM,
                })
              )
            );
          }
          J.addApp(A, true);
          J.setCurrentMenuType(A.type);
          m.push({ name: 'appview' });
          C.value = false;
        },
        k = s.ref(0),
        Z = () => {
          k.value = 0;
        };
      return (
        s.onMounted(() => {
          (async () => {
            const { data: e } = await s.getWebsiteInfo(),
              t =
                (null == e ? void 0 : e.find((e) => 'WEBSITE' === e.code)) ||
                {},
              A =
                (null == e ? void 0 : e.find((e) => 'RECHARGE' === e.code)) ||
                {};
            _.value = {
              website: t,
              recharge: A,
            };
          })();
        }),
        (J, m) => {
          const f = s.resolveComponent('base-layout');
          return (
            s.openBlock(),
            s.createBlock(f, null, {
              default: s.withCtx(() => [
                s.createBaseVNode('ul', a, [
                  (s.openBlock(true),
                  s.createElementBlock(
                    s.Fragment,
                    null,
                    s.renderList(s.unref(s.appList), (t, A) => {
                      return (
                        s.openBlock(),
                        s.createElementBlock(
                          'li',
                          {
                            onMouseover: Z,
                            class: 'app-item flex-d ai-center',
                            key: A,
                            onClick: (e) => {
                              return (
                                (s = t),
                                (b.value = s),
                                (C.value = true),
                                void (v.value.showName = b.value.name)
                              );
                              var s;
                            },
                          },
                          [
                            s.createBaseVNode(
                              'img',
                              {
                                src:
                                  ((a = t.logo),
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
                                    })[`../../assets/icons/${a}`],
                                    self.location
                                  ).href),
                                alt: '',
                                width: '64',
                              },
                              null,
                              8,
                              l
                            ),
                            s.createBaseVNode(
                              'span',
                              o,
                              s.toDisplayString(t.name),
                              1
                            ),
                          ],
                          40,
                          n
                        )
                      );
                      var a;
                    }),
                    128
                  )),
                ]),
                s.createBaseVNode('div', i, [
                  s.createVNode(
                    s.unref(t.NPopover),
                    {
                      trigger: 'hover',
                      placement: 'left',
                      to: false,
                    },
                    {
                      trigger: s.withCtx(() => [
                        s.createBaseVNode('div', g, [
                          r,
                          s.createBaseVNode(
                            'span',
                            null,
                            s.toDisplayString(s.unref(B)('WeChat')),
                            1
                          ),
                        ]),
                      ]),
                      default: s.withCtx(() => [
                        s.createBaseVNode('div', c, [
                          s.createBaseVNode(
                            'img',
                            {
                              src: A.aboutInfo.wx.value,
                              alt: '',
                              class: 'img large',
                            },
                            null,
                            8,
                            u
                          ),
                          s.createBaseVNode(
                            'span',
                            null,
                            s.toDisplayString(
                              s.unref(B)('WeChat customer service')
                            ),
                            1
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  s.createBaseVNode(
                    'div',
                    {
                      class: 'side_consult__item',
                      onClick:
                        m[0] ||
                        (m[0] = (e) => s.unref(S)(A.aboutInfo.telegram.value)),
                    },
                    [
                      p,
                      s.createBaseVNode(
                        'span',
                        null,
                        s.toDisplayString(s.unref(B)('Telegram')),
                        1
                      ),
                    ]
                  ),
                  s.createBaseVNode(
                    'div',
                    {
                      class: 'side_consult__item',
                      onClick:
                        m[1] ||
                        (m[1] = (e) => s.unref(S)(_.value.recharge.value)),
                    },
                    [
                      d,
                      s.createBaseVNode(
                        'span',
                        null,
                        s.toDisplayString(s.unref(B)('Recharge')),
                        1
                      ),
                    ]
                  ),
                  s.createBaseVNode(
                    'div',
                    {
                      class: 'side_consult__item no-split',
                      onClick:
                        m[2] ||
                        (m[2] = (e) => s.unref(S)(_.value.website.value)),
                    },
                    [
                      w,
                      s.createBaseVNode(
                        'span',
                        null,
                        s.toDisplayString(s.unref(B)('Official website')),
                        1
                      ),
                    ]
                  ),
                ]),
                s.createVNode(
                  e.AppSettingModal,
                  {
                    title: `${s.unref(B)('Add to')} ${b.value.name}`,
                    show: C.value,
                    'onUpdate:show': m[3] || (m[3] = (e) => (C.value = e)),
                    formModel: v.value,
                    'onUpdate:formModel': m[4] || (m[4] = (e) => (v.value = e)),
                    onSubmit: M,
                  },
                  null,
                  8,
                  ['title', 'show', 'formModel']
                ),
              ]),
              _: 1,
            })
          );
        }
      );
    },
  }),
  v = s._export_sfc(C, [['__scopeId', 'data-v-1a15502e']]);
exports.default = v;
