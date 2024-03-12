var f = document.forms;
f[0].addEventListener('submit',function(e){
    e.preventDefault();
    if(!(e.target[0].value=='' && e.target[1].value==''))
    {
        fetch('http://localhost:3000/posts/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: e.target[0].value,
            poll: e.target[1].value
          })
    })
    }
})