export const domain: String = 'http://localhost:8080/api';

export const Paths = {
    Apples: domain + '/apples',
    CreateApple: domain + '/apples/',
    DeleteApple: domain + '/apples/',
    ModifyApple: domain + '/apples/',

    OK: 200
};

export const ErrorCodes = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    TIMEOUT: 504,

    NotAuthorizedState: 'NotAuthorized',
    NoResultState: 'NoResult'
};
