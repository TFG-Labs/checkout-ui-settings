import AddressSearch from './AddressSearch';
import { AddressSectionHeading } from './FormComponents';

const ManualSearchCTA = () => /* html */ `
  <p style="font-size: 12px; margin: 16px 0" id="type-your-address-above">
    Type your address above or 
    <a 
      href="" id="link-manual-address-entry"
      data-view="manual-address"
      onClick="document.getElementById('bash--input-street').focus()"
      style="text-decoration: underline" 
    >enter it manually</a>.
  </p>
`;

const AddressSearchSection = () => /* html */ `
  <section class="bash--delivery-view" data-section="address-search">
    ${AddressSectionHeading('Add a new delivery address', 'select-address', 'back-button-select-address')}
    ${AddressSearch()} 
    ${ManualSearchCTA()}
  </section>
`;

export default AddressSearchSection;
