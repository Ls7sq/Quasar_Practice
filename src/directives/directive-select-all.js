export const selectAll = {
	bind(el){
		//pass in the input class which found in the page
		let input = el.querySelector('.q-field__native')
		input.addEventListener('focus',()=>{
			if (input.value.length) {
				input.select()
			}
		})
	}
}