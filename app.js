// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const express = require("express");


const PORT = 6999;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
app.listen(PORT, () => console.log(`server running on port ${PORT}`));