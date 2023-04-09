import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js';

Chart.register(ArcElement);

export const SkillCard = ({ title, num }) => {

    const chartNum = {num}.num;
    const dataNum = [
        [chartNum],[(100-chartNum)]
    ];
    
    const data = {
        datasets: [
            {
                data: dataNum,
                backgroundColor: [
                    'rgb(58, 94, 214)',
                    'rgba(0,0,0,0)',
            ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="item" data-num={num}>
            <Doughnut data={data}/>
            <div className="item__num">{num}%</div>
            <h5>{title}</h5>
        </div>
    )
}
