import pool from "../database";

export default function handleTest(req, res) {
    try {
        const result = await pool.query('SELECT * FROM movies')
        res.status(200).json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "erro de consulta"})
    }
}