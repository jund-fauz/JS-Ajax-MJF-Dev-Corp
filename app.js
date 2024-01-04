const table = document.getElementById('table')

fetch('https://my-express-js.vercel.app/pegawai')
    .then(response => response.json())
    .then(data => {
        console.log(data.payload)
        data.payload.forEach(element => {
            createNewRow(table, element)
        })
    })

function createNewRow(table, content) {
    const row = document.createElement('tr')
    for (const element in content) {
        row.appendChild(
            document.createElement('td').appendChild(
                document.createTextNode(element)
            )
        )
    }
    table.appendChild(row)
}