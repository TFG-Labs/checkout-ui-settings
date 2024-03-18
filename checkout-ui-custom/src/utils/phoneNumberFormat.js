import { parsePhoneNumberFromString } from 'libphonenumber-js';

const usePhoneNumberFormatting = () => {
  const formatPhoneNumber = (phoneNumber, countryCode) => {
    try {
      const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, countryCode);
      if (parsedPhoneNumber) {
        return parsedPhoneNumber.formatInternational();
      } else {
        console.error('Invalid phone number:', phoneNumber);
        return phoneNumber;
      }
    } catch (error) {
      console.error('Error formatting phone number:', error);
      return phoneNumber;
    }
  };

  const isValidNumber = (phoneNumber, countryCode) => {
    try {
      const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, countryCode);
      return parsedPhoneNumber ? parsedPhoneNumber.isValid() : false;
    } catch (error) {
      console.error('Error validating phone number:', error);
      return false;
    }
  };

  return { formatPhoneNumber, isValidNumber };
};

export default usePhoneNumberFormatting;