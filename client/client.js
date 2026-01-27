ReactDOM.createRoot(document.querySelector("#root")).render(App())



function App(){

    return(
        <div>
            <Header></Header>
            <h2>React Client</h2>
            <main>
                <Cars></Cars>
            </main>
        </div>
    )
}


function Cars(){


    const  [guitars, setGuitars] = React.useState([])


    React.useEffect(()=>{
        getGuitars();
    },[])


    async function getGuitars(){
        const res = await fetch("/cars");
        const data = await res.json();
        setGuitars(data);

        
    }

    return(

        <div>
            <h3>guitars</h3>
            {guitars.map(g=>(
                <div class = "guitar" key={g.id}>
                    <h3>{g.brand}</h3>
                    <h3>{g.id}</h3>
                    <p><i>{g.price}</i></p>
            
            
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
