const axios = require('axios');

const createAndSignBearerToken = require('./createAndSignBearerToken'); 
const secretsManager = require('./secretsManager');

const tokenEndpoint = 'https://auth.sandpit.signin.nhs.uk/token'; //Changes for different nhs environments

exports.handler = async (event) => {
    const decodedBody = Buffer.from(event['body'], 'base64').toString();    
    let bodyParams = new URLSearchParams(decodedBody);

    const secret =  await secretsManager.getSecret('<YOUR-PRIVATE-KEY-SECRET-NAME-HERE>');

    const signedBearerToken = createAndSignBearerToken({
      clientId: bodyParams.get('client_id'),
      audience: tokenEndpoint, 
      privateKey: secret
    });

    const formData = {
      code: bodyParams.get('code'),
      client_id: bodyParams.get('client_id'),
      redirect_uri: bodyParams.get('redirect_uri'),
      grant_type: 'authorization_code',
      client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
      client_assertion: signedBearerToken
    };

    const response = await axios.post(tokenEndpoint, new URLSearchParams(formData).toString());
    return response.data;
};
