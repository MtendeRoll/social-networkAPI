# Social Network Api

This an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Table of contents

- [Installation](#installation)
- [Application Criteria](#application-criteria)
- [Links](#links)
- [Tools Used](#tools-used)
- [Application Gif](#application-gif)
- [Walkhrough Video](#walkthrough-video)
- [License](#license)

## Installation

The JSON file will have the necessary dependencies. Type this in your command line:

```
npm i
```

Start the application :

```
npm start
```

Open Insomnia test out routes

## Application Criteria

GIVEN a social network API:

- WHEN I enter the command to invoke the application
  THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
  THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
  THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
  THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Links

- [Github Repository](https://github.com/MtendeRoll/social-networkAPI)

## Tools Used

- [Express JS](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Datejs](https://www.npmjs.com/package/datejs)

## Application Gif

- ![Mock-Up](./assets/gif/social-networkAPI-mockup.gif)

## Walkthrough Video

- [Part 1](https://drive.google.com/file/d/1vRnLtUzB23hW_0LMY7gGR1Z5f6gLiszz/view)
  Part 1 shows the GET request for all users, users by Id, all thoughts, thoughts by Id and how to create a user
- [Part 2](https://drive.google.com/file/d/1akwx1Fv6kdBxnmVSdwcwb925XOnQEAUi/view)
  Part 2 shows the POST request for thoughts, reactions and friends aswell as a PUT request for users
- [Part 3](https://drive.google.com/file/d/10dfjLdGVfexT9uJcrbz0dSdqz4b9Z8oo/view)
  Part 3 shows the DELETE request for thoughts by Id, reactions, friends and users

## License

- [MIT](./LICENSE)

MIT License Copyright (c) [2022] Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
