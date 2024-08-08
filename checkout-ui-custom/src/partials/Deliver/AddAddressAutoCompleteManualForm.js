import { AddressSectionHeading } from './FormComponents';

// TODO
const AddAddressAutoCompleteManualForm = (address) => {
  console.log('address', address);
  return /* html */ `
   ${AddressSectionHeading('Delivery Details', 'address-search')}
     <form id="bash--add-address-autocomplete-manual-form" method="post">
      <p>${JSON.stringify(address)}</p>
    </form>
  `;
};

export default AddAddressAutoCompleteManualForm;
