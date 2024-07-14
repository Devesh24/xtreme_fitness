"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import Image from "next/image";

const ContactForm = ({message}) => {
    const formSchema = z.object({
        username: z.string().min(2).max(50),
      });
    
      const initialValues = {
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      };
    
      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
      });
    
      // 2. Define a submit handler.
      function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
      }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="input-field"
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
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Phone"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Subject"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="h-52">
                <Textarea
                  placeholder="Message"
                  {...field}
                  className="textarea rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link
          href={"/"}
          className="py-3 ps-7 pe-3 border-2 border-red-500 flex-center w-fit rounded-full text-lg mt-2 gap-4 hover:bg-red-500 hover:text-white transition-colors duration-500 bg-transparent"
        >
          {message}
          <span className="py-3 px-4 rounded-full bg-red-600">
            <Image
              src={"/assets/icons/right-arrow.svg"}
              width={15}
              height={15}
              alt="rightArrow"
            />
          </span>
        </Link>
      </form>
    </Form>
  );
};

export default ContactForm;
