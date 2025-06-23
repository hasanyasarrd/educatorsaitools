const express = require('express');
const { pool } = require('../db');
const router = express.Router();

// Geri bildirim kaydı
router.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await pool.query(
            'INSERT INTO feedback (name, email, message) VALUES ($1, $2, $3)',
            [name, email, message]
        );
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Geri bildirim kaydında hata:', error);
        res.status(500).json({ error: 'Veri kaydedilemedi.' });
    }
});

module.exports = router;
