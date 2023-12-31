import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";connectDB();



const port =3500;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api/users", userRoutes);

// app.use(express.static("frontend/casgo-page"))

app.get("/",(req,res)=> res.send("server running"))

app.use(notFound);
app.use(errorHandler);



app.listen(port,()=>{
    console.log(`Sever started on port ${port}`);
})