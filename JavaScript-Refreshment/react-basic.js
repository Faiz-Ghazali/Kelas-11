const root = document.getElementById('root');
const added = "fulan"
root.innerHTML = 
`<h1> Hello ${added} World</h1>
<form>
<input type="text" placeholder="Masukkan nama">
<button type="submit">Submit</button>
</form>
`;
function addedHTML() {
    return `<h1> Hello ${added} World</h1>
<form>
<input type="text" placeholder="Masukkan nama">
<button type="submit">Submit</button>
</form>
`;
}
addedHTML();
