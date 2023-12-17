docker build --no-cache -f SQL\Dockerfile.PostgreSql -t qualitycontrol/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t qualitycontrol/app ../..
