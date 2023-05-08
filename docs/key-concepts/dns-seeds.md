---
sidebar_position: 1
---

# DNS Seeds

DNS seeds are one of the methods used to find initial peers for Litecoin Core and SPV wallets like Litewallet. 

Mainnet:
```md title="src/chainparams.cpp" link="https://github.com/litecoin-project/litecoin/blob/0.21/src/chainparams.cpp#L126"
seed-a.litecoin.loshan.co.uk
dnsseed.thrasher.io
dnsseed.litecointools.com
dnsseed.litecoinpool.org
```

Testnet v4:
```md title="src/chainparams.cpp" link="https://github.com/litecoin-project/litecoin/blob/0.21/src/chainparams.cpp#LL238C63-L238C63"
seed-b.litecoin.loshan.co.uk
dnsseed-testnet.thrasher.io
testnet-seed.litecointools.com
```

Seeding is provided by the [litecoin-seeder](https://github.com/pooler/litecoin-seeder), which crawls for available Litecoin Nodes and exposes a list of reliable nodes via a built-in DNS server. The litecoin-seeder can also filter via services provided by a node, such as `NODE_WITNESS` (0x8) or `NODE_MWEB` (0x1000000).

Querying can be done via a nslookup. Example provided below:
```bash
$ nslookup dnsseed.thrasher.io

Non-authoritative answer:
Name:    dnsseed.thrasher.io
Address: 65.109.25.157
Name:    dnsseed.thrasher.io
Address: 52.73.103.75
Name:    dnsseed.thrasher.io
Address: 99.252.198.126
Name:    dnsseed.thrasher.io
Address: 44.225.254.244
Name:    dnsseed.thrasher.io
Address: 3.37.51.27
Name:    dnsseed.thrasher.io
Address: 80.111.142.213
Name:    dnsseed.thrasher.io
```