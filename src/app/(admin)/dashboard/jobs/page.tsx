"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Edit, Loader2, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobSchema } from "@/schemas/jobSchema";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const jobs = [
  {
    id: 1,
    designation: "Software Developer",
    department: "Development",
    description:
      "Develop and maintain high-quality software applications while collaborating with cross-functional departments to deliver innovative solutions.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    id: 2,
    designation: "Data Entry Specialist",
    department: "Information Management department",
    description:
      "Accurately transcribe documents and data, ensuring high standards of quality and efficiency in all written communications.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    id: 3,
    designation: "Web Designer",
    department: "Design department",
    description:
      "Assist the design department in creating compelling visual content and innovative solutions while gaining hands-on experience in a collaborative environment.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
];

function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      designation: "",
      department: "",
      description: "",
      location: "",
      type: undefined,
      level: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof jobSchema>) => {
    console.log(data);
    setIsSubmitting(true); // Start submitting
    setTimeout(() => {
      setIsSubmitting(false); // Simulate successful submission
      setDialogOpen(false); // Close the dialog
      toast({
        title: "Job Added",
        description: "Your job listing has been successfully added.",
        variant: "default",
      });
    }, 2000); // Simulate a delay
  };
  return (
    <section className="py-5 px-5 h-auto w-auto flex items-center justify-center">
      <div className="grid gap-6 bg-neutral-50 min-w-[81vw] max-w-[80vw] rounded-2xl px-5 py-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-12 mt-10">
        {jobs.map((job, index) => (
          <div
            className="cardShadow bg-white overflow-hidden min-h-[350px] rounded-lg text-[#111827] flex justify-between flex-col"
            key={index}
          >
            <div className="py-5 px-5">
              <p className="font-semibold text-2xl">{job.designation}</p>
              <p className="text-xl font-semibold mt-2 text-[#374151]">
                {job.department}
              </p>
              <p className="mt-4">{job.description}</p>
              <p className="mt-4 font-semibold text-[#6B7280] flex flex-row items-center gap-2">
                <FaLocationDot size={20} />
                {job.location}
              </p>
              <p className="mt-3 font-semibold text-[#6B7280] flex flex-row items-center gap-2">
                <MdAccessTimeFilled size={20} />
                {job.type}
              </p>
            </div>
            <div className="flex justify-end items-center pb-5 px-5 text-[#6B7280]">
              <Edit className="text-blue-500 cursor-pointer hover:text-blue-600 duration-200 mr-3" />
              <Separator orientation="vertical" className="mr-3" />
              <Trash2 className="text-red-500 cursor-pointer hover:text-red-600 duration-200" />
            </div>
          </div>
        ))}
      </div>

      {/* Dialog for Adding a Job */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            className="absolute right-5 top-5 bg-[#1d4ed8] hover:bg-[#1E3A8A]"
          >
            Add Job
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Job</DialogTitle>
            <DialogDescription>Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Designation */}
              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Designation</FormLabel>
                    <FormControl>
                      <Input placeholder="Designation" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Department */}
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <FormControl>
                      <Input placeholder="Department" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Location Dropdown */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Solapur, Maharashtra">
                          Solapur, Maharashtra
                        </SelectItem>
                        <SelectItem value="Mumbai, Maharashtra">
                          Mumbai, Maharashtra
                        </SelectItem>
                        <SelectItem value="Pune, Maharashtra">
                          Pune, Maharashtra
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Type Dropdown */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Type*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Job Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Full Time">Full Time</SelectItem>
                        <SelectItem value="Part Time">Part Time</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Level Dropdown */}
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Level*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Experience Level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Entry">Entry</SelectItem>
                        <SelectItem value="Experienced">Experienced</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-[#1d4ed8] hover:bg-[#1E3A8A]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className=" mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Save"
                  )}
                  
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Page;
