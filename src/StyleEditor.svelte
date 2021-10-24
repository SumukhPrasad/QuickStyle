<script>
	import { fly } from "svelte/transition";
     import { activeEditors } from './store.js';
     function remove() {
		$activeEditors = $activeEditors.filter(function(value, index, arr){ 
			if (value.id != activeEditor.id) return value;
		});
		console.log($activeEditors);
	}

     var rules = 'display: none;';
     export let activeEditor;
</script>


<li in:fly="{{ x: 900, duration: 500 }}">
     <div class="classNameAndEndBracketDiv">
          <span style="line-height: 30px;">.{activeEditor.name} {'{'}</span>
          <button on:click={remove} class="deletebutton">Delete</button>
     </div>
     <div>
          <textarea bind:value={rules} resizable={false}></textarea>
     </div>
     <div class="classNameAndEndBracketDiv">
          <span>{'}'}</span>
     </div>
</li>

<style>
	textarea {
		resize: none;
          font-family: 'Courier New', Courier, monospace;
		background-color: #111;
		color: #fff;
          border-color: #222;
          width: 100%;
	}
     li {
          color: #ddd;
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
          padding: 10px;
          width: 300px;
     }
     .deletebutton {
          background-color: #f00;
          color: #fff;
          float: right;
     }
</style>