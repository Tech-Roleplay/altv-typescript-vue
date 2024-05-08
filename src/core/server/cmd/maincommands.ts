import * as alt from 'alt-server';
import * as chat from 'vchat';

chat.registerCmd('veh', (player: alt.Player, args:Array<string>) => {
    if (args.length < 1) {
        chat.send( player, 'Usage: /veh <vehicle>');
        return;
    }
    else {
        let veh = new alt.Vehicle(args[0], player.pos, player.rot);
    }
})