export default async function handler(req, res) {
    const method = req.method

    if (method !== "GET") {
        const incidents = [
            {
                latitude: 51.57558514280973,
                longitude: 4.744146220571828,
                title: "Albert Heijn tasje",
                image: "https://www.uts-bags.nl/wp-content/uploads/2017/06/Opvouwtas-Albert-Heijn.png",
                dateReported: "2021-05-01T00:00:00.000Z",
            }
        ]

        res.status(200).json(incidents)
    }
    else if (method === 'POST') {

    }
}