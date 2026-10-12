const admin = require("firebase-admin/app");
admin.initializeApp();

const fetchZenQuote2 = require("./fetch_zen_quote2.js");
exports.fetchZenQuote2 = fetchZenQuote2.fetchZenQuote2;
