import { NextResponse } from "next/server";

export async function POST(req: { json: () => PromiseLike<{ name: any; age: any; email: any; }> | { name: any; age: any; email: any; }; }) {
	let { name, age, email } = await req.json();

	if (!name || !age || !email) {
		return NextResponse.json(
			{ result: "required filed not found", ok: false },
			{ status: 400 }
		);
	}

	return NextResponse.json(
		{
			result: "Credientials Verified, User Successfully Created.",
			ok: true,
		},
		{ status: 201 }
	);
}