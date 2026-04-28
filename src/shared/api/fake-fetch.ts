export const fakeFetch = <T>(data: T, delay = 500): Promise<T> =>
	new Promise(resolve => setTimeout(() => resolve(data), delay))
