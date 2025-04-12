import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-gradient-to-br from-red-600 to-slate-900 h-screen w-full">
      <nav className=" bg-transparent border-b border-white p-4 flex flex-row items-center justify-between">
        <Image
          src="/td-logo.png"
          width={500}
          height={500}
          alt="logo"
          className=" h-auto w-auto"
        />
        <div className=" flex flex-row gap-x-4">
          <button className=" text-white font-bold text-base cursor-pointer">
            Login
          </button>
          <button className=" bg-white text-black px-4 py-2 font-bold shadow-2xl text-base cursor-pointer hover:opacity-80">
            Sign Up
          </button>
        </div>
      </nav>
    </main>
  );
}
