/**
 * Any files in this directory are automatically run when this plugin is loaded.
 * Remember to transpile to JavaScript!
 */
import { Logger } from 'mc-plugin/lib/log'
import { commando } from '@magikcraft/core'
import * as events from 'events'

const log = Logger(__filename)

log('mc-plugin loaded!')

log('Registering Player Join event handler')

events.playerJoin(({ player }) => {
	setTimeout(() => {
		// Initial join is a bit chaotic
		echo(
			player,
			`Hi ${player.name}. The mc-plugin plugin is loaded on this server`
		)
	}, 1000)
})

log('Registering test command')

commando('test', (args, player) => {
	console.log(`Test command called by ${player.name}`)
	echo(player, 'Test command called')
})
