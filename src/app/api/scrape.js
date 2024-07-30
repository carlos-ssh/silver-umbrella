import cheerio from 'cheerio'

export default async function scrape(req, res) {
    const { city } = req.query

    if (!city) {
        return res.status(404).json({ error: 'City is required' })
    }

    try {
        const response = await fetch(`https://www.google.com/search?q=${city}`)
    } catch {

    }


}