---
id: opengov
sidebar_label: Polkadot OpenGov
sidebar_position: 1
slug: /dao/opengov
---

# Polkadot OpenGov Participation
  
Engaging in Polkadot OpenGov is one of the key functions of the DAO.  Concerning this function, we have drafted this section and the *Code of Conduct*.  

On March 27, 2025, the Web3 Foundation selected the JAM Implementers DAO to be a part of Decentralized Voices Cohort 4 (April - Aug 2025) -- see [official announcement](https://medium.com/web3foundation/decentralized-voices-cohort-4-delegates-announced-a5a9c64927fd).   Voting members are now engaged in a newly Discord room for this function.

* JAM Implementer DAO Address: `13NCLd3foNpsv1huPDzvvfyKh37NEEkGFotZnP52CTR98YFJ`
* [DAO Voting Record](https://polkadot.subsquare.io/user/13NCLd3foNpsv1huPDzvvfyKh37NEEkGFotZnP52CTR98YFJ/votes)


###  Voting on Discord

In April 2025, a public Discord server was set up to execute on "1 JAM Team, 1 vote" mechanics, implemented with the following [OpenGov bot](https://github.com/JamBrains/opengov-bot), forked from ChaosDAO bot.

New member can reach out to one of the existing members in the [Public JAM Chat room](https://matrix.to/#/#jam:polkadot.io) and get set up:
* The team lead are tagged `dao-team-representative` to submit votes and comment on OpenGov refs on behalf of your team
* The other members of the team are tagged `dao-participant` to view OpenGov refs and comments from all teams.

Non-voting JAM Implementer teams are welcome to join the Discord server without voting, and will be assigned a `jam-implementer` tag.


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

All internal referenda are voted on within the JAM DAO Discord by team representatives,  ensuring full transparency of members' votes and feedback on each referendum.  

A basic explanation of the DAO's voting process and timeline is as follows:

* A new relay chain referendum is created.
* The bot fetches the referendum details and creates a matching internal referendum in a Discord.
* The bot creates a discussion topic 
* Members discuss the referendum details. For some referenda, we also reach out to proposers for a call.
* Members submit their votes on the internal referendum alongside their feedback.
* The bot submits an on-chain vote on day 7 (first vote) and day 20 (second vote, if changed),  the final day (if changed), and during confirmation (again, if changed).
* [planned] The bot collects all member feedback and generates a summary of comments using a ChatGPT (or similar) API, submitted to Subsquare or Polkassembly.

#### Voting Policy

The DAO utilizes a fully transparent voting bot.   Two key parameters encourages high participation and in-depth internal discussion before any vote is cast:

* MIN_PARTICIPATION: 45% -- the number members required to vote before a AYE or NAY vote can be cast.
* Voting Threshold: 51%  -- The percentage of AYE (or NAY) votes relative to the total number of votes cast to vote AYE (or NAY).

If neither the MIN_PARTICIPATION nor Voting Threshold is met, the resulting vote is _abstain_.

Members _may_ be removed due to lack of voting behavior in order to meet MIN_PARTICIPATION objectives.

### Conflict of Interest

Any member with a direct or indirect connection to a proposal must abstain from voting on the related referendum.

### Delegations

Members may delegate to the DAO freely or choose not to delegate anything at all.  

### Reimbursements / Disbursements

Any monetary compensation for participation _may_ or _may not_ be used to reimburse participants for DOT fees or their time, in a manner voted by DAO members.  
