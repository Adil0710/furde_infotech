"use client"

import React from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import {  FaUserFriends } from "react-icons/fa"
import { FaArrowRightLong} from "react-icons/fa6"
import { contactFormSchema } from "@/schemas/contactFormSchema"


// Infer the schema type
type FormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data)
  }

  return (
    <div className="w-1/2 pl-40">
      <h1 className="text-3xl mt-24 font-semibold leading-tight">Contact Us</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 mt-10 flex flex-col">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Name" {...field}  className=" text-sm py-2 pl-2 blur-effect text-white rounded-sm border border-white/30"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Phone Number" {...field} maxLength={10}  className=" text-sm py-2 pl-2 blur-effect text-white rounded-sm border border-white/30"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Email" {...field}  className=" text-sm py-2 pl-2 blur-effect text-white rounded-sm border border-white/30"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Services</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue="">
                    <SelectTrigger  className=" text-sm py-2 pl-2 blur-effect text-white rounded-sm border border-white/30 w-full" >
                      <SelectValue placeholder="Select Type of Service" />
                    </SelectTrigger>
                    <SelectContent  className=" text-sm py-2 pl-2 blur-effect text-white rounded-sm border border-white/30">
                      <SelectGroup>
                        <SelectLabel>Services</SelectLabel>
                        <SelectItem value="IT">IT</SelectItem>
                        <SelectItem value="BPO">BPO</SelectItem>
                        <SelectItem value="KPO">KPO</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-1 flex flex-row items-center justify-between">
            <Button
              type="button"
              className="border border-white rounded bg-black text-white text-sm w-[48%] flex items-center gap-2 justify-center py-2 hover:bg-[#F43F5E] hover:border-[#F43F5E] duration-500"
            >
              Plan a Call <FaUserFriends />
            </Button>
            <Button
              type="submit"
              className="border border-white rounded bg-black text-white text-sm w-[48%] flex items-center gap-2 justify-center py-2 hover:bg-[#1d4ed8] hover:border-[#1d4ed8] duration-500"
            >
              Submit <FaArrowRightLong />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
