import { pool } from "../db.js";

export const getBusiness = async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM business");
    res.send(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
