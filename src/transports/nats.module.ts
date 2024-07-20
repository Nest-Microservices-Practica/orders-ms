import { Module } from '@nestjs/common';
import { NATS_SERVICE } from '../config/services';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from '../config/envs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: envs.natsServers,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class NatsModule {}
