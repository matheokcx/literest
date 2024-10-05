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
    <html>
      <div className="w-full h-full p-12 flex flex-row justify-center items-center bg-white text-black font-sans font-bold">
        <img src="/" alt="Illustration" className="w-full h-full hover:w-1/2 rounded-3xl" />
        <form onSubmit={() => connexion()}>
          <input type="mail" value={mail} name="mail" onChange={(e: any) => setMail(e.target.value)} placeholder="Votre adresse e-mail" className="" />
          <input type="password" value={motDePasse} name="password" onChange={(e: any) => setMotDePasse(e.target.value)} placeholder="Votre adresse e-mail" className="" />
          <button type="submit" value="Connexion" className=""> </button>
        </form>
      </div>
    </html>
  );
}
