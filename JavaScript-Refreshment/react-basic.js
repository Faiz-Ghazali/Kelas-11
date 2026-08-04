
function render() {
    const root = document.getElementById('root');
    let name = "fulan";
    root.innerHTML = 
`<h1> Hello ${name} World</h1>
<form>
<input type="text" placeholder="Masukkan nama">
<button type="submit">Submit</button>
</form>
`;
}
render();
