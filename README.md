# Serverless Framework Express and Vue Mono Repo on AWS

This is a mono repo starter template for quickly starting a boilerplate for Express and Vue that is ready to deploy on AWS. This version is largely based on the example generated by the `serverless` command but removes a few more steps such as pre-installing serverless offline and combining front-end and back-end start scripts.

## Usage

### Requirements

1. Install the `serverless` framework globally
```
npm install -g serverless
```

1. NVM - Node Version Manager
   - [How to Install](https://github.com/nvm-sh/nvm#installing-and-updating)

### Quick Start

Before installing, or being able to run the application, the proper version of NodeJS has to be used.
The application currently runs on Node `v12.22.9`. Having a mismatched version of node can cause issues while serving the application or during the installation.

To Install the proper version of NodeJS:
```
nvm install
```

To set the version of node:
```
nvm use
```

NOTE: This must be set any time a new terminal window is opened on this repository.

Install dependencies with:

```
npm install
```

Run locally with:

```
npm run dev
```

(Optional) Run ExpressJS API separately with with:

```
npm run api
```

(Optional) Run VueJS Front-end independently with:

```
npm run serve
```

### Deployment

Ensure AWS cli is installed
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

Mac version of instructions:
```
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg ./AWSCLIV2.pkg -target /
aws configure
```

Create an s3 bucket with static hosting enabled and update the serverless.yml
```
# in serverless.yml change this to represent your bucket
custom: 
  s3Sync: 
    - bucketName: yourbucketnamegoeshere
```

Deploy with:

```
npm run build && serverless deploy
```

After running deploy, you can visit the URL listed:

```bash
endpoints:
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  api: aws-node-express-api-dev-api
layers:
  None
```

## Anatomy of the template

This template configures a single function, `api`, which is responsible for handling all incoming requests thanks to the `httpApi` event. To learn more about `httpApi` event configuration options, please refer to [httpApi event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api/). As the event is configured in a way to accept all incoming requests, `express` framework is responsible for routing and handling requests internally. Implementation takes advantage of `serverless-http` package, which allows you to wrap existing `express` applications. To learn more about `serverless-http`, please refer to corresponding [GitHub repository](https://github.com/dougmoscrop/serverless-http).

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).

### Creating this template

- Generated this example using `serverless` command and selecting `Express API`
- Installed serverless using `serverless plugin install -n serverless-offline`
- Added `serverless-offline` to `dev` script
- Moved Express logic into its own folder
- Used `vue create` generator to build scaffolding for VueJS
- Added `concurrently` to `dev` to run both front-end and back-end with one command
