// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgMintNFT } from "./types/nft/tx";
import { MsgEditNFT } from "./types/nft/tx";
import { MsgTransferNFT } from "./types/nft/tx";
import { MsgBurnNFT } from "./types/nft/tx";
import { MsgIssueDenom } from "./types/nft/tx";

import { BaseNFT as typeBaseNFT} from "./types"
import { Denom as typeDenom} from "./types"
import { QueryDenom as typeQueryDenom} from "./types"
import { IDCollection as typeIDCollection} from "./types"
import { Owner as typeOwner} from "./types"
import { Collection as typeCollection} from "./types"
import { QueryCollection as typeQueryCollection} from "./types"
import { Params as typeParams} from "./types"

export { MsgMintNFT, MsgEditNFT, MsgTransferNFT, MsgBurnNFT, MsgIssueDenom };

type sendMsgMintNFTParams = {
  value: MsgMintNFT,
  fee?: StdFee,
  memo?: string
};

type sendMsgEditNFTParams = {
  value: MsgEditNFT,
  fee?: StdFee,
  memo?: string
};

type sendMsgTransferNFTParams = {
  value: MsgTransferNFT,
  fee?: StdFee,
  memo?: string
};

type sendMsgBurnNFTParams = {
  value: MsgBurnNFT,
  fee?: StdFee,
  memo?: string
};

type sendMsgIssueDenomParams = {
  value: MsgIssueDenom,
  fee?: StdFee,
  memo?: string
};


type msgMintNFTParams = {
  value: MsgMintNFT,
};

type msgEditNFTParams = {
  value: MsgEditNFT,
};

type msgTransferNFTParams = {
  value: MsgTransferNFT,
};

type msgBurnNFTParams = {
  value: MsgBurnNFT,
};

type msgIssueDenomParams = {
  value: MsgIssueDenom,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgMintNFT({ value, fee, memo }: sendMsgMintNFTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgMintNFT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgMintNFT({ value: MsgMintNFT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgMintNFT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgEditNFT({ value, fee, memo }: sendMsgEditNFTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgEditNFT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgEditNFT({ value: MsgEditNFT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgEditNFT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgTransferNFT({ value, fee, memo }: sendMsgTransferNFTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTransferNFT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgTransferNFT({ value: MsgTransferNFT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTransferNFT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgBurnNFT({ value, fee, memo }: sendMsgBurnNFTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBurnNFT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBurnNFT({ value: MsgBurnNFT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBurnNFT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgIssueDenom({ value, fee, memo }: sendMsgIssueDenomParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgIssueDenom: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgIssueDenom({ value: MsgIssueDenom.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgIssueDenom: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgMintNFT({ value }: msgMintNFTParams): EncodeObject {
			try {
				return { typeUrl: "/keywesmart.sesamenet.nft.MsgMintNFT", value: MsgMintNFT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgMintNFT: Could not create message: ' + e.message)
			}
		},
		
		msgEditNFT({ value }: msgEditNFTParams): EncodeObject {
			try {
				return { typeUrl: "/keywesmart.sesamenet.nft.MsgEditNFT", value: MsgEditNFT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgEditNFT: Could not create message: ' + e.message)
			}
		},
		
		msgTransferNFT({ value }: msgTransferNFTParams): EncodeObject {
			try {
				return { typeUrl: "/keywesmart.sesamenet.nft.MsgTransferNFT", value: MsgTransferNFT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTransferNFT: Could not create message: ' + e.message)
			}
		},
		
		msgBurnNFT({ value }: msgBurnNFTParams): EncodeObject {
			try {
				return { typeUrl: "/keywesmart.sesamenet.nft.MsgBurnNFT", value: MsgBurnNFT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBurnNFT: Could not create message: ' + e.message)
			}
		},
		
		msgIssueDenom({ value }: msgIssueDenomParams): EncodeObject {
			try {
				return { typeUrl: "/keywesmart.sesamenet.nft.MsgIssueDenom", value: MsgIssueDenom.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgIssueDenom: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						BaseNFT: getStructure(typeBaseNFT.fromPartial({})),
						Denom: getStructure(typeDenom.fromPartial({})),
						QueryDenom: getStructure(typeQueryDenom.fromPartial({})),
						IDCollection: getStructure(typeIDCollection.fromPartial({})),
						Owner: getStructure(typeOwner.fromPartial({})),
						Collection: getStructure(typeCollection.fromPartial({})),
						QueryCollection: getStructure(typeQueryCollection.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			KeywesmartSesamenetNft: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;