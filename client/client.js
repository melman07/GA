ReactDOM.createRoot(document.querySelector("#root")).render(App());



function App(){

    return(
        <div>
            <Header></Header>
            <h2>React Client</h2>
            <main>
                <Guitars></Guitars>
                <Home></Home>
            </main>

                <footer>
                    <Footer></Footer>
                </footer>
        </div>
    );
};


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

          { guitars.map(g=> <Guitar guitar={g} key={g.id}/>)}
          

        </div>
        
    );

};

function Header(){

    return(

        <header>
            <nav>
                <a href="#HOME">HOME</a>
            </nav>
        </header>
    )
}

function Footer(){
    return(

        <footer>
            <a href="">ads</a>
        </footer>
    )
}


function Home(){

    return(
        <main id="home" className="content">
            <h1>HOME</h1>
        </main>
    )
}