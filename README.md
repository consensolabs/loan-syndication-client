# SyndLend client web application
The web app will communicate with the CorDapp built using [https://github.com/koshikraj/loan-syndication](https://github.com/koshikraj/loan-syndication). It is a private project for now. You can use the [this](http://projects.koshikraj.com:8888/api/) RPC end point or downloan and run the corda nodes locally from [this](http://jenkins.consensolabs.com:8080/job/deploy-syndlend-corda-nodes/) Jenkins artifacts.


> The front-end application must be deployed by every SyndLend entity so that they can communicate with the Corda nodes.
Clone the source code from the GitHub repository.

## Quick Start

```text
git clone https://github.com/consensolabs/syndlend-client
```

Install the node dependencies.

```text
yarn install
```

Run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```text
yarn start
```

Finally, the build for the production can also be generated 

```text
yarn build
```
