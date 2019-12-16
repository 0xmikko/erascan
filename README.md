# erascan
### Erasure protocol explorer for fast development

Erascan is an open source tool for fast development using erasure protocol (. It combines explorer & faucet.

Official site: https://erascan.info

Video presentation: 

### Inspiration

Erasure protocol provides a bundle of interesting technologies which helps developers for creating interesting solutions.
However, it's difficult to use smart contracts without toolset.  



### Solution
Erascan is a tool which combines three major areas:

#### Track-Record
Track-Record is about proving historical quality. It's the public track record of the past. Prospective counterparties can evaluate the credibility of your claims and decide if they trust you by looking at your history. It’s your personal brand, it’s your credit score, it’s your Twitter feed. This is where blockchains shine. It only makes sense for this track record to be permanent and immutable.

With Erascan your could check latest feeds, explore them and use search by feed id, creator / operator hashes.
You could also create Feed and add hashes manually using the tool.

####Recourse
Recourse is the final piece of the puzzle. It’s the court system that performs arbitration over breach of contract. It’s the Uber rating system. It’s a coordination mechanism fundamentally hardwired in each of us. It’s also something that can be programmed in a smart contract. This is where Erasure shines.
 
#### Faucet
With faucet you could get NMR tokens for testing your application. Currently, you could get 10 NMR each 24 hours.


### Components & stack

Client: React, web3.js, Graph (https://thegraph.com), GraphQL

Backend: Golang, go-cache, go-ethereum, gin-gonic
