import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";

function RegisterPage() {

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { register : registerTeacher, error : registerError } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    console.log("errors", errors);
    registerTeacher(values);
  });

  return (
    <div className="flex items-center justify-center py-8">
      <div className="bg-zinc-800 max-w-md w-full p-5 rounded-md">
        {registerError && (<p className="bg-red-600 text-white rounded-md p-2 text-center">{registerError}</p>)}
        <h1 className="my-2 font-bold">Registro de profesor</h1>
        <form onSubmit={onSubmit}>
          <label className="block font-bold mt-2">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            {...register("firstName", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          {errors.firstName && (
            <p className="text-red-700">Nombre es requerido</p>
          )}
          <label className="block font-bold mt-2">Apellido</label>
          <input
            type="text"
            placeholder="Apellido"
            {...register("lastName", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          {errors.lastName && (
            <p className="text-red-700">Apellido es requerido</p>
          )}
          <label className="block font-bold mt-2">Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          {errors.email && <p className="text-red-700">Email es requerido</p>}
          <label className="block font-bold mt-2">Identificación</label>
          <input
            type="number"
            placeholder="Identificación"
            {...register("ident", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          {errors.ident && (
            <p className="text-red-700">Identificación es requerida</p>
          )}
          <label className="block font-bold mt-2">Edad</label>
          <input
            type="number"
            placeholder="Edad"
            {...register("age", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          {errors.age && <p className="text-red-700">Edad es requerida</p>}
          <label className="block font-bold mt-2">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            {...register("pssw", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          {errors.pssw && (
            <p className="text-red-700">Contraseña es requerida</p>
          )}
          <label className="block font-bold mt-2">Confirmar contraseña</label>
          <input
            type="password"
            placeholder="Confirmar contraseña"
            {...register("confirmPssw", {
              required: true,
              validate: (v) => v == getValues("pssw"),
            })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          {errors.confirmPssw && (
            <p className="text-red-700">Confirmar contraseña</p>
          )}
          <button
            type="submit"
            className="bg-violet-600 text-white rounded-md p-2 my-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
