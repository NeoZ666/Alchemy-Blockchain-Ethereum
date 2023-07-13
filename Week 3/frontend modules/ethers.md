Advantages of ethers.js
Ethers can do everything that web3.js can when it comes to interacting with the blockchain. In addition to that, it has a few more perks:

A Broader License
Ethers is available under the MIT License which not only allows developers to use it for free, but also allows modifications to it.

The latter is also allowed under the LGPL-3.0 license that web3 uses but it also forces you to release the source code containing the modifications.

Smaller Size
Ethers is an extremely lightweight library. It's only 77 KB compressed and 284 KB uncompressed.

ENS Compatible
Ethers knows how to parse ENS domain names by default. Therefore, you can replace a hexadecimal address with a .eth domain without any extra boilerplate code.

A Large Number of Test Cases
Ethers is extraordinarily well-tested, with close to 10,000 test cases; a significant chunk being written by Richard Moore himself. Ethers was a pioneer with respect to maintaining a well-tested Ethereum library (web3 has since managed to catch up to an extent).

Drawbacks of ethers.js
Ethers is a relatively new library. Hence, it is hard to find it in use in older, more foundational projects and companies. If you work or are planning to work in such a company, it may be worthwhile to spend more time learning web3.

When to Use ethers.js
Ethers is a fantastic library to use if you're building a new project. At the time of writing, the popularity (in terms of weekly downloads, beginner tutorials, and community support) has either surpassed or quickly catching up to that of web3.

Given the small size of the library, it is especially lucrative on the frontend as it can improve the performance of your website/app significantly.

Important ethers.js Class Abstractions
These are the core class abstractions that you will need to use to write scripts that interact with the Ethereum computer. These are also the base abstractions that the Alchemy SDK uses 1-to-1.

Provider: Represents any connection to an Ethereum node
Wallet: EOA (private key holder) with ability to sign and send messages to network
Contract: Represents a smart contract executable deployed on the network
Conclusion
Front-end libraries like ethers.js and software development kits like the Alchemy SDK make our life as developers extremely easy. Can you imagine what a pain it would be to be coding out all of our scripts in raw JSON-RPC?

So, web3 developers use front-end libraries that work to abstract the lower-level away from them so that they can focus on streamlined development. This is the flow typical of web3 dApps:

flow

Your dApp uses some front-end library which uses JSON-RPC under the hood to communicate with an Ethereum node (which is essentially, communicating with the entire Ethereum network).
