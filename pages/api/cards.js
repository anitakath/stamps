
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

export default function handler(req, res) {
  if (req.method === "GET") {
    const cards = [
      {
        name: "Café Paris",
        id: "aaa",
        type: "aaa",
        added: "date",
        img: "/café/café-latte.jpg",
      },
      {
        name: "Café London",
        id: "bbb",
        type: "ccc",
        added: "date",
        img: "/café/café-london.jpg",
      },
      {
        name: "café Prag",
        id: "ccc",
        type: "ccc",
        added: "date",
        img: "/café/café-milk.jpg",
      },
    ];

    return res.status(200).json(cards);
  }
}
