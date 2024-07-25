"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
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
import FileUploader from "@/components/shared/FileUploader"
import { useState } from "react";
import { useUploadThing } from "@/lib/uploadthing"
import { createMuscleGroup } from "@/lib/actions/muscleGroup.actions"
import { useToast } from "@/components/ui/use-toast";

const CreateMuscleGroup = () => {
    const formSchema = z.object({
        muscle: z.string().min(3, "Muscle name must be atleast 3 characters."),
        imageUrl: z.string().min(1, "Invalid Image url"),
    });

    const [files, setFiles] = useState([])
    const {startUpload} = useUploadThing('imageUploader')

    const initialValues = {
        muscle: "",
        imageUrl: "",
      };
    
      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
      });
    
      const { toast } = useToast()
      async function onSubmit(values) {

        let uploadedImageUrl = values.imageUrl
        if(files.length > 0) {
            const uploadedImages = await startUpload(files)

            if(!uploadedImages) return
            uploadedImageUrl = uploadedImages[0].url
        }

        try {
            const newMuscle = await createMuscleGroup({...values, imageUrl: uploadedImageUrl})
            
            if(newMuscle) {
                toast({
                    description: "Muscle Group Created Successfully",
                    className: "bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] tracking-wider text-white border-0"
                })
                form.reset()
            }
            else{
                toast({
                  description: "Muscle Group creation failed",
                  className: "bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] tracking-wider text-white border-0"
                })
            }
        } catch (error) {
          handleError(error);
        }
      }

  return (
    <div className="w-full min-h-screen flex-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[50%] flex flex-col gap-5 text-black"
        >
            <FormField
              control={form.control}
              name="muscle"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Muscle Group"
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
            name="imageUrl"
            render={({ field }) => (
                <FormItem className="w-full">
                    <FormControl className="h-72">
                        <FileUploader onFieldChange={field.onChange} imageUrl={field.value} setFiles={setFiles} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />

          <button
            type="submit"
            className="py-3 ps-7 pe-3 border-2 border-red-500 flex-center w-fit rounded-full text-lg mt-2 gap-4 hover:bg-red-500 hover:text-white transition-colors duration-500 bg-transparent"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Create Muscle Group"}
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
    </div>
  )
}

export default CreateMuscleGroup