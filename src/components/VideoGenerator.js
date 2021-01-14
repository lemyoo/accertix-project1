import date from './DateGenerator'
import time from './TimeGenerator'
import testVideo from '../video/vid1.mp4'

 const Video ={
     type: 'Video',
     value: '<video controls className="video-style"> <source src='+ {testVideo} + 'type="video/mp4"/></video>',
     date: date,
     time: time,

}
export default Video