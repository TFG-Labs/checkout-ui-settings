class CheckoutDB {
  constructor() {
    this.indexedDB =
      window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    this.db = null;
    this.dbPromise = new Promise((resolve, reject) => {
      const request = this.indexedDB.open('checkoutDB', 1.2);

      request.onerror = (event) => {
        console.error('CheckoutDB Error', { event });
        reject(new Error('Could not load checkoutDB'));
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
        resolve(this.db);
      };
    });
  }

  async getStore() {
    if (!this.db) {
      await this.dbPromise; // Wait for the database to be initialized
    }
    const transaction = this.db.transaction('addresses', 'readwrite');
    return transaction.objectStore('addresses');
  }

  async loadAddresses(addresses) {
    const queries = addresses.map((address) => this.addOrUpdateAddress(address));
    return Promise.allSettled(queries);
  }

  async addOrUpdateAddress(address) {
    const store = await this.getStore();
    const query = store.put(address);
    return new Promise((resolve, reject) => {
      query.onsuccess = () => resolve({ success: true, addressId: query.result });
      query.onerror = (error) => reject(error);
    });
  }

  async getAddresses() {
    const store = await this.getStore();
    const query = store.getAll();
    return new Promise((resolve, reject) => {
      query.onsuccess = () => resolve(query.result);
      query.onerror = (error) => reject(error);
    });
  }

  async getAddress(id) {
    const store = await this.getStore();
    const query = store.get(id);
    return new Promise((resolve, reject) => {
      query.onsuccess = () => resolve(query.result);
      query.onerror = (error) => reject(error);
    });
  }

  async deleteAddress(id) {
    const store = await this.getStore();
    const query = store.delete(id);
    return new Promise((resolve, reject) => {
      query.onsuccess = () => resolve(true);
      query.onerror = (error) => reject(error);
    });
  }

  async clearData() {
    const store = await this.getStore();
    const query = store.clear();
    return new Promise((resolve, reject) => {
      query.onsuccess = () => resolve(query.result);
      query.onerror = (error) => reject(error);
    });
  }
}

export default CheckoutDB;
