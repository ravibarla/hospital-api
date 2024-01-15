//swagger
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Rest API docs",
      version: "1.0.0",
      description: "a simple express library app",
    },
    servers: [
      {
        url: "http://localhost:3200",
      },
    ],
    component: {
      securitySchemas: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerspec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  //swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerspec));
  //docs in json format
  app.get("docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerspec);
  });
};

export default swaggerDocs;
