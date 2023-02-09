module.exports = [
  "strapi::errors",
  "strapi::security",
  // "strapi::cors",
  {
    settings: {
      cors: {
        enabled: true,
        // headers: '*',
        origin: [
          "http://localhost",
          "http://localhost:3000",
          "http://localhost:1337",
        ],
      },
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
