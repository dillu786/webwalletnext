import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";


export function SolanaWallet({ mnemonic }: { mnemonic: string }) {
    type Addresses = Record<string, string>;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState<Addresses[]>([]);

    return (
        <div>
            <button onClick={function () {
                const seed = mnemonicToSeed(mnemonic);
                const path = `m/44'/501'/${currentIndex}'/0'`;
                const derivedSeed = derivePath(path, seed.toString()).key;
                const secret = nacl.sign.keyPair.fromSeed(derivedSeed as any).secretKey;
                const keypair = Keypair.fromSecretKey(secret);
                
                let obj: Addresses = {};
                let sec = new TextDecoder().decode(keypair.secretKey);
                obj[sec] = keypair.publicKey.toBase58();

                setCurrentIndex(currentIndex + 1);
                setPublicKeys([...publicKeys, obj]);
            }}>
                Add wallet
            </button>
            
            {publicKeys.map((addressObj, index) => (
                <div key={index}>
                    {Object.keys(addressObj).map(key => (
                        <div key={key}>
                            <input type="password" value={key} readOnly />
                            <span> - {addressObj[key]}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
