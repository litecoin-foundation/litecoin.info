---
sidebar_position: 1
---

# Magic Numbers

Magic numbers appear at the start of all Litecoin network messages. For example the first 4 bytes of a Litecoin block include a Litecoin-specific magic number.

| Network | Magic Number | Source                                                                          |
| ------- | ------------ | ------------------------------------------------------------------------------- |
| Mainnet | 0xfbc0b6db   | https://github.com/litecoin-project/litecoin/blob/0.21/src/chainparams.cpp#L107 |
| Testnet | 0xfdd2c8f1   | https://github.com/litecoin-project/litecoin/blob/0.21/src/chainparams.cpp#L221 |