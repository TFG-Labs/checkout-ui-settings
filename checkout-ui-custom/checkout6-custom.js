/*! For license information please see checkout6-custom.js.LICENSE.txt */
(() => {
  const e = {
    176: (e, t, n) => {
      function r() {
        return (
          !(typeof __SENTRY_BROWSER_BUNDLE__ !== 'undefined' && __SENTRY_BROWSER_BUNDLE__) &&
          Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]'
        );
      }
      function o(e, t) {
        return e.require(t);
      }
      n.d(t, { l$: () => o, KV: () => r }), (e = n.hmd(e));
    },
    170: (e, t, n) => {
      n.d(t, { ph: () => l, yW: () => u });
      const r = n(176);
      const o = n(235);
      e = n.hmd(e);
      const i = (0, o.Rf)();
      const a = { nowSeconds: () => Date.now() / 1e3 };
      const s = (0, r.KV)()
        ? (function () {
            try {
              return (0, r.l$)(e, 'perf_hooks').performance;
            } catch (e) {}
          })()
        : (function () {
            const { performance: e } = i;
            if (e && e.now) return { now: () => e.now(), timeOrigin: Date.now() - e.now() };
          })();
      const c = void 0 === s ? a : { nowSeconds: () => (s.timeOrigin + s.now()) / 1e3 };
      const u = a.nowSeconds.bind(a);
      const l = c.nowSeconds.bind(c);
      let d;
      (() => {
        const { performance: e } = i;
        if (!e || !e.now) return void (d = 'none');
        const t = 36e5;
        const n = e.now();
        const r = Date.now();
        const o = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t;
        const a = o < t;
        const s = e.timing && e.timing.navigationStart;
        const c = typeof s === 'number' ? Math.abs(s + n - r) : t;
        a || c < t ? (o <= c ? ((d = 'timeOrigin'), e.timeOrigin) : (d = 'navigationStart')) : (d = 'dateNow');
      })();
    },
    235: (e, t, n) => {
      function r(e) {
        return e && e.Math == Math ? e : void 0;
      }
      n.d(t, { Rf: () => i, YO: () => a, n2: () => o });
      const o =
        (typeof globalThis === 'object' && r(globalThis)) ||
        (typeof window === 'object' && r(window)) ||
        (typeof self === 'object' && r(self)) ||
        (typeof n.g === 'object' && r(n.g)) ||
        (function () {
          return this;
        })() ||
        {};
      function i() {
        return o;
      }
      function a(e, t, n) {
        const r = n || o;
        const i = (r.__SENTRY__ = r.__SENTRY__ || {});
        return i[e] || (i[e] = t());
      }
    },
  };
  const t = {};
  function n(r) {
    const o = t[r];
    if (void 0 !== o) return o.exports;
    const i = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r](i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.d = (e, t) => {
    for (const r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.g = (function () {
      if (typeof globalThis === 'object') return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if (typeof window === 'object') return window;
      }
    })()),
    (n.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        set: () => {
          throw new Error(
            `ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ${e.id}`
          );
        },
      }),
      e
    )),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      const e = function () {
        return '\n  <p id="box-pickup-complement" \n  class="input custom-field-complement tfg-custom-addressForm">\n    <label>Mobile number</label>\n    <input \n      id="custom-pickup-complement" \n      class="input-xlarge success" \n      type="tel" \n      name="complement" \n      placeholder="" \n    />\n  </p>';
      };
      const t = '#/shipping';
      const r = '#/payment';
      const o = 'search';
      const i = 'residential';
      const a = 'business';
      const s = 'commercial';
      const c = 'pickup';
      const u = 'ricafields';
      const l = 'tvfields';
      const d = 'pickup';
      const h = ['bash.com', 'preprod--thefoschini.myvtex.com'].includes(window.location.host)
        ? 'https://store-api.www.bash.com/custom-api/'
        : ['thefoschiniqa.myvtex.com', 'staging.tfglabs.dev'].includes(window.location.host)
        ? 'https://store-api.staging.tfglabs.dev/custom-api/'
        : ''.concat(window.location.protocol, '//').concat(window.location.host, '/custom-api/');
      const p = n(235);
      function f() {
        const e = p.n2;
        const t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, '');
        const n = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e) => (e ^ ((15 & n()) >> (e / 4))).toString(16));
      }
      const v = n(170);
      const m = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'];
      function y(e) {
        if (!('console' in p.n2)) return e();
        const t = p.n2.console;
        const n = {};
        m.forEach((e) => {
          const r = t[e] && t[e].__sentry_original__;
          e in t && r && ((n[e] = t[e]), (t[e] = r));
        });
        try {
          return e();
        } finally {
          Object.keys(n).forEach((e) => {
            t[e] = n[e];
          });
        }
      }
      function g() {
        let e = !1;
        const t = {
          enable: () => {
            e = !0;
          },
          disable: () => {
            e = !1;
          },
        };
        return (
          typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__
            ? m.forEach((n) => {
                t[n] = (...t) => {
                  e &&
                    y(() => {
                      p.n2.console[n](`Sentry Logger [${n}]:`, ...t);
                    });
                };
              })
            : m.forEach((e) => {
                t[e] = () => {};
              }),
          t
        );
      }
      let b;
      b = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__ ? (0, p.YO)('logger', g) : g();
      const w = n(176);
      const _ = 'production';
      const x = Object.prototype.toString;
      function k(e) {
        return (function (e, t) {
          return x.call(e) === `[object ${t}]`;
        })(e, 'Object');
      }
      function S(e) {
        return Boolean(e && e.then && typeof e.then === 'function');
      }
      let E;
      !(function (e) {
        (e[(e.PENDING = 0)] = 'PENDING'), (e[(e.RESOLVED = 1)] = 'RESOLVED'), (e[(e.REJECTED = 2)] = 'REJECTED');
      })(E || (E = {}));
      class O {
        __init() {
          this._state = E.PENDING;
        }

        __init2() {
          this._handlers = [];
        }

        constructor(e) {
          O.prototype.__init.call(this),
            O.prototype.__init2.call(this),
            O.prototype.__init3.call(this),
            O.prototype.__init4.call(this),
            O.prototype.__init5.call(this),
            O.prototype.__init6.call(this);
          try {
            e(this._resolve, this._reject);
          } catch (e) {
            this._reject(e);
          }
        }

        then(e, t) {
          return new O((n, r) => {
            this._handlers.push([
              !1,
              (t) => {
                if (e) {
                  try {
                    n(e(t));
                  } catch (e) {
                    r(e);
                  }
                } else n(t);
              },
              (e) => {
                if (t) {
                  try {
                    n(t(e));
                  } catch (e) {
                    r(e);
                  }
                } else r(e);
              },
            ]),
              this._executeHandlers();
          });
        }

        catch(e) {
          return this.then((e) => e, e);
        }

        finally(e) {
          return new O((t, n) => {
            let r;
            let o;
            return this.then(
              (t) => {
                (o = !1), (r = t), e && e();
              },
              (t) => {
                (o = !0), (r = t), e && e();
              }
            ).then(() => {
              o ? n(r) : t(r);
            });
          });
        }

        __init3() {
          this._resolve = (e) => {
            this._setResult(E.RESOLVED, e);
          };
        }

        __init4() {
          this._reject = (e) => {
            this._setResult(E.REJECTED, e);
          };
        }

        __init5() {
          this._setResult = (e, t) => {
            this._state === E.PENDING &&
              (S(t)
                ? t.then(this._resolve, this._reject)
                : ((this._state = e), (this._value = t), this._executeHandlers()));
          };
        }

        __init6() {
          this._executeHandlers = () => {
            if (this._state === E.PENDING) return;
            const e = this._handlers.slice();
            (this._handlers = []),
              e.forEach((e) => {
                e[0] ||
                  (this._state === E.RESOLVED && e[1](this._value),
                  this._state === E.REJECTED && e[2](this._value),
                  (e[0] = !0));
              });
          };
        }
      }
      function j(e) {
        return C(e, new Map());
      }
      function C(e, t) {
        if (k(e)) {
          const n = t.get(e);
          if (void 0 !== n) return n;
          const r = {};
          t.set(e, r);
          for (const n of Object.keys(e)) void 0 !== e[n] && (r[n] = C(e[n], t));
          return r;
        }
        if (Array.isArray(e)) {
          const n = t.get(e);
          if (void 0 !== n) return n;
          const r = [];
          return (
            t.set(e, r),
            e.forEach((e) => {
              r.push(C(e, t));
            }),
            r
          );
        }
        return e;
      }
      function L(e, t = {}) {
        if (
          (t.user &&
            (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
            e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
          (e.timestamp = t.timestamp || (0, v.ph)()),
          t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
          t.sid && (e.sid = t.sid.length === 32 ? t.sid : f()),
          void 0 !== t.init && (e.init = t.init),
          !e.did && t.did && (e.did = `${t.did}`),
          typeof t.started === 'number' && (e.started = t.started),
          e.ignoreDuration)
        )
          e.duration = void 0;
        else if (typeof t.duration === 'number') e.duration = t.duration;
        else {
          const t = e.timestamp - e.started;
          e.duration = t >= 0 ? t : 0;
        }
        t.release && (e.release = t.release),
          t.environment && (e.environment = t.environment),
          !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
          !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
          typeof t.errors === 'number' && (e.errors = t.errors),
          t.status && (e.status = t.status);
      }
      class P {
        constructor() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {});
        }

        static clone(e) {
          const t = new P();
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
          );
        }

        addScopeListener(e) {
          this._scopeListeners.push(e);
        }

        addEventProcessor(e) {
          return this._eventProcessors.push(e), this;
        }

        setUser(e) {
          return (
            (this._user = e || {}), this._session && L(this._session, { user: e }), this._notifyScopeListeners(), this
          );
        }

        getUser() {
          return this._user;
        }

        getRequestSession() {
          return this._requestSession;
        }

        setRequestSession(e) {
          return (this._requestSession = e), this;
        }

        setTags(e) {
          return (this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this;
        }

        setTag(e, t) {
          return (this._tags = { ...this._tags, [e]: t }), this._notifyScopeListeners(), this;
        }

        setExtras(e) {
          return (this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this;
        }

        setExtra(e, t) {
          return (this._extra = { ...this._extra, [e]: t }), this._notifyScopeListeners(), this;
        }

        setFingerprint(e) {
          return (this._fingerprint = e), this._notifyScopeListeners(), this;
        }

        setLevel(e) {
          return (this._level = e), this._notifyScopeListeners(), this;
        }

        setTransactionName(e) {
          return (this._transactionName = e), this._notifyScopeListeners(), this;
        }

        setContext(e, t) {
          return t === null ? delete this._contexts[e] : (this._contexts[e] = t), this._notifyScopeListeners(), this;
        }

        setSpan(e) {
          return (this._span = e), this._notifyScopeListeners(), this;
        }

        getSpan() {
          return this._span;
        }

        getTransaction() {
          const e = this.getSpan();
          return e && e.transaction;
        }

        setSession(e) {
          return e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this;
        }

        getSession() {
          return this._session;
        }

        update(e) {
          if (!e) return this;
          if (typeof e === 'function') {
            const t = e(this);
            return t instanceof P ? t : this;
          }
          return (
            e instanceof P
              ? ((this._tags = { ...this._tags, ...e._tags }),
                (this._extra = { ...this._extra, ...e._extra }),
                (this._contexts = { ...this._contexts, ...e._contexts }),
                e._user && Object.keys(e._user).length && (this._user = e._user),
                e._level && (this._level = e._level),
                e._fingerprint && (this._fingerprint = e._fingerprint),
                e._requestSession && (this._requestSession = e._requestSession))
              : k(e) &&
                ((this._tags = { ...this._tags, ...e.tags }),
                (this._extra = { ...this._extra, ...e.extra }),
                (this._contexts = { ...this._contexts, ...e.contexts }),
                e.user && (this._user = e.user),
                e.level && (this._level = e.level),
                e.fingerprint && (this._fingerprint = e.fingerprint),
                e.requestSession && (this._requestSession = e.requestSession)),
            this
          );
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
          );
        }

        addBreadcrumb(e, t) {
          const n = typeof t === 'number' ? t : 100;
          if (n <= 0) return this;
          const r = { timestamp: (0, v.yW)(), ...e };
          return (this._breadcrumbs = [...this._breadcrumbs, r].slice(-n)), this._notifyScopeListeners(), this;
        }

        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }

        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }

        addAttachment(e) {
          return this._attachments.push(e), this;
        }

        getAttachments() {
          return this._attachments;
        }

        clearAttachments() {
          return (this._attachments = []), this;
        }

        applyToEvent(e, t = {}) {
          if (
            (this._extra && Object.keys(this._extra).length && (e.extra = { ...this._extra, ...e.extra }),
            this._tags && Object.keys(this._tags).length && (e.tags = { ...this._tags, ...e.tags }),
            this._user && Object.keys(this._user).length && (e.user = { ...this._user, ...e.user }),
            this._contexts && Object.keys(this._contexts).length && (e.contexts = { ...this._contexts, ...e.contexts }),
            this._level && (e.level = this._level),
            this._transactionName && (e.transaction = this._transactionName),
            this._span)
          ) {
            e.contexts = { trace: this._span.getTraceContext(), ...e.contexts };
            const t = this._span.transaction && this._span.transaction.name;
            t && (e.tags = { transaction: t, ...e.tags });
          }
          return (
            this._applyFingerprint(e),
            (e.breadcrumbs = [...(e.breadcrumbs || []), ...this._breadcrumbs]),
            (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
            (e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...this._sdkProcessingMetadata }),
            this._notifyEventProcessors(
              [...(0, p.YO)('globalEventProcessors', () => []), ...this._eventProcessors],
              e,
              t
            )
          );
        }

        setSDKProcessingMetadata(e) {
          return (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...e }), this;
        }

        _notifyEventProcessors(e, t, n, r = 0) {
          return new O((o, i) => {
            const a = e[r];
            if (t === null || typeof a !== 'function') o(t);
            else {
              const s = a({ ...t }, n);
              (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
                a.id &&
                s === null &&
                b.log(`Event processor "${a.id}" dropped event`),
                S(s)
                  ? s.then((t) => this._notifyEventProcessors(e, t, n, r + 1).then(o)).then(null, i)
                  : this._notifyEventProcessors(e, s, n, r + 1)
                      .then(o)
                      .then(null, i);
            }
          });
        }

        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((e) => {
              e(this);
            }),
            (this._notifyingListeners = !1));
        }

        _applyFingerprint(e) {
          let t;
          (e.fingerprint = e.fingerprint ? ((t = e.fingerprint), Array.isArray(t) ? t : [t]) : []),
            this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
            e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
        }
      }
      const N = 100;
      class T {
        constructor(e, t = new P(), n = 4) {
          (this._version = n), (this._stack = [{ scope: t }]), e && this.bindClient(e);
        }

        isOlderThan(e) {
          return this._version < e;
        }

        bindClient(e) {
          (this.getStackTop().client = e), e && e.setupIntegrations && e.setupIntegrations();
        }

        pushScope() {
          const e = P.clone(this.getScope());
          return this.getStack().push({ client: this.getClient(), scope: e }), e;
        }

        popScope() {
          return !(this.getStack().length <= 1 || !this.getStack().pop());
        }

        withScope(e) {
          const t = this.pushScope();
          try {
            e(t);
          } finally {
            this.popScope();
          }
        }

        getClient() {
          return this.getStackTop().client;
        }

        getScope() {
          return this.getStackTop().scope;
        }

        getStack() {
          return this._stack;
        }

        getStackTop() {
          return this._stack[this._stack.length - 1];
        }

        captureException(e, t) {
          const n = (this._lastEventId = t && t.event_id ? t.event_id : f());
          const r = new Error('Sentry syntheticException');
          return (
            this._withClient((o, i) => {
              o.captureException(e, { originalException: e, syntheticException: r, ...t, event_id: n }, i);
            }),
            n
          );
        }

        captureMessage(e, t, n) {
          const r = (this._lastEventId = n && n.event_id ? n.event_id : f());
          const o = new Error(e);
          return (
            this._withClient((i, a) => {
              i.captureMessage(e, t, { originalException: e, syntheticException: o, ...n, event_id: r }, a);
            }),
            r
          );
        }

        captureEvent(e, t) {
          const n = t && t.event_id ? t.event_id : f();
          return (
            e.type || (this._lastEventId = n),
            this._withClient((r, o) => {
              r.captureEvent(e, { ...t, event_id: n }, o);
            }),
            n
          );
        }

        lastEventId() {
          return this._lastEventId;
        }

        addBreadcrumb(e, t) {
          const { scope: n, client: r } = this.getStackTop();
          if (!r) return;
          const { beforeBreadcrumb: o = null, maxBreadcrumbs: i = N } = (r.getOptions && r.getOptions()) || {};
          if (i <= 0) return;
          const a = { timestamp: (0, v.yW)(), ...e };
          const s = o ? y(() => o(a, t)) : a;
          s !== null && (r.emit && r.emit('beforeAddBreadcrumb', s, t), n.addBreadcrumb(s, i));
        }

        setUser(e) {
          this.getScope().setUser(e);
        }

        setTags(e) {
          this.getScope().setTags(e);
        }

        setExtras(e) {
          this.getScope().setExtras(e);
        }

        setTag(e, t) {
          this.getScope().setTag(e, t);
        }

        setExtra(e, t) {
          this.getScope().setExtra(e, t);
        }

        setContext(e, t) {
          this.getScope().setContext(e, t);
        }

        configureScope(e) {
          const { scope: t, client: n } = this.getStackTop();
          n && e(t);
        }

        run(e) {
          const t = I(this);
          try {
            e(this);
          } finally {
            I(t);
          }
        }

        getIntegration(e) {
          const t = this.getClient();
          if (!t) return null;
          try {
            return t.getIntegration(e);
          } catch (t) {
            return (
              (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
                b.warn(`Cannot retrieve integration ${e.id} from the current Hub`),
              null
            );
          }
        }

        startTransaction(e, t) {
          return this._callExtensionMethod('startTransaction', e, t);
        }

        traceHeaders() {
          return this._callExtensionMethod('traceHeaders');
        }

        captureSession(e = !1) {
          if (e) return this.endSession();
          this._sendSessionUpdate();
        }

        endSession() {
          const e = this.getStackTop().scope;
          const t = e.getSession();
          t &&
            (function (e, t) {
              let n = {};
              e.status === 'ok' && (n = { status: 'exited' }), L(e, n);
            })(t),
            this._sendSessionUpdate(),
            e.setSession();
        }

        startSession(e) {
          const { scope: t, client: n } = this.getStackTop();
          const { release: r, environment: o = _ } = (n && n.getOptions()) || {};
          const { userAgent: i } = p.n2.navigator || {};
          const a = (function (e) {
            const t = (0, v.ph)();
            const n = {
              sid: f(),
              init: !0,
              timestamp: t,
              started: t,
              duration: 0,
              status: 'ok',
              errors: 0,
              ignoreDuration: !1,
              toJSON: () =>
                (function (e) {
                  return j({
                    sid: `${e.sid}`,
                    init: e.init,
                    started: new Date(1e3 * e.started).toISOString(),
                    timestamp: new Date(1e3 * e.timestamp).toISOString(),
                    status: e.status,
                    errors: e.errors,
                    did: typeof e.did === 'number' || typeof e.did === 'string' ? `${e.did}` : void 0,
                    duration: e.duration,
                    attrs: {
                      release: e.release,
                      environment: e.environment,
                      ip_address: e.ipAddress,
                      user_agent: e.userAgent,
                    },
                  });
                })(n),
            };
            return e && L(n, e), n;
          })({ release: r, environment: o, user: t.getUser(), ...(i && { userAgent: i }), ...e });
          const s = t.getSession && t.getSession();
          return s && s.status === 'ok' && L(s, { status: 'exited' }), this.endSession(), t.setSession(a), a;
        }

        shouldSendDefaultPii() {
          const e = this.getClient();
          const t = e && e.getOptions();
          return Boolean(t && t.sendDefaultPii);
        }

        _sendSessionUpdate() {
          const { scope: e, client: t } = this.getStackTop();
          if (!e) return;
          const n = e.getSession();
          n && t && t.captureSession && t.captureSession(n);
        }

        _withClient(e) {
          const { scope: t, client: n } = this.getStackTop();
          n && e(n, t);
        }

        _callExtensionMethod(e, ...t) {
          const n = F().__SENTRY__;
          if (n && n.extensions && typeof n.extensions[e] === 'function') return n.extensions[e].apply(this, t);
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
            b.warn(`Extension method ${e} couldn't be found, doing nothing.`);
        }
      }
      function F() {
        return (p.n2.__SENTRY__ = p.n2.__SENTRY__ || { extensions: {}, hub: void 0 }), p.n2;
      }
      function I(e) {
        const t = F();
        const n = A(t);
        return R(t, e), n;
      }
      function D(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
      }
      function A(e) {
        return (0, p.YO)('hub', () => new T(), e);
      }
      function R(e, t) {
        return !!e && (((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t), !0);
      }
      const B = function (e) {
        const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((e = e.replace(/[^0-9+*#]+/g, '').trim())[0] === '0') {
          if (e.length >= 6) {
            const n = [e.slice(0, 3), e.slice(3, 6), e.slice(6)].join(' ');
            return t ? n.trim() : n;
          }
          if (e.length >= 3) {
            const r = [e.slice(0, 3), e.slice(3)].join(' ');
            return t ? r.trim() : r;
          }
        } else {
          if (e.length >= 5) {
            const o = [e.slice(0, 2), e.slice(2, 5), e.slice(5)].join(' ');
            return t ? o.trim() : o;
          }
          if (e.length >= 2) {
            const i = [e.slice(0, 2), e.slice(2)].join(' ');
            return t ? i.trim() : i;
          }
        }
        return t ? e.trim() : e;
      };
      const M = function (e) {
        let t;
        let n;
        let r;
        let o;
        const i = e.preferred;
        const a = void 0 === i ? void 0 : i;
        const s = e.type;
        const c = void 0 === s ? 'profile' : s;
        const u = e.fields;
        return c === 'collect'
          ? a ||
              (u == null ? void 0 : u.phone) ||
              ((r = document) === null ||
              void 0 === r ||
              (r = r.getElementById('client-phone')) === null ||
              void 0 === r
                ? void 0
                : r.value) ||
              ((o = window.vtexjs.checkout.orderForm) === null ||
              void 0 === o ||
              (o = o.clientProfileData) === null ||
              void 0 === o
                ? void 0
                : o.phone) ||
              ''
          : a ||
              ((t = window.vtexjs.checkout.orderForm) === null ||
              void 0 === t ||
              (t = t.clientProfileData) === null ||
              void 0 === t
                ? void 0
                : t.phone) ||
              ((n = document) === null ||
              void 0 === n ||
              (n = n.getElementById('client-phone')) === null ||
              void 0 === n
                ? void 0
                : n.value) ||
              '';
      };
      const q = function (e) {
        if (!e) return '';
        let t = e.replace(/\s/g, '');
        return t.length === 9 && t[0] !== '0' && (t = '0'.concat(t)), t;
      };
      const G = function (e) {
        let t;
        console.error('ERROR', e),
          (t = e),
          (function () {
            const e = F();
            return (
              (D(e) && !A(e).isOlderThan(4)) || R(e, new T()),
              (0, w.KV)()
                ? (function (e) {
                    try {
                      const t = F().__SENTRY__;
                      const n = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
                      if (!n) return A(e);
                      if (!D(n) || A(n).isOlderThan(4)) {
                        const t = A(e).getStackTop();
                        R(n, new T(t.client, P.clone(t.scope)));
                      }
                      return A(n);
                    } catch (t) {
                      return A(e);
                    }
                  })(e)
                : A(e)
            );
          })().captureException(t, { captureContext: undefined });
      };
      const V = function (e) {
        let t;
        const n = e.cookie;
        const r = e.cache;
        const o = e.json;
        const i = new Headers();
        return (
          n && i.append('Cookie', (t = document) === null || void 0 === t ? void 0 : t.cookie),
          r && i.append('Cache-Control', 'no-cache'),
          o && i.append('Content-type', 'application/json'),
          i
        );
      };
      const U = function (e) {
        return (function (e) {
          return !!e && ((e = e.replace(/\s/g, ''))[0] === '0' ? e.match(/[0-9\s]{10}/) : e.match(/[0-9\s]{9,}/));
        })(e);
      };
      const Y = function (e) {
        let t;
        let n;
        const r = ['938942995'];
        const o = ['24833302'];
        const i = [];
        let a = !1;
        let s = !1;
        let c = !1;
        let u = 0;
        return (
          e.forEach((e) => {
            const t = e.productCategoryIds.split('/');
            i.push(t),
              t.forEach((e) => {
                e && (r.includes(e) ? (a = !0) : o.includes(e) && (s = !0));
              }),
              e.modalType === 'FURNITURE' && ((c = !0), (u += 1));
          }),
          (n = u === e.length),
          (t = e.length > 1 && c && !n),
          { hasFurniture: c, hasSimCards: s, hasTVs: a, hasFurnitureMixed: t, hasFurnitureOnly: n, categories: i }
        );
      };
      const W = function () {
        $('.shimmer').removeClass('shimmer');
      };
      const Z = function (e) {
        const t = e.focus;
        const n = void 0 !== t && t;
        $('.bash--textfield-businessName')
          .removeClass('optional')
          .slideDown(() => {
            let e;
            $('#bash--input-businessName').attr('required', 'required'),
              !$('#bash--input-businessName').val() &&
                n &&
                ((e = $('#bash--input-businessName')) === null || void 0 === e || e.focus());
          });
      };
      const J = function () {
        $('.bash--textfield-businessName').addClass('optional').slideUp(),
          $('#bash--input-businessName').removeAttr('required');
      };
      const H = function () {
        let e;
        const t = Array.from($('form.form-step.box-edit > :invalid, .error'));
        t.sort((e, t) => e.getBoundingClientRect().top - t.getBoundingClientRect().top),
          t == null || (e = t[0]) === null || void 0 === e || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
      };
      function K(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      const z = function (e) {
        let t;
        let n;
        const r =
          ((n = 2),
          (function (e) {
            if (Array.isArray(e)) return e;
          })((t = e)) ||
            (function (e, t) {
              let n = e == null ? null : (typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
              if (n != null) {
                let r;
                let o;
                let i;
                let a;
                const s = [];
                let c = !0;
                let u = !1;
                try {
                  if (((i = (n = n.call(e)).next), t === 0)) {
                    if (Object(n) !== n) return;
                    c = !1;
                  } else for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
                } catch (e) {
                  (u = !0), (o = e);
                } finally {
                  try {
                    if (!c && n.return != null && ((a = n.return()), Object(a) !== a)) return;
                  } finally {
                    if (u) throw o;
                  }
                }
                return s;
              }
            })(t, n) ||
            (function (e, t) {
              if (e) {
                if (typeof e === 'string') return K(e, t);
                let n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  n === 'Object' && e.constructor && (n = e.constructor.name),
                  n === 'Map' || n === 'Set'
                    ? Array.from(e)
                    : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? K(e, t)
                    : void 0
                );
              }
            })(t, n) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })());
        const o = r[0];
        const i = r[1];
        return o >= 16.344 && o <= 32.8301 && i >= -34.8191 && i <= -22.1277;
      };
      const Q = function (e) {
        const t = e.name;
        const n = e.options;
        return '\n  \n  <div class="bash--radio-options">\n  '.concat(
          (void 0 === n ? [] : n)
            .map((e) => {
              const n = e.value;
              const r = e.label;
              const o = e.checked;
              const i = void 0 !== o && o;
              const a = e.disabled;
              const s = void 0 !== a && a;
              return '\n      <label class="bash--radio-option" id="radio-label-'
                .concat(t, '-')
                .concat(n, '">\n        <input type="radio" \n          ')
                .concat(i ? "checked='checked'" : '', ' \n          ')
                .concat(s ? "disabled='disabled'" : '', ' \n          value="')
                .concat(n != null ? n : '', '" \n          name="')
                .concat(t, '" \n          id="radio-')
                .concat(t, '-')
                .concat(n, '"\n        />\n          <span class="radio-icon"></span> \n          ')
                .concat(r ? '<span class="radio-label">'.concat(r, '</span>') : '', '\n      </label>\n    ');
            })
            .join(''),
          '\n   \n  </div>\n  '
        );
      };
      const X = function (e, t) {
        return (
          JSON.stringify({
            street: (e == null ? void 0 : e.street) || '',
            neighborhood: (e == null ? void 0 : e.neighborhood) || '',
            city: (e == null ? void 0 : e.city) || '',
            postalCode: (e == null ? void 0 : e.postalCode) || '',
          }) ===
          JSON.stringify({
            street: (t == null ? void 0 : t.street) || '',
            neighborhood: (t == null ? void 0 : t.neighborhood) || '',
            city: (t == null ? void 0 : t.city) || '',
            postalCode: (t == null ? void 0 : t.postalCode) || '',
          })
        );
      };
      const ee = function (e) {
        let t;
        if (!e) return '';
        let n;
        const r = e.businessName;
        const o = e.number;
        const i = e.street;
        const a = e.neighborhood;
        const s = e.postalCode;
        const c = e.city;
        const u = e.receiverName;
        const l = e.addressName;
        const d = e.complement;
        const h = e.receiverPhone;
        const p = [
          ''
            .concat(r ? ''.concat(r, ', ') : '', ' ')
            .concat(o ? ''.concat(o.trim(), ' ') : '')
            .concat(i),
          a != null ? a : c,
          s,
        ]
          .join(', ')
          .trim();
        const f = [u, ((n = q(h || d)), [n.slice(0, 3), n.slice(3, 6), n.slice(6)].join(' '))].join(' - ');
        const v =
          (t = window) === null ||
          void 0 === t ||
          (t = t.vtexjs) === null ||
          void 0 === t ||
          (t = t.checkout) === null ||
          void 0 === t ||
          (t = t.orderForm) === null ||
          void 0 === t ||
          (t = t.shippingData) === null ||
          void 0 === t
            ? void 0
            : t.address;
        const m = encodeURIComponent(JSON.stringify(e));
        return '\n<label id="address-'
          .concat(l, '" class="bash--address-listing" data-address="')
          .concat(m, '">\n  <div class="address-radio">\n  ')
          .concat(
            Q({ name: 'selected-address', options: [{ checked: X(e, v), value: l }] }),
            '\n  </div>\n  <div class="address-text">\n    <div>'
          )
          .concat(p, '</div>    \n    <div>')
          .concat(
            f,
            '</div>  \n  </div>\n  <div class="address-edit">\n    <a href="#" data-view="address-edit" data-content="address-'
          )
          .concat(l, '">\n      Edit\n    </a>\n  </div>\n</label>\n');
      };
      function te(e) {
        return (
          (te =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          te(e)
        );
      }
      function ne(e, t) {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if (te(e) !== 'object' || e === null) return e;
                const n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  const r = n.call(e, t);
                  if (te(r) !== 'object') return r;
                  throw new TypeError('@@toPrimitive must return a primitive value.');
                }
                return String(e);
              })(r.key, 'string')),
              te(o) === 'symbol' ? o : String(o)),
              r
            );
        }
        let o;
      }
      function re(e) {
        return (
          (re =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          re(e)
        );
      }
      function oe(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)), n.push.apply(n, r);
        }
        return n;
      }
      function ie(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? oe(Object(n), !0).forEach((t) => {
                ae(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : oe(Object(n)).forEach((t) => {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function ae(e, t, n) {
        return (
          (t = (function (e) {
            const t = (function (e, t) {
              if (re(e) !== 'object' || e === null) return e;
              const n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                const r = n.call(e, t);
                if (re(r) !== 'object') return r;
                throw new TypeError('@@toPrimitive must return a primitive value.');
              }
              return String(e);
            })(e, 'string');
            return re(t) === 'symbol' ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function se(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ce() {
        ce = function () {
          return e;
        };
        var e = {};
        const t = Object.prototype;
        const n = t.hasOwnProperty;
        const r =
          Object.defineProperty ||
          function (e, t, n) {
            e[t] = n.value;
          };
        const o = typeof Symbol === 'function' ? Symbol : {};
        const i = o.iterator || '@@iterator';
        const a = o.asyncIterator || '@@asyncIterator';
        const s = o.toStringTag || '@@toStringTag';
        function c(e, t, n) {
          return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, o) {
          const i = t && t.prototype instanceof h ? t : h;
          const a = Object.create(i.prototype);
          const s = new E(o || []);
          return r(a, '_invoke', { value: _(e, n, s) }), a;
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = u;
        const d = {};
        function h() {}
        function p() {}
        function f() {}
        let v = {};
        c(v, i, function () {
          return this;
        });
        const m = Object.getPrototypeOf;
        const y = m && m(m(O([])));
        y && y !== t && n.call(y, i) && (v = y);
        const g = (f.prototype = h.prototype = Object.create(v));
        function b(e) {
          ['next', 'throw', 'return'].forEach((t) => {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          function o(r, i, a, s) {
            const c = l(e[r], e, i);
            if (c.type !== 'throw') {
              const u = c.arg;
              const d = u.value;
              return d && re(d) == 'object' && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    (e) => {
                      o('next', e, a, s);
                    },
                    (e) => {
                      o('throw', e, a, s);
                    }
                  )
                : t.resolve(d).then(
                    (e) => {
                      (u.value = e), a(u);
                    },
                    (e) => o('throw', e, a, s)
                  );
            }
            s(c.arg);
          }
          let i;
          r(this, '_invoke', {
            value(e, n) {
              function r() {
                return new t((t, r) => {
                  o(e, n, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function _(e, t, n) {
          let r = 'suspendedStart';
          return function (o, i) {
            if (r === 'executing') throw new Error('Generator is already running');
            if (r === 'completed') {
              if (o === 'throw') throw i;
              return { value: void 0, done: !0 };
            }
            for (n.method = o, n.arg = i; ; ) {
              const a = n.delegate;
              if (a) {
                const s = x(a, n);
                if (s) {
                  if (s === d) continue;
                  return s;
                }
              }
              if (n.method === 'next') n.sent = n._sent = n.arg;
              else if (n.method === 'throw') {
                if (r === 'suspendedStart') throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else n.method === 'return' && n.abrupt('return', n.arg);
              r = 'executing';
              const c = l(e, t, n);
              if (c.type === 'normal') {
                if (((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)) continue;
                return { value: c.arg, done: n.done };
              }
              c.type === 'throw' && ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function x(e, t) {
          const n = t.method;
          const r = e.iterator[n];
          if (void 0 === r) {
            return (
              (t.delegate = null),
              (n === 'throw' &&
                e.iterator.return &&
                ((t.method = 'return'), (t.arg = void 0), x(e, t), t.method === 'throw')) ||
                (n !== 'return' &&
                  ((t.method = 'throw'), (t.arg = new TypeError(`The iterator does not provide a '${n}' method`)))),
              d
            );
          }
          const o = l(r, e.iterator, t.arg);
          if (o.type === 'throw') return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d;
          const i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                t.method !== 'return' && ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function k(e) {
          const t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          const t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(k, this), this.reset(!0);
        }
        function O(e) {
          if (e || e === '') {
            const t = e[i];
            if (t) return t.call(e);
            if (typeof e.next === 'function') return e;
            if (!isNaN(e.length)) {
              let r = -1;
              const o = function t() {
                for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
              return (o.next = o);
            }
          }
          throw new TypeError(`${re(e)} is not iterable`);
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            const t = typeof e === 'function' && e.constructor;
            return !!t && (t === p || (t.displayName || t.name) === 'GeneratorFunction');
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            const a = new w(u(t, n, r, o), i);
            return e.isGeneratorFunction(n) ? a : a.next().then((e) => (e.done ? e.value : a.next()));
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', () => '[object Generator]'),
          (e.keys = function (e) {
            const t = Object(e);
            const n = [];
            for (const r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  const r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
            reset(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (const t in this)
                  t.charAt(0) === 't' && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop() {
              this.done = !0;
              const e = this.tryEntries[0].completion;
              if (e.type === 'throw') throw e.arg;
              return this.rval;
            },
            dispatchException(e) {
              if (this.done) throw e;
              const t = this;
              function r(n, r) {
                return (a.type = 'throw'), (a.arg = e), (t.next = n), r && ((t.method = 'next'), (t.arg = void 0)), !!r;
              }
              for (let o = this.tryEntries.length - 1; o >= 0; --o) {
                const i = this.tryEntries[o];
                var a = i.completion;
                if (i.tryLoc === 'root') return r('end');
                if (i.tryLoc <= this.prev) {
                  const s = n.call(i, 'catchLoc');
                  const c = n.call(i, 'finallyLoc');
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!c) throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt(e, t) {
              for (let r = this.tryEntries.length - 1; r >= 0; --r) {
                const o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && (e === 'break' || e === 'continue') && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
              const a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i ? ((this.method = 'next'), (this.next = i.finallyLoc), d) : this.complete(a)
              );
            },
            complete(e, t) {
              if (e.type === 'throw') throw e.arg;
              return (
                e.type === 'break' || e.type === 'continue'
                  ? (this.next = e.arg)
                  : e.type === 'return'
                  ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                  : e.type === 'normal' && t && (this.next = t),
                d
              );
            },
            finish(e) {
              for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                const n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d;
              }
            },
            catch(e) {
              for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                const n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  const r = n.completion;
                  if (r.type === 'throw') {
                    var o = r.arg;
                    S(n);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield(e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                this.method === 'next' && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function ue(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a);
          var c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function le(e) {
        return function () {
          const t = this;
          const n = arguments;
          return new Promise((r, o) => {
            const i = e.apply(t, n);
            function a(e) {
              ue(i, r, o, a, s, 'next', e);
            }
            function s(e) {
              ue(i, r, o, a, s, 'throw', e);
            }
            a(void 0);
          });
        };
      }
      const de = new ((function () {
        function e() {
          const t = this;
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.indexedDB =
              window.indexedDB ||
              window.webkitIndexedDB ||
              window.mozIndexedDB ||
              window.msIndexedDB ||
              window.shimIndexedDB),
            (this.checkoutDB = indexedDB.open('checkoutDB', 1.2)),
            (this.checkoutDB.onerror = function (e) {
              throw (console.error('CheckoutDB Error', { event: e }), new Error('Could not load checkoutDB'));
            }),
            (this.checkoutDB.onupgradeneeded = function () {
              const e = t.checkoutDB.result.createObjectStore('addresses', { keyPath: 'addressName' });
              e.createIndex('address_street', ['street'], { unique: !1 }),
                e.createIndex('address_addressName', ['addressName'], { unique: !0 }),
                e.createIndex('address_street_suburb_city_postal', ['street', 'neighborhood', 'city', 'postalCode'], {
                  unique: !0,
                });
            }),
            (this.checkoutDB.onsuccess = function () {
              const e = t.checkoutDB.result.transaction('addresses', 'readwrite');
              (t.addresses = e.objectStore('addresses')), (e.oncomplete = function () {});
            });
        }
        let t;
        let n;
        return (
          (t = e),
          (n = [
            {
              key: 'store',
              value() {
                return this.checkoutDB.result.transaction('addresses', 'readwrite').objectStore('addresses');
              },
            },
            {
              key: 'loadAddresses',
              value(e) {
                const t = this;
                const n = e.map((e) => t.addOrUpdateAddress(e));
                return Promise.all(n).then((e) => e);
              },
            },
            {
              key: 'addOrUpdateAddress',
              value(e) {
                const t = this;
                return new Promise((n, r) => {
                  const o = t.store().put(e);
                  (o.onsuccess = function () {
                    n({ success: !0, addressId: o.result });
                  }),
                    (o.onerror = function (e) {
                      let t;
                      r(
                        new Error({
                          sucess: !1,
                          error: e == null || (t = e.target) === null || void 0 === t ? void 0 : t.error,
                        })
                      );
                    });
                });
              },
            },
            {
              key: 'getAddresses',
              value() {
                const e = this;
                return new Promise((t) => {
                  const n = e.store().getAll();
                  (n.onsuccess = function () {
                    return t(n.result);
                  }),
                    (n.onerror = function () {
                      console.error('Something wrong with getAddresses ? ...'), t([]);
                    });
                });
              },
            },
            {
              key: 'getAddress',
              value(e) {
                const t = this;
                return new Promise((n) => {
                  const r = t.store().get(e);
                  (r.onsuccess = function () {
                    return n(r.result);
                  }),
                    (r.onerror = function () {
                      console.error('Something wrong with getAddress ? ...'), n([]);
                    });
                });
              },
            },
            {
              key: 'deleteAddress',
              value(e) {
                const t = this.addresses.delete(e);
                t.onsuccess = function () {
                  return t.result;
                };
              },
            },
            {
              key: 'clearData',
              value() {
                const e = this;
                return new Promise((t) => {
                  const n = e.store().clear();
                  (n.onsuccess = function () {
                    return t(n.result);
                  }),
                    (n.onerror = function () {
                      console.error('Something wrong with clearData ? ...'), t([]);
                    });
                });
              },
            },
          ]) && ne(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          e
        );
      })())();
      const he = (function () {
        const e = le(
          ce().mark(function e() {
            let t;
            let n;
            let r;
            let o;
            let i;
            let a;
            let s;
            let c;
            return ce().wrap((e) => {
              for (;;) {
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), de.getAddresses();
                  case 2:
                    if (!((n = e.sent).length > 0)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt('return', { data: n });
                  case 5:
                    return (
                      (r =
                        (t = window) === null ||
                        void 0 === t ||
                        (t = t.vtexjs) === null ||
                        void 0 === t ||
                        (t = t.checkout) === null ||
                        void 0 === t ||
                        (t = t.orderForm) === null ||
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
                      (a = V({ cookie: !0, cache: !0, json: !1 })),
                      (s = { headers: a, credentials: 'include' }),
                      (c = Date.now()),
                      e.abrupt(
                        'return',
                        fetch(
                          ''
                            .concat(h, 'masterdata/addresses?t=')
                            .concat(c, '&_fields=')
                            .concat(i, '&_where=')
                            .concat(encodeURIComponent('userIdQuery='.concat(o))),
                          s
                        )
                          .then((e) => e.json())
                          .then(
                            (function () {
                              const e = le(
                                ce().mark(function e(t) {
                                  return ce().wrap((e) => {
                                    for (;;) {
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return t.data && de.loadAddresses(t.data), e.abrupt('return', t);
                                        case 2:
                                        case 'end':
                                          return e.stop();
                                      }
                                    }
                                  }, e);
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                          .catch((e) => G('GET_ADDRESSES_ERROR: '.concat(e == null ? void 0 : e.message)))
                      )
                    );
                  case 11:
                  case 'end':
                    return e.stop();
                }
              }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
      const pe = (function () {
        const e = le(
          ce().mark(function e(t, n) {
            let r;
            let o;
            let i;
            let a;
            let s;
            return ce().wrap((e) => {
              for (;;) {
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = {}),
                      (o = V({ cookie: !0, cache: !0, json: !1 })),
                      (i = { headers: o, credentials: 'include' }),
                      (e.next = 5),
                      fetch(
                        ''
                          .concat(h, 'masterdata/addresses/')
                          .concat(n, '&_where=addressName=')
                          .concat(t, '&timestamp=')
                          .concat(Date.now()),
                        i
                      )
                        .then((e) => e.json())
                        .catch((e) => G('GET_ADDRESS_ERROR: '.concat(e == null ? void 0 : e.message)))
                    );
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
                            if (Array.isArray(e)) return e;
                          })(c) ||
                          (function (e, t) {
                            let n =
                              e == null
                                ? null
                                : (typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
                            if (n != null) {
                              let r;
                              let o;
                              let i;
                              let a;
                              const s = [];
                              let c = !0;
                              let u = !1;
                              try {
                                if (((i = (n = n.call(e)).next), t === 0)) {
                                  if (Object(n) !== n) return;
                                  c = !1;
                                } else for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
                              } catch (e) {
                                (u = !0), (o = e);
                              } finally {
                                try {
                                  if (!c && n.return != null && ((a = n.return()), Object(a) !== a)) return;
                                } finally {
                                  if (u) throw o;
                                }
                              }
                              return s;
                            }
                          })(c, u) ||
                          (function (e, t) {
                            if (e) {
                              if (typeof e === 'string') return se(e, t);
                              let n = Object.prototype.toString.call(e).slice(8, -1);
                              return (
                                n === 'Object' && e.constructor && (n = e.constructor.name),
                                n === 'Map' || n === 'Set'
                                  ? Array.from(e)
                                  : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                  ? se(e, t)
                                  : void 0
                              );
                            }
                          })(c, u) ||
                          (function () {
                            throw new TypeError(
                              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                            );
                          })()),
                        (r = s[0])),
                      e.abrupt('return', r)
                    );
                  case 8:
                  case 'end':
                    return e.stop();
                }
              }
              let c;
              let u;
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })();
      const fe = (function () {
        const e = le(
          ce().mark(function e(t) {
            let n;
            let r;
            let o;
            let i;
            let a;
            let s;
            return ce().wrap((e) => {
              for (;;) {
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((r = window.vtexjs.checkout.orderForm.clientProfileData.email), t)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt('return', Promise.reject(new Error('No address provided.')));
                  case 3:
                    if (!t.addressName) {
                      e.next = 9;
                      break;
                    }
                    return (e.next = 6), pe(t.addressName, '?_fields=id');
                  case 6:
                    (e.t0 = e.sent), (e.next = 10);
                    break;
                  case 9:
                    e.t0 = {};
                  case 10:
                    return (
                      (o = e.t0),
                      (n =
                        o != null && o.id
                          ? ''.concat(h, 'masterdata/address/').concat(o.id)
                          : ''.concat(h, 'masterdata/addresses')),
                      (i = ie({ userId: r }, t)),
                      o.id || (i.addressName = t.addressId || 'address-'.concat(Date.now())),
                      (a = V({ cookie: !0, cache: !0, json: !0 })),
                      (s = { method: 'PATCH', headers: a, body: JSON.stringify(i), credentials: 'include' }),
                      (e.next = 18),
                      fetch(n, s)
                        .then((e) => (e.status !== 204 ? e.json() : e))
                        .then((e) => e)
                        .catch((e) => G('SAVE_ADDRESS_ERROR: '.concat(e == null ? void 0 : e.message)))
                    );
                  case 18:
                  case 'end':
                    return e.stop();
                }
              }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      const ve = function (e) {
        let t = $('#address-'.concat(e.addressName));
        t.length ? (t.after(ee(e)), t.remove(), (t = null)) : $('#bash-address-list').append(ee(e)),
          $('input[type="radio"][name="selected-address"]:checked').attr('checked', !1),
          $('input[type="radio"][name="selected-address"][value="'.concat(e.addressName, '"]')).attr('checked', !0);
      };
      const me = (function () {
        const e = le(
          ce().mark(function e(t) {
            let n;
            return ce().wrap((e) => {
              for (;;) {
                switch ((e.prev = e.next)) {
                  case 0:
                    t.addressName ||
                      ((n = t.street
                        .replace(/[^a-zA-Z0-9]/g, ' ')
                        .trim()
                        .replace(/\s/g, '-')
                        .toLowerCase()),
                      (t.addressName = ''.concat(Date.now(), '-').concat(n).substring(0, 50))),
                      t.addressId || (t.addressId = t.addressName),
                      de.addOrUpdateAddress(t).then(() => ve(t)),
                      fe(t);
                  case 4:
                  case 'end':
                    return e.stop();
                }
              }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      const ye = (function () {
        const e = le(
          ce().mark(function e(t) {
            return ce().wrap((e) => {
              for (;;) {
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt('return', de.getAddress(t));
                  case 1:
                  case 'end':
                    return e.stop();
                }
              }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      const ge = (function () {
        const e = le(
          ce().mark(function e() {
            return ce().wrap((e) => {
              for (;;) {
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt('return', de.clearData());
                  case 1:
                  case 'end':
                    return e.stop();
                }
              }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
      const be = (function () {
        const e = le(
          ce().mark(function e(t, n) {
            let r;
            let o;
            let i;
            let a;
            let s;
            const c = arguments;
            return ce().wrap((e) => {
              for (;;) {
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = c.length > 2 && void 0 !== c[2] && c[2]),
                      (o = window.vtexjs.checkout.orderForm.orderFormId),
                      (i = '/api/checkout/pub/orderForm/'.concat(o, '/customData/').concat(t)),
                      (a = JSON.stringify(ie(ie({}, n), r && { sameAddress: new Boolean(n.sameAddress) }))),
                      (s = { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: a }),
                      e.abrupt('return', fetch(i, s))
                    );
                  case 6:
                  case 'end':
                    return e.stop();
                }
              }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })();
      const we = function (e) {
        let t;
        const n =
          (t = window) === null ||
          void 0 === t ||
          (t = t.vtexjs) === null ||
          void 0 === t ||
          (t = t.checkout) === null ||
          void 0 === t ||
          (t = t.orderForm) === null ||
          void 0 === t
            ? void 0
            : t.customData;
        let r = {};
        return (
          n &&
            n.customApps &&
            n.customApps.length > 0 &&
            n.customApps.forEach((t) => {
              t.id === e && (r = t.fields);
            }),
          r
        );
      };
      const _e = function (e) {
        let t;
        let n;
        const r = e.text;
        const o = e.fields;
        if (!o.itemIndex) return '';
        const i =
          (t = window.vtexjs.checkout) === null || void 0 === t || (t = t.orderForm.items) === null || void 0 === t
            ? void 0
            : t[o.itemIndex];
        if (!i) return '';
        const a = i == null ? void 0 : i.imageUrl;
        return ' \n<div id="bash-delivery-error" class="notification error" alt="'
          .concat(
            (n = o == null ? void 0 : o.skuName) !== null && void 0 !== n ? n : '',
            '" >\n   \x3c!---<div class="icon"></div>---\x3e\n   '
          )
          .concat(
            a ? '<img src="'.concat(a, '" style=" float: right; " />') : '',
            '\n   <div class="notification-content">\n      <h3>Address error '
          )
          .concat(o != null && o.skuName ? '- '.concat(o == null ? void 0 : o.skuName) : '', '</h3>\n      <p>')
          .concat(
            r,
            '</p>\n      <p>Check the postal code of your address, or \n      <a href="#" \n        class="remove-cart-item"\n        style="color: white; text-decoration: underline"\n        data-index="'
          )
          .concat(o.itemIndex, '">remove this item from your cart</a>.\n      </p>\n   </div>  \n</div>  \n');
      };
      const xe = ['receiverName', 'street', 'neighborhood', 'state', 'city', 'country', 'postalCode', 'receiverPhone'];
      const ke = [
        'idOrPassport',
        'sameAddress',
        'fullName',
        'streetAddress',
        'suburb',
        'city',
        'postalCode',
        'province',
      ];
      const Se = ['tvID'];
      const Ee = ['residential', 'inStore', 'commercial', 'giftRegistry', 'pickup', 'search'];
      function Oe(e) {
        return (
          (Oe =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Oe(e)
        );
      }
      function je(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Pe(e);
          })(e) ||
          (function (e) {
            if ((typeof Symbol !== 'undefined' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
              return Array.from(e);
          })(e) ||
          Le(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Ce() {
        Ce = function () {
          return e;
        };
        var e = {};
        const t = Object.prototype;
        const n = t.hasOwnProperty;
        const r =
          Object.defineProperty ||
          function (e, t, n) {
            e[t] = n.value;
          };
        const o = typeof Symbol === 'function' ? Symbol : {};
        const i = o.iterator || '@@iterator';
        const a = o.asyncIterator || '@@asyncIterator';
        const s = o.toStringTag || '@@toStringTag';
        function c(e, t, n) {
          return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, o) {
          const i = t && t.prototype instanceof h ? t : h;
          const a = Object.create(i.prototype);
          const s = new E(o || []);
          return r(a, '_invoke', { value: _(e, n, s) }), a;
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = u;
        const d = {};
        function h() {}
        function p() {}
        function f() {}
        let v = {};
        c(v, i, function () {
          return this;
        });
        const m = Object.getPrototypeOf;
        const y = m && m(m(O([])));
        y && y !== t && n.call(y, i) && (v = y);
        const g = (f.prototype = h.prototype = Object.create(v));
        function b(e) {
          ['next', 'throw', 'return'].forEach((t) => {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          function o(r, i, a, s) {
            const c = l(e[r], e, i);
            if (c.type !== 'throw') {
              const u = c.arg;
              const d = u.value;
              return d && Oe(d) == 'object' && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    (e) => {
                      o('next', e, a, s);
                    },
                    (e) => {
                      o('throw', e, a, s);
                    }
                  )
                : t.resolve(d).then(
                    (e) => {
                      (u.value = e), a(u);
                    },
                    (e) => o('throw', e, a, s)
                  );
            }
            s(c.arg);
          }
          let i;
          r(this, '_invoke', {
            value(e, n) {
              function r() {
                return new t((t, r) => {
                  o(e, n, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function _(e, t, n) {
          let r = 'suspendedStart';
          return function (o, i) {
            if (r === 'executing') throw new Error('Generator is already running');
            if (r === 'completed') {
              if (o === 'throw') throw i;
              return { value: void 0, done: !0 };
            }
            for (n.method = o, n.arg = i; ; ) {
              const a = n.delegate;
              if (a) {
                const s = x(a, n);
                if (s) {
                  if (s === d) continue;
                  return s;
                }
              }
              if (n.method === 'next') n.sent = n._sent = n.arg;
              else if (n.method === 'throw') {
                if (r === 'suspendedStart') throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else n.method === 'return' && n.abrupt('return', n.arg);
              r = 'executing';
              const c = l(e, t, n);
              if (c.type === 'normal') {
                if (((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)) continue;
                return { value: c.arg, done: n.done };
              }
              c.type === 'throw' && ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function x(e, t) {
          const n = t.method;
          const r = e.iterator[n];
          if (void 0 === r) {
            return (
              (t.delegate = null),
              (n === 'throw' &&
                e.iterator.return &&
                ((t.method = 'return'), (t.arg = void 0), x(e, t), t.method === 'throw')) ||
                (n !== 'return' &&
                  ((t.method = 'throw'), (t.arg = new TypeError(`The iterator does not provide a '${n}' method`)))),
              d
            );
          }
          const o = l(r, e.iterator, t.arg);
          if (o.type === 'throw') return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d;
          const i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                t.method !== 'return' && ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function k(e) {
          const t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          const t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(k, this), this.reset(!0);
        }
        function O(e) {
          if (e || e === '') {
            const t = e[i];
            if (t) return t.call(e);
            if (typeof e.next === 'function') return e;
            if (!isNaN(e.length)) {
              let r = -1;
              const o = function t() {
                for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
              return (o.next = o);
            }
          }
          throw new TypeError(`${Oe(e)} is not iterable`);
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            const t = typeof e === 'function' && e.constructor;
            return !!t && (t === p || (t.displayName || t.name) === 'GeneratorFunction');
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            const a = new w(u(t, n, r, o), i);
            return e.isGeneratorFunction(n) ? a : a.next().then((e) => (e.done ? e.value : a.next()));
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', () => '[object Generator]'),
          (e.keys = function (e) {
            const t = Object(e);
            const n = [];
            for (const r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  const r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
            reset(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (const t in this)
                  t.charAt(0) === 't' && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop() {
              this.done = !0;
              const e = this.tryEntries[0].completion;
              if (e.type === 'throw') throw e.arg;
              return this.rval;
            },
            dispatchException(e) {
              if (this.done) throw e;
              const t = this;
              function r(n, r) {
                return (a.type = 'throw'), (a.arg = e), (t.next = n), r && ((t.method = 'next'), (t.arg = void 0)), !!r;
              }
              for (let o = this.tryEntries.length - 1; o >= 0; --o) {
                const i = this.tryEntries[o];
                var a = i.completion;
                if (i.tryLoc === 'root') return r('end');
                if (i.tryLoc <= this.prev) {
                  const s = n.call(i, 'catchLoc');
                  const c = n.call(i, 'finallyLoc');
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!c) throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt(e, t) {
              for (let r = this.tryEntries.length - 1; r >= 0; --r) {
                const o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && (e === 'break' || e === 'continue') && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
              const a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i ? ((this.method = 'next'), (this.next = i.finallyLoc), d) : this.complete(a)
              );
            },
            complete(e, t) {
              if (e.type === 'throw') throw e.arg;
              return (
                e.type === 'break' || e.type === 'continue'
                  ? (this.next = e.arg)
                  : e.type === 'return'
                  ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                  : e.type === 'normal' && t && (this.next = t),
                d
              );
            },
            finish(e) {
              for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                const n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d;
              }
            },
            catch(e) {
              for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                const n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  const r = n.completion;
                  if (r.type === 'throw') {
                    var o = r.arg;
                    S(n);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield(e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                this.method === 'next' && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function $e(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a);
          var c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function Le(e, t) {
        if (e) {
          if (typeof e === 'string') return Pe(e, t);
          let n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            n === 'Object' && e.constructor && (n = e.constructor.name),
            n === 'Map' || n === 'Set'
              ? Array.from(e)
              : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Pe(e, t)
              : void 0
          );
        }
      }
      function Pe(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ne(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)), n.push.apply(n, r);
        }
        return n;
      }
      function Te(e, t, n) {
        return (
          (t = (function (e) {
            const t = (function (e, t) {
              if (Oe(e) !== 'object' || e === null) return e;
              const n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                const r = n.call(e, t);
                if (Oe(r) !== 'object') return r;
                throw new TypeError('@@toPrimitive must return a primitive value.');
              }
              return String(e);
            })(e, 'string');
            return Oe(t) === 'symbol' ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      const Fe = function () {
        let e;
        (e = document.querySelector('.bash--delivery-container')) === null ||
          void 0 === e ||
          e.classList.add('shimmer');
      };
      const Ie = function () {
        let e;
        let t;
        (e = document.querySelector('.delivery-group-content')) === null ||
          void 0 === e ||
          (e = e.classList) === null ||
          void 0 === e ||
          e.add('shimmer'),
          (t = document.querySelector('.vtex-omnishipping-1-x-ask')) === null ||
            void 0 === t ||
            (t = t.classList) === null ||
            void 0 === t ||
            t.add('shimmer');
      };
      const De = function (e) {
        switch (e) {
          case 'Select':
            return '';
          case 'Western Cape':
            return 'WC';
          case 'Easter Cape':
            return 'EC';
          case 'Gauteng':
            return 'GP';
          case 'KwaZulu-Natal':
          case 'KwaZulu Natal':
            return 'KZN';
          case 'Northern Cape':
            return 'NC';
          case 'Limpopo':
            return 'LP';
          case 'Mpumalanga':
            return 'MP';
          case 'North West':
            return 'NW';
          case 'Freestate':
          case 'Free State':
            return 'FS';
          default:
            return e;
        }
      };
      const Ae = function (e) {
        let t;
        let n;
        let r;
        let o;
        const i = e.preferred;
        const a = void 0 === i ? void 0 : i;
        const s = e.type;
        const c = void 0 === s ? 'delivery' : s;
        const u =
          (t = window) === null ||
          void 0 === t ||
          (t = t.vtexjs) === null ||
          void 0 === t ||
          (t = t.checkout) === null ||
          void 0 === t ||
          (t = t.orderForm) === null ||
          void 0 === t ||
          (t = t.clientProfileData) === null ||
          void 0 === t
            ? void 0
            : t.firstName;
        const l =
          (n = window) === null ||
          void 0 === n ||
          (n = n.vtexjs) === null ||
          void 0 === n ||
          (n = n.checkout) === null ||
          void 0 === n ||
          (n = n.orderForm) === null ||
          void 0 === n ||
          (n = n.clientProfileData) === null ||
          void 0 === n
            ? void 0
            : n.lastName;
        const d =
          (r = window) === null ||
          void 0 === r ||
          (r = r.vtexjs) === null ||
          void 0 === r ||
          (r = r.checkout) === null ||
          void 0 === r ||
          (r = r.orderForm) === null ||
          void 0 === r ||
          (r = r.shippingData) === null ||
          void 0 === r ||
          (r = r.address) === null ||
          void 0 === r
            ? void 0
            : r.receiverName;
        const h = ''
          .concat(u != null ? u : '', ' ')
          .concat(l != null ? l : '')
          .trim();
        return c === 'collect'
          ? a || d || h || ''
          : a ||
              ((o = document.getElementById('client-first-name')) === null || void 0 === o ? void 0 : o.value) ||
              h ||
              '';
      };
      const Re = function (e) {
        let t;
        let n;
        let r;
        let o;
        let i;
        const a = e.number;
        const s = e.street;
        const u = e.addressType;
        const l = e.businessName;
        const d = e.companyBuilding;
        const h = e.neighborhood;
        const p = e.postalCode;
        const f = e.state;
        const v = e.city;
        const m = e.receiverName;
        const y = e.receiverPhone;
        const g = e.complement;
        const b = e.id;
        const w = e.addressId;
        const _ = e.addressName;
        const x = e.geoCoordinate;
        (t = document.getElementById('bash--address-form')) === null || void 0 === t || t.reset(), J();
        try {
          const k =
            ((o = JSON.parse(JSON.stringify(x))),
            (i = 2),
            (function (e) {
              if (Array.isArray(e)) return e;
            })(o) ||
              (function (e, t) {
                let n = e == null ? null : (typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
                if (n != null) {
                  let r;
                  let o;
                  let i;
                  let a;
                  const s = [];
                  let c = !0;
                  let u = !1;
                  try {
                    if (((i = (n = n.call(e)).next), t === 0)) {
                      if (Object(n) !== n) return;
                      c = !1;
                    } else for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
                  } catch (e) {
                    (u = !0), (o = e);
                  } finally {
                    try {
                      if (!c && n.return != null && ((a = n.return()), Object(a) !== a)) return;
                    } finally {
                      if (u) throw o;
                    }
                  }
                  return s;
                }
              })(o, i) ||
              Le(o, i) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })());
          (r = k[0]), (n = k[1]), z([r, n]) || (z[r] ? (n = r = n) : ((r = 0), (n = 0)));
        } catch (t) {
          console.warn('Could not parse geo coords', { address: e, geoCoordinate: x });
        }
        m && (document.getElementById('bash--input-receiverName').value = m != null ? m : ''),
          g && (document.getElementById('bash--input-complement').value = g != null ? g : ''),
          (b || w) && (document.getElementById('bash--input-addressId').value = b || w),
          _ && (document.getElementById('bash--input-addressName').value = _);
        const S = ''
          .concat(a ? ''.concat(a, ' ') : '')
          .concat(s)
          .replace(', '.concat(d), '');
        u === 'commercial' && ($('#radio-addressType-business').click(), Z({ focus: !1 })),
          l && (document.getElementById('bash--input-businessName').value = l),
          (document.getElementById('bash--input-number').value = ''),
          (document.getElementById('bash--input-street').value = S || ''),
          (document.getElementById('bash--input-companyBuilding').value = d || ''),
          (document.getElementById('bash--input-neighborhood').value = h || ''),
          (document.getElementById('bash--input-city').value = v || ''),
          (document.getElementById('bash--input-postalCode').value = p || ''),
          (document.getElementById('bash--input-state').value = De(f)),
          (document.getElementById('bash--input-lat').value = n || ''),
          (document.getElementById('bash--input-lng').value = r || '');
        const E = we(c);
        m && (document.getElementById('bash--input-receiverName').value = m != null ? m : ''),
          g && (document.getElementById('bash--input-complement').value = g != null ? g : ''),
          (document.getElementById('bash--input-receiverPhone').value = M({
            preferred: y,
            type: 'delivery',
            fields: E,
          })),
          $(':invalid').trigger('change');
      };
      const Be = function (e) {
        setTimeout(() => {
          let t;
          const n = document.querySelectorAll('.pac-container');
          const r = document.querySelectorAll(".pac-container[style*='display: none']");
          (n == null ? void 0 : n.length) === (r == null ? void 0 : r.length) &&
          ((t = e.target) === null || void 0 === t || (t = t.value) === null || void 0 === t ? void 0 : t.length) > 3
            ? $('#address-search-field-container:not(.no-results)').addClass('no-results')
            : $('#address-search-field-container.no-results').removeClass('no-results');
        }, 250);
      };
      const Me = function () {
        if (window.google) {
          const e = document.getElementById('bash--input-address-search');
          if (e) {
            const t = new window.google.maps.places.Autocomplete(e, { componentRestrictions: { country: 'ZA' } });
            window.google.maps.event.addListener(t, 'place_changed', () => {
              const n = t.getPlace();
              !(function (e) {
                let t;
                const n = e.street;
                const r = e.neighborhood;
                const o = e.postalCode;
                const i = e.state;
                const a = e.city;
                const s = e.lat;
                const c = e.lng;
                (t = document.getElementById('bash--address-form')) === null || void 0 === t || t.reset(),
                  (document.getElementById('bash--input-addressId').value = ''),
                  (document.getElementById('bash--input-addressName').value = ''),
                  (document.getElementById('bash--input-number').value = '  '),
                  (document.getElementById('bash--input-street').value = n != null ? n : ''),
                  (document.getElementById('bash--input-neighborhood').value = r != null ? r : ''),
                  (document.getElementById('bash--input-city').value = a != null ? a : ''),
                  (document.getElementById('bash--input-postalCode').value = o != null ? o : ''),
                  (document.getElementById('bash--input-state').value = De(i)),
                  (document.getElementById('bash--input-lat').value = s || ''),
                  (document.getElementById('bash--input-lng').value = c || ''),
                  $(':invalid').trigger('change');
              })(
                (function (e, t) {
                  let n;
                  let r;
                  let o;
                  let i;
                  let a;
                  let s;
                  if (!e || e.length < 1) return {};
                  const c =
                    (n = e.find((e) => e.types.includes('street_number'))) === null || void 0 === n
                      ? void 0
                      : n.long_name;
                  const u =
                    (r = e.find((e) => e.types.includes('route'))) === null || void 0 === r ? void 0 : r.long_name;
                  const l =
                    (o = e.find((e) => e.types.includes('sublocality'))) === null || void 0 === o
                      ? void 0
                      : o.long_name;
                  const d =
                    (i = e.find((e) => e.types.includes('locality'))) === null || void 0 === i ? void 0 : i.long_name;
                  const h =
                    (a = e.find((e) => e.types.includes('postal_code'))) === null || void 0 === a
                      ? void 0
                      : a.long_name;
                  const p =
                    (s = e.find((e) => e.types.includes('administrative_area_level_1'))) === null || void 0 === s
                      ? void 0
                      : s.long_name;
                  const f = { lat: '', lng: '' };
                  return (
                    t && ((f.lat = t.location.lat()), (f.lng = t.location.lng())),
                    (function (e) {
                      for (let t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2
                          ? Ne(Object(n), !0).forEach((t) => {
                              Te(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : Ne(Object(n)).forEach((t) => {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                      }
                      return e;
                    })(
                      {
                        street: ''
                          .concat(c != null ? c : '', ' ')
                          .concat(u != null ? u : '')
                          .trim(),
                        neighborhood: l,
                        city: d,
                        postalCode: h,
                        state: p,
                      },
                      f
                    )
                  );
                })(n.address_components, n.geometry)
              ),
                window.postMessage({ action: 'setDeliveryView', view: 'address-form' }),
                (e.value = '');
            }),
              e == null || e.addEventListener('keyup', Be);
          }
        }
      };
      const qe = function (e, t) {
        const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
        const r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e) {
          for (let o = 0; o < t.length; o++) {
            const i = 'bash--input-'.concat(n).concat(t[o]);
            !document.getElementById(i) ||
              (!e[t[o]] && !r) ||
              (document.getElementById(i).value && !r) ||
              (document.getElementById(i).value = e[t[o]]);
          }
          $(':invalid').trigger('change');
        }
      };
      const Ge = function () {
        let e;
        const t = window.vtexjs.checkout.orderForm.shippingData.address;
        if (
          ((e = document.getElementById('bash--input-rica_streetAddress')) === null || void 0 === e || !e.value) &&
          t
        ) {
          (t.fullName = Ae({ type: 'delivery' })),
            (t.streetAddress = t.street),
            (t.suburb = t.neighborhood),
            (t.province = t.state),
            qe(t, ke, 'rica_');
          const n = we(u);
          n.streetAddress && qe(n, ke, 'rica_', !0);
        }
      };
      const Ve = (function () {
        let e;
        const t =
          ((e = Ce().mark(function e() {
            let t;
            return Ce().wrap((e) => {
              for (;;) {
                switch ((e.prev = e.next)) {
                  case 0:
                    (t = we(l)), qe(t, Se, 'tv');
                  case 2:
                  case 'end':
                    return e.stop();
                }
              }
            }, e);
          })),
          function () {
            const t = this;
            const n = arguments;
            return new Promise((r, o) => {
              const i = e.apply(t, n);
              function a(e) {
                $e(i, r, o, a, s, 'next', e);
              }
              function s(e) {
                $e(i, r, o, a, s, 'throw', e);
              }
              a(void 0);
            });
          });
        return function () {
          return t.apply(this, arguments);
        };
      })();
      const Ue = function (e) {
        const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const n = window.vtexjs.checkout.orderForm.items;
        const r = Y(n);
        const o = r.hasTVs;
        const i = r.hasSimCards;
        let a = xe;
        const s = [];
        o && t && (a = [].concat(je(a), je(Se))), i && t && (a = [].concat(je(a), je(ke)));
        for (let c = 0; c < a.length; c++) e[a[c]] || s.push(a[c]);
        return (
          !a.includes('receiverPhone') ||
            s.includes('receiverPhone') ||
            U(e.receiverPhone) ||
            (s.push('receiverPhone'),
            $('#bash--input-receiverPhone').addClass('invalid'),
            $('#bash--label-receiverPhone').focus()),
          { isValid: !s.length, invalidFields: s }
        );
      };
      const Ye = function () {
        const e = window.vtexjs.checkout.orderForm.items;
        const t = Y(e);
        const n = t.hasTVs;
        const r = t.hasSimCards;
        const o = t.hasFurnitureMixed;
        const i = '#shipping-data';
        n ? $(''.concat(i, ':not(.has-tv)')).addClass('has-tv') : $(''.concat(i, '.has-tv')).removeClass('has-tv'),
          r
            ? $(''.concat(i, ':not(.has-rica)')).addClass('has-rica')
            : $(''.concat(i, '.has-rica')).removeClass('has-rica'),
          o
            ? $(''.concat(i, ':not(.has-furniture-mixed)')).addClass('has-furniture-mixed')
            : $(''.concat(i, '.has-furniture-mixed')).removeClass('has-furniture-mixed');
      };
      const We = function () {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (!($('#bash-delivery-error-container').length < 1)) {
          const t = e.length > 0 ? e.map((e) => _e(e)) : '';
          $('#bash-delivery-error-container').html(t),
            e.length > 0 &&
              $('html, body').animate({ scrollTop: $('#bash-delivery-error-container').offset().top }, 400);
        }
      };
      const Ze = function () {
        $('.alert-container').addClass('show'), $('.alert-container').slideDown();
        const e = $('[data-view="address-form"]').length > 0 ? 'Address added' : 'Address updated';
        $('#bash-alert-container').html("<div class='alert-container'>\n      <p>".concat(e, '</p>\n    </div>\n  ')),
          setTimeout(() => {
            $('.alert-container').slideUp();
          }, 5e3);
      };
      const Je = function (e) {
        const t = e.eventCategory;
        const n = void 0 === t ? 'Checkout_UserErrors' : t;
        const r = e.action;
        const o = void 0 === r ? '' : r;
        const i = e.label;
        const a = void 0 === i ? '' : i;
        const s = e.description;
        const c = void 0 === s ? '' : s;
        const u = e.value;
        const l = void 0 === u ? void 0 : u;
        const d = function () {
          window.dataLayer.push({
            event: 'gaEvent',
            eventCategory: n,
            eventLabel: a,
            eventAction: o,
            eventValue: l,
            eventDescription: c,
          });
        };
        if (!window.dataLayer) return $(window).off('gtm.load'), void $(window).on('gtm.load', d);
        d();
      };
      function He(e) {
        return (
          (He =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          He(e)
        );
      }
      function Ke(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)), n.push.apply(n, r);
        }
        return n;
      }
      function ze(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? Ke(Object(n), !0).forEach((t) => {
                Qe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ke(Object(n)).forEach((t) => {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function Qe(e, t, n) {
        return (
          (t = (function (e) {
            const t = (function (e, t) {
              if (He(e) !== 'object' || e === null) return e;
              const n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                const r = n.call(e, t);
                if (He(r) !== 'object') return r;
                throw new TypeError('@@toPrimitive must return a primitive value.');
              }
              return String(e);
            })(e, 'string');
            return He(t) === 'symbol' ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      let Xe;
      let et;
      let tt;
      let nt;
      let rt;
      let ot;
      const it =
        ((Xe = { inCollect: !1, pickupSelected: !1, validForm: !1, runningObserver: !1, collectReset: !1 }),
        (et = function () {
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
              .click(() => {
                $('#tfg-pickup-map').remove();
              });
          const e = function (e) {
            $(
              '<div class="tfg-pickup-map" id="tfg-pickup-map"><div class="tfg-pickup-map-content"></div></div>'
            ).appendTo($('body')),
              $('body').css('position', 'fixed'),
              $('body').css('width', '100%');
            const t = document.createElement('iframe');
            (t.src = 'https://pickup-map.bashconnect.com/'),
              (t.width = '100%'),
              (t.height = '100%'),
              (t.id = 'map'),
              (t.allow = 'geolocation'),
              $(t).appendTo('.tfg-pickup-map-content'),
              window.Penpal.connectToChild({
                iframe: t,
                methods: {
                  sendAttachment(e) {
                    Ie(),
                      window.vtexjs.checkout.sendAttachment('shippingData', e),
                      $('#tfg-pickup-map').remove(),
                      $('body').css('overflow', 'auto'),
                      $('body').css('width', 'auto'),
                      $('body').css('position', 'relative');
                  },
                  getCheckoutJS() {
                    return window.vtexjs.checkout.orderForm;
                  },
                  getSpecialFields() {
                    return Y(window.vtexjs.checkout.orderForm.items);
                  },
                  remove() {
                    $('#tfg-pickup-map').remove(),
                      $('body').css('overflow', 'auto'),
                      $('body').css('width', 'auto'),
                      $('body').css('position', 'relative');
                  },
                  getState() {
                    return e;
                  },
                },
              }),
              $('#tfg-pickup-map').click((e) => {
                e.stopPropagation(),
                  $('#tfg-pickup-map').remove(),
                  $('body').css('overflow', 'auto'),
                  $('body').css('width', 'auto'),
                  $('body').css('position', 'relative');
              });
          };
          $('#tfg-pickup-button')
            .unbind()
            .click(() => e('none')),
            $('#tfg-pickup-see-more-button')
              .unbind()
              .click(() => e(c)),
            $('#find-pickups-button-new')
              .unbind()
              .click(() => e('geolocate')),
            $('#find-pickups-manually-search')
              .unbind()
              .click(() => e('manual'));
        }),
        (tt = function () {
          $('span.help.error').remove(),
            (Xe.validForm = !0),
            ['pickup-receiver', 'custom-pickup-complement'].forEach((e) => {
              let t;
              let n = !0;
              switch (e) {
                case 'pickup-receiver':
                  (n = !($('#'.concat(e)).length > 0 && !$('#'.concat(e)).attr('disabled') && !$('#'.concat(e)).val())),
                    (t = '.shp-pickup-receiver');
                  break;
                case 'custom-pickup-complement':
                  (n = U($('#'.concat(e)).val())), (t = '#box-pickup-complement');
              }
              n
                ? $(t).removeClass('error')
                : ($(t).addClass('error'),
                  $(t).append('<span class="help error">This field is required.</span>'),
                  $(''.concat(t, ' span.error')).show(),
                  H(),
                  (Xe.validForm = !1),
                  window.postMessage(
                    { type: 'COLLECTION_VALIDATION_ERROR', message: ''.concat(e, ' is invalid') },
                    '*'
                  ));
            });
        }),
        (nt = function () {
          if ((tt(), Xe.validForm)) {
            let e = $('#custom-pickup-complement').val().replace(/\s/g, '');
            e.length === 9 && e[0] !== '0' && (e = '0'.concat(e)),
              localStorage.setItem('saving-shipping-collect', !0),
              $('#btn-go-to-payment').trigger('click');
            try {
              window.vtexjs.checkout
                .getOrderForm()
                .then((t) => {
                  const n = t.shippingData.address;
                  return (
                    be(d, { phone: e }).then(() => {
                      let t;
                      let r;
                      (t = n.receiverName),
                        (r = e),
                        t &&
                          r &&
                          ($('.vtex-omnishipping-1-x-SummaryItemAddress .collect-receiver').length
                            ? $('.collect-receiver').html(''.concat(t, ' - ').concat(r, ' '))
                            : $('.vtex-omnishipping-1-x-SummaryItemAddress').append(
                                '<p class="collect-receiver">\n      '.concat(t, ' - ').concat(r, '\n      </p>')
                              ));
                    }),
                    window.vtexjs.checkout.calculateShipping(n)
                  );
                })
                .done(() => {
                  localStorage.removeItem('saving-shipping-collect');
                });
            } catch (e) {
              console.error('VTEX_ORDERFORM_ERROR: Could not load at CollectController', e),
                Je({
                  eventCategory: 'Checkout_SystemError',
                  action: 'OrderFormFailed',
                  label: 'Could not getOrderForm() from vtex',
                  description: 'Could not load orderForm for Collect.',
                });
            }
          }
        }),
        (rt = function () {
          let n;
          let i;
          const a = $('#postalCode-finished-loading').length > 0;
          $('#shipping-option-pickup-in-point').one('click', () => {
            Xe.collectReset = !0;
          }),
            (function () {
              let e;
              let t;
              if (!($('#pickup-receiver').length < 1)) {
                const n = Ae({
                  preferred:
                    (e = window) === null ||
                    void 0 === e ||
                    (e = e.vtexjs) === null ||
                    void 0 === e ||
                    (e = e.checkout) === null ||
                    void 0 === e ||
                    (e = e.orderForm) === null ||
                    void 0 === e ||
                    (e = e.shippingData) === null ||
                    void 0 === e ||
                    (e = e.address) === null ||
                    void 0 === e
                      ? void 0
                      : e.receiverName,
                  type: 'collect',
                }).trim();
                n.length > 0 &&
                  ((t = $('#pickup-receiver')) === null || void 0 === t || (t = t.val()) === null || void 0 === t
                    ? void 0
                    : t.trim()) === '' &&
                  $('#pickup-receiver').val(n);
              }
            })(),
            window.location.hash === t && a
              ? ((Xe.inCollect = $('#shipping-option-pickup-in-point').hasClass('shp-method-option-active')),
                (Xe.pickupSelected = $('div.ask-for-geolocation').length === 0),
                Xe.inCollect &&
                  ((($('#tfg-pickup-button').length || $('#tfg-pickup-see-more-button').length) &&
                    ($('#find-pickups-manually-search').length || $('#find-pickups-button-new').length)) ||
                    et(),
                  W(),
                  Xe.pickupSelected && !Xe.collectReset
                    ? ($('button.shp-pickup-receiver__btn').trigger('click'),
                      $('div.shp-pickup-receiver').addClass('show'),
                      $('p#box-pickup-complement').addClass('show'),
                      (n = we(c)),
                      (i = M({ type: 'collect', fields: n })),
                      $('#custom-pickup-complement').length === 0 && $('.btn-go-to-payment-wrapper').before(e),
                      i && $('#custom-pickup-complement').val(i).css('border', 0),
                      (function () {
                        if ($('#custom-go-to-payment').length <= 0) {
                          const e = $('#btn-go-to-payment');
                          const t = e.clone(!1);
                          $(e).hide(),
                            $(t).data('bind', ''),
                            $(t).removeAttr('id').attr('id', 'custom-go-to-payment'),
                            $(t).removeAttr('data-bind'),
                            $(t).css('display', 'block'),
                            $('p.btn-go-to-payment-wrapper').append(t),
                            $(t).on('click', nt);
                        }
                      })())
                    : ($('div.shp-pickup-receiver').removeClass('show'),
                      $('p#box-pickup-complement').removeClass('show')),
                  Xe.collectReset &&
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
                          .appendTo('.delivery-group-content');
                      const e = window.vtexjs.checkout.orderForm.shippingData;
                      const t = ze(
                        ze({}, e),
                        {},
                        {
                          address: null,
                          availableAddresses: e.availableAddresses,
                          selectedAddresses: e.selectedAddresses.filter((e) => e.addressType !== 'search'),
                          logisticsInfo: e.logisticsInfo,
                        }
                      );
                      window.vtexjs.checkout.sendAttachment('shippingData', t), Ie(), et();
                    })(),
                    (Xe.collectReset = !1)),
                  $('p.vtex-omnishipping-1-x-shippingSectionTitle').text('Collect options'),
                  $('#change-pickup-button').text('Available pickup points'),
                  $('h2.vtex-omnishipping-1-x-geolocationTitle.ask-for-geolocation-title').text(
                    'Find nearby Click & Collect points'
                  ),
                  $('h3.vtex-omnishipping-1-x-subtitle.ask-for-geolocation-subtitle').text(
                    "Search for addresses that you frequently use and we'll locate stores nearby."
                  ),
                  Xe.pickupSelected && $('label.shp-pickup-receiver__label').text("Recipient's name")),
                localStorage.getItem('shipping-incomplete-values') &&
                  ($('#custom-go-to-payment').trigger('click'), localStorage.removeItem('shipping-incomplete-values')))
              : ($('#box-pickup-complement').remove(),
                window.location.hash === r &&
                  setTimeout(() => {
                    let e;
                    const n =
                      (e = window.vtexjs.checkout.orderForm) === null ||
                      void 0 === e ||
                      (e = e.shippingData) === null ||
                      void 0 === e
                        ? void 0
                        : e.address;
                    if (!localStorage.getItem('saving-shipping-collect')) {
                      const r = we(d).phone;
                      !n ||
                        n.addressType !== o ||
                        (n.receiverName && r) ||
                        ((window.location.hash = t),
                        localStorage.setItem('shipping-incomplete-values', !0),
                        Je({
                          action: 'stepRedirect',
                          label: 'redirectPaymentToShipping',
                          description:
                            'User redirect to shipping because Collection is missing receiverName or phone number.',
                        }));
                    }
                  }, 1e3)),
            ot();
        }),
        (ot = function () {
          if (!Xe.runningObserver) {
            const e = document.querySelector('.shipping-container .box-step');
            const t = new MutationObserver(() => {
              (Xe.runningObserver = !0), rt();
            });
            e && t.observe(e, { attributes: !1, childList: !0, characterData: !1 });
          }
        }),
        $(document).ready(() => {
          rt();
        }),
        $(window).on('hashchange orderFormUpdated.vtex', () => {
          rt();
        }),
        { state: Xe, init() {} });
      const at = function (e) {
        const t = e.label;
        const n = e.name;
        const r = e.value;
        const o = void 0 === r ? '' : r;
        const i = e.required;
        const a = void 0 === i || i;
        const s = e.type;
        const c = void 0 === s ? 'text' : s;
        const u = e.placeholder;
        const l = e.autoComplete;
        const d = void 0 === l ? 'on' : l;
        const h = e.maxLength;
        const p = e.minlength;
        const f = e.disabled;
        const v = void 0 !== f && f;
        const m = e.options;
        const y = e.checked;
        const g = e.error;
        const b = void 0 === g ? 'This field is required.' : g;
        const w = e.containerClasses;
        const _ = void 0 === w ? '' : w;
        const x = n.replace(/\s/g, '-');
        const k = '<label id="bash--label-'.concat(x, '" for="bash--input-').concat(x, '">').concat(t, '</label>');
        return '\n<p class="input bash--'
          .concat(c, 'field-')
          .concat(n.replace(/\s/g, '-'), ' bash--')
          .concat(c, ' ')
          .concat(a ? 'required' : 'optional', ' ')
          .concat(_, '">\n  ')
          .concat(t && c !== 'checkbox' ? k : '', '\n  ')
          .concat(
            (function () {
              switch (c) {
                case 'radio':
                  return Q({ name: n, options: m });
                case 'dropdown':
                  return (function (e) {
                    const t = e.name;
                    const n = e.disabled;
                    const r = void 0 !== n && n;
                    const o = e.options;
                    const i = e.required;
                    const a = o.find((e) => !0 === e.selected);
                    return '\n  <select \n    name="'
                      .concat(t, '" \n    ')
                      .concat(i ? ' required ' : '', ' \n    ')
                      .concat(r ? ' disabled ' : '', ' \n    id="bash--input-')
                      .concat(t, '" \n    class="input-large" \n  >\n  ')
                      .concat(
                        o
                          .map((e, t) => {
                            const n = e.value;
                            const r = e.label;
                            const o = e.selected;
                            return '\n    <option \n    '
                              .concat(t === 0 ? ' disabled ' : '', '\n    ')
                              .concat(t !== 0 || a ? '' : ' selected ', '\n    ')
                              .concat(o ? ' selected ' : '', '\n      value="')
                              .concat(n, '" \n    >')
                              .concat(r, '</option>\n    ');
                          })
                          .join(''),
                        '\n  </select>\n  '
                      );
                  })({ name: n, disabled: v, options: m, required: a });
                case 'note':
                  return (function (e) {
                    const t = e.value;
                    const n = e.name;
                    return '\n  <div class="bash--note-field '.concat(n, '">\n  ').concat(t, '\n  </div>\n  ');
                  })({ name: n, value: o });
                case 'checkbox':
                  return (function (e) {
                    const t = e.name;
                    const n = e.label;
                    const r = e.checked;
                    const o = e.value;
                    return '\n    <label class="tfg-checkbox-label">\n       <input \n        type=\'checkbox\' \n        name="'
                      .concat(t, '" \n        id="bash--input-')
                      .concat(t, '"\n        ')
                      .concat(r ? "checked='checked'" : '', '\n        value=')
                      .concat(o != null ? o : '', '\n      />\n      <span>')
                      .concat(n, '</span>\n    </label>\n  ');
                  })({ name: n, label: t, checked: y });
                default:
                  return (function (e) {
                    const t = e.name;
                    const n = e.value;
                    const r = void 0 === n ? '' : n;
                    const o = e.required;
                    const i = void 0 === o || o;
                    const a = e.type;
                    const s = void 0 === a ? 'text' : a;
                    const c = e.placeholder;
                    const u = e.autoComplete;
                    const l = void 0 === u ? 'on' : u;
                    const d = e.minLength;
                    const h = void 0 === d ? 0 : d;
                    const p = e.maxLength;
                    const f = void 0 === p ? 0 : p;
                    const v = t.replace(/\s/g, '-');
                    return '\n  <input \n    '
                      .concat(i ? ' required ' : '', '\n    autocomplete="')
                      .concat(l, '" \n    id="bash--input-')
                      .concat(v, '" \n    type="')
                      .concat(s, '" \n    name="')
                      .concat(t, '" \n    ')
                      .concat(h > 0 ? 'minlength="'.concat(h, '"') : '', '\n    ')
                      .concat(f > 0 ? 'maxlength="'.concat(f, '"') : '', '\n    placeholder="')
                      .concat(c != null ? c : '', '" \n    class="input-xlarge" \n    value="')
                      .concat(r, '" \n  />\n');
                  })({
                    name: n,
                    value: o,
                    required: a,
                    type: c,
                    placeholder: u,
                    autoComplete: d,
                    maxLength: h,
                    minLength: p,
                  });
              }
            })(),
            '\n  <span class="bash--field-error">'
          )
          .concat(b, '</span>\n</p>  \n');
      };
      const st = function (e) {
        let t;
        const n = e.hasFurn;
        const r = e.hasFurnOnly;
        const o = e.hasFurnMixed;
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
            (he()
              .then((e) => {
                const t = e.data;
                const n = t.map((e) => ee(e));
                document.getElementById('bash-address-list') &&
                  (document.getElementById('bash-address-list').innerHTML = n.join('')),
                  $('#back-button-select-address').hasClass('inactive') && $('#back-button-select-address').show(),
                  W(),
                  t.length < 1 &&
                    (window.postMessage({ action: 'setDeliveryView', view: 'address-search' }),
                    $('#bash--input-address-search').focus(),
                    $('#back-button-select-address').hide(),
                    $('#back-button-select-address').addClass('inactive'));
              })
              .catch((e) => {
                throw (console.error('ERROR getAddresses', e), new Error('Error getAddresses', e.message));
              }),
            '\n <div class="bash--addresses shimmer" id="bash-address-list">\n    Loading addresses...\n  </div>\n  '),
            '\n    </section>\n\n    <section id="bash-delivery-options" class="shipping-method bash--delivery-view" data-section="select-address">\n      <hr>\n      <div class="bash--heading sub-heading">\n        <h3>Delivery method</h3>\n        '
          )
          .concat('', '\n      </div>\n      ')
          .concat(
            (function (e) {
              const t = e.hasFurnOnly;
              let n = 'Delivery within 3 - 5 working days';
              return (
                e.hasFurnitureMixed && (n = 'Delivery within 3 - 10 working days'),
                t && (n = 'Delivery within 5 - 10 working days'),
                $('.shp-summary-package-time > span').html(n),
                '\n  <label class="bash--delivery-option-display" >\n  '
                  .concat(
                    Q({ name: 'delivery-option', options: [{ checked: !0, value: !0 }] }),
                    '\n   \n   <div id="bash--delivery-option-text" class="bash--delivery-option-text">\n      <span class="normal-delivery">\n        '
                  )
                  .concat(
                    n,
                    '\n      </span>\n   </div>\n\n  <div id="bash--delivery-fee" class="bash--delivery-fee">\n    R50\n  </div>\n</label>\n\n'
                  )
                  .concat('', '\n  ')
              );
            })({ hasFurnOnly: r, hasFurnitureMixed: o }),
            '\n      <button \n        class="submit btn-go-to-payment btn btn-large btn-success"\n        id="btn-save-delivery" \n        type="submit">\n          Go to payment\n      </button>\n    </section>\n   </form>\n\n    <section class="bash--delivery-view" data-section="address-search">\n      <div class="bash--heading">\n        <h3>Add a new delivery address</h3>\n        <a href=\'#\' data-view=\'select-address\' id=\'back-button-select-address\'>&lt; Back</a>\n      </div>\n      <div class="address-search-field-container" id="address-search-field-container">\n          '
          )
          .concat(
            (function () {
              setTimeout(() => {
                Me();
              }, 500);
              const e = at({ name: 'address-search', placeholder: 'Start typing an address...', autoComplete: 'off' });
              return '\n  \n  '.concat(
                e,
                '\n    <div id="no-address-search-results-notification" class="notification info" >\n      <span class="icon"></span>\n      <div class="notification-content">\n      We could not find your address. \n        <a class="no-results-drop-down" href="" data-view="address-form" id="no-address-search-results">\n          Please click here to enter it manually.\n        </a>\n    </div>\n  '
              );
            })(),
            ' \n      </div>\n      <p style="font-size: 12px; margin: 16px 0" id="type-your-address-above">\n        Type your address above or \n        <a \n          href="" id="link-manual-address-entry"\n          data-view="address-form"\n          onClick="document.getElementById(\'bash--input-street\').focus()"\n          style="text-decoration: underline" \n        >enter it manually</a>.\n      </p>\n    </section>\n    \n    <section class="bash--delivery-view" data-section="address-form">\n       <div class="bash--heading">\n        <h3>Delivery address</h3>\n        <a href="#" class="back-button--search" data-view="address-search">&lt; Back</a>\n        <a href="#" class="back-button--select" data-view="select-address">&lt; Back</a>\n      </div>\n      '
          )
          .concat(
            ((t = [
              { name: 'addressId', type: 'hidden', value: '', required: !1 },
              { name: 'addressName', type: 'hidden', value: '', required: !1, maxLength: 50 },
              { name: 'lat', required: !1, type: 'hidden', value: '' },
              { name: 'lng', required: !1, type: 'hidden', value: '' },
              { name: 'street', label: 'Street address', required: !0, value: '' },
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
              { name: 'businessName', label: 'Business name', required: !1, value: '', maxLength: 100 },
              {
                name: 'companyBuilding',
                label: 'Building/Complex and number',
                required: !1,
                value: '',
                maxLength: 100,
              },
              { name: 'neighborhood', label: 'Suburb', value: '', maxLength: 750 },
              { name: 'city', label: 'City', required: !0, value: '', maxLength: 750 },
              { name: 'postalCode', label: 'Postal code', value: '', type: 'tel', minlength: 4, maxLength: 4 },
              {
                type: 'note',
                required: !1,
                name: 'suburb-postal-reminder',
                value: 'Make sure to specify the correct Suburb and Postal code so we can easily find your address.',
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
              { type: 'note', required: !1, name: 'country-display', label: 'Country', value: 'South Africa' },
              { type: 'hidden', required: !0, name: 'country', value: 'ZAF' },
              { name: 'receiverName', label: 'Recipient’s name', required: !0, value: Ae({ type: 'delivery' }) },
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
              .map((e) => at(e))
              .join('')),
            '\n  <form id="bash--address-form" method="post">\n    '.concat(
              t,
              '\n\n    <button \n      class="submit btn-go-to-payment btn btn-large btn-success"\n      id="btn-save-address" \n      type="submit">\n      Save address\n    </button>\n  </form>\n  \n  '
            )),
            '\n    </section>\n    \n  </div>'
          );
      };
      const ct = function (e) {
        let t;
        let n;
        let r;
        let o;
        const i = e.hasTV;
        const a = e.hasSim;
        const s =
          '\n    <div id="tv-license-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>TV license information needed</h3>\n        <p class="tfg-custom-subtitle">Please provide your ID number to validate your TV Licence.</p>\n      </div>\n      '.concat(
            '\n    '.concat(at({ name: 'tv_tvID', label: 'SA ID number', required: !0, value: '' }), '\n  '),
            '\n    </div>\n  '
          );
        const c =
          '\n    <div id="rica-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>Rica information required</h3>\n        <p class="tfg-custom-subtitle">\n          To RICA your SIM card, provide your SA ID (or foreign passport) number and your address as\n          it appears on a valid proof of residence.\n        </p> \n      </div>\n        '.concat(
            ((t = window.vtexjs.checkout.orderForm.shippingData.selectedAddress),
            (n = [
              {
                name: 'rica_fullName',
                label: 'Full name and surname',
                required: !0,
                value: Ae({ type: 'delivery' }) || '',
              },
              {
                name: 'rica_streetAddress',
                label: 'Street address',
                required: !0,
                value: (t == null ? void 0 : t.street) || '',
              },
              { name: 'rica_suburb', label: 'Suburb', value: (t == null ? void 0 : t.neighborhood) || '' },
              { name: 'rica_city', label: 'City', required: !0, value: (t == null ? void 0 : t.city) || '' },
              {
                name: 'rica_postalCode',
                label: 'Postal code',
                value: (t == null ? void 0 : t.postalCode) || '',
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
              { type: 'note', required: !1, name: 'rica-country-display', label: 'Country', value: 'South Africa' },
              { type: 'hidden', required: !0, name: 'country', value: 'ZAF' },
            ]),
            (r = [
              { name: 'rica_idOrPassport', label: 'ID or Passport number', required: !0, value: '' },
              {
                name: 'rica_sameAddress',
                label: 'Residential address the same as delivery address',
                type: 'checkbox',
                checked: !0,
                required: !1,
              },
            ]
              .map((e) => at(e))
              .join('')),
            (o = n.map((e) => at(e)).join('')),
            '\n    '.concat(r, '\n    <div class="rica-conditional-fields hide">\n    ').concat(o, '\n    </div>\n  ')),
            '\n    </div>\n    '
          );
        return '\n  <section class="bash--extra-fields bash--delivery-view" data-section="select-address">\n    '
          .concat(i ? s : '', '\n    ')
          .concat(a ? c : '', '\n  </section>');
      };
      const ut = function (e) {
        const t = e.businessName;
        const n = e.receiverPhone;
        be('deliver', { jsonString: JSON.stringify({ businessName: t || '', receiverPhone: n || '' }) });
      };
      const lt = function (e) {
        let t;
        const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { validateExtraFields: !0 };
        console.info('### setAddress ###', { address: e });
        const r = n.validateExtraFields;
        const o = window.vtexjs.checkout.orderForm.items;
        const c = Y(o);
        const u = c.hasTVs;
        const l = c.hasSimCards;
        u && qe(e, Se, 'tv_'), l && Ge();
        let d;
        const h = Ue(e, r);
        const p = h.isValid;
        const f = h.invalidFields;
        if (!p) {
          return (
            console.error({ invalidFields: f }),
            Re(e),
            $('#bash--address-form').addClass('show-form-errors'),
            r && ((d = $('#bash--delivery-form')) === null || void 0 === d || d.addClass('show-form-errors')),
            $('#bash--input-'.concat(f[0])).focus(),
            xe.includes(f[0]) && window.postMessage({ action: 'setDeliveryView', view: 'address-edit' }),
            { success: !1, error: 'Invalid address details.' }
          );
        }
        e.addressType === a && (e.addressType = s),
          Ee.includes(e.addressType) || (e.addressType = i),
          e.number && ((e.street = ''.concat(e.number, ' ').concat(e.street)), (e.number = '')),
          (e.country = 'ZAF');
        const v =
          (t = window) === null ||
          void 0 === t ||
          (t = t.vtexjs) === null ||
          void 0 === t ||
          (t = t.checkout) === null ||
          void 0 === t
            ? void 0
            : t.orderForm;
        const m = v.shippingData;
        return (
          (m.address = e),
          (m.selectedAddresses = [e]),
          e.complement && ((e.receiverPhone = e.complement), (m.address.complement = ''), (e.complement = '')),
          e.companyBuilding &&
            !m.address.street.includes(', '.concat(e.companyBuilding)) &&
            (m.address.street = ''.concat(e.street, ', ').concat(e.companyBuilding)),
          (m.selectedAddresses[0] = m.address),
          Fe(),
          window.vtexjs.checkout
            .sendAttachment('shippingData', m)
            .then((t) => {
              const n = t.messages.filter((e) => e.status === 'error');
              if (n.length > 0) {
                return (
                  We(n),
                  window.postMessage({ action: 'setDeliveryView', view: 'address-form' }),
                  { success: !1, errors: n }
                );
              }
              e.addressName && ve(e), console.info('### Update customData ###', { address: e });
              try {
                ut({ businessName: e.businessName, receiverPhone: e.receiverPhone });
              } catch (e) {
                Je({
                  eventCategory: 'Checkout_SystemError',
                  action: 'OrderFormFailed',
                  label: 'Could not update businessName and/or receiverPhone ',
                  description: 'Could not update businessName and/or receiverPhone.',
                });
              }
              return { success: !0 };
            })
            .done(() => W())
        );
      };
      function dt(e) {
        return (
          (dt =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          dt(e)
        );
      }
      function ht() {
        ht = function () {
          return e;
        };
        var e = {};
        const t = Object.prototype;
        const n = t.hasOwnProperty;
        const r =
          Object.defineProperty ||
          function (e, t, n) {
            e[t] = n.value;
          };
        const o = typeof Symbol === 'function' ? Symbol : {};
        const i = o.iterator || '@@iterator';
        const a = o.asyncIterator || '@@asyncIterator';
        const s = o.toStringTag || '@@toStringTag';
        function c(e, t, n) {
          return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, o) {
          const i = t && t.prototype instanceof h ? t : h;
          const a = Object.create(i.prototype);
          const s = new E(o || []);
          return r(a, '_invoke', { value: _(e, n, s) }), a;
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = u;
        const d = {};
        function h() {}
        function p() {}
        function f() {}
        let v = {};
        c(v, i, function () {
          return this;
        });
        const m = Object.getPrototypeOf;
        const y = m && m(m(O([])));
        y && y !== t && n.call(y, i) && (v = y);
        const g = (f.prototype = h.prototype = Object.create(v));
        function b(e) {
          ['next', 'throw', 'return'].forEach((t) => {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          function o(r, i, a, s) {
            const c = l(e[r], e, i);
            if (c.type !== 'throw') {
              const u = c.arg;
              const d = u.value;
              return d && dt(d) == 'object' && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    (e) => {
                      o('next', e, a, s);
                    },
                    (e) => {
                      o('throw', e, a, s);
                    }
                  )
                : t.resolve(d).then(
                    (e) => {
                      (u.value = e), a(u);
                    },
                    (e) => o('throw', e, a, s)
                  );
            }
            s(c.arg);
          }
          let i;
          r(this, '_invoke', {
            value(e, n) {
              function r() {
                return new t((t, r) => {
                  o(e, n, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function _(e, t, n) {
          let r = 'suspendedStart';
          return function (o, i) {
            if (r === 'executing') throw new Error('Generator is already running');
            if (r === 'completed') {
              if (o === 'throw') throw i;
              return { value: void 0, done: !0 };
            }
            for (n.method = o, n.arg = i; ; ) {
              const a = n.delegate;
              if (a) {
                const s = x(a, n);
                if (s) {
                  if (s === d) continue;
                  return s;
                }
              }
              if (n.method === 'next') n.sent = n._sent = n.arg;
              else if (n.method === 'throw') {
                if (r === 'suspendedStart') throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else n.method === 'return' && n.abrupt('return', n.arg);
              r = 'executing';
              const c = l(e, t, n);
              if (c.type === 'normal') {
                if (((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)) continue;
                return { value: c.arg, done: n.done };
              }
              c.type === 'throw' && ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function x(e, t) {
          const n = t.method;
          const r = e.iterator[n];
          if (void 0 === r) {
            return (
              (t.delegate = null),
              (n === 'throw' &&
                e.iterator.return &&
                ((t.method = 'return'), (t.arg = void 0), x(e, t), t.method === 'throw')) ||
                (n !== 'return' &&
                  ((t.method = 'throw'), (t.arg = new TypeError(`The iterator does not provide a '${n}' method`)))),
              d
            );
          }
          const o = l(r, e.iterator, t.arg);
          if (o.type === 'throw') return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d;
          const i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                t.method !== 'return' && ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function k(e) {
          const t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          const t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(k, this), this.reset(!0);
        }
        function O(e) {
          if (e || e === '') {
            const t = e[i];
            if (t) return t.call(e);
            if (typeof e.next === 'function') return e;
            if (!isNaN(e.length)) {
              let r = -1;
              const o = function t() {
                for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
              return (o.next = o);
            }
          }
          throw new TypeError(`${dt(e)} is not iterable`);
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            const t = typeof e === 'function' && e.constructor;
            return !!t && (t === p || (t.displayName || t.name) === 'GeneratorFunction');
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            const a = new w(u(t, n, r, o), i);
            return e.isGeneratorFunction(n) ? a : a.next().then((e) => (e.done ? e.value : a.next()));
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', () => '[object Generator]'),
          (e.keys = function (e) {
            const t = Object(e);
            const n = [];
            for (const r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  const r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
            reset(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (const t in this)
                  t.charAt(0) === 't' && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop() {
              this.done = !0;
              const e = this.tryEntries[0].completion;
              if (e.type === 'throw') throw e.arg;
              return this.rval;
            },
            dispatchException(e) {
              if (this.done) throw e;
              const t = this;
              function r(n, r) {
                return (a.type = 'throw'), (a.arg = e), (t.next = n), r && ((t.method = 'next'), (t.arg = void 0)), !!r;
              }
              for (let o = this.tryEntries.length - 1; o >= 0; --o) {
                const i = this.tryEntries[o];
                var a = i.completion;
                if (i.tryLoc === 'root') return r('end');
                if (i.tryLoc <= this.prev) {
                  const s = n.call(i, 'catchLoc');
                  const c = n.call(i, 'finallyLoc');
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!c) throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt(e, t) {
              for (let r = this.tryEntries.length - 1; r >= 0; --r) {
                const o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && (e === 'break' || e === 'continue') && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
              const a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i ? ((this.method = 'next'), (this.next = i.finallyLoc), d) : this.complete(a)
              );
            },
            complete(e, t) {
              if (e.type === 'throw') throw e.arg;
              return (
                e.type === 'break' || e.type === 'continue'
                  ? (this.next = e.arg)
                  : e.type === 'return'
                  ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                  : e.type === 'normal' && t && (this.next = t),
                d
              );
            },
            finish(e) {
              for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                const n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d;
              }
            },
            catch(e) {
              for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                const n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  const r = n.completion;
                  if (r.type === 'throw') {
                    var o = r.arg;
                    S(n);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield(e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                this.method === 'next' && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function pt(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)), n.push.apply(n, r);
        }
        return n;
      }
      function ft(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? pt(Object(n), !0).forEach((t) => {
                vt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pt(Object(n)).forEach((t) => {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function vt(e, t, n) {
        return (
          (t = (function (e) {
            const t = (function (e, t) {
              if (dt(e) !== 'object' || e === null) return e;
              const n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                const r = n.call(e, t);
                if (dt(r) !== 'object') return r;
                throw new TypeError('@@toPrimitive must return a primitive value.');
              }
              return String(e);
            })(e, 'string');
            return dt(t) === 'symbol' ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function mt(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a);
          var c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      const yt = (function () {
        let e;
        const t =
          ((e = ht().mark(function e(t) {
            let n;
            let r;
            let o;
            let i;
            let a;
            let s;
            let c;
            let u;
            let l;
            let d;
            let h;
            let p;
            let f;
            return ht().wrap((e) => {
              for (;;) {
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t.preventDefault(),
                      $('select').change(),
                      (n = document.forms['bash--address-form']),
                      (r = $('#bash--input-addressName').val()),
                      (e.next = 6),
                      ye(r)
                    );
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
                        a = ft(
                          ft({ isDisposable: !1, reference: null, geoCoordinates: [], country: 'ZAF' }, o),
                          {},
                          { number: '', complement: '' }
                        ),
                        s = 0;
                      s < i.length;
                      s++
                    )
                      a[i[s]] = ((c = n[i[s]]) === null || void 0 === c ? void 0 : c.value) || null;
                    if (
                      ((a.addressName = a.addressName || a.addressId),
                      (a.addressId = a.addressId || a.addressName),
                      (u = [parseFloat(a.lng) || '', parseFloat(a.lat) || '']),
                      (a.geoCoordinate = u),
                      (a.geoCoordinates = u),
                      (l = a),
                      (d = Ue(a, !1)),
                      (h = d.isValid),
                      (p = d.invalidFields),
                      h)
                    ) {
                      e.next = 24;
                      break;
                    }
                    return (
                      console.error({ invalidFields: p }),
                      $('#bash--address-form').addClass('show-form-errors'),
                      $('#bash--input-'.concat(p[0])).focus(),
                      xe.includes(p[0]) && window.postMessage({ action: 'setDeliveryView', view: 'address-form' }),
                      window.postMessage(
                        {
                          type: 'ADDRESS_VALIDATION_ERROR',
                          message: 'Address validation error. See invalidFields.',
                          invalidFields: p,
                        },
                        '*'
                      ),
                      e.abrupt('return')
                    );
                  case 24:
                    return (e.next = 26), lt(l, { validateExtraFields: !1 });
                  case 26:
                    if ((f = e.sent).success) {
                      e.next = 31;
                      break;
                    }
                    return console.error('Set address error', { setAddressResponse: f }), e.abrupt('return');
                  case 31:
                    return (e.next = 33), me(a);
                  case 33:
                    window.postMessage({ action: 'setDeliveryView', view: 'select-address' }),
                      setTimeout(() => {
                        $('.bash--extra-fields').length > 0
                          ? document.querySelector('.bash--extra-fields').scrollIntoView({ behavior: 'smooth' })
                          : document.getElementById('bash-delivery-options').scrollIntoView({ behavior: 'smooth' });
                      }, 500),
                      Ze();
                  case 36:
                  case 'end':
                    return e.stop();
                }
              }
            }, e);
          })),
          function () {
            const t = this;
            const n = arguments;
            return new Promise((r, o) => {
              const i = e.apply(t, n);
              function a(e) {
                mt(i, r, o, a, s, 'next', e);
              }
              function s(e) {
                mt(i, r, o, a, s, 'throw', e);
              }
              a(void 0);
            });
          });
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      function gt(e) {
        return (
          (gt =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          gt(e)
        );
      }
      function bt() {
        bt = function () {
          return e;
        };
        var e = {};
        const t = Object.prototype;
        const n = t.hasOwnProperty;
        const r =
          Object.defineProperty ||
          function (e, t, n) {
            e[t] = n.value;
          };
        const o = typeof Symbol === 'function' ? Symbol : {};
        const i = o.iterator || '@@iterator';
        const a = o.asyncIterator || '@@asyncIterator';
        const s = o.toStringTag || '@@toStringTag';
        function c(e, t, n) {
          return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, o) {
          const i = t && t.prototype instanceof h ? t : h;
          const a = Object.create(i.prototype);
          const s = new E(o || []);
          return r(a, '_invoke', { value: _(e, n, s) }), a;
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = u;
        const d = {};
        function h() {}
        function p() {}
        function f() {}
        let v = {};
        c(v, i, function () {
          return this;
        });
        const m = Object.getPrototypeOf;
        const y = m && m(m(O([])));
        y && y !== t && n.call(y, i) && (v = y);
        const g = (f.prototype = h.prototype = Object.create(v));
        function b(e) {
          ['next', 'throw', 'return'].forEach((t) => {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          function o(r, i, a, s) {
            const c = l(e[r], e, i);
            if (c.type !== 'throw') {
              const u = c.arg;
              const d = u.value;
              return d && gt(d) == 'object' && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    (e) => {
                      o('next', e, a, s);
                    },
                    (e) => {
                      o('throw', e, a, s);
                    }
                  )
                : t.resolve(d).then(
                    (e) => {
                      (u.value = e), a(u);
                    },
                    (e) => o('throw', e, a, s)
                  );
            }
            s(c.arg);
          }
          let i;
          r(this, '_invoke', {
            value(e, n) {
              function r() {
                return new t((t, r) => {
                  o(e, n, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function _(e, t, n) {
          let r = 'suspendedStart';
          return function (o, i) {
            if (r === 'executing') throw new Error('Generator is already running');
            if (r === 'completed') {
              if (o === 'throw') throw i;
              return { value: void 0, done: !0 };
            }
            for (n.method = o, n.arg = i; ; ) {
              const a = n.delegate;
              if (a) {
                const s = x(a, n);
                if (s) {
                  if (s === d) continue;
                  return s;
                }
              }
              if (n.method === 'next') n.sent = n._sent = n.arg;
              else if (n.method === 'throw') {
                if (r === 'suspendedStart') throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else n.method === 'return' && n.abrupt('return', n.arg);
              r = 'executing';
              const c = l(e, t, n);
              if (c.type === 'normal') {
                if (((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)) continue;
                return { value: c.arg, done: n.done };
              }
              c.type === 'throw' && ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function x(e, t) {
          const n = t.method;
          const r = e.iterator[n];
          if (void 0 === r) {
            return (
              (t.delegate = null),
              (n === 'throw' &&
                e.iterator.return &&
                ((t.method = 'return'), (t.arg = void 0), x(e, t), t.method === 'throw')) ||
                (n !== 'return' &&
                  ((t.method = 'throw'), (t.arg = new TypeError(`The iterator does not provide a '${n}' method`)))),
              d
            );
          }
          const o = l(r, e.iterator, t.arg);
          if (o.type === 'throw') return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d;
          const i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                t.method !== 'return' && ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function k(e) {
          const t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          const t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(k, this), this.reset(!0);
        }
        function O(e) {
          if (e || e === '') {
            const t = e[i];
            if (t) return t.call(e);
            if (typeof e.next === 'function') return e;
            if (!isNaN(e.length)) {
              let r = -1;
              const o = function t() {
                for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
              return (o.next = o);
            }
          }
          throw new TypeError(`${gt(e)} is not iterable`);
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            const t = typeof e === 'function' && e.constructor;
            return !!t && (t === p || (t.displayName || t.name) === 'GeneratorFunction');
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            const a = new w(u(t, n, r, o), i);
            return e.isGeneratorFunction(n) ? a : a.next().then((e) => (e.done ? e.value : a.next()));
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', () => '[object Generator]'),
          (e.keys = function (e) {
            const t = Object(e);
            const n = [];
            for (const r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  const r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
            reset(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (const t in this)
                  t.charAt(0) === 't' && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop() {
              this.done = !0;
              const e = this.tryEntries[0].completion;
              if (e.type === 'throw') throw e.arg;
              return this.rval;
            },
            dispatchException(e) {
              if (this.done) throw e;
              const t = this;
              function r(n, r) {
                return (a.type = 'throw'), (a.arg = e), (t.next = n), r && ((t.method = 'next'), (t.arg = void 0)), !!r;
              }
              for (let o = this.tryEntries.length - 1; o >= 0; --o) {
                const i = this.tryEntries[o];
                var a = i.completion;
                if (i.tryLoc === 'root') return r('end');
                if (i.tryLoc <= this.prev) {
                  const s = n.call(i, 'catchLoc');
                  const c = n.call(i, 'finallyLoc');
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!c) throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt(e, t) {
              for (let r = this.tryEntries.length - 1; r >= 0; --r) {
                const o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && (e === 'break' || e === 'continue') && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
              const a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i ? ((this.method = 'next'), (this.next = i.finallyLoc), d) : this.complete(a)
              );
            },
            complete(e, t) {
              if (e.type === 'throw') throw e.arg;
              return (
                e.type === 'break' || e.type === 'continue'
                  ? (this.next = e.arg)
                  : e.type === 'return'
                  ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                  : e.type === 'normal' && t && (this.next = t),
                d
              );
            },
            finish(e) {
              for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                const n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d;
              }
            },
            catch(e) {
              for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                const n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  const r = n.completion;
                  if (r.type === 'throw') {
                    var o = r.arg;
                    S(n);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield(e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                this.method === 'next' && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function wt(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)), n.push.apply(n, r);
        }
        return n;
      }
      function _t(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? wt(Object(n), !0).forEach((t) => {
                xt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : wt(Object(n)).forEach((t) => {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function xt(e, t, n) {
        return (
          (t = (function (e) {
            const t = (function (e, t) {
              if (gt(e) !== 'object' || e === null) return e;
              const n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                const r = n.call(e, t);
                if (gt(r) !== 'object') return r;
                throw new TypeError('@@toPrimitive must return a primitive value.');
              }
              return String(e);
            })(e, 'string');
            return gt(t) === 'symbol' ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function kt(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a);
          var c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      const St = (function () {
        let e;
        const t =
          ((e = bt().mark(function e(t) {
            let n;
            let o;
            let i;
            let a;
            let s;
            let c;
            let d;
            let h;
            let p;
            let f;
            let v;
            let m;
            let y;
            let g;
            let b;
            let w;
            let _;
            return bt().wrap((e) => {
              for (;;) {
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (t.preventDefault(),
                      (n = window.vtexjs.checkout.orderForm.items),
                      (o = window.vtexjs.checkout.orderForm.shippingData.address),
                      (i = Y(n)),
                      (a = i.hasTVs),
                      (s = i.hasSimCards),
                      $('select').change(),
                      (c = {}),
                      (d = "[name='selected-address']:checked"),
                      !($(d).length < 1))
                    ) {
                      e.next = 10;
                      break;
                    }
                    return (
                      $('html, body').animate({ scrollTop: $('#bash--delivery-form').offset().top }, 400),
                      e.abrupt('return')
                    );
                  case 10:
                    return Fe(), (e.next = 13), ye($(d).val());
                  case 13:
                    return (h = e.sent), (c = _t(_t({}, o), h)), (e.next = 17), lt(c, { validateExtraFields: !1 });
                  case 17:
                    if (e.sent.success) {
                      e.next = 23;
                      break;
                    }
                    return console.error('Delivery Form - Address Validation error'), W(), e.abrupt('return');
                  case 23:
                    if (((p = {}), (f = {}), !s)) {
                      e.next = 32;
                      break;
                    }
                    for (v = ke, m = 0; m < v.length; m++) {
                      v[m] === 'sameAddress' && ((y = $('#bash--input-'.concat(v[m])).is(':checked')), (p[v[m]] = y)),
                        (p[v[m]] = $('#bash--input-rica_'.concat(v[m])).val() || '');
                    }
                    return (e.next = 30), be(u, p, !0);
                  case 30:
                    (g = e.sent), console.info({ ricaDataSent: g });
                  case 32:
                    if (!a) {
                      e.next = 39;
                      break;
                    }
                    for (b = Se, w = 0; w < b.length; w++) {
                      o[b[w]] || (c[b[w]] = $('#bash--input-tv_'.concat(b[w])).val()),
                        (f[b[w]] = $('#bash--input-tv_'.concat(b[w])).val() || '');
                    }
                    return (e.next = 37), be(l, f);
                  case 37:
                    (_ = e.sent), console.info({ tvDataSent: _ });
                  case 39:
                    return (e.next = 41), me(c);
                  case 41:
                    $('.bash--delivery-container').css('display', 'none'), (window.location.hash = r), W();
                  case 44:
                  case 'end':
                    return e.stop();
                }
              }
            }, e);
          })),
          function () {
            const t = this;
            const n = arguments;
            return new Promise((r, o) => {
              const i = e.apply(t, n);
              function a(e) {
                kt(i, r, o, a, s, 'next', e);
              }
              function s(e) {
                kt(i, r, o, a, s, 'throw', e);
              }
              a(void 0);
            });
          });
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      const Et = (function () {
        const e = { view: 'list', hasFurn: !1, hasTVs: !1, hasSim: !1, hasFurnMixed: !1, hasFurnOnly: !1 };
        const n = function () {
          if (
            (window.location.hash === t &&
              $('.shipping-summary-info').length &&
              $('.shipping-summary-info').text() === 'Waiting for more information' &&
              ((window.location.hash = '#/profile'),
              Je({
                action: 'stepRedirect',
                label: 'redirectShippingToProfile',
                description: 'User redirect to profile - "Waiting for more information" error.',
              })),
            !$('#bash--delivery-container').length)
          ) {
            if (window.vtexjs.checkout.orderForm) {
              let n;
              const r = (n = window.vtexjs.checkout.orderForm) === null || void 0 === n ? void 0 : n.items;
              const o = Y(r);
              const i = o.hasFurniture;
              const a = o.hasTVs;
              const s = o.hasSimCards;
              const c = o.hasFurnitureMixed;
              const u = o.hasFurnitureOnly;
              (e.hasFurn = i), (e.hasTVs = a), (e.hasSim = s), (e.hasFurnOnly = u), (e.hasFurnMixed = c);
            }
            $('.shipping-data .box-step').append(st({ hasFurnOnly: e.hasFurnOnly, hasFurnMixed: e.hasFurnMixed })),
              e.hasFurn
                ? $('#shipping-data:not(.has-furniture)').addClass('has-furniture')
                : $('#shipping-data.has-furniture').removeClass('has-furniture'),
              (e.hasFurn || e.hasSim || e.hasTVs) &&
                ($('#bash-delivery-options').before(ct({ hasSim: e.hasSim, hasTV: e.hasTVs })),
                e.hasSim && Ge(),
                e.hasTVs && Ve()),
              $('select, input').on('invalid', function () {
                const e = this;
                $(e)[0].setCustomValidity(' '),
                  $(e).parents('form').addClass('show-form-errors'),
                  $(e).off('change keyUp'),
                  $(e).on('change keyUp', () => {
                    $(e)[0].setCustomValidity('');
                  });
              });
          }
        };
        return (
          $(window).unload(() => {
            ge();
          }),
          $(document).ready(() => {
            ge(),
              window.location.hash === t
                ? (n(),
                  $('.bash--delivery-container.hide').removeClass('hide'),
                  $('.bash--delivery-container').css('display', 'flex'))
                : $('.bash--delivery-container:not(.hide)').length &&
                  ($('.bash--delivery-container:not(.hide)').addClass('hide'),
                  $('.bash--delivery-container').css('display', 'none'));
          }),
          $(window).on('hashchange', () => {
            console.info('hashchange TO SHIPPING'),
              window.location.hash === t
                ? (setTimeout(() => {
                    console.info('SCROLL TO SHIPPING'),
                      document.getElementById('shipping-data').scrollIntoView({ behavior: 'smooth' });
                  }, 500),
                  n(),
                  Ye(),
                  $('.bash--delivery-container').css('display', 'flex'),
                  $('.bash--delivery-container.hide').removeClass('hide'))
                : $('.bash--delivery-container:not(.hide)').length &&
                  ($('.bash--delivery-container:not(.hide)').addClass('hide'),
                  $('.bash--delivery-container').css('display', 'none'));
          }),
          $(window).on('orderFormUpdated.vtex', () => {
            let e;
            let i;
            const a = (e = window.vtexjs.checkout.orderForm) === null || void 0 === e ? void 0 : e.items;
            const s =
              (i = window.vtexjs.checkout.orderForm.shippingData) === null ||
              void 0 === i ||
              (i = i.address) === null ||
              void 0 === i
                ? void 0
                : i.addressType;
            const c = Y(a);
            const d = c.hasTVs;
            const h = c.hasSimCards;
            const p = c.hasFurnitureMixed;
            const f = window.vtexjs.checkout.orderForm.messages;
            if (window.location.hash === t) {
              const v = f.filter((e) => e.status === 'error');
              v && We(v);
            }
            if (s === o) {
              if (d || h || p) {
                return (
                  window.location.hash !== t && (window.location.hash = t),
                  void setTimeout(() => {
                    let e;
                    return (e = document.getElementById('shipping-option-delivery')) === null || void 0 === e
                      ? void 0
                      : e.click();
                  }, 2e3)
                );
              }
              $('#shipping-data:not(collection-active)').addClass('collection-active'),
                $('.delivery-active').removeClass('delivery-active');
            } else {
              n(),
                $('#shipping-data:not(delivery-active)').addClass('delivery-active'),
                $('.collection-active').removeClass('collection-active');
            }
            Ye(),
              (function () {
                if (window.vtexjs.checkout.orderForm.totalizers) {
                  const e = (
                    window.vtexjs.checkout.orderForm.totalizers.find((e) => e.id === 'Shipping') || { value: 5e3 }
                  ).value;
                  let t = 'Free';
                  e > 0 && (t = 'R'.concat((e / 100).toFixed(2).replace('.00', ''))),
                    $('#bash--delivery-fee').length > 0 &&
                      (document.getElementById('bash--delivery-fee').innerHTML = t);
                }
              })(),
              window.location.hash !== r ||
                (function () {
                  let e;
                  const t = (e = window.vtexjs.checkout.orderForm) === null || void 0 === e ? void 0 : e.items;
                  const n = Y(t);
                  const r = n.hasTVs;
                  const o = n.hasSimCards;
                  let i = !0;
                  if ((r && (we(l).tvID || (i = !1)), o)) {
                    const a = we(u);
                    (a.idOrPassport && a.streetAddress && a.postalCode) || (i = !1);
                  }
                  return i;
                })() ||
                (H(),
                (window.location.hash = t),
                Je({
                  action: 'stepRedirect',
                  label: 'redirectPaymentToShipping',
                  description: 'User redirect to shipping because Extra Fields are invalid.',
                }));
          }),
          $(document).on('click', 'a[data-view]', function (e) {
            e.preventDefault();
            const t = $(this).data('view');
            const n = decodeURIComponent($(this).data('content'));
            window.postMessage({ action: 'setDeliveryView', view: t, content: n });
          }),
          $(document).on('click', '#no-address-search-results', () => {
            document.getElementById('bash--address-form').reset(),
              document.getElementById('bash--input-street').focus();
          }),
          $(document).on('change', 'input[type="radio"][name="selected-address"]', function () {
            const e = this;
            const t = (function (e) {
              try {
                return JSON.parse(decodeURIComponent(e));
              } catch (e) {}
            })($(this).parents('.bash--address-listing').data('address'));
            document.forms['bash--delivery-form'] &&
              (document.forms['bash--delivery-form'].reset(),
              $('#bash--input-lat').val(''),
              $('#bash--input-lng').val(''),
              document.forms['bash--delivery-form'].classList.remove('show-form-errors')),
              t &&
                ye(t.addressName)
                  .then((n) => {
                    lt(n || t, { validateExtraFields: !1 }),
                      $('input[type="radio"][name="selected-address"]:checked').attr('checked', !1),
                      $(e).attr('checked', !0);
                  })
                  .catch((e) => {
                    console.error('Could not get address - address selection', e == null ? void 0 : e.message);
                  });
          }),
          $(document).on('change', '#bash--input-rica_sameAddress', function () {
            let e;
            this.checked
              ? $('.rica-conditional-fields').slideUp(() => Ge())
              : ((e = $('#bash--input-rica_idOrPassport').val()),
                qe(
                  {
                    idOrPassport: e != null ? e : '',
                    fullName: '',
                    streetAddress: '',
                    suburb: '',
                    city: '',
                    postalCode: '',
                    province: '',
                  },
                  ke,
                  'rica_',
                  !0
                ),
                $('.rica-conditional-fields').slideDown(() => $('#bash--input-rica_fullName').focus()));
          }),
          $(document).on('change', 'input[name="addressType"]', function () {
            $(this).is(':checked') && ($(this).val() === 'business' ? Z({ focus: !0 }) : J());
          }),
          $(document).on('click', '#shipping-option-pickup-in-point, #shipping-option-delivery', function () {
            $(this).attr('id') === 'shipping-option-pickup-in-point'
              ? $('#bash--delivery-container').hide()
              : $('#bash--delivery-container').show();
          }),
          $(document).on('submit', '#bash--address-form', yt),
          $(document).on('submit', '#bash--delivery-form', St),
          $(document).on('click', '.remove-cart-item', function (e) {
            let t;
            e.preventDefault(),
              ((t = $(this).data('index')),
              window.vtexjs.checkout.updateItems([{ index: ''.concat(t), quantity: 0 }]).done(() => {
                W();
              })).done(() => {
                W();
              });
          }),
          $(document).on('keyup click', '.invalid', function () {
            $(this).removeClass('invalid');
          }),
          window.addEventListener('message', (e) => {
            let t;
            const n = e.data;
            if (n && n.action) {
              switch (n.action) {
                case 'setDeliveryView':
                  if (
                    ((t = document.querySelector('.bash--delivery-container')) === null ||
                      void 0 === t ||
                      t.setAttribute('data-view', n.view),
                    (n.view === 'address-form' || n.view === 'address-edit') &&
                      ((function (e) {
                        const t = document.querySelector(e);
                        if (t) {
                          t.setAttribute('type', 'tel'), t.setAttribute('maxlength', 12), (t.value = B(t.value));
                          const n = $(e);
                          n.keyup((e) => {
                            let t;
                            const r = e.currentTarget.value.replace(/[^0-9+*#]+/g, '').trim();
                            const o = e.keyCode === 8;
                            (t = B(r, !o)),
                              n.parent('.text').removeClass('error'),
                              n.parent('.text').find('span.error').hide(),
                              n.val(t);
                          });
                        }
                      })('#bash--input-receiverPhone'),
                      n.content))
                  ) {
                    try {
                      const r = JSON.parse(decodeURIComponent($('#'.concat(n.content)).data('address')));
                      Re(r);
                    } catch (e) {
                      console.warn('Could not parse address Json', n.content);
                    }
                  }
                  break;
                case 'FB_LOG':
                  break;
                default:
                  console.error('Unknown action', n.action);
              }
            }
          }),
          { state: e, init() {} }
        );
      })();
      const Ot = Et;
      const jt = (function () {
        const e = {
          showFurnitureForm: !1,
          showTVIDForm: !1,
          showRICAForm: !1,
          showTVorRICAMsg: !1,
          showMixedProductsMsg: !1,
          runningObserver: !1,
        };
        const t = function () {
          setTimeout(() => {
            !(function () {
              if (window.vtexjs.checkout.orderForm) {
                const t = window.vtexjs.checkout.orderForm.items;
                const n = Y(t);
                const r = n.hasTVs;
                const o = n.hasSimCards;
                const i = n.hasFurnitureMixed;
                (e.showTVIDForm = r),
                  (e.showRICAForm = o),
                  (e.showTVorRICAMsg = e.showTVIDForm || e.showRICAForm),
                  (e.showMixedProductsMsg = i);
              }
            })(),
              e.showFurnitureForm
                ? $('div.subheader').css('display', 'none')
                : $('div.subheader').css('display', 'block');
          }, 500);
        };
        return (
          $(document).ready(() => {
            t();
          }),
          $(window).on('hashchange orderFormUpdated.vtex', () => {
            t();
          }),
          $(document).on('click', '#shipping-data .btn-link.vtex-omnishipping-1-x-btnDelivery', () => {
            t();
          }),
          {
            state: e,
            setView(e) {
              let t;
              (t = document) === null ||
                void 0 === t ||
                (t = t.body) === null ||
                void 0 === t ||
                t.setAttribute('data-delivery-view', e);
            },
            showCustomSections() {
              let t;
              const n = $('#tfg-custom-tvrica-msg').length > 0;
              const r = $('#tfg-custom-mixed-msg').length > 0;
              let o = !1;
              (e.showTVorRICAMsg || e.showMixedProductsMsg) &&
                ($('.vtex-omnishipping-1-x-deliveryChannelsWrapper.custom-disabled').length < 1 &&
                  ($('#shipping-option-delivery').trigger('click'),
                  $('.vtex-omnishipping-1-x-deliveryChannelsWrapper').addClass('custom-disabled')),
                e.showTVorRICAMsg &&
                  !n &&
                  ($('.vtex-omnishipping-1-x-addressFormPart1').prepend(
                    '\n  <div id="tfg-custom-tvrica-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      You can\'t collect this order in store because your cart contains items \n      which require either RICA or TV License validation.\n    </p>\n  </div>\n'
                  ),
                  (o = !0)),
                e.showMixedProductsMsg && !r && ($('.vtex-omnishipping-1-x-addressFormPart1').prepend(''), (o = !0))),
                o &&
                  ((t = '.tfg-custom-step'),
                  $(t).addClass('custom-step-border'),
                  $(t).last().addClass('last-custom-step-border'));
            },
            init() {},
          }
        );
      })();
      const Ct = jt;
      function $t(e) {
        return (
          ($t =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          $t(e)
        );
      }
      function Lt() {
        Lt = function () {
          return e;
        };
        var e = {};
        const t = Object.prototype;
        const n = t.hasOwnProperty;
        const r =
          Object.defineProperty ||
          function (e, t, n) {
            e[t] = n.value;
          };
        const o = typeof Symbol === 'function' ? Symbol : {};
        const i = o.iterator || '@@iterator';
        const a = o.asyncIterator || '@@asyncIterator';
        const s = o.toStringTag || '@@toStringTag';
        function c(e, t, n) {
          return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, o) {
          const i = t && t.prototype instanceof h ? t : h;
          const a = Object.create(i.prototype);
          const s = new E(o || []);
          return r(a, '_invoke', { value: _(e, n, s) }), a;
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = u;
        const d = {};
        function h() {}
        function p() {}
        function f() {}
        let v = {};
        c(v, i, function () {
          return this;
        });
        const m = Object.getPrototypeOf;
        const y = m && m(m(O([])));
        y && y !== t && n.call(y, i) && (v = y);
        const g = (f.prototype = h.prototype = Object.create(v));
        function b(e) {
          ['next', 'throw', 'return'].forEach((t) => {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          function o(r, i, a, s) {
            const c = l(e[r], e, i);
            if (c.type !== 'throw') {
              const u = c.arg;
              const d = u.value;
              return d && $t(d) == 'object' && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    (e) => {
                      o('next', e, a, s);
                    },
                    (e) => {
                      o('throw', e, a, s);
                    }
                  )
                : t.resolve(d).then(
                    (e) => {
                      (u.value = e), a(u);
                    },
                    (e) => o('throw', e, a, s)
                  );
            }
            s(c.arg);
          }
          let i;
          r(this, '_invoke', {
            value(e, n) {
              function r() {
                return new t((t, r) => {
                  o(e, n, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function _(e, t, n) {
          let r = 'suspendedStart';
          return function (o, i) {
            if (r === 'executing') throw new Error('Generator is already running');
            if (r === 'completed') {
              if (o === 'throw') throw i;
              return { value: void 0, done: !0 };
            }
            for (n.method = o, n.arg = i; ; ) {
              const a = n.delegate;
              if (a) {
                const s = x(a, n);
                if (s) {
                  if (s === d) continue;
                  return s;
                }
              }
              if (n.method === 'next') n.sent = n._sent = n.arg;
              else if (n.method === 'throw') {
                if (r === 'suspendedStart') throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else n.method === 'return' && n.abrupt('return', n.arg);
              r = 'executing';
              const c = l(e, t, n);
              if (c.type === 'normal') {
                if (((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)) continue;
                return { value: c.arg, done: n.done };
              }
              c.type === 'throw' && ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function x(e, t) {
          const n = t.method;
          const r = e.iterator[n];
          if (void 0 === r) {
            return (
              (t.delegate = null),
              (n === 'throw' &&
                e.iterator.return &&
                ((t.method = 'return'), (t.arg = void 0), x(e, t), t.method === 'throw')) ||
                (n !== 'return' &&
                  ((t.method = 'throw'), (t.arg = new TypeError(`The iterator does not provide a '${n}' method`)))),
              d
            );
          }
          const o = l(r, e.iterator, t.arg);
          if (o.type === 'throw') return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d;
          const i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                t.method !== 'return' && ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function k(e) {
          const t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          const t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(k, this), this.reset(!0);
        }
        function O(e) {
          if (e || e === '') {
            const t = e[i];
            if (t) return t.call(e);
            if (typeof e.next === 'function') return e;
            if (!isNaN(e.length)) {
              let r = -1;
              const o = function t() {
                for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
              return (o.next = o);
            }
          }
          throw new TypeError(`${$t(e)} is not iterable`);
        }
        return (
          (p.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = c(f, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            const t = typeof e === 'function' && e.constructor;
            return !!t && (t === p || (t.displayName || t.name) === 'GeneratorFunction');
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : ((e.__proto__ = f), c(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            const a = new w(u(t, n, r, o), i);
            return e.isGeneratorFunction(n) ? a : a.next().then((e) => (e.done ? e.value : a.next()));
          }),
          b(g),
          c(g, s, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', () => '[object Generator]'),
          (e.keys = function (e) {
            const t = Object(e);
            const n = [];
            for (const r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  const r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
            reset(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (const t in this)
                  t.charAt(0) === 't' && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop() {
              this.done = !0;
              const e = this.tryEntries[0].completion;
              if (e.type === 'throw') throw e.arg;
              return this.rval;
            },
            dispatchException(e) {
              if (this.done) throw e;
              const t = this;
              function r(n, r) {
                return (a.type = 'throw'), (a.arg = e), (t.next = n), r && ((t.method = 'next'), (t.arg = void 0)), !!r;
              }
              for (let o = this.tryEntries.length - 1; o >= 0; --o) {
                const i = this.tryEntries[o];
                var a = i.completion;
                if (i.tryLoc === 'root') return r('end');
                if (i.tryLoc <= this.prev) {
                  const s = n.call(i, 'catchLoc');
                  const c = n.call(i, 'finallyLoc');
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!c) throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt(e, t) {
              for (let r = this.tryEntries.length - 1; r >= 0; --r) {
                const o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && (e === 'break' || e === 'continue') && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
              const a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i ? ((this.method = 'next'), (this.next = i.finallyLoc), d) : this.complete(a)
              );
            },
            complete(e, t) {
              if (e.type === 'throw') throw e.arg;
              return (
                e.type === 'break' || e.type === 'continue'
                  ? (this.next = e.arg)
                  : e.type === 'return'
                  ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                  : e.type === 'normal' && t && (this.next = t),
                d
              );
            },
            finish(e) {
              for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                const n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d;
              }
            },
            catch(e) {
              for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                const n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  const r = n.completion;
                  if (r.type === 'throw') {
                    var o = r.arg;
                    S(n);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield(e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                this.method === 'next' && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function Pt(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a);
          var c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      const Nt = document.createElement('script');
      Nt.setAttribute('src', 'https://unpkg.com/penpal@^6/dist/penpal.min.js'), document.head.appendChild(Nt);
      const Tt = (function () {
        let e;
        const t =
          ((e = Lt().mark(function e() {
            let t;
            let n;
            return Lt().wrap(
              (e) => {
                for (;;) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n =
                          (t = window) === null ||
                          void 0 === t ||
                          (t = t.vtexjs) === null ||
                          void 0 === t ||
                          (t = t.checkout) === null ||
                          void 0 === t
                            ? void 0
                            : t.orderForm),
                        (e.prev = 1),
                        n)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 5), window.vtexjs.checkout.getOrderForm();
                    case 5:
                      n = e.sent;
                    case 6:
                      n && (Ct.init(), it.init(), Ot.init()), (e.next = 16);
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(1)),
                        console.error(
                          'VTEX_ORDERFORM_ERROR: Could not load at custom-shipping-steps Entry Point',
                          e.t0
                        ),
                        Je({
                          eventCategory: 'Checkout_SystemError',
                          action: 'OrderFormFailed',
                          label: 'Could not getOrderForm() from vtex',
                          description: 'Could not load orderForm on custom-shipping-steps Entry Point',
                        }),
                        Ct.init(),
                        it.init(),
                        Ot.init();
                    case 16:
                    case 'end':
                      return e.stop();
                  }
                }
              },
              e,
              null,
              [[1, 9]]
            );
          })),
          function () {
            const t = this;
            const n = arguments;
            return new Promise((r, o) => {
              const i = e.apply(t, n);
              function a(e) {
                Pt(i, r, o, a, s, 'next', e);
              }
              function s(e) {
                Pt(i, r, o, a, s, 'throw', e);
              }
              a(void 0);
            });
          });
        return function () {
          return t.apply(this, arguments);
        };
      })();
      document.addEventListener('DOMContentLoaded', Tt);
    })();
})();
