import axios from "axios";

interface BuildTxBytesProps {
  fullNodeUrl: string;
  senderAddress: string;
  recipientAddress: string;
  coins: any;
  gasBudget: string;
}

export const buildTxBytes = async ({
  fullNodeUrl,
  senderAddress,
  recipientAddress,
  coins,
  gasBudget,
}: BuildTxBytesProps) => {
  const body = {
    jsonrpc: "2.0",
    id: 1,
    method: "unsafe_payAllSui",
    params: [
      senderAddress,
      coins.data.map((coin) => coin.coinObjectId),
      recipientAddress,
      gasBudget,
    ],
  };
  const txBytes = await axios
    .post(fullNodeUrl, body)
    .then((response) => {
      console.log("SUCCESS");
      return response.data.result.txBytes;
    })
    .catch((error) => {
      console.log("ERROR");
      console.error(JSON.stringify(error, null, 2));
    });
  return txBytes;
};
