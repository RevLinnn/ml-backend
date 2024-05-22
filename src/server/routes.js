const {
  postPredictHandler,
  getHistoriesHandler,
} = require("./handler");

const routes = [

  //prediksi
  {
    path: "/predict",
    method: "POST",
    handler: postPredictHandler,
    options: {
      payload: {
        allow: "multipart/form-data",
        multipart: true,
        maxBytes: 1000 * 1000,
      },
    },
  },

  //histori
  {
    path: "/predict/histories",
    method: "GET",
    handler: getHistoriesHandler,
  },
];

module.exports = routes;