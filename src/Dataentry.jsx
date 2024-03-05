const Dataentry = () => {
    const gotodata = () => {
        // window.open('url') opens url in same windows
        window.location.href = 'https://1drv.ms/x/c/2c33cba23f596be3/EcJjsK4DnT1FtnBMl5g-IP0BudMImuOvKWtjUaZ4QVJtHA?e=kcuNYH&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0';
    }
    return(
        <div className="dataentry">
            <h2>enter the data</h2>
            <button className="home-login-button h-10 w-max px-2 bg-rose-600 shadow-black shadow-md rounded-md" onClick={gotodata}>Go to upload data</button>
        </div>
    );
  };
  
  export default Dataentry;
