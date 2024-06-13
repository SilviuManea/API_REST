const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerDef'); // Import the Swagger configuration

// Server config
const app = express();
const PORT = 3000;
const JSON_SERVER_URL = 'http://localhost:5000';

app.use(bodyParser.json());

// Swagger route
const swaggerSpec = swaggerJsDoc(swaggerDocs);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes

// Create a user
app.post('/users', async (req, res) => {
  try {
    const response = await axios.post(`${JSON_SERVER_URL}/users`, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    if (res.status(404)) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(`${JSON_SERVER_URL}/users`);
    res.json(response.data);
  } catch (error) {
    if (res.status(404)) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
});

// Get one user by id
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${JSON_SERVER_URL}/users/${id}`);
    res.json(response.data);
  } catch (error) {
    if (res.status(404)) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
});

// Update a user partially / specific attributes
app.patch('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.patch(`${JSON_SERVER_URL}/users/${id}`, req.body);
    res.json(response.data);
  } catch (error) {
    if (res.status(404)) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
});

// Update a user completely / entire object
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.put(`${JSON_SERVER_URL}/users/${id}`, req.body);
    res.json(response.data);
  } catch (error) {
    if (res.status(404)) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
});

// Delete user, only if it doesn't have any houses
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const userResponse = await axios.get(`${JSON_SERVER_URL}/users/${id}`);
    const user = userResponse.data;
    const houses = user.houses;

    if (houses && houses.length > 0) {
      return res.status(400).send('User has houses, cannot delete');
    }

    await axios.delete(`${JSON_SERVER_URL}/users/${id}`);
    res.status(204).send();

  } catch (error) {
    if (res.status(404)) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send(error.message);
    }

  }
});

// Create a house for a user
app.post('/users/:id/houses', async (req, res) => {
  const { id } = req.params;
  try {
    const userResponse = await axios.get(`${JSON_SERVER_URL}/users/${id}`);
    const user = userResponse.data;
    const newHouse = { ...req.body, id: Date.now() };
    if (user.houses == null) {
      user.houses = [];
    }
    user.houses.push(newHouse);

    const response = await axios.put(`${JSON_SERVER_URL}/users/${id}`, user);
    res.status(201).json(newHouse);
  } catch (error) {
    if (res.status(404)) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
});

// Get all the houses for specific user
app.get('/users/:id/houses', async (req, res) => {
  const { id } = req.params;
  const { city, street, country } = req.query;
  try {
    const response = await axios.get(`${JSON_SERVER_URL}/users/${id}`);
    let houses = response.data.houses;

    if (city) houses = houses.filter(house => house.city === city);
    if (street) houses = houses.filter(house => house.street === street);
    if (country) houses = houses.filter(house => house.country === country);

    res.json(houses);
  } catch (error) {
    if (res.status(404)) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
});

// Update a house for a user
app.put('/users/:id/houses/:houseId', async (req, res) => {
  const { id, houseId } = req.params;
  try {
    const userResponse = await axios.get(`${JSON_SERVER_URL}/users/${id}`);
    const user = userResponse.data;

    const houseIndex = user.houses.findIndex(house => house.id == houseId);
    if (houseIndex === -1) return res.status(404).send('House not found');

    user.houses[houseIndex] = { ...req.body, id: houseId };

    const response = await axios.put(`${JSON_SERVER_URL}/users/${id}`, user);
    res.json(user.houses[houseIndex]);
  } catch (error) {
    if (res.status(404)) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
});

// Delete a house for a user
app.delete('/users/:id/houses/:houseId', async (req, res) => {
  const { id, houseId } = req.params;
  try {
    const userResponse = await axios.get(`${JSON_SERVER_URL}/users/${id}`);
    const user = userResponse.data;

    const houseIndex = user.houses.findIndex(house => house.id == houseId);
    if (houseIndex === -1) return res.status(404).send('House not found');

    user.houses.splice(houseIndex, 1);

    await axios.put(`${JSON_SERVER_URL}/users/${id}`, user);
    res.status(204).send();
  } catch (error) {
    if (res.status(404)) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
});

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
  console.log(`SwaggerUI can be accesed at http://localhost:${PORT}/api-docs`)
});
