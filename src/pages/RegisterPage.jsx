import { useForm } from "react-hook-form";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex items-center justify-center py-8">
      <div className="bg-zinc-800 max-w-md p-5 rounded-md">
        <h1 className="my-2 font-bold">Registro de profesor</h1>
        <form
          onSubmit={handleSubmit((values) => {
            console.log(values);
          })}
        >
          <label class="block font-bold mt-2">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            {...register("firstName", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          <label class="block font-bold mt-2">Apellido</label>
          <input
            type="text"
            placeholder="Apellido"
            {...register("lastName", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          <label class="block font-bold mt-2">Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          <label class="block font-bold mt-2">Identificación</label>
          <input
            type="number"
            placeholder="Identificación"
            {...register("ident", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          <label class="block font-bold mt-2">Edad</label>
          <input
            type="number"
            placeholder="Edad"
            {...register("age", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
          <label class="block font-bold mt-2">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
            className="w-full bg-zinc-600 text-white px-4 my-1 py-2 rounded-md"
          />
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
