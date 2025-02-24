let button = document.querySelector("#button")
button.addEventListener("click", () => {
    let c = document.querySelector("#categorie").value
    let l = "https://api.chucknorris.io/jokes/random";

    if (c !== "all") {
        l = l + "?category=" + c
    }

    let joke = fetch(l).then(
        function (response) {
            console.log(response)
            return response.json();
        }
    ).then(
        function (data) {
            console.log(data)
            document.querySelector("h2").innerHTML = data.value
        }
    ).catch(
        function (error) {
            console.log(error)
        }
    )
    console.log(joke)
})


