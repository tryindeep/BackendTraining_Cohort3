import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db"


export  async function POST(req : NextRequest){
    //req.body
    const data = await req.json()
    console.log(data);

    await prisma.user.create({
        data:{
            username :  data.username,
            password :  data.password
        }
    })
    

    return NextResponse.json({
        message : " You have been signed up"
    })
}

export  async function GET(req : NextRequest){


    // you can do better when you can use this in main page for the first prisma client
    // got to NEXT JS => server side (page 10)
    const user = await prisma.user.findFirst();
    return NextResponse.json({
        user
    })
}