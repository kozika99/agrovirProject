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
            //ceginfo tabla
            const {nev, cegforma, adoszam, cegjegyzekszam, bankszamlaszam} = req.body;
            
            const newCegInfo = await pool.query(
            "INSERT INTO ceginfo (nev, cegforma, adoszam, cegjegyzekszam, bankszamlaszam) VALUES($1, $2, $3, $4, $5) RETURNING *", 
            [nev, cegforma, adoszam, cegjegyzekszam, bankszamlaszam]);

            res.json(newCegInfo.rows[0]);

            //cegelerhetoseg tabla
            const {telepules, cim, telefonszam, megjegyzes} = req.body;

            const newCegElerhetoseg = await pool.query(
            "INSERT INTO cegelerhetoseg(telepules, cim, telefonszam, megjegyzes) VALUES($1, $2, $3, $4) RETURNING *",
            [telepules, cim, telefonszam, megjegyzes]);

            res.json(newCegElerhetoseg[0]);
            
            
        } catch (error) {
            console.error(error.message);
        }
})


//get all partners

    app.get("/partners", async(req, res) =>{
        try {
            const allPartners = await pool.query("SELECT * FROM ceginfo INNER JOIN cegelerhetoseg ON ceginfo.cegId=cegelerhetoseg.cegId;");
            res.json(allPartners.rows);

        } catch (error) {
            console.error(error.message);
        }
    })

//get a partner

    app.get("/partners/:id", async(req, res)=>{
        try {
            const {id} = req.params;
            const partner = await pool.query("SELECT * FROM ceginfo INNER JOIN cegelerhetoseg ON ceginfo.cegId=cegelerhetoseg.cegId WHERE ceginfo.cegId = $1", [id]);

            res.json(partner);
        } catch (error) {
            console.error(error.message);
        }
    })

//update a partner

    app.put("/partners/:id", async(req, res)=>{
        try {
            const {id} = req.params;

            const {nev, cegforma, adoszam, cegjegyzekszam, bankszamlaszam} = req.body;
            const updateCegInfo = await pool.query("UPDATE ceginfo AS ci SET nev = $1, cegforma = $2, adoszam = $3, cegjegyzekszam = $4, bankszamlaszam = $5 FROM cegelerhetoseg AS ce WHERE ci.cegid = ce.cegid AND ci.cegid = $6", 
            [nev, cegforma, adoszam, cegjegyzekszam, bankszamlaszam, id]);

            const {telepules, cim, telefonszam, megjegyzes} = req.body;
            const updateCegElerhetoseg = await pool.query("UPDATE cegelerhetoseg AS ce SET telepules = $1, cim = $2, telefonszam = $3, megjegyzes = $4 FROM ceginfo AS ci WHERE ci.cegid = ce.cegid AND ce.cegid = $5",
            [telepules, cim, telefonszam, megjegyzes, id]);
            

            res.json("Partner was updated!");
        } catch (error) {
            console.error(error.message);
        }

    })

//delete a partner

    app.delete("/partners/:id", async(req, res)=>{
        try {
            const {id} = req.params;
            const deletePartner = await pool.query("DELETE FROM ceginfo WHERE cegId = $1;", [id]);
            
            res.json("Partner was deleted!")
        } catch (error) {
            console.error(error.message);
        }
    })