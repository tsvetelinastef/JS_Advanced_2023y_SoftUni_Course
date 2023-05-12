function aggregateElements(params) {
    
	function Sum(params) {
		return params.reduce((acc, val) => acc + val, 0);
	}
	function Inverse(params) {
		return params.reduce((acc, val) => acc + 1 / val, 0);
	}
	function Concat(params) {
		return params.reduce((acc, val) => String(acc) + String(val));
	}
	console.log(Sum(params));
	console.log(Inverse(params));
	console.log(Concat(params));
}

aggregateElements([1, 2, 3]);
// 6
// 1.8333333333333333
// 123
aggregateElements([2, 4, 8, 16]);
// 30
// 0.9375
// 24816