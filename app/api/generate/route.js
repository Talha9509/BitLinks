import clientPromise from '@/lib/mongodb'

export async function POST(request) {
    try {
        const body = await request.json()
        console.log("BODY:", body);

        const client = await clientPromise;
        const db = client.db("bitlinks")
        const collection = db.collection("url")

        console.log("MONGO_URI:", process.env.MONGODB_URI);

        const { url, shorturl } = body;

        if (!url || !shorturl) {
            return Response.json({ success: false, error: true, message: 'URL or shorturl missing' }, { status: 400 })
        }

        // check if the shorturl exists
        const existing = await collection.findOne({ shorturl })
        if (existing) {
            return Response.json({ success: false, error: true, message: 'URL already exists' })
        }

        const result = await collection.insertOne({
            url,shorturl
        })

        return Response.json({ success: true, error: false, message: 'URL generated' })
    }  catch (err) {
    console.error("API ERROR:", err)
    return Response.json({ success: false, error: true, message: 'Internal Server Error' }, { status: 500 })
  }
}