import { certificates } from "./certificates";

const icpcData = [
    {
        id: 1,
        year: "2023",
        contest: "The 2023 ICPC Asia Dhaka Regional Contest",
        rank: "99th",
        team: "VU_Strangers",
        date: "November 04, 2023",
        location: "Bangladesh University of Business and Technology, Dhaka",
        problemsSolved: "3",
        certificate: [certificates.ICPC_onste_me, certificates.ICPC_onste_team],
        images: [
            "/events/icpc-2024-team.jpg",
            "/events/icpc-2024-contest.jpg",
            "/events/icpc-2024-venue.jpg"
        ],
        achievements: [
            "Ranked in top 100",
            "Best performance in university"
        ],
        description: "Competed in the ICPC Asia Dhaka Regional contest representing our university. Solved challenging algorithmic problems under time pressure."
    },
    {
        id: 2,
        year: "2023",
        contest: "The 2023 ICPC Asia Dhaka Regional Site Online Preliminary Contest",
        rank: "99th",
        team: "VU_Strangers",
        date: "September 30, 2023",
        location: "Online",
        problemsSolved: "5/10",
        certificate: [certificates.ICPC_preli_me, certificates.ICPC_preli_team],
        images: [
            "/events/icpc-2023-team.jpg"
        ],
        achievements: [
            "Qualified for regionals",
            "Solved 6 problems",
            "Top 50 nationally"
        ],
        description: "Successfully qualified for the regional contest through the preliminary round with strong team coordination."
    }
];


export default icpcData;