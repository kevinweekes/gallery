google.charts.load('current',
    {
      packages: ["orgchart"]
    });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');

  data.addRows([
    [{v:'The Minister', f:'Darryl Smith<div style="color:red">The Honorble Minister</div>'},'','The Minister of Sport and Youth Affairs'],
    ['Boxing Board of Control','The Minister',''],
    ['Permanent Secretary','The Minister',''],
    ['Sports Company of Trinidad and Tobago','The Minister',''],
    ['General Administration','Permanent Secretary',''],
    ['Project Management','Permanent Secretary',''],
    ['Human Resource Management','Permanent Secretary',''],
    ['Communication','Permanent Secretary',''],
    ['Internal Audit','Permanent Secretary',''],
    ['Information Technology','Permanent Secretary',''],
    ['Accounts','Permanent Secretary',''],
    ['Legal','Permanent Secretary',''],
    ['Research and Planning','Permanent Secretary',''],
    ['Monitoring and Evaluation','Permanent Secretary',''],
    ['Youth Affairs','Permanent Secretary',''],
    ['Physical Education &amp; Sport','Permanent Secretary',''],
    ['Chaguanas District Office','Permanent Secretary',''],
    ['Point Fortin District Office','Permanent Secretary',''],
    ['Princes Town District Office','Permanent Secretary',''],
    ['San Fernando District Office','Permanent Secretary',''],
    ['Siparia District Office','Permanent Secretary',''],
    ['Sangre Grande District Office','Permanent Secretary',''],
    ['Rio Claro District Office','Permanent Secretary',''],
    ['Malick YF','Permanent Secretary',''],
    ['Los Bajos YF','Permanent Secretary',''],
    ['Laventille YF','Permanent Secretary',''],
    ['California YF','Permanent Secretary',''],
    ['St James YF','Permanent Secretary',''],
    ['Basilon YF','Permanent Secretary',''],
    ['Persto Praesto YDAC','Permanent Secretary',''],
    ['Chatham YDAF','Permanent Secretary',''],
  ]);

  var chart = new google.visualization.OrgChart(document.getElementById('msya'));
  chart.draw(data,
    {
      allowHtml:true,
      allowCollapse:true
    }
  );
}
