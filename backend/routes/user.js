const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const result = await pool.query(
        'INSERT INTO customers (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
};
