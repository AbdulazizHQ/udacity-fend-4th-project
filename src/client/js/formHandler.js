function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value

    const errorMessageDiv = document.getElementById('error-message')
    const scoreTagDiv = document.getElementById('score-tag')
    const confidenceDiv = document.getElementById('confidence')
    const subjectivityDiv = document.getElementById('subjectivity')
    const agreementDiv = document.getElementById('agreement')
    const ironyDiv = document.getElementById('irony')

    console.log("::: Form Submitted :::")
    
    if (Client.checkUrl(formText)) {
        fetch('http://localhost:8081/analyze?url=' + formText, {
            method: 'POST'
        })
        .then(res => res.json())
        .then(function(res) {
            if (res.confidence != null) {
                errorMessageDiv.innerHTML = ''
                scoreTagDiv.innerHTML = `Sentiment: ${res.score_tag}`
                confidenceDiv.innerHTML = `Confidence: ${res.confidence}`
                subjectivityDiv.innerHTML = `Subjectivity: ${res.subjectivity}`
                agreementDiv.innerHTML = `Agreement: ${res.agreement}`
                ironyDiv.innerHTML = `Irony: ${res.irony}`
            }
            else {
                errorMessageDiv.innerHTML = 'Could not get sentiment from given URL'
                scoreTagDiv.innerHTML = ``
                confidenceDiv.innerHTML = ``
                subjectivityDiv.innerHTML = ``
                agreementDiv.innerHTML = ``
                ironyDiv.innerHTML = ``
            }
        })
    } else {
        alert("Invalid URL!");
    }

    
}

export { handleSubmit }
