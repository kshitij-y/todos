import { useState } from "react"

export function CreateTodo(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input style={{
            padding: 10,
            margin: 10,
            width: 500

        }} id="title" type="text" placeholder="title" onChange={function(e){
            setTitle(e.target.value)
        }}></input><br />

        <input style={{
            padding: 10,
            margin: 10,
            width: 500

        }} id="desc" type="text" placeholder="description" onChange={function(e){
            setDescription(e.target.value)
        }}></input><br />

        <button style={{
            padding: 10,
            margin: 10,
            width: 500
        }} onClick={() =>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert("Todo added")
            })
        }} >Add a todo</button>

    </div>
}