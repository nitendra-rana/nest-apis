import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PagesModule } from './pages/pages.module';

function getMongoUrl(configService: ConfigService, dbType: string): string {
  const username = configService.get<string>(`db.mongo.${dbType}.username`);
  const password = configService.get<string>(`db.mongo.${dbType}.password`);
  const host = configService.get<string>(`db.mongo.${dbType}.host`);
  const database = configService.get<string>(`db.mongo.${dbType}.database`);
  // const appName = configService.get<string>('db.mongo.APP_NAME');
  // const replicaset = configService.get<string>('db.mongo.MONGO_REPLICA_SET');

  // return mongo_url;
  // const mongo_url = `mongodb://${username}:${password}@${host}/${database}?ssl=true&replicaSet=${replicaset}&retrywrites=false&maxIdleTimeMS=120000&appName=@${appName}@`;
  // mongodb+srv://contour:<password>@cluster0.l1xoe.mongodb.net/${database}?retryWrites=true&w=majority
  const mongo_url = `mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`;
  return mongo_url;
}

@Module({
  imports: [UserModule, BookmarkModule, PagesModule],
  controllers: [],
  providers: [],
})
export class AppModule {

}
