import { useState } from 'react'
import { useRouter, NextRouter } from 'next/router'

export default function Home() {

  const [mail, setMail] = useState<string>("");
  const [motDePasse, setMotDePasse] = useState<string>("");

  const connexion = async () => {
    const requete = await fetch("/api/");
    const datas = await requete.json();
  }

  return (
    <>
      <div className="w-screen h-screen p-12 flex flex-row justify-center items-center gap-16 bg-white text-black font-sans">
        <video src="/video.mp4" autoPlay muted loop className="w-7/12 h-full" />
        <div className="w-5/12 flex flex-col items-center justify-center gap-16">
          <h2 className="text-3xl font-bold">Literest - Log In</h2>
          <input type="mail" value={mail} onChange={(e: any) => setMail(e.target.value)} placeholder="Votre adresse e-mail" className="w-3/4 h-8 rounded-2xl p-1 border-2 border-gray-400 bg-white text-black" />
          <input type="password" value={motDePasse} onChange={(e: any) => setMotDePasse(e.target.value)} placeholder="Votre adresse e-mail" className="w-3/4 h-8 rounded-2xl p-1 border-2 border-gray-400 bg-white text-black" />
          <button onClick={() => connexion()} className="w-1/4 h-10 rounded-xl bg-green-500 text-white font-bold transition-transform hover:scale-103 hover:-translate-y-1">Connexion</button>
        </div>
      </div>
    </>
  );
}
