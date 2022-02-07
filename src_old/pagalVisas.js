import { readFile, writeFile } from "fs/promises";
import express from "express";

export const router = express.Router();

router.get("/", async (req, res) => {
    try {
      
      const cekiai = JSON.parse(
        await readFile("data/cekiai.json", {
          encoding: "utf-8",
        }),
      );
      for (const cekis of cekiai.cekiai) {
        for (const preke of cekis.prekes) {
          const suma = preke.find((k) =>
            k === preke.kaina
          );
        //   if (islaiduTipas) {
        //     preke.tipas = islaiduTipas.pavadinimas;
        //   }
        }
      }
      res.render("pagalVisas", {
        title: "Ataskaita",
        list: cekiai.cekiai,
      });
    } catch (err) {
      res.status(500).end(`Įvyko klaida: ${err.message}`);
    }
  });