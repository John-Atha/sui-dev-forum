import { Connection, JsonRpcProvider } from "@mysten/sui.js";
import { getSigner } from "./helpers/getSigner";
import { buildTxBytes } from "./helpers/buildTxBytes";
import { signAndExecuteFromTxBytes } from "./helpers/signAndExecuteFromTxBytes";
import {
  SENDER_ADDRESS,
  SENDER_SECRET_KEY,
  RECIPIENT_ADDRESS,
  SUI_NETWORK,
} from "./config";

const main = async () => {
  // preminilaries
  const GAS_BUDGET = "50000000000";
  const connection = new Connection({ fullnode: SUI_NETWORK });
  const provider = new JsonRpcProvider(connection);
  const signer = getSigner({ provider, secretKey: SENDER_SECRET_KEY });

  // check if sender has coins
  console.log("Getting coins of sender...");
  const coins = await provider.getCoins({
    owner: SENDER_ADDRESS,
    coinType: "0x2::sui::SUI",
  });
  if (!coins.data.length) {
    console.log("No coins to transfer");
    return;
  }

  // build tx bytes
  console.log("Making RPC call to build transaction bytes...");
  const txBytes = await buildTxBytes({
    fullNodeUrl: SUI_NETWORK,
    senderAddress: SENDER_ADDRESS,
    recipientAddress: RECIPIENT_ADDRESS,
    coins,
    gasBudget: GAS_BUDGET,
  });
  console.log("tx bytes:", txBytes);

  // sign and execute
  console.log("Executing transaction block...");
  await signAndExecuteFromTxBytes({ signer, txBytes });
};

main();
