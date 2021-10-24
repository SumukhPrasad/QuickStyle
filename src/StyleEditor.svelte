<script>
	import { fly } from "svelte/transition";
	import BrowserInterface from './browserMethodsHandler.js';
	import { activeEditors } from './store.js';
	console.log(BrowserInterface)
	function makeid(length) {
		var result		 = '';
		var characters	  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for ( var i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;			 
	}
	const uniqueId = makeid(50);
	var initScript = 
		`
		document.head.innerHTML+='<style id="${uniqueId}"></style>';
		console.log('Powered by QuickStyle.');
		`
	BrowserInterface.execScript(initScript);
	function remove() {
		$activeEditors = $activeEditors.filter(function(value, index, arr){ 
			if (value.id != activeEditor.id) return value;
		});
		var script = 
		`
		document.getElementById('${uniqueId}').remove();
		`
		BrowserInterface.execScript(script);
	}
	function setStyleInPage() {
		var script = 
		`
		document.getElementById('${uniqueId}').innerHTML = '.${className} {${rules}}';
		`
		BrowserInterface.execScript(script);
	}
	var rules = '';
	var className = '';
	function handleExecScriptSuccess(data) {
		console.log('execJS: ' + data)
	}
	function handleExecScriptReject(data) {
		console.log('execJS: ' + data)
	}
	export let activeEditor;
</script>


<li in:fly="{{ x: 900, duration: 200 }}">
	<div class="classNameAndEndBracketDiv">
		<span style="line-height: 30px;">.<input type="text" on:change={setStyleInPage} placeholder="class-name" bind:value={className}> {'{'}</span>
		<button on:click={remove} class="deletebutton">Delete</button>
	</div>
	<div>
		<textarea on:change={setStyleInPage} placeholder="property: value;" bind:value={rules} resizable={false}></textarea>
	</div>
	<div class="classNameAndEndBracketDiv">
		<span>{'}'}</span>
	</div>
</li>

<style>
	textarea {
		resize: none;
		font-family: 'Courier New', Courier, monospace;
		background-color: #222;
		color: #fff;
		border-color: #222;
		width: 100%;
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
	}
	li {
		color: #ddd;
		border-bottom: 1px solid rgba(255, 255, 255, 0.25);
		padding: 10px;
		width: 300px;
	}
	input {
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
		white-space: nowrap;
		vertical-align: middle;
		border: 1px solid;
		border-radius: 6px;
		height: 30px;
		border: 0;
		background-color: #222;
		color: #fff;
		width: 200px;
		font-family: 'Courier New', Courier, monospace;
	}
	.deletebutton {
		background-color: #f00;
		color: #fff;
		float: right;
	}
</style>