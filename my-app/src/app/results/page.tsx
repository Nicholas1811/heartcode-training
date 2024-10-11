import { getUser } from "@/server/user"

import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"



export default async function Results() {
    async function getUsers() {
        const users = await getUser()
        return users
    }

    
    const userInformation = await getUsers();
    
    async function getData(dataDB:any): Promise<Payment[]> {
        // Fetch data from your API here.
        return dataDB
    }
    const data = await getData(userInformation);
    console.log(userInformation)
    return (
        <div className="container mx-auto py-10">
            <h1 className = "text-xl font-bold">Hi, here are the past results of the quiz.</h1>
            <br/>
            <DataTable columns={columns} data={data} />
            
        </div>
    )


}
