interface StringValidator {
    isAcceptable(s: string): boolean
}

let lettersRegexp = /^[A-Za-z]+$/
let numberRegexp = /^[0-9]+$/

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return lettersRegexp.test(s)
    }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return s.length === 5 && numberRegexp.test(s)
    }
}

let strings = ['hello', '98052', '101']
let validators: { [s: string]: StringValidator } = {}
validators['ZIP code'] = new ZipCodeValidator()
validators['Letters only'] = new LettersOnlyValidator()
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s)
        let matchString: string
        if (isMatch) matchString = "matches"
        else matchString = "dose not match"
        const logInfo = s + matchString + name
        console.log(logInfo)
    }
}