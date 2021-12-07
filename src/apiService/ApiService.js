import React from "react";

import axios from "axios";

const BASE_URL = "http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US";
const IMAGE_SPLASH_URL = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash";


export async function getChampions() {
  try {
    const getitems = await axios.get(`${BASE_URL}/champion.json`);
    // console.log(`Respuesta de la api ==> `, getitems);
    return getitems.data;
  } catch (error) {
    console.log(`Error aqui we ==>`, error);
  }
}

export async function getDetailChampion(idChampion) {
  try {
    const getDetails = await axios.get(
      `${BASE_URL}/champion/${idChampion}.json`
    );
    return getDetails.data;
  } catch (error) {
    console.log("Error al traer los detalles del campeon: ", error);
  }
}


export async function getImageChapion(idChampion) {
  try {
    const getImage = await axios.get(
      `${IMAGE_SPLASH_URL}/${idChampion}_0.jpg`
    );
    return getImage;
  } catch (error) {
    console.log("Error al traer la imagen del campeon: ", error);
  }
}
