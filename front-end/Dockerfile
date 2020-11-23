FROM node:12

COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
RUN npm install -g @angular/cli
# COPY . .
ENTRYPOINT [ "/entrypoint.sh" ]
