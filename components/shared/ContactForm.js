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
import {createMessage} from "@/lib/actions/message.actions";
import Image from "next/image";
import { handleError } from "@/lib/utils";
import { useToast } from "../ui/use-toast";

const ContactForm = ({message}) => {
      const formSchema = z.object({
        name: z.string().min(3, 'Name must be atleast 3 characters.').max(50, 'Name must be atmost 50 characters.'),
        phone: z.string().length(10, 'Phone is invalid.'),
        email: z.string().min(1, 'This field is mandatory.').email('Enter valid Email.'),
        subject: z.string().min(5, 'Subject must be atleast 5 characters.').max(50, 'Name must be atmost 50 characters.'),
        message: z.string().min(5, 'Message must be atleast 5 characters.').max(150, 'Name must be atmost 150 characters.')
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
      const { toast } = useToast()
      async function onSubmit(message) {
        try {
          const newMessage = await createMessage(message)

          if(newMessage){
            toast({
              description: "Message Sent Successfully",
              className: "bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] tracking-wider text-white border-0"
            })
            form.reset()
          }
          else{
            toast({
              description: "Message not Sent",
              className: "bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] tracking-wider text-white border-0"
            })
          }
        } catch (error) {
          handleError(error)
        }
      }


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 text-black"
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
        <button type="submit"
          className="py-3 ps-7 pe-3 border-2 border-red-500 flex-center w-fit rounded-full text-lg mt-2 gap-4 hover:bg-red-500 hover:text-white transition-colors duration-500 bg-transparent"
          disabled={form.formState.isSubmitting}
        >
            {form.formState.isSubmitting ? 'Submitting...' : message}
          <span className="py-3 px-4 rounded-full bg-red-600">
            <Image
              src={"/assets/icons/right-arrow.svg"}
              width={15}
              height={15}
              alt="rightArrow"
            />
          </span>
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
