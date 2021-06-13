let names = ["penny", "lenny", "sheldon", "Howard", "Rajesh"]

function BigHello(){
  return(
  <React.Fragment>
    {
          names.map(function(name) {
            return <Hello key ={name} name = {name}></Hello>
            //They key her is important. It is unique for every name
          })
    }
</React.Fragment>
    );
}


function Hello(props) {
return <h1> Hellp from {props.name}</h1>;
}

ReactDOM.render(<BigHello> </BigHello>, document.querySelector("#root"));