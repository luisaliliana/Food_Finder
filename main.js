
// API GET REQUEST

function getactivity (){
    
    $.getJSON('http://www.boredapi.com/api/activity?price=0.0', function(activity){


        // console.log(activity)

        function paintactivity(){
            $(`<li class="activity">${activity}</li>`).appendTo('body')

        }
    
            
    
    
    })

    
    
}

$('button').click(getactivity)
// activity.forEach( activity => {
//     $(`<li class="activity">${activity}</li>`).appendTo('body')

    


// })