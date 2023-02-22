import cogoToast from "cogo-toast";

let emailRegex = /\S+@\S+\.\S+/;

let mobileNumberRegex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormHelper {
  isEmpty(value) {
    return value.length === 0;
  }

  isMobile(value) {
    return !mobileNumberRegex.test(value);
  }

  isEmailValid(value) {
    return !emailRegex.test(value);
  }
  errorToast(message) {
    cogoToast.error(message, { position: "top-right" });
  }
  successToast(message) {
    cogoToast.success(message, { position: "top-right" });
  }
}

export const { isEmpty, isMobile, isEmailValid, errorToast, successToast } =
  new FormHelper();
