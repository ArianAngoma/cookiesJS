function crearCookie(nombre, valor) {
    valor = escape(valor)

    //Creación de la fecha de expiración
    let hoy = new Date();
    hoy.setMonth(hoy.getMonth() + 1);

    //Creación de la cookie
    document.cookie = `${nombre}=${valor};expires=${hoy.toUTCString()};`
}

function borrarCookie(nombre) {
    let hoy = new Date();
    hoy.setMonth(hoy.getMonth() - 1);

    //Eliminación de la cookie
    document.cookie = `${nombre}=x;expires=${hoy.toUTCString()};`
}

function getCookie(nombre) {
    let cookies = document.cookie;

    let cookieArr = cookies.split('; ');

    for (let i = 0; i < cookieArr.length; i++) {
        let parArr = cookieArr[i].split('=')
        cookieArr[i] = parArr;

        if (parArr[0] === nombre) {
            return unescape(parArr[1])
        }
    }

    console.log(cookieArr)

    return undefined;
}

/*crearCookie('nombre', 'Arian')
console.log(getCookie('nombre'))*/
//borrarCookie('nombre')

