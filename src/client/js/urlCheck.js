function checkUrl(url) {
    console.log("::: Running checkURL :::", url);
    
    // From: https://stackoverflow.com/a/3809435
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    return url.match(regex);
}

export { checkUrl }
