"use client";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import NoResultIcon from "@/assets/noresult.svg";
import { Skeleton } from "@/components/ui/skeleton";
import clsx from "clsx";
import { gallerySchema } from "@/schemas/gallerySchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Loader2, Trash2 } from "lucide-react";
import { DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Gallery = {
  id: number;
  title: string;
  category: string;
  image: string;
  orientation: string;
};

function page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [galleryItems, setGalleryItems] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleteGalleryId, setDeleteGalleryId] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ gallery: Gallery[] }>(
        "/api/get-photo"
      );
      setGalleryItems(response.data.gallery);
      console.log(response.data.gallery);
    } catch (error) {
      console.log(error);
      toast({
        title: "Try Refreshing",
        description: `Failed to load Gallery:- ${error}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteGalleryId) return;
    try {
      await axios.delete(`/api/delete-photo/${deleteGalleryId}`);
      toast({ title: "Success", description: "Job deleted successfully." });
      fetchGalleryItems();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: `Failed to delete gallery item:- ${error}`,
        variant: "destructive",
      });
    } finally {
      setDeleteGalleryId(null);
    }
  };

  const onSubmit = async (data: z.infer<typeof gallerySchema>) => {};

  const filteredItems = galleryItems.filter(
    (item) =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const form = useForm<z.infer<typeof gallerySchema>>({
    resolver: zodResolver(gallerySchema),
    defaultValues: {
      title: "",
      category: undefined,
      image: undefined,
    },
  });

  return (
    <section className="py-5 sm:px-5 px-0 h-auto w-auto flex flex-col items-start sm:items-center justify-center">
      <div className="relative md:w-1/2 w-[63%] sm:ml-0 ml-5">
        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input
          className="bg-neutral-50 pl-10 shadow-none"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className=" sm:min-w-[80vw] sm:max-w-[80vw] w-screen sm:rounded-2xl rounded-none px-5 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:px-20 lg:grid-cols-4 sm:gap-8 gap-4 md:mt-12 mt-10">
        {loading ? (
          <>
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton className=" bg-neutral-100 w-60 h-80" key={index} />
            ))}
          </>
        ) : filteredItems.length === 0 ? (
          <div className="col-span-full flex items-center justify-center flex-col">
            {" "}
            <Image src={NoResultIcon} alt="No Results Found" width={300} />
            <p className="text-center text-lg text-gray-500">
              {searchTerm.length > 0
                ? `No results found for "${searchTerm}"`
                : "Gallery is empty"}
            </p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={`${item.id}`}
              className={clsx(
                "relative overflow-hidden flex flex-col bg-neutral-100 rounded-lg",
                item.orientation === "vertical"
                  ? "col-span-1 row-span-2"
                  : "col-span-1 row-span-1"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="responsive"
                objectFit="cover"
                width={100}
                height={100}
                placeholder="blur"
                blurDataURL={item.image}
              />
              <div className=" w-full px-2 py-5">
                <div className=" w-full justify-between items-center flex flex-row">
                  <p className=" px-2 text-[10px] py-0.5 rounded-full border border-blue-600 bg-blue-500 bg-opacity-40 inline-block text-black/90 font-medium">
                    {item.category}
                  </p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Trash2
                        className="text-red-500 cursor-pointer hover:text-red-600 duration-200"
                        onClick={() => setDeleteGalleryId(item.id)}
                        size={18}
                      />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this job? This action
                          cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel
                          className="border border-neutral-200"
                          onClick={() => setDeleteGalleryId(null)}
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
                <h1 className=" mt-2 text-xs font-medium">{item.title}</h1>
              </div>
            </div>
          ))
        )}
      </div>

      <Button
        size="sm"
        className="absolute right-8 sm:top-8 top-[51px] bg-blue-500 hover:bg-blue-600 duration-200"
        onClick={() => setDialogOpen(true)}
      >
        Add Job
      </Button>

      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => !isSubmitting && setDialogOpen(open)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add in Gallery</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Title */}

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || ""}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Office">Office</SelectItem>
                        <SelectItem value="Events">Events</SelectItem>
                        <SelectItem value="Client Visits">
                          Client Visits
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className=" cursor-pointer">
                    <FormLabel>Image*</FormLabel>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]; // Get the selected file
                        field.onChange(file); // Update the field with the selected file
                      }}
                    />
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
                  ) : (
                    "Add"
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

export default page;
