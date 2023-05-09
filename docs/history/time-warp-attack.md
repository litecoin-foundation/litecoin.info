---
sidebar_position: 1
---

# Time Warp Attack

The time warp attack is based on a bug in Bitcoin and Litecoin (and their forks) where the difficulty calculation is off by one block. 
This flaw that affects all coins, especially ones with low network hash rates.

An attacker can repeatedly try to generate the last block of each retarget window, and use a fabricated timestamp of two hours into
the future in order to make the time difference from the first block in the retarget window high, thus lowering the difficulty by 0.5%.
Due to the bug, the bogus timestamp isn't used as the first block in the next retarget window, and therefore the two extra hours aren't
being compensated for in the next difficulty calculation. Once the difficulty is low, the attacker can mine many fast coins, or in the
case of a small chain, an attacker with 51% hash power could reduce the difficulty to 1 and mine a new fork from the genesis block.

This attack may not be as feasible any longer because the probability of repeatedly generating the last block once every two weeks at such high difficulties may be negligible.

Additional information is available from ArtForz: https://bitcointalk.org/index.php?topic=43692.msg521772#msg521772

### Zeitgeist2 Attack

A fix in Litecoin's code has prevented one type of time warp attack, the Zeitgeist2 51% attack.
The following changes were made to Litecoin Core to prevent the Zeitgeist2 attack:

```cpp title="src/pow.cpp" link="https://github.com/litecoin-project/litecoin/commit/a66fc11fc4a7f7c0e35e127f2ae5753833a266e5#diff-4667f00c3a075be2753aa6ebdeea4bdbb66ef6e0b3d6df313a430f2eb8669ffdL41"
unsigned int GetNextWorkRequired(const CBlockIndex* pindexLast, const CBlockHeader *pblock, const Consensus::Params& params)
{
    // [...]

    // Go back by what we want to be 14 days worth of blocks
// highlight-start
-    int nHeightFirst = pindexLast->nHeight - (params.DifficultyAdjustmentInterval()-1);
-    assert(nHeightFirst >= 0);
-    const CBlockIndex* pindexFirst = pindexLast->GetAncestor(nHeightFirst);
+    // Litecoin: This fixes an issue where a 51% attack can change difficulty at will.
+    // Go back the full period unless it's the first retarget after genesis. Code courtesy of Art Forz
+    int blockstogoback = params.DifficultyAdjustmentInterval()-1;
+    if ((pindexLast->nHeight+1) != params.DifficultyAdjustmentInterval())
+        blockstogoback = params.DifficultyAdjustmentInterval();
// highlight-end

// highlight-start
+    // Go back by what we want to be 14 days worth of blocks
+    const CBlockIndex* pindexFirst = pindexLast;
+    for (int i = 0; pindexFirst && i < blockstogoback; i++)
+        pindexFirst = pindexFirst->pprev;
// highlight-end

}

unsigned int CalculateNextWorkRequired(const CBlockIndex* pindexLast, int64_t nFirstBlockTime, const Consensus::Params& params)
{
    // Retarget
// highlight-start
-    const arith_uint256 bnPowLimit = UintToArith256(params.powLimit);
// highlight-end
    arith_uint256 bnNew;
    arith_uint256 bnOld;
    bnNew.SetCompact(pindexLast->nBits);
// highlight-start
+    bnOld = bnNew;
+    // Litecoin: intermediate uint256 can overflow by 1 bit
+    const arith_uint256 bnPowLimit = UintToArith256(params.powLimit);
+    bool fShift = bnNew.bits() > bnPowLimit.bits() - 1;
+    if (fShift)
+        bnNew >>= 1;
// highlight-end
    bnNew *= nActualTimespan;
    bnNew /= params.nPowTargetTimespan;
// highlight-start
+    if (fShift)
+        bnNew <<= 1;
// highlight-end
}
```
