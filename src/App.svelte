<script>
	import StylesheetEditStack from "./StylesheetEditStack.svelte";;
</script>

<svelte:head>
	<title>QuickStyle</title>
	<style>
		body {
			background-color: #222;
			color: #fff;
		}
		button {
			padding: 5px 16px;
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			white-space: nowrap;
			vertical-align: middle;
			cursor: pointer;
			border: 1px solid;
			border-radius: 6px;
			height: 30px;
			border: 0;
			background-color: #111;
			color: #fff;
		}
		button:active {
			filter: brightness(0.7);
		}
	</style>
</svelte:head>

<main>
	<StylesheetEditStack />
</main>

<style>
</style>