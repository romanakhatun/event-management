import DBConnect from "@/app/lib/dbConnection";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.title || !body.price) {
      return Response.json({ success: false, message: "Title & Price required" }, { status: 400 });
    }

    const result = await DBConnect("menus").insertOne(body);

    return Response.json({ success: true, insertedId: result.insertedId, data: result });
  } catch (err) {
    return Response.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json({ success: false, message: "id is required" }, { status: 400 });
    }
    if (!ObjectId.isValid(id)) {
      return Response.json({ success: false, message: "invalid id" }, { status: 400 });
    }

    const body = await req.json();
    const result = await DBConnect("menus").updateOne({ _id: new ObjectId(id) }, { $set: body });

    return Response.json({ success: true, modifiedCount: result.modifiedCount });
  } catch (err) {
    return Response.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json({ success: false, message: "id is required" }, { status: 400 });
    }
    if (!ObjectId.isValid(id)) {
      return Response.json({ success: false, message: "invalid id" }, { status: 400 });
    }

    const result = await DBConnect("menus").deleteOne({ _id: new ObjectId(id) });
    return Response.json({ success: true, result });
  } catch (err) {
    return Response.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const items = await DBConnect("menus").find({}).toArray();
    return Response.json({ success: true, data: items });
  } catch (err) {
    return Response.json({ success: false, message: err.message }, { status: 500 });
  }
}
