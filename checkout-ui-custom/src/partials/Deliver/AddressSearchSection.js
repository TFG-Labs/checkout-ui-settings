import AddressSearch from './AddressSearch';

const Heading = () => /* html */ `
  <div class="bash--heading">
    <h3>Add a new delivery address</h3>
    <a href='#' data-view='select-address' id='back-button-select-address'>&lt; Back</a>
  </div>
`;

const ManualSearchCTA = () => /* html */ `
  <p style="font-size: 12px; margin: 16px 0" id="type-your-address-above">
    Type your address above or 
    <a 
      href="" id="link-manual-address-entry"
      data-view="address-form"
      onClick="document.getElementById('bash--input-street').focus()"
      style="text-decoration: underline" 
    >enter it manually</a>.
  </p>
`;

const AddressSearchSection = () => /* html */ `
  <section class="bash--delivery-view" data-section="address-search">
    ${Heading()}
    ${AddressSearch()} 
    ${ManualSearchCTA()}
  </section>
`;

export default AddressSearchSection;
