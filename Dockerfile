FROM cypress/included:12.3.0
RUN mkdir -p /e2e
WORKDIR cypress/e2e
COPY package.json ./
RUN npm install --save-dev
COPY . .