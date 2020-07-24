const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { request } = require("express");

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("server is up and running on port 5000");
});

//ROUTES//

//create a partner

    app.post("/partners", async(req, res) =>{
        try {
            const { nev } = req.body;
            const newCegInfo = await pool.query(
            "INSERT INTO ceginfo (nev) VALUES($1) RETURNING *", 
            [nev]);

            res.json(newCegInfo.rows[0]);

        } catch (error) {
            console.error(err.message);
        }
})


//get all partners

    app.get("/partners", async(req, res) =>{
        try {
            const allPartners = await pool.query("SELECT * FROM ceginfo");
            res.json(allPartners.rows);

        } catch (error) {
            console.error(err.message);
        }
    })

//get a partner

    app.get("/partners/:id", async(req, res)=>{
        try {
            const {id} = req.params;
            const partner = await pool.query("SELECT * FROM ceginfo WHERE ceginfo_id = $1", [id]);

            res.json(partner);
        } catch (error) {
            console.error(err.message);
        }
    })

//update a partner

    app.put("/partners/:id", async(req, res)=>{
        try {
            const {id} = req.params;
            const {nev} = req.body;
            const updatePartner = await pool.query("UPDATE ceginfo SET nev = $1 WHERE ceginfo_id = $2", 
            [nev, id]);

            res.json("Partner was updated!");
        } catch (error) {
            console.error(err.message);
        }

    })

//delete a partner

    app.delete("/partners/:id", async(req, res)=>{
        try {
            const {id} = req.params;
            const deletePartner = await pool.query("DELETE FROM ceginfo WHERE ceginfo_id = $1", [id]);
            
            res.json("Partner was deleted!")
        } catch (error) {
            console.error(err.message);
        }
    })