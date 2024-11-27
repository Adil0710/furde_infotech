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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobSchema } from "@/schemas/jobSchema";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { formatDate } from "@/helpers/formatDateToDDMMYYYY";
import { Textarea } from "@/components/ui/textarea";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import NoResultIcon from "@/assets/noresult.svg";
import DashboardLoading from "@/components/DashboardLoading";

// Job Type
type Job = {
  _id: number;
  designation: string;
  department: string;
  description: string;
  location: string;
  type: "Full Time" | "Part Time" | "Internship";
  level: "Entry" | "Experienced";
  createdAt: string;
};

function Page() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editJob, setEditJob] = useState<Job | null>(null);
  const [deleteJobId, setDeleteJobId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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
      console.log("data", response.data.jobs);
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: `Failed to load jobs:- ${error}`,
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
        try {
          await axios.put(`/api/update-job/${editJob._id}`, data);
          toast({ title: "Success", description: "Job updated successfully." });
        } catch (error) {
          console.log(error);
          toast({
            title: "Error",
            description: `Error occured while updating the job :- ${error}`,
            variant: "destructive",
          });
        }
      } else {
        try {
          await axios.post("/api/add-job", data);
          toast({ title: "Success", description: "Job added successfully." });
        } catch (error) {
          console.log(error);
          toast({
            title: "Error",
            description: `Error occured while adding the job :- ${error}`,
            variant: "destructive",
          });
        }
      }
      fetchJobs();
      setDialogOpen(false);
    } catch (error) {
      console.error("Error in onSubmit:", error);
      toast({
        title: "Error",
        description: `Error occured while adding or updating job :- ${error}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteJobId) return;
    try {
      await axios.delete(`/api/delete-job/${deleteJobId}`);
      toast({ title: "Success", description: "Job deleted successfully." });
      fetchJobs();
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: `Failed to delete job:- ${error}`,
        variant: "destructive",
      });
    } finally {
      setDeleteJobId(null);
    }
  };

  const handleAdd = () => {
    setEditJob(null);
    form.reset({
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
    setEditJob(job);
    form.reset(job);
    setDialogOpen(true);
  };

  // Filtered job arrays based on search term
  const filteredJobs = jobs.filter(
    (job) =>
      job.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formatDate(job.createdAt).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-5 sm:pt-0 pt-5 sm:px-5 px-0 h-auto w-auto flex flex-col sm:items-center items-start">
      <div className="relative md:w-1/2 w-[63%] sm:ml-0 ml-5">
        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input
          className="bg-neutral-50 pl-10 shadow-none"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Job Cards */}
      <div className="grid gap-6 bg-neutral-50 sm:min-w-[80vw] sm:max-w-[80vw] w-screen sm:rounded-2xl rounded-none px-5 py-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-12 mt-10">
        {loading ? (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <DashboardLoading key={index}/>
            ))}
          </>
        ) : filteredJobs.length === 0 ? (
          <div className="col-span-full flex items-center justify-center flex-col">
            {" "}
            <Image src={NoResultIcon} alt="No Results Found" width={300} />
            <p className="text-center text-lg text-gray-500">
              {searchTerm.length > 0
                ? `No results found for "${searchTerm}"`
                : "No jobs found"}
            </p>
          </div>
        ) : (
          filteredJobs.map((job, index) => (
            <div
              key={index}
              className="cardShadow relative bg-white overflow-hidden min-h-[350px] max-h-[450px] rounded-lg text-[#111827] flex flex-col max-w-full"
            >
              <div className="py-5 px-5">
                <p className="font-semibold text-xl">{job.designation}</p>
                <p className="text-base font-semibold mt-2 text-[#374151]">
                  {job.department}
                </p>
                <p className="mt-4 break-words sm:text-base text-sm">{job.description}</p>
              </div>
              <div className="absolute bottom-0 w-full flex flex-col gap-5 justify-between pb-5 px-5 text-[#6B7280]">
                <div>
                  {" "}
                  <p className="mt-4 font-semibold text-[#6B7280] flex text-base flex-row items-center gap-2">
                    <FaLocationDot size={20} />
                    {job.location}
                  </p>
                  <p className="mt-3 font-semibold text-[#6B7280] flex text-base flex-row items-center gap-2">
                    <MdAccessTimeFilled size={20} />
                    {job.type}
                  </p>
                </div>
                <div className=" flex-row flex justify-between items-center">
                  <div className="text-xs font-semibold">
                    Created: {formatDate(job.createdAt || "")}
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <Edit
                      className="text-blue-500 cursor-pointer hover:text-blue-600 duration-200 mr-3"
                      onClick={() => handleEdit(job)}
                    />
                    <Separator orientation="vertical" className="h-5 mr-3" />
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Trash2
                          className="text-red-500 cursor-pointer hover:text-red-600 duration-200"
                          onClick={() => setDeleteJobId(job._id)}
                        />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this job? This
                            action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel
                            className="border border-neutral-200"
                            onClick={() => setDeleteJobId(null)}
                          >
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction onClick={handleDelete}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add/Edit Job Dialog */}
      <Button
        size="sm"
        className="absolute right-8 sm:top-8 top-[51px] bg-blue-500 hover:bg-blue-600 duration-200"
        onClick={handleAdd}
      >
        Add Job
      </Button>
      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => !isSubmitting && setDialogOpen(open)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editJob ? "Update Job" : "Add Job"}</DialogTitle>
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
                      <Textarea
                        rows={3}
                        className="resize-none"
                        placeholder="Description"
                        {...field}
                      />
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

              {/* Type */}
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || ""}
                    >
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

              <DialogFooter className=" pt-3">
                <DialogClose asChild className="sm:mt-0 mt-3 sm:w-auto w-full">
                  <Button size="sm" variant="outline" className=" mr-2">
                    {" "}
                    Cancel
                  </Button>
                </DialogClose>

                <Button
                  type="submit"
                  size="sm"
                  className="bg-blue-500 duration-200 hover:bg-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className=" mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : editJob ? (
                    "Update Job"
                  ) : (
                    "Add Job"
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
