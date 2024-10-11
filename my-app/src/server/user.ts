"use server"

import { db } from "../db";
import { users } from "../db/schema"
import { sql } from "@vercel/postgres";


export async function insertOneUser(nama:string, drug: boolean, userAnswer: string, badDrug: boolean){
    await db.insert(users).values({name: nama, isDrugDealer: drug, answer: userAnswer, isDrugBad:badDrug})
}
export async function getUser(){

    const userList = await db.select().from(users);
    console.log(userList)
    return userList;
}

