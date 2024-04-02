---
sidebar_position: 1
---

# Addresses & Prefixes

Users typically send coins to an encoded address, instead of directly to a public key. Usage of addresses is standard in all wallets. This has several benefits:
- Shorter address length.
- Better security: encoded addresses require more work to reverse to discover the original public key.
- Quantum resistant: SHA256 and RIPEMD are considered to be quantum resistant, unlike pk cryptography. 
- Different address types for specific features (e.g. MWEB, SegWit or Taproot)

Addresses are prefixed with a single version byte, for two reasons: 1) for human readability and 2) prefixes specific to Litecoin. Using different prefixes for Litecoin ensures users do not accidentally send their coins to a non-litecoin address, where otherwise this might lead to lockups. WIF addresses and BIP32 HD keys also include unique prefixes.

### Base58Check Prefixes

| Usage                    | Prefix (hex) | Prefix (decimal) | Example | References
| --------                 | ---------    | ---------- | ---------- |  ----------| 
| P2PKH -  pubkey hash     | `0x30`       | 48          | | https://github.com/litecoin-project/litecoin/blob/0.21/src/chainparams.cpp#L132 | 
| P2SH - script hash       | `0x32`       | 50          | | | 
| WIF - private key        | `0xB0`       | 176          | | | 
| BIP32 pubkey             | `0x0488B2E4` | xpub          | | | 
| BIP32 privkey            | `0x0488ADE4` | xpriv          | | | 
| Test P2PKH - pubkey hash | `0x6F`       | 111          | | https://github.com/litecoin-project/litecoin/blob/0.21/src/chainparams.cpp#L132 | 
| Test P2SH - script hash  | `0x3A`       | 58          | | | 
| Test WIF - private key   | `0xEF`       | 239          | | | 
| Test BIP32 pubkey        | `0x043587CF` | tpub          | | | 
| Test BIP32 privkey       | `0x04358394` | tprv          | | | 

### Bech32 Prefixes

Bech32 addresses do not have a version byte prefix, instead they use a human readable part (hrp). 

| Usage          | hrp         |
| --------       | ---------   |
| SegWit         | `ltc1`      | 
| MWEB           | `ltc1mweb`  | 
| Testnet Segwit | `tltc1`     | 
| Testnet MWEB   | `tltc1mweb` | 

:::caution
**NOTICE:** 
older versions of Litecoin Core 0.15 and below did not have a unique prefix for P2SH addresses, as such they share the same prefixes as Bitcoin. For compatibility, later releases of Litecoin Core continue to include support for legacy prefixes, however wallet developers are advised not to continue using the legacy prefixes. 
:::

### SLIP32

:::info
**NOTICE:** officially Litecoin uses the same BIP32 prefixes as Bitcoin - this was intended by the Litecoin developers for generating addresses for multiple cryptocurrencies from a single master key - however SatoshiLabs have created their own standard known as [SLIP132](https://github.com/satoshilabs/slips/blob/master/slip-0132.md). This has been implemented by certain Litecoin wallets. Wallet developers are free to use either prefixes.
:::

| Litecoin Mainnet | 0x019da462 - Ltub | 0x019d9cfe - Ltpv | P2PKH or P2SH  |
| ---------------- | ----------------- | ----------------- | -------------- |
| Litecoin Mainnet | 0x01b26ef6 - Mtub | 0x01b26792 - Mtpv | P2WPKH in P2SH |
| Litecoin Testnet | 0x0436f6e1 - ttub | 0x0436ef7d - ttpv | P2PKH or P2SH  |
