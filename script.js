var lst = mylist
let v=0
let topdi = 0
let topmadi = 0
let current = 1

// generatsya quessions
function gen(){
    let cd = lst[v]
    $('#savol').text(cd["ask"])

    for(let i=1, j=1; i<5; i++, j+=2){
        $(`#lrad${i}`).text(cd['rep'][j])
        $(`#rad${i}`).attr("reply", cd['rep'][j-1]=="+")
        //console.log()
    }

    $(`[name=rad]`)
        .prop('checked', false)
}

// keyingisiga utkazadi
$("#ok").click(function(){
    $("#current").text(++current)

    $(`[name=rad]`)
        .prop('checked', false)
        .attr("disabled", false)
        .parent()
        .toggleClass("bg-success", false)
        .toggleClass("bg-danger", false)

    v++
    gen()
})

// javobni chiqaradi
$("[name=rad]").change(function() {
    $('[name=rad]')
        .attr("disabled", true)
        .each(function(index){
            let par = $(this).parent()

            if($(this).attr('reply')=='true')
                par.toggleClass("bg-success")

            if($(this).is(":checked")){
                if($(this).attr('reply')=='true'){
                    $("#topdi").text(++topdi)
                }else{
                    $("#topmadi").text(++topmadi)

                    par.toggleClass("bg-danger")
                }
            }
        })
    
    // foiz husoblash
    let res = $("#topdi").text()*100/$("#current").text()
    res = Math.round(res*100)/100
    $("#foiz").text(res)
})

// theme dark | light
$("#dark").click(function(){
    $('body').toggleClass("bootstrap-dark")
    $(this).toggleClass("btn-dark")
        .toggleClass("border-light")
        .toggleClass("border-dark")
})

$("#jami").text(lst.length)
gen()

// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then(() => { 
            console.log('Service Worker Registered'); 
        });
}

// ro'yhat yuklab olish
/*
fetch("sample.json").then(
    response => response.json()
).then(
    result => {
        // console.log(result)
        lst = result
        $("#jami").text(result.length)
        gen()
    }
)
*/

const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';