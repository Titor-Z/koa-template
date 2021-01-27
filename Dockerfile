FROM  foolsecret/alpine

# 安装 NodeJS 和 Yarn
RUN   apk update && apk upgrade && \
      apk add nodejs-current yarn

WORKDIR /root/
# 安装依赖项
RUN   yarn

# 默认目录 Root 用户目录
VOLUME  /root/

# 默认端口 4321
EXPOSE  4321

# 默认启动 app应用
ENTRYPOINT ["yarn", "dev"]