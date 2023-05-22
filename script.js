const result = document.getElementById('result');
const arr = document.getElementById('rope-length').split(',');
	
function calculateMinCost() {
  
  const minHeap = new PriorityQueue();
	for(const len of arr){
		minHeap.add(len);
	}

	let cost = 0;

	while(minHeap.size() > 1) {
		const min1 = minHeap.poll();
		const min2 = minHeap.poll();

		const sum = min1 + min2;

		minHeap.add(sum);

		cost += sum;
	}
	
	result.innerText = cost;
}  