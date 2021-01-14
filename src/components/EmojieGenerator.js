import date from './DateGenerator'
import time from './TimeGenerator'

    const index = Math.floor(Math.random()*5);
    const emojiArray =["😀","😘","🧐","😡","😱"]
 const EmojieGenerator =  {
     type: 'Emoji',
     value: '<span className="emoji" role="img">'+emojiArray[index]+'</span>',
     date: date,
     time: time
}

export default EmojieGenerator
