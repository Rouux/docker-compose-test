FROM node:12-alpine

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

VOLUME [ "/back-end" ]
EXPOSE 3000
ENTRYPOINT [ "./entrypoint.sh" ]
