'use client';
import React from "react";
export default function Revealable({ children }) {
	const [
		isChildShown,
		setChildShown,
	] = React.useState(false);
	return isChildShown ?
		children
		: (
			<div className="reveal">
				<button
					onClick={
						() => setChildShown(true)
					}
				>
					Reveal Content
				</button>
			</div >
		)
}