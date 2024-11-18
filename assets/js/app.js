const containerEl = document.querySelector(".container");
fetch(`https://api.spacexdata.com/v3/capsules`, {
    method: "GET"
})
    .then(m => m.json())
    .then(n => n.forEach(e => {
        const divEL = document.createElement("div");
        divEL.innerHTML =
            `<table>
                <tr>
                    <td>${e.capsule_serial}</td>
                    <td>${e.capsule_id}</td>
                    <td>${e.status}</td>
                    <td>${e.orginal_launch}</td>
                </tr>
                <tr>
                    <td>${e.orginal_launch_unix}</td>
                    <td>${e.missions}</td>
                    <td>${e.name}</td>
                    <td>${e.flight}</td>
                </tr>
                <tr>
                    <td>${e.landing}</td>
                    <td>${e.typedetails}</td>
                    <td>${e.name}</td>
                <td>${e.reuse_count}</td>
                </tr>
        </table>`

        containerEl.appendChild(divEL);


    }))