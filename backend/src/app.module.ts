import { APP_GUARD } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { LoggerModule } from "./core/logger/logger.module";
import { SequelizeModule } from "./sequelize/sequelize.module";
import { RedisModule } from "./redis/redis.module";
import { SocketModule } from "./socket/socket.module";
import { DefaultModule } from "./default/default.module";
import { DataModule } from "./data/data.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { FormsModule } from "./forms/forms.module";
import { LeaderboardModule } from "./leaderboard/leaderboard.module";

import { AuthGuard } from "./core/guard";

import { PermissionsService } from "./permissions/permissions.service";
import { PermissionsModule } from "./permissions/permissions.module";
import { IsAccessCode } from "./core/validate/";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, envFilePath: "../.env" }),

        LoggerModule,
        SequelizeModule,
        RedisModule,
        SocketModule,
        DefaultModule,
        DataModule,
        AuthModule,
        UsersModule,
        FormsModule,
        PermissionsModule,
        LeaderboardModule
    ],
    controllers: [],
    providers: [
        { provide: APP_GUARD, useClass: AuthGuard },

        PermissionsService,

        IsAccessCode
    ]
})
export class AppModule { }
