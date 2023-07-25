import {
  Ed25519Keypair,
  JsonRpcProvider,
  RawSigner,
  fromB64,
} from "@mysten/sui.js";

interface GetSignerProps {
  provider: JsonRpcProvider;
  secretKey: string;
}

export const getSigner = ({ provider, secretKey }: GetSignerProps) => {
  let privateKeyArray = Uint8Array.from(Array.from(fromB64(secretKey)));
  const keypair = Ed25519Keypair.fromSecretKey(privateKeyArray.slice(1));
  const signer = new RawSigner(keypair, provider);
  return signer;
};
