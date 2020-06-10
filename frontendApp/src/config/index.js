const config = {
  development: {
    backend: "http://localhost:5000",
    axios: {
      baseURL: "http://localhost:5000/api/v1",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    },

  },
  production: {
    backend: "",
    axios: {
      baseURL: "",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    },
  },
};

export default config[process.env.NODE_ENV || "development"];
