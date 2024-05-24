// // const express = require("express");
// // const mysql = require('mysql');
// // const cors = require('cors');

// // const app = express(); 
// // app.use(cors());
// // app.use(express.json())

// // const db = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'SubramanianG',
// //     password: 'Subramanian578',
// //     database: 'forms'
// // })


// // app.post('/forms', (req,res) => {
// //     const sql ="INSERT INTO form (Username,Mail_id,Password) VALUES (?,?,?)";
// //     const values = [
// //         req.body.Username,
// //         req.body.Mail_id,
// //         req.body.Password,
// //         // req.body.Level,
// //         // req.body.Venue,
// //         // req.body.Timing
// //     ]
// //     db.query(sql,values, (err, data) => {
// //         if(err) {
// //             return res.json("Errorgbhnrty")
// //         }
// //         return res.json(data);
// //     })
// // })




// // // app.post('/updateScores', (req, res) => {
// // //   const { id, Level , Venue , Timing } = req.body;
// // //   db.query(
// // //       "UPDATE form SET Level = ? , Venue = ? , Timing = ? WHERE id = ?",
// // //       [ Level , Venue , Timing , id],
// // //       (err, result) => {
// // //           if (err) {
// // //               res.send({ err: err });
// // //           } else {
// // //               res.send("Scores Updated");
// // //           }
// // //       }
// // //   );
// // // });


// // // app.post('/form', (req,res) => {
// // //   const sql ="UPDATE form SET ";
// // //   const values = [
// // //       // req.body.Username,
// // //       // req.body.Mail_id,
// // //       // req.body.Password,
// // //       req.body.Level,
// // //       req.body.Venue,
// // //       req.body.Timing
// // //   ]
// // //   db.query(sql,values, (err, data) => {
// // //       if(err) {
// // //           return res.json("Errorgbhnrty")
// // //       }
// // //       return res.json(data);
// // //   })
// // // })

// // // app.post('/login', (req,res) => {
// // //     const sql ="SELECT * FROM login WHERE Mail_id = ? AND Password =?";
// // //     db.query(sql, [req.body.email,req.body.password], (err, data) => {
// // //         if(err) {
// // //             return res.json("Error");
// // //         }
// // //         if(data.length > 0) {
// // //             return res.json("Success");
// // //         }else {
// // //             return res.json("failer");
// // //         }
// // //     })
// // // })

// // app.listen(3031, ()=> {
// //     console.log("listening");
// // })


// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");
// const app = express();
// app.use(express.json());
// app.use(cors());
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "login-form",
// });
// //Inserting data into the database
// app.post('/register', (req, res) => {
//     const username = req.body.username;
//     const email=req.body.email;
//     const password = req.body.password;
//    db.query(
//        "INSERT INTO users (username,email,password) VALUES(?,?,?)",[username,email,password],
//        (err,result)=>{
//              if(err){
//                  console.log(err);
//                 res.send("Error while registering");}
//              else {
//                  console.log(result);
//                     res.send("Values Inserted");

//              }
//        }
//    )
// });

// app.post('/login',(req,res)=>{
//        const email=req.body.email;
//        const password=req.body.password;

//        db.query(
//            "SELECT * FROM users WHERE email = ? AND password=?",[email,password],
//               (err,result)=>{
//                 if(err){
//                      res.send({err:err});
//                 }
//                 if(result.length>0){
//                      res.send(result);
//                 }else{
//                      res.send({message:"Wrong email/password combination!"});
//                 }
//               }
//        )
// });

// app.get('/users', (req, res) => {
//     db.query("SELECT username, email FROM users", (err, result) => {
//         if (err) {
//             res.send({ err: err });
//         } else {
//             res.send(result);
//         }
//     });
// });

// app.post('/updateScores', (req, res) => {
//     const { id, maths, physics, chemistry, electronics, electrical, computer } = req.body;
//     db.query(
//         "UPDATE users SET maths = ?, physics = ?, chemistry = ?, electronics = ?, electrical = ?, computer = ? WHERE id = ?",
//         [maths, physics, chemistry, electronics, electrical, computer, id],
//         (err, result) => {
//             if (err) {
//                 res.send({ err: err });
//             } else {
//                 res.send("Scores Updated");
//             }
//         }
//     );
// });



// app. listen (3001, () => {
//     console.log("running server");
// });


const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login-form",
});
//Inserting data into the database
app.post('/register', (req, res) => {
    const username = req.body.username;
    const email=req.body.email;
    const password = req.body.password;
   db.query(
       "INSERT INTO user (username,email,password) VALUES(?,?,?)",[username,email,password],
       (err,result)=>{
             if(err){
                 console.log(err);
                res.send("Error while registering");}
             else {
                 console.log(result);
                    res.send("Values Inserted");

             }
       }
   )
});

app.post('/login',(req,res)=>{
       const email=req.body.email;
       const password=req.body.password;

       db.query(
           "SELECT * FROM user WHERE email = ? AND password=?",[email,password],
              (err,result)=>{
                if(err){
                     res.send({err:err});
                }
                if(result.length>0){
                     res.send(result);
                }else{
                     res.send({message:"Wrong email/password combination!"});
                }
              }
       )
});

app.get('/users', (req, res) => {
    db.query("SELECT username, email FROM user", (err, result) => {
        if (err) {
            res.send({ err: err });
        } else {
            res.send(result);
        }
    });
});

app.post('/updateScores', (req, res) => {
    const { id, level , slot , venue } = req.body;
    db.query(
        "UPDATE user SET level = ? , slot = ? , venue = ? WHERE id = ?",
        [level , slot , venue , id],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            } else {
                res.send("Scores Updated");
            }
        }
    );
});



app. listen (3001, () => {
    console.log("running server");
});