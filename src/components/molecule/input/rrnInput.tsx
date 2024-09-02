"use client"

import React, { useRef } from "react"
import { BaseInput } from "@/components/atom/input/baseInput"
import _ from "lodash"

interface RrnInputProps {}

// RRN -> Resident Registration Number
function RrnInput(props: RrnInputProps) {
	const secondInputRef = useRef<HTMLInputElement>(null)

	return (
		<fieldset className="w-full flex items-center justify-between relative">
			<BaseInput
				ct_type="tel"
				placeholder="생년월일 6자리"
				maxLength={6}
				className="border-none w-[160px]"
			></BaseInput>
			<span className="w-3 h-[1px] border-[1px] border-t-sb-gray-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></span>
			<div className="relative" onClick={() => secondInputRef.current?.focus()}>
				<BaseInput
					ref={secondInputRef}
					ct_type="tel"
					placeholder="●"
					maxLength={1}
					className="border-none w-[100px] pr-[78px] bg-transparent z-[1]"
					dir="rtl"
				></BaseInput>
				<div className="absolute flex items-center gap-[2px] top-1/2 right-1 translate-y-[-50%] z-0">
					{_.times(6, () => (
						<span className="text-sb-black-100">●</span>
					))}
				</div>
			</div>
		</fieldset>
	)
}

export default RrnInput
