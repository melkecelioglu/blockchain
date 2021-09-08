# blockchain



White walkers stalking you in the night? Death eaters knocking down your door?

Well, sounds like you’re looking to build a blockchain and cryptocurrency! Having your own blockchain and cryptocurrency is the number one way to get rid of threats both magical and technical!

Ok, maybe the magic part was a tiny bit exaggerated. But the technical part, not so much! The blockchain has become a magic bullet in the software world throughout the past few years. It’s proven that it has the power to revolutionize economic systems and so much more. It seems to have the power to save us all. But the blockchain wave has only begun! There is so much untapped potential in the field for high-paying employment, and new exciting companies. But it all starts with building a blockchain and cryptocurrency? How are you going to do that? Take a look at this!



----━━━━━━━━━━━━


‼️ UPGRADE


Implemented the proof of work system by adding a difficulty and nonce value to each block.

Adjusted the difficulty for a block to ensure that blocks are mined at a rate which approaches a set mining rate for the system.

Investigated the proof of work system by writing a script which checked how will the dynamic difficulty adjusted the system to approach the mine rate.

Switched the hexadecimal character-based difficulty criteria to a more fine-grained binary bit-based difficulty criteria.

Prevented a potential difficulty jump attack by adding extra validation for the blockchain.


NEXT - API AND NETWORK! 🦾

‼️ UPGRADE


Here’s what have been done in three days;

Set up an express API to allow for interaction to the backend through HTTP requests.

Created a GET request to read the blockchain.

Added a POST request to write new blocks to the blockchain.

Implemented a real-time messaging network through Redis or PubNub.

Added the ability to broadcast chains.

Started peers through alternate ports, and broadcasted chains when blocks were mined through the api.

Synchronized chains when new peers connected to the network.

Optimized the implementation to avoid redundant interaction.

NEXT - WALLETS, KEYS AND TRANSACTIONS! 🦾 

(i probably have to rest for a few days because of I will have a lot thing to do for family see u soon! )


September the 1st, ‼️UPDATE

The overall project is getting pretty advanced! A whole backend blockchain, and now a bunch of initial objects for a cryptocurrency. Plus, everything is validated by tests. Pretty cool!



Completing this section is an achievement to be proud of myself. Here’s what i built:

-- Created the core wallet class for the cryptocurrency.

-- Developed the cryptographic key pair and public key addressing system.

-- Implementing signature generation and verification to make transactions official.

-- Built the main transaction class - with the output map and input structure.

-- Developed functionality to actually validate transactions.

-- Tied transaction creation with the wallet class.

-- Allowed transactions to be updated with multiple outputs to efficiently use existing objects.

-- Improved the hash function to recognize objects with new properties as changes in incoming data.

-- Covered edges cases with transaction updates to prevent vulnerabilities.



NEXT- TRANSACTION POOL! 🦾

‼️ UPGRADE

Here’s a recap of what I accomplished in this section:

Created the core transaction pool with an ability to set transactions.

Handled transaction through the API, and added API-generated transactions to the pool.

Made sure invalid transactions did not go to the pool.

Handled updates to transactions through the API.

Exposed a new API method to read the transaction pool data.

Broadcasted transactions as they occurred through the API.

Synced the transaction pool map as a network-dependent object like the blockchain.


NEXT- MINE TRANSACTIONS! 🦾

‼️ UPGRADE 

In this section, I covered a lot of important ground:

Created the core transaction miner class to capture how miners should add transactions to the blockchain.

Added the ability to grab valid transactions from the transaction pool.

Added a way to clear blockchain transactions to ensure that only unique transaction objects could be recorded.

Added a mining transactions endpoint to enable transaction mining through the API.

Cleared recorded transactions on a successful replacement of the blockchain.

Calculated the wallet balance based on the blockchain history.

Applied these wallet balances whenever conducting a new transaction.

Exposed the wallet information including the public key and balance through the API.

Validated transaction data incoming into the blockchain.

Validated incoming transaction input balances.

Prevented duplicate transactions from appearing in a block’s data.

Validated the entire transaction itself when accepting new user-contributed blockchains.



It was quite a lengthy section. Progress in the course has taken a giant leap!

NEXT- THE FRONTEND! 🦾

‼️ UPGRADE 

In this section, I got a lot of key things done:

Started serving a frontend page using the existing express server.

Added JavaScript to the frontend.

Built React into the frontend using parcel-bundler.

Set up an efficient development workflow using parcel.

Created the core App component to house the main React components.

Used the fetch API to request backend data and serve it on the frontend.

Visualized the blocks from the backend.

Stylized the application to make it not look like a barebones skeleton HTML site.

Created a block component that inherited data from the core Blocks component through props.


meanwhile in this sectioın I got several error such as:

<img width="1077" alt="Screen Shot 2021-09-08 at 11 57 39" src="https://user-images.githubusercontent.com/67334822/132479251-f8617668-6e5c-4911-a4cb-380e3ccb411b.png">

NEXT- THE FRONTEND OVERVIEW- EXTRAS 🦾

‼️ UPGRADE 
Hooray! The frontend cryptocurrency is complete!



With that, I now have a completely viable full-stack blockchain and cryptocurrency project! Awesome! This section added a ton of new features. I:

Created toggle-able transaction displays.

Built a reusable frontend transaction component.

Added routing for a multi-page application that renders different content based on the url.

Supported the conducting of transactions through a form.

Posted transactions through the fetch API.

Visualized the transaction pool - and added real-time polling capabilities.

Added a way to mine a block through the frontend.


I 've nearly done with the project!

NEXT- DEPLOYING TO PRODUCTION AND FULL STACK IMPROVEMENTS + EXTRAS 🦾

‼️ LAST UPGRADE 

Finishing last section was quite the accomplishment. In this section I:

Deployed the project to production.

Added a known addresses feature with both the backend and frontend.

Supported a paginated exploration of the blocks with both the backend and frontend.

And Final.. 🥳🤩🙌🏻 Awesome, freakin' happy to complete the project and ready for lift off for the next ones 🤩


