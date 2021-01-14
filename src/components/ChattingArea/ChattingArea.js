import React,{useEffect,useState} from 'react'
import './styles.css'
import testImage from '../../img/2.jpg'
import testVideo from '../../video/vid1.mp4'
import Numbers from '../NumberGenerator'
import TextGenerator from '../TextGenerator'
import EmojieGenerator from '../EmojieGenerator'
import Video from '../VideoGenerator'
import Image from "../ImageGenerator";


let data=[Numbers, TextGenerator, EmojieGenerator,Image,Video];
var i = 0;
export default function ChattingArea() {
    
    var [toggle , setToggle] = useState(1)
    
    useEffect(() => {
        console.log("Be",i);
        var tableRef = document.getElementById("test-table")
        var tableRow = tableRef.insertRow(1)
        var cell1 = tableRow.insertCell(0);
        var cell2 = tableRow.insertCell(1);
        var cell3 = tableRow.insertCell(2);
        var cell4 = tableRow.insertCell(3);

        cell1.innerHTML = data[i]['type'];
        cell2.innerHTML = data[i]['value'];
        cell3.innerHTML = data[i]['date'];
        cell4.innerHTML = data[i]['time'];
        console.log("Mi",i);
        if(i === 3){
            cell2.innerHTML = '<td><img class="rounded img-style" src=" '+ testImage +' " alt=" "/></td>'
            i++;
        }else if(i === 4){
            cell2.innerHTML = '<td><video controls width="200" height="200"><source src="'+testVideo+'"type ="video/mp4" /></video>';
            i=0;
        }
        else{
            i++
        }
        console.log("If",i);
        const interval = setInterval(()=>{
            if(toggle === 1){
                setToggle(0)
            }else{
                setToggle(1)
            }
            
        },4000);
        return () => {
            clearInterval(interval);
        }
    }, [toggle])
    
    return (
        <div className="container-fluid">
            <div className="row">
                <table id="test-table" className="table table-bordered table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">Data Type</th>
                            <th scope="col">Value</th>
                            <th scope="col">Time Stamp(Date)</th>
                            <th scope="col">Time Stamp (hh:mm:ss:mmm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>

        </div>
    )
}
