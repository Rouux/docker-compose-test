#!/bin/sh

cd /front-end
npm start || {
    npm install
    npm rebuild sass
    npm start
}
