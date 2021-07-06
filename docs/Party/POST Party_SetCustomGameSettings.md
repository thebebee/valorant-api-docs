# POST Party_SetCustomGameSettings

Changes the settings for a custom game  


Method: `POST`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/parties/v1/parties/{party id}/customgamesettings`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `X-Riot-ClientVersion`: `{client version}`

Body:  
```
{
	"Map": "{map}",
	"Mode": "{mode}",
	"UseBots": true/false,
	"GamePod": "{pod}",
	"GameRules": {
		"AllowGameModifiers": "true/false",
		"PlayOutAllRounds": "true/false",
		"SkipMatchHistory": "true/false",
		"TournamentMode": "true/false",
		"IsOvertimeWinByTwo": "true/false"
	}
}
```
Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](..\common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](..\common-components.md#riot-entitlement)
 - `{client version}`: Read [Common Components - Client Version](..\common-components.md#client-version)
 - `{region}`: Read [Common Components - Region](..\common-components.md#region)
 - `{party id}`: Read [Common Components - Party ID](..\common-components.md#party-id)
 - `{map}`: Appears to be of the format `/Game/Maps/{map name}/{map name}` where `{map name}` is the asset name for the map. You can use the [Content_FetchContent](..\PVP%20Endpoints\GET%20Content_FetchContent.md) endpoint to get map asset names.
 - `{mode}`: The asset path for the gamemode in the format `/Game/GameModes/{id}/{name}.{name}_C`. For example, in unrated, the `{id}` is `Bomb` and the `{name}` is `BombGameMode`. It's easiest to experiment with this value by changing the mode in Valorant and using the [Party_FetchParty](GET%20Party_FetchParty.md) endpoint to see the resulting value.
 - `{pod}`: The ID of the pod to use for the server. You can view pods and associated pings for each party member with the [Party_FetchParty](GET%20Party_FetchParty.md) endpoint.
