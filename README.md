# rest-api-nodejs

bu repo basit bir rest-api denemesidir.

### kodları çalıştırmak için gereken adımlar ##

1.)Dosyaları indirdikten sonra terminalde  ## npm install ## komutunu çalıştırın.
2.)config.env dosyası silinmiştir bu nedenle "config" adında bir klasör oluşturun.
3.)Bu klasörde "config.env" adında bir dosya oluşturun
4.)Bu dosyada istediğiniz port için "PORT" adında bir değişken atayın. örn: PORT=5000(Yapmamanız durumunda varsayılan olarak 5000 port'ta çalışacaktır.)
5.)Yine config.env dosyasında "MONGO_URI" adında bir değişkene veritabanı bağlantınız için gerekli bağlantı mongodb bağlantı linkini girin.(local bir veritabanı da olabilir)
6.)Daha sonra `npm start` komutuyla serveri başlatabilirsiniz.
