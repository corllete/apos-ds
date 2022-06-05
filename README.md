![Tests Status](https://github.com/corllete/apos-ds/actions/workflows/tests.yml/badge.svg)

# What?

It's yet another design system but experimental and built for Nunjucks components, working on top of the awesome [Apostrophe](https://apostrophecms.com/) (version 3 alpha).

## Development / Demo install

Clone this and
```sh
npm i
```

Be sure you have mongodb running. If you don't but you have `docker-compose` installed - we got your back! Just do:
```sh
docker-compose up -d
```
It'll take a while but only the first time. Promise.

When you are ready playing stop your mongo:
```sh
docker-compose down
```

Your database will be saved no matter that. If you want to completely remove it:
```sh
docker volume ls
```

You should see `apos-ds_mongodb-data` (or similar if you cloned in different than the default folder).
Execute `docker volume rm apos-ds_mongodb-data` to remove it.

## Run it

You should have mongodb running on default port.

The demo app `packages/app` is slightly modified [Apostrophe 3 boilerplate](https://github.com/apostrophecms/a3-boilerplate).
In order to be able to manage (add, edit pages, etc) your installation, you have to create user:
```sh
cd packages/app && node app @apostrophecms/user:add dev admin
```
This will create user `dev` with administration permissions.

From the project root or inside `packages/app` run:
```sh
npm run dev
```

To disable Webpack Live and Hot Reload (for some reason):
```sh
WP_HOT=0 run dev
```

Some instructions are available on the initial home page. Log in and create new page with type `Design System`.

> NOTE: if you see an error in your terminal stating something along lines `slug already in use`, you need to reset
> your database (the design system is now parked at `/design-system` route). More information is available at the 
> welcome screen of the app.

## Where are the docs?

[The integration guide](packages/apos-ds)

Take a look at the [`packages/app` for example integration](packages/app), stories and "Material Design Components" implementation.

Run `npm run dev` and open `http://localhost:3000/design-system`. Read the stories (they are documented) and the special `Docs` stories category and inspect the code in `packages/app`.

## Where is the npm package?

`npm i @corllete/apos-ds@alpha`

[The full story](packages/apos-ds)

## A quick look

![Story view](./story-view.png)
