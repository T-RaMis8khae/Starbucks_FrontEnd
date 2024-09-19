"use server"

import { SignUpRequestBodyType } from "@/type/auth/signUp"
import { getUtcFromBirthdate } from "@/lib/dayjsUtils"

export async function signUpAction(req: SignUpRequestBodyType) {
	const payload: SignUpRequestBodyType = {
		loginId: req.loginId,
		email: req.email,
		password: req.password,
		name: req.name,
		phoneNumber: req.phoneNumber,
		nickname: req.nickname,
		birth: getUtcFromBirthdate(req.birth),
		emailMarketingConsent: req.emailMarketingConsent.toString() == "true",
		smsmarketingConsent: req.smsmarketingConsent.toString() == "true"
	}

	console.log("action payload", payload, JSON.stringify(payload))
	const res = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/signup`, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json"
		}
	})

	console.log("res: ", res)
	if (res.ok) {
		return await res.json()
	}
	return null
}
