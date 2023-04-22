import API from '../API';


const X = {
  
  "session": 1234,
  "poll": 2,
  "question": 69,
  "yes_no": true,
  "option": 2,
  "answer": "EVITA",
  "score": 2.4
}
function Reference() {
return (
    <>
        <button onClick={() => API.from('poll').select().then(console.log)}>
        GET ALL DATA
        </button>
        <button onClick={() => API.from('poll').select().eq('poll',2).then(console.log)}>
        GET MY DATA
        </button>
        <button onClick={() => API.from('poll').insert(X).then()}>
        POST ONE ANSWER
        </button>
        <button onClick={() => API.from('poll').insert([X,X,X]).then()}>
        POST MULTIPLE ANWSERS
        </button>
        </>
  )
}

export default Reference
