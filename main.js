
// API GET REQUEST

function getactivity (){
    
    $.getJSON('http://www.boredapi.com/api/activity?price=0.0', function(activity){


        console.log(activity)

        $('.activity p').html(activity.activity)
        $('.type p').html(activity.type)
        $('.participants p').html(activity.participants)
        $('.link a').html(activity.link)
    
            
    
    
    })

    
    
}

$('button').click(getactivity)
// activity.forEach( activity => {
//     $(`<li class="activity">${activity}</li>`).appendTo('body')

    


// })