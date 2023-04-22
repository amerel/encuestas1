import API from '../../API';

import './styles.css';

const poll = 2;
const Encuesta = () => {
    return (
        <>
            <form id="poll" onSubmit={(e) => {
                e.preventDefault();
                console.log(document.querySelector('#yes_no'));
                const formdata = new FormData(e.target);
                const session = Math.round(Math.random() * 1000000);
                const answers = [
                    {
                        session,
                        poll,
                        question: 1,
                        yes_no: formdata.get("yes_no") === 'on'
                    },
                    {
                        session,
                        poll,
                        question: 2,
                        option: formdata.get('option1')
                    },
                    {
                        session,
                        poll,
                        question: 3,
                        option: formdata.get('option2')
                    },
                    {
                        session,
                        poll,
                        question: 4,
                        option: formdata.get('option3')
                    },
                    {
                        session,
                        poll,
                        question: 5,
                        option: formdata.get('option4')
                    },
                    {
                        session,
                        poll,
                        question: 6,
                        answer: formdata.get("answer1")
                    },
                    {
                        session,
                        poll,
                        question: 7,
                        answer: formdata.get("answer2")
                    },
                    {
                        session,
                        poll,
                        question: 8,
                        answer: formdata.get("score")
                    }];
                console.log(answers);
                API.from('poll').insert(answers).then()
            }}>
                <div className="row">
                    <label htmlFor="option1">Edad</label>
                    <select name="option1" id='option1'>
                        <option value="1">16 a 21</option>
                        <option value="2">21 a 50</option>
                        <option value="3">50+</option>
                    </select>
                </div>
                <div className="row">
                    <label htmlFor="option2">Género</label>
                    <select name="option2" id='option2'>
                        <option value="1">F</option>
                        <option value="2">M</option>
                        <option value="3">otre</option>
                    </select>
                </div>
                <div className="row check">
                    <label htmlFor="yes_no"> Vas a votar en estas PASO 2023?</label>
                    <input type="checkbox" name="yes_no" id="yes_no" />
                </div>
                <div className="row">
                    <label htmlFor="option3">Si tu respuesta es sí, qué opción elegirías?</label>
                    <select name="option3" id='option3'>
                        <option value="1">FDT, Frente de Todos</option>
                        <option value="2"> Partido Libertario</option>
                        <option value="3">Cambiemos</option>
                    </select>
                </div>

                <fieldset className='row'>
                    <legend>Indique su nivel de estudios</legend>
                    <div>
                        <label htmlFor="yes_no"> primario completo</label>
                        <input type="radio" name='option4' id="option4-1" value="1" />
                    </div>
                    <div>
                        <label htmlFor="yes_no">Secundario completo</label>
                        <input type="radio" name='option4' id="option4-2" value="2" />
                    </div>
                    <div>
                        <label htmlFor="yes_no">Terciario/universitario completo?</label>
                        <input type="radio" name='option4' id="option4-3" value="3" />
                    </div>
                </fieldset>
                <div className="row">
                    <label htmlFor="answer1"> Donde vivis?</label>
                    <input type="text" name="answer1" id="answer1" />
                </div>
                <div className="row">
                    <label htmlFor="yes_no">Cual seria su candidato/a ideal?</label>
                    <textarea name="answer2" id="answer2" cols="30" rows="10"></textarea>
                </div>

                <div className="row">
                    <label htmlFor="yes_no">Como considera el panorama actual?</label>
                    <input type="range" name="score" id="score" list="values"/>
                    <datalist id="values">
                        <option value="0" label="😢"></option>
                        <option value="25" label="😣"></option>
                        <option value="50" label="😶"></option>
                        <option value="75" label="🙂"></option>
                        <option value="100" label="😃"></option>
                    </datalist>
                </div>
                <q></q><button type="submit">ENVIAR RESPUESTAS</button>
            </form>
        </>
    )
}

export default Encuesta;
