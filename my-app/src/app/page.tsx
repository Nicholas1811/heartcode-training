//import Image from "next/image";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      Hello World!
      <Card>
        <CardHeader>
          <p>Hi there, My name is Nicholas!</p>
        </CardHeader>
        <CardDescription>
          I am awesome man
        </CardDescription>
        <CardContent>
          <div className = "flex flex-row gap-2">
            <p className="font-bold"> 
              Name:
            </p> 
            Nicholas
            <div className = "flex flex-row gap-2"> <p className = "font-bold">Major:</p>Software Engineering
            </div>
             
          </div>
        </CardContent>
      </Card>  
    </div>
  );
}
