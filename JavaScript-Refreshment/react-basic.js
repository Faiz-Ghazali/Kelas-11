
function render(name) {
    const root = document.getElementById('root');
    root.innerHTML = 
`<h1> Hello ${added} World</h1>
<form>
<input type="text" placeholder="Masukkan nama">
<button type="submit">Submit</button>
</form>
`;
}
render("fulan");
