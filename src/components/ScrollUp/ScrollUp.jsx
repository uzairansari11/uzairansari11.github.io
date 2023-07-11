import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollUp = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowButton(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Box
			position="fixed"
			bottom={6}
			right={6}
			opacity={showButton ? 1 : 0}
			transition="opacity 0.3s"
		>
			<IconButton
				aria-label="Scroll to Top"
				icon={<AiOutlineArrowUp style={{ fill: "white" }} size={30} />}
				size="lg"
				borderRadius="full"
				onClick={handleScrollToTop}
				bg={"teal"}
				_hover={{ bg: "teal" }}
			/>
		</Box>
	);
};

export default ScrollUp;
