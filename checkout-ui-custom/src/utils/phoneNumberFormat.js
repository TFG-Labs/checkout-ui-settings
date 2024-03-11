import { GOOGLE_LIBPHONELIBRARY_URL } from "./const";

const usePhoneNumberFormatting = () => {
  let phoneUtil = null;


  const loadPhoneNumberUtil = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = GOOGLE_LIBPHONELIBRARY_URL;
      script.async = true;


      const onLoad = () => {
        if (window.libphonenumber && window.libphonenumber.PhoneNumberUtil) {
          phoneUtil = window.libphonenumber.PhoneNumberUtil.getInstance();
          resolve();
        } else {
          reject(new Error('Failed to load libphonenumber library.'));
        }
      };

      script.addEventListener('load', onLoad);


      script.addEventListener('error', () => {
        reject(new Error('Failed to load libphonenumber script.'));
      });


      document.body.appendChild(script);
    });
  };


  const formatPhoneNumber = (phoneNumber, countryCode) => {
    if (!phoneUtil) {
      console.error('libphonenumber library is not loaded.');
      return phoneNumber;
    }

    try {
      const parsedPhoneNumber = phoneUtil.parse(phoneNumber, countryCode);
      const formattedNumber = phoneUtil.format(parsedPhoneNumber, window.libphonenumber.PhoneNumberFormat.INTERNATIONAL);
      return formattedNumber;
    } catch (error) {
      console.error('Error formatting phone number:', error);
      return phoneNumber;
    }
  };

    const isValidNumber = (phoneNumber, countryCode) => {
    if (!phoneUtil) {
      console.error('libphonenumber library is not loaded.');
      return false;
    }

    try {
      const parsedPhoneNumber = phoneUtil.parse(phoneNumber, countryCode);
      return phoneUtil.isValidNumber(parsedPhoneNumber);
    } catch (error) {
      console.error('Error validating phone number:', error);
      return false;
    }
  };

  loadPhoneNumberUtil().catch(error => {
    console.error(error);
  });

    return { formatPhoneNumber, isValidNumber };
};

export default usePhoneNumberFormatting;

