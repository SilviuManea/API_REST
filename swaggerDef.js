const config = require('./config'); // Import the configuration

const PORT = config.port;


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'User API',
        version: '1.0.0',
        description: 'Users And Houses Management API'
    },
    servers: [
        {
            url: `http://localhost:${PORT}`,
            description: 'Silviu Development server'
        }
    ],
    tags: [
        {
            name: 'Users',
            description: 'Operations about users'
        },
        {
            name: 'Houses',
            description: 'Operations about houses'
        }
    ]
};

const swaggerDocs = {
    swaggerDefinition,
    apis: ['./swaggerDef.js'] // Point to this file for API definitions
};

module.exports = swaggerDocs;

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: 
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *           examples:
 *             response1:
 *                value: { "name": "Silviu Manea", "email": !!str silviumanea@example.com }
 *             
 *     responses:
 *       201:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *             examples:
 *               response1:
 *                 value: { "name": "Silviu Manea", "email": !!str silviumanea@example.com , "id": "user id number"}
 *             
 */

/**
* @swagger
* /users:
*   get:
*     summary: Retrieve a list of users
*     tags: 
*       - Users
*     responses:
*       200:
*         description: A list of users
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*                 properties:
*                   id:
*                     type: integer
*                   name:
*                     type: string
*                   email:
*                     type: string
*                   houses:
*                     type: array
*                     items:
*                       type: object
*                       properties:
*                         id:
*                           type: integer
*                         city:
*                           type: string
*                         street:
*                           type: string
*                         country:
*                           type: string
*/

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a single user
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: A single user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 houses:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       city:
 *                         type: string
 *                       street:
 *                         type: string
 *                       country:
 *                         type: string
 *       404:
 *         description: Error Not Found
 */

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Partially update a user
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *           examples:
 *             response1:
 *               value: { "name": "Silviu Manea", "email": !!str mynewemail@example.com }
 *  
 *     responses:
 *       200:
 *         description: The updated user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *             examples:
 *               response1:
 *                 value: { "name": "Silviu Manea", "email": !!str mynewemail@example.com ,"id": "user id number", "houses":["user house object/s, if any"]}
 *       404:
 *         description: Error Not Found
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Completely update a user
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               houses:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     city:
 *                       type: string
 *                     street:
 *                       type: string
 *                     country:
 *                       type: string
 *           examples:
 *             response1:
 *               value: { "name": "My New Name", "email": !!str mynewemail@example.com }
 *     responses:
 *       200:
 *         description: The updated user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 houses:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       city:
 *                         type: string
 *                       street:
 *                         type: string
 *                       country:
 *                         type: string
 *             examples:
 *               response1:
 *                 value: { "name": "My New Name", "email": !!str mynewemail@example.com , "id":"user id number" }
 *       404:
 *         description: Error Not Found
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *     responses:
 *       204:
 *         description: No Content
 *       400:
 *         description: User has houses, cannot delete
 *       404:
 *         description: Error Not Found
 */

/**
 * @swagger
 * /users/{id}/houses:
 *   post:
 *     summary: Create a new house for a user
 *     tags: 
 *       - Houses
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *               street:
 *                 type: string
 *               country:
 *                 type: string
 *           examples:
 *             response1:
 *               value: { "city": "Zaragoza", "street": "My street" ,"country": "ES"}
 *     responses:
 *       201:
 *         description: The created house
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 city:
 *                   type: string
 *                 street:
 *                   type: string
 *                 country:
 *                   type: string
 *             examples:
 *               response1:
 *                 value: { "city": "Zaragoza", "street": "My street" ,"country": "ES", "id": 1718315391151}
 *       404:
 *         description: Error Not Found
 */

/**
 * @swagger
 * /users/{id}/houses:
 *   get:
 *     summary: Retrieve all houses of a user
 *     tags: 
 *       - Houses
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         description: Filter by city
 *       - in: query
 *         name: street
 *         schema:
 *           type: string
 *         description: Filter by street
 *       - in: query
 *         name: country
 *         schema:
 *           type: string
 *         description: Filter by country
 *     responses:
 *       200:
 *         description: A list of houses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   city:
 *                     type: string
 *                   street:
 *                     type: string
 *                   country:
 *                     type: string
 *             examples:
 *               response1:
 *                 value: [{ "city": "Zaragoza", "street": "My street" ,"country": "ES", "id": 1718315391151}]
 *       404:
 *         description: Error Not Found
 */

/**
 * @swagger
 * /users/{id}/houses/{houseId}:
 *   put:
 *     summary: Completely update a house for a user
 *     tags: 
 *       - Houses
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *       - in: path
 *         name: houseId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The house ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *               street:
 *                 type: string
 *               country:
 *                 type: string
 *           examples:
 *             response1:
 *               value: { "city": "New Zaragoza", "street": "My New street" ,"country": "New Country"}
 *     responses:
 *       200:
 *         description: The updated house
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 city:
 *                   type: string
 *                 street:
 *                   type: string
 *                 country:
 *                   type: string
 *             examples:
 *               response1:
 *                 value: { "city": "New Zaragoza", "street": "My New street" ,"country": "New Country","id": "id number of the house"}
 *       404:
 *         description: Error Not Found
 */

/**
 * @swagger
 * /users/{id}/houses/{houseId}:
 *   delete:
 *     summary: Delete a house for a user
 *     tags: 
 *       - Houses
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *       - in: path
 *         name: houseId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The house ID
 *     responses:
 *       204:
 *         description: No Content
 *       404:
 *         description: House not found
 */
