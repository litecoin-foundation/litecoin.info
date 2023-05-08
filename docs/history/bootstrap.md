---
sidebar_position: 1
---

# Initial Sync

### Configuration

To speed up the initial sync, users can increase the dbcache by inserting:
```md title="litecoin.conf"
dbcache=1000 # replace '1000' with available RAM in MB 
```

From Litecoin v0.8.5.2+, SSE2 PoW validation can make import even faster on a system with SSD drives. 

### Bootstrap.dat

In older clients, the initial sync was very slow. To rapidly import blocks, users could import block data from a `bootstrap.dat` file.
This file would be placed in the Litecoin data directory, and would be automatically detected by Litecoin Core upon startup.

:::caution
**NOTICE:** Although it is still possible to use a bootstrap.dat file using `-loadblock`, it is no longer advised. With the release of Litecoin Core v0.10, a new block header first sync method is used. As the whole chain is now known to the client in advance, blocks can be downloaded in parallel from multiple peers.
:::