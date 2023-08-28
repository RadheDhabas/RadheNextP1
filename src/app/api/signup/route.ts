import sqlDB from "../../../dbConfig/dbConfig";
import mysql from 'mysql2/promise';
import {NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import User from '../../../models/UserModel';



export async function POST(req: Request){
    const db = await sqlDB();
    try {
        const reqBody = await req.json();
        const {name, email, password} = reqBody

        // hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
       let result =  await db.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, password]
      );  
      console.log(result);  
      db.end();
        return NextResponse.json({
            message: "User created successfully",
            success: true,  
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}

function VALUES(name: any, email: any, hashedPassword: any): any {
    throw new Error("Function not implemented.");
}
