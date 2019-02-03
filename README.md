# issuable

manage your github issues with ease!

[try the demo](https://issuable.now.sh)

## how to use

### basic usage

1. submit your github personal access token
2. select a repository
3. sort issues as you like!

### custom sorting option: experimental feature

*note: there is currently no way to set custom sorting on touch screens.*

when selected on the 'custom' sort option:

1. select an issue in the list
2. use the UP and DOWN arrow keys to reorder the issue

## how to run

### run in dev mode

```
git clone https://github.com/sheminusminus/issuable
cd issuable
yarn
yarn start
```

### run tests

`yarn test`

### build and run for production

```
npm i -g simplehttpserver
cd issuable
yarn build
cd build
simplehttpserver
```

then visit [localhost:8000](http://localhost:8000) in your browser.

## additional info

this was bootstrapped with create-react-app (first time i've ever used CRA).
to access additional build info or edit build scripts/configs, run:

`yarn eject`
