# GET RSO_RNet_GetEntitlementsToken

Gets both the token and entitlement for API usage  
`accessToken` is used as the token and `token` is used as the entitlement.  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/entitlements/v1/token`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](..\common-components.md#lockfile-data)
