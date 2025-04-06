import { useState, useEffect, useRef, RefObject } from "react";

const useInView = <T extends HTMLElement>(
	options?: IntersectionObserverInit
): [RefObject<T | null>, boolean] => {
	const [isInView, setIsInView] = useState(false);
	const elementRef = useRef<T>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			options
		);
		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, [options]);

	return [elementRef, isInView];
};

export default useInView;