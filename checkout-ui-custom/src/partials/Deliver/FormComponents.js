/**
 * ContactCard - View Component of a Address Summary
 * @param {Object} data - Address data
 */
export const ContactCard = (data) => {
  const { businessName, street, city, postalCode, neighborhood } = data;

  const addressLine = [businessName, street, neighborhood ?? city, postalCode]
    .filter((item) => item !== undefined && item !== null && item !== '')
    .join(', ')
    .trim();

  return /* html */ `
    <div style="border: 0.5px solid #0404041A; border-radius: 8px; padding: 16px; display: flex; align-items: center; margin-bottom: 24px;">
      <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 18.2496H22.5M14.25 18.2496V12.2496H9.75V18.2496M3.75 8.9393V18.2496M20.25 18.2496V8.9393M2.25 10.4393L11.4694 1.21899C11.539 1.14926 11.6217 1.09394 11.7128 1.05619C11.8038 1.01845 11.9014 0.999023 12 0.999023C12.0986 0.999023 12.1962 1.01845 12.2872 1.05619C12.3783 1.09394 12.461 1.14926 12.5306 1.21899L21.75 10.4393" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <p style="margin-left: 16px; line-height: 1; font-size: 14px; margin-bottom:0;">${addressLine}</p>
    </div>
  `;
};

/**
 * SubmitButton - View Component of a Submit Button
 * @returns {string} - HTML for a Submit Button

 */
export const SubmitButton = () => /* html */ `
  <button
    class="submit btn-go-to-payment btn btn-large btn-success"
    id="btn-save-address"
    type="submit">
      Save address
  </button>
`;

/**
 * AddressSectionHeading - View Component of a Heading
 * @param {string} title - Title of the Heading
 * @returns {string} - HTML for a Heading
 */
export const AddressSectionHeading = (title) => /* html */ `
  <div class="bash--heading">
    <h3>${title}</h3>
    <a href="#" class="back-button--select" data-view="select-address">&lt; Back</a>
  </div>
`;
