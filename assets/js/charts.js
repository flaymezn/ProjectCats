export function initCharts() {
  const pizzaCanvas = document.getElementById('graficoPizza');
  if (pizzaCanvas) {
    new Chart(pizzaCanvas.getContext('2d'), { 
      type: 'pie', data: { labels: ['Despesas Veterinárias', 'Alimentação e Areia', 'Manutenção do Abrigo', 'Administrativo'], datasets: [{ data: [45, 35, 15, 5], backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#cccccc'] }] } 
    });
  }

  const linhaCanvas = document.getElementById('graficoLinha');
  if (linhaCanvas) {
    new Chart(linhaCanvas.getContext('2d'), { 
      type: 'line', data: { labels: ['Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'], datasets: [{ label: 'Gatos Resgatados', data: [8, 12, 10, 15, 13, 18], borderColor: '#36a2eb', fill: false }] } 
    });
  }

  const barrasCanvas = document.getElementById('graficoBarras');
  if (barrasCanvas) {
    new Chart(barrasCanvas.getContext('2d'), { 
      type: 'bar', data: { labels: ['Centro', 'Bairro Norte', 'Bairro Sul', 'Bairro Leste', 'Bairro Oeste'], datasets: [{ label: 'Número de Adoções', data: [15, 22, 18, 10, 14], backgroundColor: '#ff6384' }] } 
    });
  }
}