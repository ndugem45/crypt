function counterSlide(index){
    var indicator = document.querySelector('.slide-indicator > span')
    indicator.innerText = `${index+1}/5`
}
function dotClear(index){
    var child = document.querySelector('.slick-dot').children
    var childSlide = document.querySelector('.slider-crypto > .slick-list > .slick-track').children
    var target = {
        order: document.querySelector('.active-slider-block > .active > h2'),
        img: document.querySelector('.active-slider-block > .active > .item-name > img'),
        name: document.querySelector('.active-slider-block > .active > .item-name > span'),
        price: document.querySelector('.active-slider-block > .active > .item-price'),
        percent: document.querySelector('.active-slider-block > .active > .item-percent'),
    }
    for(var i=0; i<5; i++){
        if(parseInt(child[i].className) == index){
            child[i].style.backgroundColor = 'white'
        }else{
            child[i].style.backgroundColor = '#342A41'
        }

        if(parseInt(childSlide[i].getAttribute('slideIndex')) == index){
            childSlide[i].style.display = 'none'
            var targetData = JSON.parse(childSlide[i].getAttribute('theData')).data
            target.order.innerText = `0${index+1}.`
            target.img.src = targetData[0]
            target.name.innerText = targetData[1]
            target.price.innerText = targetData[2]
            target.percent.innerText = targetData[2]
        }else{
            childSlide[i].style.display = 'block'
        }
    }   
}

$("input[data-type='currency']").on({
    keyup: function() {
    formatCurrency($(this));
    },
    blur: function() { 
    formatCurrency($(this), "blur");
    }
});

var sample = {
    "prices": [
      [
        1625875200000,
        33971.297749757956
      ],
      [
        1625961600000,
        33704.53847440508
      ],
      [
        1626048000000,
        34299.938016517444
      ],
      [
        1626134400000,
        33262.6543524462
      ],
      [
        1626220800000,
        32676.38380096018
      ],
      [
        1626307200000,
        32878.50187357147
      ],
      [
        1626393600000,
        31726.038833909817
      ],
      [
        1626480000000,
        31399.653128682126
      ],
      [
        1626566400000,
        31588.6713510167
      ],
      [
        1626652800000,
        31919.393922554555
      ],
      [
        1626739200000,
        30928.211908849244
      ],
      [
        1626825600000,
        29971.903783612062
      ],
      [
        1626912000000,
        32383.78112696872
      ],
      [
        1626998400000,
        32409.499767175417
      ],
      [
        1627084800000,
        33455.55127272261
      ],
      [
        1627171200000,
        34213.59993217662
      ],
      [
        1627257600000,
        35456.124660766836
      ],
      [
        1627344000000,
        37281.91809217662
      ],
      [
        1627430400000,
        39076.59377063225
      ],
      [
        1627516800000,
        40031.19824444798
      ],
      [
        1627603200000,
        39977.75693922764
      ],
      [
        1627689600000,
        41936.261478677225
      ],
      [
        1627776000000,
        41754.16660435275
      ],
      [
        1627862400000,
        39914.82975848789
      ],
      [
        1627948800000,
        39278.766508103676
      ],
      [
        1628035200000,
        38368.35401197897
      ],
      [
        1628121600000,
        39751.58457509862
      ],
      [
        1628208000000,
        40825.381940449704
      ],
      [
        1628294400000,
        42802.13717474142
      ],
      [
        1628380800000,
        44647.57760300116
      ],
      [
        1628425944000,
        44883.43757532382
      ]
    ]
  }

  var tmp = [];
  sample.prices.forEach((s)=>{
    tmp.push(s[1])
  })






function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function formatCurrency(input, blur) {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.
    
    // get input value
    var input_val = input.val();
    
    // don't validate empty input
    if (input_val === "") { return; }
    
    // original length
    var original_len = input_val.length;

    // initial caret position 
    var caret_pos = input.prop("selectionStart");
        
    // check for decimal
    if (input_val.indexOf(".") >= 0) {

        // get position of first decimal
        // this prevents multiple decimals from
        // being entered
        var decimal_pos = input_val.indexOf(".");

        // split number by decimal point
        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos);

        // add commas to left side of number
        left_side = formatNumber(left_side);

        // validate right side
        right_side = formatNumber(right_side);
        
        // On blur make sure 2 numbers after decimal
        if (blur === "blur") {
        right_side += "00";
        }
        
        // Limit decimal to only 2 digits
        right_side = right_side.substring(0, 2);

        // join number by .
        input_val = "$" + left_side + "." + right_side;

    } else {
        // no decimal entered
        // add commas to number
        // remove all non-digits
        input_val = formatNumber(input_val);
        input_val = "$" + input_val;
        
        // final formatting
        if (blur === "blur") {
        input_val += ".00";
        }
    }
    
    // send updated string to input
    input.val(input_val);

    // put caret back in the right position
    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input[0].setSelectionRange(caret_pos, caret_pos);
}

function nextGuide(p){
    if(p){
        $('.slider-guide').slick('slickNext');
    }else{
        $('.slider-guide').slick('slickPrev');
    }
}

function conversion(){
    var d = {
        "origin": document.querySelector('#currency-field'),
        "oriCurrency": document.querySelector('#originCurrency'),
        "target": document.querySelector('#currency-field-result'),
        "targetCurrency": document.querySelector('#targetCurrency'),
        "factor": 1
    }
    
    switch(d.targetCurrency.value){
        case "btc": 
            d.factor = 0.01
            break;
        case "eth": 
            d.factor = 0.05
            break;
        case "doge": 
            d.factor = 0.2
            break;
    }
    
    d.target.value = parseFloat(d.origin.value.replaceAll("$",'')) * d.factor;
}

$(document).ready(function(){
    $('.slider-crypto').on('init', function(slick){
        dotClear(0)         
    });
    $('.slider-guide').on('init', function(slick){
        counterSlide(0)         
    });
    $('.slider-crypto').on('afterChange', function(slick, currentSlide){
        dotClear(currentSlide.currentSlide)         
    });
    $('.slider-crypto').on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));
    $('.slider-guide').on('afterChange', function(slick, currentSlide){
        counterSlide(currentSlide.currentSlide)      
    });

    $('.slider-crypto').slick({
        rtl: true,
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 994,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.slider-guide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 200,
        responsive:[
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });
    $('.market-table-mobile').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        speed: 200,
    });

        let width, height, gradient;
        var c = 10
        var cha = []
        function getGradient(ctx, chartArea) {
            const chartWidth = chartArea.right - chartArea.left;
            const chartHeight = chartArea.bottom - chartArea.top;
            if (gradient === null || width !== chartWidth || height !== chartHeight) {
                width = chartWidth;
                height = chartHeight;
                gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, 'rgba(255,179,68,0)');   
                gradient.addColorStop(1, 'rgba(255,179,68,0.5)');
            }

            return gradient;
        }

        const labels = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
        ];
        const data = {
            labels: tmp,
            datasets: [{
                borderColor: 'rgb(255, 179, 68, 0.5)',
                backgroundColor: function(context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;

                    if (!chartArea) {
                        // This case happens on initial chart load
                        return null;
                    }
                    return getGradient(ctx, chartArea);
                },
                pointBackgroundColor: 'rgb(255, 255, 255, 0)',
                pointBorderWidth: 0,
                data: tmp,
                fill: true,
            }],
        };
        const config = {
            type: 'line',
            data,
            options: {
                responsive: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        display: false
                    },
                    x: {
                        display: false
                    }
                },
                tooltips: {
                    enabled: false
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                }
            },
        };

        
        var n = detectMob() ? '.myChartm-' : '.myChart-'
        
        for(let i=0; i<c; i++){
            cha.push(new Chart(
                document.querySelector(n+(i+1)),
                config
            ))
        }
    
});