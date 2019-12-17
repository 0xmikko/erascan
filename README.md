# erascan
### Erasure protocol explorer and playground

Erascan is an open source tool for fast development using erasure protocol (. It combines explorer & faucet.

Official site: https://erascan.info

Video presentation: https://youtu.be/MMRTkGeBBoI

### Inspiration

Erasure is a smart contract protocol that brings simple web3 primitives to any website on the internet. The initial primitives available on Erasure are Recourse, Track-Record, and Payments. These primitives could help customers to create interesting business logic.

However, blockchain solutions usually has a barrier to implementation. They requieres specific plugins (like Metamask) to be installed on client side, their libraries are heavy weighted, etc. As result it's usually difficult and expersive to integrate them with existing services.

### Solution
Erascan is created as supplimentary tool (like Etherscan) to help developers for development. It speeds up development, provide comprehesive tools for testing logic and could be use partly as third party service to show list of proofs, creating feed etc.

The last statement is exptremly significant, cause many IT businesses use lean product metodology and Erascan could drastically reduce costs for hypothesis testing.

Erascan has three main areas:

#### Track-Record
Track-Record is about proving historical quality. It's the public track record of the past. Prospective counterparties can evaluate the credibility of your claims and decide if they trust you by looking at your history. It’s your personal brand, it’s your credit score, it’s your Twitter feed. This is where blockchains shine. It only makes sense for this track record to be permanent and immutable.

With Erascan your could check latest feeds, explore them and use search by feed id, creator / operator hashes.
You could also create Feed and add hashes manually using the tool.

#### Recourse
Recourse is the final piece of the puzzle. It’s the court system that performs arbitration over breach of contract. It’s the Uber rating system. It’s a coordination mechanism fundamentally hardwired in each of us. It’s also something that can be programmed in a smart contract. This is where Erasure shines.
 
#### Faucet
With faucet you could get NMR tokens for testing your application. Currently, you could get 10 NMR each 24 hours.


### Components & stack

Client: React, web3.js, Graph (https://thegraph.com), GraphQL

Backend: Golang, go-cache, go-ethereum, gin-gonic
