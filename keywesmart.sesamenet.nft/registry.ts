import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgTransferNFT } from "./types/nft/tx";
import { MsgEditNFT } from "./types/nft/tx";
import { MsgBurnNFT } from "./types/nft/tx";
import { MsgIssueDenom } from "./types/nft/tx";
import { MsgMintNFT } from "./types/nft/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/keywesmart.sesamenet.nft.MsgTransferNFT", MsgTransferNFT],
    ["/keywesmart.sesamenet.nft.MsgEditNFT", MsgEditNFT],
    ["/keywesmart.sesamenet.nft.MsgBurnNFT", MsgBurnNFT],
    ["/keywesmart.sesamenet.nft.MsgIssueDenom", MsgIssueDenom],
    ["/keywesmart.sesamenet.nft.MsgMintNFT", MsgMintNFT],
    
];

export { msgTypes }