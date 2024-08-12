export const DeliveryErrorContainer = () => ` 
 
<div id="bash-delivery-error-container"   >
</div>`;

export const DeliveryError = ({ text, fields }) => {
  if (!fields.itemIndex) return '';

  const cartItem = window.vtexjs.checkout?.orderForm.items?.[fields.itemIndex];
  if (!cartItem) return '';

  const imageUrl = cartItem?.imageUrl;

  return ` 
<div id="bash-delivery-error" class="notification error" alt="${fields?.skuName ?? ''}" >
   <!---<div class="icon"></div>--->
   ${imageUrl ? `<img src="${imageUrl}" style=" float: right; " />` : ''}
   <div class="notification-content">
      <h3>Address error ${fields?.skuName ? `- ${fields?.skuName}` : ''}</h3>
      <p>${text}</p>
      <p>Check the postal code of your address, or 
      <a href="#" 
        class="remove-cart-item"
        style="color: white; text-decoration: underline"
        data-index="${fields.itemIndex}">remove this item from your cart</a>.
      </p>
   </div>  
</div>  
`;
};

export const NoAddressSelectedError = () => /* html */ ` 
<div id="bash-delivery-error" class="notification error"  >
   <div class="notification-content">
      <p>Select a delivery address.</p>
   </div>  
</div>  
`;

export const CouldNotSaveAddressError = () => /* html */ `
   <div id="bash-delivery-error" class="notification error"  >
      <div class="notification-content">
         <p>Select a delivery address.</p>
      </div>
   </div> 
`;

export const ShowDeliveryError = (htmlString) => {
  const containerId = '#bash-delivery-error-container';
  $('html, body').animate({ scrollTop: $(containerId).offset().top }, 400);
  $(containerId).html(htmlString);
};

export default DeliveryErrorContainer;
