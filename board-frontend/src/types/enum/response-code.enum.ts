enum ResponseCode {
  // HTTP STATUS 200
  SUCCESS = "SU",
  VALIDATION_FAILED = "VF",
  DUPLICATE_EMAIL = "DE",
  DUPLICATE_TEL_NUMBER = "DT",
  DUPLICATE_NICKNAME = "DN",
  NOT_EXISTED_USER = "NU",
  NOT_EXISTED_BOARD = "NB",
  // HTTP STATUS 401
  SIGN_IN_FAILED = "SF",
  AUTHORIZATION_FAILED = "AF",
  // HTTP STATUS 403
  NO_PERMISSION = "NP",
  // HTTP STATUS 500
  DATABASE_ERROR = "DBE",
}

export default ResponseCode;