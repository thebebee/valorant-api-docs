# GET CoreGame_FetchPlayer

Get the game ID for an ongoing game the player is in  


Method: `GET`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/core-game/v1/players/{puuid}`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`

Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](..\common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](..\common-components.md#riot-entitlement)
 - `{region}`: Read [Common Components - Region](..\common-components.md#region)
 - `{puuid}`: Read [Common Components - PUUID](..\common-components.md#puuid)
