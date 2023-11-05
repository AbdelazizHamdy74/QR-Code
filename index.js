import inquirer from "inquirer"; // const inquirer = require("inquirer");
import qr from "qr-image"; //   var qr = require("qr-image");
import fs from "fs"; //   const fs = require("fs");

inquirer
  .prompt([
    {
      name: "URL",
      message: "What the user URL?",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qrImage.png"));

    fs.writeFile("URL.text", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
