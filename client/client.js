ReactDOM.createRoot(document.querySelector("#root")).render(App())



function App(){

    return(
        <div>
            <Header></Header>
            <h2>React Client</h2>
            <main>
                <Guitars></Guitars>
            </main>
        </div>
    )
}


function Guitars(){


    const  [guitars, setGuitars] = React.useState([])


    React.useEffect(()=>{
        getGuitars();
    },[])


    async function getGuitars(){
        const res = await fetch("/Guitars");
        const data = await res.json();
        setGuitars(data);

        
    }

    async function delGuitar(id) {

        const res = await fetch("Guitars/"+id, {
            method:"DELETE"
        });
        
        if (res.status == 200){
            setGuitars(prev=> prev.filter(g=>g.id != id));
        };
    }

    return(

        <div>
            <h3>guitars</h3>
            {guitars.map(g=>(
                <div class = "guitar" key={g.id}>
                    <h3>{g.brand}</h3>
                    <h3>{g.id}</h3>
                    <p><i>{g.price}</i></p>
                    <button onClick={ ()=>{delGuitar(g.id)} }>Delete Guitar</button>
            
            
                </div>))}

        </div>
        
    )

};

function Header(){

    return(

        <header>
            <nav>
                <a href="./">HOME</a>
            </nav>
        </header>
    )
}
