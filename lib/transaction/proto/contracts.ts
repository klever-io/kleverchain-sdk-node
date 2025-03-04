/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";

export const protobufPackage = "proto";

/** TXContract available */
export interface TransferContract {
  ToAddress?: Uint8Array;
  AssetID?: Uint8Array;
  Amount?: number;
  KDARoyalties?: number;
  KLVRoyalties?: number;
}

/** CreateAssetContract holds the data for a Klever digital asset */
export interface CreateAssetContract {
  Type?: CreateAssetContract_EnumAssetType;
  Name?: Uint8Array;
  Ticker?: Uint8Array;
  OwnerAddress?: Uint8Array;
  Logo?: string;
  URIs?: { [key: string]: string };
  Precision?: number;
  InitialSupply?: number;
  MaxSupply?: number;
  Royalties?: RoyaltiesInfo;
  Properties?: PropertiesInfo;
  Attributes?: AttributesInfo;
  Staking?: StakingInfo;
  Roles?: RolesInfo[];
  AdminAddress?: Uint8Array;
}

export enum CreateAssetContract_EnumAssetType {
  Fungible = 0,
  NonFungible = 1,
  SemiFungible = 2,
  UNRECOGNIZED = -1,
}

export function createAssetContract_EnumAssetTypeFromJSON(object: any): CreateAssetContract_EnumAssetType {
  switch (object) {
    case 0:
    case "Fungible":
      return CreateAssetContract_EnumAssetType.Fungible;
    case 1:
    case "NonFungible":
      return CreateAssetContract_EnumAssetType.NonFungible;
    case 2:
    case "SemiFungible":
      return CreateAssetContract_EnumAssetType.SemiFungible;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CreateAssetContract_EnumAssetType.UNRECOGNIZED;
  }
}

export function createAssetContract_EnumAssetTypeToJSON(object: CreateAssetContract_EnumAssetType): number {
  switch (object) {
    case CreateAssetContract_EnumAssetType.Fungible:
      return 0;
    case CreateAssetContract_EnumAssetType.NonFungible:
      return 1;
    case CreateAssetContract_EnumAssetType.SemiFungible:
      return 2;
    case CreateAssetContract_EnumAssetType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface CreateAssetContract_URIsEntry {
  key: string;
  value: string;
}

/** PropertiesInfo hold the properties structure for the KDA asset */
export interface PropertiesInfo {
  CanFreeze?: boolean;
  CanWipe?: boolean;
  CanPause?: boolean;
  CanMint?: boolean;
  CanBurn?: boolean;
  CanChangeOwner?: boolean;
  CanAddRoles?: boolean;
  LimitTransfer?: boolean;
}

/** AttributesInfo hold the attributes structure for the KDA asset */
export interface AttributesInfo {
  IsPaused?: boolean;
  IsNFTMintStopped?: boolean;
  IsRoyaltiesChangeStopped?: boolean;
  IsNFTMetadataChangeStopped?: boolean;
}

/** StakingInfo hold the staking structure for the KDA asset */
export interface StakingInfo {
  Type?: StakingInfo_InterestType;
  APR?: number;
  MinEpochsToClaim?: number;
  MinEpochsToUnstake?: number;
  MinEpochsToWithdraw?: number;
}

export enum StakingInfo_InterestType {
  APRI = 0,
  FPRI = 1,
  UNRECOGNIZED = -1,
}

export function stakingInfo_InterestTypeFromJSON(object: any): StakingInfo_InterestType {
  switch (object) {
    case 0:
    case "APRI":
      return StakingInfo_InterestType.APRI;
    case 1:
    case "FPRI":
      return StakingInfo_InterestType.FPRI;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StakingInfo_InterestType.UNRECOGNIZED;
  }
}

export function stakingInfo_InterestTypeToJSON(object: StakingInfo_InterestType): number {
  switch (object) {
    case StakingInfo_InterestType.APRI:
      return 0;
    case StakingInfo_InterestType.FPRI:
      return 1;
    case StakingInfo_InterestType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** RolesInfo holds the roles for a given asset and the given address */
export interface RolesInfo {
  Address?: Uint8Array;
  HasRoleMint?: boolean;
  HasRoleSetITOPrices?: boolean;
  HasRoleDeposit?: boolean;
  HasRoleTransfer?: boolean;
}

/** RoyaltiesInfo holds the royalties for a given asset */
export interface RoyaltiesInfo {
  Address?: Uint8Array;
  TransferPercentage?: RoyaltyInfo[];
  TransferFixed?: number;
  MarketPercentage?: number;
  MarketFixed?: number;
  SplitRoyalties?: { [key: string]: RoyaltySplitInfo };
  ITOFixed?: number;
  ITOPercentage?: number;
}

export interface RoyaltiesInfo_SplitRoyaltiesEntry {
  key: string;
  value?: RoyaltySplitInfo;
}

/** RoyaltySplitInfo holds the royalty split */
export interface RoyaltySplitInfo {
  PercentTransferPercentage?: number;
  PercentTransferFixed?: number;
  PercentMarketPercentage?: number;
  PercentMarketFixed?: number;
  PercentITOPercentage?: number;
  PercentITOFixed?: number;
}

/** RoyaltyInfo holds the royalty threshold */
export interface RoyaltyInfo {
  Amount?: number;
  Percentage?: number;
}

/** KDAPoolInfo holds the KDA Fee pool info */
export interface KDAPoolInfo {
  Active?: boolean;
  AdminAddress?: Uint8Array;
  FRatioKDA?: number;
  FRatioKLV?: number;
}

/** AssetTriggerContract triggers assets functions */
export interface AssetTriggerContract {
  TriggerType?: AssetTriggerContract_EnumTriggerType;
  AssetID?: Uint8Array;
  ToAddress?: Uint8Array;
  Amount?: number;
  MIME?: Uint8Array;
  Logo?: string;
  URIs?: { [key: string]: string };
  Role?: RolesInfo;
  Staking?: StakingInfo;
  Royalties?: RoyaltiesInfo;
  KDAPool?: KDAPoolInfo;
  Value?: number;
}

export enum AssetTriggerContract_EnumTriggerType {
  Mint = 0,
  Burn = 1,
  Wipe = 2,
  Pause = 3,
  Resume = 4,
  ChangeOwner = 5,
  AddRole = 6,
  RemoveRole = 7,
  UpdateMetadata = 8,
  StopNFTMint = 9,
  UpdateLogo = 10,
  UpdateURIs = 11,
  ChangeRoyaltiesReceiver = 12,
  UpdateStaking = 13,
  UpdateRoyalties = 14,
  UpdateKDAFeePool = 15,
  StopRoyaltiesChange = 16,
  StopNFTMetadataChange = 17,
  ChangeAdmin = 18,
  UNRECOGNIZED = -1,
}

export function assetTriggerContract_EnumTriggerTypeFromJSON(object: any): AssetTriggerContract_EnumTriggerType {
  switch (object) {
    case 0:
    case "Mint":
      return AssetTriggerContract_EnumTriggerType.Mint;
    case 1:
    case "Burn":
      return AssetTriggerContract_EnumTriggerType.Burn;
    case 2:
    case "Wipe":
      return AssetTriggerContract_EnumTriggerType.Wipe;
    case 3:
    case "Pause":
      return AssetTriggerContract_EnumTriggerType.Pause;
    case 4:
    case "Resume":
      return AssetTriggerContract_EnumTriggerType.Resume;
    case 5:
    case "ChangeOwner":
      return AssetTriggerContract_EnumTriggerType.ChangeOwner;
    case 6:
    case "AddRole":
      return AssetTriggerContract_EnumTriggerType.AddRole;
    case 7:
    case "RemoveRole":
      return AssetTriggerContract_EnumTriggerType.RemoveRole;
    case 8:
    case "UpdateMetadata":
      return AssetTriggerContract_EnumTriggerType.UpdateMetadata;
    case 9:
    case "StopNFTMint":
      return AssetTriggerContract_EnumTriggerType.StopNFTMint;
    case 10:
    case "UpdateLogo":
      return AssetTriggerContract_EnumTriggerType.UpdateLogo;
    case 11:
    case "UpdateURIs":
      return AssetTriggerContract_EnumTriggerType.UpdateURIs;
    case 12:
    case "ChangeRoyaltiesReceiver":
      return AssetTriggerContract_EnumTriggerType.ChangeRoyaltiesReceiver;
    case 13:
    case "UpdateStaking":
      return AssetTriggerContract_EnumTriggerType.UpdateStaking;
    case 14:
    case "UpdateRoyalties":
      return AssetTriggerContract_EnumTriggerType.UpdateRoyalties;
    case 15:
    case "UpdateKDAFeePool":
      return AssetTriggerContract_EnumTriggerType.UpdateKDAFeePool;
    case 16:
    case "StopRoyaltiesChange":
      return AssetTriggerContract_EnumTriggerType.StopRoyaltiesChange;
    case 17:
    case "StopNFTMetadataChange":
      return AssetTriggerContract_EnumTriggerType.StopNFTMetadataChange;
    case 18:
    case "ChangeAdmin":
      return AssetTriggerContract_EnumTriggerType.ChangeAdmin;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AssetTriggerContract_EnumTriggerType.UNRECOGNIZED;
  }
}

export function assetTriggerContract_EnumTriggerTypeToJSON(object: AssetTriggerContract_EnumTriggerType): number {
  switch (object) {
    case AssetTriggerContract_EnumTriggerType.Mint:
      return 0;
    case AssetTriggerContract_EnumTriggerType.Burn:
      return 1;
    case AssetTriggerContract_EnumTriggerType.Wipe:
      return 2;
    case AssetTriggerContract_EnumTriggerType.Pause:
      return 3;
    case AssetTriggerContract_EnumTriggerType.Resume:
      return 4;
    case AssetTriggerContract_EnumTriggerType.ChangeOwner:
      return 5;
    case AssetTriggerContract_EnumTriggerType.AddRole:
      return 6;
    case AssetTriggerContract_EnumTriggerType.RemoveRole:
      return 7;
    case AssetTriggerContract_EnumTriggerType.UpdateMetadata:
      return 8;
    case AssetTriggerContract_EnumTriggerType.StopNFTMint:
      return 9;
    case AssetTriggerContract_EnumTriggerType.UpdateLogo:
      return 10;
    case AssetTriggerContract_EnumTriggerType.UpdateURIs:
      return 11;
    case AssetTriggerContract_EnumTriggerType.ChangeRoyaltiesReceiver:
      return 12;
    case AssetTriggerContract_EnumTriggerType.UpdateStaking:
      return 13;
    case AssetTriggerContract_EnumTriggerType.UpdateRoyalties:
      return 14;
    case AssetTriggerContract_EnumTriggerType.UpdateKDAFeePool:
      return 15;
    case AssetTriggerContract_EnumTriggerType.StopRoyaltiesChange:
      return 16;
    case AssetTriggerContract_EnumTriggerType.StopNFTMetadataChange:
      return 17;
    case AssetTriggerContract_EnumTriggerType.ChangeAdmin:
      return 18;
    case AssetTriggerContract_EnumTriggerType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface AssetTriggerContract_URIsEntry {
  key: string;
  value: string;
}

/** ValidatorConfig holds the data for a validator configuration */
export interface ValidatorConfig {
  BLSPublicKey?: Uint8Array;
  RewardAddress?: Uint8Array;
  CanDelegate?: boolean;
  Commission?: number;
  MaxDelegationAmount?: number;
  Logo?: string;
  URIs?: { [key: string]: string };
  Name?: string;
}

export interface ValidatorConfig_URIsEntry {
  key: string;
  value: string;
}

/** CreateValidatorContract holds the data for create a validator */
export interface CreateValidatorContract {
  OwnerAddress?: Uint8Array;
  Config?: ValidatorConfig;
}

/** ValidatorConfigContract holds the data for a validator configuration transaction */
export interface ValidatorConfigContract {
  Config?: ValidatorConfig;
}

/** FreezeContract holds the data for a freeze transaction */
export interface FreezeContract {
  AssetID?: Uint8Array;
  Amount?: number;
}

/** UnfreezeContract holds the data for a unfreeze transaction */
export interface UnfreezeContract {
  AssetID?: Uint8Array;
  BucketID?: Uint8Array;
}

/** DelegateContract holds the data for a delegate transaction */
export interface DelegateContract {
  ToAddress?: Uint8Array;
  BucketID?: Uint8Array;
}

/** UndelegateContract holds the data for a undelegate transaction */
export interface UndelegateContract {
  BucketID?: Uint8Array;
}

/** WithdrawContract holds the data for a withdraw transaction */
export interface WithdrawContract {
  AssetID?: Uint8Array;
  WithdrawType?: WithdrawContract_EnumWithdrawType;
  amount?: number;
  CurrencyID?: Uint8Array;
}

export enum WithdrawContract_EnumWithdrawType {
  Staking = 0,
  KDAPool = 1,
  UNRECOGNIZED = -1,
}

export function withdrawContract_EnumWithdrawTypeFromJSON(object: any): WithdrawContract_EnumWithdrawType {
  switch (object) {
    case 0:
    case "Staking":
      return WithdrawContract_EnumWithdrawType.Staking;
    case 1:
    case "KDAPool":
      return WithdrawContract_EnumWithdrawType.KDAPool;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WithdrawContract_EnumWithdrawType.UNRECOGNIZED;
  }
}

export function withdrawContract_EnumWithdrawTypeToJSON(object: WithdrawContract_EnumWithdrawType): number {
  switch (object) {
    case WithdrawContract_EnumWithdrawType.Staking:
      return 0;
    case WithdrawContract_EnumWithdrawType.KDAPool:
      return 1;
    case WithdrawContract_EnumWithdrawType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** ClaimContract holds the data for a claim transaction */
export interface ClaimContract {
  ClaimType?: ClaimContract_EnumClaimType;
  ID?: Uint8Array;
}

export enum ClaimContract_EnumClaimType {
  StakingClaim = 0,
  AllowanceClaim = 1,
  MarketClaim = 2,
  UNRECOGNIZED = -1,
}

export function claimContract_EnumClaimTypeFromJSON(object: any): ClaimContract_EnumClaimType {
  switch (object) {
    case 0:
    case "StakingClaim":
      return ClaimContract_EnumClaimType.StakingClaim;
    case 1:
    case "AllowanceClaim":
      return ClaimContract_EnumClaimType.AllowanceClaim;
    case 2:
    case "MarketClaim":
      return ClaimContract_EnumClaimType.MarketClaim;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimContract_EnumClaimType.UNRECOGNIZED;
  }
}

export function claimContract_EnumClaimTypeToJSON(object: ClaimContract_EnumClaimType): number {
  switch (object) {
    case ClaimContract_EnumClaimType.StakingClaim:
      return 0;
    case ClaimContract_EnumClaimType.AllowanceClaim:
      return 1;
    case ClaimContract_EnumClaimType.MarketClaim:
      return 2;
    case ClaimContract_EnumClaimType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** UnjailContract holds the data for a unjail transaction */
export interface UnjailContract {
}

/** SetAccountNameContract holds the data for a setAccountName transaction */
export interface SetAccountNameContract {
  Name?: Uint8Array;
}

/** ProposalContract holds the data for a proposal transaction */
export interface ProposalContract {
  Parameters?: { [key: number]: Uint8Array };
  Description?: Uint8Array;
  EpochsDuration?: number;
}

export interface ProposalContract_ParametersEntry {
  key: number;
  value: Uint8Array;
}

/** VoteContract holds the data for a vote transaction */
export interface VoteContract {
  ProposalID?: number;
  Amount?: number;
  Type?: VoteContract_EnumVoteType;
}

export enum VoteContract_EnumVoteType {
  Yes = 0,
  No = 1,
  UNRECOGNIZED = -1,
}

export function voteContract_EnumVoteTypeFromJSON(object: any): VoteContract_EnumVoteType {
  switch (object) {
    case 0:
    case "Yes":
      return VoteContract_EnumVoteType.Yes;
    case 1:
    case "No":
      return VoteContract_EnumVoteType.No;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteContract_EnumVoteType.UNRECOGNIZED;
  }
}

export function voteContract_EnumVoteTypeToJSON(object: VoteContract_EnumVoteType): number {
  switch (object) {
    case VoteContract_EnumVoteType.Yes:
      return 0;
    case VoteContract_EnumVoteType.No:
      return 1;
    case VoteContract_EnumVoteType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** ConfigITOContract holds the data for a ConfigITO transaction */
export interface ConfigITOContract {
  AssetID?: Uint8Array;
  ReceiverAddress?: Uint8Array;
  Status?: ConfigITOContract_EnumITOStatus;
  MaxAmount?: number;
  PackInfo?: { [key: string]: PackInfo };
  DefaultLimitPerAddress?: number;
  WhitelistStatus?: ConfigITOContract_EnumITOStatus;
  WhitelistInfo?: { [key: string]: WhitelistInfo };
  WhitelistStartTime?: number;
  WhitelistEndTime?: number;
  StartTime?: number;
  EndTime?: number;
}

export enum ConfigITOContract_EnumITOStatus {
  DefaultITO = 0,
  ActiveITO = 1,
  PausedITO = 2,
  UNRECOGNIZED = -1,
}

export function configITOContract_EnumITOStatusFromJSON(object: any): ConfigITOContract_EnumITOStatus {
  switch (object) {
    case 0:
    case "DefaultITO":
      return ConfigITOContract_EnumITOStatus.DefaultITO;
    case 1:
    case "ActiveITO":
      return ConfigITOContract_EnumITOStatus.ActiveITO;
    case 2:
    case "PausedITO":
      return ConfigITOContract_EnumITOStatus.PausedITO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConfigITOContract_EnumITOStatus.UNRECOGNIZED;
  }
}

export function configITOContract_EnumITOStatusToJSON(object: ConfigITOContract_EnumITOStatus): number {
  switch (object) {
    case ConfigITOContract_EnumITOStatus.DefaultITO:
      return 0;
    case ConfigITOContract_EnumITOStatus.ActiveITO:
      return 1;
    case ConfigITOContract_EnumITOStatus.PausedITO:
      return 2;
    case ConfigITOContract_EnumITOStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface ConfigITOContract_PackInfoEntry {
  key: string;
  value?: PackInfo;
}

export interface ConfigITOContract_WhitelistInfoEntry {
  key: string;
  value?: WhitelistInfo;
}

export interface WhitelistInfo {
  Limit?: number;
}

/** SetITOPrices holds the data for a ConfigITO transaction */
export interface SetITOPricesContract {
  AssetID?: Uint8Array;
  PackInfo?: { [key: string]: PackInfo };
}

export interface SetITOPricesContract_PackInfoEntry {
  key: string;
  value?: PackInfo;
}

/** ITOTriggerContract triggers assets functions */
export interface ITOTriggerContract {
  TriggerType?: ITOTriggerContract_EnumITOTriggerType;
  AssetID?: Uint8Array;
  ReceiverAddress?: Uint8Array;
  Status?: ITOTriggerContract_EnumITOStatus;
  MaxAmount?: number;
  PackInfo?: { [key: string]: PackInfo };
  DefaultLimitPerAddress?: number;
  WhitelistStatus?: ITOTriggerContract_EnumITOStatus;
  WhitelistInfo?: { [key: string]: WhitelistInfo };
  WhitelistStartTime?: number;
  WhitelistEndTime?: number;
  StartTime?: number;
  EndTime?: number;
}

export enum ITOTriggerContract_EnumITOTriggerType {
  SetITOPrices = 0,
  UpdateStatus = 1,
  UpdateReceiverAddress = 2,
  UpdateMaxAmount = 3,
  UpdateDefaultLimitPerAddress = 4,
  UpdateTimes = 5,
  UpdateWhitelistStatus = 6,
  AddToWhitelist = 7,
  RemoveFromWhitelist = 8,
  UpdateWhitelistTimes = 9,
  UNRECOGNIZED = -1,
}

export function iTOTriggerContract_EnumITOTriggerTypeFromJSON(object: any): ITOTriggerContract_EnumITOTriggerType {
  switch (object) {
    case 0:
    case "SetITOPrices":
      return ITOTriggerContract_EnumITOTriggerType.SetITOPrices;
    case 1:
    case "UpdateStatus":
      return ITOTriggerContract_EnumITOTriggerType.UpdateStatus;
    case 2:
    case "UpdateReceiverAddress":
      return ITOTriggerContract_EnumITOTriggerType.UpdateReceiverAddress;
    case 3:
    case "UpdateMaxAmount":
      return ITOTriggerContract_EnumITOTriggerType.UpdateMaxAmount;
    case 4:
    case "UpdateDefaultLimitPerAddress":
      return ITOTriggerContract_EnumITOTriggerType.UpdateDefaultLimitPerAddress;
    case 5:
    case "UpdateTimes":
      return ITOTriggerContract_EnumITOTriggerType.UpdateTimes;
    case 6:
    case "UpdateWhitelistStatus":
      return ITOTriggerContract_EnumITOTriggerType.UpdateWhitelistStatus;
    case 7:
    case "AddToWhitelist":
      return ITOTriggerContract_EnumITOTriggerType.AddToWhitelist;
    case 8:
    case "RemoveFromWhitelist":
      return ITOTriggerContract_EnumITOTriggerType.RemoveFromWhitelist;
    case 9:
    case "UpdateWhitelistTimes":
      return ITOTriggerContract_EnumITOTriggerType.UpdateWhitelistTimes;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ITOTriggerContract_EnumITOTriggerType.UNRECOGNIZED;
  }
}

export function iTOTriggerContract_EnumITOTriggerTypeToJSON(object: ITOTriggerContract_EnumITOTriggerType): number {
  switch (object) {
    case ITOTriggerContract_EnumITOTriggerType.SetITOPrices:
      return 0;
    case ITOTriggerContract_EnumITOTriggerType.UpdateStatus:
      return 1;
    case ITOTriggerContract_EnumITOTriggerType.UpdateReceiverAddress:
      return 2;
    case ITOTriggerContract_EnumITOTriggerType.UpdateMaxAmount:
      return 3;
    case ITOTriggerContract_EnumITOTriggerType.UpdateDefaultLimitPerAddress:
      return 4;
    case ITOTriggerContract_EnumITOTriggerType.UpdateTimes:
      return 5;
    case ITOTriggerContract_EnumITOTriggerType.UpdateWhitelistStatus:
      return 6;
    case ITOTriggerContract_EnumITOTriggerType.AddToWhitelist:
      return 7;
    case ITOTriggerContract_EnumITOTriggerType.RemoveFromWhitelist:
      return 8;
    case ITOTriggerContract_EnumITOTriggerType.UpdateWhitelistTimes:
      return 9;
    case ITOTriggerContract_EnumITOTriggerType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum ITOTriggerContract_EnumITOStatus {
  DefaultITO = 0,
  ActiveITO = 1,
  PausedITO = 2,
  UNRECOGNIZED = -1,
}

export function iTOTriggerContract_EnumITOStatusFromJSON(object: any): ITOTriggerContract_EnumITOStatus {
  switch (object) {
    case 0:
    case "DefaultITO":
      return ITOTriggerContract_EnumITOStatus.DefaultITO;
    case 1:
    case "ActiveITO":
      return ITOTriggerContract_EnumITOStatus.ActiveITO;
    case 2:
    case "PausedITO":
      return ITOTriggerContract_EnumITOStatus.PausedITO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ITOTriggerContract_EnumITOStatus.UNRECOGNIZED;
  }
}

export function iTOTriggerContract_EnumITOStatusToJSON(object: ITOTriggerContract_EnumITOStatus): number {
  switch (object) {
    case ITOTriggerContract_EnumITOStatus.DefaultITO:
      return 0;
    case ITOTriggerContract_EnumITOStatus.ActiveITO:
      return 1;
    case ITOTriggerContract_EnumITOStatus.PausedITO:
      return 2;
    case ITOTriggerContract_EnumITOStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface ITOTriggerContract_PackInfoEntry {
  key: string;
  value?: PackInfo;
}

export interface ITOTriggerContract_WhitelistInfoEntry {
  key: string;
  value?: WhitelistInfo;
}

/** PackInfo holds the pack list structure for the ITO contract */
export interface PackInfo {
  Packs?: PackItem[];
}

/** PackItem hold the pack structure for the ITO contract */
export interface PackItem {
  Amount?: number;
  Price?: number;
}

/** BuyContract holds the data for a buy transaction */
export interface BuyContract {
  BuyType?: BuyContract_EnumBuyType;
  ID?: Uint8Array;
  CurrencyID?: Uint8Array;
  Amount?: number;
  CurrencyAmount?: number;
}

export enum BuyContract_EnumBuyType {
  ITOBuy = 0,
  MarketBuy = 1,
  UNRECOGNIZED = -1,
}

export function buyContract_EnumBuyTypeFromJSON(object: any): BuyContract_EnumBuyType {
  switch (object) {
    case 0:
    case "ITOBuy":
      return BuyContract_EnumBuyType.ITOBuy;
    case 1:
    case "MarketBuy":
      return BuyContract_EnumBuyType.MarketBuy;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BuyContract_EnumBuyType.UNRECOGNIZED;
  }
}

export function buyContract_EnumBuyTypeToJSON(object: BuyContract_EnumBuyType): number {
  switch (object) {
    case BuyContract_EnumBuyType.ITOBuy:
      return 0;
    case BuyContract_EnumBuyType.MarketBuy:
      return 1;
    case BuyContract_EnumBuyType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** SellContract holds the data for a sell transaction */
export interface SellContract {
  MarketType?: SellContract_EnumMarketType;
  MarketplaceID?: Uint8Array;
  AssetID?: Uint8Array;
  CurrencyID?: Uint8Array;
  Price?: number;
  ReservePrice?: number;
  EndTime?: number;
}

export enum SellContract_EnumMarketType {
  BuyItNowMarket = 0,
  AuctionMarket = 1,
  UNRECOGNIZED = -1,
}

export function sellContract_EnumMarketTypeFromJSON(object: any): SellContract_EnumMarketType {
  switch (object) {
    case 0:
    case "BuyItNowMarket":
      return SellContract_EnumMarketType.BuyItNowMarket;
    case 1:
    case "AuctionMarket":
      return SellContract_EnumMarketType.AuctionMarket;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SellContract_EnumMarketType.UNRECOGNIZED;
  }
}

export function sellContract_EnumMarketTypeToJSON(object: SellContract_EnumMarketType): number {
  switch (object) {
    case SellContract_EnumMarketType.BuyItNowMarket:
      return 0;
    case SellContract_EnumMarketType.AuctionMarket:
      return 1;
    case SellContract_EnumMarketType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** CancelMarketOrderContract holds the data for a cancel market transaction */
export interface CancelMarketOrderContract {
  OrderID?: Uint8Array;
}

/** CreateMarketplaceContract holds the data for a create marketplace transaction */
export interface CreateMarketplaceContract {
  Name?: Uint8Array;
  ReferralAddress?: Uint8Array;
  ReferralPercentage?: number;
}

/** ConfigMarketplaceContract holds the data for a config marketplace transaction */
export interface ConfigMarketplaceContract {
  MarketplaceID?: Uint8Array;
  Name?: Uint8Array;
  ReferralAddress?: Uint8Array;
  ReferralPercentage?: number;
}

export interface AccKey {
  address?: Uint8Array;
  weight?: number;
}

export interface AccPermission {
  Type?: AccPermission_AccPermissionType;
  PermissionName?: string;
  Threshold?: number;
  /** 1 bit 1 contract */
  Operations?: Uint8Array;
  Signers?: AccKey[];
}

export enum AccPermission_AccPermissionType {
  Owner = 0,
  User = 1,
  UNRECOGNIZED = -1,
}

export function accPermission_AccPermissionTypeFromJSON(object: any): AccPermission_AccPermissionType {
  switch (object) {
    case 0:
    case "Owner":
      return AccPermission_AccPermissionType.Owner;
    case 1:
    case "User":
      return AccPermission_AccPermissionType.User;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccPermission_AccPermissionType.UNRECOGNIZED;
  }
}

export function accPermission_AccPermissionTypeToJSON(object: AccPermission_AccPermissionType): number {
  switch (object) {
    case AccPermission_AccPermissionType.Owner:
      return 0;
    case AccPermission_AccPermissionType.User:
      return 1;
    case AccPermission_AccPermissionType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** UpdateAccountPermissionContract holds the data for update account permission transaction */
export interface UpdateAccountPermissionContract {
  Permissions?: AccPermission[];
}

/** DepositContract holds the data for a deposit transaction */
export interface DepositContract {
  DepositType?: DepositContract_EnumDepositType;
  ID?: Uint8Array;
  CurrencyID?: Uint8Array;
  Amount?: number;
}

export enum DepositContract_EnumDepositType {
  FPRDeposit = 0,
  KDAPool = 1,
  UNRECOGNIZED = -1,
}

export function depositContract_EnumDepositTypeFromJSON(object: any): DepositContract_EnumDepositType {
  switch (object) {
    case 0:
    case "FPRDeposit":
      return DepositContract_EnumDepositType.FPRDeposit;
    case 1:
    case "KDAPool":
      return DepositContract_EnumDepositType.KDAPool;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositContract_EnumDepositType.UNRECOGNIZED;
  }
}

export function depositContract_EnumDepositTypeToJSON(object: DepositContract_EnumDepositType): number {
  switch (object) {
    case DepositContract_EnumDepositType.FPRDeposit:
      return 0;
    case DepositContract_EnumDepositType.KDAPool:
      return 1;
    case DepositContract_EnumDepositType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface CallValue {
  Amount?: number;
  KDARoyalties?: number;
  KLVRoyalties?: number;
}

export interface SmartContract {
  Type?: SmartContract_SCType;
  Address?: Uint8Array;
  /**
   * SmartContract CallValue is represented by a map of currencyID and amount
   *  should be limited to 50 currencies
   */
  CallValue?: { [key: string]: CallValue };
}

export enum SmartContract_SCType {
  SCInvoke = 0,
  SCDeploy = 1,
  UNRECOGNIZED = -1,
}

export function smartContract_SCTypeFromJSON(object: any): SmartContract_SCType {
  switch (object) {
    case 0:
    case "SCInvoke":
      return SmartContract_SCType.SCInvoke;
    case 1:
    case "SCDeploy":
      return SmartContract_SCType.SCDeploy;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SmartContract_SCType.UNRECOGNIZED;
  }
}

export function smartContract_SCTypeToJSON(object: SmartContract_SCType): number {
  switch (object) {
    case SmartContract_SCType.SCInvoke:
      return 0;
    case SmartContract_SCType.SCDeploy:
      return 1;
    case SmartContract_SCType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface SmartContract_CallValueEntry {
  key: string;
  value?: CallValue;
}

function createBaseTransferContract(): TransferContract {
  return { ToAddress: new Uint8Array(), AssetID: new Uint8Array(), Amount: 0, KDARoyalties: 0, KLVRoyalties: 0 };
}

export const TransferContract = {
  encode(message: TransferContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ToAddress !== undefined && message.ToAddress.length !== 0) {
      writer.uint32(10).bytes(message.ToAddress);
    }
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(18).bytes(message.AssetID);
    }
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(24).int64(message.Amount);
    }
    if (message.KDARoyalties !== undefined && message.KDARoyalties !== 0) {
      writer.uint32(32).int64(message.KDARoyalties);
    }
    if (message.KLVRoyalties !== undefined && message.KLVRoyalties !== 0) {
      writer.uint32(40).int64(message.KLVRoyalties);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ToAddress = reader.bytes();
          break;
        case 2:
          message.AssetID = reader.bytes();
          break;
        case 3:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.KDARoyalties = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.KLVRoyalties = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferContract {
    return {
      ToAddress: isSet(object["toAddress,omitempty"])
        ? bytesFromBase64(object["toAddress,omitempty"])
        : new Uint8Array(),
      AssetID: isSet(object["assetId,omitempty"]) ? bytesFromBase64(object["assetId,omitempty"]) : new Uint8Array(),
      Amount: isSet(object["amount,omitempty"]) ? Number(object["amount,omitempty"]) : 0,
      KDARoyalties: isSet(object["kdaRoyalties,omitempty"]) ? Number(object["kdaRoyalties,omitempty"]) : 0,
      KLVRoyalties: isSet(object["klvRoyalties,omitempty"]) ? Number(object["klvRoyalties,omitempty"]) : 0,
    };
  },

  toJSON(message: TransferContract): unknown {
    const obj: any = {};
    message.ToAddress !== undefined &&
      (obj["toAddress,omitempty"] = base64FromBytes(
        message.ToAddress !== undefined ? message.ToAddress : new Uint8Array(),
      ));
    message.AssetID !== undefined &&
      (obj["assetId,omitempty"] = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.Amount !== undefined && (obj["amount,omitempty"] = Math.round(message.Amount));
    message.KDARoyalties !== undefined && (obj["kdaRoyalties,omitempty"] = Math.round(message.KDARoyalties));
    message.KLVRoyalties !== undefined && (obj["klvRoyalties,omitempty"] = Math.round(message.KLVRoyalties));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransferContract>, I>>(object: I): TransferContract {
    const message = createBaseTransferContract();
    message.ToAddress = object.ToAddress ?? new Uint8Array();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.Amount = object.Amount ?? 0;
    message.KDARoyalties = object.KDARoyalties ?? 0;
    message.KLVRoyalties = object.KLVRoyalties ?? 0;
    return message;
  },
};

function createBaseCreateAssetContract(): CreateAssetContract {
  return {
    Type: 0,
    Name: new Uint8Array(),
    Ticker: new Uint8Array(),
    OwnerAddress: new Uint8Array(),
    Logo: "",
    URIs: {},
    Precision: 0,
    InitialSupply: 0,
    MaxSupply: 0,
    Royalties: undefined,
    Properties: undefined,
    Attributes: undefined,
    Staking: undefined,
    Roles: [],
    AdminAddress: new Uint8Array(),
  };
}

export const CreateAssetContract = {
  encode(message: CreateAssetContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== undefined && message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.Name !== undefined && message.Name.length !== 0) {
      writer.uint32(18).bytes(message.Name);
    }
    if (message.Ticker !== undefined && message.Ticker.length !== 0) {
      writer.uint32(26).bytes(message.Ticker);
    }
    if (message.OwnerAddress !== undefined && message.OwnerAddress.length !== 0) {
      writer.uint32(34).bytes(message.OwnerAddress);
    }
    if (message.Logo !== undefined && message.Logo !== "") {
      writer.uint32(42).string(message.Logo);
    }
    Object.entries(message.URIs || {}).forEach(([key, value]) => {
      CreateAssetContract_URIsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.Precision !== undefined && message.Precision !== 0) {
      writer.uint32(56).uint32(message.Precision);
    }
    if (message.InitialSupply !== undefined && message.InitialSupply !== 0) {
      writer.uint32(64).int64(message.InitialSupply);
    }
    if (message.MaxSupply !== undefined && message.MaxSupply !== 0) {
      writer.uint32(72).int64(message.MaxSupply);
    }
    if (message.Royalties !== undefined) {
      RoyaltiesInfo.encode(message.Royalties, writer.uint32(82).fork()).ldelim();
    }
    if (message.Properties !== undefined) {
      PropertiesInfo.encode(message.Properties, writer.uint32(90).fork()).ldelim();
    }
    if (message.Attributes !== undefined) {
      AttributesInfo.encode(message.Attributes, writer.uint32(98).fork()).ldelim();
    }
    if (message.Staking !== undefined) {
      StakingInfo.encode(message.Staking, writer.uint32(106).fork()).ldelim();
    }
    if (message.Roles !== undefined && message.Roles.length !== 0) {
      for (const v of message.Roles) {
        RolesInfo.encode(v!, writer.uint32(114).fork()).ldelim();
      }
    }
    if (message.AdminAddress !== undefined && message.AdminAddress.length !== 0) {
      writer.uint32(122).bytes(message.AdminAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAssetContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAssetContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.Name = reader.bytes();
          break;
        case 3:
          message.Ticker = reader.bytes();
          break;
        case 4:
          message.OwnerAddress = reader.bytes();
          break;
        case 5:
          message.Logo = reader.string();
          break;
        case 6:
          const entry6 = CreateAssetContract_URIsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.URIs![entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.Precision = reader.uint32();
          break;
        case 8:
          message.InitialSupply = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.MaxSupply = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.Royalties = RoyaltiesInfo.decode(reader, reader.uint32());
          break;
        case 11:
          message.Properties = PropertiesInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.Attributes = AttributesInfo.decode(reader, reader.uint32());
          break;
        case 13:
          message.Staking = StakingInfo.decode(reader, reader.uint32());
          break;
        case 14:
          message.Roles!.push(RolesInfo.decode(reader, reader.uint32()));
          break;
        case 15:
          message.AdminAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAssetContract {
    return {
      Type: isSet(object.type) ? createAssetContract_EnumAssetTypeFromJSON(object.type) : 0,
      Name: isSet(object.name) ? bytesFromBase64(object.name) : new Uint8Array(),
      Ticker: isSet(object.ticker) ? bytesFromBase64(object.ticker) : new Uint8Array(),
      OwnerAddress: isSet(object.ownerAddress) ? bytesFromBase64(object.ownerAddress) : new Uint8Array(),
      Logo: isSet(object.logo) ? String(object.logo) : "",
      URIs: isObject(object.uris)
        ? Object.entries(object.uris).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      Precision: isSet(object.precision) ? Number(object.precision) : 0,
      InitialSupply: isSet(object.initialSupply) ? Number(object.initialSupply) : 0,
      MaxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
      Royalties: isSet(object.royalties) ? RoyaltiesInfo.fromJSON(object.royalties) : undefined,
      Properties: isSet(object.properties) ? PropertiesInfo.fromJSON(object.properties) : undefined,
      Attributes: isSet(object.attributes) ? AttributesInfo.fromJSON(object.attributes) : undefined,
      Staking: isSet(object.staking) ? StakingInfo.fromJSON(object.staking) : undefined,
      Roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => RolesInfo.fromJSON(e)) : [],
      AdminAddress: isSet(object.adminAddress) ? bytesFromBase64(object.adminAddress) : new Uint8Array(),
    };
  },

  toJSON(message: CreateAssetContract): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.type = createAssetContract_EnumAssetTypeToJSON(message.Type));
    message.Name !== undefined &&
      (obj.name = base64FromBytes(message.Name !== undefined ? message.Name : new Uint8Array()));
    message.Ticker !== undefined &&
      (obj.ticker = base64FromBytes(message.Ticker !== undefined ? message.Ticker : new Uint8Array()));
    message.OwnerAddress !== undefined &&
      (obj.ownerAddress = base64FromBytes(
        message.OwnerAddress !== undefined ? message.OwnerAddress : new Uint8Array(),
      ));
    message.Logo !== undefined && (obj.logo = message.Logo);
    obj.uris = {};
    if (message.URIs) {
      Object.entries(message.URIs).forEach(([k, v]) => {
        obj.uris[k] = v;
      });
    }
    message.Precision !== undefined && (obj.precision = Math.round(message.Precision));
    message.InitialSupply !== undefined && (obj.initialSupply = Math.round(message.InitialSupply));
    message.MaxSupply !== undefined && (obj.maxSupply = Math.round(message.MaxSupply));
    message.Royalties !== undefined &&
      (obj.royalties = message.Royalties ? RoyaltiesInfo.toJSON(message.Royalties) : undefined);
    message.Properties !== undefined &&
      (obj.properties = message.Properties ? PropertiesInfo.toJSON(message.Properties) : undefined);
    message.Attributes !== undefined &&
      (obj.attributes = message.Attributes ? AttributesInfo.toJSON(message.Attributes) : undefined);
    message.Staking !== undefined && (obj.staking = message.Staking ? StakingInfo.toJSON(message.Staking) : undefined);
    if (message.Roles) {
      obj.roles = message.Roles.map((e) => e ? RolesInfo.toJSON(e) : undefined);
    } else {
      obj.roles = [];
    }
    message.AdminAddress !== undefined &&
      (obj.adminAddress = base64FromBytes(
        message.AdminAddress !== undefined ? message.AdminAddress : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateAssetContract>, I>>(object: I): CreateAssetContract {
    const message = createBaseCreateAssetContract();
    message.Type = object.Type ?? 0;
    message.Name = object.Name ?? new Uint8Array();
    message.Ticker = object.Ticker ?? new Uint8Array();
    message.OwnerAddress = object.OwnerAddress ?? new Uint8Array();
    message.Logo = object.Logo ?? "";
    message.URIs = Object.entries(object.URIs ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.Precision = object.Precision ?? 0;
    message.InitialSupply = object.InitialSupply ?? 0;
    message.MaxSupply = object.MaxSupply ?? 0;
    message.Royalties = (object.Royalties !== undefined && object.Royalties !== null)
      ? RoyaltiesInfo.fromPartial(object.Royalties)
      : undefined;
    message.Properties = (object.Properties !== undefined && object.Properties !== null)
      ? PropertiesInfo.fromPartial(object.Properties)
      : undefined;
    message.Attributes = (object.Attributes !== undefined && object.Attributes !== null)
      ? AttributesInfo.fromPartial(object.Attributes)
      : undefined;
    message.Staking = (object.Staking !== undefined && object.Staking !== null)
      ? StakingInfo.fromPartial(object.Staking)
      : undefined;
    message.Roles = object.Roles?.map((e) => RolesInfo.fromPartial(e)) || [];
    message.AdminAddress = object.AdminAddress ?? new Uint8Array();
    return message;
  },
};

function createBaseCreateAssetContract_URIsEntry(): CreateAssetContract_URIsEntry {
  return { key: "", value: "" };
}

export const CreateAssetContract_URIsEntry = {
  encode(message: CreateAssetContract_URIsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAssetContract_URIsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAssetContract_URIsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAssetContract_URIsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CreateAssetContract_URIsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateAssetContract_URIsEntry>, I>>(
    object: I,
  ): CreateAssetContract_URIsEntry {
    const message = createBaseCreateAssetContract_URIsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBasePropertiesInfo(): PropertiesInfo {
  return {
    CanFreeze: false,
    CanWipe: false,
    CanPause: false,
    CanMint: false,
    CanBurn: false,
    CanChangeOwner: false,
    CanAddRoles: false,
    LimitTransfer: false,
  };
}

export const PropertiesInfo = {
  encode(message: PropertiesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.CanFreeze === true) {
      writer.uint32(8).bool(message.CanFreeze);
    }
    if (message.CanWipe === true) {
      writer.uint32(16).bool(message.CanWipe);
    }
    if (message.CanPause === true) {
      writer.uint32(24).bool(message.CanPause);
    }
    if (message.CanMint === true) {
      writer.uint32(32).bool(message.CanMint);
    }
    if (message.CanBurn === true) {
      writer.uint32(40).bool(message.CanBurn);
    }
    if (message.CanChangeOwner === true) {
      writer.uint32(48).bool(message.CanChangeOwner);
    }
    if (message.CanAddRoles === true) {
      writer.uint32(56).bool(message.CanAddRoles);
    }
    if (message.LimitTransfer === true) {
      writer.uint32(64).bool(message.LimitTransfer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PropertiesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropertiesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CanFreeze = reader.bool();
          break;
        case 2:
          message.CanWipe = reader.bool();
          break;
        case 3:
          message.CanPause = reader.bool();
          break;
        case 4:
          message.CanMint = reader.bool();
          break;
        case 5:
          message.CanBurn = reader.bool();
          break;
        case 6:
          message.CanChangeOwner = reader.bool();
          break;
        case 7:
          message.CanAddRoles = reader.bool();
          break;
        case 8:
          message.LimitTransfer = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PropertiesInfo {
    return {
      CanFreeze: isSet(object.canFreeze) ? Boolean(object.canFreeze) : false,
      CanWipe: isSet(object.canWipe) ? Boolean(object.canWipe) : false,
      CanPause: isSet(object.canPause) ? Boolean(object.canPause) : false,
      CanMint: isSet(object.canMint) ? Boolean(object.canMint) : false,
      CanBurn: isSet(object.canBurn) ? Boolean(object.canBurn) : false,
      CanChangeOwner: isSet(object.canChangeOwner) ? Boolean(object.canChangeOwner) : false,
      CanAddRoles: isSet(object.canAddRoles) ? Boolean(object.canAddRoles) : false,
      LimitTransfer: isSet(object.limitTransfer) ? Boolean(object.limitTransfer) : false,
    };
  },

  toJSON(message: PropertiesInfo): unknown {
    const obj: any = {};
    message.CanFreeze !== undefined && (obj.canFreeze = message.CanFreeze);
    message.CanWipe !== undefined && (obj.canWipe = message.CanWipe);
    message.CanPause !== undefined && (obj.canPause = message.CanPause);
    message.CanMint !== undefined && (obj.canMint = message.CanMint);
    message.CanBurn !== undefined && (obj.canBurn = message.CanBurn);
    message.CanChangeOwner !== undefined && (obj.canChangeOwner = message.CanChangeOwner);
    message.CanAddRoles !== undefined && (obj.canAddRoles = message.CanAddRoles);
    message.LimitTransfer !== undefined && (obj.limitTransfer = message.LimitTransfer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PropertiesInfo>, I>>(object: I): PropertiesInfo {
    const message = createBasePropertiesInfo();
    message.CanFreeze = object.CanFreeze ?? false;
    message.CanWipe = object.CanWipe ?? false;
    message.CanPause = object.CanPause ?? false;
    message.CanMint = object.CanMint ?? false;
    message.CanBurn = object.CanBurn ?? false;
    message.CanChangeOwner = object.CanChangeOwner ?? false;
    message.CanAddRoles = object.CanAddRoles ?? false;
    message.LimitTransfer = object.LimitTransfer ?? false;
    return message;
  },
};

function createBaseAttributesInfo(): AttributesInfo {
  return {
    IsPaused: false,
    IsNFTMintStopped: false,
    IsRoyaltiesChangeStopped: false,
    IsNFTMetadataChangeStopped: false,
  };
}

export const AttributesInfo = {
  encode(message: AttributesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.IsPaused === true) {
      writer.uint32(8).bool(message.IsPaused);
    }
    if (message.IsNFTMintStopped === true) {
      writer.uint32(16).bool(message.IsNFTMintStopped);
    }
    if (message.IsRoyaltiesChangeStopped === true) {
      writer.uint32(24).bool(message.IsRoyaltiesChangeStopped);
    }
    if (message.IsNFTMetadataChangeStopped === true) {
      writer.uint32(32).bool(message.IsNFTMetadataChangeStopped);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.IsPaused = reader.bool();
          break;
        case 2:
          message.IsNFTMintStopped = reader.bool();
          break;
        case 3:
          message.IsRoyaltiesChangeStopped = reader.bool();
          break;
        case 4:
          message.IsNFTMetadataChangeStopped = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttributesInfo {
    return {
      IsPaused: isSet(object.isPaused) ? Boolean(object.isPaused) : false,
      IsNFTMintStopped: isSet(object.isNFTMintStopped) ? Boolean(object.isNFTMintStopped) : false,
      IsRoyaltiesChangeStopped: isSet(object.isRoyaltiesChangeStopped)
        ? Boolean(object.isRoyaltiesChangeStopped)
        : false,
      IsNFTMetadataChangeStopped: isSet(object.isNFTMetadataChangeStopped)
        ? Boolean(object.isNFTMetadataChangeStopped)
        : false,
    };
  },

  toJSON(message: AttributesInfo): unknown {
    const obj: any = {};
    message.IsPaused !== undefined && (obj.isPaused = message.IsPaused);
    message.IsNFTMintStopped !== undefined && (obj.isNFTMintStopped = message.IsNFTMintStopped);
    message.IsRoyaltiesChangeStopped !== undefined && (obj.isRoyaltiesChangeStopped = message.IsRoyaltiesChangeStopped);
    message.IsNFTMetadataChangeStopped !== undefined &&
      (obj.isNFTMetadataChangeStopped = message.IsNFTMetadataChangeStopped);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttributesInfo>, I>>(object: I): AttributesInfo {
    const message = createBaseAttributesInfo();
    message.IsPaused = object.IsPaused ?? false;
    message.IsNFTMintStopped = object.IsNFTMintStopped ?? false;
    message.IsRoyaltiesChangeStopped = object.IsRoyaltiesChangeStopped ?? false;
    message.IsNFTMetadataChangeStopped = object.IsNFTMetadataChangeStopped ?? false;
    return message;
  },
};

function createBaseStakingInfo(): StakingInfo {
  return { Type: 0, APR: 0, MinEpochsToClaim: 0, MinEpochsToUnstake: 0, MinEpochsToWithdraw: 0 };
}

export const StakingInfo = {
  encode(message: StakingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== undefined && message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.APR !== undefined && message.APR !== 0) {
      writer.uint32(16).uint32(message.APR);
    }
    if (message.MinEpochsToClaim !== undefined && message.MinEpochsToClaim !== 0) {
      writer.uint32(24).uint32(message.MinEpochsToClaim);
    }
    if (message.MinEpochsToUnstake !== undefined && message.MinEpochsToUnstake !== 0) {
      writer.uint32(32).uint32(message.MinEpochsToUnstake);
    }
    if (message.MinEpochsToWithdraw !== undefined && message.MinEpochsToWithdraw !== 0) {
      writer.uint32(40).uint32(message.MinEpochsToWithdraw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.APR = reader.uint32();
          break;
        case 3:
          message.MinEpochsToClaim = reader.uint32();
          break;
        case 4:
          message.MinEpochsToUnstake = reader.uint32();
          break;
        case 5:
          message.MinEpochsToWithdraw = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakingInfo {
    return {
      Type: isSet(object.type) ? stakingInfo_InterestTypeFromJSON(object.type) : 0,
      APR: isSet(object.apr) ? Number(object.apr) : 0,
      MinEpochsToClaim: isSet(object.minEpochsToClaim) ? Number(object.minEpochsToClaim) : 0,
      MinEpochsToUnstake: isSet(object.minEpochsToUnstake) ? Number(object.minEpochsToUnstake) : 0,
      MinEpochsToWithdraw: isSet(object.minEpochsToWithdraw) ? Number(object.minEpochsToWithdraw) : 0,
    };
  },

  toJSON(message: StakingInfo): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.type = stakingInfo_InterestTypeToJSON(message.Type));
    message.APR !== undefined && (obj.apr = Math.round(message.APR));
    message.MinEpochsToClaim !== undefined && (obj.minEpochsToClaim = Math.round(message.MinEpochsToClaim));
    message.MinEpochsToUnstake !== undefined && (obj.minEpochsToUnstake = Math.round(message.MinEpochsToUnstake));
    message.MinEpochsToWithdraw !== undefined && (obj.minEpochsToWithdraw = Math.round(message.MinEpochsToWithdraw));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakingInfo>, I>>(object: I): StakingInfo {
    const message = createBaseStakingInfo();
    message.Type = object.Type ?? 0;
    message.APR = object.APR ?? 0;
    message.MinEpochsToClaim = object.MinEpochsToClaim ?? 0;
    message.MinEpochsToUnstake = object.MinEpochsToUnstake ?? 0;
    message.MinEpochsToWithdraw = object.MinEpochsToWithdraw ?? 0;
    return message;
  },
};

function createBaseRolesInfo(): RolesInfo {
  return {
    Address: new Uint8Array(),
    HasRoleMint: false,
    HasRoleSetITOPrices: false,
    HasRoleDeposit: false,
    HasRoleTransfer: false,
  };
}

export const RolesInfo = {
  encode(message: RolesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Address !== undefined && message.Address.length !== 0) {
      writer.uint32(10).bytes(message.Address);
    }
    if (message.HasRoleMint === true) {
      writer.uint32(16).bool(message.HasRoleMint);
    }
    if (message.HasRoleSetITOPrices === true) {
      writer.uint32(24).bool(message.HasRoleSetITOPrices);
    }
    if (message.HasRoleDeposit === true) {
      writer.uint32(32).bool(message.HasRoleDeposit);
    }
    if (message.HasRoleTransfer === true) {
      writer.uint32(40).bool(message.HasRoleTransfer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RolesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRolesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Address = reader.bytes();
          break;
        case 2:
          message.HasRoleMint = reader.bool();
          break;
        case 3:
          message.HasRoleSetITOPrices = reader.bool();
          break;
        case 4:
          message.HasRoleDeposit = reader.bool();
          break;
        case 5:
          message.HasRoleTransfer = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RolesInfo {
    return {
      Address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      HasRoleMint: isSet(object.hasRoleMint) ? Boolean(object.hasRoleMint) : false,
      HasRoleSetITOPrices: isSet(object.hasRoleSetITOPrices) ? Boolean(object.hasRoleSetITOPrices) : false,
      HasRoleDeposit: isSet(object.hasRoleDeposit) ? Boolean(object.hasRoleDeposit) : false,
      HasRoleTransfer: isSet(object.hasRoleTransfer) ? Boolean(object.hasRoleTransfer) : false,
    };
  },

  toJSON(message: RolesInfo): unknown {
    const obj: any = {};
    message.Address !== undefined &&
      (obj.address = base64FromBytes(message.Address !== undefined ? message.Address : new Uint8Array()));
    message.HasRoleMint !== undefined && (obj.hasRoleMint = message.HasRoleMint);
    message.HasRoleSetITOPrices !== undefined && (obj.hasRoleSetITOPrices = message.HasRoleSetITOPrices);
    message.HasRoleDeposit !== undefined && (obj.hasRoleDeposit = message.HasRoleDeposit);
    message.HasRoleTransfer !== undefined && (obj.hasRoleTransfer = message.HasRoleTransfer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RolesInfo>, I>>(object: I): RolesInfo {
    const message = createBaseRolesInfo();
    message.Address = object.Address ?? new Uint8Array();
    message.HasRoleMint = object.HasRoleMint ?? false;
    message.HasRoleSetITOPrices = object.HasRoleSetITOPrices ?? false;
    message.HasRoleDeposit = object.HasRoleDeposit ?? false;
    message.HasRoleTransfer = object.HasRoleTransfer ?? false;
    return message;
  },
};

function createBaseRoyaltiesInfo(): RoyaltiesInfo {
  return {
    Address: new Uint8Array(),
    TransferPercentage: [],
    TransferFixed: 0,
    MarketPercentage: 0,
    MarketFixed: 0,
    SplitRoyalties: {},
    ITOFixed: 0,
    ITOPercentage: 0,
  };
}

export const RoyaltiesInfo = {
  encode(message: RoyaltiesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Address !== undefined && message.Address.length !== 0) {
      writer.uint32(10).bytes(message.Address);
    }
    if (message.TransferPercentage !== undefined && message.TransferPercentage.length !== 0) {
      for (const v of message.TransferPercentage) {
        RoyaltyInfo.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.TransferFixed !== undefined && message.TransferFixed !== 0) {
      writer.uint32(24).int64(message.TransferFixed);
    }
    if (message.MarketPercentage !== undefined && message.MarketPercentage !== 0) {
      writer.uint32(32).uint32(message.MarketPercentage);
    }
    if (message.MarketFixed !== undefined && message.MarketFixed !== 0) {
      writer.uint32(40).int64(message.MarketFixed);
    }
    Object.entries(message.SplitRoyalties || {}).forEach(([key, value]) => {
      RoyaltiesInfo_SplitRoyaltiesEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.ITOFixed !== undefined && message.ITOFixed !== 0) {
      writer.uint32(56).int64(message.ITOFixed);
    }
    if (message.ITOPercentage !== undefined && message.ITOPercentage !== 0) {
      writer.uint32(64).uint32(message.ITOPercentage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltiesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltiesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Address = reader.bytes();
          break;
        case 2:
          message.TransferPercentage!.push(RoyaltyInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.TransferFixed = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.MarketPercentage = reader.uint32();
          break;
        case 5:
          message.MarketFixed = longToNumber(reader.int64() as Long);
          break;
        case 6:
          const entry6 = RoyaltiesInfo_SplitRoyaltiesEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.SplitRoyalties![entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.ITOFixed = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.ITOPercentage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoyaltiesInfo {
    return {
      Address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      TransferPercentage: Array.isArray(object?.transferPercentage)
        ? object.transferPercentage.map((e: any) => RoyaltyInfo.fromJSON(e))
        : [],
      TransferFixed: isSet(object.transferFixed) ? Number(object.transferFixed) : 0,
      MarketPercentage: isSet(object.marketPercentage) ? Number(object.marketPercentage) : 0,
      MarketFixed: isSet(object.marketFixed) ? Number(object.marketFixed) : 0,
      SplitRoyalties: isObject(object.splitRoyalties)
        ? Object.entries(object.splitRoyalties).reduce<{ [key: string]: RoyaltySplitInfo }>((acc, [key, value]) => {
          acc[key] = RoyaltySplitInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      ITOFixed: isSet(object.itoFixed) ? Number(object.itoFixed) : 0,
      ITOPercentage: isSet(object.itoPercentage) ? Number(object.itoPercentage) : 0,
    };
  },

  toJSON(message: RoyaltiesInfo): unknown {
    const obj: any = {};
    message.Address !== undefined &&
      (obj.address = base64FromBytes(message.Address !== undefined ? message.Address : new Uint8Array()));
    if (message.TransferPercentage) {
      obj.transferPercentage = message.TransferPercentage.map((e) => e ? RoyaltyInfo.toJSON(e) : undefined);
    } else {
      obj.transferPercentage = [];
    }
    message.TransferFixed !== undefined && (obj.transferFixed = Math.round(message.TransferFixed));
    message.MarketPercentage !== undefined && (obj.marketPercentage = Math.round(message.MarketPercentage));
    message.MarketFixed !== undefined && (obj.marketFixed = Math.round(message.MarketFixed));
    obj.splitRoyalties = {};
    if (message.SplitRoyalties) {
      Object.entries(message.SplitRoyalties).forEach(([k, v]) => {
        obj.splitRoyalties[k] = RoyaltySplitInfo.toJSON(v);
      });
    }
    message.ITOFixed !== undefined && (obj.itoFixed = Math.round(message.ITOFixed));
    message.ITOPercentage !== undefined && (obj.itoPercentage = Math.round(message.ITOPercentage));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoyaltiesInfo>, I>>(object: I): RoyaltiesInfo {
    const message = createBaseRoyaltiesInfo();
    message.Address = object.Address ?? new Uint8Array();
    message.TransferPercentage = object.TransferPercentage?.map((e) => RoyaltyInfo.fromPartial(e)) || [];
    message.TransferFixed = object.TransferFixed ?? 0;
    message.MarketPercentage = object.MarketPercentage ?? 0;
    message.MarketFixed = object.MarketFixed ?? 0;
    message.SplitRoyalties = Object.entries(object.SplitRoyalties ?? {}).reduce<{ [key: string]: RoyaltySplitInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = RoyaltySplitInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.ITOFixed = object.ITOFixed ?? 0;
    message.ITOPercentage = object.ITOPercentage ?? 0;
    return message;
  },
};

function createBaseRoyaltiesInfo_SplitRoyaltiesEntry(): RoyaltiesInfo_SplitRoyaltiesEntry {
  return { key: "", value: undefined };
}

export const RoyaltiesInfo_SplitRoyaltiesEntry = {
  encode(message: RoyaltiesInfo_SplitRoyaltiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      RoyaltySplitInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltiesInfo_SplitRoyaltiesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltiesInfo_SplitRoyaltiesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = RoyaltySplitInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoyaltiesInfo_SplitRoyaltiesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? RoyaltySplitInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: RoyaltiesInfo_SplitRoyaltiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? RoyaltySplitInfo.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoyaltiesInfo_SplitRoyaltiesEntry>, I>>(
    object: I,
  ): RoyaltiesInfo_SplitRoyaltiesEntry {
    const message = createBaseRoyaltiesInfo_SplitRoyaltiesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? RoyaltySplitInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseRoyaltySplitInfo(): RoyaltySplitInfo {
  return {
    PercentTransferPercentage: 0,
    PercentTransferFixed: 0,
    PercentMarketPercentage: 0,
    PercentMarketFixed: 0,
    PercentITOPercentage: 0,
    PercentITOFixed: 0,
  };
}

export const RoyaltySplitInfo = {
  encode(message: RoyaltySplitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PercentTransferPercentage !== undefined && message.PercentTransferPercentage !== 0) {
      writer.uint32(8).uint32(message.PercentTransferPercentage);
    }
    if (message.PercentTransferFixed !== undefined && message.PercentTransferFixed !== 0) {
      writer.uint32(16).uint32(message.PercentTransferFixed);
    }
    if (message.PercentMarketPercentage !== undefined && message.PercentMarketPercentage !== 0) {
      writer.uint32(24).uint32(message.PercentMarketPercentage);
    }
    if (message.PercentMarketFixed !== undefined && message.PercentMarketFixed !== 0) {
      writer.uint32(32).uint32(message.PercentMarketFixed);
    }
    if (message.PercentITOPercentage !== undefined && message.PercentITOPercentage !== 0) {
      writer.uint32(40).uint32(message.PercentITOPercentage);
    }
    if (message.PercentITOFixed !== undefined && message.PercentITOFixed !== 0) {
      writer.uint32(48).uint32(message.PercentITOFixed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltySplitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltySplitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PercentTransferPercentage = reader.uint32();
          break;
        case 2:
          message.PercentTransferFixed = reader.uint32();
          break;
        case 3:
          message.PercentMarketPercentage = reader.uint32();
          break;
        case 4:
          message.PercentMarketFixed = reader.uint32();
          break;
        case 5:
          message.PercentITOPercentage = reader.uint32();
          break;
        case 6:
          message.PercentITOFixed = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoyaltySplitInfo {
    return {
      PercentTransferPercentage: isSet(object.percentTransferPercentage) ? Number(object.percentTransferPercentage) : 0,
      PercentTransferFixed: isSet(object.percentTransferFixed) ? Number(object.percentTransferFixed) : 0,
      PercentMarketPercentage: isSet(object.percentMarketPercentage) ? Number(object.percentMarketPercentage) : 0,
      PercentMarketFixed: isSet(object.percentMarketFixed) ? Number(object.percentMarketFixed) : 0,
      PercentITOPercentage: isSet(object.percentITOPercentage) ? Number(object.percentITOPercentage) : 0,
      PercentITOFixed: isSet(object.percentITOFixed) ? Number(object.percentITOFixed) : 0,
    };
  },

  toJSON(message: RoyaltySplitInfo): unknown {
    const obj: any = {};
    message.PercentTransferPercentage !== undefined &&
      (obj.percentTransferPercentage = Math.round(message.PercentTransferPercentage));
    message.PercentTransferFixed !== undefined && (obj.percentTransferFixed = Math.round(message.PercentTransferFixed));
    message.PercentMarketPercentage !== undefined &&
      (obj.percentMarketPercentage = Math.round(message.PercentMarketPercentage));
    message.PercentMarketFixed !== undefined && (obj.percentMarketFixed = Math.round(message.PercentMarketFixed));
    message.PercentITOPercentage !== undefined && (obj.percentITOPercentage = Math.round(message.PercentITOPercentage));
    message.PercentITOFixed !== undefined && (obj.percentITOFixed = Math.round(message.PercentITOFixed));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoyaltySplitInfo>, I>>(object: I): RoyaltySplitInfo {
    const message = createBaseRoyaltySplitInfo();
    message.PercentTransferPercentage = object.PercentTransferPercentage ?? 0;
    message.PercentTransferFixed = object.PercentTransferFixed ?? 0;
    message.PercentMarketPercentage = object.PercentMarketPercentage ?? 0;
    message.PercentMarketFixed = object.PercentMarketFixed ?? 0;
    message.PercentITOPercentage = object.PercentITOPercentage ?? 0;
    message.PercentITOFixed = object.PercentITOFixed ?? 0;
    return message;
  },
};

function createBaseRoyaltyInfo(): RoyaltyInfo {
  return { Amount: 0, Percentage: 0 };
}

export const RoyaltyInfo = {
  encode(message: RoyaltyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(8).int64(message.Amount);
    }
    if (message.Percentage !== undefined && message.Percentage !== 0) {
      writer.uint32(16).uint32(message.Percentage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.Percentage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoyaltyInfo {
    return {
      Amount: isSet(object.amount) ? Number(object.amount) : 0,
      Percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
    };
  },

  toJSON(message: RoyaltyInfo): unknown {
    const obj: any = {};
    message.Amount !== undefined && (obj.amount = Math.round(message.Amount));
    message.Percentage !== undefined && (obj.percentage = Math.round(message.Percentage));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoyaltyInfo>, I>>(object: I): RoyaltyInfo {
    const message = createBaseRoyaltyInfo();
    message.Amount = object.Amount ?? 0;
    message.Percentage = object.Percentage ?? 0;
    return message;
  },
};

function createBaseKDAPoolInfo(): KDAPoolInfo {
  return { Active: false, AdminAddress: new Uint8Array(), FRatioKDA: 0, FRatioKLV: 0 };
}

export const KDAPoolInfo = {
  encode(message: KDAPoolInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Active === true) {
      writer.uint32(8).bool(message.Active);
    }
    if (message.AdminAddress !== undefined && message.AdminAddress.length !== 0) {
      writer.uint32(18).bytes(message.AdminAddress);
    }
    if (message.FRatioKDA !== undefined && message.FRatioKDA !== 0) {
      writer.uint32(24).int64(message.FRatioKDA);
    }
    if (message.FRatioKLV !== undefined && message.FRatioKLV !== 0) {
      writer.uint32(32).int64(message.FRatioKLV);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KDAPoolInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKDAPoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Active = reader.bool();
          break;
        case 2:
          message.AdminAddress = reader.bytes();
          break;
        case 3:
          message.FRatioKDA = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.FRatioKLV = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KDAPoolInfo {
    return {
      Active: isSet(object.active) ? Boolean(object.active) : false,
      AdminAddress: isSet(object.adminAddress) ? bytesFromBase64(object.adminAddress) : new Uint8Array(),
      FRatioKDA: isSet(object.fRatioKDA) ? Number(object.fRatioKDA) : 0,
      FRatioKLV: isSet(object.fRatioKLV) ? Number(object.fRatioKLV) : 0,
    };
  },

  toJSON(message: KDAPoolInfo): unknown {
    const obj: any = {};
    message.Active !== undefined && (obj.active = message.Active);
    message.AdminAddress !== undefined &&
      (obj.adminAddress = base64FromBytes(
        message.AdminAddress !== undefined ? message.AdminAddress : new Uint8Array(),
      ));
    message.FRatioKDA !== undefined && (obj.fRatioKDA = Math.round(message.FRatioKDA));
    message.FRatioKLV !== undefined && (obj.fRatioKLV = Math.round(message.FRatioKLV));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KDAPoolInfo>, I>>(object: I): KDAPoolInfo {
    const message = createBaseKDAPoolInfo();
    message.Active = object.Active ?? false;
    message.AdminAddress = object.AdminAddress ?? new Uint8Array();
    message.FRatioKDA = object.FRatioKDA ?? 0;
    message.FRatioKLV = object.FRatioKLV ?? 0;
    return message;
  },
};

function createBaseAssetTriggerContract(): AssetTriggerContract {
  return {
    TriggerType: 0,
    AssetID: new Uint8Array(),
    ToAddress: new Uint8Array(),
    Amount: 0,
    MIME: new Uint8Array(),
    Logo: "",
    URIs: {},
    Role: undefined,
    Staking: undefined,
    Royalties: undefined,
    KDAPool: undefined,
    Value: 0,
  };
}

export const AssetTriggerContract = {
  encode(message: AssetTriggerContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TriggerType !== undefined && message.TriggerType !== 0) {
      writer.uint32(8).int32(message.TriggerType);
    }
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(18).bytes(message.AssetID);
    }
    if (message.ToAddress !== undefined && message.ToAddress.length !== 0) {
      writer.uint32(26).bytes(message.ToAddress);
    }
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(32).int64(message.Amount);
    }
    if (message.MIME !== undefined && message.MIME.length !== 0) {
      writer.uint32(42).bytes(message.MIME);
    }
    if (message.Logo !== undefined && message.Logo !== "") {
      writer.uint32(50).string(message.Logo);
    }
    Object.entries(message.URIs || {}).forEach(([key, value]) => {
      AssetTriggerContract_URIsEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    if (message.Role !== undefined) {
      RolesInfo.encode(message.Role, writer.uint32(66).fork()).ldelim();
    }
    if (message.Staking !== undefined) {
      StakingInfo.encode(message.Staking, writer.uint32(74).fork()).ldelim();
    }
    if (message.Royalties !== undefined) {
      RoyaltiesInfo.encode(message.Royalties, writer.uint32(82).fork()).ldelim();
    }
    if (message.KDAPool !== undefined) {
      KDAPoolInfo.encode(message.KDAPool, writer.uint32(90).fork()).ldelim();
    }
    if (message.Value !== undefined && message.Value !== 0) {
      writer.uint32(96).int64(message.Value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTriggerContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTriggerContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TriggerType = reader.int32() as any;
          break;
        case 2:
          message.AssetID = reader.bytes();
          break;
        case 3:
          message.ToAddress = reader.bytes();
          break;
        case 4:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.MIME = reader.bytes();
          break;
        case 6:
          message.Logo = reader.string();
          break;
        case 7:
          const entry7 = AssetTriggerContract_URIsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.URIs![entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.Role = RolesInfo.decode(reader, reader.uint32());
          break;
        case 9:
          message.Staking = StakingInfo.decode(reader, reader.uint32());
          break;
        case 10:
          message.Royalties = RoyaltiesInfo.decode(reader, reader.uint32());
          break;
        case 11:
          message.KDAPool = KDAPoolInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.Value = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetTriggerContract {
    return {
      TriggerType: isSet(object.triggerType) ? assetTriggerContract_EnumTriggerTypeFromJSON(object.triggerType) : 0,
      AssetID: isSet(object.assetId) ? bytesFromBase64(object.assetId) : new Uint8Array(),
      ToAddress: isSet(object["toAddress,omitempty"])
        ? bytesFromBase64(object["toAddress,omitempty"])
        : new Uint8Array(),
      Amount: isSet(object["amount,omitempty"]) ? Number(object["amount,omitempty"]) : 0,
      MIME: isSet(object["mime,omitempty"]) ? bytesFromBase64(object["mime,omitempty"]) : new Uint8Array(),
      Logo: isSet(object["logo,omitempty"]) ? String(object["logo,omitempty"]) : "",
      URIs: isObject(object["uris,omitempty"])
        ? Object.entries(object["uris,omitempty"]).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      Role: isSet(object["role,omitempty"]) ? RolesInfo.fromJSON(object["role,omitempty"]) : undefined,
      Staking: isSet(object["staking,omitempty"]) ? StakingInfo.fromJSON(object["staking,omitempty"]) : undefined,
      Royalties: isSet(object["royalties,omitempty"])
        ? RoyaltiesInfo.fromJSON(object["royalties,omitempty"])
        : undefined,
      KDAPool: isSet(object["kdaPool,omitempty"]) ? KDAPoolInfo.fromJSON(object["kdaPool,omitempty"]) : undefined,
      Value: isSet(object["value,omitempty"]) ? Number(object["value,omitempty"]) : 0,
    };
  },

  toJSON(message: AssetTriggerContract): unknown {
    const obj: any = {};
    message.TriggerType !== undefined &&
      (obj.triggerType = assetTriggerContract_EnumTriggerTypeToJSON(message.TriggerType));
    message.AssetID !== undefined &&
      (obj.assetId = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.ToAddress !== undefined &&
      (obj["toAddress,omitempty"] = base64FromBytes(
        message.ToAddress !== undefined ? message.ToAddress : new Uint8Array(),
      ));
    message.Amount !== undefined && (obj["amount,omitempty"] = Math.round(message.Amount));
    message.MIME !== undefined &&
      (obj["mime,omitempty"] = base64FromBytes(message.MIME !== undefined ? message.MIME : new Uint8Array()));
    message.Logo !== undefined && (obj["logo,omitempty"] = message.Logo);
    obj["uris,omitempty"] = {};
    if (message.URIs) {
      Object.entries(message.URIs).forEach(([k, v]) => {
        obj["uris,omitempty"][k] = v;
      });
    }
    message.Role !== undefined && (obj["role,omitempty"] = message.Role ? RolesInfo.toJSON(message.Role) : undefined);
    message.Staking !== undefined &&
      (obj["staking,omitempty"] = message.Staking ? StakingInfo.toJSON(message.Staking) : undefined);
    message.Royalties !== undefined &&
      (obj["royalties,omitempty"] = message.Royalties ? RoyaltiesInfo.toJSON(message.Royalties) : undefined);
    message.KDAPool !== undefined &&
      (obj["kdaPool,omitempty"] = message.KDAPool ? KDAPoolInfo.toJSON(message.KDAPool) : undefined);
    message.Value !== undefined && (obj["value,omitempty"] = Math.round(message.Value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetTriggerContract>, I>>(object: I): AssetTriggerContract {
    const message = createBaseAssetTriggerContract();
    message.TriggerType = object.TriggerType ?? 0;
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.ToAddress = object.ToAddress ?? new Uint8Array();
    message.Amount = object.Amount ?? 0;
    message.MIME = object.MIME ?? new Uint8Array();
    message.Logo = object.Logo ?? "";
    message.URIs = Object.entries(object.URIs ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.Role = (object.Role !== undefined && object.Role !== null) ? RolesInfo.fromPartial(object.Role) : undefined;
    message.Staking = (object.Staking !== undefined && object.Staking !== null)
      ? StakingInfo.fromPartial(object.Staking)
      : undefined;
    message.Royalties = (object.Royalties !== undefined && object.Royalties !== null)
      ? RoyaltiesInfo.fromPartial(object.Royalties)
      : undefined;
    message.KDAPool = (object.KDAPool !== undefined && object.KDAPool !== null)
      ? KDAPoolInfo.fromPartial(object.KDAPool)
      : undefined;
    message.Value = object.Value ?? 0;
    return message;
  },
};

function createBaseAssetTriggerContract_URIsEntry(): AssetTriggerContract_URIsEntry {
  return { key: "", value: "" };
}

export const AssetTriggerContract_URIsEntry = {
  encode(message: AssetTriggerContract_URIsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTriggerContract_URIsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTriggerContract_URIsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetTriggerContract_URIsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: AssetTriggerContract_URIsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetTriggerContract_URIsEntry>, I>>(
    object: I,
  ): AssetTriggerContract_URIsEntry {
    const message = createBaseAssetTriggerContract_URIsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseValidatorConfig(): ValidatorConfig {
  return {
    BLSPublicKey: new Uint8Array(),
    RewardAddress: new Uint8Array(),
    CanDelegate: false,
    Commission: 0,
    MaxDelegationAmount: 0,
    Logo: "",
    URIs: {},
    Name: "",
  };
}

export const ValidatorConfig = {
  encode(message: ValidatorConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.BLSPublicKey !== undefined && message.BLSPublicKey.length !== 0) {
      writer.uint32(10).bytes(message.BLSPublicKey);
    }
    if (message.RewardAddress !== undefined && message.RewardAddress.length !== 0) {
      writer.uint32(18).bytes(message.RewardAddress);
    }
    if (message.CanDelegate === true) {
      writer.uint32(24).bool(message.CanDelegate);
    }
    if (message.Commission !== undefined && message.Commission !== 0) {
      writer.uint32(32).uint32(message.Commission);
    }
    if (message.MaxDelegationAmount !== undefined && message.MaxDelegationAmount !== 0) {
      writer.uint32(40).int64(message.MaxDelegationAmount);
    }
    if (message.Logo !== undefined && message.Logo !== "") {
      writer.uint32(50).string(message.Logo);
    }
    Object.entries(message.URIs || {}).forEach(([key, value]) => {
      ValidatorConfig_URIsEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    if (message.Name !== undefined && message.Name !== "") {
      writer.uint32(66).string(message.Name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.BLSPublicKey = reader.bytes();
          break;
        case 2:
          message.RewardAddress = reader.bytes();
          break;
        case 3:
          message.CanDelegate = reader.bool();
          break;
        case 4:
          message.Commission = reader.uint32();
          break;
        case 5:
          message.MaxDelegationAmount = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.Logo = reader.string();
          break;
        case 7:
          const entry7 = ValidatorConfig_URIsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.URIs![entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.Name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorConfig {
    return {
      BLSPublicKey: isSet(object["blsPublicKey,omitempty"])
        ? bytesFromBase64(object["blsPublicKey,omitempty"])
        : new Uint8Array(),
      RewardAddress: isSet(object["rewardAddress,omitempty"])
        ? bytesFromBase64(object["rewardAddress,omitempty"])
        : new Uint8Array(),
      CanDelegate: isSet(object.canDelegate) ? Boolean(object.canDelegate) : false,
      Commission: isSet(object.commission) ? Number(object.commission) : 0,
      MaxDelegationAmount: isSet(object.maxDelegationAmount) ? Number(object.maxDelegationAmount) : 0,
      Logo: isSet(object.logo) ? String(object.logo) : "",
      URIs: isObject(object.uris)
        ? Object.entries(object.uris).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      Name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ValidatorConfig): unknown {
    const obj: any = {};
    message.BLSPublicKey !== undefined &&
      (obj["blsPublicKey,omitempty"] = base64FromBytes(
        message.BLSPublicKey !== undefined ? message.BLSPublicKey : new Uint8Array(),
      ));
    message.RewardAddress !== undefined &&
      (obj["rewardAddress,omitempty"] = base64FromBytes(
        message.RewardAddress !== undefined ? message.RewardAddress : new Uint8Array(),
      ));
    message.CanDelegate !== undefined && (obj.canDelegate = message.CanDelegate);
    message.Commission !== undefined && (obj.commission = Math.round(message.Commission));
    message.MaxDelegationAmount !== undefined && (obj.maxDelegationAmount = Math.round(message.MaxDelegationAmount));
    message.Logo !== undefined && (obj.logo = message.Logo);
    obj.uris = {};
    if (message.URIs) {
      Object.entries(message.URIs).forEach(([k, v]) => {
        obj.uris[k] = v;
      });
    }
    message.Name !== undefined && (obj.name = message.Name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorConfig>, I>>(object: I): ValidatorConfig {
    const message = createBaseValidatorConfig();
    message.BLSPublicKey = object.BLSPublicKey ?? new Uint8Array();
    message.RewardAddress = object.RewardAddress ?? new Uint8Array();
    message.CanDelegate = object.CanDelegate ?? false;
    message.Commission = object.Commission ?? 0;
    message.MaxDelegationAmount = object.MaxDelegationAmount ?? 0;
    message.Logo = object.Logo ?? "";
    message.URIs = Object.entries(object.URIs ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.Name = object.Name ?? "";
    return message;
  },
};

function createBaseValidatorConfig_URIsEntry(): ValidatorConfig_URIsEntry {
  return { key: "", value: "" };
}

export const ValidatorConfig_URIsEntry = {
  encode(message: ValidatorConfig_URIsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorConfig_URIsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorConfig_URIsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorConfig_URIsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ValidatorConfig_URIsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorConfig_URIsEntry>, I>>(object: I): ValidatorConfig_URIsEntry {
    const message = createBaseValidatorConfig_URIsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCreateValidatorContract(): CreateValidatorContract {
  return { OwnerAddress: new Uint8Array(), Config: undefined };
}

export const CreateValidatorContract = {
  encode(message: CreateValidatorContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.OwnerAddress !== undefined && message.OwnerAddress.length !== 0) {
      writer.uint32(10).bytes(message.OwnerAddress);
    }
    if (message.Config !== undefined) {
      ValidatorConfig.encode(message.Config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateValidatorContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateValidatorContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.OwnerAddress = reader.bytes();
          break;
        case 2:
          message.Config = ValidatorConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateValidatorContract {
    return {
      OwnerAddress: isSet(object["ownerAddress,omitempty"])
        ? bytesFromBase64(object["ownerAddress,omitempty"])
        : new Uint8Array(),
      Config: isSet(object["config,omitempty"]) ? ValidatorConfig.fromJSON(object["config,omitempty"]) : undefined,
    };
  },

  toJSON(message: CreateValidatorContract): unknown {
    const obj: any = {};
    message.OwnerAddress !== undefined &&
      (obj["ownerAddress,omitempty"] = base64FromBytes(
        message.OwnerAddress !== undefined ? message.OwnerAddress : new Uint8Array(),
      ));
    message.Config !== undefined &&
      (obj["config,omitempty"] = message.Config ? ValidatorConfig.toJSON(message.Config) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateValidatorContract>, I>>(object: I): CreateValidatorContract {
    const message = createBaseCreateValidatorContract();
    message.OwnerAddress = object.OwnerAddress ?? new Uint8Array();
    message.Config = (object.Config !== undefined && object.Config !== null)
      ? ValidatorConfig.fromPartial(object.Config)
      : undefined;
    return message;
  },
};

function createBaseValidatorConfigContract(): ValidatorConfigContract {
  return { Config: undefined };
}

export const ValidatorConfigContract = {
  encode(message: ValidatorConfigContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Config !== undefined) {
      ValidatorConfig.encode(message.Config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorConfigContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorConfigContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Config = ValidatorConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorConfigContract {
    return {
      Config: isSet(object["config,omitempty"]) ? ValidatorConfig.fromJSON(object["config,omitempty"]) : undefined,
    };
  },

  toJSON(message: ValidatorConfigContract): unknown {
    const obj: any = {};
    message.Config !== undefined &&
      (obj["config,omitempty"] = message.Config ? ValidatorConfig.toJSON(message.Config) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorConfigContract>, I>>(object: I): ValidatorConfigContract {
    const message = createBaseValidatorConfigContract();
    message.Config = (object.Config !== undefined && object.Config !== null)
      ? ValidatorConfig.fromPartial(object.Config)
      : undefined;
    return message;
  },
};

function createBaseFreezeContract(): FreezeContract {
  return { AssetID: new Uint8Array(), Amount: 0 };
}

export const FreezeContract = {
  encode(message: FreezeContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(10).bytes(message.AssetID);
    }
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(16).int64(message.Amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FreezeContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFreezeContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetID = reader.bytes();
          break;
        case 2:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FreezeContract {
    return {
      AssetID: isSet(object.assetId) ? bytesFromBase64(object.assetId) : new Uint8Array(),
      Amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: FreezeContract): unknown {
    const obj: any = {};
    message.AssetID !== undefined &&
      (obj.assetId = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.Amount !== undefined && (obj.amount = Math.round(message.Amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FreezeContract>, I>>(object: I): FreezeContract {
    const message = createBaseFreezeContract();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.Amount = object.Amount ?? 0;
    return message;
  },
};

function createBaseUnfreezeContract(): UnfreezeContract {
  return { AssetID: new Uint8Array(), BucketID: new Uint8Array() };
}

export const UnfreezeContract = {
  encode(message: UnfreezeContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(10).bytes(message.AssetID);
    }
    if (message.BucketID !== undefined && message.BucketID.length !== 0) {
      writer.uint32(18).bytes(message.BucketID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnfreezeContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnfreezeContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetID = reader.bytes();
          break;
        case 2:
          message.BucketID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnfreezeContract {
    return {
      AssetID: isSet(object.assetId) ? bytesFromBase64(object.assetId) : new Uint8Array(),
      BucketID: isSet(object.bucketId) ? bytesFromBase64(object.bucketId) : new Uint8Array(),
    };
  },

  toJSON(message: UnfreezeContract): unknown {
    const obj: any = {};
    message.AssetID !== undefined &&
      (obj.assetId = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.BucketID !== undefined &&
      (obj.bucketId = base64FromBytes(message.BucketID !== undefined ? message.BucketID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnfreezeContract>, I>>(object: I): UnfreezeContract {
    const message = createBaseUnfreezeContract();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.BucketID = object.BucketID ?? new Uint8Array();
    return message;
  },
};

function createBaseDelegateContract(): DelegateContract {
  return { ToAddress: new Uint8Array(), BucketID: new Uint8Array() };
}

export const DelegateContract = {
  encode(message: DelegateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ToAddress !== undefined && message.ToAddress.length !== 0) {
      writer.uint32(10).bytes(message.ToAddress);
    }
    if (message.BucketID !== undefined && message.BucketID.length !== 0) {
      writer.uint32(18).bytes(message.BucketID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ToAddress = reader.bytes();
          break;
        case 2:
          message.BucketID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegateContract {
    return {
      ToAddress: isSet(object["toAddress,omitempty"])
        ? bytesFromBase64(object["toAddress,omitempty"])
        : new Uint8Array(),
      BucketID: isSet(object.bucketId) ? bytesFromBase64(object.bucketId) : new Uint8Array(),
    };
  },

  toJSON(message: DelegateContract): unknown {
    const obj: any = {};
    message.ToAddress !== undefined &&
      (obj["toAddress,omitempty"] = base64FromBytes(
        message.ToAddress !== undefined ? message.ToAddress : new Uint8Array(),
      ));
    message.BucketID !== undefined &&
      (obj.bucketId = base64FromBytes(message.BucketID !== undefined ? message.BucketID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegateContract>, I>>(object: I): DelegateContract {
    const message = createBaseDelegateContract();
    message.ToAddress = object.ToAddress ?? new Uint8Array();
    message.BucketID = object.BucketID ?? new Uint8Array();
    return message;
  },
};

function createBaseUndelegateContract(): UndelegateContract {
  return { BucketID: new Uint8Array() };
}

export const UndelegateContract = {
  encode(message: UndelegateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.BucketID !== undefined && message.BucketID.length !== 0) {
      writer.uint32(10).bytes(message.BucketID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.BucketID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UndelegateContract {
    return { BucketID: isSet(object.bucketId) ? bytesFromBase64(object.bucketId) : new Uint8Array() };
  },

  toJSON(message: UndelegateContract): unknown {
    const obj: any = {};
    message.BucketID !== undefined &&
      (obj.bucketId = base64FromBytes(message.BucketID !== undefined ? message.BucketID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UndelegateContract>, I>>(object: I): UndelegateContract {
    const message = createBaseUndelegateContract();
    message.BucketID = object.BucketID ?? new Uint8Array();
    return message;
  },
};

function createBaseWithdrawContract(): WithdrawContract {
  return { AssetID: new Uint8Array(), WithdrawType: 0, amount: 0, CurrencyID: new Uint8Array() };
}

export const WithdrawContract = {
  encode(message: WithdrawContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(10).bytes(message.AssetID);
    }
    if (message.WithdrawType !== undefined && message.WithdrawType !== 0) {
      writer.uint32(16).int32(message.WithdrawType);
    }
    if (message.amount !== undefined && message.amount !== 0) {
      writer.uint32(24).int64(message.amount);
    }
    if (message.CurrencyID !== undefined && message.CurrencyID.length !== 0) {
      writer.uint32(34).bytes(message.CurrencyID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetID = reader.bytes();
          break;
        case 2:
          message.WithdrawType = reader.int32() as any;
          break;
        case 3:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.CurrencyID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawContract {
    return {
      AssetID: isSet(object.assetId) ? bytesFromBase64(object.assetId) : new Uint8Array(),
      WithdrawType: isSet(object.withdrawType) ? withdrawContract_EnumWithdrawTypeFromJSON(object.withdrawType) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      CurrencyID: isSet(object.currencyID) ? bytesFromBase64(object.currencyID) : new Uint8Array(),
    };
  },

  toJSON(message: WithdrawContract): unknown {
    const obj: any = {};
    message.AssetID !== undefined &&
      (obj.assetId = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.WithdrawType !== undefined &&
      (obj.withdrawType = withdrawContract_EnumWithdrawTypeToJSON(message.WithdrawType));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.CurrencyID !== undefined &&
      (obj.currencyID = base64FromBytes(message.CurrencyID !== undefined ? message.CurrencyID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WithdrawContract>, I>>(object: I): WithdrawContract {
    const message = createBaseWithdrawContract();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.WithdrawType = object.WithdrawType ?? 0;
    message.amount = object.amount ?? 0;
    message.CurrencyID = object.CurrencyID ?? new Uint8Array();
    return message;
  },
};

function createBaseClaimContract(): ClaimContract {
  return { ClaimType: 0, ID: new Uint8Array() };
}

export const ClaimContract = {
  encode(message: ClaimContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ClaimType !== undefined && message.ClaimType !== 0) {
      writer.uint32(8).int32(message.ClaimType);
    }
    if (message.ID !== undefined && message.ID.length !== 0) {
      writer.uint32(18).bytes(message.ID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ClaimType = reader.int32() as any;
          break;
        case 2:
          message.ID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimContract {
    return {
      ClaimType: isSet(object.claimType) ? claimContract_EnumClaimTypeFromJSON(object.claimType) : 0,
      ID: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
    };
  },

  toJSON(message: ClaimContract): unknown {
    const obj: any = {};
    message.ClaimType !== undefined && (obj.claimType = claimContract_EnumClaimTypeToJSON(message.ClaimType));
    message.ID !== undefined && (obj.id = base64FromBytes(message.ID !== undefined ? message.ID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClaimContract>, I>>(object: I): ClaimContract {
    const message = createBaseClaimContract();
    message.ClaimType = object.ClaimType ?? 0;
    message.ID = object.ID ?? new Uint8Array();
    return message;
  },
};

function createBaseUnjailContract(): UnjailContract {
  return {};
}

export const UnjailContract = {
  encode(_: UnjailContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnjailContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnjailContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UnjailContract {
    return {};
  },

  toJSON(_: UnjailContract): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnjailContract>, I>>(_: I): UnjailContract {
    const message = createBaseUnjailContract();
    return message;
  },
};

function createBaseSetAccountNameContract(): SetAccountNameContract {
  return { Name: new Uint8Array() };
}

export const SetAccountNameContract = {
  encode(message: SetAccountNameContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== undefined && message.Name.length !== 0) {
      writer.uint32(10).bytes(message.Name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAccountNameContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetAccountNameContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Name = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetAccountNameContract {
    return { Name: isSet(object.name) ? bytesFromBase64(object.name) : new Uint8Array() };
  },

  toJSON(message: SetAccountNameContract): unknown {
    const obj: any = {};
    message.Name !== undefined &&
      (obj.name = base64FromBytes(message.Name !== undefined ? message.Name : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetAccountNameContract>, I>>(object: I): SetAccountNameContract {
    const message = createBaseSetAccountNameContract();
    message.Name = object.Name ?? new Uint8Array();
    return message;
  },
};

function createBaseProposalContract(): ProposalContract {
  return { Parameters: {}, Description: new Uint8Array(), EpochsDuration: 0 };
}

export const ProposalContract = {
  encode(message: ProposalContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.Parameters || {}).forEach(([key, value]) => {
      ProposalContract_ParametersEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.Description !== undefined && message.Description.length !== 0) {
      writer.uint32(18).bytes(message.Description);
    }
    if (message.EpochsDuration !== undefined && message.EpochsDuration !== 0) {
      writer.uint32(24).uint32(message.EpochsDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ProposalContract_ParametersEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.Parameters![entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.Description = reader.bytes();
          break;
        case 3:
          message.EpochsDuration = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProposalContract {
    return {
      Parameters: isObject(object.parameters)
        ? Object.entries(object.parameters).reduce<{ [key: number]: Uint8Array }>((acc, [key, value]) => {
          acc[Number(key)] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
      Description: isSet(object.description) ? bytesFromBase64(object.description) : new Uint8Array(),
      EpochsDuration: isSet(object.epochsDuration) ? Number(object.epochsDuration) : 0,
    };
  },

  toJSON(message: ProposalContract): unknown {
    const obj: any = {};
    obj.parameters = {};
    if (message.Parameters) {
      Object.entries(message.Parameters).forEach(([k, v]) => {
        obj.parameters[k] = base64FromBytes(v);
      });
    }
    message.Description !== undefined &&
      (obj.description = base64FromBytes(message.Description !== undefined ? message.Description : new Uint8Array()));
    message.EpochsDuration !== undefined && (obj.epochsDuration = Math.round(message.EpochsDuration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProposalContract>, I>>(object: I): ProposalContract {
    const message = createBaseProposalContract();
    message.Parameters = Object.entries(object.Parameters ?? {}).reduce<{ [key: number]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[Number(key)] = value;
        }
        return acc;
      },
      {},
    );
    message.Description = object.Description ?? new Uint8Array();
    message.EpochsDuration = object.EpochsDuration ?? 0;
    return message;
  },
};

function createBaseProposalContract_ParametersEntry(): ProposalContract_ParametersEntry {
  return { key: 0, value: new Uint8Array() };
}

export const ProposalContract_ParametersEntry = {
  encode(message: ProposalContract_ParametersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalContract_ParametersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalContract_ParametersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProposalContract_ParametersEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: ProposalContract_ParametersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProposalContract_ParametersEntry>, I>>(
    object: I,
  ): ProposalContract_ParametersEntry {
    const message = createBaseProposalContract_ParametersEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseVoteContract(): VoteContract {
  return { ProposalID: 0, Amount: 0, Type: 0 };
}

export const VoteContract = {
  encode(message: VoteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ProposalID !== undefined && message.ProposalID !== 0) {
      writer.uint32(8).uint64(message.ProposalID);
    }
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(16).int64(message.Amount);
    }
    if (message.Type !== undefined && message.Type !== 0) {
      writer.uint32(24).int32(message.Type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ProposalID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.Type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteContract {
    return {
      ProposalID: isSet(object.proposalId) ? Number(object.proposalId) : 0,
      Amount: isSet(object.amount) ? Number(object.amount) : 0,
      Type: isSet(object.type) ? voteContract_EnumVoteTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: VoteContract): unknown {
    const obj: any = {};
    message.ProposalID !== undefined && (obj.proposalId = Math.round(message.ProposalID));
    message.Amount !== undefined && (obj.amount = Math.round(message.Amount));
    message.Type !== undefined && (obj.type = voteContract_EnumVoteTypeToJSON(message.Type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteContract>, I>>(object: I): VoteContract {
    const message = createBaseVoteContract();
    message.ProposalID = object.ProposalID ?? 0;
    message.Amount = object.Amount ?? 0;
    message.Type = object.Type ?? 0;
    return message;
  },
};

function createBaseConfigITOContract(): ConfigITOContract {
  return {
    AssetID: new Uint8Array(),
    ReceiverAddress: new Uint8Array(),
    Status: 0,
    MaxAmount: 0,
    PackInfo: {},
    DefaultLimitPerAddress: 0,
    WhitelistStatus: 0,
    WhitelistInfo: {},
    WhitelistStartTime: 0,
    WhitelistEndTime: 0,
    StartTime: 0,
    EndTime: 0,
  };
}

export const ConfigITOContract = {
  encode(message: ConfigITOContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(10).bytes(message.AssetID);
    }
    if (message.ReceiverAddress !== undefined && message.ReceiverAddress.length !== 0) {
      writer.uint32(18).bytes(message.ReceiverAddress);
    }
    if (message.Status !== undefined && message.Status !== 0) {
      writer.uint32(24).int32(message.Status);
    }
    if (message.MaxAmount !== undefined && message.MaxAmount !== 0) {
      writer.uint32(32).int64(message.MaxAmount);
    }
    Object.entries(message.PackInfo || {}).forEach(([key, value]) => {
      ConfigITOContract_PackInfoEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    if (message.DefaultLimitPerAddress !== undefined && message.DefaultLimitPerAddress !== 0) {
      writer.uint32(48).int64(message.DefaultLimitPerAddress);
    }
    if (message.WhitelistStatus !== undefined && message.WhitelistStatus !== 0) {
      writer.uint32(56).int32(message.WhitelistStatus);
    }
    Object.entries(message.WhitelistInfo || {}).forEach(([key, value]) => {
      ConfigITOContract_WhitelistInfoEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    if (message.WhitelistStartTime !== undefined && message.WhitelistStartTime !== 0) {
      writer.uint32(72).int64(message.WhitelistStartTime);
    }
    if (message.WhitelistEndTime !== undefined && message.WhitelistEndTime !== 0) {
      writer.uint32(80).int64(message.WhitelistEndTime);
    }
    if (message.StartTime !== undefined && message.StartTime !== 0) {
      writer.uint32(88).int64(message.StartTime);
    }
    if (message.EndTime !== undefined && message.EndTime !== 0) {
      writer.uint32(96).int64(message.EndTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigITOContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigITOContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetID = reader.bytes();
          break;
        case 2:
          message.ReceiverAddress = reader.bytes();
          break;
        case 3:
          message.Status = reader.int32() as any;
          break;
        case 4:
          message.MaxAmount = longToNumber(reader.int64() as Long);
          break;
        case 5:
          const entry5 = ConfigITOContract_PackInfoEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.PackInfo![entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.DefaultLimitPerAddress = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.WhitelistStatus = reader.int32() as any;
          break;
        case 8:
          const entry8 = ConfigITOContract_WhitelistInfoEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.WhitelistInfo![entry8.key] = entry8.value;
          }
          break;
        case 9:
          message.WhitelistStartTime = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.WhitelistEndTime = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.StartTime = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.EndTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigITOContract {
    return {
      AssetID: isSet(object.assetId) ? bytesFromBase64(object.assetId) : new Uint8Array(),
      ReceiverAddress: isSet(object.receiverAddress) ? bytesFromBase64(object.receiverAddress) : new Uint8Array(),
      Status: isSet(object.status) ? configITOContract_EnumITOStatusFromJSON(object.status) : 0,
      MaxAmount: isSet(object.maxAmount) ? Number(object.maxAmount) : 0,
      PackInfo: isObject(object.packInfo)
        ? Object.entries(object.packInfo).reduce<{ [key: string]: PackInfo }>((acc, [key, value]) => {
          acc[key] = PackInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      DefaultLimitPerAddress: isSet(object.defaultLimitPerAddress) ? Number(object.defaultLimitPerAddress) : 0,
      WhitelistStatus: isSet(object.whitelistStatus)
        ? configITOContract_EnumITOStatusFromJSON(object.whitelistStatus)
        : 0,
      WhitelistInfo: isObject(object.whitelistInfo)
        ? Object.entries(object.whitelistInfo).reduce<{ [key: string]: WhitelistInfo }>((acc, [key, value]) => {
          acc[key] = WhitelistInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      WhitelistStartTime: isSet(object.whitelistStartTime) ? Number(object.whitelistStartTime) : 0,
      WhitelistEndTime: isSet(object.whitelistEndTime) ? Number(object.whitelistEndTime) : 0,
      StartTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      EndTime: isSet(object.endTime) ? Number(object.endTime) : 0,
    };
  },

  toJSON(message: ConfigITOContract): unknown {
    const obj: any = {};
    message.AssetID !== undefined &&
      (obj.assetId = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.ReceiverAddress !== undefined &&
      (obj.receiverAddress = base64FromBytes(
        message.ReceiverAddress !== undefined ? message.ReceiverAddress : new Uint8Array(),
      ));
    message.Status !== undefined && (obj.status = configITOContract_EnumITOStatusToJSON(message.Status));
    message.MaxAmount !== undefined && (obj.maxAmount = Math.round(message.MaxAmount));
    obj.packInfo = {};
    if (message.PackInfo) {
      Object.entries(message.PackInfo).forEach(([k, v]) => {
        obj.packInfo[k] = PackInfo.toJSON(v);
      });
    }
    message.DefaultLimitPerAddress !== undefined &&
      (obj.defaultLimitPerAddress = Math.round(message.DefaultLimitPerAddress));
    message.WhitelistStatus !== undefined &&
      (obj.whitelistStatus = configITOContract_EnumITOStatusToJSON(message.WhitelistStatus));
    obj.whitelistInfo = {};
    if (message.WhitelistInfo) {
      Object.entries(message.WhitelistInfo).forEach(([k, v]) => {
        obj.whitelistInfo[k] = WhitelistInfo.toJSON(v);
      });
    }
    message.WhitelistStartTime !== undefined && (obj.whitelistStartTime = Math.round(message.WhitelistStartTime));
    message.WhitelistEndTime !== undefined && (obj.whitelistEndTime = Math.round(message.WhitelistEndTime));
    message.StartTime !== undefined && (obj.startTime = Math.round(message.StartTime));
    message.EndTime !== undefined && (obj.endTime = Math.round(message.EndTime));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigITOContract>, I>>(object: I): ConfigITOContract {
    const message = createBaseConfigITOContract();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.ReceiverAddress = object.ReceiverAddress ?? new Uint8Array();
    message.Status = object.Status ?? 0;
    message.MaxAmount = object.MaxAmount ?? 0;
    message.PackInfo = Object.entries(object.PackInfo ?? {}).reduce<{ [key: string]: PackInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = PackInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.DefaultLimitPerAddress = object.DefaultLimitPerAddress ?? 0;
    message.WhitelistStatus = object.WhitelistStatus ?? 0;
    message.WhitelistInfo = Object.entries(object.WhitelistInfo ?? {}).reduce<{ [key: string]: WhitelistInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = WhitelistInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.WhitelistStartTime = object.WhitelistStartTime ?? 0;
    message.WhitelistEndTime = object.WhitelistEndTime ?? 0;
    message.StartTime = object.StartTime ?? 0;
    message.EndTime = object.EndTime ?? 0;
    return message;
  },
};

function createBaseConfigITOContract_PackInfoEntry(): ConfigITOContract_PackInfoEntry {
  return { key: "", value: undefined };
}

export const ConfigITOContract_PackInfoEntry = {
  encode(message: ConfigITOContract_PackInfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PackInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigITOContract_PackInfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigITOContract_PackInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = PackInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigITOContract_PackInfoEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? PackInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ConfigITOContract_PackInfoEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? PackInfo.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigITOContract_PackInfoEntry>, I>>(
    object: I,
  ): ConfigITOContract_PackInfoEntry {
    const message = createBaseConfigITOContract_PackInfoEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PackInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseConfigITOContract_WhitelistInfoEntry(): ConfigITOContract_WhitelistInfoEntry {
  return { key: "", value: undefined };
}

export const ConfigITOContract_WhitelistInfoEntry = {
  encode(message: ConfigITOContract_WhitelistInfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      WhitelistInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigITOContract_WhitelistInfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigITOContract_WhitelistInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = WhitelistInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigITOContract_WhitelistInfoEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? WhitelistInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ConfigITOContract_WhitelistInfoEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? WhitelistInfo.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigITOContract_WhitelistInfoEntry>, I>>(
    object: I,
  ): ConfigITOContract_WhitelistInfoEntry {
    const message = createBaseConfigITOContract_WhitelistInfoEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? WhitelistInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseWhitelistInfo(): WhitelistInfo {
  return { Limit: 0 };
}

export const WhitelistInfo = {
  encode(message: WhitelistInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Limit !== undefined && message.Limit !== 0) {
      writer.uint32(8).int64(message.Limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Limit = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistInfo {
    return { Limit: isSet(object.limit) ? Number(object.limit) : 0 };
  },

  toJSON(message: WhitelistInfo): unknown {
    const obj: any = {};
    message.Limit !== undefined && (obj.limit = Math.round(message.Limit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistInfo>, I>>(object: I): WhitelistInfo {
    const message = createBaseWhitelistInfo();
    message.Limit = object.Limit ?? 0;
    return message;
  },
};

function createBaseSetITOPricesContract(): SetITOPricesContract {
  return { AssetID: new Uint8Array(), PackInfo: {} };
}

export const SetITOPricesContract = {
  encode(message: SetITOPricesContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(10).bytes(message.AssetID);
    }
    Object.entries(message.PackInfo || {}).forEach(([key, value]) => {
      SetITOPricesContract_PackInfoEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetITOPricesContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetITOPricesContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetID = reader.bytes();
          break;
        case 2:
          const entry2 = SetITOPricesContract_PackInfoEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.PackInfo![entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetITOPricesContract {
    return {
      AssetID: isSet(object.assetId) ? bytesFromBase64(object.assetId) : new Uint8Array(),
      PackInfo: isObject(object.packInfo)
        ? Object.entries(object.packInfo).reduce<{ [key: string]: PackInfo }>((acc, [key, value]) => {
          acc[key] = PackInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SetITOPricesContract): unknown {
    const obj: any = {};
    message.AssetID !== undefined &&
      (obj.assetId = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    obj.packInfo = {};
    if (message.PackInfo) {
      Object.entries(message.PackInfo).forEach(([k, v]) => {
        obj.packInfo[k] = PackInfo.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetITOPricesContract>, I>>(object: I): SetITOPricesContract {
    const message = createBaseSetITOPricesContract();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.PackInfo = Object.entries(object.PackInfo ?? {}).reduce<{ [key: string]: PackInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = PackInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSetITOPricesContract_PackInfoEntry(): SetITOPricesContract_PackInfoEntry {
  return { key: "", value: undefined };
}

export const SetITOPricesContract_PackInfoEntry = {
  encode(message: SetITOPricesContract_PackInfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PackInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetITOPricesContract_PackInfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetITOPricesContract_PackInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = PackInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetITOPricesContract_PackInfoEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? PackInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SetITOPricesContract_PackInfoEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? PackInfo.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetITOPricesContract_PackInfoEntry>, I>>(
    object: I,
  ): SetITOPricesContract_PackInfoEntry {
    const message = createBaseSetITOPricesContract_PackInfoEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PackInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseITOTriggerContract(): ITOTriggerContract {
  return {
    TriggerType: 0,
    AssetID: new Uint8Array(),
    ReceiverAddress: new Uint8Array(),
    Status: 0,
    MaxAmount: 0,
    PackInfo: {},
    DefaultLimitPerAddress: 0,
    WhitelistStatus: 0,
    WhitelistInfo: {},
    WhitelistStartTime: 0,
    WhitelistEndTime: 0,
    StartTime: 0,
    EndTime: 0,
  };
}

export const ITOTriggerContract = {
  encode(message: ITOTriggerContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TriggerType !== undefined && message.TriggerType !== 0) {
      writer.uint32(8).int32(message.TriggerType);
    }
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(18).bytes(message.AssetID);
    }
    if (message.ReceiverAddress !== undefined && message.ReceiverAddress.length !== 0) {
      writer.uint32(26).bytes(message.ReceiverAddress);
    }
    if (message.Status !== undefined && message.Status !== 0) {
      writer.uint32(32).int32(message.Status);
    }
    if (message.MaxAmount !== undefined && message.MaxAmount !== 0) {
      writer.uint32(40).int64(message.MaxAmount);
    }
    Object.entries(message.PackInfo || {}).forEach(([key, value]) => {
      ITOTriggerContract_PackInfoEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.DefaultLimitPerAddress !== undefined && message.DefaultLimitPerAddress !== 0) {
      writer.uint32(56).int64(message.DefaultLimitPerAddress);
    }
    if (message.WhitelistStatus !== undefined && message.WhitelistStatus !== 0) {
      writer.uint32(64).int32(message.WhitelistStatus);
    }
    Object.entries(message.WhitelistInfo || {}).forEach(([key, value]) => {
      ITOTriggerContract_WhitelistInfoEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).ldelim();
    });
    if (message.WhitelistStartTime !== undefined && message.WhitelistStartTime !== 0) {
      writer.uint32(80).int64(message.WhitelistStartTime);
    }
    if (message.WhitelistEndTime !== undefined && message.WhitelistEndTime !== 0) {
      writer.uint32(88).int64(message.WhitelistEndTime);
    }
    if (message.StartTime !== undefined && message.StartTime !== 0) {
      writer.uint32(96).int64(message.StartTime);
    }
    if (message.EndTime !== undefined && message.EndTime !== 0) {
      writer.uint32(104).int64(message.EndTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ITOTriggerContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseITOTriggerContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TriggerType = reader.int32() as any;
          break;
        case 2:
          message.AssetID = reader.bytes();
          break;
        case 3:
          message.ReceiverAddress = reader.bytes();
          break;
        case 4:
          message.Status = reader.int32() as any;
          break;
        case 5:
          message.MaxAmount = longToNumber(reader.int64() as Long);
          break;
        case 6:
          const entry6 = ITOTriggerContract_PackInfoEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.PackInfo![entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.DefaultLimitPerAddress = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.WhitelistStatus = reader.int32() as any;
          break;
        case 9:
          const entry9 = ITOTriggerContract_WhitelistInfoEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.WhitelistInfo![entry9.key] = entry9.value;
          }
          break;
        case 10:
          message.WhitelistStartTime = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.WhitelistEndTime = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.StartTime = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.EndTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ITOTriggerContract {
    return {
      TriggerType: isSet(object.triggerType) ? iTOTriggerContract_EnumITOTriggerTypeFromJSON(object.triggerType) : 0,
      AssetID: isSet(object.assetId) ? bytesFromBase64(object.assetId) : new Uint8Array(),
      ReceiverAddress: isSet(object["receiverAddress,omitempty"])
        ? bytesFromBase64(object["receiverAddress,omitempty"])
        : new Uint8Array(),
      Status: isSet(object["status,omitempty"])
        ? iTOTriggerContract_EnumITOStatusFromJSON(object["status,omitempty"])
        : 0,
      MaxAmount: isSet(object["maxAmount,omitempty"]) ? Number(object["maxAmount,omitempty"]) : 0,
      PackInfo: isObject(object["packInfo,omitempty"])
        ? Object.entries(object["packInfo,omitempty"]).reduce<{ [key: string]: PackInfo }>((acc, [key, value]) => {
          acc[key] = PackInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      DefaultLimitPerAddress: isSet(object["defaultLimitPerAddress,omitempty"])
        ? Number(object["defaultLimitPerAddress,omitempty"])
        : 0,
      WhitelistStatus: isSet(object["whitelistStatus,omitempty"])
        ? iTOTriggerContract_EnumITOStatusFromJSON(object["whitelistStatus,omitempty"])
        : 0,
      WhitelistInfo: isObject(object["whitelistInfo,omitempty"])
        ? Object.entries(object["whitelistInfo,omitempty"]).reduce<{ [key: string]: WhitelistInfo }>(
          (acc, [key, value]) => {
            acc[key] = WhitelistInfo.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      WhitelistStartTime: isSet(object["whitelistStartTime,omitempty"])
        ? Number(object["whitelistStartTime,omitempty"])
        : 0,
      WhitelistEndTime: isSet(object["whitelistEndTime,omitempty"]) ? Number(object["whitelistEndTime,omitempty"]) : 0,
      StartTime: isSet(object["startTime,omitempty"]) ? Number(object["startTime,omitempty"]) : 0,
      EndTime: isSet(object["endTime,omitempty"]) ? Number(object["endTime,omitempty"]) : 0,
    };
  },

  toJSON(message: ITOTriggerContract): unknown {
    const obj: any = {};
    message.TriggerType !== undefined &&
      (obj.triggerType = iTOTriggerContract_EnumITOTriggerTypeToJSON(message.TriggerType));
    message.AssetID !== undefined &&
      (obj.assetId = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.ReceiverAddress !== undefined &&
      (obj["receiverAddress,omitempty"] = base64FromBytes(
        message.ReceiverAddress !== undefined ? message.ReceiverAddress : new Uint8Array(),
      ));
    message.Status !== undefined && (obj["status,omitempty"] = iTOTriggerContract_EnumITOStatusToJSON(message.Status));
    message.MaxAmount !== undefined && (obj["maxAmount,omitempty"] = Math.round(message.MaxAmount));
    obj["packInfo,omitempty"] = {};
    if (message.PackInfo) {
      Object.entries(message.PackInfo).forEach(([k, v]) => {
        obj["packInfo,omitempty"][k] = PackInfo.toJSON(v);
      });
    }
    message.DefaultLimitPerAddress !== undefined &&
      (obj["defaultLimitPerAddress,omitempty"] = Math.round(message.DefaultLimitPerAddress));
    message.WhitelistStatus !== undefined &&
      (obj["whitelistStatus,omitempty"] = iTOTriggerContract_EnumITOStatusToJSON(message.WhitelistStatus));
    obj["whitelistInfo,omitempty"] = {};
    if (message.WhitelistInfo) {
      Object.entries(message.WhitelistInfo).forEach(([k, v]) => {
        obj["whitelistInfo,omitempty"][k] = WhitelistInfo.toJSON(v);
      });
    }
    message.WhitelistStartTime !== undefined &&
      (obj["whitelistStartTime,omitempty"] = Math.round(message.WhitelistStartTime));
    message.WhitelistEndTime !== undefined &&
      (obj["whitelistEndTime,omitempty"] = Math.round(message.WhitelistEndTime));
    message.StartTime !== undefined && (obj["startTime,omitempty"] = Math.round(message.StartTime));
    message.EndTime !== undefined && (obj["endTime,omitempty"] = Math.round(message.EndTime));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ITOTriggerContract>, I>>(object: I): ITOTriggerContract {
    const message = createBaseITOTriggerContract();
    message.TriggerType = object.TriggerType ?? 0;
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.ReceiverAddress = object.ReceiverAddress ?? new Uint8Array();
    message.Status = object.Status ?? 0;
    message.MaxAmount = object.MaxAmount ?? 0;
    message.PackInfo = Object.entries(object.PackInfo ?? {}).reduce<{ [key: string]: PackInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = PackInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.DefaultLimitPerAddress = object.DefaultLimitPerAddress ?? 0;
    message.WhitelistStatus = object.WhitelistStatus ?? 0;
    message.WhitelistInfo = Object.entries(object.WhitelistInfo ?? {}).reduce<{ [key: string]: WhitelistInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = WhitelistInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.WhitelistStartTime = object.WhitelistStartTime ?? 0;
    message.WhitelistEndTime = object.WhitelistEndTime ?? 0;
    message.StartTime = object.StartTime ?? 0;
    message.EndTime = object.EndTime ?? 0;
    return message;
  },
};

function createBaseITOTriggerContract_PackInfoEntry(): ITOTriggerContract_PackInfoEntry {
  return { key: "", value: undefined };
}

export const ITOTriggerContract_PackInfoEntry = {
  encode(message: ITOTriggerContract_PackInfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PackInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ITOTriggerContract_PackInfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseITOTriggerContract_PackInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = PackInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ITOTriggerContract_PackInfoEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? PackInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ITOTriggerContract_PackInfoEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? PackInfo.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ITOTriggerContract_PackInfoEntry>, I>>(
    object: I,
  ): ITOTriggerContract_PackInfoEntry {
    const message = createBaseITOTriggerContract_PackInfoEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PackInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseITOTriggerContract_WhitelistInfoEntry(): ITOTriggerContract_WhitelistInfoEntry {
  return { key: "", value: undefined };
}

export const ITOTriggerContract_WhitelistInfoEntry = {
  encode(message: ITOTriggerContract_WhitelistInfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      WhitelistInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ITOTriggerContract_WhitelistInfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseITOTriggerContract_WhitelistInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = WhitelistInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ITOTriggerContract_WhitelistInfoEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? WhitelistInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ITOTriggerContract_WhitelistInfoEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? WhitelistInfo.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ITOTriggerContract_WhitelistInfoEntry>, I>>(
    object: I,
  ): ITOTriggerContract_WhitelistInfoEntry {
    const message = createBaseITOTriggerContract_WhitelistInfoEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? WhitelistInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBasePackInfo(): PackInfo {
  return { Packs: [] };
}

export const PackInfo = {
  encode(message: PackInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Packs !== undefined && message.Packs.length !== 0) {
      for (const v of message.Packs) {
        PackItem.encode(v!, writer.uint32(10).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Packs!.push(PackItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PackInfo {
    return { Packs: Array.isArray(object?.packs) ? object.packs.map((e: any) => PackItem.fromJSON(e)) : [] };
  },

  toJSON(message: PackInfo): unknown {
    const obj: any = {};
    if (message.Packs) {
      obj.packs = message.Packs.map((e) => e ? PackItem.toJSON(e) : undefined);
    } else {
      obj.packs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PackInfo>, I>>(object: I): PackInfo {
    const message = createBasePackInfo();
    message.Packs = object.Packs?.map((e) => PackItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasePackItem(): PackItem {
  return { Amount: 0, Price: 0 };
}

export const PackItem = {
  encode(message: PackItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(8).int64(message.Amount);
    }
    if (message.Price !== undefined && message.Price !== 0) {
      writer.uint32(16).int64(message.Price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.Price = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PackItem {
    return {
      Amount: isSet(object.amount) ? Number(object.amount) : 0,
      Price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: PackItem): unknown {
    const obj: any = {};
    message.Amount !== undefined && (obj.amount = Math.round(message.Amount));
    message.Price !== undefined && (obj.price = Math.round(message.Price));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PackItem>, I>>(object: I): PackItem {
    const message = createBasePackItem();
    message.Amount = object.Amount ?? 0;
    message.Price = object.Price ?? 0;
    return message;
  },
};

function createBaseBuyContract(): BuyContract {
  return { BuyType: 0, ID: new Uint8Array(), CurrencyID: new Uint8Array(), Amount: 0, CurrencyAmount: 0 };
}

export const BuyContract = {
  encode(message: BuyContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.BuyType !== undefined && message.BuyType !== 0) {
      writer.uint32(8).int32(message.BuyType);
    }
    if (message.ID !== undefined && message.ID.length !== 0) {
      writer.uint32(18).bytes(message.ID);
    }
    if (message.CurrencyID !== undefined && message.CurrencyID.length !== 0) {
      writer.uint32(26).bytes(message.CurrencyID);
    }
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(32).int64(message.Amount);
    }
    if (message.CurrencyAmount !== undefined && message.CurrencyAmount !== 0) {
      writer.uint32(40).int64(message.CurrencyAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.BuyType = reader.int32() as any;
          break;
        case 2:
          message.ID = reader.bytes();
          break;
        case 3:
          message.CurrencyID = reader.bytes();
          break;
        case 4:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.CurrencyAmount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuyContract {
    return {
      BuyType: isSet(object.buyType) ? buyContract_EnumBuyTypeFromJSON(object.buyType) : 0,
      ID: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      CurrencyID: isSet(object.currencyId) ? bytesFromBase64(object.currencyId) : new Uint8Array(),
      Amount: isSet(object.amount) ? Number(object.amount) : 0,
      CurrencyAmount: isSet(object.currencyAmount) ? Number(object.currencyAmount) : 0,
    };
  },

  toJSON(message: BuyContract): unknown {
    const obj: any = {};
    message.BuyType !== undefined && (obj.buyType = buyContract_EnumBuyTypeToJSON(message.BuyType));
    message.ID !== undefined && (obj.id = base64FromBytes(message.ID !== undefined ? message.ID : new Uint8Array()));
    message.CurrencyID !== undefined &&
      (obj.currencyId = base64FromBytes(message.CurrencyID !== undefined ? message.CurrencyID : new Uint8Array()));
    message.Amount !== undefined && (obj.amount = Math.round(message.Amount));
    message.CurrencyAmount !== undefined && (obj.currencyAmount = Math.round(message.CurrencyAmount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuyContract>, I>>(object: I): BuyContract {
    const message = createBaseBuyContract();
    message.BuyType = object.BuyType ?? 0;
    message.ID = object.ID ?? new Uint8Array();
    message.CurrencyID = object.CurrencyID ?? new Uint8Array();
    message.Amount = object.Amount ?? 0;
    message.CurrencyAmount = object.CurrencyAmount ?? 0;
    return message;
  },
};

function createBaseSellContract(): SellContract {
  return {
    MarketType: 0,
    MarketplaceID: new Uint8Array(),
    AssetID: new Uint8Array(),
    CurrencyID: new Uint8Array(),
    Price: 0,
    ReservePrice: 0,
    EndTime: 0,
  };
}

export const SellContract = {
  encode(message: SellContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.MarketType !== undefined && message.MarketType !== 0) {
      writer.uint32(8).int32(message.MarketType);
    }
    if (message.MarketplaceID !== undefined && message.MarketplaceID.length !== 0) {
      writer.uint32(18).bytes(message.MarketplaceID);
    }
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(26).bytes(message.AssetID);
    }
    if (message.CurrencyID !== undefined && message.CurrencyID.length !== 0) {
      writer.uint32(34).bytes(message.CurrencyID);
    }
    if (message.Price !== undefined && message.Price !== 0) {
      writer.uint32(40).int64(message.Price);
    }
    if (message.ReservePrice !== undefined && message.ReservePrice !== 0) {
      writer.uint32(48).int64(message.ReservePrice);
    }
    if (message.EndTime !== undefined && message.EndTime !== 0) {
      writer.uint32(56).int64(message.EndTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MarketType = reader.int32() as any;
          break;
        case 2:
          message.MarketplaceID = reader.bytes();
          break;
        case 3:
          message.AssetID = reader.bytes();
          break;
        case 4:
          message.CurrencyID = reader.bytes();
          break;
        case 5:
          message.Price = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.ReservePrice = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.EndTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SellContract {
    return {
      MarketType: isSet(object.marketType) ? sellContract_EnumMarketTypeFromJSON(object.marketType) : 0,
      MarketplaceID: isSet(object.marketplaceId) ? bytesFromBase64(object.marketplaceId) : new Uint8Array(),
      AssetID: isSet(object.assetId) ? bytesFromBase64(object.assetId) : new Uint8Array(),
      CurrencyID: isSet(object.currencyId) ? bytesFromBase64(object.currencyId) : new Uint8Array(),
      Price: isSet(object.price) ? Number(object.price) : 0,
      ReservePrice: isSet(object.reservePrice) ? Number(object.reservePrice) : 0,
      EndTime: isSet(object.endTime) ? Number(object.endTime) : 0,
    };
  },

  toJSON(message: SellContract): unknown {
    const obj: any = {};
    message.MarketType !== undefined && (obj.marketType = sellContract_EnumMarketTypeToJSON(message.MarketType));
    message.MarketplaceID !== undefined &&
      (obj.marketplaceId = base64FromBytes(
        message.MarketplaceID !== undefined ? message.MarketplaceID : new Uint8Array(),
      ));
    message.AssetID !== undefined &&
      (obj.assetId = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.CurrencyID !== undefined &&
      (obj.currencyId = base64FromBytes(message.CurrencyID !== undefined ? message.CurrencyID : new Uint8Array()));
    message.Price !== undefined && (obj.price = Math.round(message.Price));
    message.ReservePrice !== undefined && (obj.reservePrice = Math.round(message.ReservePrice));
    message.EndTime !== undefined && (obj.endTime = Math.round(message.EndTime));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SellContract>, I>>(object: I): SellContract {
    const message = createBaseSellContract();
    message.MarketType = object.MarketType ?? 0;
    message.MarketplaceID = object.MarketplaceID ?? new Uint8Array();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.CurrencyID = object.CurrencyID ?? new Uint8Array();
    message.Price = object.Price ?? 0;
    message.ReservePrice = object.ReservePrice ?? 0;
    message.EndTime = object.EndTime ?? 0;
    return message;
  },
};

function createBaseCancelMarketOrderContract(): CancelMarketOrderContract {
  return { OrderID: new Uint8Array() };
}

export const CancelMarketOrderContract = {
  encode(message: CancelMarketOrderContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.OrderID !== undefined && message.OrderID.length !== 0) {
      writer.uint32(10).bytes(message.OrderID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelMarketOrderContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelMarketOrderContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.OrderID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelMarketOrderContract {
    return { OrderID: isSet(object.orderId) ? bytesFromBase64(object.orderId) : new Uint8Array() };
  },

  toJSON(message: CancelMarketOrderContract): unknown {
    const obj: any = {};
    message.OrderID !== undefined &&
      (obj.orderId = base64FromBytes(message.OrderID !== undefined ? message.OrderID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelMarketOrderContract>, I>>(object: I): CancelMarketOrderContract {
    const message = createBaseCancelMarketOrderContract();
    message.OrderID = object.OrderID ?? new Uint8Array();
    return message;
  },
};

function createBaseCreateMarketplaceContract(): CreateMarketplaceContract {
  return { Name: new Uint8Array(), ReferralAddress: new Uint8Array(), ReferralPercentage: 0 };
}

export const CreateMarketplaceContract = {
  encode(message: CreateMarketplaceContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== undefined && message.Name.length !== 0) {
      writer.uint32(10).bytes(message.Name);
    }
    if (message.ReferralAddress !== undefined && message.ReferralAddress.length !== 0) {
      writer.uint32(18).bytes(message.ReferralAddress);
    }
    if (message.ReferralPercentage !== undefined && message.ReferralPercentage !== 0) {
      writer.uint32(24).uint32(message.ReferralPercentage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMarketplaceContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMarketplaceContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Name = reader.bytes();
          break;
        case 2:
          message.ReferralAddress = reader.bytes();
          break;
        case 3:
          message.ReferralPercentage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMarketplaceContract {
    return {
      Name: isSet(object.name) ? bytesFromBase64(object.name) : new Uint8Array(),
      ReferralAddress: isSet(object["referralAddress,omitempty"])
        ? bytesFromBase64(object["referralAddress,omitempty"])
        : new Uint8Array(),
      ReferralPercentage: isSet(object["referralPercentage,omitempty"])
        ? Number(object["referralPercentage,omitempty"])
        : 0,
    };
  },

  toJSON(message: CreateMarketplaceContract): unknown {
    const obj: any = {};
    message.Name !== undefined &&
      (obj.name = base64FromBytes(message.Name !== undefined ? message.Name : new Uint8Array()));
    message.ReferralAddress !== undefined &&
      (obj["referralAddress,omitempty"] = base64FromBytes(
        message.ReferralAddress !== undefined ? message.ReferralAddress : new Uint8Array(),
      ));
    message.ReferralPercentage !== undefined &&
      (obj["referralPercentage,omitempty"] = Math.round(message.ReferralPercentage));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateMarketplaceContract>, I>>(object: I): CreateMarketplaceContract {
    const message = createBaseCreateMarketplaceContract();
    message.Name = object.Name ?? new Uint8Array();
    message.ReferralAddress = object.ReferralAddress ?? new Uint8Array();
    message.ReferralPercentage = object.ReferralPercentage ?? 0;
    return message;
  },
};

function createBaseConfigMarketplaceContract(): ConfigMarketplaceContract {
  return {
    MarketplaceID: new Uint8Array(),
    Name: new Uint8Array(),
    ReferralAddress: new Uint8Array(),
    ReferralPercentage: 0,
  };
}

export const ConfigMarketplaceContract = {
  encode(message: ConfigMarketplaceContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.MarketplaceID !== undefined && message.MarketplaceID.length !== 0) {
      writer.uint32(10).bytes(message.MarketplaceID);
    }
    if (message.Name !== undefined && message.Name.length !== 0) {
      writer.uint32(18).bytes(message.Name);
    }
    if (message.ReferralAddress !== undefined && message.ReferralAddress.length !== 0) {
      writer.uint32(26).bytes(message.ReferralAddress);
    }
    if (message.ReferralPercentage !== undefined && message.ReferralPercentage !== 0) {
      writer.uint32(32).uint32(message.ReferralPercentage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigMarketplaceContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigMarketplaceContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MarketplaceID = reader.bytes();
          break;
        case 2:
          message.Name = reader.bytes();
          break;
        case 3:
          message.ReferralAddress = reader.bytes();
          break;
        case 4:
          message.ReferralPercentage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigMarketplaceContract {
    return {
      MarketplaceID: isSet(object.marketplaceId) ? bytesFromBase64(object.marketplaceId) : new Uint8Array(),
      Name: isSet(object.name) ? bytesFromBase64(object.name) : new Uint8Array(),
      ReferralAddress: isSet(object["referralAddress,omitempty"])
        ? bytesFromBase64(object["referralAddress,omitempty"])
        : new Uint8Array(),
      ReferralPercentage: isSet(object["referralPercentage,omitempty"])
        ? Number(object["referralPercentage,omitempty"])
        : 0,
    };
  },

  toJSON(message: ConfigMarketplaceContract): unknown {
    const obj: any = {};
    message.MarketplaceID !== undefined &&
      (obj.marketplaceId = base64FromBytes(
        message.MarketplaceID !== undefined ? message.MarketplaceID : new Uint8Array(),
      ));
    message.Name !== undefined &&
      (obj.name = base64FromBytes(message.Name !== undefined ? message.Name : new Uint8Array()));
    message.ReferralAddress !== undefined &&
      (obj["referralAddress,omitempty"] = base64FromBytes(
        message.ReferralAddress !== undefined ? message.ReferralAddress : new Uint8Array(),
      ));
    message.ReferralPercentage !== undefined &&
      (obj["referralPercentage,omitempty"] = Math.round(message.ReferralPercentage));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigMarketplaceContract>, I>>(object: I): ConfigMarketplaceContract {
    const message = createBaseConfigMarketplaceContract();
    message.MarketplaceID = object.MarketplaceID ?? new Uint8Array();
    message.Name = object.Name ?? new Uint8Array();
    message.ReferralAddress = object.ReferralAddress ?? new Uint8Array();
    message.ReferralPercentage = object.ReferralPercentage ?? 0;
    return message;
  },
};

function createBaseAccKey(): AccKey {
  return { address: new Uint8Array(), weight: 0 };
}

export const AccKey = {
  encode(message: AccKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined && message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.weight !== undefined && message.weight !== 0) {
      writer.uint32(16).int64(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.weight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccKey {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      weight: isSet(object.weight) ? Number(object.weight) : 0,
    };
  },

  toJSON(message: AccKey): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.weight !== undefined && (obj.weight = Math.round(message.weight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccKey>, I>>(object: I): AccKey {
    const message = createBaseAccKey();
    message.address = object.address ?? new Uint8Array();
    message.weight = object.weight ?? 0;
    return message;
  },
};

function createBaseAccPermission(): AccPermission {
  return { Type: 0, PermissionName: "", Threshold: 0, Operations: new Uint8Array(), Signers: [] };
}

export const AccPermission = {
  encode(message: AccPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== undefined && message.Type !== 0) {
      writer.uint32(16).int32(message.Type);
    }
    if (message.PermissionName !== undefined && message.PermissionName !== "") {
      writer.uint32(26).string(message.PermissionName);
    }
    if (message.Threshold !== undefined && message.Threshold !== 0) {
      writer.uint32(32).int64(message.Threshold);
    }
    if (message.Operations !== undefined && message.Operations.length !== 0) {
      writer.uint32(42).bytes(message.Operations);
    }
    if (message.Signers !== undefined && message.Signers.length !== 0) {
      for (const v of message.Signers) {
        AccKey.encode(v!, writer.uint32(50).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.Type = reader.int32() as any;
          break;
        case 3:
          message.PermissionName = reader.string();
          break;
        case 4:
          message.Threshold = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.Operations = reader.bytes();
          break;
        case 6:
          message.Signers!.push(AccKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccPermission {
    return {
      Type: isSet(object.type) ? accPermission_AccPermissionTypeFromJSON(object.type) : 0,
      PermissionName: isSet(object.permissionName) ? String(object.permissionName) : "",
      Threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
      Operations: isSet(object.operations) ? bytesFromBase64(object.operations) : new Uint8Array(),
      Signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => AccKey.fromJSON(e)) : [],
    };
  },

  toJSON(message: AccPermission): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.type = accPermission_AccPermissionTypeToJSON(message.Type));
    message.PermissionName !== undefined && (obj.permissionName = message.PermissionName);
    message.Threshold !== undefined && (obj.threshold = Math.round(message.Threshold));
    message.Operations !== undefined &&
      (obj.operations = base64FromBytes(message.Operations !== undefined ? message.Operations : new Uint8Array()));
    if (message.Signers) {
      obj.signers = message.Signers.map((e) => e ? AccKey.toJSON(e) : undefined);
    } else {
      obj.signers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccPermission>, I>>(object: I): AccPermission {
    const message = createBaseAccPermission();
    message.Type = object.Type ?? 0;
    message.PermissionName = object.PermissionName ?? "";
    message.Threshold = object.Threshold ?? 0;
    message.Operations = object.Operations ?? new Uint8Array();
    message.Signers = object.Signers?.map((e) => AccKey.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateAccountPermissionContract(): UpdateAccountPermissionContract {
  return { Permissions: [] };
}

export const UpdateAccountPermissionContract = {
  encode(message: UpdateAccountPermissionContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Permissions !== undefined && message.Permissions.length !== 0) {
      for (const v of message.Permissions) {
        AccPermission.encode(v!, writer.uint32(66).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccountPermissionContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAccountPermissionContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.Permissions!.push(AccPermission.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAccountPermissionContract {
    return {
      Permissions: Array.isArray(object?.["permissions,omitempty"])
        ? object["permissions,omitempty"].map((e: any) => AccPermission.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateAccountPermissionContract): unknown {
    const obj: any = {};
    if (message.Permissions) {
      obj["permissions,omitempty"] = message.Permissions.map((e) => e ? AccPermission.toJSON(e) : undefined);
    } else {
      obj["permissions,omitempty"] = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAccountPermissionContract>, I>>(
    object: I,
  ): UpdateAccountPermissionContract {
    const message = createBaseUpdateAccountPermissionContract();
    message.Permissions = object.Permissions?.map((e) => AccPermission.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDepositContract(): DepositContract {
  return { DepositType: 0, ID: new Uint8Array(), CurrencyID: new Uint8Array(), Amount: 0 };
}

export const DepositContract = {
  encode(message: DepositContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.DepositType !== undefined && message.DepositType !== 0) {
      writer.uint32(8).int32(message.DepositType);
    }
    if (message.ID !== undefined && message.ID.length !== 0) {
      writer.uint32(18).bytes(message.ID);
    }
    if (message.CurrencyID !== undefined && message.CurrencyID.length !== 0) {
      writer.uint32(26).bytes(message.CurrencyID);
    }
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(32).int64(message.Amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DepositType = reader.int32() as any;
          break;
        case 2:
          message.ID = reader.bytes();
          break;
        case 3:
          message.CurrencyID = reader.bytes();
          break;
        case 4:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositContract {
    return {
      DepositType: isSet(object.depositType) ? depositContract_EnumDepositTypeFromJSON(object.depositType) : 0,
      ID: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      CurrencyID: isSet(object.currencyID) ? bytesFromBase64(object.currencyID) : new Uint8Array(),
      Amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: DepositContract): unknown {
    const obj: any = {};
    message.DepositType !== undefined && (obj.depositType = depositContract_EnumDepositTypeToJSON(message.DepositType));
    message.ID !== undefined && (obj.id = base64FromBytes(message.ID !== undefined ? message.ID : new Uint8Array()));
    message.CurrencyID !== undefined &&
      (obj.currencyID = base64FromBytes(message.CurrencyID !== undefined ? message.CurrencyID : new Uint8Array()));
    message.Amount !== undefined && (obj.amount = Math.round(message.Amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositContract>, I>>(object: I): DepositContract {
    const message = createBaseDepositContract();
    message.DepositType = object.DepositType ?? 0;
    message.ID = object.ID ?? new Uint8Array();
    message.CurrencyID = object.CurrencyID ?? new Uint8Array();
    message.Amount = object.Amount ?? 0;
    return message;
  },
};

function createBaseCallValue(): CallValue {
  return { Amount: 0, KDARoyalties: 0, KLVRoyalties: 0 };
}

export const CallValue = {
  encode(message: CallValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(8).int64(message.Amount);
    }
    if (message.KDARoyalties !== undefined && message.KDARoyalties !== 0) {
      writer.uint32(16).int64(message.KDARoyalties);
    }
    if (message.KLVRoyalties !== undefined && message.KLVRoyalties !== 0) {
      writer.uint32(24).int64(message.KLVRoyalties);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CallValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.KDARoyalties = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.KLVRoyalties = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CallValue {
    return {
      Amount: isSet(object.amount) ? Number(object.amount) : 0,
      KDARoyalties: isSet(object.kdaRoyalties) ? Number(object.kdaRoyalties) : 0,
      KLVRoyalties: isSet(object.klvRoyalties) ? Number(object.klvRoyalties) : 0,
    };
  },

  toJSON(message: CallValue): unknown {
    const obj: any = {};
    message.Amount !== undefined && (obj.amount = Math.round(message.Amount));
    message.KDARoyalties !== undefined && (obj.kdaRoyalties = Math.round(message.KDARoyalties));
    message.KLVRoyalties !== undefined && (obj.klvRoyalties = Math.round(message.KLVRoyalties));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CallValue>, I>>(object: I): CallValue {
    const message = createBaseCallValue();
    message.Amount = object.Amount ?? 0;
    message.KDARoyalties = object.KDARoyalties ?? 0;
    message.KLVRoyalties = object.KLVRoyalties ?? 0;
    return message;
  },
};

function createBaseSmartContract(): SmartContract {
  return { Type: 0, Address: new Uint8Array(), CallValue: {} };
}

export const SmartContract = {
  encode(message: SmartContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== undefined && message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.Address !== undefined && message.Address.length !== 0) {
      writer.uint32(18).bytes(message.Address);
    }
    Object.entries(message.CallValue || {}).forEach(([key, value]) => {
      SmartContract_CallValueEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SmartContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmartContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.Address = reader.bytes();
          break;
        case 3:
          const entry3 = SmartContract_CallValueEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.CallValue![entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SmartContract {
    return {
      Type: isSet(object.type) ? smartContract_SCTypeFromJSON(object.type) : 0,
      Address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      CallValue: isObject(object.callValue)
        ? Object.entries(object.callValue).reduce<{ [key: string]: CallValue }>((acc, [key, value]) => {
          acc[key] = CallValue.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SmartContract): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.type = smartContract_SCTypeToJSON(message.Type));
    message.Address !== undefined &&
      (obj.address = base64FromBytes(message.Address !== undefined ? message.Address : new Uint8Array()));
    obj.callValue = {};
    if (message.CallValue) {
      Object.entries(message.CallValue).forEach(([k, v]) => {
        obj.callValue[k] = CallValue.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SmartContract>, I>>(object: I): SmartContract {
    const message = createBaseSmartContract();
    message.Type = object.Type ?? 0;
    message.Address = object.Address ?? new Uint8Array();
    message.CallValue = Object.entries(object.CallValue ?? {}).reduce<{ [key: string]: CallValue }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = CallValue.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSmartContract_CallValueEntry(): SmartContract_CallValueEntry {
  return { key: "", value: undefined };
}

export const SmartContract_CallValueEntry = {
  encode(message: SmartContract_CallValueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CallValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SmartContract_CallValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmartContract_CallValueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = CallValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SmartContract_CallValueEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? CallValue.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SmartContract_CallValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? CallValue.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SmartContract_CallValueEntry>, I>>(object: I): SmartContract_CallValueEntry {
    const message = createBaseSmartContract_CallValueEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? CallValue.fromPartial(object.value)
      : undefined;
    return message;
  },
};

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    "name": "lib/transaction/proto/contracts.proto",
    "package": "proto",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "TransferContract",
      "field": [{
        "name": "ToAddress",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "toAddress,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "AssetID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "assetId,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Amount",
        "number": 3,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "KDARoyalties",
        "number": 4,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "kdaRoyalties,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "KLVRoyalties",
        "number": 5,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "klvRoyalties,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CreateAssetContract",
      "field": [{
        "name": "Type",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.CreateAssetContract.EnumAssetType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Name",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Ticker",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ticker",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "OwnerAddress",
        "number": 4,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ownerAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Logo",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "logo",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "URIs",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".proto.CreateAssetContract.URIsEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uris",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Precision",
        "number": 7,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "precision",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "InitialSupply",
        "number": 8,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "initialSupply",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MaxSupply",
        "number": 9,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "maxSupply",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Royalties",
        "number": 10,
        "label": 1,
        "type": 11,
        "typeName": ".proto.RoyaltiesInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "royalties",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Properties",
        "number": 11,
        "label": 1,
        "type": 11,
        "typeName": ".proto.PropertiesInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "properties",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Attributes",
        "number": 12,
        "label": 1,
        "type": 11,
        "typeName": ".proto.AttributesInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "attributes",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Staking",
        "number": 13,
        "label": 1,
        "type": 11,
        "typeName": ".proto.StakingInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "staking",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Roles",
        "number": 14,
        "label": 3,
        "type": 11,
        "typeName": ".proto.RolesInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "roles",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "AdminAddress",
        "number": 15,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "adminAddress",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "URIsEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [{
        "name": "EnumAssetType",
        "value": [{ "name": "Fungible", "number": 0, "options": undefined }, {
          "name": "NonFungible",
          "number": 1,
          "options": undefined,
        }, { "name": "SemiFungible", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PropertiesInfo",
      "field": [{
        "name": "CanFreeze",
        "number": 1,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "canFreeze",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanWipe",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "canWipe",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanPause",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "canPause",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanMint",
        "number": 4,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "canMint",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanBurn",
        "number": 5,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "canBurn",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanChangeOwner",
        "number": 6,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "canChangeOwner",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanAddRoles",
        "number": 7,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "canAddRoles",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "LimitTransfer",
        "number": 8,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "limitTransfer",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "AttributesInfo",
      "field": [{
        "name": "IsPaused",
        "number": 1,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "isPaused",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "IsNFTMintStopped",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "isNFTMintStopped",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "IsRoyaltiesChangeStopped",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "isRoyaltiesChangeStopped",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "IsNFTMetadataChangeStopped",
        "number": 4,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "isNFTMetadataChangeStopped",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "StakingInfo",
      "field": [{
        "name": "Type",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.StakingInfo.InterestType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "APR",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "apr",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MinEpochsToClaim",
        "number": 3,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "minEpochsToClaim",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MinEpochsToUnstake",
        "number": 4,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "minEpochsToUnstake",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MinEpochsToWithdraw",
        "number": 5,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "minEpochsToWithdraw",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "InterestType",
        "value": [{ "name": "APRI", "number": 0, "options": undefined }, {
          "name": "FPRI",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RolesInfo",
      "field": [{
        "name": "Address",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "address",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "HasRoleMint",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "hasRoleMint",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "HasRoleSetITOPrices",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "hasRoleSetITOPrices",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "HasRoleDeposit",
        "number": 4,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "hasRoleDeposit",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "HasRoleTransfer",
        "number": 5,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "hasRoleTransfer",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RoyaltiesInfo",
      "field": [{
        "name": "Address",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "address",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "TransferPercentage",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".proto.RoyaltyInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "transferPercentage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "TransferFixed",
        "number": 3,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "transferFixed",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MarketPercentage",
        "number": 4,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "marketPercentage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MarketFixed",
        "number": 5,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "marketFixed",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "SplitRoyalties",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".proto.RoyaltiesInfo.SplitRoyaltiesEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "splitRoyalties",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ITOFixed",
        "number": 7,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "itoFixed",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ITOPercentage",
        "number": 8,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "itoPercentage",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "SplitRoyaltiesEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 11,
          "typeName": ".proto.RoyaltySplitInfo",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RoyaltySplitInfo",
      "field": [{
        "name": "PercentTransferPercentage",
        "number": 1,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "percentTransferPercentage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PercentTransferFixed",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "percentTransferFixed",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PercentMarketPercentage",
        "number": 3,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "percentMarketPercentage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PercentMarketFixed",
        "number": 4,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "percentMarketFixed",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PercentITOPercentage",
        "number": 5,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "percentITOPercentage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PercentITOFixed",
        "number": 6,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "percentITOFixed",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RoyaltyInfo",
      "field": [{
        "name": "Amount",
        "number": 1,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Percentage",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "percentage",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "KDAPoolInfo",
      "field": [{
        "name": "Active",
        "number": 1,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "active",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "AdminAddress",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "adminAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "FRatioKDA",
        "number": 3,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fRatioKDA",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "FRatioKLV",
        "number": 4,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fRatioKLV",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "AssetTriggerContract",
      "field": [{
        "name": "TriggerType",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.AssetTriggerContract.EnumTriggerType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "triggerType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "AssetID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "assetId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ToAddress",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "toAddress,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Amount",
        "number": 4,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MIME",
        "number": 5,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "mime,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Logo",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "logo,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "URIs",
        "number": 7,
        "label": 3,
        "type": 11,
        "typeName": ".proto.AssetTriggerContract.URIsEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uris,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Role",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".proto.RolesInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "role,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Staking",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".proto.StakingInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "staking,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Royalties",
        "number": 10,
        "label": 1,
        "type": 11,
        "typeName": ".proto.RoyaltiesInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "royalties,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "KDAPool",
        "number": 11,
        "label": 1,
        "type": 11,
        "typeName": ".proto.KDAPoolInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "kdaPool,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Value",
        "number": 12,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "value,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "URIsEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [{
        "name": "EnumTriggerType",
        "value": [
          { "name": "Mint", "number": 0, "options": undefined },
          { "name": "Burn", "number": 1, "options": undefined },
          { "name": "Wipe", "number": 2, "options": undefined },
          { "name": "Pause", "number": 3, "options": undefined },
          { "name": "Resume", "number": 4, "options": undefined },
          { "name": "ChangeOwner", "number": 5, "options": undefined },
          { "name": "AddRole", "number": 6, "options": undefined },
          { "name": "RemoveRole", "number": 7, "options": undefined },
          { "name": "UpdateMetadata", "number": 8, "options": undefined },
          { "name": "StopNFTMint", "number": 9, "options": undefined },
          { "name": "UpdateLogo", "number": 10, "options": undefined },
          { "name": "UpdateURIs", "number": 11, "options": undefined },
          { "name": "ChangeRoyaltiesReceiver", "number": 12, "options": undefined },
          { "name": "UpdateStaking", "number": 13, "options": undefined },
          { "name": "UpdateRoyalties", "number": 14, "options": undefined },
          { "name": "UpdateKDAFeePool", "number": 15, "options": undefined },
          { "name": "StopRoyaltiesChange", "number": 16, "options": undefined },
          { "name": "StopNFTMetadataChange", "number": 17, "options": undefined },
          { "name": "ChangeAdmin", "number": 18, "options": undefined },
        ],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ValidatorConfig",
      "field": [{
        "name": "BLSPublicKey",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "blsPublicKey,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "RewardAddress",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "rewardAddress,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanDelegate",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "canDelegate",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Commission",
        "number": 4,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "commission",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MaxDelegationAmount",
        "number": 5,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "maxDelegationAmount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Logo",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "logo",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "URIs",
        "number": 7,
        "label": 3,
        "type": 11,
        "typeName": ".proto.ValidatorConfig.URIsEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uris",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Name",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "URIsEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CreateValidatorContract",
      "field": [{
        "name": "OwnerAddress",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ownerAddress,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Config",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".proto.ValidatorConfig",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "config,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ValidatorConfigContract",
      "field": [{
        "name": "Config",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".proto.ValidatorConfig",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "config,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FreezeContract",
      "field": [{
        "name": "AssetID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "assetId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Amount",
        "number": 2,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UnfreezeContract",
      "field": [{
        "name": "AssetID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "assetId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "BucketID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucketId",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "DelegateContract",
      "field": [{
        "name": "ToAddress",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "toAddress,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "BucketID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucketId",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UndelegateContract",
      "field": [{
        "name": "BucketID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucketId",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "WithdrawContract",
      "field": [{
        "name": "AssetID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "assetId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "WithdrawType",
        "number": 2,
        "label": 1,
        "type": 14,
        "typeName": ".proto.WithdrawContract.EnumWithdrawType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "withdrawType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "amount",
        "number": 3,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CurrencyID",
        "number": 4,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "currencyID",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "EnumWithdrawType",
        "value": [{ "name": "Staking", "number": 0, "options": undefined }, {
          "name": "KDAPool",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ClaimContract",
      "field": [{
        "name": "ClaimType",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.ClaimContract.EnumClaimType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "claimType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "EnumClaimType",
        "value": [{ "name": "StakingClaim", "number": 0, "options": undefined }, {
          "name": "AllowanceClaim",
          "number": 1,
          "options": undefined,
        }, { "name": "MarketClaim", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UnjailContract",
      "field": [],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SetAccountNameContract",
      "field": [{
        "name": "Name",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ProposalContract",
      "field": [{
        "name": "Parameters",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".proto.ProposalContract.ParametersEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "parameters",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Description",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "EpochsDuration",
        "number": 3,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "epochsDuration",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "ParametersEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 12,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "VoteContract",
      "field": [{
        "name": "ProposalID",
        "number": 1,
        "label": 1,
        "type": 4,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "proposalId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Amount",
        "number": 2,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Type",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".proto.VoteContract.EnumVoteType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "EnumVoteType",
        "value": [{ "name": "Yes", "number": 0, "options": undefined }, {
          "name": "No",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ConfigITOContract",
      "field": [{
        "name": "AssetID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "assetId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReceiverAddress",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "receiverAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Status",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".proto.ConfigITOContract.EnumITOStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MaxAmount",
        "number": 4,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "maxAmount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PackInfo",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".proto.ConfigITOContract.PackInfoEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "packInfo",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "DefaultLimitPerAddress",
        "number": 6,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "defaultLimitPerAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "WhitelistStatus",
        "number": 7,
        "label": 1,
        "type": 14,
        "typeName": ".proto.ConfigITOContract.EnumITOStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "whitelistStatus",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "WhitelistInfo",
        "number": 8,
        "label": 3,
        "type": 11,
        "typeName": ".proto.ConfigITOContract.WhitelistInfoEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "whitelistInfo",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "WhitelistStartTime",
        "number": 9,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "whitelistStartTime",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "WhitelistEndTime",
        "number": 10,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "whitelistEndTime",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "StartTime",
        "number": 11,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "startTime",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "EndTime",
        "number": 12,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "endTime",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "PackInfoEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 11,
          "typeName": ".proto.PackInfo",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "WhitelistInfoEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 11,
          "typeName": ".proto.WhitelistInfo",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [{
        "name": "EnumITOStatus",
        "value": [{ "name": "DefaultITO", "number": 0, "options": undefined }, {
          "name": "ActiveITO",
          "number": 1,
          "options": undefined,
        }, { "name": "PausedITO", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "WhitelistInfo",
      "field": [{
        "name": "Limit",
        "number": 1,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "limit",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SetITOPricesContract",
      "field": [{
        "name": "AssetID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "assetId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PackInfo",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".proto.SetITOPricesContract.PackInfoEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "packInfo",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "PackInfoEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 11,
          "typeName": ".proto.PackInfo",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ITOTriggerContract",
      "field": [{
        "name": "TriggerType",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.ITOTriggerContract.EnumITOTriggerType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "triggerType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "AssetID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "assetId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReceiverAddress",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "receiverAddress,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Status",
        "number": 4,
        "label": 1,
        "type": 14,
        "typeName": ".proto.ITOTriggerContract.EnumITOStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MaxAmount",
        "number": 5,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "maxAmount,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PackInfo",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".proto.ITOTriggerContract.PackInfoEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "packInfo,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "DefaultLimitPerAddress",
        "number": 7,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "defaultLimitPerAddress,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "WhitelistStatus",
        "number": 8,
        "label": 1,
        "type": 14,
        "typeName": ".proto.ITOTriggerContract.EnumITOStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "whitelistStatus,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "WhitelistInfo",
        "number": 9,
        "label": 3,
        "type": 11,
        "typeName": ".proto.ITOTriggerContract.WhitelistInfoEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "whitelistInfo,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "WhitelistStartTime",
        "number": 10,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "whitelistStartTime,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "WhitelistEndTime",
        "number": 11,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "whitelistEndTime,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "StartTime",
        "number": 12,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "startTime,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "EndTime",
        "number": 13,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "endTime,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "PackInfoEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 11,
          "typeName": ".proto.PackInfo",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "WhitelistInfoEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 11,
          "typeName": ".proto.WhitelistInfo",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [{
        "name": "EnumITOTriggerType",
        "value": [
          { "name": "SetITOPrices", "number": 0, "options": undefined },
          { "name": "UpdateStatus", "number": 1, "options": undefined },
          { "name": "UpdateReceiverAddress", "number": 2, "options": undefined },
          { "name": "UpdateMaxAmount", "number": 3, "options": undefined },
          { "name": "UpdateDefaultLimitPerAddress", "number": 4, "options": undefined },
          { "name": "UpdateTimes", "number": 5, "options": undefined },
          { "name": "UpdateWhitelistStatus", "number": 6, "options": undefined },
          { "name": "AddToWhitelist", "number": 7, "options": undefined },
          { "name": "RemoveFromWhitelist", "number": 8, "options": undefined },
          { "name": "UpdateWhitelistTimes", "number": 9, "options": undefined },
        ],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "EnumITOStatus",
        "value": [{ "name": "DefaultITO", "number": 0, "options": undefined }, {
          "name": "ActiveITO",
          "number": 1,
          "options": undefined,
        }, { "name": "PausedITO", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PackInfo",
      "field": [{
        "name": "Packs",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".proto.PackItem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "packs",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PackItem",
      "field": [{
        "name": "Amount",
        "number": 1,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Price",
        "number": 2,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "price",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "BuyContract",
      "field": [{
        "name": "BuyType",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.BuyContract.EnumBuyType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "buyType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CurrencyID",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "currencyId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Amount",
        "number": 4,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CurrencyAmount",
        "number": 5,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "currencyAmount",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "EnumBuyType",
        "value": [{ "name": "ITOBuy", "number": 0, "options": undefined }, {
          "name": "MarketBuy",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SellContract",
      "field": [{
        "name": "MarketType",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.SellContract.EnumMarketType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "marketType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MarketplaceID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "marketplaceId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "AssetID",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "assetId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CurrencyID",
        "number": 4,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "currencyId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Price",
        "number": 5,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "price",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReservePrice",
        "number": 6,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "reservePrice",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "EndTime",
        "number": 7,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "endTime",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "EnumMarketType",
        "value": [{ "name": "BuyItNowMarket", "number": 0, "options": undefined }, {
          "name": "AuctionMarket",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CancelMarketOrderContract",
      "field": [{
        "name": "OrderID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "orderId",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CreateMarketplaceContract",
      "field": [{
        "name": "Name",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReferralAddress",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "referralAddress,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReferralPercentage",
        "number": 3,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "referralPercentage,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ConfigMarketplaceContract",
      "field": [{
        "name": "MarketplaceID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "marketplaceId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Name",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReferralAddress",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "referralAddress,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReferralPercentage",
        "number": 4,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "referralPercentage,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "AccKey",
      "field": [{
        "name": "address",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "address",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "weight",
        "number": 2,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "weight",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "AccPermission",
      "field": [{
        "name": "Type",
        "number": 2,
        "label": 1,
        "type": 14,
        "typeName": ".proto.AccPermission.AccPermissionType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PermissionName",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "permissionName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Threshold",
        "number": 4,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "threshold",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Operations",
        "number": 5,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operations",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Signers",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".proto.AccKey",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "signers",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "AccPermissionType",
        "value": [{ "name": "Owner", "number": 0, "options": undefined }, {
          "name": "User",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UpdateAccountPermissionContract",
      "field": [{
        "name": "Permissions",
        "number": 8,
        "label": 3,
        "type": 11,
        "typeName": ".proto.AccPermission",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "permissions,omitempty",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "DepositContract",
      "field": [{
        "name": "DepositType",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.DepositContract.EnumDepositType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "depositType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CurrencyID",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "currencyID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Amount",
        "number": 4,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "EnumDepositType",
        "value": [{ "name": "FPRDeposit", "number": 0, "options": undefined }, {
          "name": "KDAPool",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CallValue",
      "field": [{
        "name": "Amount",
        "number": 1,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "KDARoyalties",
        "number": 2,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "kdaRoyalties",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "KLVRoyalties",
        "number": 3,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "klvRoyalties",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SmartContract",
      "field": [{
        "name": "Type",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.SmartContract.SCType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Address",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "address",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CallValue",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".proto.SmartContract.CallValueEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "callValue",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "CallValueEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 11,
          "typeName": ".proto.CallValue",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [{
        "name": "SCType",
        "value": [{ "name": "SCInvoke", "number": 0, "options": undefined }, {
          "name": "SCDeploy",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [],
    "extension": [],
    "options": {
      "javaPackage": "",
      "javaOuterClassname": "",
      "javaMultipleFiles": false,
      "javaGenerateEqualsAndHash": false,
      "javaStringCheckUtf8": false,
      "optimizeFor": 1,
      "goPackage": "./;transaction",
      "ccGenericServices": false,
      "javaGenericServices": false,
      "pyGenericServices": false,
      "phpGenericServices": false,
      "deprecated": false,
      "ccEnableArenas": false,
      "objcClassPrefix": "",
      "csharpNamespace": "",
      "swiftPrefix": "",
      "phpClassPrefix": "",
      "phpNamespace": "",
      "phpMetadataNamespace": "",
      "rubyPackage": "",
      "uninterpretedOption": [],
    },
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0],
        "span": [7, 0, 13, 1],
        "leadingComments": " TXContract available\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [16, 0, 37, 1],
        "leadingComments": " CreateAssetContract holds the data for a Klever digital asset\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2],
        "span": [40, 0, 49, 1],
        "leadingComments": " PropertiesInfo hold the properties structure for the KDA asset\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3],
        "span": [52, 0, 57, 1],
        "leadingComments": " AttributesInfo hold the attributes structure for the KDA asset\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4],
        "span": [60, 0, 70, 1],
        "leadingComments": " StakingInfo hold the staking structure for the KDA asset\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5],
        "span": [73, 0, 79, 1],
        "leadingComments": " RolesInfo holds the roles for a given asset and the given address\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6],
        "span": [82, 0, 91, 1],
        "leadingComments": " RoyaltiesInfo holds the royalties for a given asset\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7],
        "span": [94, 0, 101, 1],
        "leadingComments": " RoyaltySplitInfo holds the royalty split\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8],
        "span": [104, 0, 107, 1],
        "leadingComments": " RoyaltyInfo holds the royalty threshold\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9],
        "span": [110, 0, 115, 1],
        "leadingComments": " KDAPoolInfo holds the KDA Fee pool info\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10],
        "span": [118, 0, 152, 1],
        "leadingComments": " AssetTriggerContract triggers assets functions\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11],
        "span": [155, 0, 164, 1],
        "leadingComments": " ValidatorConfig holds the data for a validator configuration\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12],
        "span": [167, 0, 170, 1],
        "leadingComments": " CreateValidatorContract holds the data for create a validator\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 13],
        "span": [173, 0, 175, 1],
        "leadingComments": " ValidatorConfigContract holds the data for a validator configuration transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 14],
        "span": [178, 0, 181, 1],
        "leadingComments": " FreezeContract holds the data for a freeze transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 15],
        "span": [184, 0, 187, 1],
        "leadingComments": " UnfreezeContract holds the data for a unfreeze transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 16],
        "span": [190, 0, 193, 1],
        "leadingComments": " DelegateContract holds the data for a delegate transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17],
        "span": [196, 0, 198, 1],
        "leadingComments": " UndelegateContract holds the data for a undelegate transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18],
        "span": [201, 0, 210, 1],
        "leadingComments": " WithdrawContract holds the data for a withdraw transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 19],
        "span": [213, 0, 221, 1],
        "leadingComments": " ClaimContract holds the data for a claim transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 20],
        "span": [224, 0, 25],
        "leadingComments": " UnjailContract holds the data for a unjail transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 21],
        "span": [227, 0, 229, 1],
        "leadingComments": " SetAccountNameContract holds the data for a setAccountName transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 22],
        "span": [232, 0, 236, 1],
        "leadingComments": " ProposalContract holds the data for a proposal transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 23],
        "span": [239, 0, 247, 1],
        "leadingComments": " VoteContract holds the data for a vote transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 24],
        "span": [250, 0, 268, 1],
        "leadingComments": " ConfigITOContract holds the data for a ConfigITO transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 26],
        "span": [275, 0, 278, 1],
        "leadingComments": " SetITOPrices holds the data for a ConfigITO transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 27],
        "span": [281, 0, 312, 1],
        "leadingComments": " ITOTriggerContract triggers assets functions\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28],
        "span": [315, 0, 317, 1],
        "leadingComments": " PackInfo holds the pack list structure for the ITO contract\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29],
        "span": [320, 0, 323, 1],
        "leadingComments": " PackItem hold the pack structure for the ITO contract\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 30],
        "span": [326, 0, 336, 1],
        "leadingComments": " BuyContract holds the data for a buy transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 31],
        "span": [339, 0, 351, 1],
        "leadingComments": " SellContract holds the data for a sell transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 32],
        "span": [354, 0, 356, 1],
        "leadingComments": " CancelMarketOrderContract holds the data for a cancel market transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 33],
        "span": [359, 0, 363, 1],
        "leadingComments": " CreateMarketplaceContract holds the data for a create marketplace transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 34],
        "span": [366, 0, 371, 1],
        "leadingComments": " ConfigMarketplaceContract holds the data for a config marketplace transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 36, 2, 3],
        "span": [386, 4, 69],
        "leadingComments": "",
        "trailingComments": "1 bit 1 contract\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 37],
        "span": [391, 0, 393, 1],
        "leadingComments":
          " UpdateAccountPermissionContract holds the data for update account permission transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 38],
        "span": [396, 0, 405, 1],
        "leadingComments": " DepositContract holds the data for a deposit transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 40, 2, 2],
        "span": [422, 4, 67],
        "leadingComments":
          " SmartContract CallValue is represented by a map of currencyID and amount\n  should be limited to 50 currencies\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".proto.TransferContract": TransferContract,
    ".proto.CreateAssetContract": CreateAssetContract,
    ".proto.CreateAssetContract.EnumAssetType": CreateAssetContract_EnumAssetType,
    ".proto.CreateAssetContract.URIsEntry": CreateAssetContract_URIsEntry,
    ".proto.PropertiesInfo": PropertiesInfo,
    ".proto.AttributesInfo": AttributesInfo,
    ".proto.StakingInfo": StakingInfo,
    ".proto.StakingInfo.InterestType": StakingInfo_InterestType,
    ".proto.RolesInfo": RolesInfo,
    ".proto.RoyaltiesInfo": RoyaltiesInfo,
    ".proto.RoyaltiesInfo.SplitRoyaltiesEntry": RoyaltiesInfo_SplitRoyaltiesEntry,
    ".proto.RoyaltySplitInfo": RoyaltySplitInfo,
    ".proto.RoyaltyInfo": RoyaltyInfo,
    ".proto.KDAPoolInfo": KDAPoolInfo,
    ".proto.AssetTriggerContract": AssetTriggerContract,
    ".proto.AssetTriggerContract.EnumTriggerType": AssetTriggerContract_EnumTriggerType,
    ".proto.AssetTriggerContract.URIsEntry": AssetTriggerContract_URIsEntry,
    ".proto.ValidatorConfig": ValidatorConfig,
    ".proto.ValidatorConfig.URIsEntry": ValidatorConfig_URIsEntry,
    ".proto.CreateValidatorContract": CreateValidatorContract,
    ".proto.ValidatorConfigContract": ValidatorConfigContract,
    ".proto.FreezeContract": FreezeContract,
    ".proto.UnfreezeContract": UnfreezeContract,
    ".proto.DelegateContract": DelegateContract,
    ".proto.UndelegateContract": UndelegateContract,
    ".proto.WithdrawContract": WithdrawContract,
    ".proto.WithdrawContract.EnumWithdrawType": WithdrawContract_EnumWithdrawType,
    ".proto.ClaimContract": ClaimContract,
    ".proto.ClaimContract.EnumClaimType": ClaimContract_EnumClaimType,
    ".proto.UnjailContract": UnjailContract,
    ".proto.SetAccountNameContract": SetAccountNameContract,
    ".proto.ProposalContract": ProposalContract,
    ".proto.ProposalContract.ParametersEntry": ProposalContract_ParametersEntry,
    ".proto.VoteContract": VoteContract,
    ".proto.VoteContract.EnumVoteType": VoteContract_EnumVoteType,
    ".proto.ConfigITOContract": ConfigITOContract,
    ".proto.ConfigITOContract.EnumITOStatus": ConfigITOContract_EnumITOStatus,
    ".proto.ConfigITOContract.PackInfoEntry": ConfigITOContract_PackInfoEntry,
    ".proto.ConfigITOContract.WhitelistInfoEntry": ConfigITOContract_WhitelistInfoEntry,
    ".proto.WhitelistInfo": WhitelistInfo,
    ".proto.SetITOPricesContract": SetITOPricesContract,
    ".proto.SetITOPricesContract.PackInfoEntry": SetITOPricesContract_PackInfoEntry,
    ".proto.ITOTriggerContract": ITOTriggerContract,
    ".proto.ITOTriggerContract.EnumITOTriggerType": ITOTriggerContract_EnumITOTriggerType,
    ".proto.ITOTriggerContract.EnumITOStatus": ITOTriggerContract_EnumITOStatus,
    ".proto.ITOTriggerContract.PackInfoEntry": ITOTriggerContract_PackInfoEntry,
    ".proto.ITOTriggerContract.WhitelistInfoEntry": ITOTriggerContract_WhitelistInfoEntry,
    ".proto.PackInfo": PackInfo,
    ".proto.PackItem": PackItem,
    ".proto.BuyContract": BuyContract,
    ".proto.BuyContract.EnumBuyType": BuyContract_EnumBuyType,
    ".proto.SellContract": SellContract,
    ".proto.SellContract.EnumMarketType": SellContract_EnumMarketType,
    ".proto.CancelMarketOrderContract": CancelMarketOrderContract,
    ".proto.CreateMarketplaceContract": CreateMarketplaceContract,
    ".proto.ConfigMarketplaceContract": ConfigMarketplaceContract,
    ".proto.AccKey": AccKey,
    ".proto.AccPermission": AccPermission,
    ".proto.AccPermission.AccPermissionType": AccPermission_AccPermissionType,
    ".proto.UpdateAccountPermissionContract": UpdateAccountPermissionContract,
    ".proto.DepositContract": DepositContract,
    ".proto.DepositContract.EnumDepositType": DepositContract_EnumDepositType,
    ".proto.CallValue": CallValue,
    ".proto.SmartContract": SmartContract,
    ".proto.SmartContract.SCType": SmartContract_SCType,
    ".proto.SmartContract.CallValueEntry": SmartContract_CallValueEntry,
  },
  dependencies: [],
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
