
class MyStack
{
	constructor ()
	{
		this.q = [];
	}
	/**
	 * @param {number} x
	 * @return {void}
	 */
	push (x)
	{
		this.q.push(x);
	}
	/**
	 * @return {number}
	 */
	pop ()
	{
		return this.q.pop();
	}
	/**
	 * @return {number}
	 */
	top ()
	{
	}
	/**
	 * @return {boolean}
	 */
	empty ()
	{
	}
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */