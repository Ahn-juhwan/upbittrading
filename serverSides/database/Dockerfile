# 베이스 이미지를 지정합니다.
FROM mariadb

# 환경 변수를 설정합니다.
ENV MYSQL_ROOT_PASSWORD=my-secret-pw
ENV MYSQL_DATABASE=mydatabase

# 작업 디렉토리를 생성합니다.
WORKDIR /docker-entrypoint-initdb.d/

# 초기 SQL 파일을 작성합니다.
COPY init.sql /docker-entrypoint-initdb.d/

# 컨테이너가 시작되면 실행할 명령을 지정합니다.
CMD ["mysqld"]
