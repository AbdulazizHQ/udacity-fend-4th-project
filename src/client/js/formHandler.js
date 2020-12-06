function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value

    console.log("::: Form Submitted :::")
    
    if (Client.checkUrl(formText)) {
        fetch('http://localhost:8081/analyze?url=' + formText, {
            method: 'POST'
        })
        .then(res => res.json())
        .then(function(res) {
            if (res.confidence != null)
                document.getElementById('results').innerHTML = JSON.stringify(res)
            else
                document.getElementById('results').innerHTML = 'Could not get sentiment from given URL'
        })
    } else {
        alert("Invalid URL!");
    }

    
}

export { handleSubmit }
