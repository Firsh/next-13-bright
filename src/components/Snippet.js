import React from "react";
import { Code } from 'bright';
export default function Snippet({ lang = 'py', children }) {

	return (
		<Code
			className="code-snippet"
			theme="dracula"
			lang={lang}
		>
			{children}
		</Code>
	)
}