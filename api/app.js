import express from 'express';
import authRoute from "./routes/auth.route.js"
import testRoute from "./routes/test.route.js"
import cookieParser from 'cookie-parser';
import cors from "cors";

const app = express();

app.use(cors({origin: process.env.CLIENT_URL,credentials: true}))
//app.use(cors({credentials: true}));
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoute);
app.use("/api/test",testRoute);

app.listen(8800,() => {  
console.log("Server is running")
});



// Instead of installing nodemon.js we have console ninja for restarting our server. 
// So syntax for that is : console-ninja node --watch app.js