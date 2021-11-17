function validate(){
    event.preventDefault();
    var username=document.myform.username.value;
    var password=document.myform.password.value;
    axios.post("https://movie-ticketing-server.herokuapp.com/login",{
        name:username,
        password:password
    }).then((response)=>{
        console.log(JSON.stringify(response.data));
    }).catch((err)=>{
        console.log(err);
    })
}