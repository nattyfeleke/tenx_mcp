
export function average(items: unknown[]): number {
	if (!Array.isArray(items)) return NaN;
	const nums = items.filter((v): v is number => typeof v === 'number' && Number.isFinite(v));
	if (nums.length === 0) return NaN;
	const sum = nums.reduce((acc, n) => acc + n, 0);
	return sum / nums.length;
}

export default average;

export function sum(numbers: (number | string)[]): number {
	if (!Array.isArray(numbers)) return NaN;
	const nums = numbers
		.map(n => (typeof n === 'string' ? Number(n.trim()) : n))
		.filter((v): v is number => typeof v === 'number' && Number.isFinite(v));
	if (nums.length === 0) return 0;
	return nums.reduce((acc, n) => acc + n, 0);
}
