require("dotenv").config();
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const pdf = require("html-pdf");
const path = require("path");
const morgan = require("morgan");

const app = require("express")();
const port = process.env.PORT || 8080;
const uri = process.env.URI;

// Define font files
var fonts = {
  Roboto: {
    normal: "fonts/Roboto-Regular.ttf",
    bold: "fonts/Roboto-Medium.ttf",
    italics: "fonts/Roboto-Italic.ttf",
    bolditalics: "fonts/Roboto-MediumItalic.ttf"
  }
};

var PdfPrinter = require("pdfmake");
var printer = new PdfPrinter(fonts);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(morgan.dev());
app.use(cors());

(async () => {
  try {
    let client = await MongoClient.connect(uri);

    const col = client.db("thumbstack").collection("items");

    app.get("/", async (req, res) => {
      let result = await col.find({}).toArray();
      console.log(result);
      res.json({ message: "data", data: result });
    });

    app.get("/addItem", async (req, res) => {
      let result = await col.insertMany([
        {
          itemName: "Cake",
          quantity: 0,
          price: 300
        },
        {
          itemName: "Donut",
          quantity: 0,
          price: 200
        },
        {
          itemName: "Pastries",
          quantity: 0,
          price: 150
        }
      ]);

      res.json({ mesage: "Inserted", data: result });
    });

    app.post("/add", async (req, res) => {
      console.log(req);
      const { user, result, totalPrice } = req.body;

      let data = {
        content: [
          { text: `${user} - Rs.${totalPrice}`, style: "header" },
          { text: "Jackinos", style: "subheader" },
          {
            style: "tableExample",
            table: {
              body: [[{ text: "Item Name" }, "Quantity", "Price (RS)"]]
            }
          }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
          },
          subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5]
          },
          tableExample: {
            margin: [0, 5, 0, 15]
          },
          tableHeader: {
            bold: true,
            fontSize: 13,
            color: "black"
          }
        }
      };

      result.forEach(({ itemName, quantity, price }) => {
        data.content[2].table.body.push([itemName, quantity, price]);
      });

      console.log(data);

      let pdfDoc = printer.createPdfKitDocument(data, {});

      // pdfDoc.pipe(fs.createWriteStream("document.pdf"));
      // pdfDoc.end();

      // var file = fs.createReadStream("./yarn.lock");
      // var stat = fs.statSync("./yarn.lock");
      // res.setHeader("Content-Length", stat.size);
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=input.pdf");

      // console.log(pdfDoc);

      // // pipe the stream to response
      pdfDoc.pipe(res);
      pdfDoc.end();

      // res.download();
      // file.pipe(res);

      //res.send("Okay");
    });

    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  } catch (e) {
    console.error(`Error Occured : `, e);
  }
})();
