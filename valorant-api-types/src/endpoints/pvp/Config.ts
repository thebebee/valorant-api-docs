import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {dateSchema, stringBooleanSchema} from '../../commonTypes'

const stringNumberSchema = z.string().transform(val => Number(val))

export const configEndpoint = {
    name: 'Config',
    description: 'Get the config for the given player',
    queryName: 'Config_FetchConfig',
    category: 'PVP Endpoints',
    type: 'pd',
    suffix: 'v1/config/{region}',
    responses: {
        '200': z.object({
            LastApplication: dateSchema,
            Collapsed: z.object({
                'ARES_MOC_ENTITLEMENT': z.string(),
                'CLIENT.ICONS.ENABLED': stringBooleanSchema,
                'CLIENT_LEADERBOARDS_ENABLED': stringBooleanSchema,
                'GAME_ALLOW_CONSOLE': stringBooleanSchema,
                'GAME_ALLOW_DEVELOPER_MENU': stringBooleanSchema,
                'GAME_DISABLED_DEATHCAM': stringBooleanSchema,
                'GAME_DISABLED_SKINS_WEAPONS': z.string().transform(val => val.split(',').map(id => id.substring(1, id.length - 1))),
                'GAME_PERFREPORTING_ENABLED': stringBooleanSchema,
                'GAME_REMOTE_MOVE_INTERP_ENABLED': stringBooleanSchema,
                'GAME_ROAMINGSETTINGS_ENABLED': stringBooleanSchema,
                'GAME_ROAMINGSETTINGS_KEY': z.string(),
                'GAME_ROAMINGSETTINGS_STORAGEURL': z.string(),
                'MAP_PRELOADING_ENABLED': stringBooleanSchema,
                'NAMECHECK_PLATFORM_REGION': z.string(),
                'NAMECHECK_PLATFORM_URL': z.string(),
                'SECURITY_WATERMARK_ENABLED': stringBooleanSchema,
                'SECURITY_WATERMARK_MAX_OPACITY': stringNumberSchema,
                'SECURITY_WATERMARK_MIN_OPACITY': stringNumberSchema,
                'SECURITY_WATERMARK_TILING_FACTOR': stringNumberSchema,
                'SERVICEURL_ACCOUNT_XP': z.string(),
                'SERVICEURL_AGGSTATS': z.string(),
                'SERVICEURL_CONTENT': z.string(),
                'SERVICEURL_CONTRACTS': z.string(),
                'SERVICEURL_CONTRACT_DEFINITIONS': z.string(),
                'SERVICEURL_COREGAME': z.string(),
                'SERVICEURL_DAILY_TICKET': z.string(),
                'SERVICEURL_FAVORITES': z.string(),
                'SERVICEURL_LATENCY': z.string(),
                'SERVICEURL_LOGINQUEUE': z.string(),
                'SERVICEURL_MASS_REWARDS': z.string(),
                'SERVICEURL_MATCHDETAILS': z.string(),
                'SERVICEURL_MATCHHISTORY': z.string(),
                'SERVICEURL_MATCHMAKING': z.string(),
                'SERVICEURL_MMR': z.string(),
                'SERVICEURL_NAME': z.string(),
                'SERVICEURL_PARTY': z.string(),
                'SERVICEURL_PATCHNOTES': z.string(),
                'SERVICEURL_PERSONALIZATION': z.string(),
                'SERVICEURL_PLAYERFEEDBACK': z.string(),
                'SERVICEURL_PREGAME': z.string(),
                'SERVICEURL_PREMIER': z.string(),
                'SERVICEURL_PROGRESSION': z.string(),
                'SERVICEURL_PURCHASEMERCHANT': z.string(),
                'SERVICEURL_RESTRICTIONS': z.string(),
                'SERVICEURL_SESSION': z.string(),
                'SERVICEURL_STORE': z.string(),
                'SERVICE_TICKER_MESSAGE': z.string(),
                'SERVICE_TICKER_MESSAGE.de-DE': z.string(),
                'SERVICE_TICKER_MESSAGE.es-MX': z.string(),
                'SERVICE_TICKER_MESSAGE.fr-FR': z.string(),
                'SERVICE_TICKER_MESSAGE.it-IT': z.string(),
                'SERVICE_TICKER_MESSAGE.pl-PL': z.string(),
                'SERVICE_TICKER_MESSAGE.pt-BR': z.string(),
                'SERVICE_TICKER_MESSAGE.ru-RU': z.string(),
                'SERVICE_TICKER_MESSAGE.tr-TR': z.string(),
                'SERVICE_TICKER_SEVERITY': z.string(),
                'STORESCREEN_OFFERREFRESH_MAXDELAY_MILLISECONDS': stringNumberSchema,
                'cap.location': z.string(),
                'characterselect.debugwidgets.hide': stringBooleanSchema,
                'chat.mutedwords.enabled': stringBooleanSchema,
                'chat.v3.enabled': stringBooleanSchema,
                'collection.characters.enabled': stringBooleanSchema,
                'competitiveSeasonOffsetEndTime': stringNumberSchema,
                'config.client.telemetry.samplerate': stringNumberSchema,
                'content.filter.enabled': stringBooleanSchema,
                'content.maps.disabled': z.string(),
                'eog.wip': stringBooleanSchema,
                'friends.enabled': stringBooleanSchema,
                'game.umgchat.enabled': stringBooleanSchema,
                'homescreen.featuredQueues': z.string(),
                'homescreen.promo.enabled': stringBooleanSchema,
                'homescreen.promo.key': z.string(),
                'loginqueue.region': z.string(),
                'mainmenubar.collections.enabled': stringBooleanSchema,
                'mainmenubar.debug.enabled': stringBooleanSchema,
                'mainmenubar.profile.enabled': stringBooleanSchema,
                'mainmenubar.progression.enabled': stringBooleanSchema,
                'mainmenubar.shootingrange.enabled': stringBooleanSchema,
                'mainmenubar.store.enabled': stringBooleanSchema,
                'match.details.delay': stringNumberSchema,
                'notifications.enabled': stringBooleanSchema,
                'parties.auto.balance.enabled': stringBooleanSchema,
                'party.observers.enabled': stringBooleanSchema,
                'partyinvites.enabled': stringBooleanSchema,
                'patchavailability.enabled': stringBooleanSchema,
                'personalization.equipAnyLevel.enabled': stringBooleanSchema,
                'personalization.useWidePlayerIdentityV2': stringBooleanSchema,
                'ping.update.interval': stringNumberSchema,
                'ping.useGamePodsFromParties': stringBooleanSchema,
                'platformFaulted.level': z.string(),
                'playerfeedbacktool.accessurl': z.string(),
                'playerfeedbacktool.locale': z.string(),
                'playerfeedbacktool.shard': z.string(),
                'playerfeedbacktool.show': stringBooleanSchema,
                'playerfeedbacktool.survey_request_rate_float': stringNumberSchema,
                'playscreen.partywidget.enabled': stringBooleanSchema,
                'playscreen.partywidget.matchmaking.maxsize': stringNumberSchema,
                'queue.status.enabled': stringBooleanSchema,
                'rchat.ingame.enabled': stringBooleanSchema,
                'reporterfeedback.fetch.enabled': stringBooleanSchema,
                'reporterfeedback.notifications.enabled': stringBooleanSchema,
                'restrictions.v2.fetch.enabled': stringBooleanSchema,
                'restrictions.v2.warnings.enabled': stringBooleanSchema,
                'riotwarning.fetch.enabled': stringBooleanSchema,
                'riotwarning.notifications.enabled': stringBooleanSchema,
                'rnet.useAuthenticatedVoice': stringBooleanSchema,
                'russia.voice.enabled': stringBooleanSchema,
                'settings.livediagnostics.allowedplayers': z.string().transform(val => val.split(',')).describe('Comma separated list of PUUIDs'),
                'shootingtest.enabled': stringBooleanSchema,
                'skillrating.enabled': stringBooleanSchema,
                'skillrating.inGame.enabled': stringBooleanSchema,
                'skillrating.preGame.enabled': stringBooleanSchema,
                'social.panel.v6.enabled': stringBooleanSchema,
                'socialviewcontroller.enabled': stringBooleanSchema,
                'socialviewcontroller.v2.enabled': stringBooleanSchema,
                'store.isXgpDisabled': stringBooleanSchema,
                'store.use_currency_inventory_models': stringBooleanSchema,
                'store.use_platform_bundle_discounted_prices': stringBooleanSchema,
                'temp.voice.allowmuting': stringBooleanSchema,
                'vanguard.accessurl': z.string(),
                'vanguard.netrequired': stringBooleanSchema,
                'voice.clutchmute.enabled': stringBooleanSchema,
                'voice.clutchmute.prompt.enabled': stringBooleanSchema,
                'voice.provider': z.string(),
                'whisper.enabled': stringBooleanSchema
            })
        })
    }
} satisfies ValorantEndpoint

export type ConfigEndpointResponse = z.input<typeof configEndpoint.responses['200']>