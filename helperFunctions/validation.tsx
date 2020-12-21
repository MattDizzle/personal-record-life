export const emailValidation = (userInput) => {
    let regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!userInput.email.match(regexEmail)) {
        return {
            error: true,
            errorMessage: "Enter A Valid Email"
        };
    }

    return {
        error: false,
        errorMessage: ""
    }

}

export const formValidation = (userInput) => {
    if (!userInput.userName || !userInput.email || !userInput.password || !userInput.rePassword) {
        return {
            error: true,
            errorMessage: 'All Fields Are Required',

        }
    }
    return {
        error: false,
        errorMessage: ""
    }
}


export const passwordValidation = (userInput) => {
    if (userInput.password !== userInput.rePassword) {
        return {
            error: true,
            errorMessage: "Password Doesn't Match"
        }
    }
    return {
        error: false,
        errorMessage: ""
    }
}

