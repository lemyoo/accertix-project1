import React from 'react'
import './styles.css'
import testImage from '../../img/2.jpg'
import testVideo from '../../video/vid1.mp4'


export default function ChattingArea() {
    return (
        <div className="container-fluid">
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Data Type</th>
                            <th scope="col">Value</th>
                            <th scope="col">Time Stamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> String </td>
                            <td>
                                Magna occaecat excepteur aliqua voluptate anim elit cupidatat excepteur enim. Pariatur non ut proident aute tempor Lorem ad magna ea deserunt ea cillum pariatur. Amet commodo dolor minim tempor laborum ullamco labore commodo deserunt duis. Velit cillum mollit amet minim id ea eu sit occaecat et labore velit. Aliquip pariatur magna mollit enim veniam duis duis tempor sit.
                            </td>
                            <td>
                                2020-07-04*13:23:55
                            </td>
                        </tr>
                        <tr>
                            <td> Imojie </td>
                            <td>
                                🍔
                               </td>
                            <td>
                                2020-07-04*13:23:55
                            </td>
                        </tr>
                        <tr>
                            <td> Int </td>
                            <td>
                                1 2 3
                            </td>
                            <td>
                                2020-07-04*13:23:55
                            </td>
                        </tr>
                        <tr>
                            <td> Image </td>
                            <td>
                                <img className="rounded img-style " src={testImage} alt="" />
                            </td>
                            <td>
                                2020-07-04*13:23:55
                            </td>
                        </tr>
                        <tr>
                            <td> Video </td>
                            <td>
                                <video controls className="video-style">
                                        <source src={testVideo} type="video/mp4"/>
                                </video>
                            </td>
                            <td>
                                2020-07-04*13:23:55
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
