---
sidebar_position: 1
---

# URI Schemes

Litecoin URI schemes simplify the flow of sending and receiving Litecoin by allowing users to click on a link or scan a QR code instead
of having to manually enter the transaction details. This URI includes the address, the amount to be sent, and often optional parameters
such as a label or message.

### BIP21

The BIP21 standard was adopted by Litecoin, but with a different URN denoting litecoin. All wallets are reccomended to adopt this standard,
for ease-of-use. Additional information can be found in the spec [BIP21 document](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki).

Standard syntax example:
```text
litecoin:<address>[?amount=<amount>][?label=<label>][?message=<message>]
```

**ABFN Grammar:**

```
litecoinurn     = "litecoin:" litecoinaddress [ "?" litecoinparams ]
litecoinaddress = *base58/bech32
litecoinparams  = litecoinparam [ "&" litecoinparams ]
litecoinparam   = [ amountparam / labelparam / messageparam / otherparam / reqparam ]
amountparam    = "amount=" *digit [ "." *digit ]
labelparam     = "label=" *qchar
messageparam   = "message=" *qchar
otherparam     = qchar *qchar [ "=" *qchar ]
reqparam       = "req-" qchar *qchar [ "=" *qchar ]
```

### BOLT11

The [BOLT11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md) standard specifies the design of a Litecoin lightning invoice. To adapt this invoice as a uri, `ltclightning:` should be used as
as the URN prefix (note: not 'ltclightning://'). This URI scheme is only followed by versions of lndltc 0.16+.

**Example:**
```
ltclightning:lnltc1m1pdtaggcpp5t2a85mvpqvmsyejs3ysa9jqfvzl3fs7tukk8kyvhn64rxumc4t4qdqcd4u47ar9wd697urp09kk2mn5cqzjqxqzuywpn6mhcu4s7fj9q3ndu09805t3q8jwllcd8p2e9plrfcehw3xyr9lpnux9jgcv64mwpvk3599qza6a32uzak2y03ttrgnrmf554ffrgpxnnrk4
```

:::info
Alternatively it may also be useful to set `ltclightning:` as an additional parameter of a BIP21 payment request. By doing this, wallets
which don't support lightning will be able to fallback to an onchain payment. 

**Example**:
```
litecoin:<address>?ltclightning:<invoice>
```
:::