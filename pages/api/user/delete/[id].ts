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
    
   if(req.method !== 'DELETE'){
       return res.status(405).json ({ message: "Method not Allowed"});
   }

   const { id } = req.query;
   console.log(id); 

const updateUser = await prisma.user.delete({
  where: {
    id
  }
})
  res.status(200);
    res.json({
        message: 'Posts telah dihapus'
    });
}