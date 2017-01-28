# Yeller-chat

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies
    
    ```
    cd path/to/yeller-chat; npm install

    cd app; npm install
    ```
3. If this is a new project create a new sqlite database file

    ```
    touch data/database.sqlite
    ```

3. Start your app
    
    ```
    npm start
    ```

4. (Build client)

    ```
        cd app
        gulp
    ```

    Includes
    * build watcher
    * browsersync
    * sass compiler

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## TODO

- [x] Create User service
- [x] Create View for adding user "login page"
- [ ] Create view for messaging window
- [ ] ~~Render active User list~~ (No way to hook into authentication)
- [ ] ~~Validate / sanitize data~~ (No real good solution with feathersjs)
- [ ] Parse messages for sound emojis double squar brackets will be delimiters  \[\[ ]]
- [ ] Sound bank
- [ ] Upload sound components
- [ ] server compress sounds
- [ ] clean out package.json

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

- Initial release

