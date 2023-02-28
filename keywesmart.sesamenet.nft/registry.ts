import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgMintNFT } from "./types/nft/tx";
import { MsgEditNFT } from "./types/nft/tx";
import { MsgTransferNFT } from "./types/nft/tx";
import { MsgBurnNFT } from "./types/nft/tx";
import { MsgIssueDenom } from "./types/nft/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/keywesmart.sesamenet.nft.MsgMintNFT", MsgMintNFT],
    ["/keywesmart.sesamenet.nft.MsgEditNFT", MsgEditNFT],
    ["/keywesmart.sesamenet.nft.MsgTransferNFT", MsgTransferNFT],
    ["/keywesmart.sesamenet.nft.MsgBurnNFT", MsgBurnNFT],
    ["/keywesmart.sesamenet.nft.MsgIssueDenom", MsgIssueDenom],
    
];

export { msgTypes }