FROM oven/bun:1.0

WORKDIR /usr/src/app
COPY package*.json ./

# run npm install in our local machine
RUN bun install

# copy the generated modules and all other files to the container
COPY . .

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 5000

# the command that starts our app
CMD ["bun", "run", "start"]
