import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, error : loginError, authenticated } = useAuth();

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async(values)=>{
    await login(values)
  })

  useEffect(()=>{
    if (authenticated) navigate('/courses')
  }, [authenticated])

  return (
    <div className="flex items-center justify-center py-8">
      <div className="bg-zinc-800 max-w-md w-full p-5 rounded-md effect">
      {loginError && (<p className="bg-red-600 text-white rounded-md p-2 text-center">{loginError}</p>)}
        <form onSubmit={onSubmit}>
          <label className="block font-bold mt-2">Email</label>        
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-300 text-zinc-900 px-4 my-1 py-2 rounded-md"
          />   
          {errors.email && <p className="text-red-700 block font-bold mt-2">Email es requerido</p>}
          <label className="block font-bold mt-2">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            {...register("pssw", { required: true })}
            className="w-full bg-zinc-300 text-zinc-900 px-4 my-1 py-2 rounded-md"
          />
          {errors.pssw && <p className="text-red-700 block font-bold mt-2">Contraseña es requerida</p>}
          <button
            type="submit"
            className="bg-violet-600 text-white rounded-md p-2 my-2 hover:bg-violet-500"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
