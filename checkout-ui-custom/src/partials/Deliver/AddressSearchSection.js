import AddressSearch from './AddressSearch';

const AddressSearchSection = () => /* html */ `
    <section class="bash--delivery-view" data-section="address-search">
      <div class="bash--heading">
        <h3>Add a new delivery address</h3>
        <a href='#' data-view='select-address' id='back-button-select-address'>&lt; Back</a>
      </div>
      <div class="address-search-field-container" id="address-search-field-container">
          ${AddressSearch()} 
      </div>
      <p style="font-size: 12px; margin: 16px 0" id="type-your-address-above">
        Type your address above or 
        <a 
          href="" id="link-manual-address-entry"
          data-view="address-form"
          onClick="document.getElementById('bash--input-street').focus()"
          style="text-decoration: underline" 
        >enter it manually</a>.
      </p>
    </section>
`;

export default AddressSearchSection;
