
export function Todos({todos}){
    const markCompleted = async (id) => {
        const response = await fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        
    };

    const remove = async (id) => {
        const response = await fetch("http://localhost:3000/remove", {
            method: "DELETE",
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    return <div>
        {todos.map(function(todo) {
        return (
            <div key={todo._id} style={{
                    border: '1px solid #ddd', 
                    borderRadius: '8px', 
                    padding: '15px', 
                    marginBottom: '10px',
                    backgroundColor: '#fff', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    width: 300,
                }}>
                <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>{todo.title}</h2>
                <h3 style={{ margin: '0 0 10px 0', color: '#666' }}>{todo.description}</h3>
                <button 
                    onClick={() => markCompleted(todo._id)} 
                    style={{
                        backgroundColor: todo.completed ? '#4CAF50' : '#f44336', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '4px', 
                        padding: '10px 20px', 
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}>
                    {todo.completed ? "Completed" : "Mark as completed"}
                </button>
                <button 
                    onClick={() => remove(todo._id)} 
                    style={{
                        backgroundColor: '#f44336', // Red background
                        color: '#fff', // White text
                        border: 'none', 
                        borderRadius: '4px', 
                        padding: '10px 20px', 
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginLeft: '20px', // Add some space between buttons
                        transition: 'background-color 0.3s ease', // Smooth transition effect
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d32f2f'} // Darker red on hover
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f44336'} // Original color on mouse out
                >
                    Remove
                </button>

            </div>
        );
        })}

    </div>
    
    
}