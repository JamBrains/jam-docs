---
id: Certificates
sidebar_label: Certificates
sidebar_position: 2
---

# OpenSSL Certificate Generation

This guide demonstrates how to generate Ed25519 keys and certificates for the [Alice](/basics/dev-accounts#alice) dev account using the OpenSSL CLI. These certificates can be used for the [Simple Networking Protocol](/knowledge/advanced/simple-networking/spec.md#encryption-and-handshake).

## Secret Key Generation

First, we need to create an Ed25519 secret key in PEM format. The key consists of two parts:
1. A fixed ASN.1 DER prefix
2. The 32-byte secret key

The PEM format wraps these components as follows:

```pre
-----BEGIN PRIVATE KEY-----
Base64(ASN.1_PREFIX ++ SECRET_KEY)
-----END PRIVATE KEY-----
```

Where:
- `ASN.1_PREFIX` is the 16-byte sequence: `302e020100300506032b657004220420`
- `SECRET_KEY` is your 32-byte Ed25519 seed

For the Alice dev account example (using all zeros as the secret key):

```pre
-----BEGIN PRIVATE KEY-----
MC4CAQAwBQYDK2VwBCIEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
-----END PRIVATE KEY-----
```

To verify the key's integrity, use:
```bash
openssl pkey -in secret.pem -pubout
```

This should output Alice's public key in PEM format:
```pre
-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEAO2onvM62pC1io6jQKm8Nc2UyFXcd4kOmOsBIoYtZ2ik=
-----END PUBLIC KEY-----
```

The Base64-decoded public key contains Alice's known public key:
`3b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29`

## Certificate Generation

To generate a certificate from your `secret.pem`, use this OpenSSL command:

```bash
openssl req -new -x509 -days 365 \
    -key secret.pem \
    -out cert.pem \
    -subj "/CN=JAM Client Ed25519 Cert" \
    -addext "subjectAltName=DNS:$DNS_ALT_NAME"
```

Where `$DNS_ALT_NAME` should match the [SNP Specification](/knowledge/advanced/simple-networking/spec.md#encryption-and-handshake).

For CA certificates that will sign other certificates, add these extensions:

```bash
    -addext "basicConstraints=critical,CA:TRUE" \
    -addext "keyUsage=critical,digitalSignature,keyCertSign"
```

To verify your certificate configuration and public key, use:

```bash
openssl x509 -noout -text -in cert.pem
```

This shows:
1. The Alice public key, starting with `3b:6a:27`.
3. The correct DNS alternative name, starting with `ehnvc`.

Example output for Alice's certificate:
```pre
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            21:bf:4d:d9:63:24:a6:e3:d6:19:5b:21:70:cd:54:73:1d:1c:e0:bc
        Signature Algorithm: ED25519
        Issuer: CN = Graymatter Ed25519 Cert
        Validity
            Not Before: Nov 11 03:28:09 2024 GMT
            Not After : Nov 11 03:28:09 2025 GMT
        Subject: CN = Graymatter Ed25519 Cert
        Subject Public Key Info:
            Public Key Algorithm: ED25519
                ED25519 Public-Key:
                pub:
                    3b:6a:27:bc:ce:b6:a4:2d:62:a3:a8:d0:2a:6f:0d:
                    73:65:32:15:77:1d:e2:43:a6:3a:c0:48:a1:8b:59:
                    da:29
        X509v3 extensions:
            X509v3 Subject Key Identifier: 
                8C:30:C9:7E:7F:D5:46:0C:E3:B9:62:DB:4C:D7:58:79:EE:CD:8A:BD
            X509v3 Authority Key Identifier: 
                8C:30:C9:7E:7F:D5:46:0C:E3:B9:62:DB:4C:D7:58:79:EE:CD:8A:BD
            X509v3 Basic Constraints: critical
                CA:TRUE
            X509v3 Subject Alternative Name: 
                DNS:ehnvcppgow2sc2yvdvdicu3ynonsteflxdxrehjr2ybekdc2z3iuq
    Signature Algorithm: ED25519
    Signature Value:
        3d:40:1d:dc:af:a2:d2:09:81:53:7b:5b:c6:d7:9b:1e:e1:bc:
        1a:a8:ea:db:69:40:df:be:9f:ed:95:9f:29:e8:60:28:5c:d0:
        95:63:4e:c9:01:d0:ef:0f:ed:bd:69:de:95:58:aa:b8:41:20:
        1c:f0:01:2a:60:56:7e:13:a0:05
```

## Alice

You can use this as `key.pem` and `cert.pem` for testing if your code for cert generation is not working yet:

```pre
-----BEGIN PRIVATE KEY-----
MC4CAQAwBQYDK2VwBCIEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
-----END PRIVATE KEY-----
```

```pre
-----BEGIN CERTIFICATE-----
MIIBgzCCATWgAwIBAgIUWbN1jo1BMetDNTw+gdSoV3gO35AwBQYDK2VwMBUxEzAR
BgNVBAMMCkdyYXlNYXR0ZXIwHhcNMjQxMTIzMDIxMDUzWhcNMjUxMTIzMDIxMDUz
WjAVMRMwEQYDVQQDDApHcmF5TWF0dGVyMCowBQYDK2VwAyEAO2onvM62pC1io6jQ
Km8Nc2UyFXcd4kOmOsBIoYtZ2imjgZYwgZMwHQYDVR0OBBYEFIwwyX5/1UYM47li
20zXWHnuzYq9MB8GA1UdIwQYMBaAFIwwyX5/1UYM47li20zXWHnuzYq9MA8GA1Ud
EwEB/wQFMAMBAf8wQAYDVR0RBDkwN4I1ZWhudmNwcGdvdzJzYzJ5dmR2ZGljdTN5
bm9uc3RlZmx4ZHhyZWhqcjJ5YmVrZGMyejNpdXEwBQYDK2VwA0EAmm6guSDtodGd
yKzFkYpc35mc0989pslXnNV88mhqRR+NLOJL23wIQUTV50MKaJ8AH1nUeUoeaZTM
VI5O4HcGDA==
-----END CERTIFICATE-----
```
