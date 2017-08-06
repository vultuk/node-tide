# node-tide [![NPM version](https://badge.fury.io/js/node-tide.svg)](https://npmjs.org/package/node-tide) [![Build Status](https://travis-ci.org/vultuk/node-tide.svg?branch=master)](https://travis-ci.org/vultuk/node-tide)

> A Node module to assist with connections to the Tide business banking API

## Installation

```sh
$ npm install --save node-tide
```

## Quick Usage Guide

Below is a quick guide to using the node-tide module, you can see full information in the [documentation](./docs/index.md). There is also a [quick example application](https://github.com/vultuk/node-tide-example) available showing full integration with expressJs.

### Getting the Authentication URL

You can easily get the URL required to authenticate against the Tide OAuth2 API.

#### Javascript
```js
var nodeTide = require('node-tide');

// Create a new Tide application
var tide = new nodeTide.Tide();

// Generate the OAuth2 URL the user needs to authenticate
var authenticationUrl = nodeTide.auth.generateAuthUrl({
  applicationName: "Node Tide Application",
  redirectUrl: "https://mytideapp.com/tide/auth"
});

console.log(authenticationUrl);
```

#### Typescript
```ts
import { Tide, AuthenticationConfig } from "node-tide";

// Create a new Tide application
let tide = new Tide();

// Generate the OAuth2 URL the user needs to authenticate
let authenticationUrl: string = tide.auth.generateAuthUrl({
  applicationName: "Node Tide Application",
  redirectUrl: "https://mytideapp.com/tide/auth"
} as AuthenticationConfig);

console.log(authenticationUrl);
```

### Pulling a list of companies

Once you have authenticated you can then pull a list of companies for the user.

#### Javascript
```js
var nodeTide = require('node-tide');
var accessToken = "my4cc35570k3n"; // From authentication

// Create a new Tide application
var tide = new nodeTide.Tide(accessToken);

// Gets a list of companies
tide.companies.all()
  .then(function(companies) {
    for (var i = 0; i < companies.length; i++) {
      console.log(companies[i].name);
    }
  })
```

#### Typescript
```ts
import { Tide, Company } from "node-tide";
let accessToken: string = "my4cc35570k3n"; // From authentication

// Create a new Tide application
let tide = new Tide(accessToken);

// Gets a list of companies
this.companies.all()
  .then((companies: Company[]) => {
    companies.forEach((company: Company) => {
      console.log(company.name);
    })
  })
```

### Pulling a list of accounts

Once you have a company ID you can then pull a list of accounts associated wtih a company.

#### Javascript
```js
var nodeTide = require('node-tide');
var accessToken = "my4cc35570k3n"; // From authentication
var companyId = 182736; // From the company list

// Create a new Tide application
var tide = new nodeTide.Tide(accessToken);

// Gets a list of accounts
tide.accounts.all(companyId)
  .then(function(accounts) {
    for (var i = 0; i < accounts.length; i++) {
      console.log(accounts[i].name);
    }
  })
```

#### Typescript
```ts
import { Tide, Account } from "node-tide";
let accessToken: string = "my4cc35570k3n"; // From authentication
let companyId: number = 182736; // From the company list

// Create a new Tide application
let tide = new Tide(accessToken);

// Gets a list of accounts
this.accounts.all(companyId)
  .then((accounts: Account[]) => {
    accounts.forEach((account: Account) => {
      console.log(account.name);
    })
  })
```

### Pulling a list of transactions

Once you have an account ID you can then pull a list of transactions from an account.

#### Javascript
```js
var nodeTide = require('node-tide');
var accessToken = "my4cc35570k3n"; // From authentication
var accountId = 60192; // From the company list

// Create a new Tide application
var tide = new nodeTide.Tide(accessToken);

// Gets a list of accounts
tide.transactions.all(accountId)
  .then(function(transactions) {
    for (var i = 0; i < accounts.length; i++) {
      console.log(transactions[i].amount);
    }
  })
```

#### Typescript
```ts
import { Tide, Transaction } from "node-tide";
let accessToken: string = "my4cc35570k3n"; // From authentication
let accountId: number = 60192; // From the company list

// Create a new Tide application
let tide = new Tide(accessToken);

// Gets a list of accounts
this.transactions.all(accountId)
  .then((transactions: Transaction[]) => {
    transactions.forEach((transaction: Transaction) => {
      console.log(transaction.amount);
    })
  })
```

It is also possible to filter transactions by reference using `this.transactions.findReference(accountId, 'My Reference')` and also by date range using `this.transactions.findDateRange(accountId, moment().subtract(2, 'days'))`


## License

MIT © [Simon Skinner](https://twitter.com/vultuk)
