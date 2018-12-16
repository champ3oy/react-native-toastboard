// @flow
export function wait(
	sec: number = 2000, /* eslint-disable-line no-magic-numbers */
	manualResolve?: (resolve: () => void) => void
): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(resolve, sec);
		manualResolve && manualResolve(resolve);
	});
}