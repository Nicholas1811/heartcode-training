//import Image from "next/image";
"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { insertOneUser } from "@/server/user";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


{/* form schema*/ }
const FormSchema = z.object({
  name: z.string({
    required_error: "Please enter a name"
  }).min(2, {
    message: "name must be more than 2 characters long"
  }).max(20, {
    message: "name must be no longer than 20 characters"
  }),
  question1: z.string({
    required_error: "Please select an option"
  }).min(2, {
    message: "Please enter more chars"
  }).max(100, {
    message: "You have entered too much characters"
  }),
  question2: z.string({
    required_error: "Please select an option"
  }).min(2, {
    message: "Please enter more chars"
  }).max(100, {
    message: "You have entered too much characters"
  }),
  question3: z.string({
    required_error: "Please select an option"
  }).min(2, {
    message: "Please enter more chars"
  }).max(100, {
    message: "You have entered too much characters"
  })
})



export default function Quiz() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.question1 == "no" && data.question2 == "all" && data.question3 == "yes") {
      toast({
        title: `Congratulations ${data.name}`,
        description: `You got everything right! The correct answers are ${data.question1}, ${data.question2}, ${data.question3}`

      })
    } else {
      toast({
        title: `Unfortunately, ${data.name}, you got it wrong this time`,
        description: "There are some wrong answers here. Please try again!"
      })

    }

    const isDrugDealer = true ? data.question1 === "yes" : false;
    const isDrugBad = true ? data.question3 === "yes" : false;
    await insertOneUser(data.name, isDrugDealer, data.question2, isDrugBad);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Form {...form}>
        <br />
        <h1 className="text-xl font-bold">Hi, here are the past results of the quiz.</h1>
        <br />

        <form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-l font-bold">What is your name?</FormLabel>
                <FormControl>
                  <Input className="size-10/12 outline outline-3 w-full" placeholder="Place your name here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question1"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-l font-bold">Do you sell drugs?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl >
                    <SelectTrigger className="size-3/12 outline outline-3 w-full">
                      <SelectValue placeholder="Please select an answer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="question2"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-l font-bold">Do you know of any drugs that are bad?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="size-3/12 outline outline-3 w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Please select an answer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="all">All are Bad</SelectItem>
                    <SelectItem value="cocaine">Cocaine</SelectItem>
                    <SelectItem value="escatsy">Escatsy</SelectItem>
                    <SelectItem value="weed">Weed</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="question3"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-l font-bold">Do you think drugs are bad?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        No                    
                        </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div >
            <Button className="size-3/12 w-full" type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
