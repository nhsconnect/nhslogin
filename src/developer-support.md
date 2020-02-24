---
layout: base.njk
title: Developer Support
---
 We have a public [Slack](https://nhs-login-support-slack-invite.herokuapp.com) where you can contact us for support.

 ## Guidance for generating asymmetric key pair

 You will need to provide a public key when registering your service. This is required for the authentication mechanism on the token endpoint. The steps below explain how to generate that public key and corresponding private key. 

 Full details can be found [here](https://en.wikibooks.org/wiki/Cryptography/Generate_a_keypair_using_OpenSSL).

 |Generate private_key.pem:                                                          |
 |-----------------------------------------------------------------------------------|
 | openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048 |

 |Generate corresponding public_key.pem:                                             |
 |-----------------------------------------------------------------------------------|
 |  openssl rsa -pubout -in private_key.pem -out public_key.pem                      |


 You should now have your key pair. Only send the contents of public_key.pem file when requesting access to a new environment.

