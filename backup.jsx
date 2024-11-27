"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Edit, Loader2, Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";
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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobSchema } from "@/schemas/jobSchema";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Define the Job type
type Job = {
  _id: number;
  designation?: string;
  department?: string;
  description?: string;
  location?: string;
  type?: "Full Time" | "Part Time" | "Internship"; // Updated to be more specific
  level?: "Entry" | "Experienced"; // Assuming the level is like this
};

function Page() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editJob, setEditJob] = useState<Job | null>(null);

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

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ jobs: Job[] }>("/api/get-job");
      setJobs(response.data.jobs);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load jobs.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: z.infer<typeof jobSchema>) => {
    setIsSubmitting(true);
    try {
      if (editJob) {
        // Send job update request with ID in the URL
        const url = `/api/update-job/${editJob._id}`;
        console.log("Sending PUT request to:", url);
  
        await axios.put(url, data);
  
        toast({ title: "Success", description: "Job updated successfully." });
      } else {
        await axios.post("/api/add-job", data);
        toast({ title: "Success", description: "Job added successfully." });
      }
      fetchJobs();
      setDialogOpen(false);
    } catch (error) {
      console.error("Error in onSubmit:", error);
      toast({
        title: "Error",
        description: "Failed to add/update job.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  const deleteJob = async (id: number) => {
    setLoading(true);
    try {
      await axios.delete(`/api/delete-job/${id}`);
      toast({ title: "Success", description: "Job deleted successfully." });
      fetchJobs();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete job.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditJob(null); // Clear the edit job
    form.reset({  // Reset the form to default values
      designation: "",
      department: "",
      description: "",
      location: "",
      type: undefined,
      level: undefined,
    });
    setDialogOpen(true);
  };
  
  const handleEdit = (job: Job) => {
    setEditJob(job); // Set the job to edit
    form.reset(job); // Populate the form with job data
    setDialogOpen(true);
  };
  


  return (
    <section className="py-5 px-5 h-auto w-auto flex flex-col items-center">
      {/* Job Cards */}
      <div className="grid gap-6 bg-neutral-50 min-w-[80vw] max-w-[80vw] rounded-2xl px-5 py-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-12 mt-10">
        {loading ? (
          <div className="col-span-full text-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : jobs.length === 0 ? (
          <div className="col-span-full text-center">No jobs found.</div>
        ) : (
          jobs.map((job, index) => (
            <div key={index} className="cardShadow bg-white overflow-hidden min-h-[350px] rounded-lg text-[#111827] flex flex-col max-w-full">
              <div className="py-5 px-5">
                <p className="font-semibold text-2xl">{job.designation}</p>
                <p className="text-xl font-semibold mt-2 text-[#374151]">{job.department}</p>
                <p className="mt-4 break-words">{job.description}</p>
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
                <Edit className="text-blue-500 cursor-pointer hover:text-blue-600 duration-200 mr-3" onClick={() => handleEdit(job)} />
                <Separator orientation="vertical" className="mr-3" />
                <Trash2 className="text-red-500 cursor-pointer hover:text-red-600 duration-200" onClick={() => deleteJob(job._id)} />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add/Edit Job Dialog */}
      <Button
        size="sm"
        className="absolute right-5 top-5 bg-[#1d4ed8] hover:bg-[#1E3A8A]"
        onClick={handleAdd}
      >
        Add Job
      </Button>
      <Dialog open={dialogOpen} onOpenChange={(open) => !isSubmitting && setDialogOpen(open)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{editJob ? "Edit Job" : "Add Job"}</DialogTitle>
            <DialogDescription>Click save when you're done.</DialogDescription>
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
                    <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Solapur, Maharashtra">Solapur, Maharashtra</SelectItem>
                        <SelectItem value="Mumbai, Maharashtra">Mumbai, Maharashtra</SelectItem>
                        <SelectItem value="Pune, Maharashtra">Pune, Maharashtra</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Type */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Type*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Job Type" />
                      </SelectTrigger>
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

              {/* Level */}
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Level" />
                      </SelectTrigger>
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
                  size="sm"
                  className="bg-[#1d4ed8] hover:bg-[#1E3A8A]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Save"}
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
