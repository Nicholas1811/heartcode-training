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
    if (data.question1 == "yes" && data.question2 == "all" && data.question3 == "yes") {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6 ml-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="resize rounded-md">
              <FormLabel className="text-xl">Question 1:</FormLabel>
              <FormDescription className= "text-l">What is your name?</FormDescription>
              <FormControl>
                <Input className= "size-3/12 outline outline-3" placeholder="Place your name here" {...field} />
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
              <FormLabel className="text-xl">Question 2:</FormLabel>
              <FormDescription className= "text-l">Do you sell drugs?</FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className= "size-3/12 outline outline-3">
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
              <FormLabel className="text-xl">Question 3:</FormLabel>
              <FormDescription className= "text-l">Do you know of any drugs that are bad?</FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className= "size-3/12 outline outline-3">
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
            <FormItem>
              <FormLabel className="text-xl">Question 4:</FormLabel>
              <FormDescription className= "text-l">Do you think drugs are bad?</FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className= "size-3/12 outline outline-3">
                  <SelectTrigger>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
