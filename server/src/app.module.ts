import { TrackModule } from './track/track.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        TrackModule,
        FileModule,
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.g0mfz.mongodb.net/music-platform?retryWrites=true&w=majority')
    ]
})
export class AppModule {

}