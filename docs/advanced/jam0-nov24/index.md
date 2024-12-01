---
id: JAM0
sidebar_label: JAM0 Nov 2024
sidebar_position: 5
slug: /event/jam0-nov204
---

JAM0 brought together 13 teams and 35+ people in Bangkok in November 2024, coincident with sub0/Devcon 7.  [Forum post](https://forum.polkadot.network/t/jam0-jam-implementers-meetup-sub0-devcon-7-bangkok-nov-11-nov-16-2024/10866)

# Baby pre-M1 Steps

We reviewed a list of steps that JAM teams can use to have pre-M1 goals.

We discussed this topic among different implementors on Monday 12th, Nov 2024. Some items on this list are not needed for M1 directly, but could help on the path to further milestones.

There are not enough teams who have processed work packages yet, so the consensus is that focussing on just the first two (fallback+safrole) is best, since it unlocks state root comparison issues on a tiny number of leaves (15-17).

Following Gavin's advice from Saturday, having a fuzz test of valid/invalid blocks that can be sent into a single node can be planned, with a jamtest with cli flags for mode and an endpoint for basic fuzz testing.

This would POST a set of JAM-codec encoded blocks "jam_importblock" to the endpoint with HTTP alone. Setting C14/C15 aside, teams can have their implemented pass this fuzz test without JAMNP, erasure coding, PVM  implementation.

## M0.0 Import Block (Safrole fallback)

The most basic JAM client functionality would be import empty blocks without SAFROLE tickets (|E_T| = 0). Must be able to handle epoch changes.

## M0.1 Import Block (Safrole proper)

Same as `M0.0` but with SAFROLE tickets (|E_T| > 0).

## M0.2 Author Block (Safrole fallback)

(Can be skipped if you only aim for M1)

This step requires a node to be able to produce a list of valid blocks from a genesis state. The correctness of this can be checked by trying to import it with all M0.0 clients. The blocks don't need to include any tickets (|E_T| = 0)

## M0.3 Author Block (Safrole proper)

(Can be skipped if you only aim for M1)

Same as M0.2 but must provide tickets for the authoring validator node (|E_T| > 0).

## vvv Big Jump vvv

The jump here is big since it means having to implement Guarantees, Assurances and all of the PVM accumulation logic. It could possibly be filled by conformance tests for sub-components.

## M0.4 Import Block (happy case)

Same as M0.1 but with Guarantees, Assurances and Work Packages (|E_G| > 0, |E_A| > 0, |E_P| > 0).

## M0.5 Import Block (with disputes)

Same as M0.4 but must also be able to handle disputes (|E_D| > 0).

## Other topics

* M2 Author.  Here we bring in authoring with JAMNP. There is consensus that focussing on just UP 0 and CE 128 is best. A starting point can to POST some bytes and expect some bytes back with HTTP alone, which is sufficient for most JAMNP CEs in addition to 0+128. The endpoint should be full QUIC however. The same jamtest binary can be used to support a specific set of UP 0 + CE tests given certain cli inputs.

* CLI Flags.  We can develop a writeup for a cli flags covering both M1+M2 for jamtest on Friday and get into precise RPC nitty gritty. For both M1+M2, it appears easier for teams to work with the above jamtest model than docker-compose, and in particular, the above supports teams working with interpreted languages (eg Typescript) without complex obfuscation. In addition, it may be able to cover V=1023 setting in a way that docker-compose cannot realistically do, which makes it possible to plug into JAM Toaster more easily, and skip any non-GP-conformance issues.

* Other tooling.  Tooling is valuable but only a few teams are engaged in tools so probably a bounty is overkill. Emiel guided us through https://fluffylabs.dev/ work who has developed many useful things beyond the beloved GP Reader. Of particular note is https://trie.fluffylabs.dev/ which is directly related to the above. Importing a trie snapshot to support M1 Import Blocks makes sense for this tool -- This would enable teams to quickly diagnose state roots differences with jamtest (or find problems with the tool itself). This concept deserves some followthrough with fluffylabs (not present here this week).

* JAM Collective.  A JAM collective may be worth building, but there are not enough tool builders to justify it at this time, at least among the participants in the session. Basically teams have a lot of progress to make on their implementations (being able to process work packages) before implementing JAM Services. Perhaps in the next JAM0 session in early 2025 or with a larger number of JAM implementers we could reach a different conclusion.

* Telemetry dashboard.  An W3F RFP or OpenGov proposal for a design matching Shawn T's "Polkadot Cloud" concepts appears to be highly worthwhile for UI/UX teams like Subsquare+fluffylabs+Mimir. We should be able to use standard open source tools like Grafana, Prometheus in parallel and instrument JAM Toaster node explorer.   The format for nodes to be instrumented at the level of detail of E_T, E_G, E_A, E_P, E_D and the key JAM State variables in C1-C15 deserves deep dive follow up discussion.

* Chain specs + JAMNP Simplifications.  We discussed how to revise chain specs and JAM NP Simplifications.

* Next meetings.  A conference call in Jan would be highly desirable, where Gossamer suggested they can lead it.  A follow on in-person meeting in late winter / early spring would be natural, ideally in Lisbon coincident with a similar event.
