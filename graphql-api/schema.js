const { gql } = require("apollo-server");
module.exports = gql`
  type Query {
    profile(username: String): Profile
    holding(PublicKeyBase58Check: String): Holding
    transactions(PublicKeyBase58Check: String): AutogeneratedMainType
    bitCloutExchange: BitCloutExchange
  }
  type BitCloutExchange {
    USDRate: Float
  }
  type Profile {
    ProfilesFound: [ProfilesFound]
  }
  type Holding {
    user: ProfileEntryResponse
    BalanceBitClout: Float
    holdings: [UsersYouHodl]
  }

  type CoinEntry {
    CreatorBasisPoints: Float
    BitCloutLockedNanos: Float
    NumberOfHolders: Int
    CoinsInCirculationNanos: Float
    CoinsInCirculationBitClout: Float
    CoinPriceUSD: Float
    CoinWatermarkNanos: Float
    BitCloutLocked: Float
  }

  type ProfileEntryResponse {
    PublicKeyBase58Check: String
    Username: String
    Description: String
    ProfilePic: String
    IsHidden: Boolean
    IsReserved: Boolean
    IsVerified: Boolean
    CoinPriceBitCloutNanos: Float
    StakeMultipleBasisPoints: Int
    UsersThatHODL: String
    CoinEntry: CoinEntry
  }

  type ProfilesFound {
    PublicKeyBase58Check: String
    Username: String
    Description: String
    ProfilePic: String
    IsHidden: Boolean
    IsReserved: Boolean
    IsVerified: Boolean
    Comments: String
    CoinPriceBitCloutNanos: Float
    StakeMultipleBasisPoints: Int
    UsersThatHODL: [String]
    CoinEntry: CoinEntry
    CoinPriceBitClout: Float
  }

  type UsersWhoHodlYou {
    HODLerPublicKeyBase58Check: String
    CreatorPublicKeyBase58Check: String
    BalanceNanos: Float
    NetBalanceInMempool: Float
    ProfileEntryResponse: ProfileEntryResponse
  }

  type UsersYouHodl {
    HODLerPublicKeyBase58Check: String
    CreatorPublicKeyBase58Check: String
    BalanceNanos: Float
    BalanceBitClout: Float
    BalanceUSD: Float
    NetBalanceInMempool: Float
    ProfileEntryResponse: ProfileEntryResponse
    USDValuePrice: Float
  }

  type UserList {
    PublicKeyBase58Check: String
    Utxos: String
    BalanceNanos: Float
    UnminedBalanceNanos: Float
    SeedInfo: String
    HasPhoneNumber: Boolean
    CanCreateProfile: Boolean
    IsAdmin: Boolean
    UsersWhoHODLYou: [UsersWhoHodlYou]
    UsersYouHODL: [UsersYouHodl]
    PublicKeysBase58CheckFollowedByUser: [String]
    ProfileEntryResponse: ProfileEntryResponse
  }
  type BasicTransferTxindexMetadata {
    TotalInputNanos: Int
    TotalOutputNanos: Int
    FeeNanos: Int
    UtxoOpsDump: String
  }

  type AffectedPublicKeys {
    PublicKeyBase58Check: String
    Metadata: String
  }

  type TransactionMetadata {
    BlockHashHex: String
    TxnIndexInBlock: Int
    TxnType: String
    TransactorPublicKeyBase58Check: String
    BitcoinExchangeTxindexMetadata: String
    CreatorCoinTxindexMetadata: String
    CreatorCoinTransferTxindexMetadata: String
    UpdateProfileTxindexMetadata: String
    SubmitPostTxindexMetadata: String
    LikeTxindexMetadata: String
    FollowTxindexMetadata: String
    PrivateMessageTxindexMetadata: String
    SwapIdentityTxindexMetadata: String
    BasicTransferTxindexMetadata: BasicTransferTxindexMetadata
    AffectedPublicKeys: [AffectedPublicKeys]
  }

  type Outputs {
    PublicKeyBase58Check: String
    AmountNanos: Int
  }

  type Inputs {
    TransactionIDBase58Check: String
    Index: Int
  }

  type Transactions {
    TransactionIDBase58Check: String
    RawTransactionHex: String
    SignatureHex: String
    TransactionType: String
    BlockHashHex: String
    TransactionMetadata: TransactionMetadata
    Outputs: [Outputs]
    Inputs: [Inputs]
  }

  type AutogeneratedMainType {
    Error: String
    BalanceNanos: Int
    Transactions: [Transactions]
  }
`;