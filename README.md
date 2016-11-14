# MKeepWeb-React
Web client for Money Keeper API

##Installation

Preparing:

```
$ npm install -g n
$ n 7.0.0
```

Installation:

```
$ npm install
```

##Running

Run next commands in 2 separate terminals:
```
$ npm run nodemon
```
```
$ npm run webpack-devserver
```

##Possible problems

- When I do `npm install` without `sudo` I see this
```
npm ERR! Error: EACCES, mkdir '/home/user_name/.npm/what_ever'
```
Read this [article](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

- When I do `npm install` I see something like this:
```
npm ERR! EEXIST, open '/home/user_name/.npm/d61b685a-ry-npm-lodash-4-16-6-package-tgz.lock'
```
In this case you have to install libs one by one

- When I do `npm install` without `sudo` I see this
```
npm ERR! Cannot find module 'internal/fs'
```
Install latest stable `npm` and `node` and do `$ sudo rm -rf /usr/local/lib/node_modules/`

##Dev tools
[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

Install extension and restart browser

