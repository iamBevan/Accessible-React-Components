import { useEffect } from "react";
import { Key } from "../helpers/keyCodes";

/**
 * Use this hook to disable keyboard scrolling
 *
 * For example, a user navigating with a keyboard should expect page scrolling
 * to be disabled when a dropdown is expanded
 */

const useDisableKeyboardScroll = (
	isOpen: boolean,
	additionalKeys?: number[]
): void => {
	useEffect(() => {
		let keys = [
			Key.Space,
			Key.LeftArrow,
			Key.UpArrow,
			Key.RightArrow,
			Key.DownArrow,
		];

		if (additionalKeys) {
			keys = keys.concat(additionalKeys);
		}

		const disableKeyDefaults = (e: KeyboardEvent): void => {
			if (keys.indexOf(e.keyCode) > -1) {
				e.preventDefault();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", disableKeyDefaults);
		}
		return () => {
			document.removeEventListener("keydown", disableKeyDefaults);
		};
	}, [additionalKeys, isOpen]);
};

export { useDisableKeyboardScroll };
