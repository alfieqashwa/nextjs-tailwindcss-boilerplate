import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient();

export default async (req:NextApiRequest, res:NextApiResponse)=>{
   if(req.method !== 'GET'){
       return res.status(405).json ({ message: "Method not Allowed"});

   }
   
   const user = await prisma.user.findMany({});
   res.json({ 
       message: 'Fetching data Sukses',
        data: user});

}