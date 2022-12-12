# Node.js server

Create a simple Node.js server.
   
# Task description

The task is to create a file server with Node which can handle HTTP GET requests. Please implement the following steps to do this. 

1. Create a file server that listens on localhost, port `9000`.
2. Serve the text content of the file `testText.txt` when an HTTP GET request is made to that port.
3. HTTP requests with methods other than GET (e.g. HTTP POST) should result in 404 (Not Found) response code.

# Local development

To help you a little bit, we have created a `run.js` file which is executed via `npm start` command. This file executes the `makeServer()` function which you should implement. You can test your implementation locally by running `npm start` and opening `http://localhost:9000` in your browser.

# Setup

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests once (this will be used to evaluate your solutions)
3. `npm run test:watch` - run all tests in _watch mode_ (optionally, you can use it locally if you prefer)

## Good Luck!
