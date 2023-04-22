import { useEffect, useState } from "react"
import API from '../../API'
import { PieChart, Pie, Cell, BarChart, Bar,XAxis,Tooltip } from "recharts";

const Resultados = () => {
    const [data, setData] = useState([]);
    useEffect(
        () => { API.from('poll').select().eq('poll', 2).then(respuesta => setData(respuesta.data)) },
        []);
    const question1Data = data.filter((row) => row.question === 1);
    const question1Totals = [
        {
            name: "SI",
            value: question1Data.filter(row => row.yes_no).length
        },
        {
            name: "NO",
            value: question1Data.filter(row => !row.yes_no).length
        },

    ]
    const question2Data = data.filter((row) => row.question === 2);
    const question2Totals = [
        {
            name: "16 a 21",
            value: question2Data.filter(row => row.option === 1).length
        },
        {
            name: "21 a 50",
            value: question2Data.filter(row => row.option === 2).length
        },
        {
            name: "50 +",
            value: question2Data.filter(row => row.option === 3).length
        },

    ]
    return (<section>
        <article>
            <h2>Resultados</h2>
            <h2>Vas a Votar en las PASO 2023</h2>
            <PieChart width={600} height={600}>
                <Pie data={question1Totals}
                    dataKey="value"
                    nameKey="name"
                    fill='#8884d8'
                    label={({ name, percent }) => `${name}: ${Math.round(percent * 100)}%`}
                >
                    <Cell fill='blue' />
                    <Cell fill='red' />
                </Pie>
            </PieChart>
        </article>
        <article>
            <h2>
                Edad
            </h2>
            <BarChart
                width={400} height={400}
                data={question2Totals}>
                     <XAxis dataKey="name"/>
                     <Tooltip/>
                <Bar dataKey="value" fill= "#8884d8">
                </Bar>
            
            </BarChart>
        </article>
    </section>
    )
};

export default Resultados
