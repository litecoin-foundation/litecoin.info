---
sidebar_position: 1
---

# Checkpoints

Checkpoints are predetermined blocks that are hardcoded into a Litecoin client, and are used to verify the blockchain's validity. 
They serve as a security feature that can protect the Litecoin network from forking.

By hardcoding checkpoints, malicious actors who control more than 50% of the hashrate will be prevented from rolling back blocks
further past the latest checkpoint. All blocks, and consequently all transactions within the blocks are considered valid and irreversible.
As the security model of Litecoin has evolved, and to reduce the power developers have in determining the best chain, new checkpoints
are no longer added to Litecoin Core.

In the past, when a new node joined the network, checkpoints were often used to skip verifying blocks up to the latest checkpoint, which allowed block download parallelisation. This speedup is no longer used by Litecoin Core since the introduction of header-first synchronisation, which allows new nodes to verify the longest chain without relying on predetermined checkpoints.

```cpp title="src/chainparams.cpp#L149" link="https://github.com/litecoin-project/litecoin/blob/master/src/chainparams.cpp#L149"
{
        {  1500, uint256S("0x841a2965955dd288cfa707a755d05a54e45f8bd476835ec9af4402a2b59a2967")},
        {  4032, uint256S("0x9ce90e427198fc0ef05e5905ce3503725b80e26afd35a987965fd7e3d9cf0846")},
        {  8064, uint256S("0xeb984353fc5190f210651f150c40b8a4bab9eeeff0b729fcb3987da694430d70")},
        //                                      [...]                                         //
        {456000, uint256S("0xbf34f71cc6366cd487930d06be22f897e34ca6a40501ac7d401be32456372004")},
        {638902, uint256S("0x15238656e8ec63d28de29a8c75fcf3a5819afc953dcd9cc45cecc53baec74f38")},
        {721000, uint256S("0x198a7b4de1df9478e2463bd99d75b714eab235a2e63e741641dc8a759a9840e5")},
    }
};
```

Some litecoin clients (such as `loafwallet-core`) require addtional block data included in the hard coded checkpoint, such as `target`, `timestamp`.
This can be easiest to find using modern block explorers such as [explorer.litecoin.net](https://explorer.litecoin.net).