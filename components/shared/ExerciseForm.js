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
import { Textarea } from "@/components/ui/textarea";
import Dropdown from "@/components/shared/Dropdown";
import { useEffect, useState } from "react";
import { getAllMuscleGroups } from "@/lib/actions/muscleGroup.actions";
import FileUploader from "@/components/shared/FileUploader";
import { useUploadThing } from "@/lib/uploadthing";
import MultiSelect from "@/components/shared/MultiSelect";
import { createExercise, updateExercise } from "@/lib/actions/exercise.actions";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const ExerciseForm = ({ type, exercise }) => {
  const [muscleGroups, setMuscleGroups] = useState([]);
  useEffect(() => {
    const getMuscleGroups = async () => {
      try {
        const data = await getAllMuscleGroups();
        setMuscleGroups([...data, { _id: "268276727AA", muscle: "None" }]);
      } catch (error) {
        console.log(error);
      }
    };
    getMuscleGroups();
  }, []);

  const formSchema = z.object({
    name: z
      .string()
      .min(3, "Name must be atleast 3 characters.")
      .max(100, "Name must be atmost 100 characters."),
    target: z.string().min(1, "This field is required"),
    secondaryTargets: z.string().array("This field cant be empty"),
    equipments: z.string().array("This field cant be empty"),
    description: z
      .string()
      .min(3, "Description must be atleast 3 characters.")
      .max(1000, "Description must be less than 1000 characters."),
    imageUrl: z.string().min(1, "Invalid Image url"),
    videoUrl: z.string().url("Invalid Video url"),
    forceType: z.string().min(1, "This field is required"),
  });

  const initialValues = {
    name: "",
    target: "",
    secondaryTargets: [],
    equipments: [],
    description: "",
    imageUrl: "",
    videoUrl: "",
    forceType: "",
  };

  const [files, setFiles] = useState([]);
  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    exercise && type === "Update" && form.reset(exercise)
    },[exercise])
    const router = useRouter()

  const { toast } = useToast();
  async function onSubmit(values) {
    let uploadedImageUrl = values.imageUrl;
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) return;
      uploadedImageUrl = uploadedImages[0].url;
    }

    if(type === "Create"){

        try {
          const newExercise = await createExercise({
            ...values,
            imageUrl: uploadedImageUrl,
          });
    
          if (newExercise) {
            toast({
              description: "Exercise Created Successfully",
              className:
                "bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] tracking-wider text-white border-0",
            });
            location.reload();
          } else {
            toast({
              description: "Exercise creation failed",
              className:
                "bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] tracking-wider text-white border-0",
            });
          }
        } catch (error) {
          handleError(error);
        }
    }
    else {
        try {
            const newExercise = await updateExercise(exercise._id, {
              ...values,
              imageUrl: uploadedImageUrl,
            });
      
            if (newExercise) {
              toast({
                description: "Exercise Updated Successfully",
                className:
                  "bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] tracking-wider text-white border-0",
              });
              router.push(`/workout-tracker/exercises/${newExercise._id}`)
            } else {
              toast({
                description: "Exercise Updation failed",
                className:
                  "bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] tracking-wider text-white border-0",
              });
            }
          } catch (error) {
            handleError(error);
          }
    }
  }

  const equipments = [
    { id: 1, label: "Barbell" },
    { id: 2, label: "EZ Bar" },
    { id: 3, label: "Cable" },
    { id: 4, label: "Straight Bar" },
    { id: 5, label: "Dumbell" },
    { id: 6, label: "BodyWeight" },
    { id: 7, label: "Mat" },
    { id: 8, label: "Smith Machine" },
    { id: 1111, label: "Other" },
  ];

  const forceTypes = [
    { id: 1, label: "Push (Bilateral)" },
    { id: 2, label: "Pull (Bilateral)" },
    { id: 3, label: "Pull" },
    { id: 3, label: "Push" },
    { id: 4, label: "Hinge (Bilateral)" },
    { id: 1111, label: "Other" },
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[70%] flex flex-col gap-5 text-black"
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
            name="target"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                    placeholder={"Target Muscle"}
                    dropdownItems={muscleGroups}
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
            name="secondaryTargets"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <MultiSelect
                    onChangeHandler={field.onChange}
                    value={field.value || []}
                    placeholder={"Secondary Targets"}
                    dropdownItems={muscleGroups}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="equipments"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <MultiSelect
                    onChangeHandler={field.onChange}
                    value={field.value || []}
                    placeholder={"Equipments"}
                    dropdownItems={equipments}
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
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="Description"
                    {...field}
                    className="textarea rounded-2xl"
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
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
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
            name="videoUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Video URL"
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
            name="forceType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                    placeholder={"Force Type"}
                    dropdownItems={forceTypes}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <button
          type="submit"
          className="py-3 ps-7 pe-3 border-2 border-red-500 flex-center w-fit rounded-full text-lg mt-2 gap-4 hover:bg-red-500 hover:text-white transition-colors duration-500 bg-transparent"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Submitting..." : `${type} Exercise`}
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

export default ExerciseForm;
