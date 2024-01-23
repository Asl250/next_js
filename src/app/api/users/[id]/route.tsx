//typescript
import {NextResponse} from "next/server";

export function GET(_: any, response: { params: { id: any; }; }){
	const {id} = response.params

	return NextResponse.json({id})
}