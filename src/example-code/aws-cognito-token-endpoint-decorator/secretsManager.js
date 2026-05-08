const AWS = require('aws-sdk'); 

class SecretsManager {

    static async getSecret (secretName){
        const config = { region : '<YOUR-REGION-HERE>' }
        var secret, decodedBinarySecret;
        let secretsManager = new AWS.SecretsManager(config);
        let secretValue = await secretsManager.getSecretValue({SecretId: secretName}).promise();
        if ('SecretString' in secretValue) {
            return secret = secretValue.SecretString;
        } 
        throw new Error('Only able to retrieve simple string secret')
    } 
}
module.exports = SecretsManager;
