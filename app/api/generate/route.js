import clientPromise from '@/lib/mongodb'

export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")


    // const doc = await collection.findOneAndUpdate(
    //     { shorturl:body.shorturl },
    //     { $inc: { visits: 1 } }  //  Increment visit count
    // );

    // check if the shorturl exists
    const doc2 = await collection.findOne({ shorturl: body.shorturl })
    if (doc2) {
        return Response.json({ success: false, error: true, message: 'URL already exists' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

    return Response.json({ success: true, error: false, message: 'URL generated' })
}