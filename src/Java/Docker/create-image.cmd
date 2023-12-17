docker build --no-cache -f SQL\Dockerfile.PostgreSql -t qualitycontrol-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t qualitycontrol-java/app ../../..
