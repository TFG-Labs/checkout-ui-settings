import FormField from './Elements/FormField';

const TVLicenseForm = () => {
  // use tv_ prefix to ensure fields are unique

  const field = {
    name: 'tv_tvID',
    label: 'SA ID number',
    required: true,
    value: '',
    minLength: 8,
    maxLength: 13,
  };

  return `
    ${FormField(field)}
  `;
};

export default TVLicenseForm;
