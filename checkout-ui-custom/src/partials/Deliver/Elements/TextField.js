const TextField = ({
  name,
  value = '',
  required = true,
  type = 'text',
  placeholder,
  autoComplete = 'on',
  minLength = 0,
  maxLength = 0,
  idOverride,
}) => {
  const fieldId = name.replace(/\s/g, '-');

  const id = idOverride || `bash--input-${fieldId}`;
  return /* html */ `
  <input 
    ${required ? ' required ' : ''}
    autocomplete="${autoComplete}" 
    id="${id}" 
    type="${type}" 
    name="${name}" 
    ${minLength > 0 ? `minlength="${minLength}"` : ''}
    ${maxLength > 0 ? `maxlength="${maxLength}"` : ''}
    placeholder="${placeholder ?? ''}" 
    class="input-xlarge" 
    value="${value}" 
  />
`;
};

export default TextField;
