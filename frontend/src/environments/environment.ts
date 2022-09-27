/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-ztfg6616.us.auth0.com', // the auth0 domain prefix
    audience: 'coffee', // the audience set for the auth0 app
    clientId: 'ulg7UtzVVtHg6fOP12i4HuMrk0QEH3wx', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:8100/tabs/user-page', // the base url of the running ionic application. 
  }
};
