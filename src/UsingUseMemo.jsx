import React from 'react'

export const UsingUseMemo = () => {
    const [num, setnum] = React.useState();
    const [dark, Setdark] = React.useState(false);
    const slow = (a) => {
        for (let index = 0; index < 1000000000; index++) { }
        console.log("inside slow");
        return a * 2;

    }
   const double= React.useMemo(()=>{
           return slow(num);
    },[num])
    const styles =
    {
        color: dark ? "white" : "black",
        backgroundColor: dark ? "black" : "white"

    }
    return (

        <div style={styles}>
            <input type="number" onChange={(e) => { setnum(e.target.value) }} />
            <br />
            {double}   
            <br /> 
            <button onClick={() => { Setdark(!dark) }}>change theme</button>

        </div>
    )
}
