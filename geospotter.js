const base_data = {
  objects: []
}

data = JSON.parse(localStorage.getItem('data'));

console.log(data.objects);

function init_add_button(){
  let button = document.querySelector('.add-button');
  ///console.log(button);
  button.onclick = function(){
    
    let objects_input = document.querySelector('.objects-input');
    let object = objects_input.value;
    if (object == "")
    {
      console.log("Invalid input");
      return;
    }

    data.objects.push(object);
    localStorage.setItem('data', JSON.stringify(data));
    objects_input.value = ""
    console.log(data.objects);  
  }
}

function init_find_button(){
  let button = document.querySelector('.find-button');
  //console.log(button);
  button.onclick = function(){
    let sz = data.objects.length;
    //console.log(sz);
    let id = Math.floor((Math.random() * sz));
    //console.log(data.objects[id]);
    let output = document.querySelector('.objects-output');
    output.value = data.objects[id];

  }
}

init_add_button();
init_find_button();


