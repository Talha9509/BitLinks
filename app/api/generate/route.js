import clientPromise from '@/lib/mongodb'

export async function POST(request) {
  try {
    console.log("🔥 API Hit: /api/generate");

    const body = await request.json();
    console.log("📦 BODY:", body);

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const { url, shorturl } = body;

    if (!url || !shorturl) {
      console.error("❌ Missing url or shorturl");
      return Response.json({ success: false, error: true, message: 'URL or shorturl missing' }, { status: 400 });
    }

    const existing = await collection.findOne({ shorturl });
    if (existing) {
      console.warn("⚠️ Short URL already exists");
      return Response.json({ success: false, error: true, message: 'Short URL already exists' }, { status: 400 });
    }

    await collection.insertOne({ url, shorturl });
    console.log("✅ Insert successful:", { url, shorturl });

    return Response.json({ success: true, error: false, shorturl }, { status: 200 });

  } catch (err) {
    console.error("🔥 INTERNAL ERROR:", err);  // This will show exact crash reason
    return Response.json({ success: false, error: true, message: 'Internal Server Error' }, { status: 500 });
  }
}
