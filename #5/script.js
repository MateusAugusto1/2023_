const localStorageName = ' to-do-list-ma'

function newtank(){
    let input = document.getElementById('input--new--task')


    //validação

    if(!input.value)
    {
        alert('Digite algo para inserir em sua lista')
    }
    // else if()
    else
    {
        // inclemente to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
        values.push({
            nameee: input.value
        })
        localStorage.setItem(localStorageName,JSON.stringify(values))
        showValues()



    }

}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")

    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML = '<ol>${values[i]['nameee']}<button>ok</button></ol>'
    }
}
