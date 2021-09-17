var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ahuachapán', 'Cabañas', 'Chalatenango', 'Cuscatlán', 'La Libertad', 'La paz', 'La Unión', 'Morazán' , 'San Miguel', 'San Salvador', 'Santa Ana', 'San Vicente', 'Sonsonate', 'Usulután'],
        datasets: [{
            label: 'Cantidad de habitantes',
            data: [129750, 149326, 274878 , 216446 , 843500 , 288022 , 372271 , 252500 , 520022 , 2557761 , 631100, 230205, 518522 , 338332 ],
            backgroundColor: [
                '#D96E30',
                '#F23E2E)',
                '#03588C',
                '#F2CF1D',
                '#D95204',
                '#AC8D79',
                '#014040',
                '#F23D5E',
                '#F29441',
                '#021826',
                '#F20505',
                '#13FFD4',
                '#B82A6C',
                '#C2A84D'
            ],
            borderColor: [
                '#D96E30',
                '#F23E2E)',
                '#03588C',
                '#F2CF1D',
                '#D95204',
                '#AC8D79',
                '#014040',
                '#F23D5E',
                '#F29441',
                '#021826',
                '#F20505',
                '#13FFD4',
                '#B82A6C',
                '#C2A84D'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});