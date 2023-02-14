const AddressForm = () => `<p class="input custom-field-receiverName tfg-custom-addressForm">
    
      <label>Recipient</label>
      <input id="custom-field-receiverName" 
        class="input-xlarge success" 
        type="text" name="receiverNameX" 
      />
    </p>
    <p class="input custom-field-complement tfg-custom-addressForm">
      <label>Mobile number</label>
      <input id="custom-field-complement" 
        class="input-xlarge success"
        type="text" name="complement"
      />
    </p>
    <p class="input custom-field-companyBuilding tfg-custom-addressForm">
      <label>Company/Building</label>
      <input id="custom-field-companyBuilding" 
        class="input-xlarge success"
        type="text" name="companyBuilding"
      />
    </p>
  `;

export const SuburbField = () => `<p class="input custom-field-neighborhood tfg-custom-addressForm">
<label>Suburb</label>
<input id="custom-field-neighborhood" 
  class="input-xlarge success" 
  type="text" 
  name="neighborhood"
    />
</p>`;

export const PickupComplementField = () => `
  <p id="box-pickup-complement" class="input custom-field-complement tfg-custom-addressForm">
      <label>Mobile number</label>
      <input id="custom-pickup-complement"
        class="input-xlarge success" 
        type="text" name="complement" 
        placeholder="" 
          />
  </p> `;

export const PickupRecipientField = () => `
  <p id="box-pickup-receiver-name" class="input">
      <label>Recipient's name</label>
      <input id="custom-pickup-receiver"
        class="input-xlarge success" 
        type="text" name="recipientName" 
          placeholder=""    />
    </p>`;

export default AddressForm;
