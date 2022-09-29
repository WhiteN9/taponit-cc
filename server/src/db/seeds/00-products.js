/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  return knex
    .raw("TRUNCATE TABLE products RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("products").insert([
        {
          product_title: "Eevee",
          description: "Eevee family",
          url: "https://archives.bulbagarden.net/media/upload/e/e2/133Eevee.png",
          price: 101,
          likes: 5,
        },
        {
          product_title: "Vaporeon",
          description: "Eevee family",
          url: "https://archives.bulbagarden.net/media/upload/f/fd/134Vaporeon.png",
          price: 120,
          likes: 2,
        },
        {
          product_title: "Flareon",
          description: "Eevee family",
          url: "https://archives.bulbagarden.net/media/upload/d/dd/136Flareon.png",
          price: 150,
          likes: 1,
        },
        {
          product_title: "Jolteon",
          description: "Eevee family",
          url: "https://archives.bulbagarden.net/media/upload/b/bb/135Jolteon.png",
          price: 110,
          likes: 0,
        },
        {
          product_title: "Umbreon",
          description: "Eevee family",
          url: "https://archives.bulbagarden.net/media/upload/archive/3/3d/20190406150615%21197Umbreon.png",
          price: 200,
          likes: 5,
        },
        {
          product_title: "Sylveon",
          description: "Eevee family",
          url: "https://archives.bulbagarden.net/media/upload/e/e8/700Sylveon.png",
          price: 200,
          likes: 15,
        },
        {
          product_title: "Espeon",
          description: "Eevee family",
          url: "https://archives.bulbagarden.net/media/upload/a/a7/196Espeon.png",
          price: 400,
          likes: 54,
        },
        {
          product_title: "Glaceon",
          description: "Eevee family",
          url: "https://archives.bulbagarden.net/media/upload/archive/2/23/20200305220458%21471Glaceon.png",
          price: 100,
          likes: 52,
        },
        {
          product_title: "Leafeon",
          description: "Eevee family",
          url: "https://archives.bulbagarden.net/media/upload/f/f5/470Leafeon.png",
          price: 100,
          likes: 56,
        },
        {
          product_title: "Gigantamax Eevee",
          description: "Eevee family",
          url: "https://archives.bulbagarden.net/media/upload/2/2e/133Eevee-Gigantamax.png",
          price: 777,
          likes: 56,
        },
        {
          product_title: "The Next Eevee",
          description: "Eevee family",
          url: "https://archives.bulbagarden.net/media/upload/archive/0/0d/20210206174230%21025Pikachu.png",
          price: 1000,
          likes: 0,
        },
      ]);
    });
}
