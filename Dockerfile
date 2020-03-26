FROM node:13.10.1-buster

RUN apt-get update

RUN cd /tmp \
  && git clone https://github.com/johnnyvicious/worker.git
  
CMD [ "bash" ]
