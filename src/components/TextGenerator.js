import date from './DateGenerator'
import time from './TimeGenerator'
import {LoremIpsum} from 'lorem-ipsum'

const lorem = new LoremIpsum({
    sentencesPerParagraph:{max: 5,min:2},
    wordsPerSentence:{max:12,min:4}
})
const TextGenerator =
    {
        type: 'String',
        value: lorem.generateSentences(1),
        date: date,
        time: time,
    }

export default TextGenerator;