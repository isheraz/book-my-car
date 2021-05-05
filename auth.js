
/**
 * @apiDefine UserNotFoundError
 * @apiError UserNotFound the email of the user was not found.
 * @apiErrorExample Error-Response
 * HTTP/1.1 404 Not Found
 * { 
 * "error": "UserNotFound"
 * }
 */

/**
 * @api {post} /login Login 
 * @apiVersion 0.2.0
 * @apiName UserLogin
 * @apiGroup Auth
 * 
 * @apiParam {String} email User's unique email
 * @apiParam {String} password User's password
 * @apiParamExample {json} Request-Example 
 * {
 * "email": "amna@invozone.com",
 * "password": "Encrypted Password"
 * }
 * 
 * @apiSuccess {String} token JWT Token
 * 
 * 
 * @apiSUccessExample Success-Response
 *  HTTP/1.1  200 OK
 * {
 * "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 * }
 * 
 *  @apiUse UserNotFoundError
 * 
 * @apiError Email/Password Don't Match email and password is incorrect
 * @apiErrorExample Error-Response 
 * HTTP/1.1 401 Not Authenticated
 * {
 * "Error": "NoAccessRight"
 * }
 */
function login(){
    return;
}

/**
 * @api {post} /register Registeration 
 * @apiVersion 0.2.0
 * @apiName RegisterUser
 * @apiGroup Auth
 * @apiPermission none
 * 
 * @apiParam {String} email Unique Email of the User
 * @apiParam {String} password Password of the User
 * @apiParam {String[]} role Role of the user either vendor or non-vendor
 * @apiParamExample {json} Request-Example 
 * {
 *  "email": "amna@invozone.com",
 *  "password": "Encrypted Password",
 *  "role": ['vendor', 'non-vendor']
 * }
 * @apiSuccess {Number} id The newly created user-id
 * @apiSuccess {String} email Email of the user
 * @apiSuccess {String} password Password of the User
 * @apiSuccess {String} role Role of the Newly created User 
 * @apiSuccess {String} token JWT Token of the user
 * @apiSuccessExample Success-Response
 *  HTTP/1.1  200 OK
 * {
 * "id": "1",
 * "email": "amna@invozone.com",
 * "password": "encrypted password",
 * "role": "vendor",
 * "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 * }
 * 
 * @apiError UserExists the email of the user already exist in database.
 * @apiErrorExample Error-Response
 * HTTP/1.1 409 AlreadyExist
 * { 
 * "error": "UserAlreadyExist"
 * }
 * 
 * @apiError PasswordLengthTooShort the length of the password is too short.
 * @apiErrorExample Error-Response
 * HTTP/1.1 401 WeakPassword
 * { 
 * "error": "PasswordLengthIsTooShort"
 * }
 * 
 */
function register(){
    return;
}
