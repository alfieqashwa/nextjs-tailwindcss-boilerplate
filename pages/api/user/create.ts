import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient();

type Data = {
  firstName: string,
  lastName: string,
  email: string,
  nomorSiswa: int,
  alamat: string
}


export default async (req:NextApiRequest, res:NextApiResponse<Data>)=>{
    
   if(req.method !== 'POST'){
       return res.status(405).json ({ message: "Method not Allowed"});
   }
const { firstName,
  lastName,
  email,
  nomorSiswa,
  alamat } = req.body

   const create = await prisma.user.create({
     data:{
            firstName,
  lastName,
  email,
  nomorSiswa,
  alamat 
     }  
   })
   res.status(200);
    res.json({
        message: 'Post Berhasil dibuat',
        Data: create
    });
    
}