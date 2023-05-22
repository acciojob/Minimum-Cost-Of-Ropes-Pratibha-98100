function calculateMinCost() {
  //your code here
  let input = document.getElementById("rope-lengths").value;
	let arr = input.split(',');
	let ans = [];
	arr.forEach(element => {
		if(element!=','){
			ans.push(Number(element));
		}
	})
	let result = [];
	let sum = 0;

	for (let i = 1; i < ans.length; i++) {
		ans.sort((a,b)=>a-b);
		result[i-1] = ans[i]+ans[i-1];
		ans[i] = ans[i]+ans[i-1];
	}
	sum = result.reduce((total,current )=>{
		return total + current;
	},0)
	
  document.getElementById("result").innerHTML = sum;
  
}  
