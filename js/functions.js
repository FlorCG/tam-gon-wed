  $(document).ready(function(){
    $('#modal1').modal();
  });


$("#dateCountdown").TimeCircles({
    "animation": "ticks",
    "bg_width": 1,
    "fg_width": 0.04,
    "circle_bg_color": "#e24b8f",
    "time": {
        "Days": {
            "text": "Dias",
            "color": "#CCCCCC",
            "show": true
        },
        "Hours": {
            "text": "Horas",
            "color": "#CCCCCC",
            "show": true
        },
        "Minutes": {
            "text": "Minutos",
            "color": "#CCCCCC",
            "show": true
        },
        "Seconds": {
            "text": "Segundos",
            "color": "#CCCCCC",
            "show": true
        }
    }
});