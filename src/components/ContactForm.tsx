"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaUserFriends } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

// Infer the schema type
type FormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)

    const formData = new FormData()

    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("service", data.service);

    try {
      const response = await fetch ("/api/send-contact-email", {
        method: "POST",
        body: formData
      })

      if(response.ok) {
        toast.success("Message sent successfully!");
      }else {
        const errorText = await response.text()
        toast.error(`Failed to send message: ${errorText}`)
      }
      
    } catch (error) {
      toast.error("An error occured while sending the message.")
      console.error("Error submitting form:", error);
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="w-1/2 pl-40">
      <h1 className="text-3xl mt-24 font-semibold leading-tight">Contact Us</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-7 mt-10 flex flex-col"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Name"
                    {...field}
                    className=" text-sm py-2 pl-2 blur-effect text-white rounded-sm border border-white/30"
                  />
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
                  <Input
                    placeholder="Enter Phone Number"
                    {...field}
                    maxLength={10}
                    className=" text-sm py-2 pl-2 blur-effect text-white rounded-sm border border-white/30"
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      input.value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
                      if (input.value.length > 10) {
                        input.value = input.value.slice(0, 10); // Enforce 10 digits max
                      }
                    }}
                  />
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
                  <Input
                    placeholder="Enter Your Email"
                    {...field}
                    className=" text-sm py-2 pl-2 blur-effect text-white rounded-sm border border-white/30"
                  />
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
                    <SelectTrigger className=" text-sm py-2 pl-2 blur-effect text-white rounded-sm border border-white/30 w-full">
                      <SelectValue placeholder="Select Type of Service" />
                    </SelectTrigger>
                    <SelectContent className=" text-sm py-2 pl-2 blur-effect text-white rounded-sm border border-white/30">
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
              disabled={isLoading}
              className="border border-white rounded bg-black text-white text-sm w-[48%] flex items-center gap-2 justify-center py-2 hover:bg-[#1d4ed8] hover:border-[#1d4ed8] duration-500"
            >
              {isLoading ? (
              <>
                <LuLoader2 className=" animate-spin" /> Submitting
              </>
            ) : (
              <>
              Submit <FaArrowRightLong />
              </>
            )}
              
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
