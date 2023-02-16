(() => {
  const e = () => '<span class="help error">This field is required.</span>';
  const t = () =>
    '\n  <p id="box-pickup-complement" \n  class="input custom-field-complement tfg-custom-addressForm">\n    <label>Mobile number</label>\n    <input \n      id="custom-pickup-complement" \n      class="input-xlarge success" \n      type="tel" \n      name="complement" \n      placeholder="" \n    />\n  </p>';
  const s = '#/shipping';
  const n = '#/payment';
  const a = 'ricafields';
  const i = 'tvfields';
  const o = window.location.host.includes('bash.com')
    ? 'https://store-api.www.bash.com/custom-api/'
    : `${window.location.protocol}//${window.location.host}/custom-api/`;
  const r = '1169288799';
  const d = () =>
    window.vtexjs.checkout.orderForm?.shippingData?.address?.complement ||
    window.vtexjs.checkout.orderForm?.clientProfileData?.phone ||
    document?.getElementById('client-phone')?.value;
  const c = (e) => {
    throw (console.error('ERROR', e), new Error(e));
  };
  const l = ({ cookie: e, cache: t, json: s }) => {
    const n = new Headers();
    return (
      e && n.append('Cookie', document?.cookie),
      t && n.append('Cache-Control', 'no-cache'),
      s && n.append('Content-type', 'application/json'),
      n
    );
  };
  const p = (e, t) => {
    const { orderFormId: s } = window.vtexjs.checkout.orderForm;
    return $.ajax({
      type: 'PUT',
      url: `/api/checkout/pub/orderForm/${s}/customData/${e}`,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(t),
    });
  };
  const u = (e) =>
    ((e) => !!e && ((e = e.replace(/\s/g, ''))[0] === '0' ? e.match(/[0-9\s]{10}/) : e.match(/[0-9\s]{9,}/)))(e);
  const h = (e) => {
    const t = [r];
    const s = ['938942995'];
    const n = ['24833302'];
    const a = [];
    let i = !1;
    let o = !1;
    let d = !1;
    let c = !1;
    return (
      e.forEach((e) => {
        const r = e.productCategoryIds.split('/');
        a.push(r),
          r.forEach((e) => {
            e && (s.includes(e) && (i = !0), n.includes(e) && (o = !0), t.includes(e) && (d = !0));
          });
      }),
      (c = e.length > 1 && d && !a.every((e) => e === r)),
      { hasFurniture: d, hasSimCards: o, hasTVs: i, hasFurnitureMixed: c, categories: a }
    );
  };
  const m = () => {
    $('.shimmer').removeClass('shimmer');
  };
  const v = ({ name: e, options: t = [] }) =>
    `\n  \n  <div class="bash--radio-options">\n  ${t
      .map(
        ({ value: t, label: s, checked: n = !1, disabled: a = !1 }) =>
          `\n      <label class="bash--radio-option" id="radio-label-${e}-${t}">\n        <input type="radio" \n          ${
            n ? "checked='checked'" : ''
          } \n          ${a ? "disabled='disabled'" : ''} \n          value="${
            t ?? ''
          }" \n          name="${e}" \n          id="radio-${e}-${t}"\n        />\n          <span class="radio-icon"></span> \n          ${
            s ? `<span class="radio-label">${s}</span>` : ''
          }\n      </label>\n    `
      )
      .join('')}\n   \n  </div>\n  `;
  const g = (e, t) =>
    JSON.stringify({ street: e.street, neighborhood: e.neighborhood, city: e.city, postalCode: e.postalCode }) ===
    JSON.stringify({ street: t.street, neighborhood: t.neighborhood, city: t.city, postalCode: t.postalCode });
  const b = (e) => {
    if (!e) return '';
    const { street: t, neighborhood: s, postalCode: n, city: a, receiverName: i, complement: o, addressName: r } = e;
    const d = [t, s ?? a, n].join(', ');
    const c = [i, G(Z(o))].join(' - ');
    const l = window?.vtexjs?.checkout?.orderForm?.shippingData?.address;
    return `\n<label id="address-${r}" class="bash--address-listing" data-address="${encodeURIComponent(
      JSON.stringify(e)
    )}">\n  <div class="address-radio">\n  ${v({
      name: 'selected-address',
      options: [{ checked: !!l ?? g(e, l), value: r }],
    })}\n  </div>\n  <div class="address-text">\n    <div>${d}</div>    \n    <div>${c}</div>  \n  </div>\n  <div class="address-edit">\n    <a href="#" data-view="address-edit" data-content="address-${r}">\n      Edit\n    </a>\n  </div>\n</label>\n`;
  };
  const y = (e) => {
    throw (console.error('ERROR', e), new Error(e));
  };
  const w = ({ cookie: e, cache: t, json: s }) => {
    const n = new Headers();
    return (
      e && n.append('Cookie', document?.cookie),
      t && n.append('Cache-Control', 'no-cache'),
      s && n.append('Content-type', 'application/json'),
      n
    );
  };
  const f = new (class {
    constructor() {
      (this.indexedDB =
        window.indexedDB ||
        window.webkitIndexedDB ||
        window.mozIndexedDB ||
        window.msIndexedDB ||
        window.shimIndexedDB),
        (this.checkoutDB = indexedDB.open('checkoutDB', 1.2)),
        (this.checkoutDB.onerror = (e) => {
          throw (console.error('CheckoutDB Error', { event: e }), new Error('Could not load checkoutDB'));
        }),
        (this.checkoutDB.onupgradeneeded = () => {
          const e = this.checkoutDB.result.createObjectStore('addresses', { keyPath: 'addressName' });
          e.createIndex('address_street', ['street'], { unique: !1 }),
            e.createIndex('address_addressName', ['addressName'], { unique: !0 }),
            e.createIndex('address_street_suburb_city_postal', ['street', 'neighborhood', 'city', 'postalCode'], {
              unique: !0,
            });
        }),
        (this.checkoutDB.onsuccess = () => {
          const e = this.checkoutDB.result.transaction('addresses', 'readwrite');
          (this.addresses = e.objectStore('addresses')), (e.oncomplete = () => {});
        });
    }

    store() {
      return this.checkoutDB.result.transaction('addresses', 'readwrite').objectStore('addresses');
    }

    loadAddresses(e) {
      const t = e.map((e) => this.addOrUpdateAddress(e));
      return Promise.all(t).then((e) => e);
    }

    addOrUpdateAddress(e) {
      const t = this;
      return new Promise((s, n) => {
        const a = t.store().put(e);
        (a.onsuccess = () => {
          s({ success: !0, addressId: a.result });
        }),
          (a.onerror = (e) => {
            n(new Error({ sucess: !1, error: e?.target?.error }));
          });
      });
    }

    getAddresses() {
      const e = this;
      return new Promise((t) => {
        const s = e.store().getAll();
        (s.onsuccess = () => t(s.result)),
          (s.onerror = () => {
            console.error('Something wrong with getAddresses ? ...'), t([]);
          });
      });
    }

    getAddress(e) {
      const t = this;
      return new Promise((s) => {
        const n = t.store().get(e);
        (n.onsuccess = () => s(n.result)),
          (n.onerror = () => {
            console.error('Something wrong with getAddress ? ...'), s([]);
          });
      });
    }

    deleteAddress(e) {
      const t = this.addresses.delete(e);
      t.onsuccess = () => t.result;
    }

    clearData() {
      const e = this;
      return new Promise((t) => {
        const s = e.store().clear();
        (s.onsuccess = () => t(s.result)),
          (s.onerror = () => {
            console.error('Something wrong with clearData ? ...'), t([]);
          });
      });
    }
  })();
  const k = (e) => {
    let t = $(`#address-${e.addressName}`);
    t.length ? (t.after(b(e)), t.remove(), (t = null)) : $('#bash-address-list').append(b(e)),
      $('input[type="radio"][name="selected-address"]:checked').attr('checked', !1),
      $(`input[type="radio"][name="selected-address"][value="${e.addressName}"]`).attr('checked', !0);
  };
  const x = async (e) => {
    if (!e.addressName) {
      const t = e.street
        .replace(/[^a-zA-Z0-9]/g, ' ')
        .trim()
        .replace(/\s/g, '-')
        .toLowerCase();
      e.addressName = `${Date.now()}-${t}`.substring(0, 50);
    }
    e.addressId || (e.addressId = e.addressName),
      f.addOrUpdateAddress(e).then(() => k(e)),
      (async (e) => {
        let t;
        const { email: s } = window.vtexjs.checkout.orderForm.clientProfileData;
        if (!e) return Promise.reject(new Error('No address provided.'));
        const n = e.addressName
          ? await (async (e, t) => {
              let s = {};
              const n = { headers: w({ cookie: !0, cache: !0, json: !1 }), credentials: 'include' };
              const a = await fetch(
                `${o}masterdata/addresses/?_fields=id&_where=addressName=${e}&timestamp=${Date.now()}`,
                n
              )
                .then((e) => e.json())
                .catch((e) => y(`GET_ADDRESS_ERROR: ${e?.message}`));
              return a && !a.error && a.data && a.data.length > 0 && ([s] = a.data), s;
            })(e.addressName)
          : {};
        (t = n?.id ? `${o}masterdata/address/${n.id}` : `${o}masterdata/addresses`),
          (e.complement = e.complement || d());
        const a = { userId: s, ...e };
        n.id || (a.addressName = e.addressId || `address-${Date.now()}`);
        const i = {
          method: 'PATCH',
          headers: w({ cookie: !0, cache: !0, json: !0 }),
          body: JSON.stringify(a),
          credentials: 'include',
        };
        await fetch(t, i)
          .then((e) => (e.status !== 204 ? e.json() : e))
          .then((e) => e)
          .catch((e) => y(`SAVE_ADDRESS_ERROR: ${e?.message}`));
      })(e);
  };
  const C = async (e) => f.getAddress(e);
  const F = async () => f.clearData();
  const A = async (e, t, s = !1) => {
    const { orderFormId: n } = window.vtexjs.checkout.orderForm;
    const a = `/api/checkout/pub/orderForm/${n}/customData/${e}`;
    const i = JSON.stringify({ ...t, ...(s && { sameAddress: new Boolean(t.sameAddress) }) });
    return fetch(a, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: i });
  };
  const D = (e) => {
    const { customData: t } = window.vtexjs.checkout.orderForm;
    let s = {};
    return (
      t &&
        t.customApps &&
        t.customApps.length > 0 &&
        t.customApps.forEach((t) => {
          t.id === e && (s = t.fields);
        }),
      s
    );
  };
  const I = ['receiverName', 'complement', 'street', 'neighborhood', 'state', 'city', 'country', 'postalCode'];
  const S = ['idOrPassport', 'sameAddress', 'fullName', 'streetAddress', 'suburb', 'city', 'postalCode', 'province'];
  const j = ['tvID'];
  const E = ['residential', 'inStore', 'commercial', 'giftRegistry', 'pickup', 'search'];
  const N = () => {
    document.querySelector('.bash--delivery-container').classList.add('shimmer');
  };
  const T = () => {
    document.querySelector('.delivery-group-content')?.classList?.add('shimmer'),
      document.querySelector('.vtex-omnishipping-1-x-ask')?.classList?.add('shimmer');
  };
  const B = (e) => {
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
  const _ = () => {
    const e = window?.vtexjs?.checkout?.orderForm?.shippingData?.address?.receiverName;
    const t = window?.vtexjs?.checkout?.orderForm?.clientProfileData?.firstName;
    const s = window?.vtexjs?.checkout?.orderForm?.clientProfileData?.lastName;
    const n = `${t ?? ''} ${s ?? ''}`.trim();
    return e || document.getElementById('client-first-name')?.value || n;
  };
  const R = (e) => {
    const {
      street: t,
      companyBuilding: s,
      neighborhood: n,
      postalCode: a,
      state: i,
      city: o,
      receiverName: r,
      complement: d,
      id: c,
      addressId: l,
      addressName: p,
    } = e;
    document.getElementById('bash--address-form').reset(),
      r && (document.getElementById('bash--input-receiverName').value = r ?? ''),
      d && (document.getElementById('bash--input-complement').value = d ?? ''),
      (c || l) && (document.getElementById('bash--input-addressId').value = c || l),
      p && (document.getElementById('bash--input-addressName').value = p),
      (document.getElementById('bash--input-number').value = ''),
      (document.getElementById('bash--input-companyBuilding').value = s ?? ''),
      (document.getElementById('bash--input-street').value = t ?? ''),
      (document.getElementById('bash--input-neighborhood').value = n ?? ''),
      (document.getElementById('bash--input-city').value = o ?? ''),
      (document.getElementById('bash--input-postalCode').value = a ?? ''),
      (document.getElementById('bash--input-state').value = B(i)),
      $(':invalid').trigger('change');
  };
  const P = (e, t, s = '', n = !1) => {
    if (e) {
      for (let a = 0; a < t.length; a++) {
        const i = `bash--input-${s}${t[a]}`;
        !document.getElementById(i) ||
          (!e[t[a]] && !n) ||
          (document.getElementById(i).value && !n) ||
          (document.getElementById(i).value = e[t[a]]);
      }
      $(':invalid').trigger('change');
    }
  };
  const q = () => {
    const { address: e } = window.vtexjs.checkout.orderForm.shippingData;
    if (document.getElementById('bash--input-rica_streetAddress')?.value || !e) return;
    (e.fullName = _()),
      (e.streetAddress = e.street),
      (e.suburb = e.neighborhood),
      (e.province = e.state),
      P(e, S, 'rica_');
    const t = D(a);
    t.streetAddress && P(t, S, 'rica_', !0);
  };
  const O = (e, t = !0) => {
    const { items: s } = window.vtexjs.checkout.orderForm;
    const { hasTVs: n, hasSimCards: a } = h(s);
    let i = [];
    const o = [];
    (i = [...I]), n && t && (i = [...i, ...j]), a && t && (i = [...i, ...S]);
    for (let t = 0; t < i.length; t++) e[i[t]] || o.push(i[t]);
    return { isValid: !o.length, invalidFields: o };
  };
  const V = () => {
    const { items: e } = window.vtexjs.checkout.orderForm;
    const { hasTVs: t, hasSimCards: s, hasFurnitureMixed: n } = h(e);
    const a = '#shipping-data';
    t ? $(`${a}:not(.has-tv)`).addClass('has-tv') : $(`${a}.has-tv`).removeClass('has-tv'),
      s ? $(`${a}:not(.has-rica)`).addClass('has-rica') : $(`${a}.has-rica`).removeClass('has-rica'),
      n
        ? $(`${a}:not(.has-furniture-mixed)`).addClass('has-furniture-mixed')
        : $(`${a}.has-furniture-mixed`).removeClass('has-furniture-mixed');
  };
  const M = (e = []) => {
    if ($('#bash-delivery-error-container').length < 1) return;
    const t =
      e.length > 0
        ? e.map((e) =>
            (({ text: e, fields: t }) => {
              if (!t.itemIndex) return '';
              const s = window.vtexjs.checkout?.orderForm.items?.[t.itemIndex];
              if (!s) return '';
              const n = s?.imageUrl;
              return ` \n<div id="bash-delivery-error" class="notification error" alt="${
                t?.skuName ?? ''
              }" >\n   \x3c!---<div class="icon"></div>---\x3e\n   ${
                n ? `<img src="${n}" style=" float: right; " />` : ''
              }\n   <div class="notification-content">\n      <h3>Address error ${
                t?.skuName ? `- ${t?.skuName}` : ''
              }</h3>\n      <p>${e}</p>\n      <p>Check the postal code of your address, or \n      <a href="#" \n        class="remove-cart-item"\n        style="color: white; text-decoration: underline"\n        data-index="${
                t.itemIndex
              }">remove this item from your cart</a>.\n      </p>\n   </div>  \n</div>  \n`;
            })(e)
          )
        : '';
    $('#bash-delivery-error-container').html(t),
      e.length > 0 && $('html, body').animate({ scrollTop: $('#bash-delivery-error-container').offset().top }, 400);
  };
  const L = (e, t = { validateExtraFields: !0 }) => {
    const { validateExtraFields: s } = t;
    const { items: n } = window.vtexjs.checkout.orderForm;
    const { hasTVs: a, hasSimCards: i } = h(n);
    a && P(e, j, 'tv_'), i && q();
    const { isValid: o, invalidFields: r } = O(e, s);
    if (!o)
      return (
        R(e),
        $('#bash--address-form').addClass('show-form-errors'),
        s && $('#bash--delivery-form')?.addClass('show-form-errors'),
        $(`#bash--input-${r[0]}`).focus(),
        I.includes(r[0]) && window.postMessage({ action: 'setDeliveryView', view: 'address-edit' }),
        { success: !1, error: 'Invalid address details.' }
      );
    e.addressType === 'business' && (e.addressType = 'commercial'),
      E.includes(e.addressType) || (e.addressType = 'residential');
    const { shippingData: d } = window?.vtexjs?.checkout?.orderForm;
    return (
      (d.address = e),
      (d.address.number = d.address.number ?? ' '),
      (d.selectedAddresses = [e]),
      N(),
      window.vtexjs.checkout
        .sendAttachment('shippingData', d)
        .then((t) => {
          const { messages: s } = t;
          const n = s.filter((e) => e.status === 'error');
          return n.length > 0
            ? (M(n),
              window.postMessage({ action: 'setDeliveryView', view: 'address-form' }),
              { success: !1, errors: n })
            : (e.addressName && k(d.address), { success: !0 });
        })
        .done(() => m())
    );
  };
  const U = async (e) => {
    e.preventDefault(), $('select').change();
    const t = document.forms['bash--address-form'];
    const s = $('#bash--input-addressName').val();
    const n = [
      'addressId',
      'addressName',
      'addressType',
      'receiverName',
      'postalCode',
      'city',
      'state',
      'country',
      'street',
      'neighborhood',
      'complement',
      'companyBuilding',
    ];
    const a = { isDisposable: !1, reference: null, geoCoordinates: [], number: '', country: 'ZAF', ...(await C(s)) };
    for (let e = 0; e < n.length; e++) a[n[e]] = t[n[e]]?.value || null;
    (a.addressName = a.addressName || a.addressId), (a.addressId = a.addressId || a.addressName);
    const { isValid: i, invalidFields: o } = O(a, !1);
    if (!i)
      return (
        console.error({ invalidFields: o }),
        $('#bash--address-form').addClass('show-form-errors'),
        $(`#bash--input-${o[0]}`).focus(),
        void (I.includes(o[0]) && window.postMessage({ action: 'setDeliveryView', view: 'address-form' }))
      );
    const r = await L(a, { validateExtraFields: !1 });
    const { success: d } = r;
    d
      ? (await x(a),
        window.postMessage({ action: 'setDeliveryView', view: 'select-address' }),
        (() => {
          $('.alert-container').addClass('show'), $('.alert-container').slideDown();
          const e = $('[data-view="address-form"]').length > 0 ? 'Address added' : 'Address updated';
          $('#bash-alert-container').html(
            (({ text: e }) => `<div class='alert-container'>\n      <p>${e}</p>\n    </div>\n  `)({ text: e })
          ),
            setTimeout(() => {
              $('.alert-container').slideUp();
            }, 5e3);
        })())
      : console.error('Set address error', { setAddressResponse: r });
  };
  const W = async (e) => {
    e.preventDefault();
    const { items: t } = window.vtexjs.checkout.orderForm;
    const { address: s } = window.vtexjs.checkout.orderForm.shippingData;
    const { hasTVs: o, hasSimCards: r } = h(t);
    $('select').change();
    let d = {};
    const c = "[name='selected-address']:checked";
    if ($(c).length < 1)
      return void $('html, body').animate({ scrollTop: $('#bash--delivery-form').offset().top }, 400);
    N();
    const l = await C($(c).val());
    d = { ...s, ...l };
    const { success: p } = await L(d, { validateExtraFields: !1 });
    if (!p) return console.error('Delivery Form - Address Validation error'), void m();
    const u = {};
    const v = {};
    if (r) {
      const e = S;
      for (let t = 0; t < e.length; t++) {
        if (e[t] === 'sameAddress') {
          const s = $(`#bash--input-${e[t]}`).is(':checked');
          u[e[t]] = s;
        }
        u[e[t]] = $(`#bash--input-rica_${e[t]}`).val() || '';
      }
      const t = await A(a, u, !0);
      console.info({ ricaDataSent: t });
    }
    if (o) {
      const e = j;
      for (let t = 0; t < e.length; t++)
        s[e[t]] || (d[e[t]] = $(`#bash--input-tv_${e[t]}`).val()), (v[e[t]] = $(`#bash--input-tv_${e[t]}`).val() || '');
      const t = await A(i, v);
      console.info({ tvDataSent: t });
    }
    await x(d), $('.bash--delivery-container').css('display', 'none'), (window.location.hash = n), m();
  };
  const Z = (e) => {
    let t = e.replace(/\s/g, '');
    return t.length === 9 && t[0] !== '0' && (t = `0${t}`), t;
  };
  const G = (e) => [e.slice(0, 3), e.slice(3, 6), e.slice(6)].join(' ');
  const J = (e, t) => {
    if ((e = e.replace(/[^0-9+*#]+/g, '').trim())[0] === '0') {
      if (e.length >= 6) {
        const s = [e.slice(0, 3), e.slice(3, 6), e.slice(6)].join(' ');
        return t ? s.trim() : s;
      }
      if (e.length >= 3) {
        const s = [e.slice(0, 3), e.slice(3)].join(' ');
        return t ? s.trim() : s;
      }
    } else {
      if (e.length >= 5) {
        const s = [e.slice(0, 2), e.slice(2, 5), e.slice(5)].join(' ');
        return t ? s.trim() : s;
      }
      if (e.length >= 2) {
        const s = [e.slice(0, 2), e.slice(2)].join(' ');
        return t ? s.trim() : s;
      }
    }
    return t ? e.trim() : e;
  };
  const H = (e) => {
    const t = document.querySelector(e);
    t &&
      (t.setAttribute('maxlength', 12),
      (t.value = J(t.value)),
      $(document).off('keyup', e),
      $(document).on('keyup', e, function (e) {
        const t = $(this);
        const s = t.val().replace(/[^0-9+*#]+/g, '');
        const n = e.keyCode === 8;
        const a = J(s, n);
        t.parent('.text').removeClass('error'), t.parent('.text').find('span.error').hide(), t.val(a);
      }));
  };
  const K = (() => {
    const e = { inCollect: !1, pickupSelected: !1, validForm: !1, runningObserver: !1, collectReset: !1 };
    const a = () => {
      if (
        ($('span.help.error').remove(),
        (e.validForm = !0),
        ['pickup-receiver', 'custom-pickup-complement'].forEach((t) => {
          let s;
          let n = !0;
          switch (t) {
            case 'pickup-receiver':
              (n = !($(`#${t}`).length > 0 && !$(`#${t}`).attr('disabled') && !$(`#${t}`).val())),
                (s = '.shp-pickup-receiver');
              break;
            case 'custom-pickup-complement':
              (n = u($(`#${t}`).val())), (s = '#box-pickup-complement');
          }
          n
            ? $(s).removeClass('error')
            : ($(s).addClass('error'),
              $(s).append('<span class="help error">This field is required.</span>'),
              $(`${s} span.error`).show(),
              (e.validForm = !1));
        }),
        e.validForm)
      ) {
        let e = $('#custom-pickup-complement').val().replace(/\s/g, '');
        e.length === 9 && e[0] !== '0' && (e = `0${e}`),
          localStorage.setItem('saving-shipping-collect', !0),
          $('#btn-go-to-payment').trigger('click'),
          window.vtexjs.checkout
            .getOrderForm()
            .then((t) => {
              const { address: s } = t.shippingData;
              return (
                A('pickup', { phone: e }).then(() => {
                  let t;
                  let n;
                  (t = s.receiverName),
                    (n = e),
                    t &&
                      n &&
                      ($('.vtex-omnishipping-1-x-SummaryItemAddress .collect-receiver').length
                        ? $('.collect-receiver').html(`${t} - ${n} `)
                        : $('.vtex-omnishipping-1-x-SummaryItemAddress').append(
                            `<p class="collect-receiver">\n      ${t} - ${n}\n      </p>`
                          ));
                }),
                window.vtexjs.checkout.calculateShipping(s)
              );
            })
            .done(() => {
              localStorage.removeItem('saving-shipping-collect');
            });
      }
    };
    const i = () => {
      const i = $('div#postalCode-finished-loading').length > 0;
      $('#shipping-option-pickup-in-point').one('click', () => {
        e.collectReset = !0;
      }),
        window.location.hash === s && i
          ? ((e.inCollect = $('#shipping-option-pickup-in-point').hasClass('shp-method-option-active')),
            (e.pickupSelected = $('div.ask-for-geolocation').length === 0),
            e.inCollect &&
              (m(),
              (() => {
                $('.pickup-marker-blue').remove(),
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
                      '<div class="pickup-map-container">\n          <div class="pickup-map-icon">\n            <svg class="icon-map" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">\n              <rect width="48" height="48" rx="24" fill="#2424E4"/>\n              <path d="M24.2147 11C21.5065 11.0031 18.9102 12.0802 16.9952 13.9952C15.0802 15.9102 14.0031 18.5065 14 21.2147C14 29.9552 23.2861 36.5599 23.6807 36.8385C23.8389 36.9438 24.0247 37 24.2147 37C24.4047 37 24.5905 36.9438 24.7486 36.8385C25.1433 36.5599 34.4294 29.9552 34.4294 21.2147C34.4263 18.5065 33.3491 15.9102 31.4342 13.9952C29.5192 12.0802 26.9228 11.0031 24.2147 11ZM24.2147 17.5003C24.9493 17.5003 25.6675 17.7181 26.2783 18.1262C26.8891 18.5344 27.3652 19.1145 27.6464 19.7932C27.9275 20.472 28.0011 21.2188 27.8577 21.9393C27.7144 22.6599 27.3607 23.3217 26.8412 23.8412C26.3217 24.3607 25.6599 24.7144 24.9393 24.8577C24.2188 25.0011 23.472 24.9275 22.7932 24.6464C22.1145 24.3652 21.5344 23.8891 21.1262 23.2783C20.7181 22.6675 20.5003 21.9493 20.5003 21.2147C20.5003 20.2296 20.8916 19.2848 21.5882 18.5882C22.2848 17.8916 23.2296 17.5003 24.2147 17.5003Z" fill="#FCFCFC"/>\n            </svg>\n            Find nearby collect points\n            <div class="pickup-map-text">\n              Search for addresses that you frequently use and we’ll locate stores nearby.\n            </div>\n          </div>\n          <button class="pickup-map-geolocation" id="find-pickups-button-new" type="button">\n            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">\n              <path d="M1.12954 2.34666L5.24985 14.2506C5.42563 14.7639 6.15688 14.7498 6.3186 14.2295L7.97798 8.84354C8.00302 8.75549 8.05054 8.67548 8.11588 8.61138C8.18122 8.54727 8.26213 8.50127 8.35063 8.47791L13.7295 6.81854C14.2499 6.65682 14.2639 5.92557 13.7506 5.74979L1.84672 1.62948C1.74671 1.59433 1.6388 1.58815 1.53542 1.61167C1.43205 1.63519 1.33743 1.68745 1.26247 1.76241C1.18751 1.83737 1.13525 1.93199 1.11173 2.03536C1.08822 2.13873 1.09439 2.24665 1.12954 2.34666V2.34666Z" stroke="#2424E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n            Use my current location\n          </button>\n          <button class="pickup-map-manual" id="find-pickups-manually-search">\n            Manually search for an address\n          </button>\n        </div>'
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
                        sendAttachment: (e) => {
                          T(),
                            window.vtexjs.checkout.sendAttachment('shippingData', e),
                            $('#tfg-pickup-map').remove(),
                            $('body').css('overflow', 'auto'),
                            $('body').css('width', 'auto'),
                            $('body').css('position', 'relative');
                        },
                        getCheckoutJS: () => window.vtexjs.checkout.orderForm,
                        getSpecialFields: () => h(window.vtexjs.checkout.orderForm.items),
                        remove: () => {
                          $('#tfg-pickup-map').remove(),
                            $('body').css('overflow', 'auto'),
                            $('body').css('width', 'auto'),
                            $('body').css('position', 'relative');
                        },
                        getState: () => e,
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
                    .click(() => e('pickup')),
                  $('#find-pickups-button-new')
                    .unbind()
                    .click(() => e('geolocate')),
                  $('#find-pickups-manually-search')
                    .unbind()
                    .click(() => e('manual'));
              })(),
              e.pickupSelected && !e.collectReset
                ? ($('button.shp-pickup-receiver__btn').trigger('click'),
                  $('div.shp-pickup-receiver').addClass('show'),
                  $('p#box-pickup-complement').addClass('show'),
                  (() => {
                    const e =
                      window.vtexjs.checkout.orderForm?.clientProfileData?.phone ?? $('#client-phone').val() ?? '';
                    $('input#custom-pickup-complement').length === 0
                      ? ($('.btn-go-to-payment-wrapper').before(t),
                        (() => {
                          const e = document.querySelector('input#custom-pickup-complement');
                          e && e.setAttribute('placeholder', '');
                        })(),
                        e && $('input#custom-pickup-complement').val(e))
                      : $('input#custom-pickup-complement').val() === '' &&
                        ($('input#custom-pickup-complement').val(e),
                        window.vtexjs.checkout.getOrderForm().then((t) => {
                          const { shippingData: s } = t;
                          return (s.address.complement = e), window.vtexjs.checkout.sendAttachment('shippingData', s);
                        })),
                      (() => {
                        const { firstName: e, lastName: t } = window.vtexjs.checkout.orderForm?.clientProfileData;
                        const s = $('#client-first-name').val();
                        const n = $('#client-last-name').val();
                        const a = e ? [e, t].join(' ') : [s, n].join(' ');
                        $('input#pickup-receiver').val() === '' &&
                          ($('input#pickup-receiver').val(a.trim()),
                          window.vtexjs.checkout.getOrderForm().then((e) => {
                            const { shippingData: t } = e;
                            return (
                              (t.address.receiverName = a.trim()),
                              window.vtexjs.checkout.sendAttachment('shippingData', t)
                            );
                          }));
                      })();
                  })(),
                  (() => {
                    if ($('#custom-go-to-payment').length <= 0) {
                      const e = $('#btn-go-to-payment');
                      const t = e.clone(!1);
                      $(e).hide(),
                        $(t).data('bind', ''),
                        $(t).removeAttr('id').attr('id', 'custom-go-to-payment'),
                        $(t).removeAttr('data-bind'),
                        $(t).css('display', 'block'),
                        $('p.btn-go-to-payment-wrapper').append(t),
                        $(t).on('click', a);
                    }
                  })())
                : ($('div.shp-pickup-receiver').removeClass('show'), $('p#box-pickup-complement').removeClass('show')),
              e.collectReset &&
                ((() => {
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
                  const { orderForm: e } = window.vtexjs.checkout;
                  const { shippingData: t } = e;
                  const s = {
                    ...t,
                    address: null,
                    availableAddresses: t.availableAddresses,
                    selectedAddresses: t.selectedAddresses.filter((e) => e.addressType !== 'search'),
                    logisticsInfo: t.logisticsInfo,
                  };
                  window.vtexjs.checkout.sendAttachment('shippingData', s), T();
                })(),
                (e.collectReset = !1)),
              $('p.vtex-omnishipping-1-x-shippingSectionTitle').text('Collect options'),
              $('#change-pickup-button').text('Available pickup points'),
              $('h2.vtex-omnishipping-1-x-geolocationTitle.ask-for-geolocation-title').text(
                'Find nearby Click & Collect points'
              ),
              $('h3.vtex-omnishipping-1-x-subtitle.ask-for-geolocation-subtitle').text(
                "Search for addresses that you frequently use and we'll locate stores nearby."
              ),
              e.pickupSelected && $('label.shp-pickup-receiver__label').text("Recipient's name")),
            localStorage.getItem('shipping-incomplete-values') &&
              ($('#custom-go-to-payment').trigger('click'), localStorage.removeItem('shipping-incomplete-values')))
          : ($('#box-pickup-complement').remove(),
            window.location.hash === n &&
              setTimeout(() => {
                const e = window.vtexjs.checkout.orderForm?.shippingData?.address;
                localStorage.getItem('saving-shipping-collect') ||
                  !e ||
                  e.addressType !== 'search' ||
                  (e.receiverName && e.complement) ||
                  ((window.location.hash = s), localStorage.setItem('shipping-incomplete-values', !0));
              }, 1e3)),
        o();
    };
    const o = () => {
      if (e.runningObserver) return;
      const t = document.querySelector('.shipping-container .box-step');
      const s = new MutationObserver(() => {
        (e.runningObserver = !0), i();
      });
      t && s.observe(t, { attributes: !1, childList: !0, characterData: !1 });
    };
    return (
      $(document).ready(() => {
        i();
      }),
      $(window).on('hashchange orderFormUpdated.vtex', () => {
        i();
      }),
      { state: e, init: () => {} }
    );
  })();
  const z = ({
    label: e,
    name: t,
    value: s = '',
    required: n = !0,
    type: a = 'text',
    placeholder: i,
    autoComplete: o = 'on',
    maxLength: r,
    minlength: d,
    disabled: c = !1,
    options: l,
    checked: p,
    error: u = 'This field is required.',
  }) => {
    const h = t.replace(/\s/g, '-');
    const m = `<label id="bash--label-${h}" for="bash--input-${h}">${e}</label>`;
    return `\n<p class="input bash--${a}field-${t.replace(/\s/g, '-')} bash--${a} ${n ? 'required' : 'optional'}">\n  ${
      e && a !== 'checkbox' ? m : ''
    }\n  ${(() => {
      switch (a) {
        case 'radio':
          return v({ name: t, options: l });
        case 'dropdown':
          return (({ name: e, disabled: t = !1, options: s, required: n }) => {
            const a = s.find((e) => !0 === e.selected);
            return `\n  <select \n    name="${e}" \n    ${n ? ' required ' : ''} \n    ${
              t ? ' disabled ' : ''
            } \n    id="bash--input-${e}" \n    class="input-large" \n  >\n  ${s
              .map(
                ({ value: e, label: t, selected: s }, n) =>
                  `\n    <option \n    ${n === 0 ? ' disabled ' : ''}\n    ${n !== 0 || a ? '' : ' selected '}\n    ${
                    s ? ' selected ' : ''
                  }\n      value="${e}" \n    >${t}</option>\n    `
              )
              .join('')}\n  </select>\n  `;
          })({ name: t, disabled: c, options: l, required: n });
        case 'note':
          return (({ value: e, name: t }) => `\n  <div class="bash--note-field ${t}">\n  ${e}\n  </div>\n  `)({
            name: t,
            value: s,
          });
        case 'checkbox':
          return (({ name: e, label: t, checked: s, value: n }) =>
            `\n    <label class="tfg-checkbox-label">\n       <input \n        type='checkbox' \n        name="${e}" \n        id="bash--input-${e}"\n        ${
              s ? "checked='checked'" : ''
            }\n        value=${n ?? ''}\n      />\n      <span>${t}</span>\n    </label>\n  `)({
            name: t,
            label: e,
            checked: p,
          });
        default:
          return (({
            name: e,
            value: t = '',
            required: s = !0,
            type: n = 'text',
            placeholder: a,
            autoComplete: i = 'on',
            minLength: o = 0,
            maxLength: r = 0,
          }) =>
            `\n  <input \n    ${s ? ' required ' : ''}\n    autocomplete="${i}" \n    id="bash--input-${e.replace(
              /\s/g,
              '-'
            )}" \n    type="${n}" \n    name="${e}" \n    ${o > 0 ? `minlength="${o}"` : ''}\n    ${
              r > 0 ? `maxlength="${r}"` : ''
            }\n    placeholder="${a ?? ''}" \n    class="input-xlarge" \n    value="${t}" \n  />\n`)({
            name: t,
            value: s,
            required: n,
            type: a,
            placeholder: i,
            autoComplete: o,
            maxLength: r,
            minlength: d,
          });
      }
    })()}\n  <span class="bash--field-error">${u}</span>\n</p>  \n`;
  };
  const Q = () => (
    setTimeout(() => {
      (() => {
        if (!window.google) return;
        const e = document.getElementById('bash--input-address-search');
        const t = new window.google.maps.places.Autocomplete(e, { componentRestrictions: { country: 'ZA' } });
        window.google.maps.event.addListener(t, 'place_changed', () => {
          const s = t.getPlace();
          const { address_components: n, geometry: a } = s;
          ((e) => {
            const { street: t, neighborhood: s, postalCode: n, state: a, city: i } = e;
            document.getElementById('bash--address-form').reset(),
              (document.getElementById('bash--input-addressId').value = ''),
              (document.getElementById('bash--input-addressName').value = ''),
              (document.getElementById('bash--input-number').value = '  '),
              (document.getElementById('bash--input-street').value = t ?? ''),
              (document.getElementById('bash--input-neighborhood').value = s ?? ''),
              (document.getElementById('bash--input-city').value = i ?? ''),
              (document.getElementById('bash--input-postalCode').value = n ?? ''),
              (document.getElementById('bash--input-state').value = B(a));
          })(
            ((e, t) => {
              const s = e.find((e) => e.types.includes('street_number'))?.long_name;
              const n = e.find((e) => e.types.includes('route'))?.long_name;
              const a = e.find((e) => e.types.includes('sublocality'))?.long_name;
              const i = e.find((e) => e.types.includes('locality'))?.long_name;
              const o = e.find((e) => e.types.includes('postal_code'))?.long_name;
              const r = e.find((e) => e.types.includes('administrative_area_level_1'))?.long_name;
              const d = { lat: '', lng: '' };
              return (
                t && ((d.lat = t.location.lat()), (d.lng = t.location.lng())),
                { street: `${s ?? ''} ${n ?? ''}`.trim(), neighborhood: a, city: i, postalCode: o, state: r, ...d }
              );
            })(n, a)
          ),
            window.postMessage({ action: 'setDeliveryView', view: 'address-form' }),
            (e.value = '');
        });
      })();
    }, 500),
    z({ name: 'address-search', placeholder: 'Start typing an address...', autoComplete: 'off' })
  );
  const Y = () => (
    (async () => {
      const e = await f.getAddresses();
      return e.length > 0
        ? { data: e }
        : window.vtexjs.checkout.getOrderForm().then((e) => {
            const { email: t } = e?.clientProfileData;
            const s = [
              'id',
              'addressType',
              'addressQuery',
              'addressName',
              'reference',
              'number',
              'geolocation',
              'receiverName',
              'complement',
              'companyBuilding',
              'street',
              'neighborhood',
              'city',
              'postalCode',
              'state',
              'country',
              'tvID',
            ].join(',');
            const n = { headers: w({ cookie: !0, cache: !0, json: !1 }), credentials: 'include' };
            const a = Date.now();
            return fetch(
              `${o}masterdata/addresses?t=${a}&_fields=${s}&_where=${encodeURIComponent(`userIdQuery=${t}`)}`,
              n
            )
              .then((e) => e.json())
              .then(async (e) => (e.data && f.loadAddresses(e.data), e))
              .catch((e) => y(`GET_ADDRESSES_ERROR: ${e?.message}`));
          });
    })()
      .then(({ data: e }) => {
        const t = e.map((e) => b(e));
        document.getElementById('bash-address-list') &&
          (document.getElementById('bash-address-list').innerHTML = t.join('')),
          $('#back-button-select-address').hasClass('inactive') && $('#back-button-select-address').show(),
          m(),
          e.length < 1 &&
            (window.postMessage({ action: 'setDeliveryView', view: 'address-search' }),
            $('#bash--input-address-search').focus(),
            $('#back-button-select-address').hide(),
            $('#back-button-select-address').addClass('inactive'));
      })
      .catch((e) => {
        throw (console.error('ERROR getAddresses', e), new Error('Error getAddresses', e.message));
      }),
    '\n <div class="bash--addresses shimmer" id="bash-address-list">\n    Loading addresses...\n  </div>\n  '
  );
  const X = ({ hasFurn: e }) =>
    `\n  <div class="bash--delivery-container" id="bash--delivery-container" data-view="select-address">\n    <div id="bash--shipping-messages">\n      <div id="bash-alert-container"></div>\n      \n  <div id="tfg-custom-tvrica-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      You can't collect this order in store because your cart contains items \n      which require either RICA or TV License validation.\n    </p>\n  </div>\n\n      \n  <div id="tfg-custom-mixed-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      We'll ship your furniture and other items in your cart to the selected address. \n      Only the furniture delivery fee will apply.\n      </p>\n  </div>\n\n       \n \n<div id="bash-delivery-error-container"   >\n</div>\n    </div>\n   <form id="bash--delivery-form" name="bash--delivery-form" method="post">\n\n    <section class="bash--delivery-view" data-section="select-address">\n    <div class="bash--heading">\n        <h2>Delivery address</h2>\n        <a href="#" data-view="address-search">Add address</a>\n      </div>\n      ${Y()}\n    </section>\n\n    <section id="bash-delivery-options" class="shipping-method bash--delivery-view" data-section="select-address">\n      <hr>\n      <div class="bash--heading sub-heading">\n        <h3>Delivery options</h3>\n        ${
      e
        ? '\n<a \n  href="http://image.tfgmedia.co.za/image/1/process/500x790?source=http://cdn.tfgmedia.co.za/15/Marketing/HTMLPages/Furniture_Delivery_Fees_tab_image.jpg"\n  class="furniture-fees-link" \n  target="_blank"\n>\n  Furniture delivery costs\n</a>\n'
        : ''
    }\n      </div>\n      \n  <label class="bash--delivery-option-display" >\n  ${v({
      name: 'delivery-option',
      options: [{ checked: !0, value: !0 }],
    })}\n   \n   <div id="bash--delivery-option-text" class="bash--delivery-option-text">\n      <span class="normal-delivery">Deliver within 3 - 5 days</span>\n   </div>\n\n  <div id="bash--delivery-fee" class="bash--delivery-fee">\n    R50\n  </div>\n</label>\n  \n      <button \n        class="submit btn-go-to-payment btn btn-large btn-success"\n        id="btn-save-delivery" \n        type="submit">\n          Go to payment\n      </button>\n    </section>\n   </form>\n\n    <section class="bash--delivery-view" data-section="address-search">\n      <div class="bash--heading">\n        <h3>Add a new delivery address</h3>\n        <a href='#' data-view='select-address' id='back-button-select-address'>&lt; Back</a>\n      </div>\n      ${Q()} \n    </section>\n    \n    <section class="bash--delivery-view" data-section="address-form">\n       <div class="bash--heading">\n        <h3>Delivery address</h3>\n        <a href="#" class="back-button--search" data-view="address-search">&lt; Back</a>\n        <a href="#" class="back-button--select" data-view="select-address">&lt; Back</a>\n      </div>\n      \n  <form id="bash--address-form" method="post">\n    ${[
      { name: 'addressId', type: 'hidden', value: '', required: !1 },
      { name: 'addressName', type: 'hidden', value: '', required: !1, maxLength: 50 },
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
      { name: 'number', required: !1, value: '  ', type: 'hidden' },
      { name: 'companyBuilding', label: 'Building/Complex and number', required: !1, value: '', maxLength: 100 },
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
      { name: 'receiverName', label: 'Recipient’s name', required: !0, value: _() },
      {
        name: 'complement',
        label: 'Recipient’s mobile number',
        required: !0,
        value: d(),
        type: 'tel',
        helperText: 'We send shipping updates to this number.',
      },
    ]
      .map((e) => z(e))
      .join(
        ''
      )}\n\n    <button \n      class="submit btn-go-to-payment btn btn-large btn-success"\n      id="btn-save-address" \n      type="submit"\n    >\n      Save address\n    </button>\n  </form>\n  \n  \n    </section>\n    \n  </div>`;
  const ee = ({ hasFurn: e, hasTV: t, hasSim: s }) => {
    const n = `\n    <div id="tv-license-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>TV license information needed</h3>\n        <p class="tfg-custom-subtitle">Please provide your ID number to validate your TV Licence.</p>\n      </div>\n      \n    ${z(
      { name: 'tv_tvID', label: 'SA ID number', required: !0, value: '' }
    )}\n  \n    </div>\n  `;
    const a = `\n    <div id="rica-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>Rica information required</h3>\n        <p class="tfg-custom-subtitle">\n          To RICA your SIM card, provide your SA ID (or foreign passport) number and your address as\n          it appears on a valid proof of residence.\n        </p> \n      </div>\n        ${(() => {
      const {
        shippingData: { selectedAddress: e },
      } = window.vtexjs.checkout.orderForm;
      const t = [
        { name: 'rica_fullName', label: 'Full name and surname', required: !0, value: _() || '' },
        { name: 'rica_streetAddress', label: 'Street address', required: !0, value: e?.street || '' },
        { name: 'rica_suburb', label: 'Suburb', value: e?.neighborhood || '' },
        { name: 'rica_city', label: 'City', required: !0, value: e?.city || '' },
        {
          name: 'rica_postalCode',
          label: 'Postal code',
          value: e?.postalCode || '',
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
      ];
      return `\n    ${[
        { name: 'rica_idOrPassport', label: 'ID or Passport number', required: !0, value: '' },
        {
          name: 'rica_sameAddress',
          label: 'Residential address the same as delivery address',
          type: 'checkbox',
          checked: !0,
          required: !1,
        },
      ]
        .map((e) => z(e))
        .join('')}\n    <div class="rica-conditional-fields hide">\n    ${t.map((e) => z(e)).join('')}\n    </div>\n  `;
    })()}\n    </div>\n    `;
    return `\n  <section class="bash--extra-fields bash--delivery-view" data-section="select-address">\n    ${
      e
        ? '\n    <div id="furniture-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>Furniture delivery</h3>\n          Please ensure that there is sufficient space to receive your goods and keep in mind \n          that our couriers aren\'t able to hoist goods onto balconies.\n      </div>\n    </div>\n  '
        : ''
    }\n    ${t ? n : ''}\n    ${s ? a : ''}\n  </section>`;
  };
  const te = (() => {
    const e = { view: 'list', hasFurn: !1, hasTVs: !1, hasSim: !1 };
    const t = () => {
      if (!$('#bash--delivery-container').length) {
        if (window.vtexjs.checkout.orderForm) {
          const t = window.vtexjs.checkout.orderForm?.items;
          const { hasFurniture: s, hasTVs: n, hasSimCards: a } = h(t);
          (e.hasFurn = s), (e.hasTVs = n), (e.hasSim = a);
        }
        $('.shipping-data .box-step').append(X({ hasFurn: e.hasFurn })),
          (e.hasFurn || e.hasSim || e.hasTVs) &&
            ($('#bash-delivery-options').before(ee({ hasFurn: e.hasFurn, hasSim: e.hasSim, hasTV: e.hasTVs })),
            e.hasSim && q(),
            e.hasTVs &&
              (async () => {
                const e = D(i);
                P(e, j, 'tv');
              })()),
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
        F();
      }),
      $(document).ready(() => {
        window.vtexjs.checkout.getOrderForm().then(() => {
          F(),
            window.location.hash === s
              ? (t(),
                $('.bash--delivery-container.hide').removeClass('hide'),
                $('.bash--delivery-container').css('display', 'flex'))
              : $('.bash--delivery-container:not(.hide)').length &&
                ($('.bash--delivery-container:not(.hide)').addClass('hide'),
                $('.bash--delivery-container').css('display', 'none'));
        });
      }),
      $(window).on('hashchange', () => {
        window.location.hash === s
          ? (t(),
            V(),
            $('.bash--delivery-container').css('display', 'flex'),
            $('.bash--delivery-container.hide').removeClass('hide'))
          : $('.bash--delivery-container:not(.hide)').length &&
            ($('.bash--delivery-container:not(.hide)').addClass('hide'),
            $('.bash--delivery-container').css('display', 'none'));
      }),
      $(window).on('orderFormUpdated.vtex', () => {
        const e = window.vtexjs.checkout.orderForm?.items;
        const o = window.vtexjs.checkout.orderForm.shippingData?.address?.addressType;
        const { hasTVs: r, hasSimCards: d } = h(e);
        const { messages: c } = window.vtexjs.checkout.orderForm;
        if (window.location.hash === s) {
          const e = c.filter((e) => e.status === 'error');
          e && M(e);
        }
        if (o === 'search') {
          if (r || d)
            return (
              window.location.hash !== s && (window.location.hash = s),
              void setTimeout(() => document.getElementById('shipping-option-delivery')?.click(), 2e3)
            );
          $('#shipping-data:not(collection-active)').addClass('collection-active'),
            $('.delivery-active').removeClass('delivery-active');
        } else
          t(),
            $('#shipping-data:not(delivery-active)').addClass('delivery-active'),
            $('.collection-active').removeClass('collection-active');
        V(),
          (() => {
            if (!window.vtexjs.checkout.orderForm.totalizers) return;
            const { value: e } = window.vtexjs.checkout.orderForm.totalizers.find((e) => e.id === 'Shipping') || {
              value: 5e3,
            };
            let t = 'Free';
            e > 0 && (t = `R${(e / 100).toFixed(2).replace('.00', '')}`),
              $('#bash--delivery-fee').length > 0 && (document.getElementById('bash--delivery-fee').innerHTML = t);
          })(),
          window.location.hash !== n ||
            (() => {
              const e = window.vtexjs.checkout.orderForm?.items;
              const { hasTVs: t, hasSimCards: s } = h(e);
              let n = !0;
              if ((t && (D(i).tvID || (n = !1)), s)) {
                const e = D(a);
                (e.idOrPassport && e.streetAddress && e.postalCode) || (n = !1);
              }
              return n;
            })() ||
            (window.location.hash = s);
      }),
      $(document).on('click', 'a[data-view]', function (e) {
        e.preventDefault();
        const t = $(this).data('view');
        const s = decodeURIComponent($(this).data('content'));
        window.postMessage({ action: 'setDeliveryView', view: t, content: s });
      }),
      $(document).on('change', 'input[type="radio"][name="selected-address"]', function () {
        const e = ((t = $(this).parents('.bash--address-listing').data('address')), JSON.parse(decodeURIComponent(t)));
        let t;
        document.forms['bash--delivery-form'] &&
          (document.forms['bash--delivery-form'].reset(),
          document.forms['bash--delivery-form'].classList.remove('show-form-errors')),
          C(e.addressName).then((t) => {
            L(t || e, { validateExtraFields: !1 }),
              $('input[type="radio"][name="selected-address"]:checked').attr('checked', !1),
              $(this).attr('checked', !0);
          });
      }),
      $(document).on('change', '#bash--input-rica_sameAddress', function () {
        this.checked
          ? $('.rica-conditional-fields').slideUp(() => q())
          : ((() => {
              const e = $('#bash--input-rica_idOrPassport').val();
              P(
                {
                  idOrPassport: e ?? '',
                  fullName: '',
                  streetAddress: '',
                  suburb: '',
                  city: '',
                  postalCode: '',
                  province: '',
                },
                S,
                'rica_',
                !0
              );
            })(),
            $('.rica-conditional-fields').slideDown(() => $('#bash--input-rica_fullName').focus()));
      }),
      $(document).on('change', 'input[name="addressType"]', function () {
        $(this).is(':checked') &&
          ($(this).val() === 'business'
            ? $('#bash--label-companyBuilding').text('Business name')
            : $('#bash--label-companyBuilding').text('Building/Complex and number'));
      }),
      $(document).on('click', '#shipping-option-pickup-in-point, #shipping-option-delivery', function () {
        $(this).attr('id') === 'shipping-option-pickup-in-point'
          ? $('#bash--delivery-container').hide()
          : $('#bash--delivery-container').show();
      }),
      $(document).on('submit', '#bash--address-form', U),
      $(document).on('submit', '#bash--delivery-form', W),
      $(document).on('click', '.remove-cart-item', function (e) {
        let t;
        e.preventDefault(),
          (t = $(this).data('index')),
          window.vtexjs.checkout
            .updateItems([{ index: `${t}`, quantity: 0 }])
            .then((e) => {
              console.info('ITEM REMOVED', { orderForm: e });
            })
            .done(() => {
              m();
            });
      }),
      window.addEventListener('message', (e) => {
        const { data: t } = e;
        if (t && t.action)
          if (t.action === 'setDeliveryView') {
            if (
              (document.querySelector('.bash--delivery-container').setAttribute('data-view', t.view),
              (t.view === 'address-form' || t.view === 'address-edit') && (H('#bash--input-complement'), t.content))
            ) {
              const e = JSON.parse(decodeURIComponent($(`#${t.content}`).data('address')));
              R(e);
            }
          } else console.error('Unknown action', t.action);
      }),
      { state: e, init: () => {} }
    );
  })();
  const se = (() => {
    const e = {
      showFurnitureForm: !1,
      showTVIDForm: !1,
      showRICAForm: !1,
      showTVorRICAMsg: !1,
      showMixedProductsMsg: !1,
      runningObserver: !1,
    };
    const t = () => {
      setTimeout(() => {
        (() => {
          if (window.vtexjs.checkout.orderForm) {
            const { items: t } = window.vtexjs.checkout.orderForm;
            const { hasFurniture: s, hasTVs: n, hasSimCards: a, categories: i } = h(t);
            (e.showTVIDForm = n),
              (e.showRICAForm = a),
              (e.showTVorRICAMsg = e.showTVIDForm || e.showRICAForm),
              (e.showMixedProductsMsg = t.length > 1 && s && !i.every((e) => e === r));
          }
        })(),
          e.showFurnitureForm ? $('div.subheader').css('display', 'none') : $('div.subheader').css('display', 'block');
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
        setView: (e) => {
          document.body.setAttribute('data-delivery-view', e);
        },
        showCustomSections: () => {
          const t = $('#tfg-custom-tvrica-msg').length > 0;
          const s = $('#tfg-custom-mixed-msg').length > 0;
          let n = !1;
          let a;
          (e.showTVorRICAMsg || e.showMixedProductsMsg) &&
            ($('.vtex-omnishipping-1-x-deliveryChannelsWrapper.custom-disabled').length < 1 &&
              ($('#shipping-option-delivery').trigger('click'),
              $('.vtex-omnishipping-1-x-deliveryChannelsWrapper').addClass('custom-disabled')),
            e.showTVorRICAMsg &&
              !t &&
              ($('.vtex-omnishipping-1-x-addressFormPart1').prepend(
                '\n  <div id="tfg-custom-tvrica-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      You can\'t collect this order in store because your cart contains items \n      which require either RICA or TV License validation.\n    </p>\n  </div>\n'
              ),
              (n = !0)),
            e.showMixedProductsMsg &&
              !s &&
              ($('.vtex-omnishipping-1-x-addressFormPart1').prepend(
                '\n  <div id="tfg-custom-mixed-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      We\'ll ship your furniture and other items in your cart to the selected address. \n      Only the furniture delivery fee will apply.\n      </p>\n  </div>\n'
              ),
              (n = !0))),
            n &&
              ((a = '.tfg-custom-step'),
              $(a).addClass('custom-step-border'),
              $(a).last().addClass('last-custom-step-border'));
        },
        init: () => {},
      }
    );
  })();
  const ne = (() => {
    const t = { validForm: !0, runningObserver: !1 };
    const n = (s) => {
      $(`#${s}`).length > 0 && !$(`#${s}`).attr('disabled') && !$(`#${s}`).val()
        ? ($(`.${s}`).addClass('error'), $(`.${s}`).append(e), $(`.${s} span.error`).show(), (t.validForm = !1))
        : $(`.${s}`).removeClass('error');
    };
    const r = () => {
      const { showRICAForm: e, showTVIDForm: s } = se.state;
      if (
        ($('span.help.error').remove(),
        (t.validForm = !0),
        $('div.address-list.vtex-omnishipping-1-x-addressList').length <= 0 &&
          (n('ship-receiverName'),
          u(document.querySelector('.vtex-omnishipping-1-x-address input#ship-complement').value)
            ? $('.vtex-omnishipping-1-x-address .ship-complement').removeClass('error')
            : ($('.vtex-omnishipping-1-x-address .ship-complement').addClass('error'),
              $('.vtex-omnishipping-1-x-address .ship-complement').append(
                '<span class="help error">This field is required.</span>'
              ),
              $('.vtex-omnishipping-1-x-address .ship-complement span.error').show(),
              (t.validForm = !1))),
        se.state.showRICAForm &&
          [
            'tfg-rica-id-passport',
            'tfg-rica-fullname',
            'tfg-rica-street',
            'tfg-rica-suburb',
            'tfg-rica-city',
            'tfg-rica-postal-code',
            'tfg-rica-province',
          ].forEach((e) => {
            n(e);
          }),
        se.state.showTVIDForm && n('tfg-tv-licence'),
        t.validForm)
      ) {
        if (e) {
          const e = (() => {
            const e = {};
            return (
              (e.idOrPassport = $('#tfg-rica-id-passport').val()),
              (e.sameAddress = $('#tfg-rica-same-address').is(':checked')),
              (e.fullName = $('#tfg-rica-fullname').val()),
              (e.streetAddress = $('#tfg-rica-street').val()),
              (e.suburb = $('#tfg-rica-suburb').val()),
              (e.city = $('#tfg-rica-city').val()),
              (e.postalCode = $('#tfg-rica-postal-code').val()),
              (e.province = $('#tfg-rica-province').val()),
              (e.country = $('#tfg-rica-country').val()),
              e
            );
          })();
          p(a, e);
        }
        const t = {};
        if (s) {
          const e = { tvID: $('#tfg-tv-licence').val() };
          p(i, e), Object.assign(t, e);
        }
        (async (e = {}) => {
          let t;
          const { email: s } = window.vtexjs.checkout.orderForm.clientProfileData;
          const { address: n } = window.vtexjs.checkout.orderForm.shippingData;
          if (!n) return;
          const a = n?.addressId
            ? await (async (e, t) => {
                let s = {};
                const n = { headers: l({ cookie: !0, cache: !0, json: !1 }), credentials: 'include' };
                const a = await fetch(
                  `${o}masterdata/addresses/${t}&_where=addressName=${e}&timestamp=${Date.now()}`,
                  n
                )
                  .then((e) => e.json())
                  .catch((e) => c(`GET_ADDRESS_ERROR: ${e?.message}`));
                return a && !a.error && a.data && a.data.length > 0 && ([s] = a.data), s;
              })(n.addressId, '?_fields=id')
            : {};
          (n.addressType = localStorage.getItem('addressType')),
            (t = a?.id ? `${o}masterdata/address/${a.id}` : `${o}masterdata/addresses`),
            (n.complement = n.complement || d());
          const i = { userId: s, ...n, ...e };
          a.id || (i.addressName = n.addressId);
          const r = {
            method: 'PATCH',
            headers: l({ cookie: !0, cache: !0, json: !0 }),
            body: JSON.stringify(i),
            credentials: 'include',
          };
          await fetch(t, r)
            .then((e) => {
              localStorage.setItem('shippingDataCompleted', !0), e.status !== 204 && e.json();
            })
            .catch((e) => c(`SAVE_ADDRESS_ERROR: ${e?.message}`));
        })(t),
          setTimeout(() => {
            $('#btn-go-to-payment').trigger('click'),
              (() => {
                const e = localStorage.getItem('addressType');
                window.vtexjs.checkout.getOrderForm().then((t) => {
                  const { shippingData: s } = t;
                  return (
                    (s.selectedAddresses[0].addressType = e), window.vtexjs.checkout.sendAttachment('shippingData', s)
                  );
                });
              })();
          }, 750);
      }
    };
    const h = () => {
      if (
        ($('div.address-list').length < 1 &&
        $('#shipping-option-delivery').hasClass('shp-method-option-active') &&
        $('body').data('delivery-view') !== 'address-list'
          ? $('body:not(.has-no-addresses)').addClass('has-no-addresses')
          : $('body.has-no-addresses').removeClass('has-no-addresses'),
        window.location.hash === s)
      ) {
        if ($('.shipping-summary-info').length && $('.shipping-summary-info').text() === 'Waiting for more information')
          return void (window.location.hash = '#/profile');
        setTimeout(() => {
          $('#shipping-option-delivery').hasClass('shp-method-option-active') &&
            (() => {
              if ($('#custom-go-to-payment').length <= 0) {
                const e = $('#btn-go-to-payment');
                const t = e.clone(!1);
                $(e).hide(),
                  $(t).data('bind', ''),
                  $(t).removeAttr('id').attr('id', 'custom-go-to-payment'),
                  $(t).removeAttr('data-bind'),
                  $(t).css('display', 'block'),
                  $('p.btn-go-to-payment-wrapper').append(t),
                  $(t).on('click', r);
              }
            })(),
            m();
        }, 750);
      }
    };
    const m = () => {
      if (t.runningObserver) return;
      const e = document.querySelector('.shipping-container .box-step');
      const n = new MutationObserver(() => {
        (t.runningObserver = !0),
          window.location.hash !== s || $('btn-link vtex-omnishipping-1-x-btnDelivery').length || h();
      });
      e && n.observe(e, { attributes: !1, childList: !0, characterData: !1 });
    };
    return (
      $(document).on('change', '.vtex-omnishipping-1-x-deliveryGroup #tfg-delivery-floor', function () {
        $(this).val() === 'Ground'
          ? ($('#tfg-lift-stairs').val(''),
            $('#tfg-lift-stairs').attr('disabled', 'disabled'),
            $('#tfg-lift-stairs').next('span.help.error').remove(),
            $('.tfg-lift-stairs').removeClass('error'))
          : $('#tfg-lift-stairs').removeAttr('disabled');
      }),
      $(document).on(
        'change',
        '.vtex-omnishipping-1-x-deliveryGroup .tfg-custom-selector, .vtex-omnishipping-1-x-deliveryGroup .tfg-input',
        function () {
          $(this).val()
            ? ($(this).parent().removeClass('error'),
              $(this).next('span.help.error').remove(),
              $(this).addClass('tfg-input-completed'))
            : $(this).removeClass('tfg-input-completed');
        }
      ),
      $(document).on('change keyup', '.vtex-omnishipping-1-x-addressForm input, #tfg-tv-licence', function () {
        $(this).val() && ($(this).parent().removeClass('error'), $(this).next('span.help.error').remove());
      }),
      $(document).on('change', '.vtex-omnishipping-1-x-deliveryGroup #tfg-rica-same-address', function () {
        $(this).is(':checked')
          ? ((e = 'customApps') => {
              let t;
              if (e === 'shippingAddress') {
                const { address: e } = window.vtexjs.checkout.orderForm.shippingData;
                t = {
                  idOrPassport: '',
                  sameAddress: 'true',
                  fullName: e.receiverName || $('#ship-receiverName').val(),
                  streetAddress: `${e.street}, ${e.number}`,
                  suburb: e.neighborhood,
                  city: e.city,
                  postalCode: e.postalCode,
                  province: e.state,
                };
              } else
                e === 'customApps' &&
                  (t = ((e) => {
                    const { customData: t } = window.vtexjs.checkout.orderForm;
                    let s = {};
                    return (
                      t &&
                        t.customApps &&
                        t.customApps.length > 0 &&
                        t.customApps.forEach((e) => {
                          e.id === 'ricafields' && (s = e.fields);
                        }),
                      s
                    );
                  })());
              t &&
                !jQuery.isEmptyObject(t) &&
                (e === 'customApps' &&
                  ($('#tfg-rica-id-passport').val(t.idOrPassport),
                  $('#tfg-rica-same-address').prop('checked', t.sameAddress === 'true')),
                $('#tfg-rica-fullname').val(t.fullName),
                $('#tfg-rica-street').val(t.streetAddress),
                $('#tfg-rica-suburb').val(t.suburb),
                $('#tfg-rica-city').val(t.city),
                $('#tfg-rica-postal-code').val(t.postalCode),
                $('#tfg-rica-province').val(t.province));
            })('shippingAddress')
          : $('.rica-field').val('');
      }),
      $(document).on('click', '#shipping-data .btn-link.vtex-omnishipping-1-x-btnDelivery', () => {
        h();
      }),
      $(document).ready(() => {
        h();
      }),
      $(window).on('hashchange orderFormUpdated.vtex', () => {
        h();
      }),
      { state: t, init: () => {} }
    );
  })();
  const ae = document.createElement('script');
  ae.setAttribute('src', 'https://unpkg.com/penpal@^6/dist/penpal.min.js'),
    document.head.appendChild(ae),
    se.init(),
    ne.init(),
    K.init(),
    te.init();
})();
