## Transfer all SUI

- Project developed as answer to the question: https://forums.sui.io/t/how-to-transfer-all-sui/44877
- A simple node project, to transfer <b>all the SUI</b> owned by an address, to another one, without having to set the gas explicitly
- Outline:
  - Get the ids of all the `SUI coins owned` by the sender
  - Use the RPC call `unsafe_payAllSui` to build the transaction bytes of the wanted transfer operation
  - Retrieve the corresponding Sui TS SDK `TransactionBlock` object, based on these bytes
  - Sign and execute the `TransactionBlock`

### Project Structure

- This directory is a simple node project in Typescript
- Under the `src` directory, the structure is as follows:
  - `transfer`: the main script as a TS file
  - `config`: the script that reads the env variables and exports them to other TS scripts, as a TS file
  - `helpers`: multiple helper functions, written in separate files for better code readability

### Usage

- Prepare your `.env` file, following the structure of the `.env.example` file
- While being into the `transfer-all-sui`, run:
  - `npm install`
  - `npm run transfer`
