export const USERNAME_REG: RegExp = /^[a-zA-Z0-9]+(?:[_-]?[a-zA-Z0-9])*$/;
export const PASSWORD_REG: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
export const EMAIL_REGEX: RegExp =
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
