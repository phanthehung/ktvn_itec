FROM max26292/react_preinstall:lastest as builder

WORKDIR /home/app 

COPY package.json ./docker pull ubuntu
COPY yarn.lock ./
# RUN npm install --silent
RUN yarn install 
COPY . ./
CMD ["yarn", "start"]