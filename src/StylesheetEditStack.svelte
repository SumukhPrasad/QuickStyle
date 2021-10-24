<script>
	import StyleEditor from "./StyleEditor.svelte";
     import { activeEditors, idIncrement } from './store.js';
     $activeEditors = [];
     idIncrement.set(0);
     function makeid(length) {
          var result           = '';
          var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
          for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;                
     }
     function addEditor() {
          var l = $activeEditors.length;	// get our current items list count
		$activeEditors[l] = { id: $idIncrement, name: makeid(25) };
		$idIncrement++;
     }
</script>

<div>

     <ul>
          {#each $activeEditors as activeEditor}
               <StyleEditor {activeEditor}/>
          {/each}
     </ul>

     <div>
          <button class="addNewButton" on:click={addEditor}>Add Editor</button>
     </div>
</div>

<style>
     ul {
          list-style: none; /* Remove list bullets */
          padding: 0;
          margin: 0;
          margin-bottom: 10px;
     }
     .addNewButton {
          background-color: #0087ff;
          color: #fff;
          width: 100%;
     }
</style>