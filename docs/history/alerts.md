---
sidebar_position: 1
---

# Alerts

Old versions of Litecoin Core included an alert system, which allowed developers to broadcast messages to all clients.
With the release of Litecoin Core 0.13, the alerts system was completely removed. Any remaining old clients will see a
"Alert Key Compromised" message.

### Past alerts

For historical record, all known alerts are noted.

| ID   | Cancels      | Sent date           | Expires   | Protocol Versions | Client Versions                                                        | Priority | Message                                                                                                                                                       |
| ---- | ------------ | ------------------- | --------- | ----------------- | ---------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  |
| 1001 | \--          | June 25, 2013       | 1 year    | 00000-60001       | All (up to 0.6.9.1)                                                    | 100      | All users must upgrade to Litecoin 0.6.9.1 prior to August 15th, 2013. Learn more: [http://litecoin.org/upgrade](http://litecoin.org/upgrade)                 |
| 1002 | \--          | June 25, 2013       | 1 week    | 00000-60001       | only 0.6.9.1                                                           | 200      | Please edit litecoin.conf and connect to supernodes for optimal relay of transactions. Learn more: [http://litecoin.org/upgrade](http://litecoin.org/upgrade) |
| 1003 | \--          | June 25, 2013       | 1 year    | 00000-70001       | only 0.8.2.2                                                           | 200      | 0.8.2.2 contains a relay bug. Please upgrade to 0.8.2.3. Learn more: [http://litecoin.org/upgrade](http://litecoin.org/upgrade)                               |
| 1004 | \--          | June 25, 2013       | 1 week    | 00000-70001       | only 0.8.2.3                                                           | 200      | Please edit litecoin.conf and connect to supernodes for optimal relay of transactions. Learn more: [http://litecoin.org/upgrade](http://litecoin.org/upgrade) |
| 1005 | 1004 or less | June 25, 2013       | 15 minues | 00000-70001       | All                                                                    | 500      |                                                                                                                                                               |
| 1006 | 1005 or less | June 25, 2013       | 1 week    | 00000-60001       | All (up to 0.6.9.1)                                                    | 500      | Please upgrade to Litecoin 0.6.9.2. See [http://litecoin.org/upgrade](http://litecoin.org/upgrade)                                                            |
| 1007 | 1005 or less | June 25, 2013       | 1 week    | only 70001        | 0.8.2.2 and 0.8.2.3                                                    | 500      | Please upgrade to Litecoin 0.8.3.1 for a DoS fix.                                                                                                             |
| 1008 | 1007 or less | August 2, 2013      | 1 week    | 00000-60001       | All (up to 0.6.9.1)                                                    | 500      | Mandatory upgrade to Litecoin 0.8.3.7+. [https://litecoin.org/upgrade](https://litecoin.org/upgrade)                                                          |
| 1009 | 1007 or less | August 2, 2013      | 1 week    | only 70001        | All (0.8 up to 0.8.3.6)                                                | 500      | Mandatory upgrade to Litecoin 0.8.3.7+. [https://litecoin.org/upgrade](https://litecoin.org/upgrade)                                                          |
| 1010 | 1007 or less | August 7, 2013      | 1 week    | only 60002        | All (0.6.9.2 only)                                                     | 500      | Mandatory upgrade to Litecoin 0.8.3.7+. [https://litecoin.org/upgrade](https://litecoin.org/upgrade)                                                          |
| 1011 | 1010 or less | August 12, 2013     | 1 month   | Up to 70001       | All                                                                    | 500      | Mandatory upgrade to Litecoin 0.8.3.7+. [https://litecoin.org/upgrade](https://litecoin.org/upgrade)                                                          |
| 1012 | 1011 or less | October 31, 2013    | 1 year    | Up to 70001       | All                                                                    | 500      | Mandatory upgrade to Litecoin 0.8.5.1+. [https://litecoin.org/upgrade](https://litecoin.org/upgrade)                                                          |
| 1013 | 1012 or less | December 15th, 2013 | 1 year    | Up to 70001       | All                                                                    | 500      | Mandatory upgrade to Litecoin 0.8.6.1+. [https://litecoin.org/upgrade](https://litecoin.org/upgrade)                                                          |
| 1014 | 1012 or less | December 15th, 2013 | 1 month   | 70002 only        | 0.8.3.7 and 0.8.4.1 and 0.8.5.1                                        | 500      | Upgrade to Litecoin 0.8.6.1+ for lower fees. [https://litecoin.org/upgrade](https://litecoin.org/upgrade)                                                     |
| 1015 | 1014 or less | January 6th, 2015   | 1 year    | Up to 70001       | All                                                                    | 500      | Mandatory upgrade to Litecoin 0.8.7.4+. [https://litecoin.org/upgrade](https://litecoin.org/upgrade)                                                          |
| 1016 | 1014 or less | January 6th, 2015   | 1 month   | 70002 only        | 0.8.3.7, 0.8.4.1, 0.8.5.1, 0.8.6.1, 0.8.6.2, 0.8.7.1, 0.8.7.2, 0.8.7.3 | 500      | Mandatory upgrade to Litecoin 0.8.7.4+. [https://litecoin.org/upgrade](https://litecoin.org/upgrade)                                                          |
| 1017 | 1016 or less | July 4th, 2015      | 1 year    | Up to 70002       | All                                                                    | 500      | Critical upgrade to Litecoin 0.10.2.2+. [https://litecoin.org/upgrade](https://litecoin.org/upgrade)                                                          |