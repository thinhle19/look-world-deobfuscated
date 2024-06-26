'use strict';
const e = require('./index.3840a89d.js');
function n(n, t) {
  return (
    e.watch(n, (e) => {
      void 0 !== e && (t.value = e);
    }),
    e.computed(() => (void 0 === n.value ? t.value : n.value))
  );
}
const t = {
  name: 'en-US',
  global: {
    undo: 'Undo',
    redo: 'Redo',
    confirm: 'Confirm',
    clear: 'Clear',
  },
  Popconfirm: {
    positiveText: 'Confirm',
    negativeText: 'Cancel',
  },
  Cascader: {
    placeholder: 'Please Select',
    loading: 'Loading',
    loadingRequiredMessage: (e) =>
      `Please load all ${e}'s descendants before checking it.`,
  },
  Time: {
    dateFormat: 'yyyy-MM-dd',
    dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
  },
  DatePicker: {
    yearFormat: 'yyyy',
    monthFormat: 'MMM',
    dayFormat: 'eeeeee',
    yearTypeFormat: 'yyyy',
    monthTypeFormat: 'yyyy-MM',
    dateFormat: 'yyyy-MM-dd',
    dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
    quarterFormat: 'yyyy-qqq',
    clear: 'Clear',
    now: 'Now',
    confirm: 'Confirm',
    selectTime: 'Select Time',
    selectDate: 'Select Date',
    datePlaceholder: 'Select Date',
    datetimePlaceholder: 'Select Date and Time',
    monthPlaceholder: 'Select Month',
    yearPlaceholder: 'Select Year',
    quarterPlaceholder: 'Select Quarter',
    startDatePlaceholder: 'Start Date',
    endDatePlaceholder: 'End Date',
    startDatetimePlaceholder: 'Start Date and Time',
    endDatetimePlaceholder: 'End Date and Time',
    startMonthPlaceholder: 'Start Month',
    endMonthPlaceholder: 'End Month',
    monthBeforeYear: true,
    firstDayOfWeek: 6,
    today: 'Today',
  },
  DataTable: {
    checkTableAll: 'Select all in the table',
    uncheckTableAll: 'Unselect all in the table',
    confirm: 'Confirm',
    clear: 'Clear',
  },
  LegacyTransfer: {
    sourceTitle: 'Source',
    targetTitle: 'Target',
  },
  Transfer: {
    selectAll: 'Select all',
    unselectAll: 'Unselect all',
    clearAll: 'Clear',
    total: (e) => `Total ${e} items`,
    selected: (e) => `${e} items selected`,
  },
  Empty: { description: 'No Data' },
  Select: { placeholder: 'Please Select' },
  TimePicker: {
    placeholder: 'Select Time',
    positiveText: 'OK',
    negativeText: 'Cancel',
    now: 'Now',
  },
  Pagination: {
    goto: 'Goto',
    selectionSuffix: 'page',
  },
  DynamicTags: { add: 'Add' },
  Log: { loading: 'Loading' },
  Input: { placeholder: 'Please Input' },
  InputNumber: { placeholder: 'Please Input' },
  DynamicInput: { create: 'Create' },
  ThemeEditor: {
    title: 'Theme Editor',
    clearAllVars: 'Clear All Variables',
    clearSearch: 'Clear Search',
    filterCompName: 'Filter Component Name',
    filterVarName: 'Filter Variable Name',
    import: 'Import',
    export: 'Export',
    restore: 'Reset to Default',
  },
  Image: {
    tipPrevious: 'Previous picture (\u2190)',
    tipNext: 'Next picture (\u2192)',
    tipCounterclockwise: 'Counterclockwise',
    tipClockwise: 'Clockwise',
    tipZoomOut: 'Zoom out',
    tipZoomIn: 'Zoom in',
    tipClose: 'Close (Esc)',
    tipOriginalSize: 'Zoom to original size',
  },
};
function o(e) {
  return function () {
    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
function r(e) {
  return function (n, t) {
    var o;
    if (
      'formatting' ===
        (null != t && t.context ? String(t.context) : 'standalone') &&
      e.formattingValues
    ) {
      var r = e.defaultFormattingWidth || e.defaultWidth,
        a = null != t && t.width ? String(t.width) : r;
      o = e.formattingValues[a] || e.formattingValues[r];
    } else {
      var l = e.defaultWidth,
        i = null != t && t.width ? String(t.width) : e.defaultWidth;
      o = e.values[i] || e.values[l];
    }
    return o[e.argumentCallback ? e.argumentCallback(n) : n];
  };
}
function a(e) {
  return function (n) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      o = t.width,
      r = (o && e.matchPatterns[o]) || e.matchPatterns[e.defaultMatchWidth],
      a = n.match(r);
    if (!a) {
      return null;
    }
    var l,
      i = a[0],
      s = (o && e.parsePatterns[o]) || e.parsePatterns[e.defaultParseWidth],
      c = Array.isArray(s)
        ? (function (e, n) {
            for (var t = 0; t < e.length; t++) {
              if (n(e[t])) {
                return t;
              }
            }
            return;
          })(s, function (e) {
            return e.test(i);
          })
        : (function (e, n) {
            for (var t in e)
              if (e.hasOwnProperty(t) && n(e[t])) {
                return t;
              }
            return;
          })(s, function (e) {
            return e.test(i);
          });
    return (
      (l = e.valueCallback ? e.valueCallback(c) : c),
      {
        value: (l = t.valueCallback ? t.valueCallback(l) : l),
        rest: n.slice(i.length),
      }
    );
  };
}
var l = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds',
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds',
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes',
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes',
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours',
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours',
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days',
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks',
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks',
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months',
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months',
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years',
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years',
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years',
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years',
  },
};
const i = function (e, n, t) {
  var o,
    r = l[e];
  return (
    (o =
      'string' == typeof r
        ? r
        : 1 === n
        ? r.one
        : r.other.replace('{{count}}', n.toString())),
    null != t && t.addSuffix
      ? t.comparison && t.comparison > 0
        ? 'in ' + o
        : o + ' ago'
      : o
  );
};
var s = {
  date: o({
    formats: {
      full: 'EEEE, MMMM do, y',
      long: 'MMMM do, y',
      medium: 'MMM d, y',
      short: 'MM/dd/yyyy',
    },
    defaultWidth: 'full',
  }),
  time: o({
    formats: {
      full: 'h:mm:ss a zzzz',
      long: 'h:mm:ss a z',
      medium: 'h:mm:ss a',
      short: 'h:mm a',
    },
    defaultWidth: 'full',
  }),
  dateTime: o({
    formats: {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: '{{date}}, {{time}}',
      short: '{{date}}, {{time}}',
    },
    defaultWidth: 'full',
  }),
};
var c = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P',
};
var u;
const d = {
  name: 'en-US',
  locale: {
    code: 'en-US',
    formatDistance: i,
    formatLong: s,
    formatRelative: function (e, n, t, o) {
      return c[e];
    },
    localize: {
      ordinalNumber: function (e, n) {
        var t = Number(e),
          o = t % 100;
        if (o > 20 || o < 10) {
          switch (o % 10) {
            case 1:
              return t + 'st';
            case 2:
              return t + 'nd';
            case 3:
              return t + 'rd';
          }
        }
        return t + 'th';
      },
      era: r({
        values: {
          narrow: ['B', 'A'],
          abbreviated: ['BC', 'AD'],
          wide: ['Before Christ', 'Anno Domini'],
        },
        defaultWidth: 'wide',
      }),
      quarter: r({
        values: {
          narrow: ['1', '2', '3', '4'],
          abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
          wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
        },
        defaultWidth: 'wide',
        argumentCallback: function (e) {
          return e - 1;
        },
      }),
      month: r({
        values: {
          narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          abbreviated: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          wide: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        },
        defaultWidth: 'wide',
      }),
      day: r({
        values: {
          narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          wide: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
        },
        defaultWidth: 'wide',
      }),
      dayPeriod: r({
        values: {
          narrow: {
            am: 'a',
            pm: 'p',
            midnight: 'mi',
            noon: 'n',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night',
          },
          abbreviated: {
            am: 'AM',
            pm: 'PM',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night',
          },
          wide: {
            am: 'a.m.',
            pm: 'p.m.',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night',
          },
        },
        defaultWidth: 'wide',
        formattingValues: {
          narrow: {
            am: 'a',
            pm: 'p',
            midnight: 'mi',
            noon: 'n',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night',
          },
          abbreviated: {
            am: 'AM',
            pm: 'PM',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night',
          },
          wide: {
            am: 'a.m.',
            pm: 'p.m.',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night',
          },
        },
        defaultFormattingWidth: 'wide',
      }),
    },
    match: {
      ordinalNumber:
        ((u = {
          matchPattern: /^(\d+)(th|st|nd|rd)?/i,
          parsePattern: /\d+/i,
          valueCallback: function (e) {
            return parseInt(e, 10);
          },
        }),
        function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = e.match(u.matchPattern);
          if (!t) {
            return null;
          }
          var o = t[0],
            r = e.match(u.parsePattern);
          if (!r) {
            return null;
          }
          var a = u.valueCallback ? u.valueCallback(r[0]) : r[0];
          return {
            value: (a = n.valueCallback ? n.valueCallback(a) : a),
            rest: e.slice(o.length),
          };
        }),
      era: a({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
          any: [/^b/i, /^(a|c)/i],
        },
        defaultParseWidth: 'any',
      }),
      quarter: a({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
          any: [/1/i, /2/i, /3/i, /4/i],
        },
        defaultParseWidth: 'any',
        valueCallback: function (e) {
          return e + 1;
        },
      }),
      month: a({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        },
        defaultParseWidth: 'any',
      }),
      day: a({
        matchPatterns: {
          narrow: /^[smtwf]/i,
          short: /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
        },
        defaultParseWidth: 'any',
      }),
      dayPeriod: a({
        matchPatterns: {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
        },
        defaultMatchWidth: 'any',
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
          },
        },
        defaultParseWidth: 'any',
      }),
    },
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1,
    },
  },
};
function h(n) {
  const { mergedLocaleRef: o, mergedDateLocaleRef: r } =
      e.inject(e.configProviderInjectionKey, null) || {},
    a = e.computed(() => {
      var e, r;
      return null !==
        (r =
          null === (e = null == o ? void 0 : o.value) || void 0 === e
            ? void 0
            : e[n]) && void 0 !== r
        ? r
        : t[n];
    });
  return {
    dateLocaleRef: e.computed(() => {
      var e;
      return null !== (e = null == r ? void 0 : r.value) && void 0 !== e
        ? e
        : d;
    }),
    localeRef: a,
  };
}
const p = e.defineComponent({
    name: 'Eye',
    render: () =>
      e.h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 512 512',
        },
        e.h('path', {
          d: 'M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '32',
        }),
        e.h('circle', {
          cx: '256',
          cy: '256',
          r: '80',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-miterlimit': '10',
          'stroke-width': '32',
        })
      ),
  }),
  v = e.defineComponent({
    name: 'EyeOff',
    render: () =>
      e.h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 512 512',
        },
        e.h('path', {
          d: 'M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z',
          fill: 'currentColor',
        }),
        e.h('path', {
          d: 'M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z',
          fill: 'currentColor',
        }),
        e.h('path', {
          d: 'M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z',
          fill: 'currentColor',
        }),
        e.h('path', {
          d: 'M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z',
          fill: 'currentColor',
        }),
        e.h('path', {
          d: 'M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z',
          fill: 'currentColor',
        })
      ),
  }),
  f = e.defineComponent({
    name: 'ChevronDown',
    render: () =>
      e.h(
        'svg',
        {
          viewBox: '0 0 16 16',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        e.h('path', {
          d: 'M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z',
          fill: 'currentColor',
        })
      ),
  }),
  m = e.replaceable(
    'clear',
    e.h(
      'svg',
      {
        viewBox: '0 0 16 16',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      e.h(
        'g',
        {
          stroke: 'none',
          'stroke-width': '1',
          fill: 'none',
          'fill-rule': 'evenodd',
        },
        e.h(
          'g',
          {
            fill: 'currentColor',
            'fill-rule': 'nonzero',
          },
          e.h('path', {
            d: 'M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z',
          })
        )
      )
    )
  ),
  g = e.cB(
    'base-clear',
    '\n flex-shrink: 0;\n height: 1em;\n width: 1em;\n position: relative;\n',
    [
      e.c('>', [
        e.cE(
          'clear',
          '\n font-size: var(--n-clear-size);\n height: 1em;\n width: 1em;\n cursor: pointer;\n color: var(--n-clear-color);\n transition: color .3s var(--n-bezier);\n display: flex;\n ',
          [
            e.c(
              '&:hover',
              '\n color: var(--n-clear-color-hover)!important;\n '
            ),
            e.c(
              '&:active',
              '\n color: var(--n-clear-color-pressed)!important;\n '
            ),
          ]
        ),
        e.cE('placeholder', '\n display: flex;\n '),
        e.cE(
          'clear, placeholder',
          '\n position: absolute;\n left: 50%;\n top: 50%;\n transform: translateX(-50%) translateY(-50%);\n ',
          [
            e.iconSwitchTransition({
              originalTransform: 'translateX(-50%) translateY(-50%)',
              left: '50%',
              top: '50%',
            }),
          ]
        ),
      ]),
    ]
  ),
  b = e.defineComponent({
    name: 'BaseClear',
    props: {
      clsPrefix: {
        type: String,
        required: true,
      },
      show: Boolean,
      onClear: Function,
    },
    setup: (n) => (
      e.useStyle('-base-clear', g, e.toRef(n, 'clsPrefix')),
      {
        handleMouseDown(e) {
          e.preventDefault();
        },
      }
    ),
    render() {
      const { clsPrefix: n } = this;
      return e.h(
        'div',
        { class: `${n}-base-clear` },
        e.h(e.NIconSwitchTransition, null, {
          default: () => {
            var t, o;
            return this.show
              ? e.h(
                  'div',
                  {
                    key: 'dismiss',
                    class: `${n}-base-clear__clear`,
                    onClick: this.onClear,
                    onMousedown: this.handleMouseDown,
                    'data-clear': true,
                  },
                  e.resolveSlot(this.$slots.icon, () => [
                    e.h(
                      e.NBaseIcon,
                      { clsPrefix: n },
                      { default: () => e.h(m, null) }
                    ),
                  ])
                )
              : e.h(
                  'div',
                  {
                    key: 'icon',
                    class: `${n}-base-clear__placeholder`,
                  },
                  null === (o = (t = this.$slots).placeholder) || void 0 === o
                    ? void 0
                    : o.call(t)
                );
          },
        })
      );
    },
  }),
  y = e.defineComponent({
    name: 'InternalSelectionSuffix',
    props: {
      clsPrefix: {
        type: String,
        required: true,
      },
      showArrow: {
        type: Boolean,
        default: void 0,
      },
      showClear: {
        type: Boolean,
        default: void 0,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      onClear: Function,
    },
    setup:
      (n, { slots: t }) =>
      () => {
        const { clsPrefix: o } = n;
        return e.h(
          e.NBaseLoading,
          {
            clsPrefix: o,
            class: `${o}-base-suffix`,
            strokeWidth: 24,
            scale: 0.85,
            show: n.loading,
          },
          {
            default: () =>
              n.showArrow
                ? e.h(
                    b,
                    {
                      clsPrefix: o,
                      show: n.showClear,
                      onClear: n.onClear,
                    },
                    {
                      placeholder: () =>
                        e.h(
                          e.NBaseIcon,
                          {
                            clsPrefix: o,
                            class: `${o}-base-suffix__arrow`,
                          },
                          {
                            default: () =>
                              e.resolveSlot(t.default, () => [e.h(f, null)]),
                          }
                        ),
                    }
                  )
                : null,
          }
        );
      },
  }),
  w = e.createInjectionKey('n-input');
function x(e) {
  let n = 0;
  for (const t of e) n++;
  return n;
}
function C(e) {
  return '' === e || null == e;
}
const S = e.defineComponent({
    name: 'InputWordCount',
    setup(n, { slots: t }) {
      const {
          mergedValueRef: o,
          maxlengthRef: r,
          mergedClsPrefixRef: a,
          countGraphemesRef: l,
        } = e.inject(w),
        i = e.computed(() => {
          const { value: e } = o;
          return null === e || Array.isArray(e) ? 0 : (l.value || x)(e);
        });
      return () => {
        const { value: n } = r,
          { value: l } = o;
        return e.h(
          'span',
          { class: `${a.value}-input-word-count` },
          e.resolveSlotWithProps(
            t.default,
            { value: null === l || Array.isArray(l) ? '' : l },
            () => [void 0 === n ? i.value : `${i.value} / ${n}`]
          )
        );
      };
    },
  }),
  M = e.cB(
    'input',
    '\n max-width: 100%;\n cursor: text;\n line-height: 1.5;\n z-index: auto;\n outline: none;\n box-sizing: border-box;\n position: relative;\n display: inline-flex;\n border-radius: var(--n-border-radius);\n background-color: var(--n-color);\n transition: background-color .3s var(--n-bezier);\n font-size: var(--n-font-size);\n --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);\n',
    [
      e.cE(
        'input, textarea',
        '\n overflow: hidden;\n flex-grow: 1;\n position: relative;\n '
      ),
      e.cE(
        'input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder',
        '\n box-sizing: border-box;\n font-size: inherit;\n line-height: 1.5;\n font-family: inherit;\n border: none;\n outline: none;\n background-color: #0000;\n text-align: inherit;\n transition:\n -webkit-text-fill-color .3s var(--n-bezier),\n caret-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n text-decoration-color .3s var(--n-bezier);\n '
      ),
      e.cE(
        'input-el, textarea-el',
        '\n -webkit-appearance: none;\n scrollbar-width: none;\n width: 100%;\n min-width: 0;\n text-decoration-color: var(--n-text-decoration-color);\n color: var(--n-text-color);\n caret-color: var(--n-caret-color);\n background-color: transparent;\n ',
        [
          e.c(
            '&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb',
            '\n width: 0;\n height: 0;\n display: none;\n '
          ),
          e.c(
            '&::placeholder',
            '\n color: #0000;\n -webkit-text-fill-color: transparent !important;\n '
          ),
          e.c('&:-webkit-autofill ~', [e.cE('placeholder', 'display: none;')]),
        ]
      ),
      e.cM('round', [
        e.cNotM('textarea', 'border-radius: calc(var(--n-height) / 2);'),
      ]),
      e.cE(
        'placeholder',
        '\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n overflow: hidden;\n color: var(--n-placeholder-color);\n ',
        [e.c('span', '\n width: 100%;\n display: inline-block;\n ')]
      ),
      e.cM('textarea', [e.cE('placeholder', 'overflow: visible;')]),
      e.cNotM('autosize', 'width: 100%;'),
      e.cM('autosize', [
        e.cE(
          'textarea-el, input-el',
          '\n position: absolute;\n top: 0;\n left: 0;\n height: 100%;\n '
        ),
      ]),
      e.cB(
        'input-wrapper',
        '\n overflow: hidden;\n display: inline-flex;\n flex-grow: 1;\n position: relative;\n padding-left: var(--n-padding-left);\n padding-right: var(--n-padding-right);\n '
      ),
      e.cE(
        'input-mirror',
        '\n padding: 0;\n height: var(--n-height);\n line-height: var(--n-height);\n overflow: hidden;\n visibility: hidden;\n position: static;\n white-space: pre;\n pointer-events: none;\n '
      ),
      e.cE(
        'input-el',
        '\n padding: 0;\n height: var(--n-height);\n line-height: var(--n-height);\n ',
        [
          e.c('+', [
            e.cE('placeholder', '\n display: flex;\n align-items: center; \n '),
          ]),
        ]
      ),
      e.cNotM('textarea', [e.cE('placeholder', 'white-space: nowrap;')]),
      e.cE('eye', '\n transition: color .3s var(--n-bezier);\n '),
      e.cM('textarea', 'width: 100%;', [
        e.cB(
          'input-word-count',
          '\n position: absolute;\n right: var(--n-padding-right);\n bottom: var(--n-padding-vertical);\n '
        ),
        e.cM('resizable', [
          e.cB(
            'input-wrapper',
            '\n resize: vertical;\n min-height: var(--n-height);\n '
          ),
        ]),
        e.cE(
          'textarea-el, textarea-mirror, placeholder',
          '\n height: 100%;\n padding-left: 0;\n padding-right: 0;\n padding-top: var(--n-padding-vertical);\n padding-bottom: var(--n-padding-vertical);\n word-break: break-word;\n display: inline-block;\n vertical-align: bottom;\n box-sizing: border-box;\n line-height: var(--n-line-height-textarea);\n margin: 0;\n resize: none;\n white-space: pre-wrap;\n '
        ),
        e.cE(
          'textarea-mirror',
          '\n width: 100%;\n pointer-events: none;\n overflow: hidden;\n visibility: hidden;\n position: static;\n white-space: pre-wrap;\n overflow-wrap: break-word;\n '
        ),
      ]),
      e.cM('pair', [
        e.cE('input-el, placeholder', 'text-align: center;'),
        e.cE(
          'separator',
          '\n display: flex;\n align-items: center;\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n white-space: nowrap;\n ',
          [
            e.cB('icon', '\n color: var(--n-icon-color);\n '),
            e.cB('base-icon', '\n color: var(--n-icon-color);\n '),
          ]
        ),
      ]),
      e.cM(
        'disabled',
        '\n cursor: not-allowed;\n background-color: var(--n-color-disabled);\n ',
        [
          e.cE('border', 'border: var(--n-border-disabled);'),
          e.cE(
            'input-el, textarea-el',
            '\n cursor: not-allowed;\n color: var(--n-text-color-disabled);\n text-decoration-color: var(--n-text-color-disabled);\n '
          ),
          e.cE('placeholder', 'color: var(--n-placeholder-color-disabled);'),
          e.cE('separator', 'color: var(--n-text-color-disabled);', [
            e.cB('icon', '\n color: var(--n-icon-color-disabled);\n '),
            e.cB('base-icon', '\n color: var(--n-icon-color-disabled);\n '),
          ]),
          e.cB(
            'input-word-count',
            '\n color: var(--n-count-text-color-disabled);\n '
          ),
          e.cE('suffix, prefix', 'color: var(--n-text-color-disabled);', [
            e.cB('icon', '\n color: var(--n-icon-color-disabled);\n '),
            e.cB('internal-icon', '\n color: var(--n-icon-color-disabled);\n '),
          ]),
        ]
      ),
      e.cNotM('disabled', [
        e.cE(
          'eye',
          '\n display: flex;\n align-items: center;\n justify-content: center;\n color: var(--n-icon-color);\n cursor: pointer;\n ',
          [
            e.c('&:hover', '\n color: var(--n-icon-color-hover);\n '),
            e.c('&:active', '\n color: var(--n-icon-color-pressed);\n '),
          ]
        ),
        e.c('&:hover', [
          e.cE('state-border', 'border: var(--n-border-hover);'),
        ]),
        e.cM('focus', 'background-color: var(--n-color-focus);', [
          e.cE(
            'state-border',
            '\n border: var(--n-border-focus);\n box-shadow: var(--n-box-shadow-focus);\n '
          ),
        ]),
      ]),
      e.cE(
        'border, state-border',
        '\n box-sizing: border-box;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n pointer-events: none;\n border-radius: inherit;\n border: var(--n-border);\n transition:\n box-shadow .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n '
      ),
      e.cE('state-border', '\n border-color: #0000;\n z-index: 1;\n '),
      e.cE('prefix', 'margin-right: 4px;'),
      e.cE('suffix', '\n margin-left: 4px;\n '),
      e.cE(
        'suffix, prefix',
        '\n transition: color .3s var(--n-bezier);\n flex-wrap: nowrap;\n flex-shrink: 0;\n line-height: var(--n-height);\n white-space: nowrap;\n display: inline-flex;\n align-items: center;\n justify-content: center;\n color: var(--n-suffix-text-color);\n ',
        [
          e.cB(
            'base-loading',
            '\n font-size: var(--n-icon-size);\n margin: 0 2px;\n color: var(--n-loading-color);\n '
          ),
          e.cB('base-clear', '\n font-size: var(--n-icon-size);\n ', [
            e.cE('placeholder', [
              e.cB(
                'base-icon',
                '\n transition: color .3s var(--n-bezier);\n color: var(--n-icon-color);\n font-size: var(--n-icon-size);\n '
              ),
            ]),
          ]),
          e.c('>', [
            e.cB(
              'icon',
              '\n transition: color .3s var(--n-bezier);\n color: var(--n-icon-color);\n font-size: var(--n-icon-size);\n '
            ),
          ]),
          e.cB('base-icon', '\n font-size: var(--n-icon-size);\n '),
        ]
      ),
      e.cB(
        'input-word-count',
        '\n pointer-events: none;\n line-height: 1.5;\n font-size: .85em;\n color: var(--n-count-text-color);\n transition: color .3s var(--n-bezier);\n margin-left: 4px;\n font-variant: tabular-nums;\n '
      ),
      ['warning', 'error'].map((n) =>
        e.cM(`${n}-status`, [
          e.cNotM('disabled', [
            e.cB('base-loading', `\n color: var(--n-loading-color-${n})\n `),
            e.cE(
              'input-el, textarea-el',
              `\n caret-color: var(--n-caret-color-${n});\n `
            ),
            e.cE('state-border', `\n border: var(--n-border-${n});\n `),
            e.c('&:hover', [
              e.cE('state-border', `\n border: var(--n-border-hover-${n});\n `),
            ]),
            e.c(
              '&:focus',
              `\n background-color: var(--n-color-focus-${n});\n `,
              [
                e.cE(
                  'state-border',
                  `\n box-shadow: var(--n-box-shadow-focus-${n});\n border: var(--n-border-focus-${n});\n `
                ),
              ]
            ),
            e.cM(
              'focus',
              `\n background-color: var(--n-color-focus-${n});\n `,
              [
                e.cE(
                  'state-border',
                  `\n box-shadow: var(--n-box-shadow-focus-${n});\n border: var(--n-border-focus-${n});\n `
                ),
              ]
            ),
          ]),
        ])
      ),
    ]
  ),
  P = e.cB('input', [
    e.cM('disabled', [
      e.cE(
        'input-el, textarea-el',
        '\n -webkit-text-fill-color: var(--n-text-color-disabled);\n '
      ),
    ]),
  ]),
  E = Object.assign(Object.assign({}, e.useTheme.props), {
    bordered: {
      type: Boolean,
      default: void 0,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: [Array, String],
    defaultValue: {
      type: [String, Array],
      default: null,
    },
    value: [String, Array],
    disabled: {
      type: Boolean,
      default: void 0,
    },
    size: String,
    rows: {
      type: [Number, String],
      default: 3,
    },
    round: Boolean,
    minlength: [String, Number],
    maxlength: [String, Number],
    clearable: Boolean,
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    pair: Boolean,
    separator: String,
    readonly: {
      type: [String, Boolean],
      default: false,
    },
    passivelyActivated: Boolean,
    showPasswordOn: String,
    stateful: {
      type: Boolean,
      default: true,
    },
    autofocus: Boolean,
    inputProps: Object,
    resizable: {
      type: Boolean,
      default: true,
    },
    showCount: Boolean,
    loading: {
      type: Boolean,
      default: void 0,
    },
    allowInput: Function,
    renderCount: Function,
    onMousedown: Function,
    onKeydown: Function,
    onKeyup: Function,
    onInput: [Function, Array],
    onFocus: [Function, Array],
    onBlur: [Function, Array],
    onClick: [Function, Array],
    onChange: [Function, Array],
    onClear: [Function, Array],
    countGraphemes: Function,
    status: String,
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    textDecoration: [String, Array],
    attrSize: {
      type: Number,
      default: 20,
    },
    onInputBlur: [Function, Array],
    onInputFocus: [Function, Array],
    onDeactivate: [Function, Array],
    onActivate: [Function, Array],
    onWrapperFocus: [Function, Array],
    onWrapperBlur: [Function, Array],
    internalDeactivateOnEnter: Boolean,
    internalForceFocus: Boolean,
    internalLoadingBeforeSuffix: Boolean,
    showPasswordToggle: Boolean,
  }),
  T = e.defineComponent({
    name: 'Input',
    props: E,
    setup(t) {
      const {
          mergedClsPrefixRef: o,
          mergedBorderedRef: r,
          inlineThemeDisabled: a,
          mergedRtlRef: l,
        } = e.useConfig(t),
        i = e.useTheme('Input', '-input', M, e.inputLight, t, o);
      e.isSafari && e.useStyle('-input-safari', P, o);
      const s = e.ref(null),
        c = e.ref(null),
        u = e.ref(null),
        d = e.ref(null),
        p = e.ref(null),
        v = e.ref(null),
        f = e.ref(null),
        m = (function (n) {
          const t = e.ref(null);
          function o() {
            t.value = null;
          }
          return (
            e.watch(n, o),
            {
              recordCursor: function () {
                const { value: e } = n;
                if (!(null == e ? void 0 : e.focus)) {
                  return void o();
                }
                const { selectionStart: r, selectionEnd: a, value: l } = e;
                null != r && null != a
                  ? (t.value = {
                      start: r,
                      end: a,
                      beforeText: l.slice(0, r),
                      afterText: l.slice(a),
                    })
                  : o();
              },
              restoreCursor: function () {
                var e;
                const { value: o } = t,
                  { value: r } = n;
                if (!o || !r) {
                  return;
                }
                const { value: a } = r,
                  { start: l, beforeText: i, afterText: s } = o;
                let c = a.length;
                if (a.endsWith(s)) {
                  c = a.length - s.length;
                } else {
                  if (a.startsWith(i)) {
                    c = i.length;
                  } else {
                    const e = i[l - 1],
                      n = a.indexOf(e, l - 1);
                    -1 !== n && (c = n + 1);
                  }
                }
                null === (e = r.setSelectionRange) ||
                  void 0 === e ||
                  e.call(r, c, c);
              },
            }
          );
        })(f),
        g = e.ref(null),
        { localeRef: b } = h('Input'),
        y = e.ref(t.defaultValue),
        x = n(e.toRef(t, 'value'), y),
        S = e.useFormItem(t),
        { mergedSizeRef: E, mergedDisabledRef: T, mergedStatusRef: A } = S,
        z = e.ref(false),
        k = e.ref(false),
        B = e.ref(false),
        F = e.ref(false);
      let W = null;
      const D = e.computed(() => {
          const { placeholder: e, pair: n } = t;
          return n
            ? Array.isArray(e)
              ? e
              : void 0 === e
              ? ['', '']
              : [e, e]
            : void 0 === e
            ? [b.value.placeholder]
            : [e];
        }),
        $ = e.computed(() => {
          const { value: e } = B,
            { value: n } = x,
            { value: t } = D;
          return !e && (C(n) || (Array.isArray(n) && C(n[0]))) && t[0];
        }),
        R = e.computed(() => {
          const { value: e } = B,
            { value: n } = x,
            { value: t } = D;
          return !e && t[1] && (C(n) || (Array.isArray(n) && C(n[1])));
        }),
        I = e.useMemo(() => t.internalForceFocus || z.value),
        L = e.useMemo(() => {
          if (T.value || t.readonly || !t.clearable || (!I.value && !k.value)) {
            return false;
          }
          const { value: e } = x,
            { value: n } = I;
          return t.pair
            ? !(!Array.isArray(e) || (!e[0] && !e[1])) && (k.value || n)
            : !!e && (k.value || n);
        }),
        N = e.computed(() => {
          const { showPasswordOn: e } = t;
          return e || (t.showPasswordToggle ? 'click' : void 0);
        }),
        _ = e.ref(false),
        j = e.computed(() => {
          const { textDecoration: e } = t;
          return e
            ? Array.isArray(e)
              ? e.map((e) => ({ textDecoration: e }))
              : [{ textDecoration: e }]
            : ['', ''];
        }),
        O = e.ref(void 0),
        V = e.computed(() => {
          const { maxlength: e } = t;
          return void 0 === e ? void 0 : Number(e);
        });
      e.onMounted(() => {
        const { value: e } = x;
        Array.isArray(e) || Z(e);
      });
      const q = e.getCurrentInstance().proxy;
      function H(n) {
        const { onUpdateValue: o, 'onUpdate:value': r, onInput: a } = t,
          { nTriggerFormInput: l } = S;
        o && e.call(o, n);
        r && e.call(r, n);
        a && e.call(a, n);
        y.value = n;
        l();
      }
      function U(n) {
        const { onChange: o } = t,
          { nTriggerFormChange: r } = S;
        o && e.call(o, n);
        y.value = n;
        r();
      }
      function K(n, o = 0, r = 'input') {
        const a = n.target.value;
        if (
          (Z(a),
          n instanceof InputEvent && !n.isComposing && (B.value = false),
          'textarea' === t.type)
        ) {
          const { value: e } = g;
          e && e.syncUnifiedContainer();
        }
        if (((W = a), B.value)) {
          return;
        }
        m.recordCursor();
        const l = (function (e) {
          const { countGraphemes: n, maxlength: o, minlength: r } = t;
          if (n) {
            let t;
            if (void 0 !== o && (void 0 === t && (t = n(e)), t > Number(o))) {
              return false;
            }
            if (void 0 !== r && (void 0 === t && (t = n(e)), t < Number(o))) {
              return false;
            }
          }
          const { allowInput: a } = t;
          if ('function' == typeof a) {
            return a(e);
          }
          return true;
        })(a);
        if (l) {
          if (t.pair) {
            let { value: e } = x;
            e = Array.isArray(e) ? [e[0], e[1]] : ['', ''];
            e[o] = a;
            'input' === r ? H(e) : U(e);
          } else {
            'input' === r ? H(a) : U(a);
          }
        }
        q.$forceUpdate();
        l || e.nextTick(m.restoreCursor);
      }
      function X(n, o) {
        (null === n.relatedTarget ||
          (n.relatedTarget !== p.value &&
            n.relatedTarget !== v.value &&
            n.relatedTarget !== c.value &&
            n.relatedTarget !== s.value)) &&
          ('focus' === o
            ? (!(function (n) {
                const { onFocus: o } = t,
                  { nTriggerFormFocus: r } = S;
                o && e.call(o, n);
                r();
              })(n),
              (z.value = true))
            : 'blur' === o &&
              (!(function (n) {
                const { onBlur: o } = t,
                  { nTriggerFormBlur: r } = S;
                o && e.call(o, n);
                r();
              })(n),
              (z.value = false)));
      }
      function Y() {
        t.passivelyActivated &&
          ((F.value = false),
          e.nextTick(() => {
            var e;
            null === (e = s.value) || void 0 === e || e.focus();
          }));
      }
      function J() {
        var e, n, o;
        T.value ||
          (t.passivelyActivated
            ? null === (e = s.value) || void 0 === e || e.focus()
            : (null === (n = c.value) || void 0 === n || n.focus(),
              null === (o = p.value) || void 0 === o || o.focus()));
      }
      function Z(e) {
        const { type: n, pair: o, autosize: r } = t;
        if (!o && r) {
          if ('textarea' === n) {
            const { value: n } = u;
            n && (n.textContent = (null != e ? e : '') + '\r\n');
          } else {
            const { value: n } = d;
            n && (e ? (n.textContent = e) : (n.innerHTML = '&nbsp;'));
          }
        }
      }
      const G = e.ref({ top: '0' });
      let Q = null;
      e.watchEffect(() => {
        const { autosize: n, type: o } = t;
        n && 'textarea' === o
          ? (Q = e.watch(x, (e) => {
              Array.isArray(e) || e === W || Z(e);
            }))
          : null == Q || Q();
      });
      let ee = null;
      e.watchEffect(() => {
        'textarea' === t.type
          ? (ee = e.watch(x, (e) => {
              var n;
              Array.isArray(e) ||
                e === W ||
                null === (n = g.value) ||
                void 0 === n ||
                n.syncUnifiedContainer();
            }))
          : null == ee || ee();
      });
      e.provide(w, {
        mergedValueRef: x,
        maxlengthRef: V,
        mergedClsPrefixRef: o,
        countGraphemesRef: e.toRef(t, 'countGraphemes'),
      });
      const ne = {
          wrapperElRef: s,
          inputElRef: p,
          textareaElRef: c,
          isCompositing: B,
          focus: J,
          blur: function () {
            var e;
            (null === (e = s.value) || void 0 === e
              ? void 0
              : e.contains(document.activeElement)) &&
              document.activeElement.blur();
          },
          select: function () {
            var e, n;
            null === (e = c.value) || void 0 === e || e.select();
            null === (n = p.value) || void 0 === n || n.select();
          },
          deactivate: function () {
            const { value: e } = s;
            (null == e ? void 0 : e.contains(document.activeElement)) &&
              e !== document.activeElement &&
              Y();
          },
          activate: function () {
            T.value || (c.value ? c.value.focus() : p.value && p.value.focus());
          },
          scrollTo: function (e) {
            if ('textarea' === t.type) {
              const { value: n } = c;
              null == n || n.scrollTo(e);
            } else {
              const { value: n } = p;
              null == n || n.scrollTo(e);
            }
          },
        },
        te = e.useRtl('Input', l, o),
        oe = e.computed(() => {
          const { value: n } = E,
            {
              common: { cubicBezierEaseInOut: t },
              self: {
                color: o,
                borderRadius: r,
                textColor: a,
                caretColor: l,
                caretColorError: s,
                caretColorWarning: c,
                textDecorationColor: u,
                border: d,
                borderDisabled: h,
                borderHover: p,
                borderFocus: v,
                placeholderColor: f,
                placeholderColorDisabled: m,
                lineHeightTextarea: g,
                colorDisabled: b,
                colorFocus: y,
                textColorDisabled: w,
                boxShadowFocus: x,
                iconSize: C,
                colorFocusWarning: S,
                boxShadowFocusWarning: M,
                borderWarning: P,
                borderFocusWarning: T,
                borderHoverWarning: A,
                colorFocusError: z,
                boxShadowFocusError: k,
                borderError: B,
                borderFocusError: F,
                borderHoverError: W,
                clearSize: D,
                clearColor: $,
                clearColorHover: R,
                clearColorPressed: I,
                iconColor: L,
                iconColorDisabled: N,
                suffixTextColor: _,
                countTextColor: j,
                countTextColorDisabled: O,
                iconColorHover: V,
                iconColorPressed: q,
                loadingColor: H,
                loadingColorError: U,
                loadingColorWarning: K,
                [e.createKey('padding', n)]: X,
                [e.createKey('fontSize', n)]: Y,
                [e.createKey('height', n)]: J,
              },
            } = i.value,
            { left: Z, right: G } = e.getMargin(X);
          return {
            '--n-bezier': t,
            '--n-count-text-color': j,
            '--n-count-text-color-disabled': O,
            '--n-color': o,
            '--n-font-size': Y,
            '--n-border-radius': r,
            '--n-height': J,
            '--n-padding-left': Z,
            '--n-padding-right': G,
            '--n-text-color': a,
            '--n-caret-color': l,
            '--n-text-decoration-color': u,
            '--n-border': d,
            '--n-border-disabled': h,
            '--n-border-hover': p,
            '--n-border-focus': v,
            '--n-placeholder-color': f,
            '--n-placeholder-color-disabled': m,
            '--n-icon-size': C,
            '--n-line-height-textarea': g,
            '--n-color-disabled': b,
            '--n-color-focus': y,
            '--n-text-color-disabled': w,
            '--n-box-shadow-focus': x,
            '--n-loading-color': H,
            '--n-caret-color-warning': c,
            '--n-color-focus-warning': S,
            '--n-box-shadow-focus-warning': M,
            '--n-border-warning': P,
            '--n-border-focus-warning': T,
            '--n-border-hover-warning': A,
            '--n-loading-color-warning': K,
            '--n-caret-color-error': s,
            '--n-color-focus-error': z,
            '--n-box-shadow-focus-error': k,
            '--n-border-error': B,
            '--n-border-focus-error': F,
            '--n-border-hover-error': W,
            '--n-loading-color-error': U,
            '--n-clear-color': $,
            '--n-clear-size': D,
            '--n-clear-color-hover': R,
            '--n-clear-color-pressed': I,
            '--n-icon-color': L,
            '--n-icon-color-hover': V,
            '--n-icon-color-pressed': q,
            '--n-icon-color-disabled': N,
            '--n-suffix-text-color': _,
          };
        }),
        re = a
          ? e.useThemeClass(
              'input',
              e.computed(() => {
                const { value: e } = E;
                return e[0];
              }),
              oe,
              t
            )
          : void 0;
      return Object.assign(Object.assign({}, ne), {
        wrapperElRef: s,
        inputElRef: p,
        inputMirrorElRef: d,
        inputEl2Ref: v,
        textareaElRef: c,
        textareaMirrorElRef: u,
        textareaScrollbarInstRef: g,
        rtlEnabled: te,
        uncontrolledValue: y,
        mergedValue: x,
        passwordVisible: _,
        mergedPlaceholder: D,
        showPlaceholder1: $,
        showPlaceholder2: R,
        mergedFocus: I,
        isComposing: B,
        activated: F,
        showClearButton: L,
        mergedSize: E,
        mergedDisabled: T,
        textDecorationStyle: j,
        mergedClsPrefix: o,
        mergedBordered: r,
        mergedShowPasswordOn: N,
        placeholderStyle: G,
        mergedStatus: A,
        textAreaScrollContainerWidth: O,
        handleTextAreaScroll: function (e) {
          var n;
          const { scrollTop: t } = e.target;
          G.value.top = -t + 'px';
          null === (n = g.value) || void 0 === n || n.syncUnifiedContainer();
        },
        handleCompositionStart: function () {
          B.value = true;
        },
        handleCompositionEnd: function (e) {
          B.value = false;
          e.target === v.value ? K(e, 1) : K(e, 0);
        },
        handleInput: K,
        handleInputBlur: function (n) {
          !(function (n) {
            const { onInputBlur: o } = t;
            o && e.call(o, n);
          })(n);
          n.relatedTarget === s.value &&
            (function () {
              const { onDeactivate: n } = t;
              n && e.call(n);
            })();
          (null === n.relatedTarget ||
            (n.relatedTarget !== p.value &&
              n.relatedTarget !== v.value &&
              n.relatedTarget !== c.value)) &&
            (F.value = false);
          X(n, 'blur');
          f.value = null;
        },
        handleInputFocus: function (n, o) {
          !(function (n) {
            const { onInputFocus: o } = t;
            o && e.call(o, n);
          })(n);
          z.value = true;
          F.value = true;
          (function () {
            const { onActivate: n } = t;
            n && e.call(n);
          })();
          X(n, 'focus');
          0 === o
            ? (f.value = p.value)
            : 1 === o
            ? (f.value = v.value)
            : 2 === o && (f.value = c.value);
        },
        handleWrapperBlur: function (n) {
          t.passivelyActivated &&
            (!(function (n) {
              const { onWrapperBlur: o } = t;
              o && e.call(o, n);
            })(n),
            X(n, 'blur'));
        },
        handleWrapperFocus: function (n) {
          t.passivelyActivated &&
            ((z.value = true),
            (function (n) {
              const { onWrapperFocus: o } = t;
              o && e.call(o, n);
            })(n),
            X(n, 'focus'));
        },
        handleMouseEnter: function () {
          var e;
          k.value = true;
          'textarea' === t.type &&
            (null === (e = g.value) ||
              void 0 === e ||
              e.handleMouseEnterWrapper());
        },
        handleMouseLeave: function () {
          var e;
          k.value = false;
          'textarea' === t.type &&
            (null === (e = g.value) ||
              void 0 === e ||
              e.handleMouseLeaveWrapper());
        },
        handleMouseDown: function (e) {
          const { onMousedown: n } = t;
          n && n(e);
          const { tagName: o } = e.target;
          if ('INPUT' !== o && 'TEXTAREA' !== o) {
            if (t.resizable) {
              const { value: n } = s;
              if (n) {
                const {
                  left: t,
                  top: o,
                  width: r,
                  height: a,
                } = n.getBoundingClientRect();
                if (
                  t + r - 14 < e.clientX &&
                  e.clientX < t + r &&
                  o + a - 14 < e.clientY &&
                  e.clientY < o + a
                ) {
                  return;
                }
              }
            }
            e.preventDefault();
            z.value || J();
          }
        },
        handleChange: function (e, n) {
          K(e, n, 'change');
        },
        handleClick: function (n) {
          !(function (n) {
            const { onClick: o } = t;
            o && e.call(o, n);
          })(n);
        },
        handleClear: function (n) {
          !(function (n) {
            const { onClear: o } = t;
            o && e.call(o, n);
          })(n);
          t.pair ? (H(['', '']), U(['', ''])) : (H(''), U(''));
        },
        handlePasswordToggleClick: function () {
          T.value || ('click' === N.value && (_.value = !_.value));
        },
        handlePasswordToggleMousedown: function (n) {
          if (T.value) {
            return;
          }
          n.preventDefault();
          const t = (n) => {
            n.preventDefault();
            e.off('mouseup', document, t);
          };
          if ((e.on('mouseup', document, t), 'mousedown' !== N.value)) {
            return;
          }
          _.value = true;
          const o = () => {
            _.value = false;
            e.off('mouseup', document, o);
          };
          e.on('mouseup', document, o);
        },
        handleWrapperKeydown: function (e) {
          var n;
          switch (
            (null === (n = t.onKeydown) || void 0 === n || n.call(t, e), e.key)
          ) {
            case 'Escape':
              Y();
              break;
            case 'Enter':
              !(function (e) {
                var n, o;
                if (t.passivelyActivated) {
                  const { value: r } = F;
                  if (r) {
                    return void (t.internalDeactivateOnEnter && Y());
                  }
                  e.preventDefault();
                  'textarea' === t.type
                    ? null === (n = c.value) || void 0 === n || n.focus()
                    : null === (o = p.value) || void 0 === o || o.focus();
                }
              })(e);
          }
        },
        handleTextAreaMirrorResize: function () {
          (() => {
            var e, n;
            if ('textarea' === t.type) {
              const { autosize: o } = t;
              if (
                (o &&
                  (O.value =
                    null ===
                      (n =
                        null === (e = g.value) || void 0 === e
                          ? void 0
                          : e.$el) || void 0 === n
                      ? void 0
                      : n.offsetWidth),
                !c.value)
              ) {
                return;
              }
              if ('boolean' == typeof o) {
                return;
              }
              const {
                  paddingTop: r,
                  paddingBottom: a,
                  lineHeight: l,
                } = window.getComputedStyle(c.value),
                i = Number(r.slice(0, -2)),
                s = Number(a.slice(0, -2)),
                d = Number(l.slice(0, -2)),
                { value: h } = u;
              if (!h) {
                return;
              }
              if (o.minRows) {
                const e = `${i + s + d * Math.max(o.minRows, 1)}px`;
                h.style.minHeight = e;
              }
              if (o.maxRows) {
                const e = `${i + s + d * o.maxRows}px`;
                h.style.maxHeight = e;
              }
            }
          })();
        },
        getTextareaScrollContainer: () => c.value,
        mergedTheme: i,
        cssVars: a ? void 0 : oe,
        themeClass: null == re ? void 0 : re.themeClass,
        onRender: null == re ? void 0 : re.onRender,
      });
    },
    render() {
      var n, t;
      const {
          mergedClsPrefix: o,
          mergedStatus: r,
          themeClass: a,
          type: l,
          countGraphemes: i,
          onRender: s,
        } = this,
        c = this.$slots;
      return (
        null == s || s(),
        e.h(
          'div',
          {
            ref: 'wrapperElRef',
            class: [
              `${o}-input`,
              a,
              r && `${o}-input--${r}-status`,
              {
                [`${o}-input--rtl`]: this.rtlEnabled,
                [`${o}-input--disabled`]: this.mergedDisabled,
                [`${o}-input--textarea`]: 'textarea' === l,
                [`${o}-input--resizable`]: this.resizable && !this.autosize,
                [`${o}-input--autosize`]: this.autosize,
                [`${o}-input--round`]: this.round && !('textarea' === l),
                [`${o}-input--pair`]: this.pair,
                [`${o}-input--focus`]: this.mergedFocus,
                [`${o}-input--stateful`]: this.stateful,
              },
            ],
            style: this.cssVars,
            tabindex:
              this.mergedDisabled || !this.passivelyActivated || this.activated
                ? void 0
                : 0,
            onFocus: this.handleWrapperFocus,
            onBlur: this.handleWrapperBlur,
            onClick: this.handleClick,
            onMousedown: this.handleMouseDown,
            onMouseenter: this.handleMouseEnter,
            onMouseleave: this.handleMouseLeave,
            onCompositionstart: this.handleCompositionStart,
            onCompositionend: this.handleCompositionEnd,
            onKeyup: this.onKeyup,
            onKeydown: this.handleWrapperKeydown,
          },
          e.h(
            'div',
            { class: `${o}-input-wrapper` },
            e.resolveWrappedSlot(
              c.prefix,
              (n) => n && e.h('div', { class: `${o}-input__prefix` }, n)
            ),
            'textarea' === l
              ? e.h(
                  e.NScrollbar,
                  {
                    ref: 'textareaScrollbarInstRef',
                    class: `${o}-input__textarea`,
                    container: this.getTextareaScrollContainer,
                    triggerDisplayManually: true,
                    useUnifiedContainer: true,
                    internalHoistYRail: true,
                  },
                  {
                    default: () => {
                      var n, t;
                      const { textAreaScrollContainerWidth: r } = this,
                        a = { width: this.autosize && r && `${r}px` };
                      return e.h(
                        e.Fragment,
                        null,
                        e.h(
                          'textarea',
                          Object.assign({}, this.inputProps, {
                            ref: 'textareaElRef',
                            class: [
                              `${o}-input__textarea-el`,
                              null === (n = this.inputProps) || void 0 === n
                                ? void 0
                                : n.class,
                            ],
                            autofocus: this.autofocus,
                            rows: Number(this.rows),
                            placeholder: this.placeholder,
                            value: this.mergedValue,
                            disabled: this.mergedDisabled,
                            maxlength: i ? void 0 : this.maxlength,
                            minlength: i ? void 0 : this.minlength,
                            readonly: this.readonly,
                            tabindex:
                              this.passivelyActivated && !this.activated
                                ? -1
                                : void 0,
                            style: [
                              this.textDecorationStyle[0],
                              null === (t = this.inputProps) || void 0 === t
                                ? void 0
                                : t.style,
                              a,
                            ],
                            onBlur: this.handleInputBlur,
                            onFocus: (e) => this.handleInputFocus(e, 2),
                            onInput: this.handleInput,
                            onChange: this.handleChange,
                            onScroll: this.handleTextAreaScroll,
                          })
                        ),
                        this.showPlaceholder1
                          ? e.h(
                              'div',
                              {
                                class: `${o}-input__placeholder`,
                                style: [this.placeholderStyle, a],
                                key: 'placeholder',
                              },
                              this.mergedPlaceholder[0]
                            )
                          : null,
                        this.autosize
                          ? e.h(
                              e.VResizeObserver,
                              { onResize: this.handleTextAreaMirrorResize },
                              {
                                default: () =>
                                  e.h('div', {
                                    ref: 'textareaMirrorElRef',
                                    class: `${o}-input__textarea-mirror`,
                                    key: 'mirror',
                                  }),
                              }
                            )
                          : null
                      );
                    },
                  }
                )
              : e.h(
                  'div',
                  { class: `${o}-input__input` },
                  e.h(
                    'input',
                    Object.assign(
                      {
                        type:
                          'password' === l &&
                          this.mergedShowPasswordOn &&
                          this.passwordVisible
                            ? 'text'
                            : l,
                      },
                      this.inputProps,
                      {
                        ref: 'inputElRef',
                        class: [
                          `${o}-input__input-el`,
                          null === (n = this.inputProps) || void 0 === n
                            ? void 0
                            : n.class,
                        ],
                        style: [
                          this.textDecorationStyle[0],
                          null === (t = this.inputProps) || void 0 === t
                            ? void 0
                            : t.style,
                        ],
                        tabindex:
                          this.passivelyActivated && !this.activated
                            ? -1
                            : void 0,
                        placeholder: this.mergedPlaceholder[0],
                        disabled: this.mergedDisabled,
                        maxlength: i ? void 0 : this.maxlength,
                        minlength: i ? void 0 : this.minlength,
                        value: Array.isArray(this.mergedValue)
                          ? this.mergedValue[0]
                          : this.mergedValue,
                        readonly: this.readonly,
                        autofocus: this.autofocus,
                        size: this.attrSize,
                        onBlur: this.handleInputBlur,
                        onFocus: (e) => this.handleInputFocus(e, 0),
                        onInput: (e) => this.handleInput(e, 0),
                        onChange: (e) => this.handleChange(e, 0),
                      }
                    )
                  ),
                  this.showPlaceholder1
                    ? e.h(
                        'div',
                        { class: `${o}-input__placeholder` },
                        e.h('span', null, this.mergedPlaceholder[0])
                      )
                    : null,
                  this.autosize
                    ? e.h(
                        'div',
                        {
                          class: `${o}-input__input-mirror`,
                          key: 'mirror',
                          ref: 'inputMirrorElRef',
                        },
                        '\xA0'
                      )
                    : null
                ),
            !this.pair &&
              e.resolveWrappedSlot(c.suffix, (n) =>
                n ||
                this.clearable ||
                this.showCount ||
                this.mergedShowPasswordOn ||
                void 0 !== this.loading
                  ? e.h('div', { class: `${o}-input__suffix` }, [
                      e.resolveWrappedSlot(
                        c['clear-icon-placeholder'],
                        (n) =>
                          (this.clearable || n) &&
                          e.h(
                            b,
                            {
                              clsPrefix: o,
                              show: this.showClearButton,
                              onClear: this.handleClear,
                            },
                            {
                              placeholder: () => n,
                              icon: () => {
                                var e, n;
                                return null ===
                                  (n = (e = this.$slots)['clear-icon']) ||
                                  void 0 === n
                                  ? void 0
                                  : n.call(e);
                              },
                            }
                          )
                      ),
                      this.internalLoadingBeforeSuffix ? null : n,
                      void 0 !== this.loading
                        ? e.h(y, {
                            clsPrefix: o,
                            loading: this.loading,
                            showArrow: false,
                            showClear: false,
                            style: this.cssVars,
                          })
                        : null,
                      this.internalLoadingBeforeSuffix ? n : null,
                      this.showCount && 'textarea' !== this.type
                        ? e.h(S, null, {
                            default: (e) => {
                              var n;
                              return null === (n = c.count) || void 0 === n
                                ? void 0
                                : n.call(c, e);
                            },
                          })
                        : null,
                      this.mergedShowPasswordOn && 'password' === this.type
                        ? e.h(
                            'div',
                            {
                              class: `${o}-input__eye`,
                              onMousedown: this.handlePasswordToggleMousedown,
                              onClick: this.handlePasswordToggleClick,
                            },
                            this.passwordVisible
                              ? e.resolveSlot(
                                  c['password-visible-icon'],
                                  () => [
                                    e.h(
                                      e.NBaseIcon,
                                      { clsPrefix: o },
                                      { default: () => e.h(p, null) }
                                    ),
                                  ]
                                )
                              : e.resolveSlot(
                                  c['password-invisible-icon'],
                                  () => [
                                    e.h(
                                      e.NBaseIcon,
                                      { clsPrefix: o },
                                      { default: () => e.h(v, null) }
                                    ),
                                  ]
                                )
                          )
                        : null,
                    ])
                  : null
              )
          ),
          this.pair
            ? e.h(
                'span',
                { class: `${o}-input__separator` },
                e.resolveSlot(c.separator, () => [this.separator])
              )
            : null,
          this.pair
            ? e.h(
                'div',
                { class: `${o}-input-wrapper` },
                e.h(
                  'div',
                  { class: `${o}-input__input` },
                  e.h('input', {
                    ref: 'inputEl2Ref',
                    type: this.type,
                    class: `${o}-input__input-el`,
                    tabindex:
                      this.passivelyActivated && !this.activated ? -1 : void 0,
                    placeholder: this.mergedPlaceholder[1],
                    disabled: this.mergedDisabled,
                    maxlength: i ? void 0 : this.maxlength,
                    minlength: i ? void 0 : this.minlength,
                    value: Array.isArray(this.mergedValue)
                      ? this.mergedValue[1]
                      : void 0,
                    readonly: this.readonly,
                    style: this.textDecorationStyle[1],
                    onBlur: this.handleInputBlur,
                    onFocus: (e) => this.handleInputFocus(e, 1),
                    onInput: (e) => this.handleInput(e, 1),
                    onChange: (e) => this.handleChange(e, 1),
                  }),
                  this.showPlaceholder2
                    ? e.h(
                        'div',
                        { class: `${o}-input__placeholder` },
                        e.h('span', null, this.mergedPlaceholder[1])
                      )
                    : null
                ),
                e.resolveWrappedSlot(
                  c.suffix,
                  (n) =>
                    (this.clearable || n) &&
                    e.h('div', { class: `${o}-input__suffix` }, [
                      this.clearable &&
                        e.h(
                          b,
                          {
                            clsPrefix: o,
                            show: this.showClearButton,
                            onClear: this.handleClear,
                          },
                          {
                            icon: () => {
                              var e;
                              return null === (e = c['clear-icon']) ||
                                void 0 === e
                                ? void 0
                                : e.call(c);
                            },
                            placeholder: () => {
                              var e;
                              return null ===
                                (e = c['clear-icon-placeholder']) ||
                                void 0 === e
                                ? void 0
                                : e.call(c);
                            },
                          }
                        ),
                      n,
                    ])
                )
              )
            : null,
          this.mergedBordered
            ? e.h('div', { class: `${o}-input__border` })
            : null,
          this.mergedBordered
            ? e.h('div', { class: `${o}-input__state-border` })
            : null,
          this.showCount && 'textarea' === l
            ? e.h(S, null, {
                default: (e) => {
                  var n;
                  const { renderCount: t } = this;
                  return t
                    ? t(e)
                    : null === (n = c.count) || void 0 === n
                    ? void 0
                    : n.call(c, e);
                },
              })
            : null
        )
      );
    },
  });
exports.NBaseSuffix = y;
exports.NInput = T;
exports.useLocale = h;
exports.useMergedState = n;
