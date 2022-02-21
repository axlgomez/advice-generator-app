
const loadAdvice = async()=>{
    try{
        const res = await fetch('https://api.adviceslip.com/advice');
        // console.log(res);

        if(res.status === 200){
            const data = await res.json();
            document.querySelector('#number-advice').innerHTML = `Advice #${data.slip.id}`
            document.querySelector('#advice').innerHTML = `${data.slip.advice}`
            // console.log(data.slip.id);

        } else if(res.status === 401){
            console.log('An error ocurred');
        } else if(res.status === 404){
            console.log('Unknown error');
        }

    } catch(error){
        document.querySelector('#number-advice').innerHTML = ""
        document.querySelector('#advice').innerHTML = "Error has ocurred!"
        // console.log('ERROR')
    }
}

document.querySelector('#button').addEventListener('click', loadAdvice);
