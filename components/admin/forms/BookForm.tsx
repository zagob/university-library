"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { bookSchema } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Props extends Partial<Book> {
  type: "create" | "update";
}

const BookForm = ({ type, ...book }: Props) => {
  const router = useRouter();
  const { toast } = useToast();

  const form: UseFormReturn<z.infer<typeof bookSchema>> = useForm({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      genre: "",
      rating: 1,
      totalCopies: 1,
      coverUrl: "",
      coverColor: "",
      videoUrl: "",
      summary: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof bookSchema>) => {
    // const result = await onSubmit(data);
    // if (result.success) {
    //   toast({
    //     title: "Success",
    //     description: isSignIn
    //       ? "You have successfully signed in."
    //       : "You have successfully signed up.",
    //   });
    //   router.push("/");
    // } else {
    //   toast({
    //     title: `Error ${isSignIn ? "signing in" : "signing up"}`,
    //     description: result.error ?? "An error ocurred",
    //     variant: "destructive",
    //   });
    // }
  };

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Book Title
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Book title"
                    {...field}
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Book author"
                    {...field}
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Genre
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Book genre"
                    {...field}
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Rating
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type="number"
                    min={1}
                    max={5}
                    placeholder="Book rating"
                    {...field}
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="totalCopies"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Total Copies
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type="number"
                    min={0}
                    max={10000}
                    placeholder="Book total copies"
                    {...field}
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coverUrl"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Book Image
                </FormLabel>
                <FormControl>{/* file upload */}</FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coverColor"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Primary Color
                </FormLabel>
                <FormControl>{/* color picker */}</FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Book Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Book description"
                    {...field}
                    rows={10}
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="videoUrl"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Book Vídeo
                </FormLabel>
                <FormControl>{/* file upload */}</FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Book summary
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Book summary"
                    {...field}
                    rows={5}
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="book-form_btn text-white">Add Book to Library</Button>
        </form>
      </Form>
    </div>
  );
};

export default BookForm;
