#!/bin/sh

cd /front-end
npm docker:start || {
    npm install
    npm docker:start
}
