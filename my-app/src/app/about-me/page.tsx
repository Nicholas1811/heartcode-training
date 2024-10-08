//import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import myself from "./myself.jpeg";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
  return (
    <div>
      Hello World!
      <Card>
        <CardHeader>
          <p>Hi there, My name is Nicholas!</p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row gap-2">
            <p className="font-bold"> Name:</p> Nicholas </div>
          <div className="flex flex-row gap-2"> <p className="font-bold">Major:</p>Software Engineering, Year 1 Student</div>
          <div className="flex flex-row gap-2"> <p className="font-bold">Hobbies:</p>I have no hobbies actually, I love my free time</div>
          <div className = "flex justify-center">
            <Image src={myself}
              width={200}
              height={200}
              className="margin-left: 100"
              alt="Picture of the author"

            />
          </div>
        </CardContent>
      </Card>
      <Alert>
        <AlertTitle>
          Hey there! Welcome to the page!
        </AlertTitle>
        <AlertDescription>
          I have added an alert here guys, just to show you how this works!
        </AlertDescription>
      </Alert>
    </div>
  );
}
