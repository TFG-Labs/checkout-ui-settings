class CheckoutDB {
  constructor() {
    this.indexedDB =
      window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    const request = this.indexedDB.open('checkoutDB', 1.2);

    request.onerror = (event) => {
      console.error('CheckoutDB Error', { event });
      throw new Error('Could not load checkoutDB');
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const store = db.createObjectStore('addresses', { keyPath: 'addressName' });
      store.createIndex('address_street', ['street'], { unique: false });
      store.createIndex('address_addressName', ['addressName'], { unique: true });
      store.createIndex('address_street_suburb_city_postal', ['street', 'neighborhood', 'city', 'postalCode'], {
        unique: true,
      });
    };

    request.onsuccess = (event) => {
      this.db = event.target.result;
    };
  }

  store() {
    const transaction = this.db.transaction('addresses', 'readwrite');
    return transaction.objectStore('addresses');
  }

  loadAddresses(addresses) {
    const queries = addresses.map((address) => this.addOrUpdateAddress(address));
    return Promise.all(queries);
  }

  addOrUpdateAddress(address) {
    return new Promise((resolve, reject) => {
      const store = this.store();
      const query = store.put(address);

      query.onsuccess = () => resolve({ success: true, addressId: query.result });

      query.onerror = (error) => reject(new Error({ success: false, error: error.target.error }));
    });
  }

  getAddresses() {
    return new Promise((resolve, reject) => {
      const store = this.store();
      const query = store.getAll();

      query.onsuccess = () => resolve(query.result);

      query.onerror = (error) => {
        console.error('Something went wrong with getAddresses.', error);
        reject([]);
      };
    });
  }

  getAddress(id) {
    return new Promise((resolve, reject) => {
      const store = this.store();
      const query = store.get(id);

      query.onsuccess = () => resolve(query.result);

      query.onerror = (error) => {
        console.error('Something went wrong with getAddress.', error);
        reject([]);
      };
    });
  }

  deleteAddress(id) {
    return new Promise((resolve, reject) => {
      const store = this.store();
      const query = store.delete(id);

      query.onsuccess = () => resolve(true);

      query.onerror = (error) => {
        console.error('Something went wrong with deleteAddress.', error);
        reject(false);
      };
    });
  }

  clearData() {
    return new Promise((resolve, reject) => {
      const store = this.store();
      const query = store.clear();

      query.onsuccess = () => resolve(query.result);

      query.onerror = (error) => {
        console.error('Something went wrong with clearData.', error);
        reject([]);
      };
    });
  }
}

export default CheckoutDB;
