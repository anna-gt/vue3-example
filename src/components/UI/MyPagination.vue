<template>
	<div class="page_wrapper">
		<div 
			v-for="pageNumber in pages" 
			:key="pageNumber"
			class="page"
			:class="{
				'current_page': pageNumber === page
			}"
			@click="updatePage(pageNumber)"
		>
		{{ pageNumber }}
	</div>
	</div>
</template>

<script>
	export default {
		name: 'my-pagination',
		props: {
			pages: Number,
			page: Number
		},
		methods: {
			updatePage(pageNumber) {
				this.$emit('update:page', pageNumber)
			}
		}
	}
</script>

<style scoped>
.page_wrapper {
	display: flex;
	margin-top: 15px;
}

.page {
	border: 1px solid black;
	padding: 10px;
}

.current_page {
	border: 2px solid teal;
}
</style>