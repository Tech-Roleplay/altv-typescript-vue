import './utility/ipc'; // Used to reconnect, do not remove.
import * as alt from 'alt-server';
import * as chat from 'vchat';

import { connectLocalClient } from './utility/reconnect';

alt.log(`alt:V Server - Boilerplate Started`);
alt.on('playerConnect', handlePlayerConnect);

function handlePlayerConnect(player: alt.Player) {
    alt.log(`[${player}] ${player.name} has connected to the server.`);
    chat.broadcast(`[${player}] ${player.name} has connected to the server.`);

    player.model = 'mp_m_freemode_01';
    player.spawn(36.19486618041992, 859.3850708007812, 197.71343994140625, 0);
    alt.emitClient(player, 'log:Console', 'alt:V Server - Boilerplate Started');
}

connectLocalClient();
