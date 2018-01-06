# bitcoinz-api-seeder
Seeder App for providing information related to BitcoinZ API and Wallet Servers

## Requirements
Requires node version 6.0 and above

## Installation
Install npm dependencies with command:
```
npm install
```

## Usage
Start the service with command:
```
npm start
```

After the service has been started, you should be able to browse to it on port 3434.
Example: http://localhost:3434/seed/combined

### API Seed
Fetch a list of API servers

Example Request:
```
GET http://localhost:3434/seed/api
```

Example Response:
```
{
  "apiServers": [
    "https://bitcoinz.ph:443",
    "http://54.174.68.212:3001",
    "http://212.48.90.191:3001"
  ]
}
```

### BWS Seed
Fetch a list of BWS servers

Example Request:
```
GET http://localhost:3434/seed/bws
```

Example Response:
```
{
  "bwsServers": [
    "https://bws.bitcoinz.ph",
    "http://212.48.90.191:3232"
  ]
}
```

### Combined Seed
Fetch a list of both API and BWS servers

Example Request:
```
GET http://localhost:3434/seed/combined
```

Example Response:
```
{
  "apiServers": [
    "https://bitcoinz.ph:443",
    "http://54.174.68.212:3001",
    "http://212.48.90.191:3001"
  ],
  "bwsServers": [
    "https://bws.bitcoinz.ph",
    "http://212.48.90.191:3232"
  ]
}
```

## Docker
To build the docker image run with command:
```
docker build -t btcz/bitcoinz-api-seeder .
```

Then run the docker image with command:
```
docker run -d --restart always -p 3434:3434 --name bitcoinz-api-seeder btcz/bitcoinz-api-seeder
```
