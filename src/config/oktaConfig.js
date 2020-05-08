const CLIENT_ID = process.env.CLIENT_ID;
const ISSUER = process.env.ISSUER;
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    clientId: '0oaap4ry7yG1neZhz4x6',
    issuer: 'https://dev-568768.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:3000/api/messages',
  },
};
