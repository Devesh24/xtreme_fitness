import ExerciseForm from "@/components/shared/ExerciseForm";

const CreateExercise = () => {
  return (
    <>
      <div className="w-full h-[10vh]"></div>
      <div className="w-full min-h-screen flex-center">
          <ExerciseForm type="Create" />
      </div>
    </>
  );
};

export default CreateExercise;
