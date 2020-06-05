# Dockerfile
FROM centos:7
RUN useradd -s /bin/bash -m docker
RUN yum update -y && \
    yum install -y git
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash && \
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    nvm install 12 && \
    nvm alias default 12

USER docker
WORKDIR /home/docker
RUN curl https://install.meteor.com/ | sh
ENV PATH=$PATH:/home/docker/.meteor
ADD https://github.com/kamehiro17/remote-five-finger/commits/master.atom ./
RUN git clone https://github.com/kamehiro17/remote-five-finger.git
EXPOSE 3000

WORKDIR /home/docker/remote-five-finger
RUN meteor npm install
ENTRYPOINT ["meteor"]
