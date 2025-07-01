export class Email {
    constructor(parameters) {

    }

    getTargetValue = (value, callback) => {
        value.addEventListener('change', (e) => {
            let result = e.target.value
            callback(result)
        })
    }
}

