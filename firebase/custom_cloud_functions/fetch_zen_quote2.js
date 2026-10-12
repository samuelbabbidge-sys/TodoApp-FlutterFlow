const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.fetchZenQuote2 = functions.https.onRequest(async (req, res) => {
  // forces open CORS headers for all incoming frontend connections
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  try {
    // targets the explicit JSON array path /api/quotes
    const response = await fetch("https://zenquotes.io/api/quotes", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return res
        .status(200)
        .send("“Keep moving forward. Great things take time.”\n\n— Unknown");
    }

    const quotesList = await response.json();

    // Verify the list returned an array
    if (!quotesList || !Array.isArray(quotesList) || quotesList.length === 0) {
      return res
        .status(200)
        .send("“Keep moving forward. Great things take time.”\n\n— Unknown");
    }

    // pick a random entry out of the list
    const randomIndex = Math.floor(Math.random() * quotesList.length);
    const selectedQuote = quotesList[randomIndex];

    const text = selectedQuote.q || "Inspirational message placeholder";
    const author = selectedQuote.a || "Unknown Author";

    // return the selected quote and author
    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(`“${text}”\n\n— ${author}`);
  } catch (error) {
    // on error print message to google cloud console and sets a place holder message
    console.error("ZenQuotes Fetch Error: ", error.message);
    return res
      .status(200)
      .send("“Keep moving forward. Great things take time.”\n\n— Unknown");
  }
});
