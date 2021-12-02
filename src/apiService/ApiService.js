import React from "react";

import axios from "axios";

export async function getChampions() {
  try {
    const getitems = await axios.get(
      "http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion.json"
    );
    // console.log(`Respuesta de la api ==> `, getitems);
    return getitems.data;
  } catch (error) {
    console.log(`Error aqui we ==>`, error);
  }
}
