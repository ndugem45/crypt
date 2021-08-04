let width, height, gradient;
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
    'January',
    'February',
    'March',
    'April',
];
const data = {
    labels: labels,
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
        data: [0, 10, 5, 2, ],
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

for(let i=0; i<totalChart; i++){
    cha.push(new Chart(
        document.querySelector(n+(i+1)),
        config
    ))
}