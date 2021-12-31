# GiphyAngularApp

## Overview

This is a sample app with an API connection to the [Giphy](https://developers.giphy.com/docs/api/endpoint/#search) web service.

Here you can try the [demo](https://giphy-sample.herokuapp.com/).

Keep in mind that it's a Heroku sandbox server and requires **30 seconds** on the initial start. After 30 minutes of inactivity will go to sleep mode.

The application is written completely from scratch. Likewise, all the files structure is my personal preference.

## Features

- Search by multiple tags
- Load more images (9 per load)
- **Lazy modules** loading on route change. Now only one route.
- **Mobile** first and responsive
- **Accessibility** mostly covered
- Pre-commit linting and prettification
- Two **color themes**

## Unit tests

The application serves only as an example and is not production-ready. Therefore I've written only a few tests within
`src\app\features\home\home\home.component.spec.ts`

## Libraries used

- Angular
- Angular material
- Angular Flex-Layout
- Husky

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
