/*! For license information please see checkout6-custom.js.LICENSE.txt */
;(() => {
  'use strict'
  var e = {
      176: (e, t, n) => {
        function r() {
          return (
            !(
              'undefined' != typeof __SENTRY_BROWSER_BUNDLE__ &&
              __SENTRY_BROWSER_BUNDLE__
            ) &&
            '[object process]' ===
              Object.prototype.toString.call(
                'undefined' != typeof process ? process : 0
              )
          )
        }
        function o(e, t) {
          return e.require(t)
        }
        n.d(t, { l$: () => o, KV: () => r }), (e = n.hmd(e))
      },
      170: (e, t, n) => {
        n.d(t, { ph: () => l, yW: () => u })
        var r = n(176),
          o = n(235)
        e = n.hmd(e)
        const i = (0, o.Rf)(),
          a = { nowSeconds: () => Date.now() / 1e3 },
          s = (0, r.KV)()
            ? (function () {
                try {
                  return (0, r.l$)(e, 'perf_hooks').performance
                } catch (e) {
                  return
                }
              })()
            : (function () {
                const { performance: e } = i
                if (e && e.now)
                  return {
                    now: () => e.now(),
                    timeOrigin: Date.now() - e.now(),
                  }
              })(),
          c =
            void 0 === s
              ? a
              : { nowSeconds: () => (s.timeOrigin + s.now()) / 1e3 },
          u = a.nowSeconds.bind(a),
          l = c.nowSeconds.bind(c)
        let d
        ;(() => {
          const { performance: e } = i
          if (!e || !e.now) return void (d = 'none')
          const t = 36e5,
            n = e.now(),
            r = Date.now(),
            o = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
            a = o < t,
            s = e.timing && e.timing.navigationStart,
            c = 'number' == typeof s ? Math.abs(s + n - r) : t
          a || c < t
            ? o <= c
              ? ((d = 'timeOrigin'), e.timeOrigin)
              : (d = 'navigationStart')
            : (d = 'dateNow')
        })()
      },
      235: (e, t, n) => {
        function r(e) {
          return e && e.Math == Math ? e : void 0
        }
        n.d(t, { Rf: () => i, YO: () => a, n2: () => o })
        const o =
          ('object' == typeof globalThis && r(globalThis)) ||
          ('object' == typeof window && r(window)) ||
          ('object' == typeof self && r(self)) ||
          ('object' == typeof n.g && r(n.g)) ||
          (function () {
            return this
          })() ||
          {}
        function i() {
          return o
        }
        function a(e, t, n) {
          const r = n || o,
            i = (r.__SENTRY__ = r.__SENTRY__ || {})
          return i[e] || (i[e] = t())
        }
      },
    },
    t = {}
  function n(r) {
    var o = t[r]
    if (void 0 !== o) return o.exports
    var i = (t[r] = { id: r, loaded: !1, exports: {} })
    return e[r](i, i.exports, n), (i.loaded = !0), i.exports
  }
  ;(n.d = (e, t) => {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
  }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (n.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        set: () => {
          throw new Error(
            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
              e.id
          )
        },
      }),
      e
    )),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = function () {
        return '\n  <p id="box-pickup-complement" \n  class="input custom-field-complement tfg-custom-addressForm">\n    <label>Mobile number</label>\n    <input \n      id="custom-pickup-complement" \n      class="input-xlarge success" \n      type="tel" \n      name="complement" \n      placeholder="" \n    />\n  </p>'
      }
      var t,
        r,
        o,
        i = '#/shipping',
        a = '#/payment',
        s = 'search',
        c = 'residential',
        u = 'business',
        l = 'commercial',
        d = 'pickup',
        h = 'ricafields',
        p = 'tvfields',
        f = 'pickup',
        v = 'deliver',
        m =
          (null === (t = window) || void 0 === t
            ? void 0
            : t.BASH_DELIVERY_FEE) || 5e3,
        y =
          (null === (r = window) || void 0 === r
            ? void 0
            : r.BASH_COLLECT_FEE) || 0,
        g =
          (null === (o = window) || void 0 === o || o.BASH_FREE_THRESHOLD,
          ['bash.com', 'preprod--thefoschini.myvtex.com'].includes(
            window.location.host
          )
            ? 'https://store-api.www.bash.com/custom-api/'
            : ['thefoschiniqa.myvtex.com', 'staging.tfglabs.dev'].includes(
                window.location.host
              )
            ? 'https://store-api.staging.tfglabs.dev/custom-api/'
            : ''
                .concat(window.location.protocol, '//')
                .concat(window.location.host, '/custom-api/')),
        b = n(235)
      function w() {
        const e = b.n2,
          t = e.crypto || e.msCrypto
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, '')
        const n =
          t && t.getRandomValues
            ? () => t.getRandomValues(new Uint8Array(1))[0]
            : () => 16 * Math.random()
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e) =>
          (e ^ ((15 & n()) >> (e / 4))).toString(16)
        )
      }
      var _ = n(170)
      const x = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace']
      function E(e) {
        if (!('console' in b.n2)) return e()
        const t = b.n2.console,
          n = {}
        x.forEach((e) => {
          const r = t[e] && t[e].__sentry_original__
          e in t && r && ((n[e] = t[e]), (t[e] = r))
        })
        try {
          return e()
        } finally {
          Object.keys(n).forEach((e) => {
            t[e] = n[e]
          })
        }
      }
      function k() {
        let e = !1
        const t = {
          enable: () => {
            e = !0
          },
          disable: () => {
            e = !1
          },
        }
        return (
          'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
            ? x.forEach((n) => {
                t[n] = (...t) => {
                  e &&
                    E(() => {
                      b.n2.console[n](`Sentry Logger [${n}]:`, ...t)
                    })
                }
              })
            : x.forEach((e) => {
                t[e] = () => {}
              }),
          t
        )
      }
      let S
      S =
        'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
          ? (0, b.YO)('logger', k)
          : k()
      var O = n(176)
      const j = 'production',
        L = Object.prototype.toString
      function C(e) {
        return (function (e, t) {
          return L.call(e) === `[object ${t}]`
        })(e, 'Object')
      }
      function P(e) {
        return Boolean(e && e.then && 'function' == typeof e.then)
      }
      var N
      !(function (e) {
        ;(e[(e.PENDING = 0)] = 'PENDING'),
          (e[(e.RESOLVED = 1)] = 'RESOLVED'),
          (e[(e.REJECTED = 2)] = 'REJECTED')
      })(N || (N = {}))
      class T {
        __init() {
          this._state = N.PENDING
        }
        __init2() {
          this._handlers = []
        }
        constructor(e) {
          T.prototype.__init.call(this),
            T.prototype.__init2.call(this),
            T.prototype.__init3.call(this),
            T.prototype.__init4.call(this),
            T.prototype.__init5.call(this),
            T.prototype.__init6.call(this)
          try {
            e(this._resolve, this._reject)
          } catch (e) {
            this._reject(e)
          }
        }
        then(e, t) {
          return new T((n, r) => {
            this._handlers.push([
              !1,
              (t) => {
                if (e)
                  try {
                    n(e(t))
                  } catch (e) {
                    r(e)
                  }
                else n(t)
              },
              (e) => {
                if (t)
                  try {
                    n(t(e))
                  } catch (e) {
                    r(e)
                  }
                else r(e)
              },
            ]),
              this._executeHandlers()
          })
        }
        catch(e) {
          return this.then((e) => e, e)
        }
        finally(e) {
          return new T((t, n) => {
            let r, o
            return this.then(
              (t) => {
                ;(o = !1), (r = t), e && e()
              },
              (t) => {
                ;(o = !0), (r = t), e && e()
              }
            ).then(() => {
              o ? n(r) : t(r)
            })
          })
        }
        __init3() {
          this._resolve = (e) => {
            this._setResult(N.RESOLVED, e)
          }
        }
        __init4() {
          this._reject = (e) => {
            this._setResult(N.REJECTED, e)
          }
        }
        __init5() {
          this._setResult = (e, t) => {
            this._state === N.PENDING &&
              (P(t)
                ? t.then(this._resolve, this._reject)
                : ((this._state = e),
                  (this._value = t),
                  this._executeHandlers()))
          }
        }
        __init6() {
          this._executeHandlers = () => {
            if (this._state === N.PENDING) return
            const e = this._handlers.slice()
            ;(this._handlers = []),
              e.forEach((e) => {
                e[0] ||
                  (this._state === N.RESOLVED && e[1](this._value),
                  this._state === N.REJECTED && e[2](this._value),
                  (e[0] = !0))
              })
          }
        }
      }
      function F(e) {
        return I(e, new Map())
      }
      function I(e, t) {
        if (C(e)) {
          const n = t.get(e)
          if (void 0 !== n) return n
          const r = {}
          t.set(e, r)
          for (const n of Object.keys(e)) void 0 !== e[n] && (r[n] = I(e[n], t))
          return r
        }
        if (Array.isArray(e)) {
          const n = t.get(e)
          if (void 0 !== n) return n
          const r = []
          return (
            t.set(e, r),
            e.forEach((e) => {
              r.push(I(e, t))
            }),
            r
          )
        }
        return e
      }
      function D(e, t = {}) {
        if (
          (t.user &&
            (!e.ipAddress &&
              t.user.ip_address &&
              (e.ipAddress = t.user.ip_address),
            e.did ||
              t.did ||
              (e.did = t.user.id || t.user.email || t.user.username)),
          (e.timestamp = t.timestamp || (0, _.ph)()),
          t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
          t.sid && (e.sid = 32 === t.sid.length ? t.sid : w()),
          void 0 !== t.init && (e.init = t.init),
          !e.did && t.did && (e.did = `${t.did}`),
          'number' == typeof t.started && (e.started = t.started),
          e.ignoreDuration)
        )
          e.duration = void 0
        else if ('number' == typeof t.duration) e.duration = t.duration
        else {
          const t = e.timestamp - e.started
          e.duration = t >= 0 ? t : 0
        }
        t.release && (e.release = t.release),
          t.environment && (e.environment = t.environment),
          !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
          !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
          'number' == typeof t.errors && (e.errors = t.errors),
          t.status && (e.status = t.status)
      }
      class A {
        constructor() {
          ;(this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {})
        }
        static clone(e) {
          const t = new A()
          return (
            e &&
              ((t._breadcrumbs = [...e._breadcrumbs]),
              (t._tags = { ...e._tags }),
              (t._extra = { ...e._extra }),
              (t._contexts = { ...e._contexts }),
              (t._user = e._user),
              (t._level = e._level),
              (t._span = e._span),
              (t._session = e._session),
              (t._transactionName = e._transactionName),
              (t._fingerprint = e._fingerprint),
              (t._eventProcessors = [...e._eventProcessors]),
              (t._requestSession = e._requestSession),
              (t._attachments = [...e._attachments]),
              (t._sdkProcessingMetadata = { ...e._sdkProcessingMetadata })),
            t
          )
        }
        addScopeListener(e) {
          this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
          return this._eventProcessors.push(e), this
        }
        setUser(e) {
          return (
            (this._user = e || {}),
            this._session && D(this._session, { user: e }),
            this._notifyScopeListeners(),
            this
          )
        }
        getUser() {
          return this._user
        }
        getRequestSession() {
          return this._requestSession
        }
        setRequestSession(e) {
          return (this._requestSession = e), this
        }
        setTags(e) {
          return (
            (this._tags = { ...this._tags, ...e }),
            this._notifyScopeListeners(),
            this
          )
        }
        setTag(e, t) {
          return (
            (this._tags = { ...this._tags, [e]: t }),
            this._notifyScopeListeners(),
            this
          )
        }
        setExtras(e) {
          return (
            (this._extra = { ...this._extra, ...e }),
            this._notifyScopeListeners(),
            this
          )
        }
        setExtra(e, t) {
          return (
            (this._extra = { ...this._extra, [e]: t }),
            this._notifyScopeListeners(),
            this
          )
        }
        setFingerprint(e) {
          return (this._fingerprint = e), this._notifyScopeListeners(), this
        }
        setLevel(e) {
          return (this._level = e), this._notifyScopeListeners(), this
        }
        setTransactionName(e) {
          return (this._transactionName = e), this._notifyScopeListeners(), this
        }
        setContext(e, t) {
          return (
            null === t ? delete this._contexts[e] : (this._contexts[e] = t),
            this._notifyScopeListeners(),
            this
          )
        }
        setSpan(e) {
          return (this._span = e), this._notifyScopeListeners(), this
        }
        getSpan() {
          return this._span
        }
        getTransaction() {
          const e = this.getSpan()
          return e && e.transaction
        }
        setSession(e) {
          return (
            e ? (this._session = e) : delete this._session,
            this._notifyScopeListeners(),
            this
          )
        }
        getSession() {
          return this._session
        }
        update(e) {
          if (!e) return this
          if ('function' == typeof e) {
            const t = e(this)
            return t instanceof A ? t : this
          }
          return (
            e instanceof A
              ? ((this._tags = { ...this._tags, ...e._tags }),
                (this._extra = { ...this._extra, ...e._extra }),
                (this._contexts = { ...this._contexts, ...e._contexts }),
                e._user &&
                  Object.keys(e._user).length &&
                  (this._user = e._user),
                e._level && (this._level = e._level),
                e._fingerprint && (this._fingerprint = e._fingerprint),
                e._requestSession && (this._requestSession = e._requestSession))
              : C(e) &&
                ((this._tags = { ...this._tags, ...e.tags }),
                (this._extra = { ...this._extra, ...e.extra }),
                (this._contexts = { ...this._contexts, ...e.contexts }),
                e.user && (this._user = e.user),
                e.level && (this._level = e.level),
                e.fingerprint && (this._fingerprint = e.fingerprint),
                e.requestSession && (this._requestSession = e.requestSession)),
            this
          )
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._span = void 0),
            (this._session = void 0),
            this._notifyScopeListeners(),
            (this._attachments = []),
            this
          )
        }
        addBreadcrumb(e, t) {
          const n = 'number' == typeof t ? t : 100
          if (n <= 0) return this
          const r = { timestamp: (0, _.yW)(), ...e }
          return (
            (this._breadcrumbs = [...this._breadcrumbs, r].slice(-n)),
            this._notifyScopeListeners(),
            this
          )
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this
        }
        addAttachment(e) {
          return this._attachments.push(e), this
        }
        getAttachments() {
          return this._attachments
        }
        clearAttachments() {
          return (this._attachments = []), this
        }
        applyToEvent(e, t = {}) {
          if (
            (this._extra &&
              Object.keys(this._extra).length &&
              (e.extra = { ...this._extra, ...e.extra }),
            this._tags &&
              Object.keys(this._tags).length &&
              (e.tags = { ...this._tags, ...e.tags }),
            this._user &&
              Object.keys(this._user).length &&
              (e.user = { ...this._user, ...e.user }),
            this._contexts &&
              Object.keys(this._contexts).length &&
              (e.contexts = { ...this._contexts, ...e.contexts }),
            this._level && (e.level = this._level),
            this._transactionName && (e.transaction = this._transactionName),
            this._span)
          ) {
            e.contexts = { trace: this._span.getTraceContext(), ...e.contexts }
            const t = this._span.transaction && this._span.transaction.name
            t && (e.tags = { transaction: t, ...e.tags })
          }
          return (
            this._applyFingerprint(e),
            (e.breadcrumbs = [...(e.breadcrumbs || []), ...this._breadcrumbs]),
            (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
            (e.sdkProcessingMetadata = {
              ...e.sdkProcessingMetadata,
              ...this._sdkProcessingMetadata,
            }),
            this._notifyEventProcessors(
              [
                ...(0, b.YO)('globalEventProcessors', () => []),
                ...this._eventProcessors,
              ],
              e,
              t
            )
          )
        }
        setSDKProcessingMetadata(e) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...e,
            }),
            this
          )
        }
        _notifyEventProcessors(e, t, n, r = 0) {
          return new T((o, i) => {
            const a = e[r]
            if (null === t || 'function' != typeof a) o(t)
            else {
              const s = a({ ...t }, n)
              ;('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                a.id &&
                null === s &&
                S.log(`Event processor "${a.id}" dropped event`),
                P(s)
                  ? s
                      .then((t) =>
                        this._notifyEventProcessors(e, t, n, r + 1).then(o)
                      )
                      .then(null, i)
                  : this._notifyEventProcessors(e, s, n, r + 1)
                      .then(o)
                      .then(null, i)
            }
          })
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((e) => {
              e(this)
            }),
            (this._notifyingListeners = !1))
        }
        _applyFingerprint(e) {
          var t
          ;(e.fingerprint = e.fingerprint
            ? ((t = e.fingerprint), Array.isArray(t) ? t : [t])
            : []),
            this._fingerprint &&
              (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
            e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
      }
      const R = 100
      class B {
        constructor(e, t = new A(), n = 4) {
          ;(this._version = n),
            (this._stack = [{ scope: t }]),
            e && this.bindClient(e)
        }
        isOlderThan(e) {
          return this._version < e
        }
        bindClient(e) {
          ;(this.getStackTop().client = e),
            e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
          const e = A.clone(this.getScope())
          return this.getStack().push({ client: this.getClient(), scope: e }), e
        }
        popScope() {
          return !(this.getStack().length <= 1 || !this.getStack().pop())
        }
        withScope(e) {
          const t = this.pushScope()
          try {
            e(t)
          } finally {
            this.popScope()
          }
        }
        getClient() {
          return this.getStackTop().client
        }
        getScope() {
          return this.getStackTop().scope
        }
        getStack() {
          return this._stack
        }
        getStackTop() {
          return this._stack[this._stack.length - 1]
        }
        captureException(e, t) {
          const n = (this._lastEventId = t && t.event_id ? t.event_id : w()),
            r = new Error('Sentry syntheticException')
          return (
            this._withClient((o, i) => {
              o.captureException(
                e,
                {
                  originalException: e,
                  syntheticException: r,
                  ...t,
                  event_id: n,
                },
                i
              )
            }),
            n
          )
        }
        captureMessage(e, t, n) {
          const r = (this._lastEventId = n && n.event_id ? n.event_id : w()),
            o = new Error(e)
          return (
            this._withClient((i, a) => {
              i.captureMessage(
                e,
                t,
                {
                  originalException: e,
                  syntheticException: o,
                  ...n,
                  event_id: r,
                },
                a
              )
            }),
            r
          )
        }
        captureEvent(e, t) {
          const n = t && t.event_id ? t.event_id : w()
          return (
            e.type || (this._lastEventId = n),
            this._withClient((r, o) => {
              r.captureEvent(e, { ...t, event_id: n }, o)
            }),
            n
          )
        }
        lastEventId() {
          return this._lastEventId
        }
        addBreadcrumb(e, t) {
          const { scope: n, client: r } = this.getStackTop()
          if (!r) return
          const { beforeBreadcrumb: o = null, maxBreadcrumbs: i = R } =
            (r.getOptions && r.getOptions()) || {}
          if (i <= 0) return
          const a = { timestamp: (0, _.yW)(), ...e },
            s = o ? E(() => o(a, t)) : a
          null !== s &&
            (r.emit && r.emit('beforeAddBreadcrumb', s, t),
            n.addBreadcrumb(s, i))
        }
        setUser(e) {
          this.getScope().setUser(e)
        }
        setTags(e) {
          this.getScope().setTags(e)
        }
        setExtras(e) {
          this.getScope().setExtras(e)
        }
        setTag(e, t) {
          this.getScope().setTag(e, t)
        }
        setExtra(e, t) {
          this.getScope().setExtra(e, t)
        }
        setContext(e, t) {
          this.getScope().setContext(e, t)
        }
        configureScope(e) {
          const { scope: t, client: n } = this.getStackTop()
          n && e(t)
        }
        run(e) {
          const t = M(this)
          try {
            e(this)
          } finally {
            M(t)
          }
        }
        getIntegration(e) {
          const t = this.getClient()
          if (!t) return null
          try {
            return t.getIntegration(e)
          } catch (t) {
            return (
              ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                S.warn(
                  `Cannot retrieve integration ${e.id} from the current Hub`
                ),
              null
            )
          }
        }
        startTransaction(e, t) {
          return this._callExtensionMethod('startTransaction', e, t)
        }
        traceHeaders() {
          return this._callExtensionMethod('traceHeaders')
        }
        captureSession(e = !1) {
          if (e) return this.endSession()
          this._sendSessionUpdate()
        }
        endSession() {
          const e = this.getStackTop().scope,
            t = e.getSession()
          t &&
            (function (e, t) {
              let n = {}
              'ok' === e.status && (n = { status: 'exited' }), D(e, n)
            })(t),
            this._sendSessionUpdate(),
            e.setSession()
        }
        startSession(e) {
          const { scope: t, client: n } = this.getStackTop(),
            { release: r, environment: o = j } = (n && n.getOptions()) || {},
            { userAgent: i } = b.n2.navigator || {},
            a = (function (e) {
              const t = (0, _.ph)(),
                n = {
                  sid: w(),
                  init: !0,
                  timestamp: t,
                  started: t,
                  duration: 0,
                  status: 'ok',
                  errors: 0,
                  ignoreDuration: !1,
                  toJSON: () =>
                    (function (e) {
                      return F({
                        sid: `${e.sid}`,
                        init: e.init,
                        started: new Date(1e3 * e.started).toISOString(),
                        timestamp: new Date(1e3 * e.timestamp).toISOString(),
                        status: e.status,
                        errors: e.errors,
                        did:
                          'number' == typeof e.did || 'string' == typeof e.did
                            ? `${e.did}`
                            : void 0,
                        duration: e.duration,
                        attrs: {
                          release: e.release,
                          environment: e.environment,
                          ip_address: e.ipAddress,
                          user_agent: e.userAgent,
                        },
                      })
                    })(n),
                }
              return e && D(n, e), n
            })({
              release: r,
              environment: o,
              user: t.getUser(),
              ...(i && { userAgent: i }),
              ...e,
            }),
            s = t.getSession && t.getSession()
          return (
            s && 'ok' === s.status && D(s, { status: 'exited' }),
            this.endSession(),
            t.setSession(a),
            a
          )
        }
        shouldSendDefaultPii() {
          const e = this.getClient(),
            t = e && e.getOptions()
          return Boolean(t && t.sendDefaultPii)
        }
        _sendSessionUpdate() {
          const { scope: e, client: t } = this.getStackTop()
          if (!e) return
          const n = e.getSession()
          n && t && t.captureSession && t.captureSession(n)
        }
        _withClient(e) {
          const { scope: t, client: n } = this.getStackTop()
          n && e(n, t)
        }
        _callExtensionMethod(e, ...t) {
          const n = G().__SENTRY__
          if (n && n.extensions && 'function' == typeof n.extensions[e])
            return n.extensions[e].apply(this, t)
          ;('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            S.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
      }
      function G() {
        return (
          (b.n2.__SENTRY__ = b.n2.__SENTRY__ || {
            extensions: {},
            hub: void 0,
          }),
          b.n2
        )
      }
      function M(e) {
        const t = G(),
          n = V(t)
        return U(t, e), n
      }
      function q(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
      }
      function V(e) {
        return (0, b.YO)('hub', () => new B(), e)
      }
      function U(e, t) {
        return !!e && (((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t), !0)
      }
      var Y = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          if ('0' === (e = e.replace(/[^0-9+*#]+/g, '').trim())[0]) {
            if (e.length >= 6) {
              var n = [e.slice(0, 3), e.slice(3, 6), e.slice(6)].join(' ')
              return t ? n.trim() : n
            }
            if (e.length >= 3) {
              var r = [e.slice(0, 3), e.slice(3)].join(' ')
              return t ? r.trim() : r
            }
          } else {
            if (e.length >= 5) {
              var o = [e.slice(0, 2), e.slice(2, 5), e.slice(5)].join(' ')
              return t ? o.trim() : o
            }
            if (e.length >= 2) {
              var i = [e.slice(0, 2), e.slice(2)].join(' ')
              return t ? i.trim() : i
            }
          }
          return t ? e.trim() : e
        },
        W = function (e) {
          var t,
            n,
            r,
            o,
            i = e.preferred,
            a = void 0 === i ? void 0 : i,
            s = e.type,
            c = void 0 === s ? 'profile' : s,
            u = e.fields
          return 'collect' === c
            ? a ||
                (null == u ? void 0 : u.phone) ||
                (null === (r = document) ||
                void 0 === r ||
                null === (r = r.getElementById('client-phone')) ||
                void 0 === r
                  ? void 0
                  : r.value) ||
                (null === (o = window.vtexjs.checkout.orderForm) ||
                void 0 === o ||
                null === (o = o.clientProfileData) ||
                void 0 === o
                  ? void 0
                  : o.phone) ||
                ''
            : a ||
                (null === (t = window.vtexjs.checkout.orderForm) ||
                void 0 === t ||
                null === (t = t.clientProfileData) ||
                void 0 === t
                  ? void 0
                  : t.phone) ||
                (null === (n = document) ||
                void 0 === n ||
                null === (n = n.getElementById('client-phone')) ||
                void 0 === n
                  ? void 0
                  : n.value) ||
                ''
        },
        Z = function (e) {
          if (!e) return ''
          var t = e.replace(/\s/g, '')
          return 9 === t.length && '0' !== t[0] && (t = '0'.concat(t)), t
        },
        J = function (e) {
          return [e.slice(0, 3), e.slice(3, 6), e.slice(6)].join(' ')
        },
        H = function (e) {
          var t
          console.error('ERROR', e),
            (t = e),
            (function () {
              const e = G()
              return (
                (q(e) && !V(e).isOlderThan(4)) || U(e, new B()),
                (0, O.KV)()
                  ? (function (e) {
                      try {
                        const t = G().__SENTRY__,
                          n =
                            t &&
                            t.extensions &&
                            t.extensions.domain &&
                            t.extensions.domain.active
                        if (!n) return V(e)
                        if (!q(n) || V(n).isOlderThan(4)) {
                          const t = V(e).getStackTop()
                          U(n, new B(t.client, A.clone(t.scope)))
                        }
                        return V(n)
                      } catch (t) {
                        return V(e)
                      }
                    })(e)
                  : V(e)
              )
            })().captureException(t, { captureContext: undefined })
        },
        K = function (e) {
          var t,
            n = e.cookie,
            r = e.cache,
            o = e.json,
            i = new Headers()
          return (
            n &&
              i.append(
                'Cookie',
                null === (t = document) || void 0 === t ? void 0 : t.cookie
              ),
            r && i.append('Cache-Control', 'no-cache'),
            o && i.append('Content-type', 'application/json'),
            i
          )
        },
        z = function (e) {
          return (function (e) {
            return (
              !!e &&
              ('0' === (e = e.replace(/\s/g, ''))[0]
                ? e.match(/[0-9\s]{10}/)
                : e.match(/[0-9\s]{9,}/))
            )
          })(e)
        },
        Q = function (e) {
          var t,
            n,
            r = ['938942995'],
            o = ['24833302'],
            i = [],
            a = !1,
            s = !1,
            c = !1,
            u = 0
          return (
            e.forEach(function (e) {
              var t = e.productCategoryIds.split('/')
              i.push(t),
                t.forEach(function (e) {
                  e && (r.includes(e) ? (a = !0) : o.includes(e) && (s = !0))
                }),
                'FURNITURE' === e.modalType && ((c = !0), (u += 1))
            }),
            (n = u === e.length),
            (t = e.length > 1 && c && !n),
            {
              hasFurniture: c,
              hasSimCards: s,
              hasTVs: a,
              hasFurnitureMixed: t,
              hasFurnitureOnly: n,
              categories: i,
            }
          )
        },
        X = function () {
          $('.shimmer').removeClass('shimmer')
        },
        ee = function (e) {
          var t = e.focus,
            n = void 0 !== t && t
          $('.bash--textfield-businessName')
            .removeClass('optional')
            .slideDown(function () {
              var e
              $('#bash--input-businessName').attr('required', 'required'),
                !$('#bash--input-businessName').val() &&
                  n &&
                  (null === (e = $('#bash--input-businessName')) ||
                    void 0 === e ||
                    e.focus())
            })
        },
        te = function () {
          $('.bash--textfield-businessName').addClass('optional').slideUp(),
            $('#bash--input-businessName').attr('required', !1),
            $('#bash--input-businessName').val(''),
            $('#bash--input-businessName').blur()
        },
        ne = function () {
          var e,
            t = Array.from($('form.form-step.box-edit > :invalid, .error'))
          t.sort(function (e, t) {
            return e.getBoundingClientRect().top - t.getBoundingClientRect().top
          }),
            null == t ||
              null === (e = t[0]) ||
              void 0 === e ||
              e.scrollIntoView({ block: 'center', behavior: 'smooth' })
        }
      function re(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      const oe = function (e) {
          var t,
            n,
            r =
              ((n = 2),
              (function (e) {
                if (Array.isArray(e)) return e
              })((t = e)) ||
                (function (e, t) {
                  var n =
                    null == e
                      ? null
                      : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                        e['@@iterator']
                  if (null != n) {
                    var r,
                      o,
                      i,
                      a,
                      s = [],
                      c = !0,
                      u = !1
                    try {
                      if (((i = (n = n.call(e)).next), 0 === t)) {
                        if (Object(n) !== n) return
                        c = !1
                      } else
                        for (
                          ;
                          !(c = (r = i.call(n)).done) &&
                          (s.push(r.value), s.length !== t);
                          c = !0
                        );
                    } catch (e) {
                      ;(u = !0), (o = e)
                    } finally {
                      try {
                        if (
                          !c &&
                          null != n.return &&
                          ((a = n.return()), Object(a) !== a)
                        )
                          return
                      } finally {
                        if (u) throw o
                      }
                    }
                    return s
                  }
                })(t, n) ||
                (function (e, t) {
                  if (e) {
                    if ('string' == typeof e) return re(e, t)
                    var n = Object.prototype.toString.call(e).slice(8, -1)
                    return (
                      'Object' === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? re(e, t)
                        : void 0
                    )
                  }
                })(t, n) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  )
                })()),
            o = r[0],
            i = r[1]
          return o >= 16.344 && o <= 32.8301 && i >= -34.8191 && i <= -22.1277
        },
        ie = function (e) {
          var t = e.name,
            n = e.options
          return '\n  \n  <div class="bash--radio-options">\n  '.concat(
            (void 0 === n ? [] : n)
              .map(function (e) {
                var n = e.value,
                  r = e.label,
                  o = e.checked,
                  i = void 0 !== o && o,
                  a = e.disabled,
                  s = void 0 !== a && a
                return '\n      <label class="bash--radio-option" id="radio-label-'
                  .concat(t, '-')
                  .concat(n, '">\n        <input type="radio" \n          ')
                  .concat(i ? "checked='checked'" : '', ' \n          ')
                  .concat(
                    s ? "disabled='disabled'" : '',
                    ' \n          value="'
                  )
                  .concat(null != n ? n : '', '" \n          name="')
                  .concat(t, '" \n          id="radio-')
                  .concat(t, '-')
                  .concat(
                    n,
                    '"\n        />\n          <span class="radio-icon"></span> \n          '
                  )
                  .concat(
                    r ? '<span class="radio-label">'.concat(r, '</span>') : '',
                    '\n      </label>\n    '
                  )
              })
              .join(''),
            '\n   \n  </div>\n  '
          )
        }
      var ae = function (e, t) {
        return (
          JSON.stringify({
            street: (null == e ? void 0 : e.street) || '',
            neighborhood: (null == e ? void 0 : e.neighborhood) || '',
            city: (null == e ? void 0 : e.city) || '',
            postalCode: (null == e ? void 0 : e.postalCode) || '',
          }) ===
          JSON.stringify({
            street: (null == t ? void 0 : t.street) || '',
            neighborhood: (null == t ? void 0 : t.neighborhood) || '',
            city: (null == t ? void 0 : t.city) || '',
            postalCode: (null == t ? void 0 : t.postalCode) || '',
          })
        )
      }
      const se = function (e) {
        var t
        if (!e) return ''
        var n = e.businessName,
          r = e.number,
          o = e.street,
          i = e.neighborhood,
          a = e.postalCode,
          s = e.city,
          c = e.receiverName,
          u = e.addressName,
          l = e.complement,
          d = e.receiverPhone,
          h = [
            ''
              .concat(n ? ''.concat(n, ', ') : '', ' ')
              .concat(r ? ''.concat(r.trim(), ' ') : '')
              .concat(o),
            null != i ? i : s,
            a,
          ]
            .join(', ')
            .trim(),
          p = [c, J(Z(d || l))].join(' - '),
          f =
            null === (t = window) ||
            void 0 === t ||
            null === (t = t.vtexjs) ||
            void 0 === t ||
            null === (t = t.checkout) ||
            void 0 === t ||
            null === (t = t.orderForm) ||
            void 0 === t ||
            null === (t = t.shippingData) ||
            void 0 === t
              ? void 0
              : t.address,
          v = encodeURIComponent(JSON.stringify(e))
        return '\n<label id="address-'
          .concat(u, '" class="bash--address-listing" data-address="')
          .concat(v, '">\n  <div class="address-radio">\n  ')
          .concat(
            ie({
              name: 'selected-address',
              options: [{ checked: ae(e, f), value: u }],
            }),
            '\n  </div>\n  <div class="address-text">\n    <div>'
          )
          .concat(h, '</div>    \n    <div>')
          .concat(
            p,
            '</div>  \n  </div>\n  <div class="address-edit">\n    <a href="#" data-view="address-edit" data-content="address-'
          )
          .concat(u, '">\n      Edit\n    </a>\n  </div>\n</label>\n')
      }
      function ce(e) {
        return (
          (ce =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          ce(e)
        )
      }
      function ue(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ('object' !== ce(e) || null === e) return e
                var n = e[Symbol.toPrimitive]
                if (void 0 !== n) {
                  var r = n.call(e, t)
                  if ('object' !== ce(r)) return r
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  )
                }
                return String(e)
              })(r.key, 'string')),
              'symbol' === ce(o) ? o : String(o)),
              r
            )
        }
        var o
      }
      function le(e) {
        return (
          (le =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          le(e)
        )
      }
      function de(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? de(Object(n), !0).forEach(function (t) {
                pe(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : de(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function pe(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== le(e) || null === e) return e
              var n = e[Symbol.toPrimitive]
              if (void 0 !== n) {
                var r = n.call(e, t)
                if ('object' !== le(r)) return r
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === le(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function fe(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function ve() {
        ve = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          s = o.toStringTag || '@@toStringTag'
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          c({}, '')
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n)
          }
        }
        function u(e, t, n, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            s = new S(o || [])
          return r(a, '_invoke', { value: _(e, n, s) }), a
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = u
        var d = {}
        function h() {}
        function p() {}
        function f() {}
        var v = {}
        c(v, i, function () {
          return this
        })
        var m = Object.getPrototypeOf,
          y = m && m(m(O([])))
        y && y !== t && n.call(y, i) && (v = y)
        var g = (f.prototype = h.prototype = Object.create(v))
        function b(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function w(e, t) {
          function o(r, i, a, s) {
            var c = l(e[r], e, i)
            if ('throw' !== c.type) {
              var u = c.arg,
                d = u.value
              return d && 'object' == le(d) && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    function (e) {
                      o('next', e, a, s)
                    },
                    function (e) {
                      o('throw', e, a, s)
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      ;(u.value = e), a(u)
                    },
                    function (e) {
                      return o('throw', e, a, s)
                    }
                  )
            }
            s(c.arg)
          }
          var i
          r(this, '_invoke', {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  o(e, n, t, r)
                })
              }
              return (i = i ? i.then(r, r) : r())
            },
          })
        }
        function _(e, t, n) {
          var r = 'suspendedStart'
          return function (o, i) {
            if ('executing' === r)
              throw new Error('Generator is already running')
            if ('completed' === r) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate
              if (a) {
                var s = x(a, n)
                if (s) {
                  if (s === d) continue
                  return s
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg)
                n.dispatchException(n.arg)
              } else 'return' === n.method && n.abrupt('return', n.arg)
              r = 'executing'
              var c = l(e, t, n)
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue
                return { value: c.arg, done: n.done }
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg))
            }
          }
        }
        function x(e, t) {
          var n = t.method,
            r = e.iterator[n]
          if (void 0 === r)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            )
          var o = l(r, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d)
        }
        function E(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function k(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function S(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0)
        }
        function O(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(le(e) + ' is not iterable')
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise)
            var a = new w(u(t, n, r, o), i)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this
          }),
          c(g, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = []
            for (var r in t) n.push(r)
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in t) return (e.value = r), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = O),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function r(n, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return r('end')
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc')
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r]
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                d
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.tryLoc === e) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var o = r.arg
                    k(n)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              )
            },
          }),
          e
        )
      }
      function me(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
      }
      function ye(e) {
        return function () {
          var t = this,
            n = arguments
          return new Promise(function (r, o) {
            var i = e.apply(t, n)
            function a(e) {
              me(i, r, o, a, s, 'next', e)
            }
            function s(e) {
              me(i, r, o, a, s, 'throw', e)
            }
            a(void 0)
          })
        }
      }
      var ge = new ((function () {
          function e() {
            var t = this
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this.indexedDB =
                window.indexedDB ||
                window.webkitIndexedDB ||
                window.mozIndexedDB ||
                window.msIndexedDB ||
                window.shimIndexedDB),
              (this.checkoutDB = indexedDB.open('checkoutDB', 1.2)),
              (this.checkoutDB.onerror = function (e) {
                throw (
                  (console.error('CheckoutDB Error', { event: e }),
                  new Error('Could not load checkoutDB'))
                )
              }),
              (this.checkoutDB.onupgradeneeded = function () {
                var e = t.checkoutDB.result.createObjectStore('addresses', {
                  keyPath: 'addressName',
                })
                e.createIndex('address_street', ['street'], { unique: !1 }),
                  e.createIndex('address_addressName', ['addressName'], {
                    unique: !0,
                  }),
                  e.createIndex(
                    'address_street_suburb_city_postal',
                    ['street', 'neighborhood', 'city', 'postalCode'],
                    { unique: !0 }
                  )
              }),
              (this.checkoutDB.onsuccess = function () {
                var e = t.checkoutDB.result.transaction(
                  'addresses',
                  'readwrite'
                )
                ;(t.addresses = e.objectStore('addresses')),
                  (e.oncomplete = function () {})
              })
          }
          var t, n
          return (
            (t = e),
            (n = [
              {
                key: 'store',
                value: function () {
                  return this.checkoutDB.result
                    .transaction('addresses', 'readwrite')
                    .objectStore('addresses')
                },
              },
              {
                key: 'loadAddresses',
                value: function (e) {
                  var t = this,
                    n = e.map(function (e) {
                      return t.addOrUpdateAddress(e)
                    })
                  return Promise.all(n).then(function (e) {
                    return e
                  })
                },
              },
              {
                key: 'addOrUpdateAddress',
                value: function (e) {
                  var t = this
                  return new Promise(function (n, r) {
                    var o = t.store().put(e)
                    ;(o.onsuccess = function () {
                      n({ success: !0, addressId: o.result })
                    }),
                      (o.onerror = function (e) {
                        var t
                        r(
                          new Error({
                            sucess: !1,
                            error:
                              null == e ||
                              null === (t = e.target) ||
                              void 0 === t
                                ? void 0
                                : t.error,
                          })
                        )
                      })
                  })
                },
              },
              {
                key: 'getAddresses',
                value: function () {
                  var e = this
                  return new Promise(function (t) {
                    var n = e.store().getAll()
                    ;(n.onsuccess = function () {
                      return t(n.result)
                    }),
                      (n.onerror = function () {
                        console.error(
                          'Something wrong with getAddresses ? ...'
                        ),
                          t([])
                      })
                  })
                },
              },
              {
                key: 'getAddress',
                value: function (e) {
                  var t = this
                  return new Promise(function (n) {
                    var r = t.store().get(e)
                    ;(r.onsuccess = function () {
                      return n(r.result)
                    }),
                      (r.onerror = function () {
                        console.error('Something wrong with getAddress ? ...'),
                          n([])
                      })
                  })
                },
              },
              {
                key: 'deleteAddress',
                value: function (e) {
                  var t = this.addresses.delete(e)
                  t.onsuccess = function () {
                    return t.result
                  }
                },
              },
              {
                key: 'clearData',
                value: function () {
                  var e = this
                  return new Promise(function (t) {
                    var n = e.store().clear()
                    ;(n.onsuccess = function () {
                      return t(n.result)
                    }),
                      (n.onerror = function () {
                        console.error('Something wrong with clearData ? ...'),
                          t([])
                      })
                  })
                },
              },
            ]) && ue(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e
          )
        })())(),
        be = (function () {
          var e = ye(
            ve().mark(function e() {
              var t, n, r, o, i, a, s, c
              return ve().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), ge.getAddresses()
                    case 2:
                      if (!((n = e.sent).length > 0)) {
                        e.next = 5
                        break
                      }
                      return e.abrupt('return', { data: n })
                    case 5:
                      return (
                        (r =
                          null === (t = window) ||
                          void 0 === t ||
                          null === (t = t.vtexjs) ||
                          void 0 === t ||
                          null === (t = t.checkout) ||
                          void 0 === t ||
                          null === (t = t.orderForm) ||
                          void 0 === t
                            ? void 0
                            : t.clientProfileData),
                        (o = r.email),
                        (i = [
                          'id',
                          'addressType',
                          'addressQuery',
                          'addressName',
                          'reference',
                          'number',
                          'geolocation',
                          'receiverName',
                          'receiverPhone',
                          'complement',
                          'street',
                          'businessName',
                          'companyBuilding',
                          'neighborhood',
                          'city',
                          'postalCode',
                          'state',
                          'country',
                          'tvID',
                          'geoCoordinate',
                        ].join(',')),
                        (a = K({ cookie: !0, cache: !0, json: !1 })),
                        (s = { headers: a, credentials: 'include' }),
                        (c = Date.now()),
                        e.abrupt(
                          'return',
                          fetch(
                            ''
                              .concat(g, 'masterdata/addresses?t=')
                              .concat(c, '&_fields=')
                              .concat(i, '&_where=')
                              .concat(
                                encodeURIComponent('userIdQuery='.concat(o))
                              ),
                            s
                          )
                            .then(function (e) {
                              return e.json()
                            })
                            .then(
                              (function () {
                                var e = ye(
                                  ve().mark(function e(t) {
                                    return ve().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              t.data &&
                                                ge.loadAddresses(t.data),
                                              e.abrupt('return', t)
                                            )
                                          case 2:
                                          case 'end':
                                            return e.stop()
                                        }
                                    }, e)
                                  })
                                )
                                return function (t) {
                                  return e.apply(this, arguments)
                                }
                              })()
                            )
                            .catch(function (e) {
                              return H(
                                'GET_ADDRESSES_ERROR: '.concat(
                                  null == e ? void 0 : e.message
                                )
                              )
                            })
                        )
                      )
                    case 11:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        we = (function () {
          var e = ye(
            ve().mark(function e(t, n) {
              var r, o, i, a, s
              return ve().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = {}),
                        (o = K({ cookie: !0, cache: !0, json: !1 })),
                        (i = { headers: o, credentials: 'include' }),
                        (e.next = 5),
                        fetch(
                          ''
                            .concat(g, 'masterdata/addresses/')
                            .concat(n, '&_where=addressName=')
                            .concat(t, '&timestamp=')
                            .concat(Date.now()),
                          i
                        )
                          .then(function (e) {
                            return e.json()
                          })
                          .catch(function (e) {
                            return H(
                              'GET_ADDRESS_ERROR: '.concat(
                                null == e ? void 0 : e.message
                              )
                            )
                          })
                      )
                    case 5:
                      return (
                        (a = e.sent) &&
                          !a.error &&
                          a.data &&
                          a.data.length > 0 &&
                          ((c = a.data),
                          (u = 1),
                          (s =
                            (function (e) {
                              if (Array.isArray(e)) return e
                            })(c) ||
                            (function (e, t) {
                              var n =
                                null == e
                                  ? null
                                  : ('undefined' != typeof Symbol &&
                                      e[Symbol.iterator]) ||
                                    e['@@iterator']
                              if (null != n) {
                                var r,
                                  o,
                                  i,
                                  a,
                                  s = [],
                                  c = !0,
                                  u = !1
                                try {
                                  if (((i = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return
                                    c = !1
                                  } else
                                    for (
                                      ;
                                      !(c = (r = i.call(n)).done) &&
                                      (s.push(r.value), s.length !== t);
                                      c = !0
                                    );
                                } catch (e) {
                                  ;(u = !0), (o = e)
                                } finally {
                                  try {
                                    if (
                                      !c &&
                                      null != n.return &&
                                      ((a = n.return()), Object(a) !== a)
                                    )
                                      return
                                  } finally {
                                    if (u) throw o
                                  }
                                }
                                return s
                              }
                            })(c, u) ||
                            (function (e, t) {
                              if (e) {
                                if ('string' == typeof e) return fe(e, t)
                                var n = Object.prototype.toString
                                  .call(e)
                                  .slice(8, -1)
                                return (
                                  'Object' === n &&
                                    e.constructor &&
                                    (n = e.constructor.name),
                                  'Map' === n || 'Set' === n
                                    ? Array.from(e)
                                    : 'Arguments' === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        n
                                      )
                                    ? fe(e, t)
                                    : void 0
                                )
                              }
                            })(c, u) ||
                            (function () {
                              throw new TypeError(
                                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                              )
                            })()),
                          (r = s[0])),
                        e.abrupt('return', r)
                      )
                    case 8:
                    case 'end':
                      return e.stop()
                  }
                var c, u
              }, e)
            })
          )
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })(),
        _e = (function () {
          var e = ye(
            ve().mark(function e(t) {
              var n, r, o, i, a, s
              return ve().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r =
                          window.vtexjs.checkout.orderForm.clientProfileData
                            .email),
                        t)
                      ) {
                        e.next = 3
                        break
                      }
                      return e.abrupt(
                        'return',
                        Promise.reject(new Error('No address provided.'))
                      )
                    case 3:
                      if (!t.addressName) {
                        e.next = 9
                        break
                      }
                      return (e.next = 6), we(t.addressName, '?_fields=id')
                    case 6:
                      ;(e.t0 = e.sent), (e.next = 10)
                      break
                    case 9:
                      e.t0 = {}
                    case 10:
                      return (
                        (o = e.t0),
                        (n =
                          null != o && o.id
                            ? ''.concat(g, 'masterdata/address/').concat(o.id)
                            : ''.concat(g, 'masterdata/addresses')),
                        (i = he({ userId: r }, t)),
                        o.id ||
                          (i.addressName =
                            t.addressId || 'address-'.concat(Date.now())),
                        (a = K({ cookie: !0, cache: !0, json: !0 })),
                        (s = {
                          method: 'PATCH',
                          headers: a,
                          body: JSON.stringify(i),
                          credentials: 'include',
                        }),
                        (e.next = 18),
                        fetch(n, s)
                          .then(function (e) {
                            return 204 !== e.status ? e.json() : e
                          })
                          .then(function (e) {
                            return e
                          })
                          .catch(function (e) {
                            return H(
                              'SAVE_ADDRESS_ERROR: '.concat(
                                null == e ? void 0 : e.message
                              )
                            )
                          })
                      )
                    case 18:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        xe = function (e) {
          var t = $('#address-'.concat(e.addressName))
          t.length
            ? (t.after(se(e)), t.remove(), (t = null))
            : $('#bash-address-list').append(se(e)),
            $('input[type="radio"][name="selected-address"]:checked').attr(
              'checked',
              !1
            ),
            $(
              'input[type="radio"][name="selected-address"][value="'.concat(
                e.addressName,
                '"]'
              )
            ).attr('checked', !0)
        },
        Ee = (function () {
          var e = ye(
            ve().mark(function e(t) {
              var n
              return ve().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      t.addressName ||
                        ((n = t.street
                          .replace(/[^a-zA-Z0-9]/g, ' ')
                          .trim()
                          .replace(/\s/g, '-')
                          .toLowerCase()),
                        (t.addressName = ''
                          .concat(Date.now(), '-')
                          .concat(n)
                          .substring(0, 50))),
                        t.addressId || (t.addressId = t.addressName),
                        ge.addOrUpdateAddress(t).then(function () {
                          return xe(t)
                        }),
                        _e(t)
                    case 4:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        ke = (function () {
          var e = ye(
            ve().mark(function e(t) {
              return ve().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', ge.getAddress(t))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        Se = (function () {
          var e = ye(
            ve().mark(function e() {
              return ve().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', ge.clearData())
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        Oe = (function () {
          var e = ye(
            ve().mark(function e(t, n) {
              var r,
                o,
                i,
                a,
                s,
                c = arguments
              return ve().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = c.length > 2 && void 0 !== c[2] && c[2]),
                        (o = window.vtexjs.checkout.orderForm.orderFormId),
                        (i = '/api/checkout/pub/orderForm/'
                          .concat(o, '/customData/')
                          .concat(t)),
                        (a = JSON.stringify(
                          he(
                            he({}, n),
                            r && { sameAddress: new Boolean(n.sameAddress) }
                          )
                        )),
                        (s = {
                          method: 'PUT',
                          headers: { 'Content-Type': 'application/json' },
                          body: a,
                        }),
                        e.abrupt('return', fetch(i, s))
                      )
                    case 6:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })(),
        je = function (e) {
          var t,
            n =
              null === (t = window) ||
              void 0 === t ||
              null === (t = t.vtexjs) ||
              void 0 === t ||
              null === (t = t.checkout) ||
              void 0 === t ||
              null === (t = t.orderForm) ||
              void 0 === t
                ? void 0
                : t.customData,
            r = {}
          if ((null == n ? void 0 : n.customApps.length) > 0) {
            var o = n.customApps.find(function (t) {
              return t.id === e
            })
            r = null == o ? void 0 : o.fields
          }
          return r
        },
        Le = function (e) {
          var t,
            n,
            r = e.text,
            o = e.fields
          if (!o.itemIndex) return ''
          var i =
            null === (t = window.vtexjs.checkout) ||
            void 0 === t ||
            null === (t = t.orderForm.items) ||
            void 0 === t
              ? void 0
              : t[o.itemIndex]
          if (!i) return ''
          var a = null == i ? void 0 : i.imageUrl
          return ' \n<div id="bash-delivery-error" class="notification error" alt="'
            .concat(
              null !== (n = null == o ? void 0 : o.skuName) && void 0 !== n
                ? n
                : '',
              '" >\n   \x3c!---<div class="icon"></div>---\x3e\n   '
            )
            .concat(
              a ? '<img src="'.concat(a, '" style=" float: right; " />') : '',
              '\n   <div class="notification-content">\n      <h3>Address error '
            )
            .concat(
              null != o && o.skuName
                ? '- '.concat(null == o ? void 0 : o.skuName)
                : '',
              '</h3>\n      <p>'
            )
            .concat(
              r,
              '</p>\n      <p>Check the postal code of your address, or \n      <a href="#" \n        class="remove-cart-item"\n        style="color: white; text-decoration: underline"\n        data-index="'
            )
            .concat(
              o.itemIndex,
              '">remove this item from your cart</a>.\n      </p>\n   </div>  \n</div>  \n'
            )
        },
        Ce = function (e) {
          var t = e.text
          return "<div class='alert-container'>\n      <p>".concat(
            t,
            '</p>\n    </div>\n  '
          )
        },
        $e = [
          'receiverName',
          'street',
          'neighborhood',
          'state',
          'city',
          'country',
          'postalCode',
          'receiverPhone',
        ],
        Pe = [
          'idOrPassport',
          'sameAddress',
          'fullName',
          'streetAddress',
          'suburb',
          'city',
          'postalCode',
          'province',
        ],
        Ne = ['tvID'],
        Te = [
          'residential',
          'inStore',
          'commercial',
          'giftRegistry',
          'pickup',
          'search',
        ]
      function Fe(e) {
        return (
          (Fe =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Fe(e)
        )
      }
      function Ie(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Be(e)
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e)
          })(e) ||
          Re(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function De() {
        De = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          s = o.toStringTag || '@@toStringTag'
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          c({}, '')
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n)
          }
        }
        function u(e, t, n, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            s = new S(o || [])
          return r(a, '_invoke', { value: _(e, n, s) }), a
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = u
        var d = {}
        function h() {}
        function p() {}
        function f() {}
        var v = {}
        c(v, i, function () {
          return this
        })
        var m = Object.getPrototypeOf,
          y = m && m(m(O([])))
        y && y !== t && n.call(y, i) && (v = y)
        var g = (f.prototype = h.prototype = Object.create(v))
        function b(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function w(e, t) {
          function o(r, i, a, s) {
            var c = l(e[r], e, i)
            if ('throw' !== c.type) {
              var u = c.arg,
                d = u.value
              return d && 'object' == Fe(d) && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    function (e) {
                      o('next', e, a, s)
                    },
                    function (e) {
                      o('throw', e, a, s)
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      ;(u.value = e), a(u)
                    },
                    function (e) {
                      return o('throw', e, a, s)
                    }
                  )
            }
            s(c.arg)
          }
          var i
          r(this, '_invoke', {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  o(e, n, t, r)
                })
              }
              return (i = i ? i.then(r, r) : r())
            },
          })
        }
        function _(e, t, n) {
          var r = 'suspendedStart'
          return function (o, i) {
            if ('executing' === r)
              throw new Error('Generator is already running')
            if ('completed' === r) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate
              if (a) {
                var s = x(a, n)
                if (s) {
                  if (s === d) continue
                  return s
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg)
                n.dispatchException(n.arg)
              } else 'return' === n.method && n.abrupt('return', n.arg)
              r = 'executing'
              var c = l(e, t, n)
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue
                return { value: c.arg, done: n.done }
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg))
            }
          }
        }
        function x(e, t) {
          var n = t.method,
            r = e.iterator[n]
          if (void 0 === r)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            )
          var o = l(r, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d)
        }
        function E(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function k(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function S(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0)
        }
        function O(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(Fe(e) + ' is not iterable')
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise)
            var a = new w(u(t, n, r, o), i)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this
          }),
          c(g, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = []
            for (var r in t) n.push(r)
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in t) return (e.value = r), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = O),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function r(n, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return r('end')
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc')
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r]
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                d
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.tryLoc === e) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var o = r.arg
                    k(n)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              )
            },
          }),
          e
        )
      }
      function Ae(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
      }
      function Re(e, t) {
        if (e) {
          if ('string' == typeof e) return Be(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Be(e, t)
              : void 0
          )
        }
      }
      function Be(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function Ge(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Me(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== Fe(e) || null === e) return e
              var n = e[Symbol.toPrimitive]
              if (void 0 !== n) {
                var r = n.call(e, t)
                if ('object' !== Fe(r)) return r
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === Fe(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      var qe = function () {
          var e
          null === (e = document.querySelector('.bash--delivery-container')) ||
            void 0 === e ||
            e.classList.add('shimmer')
        },
        Ve = function () {
          var e, t
          null === (e = document.querySelector('.delivery-group-content')) ||
            void 0 === e ||
            null === (e = e.classList) ||
            void 0 === e ||
            e.add('shimmer'),
            null ===
              (t = document.querySelector('.vtex-omnishipping-1-x-ask')) ||
              void 0 === t ||
              null === (t = t.classList) ||
              void 0 === t ||
              t.add('shimmer')
        },
        Ue = function (e) {
          switch (e) {
            case 'Select':
              return ''
            case 'Western Cape':
              return 'WC'
            case 'Easter Cape':
              return 'EC'
            case 'Gauteng':
              return 'GP'
            case 'KwaZulu-Natal':
            case 'KwaZulu Natal':
              return 'KZN'
            case 'Northern Cape':
              return 'NC'
            case 'Limpopo':
              return 'LP'
            case 'Mpumalanga':
              return 'MP'
            case 'North West':
              return 'NW'
            case 'Freestate':
            case 'Free State':
              return 'FS'
            default:
              return e
          }
        },
        Ye = function (e) {
          var t,
            n,
            r,
            o,
            i = e.preferred,
            a = void 0 === i ? void 0 : i,
            s = e.type,
            c = void 0 === s ? 'delivery' : s,
            u =
              null === (t = window) ||
              void 0 === t ||
              null === (t = t.vtexjs) ||
              void 0 === t ||
              null === (t = t.checkout) ||
              void 0 === t ||
              null === (t = t.orderForm) ||
              void 0 === t ||
              null === (t = t.clientProfileData) ||
              void 0 === t
                ? void 0
                : t.firstName,
            l =
              null === (n = window) ||
              void 0 === n ||
              null === (n = n.vtexjs) ||
              void 0 === n ||
              null === (n = n.checkout) ||
              void 0 === n ||
              null === (n = n.orderForm) ||
              void 0 === n ||
              null === (n = n.clientProfileData) ||
              void 0 === n
                ? void 0
                : n.lastName,
            d =
              null === (r = window) ||
              void 0 === r ||
              null === (r = r.vtexjs) ||
              void 0 === r ||
              null === (r = r.checkout) ||
              void 0 === r ||
              null === (r = r.orderForm) ||
              void 0 === r ||
              null === (r = r.shippingData) ||
              void 0 === r ||
              null === (r = r.address) ||
              void 0 === r
                ? void 0
                : r.receiverName,
            h = ''
              .concat(null != u ? u : '', ' ')
              .concat(null != l ? l : '')
              .trim()
          return 'collect' === c
            ? a || d || h || ''
            : a ||
                (null === (o = document.getElementById('client-first-name')) ||
                void 0 === o
                  ? void 0
                  : o.value) ||
                h ||
                ''
        },
        We = function (e) {
          var t,
            n,
            r,
            o,
            i,
            a = e.number,
            s = e.street,
            c = e.addressType,
            u = e.businessName,
            l = e.companyBuilding,
            h = e.neighborhood,
            p = e.postalCode,
            f = e.state,
            v = e.city,
            m = e.receiverName,
            y = e.receiverPhone,
            g = e.complement,
            b = e.id,
            w = e.addressId,
            _ = e.addressName,
            x = e.geoCoordinate
          null === (t = document.getElementById('bash--address-form')) ||
            void 0 === t ||
            t.reset(),
            te()
          try {
            var E =
              ((o = JSON.parse(JSON.stringify(x))),
              (i = 2),
              (function (e) {
                if (Array.isArray(e)) return e
              })(o) ||
                (function (e, t) {
                  var n =
                    null == e
                      ? null
                      : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                        e['@@iterator']
                  if (null != n) {
                    var r,
                      o,
                      i,
                      a,
                      s = [],
                      c = !0,
                      u = !1
                    try {
                      if (((i = (n = n.call(e)).next), 0 === t)) {
                        if (Object(n) !== n) return
                        c = !1
                      } else
                        for (
                          ;
                          !(c = (r = i.call(n)).done) &&
                          (s.push(r.value), s.length !== t);
                          c = !0
                        );
                    } catch (e) {
                      ;(u = !0), (o = e)
                    } finally {
                      try {
                        if (
                          !c &&
                          null != n.return &&
                          ((a = n.return()), Object(a) !== a)
                        )
                          return
                      } finally {
                        if (u) throw o
                      }
                    }
                    return s
                  }
                })(o, i) ||
                Re(o, i) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  )
                })())
            ;(r = E[0]),
              (n = E[1]),
              oe([r, n]) || (oe[r] ? (n = r = n) : ((r = 0), (n = 0)))
          } catch (t) {
            console.warn('Could not parse geo coords', {
              address: e,
              geoCoordinate: x,
            })
          }
          m &&
            (document.getElementById('bash--input-receiverName').value =
              null != m ? m : ''),
            g &&
              (document.getElementById('bash--input-complement').value =
                null != g ? g : ''),
            (b || w) &&
              (document.getElementById('bash--input-addressId').value = b || w),
            _ && (document.getElementById('bash--input-addressName').value = _)
          var k = ''
            .concat(a ? ''.concat(a, ' ') : '')
            .concat(s)
            .replace(', '.concat(l), '')
          'commercial' === c &&
            ($('#radio-addressType-business').click(), ee({ focus: !1 })),
            u &&
              (document.getElementById('bash--input-businessName').value = u),
            (document.getElementById('bash--input-number').value = ''),
            (document.getElementById('bash--input-street').value = k || ''),
            (document.getElementById('bash--input-companyBuilding').value =
              l || ''),
            (document.getElementById('bash--input-neighborhood').value =
              h || ''),
            (document.getElementById('bash--input-city').value = v || ''),
            (document.getElementById('bash--input-postalCode').value = p || ''),
            (document.getElementById('bash--input-state').value = Ue(f)),
            (document.getElementById('bash--input-lat').value = n || ''),
            (document.getElementById('bash--input-lng').value = r || '')
          var S = je(d)
          m &&
            (document.getElementById('bash--input-receiverName').value =
              null != m ? m : ''),
            g &&
              (document.getElementById('bash--input-complement').value =
                null != g ? g : ''),
            (document.getElementById('bash--input-receiverPhone').value = W({
              preferred: y,
              type: 'delivery',
              fields: S,
            })),
            $(':invalid').trigger('change')
        },
        Ze = function (e) {
          setTimeout(function () {
            var t,
              n = document.querySelectorAll('.pac-container'),
              r = document.querySelectorAll(
                ".pac-container[style*='display: none']"
              )
            ;(null == n ? void 0 : n.length) ===
              (null == r ? void 0 : r.length) &&
            (null === (t = e.target) ||
            void 0 === t ||
            null === (t = t.value) ||
            void 0 === t
              ? void 0
              : t.length) > 3
              ? $('#address-search-field-container:not(.no-results)').addClass(
                  'no-results'
                )
              : $('#address-search-field-container.no-results').removeClass(
                  'no-results'
                )
          }, 250)
        },
        Je = function () {
          if (window.google) {
            var e = document.getElementById('bash--input-address-search')
            if (e) {
              var t = new window.google.maps.places.Autocomplete(e, {
                componentRestrictions: { country: 'ZA' },
              })
              window.google.maps.event.addListener(
                t,
                'place_changed',
                function () {
                  var n = t.getPlace()
                  !(function (e) {
                    var t,
                      n = e.street,
                      r = e.neighborhood,
                      o = e.postalCode,
                      i = e.state,
                      a = e.city,
                      s = e.lat,
                      c = e.lng
                    null ===
                      (t = document.getElementById('bash--address-form')) ||
                      void 0 === t ||
                      t.reset(),
                      (document.getElementById('bash--input-addressId').value =
                        ''),
                      (document.getElementById(
                        'bash--input-addressName'
                      ).value = ''),
                      (document.getElementById('bash--input-number').value =
                        '  '),
                      (document.getElementById('bash--input-street').value =
                        null != n ? n : ''),
                      (document.getElementById(
                        'bash--input-neighborhood'
                      ).value = null != r ? r : ''),
                      (document.getElementById('bash--input-city').value =
                        null != a ? a : ''),
                      (document.getElementById('bash--input-postalCode').value =
                        null != o ? o : ''),
                      (document.getElementById('bash--input-state').value =
                        Ue(i)),
                      (document.getElementById('bash--input-lat').value =
                        s || ''),
                      (document.getElementById('bash--input-lng').value =
                        c || ''),
                      $(':invalid').trigger('change')
                  })(
                    (function (e, t) {
                      var n, r, o, i, a, s
                      if (!e || e.length < 1) return {}
                      var c =
                          null ===
                            (n = e.find(function (e) {
                              return e.types.includes('street_number')
                            })) || void 0 === n
                            ? void 0
                            : n.long_name,
                        u =
                          null ===
                            (r = e.find(function (e) {
                              return e.types.includes('route')
                            })) || void 0 === r
                            ? void 0
                            : r.long_name,
                        l =
                          null ===
                            (o = e.find(function (e) {
                              return e.types.includes('sublocality')
                            })) || void 0 === o
                            ? void 0
                            : o.long_name,
                        d =
                          null ===
                            (i = e.find(function (e) {
                              return e.types.includes('locality')
                            })) || void 0 === i
                            ? void 0
                            : i.long_name,
                        h =
                          null ===
                            (a = e.find(function (e) {
                              return e.types.includes('postal_code')
                            })) || void 0 === a
                            ? void 0
                            : a.long_name,
                        p =
                          null ===
                            (s = e.find(function (e) {
                              return e.types.includes(
                                'administrative_area_level_1'
                              )
                            })) || void 0 === s
                            ? void 0
                            : s.long_name,
                        f = { lat: '', lng: '' }
                      return (
                        t &&
                          ((f.lat = t.location.lat()),
                          (f.lng = t.location.lng())),
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {}
                            t % 2
                              ? Ge(Object(n), !0).forEach(function (t) {
                                  Me(e, t, n[t])
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n)
                                )
                              : Ge(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t)
                                  )
                                })
                          }
                          return e
                        })(
                          {
                            street: ''
                              .concat(null != c ? c : '', ' ')
                              .concat(null != u ? u : '')
                              .trim(),
                            neighborhood: l,
                            city: d,
                            postalCode: h,
                            state: p,
                          },
                          f
                        )
                      )
                    })(n.address_components, n.geometry)
                  ),
                    window.postMessage({
                      action: 'setDeliveryView',
                      view: 'address-form',
                    }),
                    (e.value = '')
                }
              ),
                null == e || e.addEventListener('keyup', Ze)
            }
          }
        },
        He = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : '',
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          if (e) {
            for (var o = 0; o < t.length; o++) {
              var i = 'bash--input-'.concat(n).concat(t[o])
              !document.getElementById(i) ||
                (!e[t[o]] && !r) ||
                (document.getElementById(i).value && !r) ||
                (document.getElementById(i).value = e[t[o]])
            }
            $(':invalid').trigger('change')
          }
        },
        Ke = function () {
          var e,
            t = window.vtexjs.checkout.orderForm.shippingData.address
          if (
            (null ===
              (e = document.getElementById('bash--input-rica_streetAddress')) ||
              void 0 === e ||
              !e.value) &&
            t
          ) {
            ;(t.fullName = Ye({ type: 'delivery' })),
              (t.streetAddress = t.street),
              (t.suburb = t.neighborhood),
              (t.province = t.state),
              He(t, Pe, 'rica_')
            var n = je(h)
            n.streetAddress && He(n, Pe, 'rica_', !0)
          }
        },
        ze = (function () {
          var e,
            t =
              ((e = De().mark(function e() {
                var t
                return De().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        ;(t = je(p)), He(t, Ne, 'tv')
                      case 2:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })),
              function () {
                var t = this,
                  n = arguments
                return new Promise(function (r, o) {
                  var i = e.apply(t, n)
                  function a(e) {
                    Ae(i, r, o, a, s, 'next', e)
                  }
                  function s(e) {
                    Ae(i, r, o, a, s, 'throw', e)
                  }
                  a(void 0)
                })
              })
          return function () {
            return t.apply(this, arguments)
          }
        })(),
        Qe = function (e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = window.vtexjs.checkout.orderForm.items,
            r = Q(n),
            o = r.hasTVs,
            i = r.hasSimCards,
            a = $e,
            s = []
          o && t && (a = [].concat(Ie(a), Ie(Ne))),
            i && t && (a = [].concat(Ie(a), Ie(Pe)))
          for (var c = 0; c < a.length; c++) e[a[c]] || s.push(a[c])
          return (
            !a.includes('receiverPhone') ||
              s.includes('receiverPhone') ||
              z(e.receiverPhone) ||
              (s.push('receiverPhone'),
              $('#bash--input-receiverPhone').addClass('invalid'),
              $('#bash--label-receiverPhone').focus()),
            { isValid: !s.length, invalidFields: s }
          )
        },
        Xe = function () {
          var e = window.vtexjs.checkout.orderForm.items,
            t = Q(e),
            n = t.hasTVs,
            r = t.hasSimCards,
            o = t.hasFurnitureMixed,
            i = '#shipping-data'
          n
            ? $(''.concat(i, ':not(.has-tv)')).addClass('has-tv')
            : $(''.concat(i, '.has-tv')).removeClass('has-tv'),
            r
              ? $(''.concat(i, ':not(.has-rica)')).addClass('has-rica')
              : $(''.concat(i, '.has-rica')).removeClass('has-rica'),
            o
              ? $(''.concat(i, ':not(.has-furniture-mixed)')).addClass(
                  'has-furniture-mixed'
                )
              : $(''.concat(i, '.has-furniture-mixed')).removeClass(
                  'has-furniture-mixed'
                )
        },
        et = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          if (!($('#bash-delivery-error-container').length < 1)) {
            var t =
              e.length > 0
                ? e.map(function (e) {
                    return Le(e)
                  })
                : ''
            $('#bash-delivery-error-container').html(t),
              e.length > 0 &&
                $('html, body').animate(
                  {
                    scrollTop: $('#bash-delivery-error-container').offset().top,
                  },
                  400
                )
          }
        },
        tt = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'Address saved'
          $('.alert-container').addClass('show'),
            $('.alert-container').slideDown(),
            $('#bash-alert-container').html(Ce({ text: e })),
            setTimeout(function () {
              $('.alert-container').slideUp()
            }, 5e3)
        }
      const nt = function (e) {
        var t = e.eventCategory,
          n = void 0 === t ? 'Checkout_UserErrors' : t,
          r = e.action,
          o = void 0 === r ? '' : r,
          i = e.label,
          a = void 0 === i ? '' : i,
          s = e.description,
          c = void 0 === s ? '' : s,
          u = e.value,
          l = void 0 === u ? void 0 : u,
          d = function () {
            window.dataLayer.push({
              event: 'gaEvent',
              eventCategory: n,
              eventLabel: a,
              eventAction: o,
              eventValue: l,
              eventDescription: c,
            })
          }
        if (!window.dataLayer)
          return $(window).off('gtm.load'), void $(window).on('gtm.load', d)
        d()
      }
      function rt(e) {
        return (
          (rt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          rt(e)
        )
      }
      function ot() {
        ot = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          s = o.toStringTag || '@@toStringTag'
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          c({}, '')
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n)
          }
        }
        function u(e, t, n, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            s = new S(o || [])
          return r(a, '_invoke', { value: _(e, n, s) }), a
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = u
        var d = {}
        function h() {}
        function p() {}
        function f() {}
        var v = {}
        c(v, i, function () {
          return this
        })
        var m = Object.getPrototypeOf,
          y = m && m(m(O([])))
        y && y !== t && n.call(y, i) && (v = y)
        var g = (f.prototype = h.prototype = Object.create(v))
        function b(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function w(e, t) {
          function o(r, i, a, s) {
            var c = l(e[r], e, i)
            if ('throw' !== c.type) {
              var u = c.arg,
                d = u.value
              return d && 'object' == rt(d) && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    function (e) {
                      o('next', e, a, s)
                    },
                    function (e) {
                      o('throw', e, a, s)
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      ;(u.value = e), a(u)
                    },
                    function (e) {
                      return o('throw', e, a, s)
                    }
                  )
            }
            s(c.arg)
          }
          var i
          r(this, '_invoke', {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  o(e, n, t, r)
                })
              }
              return (i = i ? i.then(r, r) : r())
            },
          })
        }
        function _(e, t, n) {
          var r = 'suspendedStart'
          return function (o, i) {
            if ('executing' === r)
              throw new Error('Generator is already running')
            if ('completed' === r) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate
              if (a) {
                var s = x(a, n)
                if (s) {
                  if (s === d) continue
                  return s
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg)
                n.dispatchException(n.arg)
              } else 'return' === n.method && n.abrupt('return', n.arg)
              r = 'executing'
              var c = l(e, t, n)
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue
                return { value: c.arg, done: n.done }
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg))
            }
          }
        }
        function x(e, t) {
          var n = t.method,
            r = e.iterator[n]
          if (void 0 === r)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            )
          var o = l(r, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d)
        }
        function E(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function k(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function S(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0)
        }
        function O(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(rt(e) + ' is not iterable')
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise)
            var a = new w(u(t, n, r, o), i)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this
          }),
          c(g, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = []
            for (var r in t) n.push(r)
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in t) return (e.value = r), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = O),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function r(n, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return r('end')
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc')
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r]
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                d
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.tryLoc === e) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var o = r.arg
                    k(n)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              )
            },
          }),
          e
        )
      }
      function it(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
      }
      function at(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function st(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? at(Object(n), !0).forEach(function (t) {
                ct(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : at(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function ct(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== rt(e) || null === e) return e
              var n = e[Symbol.toPrimitive]
              if (void 0 !== n) {
                var r = n.call(e, t)
                if ('object' !== rt(r)) return r
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === rt(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      var ut,
        lt,
        dt,
        ht,
        pt,
        ft,
        vt =
          ((ut = {
            inCollect: !1,
            pickupSelected: !1,
            validForm: !1,
            runningObserver: !1,
            collectReset: !1,
          }),
          (lt = function () {
            $('#change-pickup-button').length &&
              ($(
                '<button class="vtex-omnishipping-1-x-pickupPointSeeMore button-see-pickup-point btn btn-link" id="tfg-pickup-see-more-button" type="button">Collect Point Details</button>'
              ).appendTo('.vtex-omnishipping-1-x-PickupPoint'),
              $(
                '<button class="vtex-change-pickup button-change-pickup-point" id="tfg-pickup-button" type="button">Change</button>'
              ).appendTo('.vtex-omnishipping-1-x-PickupPoint'),
              $('#change-pickup-button').remove(),
              $('#details-pickup-button').remove()),
              $('.vtex-omnishipping-1-x-ask').length &&
                ($('.vtex-omnishipping-1-x-ask').empty(),
                $(
                  '<div class="pickup-map-container" id="tfg-pickup-container">\n          <div class="pickup-map-icon">\n            <svg class="icon-map" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">\n              <rect width="48" height="48" rx="24" fill="#2424E4"/>\n              <path d="M24.2147 11C21.5065 11.0031 18.9102 12.0802 16.9952 13.9952C15.0802 15.9102 14.0031 18.5065 14 21.2147C14 29.9552 23.2861 36.5599 23.6807 36.8385C23.8389 36.9438 24.0247 37 24.2147 37C24.4047 37 24.5905 36.9438 24.7486 36.8385C25.1433 36.5599 34.4294 29.9552 34.4294 21.2147C34.4263 18.5065 33.3491 15.9102 31.4342 13.9952C29.5192 12.0802 26.9228 11.0031 24.2147 11ZM24.2147 17.5003C24.9493 17.5003 25.6675 17.7181 26.2783 18.1262C26.8891 18.5344 27.3652 19.1145 27.6464 19.7932C27.9275 20.472 28.0011 21.2188 27.8577 21.9393C27.7144 22.6599 27.3607 23.3217 26.8412 23.8412C26.3217 24.3607 25.6599 24.7144 24.9393 24.8577C24.2188 25.0011 23.472 24.9275 22.7932 24.6464C22.1145 24.3652 21.5344 23.8891 21.1262 23.2783C20.7181 22.6675 20.5003 21.9493 20.5003 21.2147C20.5003 20.2296 20.8916 19.2848 21.5882 18.5882C22.2848 17.8916 23.2296 17.5003 24.2147 17.5003Z" fill="#FCFCFC"/>\n            </svg>\n            Find nearby collect points\n            <div class="pickup-map-text">\n              Search for addresses that you frequently use and we’ll locate stores nearby.\n            </div>\n          </div>\n          <button class="pickup-map-geolocation" id="find-pickups-button-new" type="button">\n            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">\n              <path d="M1.12954 2.34666L5.24985 14.2506C5.42563 14.7639 6.15688 14.7498 6.3186 14.2295L7.97798 8.84354C8.00302 8.75549 8.05054 8.67548 8.11588 8.61138C8.18122 8.54727 8.26213 8.50127 8.35063 8.47791L13.7295 6.81854C14.2499 6.65682 14.2639 5.92557 13.7506 5.74979L1.84672 1.62948C1.74671 1.59433 1.6388 1.58815 1.53542 1.61167C1.43205 1.63519 1.33743 1.68745 1.26247 1.76241C1.18751 1.83737 1.13525 1.93199 1.11173 2.03536C1.08822 2.13873 1.09439 2.24665 1.12954 2.34666V2.34666Z" stroke="#2424E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n            Use my current location\n          </button>\n          <button class="pickup-map-manual" id="find-pickups-manually-search">\n            Manually search for an address\n          </button>\n        </div>'
                ).appendTo('.vtex-omnishipping-1-x-ask')),
              $('#pkpmodal-close')
                .unbind()
                .click(function () {
                  $('#tfg-pickup-map').remove()
                })
            var e = function (e) {
              $(
                '<div class="tfg-pickup-map" id="tfg-pickup-map"><div class="tfg-pickup-map-content"></div></div>'
              ).appendTo($('body')),
                $('body').css('position', 'fixed'),
                $('body').css('width', '100%')
              var t = document.createElement('iframe')
              ;(t.src = 'https://pickup-map.bashconnect.com/'),
                (t.width = '100%'),
                (t.height = '100%'),
                (t.id = 'map'),
                (t.allow = 'geolocation'),
                $(t).appendTo('.tfg-pickup-map-content'),
                window.Penpal.connectToChild({
                  iframe: t,
                  methods: {
                    sendAttachment: function (e) {
                      Ve(),
                        window.vtexjs.checkout.sendAttachment(
                          'shippingData',
                          e
                        ),
                        $('#tfg-pickup-map').remove(),
                        $('body').css('overflow', 'auto'),
                        $('body').css('width', 'auto'),
                        $('body').css('position', 'relative')
                    },
                    getCheckoutJS: function () {
                      return window.vtexjs.checkout.orderForm
                    },
                    getSpecialFields: function () {
                      return Q(window.vtexjs.checkout.orderForm.items)
                    },
                    remove: function () {
                      $('#tfg-pickup-map').remove(),
                        $('body').css('overflow', 'auto'),
                        $('body').css('width', 'auto'),
                        $('body').css('position', 'relative')
                    },
                    getState: function () {
                      return e
                    },
                  },
                }),
                $('#tfg-pickup-map').click(function (e) {
                  e.stopPropagation(),
                    $('#tfg-pickup-map').remove(),
                    $('body').css('overflow', 'auto'),
                    $('body').css('width', 'auto'),
                    $('body').css('position', 'relative')
                })
            }
            $('#tfg-pickup-button')
              .unbind()
              .click(function () {
                return e('none')
              }),
              $('#tfg-pickup-see-more-button')
                .unbind()
                .click(function () {
                  return e(d)
                }),
              $('#find-pickups-button-new')
                .unbind()
                .click(function () {
                  return e('geolocate')
                }),
              $('#find-pickups-manually-search')
                .unbind()
                .click(function () {
                  return e('manual')
                })
          }),
          (dt = function () {
            $('span.help.error').remove(),
              (ut.validForm = !0),
              ['pickup-receiver', 'custom-pickup-complement'].forEach(
                function (e) {
                  var t,
                    n = !0
                  switch (e) {
                    case 'pickup-receiver':
                      ;(n = !(
                        $('#'.concat(e)).length > 0 &&
                        !$('#'.concat(e)).attr('disabled') &&
                        !$('#'.concat(e)).val()
                      )),
                        (t = '.shp-pickup-receiver')
                      break
                    case 'custom-pickup-complement':
                      ;(n = z($('#'.concat(e)).val())),
                        (t = '#box-pickup-complement')
                  }
                  n
                    ? $(t).removeClass('error')
                    : ($(t).addClass('error'),
                      $(t).append(
                        '<span class="help error">This field is required.</span>'
                      ),
                      $(''.concat(t, ' span.error')).show(),
                      ne(),
                      (ut.validForm = !1),
                      window.postMessage(
                        {
                          type: 'COLLECTION_VALIDATION_ERROR',
                          message: ''.concat(e, ' is invalid'),
                        },
                        '*'
                      ))
                }
              )
          }),
          (ht = function () {
            if ((dt(), ut.validForm)) {
              var e = $('#custom-pickup-complement').val().replace(/\s/g, '')
              9 === e.length && '0' !== e[0] && (e = '0'.concat(e)),
                localStorage.setItem('saving-shipping-collect', !0),
                $('#btn-go-to-payment').trigger('click')
              try {
                window.vtexjs.checkout
                  .getOrderForm()
                  .then(
                    (function () {
                      var t,
                        n =
                          ((t = ot().mark(function t(n) {
                            var r
                            return ot().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (r = n.shippingData.address),
                                      (t.next = 3),
                                      Oe(f, { phone: e })
                                    )
                                  case 3:
                                    return t.abrupt(
                                      'return',
                                      window.vtexjs.checkout.calculateShipping(
                                        r
                                      )
                                    )
                                  case 4:
                                  case 'end':
                                    return t.stop()
                                }
                            }, t)
                          })),
                          function () {
                            var e = this,
                              n = arguments
                            return new Promise(function (r, o) {
                              var i = t.apply(e, n)
                              function a(e) {
                                it(i, r, o, a, s, 'next', e)
                              }
                              function s(e) {
                                it(i, r, o, a, s, 'throw', e)
                              }
                              a(void 0)
                            })
                          })
                      return function (e) {
                        return n.apply(this, arguments)
                      }
                    })()
                  )
                  .done(function () {
                    localStorage.removeItem('saving-shipping-collect')
                  })
              } catch (e) {
                console.error(
                  'VTEX_ORDERFORM_ERROR: Could not load at CollectController',
                  e
                ),
                  nt({
                    eventCategory: 'Checkout_SystemError',
                    action: 'OrderFormFailed',
                    label: 'Could not getOrderForm() from vtex',
                    description: 'Could not load orderForm for Collect.',
                  })
              }
            }
          }),
          (pt = function () {
            var t,
              n,
              r = $('#postalCode-finished-loading').length > 0
            $('#shipping-option-pickup-in-point').one('click', function () {
              ut.collectReset = !0
            }),
              window.location.hash === i && r
                ? ((ut.inCollect = $(
                    '#shipping-option-pickup-in-point'
                  ).hasClass('shp-method-option-active')),
                  (ut.pickupSelected =
                    0 === $('div.ask-for-geolocation').length),
                  (function () {
                    var e, t
                    if (!($('#pickup-receiver').length < 1)) {
                      var n = Ye({
                        preferred:
                          null === (e = window) ||
                          void 0 === e ||
                          null === (e = e.vtexjs) ||
                          void 0 === e ||
                          null === (e = e.checkout) ||
                          void 0 === e ||
                          null === (e = e.orderForm) ||
                          void 0 === e ||
                          null === (e = e.shippingData) ||
                          void 0 === e ||
                          null === (e = e.address) ||
                          void 0 === e
                            ? void 0
                            : e.receiverName,
                        type: 'collect',
                      }).trim()
                      n.length > 0 &&
                        '' ===
                          (null === (t = $('#pickup-receiver')) ||
                          void 0 === t ||
                          null === (t = t.val()) ||
                          void 0 === t
                            ? void 0
                            : t.trim()) &&
                        $('#pickup-receiver').val(n)
                    }
                  })(),
                  ut.inCollect &&
                    ((($('#tfg-pickup-button').length ||
                      $('#tfg-pickup-see-more-button').length) &&
                      ($('#find-pickups-manually-search').length ||
                        $('#find-pickups-button-new').length)) ||
                      lt(),
                    X(),
                    ut.pickupSelected && !ut.collectReset
                      ? ($('button.shp-pickup-receiver__btn').trigger('click'),
                        $('div.shp-pickup-receiver').addClass('show'),
                        $('p#box-pickup-complement').addClass('show'),
                        (t = je(d)),
                        (n = W({ type: 'collect', fields: t })),
                        0 === $('#custom-pickup-complement').length &&
                          $('.btn-go-to-payment-wrapper').before(e),
                        n &&
                          $('#custom-pickup-complement')
                            .val(n)
                            .css('border', 0),
                        (function () {
                          if ($('#custom-go-to-payment').length <= 0) {
                            var e = $('#btn-go-to-payment'),
                              t = e.clone(!1)
                            $(e).hide(),
                              $(t).data('bind', ''),
                              $(t)
                                .removeAttr('id')
                                .attr('id', 'custom-go-to-payment'),
                              $(t).removeAttr('data-bind'),
                              $(t).css('display', 'block'),
                              $('p.btn-go-to-payment-wrapper').append(t),
                              $(t).on('click', ht)
                          }
                        })())
                      : ($('div.shp-pickup-receiver').removeClass('show'),
                        $('p#box-pickup-complement').removeClass('show')),
                    ut.collectReset &&
                      ((function () {
                        $('.delivery-group-content').empty(),
                          $('.btn-go-to-payment-wrapper').empty(),
                          $(
                            '<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" stroke="#FCFCFC" fill="#FCFCFC"/><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" stroke="#000" fill="#000"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path></svg><div>'
                          )
                            .css({
                              display: 'flex',
                              'justify-content': 'center',
                              'align-items': 'center',
                              'min-height': '100px',
                            })
                            .appendTo('.delivery-group-content')
                        var e = window.vtexjs.checkout.orderForm.shippingData,
                          t = st(
                            st({}, e),
                            {},
                            {
                              address: null,
                              availableAddresses: e.availableAddresses,
                              selectedAddresses: e.selectedAddresses.filter(
                                function (e) {
                                  return 'search' !== e.addressType
                                }
                              ),
                              logisticsInfo: e.logisticsInfo,
                            }
                          )
                        window.vtexjs.checkout.sendAttachment(
                          'shippingData',
                          t
                        ),
                          Ve(),
                          lt()
                      })(),
                      (ut.collectReset = !1)),
                    $('p.vtex-omnishipping-1-x-shippingSectionTitle').text(
                      'Collect options'
                    ),
                    $('#change-pickup-button').text('Available pickup points'),
                    $(
                      'h2.vtex-omnishipping-1-x-geolocationTitle.ask-for-geolocation-title'
                    ).text('Find nearby Click & Collect points'),
                    $(
                      'h3.vtex-omnishipping-1-x-subtitle.ask-for-geolocation-subtitle'
                    ).text(
                      "Search for addresses that you frequently use and we'll locate stores nearby."
                    ),
                    ut.pickupSelected &&
                      $('label.shp-pickup-receiver__label').text(
                        "Recipient's name"
                      )),
                  localStorage.getItem('shipping-incomplete-values') &&
                    ($('#custom-go-to-payment').trigger('click'),
                    localStorage.removeItem('shipping-incomplete-values')))
                : ($('#box-pickup-complement').remove(),
                  window.location.hash === a &&
                    setTimeout(function () {
                      var e,
                        t =
                          null === (e = window.vtexjs.checkout.orderForm) ||
                          void 0 === e ||
                          null === (e = e.shippingData) ||
                          void 0 === e
                            ? void 0
                            : e.address
                      if (!localStorage.getItem('saving-shipping-collect')) {
                        var n = je(f).phone
                        !t ||
                          t.addressType !== s ||
                          (t.receiverName && n) ||
                          ((window.location.hash = i),
                          localStorage.setItem(
                            'shipping-incomplete-values',
                            !0
                          ),
                          nt({
                            action: 'stepRedirect',
                            label: 'redirectPaymentToShipping',
                            description:
                              'User redirect to shipping because Collection is missing receiverName or phone number.',
                          }))
                      }
                    }, 1e3)),
              ft()
          }),
          (ft = function () {
            if (!ut.runningObserver) {
              var e = document.querySelector('.shipping-container .box-step'),
                t = new MutationObserver(function () {
                  ;(ut.runningObserver = !0), pt()
                })
              e &&
                t.observe(e, {
                  attributes: !1,
                  childList: !0,
                  characterData: !1,
                })
            }
          }),
          $(document).ready(function () {
            pt()
          }),
          $(window).on('hashchange orderFormUpdated.vtex', function () {
            pt()
          }),
          { state: ut, init: function () {} })
      const mt = vt,
        yt = function (e) {
          var t = e.label,
            n = e.name,
            r = e.value,
            o = void 0 === r ? '' : r,
            i = e.required,
            a = void 0 === i || i,
            s = e.type,
            c = void 0 === s ? 'text' : s,
            u = e.placeholder,
            l = e.autoComplete,
            d = void 0 === l ? 'on' : l,
            h = e.maxLength,
            p = e.minlength,
            f = e.disabled,
            v = void 0 !== f && f,
            m = e.options,
            y = e.checked,
            g = e.error,
            b = void 0 === g ? 'This field is required.' : g,
            w = e.containerClasses,
            _ = void 0 === w ? '' : w,
            x = n.replace(/\s/g, '-'),
            E = '<label id="bash--label-'
              .concat(x, '" for="bash--input-')
              .concat(x, '">')
              .concat(t, '</label>')
          return '\n<p class="input bash--'
            .concat(c, 'field-')
            .concat(n.replace(/\s/g, '-'), ' bash--')
            .concat(c, ' ')
            .concat(a ? 'required' : 'optional', ' ')
            .concat(_, '">\n  ')
            .concat(t && 'checkbox' !== c ? E : '', '\n  ')
            .concat(
              (function () {
                switch (c) {
                  case 'radio':
                    return ie({ name: n, options: m })
                  case 'dropdown':
                    return (function (e) {
                      var t = e.name,
                        n = e.disabled,
                        r = void 0 !== n && n,
                        o = e.options,
                        i = e.required,
                        a = o.find(function (e) {
                          return !0 === e.selected
                        })
                      return '\n  <select \n    name="'
                        .concat(t, '" \n    ')
                        .concat(i ? ' required ' : '', ' \n    ')
                        .concat(
                          r ? ' disabled ' : '',
                          ' \n    id="bash--input-'
                        )
                        .concat(t, '" \n    class="input-large" \n  >\n  ')
                        .concat(
                          o
                            .map(function (e, t) {
                              var n = e.value,
                                r = e.label,
                                o = e.selected
                              return '\n    <option \n    '
                                .concat(0 === t ? ' disabled ' : '', '\n    ')
                                .concat(
                                  0 !== t || a ? '' : ' selected ',
                                  '\n    '
                                )
                                .concat(
                                  o ? ' selected ' : '',
                                  '\n      value="'
                                )
                                .concat(n, '" \n    >')
                                .concat(r, '</option>\n    ')
                            })
                            .join(''),
                          '\n  </select>\n  '
                        )
                    })({ name: n, disabled: v, options: m, required: a })
                  case 'note':
                    return (function (e) {
                      var t = e.value,
                        n = e.name
                      return '\n  <div class="bash--note-field '
                        .concat(n, '">\n  ')
                        .concat(t, '\n  </div>\n  ')
                    })({ name: n, value: o })
                  case 'checkbox':
                    return (function (e) {
                      var t = e.name,
                        n = e.label,
                        r = e.checked,
                        o = e.value
                      return '\n    <label class="tfg-checkbox-label">\n       <input \n        type=\'checkbox\' \n        name="'
                        .concat(t, '" \n        id="bash--input-')
                        .concat(t, '"\n        ')
                        .concat(
                          r ? "checked='checked'" : '',
                          '\n        value='
                        )
                        .concat(null != o ? o : '', '\n      />\n      <span>')
                        .concat(n, '</span>\n    </label>\n  ')
                    })({ name: n, label: t, checked: y })
                  default:
                    return (function (e) {
                      var t = e.name,
                        n = e.value,
                        r = void 0 === n ? '' : n,
                        o = e.required,
                        i = void 0 === o || o,
                        a = e.type,
                        s = void 0 === a ? 'text' : a,
                        c = e.placeholder,
                        u = e.autoComplete,
                        l = void 0 === u ? 'on' : u,
                        d = e.minLength,
                        h = void 0 === d ? 0 : d,
                        p = e.maxLength,
                        f = void 0 === p ? 0 : p,
                        v = t.replace(/\s/g, '-')
                      return '\n  <input \n    '
                        .concat(i ? ' required ' : '', '\n    autocomplete="')
                        .concat(l, '" \n    id="bash--input-')
                        .concat(v, '" \n    type="')
                        .concat(s, '" \n    name="')
                        .concat(t, '" \n    ')
                        .concat(
                          h > 0 ? 'minlength="'.concat(h, '"') : '',
                          '\n    '
                        )
                        .concat(
                          f > 0 ? 'maxlength="'.concat(f, '"') : '',
                          '\n    placeholder="'
                        )
                        .concat(
                          null != c ? c : '',
                          '" \n    class="input-xlarge" \n    value="'
                        )
                        .concat(r, '" \n  />\n')
                    })({
                      name: n,
                      value: o,
                      required: a,
                      type: c,
                      placeholder: u,
                      autoComplete: d,
                      maxLength: h,
                      minLength: p,
                    })
                }
              })(),
              '\n  <span class="bash--field-error">'
            )
            .concat(b, '</span>\n</p>  \n')
        },
        gt = function (e) {
          var t,
            n = e.hasFurn,
            r = e.hasFurnOnly,
            o = e.hasFurnMixed
          return '\n  <div class="bash--delivery-container '
            .concat(
              n && 'has-furniture',
              '"\n   id="bash--delivery-container" data-view="select-address">\n    <div id="bash--shipping-messages">\n      '
            )
            .concat('<div id="bash-alert-container"></div>', '\n      ')
            .concat(
              '\n  <div id="tfg-custom-tvrica-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      You can\'t collect this order in store because your cart contains items \n      which require either RICA or TV License validation.\n    </p>\n  </div>\n',
              '\n      '
            )
            .concat('', '\n      ')
            .concat(
              ' \n \n<div id="bash-delivery-error-container"   >\n</div>',
              '\n    </div>\n   <form id="bash--delivery-form" name="bash--delivery-form" method="post">\n\n    <section class="bash--delivery-view" data-section="select-address">\n    <div class="bash--heading">\n        <h2>Delivery address</h2>\n        <a href="#" data-view="address-search">Add address</a>\n      </div>\n      '
            )
            .concat(
              (be()
                .then(function (e) {
                  var t = e.data,
                    n = t.map(function (e) {
                      return se(e)
                    })
                  document.getElementById('bash-address-list') &&
                    (document.getElementById('bash-address-list').innerHTML =
                      n.join('')),
                    $('#back-button-select-address').hasClass('inactive') &&
                      $('#back-button-select-address').show(),
                    X(),
                    t.length < 1 &&
                      (window.postMessage({
                        action: 'setDeliveryView',
                        view: 'address-search',
                      }),
                      $('#bash--input-address-search').focus(),
                      $('#back-button-select-address').hide(),
                      $('#back-button-select-address').addClass('inactive'))
                })
                .catch(function (e) {
                  throw (
                    (console.error('ERROR getAddresses', e),
                    new Error('Error getAddresses', e.message))
                  )
                }),
              '\n <div class="bash--addresses shimmer" id="bash-address-list">\n    Loading addresses...\n  </div>\n  '),
              '\n    </section>\n\n    <section id="bash-delivery-options" class="shipping-method bash--delivery-view" data-section="select-address">\n      <hr>\n      <div class="bash--heading sub-heading">\n        <h3>Delivery method</h3>\n        '
            )
            .concat('', '\n      </div>\n      ')
            .concat(
              (function (e) {
                var t = e.hasFurnOnly,
                  n = 'Delivery within 3 - 5 working days'
                return (
                  e.hasFurnitureMixed &&
                    (n = 'Delivery within 3 - 10 working days'),
                  t && (n = 'Delivery within 5 - 10 working days'),
                  $('.shp-summary-package-time > span').html(n),
                  '\n  <label class="bash--delivery-option-display" >\n  '
                    .concat(
                      ie({
                        name: 'delivery-option',
                        options: [{ checked: !0, value: !0 }],
                      }),
                      '\n   \n   <div id="bash--delivery-option-text" class="bash--delivery-option-text">\n      <span class="normal-delivery">\n        '
                    )
                    .concat(
                      n,
                      '\n      </span>\n   </div>\n\n  <div id="bash--delivery-fee" class="bash--delivery-fee">\n    R'
                    )
                    .concat(m / 100, '\n  </div>\n</label>\n\n')
                    .concat('', '\n  ')
                )
              })({ hasFurnOnly: r, hasFurnitureMixed: o }),
              '\n      <button \n        class="submit btn-go-to-payment btn btn-large btn-success"\n        id="btn-save-delivery" \n        type="submit">\n          Go to payment\n      </button>\n    </section>\n   </form>\n\n    <section class="bash--delivery-view" data-section="address-search">\n      <div class="bash--heading">\n        <h3>Add a new delivery address</h3>\n        <a href=\'#\' data-view=\'select-address\' id=\'back-button-select-address\'>&lt; Back</a>\n      </div>\n      <div class="address-search-field-container" id="address-search-field-container">\n          '
            )
            .concat(
              (function () {
                setTimeout(function () {
                  Je()
                }, 500)
                var e = yt({
                  name: 'address-search',
                  placeholder: 'Start typing an address...',
                  autoComplete: 'off',
                })
                return '\n  \n  '.concat(
                  e,
                  '\n    <div id="no-address-search-results-notification" class="notification info" >\n      <span class="icon"></span>\n      <div class="notification-content">\n      We could not find your address. \n        <a class="no-results-drop-down" href="" data-view="address-form" id="no-address-search-results">\n          Please click here to enter it manually.\n        </a>\n    </div>\n  '
                )
              })(),
              ' \n      </div>\n      <p style="font-size: 12px; margin: 16px 0" id="type-your-address-above">\n        Type your address above or \n        <a \n          href="" id="link-manual-address-entry"\n          data-view="address-form"\n          onClick="document.getElementById(\'bash--input-street\').focus()"\n          style="text-decoration: underline" \n        >enter it manually</a>.\n      </p>\n    </section>\n    \n    <section class="bash--delivery-view" data-section="address-form">\n       <div class="bash--heading">\n        <h3>Delivery address</h3>\n        <a href="#" class="back-button--search" data-view="address-search">&lt; Back</a>\n        <a href="#" class="back-button--select" data-view="select-address">&lt; Back</a>\n      </div>\n      '
            )
            .concat(
              ((t = [
                { name: 'addressId', type: 'hidden', value: '', required: !1 },
                {
                  name: 'addressName',
                  type: 'hidden',
                  value: '',
                  required: !1,
                  maxLength: 50,
                },
                { name: 'lat', required: !1, type: 'hidden', value: '' },
                { name: 'lng', required: !1, type: 'hidden', value: '' },
                {
                  name: 'street',
                  label: 'Street address',
                  required: !0,
                  value: '',
                },
                {
                  name: 'addressType',
                  label: 'Address type',
                  required: !0,
                  type: 'radio',
                  options: [
                    { value: 'residential', label: 'Residential', checked: !0 },
                    { value: 'business', label: 'Business' },
                  ],
                },
                { name: 'number', required: !1, value: '', type: 'hidden' },
                {
                  name: 'businessName',
                  label: 'Business name',
                  required: !1,
                  value: '',
                  maxLength: 100,
                },
                {
                  name: 'companyBuilding',
                  label: 'Building/Complex and number',
                  required: !1,
                  value: '',
                  maxLength: 100,
                },
                {
                  name: 'neighborhood',
                  label: 'Suburb',
                  value: '',
                  maxLength: 750,
                },
                {
                  name: 'city',
                  label: 'City',
                  required: !0,
                  value: '',
                  maxLength: 750,
                },
                {
                  name: 'postalCode',
                  label: 'Postal code',
                  value: '',
                  type: 'tel',
                  minlength: 4,
                  maxLength: 4,
                },
                {
                  type: 'note',
                  required: !1,
                  name: 'suburb-postal-reminder',
                  value:
                    'Make sure to specify the correct Suburb and Postal code so we can easily find your address.',
                },
                {
                  name: 'state',
                  label: 'Province',
                  type: 'dropdown',
                  options: [
                    { value: '', label: 'Select' },
                    { value: 'EC', label: 'Eastern Cape' },
                    { value: 'FS', label: 'Free State' },
                    { value: 'GP', label: 'Gauteng' },
                    { value: 'KZN', label: 'KwaZulu-Natal' },
                    { value: 'LP', label: 'Limpopo' },
                    { value: 'MP', label: 'Mpumalanga' },
                    { value: 'NC', label: 'Northern Cape' },
                    { value: 'NW', label: 'North West' },
                    { value: 'WC', label: 'Western Cape' },
                  ],
                },
                {
                  type: 'note',
                  required: !1,
                  name: 'country-display',
                  label: 'Country',
                  value: 'South Africa',
                },
                { type: 'hidden', required: !0, name: 'country', value: 'ZAF' },
                {
                  name: 'receiverName',
                  label: 'Recipient’s name',
                  required: !0,
                  value: Ye({ type: 'delivery' }),
                },
                {
                  name: 'complement',
                  required: !1,
                  type: 'hidden',
                  helperText: 'We send shipping updates to this number.',
                  value: '',
                },
                {
                  name: 'receiverPhone',
                  label: 'Recipient’s mobile number',
                  required: !0,
                  type: 'tel',
                  helperText: 'We send shipping updates to this number.',
                  minlength: 9,
                  error: 'Please enter a valid phone number',
                  containerClasses: 'custom-field-complement',
                },
              ]
                .map(function (e) {
                  return yt(e)
                })
                .join('')),
              '\n  <form id="bash--address-form" method="post">\n    '.concat(
                t,
                '\n\n    <button \n      class="submit btn-go-to-payment btn btn-large btn-success"\n      id="btn-save-address" \n      type="submit">\n      Save address\n    </button>\n  </form>\n  \n  '
              )),
              '\n    </section>\n    \n  </div>'
            )
        },
        bt = function (e) {
          var t,
            n,
            r,
            o,
            i = e.hasTV,
            a = e.hasSim,
            s =
              '\n    <div id="tv-license-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>TV license information needed</h3>\n        <p class="tfg-custom-subtitle">Please provide your ID number to validate your TV Licence.</p>\n      </div>\n      '.concat(
                '\n    '.concat(
                  yt({
                    name: 'tv_tvID',
                    label: 'SA ID number',
                    required: !0,
                    value: '',
                  }),
                  '\n  '
                ),
                '\n    </div>\n  '
              ),
            c =
              '\n    <div id="rica-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>Rica information required</h3>\n        <p class="tfg-custom-subtitle">\n          To RICA your SIM card, provide your SA ID (or foreign passport) number and your address as\n          it appears on a valid proof of residence.\n        </p> \n      </div>\n        '.concat(
                ((t =
                  window.vtexjs.checkout.orderForm.shippingData
                    .selectedAddress),
                (n = [
                  {
                    name: 'rica_fullName',
                    label: 'Full name and surname',
                    required: !0,
                    value: Ye({ type: 'delivery' }) || '',
                  },
                  {
                    name: 'rica_streetAddress',
                    label: 'Street address',
                    required: !0,
                    value: (null == t ? void 0 : t.street) || '',
                  },
                  {
                    name: 'rica_suburb',
                    label: 'Suburb',
                    value: (null == t ? void 0 : t.neighborhood) || '',
                  },
                  {
                    name: 'rica_city',
                    label: 'City',
                    required: !0,
                    value: (null == t ? void 0 : t.city) || '',
                  },
                  {
                    name: 'rica_postalCode',
                    label: 'Postal code',
                    value: (null == t ? void 0 : t.postalCode) || '',
                    type: 'tel',
                    minlength: 4,
                    maxLength: 4,
                  },
                  {
                    name: 'rica_province',
                    label: 'Province',
                    type: 'dropdown',
                    options: [
                      { value: '', label: 'Select', disabled: !0 },
                      { value: 'EC', label: 'Eastern Cape' },
                      { value: 'FS', label: 'Free State' },
                      { value: 'GP', label: 'Gauteng' },
                      { value: 'KZN', label: 'KwaZulu-Natal' },
                      { value: 'LP', label: 'Limpopo' },
                      { value: 'MP', label: 'Mpumalanga' },
                      { value: 'NC', label: 'Northern Cape' },
                      { value: 'NW', label: 'North West' },
                      { value: 'WC', label: 'Western Cape' },
                    ],
                  },
                  {
                    type: 'note',
                    required: !1,
                    name: 'rica-country-display',
                    label: 'Country',
                    value: 'South Africa',
                  },
                  {
                    type: 'hidden',
                    required: !0,
                    name: 'country',
                    value: 'ZAF',
                  },
                ]),
                (r = [
                  {
                    name: 'rica_idOrPassport',
                    label: 'ID or Passport number',
                    required: !0,
                    value: '',
                  },
                  {
                    name: 'rica_sameAddress',
                    label: 'Residential address the same as delivery address',
                    type: 'checkbox',
                    checked: !0,
                    required: !1,
                  },
                ]
                  .map(function (e) {
                    return yt(e)
                  })
                  .join('')),
                (o = n
                  .map(function (e) {
                    return yt(e)
                  })
                  .join('')),
                '\n    '
                  .concat(
                    r,
                    '\n    <div class="rica-conditional-fields hide">\n    '
                  )
                  .concat(o, '\n    </div>\n  ')),
                '\n    </div>\n    '
              )
          return '\n  <section class="bash--extra-fields bash--delivery-view" data-section="select-address">\n    '
            .concat(i ? s : '', '\n    ')
            .concat(a ? c : '', '\n  </section>')
        }
      var wt = function (e) {
        var t = e.businessName,
          n = e.receiverPhone
        return Oe(v, {
          jsonString: JSON.stringify({
            businessName: t || '',
            receiverPhone: n || '',
          }),
        })
      }
      const _t = function (e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { validateExtraFields: !0 },
          r = n.validateExtraFields,
          o = window.vtexjs.checkout.orderForm.items,
          i = Q(o),
          a = i.hasTVs,
          s = i.hasSimCards
        a && He(e, Ne, 'tv_'), s && Ke()
        var d,
          h = Qe(e, r),
          p = h.isValid,
          f = h.invalidFields
        if (!p)
          return (
            console.error({ invalidFields: f }),
            We(e),
            $('#bash--address-form').addClass('show-form-errors'),
            r &&
              (null === (d = $('#bash--delivery-form')) ||
                void 0 === d ||
                d.addClass('show-form-errors')),
            $('#bash--input-'.concat(f[0])).focus(),
            $e.includes(f[0]) &&
              window.postMessage({
                action: 'setDeliveryView',
                view: 'address-edit',
              }),
            { success: !1, error: 'Invalid address details.' }
          )
        e.addressType === u && (e.addressType = l),
          Te.includes(e.addressType) || (e.addressType = c),
          e.number &&
            ((e.street = ''.concat(e.number, ' ').concat(e.street)),
            (e.number = '')),
          (e.country = 'ZAF')
        var v =
          null === (t = window) ||
          void 0 === t ||
          null === (t = t.vtexjs) ||
          void 0 === t ||
          null === (t = t.checkout) ||
          void 0 === t ||
          null === (t = t.orderForm) ||
          void 0 === t
            ? void 0
            : t.shippingData
        return (
          (v.address = e),
          (v.selectedAddresses = [e]),
          e.complement &&
            ((e.receiverPhone = e.complement),
            (v.address.complement = ''),
            (e.complement = '')),
          e.companyBuilding &&
            !v.address.street.includes(', '.concat(e.companyBuilding)) &&
            (v.address.street = ''
              .concat(e.street, ', ')
              .concat(e.companyBuilding)),
          (v.selectedAddresses[0] = v.address),
          qe(),
          window.vtexjs.checkout
            .sendAttachment('shippingData', v)
            .then(function (t) {
              var n = t.messages.filter(function (e) {
                return 'error' === e.status
              })
              if (n.length > 0)
                return (
                  et(n),
                  window.postMessage({
                    action: 'setDeliveryView',
                    view: 'address-form',
                  }),
                  { success: !1, errors: n }
                )
              e.addressName && xe(e)
              try {
                wt({
                  businessName: e.businessName,
                  receiverPhone: e.receiverPhone,
                })
              } catch (e) {
                nt({
                  eventCategory: 'Checkout_SystemError',
                  action: 'OrderFormFailed',
                  label: 'Could not update businessName and/or receiverPhone ',
                  description:
                    'Could not update businessName and/or receiverPhone.',
                })
              }
              return { success: !0 }
            })
            .done(function () {
              return X()
            })
        )
      }
      function xt(e) {
        return (
          (xt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          xt(e)
        )
      }
      function Et() {
        Et = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          s = o.toStringTag || '@@toStringTag'
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          c({}, '')
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n)
          }
        }
        function u(e, t, n, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            s = new S(o || [])
          return r(a, '_invoke', { value: _(e, n, s) }), a
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = u
        var d = {}
        function h() {}
        function p() {}
        function f() {}
        var v = {}
        c(v, i, function () {
          return this
        })
        var m = Object.getPrototypeOf,
          y = m && m(m(O([])))
        y && y !== t && n.call(y, i) && (v = y)
        var g = (f.prototype = h.prototype = Object.create(v))
        function b(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function w(e, t) {
          function o(r, i, a, s) {
            var c = l(e[r], e, i)
            if ('throw' !== c.type) {
              var u = c.arg,
                d = u.value
              return d && 'object' == xt(d) && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    function (e) {
                      o('next', e, a, s)
                    },
                    function (e) {
                      o('throw', e, a, s)
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      ;(u.value = e), a(u)
                    },
                    function (e) {
                      return o('throw', e, a, s)
                    }
                  )
            }
            s(c.arg)
          }
          var i
          r(this, '_invoke', {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  o(e, n, t, r)
                })
              }
              return (i = i ? i.then(r, r) : r())
            },
          })
        }
        function _(e, t, n) {
          var r = 'suspendedStart'
          return function (o, i) {
            if ('executing' === r)
              throw new Error('Generator is already running')
            if ('completed' === r) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate
              if (a) {
                var s = x(a, n)
                if (s) {
                  if (s === d) continue
                  return s
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg)
                n.dispatchException(n.arg)
              } else 'return' === n.method && n.abrupt('return', n.arg)
              r = 'executing'
              var c = l(e, t, n)
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue
                return { value: c.arg, done: n.done }
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg))
            }
          }
        }
        function x(e, t) {
          var n = t.method,
            r = e.iterator[n]
          if (void 0 === r)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            )
          var o = l(r, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d)
        }
        function E(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function k(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function S(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0)
        }
        function O(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(xt(e) + ' is not iterable')
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise)
            var a = new w(u(t, n, r, o), i)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this
          }),
          c(g, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = []
            for (var r in t) n.push(r)
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in t) return (e.value = r), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = O),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function r(n, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return r('end')
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc')
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r]
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                d
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.tryLoc === e) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var o = r.arg
                    k(n)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              )
            },
          }),
          e
        )
      }
      function kt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function St(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? kt(Object(n), !0).forEach(function (t) {
                Ot(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : kt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function Ot(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== xt(e) || null === e) return e
              var n = e[Symbol.toPrimitive]
              if (void 0 !== n) {
                var r = n.call(e, t)
                if ('object' !== xt(r)) return r
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === xt(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function jt(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
      }
      const Lt = (function () {
        var e,
          t =
            ((e = Et().mark(function e(t) {
              var n, r, o, i, a, s, c, u, l, d, h, p, f
              return Et().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        t.preventDefault(),
                        $('select').change(),
                        (n = document.forms['bash--address-form']),
                        (r = $('#bash--input-addressName').val()),
                        (e.next = 6),
                        ke(r)
                      )
                    case 6:
                      for (
                        o = e.sent,
                          i = [
                            'addressId',
                            'addressName',
                            'addressType',
                            'receiverName',
                            'receiverPhone',
                            'postalCode',
                            'city',
                            'state',
                            'country',
                            'businessName',
                            'street',
                            'neighborhood',
                            'complement',
                            'companyBuilding',
                            'lat',
                            'lng',
                          ],
                          a = St(
                            St(
                              {
                                isDisposable: !1,
                                reference: null,
                                geoCoordinates: [],
                                country: 'ZAF',
                              },
                              o
                            ),
                            {},
                            { number: '', complement: '' }
                          ),
                          s = 0;
                        s < i.length;
                        s++
                      )
                        a[i[s]] =
                          (null === (c = n[i[s]]) || void 0 === c
                            ? void 0
                            : c.value) || null
                      if (
                        ((a.addressName = a.addressName || a.addressId),
                        (a.addressId = a.addressId || a.addressName),
                        (u = [
                          parseFloat(a.lng) || '',
                          parseFloat(a.lat) || '',
                        ]),
                        (a.geoCoordinate = u),
                        (a.geoCoordinates = u),
                        (l = a),
                        (d = Qe(a, !1)),
                        (h = d.isValid),
                        (p = d.invalidFields),
                        h)
                      ) {
                        e.next = 24
                        break
                      }
                      return (
                        console.error({ invalidFields: p }),
                        $('#bash--address-form').addClass('show-form-errors'),
                        $('#bash--input-'.concat(p[0])).focus(),
                        $e.includes(p[0]) &&
                          window.postMessage({
                            action: 'setDeliveryView',
                            view: 'address-form',
                          }),
                        window.postMessage(
                          {
                            type: 'ADDRESS_VALIDATION_ERROR',
                            message:
                              'Address validation error. See invalidFields.',
                            invalidFields: p,
                          },
                          '*'
                        ),
                        e.abrupt('return')
                      )
                    case 24:
                      return (e.next = 26), _t(l, { validateExtraFields: !1 })
                    case 26:
                      if ((f = e.sent).success) {
                        e.next = 31
                        break
                      }
                      return (
                        console.error('Set address error', {
                          setAddressResponse: f,
                        }),
                        e.abrupt('return')
                      )
                    case 31:
                      return (e.next = 33), Ee(a)
                    case 33:
                      window.postMessage({
                        action: 'setDeliveryView',
                        view: 'select-address',
                      }),
                        setTimeout(function () {
                          $('.bash--extra-fields').length > 0
                            ? document
                                .querySelector('.bash--extra-fields')
                                .scrollIntoView({ behavior: 'smooth' })
                            : document
                                .getElementById('bash-delivery-options')
                                .scrollIntoView({ behavior: 'smooth' })
                        }, 500),
                        tt()
                    case 36:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })),
            function () {
              var t = this,
                n = arguments
              return new Promise(function (r, o) {
                var i = e.apply(t, n)
                function a(e) {
                  jt(i, r, o, a, s, 'next', e)
                }
                function s(e) {
                  jt(i, r, o, a, s, 'throw', e)
                }
                a(void 0)
              })
            })
        return function (e) {
          return t.apply(this, arguments)
        }
      })()
      function Ct(e) {
        return (
          (Ct =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Ct(e)
        )
      }
      function $t() {
        $t = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          s = o.toStringTag || '@@toStringTag'
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          c({}, '')
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n)
          }
        }
        function u(e, t, n, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            s = new S(o || [])
          return r(a, '_invoke', { value: _(e, n, s) }), a
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = u
        var d = {}
        function h() {}
        function p() {}
        function f() {}
        var v = {}
        c(v, i, function () {
          return this
        })
        var m = Object.getPrototypeOf,
          y = m && m(m(O([])))
        y && y !== t && n.call(y, i) && (v = y)
        var g = (f.prototype = h.prototype = Object.create(v))
        function b(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function w(e, t) {
          function o(r, i, a, s) {
            var c = l(e[r], e, i)
            if ('throw' !== c.type) {
              var u = c.arg,
                d = u.value
              return d && 'object' == Ct(d) && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    function (e) {
                      o('next', e, a, s)
                    },
                    function (e) {
                      o('throw', e, a, s)
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      ;(u.value = e), a(u)
                    },
                    function (e) {
                      return o('throw', e, a, s)
                    }
                  )
            }
            s(c.arg)
          }
          var i
          r(this, '_invoke', {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  o(e, n, t, r)
                })
              }
              return (i = i ? i.then(r, r) : r())
            },
          })
        }
        function _(e, t, n) {
          var r = 'suspendedStart'
          return function (o, i) {
            if ('executing' === r)
              throw new Error('Generator is already running')
            if ('completed' === r) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate
              if (a) {
                var s = x(a, n)
                if (s) {
                  if (s === d) continue
                  return s
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg)
                n.dispatchException(n.arg)
              } else 'return' === n.method && n.abrupt('return', n.arg)
              r = 'executing'
              var c = l(e, t, n)
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue
                return { value: c.arg, done: n.done }
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg))
            }
          }
        }
        function x(e, t) {
          var n = t.method,
            r = e.iterator[n]
          if (void 0 === r)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            )
          var o = l(r, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d)
        }
        function E(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function k(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function S(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0)
        }
        function O(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(Ct(e) + ' is not iterable')
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise)
            var a = new w(u(t, n, r, o), i)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this
          }),
          c(g, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = []
            for (var r in t) n.push(r)
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in t) return (e.value = r), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = O),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function r(n, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return r('end')
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc')
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r]
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                d
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.tryLoc === e) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var o = r.arg
                    k(n)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              )
            },
          }),
          e
        )
      }
      function Pt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Pt(Object(n), !0).forEach(function (t) {
                Tt(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Pt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function Tt(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== Ct(e) || null === e) return e
              var n = e[Symbol.toPrimitive]
              if (void 0 !== n) {
                var r = n.call(e, t)
                if ('object' !== Ct(r)) return r
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === Ct(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function Ft(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
      }
      const It = (function () {
        var e,
          t =
            ((e = $t().mark(function e(t) {
              var n, r, o, i, s, c, u, l, d, f, v, m, y, g, b, w, _
              return $t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (t.preventDefault(),
                        (n = window.vtexjs.checkout.orderForm.items),
                        (r =
                          window.vtexjs.checkout.orderForm.shippingData
                            .address),
                        (o = Q(n)),
                        (i = o.hasTVs),
                        (s = o.hasSimCards),
                        $('select').change(),
                        (c = {}),
                        (u = "[name='selected-address']:checked"),
                        !($(u).length < 1))
                      ) {
                        e.next = 11
                        break
                      }
                      return (
                        $('html, body').animate(
                          {
                            scrollTop: $(
                              '#bash-delivery-error-container'
                            ).offset().top,
                          },
                          400
                        ),
                        $('#bash-delivery-error-container').html(
                          ' \n<div id="bash-delivery-error" class="notification error"  >\n   <div class="notification-content">\n      <p>Select a delivery address.</p>\n   </div>  \n</div>  \n'
                        ),
                        e.abrupt('return')
                      )
                    case 11:
                      return qe(), (e.next = 14), ke($(u).val())
                    case 14:
                      return (
                        (l = e.sent),
                        (c = Nt(Nt({}, r), l)),
                        (e.next = 18),
                        _t(c, { validateExtraFields: !1 })
                      )
                    case 18:
                      if (e.sent.success) {
                        e.next = 24
                        break
                      }
                      return (
                        console.error(
                          'Delivery Form - Address Validation error'
                        ),
                        X(),
                        e.abrupt('return')
                      )
                    case 24:
                      if (((d = {}), (f = {}), !s)) {
                        e.next = 33
                        break
                      }
                      for (v = Pe, m = 0; m < v.length; m++)
                        'sameAddress' === v[m] &&
                          ((y = $('#bash--input-'.concat(v[m])).is(':checked')),
                          (d[v[m]] = y)),
                          (d[v[m]] =
                            $('#bash--input-rica_'.concat(v[m])).val() || '')
                      return (e.next = 31), Oe(h, d, !0)
                    case 31:
                      ;(g = e.sent), console.info({ ricaDataSent: g })
                    case 33:
                      if (!i) {
                        e.next = 40
                        break
                      }
                      for (b = Ne, w = 0; w < b.length; w++)
                        r[b[w]] ||
                          (c[b[w]] = $('#bash--input-tv_'.concat(b[w])).val()),
                          (f[b[w]] =
                            $('#bash--input-tv_'.concat(b[w])).val() || '')
                      return (e.next = 38), Oe(p, f)
                    case 38:
                      ;(_ = e.sent), console.info({ tvDataSent: _ })
                    case 40:
                      return (e.next = 42), Ee(c)
                    case 42:
                      $('.bash--delivery-container').css('display', 'none'),
                        (window.location.hash = a),
                        X()
                    case 45:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })),
            function () {
              var t = this,
                n = arguments
              return new Promise(function (r, o) {
                var i = e.apply(t, n)
                function a(e) {
                  Ft(i, r, o, a, s, 'next', e)
                }
                function s(e) {
                  Ft(i, r, o, a, s, 'throw', e)
                }
                a(void 0)
              })
            })
        return function (e) {
          return t.apply(this, arguments)
        }
      })()
      function Dt(e) {
        return (
          (Dt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Dt(e)
        )
      }
      function At() {
        At = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          s = o.toStringTag || '@@toStringTag'
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          c({}, '')
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n)
          }
        }
        function u(e, t, n, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            s = new S(o || [])
          return r(a, '_invoke', { value: _(e, n, s) }), a
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = u
        var d = {}
        function h() {}
        function p() {}
        function f() {}
        var v = {}
        c(v, i, function () {
          return this
        })
        var m = Object.getPrototypeOf,
          y = m && m(m(O([])))
        y && y !== t && n.call(y, i) && (v = y)
        var g = (f.prototype = h.prototype = Object.create(v))
        function b(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function w(e, t) {
          function o(r, i, a, s) {
            var c = l(e[r], e, i)
            if ('throw' !== c.type) {
              var u = c.arg,
                d = u.value
              return d && 'object' == Dt(d) && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    function (e) {
                      o('next', e, a, s)
                    },
                    function (e) {
                      o('throw', e, a, s)
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      ;(u.value = e), a(u)
                    },
                    function (e) {
                      return o('throw', e, a, s)
                    }
                  )
            }
            s(c.arg)
          }
          var i
          r(this, '_invoke', {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  o(e, n, t, r)
                })
              }
              return (i = i ? i.then(r, r) : r())
            },
          })
        }
        function _(e, t, n) {
          var r = 'suspendedStart'
          return function (o, i) {
            if ('executing' === r)
              throw new Error('Generator is already running')
            if ('completed' === r) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate
              if (a) {
                var s = x(a, n)
                if (s) {
                  if (s === d) continue
                  return s
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg)
                n.dispatchException(n.arg)
              } else 'return' === n.method && n.abrupt('return', n.arg)
              r = 'executing'
              var c = l(e, t, n)
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue
                return { value: c.arg, done: n.done }
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg))
            }
          }
        }
        function x(e, t) {
          var n = t.method,
            r = e.iterator[n]
          if (void 0 === r)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            )
          var o = l(r, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d)
        }
        function E(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function k(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function S(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0)
        }
        function O(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(Dt(e) + ' is not iterable')
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise)
            var a = new w(u(t, n, r, o), i)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this
          }),
          c(g, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = []
            for (var r in t) n.push(r)
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in t) return (e.value = r), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = O),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function r(n, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return r('end')
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc')
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r]
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                d
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.tryLoc === e) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var o = r.arg
                    k(n)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              )
            },
          }),
          e
        )
      }
      function Rt(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
      }
      function Bt(e) {
        return function () {
          var t = this,
            n = arguments
          return new Promise(function (r, o) {
            var i = e.apply(t, n)
            function a(e) {
              Rt(i, r, o, a, s, 'next', e)
            }
            function s(e) {
              Rt(i, r, o, a, s, 'throw', e)
            }
            a(void 0)
          })
        }
      }
      var Gt = (function () {
        var e = {
            view: 'list',
            hasFurn: !1,
            hasTVs: !1,
            hasSim: !1,
            hasFurnMixed: !1,
            hasFurnOnly: !1,
          },
          t = function () {
            if (
              (window.location.hash === i &&
                $('.shipping-summary-info').length &&
                'Waiting for more information' ===
                  $('.shipping-summary-info').text() &&
                ((window.location.hash = '#/profile'),
                nt({
                  action: 'stepRedirect',
                  label: 'redirectShippingToProfile',
                  description:
                    'User redirect to profile - "Waiting for more information" error.',
                })),
              !$('#bash--delivery-container').length)
            ) {
              if (window.vtexjs.checkout.orderForm) {
                var t,
                  n =
                    null === (t = window.vtexjs.checkout.orderForm) ||
                    void 0 === t
                      ? void 0
                      : t.items,
                  r = Q(n),
                  o = r.hasFurniture,
                  a = r.hasTVs,
                  s = r.hasSimCards,
                  c = r.hasFurnitureMixed,
                  u = r.hasFurnitureOnly
                ;(e.hasFurn = o),
                  (e.hasTVs = a),
                  (e.hasSim = s),
                  (e.hasFurnOnly = u),
                  (e.hasFurnMixed = c)
              }
              $('.shipping-data .box-step').append(
                gt({ hasFurnOnly: e.hasFurnOnly, hasFurnMixed: e.hasFurnMixed })
              ),
                e.hasFurn
                  ? $('#shipping-data:not(.has-furniture)').addClass(
                      'has-furniture'
                    )
                  : $('#shipping-data.has-furniture').removeClass(
                      'has-furniture'
                    ),
                (e.hasFurn || e.hasSim || e.hasTVs) &&
                  ($('#bash-delivery-options').before(
                    bt({ hasSim: e.hasSim, hasTV: e.hasTVs })
                  ),
                  e.hasSim && Ke(),
                  e.hasTVs && ze()),
                $('select, input').on('invalid', function () {
                  var e = this
                  $(e)[0].setCustomValidity(' '),
                    $(e).parents('form').addClass('show-form-errors'),
                    $(e).off('change keyUp'),
                    $(e).on('change keyUp', function () {
                      $(e)[0].setCustomValidity('')
                    })
                })
            }
          }
        return (
          $(window).unload(
            Bt(
              At().mark(function e() {
                return At().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        Se()
                      case 1:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
          ),
          $(document).ready(function () {
            Se(),
              window.location.hash === i
                ? (t(),
                  $('.bash--delivery-container.hide').removeClass('hide'),
                  $('.bash--delivery-container').css('display', 'flex'))
                : $('.bash--delivery-container:not(.hide)').length &&
                  ($('.bash--delivery-container:not(.hide)').addClass('hide'),
                  $('.bash--delivery-container').css('display', 'none'))
          }),
          $(window).on('hashchange', function () {
            console.info('hashchange TO SHIPPING'),
              window.location.hash === i
                ? (setTimeout(function () {
                    console.info('SCROLL TO SHIPPING'),
                      document
                        .getElementById('shipping-data')
                        .scrollIntoView({ behavior: 'smooth' })
                  }, 500),
                  t(),
                  Xe(),
                  $('.bash--delivery-container').css('display', 'flex'),
                  $('.bash--delivery-container.hide').removeClass('hide'))
                : $('.bash--delivery-container:not(.hide)').length &&
                  ($('.bash--delivery-container:not(.hide)').addClass('hide'),
                  $('.bash--delivery-container').css('display', 'none'))
          }),
          $(window).on('orderFormUpdated.vtex', function () {
            var e,
              n,
              r =
                null === (e = window.vtexjs.checkout.orderForm) || void 0 === e
                  ? void 0
                  : e.items,
              o =
                null === (n = window.vtexjs.checkout.orderForm.shippingData) ||
                void 0 === n ||
                null === (n = n.address) ||
                void 0 === n
                  ? void 0
                  : n.addressType,
              c = Q(r),
              u = c.hasTVs,
              l = c.hasSimCards,
              d = c.hasFurnitureMixed,
              g = window.vtexjs.checkout.orderForm.messages
            if (window.location.hash === i) {
              var b = g.filter(function (e) {
                return 'error' === e.status
              })
              b && et(b)
            }
            if (
              o === s ||
              $('#shipping-option-pickup-in-point').hasClass(
                'shp-method-option-active'
              )
            ) {
              if (u || l || d)
                return (
                  window.location.hash !== i && (window.location.hash = i),
                  void setTimeout(function () {
                    var e
                    return null ===
                      (e = document.getElementById(
                        'shipping-option-delivery'
                      )) || void 0 === e
                      ? void 0
                      : e.click()
                  }, 2e3)
                )
              $('#shipping-data:not(collection-active)').addClass(
                'collection-active'
              ),
                $('.delivery-active').removeClass('delivery-active')
            } else
              t(),
                $('#shipping-data:not(delivery-active)').addClass(
                  'delivery-active'
                ),
                $('.collection-active').removeClass('collection-active')
            Xe(),
              (function () {
                var e
                if (window.vtexjs.checkout.orderForm.totalizers) {
                  var t = (
                      window.vtexjs.checkout.orderForm.totalizers.find(
                        function (e) {
                          return 'Shipping' === e.id
                        }
                      ) || {
                        value:
                          (null === (e = window.vtexjs.checkout.orderForm) ||
                          void 0 === e ||
                          null === (e = e.shippingData) ||
                          void 0 === e ||
                          null === (e = e.address) ||
                          void 0 === e
                            ? void 0
                            : e.addressType) === s
                            ? y
                            : m,
                      }
                    ).value,
                    n = 'Free'
                  t > 0 &&
                    (n = 'R'.concat((t / 100).toFixed(2).replace('.00', ''))),
                    $('#bash--delivery-fee').length > 0 &&
                      (document.getElementById('bash--delivery-fee').innerHTML =
                        n)
                }
              })(),
              (function () {
                if (
                  window.vtexjs.checkout.orderForm.clientProfileData &&
                  window.vtexjs.checkout.orderForm.shippingData
                ) {
                  var e = window.vtexjs.checkout.orderForm.shippingData,
                    t = e.selectedAddresses,
                    n = e.logisticsInfo
                  null != t &&
                    t[0] &&
                    n[0] &&
                    (t[0].addressType === s
                      ? (function () {
                          if (
                            null ===
                            document.getElementById(
                              'summary-collection-recipient'
                            )
                          ) {
                            var e =
                                window.vtexjs.checkout.orderForm.shippingData
                                  .selectedAddresses[0].receiverName,
                              t = je(f),
                              n = (null == t ? void 0 : t.phone) || null,
                              r = []
                            e && r.push(e),
                              n && r.push(J(Z(n))),
                              $(
                                'div.shp-summary-group-title.vtex-omnishipping-1-x-SummaryItemAddress'
                              ).append(
                                '<div id="summary-collection-recipient">'.concat(
                                  r.join(' - '),
                                  '<div>'
                                )
                              )
                          }
                        })()
                      : (function () {
                          if (
                            null ===
                            document.getElementById(
                              'summary-delivery-recipient'
                            )
                          ) {
                            var e =
                                window.vtexjs.checkout.orderForm.shippingData
                                  .selectedAddresses[0],
                              t = e.receiverName,
                              n = e.neighborhood,
                              r = e.street,
                              o =
                                'div.shp-summary-group-address.vtex-omnishipping-1-x-SummaryItemAddress',
                              i = je(v),
                              a = {}
                            try {
                              a = JSON.parse(i.jsonString)
                            } catch (e) {
                              console.error(
                                "Couldn't parse deliverContext",
                                null == e ? void 0 : e.message
                              )
                            }
                            var s = a,
                              c = s.receiverPhone,
                              u = s.businessName,
                              l = []
                            t && l.push(t),
                              c && l.push(J(Z(c))),
                              $(o).append(
                                '\n    <div id="summary-delivery-recipient">\n      '.concat(
                                  l.join(' - '),
                                  '\n    <div>\n  '
                                )
                              )
                            var d = r
                            u && (d = ''.concat(u, ', ').concat(r)),
                              $(o).find('.street').html(d),
                              n &&
                                $(o).find('.city').prepend(''.concat(n, ', ')),
                              $(o).find('.postalCode-delimiter').html(', ')
                          }
                        })())
                }
              })(),
              window.location.hash !== a ||
                (function () {
                  var e,
                    t =
                      null === (e = window.vtexjs.checkout.orderForm) ||
                      void 0 === e
                        ? void 0
                        : e.items,
                    n = Q(t),
                    r = n.hasTVs,
                    o = n.hasSimCards,
                    i = !0
                  if ((r && (je(p).tvID || (i = !1)), o)) {
                    var a = je(h)
                    ;(a.idOrPassport && a.streetAddress && a.postalCode) ||
                      (i = !1)
                  }
                  return i
                })() ||
                (ne(),
                (window.location.hash = i),
                nt({
                  action: 'stepRedirect',
                  label: 'redirectPaymentToShipping',
                  description:
                    'User redirect to shipping because Extra Fields are invalid.',
                }))
          }),
          $(document).on('click', 'a[data-view]', function (e) {
            e.preventDefault()
            var t = $(this).data('view'),
              n = decodeURIComponent($(this).data('content'))
            window.postMessage({
              action: 'setDeliveryView',
              view: t,
              content: n,
            })
          }),
          $(document).on('click', '#no-address-search-results', function () {
            document.getElementById('bash--address-form').reset(),
              document.getElementById('bash--input-street').focus()
          }),
          $(document).on(
            'change',
            'input[type="radio"][name="selected-address"]',
            function () {
              var e = this,
                t = (function (e) {
                  try {
                    return JSON.parse(decodeURIComponent(e))
                  } catch (e) {
                    return
                  }
                })($(this).parents('.bash--address-listing').data('address'))
              document.forms['bash--delivery-form'] &&
                (document.forms['bash--delivery-form'].reset(),
                $('#bash--input-lat').val(''),
                $('#bash--input-lng').val(''),
                document.forms['bash--delivery-form'].classList.remove(
                  'show-form-errors'
                )),
                t &&
                  ke(t.addressName)
                    .then(function (n) {
                      _t(n || t, { validateExtraFields: !1 }),
                        $(
                          'input[type="radio"][name="selected-address"]:checked'
                        ).attr('checked', !1),
                        $(e).attr('checked', !0)
                    })
                    .catch(function (e) {
                      console.error(
                        'Could not get address - address selection',
                        null == e ? void 0 : e.message
                      )
                    })
            }
          ),
          $(document).on(
            'change',
            '#bash--input-rica_sameAddress',
            function () {
              var e
              this.checked
                ? $('.rica-conditional-fields').slideUp(function () {
                    return Ke()
                  })
                : ((e = $('#bash--input-rica_idOrPassport').val()),
                  He(
                    {
                      idOrPassport: null != e ? e : '',
                      fullName: '',
                      streetAddress: '',
                      suburb: '',
                      city: '',
                      postalCode: '',
                      province: '',
                    },
                    Pe,
                    'rica_',
                    !0
                  ),
                  $('.rica-conditional-fields').slideDown(function () {
                    return $('#bash--input-rica_fullName').focus()
                  }))
            }
          ),
          $(document).on('change', 'input[name="addressType"]', function () {
            $(this).is(':checked') &&
              ('business' === $(this).val() ? ee({ focus: !0 }) : te())
          }),
          $(document).on(
            'click',
            '#shipping-option-pickup-in-point, #shipping-option-delivery',
            function () {
              'shipping-option-pickup-in-point' === $(this).attr('id')
                ? $('#bash--delivery-container').hide()
                : $('#bash--delivery-container').show()
            }
          ),
          $(document).on('submit', '#bash--address-form', Lt),
          $(document).on('submit', '#bash--delivery-form', It),
          $(document).on('click', '.remove-cart-item', function (e) {
            var t
            e.preventDefault(),
              ((t = $(this).data('index')),
              window.vtexjs.checkout
                .updateItems([{ index: ''.concat(t), quantity: 0 }])
                .done(function () {
                  X()
                })).done(function () {
                X()
              })
          }),
          $(document).on('click', '.bash--radio-option', function () {
            $('#bash-delivery-error-container').html('')
          }),
          $(document).on('keyup click', '.invalid', function () {
            $(this).removeClass('invalid')
          }),
          window.addEventListener('message', function (e) {
            var t,
              n = e.data
            if (n && n.action)
              switch (n.action) {
                case 'setDeliveryView':
                  if (
                    (null ===
                      (t = document.querySelector(
                        '.bash--delivery-container'
                      )) ||
                      void 0 === t ||
                      t.setAttribute('data-view', n.view),
                    ('address-form' === n.view || 'address-edit' === n.view) &&
                      ((function (e) {
                        var t = document.querySelector(e)
                        if (t) {
                          t.setAttribute('type', 'tel'),
                            t.setAttribute('maxlength', 12),
                            (t.value = Y(t.value))
                          var n = $(e)
                          n.keyup(function (e) {
                            var t,
                              r = e.currentTarget.value
                                .replace(/[^0-9+*#]+/g, '')
                                .trim(),
                              o = 8 === e.keyCode
                            ;(t = Y(r, !o)),
                              n.parent('.text').removeClass('error'),
                              n.parent('.text').find('span.error').hide(),
                              n.val(t)
                          })
                        }
                      })('#bash--input-receiverPhone'),
                      n.content))
                  )
                    try {
                      var r = JSON.parse(
                        decodeURIComponent(
                          $('#'.concat(n.content)).data('address')
                        )
                      )
                      We(r)
                    } catch (e) {
                      console.warn('Could not parse address Json', n.content)
                    }
                  break
                case 'FB_LOG':
                  break
                default:
                  console.error('Unknown action', n.action)
              }
          }),
          { state: e, init: function () {} }
        )
      })()
      const Mt = Gt
      var qt = (function () {
        var e = {
            showFurnitureForm: !1,
            showTVIDForm: !1,
            showRICAForm: !1,
            showTVorRICAMsg: !1,
            showMixedProductsMsg: !1,
            runningObserver: !1,
          },
          t = function () {
            setTimeout(function () {
              !(function () {
                if (window.vtexjs.checkout.orderForm) {
                  var t = window.vtexjs.checkout.orderForm.items,
                    n = Q(t),
                    r = n.hasTVs,
                    o = n.hasSimCards,
                    i = n.hasFurnitureMixed
                  ;(e.showTVIDForm = r),
                    (e.showRICAForm = o),
                    (e.showTVorRICAMsg = e.showTVIDForm || e.showRICAForm),
                    (e.showMixedProductsMsg = i)
                }
              })(),
                e.showFurnitureForm
                  ? $('div.subheader').css('display', 'none')
                  : $('div.subheader').css('display', 'block')
            }, 500)
          }
        return (
          $(document).ready(function () {
            t()
          }),
          $(window).on('hashchange orderFormUpdated.vtex', function () {
            t()
          }),
          $(document).on(
            'click',
            '#shipping-data .btn-link.vtex-omnishipping-1-x-btnDelivery',
            function () {
              t()
            }
          ),
          {
            state: e,
            setView: function (e) {
              var t
              null === (t = document) ||
                void 0 === t ||
                null === (t = t.body) ||
                void 0 === t ||
                t.setAttribute('data-delivery-view', e)
            },
            showCustomSections: function () {
              var t,
                n = $('#tfg-custom-tvrica-msg').length > 0,
                r = $('#tfg-custom-mixed-msg').length > 0,
                o = !1
              ;(e.showTVorRICAMsg || e.showMixedProductsMsg) &&
                ($(
                  '.vtex-omnishipping-1-x-deliveryChannelsWrapper.custom-disabled'
                ).length < 1 &&
                  ($('#shipping-option-delivery').trigger('click'),
                  $('.vtex-omnishipping-1-x-deliveryChannelsWrapper').addClass(
                    'custom-disabled'
                  )),
                e.showTVorRICAMsg &&
                  !n &&
                  ($('.vtex-omnishipping-1-x-addressFormPart1').prepend(
                    '\n  <div id="tfg-custom-tvrica-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      You can\'t collect this order in store because your cart contains items \n      which require either RICA or TV License validation.\n    </p>\n  </div>\n'
                  ),
                  (o = !0)),
                e.showMixedProductsMsg &&
                  !r &&
                  ($('.vtex-omnishipping-1-x-addressFormPart1').prepend(''),
                  (o = !0))),
                o &&
                  ((t = '.tfg-custom-step'),
                  $(t).addClass('custom-step-border'),
                  $(t).last().addClass('last-custom-step-border'))
            },
            init: function () {},
          }
        )
      })()
      const Vt = qt
      function Ut(e) {
        return (
          (Ut =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Ut(e)
        )
      }
      function Yt() {
        Yt = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          s = o.toStringTag || '@@toStringTag'
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          c({}, '')
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n)
          }
        }
        function u(e, t, n, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            s = new S(o || [])
          return r(a, '_invoke', { value: _(e, n, s) }), a
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = u
        var d = {}
        function h() {}
        function p() {}
        function f() {}
        var v = {}
        c(v, i, function () {
          return this
        })
        var m = Object.getPrototypeOf,
          y = m && m(m(O([])))
        y && y !== t && n.call(y, i) && (v = y)
        var g = (f.prototype = h.prototype = Object.create(v))
        function b(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function w(e, t) {
          function o(r, i, a, s) {
            var c = l(e[r], e, i)
            if ('throw' !== c.type) {
              var u = c.arg,
                d = u.value
              return d && 'object' == Ut(d) && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    function (e) {
                      o('next', e, a, s)
                    },
                    function (e) {
                      o('throw', e, a, s)
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      ;(u.value = e), a(u)
                    },
                    function (e) {
                      return o('throw', e, a, s)
                    }
                  )
            }
            s(c.arg)
          }
          var i
          r(this, '_invoke', {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  o(e, n, t, r)
                })
              }
              return (i = i ? i.then(r, r) : r())
            },
          })
        }
        function _(e, t, n) {
          var r = 'suspendedStart'
          return function (o, i) {
            if ('executing' === r)
              throw new Error('Generator is already running')
            if ('completed' === r) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate
              if (a) {
                var s = x(a, n)
                if (s) {
                  if (s === d) continue
                  return s
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg)
                n.dispatchException(n.arg)
              } else 'return' === n.method && n.abrupt('return', n.arg)
              r = 'executing'
              var c = l(e, t, n)
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue
                return { value: c.arg, done: n.done }
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg))
            }
          }
        }
        function x(e, t) {
          var n = t.method,
            r = e.iterator[n]
          if (void 0 === r)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            )
          var o = l(r, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d)
        }
        function E(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function k(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function S(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0)
        }
        function O(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(Ut(e) + ' is not iterable')
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === p || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise)
            var a = new w(u(t, n, r, o), i)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this
          }),
          c(g, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = []
            for (var r in t) n.push(r)
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in t) return (e.value = r), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = O),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function r(n, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return r('end')
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc')
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r]
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                d
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.tryLoc === e) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var o = r.arg
                    k(n)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              )
            },
          }),
          e
        )
      }
      function Wt(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
      }
      var Zt = document.createElement('script')
      Zt.setAttribute('src', 'https://unpkg.com/penpal@^6/dist/penpal.min.js'),
        document.head.appendChild(Zt)
      var Jt = (function () {
        var e,
          t =
            ((e = Yt().mark(function e() {
              var t, n
              return Yt().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n =
                            null === (t = window) ||
                            void 0 === t ||
                            null === (t = t.vtexjs) ||
                            void 0 === t ||
                            null === (t = t.checkout) ||
                            void 0 === t
                              ? void 0
                              : t.orderForm),
                          (e.prev = 1),
                          n)
                        ) {
                          e.next = 6
                          break
                        }
                        return (
                          (e.next = 5), window.vtexjs.checkout.getOrderForm()
                        )
                      case 5:
                        n = e.sent
                      case 6:
                        n && (Vt.init(), mt.init(), Mt.init()), (e.next = 16)
                        break
                      case 9:
                        ;(e.prev = 9),
                          (e.t0 = e.catch(1)),
                          console.error(
                            'VTEX_ORDERFORM_ERROR: Could not load at custom-shipping-steps Entry Point',
                            e.t0
                          ),
                          nt({
                            eventCategory: 'Checkout_SystemError',
                            action: 'OrderFormFailed',
                            label: 'Could not getOrderForm() from vtex',
                            description:
                              'Could not load orderForm on custom-shipping-steps Entry Point',
                          }),
                          Vt.init(),
                          mt.init(),
                          Mt.init()
                      case 16:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[1, 9]]
              )
            })),
            function () {
              var t = this,
                n = arguments
              return new Promise(function (r, o) {
                var i = e.apply(t, n)
                function a(e) {
                  Wt(i, r, o, a, s, 'next', e)
                }
                function s(e) {
                  Wt(i, r, o, a, s, 'throw', e)
                }
                a(void 0)
              })
            })
        return function () {
          return t.apply(this, arguments)
        }
      })()
      document.addEventListener('DOMContentLoaded', Jt)
    })()
})()
