// import MaskedInput, { conformToMask } from 'react-text-mask';
import { conformToMask } from 'react-text-mask';

function phoneMask(phone) {
  const phoneNumber = phone;
  const phoneNumberMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  const conformedPhoneNumber = conformToMask(
    phoneNumber,
    phoneNumberMask,
    {guide: false}
  );

  return conformedPhoneNumber.conformedValue;
}

export default {
  phoneMask: phoneMask
}
