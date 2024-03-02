import $ from 'jquery';

const scriptFunction = () => {
    return(
        $(function(){
            let switches = $(".switch-toggle").toArray();
            $(".switch-toggle").click(function(){
                $(this).toggleClass("fa-toggle-on fa-toggle-off");
        
                for (let i = 0; i < switches.length; i++) {
                    if ($(switches[i]).hasClass("fa-toggle-on")) {
                        $(".status").eq(i).text("Complete");
                        $(switches[i]).css("color", "black");
                    } else {
                        $(".status").eq(i).text("In progress");
                        $(switches[i]).css("color", "cadetblue");
                    }
                }
            })
        
            $("#menu-mobile").click(function() {
                $("nav").toggleClass("mobile-nav");
            })
        })
    )
}
export default scriptFunction