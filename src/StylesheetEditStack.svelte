<script>
	import StyleEditor from "./StyleEditor.svelte";
     import { activeEditors, idIncrement } from './store.js';
     var value;
     var items = ['', 'hello', 'world'];

     $activeEditors = [];
     idIncrement.set(1);

     function addEditor() {
          var l = $activeEditors.length;	// get our current items list count
		$activeEditors[l] = { id: $idIncrement, name: value };
		$idIncrement++;
          value = items[0];
     }
</script>

<div>

     <ul>
          {#each $activeEditors as activeEditor}
               <StyleEditor {activeEditor}/>
          {/each}
     </ul>

     <div>
          <select bind:value>
               {#each items as item}
                    <option value={item}>{item}</option> 
               {/each}
          </select>
          <button on:click={addEditor} disabled={value == ''}>Add Editor</button>
     </div>
</div>

<style>
     ul {
          list-style: none; /* Remove list bullets */
          padding: 0;
          margin: 0;
          margin-bottom: 10px;
     }
</style>