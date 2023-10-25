import Decimal from 'decimal.js';

// Convert num arrays to Decimal instances for calculations
export default function arrayToDecimal(num) {
	if (num.length !== 0 && !(num instanceof Decimal)) {
		return new Decimal(num.join(""));
	}
	return num;
}