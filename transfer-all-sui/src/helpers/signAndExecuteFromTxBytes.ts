import { RawSigner, TransactionBlock } from "@mysten/sui.js";

interface SignAndExecuteFromTxBytesProps {
  signer: RawSigner;
  txBytes: string;
}

export const signAndExecuteFromTxBytes = async ({
  signer,
  txBytes,
}: SignAndExecuteFromTxBytesProps) => {
  const tx = TransactionBlock.from(txBytes);
  await signer
    .signAndExecuteTransactionBlock({
      transactionBlock: tx,
      requestType: "WaitForLocalExecution",
    })
    .then((response) => {
      console.log("SUCCESS");
      console.log(response);
      console.log("All coins transferred!");
    })
    .catch((error) => {
      console.log("ERROR");
      console.error(JSON.stringify(error, null, 2));
    });
};
