
//Creamos un función que englobará todas las modificaciones realizadas en el DOM con la especificaión 
//'window.onload', de manera que se ejecutará una vez esté la página totalmente cargada.
window.onload = function(){

//Obtenemos el contenedor
var container = document.getElementById("container");

//Creamos el formulario

// Crear nodo de tipo Element
var form = document.createElement("form") 

var formulariolabel = document.createElement ("label");
formulariolabel.textContent = "Rellene los siguientes  apartados:";

//Creamos los campos de texto DNI
var dnilabel = document.createElement ("label");
dnilabel.textContent = "DNI  ";
//Creamos los campos de entrada DNI
var dniinput = document.createElement ("input");
dniinput.type = 'text';
dniinput.name = 'DNI';
dniinput.id = 'campoDNI';

//Creamos los campos de texto Nombre
var nombrelabel = document.createElement ("label");
nombrelabel.textContent = "Nombre   ";
//Creamos los campos de entrada Nombre
var nombreinput = document.createElement ("input");
nombreinput.type = 'text';
nombreinput.name = 'Nombre';
nombreinput.id = 'campoNombre';

//Creamos los campos de texto Apellidos
var apellidoslabel = document.createElement ("label");
apellidoslabel.textContent = "Apellidos   ";
//Creamos los campos de entrada DNI
var apellidosinput = document.createElement ("input");
apellidosinput.type = 'text';
apellidosinput.name = 'Apellidos';
apellidosinput.id = 'campoApellidos';

//Creamos los campos de texto Dirección
var direccionlabel = document.createElement ("label");
direccionlabel.textContent = "Dirección   ";
//Creamos los campos de entrada Dirección
var direccioninput = document.createElement ("input");
direccioninput.type = 'text';
direccioninput.name = 'Direccion';
direccioninput.id = 'campoDireccion';

//Creamos los campos de texto Teléfono
var telefonolabel = document.createElement ("label");
telefonolabel.textContent = "Teléfono   ";
//Creamos los campos de entrada Teléfono
var telefonoinput = document.createElement ("input");
telefonoinput.type = 'text';
telefonoinput.name = 'Teléfono';
telefonoinput.id = 'campoTelefono';



//Creamos el primer radio buttoms
var estiloslabel = document.createElement ("label");
estiloslabel.textContent = "Selecciona tu preferencia:"; 

var opcion1= document.createElement ("input");
opcion1.type = 'radio';
opcion1.name = 'Estilos';
opcion1.value = "Kpop";

var kpoplabel = document.createElement('label');
kpoplabel.textContent = "Kpop";

var opcion2= document.createElement ("input");
opcion2.type = 'radio';
opcion2.name = 'Estilos';
opcion2.value = "Hiphop";

var hiphoplabel = document.createElement('label');
hiphoplabel.textContent = "Hiphop";

var opcion3= document.createElement ("input");
opcion3.type = 'radio';
opcion3.name = 'Estilos';
opcion3.value = "Contemporáneo";

var contemporaneolabel = document.createElement('label');
contemporaneolabel.textContent = "Contemporáneo";

var opcion4= document.createElement ("input");
opcion4.type = 'radio';
opcion4.name = 'Estilos';
opcion4.value = "Jazz";

var jazzlabel = document.createElement('label');
jazzlabel.textContent = "Jazz";


//Creamos el segundo radio buttoms
var horariolabel = document.createElement ("label");
horariolabel.textContent = "Selecciona el horario"; 

var opcion5= document.createElement ("input");
opcion5.type = 'radio';
opcion5.name = 'Horario';
opcion5.value = "Mañana";

var mananalabel = document.createElement('label');
mananalabel.textContent = "Mañana";

var opcion6= document.createElement ("input");
opcion6.type = 'radio';
opcion6.name = 'Horario';
opcion6.value = "Tarde";

var tardelabel = document.createElement('label');
tardelabel.textContent = "Tarde";

var opcion7= document.createElement ("input");
opcion7.type = 'radio';
opcion7.name = 'Horario';
opcion7.value = "Mediodia";

var mediodialabel = document.createElement('label');
mediodialabel.textContent = "Mediodia";

var opcion8= document.createElement ("input");
opcion8.type = 'radio';
opcion8.name = 'Horario';
opcion8.value = "Indirente";

var indiferentelabel = document.createElement('label');
indiferentelabel.textContent = "Indiferente";


//Creamos los checkboxs
var tarifalabel = document.createElement ("label");
tarifalabel.textContent = "Selecciona al menos 2 tarifas de preferencia:"; 

var check1= document.createElement ("input");
check1.type = 'checkbox';
check1.name = 'Preferencias';
check1.value = "Clase suelta";

var clasesueltalabel = document.createElement('label');
clasesueltalabel.textContent = "Clase suelta";

var check2= document.createElement ("input");
check2.type = 'checkbox';
check2.name = 'Preferencias';
check2.value = "Bono semanal";

var bonosemanallabel = document.createElement('label');
bonosemanallabel.textContent = "Bono semanal";

var check3= document.createElement ("input");
check3.type = 'checkbox';
check3.name = 'Preferencias';
check3.value = "Bono mensual";

var bonomensuallabel = document.createElement('label');
bonomensuallabel.textContent = "Bono mensual";

var check4= document.createElement ("input");
check4.type = 'checkbox';
check4.name = 'Preferencias';
check4.value = "Bono trimestral";

var bonotrimestrallabel = document.createElement('label');
bonotrimestrallabel.textContent = "Bono trimestral";

var check5= document.createElement ("input");
check5.type = 'checkbox';
check5.name = 'Preferencias';
check5.value = "Bono anual";

var bonoanuallabel = document.createElement('label');
bonoanuallabel.textContent = "Bono anual";

//Insertamos imágenes
var img1= document.createElement ("img");
img1.src = '/kpop.webp';
img1.width = 100;

var img2= document.createElement ("img");
img2.src = '/bailarina.png';
img2.width = 100;


//Añadimos campo select
var selectlabel= document.createElement ("label");
selectlabel.textContent = "Selecciona la forma de contacto:"

var contacto = document.createElement ('select');
contacto.name= 'Contacto';
contacto.id= 'idContacto';

var contacto1 = document.createElement('option');
contacto1.value= 'email';
contacto1.text= 'Email';

var contacto2 = document.createElement('option');
contacto2.value= 'telefono';
contacto2.text= 'Teléfono';

var contacto3 = document.createElement('option');
contacto3.value= 'whatsapp';
contacto3.text= 'Whatsapp';

contacto.appendChild(contacto1);
contacto.appendChild(contacto2);
contacto.appendChild(contacto3);

//Creamos un text area
var text = document.createElement ('label');
text.textContent = "Añade alguna sugerencia:";

var textarea= document.createElement ("textarea");
textarea.name = 'Sugerencias';
textarea.rows = '5';
check5.cols = "10";



//Agregamos los elementos al formulario
form.appendChild(document.createElement('br'));
form.appendChild(formulariolabel)

form.appendChild(document.createElement('br'));
form.appendChild(dnilabel);
form.appendChild(dniinput);
form.appendChild(document.createElement('br'));
form.appendChild(nombrelabel);
form.appendChild(nombreinput);
form.appendChild(document.createElement('br'));
form.appendChild(apellidoslabel);
form.appendChild(apellidosinput);
form.appendChild(document.createElement('br'));
form.appendChild(direccionlabel);
form.appendChild(direccioninput);
form.appendChild(document.createElement('br'));
form.appendChild(telefonolabel);
form.appendChild(telefonoinput);
form.appendChild(document.createElement('br'));

form.appendChild(document.createElement('br'));
form.appendChild(estiloslabel)
form.appendChild(document.createElement('br'));

form.appendChild(opcion1);
form.appendChild(kpoplabel);
form.appendChild(document.createElement('br'));
form.appendChild(opcion2);
form.appendChild(hiphoplabel);
form.appendChild(document.createElement('br'));
form.appendChild(opcion3);
form.appendChild(contemporaneolabel);
form.appendChild(document.createElement('br'));
form.appendChild(opcion4);
form.appendChild(jazzlabel);
form.appendChild(document.createElement('br'));

form.appendChild(document.createElement('br'));
form.appendChild(horariolabel)

form.appendChild(document.createElement('br'));
form.appendChild(opcion5);
form.appendChild(mananalabel);
form.appendChild(document.createElement('br'));
form.appendChild(opcion6);
form.appendChild(mediodialabel);
form.appendChild(document.createElement('br'));
form.appendChild(opcion7);
form.appendChild(tardelabel);
form.appendChild(document.createElement('br'));
form.appendChild(opcion8);
form.appendChild(indiferentelabel);
form.appendChild(document.createElement('br'));

form.appendChild(document.createElement('br'));
form.appendChild(tarifalabel)
form.appendChild(document.createElement('br'));
form.appendChild(check1);
form.appendChild(clasesueltalabel);
form.appendChild(document.createElement('br'));
form.appendChild(check2);
form.appendChild(bonosemanallabel);
form.appendChild(document.createElement('br'));
form.appendChild(check3);
form.appendChild(bonomensuallabel);
form.appendChild(document.createElement('br'));
form.appendChild(check4);
form.appendChild(bonotrimestrallabel);
form.appendChild(document.createElement('br'));
form.appendChild(check5);
form.appendChild(bonoanuallabel);
form.appendChild(document.createElement('br'));

form.appendChild(img1);
form.appendChild(img2);

form.appendChild(document.createElement('br'));
form.appendChild(selectlabel);
form.appendChild(document.createElement('br'));
form.appendChild(contacto);
form.appendChild(document.createElement('br'));


form.appendChild(document.createElement('br'));
form.appendChild(text);
form.appendChild(document.createElement('br'));
form.appendChild(textarea);



// Añadir el nodo Text como hijo del nodo Element
container.appendChild(form)
}