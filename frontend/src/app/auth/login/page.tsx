"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LogoSvg from "./Svgs/logo";
import LogoBgSvg from "./Svgs/logo-bg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="fixed top-[278px] left-[968px]">
        <LogoBgSvg />
      </div>
      <div className="flex flex-col w-[448px] h-[466px]">
        <div className="flex flex-col items-center justify-around h-[114px]">
          <LogoSvg />
          <h1 className="text-2xl mb-2 font-semibold tracking-[0.5px]">
            Bejelentkezés
          </h1>
        </div>
        <form className="bg-white p-6 rounded shadow-md border-1 border-primary-border">
          <div className="mb-4">
            <label
              className="block mb-2 font-semibold text-primary text-base
"
            >
              E-mail cím:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-1 border-primary-border rounded-sm w-[400px] text-input-color"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-semibold text-primary text-base
"
            >
              Jelszó:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-1 border-primary-border rounded-sm w-[400px] text-input-color"
              required
            />
          </div>
          <div className="flex items-center mb-4 text-input-color px-2 gap-x-2 text-sm">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me">Emlékezzen rám</label>
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--form-btn-color)] text-white p-2 rounded "
          >
            Bejelentkezés
          </button>
        </form>
      </div>
    </div>
  );
}
