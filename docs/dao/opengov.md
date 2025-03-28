---
id: opengov
sidebar_label: Polkadot OpenGov
sidebar_position: 3
slug: /dao/opengov
---

# Polkadot OpenGov Participation
  
_Note: This is only be taken as a draft and *NOT* considered final._

Engaging in Polkadot OpenGov is one of the key functions of the DAO.  Concerning this function, we have drafted this section and the *Code of Conduct*.  This draft is heavily based on that of the [Permanence DAO](https://docs.permanence.io/), which are considered exemplary.  


On March 27, 2025, the Web3 Foundation selected the JAM Implementers DAO to be a part of Decentralized Voices Cohort 4 (April - Aug 2025) -- see [official announcement](https://medium.com/web3foundation/decentralized-voices-cohort-4-delegates-announced-a5a9c64927fd).   This was based on an [Decentralized Voices Cohort 4: JAM Implementers DAO](https://forum.polkadot.network/t/decentralized-voices-cohort-4-jam-implementers-dao/12001) application post where a quorum of JAM Implementers expressed interest after an March online meetup.   

###  Voting on Telegram/Discord

As of late March/early April 2025, a private Telegram room (utilizing the [Permanence DAO bot](https://github.com/permanence-dao/permanence-dao-services/tree/main/pdao-telegram-bot)) and Discord room (utilizing a similar Discord bot) with members is being set up 
to execute on "1 member, 1 vote" mechanics.  It is possible one or both could be used.

The DAO may switch between Telegram and Discord, based on the objective of maximizing quality participation by all members in Polkadot OpenGov.

If you are a newly joining member and are not in the private Telegram/Discord room, reach out to one of the existing members who can be found in the public [JAM Testnet Telegram room](https://t.me/jamtestnet) or [Public JAM Chat room](https://matrix.to/#/#jam:polkadot.io).

### Voting Philosophy

At JAM Implementers DAO, every treasury proposal is assessed on a case-by-case basis. We harness the collective expertise, diverse backgrounds, and unique perspectives of our members to ensure each proposal is evaluated with fairness and rigor.

Every member enjoys equal voting power and complete autonomy in governance decisions, guided by the following values:

* Integrity: We uphold our principles with unwavering commitment, fostering reliability and trust.
* Transparency: We build accountability and trust through open decision-making, clear direction, and responsible resource management.
* Neutrality: We are impartial in our evaluations, prioritizing Polkadot + JAM's long-term interests over the short-term.
* Merit: We value proven competence, supporting teams and individuals with a demonstrated track record of excellence.
* Sustainability: We recognize and nurture the inherent value of the Polkadot+JAM network, dedicating ourselves to its enduring success.
* Impactfulness: We seek to cultivate a vibrant environment where innovation in technology can bring about real-world impact.
* Openness: We embrace flexibility and continuous learning, welcoming constructive criticism and the spirit of experimentation.

### Voting Mechanics 

All internal referenda will be recorded in the [OpenSquare Space](https://voting.opensquare.io/space/jamdao) 🚧, ensuring full transparency of members' votes and feedback on each referendum, openly accessible through the OpenSquare API for historical analysis.

A basic explanation of the DAO's voting process and timeline is as follows: (adapting from [Operational Details](https://docs.permanence.io/voting_policy.html#operation-details))

* A new relay chain referendum is created.
* The bot fetches the referendum details and creates a matching internal referendum in our OpenSquare space.
* The bot creates a discussion topic in our Telegram group.
* Members discuss the referendum details. For some referenda, we also reach out to proposers for a call.
* Members submit their signed votes on the internal referendum alongside their feedback.
* A voting admin triggers the bot to submit the on-chain vote.
* The bot evaluates the outcome of the referendum against the voting policy for the specific track.
* The bot submits the on-chain vote accordingly.
* The bot collects all member feedback and generates a summary using the OpenAI API.
* The bot submits the final outcome and collective feedback through the Subsquare API.

#### Per-Track Voting Policy

The DAO utilizes a per-track voting policy.  Our voting system is defined by two key parameters, encouraging high participation and in-depth internal discussion before any vote is cast:

* Quorum: The quorum is required from members to issue a vote depending on track.
* Majority: The percentage of AYE votes relative to the total number of votes cast.

Based on these parameters, our voting policy is defined for various OpenGov tracks for 2025 as follows:

Track	        | Quorum (≥) | Majority (>) |
----------------| -- | -------------------|
Small Tipper	| 3	 | 	50% |
Big Tipper	    | 4	 |	50% |
Small Spender	| 5	 |	50% |
Medium Spender	| 6  |	50%	|
Wish for Change	| 6  |  50%	|
Big Spender     | 7  | 	60%	|
Treasurer	    | 8  | 60%	|
All Other Tracks | 6  | 50%	|

If no quorum is met, the vote is _abstain_.

Note: The above is a draft only.  Revisions to the above are strongly suggested as membership increases. 

### Conflict of Interest

Any member with a direct or indirect connection to a proposal must abstain from voting on the related referendum.

### Delegations

Members may delegate to the DAO freely or choose not to delegate anything at all.  

### Reimbursements / Disbursements

Any monetary compensation for participation _may_ or _may not_ be used to reimburse participants for DOT fees or their time, in a manner voted by DAO members.  
