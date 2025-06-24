"use client"
import { useState } from "react";
import { generateMnemonic } from 'bip39';
import { WalletType } from "@/app/page";
import { Button } from "./ui/Button";
import { SolanaWallet } from "./solanawallet";
import { EthWallet } from "./ethwallet";
export  function DisplayMnemonic({mnemonic}:
    {mnemonic:string
    
    }) {
  const [isExpand, setExpand] = useState<boolean>(false);
  const [addWallet,setAddWallet]=useState(false);
  const [copied, setCopied] = useState(false);
  //const [mnemonic, setMnemonic] = useState<string>("");

  return (
    <main>
      <div
        onClick={async () => {
          setExpand(!isExpand);
        }}
        className={`cursor-pointer w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-slate-200 rounded-2xl shadow-xl transition-all duration-500 ease-in-out ${isExpand ? 'h-[250px]' : 'h-[90px]'} hover:shadow-2xl group`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2 text-slate-700 font-bold text-lg md:text-xl">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 shadow">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75A4.5 4.5 0 008 6.75v3.75m8.25 0a2.25 2.25 0 11-4.5 0m4.5 0H7.5m8.25 0V17.25A2.25 2.25 0 0113.5 19.5h-3a2.25 2.25 0 01-2.25-2.25V10.5' />
              </svg>
            </span>
            Your Secret Phrase
          </div>
          <div className="flex items-center gap-2">
            {isExpand && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(mnemonic);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                className="px-3 py-1 rounded bg-blue-500 text-white text-sm font-semibold shadow hover:bg-blue-600 transition"
                title="Copy Secret Phrase"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            )}
            {isExpand ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 text-blue-500 group-hover:text-blue-700 transition"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 text-blue-500 group-hover:text-blue-700 transition"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            )}
          </div>
        </div>

        {isExpand && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4 px-6 pb-4 overflow-hidden">
            {mnemonic.split(' ').map((word, index) => (
              <span key={index} className="px-4 py-2 text-base font-semibold bg-blue-100 text-blue-700 rounded-full shadow-sm border border-blue-200 transition-all duration-300 ease-in-out hover:bg-blue-200">
                {word}
              </span>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
