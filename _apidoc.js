/**
 * @api {post} /login User Request Login
 * @apiVersion 0.1.0
 * @apiName UserLogin
 * @apiGroup Auth
 * 
 * @apiParam {String} email User's unique email
 * @apiParam {String} password User's password
 *  
 * 
 * @apiSuccess {String} firstname FirstName of the User
 * @apiSUccess {String} lastname LastName of the User
 * 
 * @apiSUccessExample Success-Response
 *  HTTP/1.1  200 OK
 * {
 * "firstname": "Amna"
 * "lastname": "Ali"
 * }
 * 
 * @apiError UserNotFound the email of the user was not found.
 * @apiErrorExample Error-Response
 * HTTP/1.1 404 Not Found
 * { 
 * "error": "UserNotFound"
 * }
 * 
 * 
 * 
 * 
 */
