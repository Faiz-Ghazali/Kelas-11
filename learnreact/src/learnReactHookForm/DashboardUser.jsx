import { useForm } from "react-hook-form";
function DashboardUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-yellow-400">
          <label htmlFor="">Nama Siswa:</label>
          <input {...register("nama", { required: 'Nama harus Di Isi'})} type="text" className="bg-sky-300" />
          {errors.nama && <p>{errors.nama.message}</p>}
        </div>
        <button type="submit">Simpan</button>
      </form>
    </>
  );
}
export default DashboardUser;
